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
            <div className="text-center px-5 w-full lg:max-w-[25%] animate-fade -z-50 grid place-items-center lg:place-items-start"
                style={{ fontSize: textFontSize, height: textDivHeight }}>
                Computer Engineering Student @GaTech.
            </div>
            <div ref={imageDivRef} loading="eager" className="lg:max-w-[75%] lg:w-[75%] select-none animate-fade ml-auto -z-50 lg:pt-0 pt-[5vh]">
                <img src={image} alt="Computer Render" onLoad={handleImageLoad} />
            </div>
        </div>
    );
}

export default Graphic;