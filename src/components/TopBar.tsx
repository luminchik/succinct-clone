'use client';

import { useState } from 'react';
import { Battery, Bluetooth, Wifi, Volume2 } from 'lucide-react';

export default function TopBar() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
    };
  });

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
      });
    }, 60000);

    return () => clearInterval(timer);
  });

  const formattedTime = `${time.hours % 12 || 12}:${time.minutes.toString().padStart(2, '0')} ${time.hours >= 12 ? 'PM' : 'AM'}`;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];

  return (
    <header className="z-1 flex h-7 w-full items-center justify-between rounded-t-[4px] bg-gradient-to-b from-[#FDFDFD] via-[#EAEAEA] to-white px-2 shadow-[0px_2px_10px_3px_rgba(0,0,0,0.25),inset_0px_1px_0px_0px_rgba(255,255,255,0.40),inset_0px_-1px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex items-center">
        <a className="h-6 p-1 hover:bg-black/10" href="/about">
          <img alt="Succinct Logo" width="12" height="12" className="no-drag select-none" src="/images/succinct-icon-pink.svg" />
        </a>
        
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-neutral-900 hover:text-neutral-900/80 active:text-neutral-900/60 h-6 select-none px-2 py-0 text-sm hover:bg-black/5 data-[state=open]:bg-black/10">
          <p className="font-oracle font-bold">Crisis</p>
        </button>
        
        <button className="items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-neutral-900 hover:text-neutral-900/80 active:text-neutral-900/60 h-6 select-none px-2 py-0 text-sm hover:bg-black/5 data-[state=open]:bg-black/10 hidden sm:block">
          <p className="font-oracle">File</p>
        </button>
        
        <button className="items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-neutral-900 hover:text-neutral-900/80 active:text-neutral-900/60 h-6 select-none px-2 py-0 text-sm hover:bg-black/5 data-[state=open]:bg-black/10 hidden sm:block">
          <p className="font-oracle">Edit</p>
        </button>
        
        <button className="items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-neutral-900 hover:text-neutral-900/80 active:text-neutral-900/60 h-6 select-none px-2 py-0 text-sm hover:bg-black/5 data-[state=open]:bg-black/10 hidden sm:block">
          <p className="font-oracle">View</p>
        </button>
      </div>
      
      <div className="flex items-center">
        <div className="mr-2 flex gap-2 text-sm font-medium">
          <span className="hidden sm:block">Balance: </span>0.00 Credits
        </div>
        
        <button className="justify-center whitespace-nowrap text-sm font-medium p-1 items-center gap-1 rounded-none px-1 hidden md:flex">
          <Battery className="w-5 h-5" />
        </button>
        
        <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium p-1 rounded-none px-1 hidden md:flex">
          <Bluetooth className="w-4 h-4" />
        </button>
        
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium p-1 rounded-none px-1">
          <Wifi className="w-4 h-4" />
        </button>
        
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium p-1 rounded-none px-1">
          <Volume2 className="w-4 h-4" />
        </button>
        
        <p className="font-oracle ml-2 select-none text-sm">
          <span className="hidden md:inline">{day} {formattedTime}</span>
          <span className="md:hidden">{formattedTime}</span>
        </p>
      </div>
    </header>
  );
}