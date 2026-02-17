"use client";

import { useEffect, useRef } from "react";

export default function EnergyRibbon() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.003;
      const svg = svgRef.current;
      if (!svg) return;

      const paths = svg.querySelectorAll<SVGPathElement>(".ribbon-path");
      paths.forEach((path, i) => {
        const offset = i * 30;
        const shift = Math.sin(time + i * 0.5) * 8;
        const yShift = Math.cos(time + i * 0.3) * 4;
        path.setAttribute(
          "d",
          generateRibbonPath(offset + shift, yShift, i)
        );
      });

      const gradientStops =
        svg.querySelectorAll<SVGStopElement>(".gradient-shift");
      gradientStops.forEach((stop, i) => {
        const offset = ((Math.sin(time * 0.8 + i * 1.2) + 1) / 2) * 100;
        stop.setAttribute("offset", `${offset}%`);
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="grain relative h-full w-full overflow-hidden" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 600 600"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="ribbon-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              className="gradient-shift"
              offset="0%"
              stopColor="#818cf8"
              stopOpacity="0.6"
            />
            <stop
              className="gradient-shift"
              offset="30%"
              stopColor="#c084fc"
              stopOpacity="0.5"
            />
            <stop
              className="gradient-shift"
              offset="60%"
              stopColor="#f472b6"
              stopOpacity="0.4"
            />
            <stop
              className="gradient-shift"
              offset="100%"
              stopColor="#34d399"
              stopOpacity="0.3"
            />
          </linearGradient>
          <linearGradient
            id="ribbon-gradient-2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              className="gradient-shift"
              offset="0%"
              stopColor="#60a5fa"
              stopOpacity="0.4"
            />
            <stop
              className="gradient-shift"
              offset="40%"
              stopColor="#a78bfa"
              stopOpacity="0.35"
            />
            <stop
              className="gradient-shift"
              offset="70%"
              stopColor="#f9a8d4"
              stopOpacity="0.3"
            />
            <stop
              className="gradient-shift"
              offset="100%"
              stopColor="#6ee7b7"
              stopOpacity="0.25"
            />
          </linearGradient>
          <linearGradient
            id="ribbon-gradient-3"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop
              className="gradient-shift"
              offset="0%"
              stopColor="#c4b5fd"
              stopOpacity="0.3"
            />
            <stop
              className="gradient-shift"
              offset="50%"
              stopColor="#93c5fd"
              stopOpacity="0.25"
            />
            <stop
              className="gradient-shift"
              offset="100%"
              stopColor="#a7f3d0"
              stopOpacity="0.2"
            />
          </linearGradient>
          <filter id="ribbon-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Background glow */}
        <ellipse
          cx="300"
          cy="300"
          rx="200"
          ry="200"
          fill="url(#ribbon-gradient-3)"
          opacity="0.15"
          filter="url(#ribbon-blur)"
        />

        {/* Main ribbon paths */}
        <path
          className="ribbon-path"
          d={generateRibbonPath(0, 0, 0)}
          fill="none"
          stroke="url(#ribbon-gradient-1)"
          strokeWidth="40"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          className="ribbon-path"
          d={generateRibbonPath(30, 0, 1)}
          fill="none"
          stroke="url(#ribbon-gradient-2)"
          strokeWidth="32"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          className="ribbon-path"
          d={generateRibbonPath(60, 0, 2)}
          fill="none"
          stroke="url(#ribbon-gradient-3)"
          strokeWidth="24"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Thin accent lines */}
        <path
          className="ribbon-path"
          d={generateRibbonPath(-15, 0, 3)}
          fill="none"
          stroke="url(#ribbon-gradient-1)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          className="ribbon-path"
          d={generateRibbonPath(75, 0, 4)}
          fill="none"
          stroke="url(#ribbon-gradient-2)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}

function generateRibbonPath(
  offset: number,
  yShift: number,
  index: number
): string {
  const baseY = 150 + index * 50;
  const amplitude = 80 - index * 10;

  return `M -50 ${baseY + offset + yShift}
    C 100 ${baseY - amplitude + offset + yShift},
      200 ${baseY + amplitude + offset + yShift},
      300 ${baseY + offset + yShift}
    S 500 ${baseY - amplitude * 0.7 + offset + yShift},
      650 ${baseY + 20 + offset + yShift}`;
}
