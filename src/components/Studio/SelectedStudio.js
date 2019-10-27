import React from "react";
import Hero from "../Hero/Hero";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";

import "./studio-style.scss";

const SelectedStudio = ({
  content,
  selectedContent,
  selStudiosSt,
  clickHandleFu
}) => {
  return (
    <div className={content} id={selStudiosSt.key}>
      <Hero name={selStudiosSt ? selStudiosSt.name : null}>
        <ButtonContainer cls={"btn--hero"}>
          <Button
            clickHandleFu={clickHandleFu}
            cls={"btn--back--select"}
            link={"/"}
          />
          <Button clickHandleFu={clickHandleFu} cls={"btn--heart"} link={"/"} />
        </ButtonContainer>
      </Hero>
      <ButtonContainer cls={"btn--info"}>
        <Button
          clickHandleFu={clickHandleFu}
          cls={"Info selected"}
          text={"Info"}
          link={"/"}
        />
        <Button
          clickHandleFu={clickHandleFu}
          cls={"Schema"}
          text={"Schema"}
          link={"/"}
        />
      </ButtonContainer>
      <div className={selectedContent}>
        <div className="selectedstudio__content">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            {selStudiosSt.address}, {selStudiosSt.address2}
          </p>
        </div>
        <div className="selectedstudio__content">
          <i className="far fa-clock"></i>
          <p>Öppet till {selStudiosSt.hours} idag</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="selectedstudio__content">
          <i className="fas fa-map-marker-alt"></i>
          <p>{selStudiosSt.phone}</p>
        </div>
        <div className="selectedstudio__content">
          <i className="fas fa-globe"></i>
          <p>{selStudiosSt.website}</p>
        </div>
        <div className="selectedstudio__content">
          <p className="info__body">
            Without interfaces, you will lack cross-media CAE. Our feature set
            is second to none, but our strategic angel investors and user-proof
            use is usually considered a terrific achievement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedStudio;
