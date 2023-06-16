import "./App.css";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
import EventDetail from "./components/EventDetail";
import NewsDetail from "./components/NewsDetail";
import EditMyProfile from "./components/EditMyProfile";
import UsersList from "./components/UsersList";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/detail/:id" element={<NewsDetail />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/detail/:id" element={<EventDetail />}></Route>

        <Route path="/advert" element={<Advert />} />
        <Route path="/advert/detail/:id" element={<AdvertDetail />} />
        <Route path="/my-adverts" element={<MyAdverts />} />
        <Route path="/create-advert" element={<CreateAdvert />} />
        <Route path="/edit-my-advert" element={<EditMyAdvert />} />

        <Route path="/announcements" element={<Announcements />} />
        <Route
          path="/announcements/detail/:id"
          element={<AnnouncementDetail />}
        />

        <Route path="/login" element={<LoginForm />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-my-profile" element={<EditMyProfile />} />

        <Route path="/signup" element={<SignupForm />} />
        <Route path="/solidatiry" element={<Solidatiry />} />
      </Routes>

      <Footer />
      <UsersList/>
    </>
  );
}

export default App;
