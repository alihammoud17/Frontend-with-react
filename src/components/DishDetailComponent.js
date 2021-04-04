
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentFormComponent from './CommentFormComponent';

const RenderDish = ({dish}) => {
    if(dish == null) {
        return( <div></div> );
    }
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div> 
    );
}

const RenderComments = ({comments}) => {
    if(comments == null) {
        return( <div></div> );
    }
    const cmts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, &nbsp;
                    {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {cmts}
            </ul>
            <CommentFormComponent />
        </div>
        
    )
}


const DishDetailComponent = (props) => {

    // const [selectedDishDetail,setSelectedDishDetail] = useState(props.dsdetail);

    const dish = props.dish;
    const comments = props.comments;

    if (dish == null) {
        return ( <div></div> );
    }

    return (
        <div class="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={dish}/>
                <RenderComments comments={comments}/>
            </div>
        </div>
        
    )
}

DishDetailComponent.propTypes = {
    dish: PropTypes.array,
    comments: PropTypes.array
}

export default DishDetailComponent
