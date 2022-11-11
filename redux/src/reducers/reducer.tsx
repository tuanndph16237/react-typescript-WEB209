import { combineReducers } from "redux";
import counterReducer from "./counter";

// Khởi tạo 1 biến rootReducer
// Nó sử dụng method combineReducers để gom tất cả reducer thành 1 object
// gắn vào store
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
