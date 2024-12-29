import React, { useState, useEffect } from "react";
import "./Birthday.css";

const BirthdayPage = () => {
  const [visibleFlowers, setVisibleFlowers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleFlowers((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="birthday-container">
      <div className="flower-grid">
        {Array.from({ length: visibleFlowers }).map((_, index) => (
          <div key={index} className="flower">
            <div className="petal petal-1"></div>
            <div className="petal petal-2"></div>
            <div className="petal petal-3"></div>
            <div className="petal petal-4"></div>
            <div className="petal petal-5"></div>
            <div className="petal petal-6"></div>
            <div className="center"></div>
            <div className="stem"></div>
            <div className="leaf leaf-left"></div>
            <div className="leaf leaf-right"></div>
          </div>
        ))}
      </div>
      {visibleFlowers >= 5 && (
        <h1 className="birthday-text">
          🎉 Happy Birthday! 🎉<br /> Ahlem 🌺
        </h1>
      )}
    </div>
  );
};

export default BirthdayPage;
