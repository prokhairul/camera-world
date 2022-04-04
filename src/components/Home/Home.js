import React from 'react';
import useReviews from '../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {

    const [reviews] = useReviews();

    return (
        <div >

            <div className='review-head'>
                <h2>My Happy Clients</h2>
            </div>


            <div className='reviews-grid'>
                {
                    reviews.slice(0, 3).map(reviews => <Reviews
                        reviews={reviews}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default Home;