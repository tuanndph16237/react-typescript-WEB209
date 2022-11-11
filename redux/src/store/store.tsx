import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/reducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Tạo 1 store, yêu cầu bắt buộc store phải có reducer
// const store = createStore(rootReducer);

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default persistor;
