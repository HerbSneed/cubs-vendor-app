import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";

import Landing from "./pages/landing";
import Vendor from "./pages/vendor";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/utils/redux/rootReducer";
import Disclaimer from "./components/disclaimer";
import BusinessInfo from "./components/businessInfo";
import BankInfo from "./components/bankInfo"
import VendorInfoReviewForm from "./components/vendorInfoReviewForm";

const store = createStore(rootReducer);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/vendor/disclaimer" element={<Disclaimer />} />
      <Route path="/vendor/business-info" element={<BusinessInfo />} />
      <Route path="/vendor/bank-info" element={<BankInfo />} />
      <Route path="/vendor/review-info" element={<VendorInfoReviewForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
