import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import RouteToAll from './components/RouteToAll/RouteToAll'
import Footer from './components/Footer/Footer'

export const UserContext = React.createContext();

function App() {
			
	return (	
		<UserContext.Provider value={'Boss'}>
      <div className={styles.app}>	
	<Header/>	
	<MainContent/>
		<div className={styles.appWrapper}>
		<RouteToAll/>
		</div>
	<Footer />			
      </div>
		</UserContext.Provider>
	);
}

export default App;
