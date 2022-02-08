// import React, { PureComponent } from 'react';
import { useState } from 'react';
import '../LandingPage/LoginStyle.css';
function LoginPage() {
    const [user,setUser] = useState({
        email:"" , password:""
    });
    let name, value ;
    const handleChange=(e)=>{
        name= e.target.name;
        value= e.target.value ;
        setUser({...user,[name]: value});
    }
    const loginEmployee = async (e)=>{
        e.preventDefault();
        const {email, password} = user  ;
        const res= await fetch("/loginemployee",{
            // method: "POST",
        // const res= await fetch("/loginemployee",{
            method: "POST" ,
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify({
                email ,password
            })
        })
        const data = res.json();
        console.log(data+" above if else")
        if(data.status=== 404|| !data)
        {
            console.log(data+" Login successful ");
            window.alert("Login Succesful!!");
        }
        else{
            console.log("unsuccesful!"+ data);
            window.alert(" You entered wrong credentials!! !!");
        }
    }
    const loginEmployer = async ()=>{

    }
    return ( 
        <>
<div className="container-fluid">
    <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
            <div className="brand-wrapper">
                <h1 className='brand-title'><a href="">Rojgar.com</a></h1>
            </div>
            <div className="intro-content-wrapper">
                <h1 className="intro-title">Welcome to Rojgar.com !</h1>
                <p className="intro-text">Never remain unEmployed !! Choose your dream job from millions of job across the Country </p> <a href="#!" className="btn btn-read-more">Read more</a>
            </div>
            <div className="intro-section-footer">
                <na className="footer-nav"> <a href="#!">Facebook</a> <a href="#!">Twitter</a> <a href="#!">Gmail</a> </na>
            </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
                <h2 className="login-title">Sign in</h2>
                <form method="POST">
                    <div className="form-group"> <label for="email" className="sr-only">Email</label>
                     <input type="email" name="email" value={user.email} onChange={handleChange} id="email" className="form-control" placeholder="Email"/> </div>
                    <div className="form-group mb-3"> <label for="password" className="sr-only">Password</label>
                     <input type="password" name="password" value={user.password} onChange={handleChange} id="password" className="form-control" placeholder="Password"/> </div>
                    <div className="d-flex justify-content-between align-items-center mb-5"> <input name="login" id="login" className="btn signup-btn" type="button" value="Login (Employee)" onClick={loginEmployee}/>  
                    <input name="login" id="login" className="btn signup-btn" type="button" value="Login (Employer)" onClick={loginEmployer}/> </div>
                </form>
                <p className="login-wrapper-footer-text">Need an account? 
                <a href="registerEmployee" className="btn login-btn">Register as Employee</a>
                {/* <a href="#!" className="text-reset">Signup as Employee</a> */}
                <a href="registerEmployer" className="btn login-btn">Register as Employer</a>
                </p>
            </div>
        </div>
    </div>
</div>
        </>
     );
}

export default LoginPage;