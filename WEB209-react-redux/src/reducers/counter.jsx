const initialState = { value: 1000, count: 0 };

// Khởi tạo 1 function nhận 2 tham số là state và action
const counterReducer = (state = initialState, action) => {
  // Action nhận vào là 1 object
  // Kiểm tra object type
  switch (action.type) {
    // Nếu giá trị object.type là increment
    case "increment":
      // Trả về 1 object mới
      // ...state : clone lại tất cả thuộc tính cũ
      // tiếp theo là thay đổi giá trị của value
      return { ...state, value: state.value + 1 };
    case "increaseByAmount":
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};
export default counterReducer;
