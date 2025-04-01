import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/adensamento">Adensamento Populacional</Link>
        </li>
        <li>
          <Link to="/saudesp">Saúde SP</Link>
        </li>
      </ul>
    </div>
  );
}
