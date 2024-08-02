"use client"

import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {

    const stats = [
        {
            num: 3,
            title: 'Years of Experience',
        },
        {
            num: 8,
            title: 'Projects Completed',
        },
        {
            num: 5,
            title: 'Technologies mastered',
        },
        {
            num: 2,
            title: 'UI/UX Designs',
        },
    ];

    return (
        <div className='flex p-3 gap-20 xsm:gap-0 lg:gap-6'>
            {stats.map((item, index) => (
                <div key={index} className="text-center mx-4">
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className='text-4xl font-bold text-blue-500'
                    />
                    <p className="mt-2 text-lg font-bold text-blue-100 xsm:text-[10px] md:text-xl lg:text-2xl">{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Stats;
