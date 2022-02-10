import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import  { useState ,useEffect } from "react";
import Cookies from 'js-cookie'
// Schema Fields: id, name ,email, phone ,img(opt), qualification ,experience , Occupation
function Home() {
    const [user, setUser] = useState([]);
    const userID= Cookies.get('ID');
    const URL= "/employee/"+userID ;
    const getData= async ()=>{
            const response= await fetch(URL) ;
            setUser(await response.json());
        }
        useEffect(()=>{
            getData();
        },[]);
        console.log(user.occupation);
        return ( 
        <>
        <Navbar {...user}  />
        <Carousel/>
        </>
     );
}

export default Home;