// components/FancySkeletonLoader.js
import React from 'react';
import './FancySkeletonLoader.css';

const FancySkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header shimmer"></div>
      <div className="skeleton-subheader shimmer"></div>

      <div className="skeleton-cards">
        {[1, 2, 3].map((item) => (
          <div className="skeleton-card shimmer" key={item}>
            <div className="skeleton-thumbnail shimmer"></div>
            <div className="skeleton-line short shimmer"></div>
            <div className="skeleton-line shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancySkeletonLoader;
