import React, {useState} from 'react';
import {access} from './access' 
import styles from './authForm.module.css';
import NavBar from '../NavBar/NavBar'

const AuthForm = ({allUs,allPass, onClick2, firstName, lastName,email}) => {	

	const[username, setUsername]= useState('');
	const[password, setPassword]= useState('');
	const[isLoading, setIsLoading]= useState(false); 
	const[isLoggedIn, setIsLoggedIn]= useState(false);
	const[error, setError]= useState('');
	const[form, setForm]= useState(styles.formPassive);
	
	const onSubmit = async e => {
	e.preventDefault();
	setIsLoading(true);
	setError(''); 
	
	try {
	await access(username, password,allUs,allPass);
	setIsLoggedIn(true); 
	setError('');
	setPassword('')
	} catch (error) {
	setError('Incorrect username or password');
	}
		setIsLoading(false)	
};
		
	const onLogIn = () => {
	setError('');
	setForm(styles.formActive); 
	setUsername('');
	setPassword('');
	} 

	const onLogOut = () => {
	setError('');
	setForm(styles.formActive); 
	setUsername('');
	setPassword('');
	setIsLoggedIn(false)
	}
	
	function InvalidMsg(e) { 
  
            if ((username === '')&&(password === '')) { 
                setError('Please enter username and password'); 
            } 
			else if (username === '') { 
                setError('Please enter username'); 
            } 
			else  { 
                setError('Please enter password');  
            }         
        } 
		
return (  		
<>
 {isLoggedIn ? ( 
		<div>
		<div className={styles.userGreeting}>
		<div>Welcome</div>
		<div>{username}!</div>
	<button   onClick={()=>setIsLoggedIn(false)}>Log Out</button>   
		</div>	
		
		
		</div>	) : ( 
			
	<form className={form} onSubmit={onSubmit}>
	<p className={styles.formGreeting}>Login to your account</p>
	<div>
	<button className={styles.closeForm} onClick={()=>setForm(styles.formPassive) }>&times;</button>
	
	  <input className={styles.inputName}
	  type="text" 
	  placeholder="username" 
	value={username} 
	onChange={(e)=>{setUsername(e.currentTarget.value)}}
	onInvalid={InvalidMsg}
	required 
	/> </div>
	<div> 
	  <input className={styles.inputPass}
	  type="password" 
	  placeholder="password" 
		value={password} 
		onChange={(e)=>setPassword(e.currentTarget.value)}
		onInvalid={InvalidMsg}
		required
		/> </div>
		<button 
		className={styles.submit} 
		type="submit"
		>
		{isLoading ? 'Logging In ' : 'Log In'} 
		</button>
		{error && <p className={styles.error}>{error}</p>}
		</form> 
	)}
<NavBar isLoggedIn={isLoggedIn} username={username} onLogIn={onLogIn} onClick2={onClick2} onLogOut={onLogOut} firstName={firstName} lastName={lastName} email={email}/>
</>		
)
}; 

export default AuthForm;
