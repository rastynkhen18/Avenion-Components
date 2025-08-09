import React from 'react';
import gallery1 from '../assets/images/gallery-01.png';
import gallery2 from '../assets/images/gallery-02.png';
import gallery3 from '../assets/images/gallery-03.png';

const GallerySection = () => {
  return (
    <div>
      <section className="bg-[var(--black-color)]">
      <div className="grid grid-cols-4 items-center gap-5 p-15">
          {/* Heading Section */}
          <div className="col-span-4 md:col-span-1 text-center md:text-left mb-10 lg:mb-0">
            <h1 className="text-7xl text-[var(--white-color)] font-semibold">
              EFFORTLESS COMFORT.
            </h1>
            <h1
              className="text-7xl font-semibold"
              style={{
                WebkitTextStroke: '2px var(--white-color)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              EVERYDAY STYLE.
            </h1>
          </div>

          {/* Gallery Images */}
          <div className="col-span-4 md:col-span-1">
            <img
              className="w-full h-96 object-cover"
              src={gallery1}
              alt="gallery1"
            />
          </div>

          <div className="col-span-4 md:col-span-1">
            <img
              className="w-full h-96 object-cover"
              src={gallery2}
              alt="gallery2"
            />
          </div>

          <div className="col-span-4 md:col-span-1">
            <img
              className="w-full h-96 object-cover"
              src={gallery3}
              alt="gallery3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;