import NavBar from '../components/NavBar.jsx'
import Graphic from '../components/Graphic.jsx'

function Home() {
    return(
        <div id = "Home" className="h-screen w-auto bg-gradient-to-b from-palette1 to-palette2">
            <NavBar></NavBar>
            <Graphic></Graphic>
        </div>
    );
}
export default Home