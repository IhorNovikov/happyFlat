import React from 'react';
import styles from './article2.module.css';
import Slide from 'react-reveal/Slide';

const Courses = () => {

return (
	<div className={styles.courses}>
	<Slide bottom  duration={2000} >	 
	<div className={styles.description}>
	<h2>
	Flat 64 sqm in Tokyo
	</h2>
	<ul>
		<li><span>Location:</span> Tokyo, Japan</li>
		<li><span>Area:</span> 64 sqm</li>
		<li><span>Designer:</span> Marian Pudzinovich</li>
		<li><span>Project completed in:</span> 72 days</li>
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
