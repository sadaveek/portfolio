import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Graphic() {

    return (
        <div className='h-[calc(100vh-4rem)] w-[25%] flex pl-10 pb-10 text-center items-center justify-center
         text-white text-7xl animate-fade-right animate-delay-[7000ms]'>
            <Typewriter
                words={[
                    'Computer Engineering Student at Georgia Tech.',
                    'Software Developer.',
                    'Web Developer.',
                    'Tech Enthusiast.',
                    'Learner.',
                ]}
                style = {"text-shadow: 2px 2px 4px #000000;"}
                startDelay={2}
                loop={true}
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={3000}
            />
        </div>
    );
}

export default Graphic;