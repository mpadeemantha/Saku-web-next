"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface LandingPageClientProps {
  onStart?: () => void;
}

export default function LandingPageClient({ onStart }: LandingPageClientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    /* SAKURA IMAGE */
    const sakuraImg = new Image();
    sakuraImg.src = "https://sakujls.lk/wp-content/uploads/2026/02/sakura-png.png";

    /* UTIL */
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    /* WIND */
    let wind = 0;
    const handleMouseMove = (e: MouseEvent) => {
      wind = (e.clientX - w / 2) * 0.00015;
    };
    window.addEventListener("mousemove", handleMouseMove);

    /* PETAL CLASS */
    class Petal {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      rot: number = 0;
      spin: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = rand(0, w);
        this.y = rand(-h, -50);
        this.vx = rand(-0.3, 0.3);
        this.vy = rand(0.8, 1.6);
        this.size = rand(20, 80);
        this.rot = rand(0, Math.PI * 2);
        this.spin = rand(-0.02, 0.02);
      }

      update() {
        this.x += this.vx + wind;
        this.y += this.vy;
        this.rot += this.spin;

        if (this.y > h + 50) this.reset();
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.drawImage(
          sakuraImg,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    const petals: Petal[] = [];
    for (let i = 0; i < 10; i++) petals.push(new Petal());

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      petals.forEach((p) => {
        p.update();
        if (sakuraImg.complete) p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleStartJourney = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsActive(true);
    setTimeout(() => {
      if (onStart) {
        onStart();
      } else {
        router.push("/home");
      }
    }, 800);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

        .landing-container {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            font-family: 'Manrope', sans-serif;
            background: #fff;
            z-index: 9999;
        }

        /* HERO */
        .hero {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }

        /* SINGLE BACKGROUND */
        .bg {
            position: absolute;
            inset: 0;
            background-image: url("https://sakujls.lk/wp-content/uploads/2026/02/Pink-Bold-Ilustration-Japan-Country-Introduction-Presentation.png");
            background-size: cover;
            background-position: center;
            z-index: 0;
        }

        /* MOBILE BACKGROUND ONLY */
        @media (max-width: 768px) {
            .bg {
                background-image: url("https://sakujls.lk/wp-content/uploads/2026/02/Untitled-design.png");
                background-position: center;
                background-size: cover;
            }
        }

        .bg::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0);
        }

        /* SAKURA */
        #sakura {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
        }

        /* CONTENT */
        .hero-content {
            position: absolute;
            z-index: 5;
            margin-left: 10%;
            margin-right: 40%;
            top: 45%;
            transform: translateY(-40%);
            word-wrap: break-word;
        }

        /* MOBILE FIX */
        @media (max-width: 768px) {
            .hero-content {
                margin-right: 10%;
                margin-top: -10%;
            }
        }

        .hero h1 {
            font-size: clamp(20px, 48px, 38px);
            line-height: 1.2;
            text-transform: uppercase;
            font-weight: 900;
            font-family: "Manrope", sans-serif;
            color: #d3516a;
        }
        /* MOBILE H1 FONT SIZE */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 24px;   
                line-height: 1.25;
                font-weight: 900;
            }
        }

        .hero p {
            margin-top: 10px;
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            color: #000;
            font-family: "Manrope", sans-serif;
        }
        @media (max-width: 768px) {
            .hero p {
                font-size: 16px;   
            }
        }

        .hero-btn {
            font-family: "Manrope", sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
            padding: 12px 28px;
            font-weight: 600;
            background: #d3516a;
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        @media (max-width: 768px) {
            .hero-btn {
                font-size: 16px;   
                line-height: 1.25;
            }
        }

        .hero-btn i {
            font-size: 0.9rem;
        }

        .hero-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
        }

        /* PAGE TRANSITION */
        .page-transition {
            position: fixed;
            inset: 0;
            background: #ffffff;
            z-index: 99999;
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out;
            pointer-events: none;
        }

        .page-transition.active {
            transform: translateY(0);
            pointer-events: all;
        }
      ` }} />

      <div className="landing-container">
        <section className="hero">
          <div className="bg"></div>

          <canvas id="sakura" ref={canvasRef}></canvas>

          <div className="hero-content">
            <h1>WELCOME TO <br /> SAKU JAPANESE LANGUAGE SCHOOL <br /> (PVT) LTD</h1>
            <p>Learn Japanese | Build Skills | Achieve Japan Dreams</p>
            <a
              href="/home"
              className="hero-btn"
              id="startJourney"
              onClick={handleStartJourney}
            >
              Start Your Journey <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </section>

        <div className={`page-transition ${isActive ? "active" : ""}`} id="pageTransition"></div>
      </div>
    </>
  );
}
