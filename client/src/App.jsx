import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
import HeaderContainer from "./containers/HeaderContainer";
import SideBarContainer from "./containers/SideBarContainer.jsx";
import HomePage from "./pages/HomePage.jsx";
import TrainStatusPage from "./pages/TrainStatusPage.jsx";

const App = () => {
  const [data, setData] = useState([]);

  const trainGroups = [
    {
      name: "123",
      train: ["1", "2", "3"],
      images: { 1: one, 2: two, 3: three },
    },
    {
      name: "456",
      train: ["4", "5", "6"],
      images: { 4: four, 5: five, 6: six },
    },
    { name: "7", train: ["7"], images: { 7: seven } },
    { name: "ACE", train: ["A", "C", "E"], images: { A: a, C: c, E: e } },
    {
      name: "BDFM",
      train: ["B", "D", "F", "M"],
      images: { B: b, D: d, F: f, M: m },
    },
    { name: "G", train: ["G"], images: { G: g } },
    { name: "L", train: ["L"], images: { L: l } },
    {
      name: "NQRW",
      train: ["N", "Q", "R", "W"],
      images: { N: n, Q: q, R: r, W: w },
    },
    { name: "JZ", train: ["J", "Z"], images: { J: j, Z: z } },
  ];

  const images = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    A: a,
    C: c,
    E: e,
    B: b,
    D: d,
    F: f,
    M: m,
    G: g,
    L: l,
    N: n,
    Q: q,
    R: r,
    W: w,
    J: j,
    Z: z,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/subway");
        const result = await response.json();

        for (let i = 0; i < result.length; i++) {
          result[i].subwayImage = images[result[i].subway];
        }

        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="appContainer">
        <HeaderContainer />
        <div className="mainContentContainer">
          <SideBarContainer trainGroups={trainGroups} />
          <div className="mainContent">
            <Routes>
              <Route
                path="/"
                element={<HomePage trainGroups={trainGroups} data={data} />}
              />
              <Route
                path="subwayGroup/:subwayGroup"
                element={
                  <TrainStatusPage trainGroups={trainGroups} data={data} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
