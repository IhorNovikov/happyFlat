import React from 'react';
import styles from './mainContent.module.css';

const onScroll = () => {
  (window.scrollTo(0,0));
  }

 const MainContent = () => (
  <div className={styles.content}>
	<div className={styles.text}></div>   
	<button type="button" className={styles.upward} onClick={onScroll} >up</button>
  </div>
)
 

export default MainContent;
