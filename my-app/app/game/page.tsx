"use client";

import { JSX, useEffect, useRef } from "react";
import Image from "next/image";
import style from "@/styles/game.module.scss";

const GamePage = (): JSX.Element => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: 0, y: 0 };
    let prev = { x: 0, y: 0 };

    const colors = [
      "#ffffff",
      "#7df9ff",
      "#c77dff",
      "#ffd166",
      "#ff4d6d"
    ];

    const mouseMove = (e: MouseEvent) => {
      prev.x = mouse.x;
      prev.y = mouse.y;

      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", mouseMove);

    const animate = () => {

      // fade progressif du canvas (fait disparaître les traits)
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const color = colors[Math.floor(Math.random() * colors.length)];

      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(mouse.x, mouse.y);

      ctx.strokeStyle = color;
      ctx.lineWidth = 4;

      ctx.shadowColor = color;
      ctx.shadowBlur = 15;

      ctx.stroke();

      requestAnimationFrame(animate);

    };

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <div>

      <canvas ref={canvasRef} className={style.starCanvas} />

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

      <div className={style.container}></div>

    </div>
  );
};

export default GamePage;