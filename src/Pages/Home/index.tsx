import '../../App.css';
import {StageOne} from '../../Components/Stage1Home'
import { StageTwo } from '../../Components/Stage2Home';
import { StagesThree } from '../../Components/Stage3Home';
import { StageFour } from '../../Components/Stage4Home';
import { StageFive } from '../../Components/Stage5Home';


export function HomePage() {
  return (
    <>
      <StageOne />
      <StageTwo />
      <StagesThree />
      <StageFour />
      <StageFive />
    </>
  );
}

