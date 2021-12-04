import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/mytown">MyTown</Link>
      </li>
    </ul>
  );
}
