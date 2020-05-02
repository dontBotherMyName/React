import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    renderDish = (dish) =>  {

        if (dish != null) {
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

        else {
            return (
                <div></div>
            )
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Dishdetail;