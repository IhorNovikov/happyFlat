import React, {useState,useEffect} from 'react';
import styles from './users.module.css';
import axios from 'axios'
import Loader from '../Loader/Loader'


const Users = () => {
	
	const [user,setUser] =useState([]);
	const [isFetching,setIsFetching] =useState(false);
		
	useEffect (() => {
	const fetchData = async () => {
	setIsFetching(true)
	const result = await axios.get('https://jsonplaceholder.typicode.com/users')
	setUser(result.data)	
	setIsFetching(false)
	}
	fetchData()
},[])

	const team = user.map(user=><li key={user.id} >
				{ user.name}<br/>  
				<i>email: {user.email}</i><p/>
				</li>)

return (
<div className={styles.usersWrapper}> 
<h2 className={styles.heading}>Together we achieve more</h2>
<div className={styles.usersInfo}>
	{isFetching ?  (
	<div>
	...Loading
	<Loader/> 
	</div>) : ( 
	<div>
		<h2>Our team:</h2>
		  <ol>
			{team}
		  </ol>
	</div>)}
	</div>
</div>
	)   
}
export default Users;
