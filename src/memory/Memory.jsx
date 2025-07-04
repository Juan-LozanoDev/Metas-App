import { createContext, useReducer } from "react"

export const ContextMetas = createContext(null);

const memory = localStorage.getItem('goals');

const initialArg = memory ? JSON.parse(memory) 
: {
  order: [],
  objects: {}
};


function reducer(state, action) {
  switch (action.type) {
    case 'put': {
      const goals = action.goals;
      const newState = {
        order: goals.map(goal => goal.id),
        objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal}), {})
      };
      localStorage.setItem('goals', JSON.stringify(newState));
      return newState;
    }
    case 'create': {
      const id = Math.random().toString();
      const newGoal = {...action.goal, "id": id}
      const newState = {
        order: [...state.order, id],
        objects: {...state.objects, [id]: newGoal}
      };
      localStorage.setItem('goals', JSON.stringify(newState));
      return newState;
    }

    case 'update': {
      const id = action.goal.id;
      state.objects[id] = {
        ...state.objects[id],
        ...action.goal
      }
      const newState = {...state};
      localStorage.setItem('goals', JSON.stringify(newState));
      return newState
      };

      case 'erase': {
      const id = action.id;
      const newOrder = state.order.filter(item => item!==id);
      delete state.objects[id];
      const newState = {
        order: newOrder,
        objects: state.objects
      };
      localStorage.setItem('goals', JSON.stringify(newState));
      return newState;
      };

      default:
        throw new Error();
  }
}

function Memory({children}) {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <ContextMetas.Provider value={[state, dispatch]}>
        {children}
    </ContextMetas.Provider>
  )
}

export default Memory