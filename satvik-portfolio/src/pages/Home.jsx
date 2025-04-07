import NavBar from '../components/NavBar.jsx'
import DynamicText from '../components/DynamicText.jsx'
import LaptopModel from '../components/LaptopModel.jsx';
import MatrixEffect from '../components/MatrixEffect.jsx';

function Home() {
    return(
        <div id = "Home" className="relative h-screen w-auto bg-palette6">
            <MatrixEffect className = "font-terminal" />
            <NavBar />
            <DynamicText />
            <LaptopModel />
        </div>
    );
}
export default Home