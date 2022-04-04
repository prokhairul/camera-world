import React from 'react';

const Map = (props) => {

    const { name, img, rating, comment } = props.review;

    return (
        <div className='review-content'>
            <img src={img} alt="" />
            <h1>{name} </h1>
            <h2> <strong>Rating: </strong>{rating}</h2>
            <p>{comment}</p>
        </div>
    );
};

export default Map;