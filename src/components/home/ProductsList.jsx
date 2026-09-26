import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';

const ProductsList = async () => {

    const products = (await getProducts()) || 
    [];

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-20'>Our Products</h2>

            <div className='grid grid-cols-4 gap-10'>

{
    products.map((toy,index)=><ProductCard key={index} product={toy}></ProductCard>)
}

            </div>
        </div>
    );
};

export default ProductsList;