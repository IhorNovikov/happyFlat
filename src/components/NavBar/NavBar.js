import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import styles from './navBar.module.css';
import Profile from '../Profile/Profile'



const NavBar = (props) => { 

  return ( 
	<div>
		<div className={styles.navbar}>
		  <NavLink to='/mainPage'>Main Page</NavLink>
		
		  
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>Services</button> 
				<div className={styles.dropdownContent}>
					<NavLink to='/turnkey' onClick={() => {window.scrollTo(0,700)}}>Turnkey repair</NavLink>
					<NavLink to='/dismantling' onClick={() => {window.scrollTo(0,700)}}>Dismantling work</NavLink>
					<NavLink to='/electric' onClick={() => {window.scrollTo(0,700)}}>Electric installation work</NavLink>
					<NavLink to='/plumbing' onClick={() => {window.scrollTo(0,700)}}>Plumbing works</NavLink>
					<NavLink to='/painting' onClick={() => {window.scrollTo(0,700)}}>Painting works</NavLink>
				</div>
			</div> 
		  <NavLink to='/users' onClick={() => {window.scrollTo(0,700)}}>Our team</NavLink>
		  <NavLink to='/contacts' onClick={() => {window.scrollTo(0,700)}}>Contacts</NavLink>
			{(props.isLoggedIn) ? <Redirect from='/login' to='/profileInfo' /> : <Redirect from='/profile' to='/mainPage' />}
			{props.isLoggedIn ? (		
			<NavLink  to='/profileInfo' onClick={() => {window.scrollTo(0,700)}} >{props.username}</NavLink>
			) : (  
		  <NavLink  to='/login' onClick={props.onLogIn} >Profile</NavLink>
		  )}
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>{props.isLoggedIn ?' Logged' : 'Register'}</button> 
				<div className={styles.dropdownContent}>
					 
			<NavLink  to='/singUp'  activeClassName={styles.activeLink} onClick={props.onClick2}>Sing Up</NavLink> 
			
			{props.isLoggedIn ? ( 
		  	<NavLink to='/login' onClick={props.onLogOut}>Log Out</NavLink>) : (  
			  <NavLink to='/mainPage' onClick={props.onLogIn}>Log In</NavLink> 	  	
		 	 )}	 	
				</div>		
			</div> 
		</div>
		{(props.isLoggedIn) ? 
		<Profile username={props.username} firstName={props.firstName}
		  lastName={props.lastName} email={props.email} /> : null}
    </div>  
)} 
 
export default NavBar;
