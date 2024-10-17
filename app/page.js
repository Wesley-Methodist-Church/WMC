// import components that retrieved from ./components/index.jsx
import { 
  About, 
  Contact, 
  Footer, 
  History, 
  Jumbotron, 
  Prayer, 
  Values, 
  VisionMission 
} from './components';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-16">
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