import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.page";
import NotFoundPage from "./pages/error/NotFound.page";
import CustomToast from "./components/toast/CustomToast.component";
import FlightResult from "./pages/flight-result/FlightResult.page";
import Layout from "./containers/layout/Layout.container";
import BookTicketsPage from "./pages/book-tickets/BookTickets.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="flights" element={<FlightResult />} />
            <Route path="booking" element={<BookTicketsPage />} />
            {/* <Route path="deals">
            <Route index element={<DealsPage />} />
            <Route path=":dealSlug" element={<SingleDealPage />} />
          </Route> */}

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomToast />
    </div>
  );
}

export default App;
