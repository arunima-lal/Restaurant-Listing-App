import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap';
import RestaurantCard from './RestaurantCard'
import {RestaurantsList} from '../actions/HomeAction';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
//state for holding data from API call

// const [restaurants, setRestaurants]= useState([])

// function to get data from API

// const fetchData = async ()=>{
//     const result = await fetch('/restaurants.json')
//    result.json().then(
//     data=>{
//         setRestaurants(data.restaurants);
//     }
//    )
// }

// console.log(restaurants);

const dispatch = useDispatch()

useEffect(() =>{
    // fetchData()
    dispatch(RestaurantsList())
},[])

const {restaurants} = useSelector(state=>state.restaurantReducer)
console.log(restaurants);

  return (
<Row>
    {
        restaurants.map(item=>(
            <Col className='px-5 py-3' sm={6} md={4}>
                <RestaurantCard restaurants={item}/>
            </Col>
        ))
    }
</Row>

  )
}

export default Home