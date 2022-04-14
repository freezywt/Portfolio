import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import Aos from "aos";
import "aos/dist/aos.css";

import { Container, Row, Col } from "react-bootstrap";
function Contact() {

  useEffect(() => {
   Aos.init({duration: 2000});
  }, []);

   const showToast = () => {
    toast.warn("Server offline !");
   };

  return (
      <Container data-aos="fade-down" style={{marginBottom: 300}}>
       <ToastContainer />
        <form  action="" method="">
         <Container className="contact-content">
           <Row>
           <Col md={12} style={{ textAlign: 'left'}}>
            <h2 style={{ color: '#0B0C2C', fontWeight: 'bold', marginBottom: 25}}>Now, about your project...</h2>
            <p style={{fontSize: '14px', fontWeight: 'bold'}}>Before we trade, let me know your name and email.So that I can help you. </p>
           </Col>


           <Col md={9}>
             <div className="contact-form">
              <div className="form-group">
               <label htmlFor="first-name">What is your name?</label>
               <input type="text" name="first-name" id="first-name" placeholder="Jonh" required/>
              </div>
              <div className="form-group">
              <label htmlFor="first-name">What is your second name?</label>
               <input type="text" name="first-name" id="first-name" placeholder="Smith" required/>
              </div>
              <div className="form-group">
               <label htmlFor="email">Type your best E-mail address: </label>
               <input type="email" name="email" id="email" placeholder="jonhsmith@mail.xyz" required/>
              </div>
             </div>

             <p style={{fontSize: '14px', fontWeight: 'bold', marginTop: 20}}>Now select the type of project you are going to acquire</p>
             <div className="contact-projects-list">
              <div className="inputGroup">
                <input id="FrontEnd" name="FrontEnd" type="checkbox"/>
                <label htmlFor="FrontEnd">FrontEnd</label>
              </div>
              <div className="inputGroup">
                <input id="Backend" name="Backend" type="checkbox"/>
                <label htmlFor="Backend">Backend</label>
              </div>
              <div className="inputGroup">
                <input id="FullStack" name="FullStack" type="checkbox"/>
                <label htmlFor="FullStack">FullStack</label>
              </div>
              <div className="inputGroup">
                <input id="UiUx" name="UiUx" type="checkbox"/>
                <label htmlFor="UiUx">Ui / Ux</label>
              </div>
             </div>
             </Col>

             <Col md={3} className="message-form">
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>tell us a little about what you need in your project </p>
              <div style={{marginTop: 30}}>
                <p style={{fontSize: '12px', color: '#131313', fontWeight: 'bold'}}>what do you need? </p>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
              </div>
             </Col>
           </Row>
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="submit-section">
            <input type="submit" value="Send message" onClick={showToast}/>
           </div>
         </Container>
         </form>
      </Container>
  );
}

export default Contact;
