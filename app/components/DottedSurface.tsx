"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileMode =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches;
    const SEPARATION = mobileMode ? 180 : 150;
    const AMOUNTX = mobileMode ? 22 : 40;
    const AMOUNTY = mobileMode ? 32 : 60;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const fogColor = 0x050505;
    scene.fog = new THREE.Fog(fogColor, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(0, 355, 1220);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !mobileMode,
      powerPreference: mobileMode ? "low-power" : "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobileMode ? 1 : 2));
    renderer.setSize(width, height);
    renderer.setClearColor(fogColor, 0);

    container.appendChild(renderer.domElement);

    const totalPoints = AMOUNTX * AMOUNTY;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(totalPoints * 3);
    const basePositions = new Float32Array(totalPoints * 3);
    const colors = new Float32Array(totalPoints * 3);
    const pointColor = new THREE.Color(0.97, 0.97, 0.97);

    let pointIndex = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const index = pointIndex * 3;
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        positions[index] = x;
        positions[index + 1] = y;
        positions[index + 2] = z;

        basePositions[index] = x;
        basePositions[index + 1] = y;
        basePositions[index + 2] = z;

        colors[index] = pointColor.r;
        colors[index + 1] = pointColor.g;
        colors[index + 2] = pointColor.b;
        pointIndex += 1;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: mobileMode ? 6.2 : 8,
      vertexColors: true,
      transparent: true,
      opacity: mobileMode ? 0.5 : 0.72,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -0.18;
    scene.add(points);

    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };

    const handlePointerMove = (event: MouseEvent) => {
      pointerTarget.x = event.clientX / window.innerWidth - 0.5;
      pointerTarget.y = event.clientY / window.innerHeight - 0.5;
    };

    const handlePointerLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };

    if (!reducedMotion && !mobileMode) {
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseleave", handlePointerLeave);
    }

    let count = 0;
    let animationId = 0;
    let lastFrameTime = 0;

    const renderFrame = (time = 0) => {
      const positionAttribute = geometry.attributes.position;
      const positionArray = positionAttribute.array as Float32Array;

      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * (mobileMode ? 0.025 : 0.04);
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * (mobileMode ? 0.025 : 0.04);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3;
          const baseX = basePositions[index];
          const baseZ = basePositions[index + 2];
          const wave =
            Math.sin((ix + count) * 0.32) * (mobileMode ? 24 : 38) +
            Math.sin((iy + count) * 0.46) * (mobileMode ? 24 : 38);
          const ripple =
            Math.sin(baseX * 0.00085 + count * 0.6) * (mobileMode ? 10 : 18) +
            Math.cos(baseZ * 0.00115 - count * 0.48) * (mobileMode ? 8 : 12);

          positionArray[index] =
            baseX + pointerCurrent.x * (iy - AMOUNTY / 2) * (mobileMode ? 1.6 : 3.4);
          positionArray[index + 1] = wave + ripple;
          positionArray[index + 2] =
            baseZ + pointerCurrent.y * (ix - AMOUNTX / 2) * (mobileMode ? 2.1 : 4.2);
          i += 1;
        }
      }

      points.rotation.z = pointerCurrent.x * (mobileMode ? 0.03 : 0.08);
      camera.position.x = pointerCurrent.x * (mobileMode ? 56 : 180);
      camera.position.y = 355 + pointerCurrent.y * (mobileMode ? 28 : 90);
      camera.lookAt(0, 0, 0);

      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
      count += mobileMode ? 0.045 : 0.09;
      lastFrameTime = time;
    };

    const animate = (time: number) => {
      animationId = window.requestAnimationFrame(animate);

      if (mobileMode && time - lastFrameTime < 1000 / 24) {
        return;
      }

      renderFrame(time);
    };

    const handleResize = () => {
      const nextWidth = container.clientWidth || window.innerWidth;
      const nextHeight = container.clientHeight || window.innerHeight;

      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
      renderFrame(performance.now());
    };

    window.addEventListener("resize", handleResize);

    if (reducedMotion) {
      renderFrame(performance.now());
    } else {
      animate(performance.now());
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      scene.remove(points);
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-[-1]", className)}
      {...props}
    />
  );
}
