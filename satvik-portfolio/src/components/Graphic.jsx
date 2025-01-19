import image from '../assets/BlenderRender1.png'

function Graphic() {
    return (
        <div className="flex flex-wrap-reverse justify-between items-center my-auto py-10">
            <p className="text-center ml-auto mr-auto select-none text-[10vw] whitespace-pre-wrap xl:text-7xl lg:text-5xl">
                Test<br></br>test<br></br>test<br></br>test</p>
            <img src = {image} alt = "Computer Render" loading="eager" className = "lg:max-w-[75%] animate-fade -z-50">
            </img>
        </div>
    )
}
export default Graphic