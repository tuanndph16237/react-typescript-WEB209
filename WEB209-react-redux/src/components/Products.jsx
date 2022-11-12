import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { addProducts, getProducts, removeProducts } from "../actions/product";

const Product = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const products = useSelector((state) => state.products.value);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const onSubmit = (data) => {
    dispatch(addProducts(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("price")} placeholder="price" />
        <button>Submit</button>
      </form>
      <hr />
      {products.map((item) => (
        <div>
          {item.name}
          <button onClick={() => dispatch(removeProducts(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Product;
