import React from 'react';
import styles from './article3.module.css';
import Slide from 'react-reveal/Slide';

const Courses = () => {

return (
	<div className={styles.courses}>
	 <Slide bottom  duration={2000} >	 
	<div className={styles.description}>
	<h2>
	Warm and inviting  flat 70 sqm
	</h2>
	<ul>
		<li><span>Location:</span> Kyiv, Ukraine</li>
		<li><span>Area:</span> 70 sqm</li>
		<li><span>Designer:</span> Maria Sarova</li>
		<li><span>Project completed in:</span> 88 days</li>
		<li><span>Year:</span> 2020</li>
	</ul>
	</div>	
	<div className={styles.img1}></div>
	<div className={styles.img2}></div>
	<div className={styles.img3}></div>
	<div className={styles.img4}></div>
	<div className={styles.img5}></div>
	<div className={styles.img6}></div>
	<div className={styles.img7}></div>
	</Slide>	
	</div>)
}
 

export default Courses;
