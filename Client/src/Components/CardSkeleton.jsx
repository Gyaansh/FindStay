const CardSkeleton = () => {
  return (
    <div className="border-2 border-transparent shadow-xl max-w-63 h-70 max-h-74 rounded-2xl border-grey-100 m-4 bg-white animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-[250px] bg-gray-200 rounded-2xl"></div>
      
      {/* Content Placeholder */}
      <div className="p-2 mt-1">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        {/* Description */}
        <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-3"></div>
        {/* Price */}
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
