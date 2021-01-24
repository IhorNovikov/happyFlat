import React from 'react';
import styles from './turnkey.module.css';
import Slide from 'react-reveal/Slide';

const Turnkey = () => {

return (
	<div className={styles.container}>
	 <Slide bottom  duration={2000} >	 
	<div>
	Happy Flat performs professional turnkey repairs regardless of the volume of the order 
	or its complexity, at affordable prices. Our masters have repeatedly repaired turnkey apartments,
	embodying unique design projects, creating complex structures from plasterboard, using modern 
	repair materials, decorating walls, ceilings and floors.
	</div>
	
	<div className={styles.img1}></div>

	<div>
	Having arranged a meeting with you, our employee conducts an inspection of the object, measures 
	the area, after listening to your plans or wishes for the repair of the apartment, makes an
	estimate with a list of services and prices. All consultations, calculations, and measurements
	are free of charge, any payment is made only when buying materials or for the work performed.
	</div>

	<div className={styles.img2}></div>

	<div>
	We are well versed in the prices of building materials and can buy them of the highest
	quality and at the lowest price. When making a calculation, the manager will inform you
	about the required amount of materials and their estimated cost. Employees of the company
	will ensure the delivery of materials directly to your apartment.
	</div>

	<div className={styles.img3}></div>

	<div>
	With all the necessary tools and experience in working with them, the company's employees 
	will perform turnkey apartment repairs in compliance with all regulations in a timely manner.
	We clearly fulfill the technical tasks, and in case of a change in your plans, we will process
	everything so that you will remain 100% satisfied.
	</div>
	
	</Slide>	
	</div>)
}
 

export default Turnkey;
