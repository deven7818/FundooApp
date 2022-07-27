import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { useHistory, useNavigate } from "react-router-dom";

import "./Signin.css";
import { logIn } from '../../service/userservice';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {

    const [signinObj, setSigninObj] = useState({email:'',password:''});
    const [regObj , setRegObj] = useState({emailBorder:false, emailHelper:'',passwordBorder:false, passwordHelper:''});

    let navigate = useNavigate();

    const takeEmail = (event) => {
        setSigninObj((prevState)=> ({...prevState, email: event.target.value}));
       
    };

    const takePass = (event) => {
        setSigninObj((prevState)=> ({...prevState, password: event.target.value}));
        
    };

    const submit =() =>{
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);

        if(emailTest === true){
            setRegObj((prevState)=> ({...prevState, emailBorder:false,emailHelper:''}))
        }
        else if(emailTest === false){
            setRegObj((prevState)=> ({...prevState,emailBorder:true,emailHelper:'Enter Correct Email'}))
        }

        if(passwordTest === true){
            setRegObj((prevState)=> ({...prevState, passwordBorder:false,passwordHelper:''}))
        }
        else if(passwordTest === false){
            setRegObj((prevState)=> ({...prevState,passwordBorder:true,passwordHelper:'Enter Correct Password'}))
        }
        
        if(emailTest === true && passwordTest === true){
            logIn(signinObj).then((response) => {
                console.log(response);
                localStorage.setItem('token',response.data.id)
                navigate("/dashboard")
        
              }).catch((error) => {
                console.log(error)
              })
        }
        console.log(signinObj);
    }

    return (
        <div className="insection1">
            <div className="inmain">

                <div>
                    <span style={{ color: "#4285f4", fontsize: "20px" }}>G</span>
                    <span style={{ color: "#FF0000", fontsize: "20px" }}>o</span>
                    <span style={{ color: "#f4b400", fontsize: "20px" }}>o</span>
                    <span style={{ color: "#4285f4", fontsize: "20px" }}>g</span>
                    <span style={{ color: "#0f9d58", fontsize: "20px" }}>l</span>
                    <span style={{ color: "#FF0000", fontsize: "20px" }}>e</span>
                </div>
                <p>Sign in</p>
                <p>to continue to gmail</p>

                <div className="ininputBoxDiv">
                    <TextField onChange={takeEmail}  
                        error={regObj.emailBorder} helperText={regObj.emailHelper} 
                        id="outlined-basic" label="Email" 
                        variant="outlined" size='small' 
                        className="intextBox" 

                    />
                </div>
                <div className="ininputBoxDiv">
                    <TextField onChange={takePass} 
                        error={regObj.passwordBorder} helperText={regObj.passwordHelper} 
                        id="outlined-basic" label="Password" 
                        variant="outlined" size='small' 
                        className="intextBox" 

                    />
                    <br />
                </div>
                <div className='inspanText'>
                    <span style={{ color: "#1a73e8", fontsize: "20px", float: 'right' }}>Forget Email?</span>
                </div>

                <div className='inspanText'>
                    <span style={{ textAlign: "left" }}>Not your computer? Use Guest mode to sign in privately.
                        <span className="inspanText1">Learn More</span> </span>

                </div>

                <div className="inbuttonDiv">
                    <Link href="#" underline="none">
                        {'Create Account'}
                    </Link>

                    <Button onClick={submit} variant="contained">Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Signin
