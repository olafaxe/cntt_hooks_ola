import React from "react";
import Studio from "../Studio/Studio";

const StudioFilter = ({ studioDataSt, curFilterSt, clickHandleFu }) => {
  return (
    <>
      {studioDataSt
        ? studioDataSt.map(studio => {
            if (curFilterSt === "Alla") {
              return (
                <Studio
                  content={"studio__content"}
                  selectedContent={"studio__content--selected--list"}
                  key={studio.id.toString()}
                  id={studio.id}
                  name={studio.name}
                  price={studio.price}
                  address={studio.address}
                  time={studio.time}
                  rating={studio.rating}
                  clickHandleFu={clickHandleFu}
                  link={"/studio"}
                  text={"gå till studio"}
                ></Studio>
              );
            } else {
              if (studio.price < curFilterSt && !(curFilterSt > 249)) {
                return (
                  <Studio
                    content={"studio__content"}
                    selectedContent={"studio__content--selected--list"}
                    key={studio.id.toString()}
                    id={studio.id}
                    name={studio.name}
                    price={studio.price}
                    address={studio.address}
                    time={studio.time}
                    rating={studio.rating}
                    clickHandleFu={clickHandleFu}
                    link={"/studio"}
                    text={"gå till studio"}
                  ></Studio>
                );
              } else if (studio.price > curFilterSt && !(curFilterSt < 250)) {
                return (
                  <Studio
                    content={"studio__content"}
                    selectedContent={"studio__content--selected--list"}
                    id={studio.id}
                    key={studio.id.toString()}
                    name={studio.name}
                    price={studio.price}
                    address={studio.address}
                    time={studio.time}
                    rating={studio.rating}
                    clickHandleFu={clickHandleFu}
                    link={"/studio"}
                    text={"gå till studio"}
                  ></Studio>
                );
              }
            }
          })
        : "Hej"}
    </>
  );
};

export default StudioFilter;
