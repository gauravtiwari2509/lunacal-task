"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const TabWidget = () => {
    const [activeTab, setActiveTab] = useState('About Me');

    const renderContent = () => {
        switch (activeTab) {
            case 'About Me':
                return <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    <br /><br />
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...

                </p>;
            case 'Experiences':
                return <p>Experience content goes here...</p>;
            case 'Recommended':
                return <p>Recommended content goes here...</p>;
            default:
                return null;
        }
    };

    return (

        <div className='h-[316px] max-w-[720px] bg-[#363C43] text-[#969696] p-5 justify-center items-center rounded-xl px-14 relative'>
            <div className='  flex flex-col gap-28 absolute left-3 top-3'>
                <Image src="/photos/help.svg" alt="help" height={24} width={24} />
                <Image src="/photos/rect.svg" alt="rect" height={24} width={24} />
            </div>
            <div className='w-full h-[49px] text-[#A3ADB2] font-semibold flex gap-2 justify-around items-center bg-black py-[3px] px-4 rounded-2xl lg:justify-between '>
                {['About Me', 'Experiences', 'Recommended'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${activeTab == tab ? 'bg-[#363C43] rounded-2xl p-2 shadow-lg tab-button lg:px-6 text-white' : null} `}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='text-20px max-h-[200px] mt-8 text-justify overflow-y-scroll scrollable-content pr-5'>
                {renderContent()}
            </div>
        </div>
    );
};
export default TabWidget;
