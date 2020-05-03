import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes'

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
            //console.log()
            let commentOfDish = dish.comments.map((dishName) => {
                return (
                    <div key={ dishName.id } className="mt-3">
                        <ul className="list-unstyled">
                            <li className="mt-4">{ dishName.comment}</li>
                            <li className="mt-4">--{ dishName.author }, { dishName.date } </li>
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
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                            
                </div>
                <div className="col-12 col-sm-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </React.Fragment>
            
        )
    }
}

export default DishDetail;