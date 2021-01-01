import React from 'react';
import styles from './dismantling.module.css';
import Slide from 'react-reveal/Slide';

const Courses = () => {

return (
	<div className={styles.courses}>
	 <Slide bottom  duration={2000} >	 
	<div>
	There are certain rules for dismantling works, non-compliance with which may endanger
	the lives of people who will settle or work in the building in the future.
	But the absence of such complications is guaranteed if you use our services.
	We dismantle screeds, walls, and partitions, door and window units, various types
	of flooring, wallpaper, etc.
	Contact us and we'll answer all your questions and tell you how best to perform
	dismantling work without violating the integrity of the building.
	</div>
	
	<div className={styles.img1}></div>

	<div>
	We'll definitely help you to take out all your old stuff so that it does not lie 
	near your entrance. We have a variety of special trucks of various sizes - for different 
	volumes of transported cargo. Our experienced drivers, with many years of experience
	in driving a truck, will drive up to your entrance or house as accurately as possible
	</div>

	<div className={styles.img2}></div>
	
	<div>
	You do not need to look for a separate car, separately for loaders, and spend a lot of time
	on all these searches. You can order all these services from us - you just need to call one
	of the numbers listed on the website. If for any reason it is inconvenient for you to call,
	you can place an application on the website - there is nothing complicated here, it will
	take no more than 1-2 minutes of your time. After we receive your application, our managers
	will call you back and inform you about all the details. At the same time, the price of
	the order will depend on the volume of transported waste, your location, and whether you
	will order loaders or handle it yourself.
	</div>

	</Slide>	
	</div>)
}
 

export default Courses;
