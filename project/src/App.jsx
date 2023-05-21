import "./App.css";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AboutUs from "./components/AboutUs";
import Advert from "./components/Advert";
import CreateAdvert from "./components/CreateAdvert";
import Profile from "./components/Profile";
import MyAdverts from "./components/MyAdverts";
import EditMyAdvert from "./components/EditMyAdvert";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Announcements from "./components/Announcements";
import AnnouncementDetail from "./components/AnnouncementDetail";
import Solidatiry from "./components/Solidatiry";
import AdvertDetail from "./components/AdvertDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/advert" element={<Advert />} />
        <Route path="/my-adverts" element={<MyAdverts />} />
        <Route path="/advert/detail/:id" element={<AdvertDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/announcements/detail/:id"
          element={<AnnouncementDetail />}
        />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/create-advert" element={<CreateAdvert />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/solidatiry" element={<Solidatiry />} />
        <Route path="/edit-my-advert" element={<EditMyAdvert />} />
        {/* <Contact /> */}
        {/* <Events/> */}
        {/* {<News />} */}
        {/* <EditMyAdvert /> */}
        {/* <MyAdverts /> */}
        {/* <Profile /> */}
        {/* <CreateAdvert /> */}
        {/* <Advert /> */}
        {/* <AboutUs /> */}
        {/* <AnnouncementDetail /> */}
        {/* <LoginForm /> */}
        {/* <Announcements /> */}
        {/* <SignupForm /> */}
        {/* <Solidatiry /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
