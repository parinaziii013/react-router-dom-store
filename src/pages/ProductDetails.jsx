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
  const { image, title, price } = productDetails;

  return (
    <div>
      <p>{title}</p>

      <img className="w-[200px] h-[200px]" src={image} alt="" />
      <p>{price}</p>
    </div>
  );
};
