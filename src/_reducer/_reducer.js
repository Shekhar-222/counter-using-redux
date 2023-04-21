import { ADDBYONE ,RESET,SUBSTRACTBYONE} from "../_constants/constant";



//lets create store object
export const rootReducer = (oldState, action) => {
    let newState = oldState;
  
    switch (action.type) {
      case ADDBYONE:
        
        return {
          ...newState,
          value:newState.value+action.payload
        };
        break;
      case SUBSTRACTBYONE:
        
        return {
          ...newState,
          value:newState.value-action.payload
        };
        break;
      case RESET:
       
        return {
          value: 0
        };
        break;
  
      default:
    }
    return newState;
  };


   