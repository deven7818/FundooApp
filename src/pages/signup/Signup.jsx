import React, { useState } from 'react'

import "./Signup.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import { signUpService } from '../../service/userservice';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const usernameRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup() {

  const [signupObj, setSignupObj] = useState({firstName:'', lastName:'', userName:'', password:'', confirm:''});
  const [regObj, setRegObj] = useState({fnameBorder:false, fnameHelper:'', 
                                        lnameBorder:false, lnameHelper:'', 
                                        usernameBorder:false, usernameHelper:'', 
                                        passwordBorder:false, passwordHelper:'', 
                                        confirmBorder:false, confirmHelper:''
                                      });

  const takeFirstName = (event) => {
    setSignupObj((prevState)=> ({...prevState, firstName:event.target.value}));
  };

  const takeLastName = (event) => {
    setSignupObj((prevState)=> ({...prevState, lastName:event.target.value}));
  };

  const takeUserName = (event) => {
    setSignupObj((prevState)=>({...prevState, userName:event.target.value}));
  };

  const takePassword = (event) => {
    setSignupObj((prevState)=> ({...prevState, password:event.target.value}));
  };

  const confirmPassword = (event) => {
    setSignupObj((prevState)=> ({...prevState, confirm:event.target.value}));
  };

  const submit = () => {
    let fnameTest = fnameRegex.test(signupObj.firstName);
    let lnameTest = lnameRegex.test(signupObj.lastName);
    let usernameTest = usernameRegex.test(signupObj.userName);
    let passwordTest = passwordRegex.test(signupObj.password);

    if(fnameTest === true){
      setRegObj((prevState)=> ({...prevState, fnameBorder:false,fnameHelper:''}))
    }
    else if(fnameTest === false){
      setRegObj((prevState)=> ({...prevState, fnameBorder:true, fnameHelper:'Enter FirstName'}))
    }

    if(lnameTest === true){
      setRegObj((prevState)=>({...prevState, lnameBorder:false, lnameHelper:''}))
    }
    else if(lnameTest === false){
      setRegObj((prevState)=> ({...prevState, lnameBorder:true, lnameHelper:'Enter LastName'}))
    }

    if(usernameTest === true){
      setRegObj((prevState)=> ({...prevState, usernameBorder:false, usernameHelper:''}))
    }
    else if(usernameTest === false){
      setRegObj((prevState)=> ({...prevState, usernameBorder:true, usernameHelper:'Incorrect UserName'}))
    }

    if(passwordTest === true){
      setRegObj((prevState)=> ({...prevState, passwordBorder:false, passwordHelper:''}))
    }
    else if(passwordTest === false){
      setRegObj((prevState)=>({...prevState, passwordBorder:true, passwordHelper:'Incorrect Password Format'}))
    }

    if(fnameTest === true && lnameTest === true && usernameTest === true && passwordTest === true){
      signUpService(signupObj).then((response) => {
        console.log(response);
        localStorage.setItem('token',response.data.id)
        
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(signupObj);

  }

 
  return (
    <div className="upsection1">
      <div className="upmain">

        <div className='upinputBoxDiv'>
          <span style={{ color: "#4285f4", fontsize: "20px" }}>G</span>
          <span style={{ color: "#FF0000", fontsize: "20px" }}>o</span>
          <span style={{ color: "#f4b400", fontsize: "20px" }}>o</span>
          <span style={{ color: "#4285f4", fontsize: "20px" }}>g</span>
          <span style={{ color: "#0f9d58", fontsize: "20px" }}>l</span>
          <span style={{ color: "#FF0000", fontsize: "20px" }}>e</span>
        </div>

        <p className='upheadings'>Create your Google Account</p>
        <p className='upheading2'>to continue to gmail</p>

        <div className="upinputBoxDiv">
          <TextField onChange={takeFirstName}
            error={regObj.fnameBorder} helperText={regObj.fnameHelper}
            id="outlined-basic" label="First name"
            variant="outlined" size='small'
            className="uptextBox"
          />
          <TextField onChange={takeLastName}
            error={regObj.lnameBorder} helperText={regObj.lnameHelper}
            id="outlined-basic" label="Last name"
            variant="outlined" size='small'
            className="uptextBox"

          />
        </div>

        <div className="upinputBoxDiv">
          <TextField onChange={takeUserName}
            error={regObj.usernameBorder} helperText={regObj.usernameHelper}
            id="outlined-basic" label="Username"
            variant="outlined" size='small'
            className="uptextBox" 

          />
        </div>

        <div className='upspanText upinputBoxDiv'>
          <span style={{ textAlign: "left" }}>
            You can use letters, numbers & periods
          </span>
        </div>

        <div className="upinputBoxDiv">

          <TextField onChange={takePassword}
            error={regObj.passwordBorder} helperText={regObj.passwordHelper}
            id="outlined-basic" label="Password"
            variant="outlined" size='small'
            className="uptextBox"
          />

          <TextField onChange={confirmPassword}
            error={regObj.passwordBorder} helperText={regObj.passwordHelper}
            id="outlined-basic" label="Confirm"
            variant="outlined" size='small'
            className="uptextBox"
          />
        </div>

        <div className='upspanText upinputBoxDiv'>
          <span style={{ textAlign: "left" }}>
            Use 8 or more characters with a mix of letters, numbers & <br />symbols
          </span>
        </div>

        <Checkbox label="Show password" />

        <div className="upbuttonDiv upinputBoxDiv">
          <Link href="#" underline="none">
            {'Sign in instead'}
          </Link>

          <Button onClick={submit} variant="contained">Next</Button>
        </div>



      </div>

      <div class="upsection2">
          <div class="upimagesection"></div>
          <h4 class="upaccBase">One account. All of Google <br />working for you.</h4>
      </div>


    </div>
  )
}

export default Signup
