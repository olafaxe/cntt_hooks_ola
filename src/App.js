import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Content from "./components/Content/Content";
import StudioFilter from "./components/StudioFilter/StudioFilter";
import SelectedStudioFilter from "./components/SelectedStudioFilter/SelectedStudioFilter";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

import "./sass/style.scss";
import "./sass/grids.scss";

const App = () => {
  const [studioDataSt, setStudioDataSt] = useState([]);
  const [selStudiosSt, setSelStudiosSt] = useState([]);
  const [filterSt, setFilterSt] = useState(["Alla", 250, 300, 350]);
  const [curFilterSt, setCurFilterSt] = useState("Alla");

  const filterHandler = filter => {
    if (filter.target.value !== "Alla") {
      setCurFilterSt(filter.target.value.slice(5, 8));
    } else {
      setCurFilterSt(filter.target.value);
    }
  };

  const clickHandleFu = e => {
    studioDataSt.forEach(studio => {
      if (Number(e.target.id) === studio.id) {
        setSelStudiosSt(studio);
      }
    });
  };

  useEffect(() => {
    fetch("/studios", {})
      .then(res => res.clone().json())
      .then(data => {
        setStudioDataSt(prevState => {
          return [...data.studios];
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <div className="container__grid">
          <Header />
          <Menu filterHandler={filterHandler} filterSt={filterSt} />
          <Content grid={"container__studio"}>
            <StudioFilter
              studioDataSt={studioDataSt}
              curFilterSt={curFilterSt}
              clickHandleFu={clickHandleFu}
            />
          </Content>
        </div>
      </Route>

      <Route path="/studio">
        <div className="container-selected">
          <Content grid={"container__content"}>
            <SelectedStudioFilter
              selStudiosSt={selStudiosSt}
              clickHandleFu={clickHandleFu}
            />
          </Content>
        </div>
      </Route>
    </Switch>
  );
};
export default App;
