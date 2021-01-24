import React from 'react';
import styles from './painting.module.css';
import Slide from 'react-reveal/Slide';

const Painting = () => {

return (
	<div className={styles.container}>
	 <Slide bottom  duration={2000} >	 
	<div>
	Painting work is the final and definitely one of the most important stages of any repair
	work because it provides the final leveling of the surface. DreamHouse performs painting
	works in compliance with all the necessary repair and construction requirements,
	which in turn significantly extends the service life of turnkey repairs of premises,
	apartments, and houses. Masters start painting only after they are personally convinced of
	the necessary dryness of putty, plaster, primer, or pre-applied layer.
	</div>
	
	<div className={styles.img1}></div>

	<div>
	Only thanks to specialized equipment in combination with practical and theoretical skills
	it is possible to achieve a perfectly uniform layer of coating and minimize paint consumption.
	All these tools can speed up painting work, painting walls, ceilings, or other surfaces several times.
	</div>

	<div className={styles.img2}></div>
	
	<div>
	To choose the right paint, you need to consider many factors, namely: the temperature in the room,
	humidity, type of work surface, and so on. We will help you choose from a variety of manufacturers
	and types, exactly the materials you need for each room. We can accurately calculate the required
	amount of paint, and advise a reliable supplier with the lowest prices.
	</div>

	<div className={styles.img3}></div>

	<div>
	When ordering painting work in our company, you can use the free service of calling the master.
	A preliminary inspection of the object will allow you to more accurately determine the list of
	necessary finishing activities, as well as make an estimate. The quality of the painting work
	carried out is the key to a reliable repair.
	</div>
	</Slide>	
	</div>)
}
 

export default Painting;
