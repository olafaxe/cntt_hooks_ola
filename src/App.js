import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/Content/Content";
import Studio from "./components/Studio/Studio";
import Menu from "./components/Menu/Menu";
import SelectedStudio from "./components/SelectedStudio/SelectedStudio";
import Hero from "./components/Hero/Hero";
import ButtonContainer from "./components/Button/ButtonContainer";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import "./sass/style.scss";
import "./sass/grids.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sale: false,
      setFilter: "Alla",
      filter: ["Alla", "Billigt", 250, 300, 350],
      studios: [],
      selectedStudio: null
    };
  }

  componentDidMount() {
    fetch("/studios", {})
      .then(res => res.clone().json())
      .then(data => {
        console.log(data);
        // data[.map(e => {
        //   console.log(e);
        // });]
        this.setState({ studios: data }, console.log(this.state.studios));
      })
      .then(() => {
        console.log(this.state.studios.studios);
        // this.studioGeneration();
      })
      .catch(function(e) {
        console.log(e);
      });
  }

  filterHandler(e) {
    if (e.target.value === "Alla") {
      this.setState({ sale: false, setFilter: "Alla" });
    }
    if (e.target.value === "Billigt") {
      this.setState({ sale: true, setFilter: 250 });
    }
    if (e.target.value === "Pris 250 - 500 kr") {
      this.setState({ sale: false, setFilter: 250 });
    }
    if (e.target.value === "Pris 300 - 500 kr") {
      this.setState({ sale: false, setFilter: 300 });
    }
    if (e.target.value === "Pris 350 - 500 kr") {
      this.setState({ sale: false, setFilter: 350 });
    }
  }

  navClick(e) {
    let studios = this.state.studios.studios;
    studios.forEach(studio => {
      if (e === studio.id) {
        let selectedStudio = studio;
        this.setState({ selectedStudio: selectedStudio });
      }
    });
  }

  // studioGeneration() {
  //   let studio = (
  //     <>
  //       {this.state.studios.studios.map(e => {
  //         if (this.state.setFilter === "Alla") {
  //           return (
  //             <>
  //               <Studio
  //                 content={"content__content"}
  //                 selectedContent={"content__selected_list"}
  //                 id={e.id}
  //                 name={e.name}
  //                 price={e.price}
  //                 address={e.address}
  //                 time={e.time}
  //                 rating={e.rating}
  //                 function={() => this.navClick(e.id)}
  //                 link={"/studio"}
  //                 text={"gå till studio"}
  //               >
  //                 <Button function={() => this.navClick(e.id)} link={"/studio"}>
  //                   <i className="fas fa-chevron-right"></i>
  //                 </Button>
  //               </Studio>
  //             </>
  //           );
  //         }
  //         if (this.state.sale) {
  //           if (e.price < this.state.setFilter) {
  //             return (
  //               <>
  //                 <Studio
  //                   content={"content__content"}
  //                   selectedContent={"content__selected_list"}
  //                   id={e.id}
  //                   name={e.name}
  //                   price={e.price}
  //                   address={e.address}
  //                   time={e.time}
  //                   rating={e.rating}
  //                 >
  //                   <Button
  //                     function={() => this.navClick(e.id)}
  //                     link={"/studio"}
  //                   >
  //                     <i className="fas fa-chevron-right"></i>
  //                   </Button>
  //                 </Studio>
  //               </>
  //             );
  //           }
  //         } else if (this.state.setFilter !== "Alla") {
  //           if (e.price > this.state.setFilter) {
  //             return (
  //               <>
  //                 <Studio
  //                   content={"content__content"}
  //                   selectedContent={"content__selected_list"}
  //                   id={e.id}
  //                   name={e.name}
  //                   price={e.price}
  //                   address={e.address}
  //                   time={e.time}
  //                   rating={e.rating}
  //                 >
  //                   <Button
  //                     function={() => this.navClick(e.id)}
  //                     link={"/studio"}
  //                   >
  //                     <i className="fas fa-chevron-right"></i>
  //                   </Button>
  //                 </Studio>
  //               </>
  //             );
  //           }
  //         }
  //       })}
  //     </>
  //   );
  //   return studio;
  // }

  render() {
    let studio = (
      <>
        {this.state.studios.studios
          ? this.state.studios.studios.map(e => {
              if (this.state.setFilter === "Alla") {
                return (
                  <>
                    <Studio
                      content={"content__content"}
                      selectedContent={"content__selected_list"}
                      id={e.id}
                      name={e.name}
                      price={e.price}
                      address={e.address}
                      time={e.time}
                      rating={e.rating}
                      function={() => this.navClick(e.id)}
                      link={"/studio"}
                      text={"gå till studio"}
                    >
                      <Button
                        function={() => this.navClick(e.id)}
                        link={"/studio"}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </Button>
                    </Studio>
                  </>
                );
              }
              if (this.state.sale) {
                if (e.price < this.state.setFilter) {
                  return (
                    <>
                      <Studio
                        content={"content__content"}
                        selectedContent={"content__selected_list"}
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        address={e.address}
                        time={e.time}
                        rating={e.rating}
                      >
                        <Button
                          function={() => this.navClick(e.id)}
                          link={"/studio"}
                        >
                          <i className="fas fa-chevron-right"></i>
                        </Button>
                      </Studio>
                    </>
                  );
                }
              } else if (this.state.setFilter !== "Alla") {
                if (e.price > this.state.setFilter) {
                  return (
                    <>
                      <Studio
                        content={"content__content"}
                        selectedContent={"content__selected_list"}
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        address={e.address}
                        time={e.time}
                        rating={e.rating}
                      >
                        <Button
                          function={() => this.navClick(e.id)}
                          link={"/studio"}
                        >
                          <i className="fas fa-chevron-right"></i>
                        </Button>
                      </Studio>
                    </>
                  );
                }
              }
            })
          : null}
      </>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container-container">
              <Header></Header>
              <Menu
                filtCheck={e => this.filterHandler(e)}
                filter1={this.state.filter[0]}
                filter2={this.state.filter[1]}
                filter3={this.state.filter[2]}
                filter4={this.state.filter[3]}
                filter5={this.state.filter[4]}
              ></Menu>
              <Content grid={"content-container"}>{studio}</Content>
            </div>
          </Route>
          <Route path="/studio">
            <div className="container-selected">
              <Content grid={"content-selected"}>
                <SelectedStudio
                  content={"content__selected"}
                  selectedContent={"content__selected_info"}
                  id={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.id
                      : null
                  }
                  hours={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.hours
                      : null
                  }
                  address={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.address
                      : null
                  }
                  address2={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.address2
                      : null
                  }
                  phone={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.phone
                      : null
                  }
                  website={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.website
                      : null
                  }
                  rating={
                    this.state.selectedStudio
                      ? this.state.selectedStudio.rating
                      : null
                  }
                >
                  <Hero
                    name={
                      this.state.selectedStudio
                        ? this.state.selectedStudio.name
                        : null
                    }
                  >
                    <ButtonContainer class={"btn__container_hero"}>
                      <Button class={"btn__back"} link={"/"}></Button>
                      <Button class={"btn__heart"}></Button>
                    </ButtonContainer>
                  </Hero>
                  <ButtonContainer className={"btn__container_info"}>
                    <Button class={"Info"} text={"Info"}></Button>
                    <Button class={"Schema"} text={"Schema"}></Button>
                  </ButtonContainer>
                </SelectedStudio>
              </Content>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
