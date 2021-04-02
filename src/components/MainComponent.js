

import MenuComponent  from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { useState } from 'react'
import DishDetailComponent from './DishDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

const MainComponent = () => {
  const [dishes,setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS)

  const HomePage = () => {
      return ( <HomeComponent dish={dishes.filter(dish => dish.featured)[0]} 
          promotion={promotions.filter(promo => promo.featured)[0]}
          leader={leaders.filter(ld => ld.featured)[0]}/> 
       );
  }

  const DishWithID = ({match}) => {
    return(
        <DishDetailComponent dish={dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
        />
    );
  }

 
  return (
    <div>
      <HeaderComponent />
      <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={() => <AboutComponent leaders={leaders}/>} />
          <Route exact path='/menu' 
          component={() => <MenuComponent dishes={dishes} />} /> 
          {/* We can pass props to the component*/}
          <Route path='/menu/:dishId' component={DishWithID} />
          <Route exact path="/contactus" component={ContactComponent}/>
          <Redirect to='/home'></Redirect>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;