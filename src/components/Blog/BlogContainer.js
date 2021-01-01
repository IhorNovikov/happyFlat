import Blog from './Blog'
import {addNewsCreator,updateNewsCreator,ClearAllCreator} from '../../redux/blogReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
	blogPage: state.blogPage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	updateNews: (body) => {dispatch(updateNewsCreator(body))},
	addNews: () => {dispatch(addNewsCreator())},
	ClearAll: () => {dispatch(ClearAllCreator())},
	}
};

const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog);
	
export default BlogContainer;	
	
  
