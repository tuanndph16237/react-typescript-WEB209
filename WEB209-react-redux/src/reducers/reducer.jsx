import { combineReducers } from "redux";
import counterReducer from "./counter";
import productReducer from "./products";

// Khởi tạo 1 biến rootReducer
// Nó sử dụng method combineReducers để gom tất cả reducer thành 1 object
// gắn vào store
const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer
});

export default rootReducer;
