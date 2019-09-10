const initialState = {
  tasks: []
};

const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: action.taskId, bodyTask: action.newTask, isDone: false }
        ]
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter(el => {
          return el.id !== action.taskId;
        })
      };
    }
    case 'UPDATE_TASK': {
      return {
        ...state,
        tasks: state.tasks.map(el => {
          return el.id === action.taskId ? { ...el, isDone: action.isDone } : el;
        })
      };
    }
    default: {
      return state;
    }
  }
};


export default addTaskReducer;
