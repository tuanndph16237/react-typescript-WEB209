const initialState = { value: [], loading: false };

const productReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        value: action.payload
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        value: [...state.value, action.payload]
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        value: state.value.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};
export default productReducer;
