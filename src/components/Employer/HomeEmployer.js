import Navbar from "../Navbar/Navbar";
import  { useState ,useEffect } from "react";
import Cookies from 'js-cookie'
function HomeEmployer() {
    const [user, setUser] = useState([]);
    const [userID,setuserID]= useState(Cookies.get('ID'));
    // setuserID()
    // const userID= Cookies.get('ID1');
    const URL= "/employer/"+userID ;
    console.log("URL= "+ URL);  
    const getData= async ()=>{
            const response= await fetch(URL) ;
            setUser(await response.json());
        }
        useEffect(()=>{
            getData();
            console.log(user);
            console.log("user name in emplr= "+user.name);
        },[]);
        // console.log(user.occupation);
        return ( 
        <>
        <Navbar {...user} /> 
        {/* <Carousel/> */}
        </>
     );
}

export default HomeEmployer;