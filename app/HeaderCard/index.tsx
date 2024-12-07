"use client";

// import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./index.module.scss";
import TitleCard from "./TitleCard";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

export default function HeaderCard() {
  useEffect(() => {
    const update = ({ x, y }: MouseEvent) => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };

    const handleOrientation = ({ beta, gamma }: DeviceOrientationEvent) => {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      gsap.set(document.documentElement, {
        "--x": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(-45, 45, -1, 1, beta || 0)
            : gsap.utils.mapRange(-45, 45, -1, 1, gamma || 0)
        ),
        "--y": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma || 0))
            : gsap.utils.mapRange(20, 70, 1, -1, beta || 0)
        ),
      });
    };

    const start = () => {
      if (
        (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS)?.requestPermission &&
        typeof (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission === "function"
      ) {
        (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission?.().then((result) => {
          if (result === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    window.addEventListener("mousemove", update);
    document.body.addEventListener("click", start, { once: true });

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <>
    <TitleCard />
    </>
  );
}
