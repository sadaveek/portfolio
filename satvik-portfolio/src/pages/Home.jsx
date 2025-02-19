import NavBar from '../components/NavBar.jsx'
import DynamicText from '../components/DynamicText.jsx'
import Terminal from '../components/Terminal.jsx';
import LaptopModel from '../components/LaptopModel.jsx';

function Home() {
    return(
        <div id = "Home" className="relative h-screen w-auto">
            <NavBar />
            <DynamicText />
            <LaptopModel />
        </div>
    );
}
export default Home