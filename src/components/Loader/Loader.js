import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
	return (
  <div className={styles.loader}> 
	<img src={require("./oval.svg")} alt="Wrong path"/>
  </div>
  )
}

export default Loader;
