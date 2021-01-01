import React from 'react';
import styles from './blog.module.css';



const Blog = (props) => {
let state = props.blogPage	
   
let latestPosts = state.posts
.map((n) => <table className={styles.userAva}><td><img src={require('./img/1.jpeg')} alt='wrong path'/></td>
<td><li key={n.id}><tr className={styles.data}>{new Date().toDateString()}</tr> <tr>{n.postedNews}</tr></li></td></table>)  
   

let addMessage =() => {
	props.addNews()
}

let ClearAll=() => {
	props.ClearAll()
}

let newPosts = state.newPosts;  

let onNewMessageChange =(e) => {
let body = e.target.value;
props.updateNews(body);
}	

return (
<div className={styles.blog} > 
  <ol className={styles.blogPosts}>
	{latestPosts}
  </ol>
<div className={styles.inputForm}>
<h3>Please write here your thoughts </h3>
<textarea onChange={onNewMessageChange } placeholder="add message" value={newPosts}></textarea>
<button  onClick={addMessage}  >Add information</button><button  onClick={ClearAll} >Clear list</button>
</div>

</div>

)   
}

export default Blog;
