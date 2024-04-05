
import { combineReducers } from "redux";
import { productReducer , selectProductReducer } from './ProductReducer';

const reducers = combineReducers({
   AllProducts:productReducer,
   product:selectProductReducer,
})

export default reducers;