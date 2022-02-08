import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";


function SignupEmployer() {
    let navigate= useNavigate();
    const [user , setUser]= useState({
        name:"" , email:"" , phone:"" , address:"" , password:""
    })
    let name,value;
    const handleChange= (e)=>{
        name= e.target.name; 
        value= e.target.value ;
        setUser({...user,[name]: value});
    };
    const postData= async (e)=>{
        e.preventDefault();
        const {name, email, phone, address, password} = user;

        const res =  await fetch("/registeremployer",{
            method: "POST" ,
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify({
                name, email,phone ,address , password
            })
        })

        const data= await res.json();
        if(res.status===404|| !data)
        {
            console.log(res);
            window.alert("Invalid Data");
            
        }
        else{
            window.alert("Registered Succesfuly!!");
            console.log(data);
            navigate("/");
        }
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
                <h2 className="login-title">Register </h2>
                <form method="POST" >
                    <div className="form-group"> <label  className="sr-only">Name</label>
                     <input type="text" name="name" value={user.name} onChange={handleChange}  className="form-control" placeholder="Your name"/> </div>
                    <div className="form-group"> <label  className="sr-only">Email</label> 
                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Email"/> </div>
                    <div className="form-group"> <label  className="sr-only">Phone</label>
                     <input type="text" name="phone" value={user.value} className="form-control" onChange={handleChange} placeholder="Phone"/> </div>
                    <div className="form-group"> <label  className="sr-only">Address </label>
                     <input type="text" name="address" value={user.address} onChange={handleChange} className="form-control" placeholder="Address "/> </div>
                    <div className="form-group mb-3"> <label  className="sr-only">Password</label>
                     <input type="password" name="password" value={user.value} onChange={handleChange} className="form-control" placeholder="Password"/> </div>
                    <div className="d-flex justify-content-between align-items-center mb-5"> 
                     <input name="login" id="login" className="btn signup-btn" onClick={postData} type="button" value="Register"/> </div>
                </form>
                
            </div>
        </div>
    </div>
</div>
        </>
     );
}

export default SignupEmployer;