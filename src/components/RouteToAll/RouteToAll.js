import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Article1 from '../Articles/Article1/Article1'
import Article2 from '../Articles/Article2/Article2'
import Article3 from '../Articles/Article3/Article3'
import Article4 from '../Articles/Article4/Article4'
import Article5 from '../Articles/Article5/Article5'
import Article6 from '../Articles/Article6/Article6'
import Contacts from '../Contacts/Contacts'
import BlogContainer from '../Blog/BlogContainer'
import Home from '../Home/Home'
import Turnkey from '../Turnkey/Turnkey'
import Dismantling from '../Dismantling/Dismantling'
import Electric from '../Electric/Electric'
import Plumbing from '../Plumbing/Plumbing'
import Painting from '../Painting/Painting'
import Profile from '../Profile/Profile'
import ProfileInfo from '../Profile/ProfileInfo'
import SingUpFormContainer from '../SingUpForm/SingUpFormContainer'
import Users from '../Users/Users'



 const RouteToAll = () => (
  <div>
    <Switch>
      <Route exact path='/' render={()=> <Home/>}/>
	  <Route path='/article1' render={()=> <Article1/>}/>
	  <Route path='/article2' render={()=> <Article2/>}/>
	  <Route path='/article3' render={()=> <Article3/>}/>
	  <Route path='/article4' render={()=> <Article4/>}/>
	  <Route path='/article5' render={()=> <Article5/>}/>
	  <Route path='/article6' render={()=> <Article6/>}/>
	  <Route path='/blog' render={()=> <BlogContainer/>}/>
	  <Route path='/mainPage' render={()=> <Home/>}/>
	  <Route path='/turnkey' render={()=> <Turnkey/>}/>
	  <Route path='/dismantling' render={()=> <Dismantling/>}/>
	  <Route path='/electric' render={()=> <Electric/>}/>
	  <Route path='/plumbing' render={()=> <Plumbing/>}/>
	  <Route path='/painting' render={()=> <Painting/>}/>
	  <Route path='/contacts' render={()=> <Contacts/>}/>
	  <Route path='/profile' render={()=> <Profile/>}/>
	  <Route path='/profileInfo' render={()=> <ProfileInfo/>}/>
	  <Route path='/singUp' render={()=> <SingUpFormContainer/>}/>
	  <Route path='/users' render={()=> <Users/>}/>
	  <Route path='/*'>404 NOT FOUND</Route>
    </Switch>
  </div>
)
 

export default RouteToAll;
