// Importing components from './components/index.jsx' for centralized and easy access
import {
  Jumbotron,
  Prayer,
  Values,
  VisionMission,
  Gap,
  Upcoming,
} from "./components";

// Home Page
export default function Home() {
  return (
    <div className="flex flex-col mt-20">
      <Jumbotron />
      {/* To make space between components */}
      <Gap />
      <Upcoming />
      <Gap />
      {/* <Gap /> */}
      <Values />
      <Gap />
      <VisionMission />
      <Gap />
      {/* <History /> */}
      {/* <Gap /> */}
      <Prayer />
    </div>
  );
}
