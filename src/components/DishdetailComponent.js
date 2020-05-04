import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if(dish == undefined){
            return (
                <div></div>
            )
        }
        else {
            return (
                <Card>        
                    <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                    <CardBody>
                        <CardTitle> { dish.name } </CardTitle>
                        <CardText> { dish.description } </CardText>
                    </CardBody>
                </Card>
        )
        }
    }
    renderComments(dish) {
        if(dish == undefined){
            return (
                <div></div>
            )
        }
        else {
            let commentOfDish = dish.comments.map((dishName) => {
                return (
                    <div key={ dishName.id } className="mt-3">
                        <ul className="list-unstyled">
                            <li className="mt-4">{ dishName.comment }</li>
                            <li className="mt-4">--{ dishName.author }, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(dishName.date)))}</li>
                        </ul>
                    </div>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    { commentOfDish }
                </div>  
            )
        }
    }
    render() {
        let dish = this.props.selectedDish;
        
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-sm-5 m-1">
                            {this.renderComments(dish)}
                        </div>
                    </div>
                </div>
        )
    }
}

export default DishDetail;