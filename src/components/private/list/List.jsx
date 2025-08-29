import { useContext } from "react";
import Goal from "./Goal";
import { ContextMetas } from "../../../memory/Memory";
import { Outlet } from "react-router";


function List() {
  const [state, dispatch] = useContext(ContextMetas);
  return (
    <>
      {state.order.map(id => <Goal key={id} {...state.objects[id]}></Goal>)}
      <Outlet />
    </>
  )
}

export default List;
