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
import postscribe from 'postscribe';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqzhEGInn3vTZdAx8dYWFTg8wmI9Wq7h8",
  authDomain: "resumeemail-bcc6e.firebaseapp.com",
  databaseURL: "https://resumeemail-bcc6e-default-rtdb.firebaseio.com",
  projectId: "resumeemail-bcc6e",
  storageBucket: "resumeemail-bcc6e.appspot.com",
  messagingSenderId: "848438459734",
  appId: "1:848438459734:web:04d69401e27d913460aaf7",
  measurementId: "G-WCTW3NLFCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//reference messages collection
//const messageRef = database().ref('messages');
const messageRef = ref(getDatabase(), 'messages');

function Contact() {

     return(
         <>
            <div id="contact-and-resume">
                <br/>
                <br/>
                <h4 className="section-header">Let's get in contact!</h4>
                <div id="personals-container">
                    <a href="mailto:JesseClemProgramming@gmail.com" target="_blank"><img src={IMG_Email} className="contact-images"/>  <p>JesseClemProgramming@gmail.com</p></a>
                    <a href="tel:+13607012737"><img src={IMG_Phone} width="30px"/>  <p>1(360)701-2737</p></a>
                    <a href="https://github.com/JesseProgramming?tab=repositories" target="_blank"><img src={IMG_Github} className="contact-images"/>  <p>GitHub</p></a>
                    <a href="https://www.linkedin.com/in/jesse-clem/" target="_blank"><img src={IMG_Linkedin} className="contact-images"/>  <p>Linkedin</p></a>
                </div>
                <div id="form-container">
                    <form id="contactForm">
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