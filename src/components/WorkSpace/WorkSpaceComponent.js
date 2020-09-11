import React , {useEffect} from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const model = useSelector((state) => state.model.models);
  const totalRun = useSelector((state)=>state.model.totalRun);
  const graph = useSelector((state)=>state.model.graphData);

  useEffect(() => {
    dispatch(Actions.getAllModelData());
    dispatch(Actions.getNumberOfModel());
    dispatch(Actions.getGraphData());
  }, []);
console.log(graph);
const runs = totalRun[0].totalRun;
const a = graph.map(a=>a.accuracy)
console.log(a)
 const data = [];
  // for(let i= 0; i<3;i++)
  // {
  //   data.push({x:graph[i].runName})
  // }
  for(let i=1;i<4;i++)
  {
    data.push({x:i,y:a[i-1]})
  }
  console.log(data)
// console.log(totalRun);
  return (
    <div>
      <Header></Header>
      <RunTableComponent models={model} totalRuns={runs} ></RunTableComponent>
      <SectionsComponent  models={model}></SectionsComponent>
      <SystemComponent  models={model} graph={data}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
