import '../stylesheets/style.css';
import React from 'react'
import {useState} from 'react';
//@ts-ignore
import IMG_Email from '../images/icons/email.svg';
//@ts-ignore
import IMG_Phone from '../images/icons/alternate-phone.svg';
//@ts-ignore
import IMG_Github from '../images/icons/github.svg';
//@ts-ignore
import IMG_Linkedin from '../images/icons/social-linkedin.svg';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//reference messages collection
const messageRef = firebase.database().ref('messages');

const handleSubmit = (event) => {
    //prevent page reload on submit
    event.preventDefault();
    // get values in contact form
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    // save message function call
    saveMessage(name, email, message);
    //show alert
    //@ts-ignore        //Redo line with best practices
    document.querySelector('.alert').style.display = "block";
    //hide alert after 4 seconds
    setTimeout(function(){
        //@ts-ignore        //Redo line with best practices
        document.querySelector('.alert').style.display = "none";
    },4000);
    //reset the form
    event.target.reset();
}

function saveMessage(name, email, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
  }
  

function Contact() {
     return(
         <>
            <div id="contact-and-resume">
                <br/>
                <br/>
                <h4 className="section-header">Let's get in contact!</h4>
                <div id="personals-container">
                    <a href="mailto:JesseClemProgramming@gmail.com" target="_blank"><img src={IMG_Email} className="contact-images" alt="Email graphic"/>  <p>JesseClemProgramming@gmail.com</p></a>
                    <a href="tel:+13607012737"><img src={IMG_Phone} className="contact-images" alt="Phone Graphic"/>  <p>1(360)701-2737</p></a>
                    <a href="https://github.com/JesseProgramming?tab=repositories" target="_blank"><img src={IMG_Github} className="contact-images" alt="Github graphic"/>  <p>GitHub</p></a>
                    <a href="https://www.linkedin.com/in/jesse-clem/" target="_blank"><img src={IMG_Linkedin} className="contact-images" alt="Linkedin graphic"/>  <p>Linkedin</p></a>
                </div>
                <div id="form-container">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name<p>*</p></label>
                        <input type="text" id="name" name="name" placeholder="Name" required/>
                        
                        <label htmlFor="email">Email<p>*</p></label>
                        <input id="email" name="email" type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                    
                        <label htmlFor="message">Message<p>*</p></label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
         </>
     );
}

export default Contact;