// "use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaStar,
  FaRegHeart,
  FaCartPlus,
  FaEye,
} from "react-icons/fa";
import AddToCart from "../buttons/AddToCart";

const ProductCard = ({ product }) => {
    console.log(product)
  const {
    _id,
    title,
    bangla,
    image,
    price,
    discount,
    reviews,
    ratings,
  } = product;

  const discountedPrice = Math.round(
    price - (price * discount) / 100
  );

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">

      {/* Image */}
      <div className="relative bg-base-200">

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <span className="badge badge-error text-white font-semibold px-3 py-3">
              {discount}% OFF
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          className="btn btn-circle btn-sm absolute top-3 right-3 z-10 bg-base-100 border-none shadow-md hover:bg-base-200"
          aria-label="Add to wishlist"
        >
          <FaRegHeart className="text-lg" />
        </button>

        <div className="aspect-square overflow-hidden">
          <Image
          width={300}
          height={180}
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Product Information */}
      <div className="card-body p-4">

        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2">
          {title}
        </h2>

        {/* Bangla */}
        <p className="text-sm text-base-content/60 line-clamp-1">
          {bangla}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span className="font-semibold">
              {ratings}
            </span>
          </div>

          <span className="text-base-content/30">|</span>

          <span className="text-sm text-base-content/60">
            {reviews} Reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice.toLocaleString()}
            </span>

            {discount > 0 && (
              <span className="text-sm text-base-content/40 line-through">
                ৳{price.toLocaleString()}
              </span>
            )}
          </div>

          {discount > 0 && (
            <span className="text-xs font-semibold text-error">
              Save {discount}%
            </span>
          )}

        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">

          {/* Add To Cart */}
          <AddToCart></AddToCart>

          {/* View Details */}
          <Link href={`/products/${_id}`}
        //    onClick={() => router.push(`/products/${_id}`)}
            className="btn btn-outline btn-primary btn-square"
            title="View Details"
          >
            <FaEye className="text-lg" />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;