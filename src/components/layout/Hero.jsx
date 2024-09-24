import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12 ">
        <h1 className="text-4xl font-semibold">
          Pizza <br /> <span className="text-primary">Delivery</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in, sapiente ducimus
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order Now
            <FaAngleRight />
          </button>

          <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">
            Learn More <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src="/pizza.png" alt="pizza" layout={'fill'} objectFit={'contain'} />
      </div>
    </section>
  );
};

export default Hero;
