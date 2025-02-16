import NavBar from '../components/NavBar.jsx'
import Graphic from '../components/Graphic.jsx'
import Terminal from '../components/Terminal.jsx';
import LaptopModel from '../components/LaptopModel.jsx';

function Home() {
    return(
        <div id = "Home" className="relative">
            <NavBar />
            <Graphic />
            <LaptopModel />
        </div>
    );
}
export default Home