import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import '../Employee/homestyle.css'
import Cookies from 'js-cookie'
import JobCard from "../JobCard/jobcard";
import Footer from "../Footer/footer";

// Schema Fields: id, name ,email, phone ,img(opt), qualification ,experience , Occupation
function Home() {
    const [user, setUser] = useState([]);
    const [jobs, setJobs] = useState([]);
    const userID = Cookies.get('ID');
    const URL = "/employee/" + userID;
    const getData = async () => {
        const response = await fetch(URL);
        setUser(await response.json());
    }
    const getJobs = async () => {
        const resp = await fetch("/jobs");
        setJobs(await resp.json());
    }
    useEffect(() => {
        getData(); 
        getJobs();
    }, []);
    // console.log(user.occupation);
    // console.log(jobs);
    return (
        <>
            <Navbar {...user} />
            <Carousel />

        <h1 id="td-title">Trending jobs...</h1>
            <div className="cardContainer">
                <div className="row">
                    {jobs.map((ele) => {
                        return <div className="col-md-4">
                            <JobCard {...ele}/>
                        </div>
                    })}
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Home;