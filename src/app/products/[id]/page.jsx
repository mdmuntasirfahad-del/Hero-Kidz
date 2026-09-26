import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaShoppingCart,
  FaCheckCircle,
} from "react-icons/fa";

const ProductDetails = async ({params}) => {
    const {id} = await params;
    const product = await getSingleProduct(id)
  // Destructure product
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  // Calculate discounted price
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>{title}</li>
          </ul>
        </div>

        {/* ================= PRODUCT ================= */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* IMAGE */}
              <div className="relative flex items-center justify-center">

                {discount > 0 && (
                  <div className="badge badge-error text-white absolute top-4 left-4 z-10 p-3">
                    {discount}% OFF
                  </div>
                )}

                <Image
                  src={image}
                  alt={title}
                  width={700}
                  height={700}
                  className="w-full max-h-[550px] object-contain rounded-xl"
                />

              </div>

              {/* PRODUCT DETAILS */}
              <div className="flex flex-col justify-center">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold">
                  {title}
                </h1>

                {/* Rating / Reviews / Sold */}
                <div className="flex flex-wrap items-center gap-4 mt-4">

                  <div className="flex items-center gap-1 text-warning">
                    <FaStar />
                    <span className="font-semibold">
                      {ratings}
                    </span>
                  </div>

                  <span className="text-base-content/60">
                    {reviews} Reviews
                  </span>

                  <span className="text-base-content/60">
                    {sold} Sold
                  </span>

                </div>

                <div className="divider"></div>

                {/* Price */}
                <div className="flex items-center gap-4">

                  <span className="text-4xl font-bold text-primary">
                    ৳{discountedPrice.toFixed(0)}
                  </span>

                  {discount > 0 && (
                    <span className="text-xl line-through text-base-content/40">
                      ৳{price}
                    </span>
                  )}

                </div>

                {/* Saving */}
                {discount > 0 && (
                  <p className="text-success mt-1">
                    Save ৳{(price - discountedPrice).toFixed(0)}
                  </p>
                )}

                {/* Short Description */}
                <div className="mt-6">

                  <h2 className="text-xl font-semibold mb-2">
                    Description
                  </h2>

                  <p className="text-base-content/70 leading-7">
                    {description.split("\n\n")[0]}
                  </p>

                </div>

                {/* Add To Cart */}
                <button className="btn btn-primary btn-lg mt-8">
                  <FaShoppingCart />
                  Add to Cart
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="card bg-base-100 shadow-xl mt-8">

          <div className="card-body">

            <h2 className="card-title text-2xl">
              Product Description
            </h2>

            <div className="divider"></div>

            <div className="space-y-5">

              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-base-content/70"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="card bg-base-100 shadow-xl mt-8">

          <div className="card-body">

            <h2 className="card-title text-2xl">
              Product Information
            </h2>

            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {info.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-base-200"
                >
                  <FaCheckCircle className="text-success mt-1 shrink-0" />

                  <span className="text-base-content/70">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* ================= QNA ================= */}
        <div className="card bg-base-100 shadow-xl mt-8">

          <div className="card-body">

            <h2 className="card-title text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="divider"></div>

            <div className="space-y-3">

              {qna.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-plus bg-base-200"
                >
                  <input type="checkbox" />

                  <div className="collapse-title font-semibold">
                    {item.question}
                  </div>

                  <div className="collapse-content">
                    <p className="text-base-content/70">
                      {item.answer}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="card bg-base-100 shadow-xl mt-8">

          <div className="card-body">

            <h2 className="card-title text-2xl">
              Customer Reviews
            </h2>

            <div className="divider"></div>

            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* Rating */}
              <div className="text-center">

                <div className="text-6xl font-bold text-primary">
                  {ratings}
                </div>

                <div className="flex justify-center gap-1 text-warning text-xl mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <p className="text-base-content/60 mt-2">
                  Based on {reviews} reviews
                </p>

              </div>

              {/* Rating Bars */}
              <div className="flex-1 w-full space-y-3">

                {[5, 4, 3, 2, 1].map((star) => (
                  <div
                    key={star}
                    className="flex items-center gap-3"
                  >

                    <span className="w-12">
                      {star} ★
                    </span>

                    <progress
                      className="progress progress-warning w-full"
                      value={
                        star === 5
                          ? 80
                          : star === 4
                          ? 15
                          : 5
                      }
                      max="100"
                    />

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;