import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './category.css';
const IndividualItem = (props) => {
    
	return (
		props.mainData ? 
        <div className="maincat">
        {
           props.mainData.map(el => {
            return (
                <div className="item">
                <Card style={{ width: '18rem' }} key={el.name}>
            <Card.Img variant="top" src={props.cat ? `/category/${el.image}` :  
            `/category/subcategory/${el.image}`}
            />
            <Card.Body>
                {
                    props.cat ? <Button variant="primary" onClick={(e) => props.catCliked(e,el)}>{el.name}</Button>: <div className="subcat"><Button variant="primary" onClick={(e) => props.back()}>Back</Button><Card.Title>{el.name}</Card.Title></div>
                }
            
                
            </Card.Body>
        </Card>
        </div>
            )
            })
        }
    </div>: ''
	);
};

export default IndividualItem;
