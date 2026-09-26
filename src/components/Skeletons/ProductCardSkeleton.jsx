import React from "react";

const ProductCardSkeleton = () => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm overflow-hidden animate-pulse">

            {/* Image Skeleton */}
            <div className="relative">
                <div className="skeleton w-full aspect-square rounded-none"></div>

                {/* Discount Skeleton */}
                <div className="absolute top-3 left-3">
                    <div className="skeleton h-7 w-20 rounded-full"></div>
                </div>

                {/* Wishlist Skeleton */}
                <div className="absolute top-3 right-3">
                    <div className="skeleton w-9 h-9 rounded-full"></div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="card-body p-4">

                {/* Title */}
                <div className="skeleton h-6 w-full rounded"></div>
                <div className="skeleton h-6 w-3/4 rounded"></div>

                {/* Bangla */}
                <div className="skeleton h-4 w-2/3 rounded mt-1"></div>

                {/* Rating */}
                <div className="flex items-center gap-3 mt-3">
                    <div className="skeleton h-5 w-12 rounded"></div>
                    <div className="skeleton h-5 w-24 rounded"></div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                        <div className="skeleton h-8 w-28 rounded"></div>
                        <div className="skeleton h-5 w-16 rounded mt-1"></div>
                    </div>

                    <div className="skeleton h-5 w-14 rounded"></div>
                </div>

                {/* Button */}
                <div className="flex gap-2 mt-4">
                    <div className="skeleton h-12 flex-1 rounded-lg"></div>
                    <div className="skeleton h-12 w-12 rounded-lg"></div>
                </div>

            </div>
        </div>
    );
};

export default ProductCardSkeleton;