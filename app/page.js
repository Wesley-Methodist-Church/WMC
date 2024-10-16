// import components that retrieved from ./components/index.jsx
import { 
  About, 
  Contact, 
  Footer, 
  History, 
  Jumbotron, 
  Navbar, 
  Prayer, 
  Values, 
  VisionMission 
} from './components';

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-12">
      <Navbar/>
      <Jumbotron/>
      <About/>
      <Values/>
      <VisionMission/>
      <History/>
      <Prayer/>
      <Contact/>
      <Footer/>
    </div>
  );
}