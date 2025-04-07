import Tilt from "react-parallax-tilt";

function Card({ color, title, image, description }) {
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={2000} glareEnable={true} glareOpacity={0} glareMaxOpacity={0}>
            <div 
                style={{ backgroundColor: color }} 
                className="w-[90%] max-w-5xl sm:h-auto h-[60vh] mx-auto rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl text-white border-white border-4"
            >
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
                    {/* Left column (Title and description) */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h1>
                        <p className="text-sm sm:text-base md:text-lg">{description}</p>
                    </div>
                    
                    {/* Right column (Image) */}
                    <div className="lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
                        <img 
                            src={image} 
                            alt={title}
                            className="w-full object-contain max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-full rounded invert"
                        />
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

export default Card;