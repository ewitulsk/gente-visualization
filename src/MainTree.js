import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { placeholderTree } from './placeholderTree';
import axios from 'axios';
import {API_BASE} from './settings'

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.


export default function MainTree(props) {

  //const [tree, setTree] = useState({})

  useEffect(() => {
    async function getTree(){
      const URL = (API_BASE+ "/getPerson" + "?baptismal_mission=" + props.baptismalInfo.baptismal_mission + "&baptismal_number=" + props.baptismalInfo.baptismal_number)
      console.log(URL)
      const result = await axios.get(URL)

      //console.log(result.data)
      props.setTree(result.data)
      
    }
    getTree()
    
  }, [props.baptismalInfo, props.setTree])


  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" class="flex flex-col h-screen">
      <Tree data={props.tree} pathFunc="step" orientation="vertical" nodeSize={ {x:400, y:200} }/>
    </div>
  );
}