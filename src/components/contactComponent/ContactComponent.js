import React, { useState } from 'react';
import '../../main.css';
import emailjs from '@emailjs/browser';

const Result=()=>{
    return(
        <p>Your message has been succesfully dispatched.</p>
    )
}
function ContactComponent(props) {

    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nhujk1q', 'template_zsehuab', e.target, 'user_O6Rxa9MLi9PqQEzJj0isI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
              };
    return (

        <div>
            <div><br /></div>
        <div style={{display: 'flex',  justifyContent:'center'}}>
            <form action="" onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>
                <div className="row">{
                    result ? <Result /> : null
                }</div>
              </div>
            </form>
        </div>
        <div><br /></div>

        </div>
        
    )
}

export default ContactComponent
