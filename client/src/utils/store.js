//importing the reducer and creating our first store
//redux library has a createStore API that will be imported to help create the store
import { createStore } from "redux";

//importing the reducer
import reducer from "./reducers";

//calling the createStore and passing in the reducer
export default createStore(reducer);

//export the store
