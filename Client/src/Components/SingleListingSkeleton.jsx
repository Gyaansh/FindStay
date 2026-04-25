const SingleListingSkeleton = () => {
  return (
    <div className="min-h-screen bg-orange-50 pt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-0">
        {/* IMAGE GALLERY SKELETON */}
        <div className="animate-pulse">
          <div className="w-full h-[420px] bg-gray-200 rounded-2xl shadow-lg" />
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="h-24 w-36 bg-gray-200 rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* DETAILS SECTION SKELETON */}
        <div className="bg-white rounded-2xl shadow-xl p-8 relative animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-6" />

          <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-md ring-1 ring-gray-100">
            <div className="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-3 bg-gray-200 rounded w-1/4" />
              <div className="h-5 bg-gray-200 rounded w-1/2" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>

          <div className="mt-8 h-8 bg-gray-200 rounded w-1/3" />

          <div className="mt-6 h-14 bg-gray-200 rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default SingleListingSkeleton;
