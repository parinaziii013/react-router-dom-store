import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="bg-[#FFE3E3] p-2 flex justify-around">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
