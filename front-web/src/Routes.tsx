import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./navbar";
import Orders from "./Orders";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
      </Switch>

    </BrowserRouter>

  );
};
export default Routes;