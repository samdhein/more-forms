import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    // const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    // const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordError, setPasswordError] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    // const [confirmpasswordError, setConfirmpasswordError] = useState("")
    
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        // if(e.target.value.length <2) {
        //     setFirstnameError("First Name must be at least 2 characters");
        // }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        // if(e.target.value.length <2) {
        //     setLastnameError("Last Name must be at least 2 characters");
        // }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // {if(e.target.value.length <2) {
        //     setEmailError("Email must be at least 2 characters");
        // }}
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        // if(e.target.value.length < 8) {
        //     setPasswordError("Password must be at least 8 characters");
        // }
    }

    const handlePassConf = (e) => {
        setConfirmpassword(e.target.value);
        // if(e.target.value != {password}) {
        //     setConfirmpasswordError("Passwords must match!");
        // }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstname } />
                    {firstname.length<3 && firstname.length>0&&(
                        <p style={{color:'red'}}>First name must be at least 3 characters</p>
                    )} 
                    {/* {
                        firstnameError ?
                        <p style={{color:'red'}}>{firstnameError}</p> :
                        ''
                        
                    } */}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastname } />
                    {lastname.length<3 && lastname.length>0&&(
                        <p style={{color:'red'}}>Last name must be at least 3 characters</p>
                    )} 
                    {/* {
                        lastnameError ?
                        <p style={{color:'red'}}>{lastnameError}</p> :
                        ''
                        
                    } */}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ handleEmail } />
                    {email.length<3 && email.length>0&&(
                        <p style={{color:'red'}}>Email must be at least 3 characters</p>
                    )} 
                    {/* {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> :
                        ''
                    } */}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } />
                    {password.length<8 && password.length>0&&(
                        <p style={{color:'red'}}>Password must be at least 8 characters</p>
                    )} 
                    {/* {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    } */}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handlePassConf } />
                    {confirmpassword != password&&(
                        <p style={{color:'red'}}>Passwords must match!</p>
                    )} 
                    {/* {
                        confirmpasswordError ?
                        <p style={{color:'red'}}>{confirmpasswordError}</p> :
                        ''
                    } */}
                </div>
                {/* <input type="submit" value="Create User" /> */}
            </form>
            <div>
                <p>First Name: {firstname} </p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
