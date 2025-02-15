'use client'
import Timer from "./components/timer.js";
import Countdown from 'react-countdown';
import {AuroraBackground} from "./components/aurora-background.js";
import {useRef, useEffect} from "react";

const TIMER_END = '2025-02-16T10:50:00'

export default function Home() {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current.start();
  }, [])

  return (
    <AuroraBackground>
      <Countdown
      ref={timerRef}
      date={TIMER_END}
      autoStart={false}
      renderer={Timer}
      />,
    </AuroraBackground>
  );
}