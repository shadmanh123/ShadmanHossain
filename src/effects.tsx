import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Full-viewport matrix "digital rain" rendered behind all content.
 * Faint terminal green, respects prefers-reduced-motion.
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const glyphs = "01</>{}[]#$_ABCDEF0123456789ハミヒ".split("");
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
    };
    resize();

    const draw = () => {
      ctx.fillStyle = "rgba(10,12,10,0.09)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(51,255,102,0.55)";
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let frame = 0;
    let raf = 0;
    const loop = () => {
      frame++;
      // throttle to ~15fps for a calmer, cheaper effect
      if (frame % 4 === 0) draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      // Single static pass, no animation.
      ctx.fillStyle = "#0a0c0a";
      ctx.fillRect(0, 0, width, height);
    } else {
      loop();
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}

/**
 * Wraps content that fades/slides in the first time it scrolls into view.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
