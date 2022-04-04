
import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'


const Home = () => {

    const [reviews] = useReviews();

    return (
        <div>
            <div className='head-bottom'>
                <div>
                    <h2>Welcome To Camera World </h2>
                    <p> <strong>Hello Photographer's,</strong> The Fujifilm X-T10 is a DSLR-styled mirrorless camera announced by Fujifilm on May 18, 2015.  It is a smaller, lighter and more affordable alternative to the Fujifilm X-T1 with which it shares a sensor and processor. Check out our honorable buyer's review.  </p>
                </div>
                <div>
                    <img src="https://khairulislam.com/wp-content/uploads/2022/04/Camera-Photo.png" alt="" />
                </div>
            </div>



            <div className='review-head'>
                <h2>Most Popular Reviews</h2>
            </div>
            <div className='reviews-grid'>
                {
                    reviews.slice(0, 3).map(reviews => <Reviews
                        key={reviews.id}
                        reviews={reviews}
                    ></Reviews>)
                }
            </div>

            <div className='review-head'>
                <Link to="/allreviews"> <h2>See All Review </h2> </Link>
            </div>
        </div>
    );
};

export default Home;