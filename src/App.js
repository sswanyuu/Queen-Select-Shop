import Home from "./components/routes/home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/naviagation.component";
import Authentication from "./components/routes/authentication/authentication";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
const App = () => {
  //always the same reference
  const dispatch = useDispatch();

  useEffect(() => {
    //stop listening
    const unsuscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsuscribe;
  }, []);
  return (
    //to reigster these route level components
    <Routes>
      {/* when the route is "/", render the <Navigation/> componment*/}
      <Route path="/" element={<Navigation />}>
        {/*index = {true}, so that <Home/> will be render when the route "/" */}
        <Route index element={<Home />} />;
        <Route path="shop/*" element={<Shop />} />;
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
