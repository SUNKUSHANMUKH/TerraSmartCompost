import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="floating-leaf leaf-1">🌿</div>
      <div className="floating-leaf leaf-2">🍃</div>
      <div className="floating-leaf leaf-3">🌱</div>
      <div className="floating-leaf leaf-4">🌿</div>
      <div className="floating-leaf leaf-5">🍃</div>
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
    </div>
  );
};

export default FloatingElements;