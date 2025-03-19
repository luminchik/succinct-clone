import React from 'react';

interface WindowHeaderProps {
  title: string;
}

export default function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className="relative z-20 flex min-h-6 flex-col rounded-t-lg bg-gradient-to-b from-window-menu-bar via-window-menu-bar-gradient to-window-menu-bar px-2 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
      <div className="flex w-full items-center justify-center">
        <div className="flex gap-2 absolute left-2">
          {/* Red close button */}
          <button className="relative flex h-[12px] w-[12px] items-center justify-center rounded-full px-1 py-1 font-medium text-black shadow-[0_0px_1px_1px_rgba(0,0,0,0.8)] disabled:pointer-events-none disabled:bg-neutral-400 disabled:opacity-50 transition-all duration-100 active:brightness-110"
            style={{ background: 'linear-gradient(rgb(255, 0, 0) 20%, rgba(255, 0, 0, 0.2) 100%)', border: '1px solid rgb(255, 0, 0)' }}>
            <div className="absolute left-1/2 top-[1px] h-[4px] w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-button-glare-from to-transparent"></div>
            <div className=""></div>
          </button>
          
          {/* Yellow minimize button */}
          <button className="relative flex h-[12px] w-[12px] items-center justify-center rounded-full px-1 py-1 font-medium text-black shadow-[0_0px_1px_1px_rgba(0,0,0,0.8)] disabled:pointer-events-none disabled:bg-neutral-400 disabled:opacity-50 transition-all duration-100 active:brightness-110"
            style={{ background: 'linear-gradient(rgb(255, 165, 0) 20%, rgba(255, 165, 0, 0.2) 100%)', border: '1px solid rgb(255, 165, 0)' }}>
            <div className="absolute left-1/2 top-[1px] h-[4px] w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-button-glare-from to-transparent"></div>
            <div className=""></div>
          </button>
          
          {/* Green maximize button */}
          <button className="relative flex h-[12px] w-[12px] items-center justify-center rounded-full px-1 py-1 font-medium text-black shadow-[0_0px_1px_1px_rgba(0,0,0,0.8)] disabled:pointer-events-none disabled:bg-neutral-400 disabled:opacity-50 transition-all duration-100 active:brightness-110"
            style={{ background: 'linear-gradient(rgb(50, 205, 50) 20%, rgba(50, 205, 50, 0.2) 100%)', border: '1px solid rgb(50, 205, 50)' }}>
            <div className="absolute left-1/2 top-[1px] h-[4px] w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-button-glare-from to-transparent"></div>
            <div className=""></div>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="">
            <img alt="Application Icon" width="10" height="10" className="no-drag select-none" src="/images/succinct-icon-pink.svg" />
          </div>
          <p className="font-oracle select-none text-sm">{title}</p>
        </div>
      </div>
      
      <div className="w-full"></div>
    </div>
  );
}