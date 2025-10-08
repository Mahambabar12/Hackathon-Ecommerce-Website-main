// import Image from "next/image";

// export default function ShoppingCart() {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-white dark:bg-[#2A1A1F] text-[#2A254B] dark:text-pink-100 transition-all duration-300">
//       <h1 className="text-3xl font-bold mb-6">Your shopping cart</h1>

//       <div className="space-y-6">
//         {/* Cart Item 1 */}
//         <div className="flex items-center justify-between border-b border-gray-300 dark:border-pink-300 pb-4">
//           <div className="flex items-center">
//             <Image
//               src="/vaseleave.png"
//               alt="Graystone Vase"
//               width={100}
//               height={100}
//               className="w-20 h-20 object-cover rounded-lg"
//             />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold">Graystone vase</h2>
//               <p className="text-sm text-gray-500 dark:text-pink-300">
//                 A timeless ceramic vase with a tri color grey glaze.
//               </p>
//               <p className="text-sm font-bold mt-1">£85</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white">
//               -
//             </button>
//             <span>1</span>
//             <button className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white">
//               +
//             </button>
//           </div>
//           <p className="font-bold">£85</p>
//         </div>

//         {/* Cart Item 2 */}
//         <div className="flex items-center justify-between border-b border-gray-300 dark:border-pink-300 pb-4">
//           <div className="flex items-center">
//             <Image
//               src="/leave.png"
//               alt="Basic White Vase"
//               width={100}
//               height={100}
//               className="w-20 h-20 object-cover rounded-lg"
//             />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold">Basic white vase</h2>
//               <p className="text-sm text-gray-500 dark:text-pink-300">
//                 Beautiful and simple, this one is for the classics.
//               </p>
//               <p className="text-sm font-bold mt-1">£125</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white">
//               -
//             </button>
//             <span>1</span>
//             <button className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white">
//               +
//             </button>
//           </div>
//           <p className="font-bold">£125</p>
//         </div>
//       </div>

//       {/* Subtotal */}
//       <div className="mt-6 flex justify-end">
//         <div>
//           <p className="text-lg font-semibold">
//             Subtotal: <span className="font-bold">£210</span>
//           </p>
//           <p className="text-sm text-gray-500 dark:text-pink-300 lg:pr-16">
//             Taxes and shipping are calculated at checkout.
//           </p>
//         </div>
//       </div>

//       {/* Checkout Button */}
//       <div className="mt-6 flex justify-end">
//         <button className="bg-[#2A254B] text-white px-6 py-2 rounded-lg hover:bg-pink-800 hover:text-white transition-all duration-300">
//           Go to checkout
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Image from "next/image";

type CartItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  alt: string;
};

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      title: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/vaseleave.png",
      alt: "Graystone Vase",
    },
    {
      id: 2,
      title: "Basic white vase",
      description: "Beautiful and simple, this one is for the classics.",
      price: 125,
      quantity: 1,
      image: "/leave.png",
      alt: "Basic White Vase",
    },
  ]);

  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-[#2A1A1F] text-[#2A254B] dark:text-pink-100 transition-all duration-300">
      <h1 className="text-3xl font-bold mb-6">Your shopping cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 dark:border-pink-300 pb-4"
          >
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.alt}
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 dark:text-pink-300">
                  {item.description}
                </p>
                <p className="text-sm font-bold mt-1">£{item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecrease(item.id)}
                className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white"
                aria-label={`Decrease quantity of ${item.title}`}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="border border-gray-300 dark:border-pink-300 px-2 py-1 text-gray-500 dark:text-pink-300 hover:text-black dark:hover:text-white"
                aria-label={`Increase quantity of ${item.title}`}
              >
                +
              </button>
            </div>
            <p className="font-bold">£{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <div>
          <p className="text-lg font-semibold">
            Subtotal: <span className="font-bold">£{subtotal}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-pink-300 lg:pr-16">
            Taxes and shipping are calculated at checkout.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-[#2A254B] text-white px-6 py-2 rounded-lg hover:bg-pink-800 hover:text-white transition-all duration-300">
          Go to checkout
        </button>
      </div>
    </div>
  );
}
