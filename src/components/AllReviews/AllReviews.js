import { faDove } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Map from '../AllReviewMap/Map';
import useReviews from '../hooks/useReviews';

const AllReviews = (props) => {

    const [reviews] = useReviews();

    return (

        <div>

            <div className='review-head'>
                <h2>My Happy Clients</h2>
            </div>

            <div className='reviews-grid'>
                {
                    reviews.map(review => <Map
                        review={review}
                    ></Map>)

                }
            </div>

        </div>

    );
};

export default AllReviews;