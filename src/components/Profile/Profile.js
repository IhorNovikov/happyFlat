import React from 'react';
import styles from './profile.module.css';
import Zoom from 'react-reveal/Zoom';

const Profile = (props) => { 
return ( 
 <div className={styles.profile}>
 <Zoom >
    	<div className={styles.userInformation}>
		<h2>Personal information:</h2>
		<ul>
		<li>login: {props.username}</li>
		<li>name:  {(props.username==='admin') ? 'Ihor': props.firstName}</li>
		<li>surname: {(props.username==='admin') ? 'Novikov': props.lastName}</li>
		<li>email: {(props.username==='admin') ? 'novikov8118@gmail.com': props.email}</li>
		</ul>
		</div>	    		 
 </Zoom>
 </div> 
)}
 

export default Profile;
