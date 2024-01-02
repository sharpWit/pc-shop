// Components //
import { Skeleton } from "@/components/ui/skeleton/Skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <Skeleton className="h-10 w-[300px]" />
      </h1>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            {/* Product Image */}
            <Skeleton className="h-40 w-full object-cover mb-4" />

            {/* Product Title */}
            <Skeleton className="h-6 w-full mb-2" />

            {/* Product Description */}
            <Skeleton className="h-16 w-full mb-2" />

            {/* Product Price */}
            <Skeleton className="h-6 w-[80px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
