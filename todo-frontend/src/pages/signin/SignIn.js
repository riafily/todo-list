import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function SignIn () {        
    let navigate = useNavigate();
    const [name,setName]=useState();
    const [passw,setPassw]=useState();
    const [showFlag, setShowFlag] = useState(false);
    function sendName(){
        if(name==='abc' && passw === '123') {
            localStorage.setItem('auth', true)
            navigate("/list");
        }
        else {
            setShowFlag(!showFlag);
        }
          
    }
    return (
        <>  
            <h1>Sign-In</h1>
            <TextField id="uname"  label="Enter Username" variant="outlined" onChange={event=> setName(event.target.value)} />
            <br></br>
            <TextField id="pword" type='password' label="Enter Password" variant="outlined" onChange={event=> setPassw(event.target.value)}/>
            <br></br>
            <Button variant="text" onClick={sendName}>Submit</Button>
            {showFlag && (
                <div>Wrong username or password</div>)}

        </>
    )
}

export default SignIn;