
import React from 'react';
import useReviews from '../hooks/useReviews';
import ShowReview from './ShowReview';

const AllReviews = (props) => {
    const [reviews] = useReviews();
    return (
        <div>
            <div className='review-head'>
                <h2>All Reviews</h2>
            </div>

            <div className='reviews-grid'>
                {
                    reviews.map(review => <ShowReview
                        key={review.id}
                        review={review}
                    ></ShowReview>)

                }
            </div>
        </div>
    );
};

export default AllReviews;