import { createStore } from "redux";
import compute from './reducers/count'

export default createStore(compute)