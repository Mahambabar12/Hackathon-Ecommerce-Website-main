// import React from 'react'
// import { TbTruckDelivery } from "react-icons/tb";
// import { IoMdCheckmark } from "react-icons/io";
// import { LuSprout } from "react-icons/lu";
// import { GoCreditCard } from "react-icons/go";
// import Image from 'next/image'; // For optimized images

// const ProductTwo = () => {
//   return (
//     <div className="bg-[#1f1a1d] text-[#F5CEDC]">
//       {/* Product Section */}
//       <section className="w-full py-16 bg-[#2A1A1F]">
//         <div className="container mx-auto px-5 flex flex-wrap lg:flex-nowrap items-start lg:items-center">
//           {/* Left: Product Image */}
//           <div className="lg:w-1/2 w-full px-4 mb-10 lg:mb-0 flex justify-center">
//             <Image
//               src="/dbchair.jpg"
//               alt="The Dandy Chair"
//               width={500}
//               height={350}
//               className="max-w-full h-auto object-contain rounded-md shadow-lg"
//             />
//           </div>

//           {/* Right: Product Details */}
//           <div className="lg:w-1/2 w-full px-4">
//             <h2 className="text-3xl font-semibold mb-8 text-center lg:text-left leading-loose">
//               The Dandy Chair
//             </h2>
//             <p className="text-xl mb-10 text-center lg:text-left leading-loose">£250</p>

//             <h3 className="text-lg font-medium mb-5">Description</h3>
//             <p className="mb-10 leading-relaxed">
//               A timeless design with premium materials. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
//             </p>

//             <h3 className="text-lg font-medium mb-5">Dimensions</h3>
//             <ul className="list-none mb-10 space-y-3 leading-relaxed">
//               <li>Height: 110cm</li>
//               <li>Width: 75cm</li>
//               <li>Depth: 50cm</li>
//             </ul>

//             <h3 className="text-lg font-medium mb-5">Amount</h3>
//             <div className="flex items-center justify-between mb-10">
//               <div className="flex items-center">
//                 <button className="border p-2 text-lg border-[#F5CEDC]">-</button>
//                 <input
//                   type="number"
//                   value="1"
//                   className="w-16 text-center border px-3 py-2 text-lg mx-3 bg-transparent border-[#F5CEDC]"
//                   min="1"
//                 />
//                 <button className="border p-2 text-lg border-[#F5CEDC]">+</button>
//               </div>
//               <button className="bg-[#F5CEDC] text-[#2A1A1F] py-2 px-8 text-lg rounded-md hover:bg-[#F7BFD0]">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Cards */}
//       <section className="bg-[#2A1A1F] py-16">
//         <div className="container mx-auto px-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { img: "/chair.png", title: "The Dandy Chair", price: "£250" },
//               { img: "/vase.png", title: "The Lucky Lamp", price: "£399" },
//               { img: "/botal.png", title: "Rustic Vase Set", price: "£155" },
//               { img: "/lamp.png", title: "The Stanley Table", price: "£125" }
//             ].map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-[#3B2B30] h-[520px] shadow-md flex flex-col items-center hover:bg-[#4A3A3F] transition-all duration-300"
//               >
//                 <Image
//                   src={product.img}
//                   alt={product.title}
//                   width={305}
//                   height={375}
//                   className="w-full h-auto object-cover mb-4"
//                 />
//                 <h4 className="text-lg font-semibold">{product.title}</h4>
//                 <p>{product.price}</p>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             <button className="p-4 w-[170px] h-[56px] text-[#2A1A1F] bg-[#F5CEDC] border-0 focus:outline-none hover:bg-[#F7BFD0] text-lg rounded-md">
//               View Collection
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <div className="container mx-auto px-6 md:px-11">
//         <h3 className="text-3xl font-bold text-center mb-10">
//           What makes our brand different
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-7 sm:ml-8">
//           {/* Feature Cards */}
//           {[{
//             icon: <TbTruckDelivery className="text-4xl" />,
//             title: "Next day as standard",
//             text: "Order before 3pm and get your order the next day."
//           }, {
//             icon: <IoMdCheckmark className="text-4xl" />,
//             title: "Made by true artisans",
//             text: "Handmade goods crafted with real passion."
//           }, {
//             icon: <GoCreditCard className="text-4xl" />,
//             title: "Unbeatable prices",
//             text: "You won't find better value for our quality."
//           }, {
//             icon: <LuSprout className="text-4xl" />,
//             title: "Recycled packaging",
//             text: "We ensure minimal environmental impact."
//           }].map((item, index) => (
//             <div
//               key={index}
//               className="text-center flex flex-col items-center bg-[#3B2B30] p-4 hover:bg-[#4A3A3F] transition duration-300 ease-in-out"
//             >
//               {item.icon}
//               <h4 className="mt-3 font-[400] text-lg mb-2">{item.title}</h4>
//               <p className="text-center">{item.text}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8">
//           <button className="p-4 w-[170px] h-[56px] text-[#2A1A1F] bg-[#F5CEDC] hover:bg-[#F7BFD0] text-lg rounded-md">
//             View Collection
//           </button>
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <section className="relative bg-cover bg-center w-full h-[481px]" style={{ backgroundImage: "url('/path_to_your_image.jpg')" }}>
//         <div className="absolute inset-0 bg-[#2A1A1F] opacity-70"></div>

//         <div className="container mx-auto px-4 py-24 relative text-center">
//           <h2 className="text-3xl font-semibold mb-4">Join the club and get the benefits</h2>
//           <p className="text-lg mb-6">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.</p>

//           <div className="flex justify-center mb-6 space-x-6">
//             {["Exclusive offers", "Free events", "Large discounts"].map((label, i) => (
//               <label key={i} className="flex items-center">
//                 <input type="radio" name="offer" className="form-radio text-[#F5CEDC]" />
//                 <span className="ml-2">{label}</span>
//               </label>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-full md:w-36 p-4 text-lg bg-[#3B2B30] text-[#F5CEDC] placeholder-[#F5CEDC] rounded-md border border-[#F5CEDC]"
//             />
//             <button className="bg-[#F5CEDC] w-full md:w-auto h-[59px] px-8 text-center text-[#2A1A1F] text-lg rounded-md hover:bg-[#F7BFD0]">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductTwo;
import React, { useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { GoCreditCard } from "react-icons/go";
import Image from 'next/image'; // For optimized images

const ProductTwo = () => {
  // Track quantity
  const [quantity, setQuantity] = useState(1);

  // Handlers for +/- buttons
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="bg-[#1f1a1d] text-[#F5CEDC]">
      {/* Product Section */}
      <section className="w-full py-16 bg-[#2A1A1F]">
        <div className="container mx-auto px-5 flex flex-wrap lg:flex-nowrap items-start lg:items-center">
          {/* Left: Product Image */}
          <div className="lg:w-1/2 w-full px-4 mb-10 lg:mb-0 flex justify-center">
            <Image
              src="/dbchair.jpg"
              alt="The Dandy Chair"
              width={500}
              height={350}
              className="max-w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 w-full px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center lg:text-left leading-loose">
              The Dandy Chair
            </h2>
            <p className="text-xl mb-10 text-center lg:text-left leading-loose">£250</p>

            <h3 className="text-lg font-medium mb-5">Description</h3>
            <p className="mb-10 leading-relaxed">
              A timeless design with premium materials. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <h3 className="text-lg font-medium mb-5">Dimensions</h3>
            <ul className="list-none mb-10 space-y-3 leading-relaxed">
              <li>Height: 110cm</li>
              <li>Width: 75cm</li>
              <li>Depth: 50cm</li>
            </ul>

            <h3 className="text-lg font-medium mb-5">Amount</h3>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <button
                  className="border p-2 text-lg border-[#F5CEDC]"
                  onClick={handleDecrease}
                  aria-label="decrease"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border px-3 py-2 text-lg mx-3 bg-transparent border-[#F5CEDC]"
                  min="1"
                />
                <button
                  className="border p-2 text-lg border-[#F5CEDC]"
                  onClick={handleIncrease}
                  aria-label="increase"
                >
                  +
                </button>
              </div>
              <button className="bg-[#F5CEDC] text-[#2A1A1F] py-2 px-8 text-lg rounded-md hover:bg-[#F7BFD0]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The rest of your component stays unchanged */}
      {/* ... */}
    </div>
  );
};

export default ProductTwo;
