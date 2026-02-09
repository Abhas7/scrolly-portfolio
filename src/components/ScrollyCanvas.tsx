"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { FRAME_FILENAMES } from "@/lib/frames";
import Overlay from "./Overlay";


const ScrollyCanvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(
        smoothProgress,
        [0, 1],
        [0, FRAME_FILENAMES.length - 1]
    );

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        FRAME_FILENAMES.forEach((filename, index) => {
            const img = new Image();
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_FILENAMES.length) {
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });

        setImages(loadedImages);
    }, []);

    // Draw on canvas whenever frameIndex changes
    useEffect(() => {
        const handleDraw = () => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext("2d");
            if (!canvas || !context || images.length === 0) return;

            const currentIndex = Math.round(frameIndex.get());
            const img = images[currentIndex];
            if (!img) return;

            // Object-fit: cover logic
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgRatio;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            }

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        const unsubscribe = frameIndex.on("change", handleDraw);

        // Initial draw
        if (isLoaded) {
            handleDraw();
        }

        return () => unsubscribe();
    }, [frameIndex, images, isLoaded]);

    // Handle Resize
    useEffect(() => {
        const resizeCanvas = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // Redraw after resize
                const currentIndex = Math.round(frameIndex.get());
                const img = images[currentIndex];
                if (img && canvasRef.current) {
                    const canvas = canvasRef.current;
                    const context = canvas.getContext("2d");
                    if (context) {
                        const canvasWidth = canvas.width;
                        const canvasHeight = canvas.height;
                        const imgRatio = img.width / img.height;
                        const canvasRatio = canvasWidth / canvasHeight;

                        let drawWidth, drawHeight, drawX, drawY;

                        if (imgRatio > canvasRatio) {
                            drawHeight = canvasHeight;
                            drawWidth = canvasHeight * imgRatio;
                            drawX = (canvasWidth - drawWidth) / 2;
                            drawY = 0;
                        } else {
                            drawWidth = canvasWidth;
                            drawHeight = canvasWidth / imgRatio;
                            drawX = 0;
                            drawY = (canvasHeight - drawHeight) / 2;
                        }

                        context.clearRect(0, 0, canvasWidth, canvasHeight);
                        context.imageSmoothingEnabled = true;
                        context.imageSmoothingQuality = 'high';
                        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                    }
                }
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out"
                    }}
                />
                {isLoaded && <Overlay scrollYProgress={smoothProgress} />}

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212]">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollyCanvas;
