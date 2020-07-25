import React,{useState} from 'react';
import './App.css'

// HOOKS in REACTJS
const App = () => {

    // const [name, setName] = useState()

    // this is to fetch the data
    const [Fullname,setFullName] = useState({
        // objects
        firstname : "",
        lastname : "",
        email : "",
        phone : "",
    })



    // this is to get the data
    const inputEvent = (event) => {

        const {value,name } = event.target;

        // function inside function
        setFullName((preValue) => {
            if (name === 'firstname'){
            return{
                firstname : value,
                lastname : preValue.lastname,
                email : preValue.email,
                phone : preValue.phone,
            }
        }
            else if(name === 'lastname'){
            return{
                firstname : preValue.firstname,
                lastname : value,
                email : preValue.email,
                phone : preValue.phone,
            }
        }
            else if(name === 'email'){
            return{
                firstname : preValue.firstname,
                lastname : preValue.lastname,
                email : value,
                phone : preValue.phone,
            }
        }
            else if(name === 'phone'){
            return{
                firstname : preValue.firstname,
                lastname : preValue.lastname,
                email : preValue.email,
                phone : value,
            }
        }
        })    
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form Submitted")
    };

    // to show the data from hooks
    

    // when u want to return multiple elements
    return(
        <>
        <form onSubmit={onSubmit} >
        <div className="container">
            {/* <h1 className="title" >Welcome to <span className="heading" >ReactJs CLock</span></h1> */}
            
                <h1 className="title">Hello, {Fullname.firstname} {Fullname.lastname}</h1>
                    <p className="email"> {Fullname.email} </p>
                    <p className="email"> {Fullname.phone} </p>
                    
               
                    <input 
                    className="field"
                    type='text'
                    placeholder='Enter Your Firstname' 
                    onChange={inputEvent} 
                    value={Fullname.firstname}
                    name="firstname"
                    />

                    <input 
                    className="field"
                    type='text'
                    placeholder='Enter Your Firstname' 
                    onChange={inputEvent} 
                    value={Fullname.lastname}
                    name="lastname"
                    />

                    <input 
                    className="field"
                    type='email'
                    placeholder='Enter Your Email' 
                    onChange={inputEvent} 
                    value={Fullname.email}
                    name="email"
                    />

                    <input 
                    className="field"
                    type='number'
                    placeholder='Enter Your Phone Number' 
                    onChange={inputEvent} 
                    value={Fullname.phone}
                    name="phone"
                    />


                    <button  type='submit' className="clickme">Submit</button>
   
            
        </div>
        </form>
        </>
    )
};

export default App;