import React from 'react';
import './Reviews.css'


const Reviews = (props) => {

    const { img, name, rating, comment } = props.reviews;

    return (


        <div className='review-content'>
            <img src={img} alt="" />
            <h1>{name} </h1>
            <h2> <strong>Rating: </strong>{rating}</h2>
            <p>{comment}</p>
        </div>
    );
};

export default Reviews;