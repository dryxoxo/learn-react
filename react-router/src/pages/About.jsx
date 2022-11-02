import { Outlet, Link } from "react-router-dom";

export default function About() {
    return (
      <>
      <Outlet />
      <Link to = {'student'}>Student|</Link>
      <Link to = {'teacher'}>Teacher</Link>
      </>
    );
  }
  