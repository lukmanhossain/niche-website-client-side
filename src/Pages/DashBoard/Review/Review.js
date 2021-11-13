import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = () => {
    return (
        <div>
            <h2>Rating Our Service</h2>
            <Rating
                initialRating={4.5}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
        </div>
    );
};

export default Review;