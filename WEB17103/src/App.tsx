import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './component/Hello/Hello'
import Product from './component/Product/Product'
import Lifecycle from './Lifecycle/Lifecycle'
function App() {
  const [count, setCount] = useState(0)
  function hello(props: {name : string }): string{
    return `Hello ${props.name}`;
  }
  return (
    <div className="App">
      <Product/>
      <Hello name="Nguyen Duc Tuan" age={20}/>
      <Lifecycle/>
    </div>
  )
}

export default App
