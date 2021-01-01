import React from 'react';
import styles from './contacts.module.css';


const Contacts = (props) => { 

 return ( 
 
	

 <div className={styles.profile}>
	
    	<div className={styles.info}>
		<h2>Our contacts:</h2>
		<div className={styles.infoLocation}></div>
		<ul className={styles.infoBody}>
			<li><span>HappyFlat</span></li>
			<li><span>60/9 Shevchenko Street, Lviv, 79039, Ukraine</span></li>
			<li><span>09:00 - 20:00</span></li>
			<li><a href="mailto:novikov8118@gmail.com" target="_blank" rel="noopener noreferrer">happyFlat@gmail.com</a></li>
			<li><a href="https://www.facebook.com/igor.novikov.37604" target="_blank" rel="noopener noreferrer">facebook</a></li>
		</ul>	
		</div>
		<iframe className={styles.map} id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.4262170435245!2d24.
		00842482116027!3d49.845230187750886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
		1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1599120906562!5m2!1sru!2sua" 
		title='Lviv' allowFullScreen="" aria-hidden="false" 
		tabIndex="0">
		</iframe>	    	
 </div> 
)}
 

export default Contacts;
