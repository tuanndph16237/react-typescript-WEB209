export const getProducts = () => async (dispatch) =>{
    try{
        const response = await fetch(
            "http://localhost:3000/products"
        );
        const data = await response.json();
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }catch (error) {}
};

export const addProducts = (product) => async (dispatch) =>{
    try {
        const response = await fetch(
            "http://localhost:3000/products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }
        );
        const data = await response.json();
        dispatch({
            type: "ADD_PRODUCTS",
            payload: data
        });
    }catch (error) {}
};
export const removeProducts = (product) => async (dispatch) =>{
    try{
        const response = await fetch(
            "http://localhost:3000/products" + id,
            {
                method: "DELETE"
            }
        );
        await response.json();
        dispatch({
            type: "DELETE_PRODUCTS",
            payload: id
        })
    }catch (error) {}
};
