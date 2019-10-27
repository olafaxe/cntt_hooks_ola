import React from "react";
import SelectedStudio from "../Studio/SelectedStudio";

const SelectedStudioFilter = ({ selStudiosSt, clickHandleFu }) => {
  return (
    <>
      <SelectedStudio
        content={"container__selected"}
        selectedContent={"studio__content--selected--info"}
        selStudiosSt={selStudiosSt}
        clickHandleFu={clickHandleFu}
      ></SelectedStudio>
    </>
  );
};

export default SelectedStudioFilter;
