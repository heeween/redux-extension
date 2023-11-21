import { ADD,SUBSTRACT } from "../../constant";
const initialState = 1
export default function compute(preState = initialState, action) {
    switch (action.type) {
        case ADD:
            return preState + 1
        case SUBSTRACT:
            return preState - 1
        default:
            return preState
    }
}