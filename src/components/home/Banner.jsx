import { fontBangla } from '@/lib/fonts';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center items-center py-10 '>
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span>
                </h2>
                <p className='text-2xl font-bold '>Buy Every Toy Up To <span className='text-5xl text-primary font-black'> 15% Discount</span></p>
                <button className='btn btn-primary btn-outline font-bold mt-10'>Explore Products</button>
            </div>

            <div>
                <Image src={'/assets/hero.png'}
                    alt='Buy Every Toy Up To 15% Discount'
                    width={500}
                    height={400}
                ></Image>
            </div>
        </div>
    );
};

export default Banner;