// import components that retrieved from ./components/index.jsx
import { 
  About, 
  Connect, 
  Footer, 
  History, 
  Jumbotron, 
  Prayer, 
  Values, 
  VisionMission, 
  Gap
} from './components';

export default function Home() {
  return (
    <div className="flex flex-col mt-16">
      <Jumbotron/>
      <Gap/>
      <About/>
      <Gap/>
      <Values/>
      <VisionMission/>
      <History/>
      <Prayer/>
    </div>
  );
}