import MainTree from "./MainTree";
import { SelectionBar } from "./selectionBar";
import {useState} from "react"
import { placeholderTree1 } from "./placeholderTree";


function App() {
  const [baptismalInfo, setBaptismalInfo] = useState({"baptismal_mission": "BP", "baptismal_number": "6"})
  const [tree, setTree] = useState(placeholderTree1)

  return (
    <div>
      <div>
        <SelectionBar setBaptismalInfo={setBaptismalInfo} setTree={setTree}/>
      </div>
      <div>
        <MainTree baptismalInfo={baptismalInfo} tree={tree} setTree={setTree}/>
      </div>
    </div>
    
  );
}

export default App;
