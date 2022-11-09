import React from "react";

type helloProps ={
    name: string;
    age: number;
}
const HelloComponent = (props: helloProps) =>{
    console.log("props", props)
    return <div>Hello {props.age}</div>;
};
export default HelloComponent