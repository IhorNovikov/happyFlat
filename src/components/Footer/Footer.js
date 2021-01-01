import React from 'react';
import styles from './footer.module.css';
import {NavLink} from 'react-router-dom';

 const Footer = (prop) => {
	 
 return (
  <div className={styles.footer}>
	  
	<div>
	Menu:
	  <NavLink to='/mainPage' onClick={() => {window.scrollTo(0,700)}}>Main Page</NavLink>
	  <NavLink to='/blog' onClick={() => {window.scrollTo(0,700)}}>Our blog</NavLink>
	  <NavLink to='/users' onClick={() => {window.scrollTo(0,700)}}>Our team</NavLink>
	  <NavLink to='/contacts' onClick={() => {window.scrollTo(0,700)}}>Contacts</NavLink>
	</div>
	
	<div>
	Оur services:
	  <NavLink to='/turnkey' onClick={() => {window.scrollTo(0,700)}}>Turnkey repair</NavLink>
	  <NavLink to='/dismantling' onClick={() => {window.scrollTo(0,700)}}>Dismantling work</NavLink>
	  <NavLink to='/electric' onClick={() => {window.scrollTo(0,700)}}>Electric installation work</NavLink>
	  <NavLink to='/plumbing' onClick={() => {window.scrollTo(0,700)}}>Plumbing works</NavLink>
	  <NavLink to='/painting' onClick={() => {window.scrollTo(0,700)}}>Painting works</NavLink>	 
	</div>
	
	<div>
	Contact us:
	  <a href='https://www.gmail.com' target='_blank' rel='noopener noreferrer' >happyFlat@gmail.com</a>
	  <a href='https://www.facebook.com/igor.novikov.37604' target='_blank' rel='noopener noreferrer' >facebook</a>
	  <a href='https://twitter.com/Winner39137635 ' target='_blank' rel='noopener noreferrer' >twitter</a>
	</div>

	<div>
	<p>2020 © Ihor Novikov</p>
	</div>
			
  </div>
)}

export default Footer;
