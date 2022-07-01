
import './App.css';
import EmaillContentViewComponent from './Components/EmailContentComponent';
import HeaderView from './Components/HeaderComponent';
import data from "./EmailDataJson/ArrayObjectJson";
import ComponentView from "../src/View/ComponentView"

function App() {
  return (
    <div className="lophils-app">
       <ComponentView
         data={data}
       />
        
    </div>
  );
}

export default App;
