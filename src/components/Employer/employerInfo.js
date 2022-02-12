import { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
import '../Employer/employerInfoStyle.css'
import { Link, useNavigate } from 'react-router-dom'

function EmployerInfo(user) {
     const [checked, setChecked] = useState(true)
    let navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [newJob, setNewJob] = useState(
    //  {title:"",description:"",salary:"",openings:"",experienceRequired:""}
    {}
  )

  let name, value;
  const addemail= ()=>{
    name= "gmail"
    value="dsfdf";
    setNewJob({...newJob,[name]:value })  
}
const addnumber =()=>{
     name= "contactNumber"
    value="45346";
    setNewJob({...newJob,[name]: value})
    newJob.contactNumber= "65679"
     console.log("job :")
    console.log(newJob);
    addemail();
}
  const handleInputs = (e) =>{
    name = e.target.name
    value = e.target.value
    setNewJob({ ...newJob, [name]: value })
    addnumber();
  }
  const postData = async (e) => {
    e.preventDefault()
    const { title, description, salary, openings,gmail,contactNumber, experienceRequired } = newJob ;
    const res = await fetch('/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        salary,
        openings,
        gmail,
        contactNumber,
        experienceRequired,
      }),
    })
    // console.log("after job post");
    const data = await res.json()
    setSubmitted(true)
    if (data.status === 500 || !data) {
      console.log('Innvakid credentials')
      window.alert('Invalid Data')
      // console.log(data)
    } else {
      console.log(data)
      console.log(data.title);
      let id= data._id;
      console.log("id= "+id);

      navigate('/homeEmployer')
    }
  }

  useEffect(()=>{
    // addemail();
  })
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='card' id="card-emplr">
              <div className='upper'>
                {' '}
                <img
                  src='https://i.imgur.com/Qtrsrk5.jpg'
                  className='img-fluid'
                />{' '}
              </div>
              <div className='user text-center'>
                <div className='profile'>
                  {' '}
                  <img
                    src='https://i.imgur.com/JgYD2nQ.jpg'
                    className='rounded-circle'
                    width='80'
                  />{' '}
                </div>
              </div>
              <div className='mt-5 text-center'>
                <h4 className='mb-0'>{user.name}</h4>{' '}
                <span className='text-muted d-block mb-2'>{user.email}</span>{' '}
                <button className='btn btn-primary btn-sm follow'>
                  Follow
                </button>
                <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
                  <div className='stats'>
                    <h6 className='mb-0'>Phone</h6> <span>{user.phone}</span>
                  </div>
                  <div className='stats'>
                    <h6 className='mb-0'>Location</h6>{' '}
                    <span>{user.address}</span>
                  </div>
                  <div className='stats'>
                    <h6 className='mb-0'>Ranks</h6> <span>129</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-5 form-section'>
              <div className='login-wrapper'>
                <h2
                  className='login-title'
                  style={{
                    fontSize: '32px',
                    fontweight: 'bold',
                    color: 'grey',
                  }}
                >
                  Post a new job
                </h2>
                <form method='POST'>
                  <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Title</label>
                    <input
                      type='text'
                      onChange={handleInputs}
                      name='title'
                      className='form-control'
                      placeholder='Title'
                      value={newJob.title}
                    />{' '}
                  </div>
                  <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Description</label>
                    <input
                      type='text'
                      onChange={handleInputs}
                      value={newJob.description}
                      name='description'
                      className='form-control'
                      placeholder='Description'
                    />{' '}
                  </div>
                  <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Salary</label>
                    <input
                      type='number'
                      onChange={handleInputs}
                      name='salary'
                      value={newJob.salary}
                      className='form-control'
                      placeholder='Salary'
                    />{' '}
                  </div>
                  <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Openings</label>
                    <input
                      type='number'
                      onChange={handleInputs}
                      name='openings'
                      className='form-control'
                      value={newJob.openings}
                      placeholder='Openings'
                    />{' '}
                  </div>

                  <div className='form-group'>
                    {/* {' '} */}
                    <label className='sr-only'>Experience</label>
                    <input
                      type='number'
                      onChange={handleInputs}
                      name='experience'
                      value={newJob.experienceRequired}
                      className='form-control'
                      placeholder='Experience (in yrs)'
                    />{' '}
                  </div>
                  {/* <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Contact E-mail Id</label>
                    <input
                      type='email'
                      onChange={handleInputs}
                      name='gmail'
                      value={newJob.gmail}
                      className='form-control'
                      placeholder='Contact Email'
                    />{' '}
                  </div>
                  <div className='form-group'>
                    {' '}
                    <label className='sr-only'>Experience</label>
                    <input
                      type='number'
                      onChange={handleInputs}
                      name='contactNumber'
                      value={newJob.contactNumber}
                      className='form-control'
                      placeholder='Contact NUmber'
                    />{' '}
                  </div>
                  <label>
                    <input
                      type='checkbox'
                      name='checkval'
                      value={"23432"}
                      defaultChecked={checked}
                      onChange={addemail}
                    />
                    Check Me!
                  </label> */}
                  <div className='post-btn d-flex justify-content-between align-items-center mb-5'>
                    <input
                      id='login'
                      className='btn signup-btn'
                      type='submit'
                      onClick={ postData}
                      value='Post'
                    />{' '}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployerInfo