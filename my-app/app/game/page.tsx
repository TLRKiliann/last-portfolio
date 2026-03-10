"use client";

import { JSX, useEffect, useRef } from "react";
import Image from "next/image";
import style from "@/styles/game.module.scss";

const GamePage = (): JSX.Element => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };

    const points: {x:number,y:number}[] = [];

    for (let i = 0; i < 20; i++) {
      points.push({ x: mouse.x, y: mouse.y });
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {

      ctx.clearRect(0, 0, width, height);

      points[0].x += (mouse.x - points[0].x) * 0.2;
      points[0].y += (mouse.y - points[0].y) * 0.2;

      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.2;
        points[i].y += (points[i - 1].y - points[i].y) * 0.2;
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 2; i++) {

        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;

        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);

      }

      ctx.strokeStyle = "rgba(120, 201, 255, 0.8)";
      ctx.lineWidth = 2;

      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(120, 201, 255, 0.8)";

      ctx.stroke();

      requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

  }, []);

  return (
    <div className={style.container}>

      <canvas ref={canvasRef} className={style.canvas} />

      <div className={style.maindivimg}>
        <div className={style.divbgimg}>
          <Image
            src="/images/green_path.jpg"
            width="500"
            height="500"
            loading="eager"
            className={style.bg_img}
            alt="image bg"
          />
        </div>
      </div>

      <h1 className={style.h1}>Game</h1>

    </div>
  );
};

export default GamePage;