import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className="flex text-2xl flex-col justify-center text-center h-[495px] p-4 border-2 border-gray-200 m-4 rounded-2xl">
      <p className="p-2 ">Tell: 021-42596874</p>
      <p className="p-2">Email: mystore@gmail.com</p>
      <p className="p-2">Address: 123, Nguyen Van Linh, Dist 7, HCM</p>
      <Link className="p-2 underline text-blue-600" to="/">
        Back to Homepage
      </Link>
    </div>
  );
};
