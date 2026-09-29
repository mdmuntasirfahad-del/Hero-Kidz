import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const AddToCart = () => {
    return (
        <div>
            <button className="btn btn-primary flex-1">
                <FaCartPlus className="text-lg" />
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;