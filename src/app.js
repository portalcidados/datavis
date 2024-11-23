// gh-pages route for deployment.
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "./pages/seop-cep/loading";
import style, { createGlobalStyle } from "styled-components";
import "./tailwind.css";

const Home = lazy(() => import("./pages/home/home"));

const CepSEOP = lazy(() => {
  return Promise.all([
    import("./pages/seop-cep/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .mapboxgl-control-container {
    display: none !important;
  } 
`;

CepSEOP;

function App() {
  return (
    <div id={"main"}>
      <GlobalStyle />
      <Router>
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/adensamento" element={<CepSEOP />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;