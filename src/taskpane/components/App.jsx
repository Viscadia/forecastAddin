import React, { useState } from "react";
import UserLogin from "./UserLogin";
import OncologyForecast from "./OncolofyForecast";
import { makeStyles } from "@fluentui/react-components";
import Header from "./Header";
import ModelManagementPage from "./ModelManagment";
import FreshModel from "./freshModel";
import LoadPage from "./LoadPage";

const useStyles = makeStyles({});

function App() {
  const [page, setPage] = useState("");
  const styles = useStyles();

  const setPageValue = (value) => {
    setPage(value);
  };

  const routesPages = (page) => {
    switch (page) {
      case "oncologyForecast":
        return <OncologyForecast setPageValue={setPageValue} onBack={() => setPageValue("input")} />;
      case "UserLogin":
        return <UserLogin setPageValue={setPageValue} onBack={() => setPageValue("input")} />;
      case "ModelManagementPage":
        return <ModelManagementPage setPageValue={setPageValue} onBack={() => setPageValue("input")} />;
      case "FreshModel":
        return <FreshModel setPageValue={setPageValue} onBack={() => setPageValue("input")} />;
      case "LoadPage":
        return <LoadPage setPageValue={setPageValue} onBack={() => setPageValue("input")} />;
      default:
        return <FreshModel setPageValue={setPageValue} />;
    }
  };

  return (
    <>
      <Header />
      {routesPages(page)}
    </>
  );
}

export default App;
