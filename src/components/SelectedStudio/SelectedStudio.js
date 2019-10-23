import React from "react";

const SelectedStudio = props => {
  return (
    <div className={props.content} id={props.key}>
      {props.children}
      <div className={props.selectedContent}>
        <div className="studio-content_container">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            {props.address}, {props.address2}
          </p>
        </div>
        <div className="studio-content_container">
          <i className="far fa-clock"></i>
          <p>Öppet till {props.hours} idag</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="studio-content_container">
          <i className="fas fa-map-marker-alt"></i>
          <p>{props.phone}</p>
        </div>
        <div className="studio-content_container">
          <i className="fas fa-globe"></i>
          <p>{props.website}</p>
        </div>
        <div className="studio-content_container">
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
