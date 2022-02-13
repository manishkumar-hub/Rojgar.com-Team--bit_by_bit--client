import '../JobCard/jobcardstyle.css'
import gmailLogo from '../../assets/Images/gmail.png'
// Schema fields:title,description,date,salary,openings,
const openWhatsApp = () => {
  window.open(
    'whatsapp://send?text= Hi , Have a look on this job posted on rojgar.Com'
  )
}
function JobCard(job) {
  let mailURL = `mailto:${job.gmail}`
  let phoneURL = `tel:${job.contactNumber}`
  return (
    <>
      <div className='card'>
        <div className='card-header pb-0 bg-white'>
          <h3 className='font-weight-bold mt-2'>{job.organisation}</h3>
          <h4 className='font-weight-bold mt-2'>{job.title}</h4>
        </div>
        <div className='card-body'>
          <mark className='mark'>
            <small className='font-weight-bold'>
              {' '}
              &#x20B9; {job.salary}/month <br />{' '}
            </small>
          </mark>
          <mark className='mark'>
            <small className='font-weight-bold'>
              <i class='fas fa-user-friends'></i>
              {job.openings}Openings
            </small>
          </mark>
          <mark className='mark'>
            <small className='font-weight-bold'>
              {job.experienceRequired}+years
            </small>
          </mark>
          {/* <mark className='mark'><small className="font-weight-bold">{job.date} </small></mark> */}
          <p className='text-muted '>{job.description}</p>
          <div className='table'>
            <div className='row'>
              <div className='col'>
                <a href={mailURL}>
                  <i class='fa fa-envelope'></i>
                </a>
              </div>
              <div className='col'>
                <a href={phoneURL}>
                  <i class='fa fa-phone'></i>
                </a>
              </div>
              <div className='col'>
                <a href='whatsapp://send?text=<<HERE GOES THE URL ENCODED TEXT YOU WANT TO SHARE>>'>
                  {/* <FontAwesomeIcon icon="fab fa-whatsapp" /> */}
                  <i class='fa fa-whatsapp' style={{ color: 'green' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCard
