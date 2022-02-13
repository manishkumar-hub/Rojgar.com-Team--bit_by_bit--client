
import "../Footer/footerStyle.css"
function Footer(){
  return (
    <>
      <footer id='footer'>
        {/* <div class='footer-newsletter'> */}
        {/* <div class='container'> */}
        {/* <div class='row'>
              <div class='col-lg-6'>
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div class='col-lg-6'>
                <form action='' method='post'>
                  {' '}
                  <input type='email' name='email' />
                  <input type='submit' value='Subscribe' />{' '}
                </form>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div class='footer-top'>
          <div class='container'>
            <div class='row'>
              <div class='col footer-links'>
                <h4 className='footer-headings' id="useful-links" >Useful Links</h4>
                <ul>
                  <li>
                    <i class='bx bx-chevron-right'></i> <a href='#'>Home</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i> <a href='#'>About us</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i> <a href='#'>Services</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Terms of service</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Privacy policy</a>
                  </li>
                </ul>
              </div>
              {/* <div class='col-lg-3 col-md-6 footer-links'>
                <h4 className='footer-headings'>Our Services</h4>
                <ul>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Web Design</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Web Development</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Product Management</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Marketing</a>
                  </li>
                  <li>
                    <i class='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Graphic Design</a>
                  </li>
                </ul>
              </div> */}
              <div class='col footer-contact contact-us'>
                <h4>Contact Us</h4>
                <p>
                  {' '}
                  Ashok Rajpath 800005 <br /> Patna, Bihar                  <br /> India 
                  <br /> <strong>Phone:</strong> +91 6203575280
                  <br /> <strong>Email:</strong> taufika.ug20.cse@nip.ac.in
                  <br />{' '}
                </p>
              </div>
              <div class='col-lg-3 col-md-6 footer-info'>
                <h3>About Rojgar.Com</h3>
                <p>
                  Rojgar.Com aims to provide a simple platform to get the job
                  for skilled people
                </p>
                <div class='social-links mt-3'>
                  {' '}
                  <a href='#' class='twitter'>
                    <i class='bx bxl-twitter'></i>
                  </a>{' '}
                  <a href='#' class='facebook'>
                    <i class='bx bxl-facebook'></i>
                  </a>{' '}
                  <a href='#' class='instagram'>
                    <i class='bx bxl-instagram'></i>
                  </a>{' '}
                  <a href='https://www.linkedin.com/in/taufik-ali-8b9241202/' class='linkedin'>
                    <i class='bx bxl-linkedin'></i>
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container  footer-copy'>
          <div class='copyright'>
            {' '}
            © Copyright{' '}
            <strong>
              <span>Rojgar.Com</span>
            </strong>
            . All Rights Reserved{' '}
          </div>
          <div class='credits'>
            {' '}
            Designed by <a href='#'>Taufik & Manish</a>{' '}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;