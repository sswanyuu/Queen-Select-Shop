import Home from "./components/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/naviagation.component";
import Authentication from "./components/routes/authentication/authentication";
const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};
const App = () => {
  return (
    //to reigster these route level components
    <Routes>
      {/* when the route is "/", render the <Navigation/> componment*/}
      <Route path="/" element={<Navigation />}>
        {/*index = {true}, so that <Home/> will be render when the route "/" */}
        <Route index element={<Home />} />;
        <Route path="/shop" element={<Shop />} />;
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
