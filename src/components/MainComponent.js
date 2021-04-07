

import MenuComponent  from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
  //it can now be used as a prop
  addComment: (dishId, rating, author, comment) => {
    dispatch(
      addComment(dishId, rating, author, comment)
      //return action object
    )
  } 
})

const MainComponent = (props) => {

  const HomePage = () => {
      return ( <HomeComponent dish={props.dishes.filter(dish => dish.featured)[0]} 
          promotion={props.promotions.filter(promo => promo.featured)[0]}
          leader={props.leaders.filter(ld => ld.featured)[0]}/> 
       );
  }

  const DishWithID = ({match}) => {
    return(
        <DishDetailComponent dish={props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
            addComment={props.addComment} // passed as attribute to dishdetail compoenet
        />
    );
  }

 
  return (
    <div>
      <HeaderComponent />
      <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={() => <AboutComponent leaders={props.leaders}/>} />
          <Route exact path='/menu' 
          component={() => <MenuComponent dishes={props.dishes} />} /> 
          {/* We can pass props to the component*/}
          <Route path='/menu/:dishId' component={DishWithID} />
          <Route exact path="/contactus" component={ContactComponent}/>
          <Redirect to='/home'></Redirect>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));