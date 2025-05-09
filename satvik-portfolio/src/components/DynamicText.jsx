    import { Typewriter } from 'react-simple-typewriter';
    import { useState, useEffect } from 'react';

    function DynamicText() {

        const [animationCancel, setAnimationCancel] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
            setAnimationCancel(true);
            }, 10000);

            return () => clearTimeout(timer);
        }, []);

        if (!animationCancel) {
            return (
                <div
                    className="absolute font-mona bottom-0 flex items-center justify-center text-white select-none 
                    animate-delay-[5500ms] lg:h-[calc(95vh-4rem)] lg:w-[25%] lg:pl-24 lg:pb-10 
                    lg:text-[4.5vw] lg:animate-fade-right h-[25vh] w-full mb-10 text-[7vw] animate-fade-up text-center"
                    style={{ textShadow: '0 0 3px #fff' }}
                >
                    <Typewriter
                        words={[
                            "Computer Engineering Student at Georgia Tech.",
                            "Software Developer.",
                            "Web Developer.",
                            "Tech Enthusiast.",
                            "Learner.",
                        ]}
                        loop={true}
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={4000}
                    />
                </div>
            );
        } else if (animationCancel) {
            return (
                <div
                    className="absolute font-mona bottom-0 flex items-center justify-center text-white select-none 
                    lg:h-[calc(95vh-4rem)] lg:w-[25%] lg:pl-24 lg:pb-10 lg:text-[4.5vw] h-[25vh] w-full mb-10 text-[7vw] text-center"
                    style={{ textShadow: '0 0 2px #fff' }}
                >
                    <Typewriter
                        words={[
                            "Computer Engineering Student at Georgia Tech.",
                            "Software Developer.",
                            "Web Developer.",
                            "Tech Enthusiast.",
                            "Learner.",
                        ]}
                        loop={true}
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={4000}
                    />
                </div>
            );
        }
    }

    export default DynamicText;