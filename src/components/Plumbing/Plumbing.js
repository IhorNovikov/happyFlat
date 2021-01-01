import React from 'react';
import styles from './plumbing.module.css';
import Slide from 'react-reveal/Slide';

const Courses = () => {

return (
	<div className={styles.courses}>
	 <Slide bottom  duration={2000} >	 
	<div>
	Any work related to plumbing and heating is difficult to perform and requires special 
	attention because the poor performance of such work can harm not only you but also your neighbors.
	Therefore, you should be very careful when choosing a good master with the necessary experience.
	Happy Flat offers quality and timely plumbing work at market prices.
	Plumbing work, as well as electrical, must begin on the first day of repair.
	The plan is simple:
	- determining the location of plumbing and heating equipment;
    - marking of laying water, heating, and sewerage communications;
    - counting the number of necessary materials and their purchase;
    - installation of pipes, installation of filters for water purification;
    - connection of plumbing fixtures and appliances.
	</div>
	
	<div className={styles.img1}></div>

	<div>
	Underfloor heating systems are one of the ways to heat a home, the peculiarity of
	which is that the heat carrier is water, which circulates through pipes laid on
	the floor and gives off heat. The efficiency of water floor heating is high, this type
	of heating is extremely economical - from the heated floor surface the air is heated
	and directed upwards, ensuring uniform heat distribution over the entire area.
	</div>

	<div className={styles.img2}></div>
	
	<div>
	Installation - a structure consisting of a metal frame with special mechanisms,
	designed to secure plumbing fixtures - sinks, toilets, bidets. Why is installation better
	than a regular toilet? Installations save space, all pipes and communications are placed
	in the wall, and the lack of a leg in the structure does not interfere with the cleaning
	and installation of the system "warm floor".
	</div>

	<div className={styles.img3}></div>

	<div>
	We know how to make your home warm, comfortable, and cozy. Do you want a water floor heating
	in the kitchen or a radiator faucet? We have ready-made solutions. Do you like it when every
	detail is aesthetically pleasing and easy to install? Yes, it's up to us.
	</div>
	</Slide>	
	</div>)
}
 

export default Courses;
