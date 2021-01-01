import SingUpForm from './SingUpForm'
import {addUserCreator, updateUserCreator} from '../../redux/usersReducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		addUser: () =>{dispatch(addUserCreator())},
		updateUser: (bodyName,bodyPassword) =>{dispatch(updateUserCreator(bodyName,bodyPassword))}
	}
}

export const SingUpFormContainer = connect(mapStateToProps,mapDispathToProps)(SingUpForm)

export default SingUpFormContainer;
