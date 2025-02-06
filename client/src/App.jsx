import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Train Image
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import d from "./assets/d.png";
import e from "./assets/e.png";
import f from "./assets/f.png";
import g from "./assets/g.png";
import j from "./assets/j.png";
import l from "./assets/l.png";
import m from "./assets/m.png";
import n from "./assets/n.png";
import q from "./assets/q.png";
import r from "./assets/r.png";
import w from "./assets/w.png";
import z from "./assets/z.png";

//Pages
import HomePage from "./containers/HomePage.jsx";
import TrainStatusPage from "./containers/TrainStatusPage.jsx";
import Header from "./containers/HeaderContainer";

const App = () => {
  const trainGroups = [
    { name: "123", train: ["1", "2", "3"], images: [one, two, three] },
    { name: "456", train: ["4", "5", "6"], images: [four, five, six] },
    { name: "7", train: ["7"], images: [seven] },
    { name: "ACE", train: ["A", "C", "E"], images: [a, c, e] },
    { name: "BDFM", train: ["B", "D", "F", "M"], images: [b, d, f, m] },
    { name: "G", train: ["G"], images: [g] },
    { name: "L", train: ["L"], images: [l] },
    { name: "NQRW", train: ["N", "Q", "R", "W"], images: [n, q, r, w] },
    { name: "JZ", train: ["J", "Z"], images: [j, z] },
  ];

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage trainGroups={trainGroups} />} />
          <Route
            path="subwayGroup/:subwayGroup"
            element={<TrainStatusPage trainGroups={trainGroups} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
