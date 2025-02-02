import { useRef, useState, useEffect } from 'react';
import image from '../assets/BlenderRender1.png';

function Graphic() {
    const mainDivRef = useRef(null);
    const imageDivRef = useRef(null);
    const [textDivHeight, setTextDivHeight] = useState('auto');
    const [textFontSize, setTextFontSize] = useState('auto');

    useEffect(() => {
        const updateTextStyles = () => {
            if (mainDivRef.current && imageDivRef.current) {
                const mainDivHeight = mainDivRef.current.offsetHeight;
                const imageDivHeight = imageDivRef.current.offsetHeight;
                const newTextHeight = mainDivHeight - imageDivHeight;

                if (window.innerWidth < 1024) {
                    setTextDivHeight(newTextHeight > 0 ? `${newTextHeight}px` : 'auto');
                } else {
                    setTextDivHeight('auto');
                }

                if (window.innerWidth < 1024) {
                    const calculatedFontSize = Math.max((mainDivHeight - imageDivHeight) / 7, 20);
                    setTextFontSize(`${calculatedFontSize}px`);
                } else if (window.innerWidth >= 1024) {
                    setTextFontSize('4vw');
                } else {
                    setTextFontSize('auto');
                }
            }
        };

        updateTextStyles();
        window.addEventListener('resize', updateTextStyles);

        return () => {
            window.removeEventListener('resize', updateTextStyles);
        };
    }, []);

    const handleImageLoad = () => {
        if (window.innerWidth < 1024) {
            const mainDivHeight = mainDivRef.current?.offsetHeight || 0;
            const imageDivHeight = imageDivRef.current?.offsetHeight || 0;
            const newTextHeight = mainDivHeight - imageDivHeight;
            setTextDivHeight(newTextHeight > 0 ? `${newTextHeight}px` : 'auto');

            const calculatedFontSize = Math.max((mainDivHeight - imageDivHeight) / 7, 20);
            setTextFontSize(`${calculatedFontSize}px`);
        }
    };

    return (
        <div ref={mainDivRef} className="h-[calc(100vh-4rem)] flex flex-wrap-reverse justify-between items-center">
            <div className="text-palette5 font-montserrat text-center  px-5 w-full lg:max-w-[25%] lg:animate-fade-right animate-fade-up animate-delay-200 grid place-items-center lg:place-items-start"
                style={{ fontSize: textFontSize, height: textDivHeight, textShadow: "1px 1px 1px black"}}>
                Computer Engineer at Georgia Tech.
            </div>
            <div ref={imageDivRef} loading="eager" className="font-barlow lg:max-w-[75%] lg:w-[75%] select-none ml-auto lg:pt-0 pt-[5vh] animate-ease-in-out animate-fade-down animate-delay-200">
                <p className="text-palette5 absolute text-[7vw] -rotate-[14deg] lg:ml-[6vw] lg:-mt-[5vw] ml-[12vw] -mt-[4vw]" style={{textShadow: "1px 1px 1px black"}}>Satvik</p>
                <p className="text-palette5 absolute rotate-12 text-[7vw] lg:ml-[32vw] lg:mt-[3vw] ml-[44vw] mt-[6vw]" style={{textShadow: "1px 1px 1px black"}}>Malneedi</p>
                <img src={image} alt="Computer Render" onLoad={handleImageLoad}/>
            </div>
        </div>
    );
}

export default Graphic;