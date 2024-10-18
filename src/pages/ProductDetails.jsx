import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const PRODUCT_API = "https://fakestoreapi.com/products";
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`${PRODUCT_API}/${id}`)
      .then((data) => data.json())
      .then((data) => setProductDetails(data));
  });
  const { image, title, price, description, category, rating } = productDetails;

  return (
    <div className="flex items-center h-[500px] p-4 border-2 border-gray-200 m-4 rounded-2xl">
      <img src={image} className="pr-8 max-w-[400px] max-h-[400px]" alt="" />
      <div className="flex flex-col">
        <h1 className="p-2 font-bold">{title}</h1>
        <p>
          <span className="p-2">&#11088;</span>
          {rating ? rating.rate : null}
        </p>
        <p className="underline p-2">{category}</p>
        <p className="w-2/3 p-2">{description}</p>

        
        <div className="flex gap-6">
        <p className="bg-red-500 rounded-lg p-2 text-white">{price}$</p>
        <button className="bg-green-500 rounded-lg p-2 transition-all text-white hover:bg-green-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
/*
 Yes, the issue arises because the rating object may not be defined at the time
 you try to access rating.rate. The expression {rating ? rating.rate : 'N/A'}
 is a safeguard that prevents your code from throwing an error when rating is undefined.
 */
