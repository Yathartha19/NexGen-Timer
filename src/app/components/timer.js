import TimerCard from "./timer-card.js"

function Timer({days, hours, minutes, seconds}) {
  return <div className="flex gap-4 text-stone-200 font-bold">
    <TimerCard digit={days} unit="Days" />
    <div className="text-8xl flex flex-col items-center py-[40px]">:</div>
    <TimerCard digit={hours} unit="Hours" />
    <div className="text-8xl flex flex-col items-center py-[40px]">:</div>
    <TimerCard digit={minutes} unit="Minutes" />
    <div className="text-8xl flex flex-col items-center py-[40px]">:</div>
    <TimerCard digit={seconds} unit="Seconds" />
  </div>
}

export default Timer
