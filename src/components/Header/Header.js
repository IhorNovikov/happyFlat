import React from 'react';
import styles from './header.module.css';
import SingUpFormContainer from '../SingUpForm/SingUpFormContainer'


const Header = () => {

  return ( < div className = { styles.header } >
    <SingUpFormContainer/>
    </div>
  )
};

export default Header;