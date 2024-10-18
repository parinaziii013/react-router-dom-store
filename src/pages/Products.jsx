import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PRODUCTS_LIST_API = "https://fakestoreapi.com/products";
export const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch(PRODUCTS_LIST_API)
      .then((data) => data.json())
      .then((data) => setProductsList(data));
    // .then(data => console.log(data))
  });
  // console.log(productsList)
  return (
    <div className="flex flex-wrap p-2">
      {productsList.map(({ id, title, price, image }) => (
        <div key={id} className="w-1/3 ">
          <Link to={`details/${id}`}>
            <div className="border-[1px] border-gray-200 p-2 m-2 h-[400px] rounded-2xl hover:shadow-xl">
              <div className="w-full h-[250px] flex justify-center items-center">
              <img src={image} className="h-[200px]" alt="" />
              </div>
              <p className="w-full font-bold min-h-[70px]">{title}</p>
              <div className="flex justify-between">
              <p className="bg-red-500 rounded-lg p-2 text-white">{price}$</p>
              <button className="bg-green-500 rounded-lg p-2 transition-all text-white hover:bg-green-600">Buy Now</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
