"use client";
import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [description, setDescription] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/images/img1.png", "/images/img2.png", "/images/img3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex items-stretch">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 lg:px-0">
        <div className="relative hidden md:block">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              alt={`slider image ${index + 1}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-green-900/30 to-forest-green-900/50"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
