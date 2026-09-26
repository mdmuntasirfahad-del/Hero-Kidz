import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton";

const ProductsLoading = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-20">
        <span className="skeleton inline-block h-12 w-64"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsLoading;
