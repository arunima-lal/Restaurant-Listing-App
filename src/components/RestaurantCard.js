import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (
        <Link to={`/view-restaurant/${restaurants.id}`} style={{color:'white',textDecoration:'none'}} >
            <Card>
              <Card.Img style={{height:'350px', borderRadius:'30px'}} className='p-2' variant="top" src={restaurants.photograph} />
              <Card.Body>
                <Card.Title>{restaurants.name}</Card.Title>
                <Card.Text>
                 <p>Cuisine: {restaurants.cuisine_type}</p> 
                </Card.Text>
                <Card.Text>
                  <p className=''>{restaurants.neighborhood}</p>
                </Card.Text>
              </Card.Body>
            </Card>
        </Link>
  );
}

export default RestaurantCard