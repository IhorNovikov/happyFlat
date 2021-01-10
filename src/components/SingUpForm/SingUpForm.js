import React, {useState} from 'react';
import styles from './singUpForm.module.css';
import AuthForm from '../AuthForm/AuthForm'


const SingUpForm = (props) => {


	let state = props.usersPage;
	let addUser = () => {
		props.addUser()
	};


let allUs = state.users.map((user)=> user.username)
let allPass = state.users.map((user)=> user.password)


	const[username, setUsername]= useState('');
	const[firstName, setFirstName]= useState('');
	const[lastName, setLastName]= useState('');
	const[password, setPassword]= useState('');
	const[email, setEmail]= useState('');
	const[isRegistered, setIsRegistered]= useState(false);
	const[error, setError]= useState('');
	const[form, setForm]= useState(styles.formPassive);
	
	const onSubmit = async e => {
	e.preventDefault();
	setError(''); 

	let bodyName = username;
	let bodyPassword = password;
	
	
	let regexp=/@/
	if ((username.length>= 3) && (username.length<=10)
		&&(password.length>=3)&& (password.length<=10)
		&&(regexp.test(email))
		){
				             
	setTimeout(()=> {setIsRegistered(true)},1000)
		
	props.updateUser(bodyName, bodyPassword);
	addUser();	
		
			} else if((username === '')&&(password ==='')) { 
                setError('Please enter username and password'); 
			} else if ((username.length<= 3)&&(password.length<=3)) { 
                setError('Use more than 3 symbols for your username and password'); 
			} else if ((username.length>= 10)||(password.length>=10)) { 
                setError('Username and password must be less than 10 symbols');	
            } else if (username === '') { 
                setError('Please enter username'); 
			} else if ( (email === '') ) { 
                setError('Please enter your email adress');
			} else if ( (!regexp.test(email)) ) { 
                setError('Your email adress should include @');
            } else  { 
                setError('Please enter password');  
            }         
}; 
	
		
	const onClick2= () => { 
	setError('');
	setForm(styles.formActive); 
	setUsername('');
	setPassword('');
	setEmail('');
	} 
	
	const onClick3= () => { 
	setError('');
	setIsRegistered(false); 
	setForm(styles.formPassive);
	setUsername('');
	setPassword('');
	} 

			
return (  		
<>
<AuthForm allUs={allUs} allPass={allPass} onClick2={onClick2} firstName={firstName} lastName={lastName} email={email}  />
 {isRegistered ? ( 
		<div className={styles.userGreeting}>
		<div>
		Welcome {firstName}!<br/> You successfully completed registration!<br/>
		Your login: {username}<br/> 
		Your password: {password}<br/>
		Your email: {email}<br/>
		Now you can login and get more features!
		<button className={styles.closeGreeting} onClick={onClick3 }>&times;</button>
		</div>
		</div>	) : ( 	 			
	<form className={form} onSubmit={onSubmit} >
	<p className={styles.formGreeting}>Register your account</p>
	<div>
	<button  className={styles.closeForm} onClick={()=>setForm(styles.formPassive) }>&times;</button>
	
	  <input className={styles.inputName}
	  type="text" 
	  placeholder="username" 
	value={username} 
	onChange={(e)=>{setUsername(e.currentTarget.value)}}
	required 
	/> 
	</div>
	<div> 
	  <input className={styles.inputPass}
	  type="text" 
	  placeholder="FirstName" 
		value={firstName} 
		onChange={(e)=>setFirstName(e.currentTarget.value)}
		required
		/> 
	</div>
	<div> 
	  <input className={styles.inputPass}
	  type="text" 
	  placeholder="LastName" 
		value={lastName} 
		onChange={(e)=>setLastName(e.currentTarget.value)}
		required
		/> 
	</div>
	<div> 
	  <input className={styles.inputPass}
	  type="password" 
	  placeholder="password" 
		value={password} 
		onChange={(e)=>setPassword(e.currentTarget.value)}
		required
		/> 
	</div>
	<div> 
	  <input className={styles.inputEmail}
	  type="text" 
	  placeholder="email adress" 
		value={email} 
		onChange={(e)=>setEmail(e.currentTarget.value)}	
		required
		/> 
	</div>
		<button 
		className={styles.submit} 
		type="submit"
		>
		 Sing Up     
		</button>
		{error && <p className={styles.error}>{error}</p>}		
		</form>	
)}
</>		
)
};

export default SingUpForm;
