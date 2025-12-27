import { NavLink } from "react-router";

const Navitem = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
};

export default Navitem;
