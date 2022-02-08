import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";


function SignupEmployee() {   
    let navigate = useNavigate();
    const [user , setUser ]= useState({
        name:"" , email: "",phone:"" ,qualification:"" , occupation:"", experience:"" ,password:""
    })
    let name,value;
    const handleInputs= (e)=>{
        name= e.target.name;
        value= e.target.value;
        setUser({...user,[name]:value})
    }
    const postData = async (e)=>{
        e.preventDefault();
        const { name, email,phone ,qualification , occupation, experience,password}= user ;
        const res= await fetch("/registerEmployee",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify({
                name, email,phone ,qualification , occupation, experience,password
            })
        })
        const data= await res.json();
        console.log("after getting data: "+ data);
        if(data.status===500|| !data)
        {
            console.log("Innvakid credentials");
            window.alert("Invalid Data");
            console.log(data);
        }
        else
        {
            console.log("data saved");
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
                <form  method="POST">
                    <div className="form-group"> <label  className="sr-only">Name</label> 
                    <input type="text" onChange={handleInputs} name="name"  className="form-control" placeholder="Your name" value={user.name} /> </div>
                    <div className="form-group"> <label  className="sr-only">Email</label>
                     <input type="email" onChange={handleInputs} value={user.email} name="email"  className="form-control" placeholder="Email"/> </div>
                    <div className="form-group"> <label  className="sr-only">Phone</label> 
                    <input type="text" onChange={handleInputs} name="phone"  value={user.phone} className="form-control" placeholder="Phone"/> </div>
                    <div className="form-group"> <label  className="sr-only">Qualification </label>
                     <input type="text" onChange={handleInputs} name="qualification"  className="form-control" value={user.qualification}  placeholder="Qualification "/> </div>
                    <div className="form-group"> <label  className="sr-only">Occupation</label>
                     <input type="text" onChange={handleInputs} name="occupation" value={user.occupation} className="form-control" placeholder="Occupation "/> </div>
                    <div className="form-group"> <label  className="sr-only">Experience</label>
                     <input type="text" onChange={handleInputs} name="experience" value={user.experience}  className="form-control" placeholder="Experience (in yrs)"/> </div>
                    <div className="form-group mb-3"> <label  className="sr-only">Password</label>
                     <input type="password" value={user.password} onChange={handleInputs}  name="password" id="password" className="form-control" placeholder="Password"/> </div>
                    <div className="d-flex justify-content-between align-items-center mb-5"> 
                    <input  id="login" className="btn signup-btn" type="submit" onClick={postData} value="Register"/>   </div>
                </form>
                
            </div>
        </div>
    </div>
</div>
        </>
     );
}

export default SignupEmployee;