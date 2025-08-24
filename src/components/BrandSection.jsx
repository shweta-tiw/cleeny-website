import brand1 from "../assets/images/brand-img.png";
import brand2 from "../assets/images/brand-img2.png";
import brand3 from "../assets/images/brand-img3.png";
import brand4 from "../assets/images/brand-img4.png";
import brand5 from "../assets/images/brand-img5.png";

const brands = [brand1, brand2, brand3, brand4, brand5];

const BrandSection = () => {
  return (
    <section className="bg-[#F3F4F8] py-10 sm:py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-1 min-w-[100px] sm:min-w-[120px] max-w-[140px] sm:max-w-[160px] flex justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-12 sm:h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
