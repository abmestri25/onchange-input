import React,{useState} from 'react';
import './App.css'

// HOOKS in REACTJS
const App = () => {

    const [name, setName] = useState()

    const [result,setResult] = useState()

    const inputEvent = (event) => {
        let name = event.target.value
        setName(name)
    }
    const onSubmit = () => {
        setResult(name)
    }

    // when u want to return multiple elements
    return(
        <>
        <div className="container">
            {/* <h1 className="title" >Welcome to <span className="heading" >ReactJs CLock</span></h1> */}
            
                <h1 className="title">Hello, {result}</h1>
               
                    <input className="field" type='text' placeholder='Enter Your Name' onChange={inputEvent}></input>
                    <button onClick={onSubmit} className="clickme">Submit</button>
   
            
        </div>
        </>
    )
};

export default App;