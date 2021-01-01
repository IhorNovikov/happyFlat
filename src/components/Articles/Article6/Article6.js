import React from 'react';
import styles from './article6.module.css';
import Slide from 'react-reveal/Slide';

const Courses = () => {

return (
	<div className={styles.courses}>
	<Slide bottom  duration={2000} >	 
	<div className={styles.description}>
	<h2>
	Flat 72 sqm in Moscow
	</h2>
	<ul>
		<li><span>Location:</span> Moscow, Russia</li>
		<li><span>Area:</span> 72 sqm</li>
		<li><span>Designer:</span> David Karelidze</li>
		<li><span>Project completed in:</span> 80 days</li>
		<li><span>Year:</span> 2020</li>
	</ul>
	</div>		
	<div className={styles.img1}></div>
	<div className={styles.img2}></div>
	<div className={styles.img3}></div>
	<div className={styles.img4}></div>
	<div className={styles.img5}></div>
	</Slide>	
	</div>)
}
 

export default Courses;
