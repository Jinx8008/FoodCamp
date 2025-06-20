import React from 'react'
import Button from './Button'
import MailIcon from '../assets/icons8-mail-24.png'
import CallIcon from '../assets/icons8-call-24.png'
import MailIcon2 from '../assets/icons8-mail-24-2.png'

const ContactContent = () => {
  return (
    <div className='main-container'>
      <div className='contact-info'>
        <h1>Contact Us</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt debitis molestias iusto nobis nisi fugit, voluptate inventore ducimus necessitatibus distinctio soluta ipsum quasi quo in quaerat doloremque iure rem?
        </p>

        <div className='contact-details'>
            <div className='container-details-content'>
                <img src={MailIcon} alt="" />
                <p>info@foodcamp.com</p>
            </div>
            <div className='container-details-content'>
                <img src={CallIcon} alt="" />
                <p>Support: (+234) 567 8907 654</p>
            </div>
        </div>
      </div>


      <div className='contact-form'>
             <div className='form-header'>
                <h1>We'd Love To Hear From You! Let's Get In Touch</h1>
            </div>
        <form action="">
            <div className='row1'>
                <div>
                    <label>Firstname</label> <br />
                    <input type="text" placeholder=''/>
                </div>
                <div>
                    <label htmlFor="">Lastname</label> <br />
                    <input type="text" placeholder='' />
                </div>

                
                
            </div>
            <div className='row2'>
                <div>
                    <label>Email</label> <br />
                    <input type="text" placeholder=''/>
                </div>
                <div>
                    <label htmlFor="">Phone Number</label> <br />
                    <input type="number" placeholder='' />
                </div>
            </div>

            <div className="row3">
                <label htmlFor="">Address</label> <br />
                <input type="text" placeholder='' />
            </div>

            <div className="row4">
                <label htmlFor="">Your Message</label> <br />
                <input type="text" placeholder='Enter Your Message' />
            </div>
            <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactContent
