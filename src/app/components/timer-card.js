const TimerCard = ({digit, unit}) => {
  return ( <div className="flex flex-col gap-4 w-max">
      <div className='relative h-48 w-48 overflow-hidden rounded-lg border border-gray-800 p-[1px] backdrop-blur-3xl flex items-center justify-center'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <div className='inline-flex h-[97%] w-[97%] text-[8rem] items-center justify-center rounded-lg bg-gray-800 font-medium text-gray-50 backdrop-blur-3xl'>
          {digit}
        </div>
      </div>
    <div className="flex items-center justify-center text-3xl">{unit}</div>
    </div>
  );
};

export default TimerCard;

