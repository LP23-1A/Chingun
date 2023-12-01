import React from 'react';
import upwork from './logo-upwork.svg'

const Exp = ({ children }) => (
    <div className='flex w-224 p-8 flex-col items-start rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)]'>
        <div className='flex items-start gap-12 self-stretch'>
            <div className='flex flex-col items-start gap-3 flex-1'>
                <img src={upwork} alt='upwork logo'></img>
            </div>
            {children}
        </div>
    </div>
);

export default Exp;