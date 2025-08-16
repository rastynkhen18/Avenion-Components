import React from 'react';
import gallery01 from '../assets/images/gallery-01.png';
import gallery02 from '../assets/images/gallery-02.png';
import gallery03 from '../assets/images/gallery-03.png';

const GallerySection = () => {
  return (
    <div>
      <section className="bg-[var(--black-color)]">
      <div className="grid grid-cols-4 items-center gap-5 p-15">
          {/* Heading Section */}
          <div className="text-center md:text-left">
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
          <div>
            <img
              className="w-full h-96 object-cover"
              src={gallery01}
              alt="gallery01"
            />
          </div>

          <div>
            <img
              className="w-full h-96 object-cover"
              src={gallery02}
              alt="gallery02"
            />
          </div>

          <div>
            <img
              className="w-full h-96 object-cover"
              src={gallery03}
              alt="gallery3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;