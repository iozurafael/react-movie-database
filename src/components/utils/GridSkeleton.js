function GridSkeleton({ count }) {
  const skeletonLoader = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="skeleton-image"></div>
  ));

  return <div className="movies-grid">{skeletonLoader}</div>;
}

export default GridSkeleton;
