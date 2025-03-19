'use client';

import { useState } from 'react';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import WindowHeader from '@/components/WindowHeader';
import DesktopNavbar from '@/components/DesktopNavbar';
import LeaderboardTable from '@/components/LeaderboardTable';
import RisingStars from '@/components/RisingStars';
import DesktopIcons from '@/components/DesktopIcons';
import Dock from '@/components/Dock';
import Grid from '@/components/Grid';

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-cover bg-center" 
         style={{ backgroundImage: 'url("/images/background/os-background.png")', backgroundColor: '#D94AC1' }}>
      
      {/* Top macOS-like menu bar */}
      <TopBar />
      
      <main className="relative flex w-full flex-1 flex-col items-end justify-start">
        <div className="pointer-events-none absolute inset-0 flex px-4 py-1">
          <div className="pointer-events-none z-20 flex h-full w-full flex-col items-center justify-center">
            <div className="flex h-full w-full max-w-screen-2xl flex-col rounded-t-lg shadow-[0_5px_10px_4px_rgba(0,0,0,0.4)] pointer-events-auto overflow-hidden bg-black">
              
              {/* Window title bar */}
              <WindowHeader title="Crisis of Trust" />
              
              <div className="relative flex w-full flex-1 flex-col items-start justify-center">
                <div className="absolute flex h-full w-full items-center justify-center overflow-y-auto">
                  <div className="flex h-full w-full flex-col bg-black pt-4">
                    <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col">
                      
                      {/* Desktop navbar with menu items */}
                      <DesktopNavbar isConnected={isConnected} onConnect={() => setIsConnected(true)} />
                      
                      <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center px-4 text-white">
                        <div className="flex w-full flex-col gap-6">
                          
                          {/* Call to action banner */}
                          <div className="flex w-full gap-6">
                            <a className="w-full" href="/deposit">
                              <div className="group relative w-full cursor-pointer overflow-hidden border-4 border-succinct-pink px-4 py-2">
                                <div className="absolute inset-0 origin-left scale-x-0 transform bg-succinct-pink ease-linear group-hover:scale-x-100" 
                                     style={{ transition: 'transform 0.3s linear' }}></div>
                                <p className="font-oracle-triple relative transition-[color] group-hover:text-white duration-[800ms] select-none text-white">
                                  Looking to rank on the leaderboard and earn stars?
                                  <span className="ml-2 inline-flex items-center font-semibold text-succinct-pink transition-[color] group-hover:text-white duration-[800ms] select-none">
                                    <span className="font-oracle-triple">Join now</span>
                                    <span className="ml-1 transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">→</span>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                          
                          {/* Stats display with globe */}
                          <div className="relative z-10 flex flex-col gap-4 overflow-hidden border-4 border-succinct-pink p-4">
                            <div className="absolute inset-0 h-full w-full bg-black/20 pb-4 backdrop-blur-md">
                              <div id="tsparticles" className="h-full w-full"></div>
                            </div>
                            
                            <div className="z-10 flex w-32 flex-col gap-4">
                              <div className="flex w-36 flex-col gap-2 text-left">
                                <div className="h-6">
                                  <p className="select-none font-viafont uppercase whitespace-nowrap text-succinct-pink fade-in">
                                    <span className="font-viafont uppercase whitespace-nowrap text-succinct-pink">Stars<span className="font-oracle"></span></span>
                                  </p>
                                </div>
                                <div className="w-full p-2 font-oracle-triple text-lg font-bold bg-succinct-pink text-white">
                                  {isConnected ? '0' : '-'}
                                </div>
                              </div>
                              
                              <div className="flex w-36 flex-col gap-2 text-left">
                                <div className="h-6">
                                  <p className="select-none font-viafont uppercase whitespace-nowrap text-arcade-blue fade-in">
                                    <span className="font-viafont uppercase whitespace-nowrap text-arcade-blue">Proofs<span className="font-oracle"></span></span>
                                  </p>
                                </div>
                                <div className="w-full p-2 font-oracle-triple text-lg font-bold bg-arcade-blue text-black">
                                  {isConnected ? '0' : '-'}
                                </div>
                              </div>
                              
                              <div className="flex w-36 flex-col gap-2 text-left">
                                <div className="h-6">
                                  <p className="select-none font-viafont uppercase whitespace-nowrap text-arcade-blue fade-in">
                                    <span className="font-viafont uppercase whitespace-nowrap text-arcade-blue">Cycles<span className="font-oracle"></span></span>
                                  </p>
                                </div>
                                <div className="w-full p-2 font-oracle-triple text-lg font-bold bg-arcade-blue text-black">
                                  {isConnected ? '0' : '-'}
                                </div>
                              </div>
                            </div>
                            
                            <div className="z-1 absolute left-1/2 top-2/3 mx-auto aspect-square w-3/4 -translate-x-1/2">
                              <Image 
                                alt="Globe" 
                                src="/images/arcade/globe.svg" 
                                fill 
                                className="no-drag spin-slow select-none" 
                              />
                            </div>
                            
                            <div className="relative z-20 mt-8 flex h-6 w-full justify-between">
                              {Array(25).fill(0).map((_, i) => (
                                <div key={i} className="h-8 w-[2px] bg-succinct-pink"></div>
                              ))}
                              
                              <div className="absolute bottom-10 right-0 hidden items-center justify-center gap-2 sm:flex">
                                <p className="font-viafont uppercase text-succinct-pink">
                                  {isConnected ? '0.00 USDC' : 'Sign in to see balance'}
                                </p>
                              </div>
                            </div>
                            
                            <div className="absolute right-4 top-4 flex flex-col gap-4">
                              <div className="flex items-start justify-end gap-4">
                                <div className="flex justify-end gap-4">
                                  <div className="flex flex-col gap-1">
                                    <div className="font-viafont text-succinct-pink">X</div>
                                    <div className="flex h-20 w-3 items-end border border-succinct-pink px-[3px]">
                                      <div className="w-full bg-succinct-pink animate-x-height"></div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="font-viafont text-succinct-pink">Y</div>
                                    <div className="flex h-20 w-3 items-end border border-succinct-pink px-[3px]">
                                      <div className="w-full bg-succinct-pink animate-y-height"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="relative z-10 mt-16 hidden flex-col items-end gap-1 sm:flex">
                                <p className="font-viafont text-sm font-bold uppercase text-succinct-pink">3562.5 MHz</p>
                                <div className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 bg-succinct-pink"></div>
                                <div className="h-[2px] w-48 bg-succinct-pink"></div>
                                <p className="font-viafont text-sm font-bold uppercase text-succinct-pink">PROVERS: 23,476</p>
                              </div>
                            </div>
                            
                            <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block">
                              <p className="font-oracle-triple w-96 text-center text-lg leading-6 text-succinct-pink">
                                Welcome to the Succinct Network. Help restore trust, earn stars, and secure humanity's future!
                              </p>
                            </div>
                          </div>
                          
                          {/* Leaderboard and Rising Stars section */}
                          <div className="mb-8 flex flex-col gap-6 lg:flex-row">
                            <LeaderboardTable />
                            <RisingStars />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Icons grid */}
        <DesktopIcons />
        
      </main>
      
      {/* Dock at the bottom */}
      <Dock />
      
      {/* Grid background effect */}
      <Grid />
    </div>
  );
}