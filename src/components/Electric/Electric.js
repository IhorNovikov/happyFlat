import React from 'react';
import styles from './electric.module.css';
import Slide from 'react-reveal/Slide';

const Electric = () => {

return (
	<div className={styles.container}>
	 <Slide bottom  duration={2000} >	 
	<div>
	The greatest attention should be paid to work related to electricity because it is a great benefit 
	to mankind, which can endanger human life. Even the slightest malfunction of the system can be 
	expensive: it is an electric shock, damage to appliances, fires, and more. The qualified masters 
	of the HappyFlat company, having the necessary experience, carry out the work very accurately
	and precisely, with the observance of necessary norms and requirements. We guarantee you
	a high level of work performance and safety of electrical systems and devices.
	We provide a full range of electrical work, from the simplest to the most complex,
	such as installation and connection of systems such as "Smart Home".
	Contact us and we will provide you with qualified and quality electrical services.
	</div>
	
	<div className={styles.img1}></div>

	<div>
	We work with each client individually. We select options, taking into account all
	the wishes and requirements of the client, to achieve the desired result.
	You do not need to spend your time on trips to our office, our specialists will
	advise you by phone or come to you. Carrying out works at a time convenient for you.
	</div>

	<div className={styles.img2}></div>
	
	<div>
	We use modern technologies, safe, tested, and certified materials. Execution of works with 
	a guarantee of the result. We carry out constant control of the engineering group,
	daily internal technical control, control at each stage of performance of works.
	Photo and video fixation of the executed and hidden works. In any period of operation,
	we carry out service. The work is carried out exclusively in accordance with the requirements 
	of regulations and standards, in compliance with the technology of work.
	</div>

	<div className={styles.img3}></div>

	</Slide>	
	</div>)
}
 

export default Electric;
