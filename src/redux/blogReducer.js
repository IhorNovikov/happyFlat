const ADD_NEWS = "ADD_NEWS";
const UPDATE_NEWS = "UPDATE_NEWS";
const CLEAR_ALL = "CLEAR_ALL";

const initialState = {
  posts: [
    { id: "1", postedNews: 'Try to personally participate in the purchases of building materials by the repairmen, remembering that among them there are also unscrupulous ones who enter into the estimate much exceeding the amount spent. For a 100% guarantee, be sure to demand, in addition to the sales receipt, also the cash receipt. Treat various discounts and sales with a cold calculation, otherwise, there is a high probability of purchasing a lot of unnecessary things. Also, you should not order construction products via the Internet until you see or feel them live.'},
    { id: "2", postedNews: 'No matter what time of the year you start repairs, it is most profitable to look for craftsmen and a work team in the post-holiday period. It is then that most proposals appear on the market and prices are often reduced. And the more the choice of contractors, the more profitable you can negotiate with them.' }
  ],
  newPosts: ' ',
}

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state, 
        posts: [...state.posts, { id: 3, postedNews: state.newPosts }], 
        newPosts: " ", 
      };
    case UPDATE_NEWS:
      return {
        ...state,
        newPosts: action.body
      };
    case CLEAR_ALL:
      return {
        ...state,
        posts: [],
        newPosts: " ",
      };
    default:
      return state;
  }
}

export const addNewsCreator = () => {
  return {
    type: ADD_NEWS
  }
}

export const updateNewsCreator = (body) => {
  return {
    type: UPDATE_NEWS,
    body: body
  }
}

export const ClearAllCreator = () => {
  return {
    type: CLEAR_ALL
  }
}

export default blogReducer