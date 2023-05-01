import './ExploreContainer.css';
import {IonTextarea} from "@ionic/react";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
        <IonTextarea label={"label"} labelPlacement={"floating"}/>
    </div>
  );
};

export default ExploreContainer;
