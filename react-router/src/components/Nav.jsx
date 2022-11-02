import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to={"/"}>Home|</Link>
      <Link to={"/about"}>About</Link>
      <br />
    </nav>
  );
}
