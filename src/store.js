
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./_reducer/_reducer";




  
 export const storeObject = createStore(rootReducer, { value: 0 });