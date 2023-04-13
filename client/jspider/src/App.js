import './App.css';
import NavBar from './Components/Navbar';
import Slider from './Components/Carousel';
import CourseCard from './Components/CourseCard';
import RegForm from './Components/RegForm';
import data from "./course.json"

function App() {
  return (
    <div className="App">
     <NavBar />
     <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
     <Slider />
     </div>
     <CourseCard data={data}/>
     <RegForm data={data}/>
    </div>
  );
}

export default App;
