import '../JobCard/jobcardstyle.css'
import gmailLogo from "../../assets/Images/gmail.png"
// Schema fields:title,description,date,salary,openings,

const openWhatsApp =()=>{
    window.open('whatsapp://send?text= Hi , Have a look on this job posted on rojgar.Com')
}
function JobCard(job) {
    return ( 
        <>
            <div className="card">
                <div className="card-header pb-0 bg-white">
                    <h4 className="font-weight-bold mt-2">{job.title}</h4>
                </div> 
                <div className="card-body">
                <mark className='mark'><small className="font-weight-bold"> &#x20B9; {job.salary}/month <br/> </small></mark><mark className='mark'><small className="font-weight-bold"><i class='fas fa-user-friends'></i> {job.openings} Openings</small></mark><mark className='mark'><small className="font-weight-bold">{job.experienceRequired}+ years</small></mark><mark className='mark'><small className="font-weight-bold">{job.date} </small></mark>
                    <p className="text-muted ">{job.description}</p>
                    <div className="row justify-content-center mt-4">
                        <div className=''>
                            <div className='logoimg'>
                                <a href="">
                                    
                                {/* <img className='gmllogo' src={gmailLogo} alt="" srcset="" /> */}
                                </a>
                            </div>
                        </div>
                        <div className="col-9">
                            <button type="button" className="btn btn-outline-success btn-block font-weight-bold text-dark">Apply Now</button>
                        </div>
                    </div>
                    {/* <div className="row">
                    <div className="col">
                    <img className='logo-iamg' src = "https://image.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg"   onclick={openWhatsApp}/> 
                    </div>
                    </div> */}
                </div>
            </div>
        </>
     );
}

export default JobCard;