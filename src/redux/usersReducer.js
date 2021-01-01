const ADD_USER = 'ADD_USER'
const UPDATE_USER = 'UPDATE_USER'


let initialState = {
  users: [
    { id: 1, username: 'admin', password: 'p', },
  ],
  newUserName: '',
  newPassword: '',

};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { id: 2, username: state.newUserName, password: state.newPassword, }],
        newUserName: '',
        newPassword: '',
      };
    case UPDATE_USER:
      return {
        ...state,
        newUserName: action.bodyName,
        newPassword: action.bodyPassword
      };
    default:
      return state;
  }
}

export const addUserCreator = () => {
  return {
    type: ADD_USER,
  }
}

export const updateUserCreator = (bodyName, bodyPassword) => {
  return {
    type: UPDATE_USER,
    bodyName: bodyName,
    bodyPassword: bodyPassword
  }
}


export default usersReducer