import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


   function RenderDish({dish}) {
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
    function RenderComments({dish}) {
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
    function DishDetail(props) {
        if(props.selectedDish == null) {
            return (
                <div></div>
            )
        }
        else {
            return (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.selectedDish} />
                            </div>
                            <div className="col-12 col-sm-5 m-1">
                                <RenderComments dish={props.selectedDish}/>
                            </div>
                        </div>
                    </div>
            )
        }
    }

export default DishDetail;