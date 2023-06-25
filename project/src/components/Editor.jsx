import React, { useState } from "react";
import "../styles/Editor.css";
import {
  useFetchAnnouncementsQuery,
  useRemoveAnnouncementMutation,
} from "../store";
import { useFetchEventsQuery, useRemoveEventMutation } from "../store";
import { useFetchNewsQuery, useRemoveNewsMutation } from "../store";
import { useSearchParams } from "react-router-dom";
import EditorAnnoDetails from "./EditorAnnoDetails";
import EditorEventDetails from "./EditorEventDetails";
import EditorNewsDetails from "./EditorNewsDetails";
import EditorAnnoForm from "./EditorAnnoForm";
import EditorEventForm from "./EditorEventForm";
import EditorNewsForm from "./EditorNewsForm";

function Editor() {
  const [removeAnnouncement, { isLoading: isRemovingAnnouncement }] =
    useRemoveAnnouncementMutation();
  const [removeEvent, { isLoading: isRemovingEvent }] =
    useRemoveEventMutation();
  const [removeNews, { isLoading: isRemovingNews }] = useRemoveNewsMutation();
  const [announcementSearchParams, setAnnouncementSearchParams] =
    useSearchParams();
  const [eventSearchParams, setEventSearchParams] = useSearchParams();
  const [newsSearchParams, setNewsSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const {
    data: announcementData,
    isError: announcementIsError,
    isFetching: announcementIsFetching,
  } = useFetchAnnouncementsQuery();
  const {
    data: eventData,
    isError: eventIsError,
    isFetching: eventIsFetching,
  } = useFetchEventsQuery();
  const {
    data: newsData,
    isError: newsIsError,
    isFetching: newsIsFetching,
  } = useFetchNewsQuery();

  const handleButtonClick = (filter) => {
    setSearchQuery(filter);
    setSelectedEvent(null);
    setSelectedAnnouncement(null);
    setSelectedNews(null);
    setShowCreateForm(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (input) => {
    const filteredEvents = eventData.filter((event) =>
      event.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredEvents(filteredEvents);

    const filteredAnnouncements = announcementData.filter((announcement) =>
      announcement.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredAnnouncements(filteredAnnouncements);

    const filteredNews = newsData.filter((news) =>
      news.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredNews(filteredNews);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setSelectedAnnouncement(null);
    setSelectedNews(null);
    setShowCreateForm(false);
  };

  const handleEditAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
    setSelectedEvent(null);
    setSelectedNews(null);
    setShowCreateForm(false);
  };

  const handleEditNews = (news) => {
    setSelectedNews(news);
    setSelectedEvent(null);
    setSelectedAnnouncement(null);
    setShowCreateForm(false);
  };

  const handleCreateButton = () => {
    setShowCreateForm(true);
    setSelectedEvent(null);
    setSelectedAnnouncement(null);
    setSelectedNews(null);
  };
  const handleRemoveEvent = async (event) => {
    try {
      // Event'i silme işlemini gerçekleştir
      await removeEvent(event);
      // Silme işlemi başarılı olduysa, seçili event'i sıfırla
      setSelectedEvent(null);
      // Silinen eventi filtrele ve güncelle
      setFilteredEvents((prevEvents) =>
        prevEvents.filter((e) => e.id !== event.id)
      );
    } catch (error) {
      // Silme işlemi sırasında bir hata oluştu
      console.log("Etkinlik silme hatası:", error);
    }
  };

  const handleRemoveAnnouncement = async (announcement) => {
    try {
      // Duyuruyu silme işlemini gerçekleştir
      await removeAnnouncement(announcement);
      // Silme işlemi başarılı olduysa, seçili duyuruyu sıfırla
      setSelectedAnnouncement(null);
      // Silinen duyuruyu filtrele ve güncelle
      setFilteredAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter((a) => a.id !== announcement.id)
      );
    } catch (error) {
      // Silme işlemi sırasında bir hata oluştu
      console.log("Duyuru silme hatası:", error);
    }
  };

  const handleRemoveNews = async (news) => {
    try {
      // Haberi silme işlemini gerçekleştir
      await removeNews(news);
      // Silme işlemi başarılı olduysa, seçili haberi sıfırla
      setSelectedNews(null);
      // Silinen haberi filtrele ve güncelle
      setFilteredNews((prevNews) => prevNews.filter((n) => n.id !== news.id));
    } catch (error) {
      // Silme işlemi sırasında bir hata oluştu
      console.log("Haber silme hatası:", error);
    }
  };

  const renderMainContent = () => {
    if (searchQuery === "event") {
      return (
        <>
          <div className="editor-left-article-inside">
            <button
              className="editor-create-button"
              onClick={handleCreateButton}
            >
              Yeni Oluştur
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Etkinlik ara..."
              className="editor-searchbar"
            />

            {filteredEvents.map((event) => (
              <div key={event.id} onClick={() => handleEditEvent(event)}>
                {event.title}
                <button onClick={() => handleRemoveEvent(event)}> Sil</button>
              </div>
            ))}
          </div>
        </>
      );
    } else if (searchQuery === "announcement") {
      return (
        <>
          <div className="editor-left-article-inside">
            <button
              className="editor-create-button"
              onClick={handleCreateButton}
            >
              Yeni Oluştur
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Duyuru ara..."
              className="editor-searchbar"
            />

            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                onClick={() => handleEditAnnouncement(announcement)}
              >
                {announcement.title}
                <button onClick={() => handleRemoveAnnouncement(announcement)}>
                  Sil
                </button>
              </div>
            ))}
          </div>
        </>
      );
    } else if (searchQuery === "news") {
      return (
        <>
          <div className="editor-left-article-inside">
            <button
              className="editor-create-button"
              onClick={handleCreateButton}
            >
              Yeni Oluştur
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Haber ara..."
              className="editor-searchbar"
            />

            {filteredNews.map((news) => (
              <div key={news.id} onClick={() => handleEditNews(news)}>
                {news.title}
                <button onClick={() => handleRemoveNews(news)}>Sil</button>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="editor-left-article-inside">
            <button
              className="editor-create-button"
              onClick={handleCreateButton}
            >
              Yeni Oluştur
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Duyuru ara..."
              className="editor-searchbar"
            />

            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                onClick={() => handleEditAnnouncement(announcement)}
              >
                {announcement.title}
                <button onClick={() => handleRemoveAnnouncement(announcement)}>
                  Sil
                </button>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  const renderRightArticle = () => {
    if (selectedEvent) {
      return <EditorEventDetails event={selectedEvent} />;
    } else if (selectedAnnouncement) {
      return <EditorAnnoDetails announcement={selectedAnnouncement} />;
    } else if (selectedNews) {
      return <EditorNewsDetails news={selectedNews} />;
    } else if (showCreateForm) {
      if (searchQuery === "event") {
        return <EditorEventForm />;
      } else if (searchQuery === "announcement") {
        return <EditorAnnoForm />;
      } else if (searchQuery === "news") {
        return <EditorNewsForm />;
      }
    }

    // Form ekranı açılmadıysa veya başka bir durumdaysa null döndür
    return null;
  };

  return (
    <>
      <div className="editor-root">
        <header className="editor-header">
          <h2>CampusConnect</h2>
        </header>
        <div className="editor-main-and-aside">
          <aside className="editor-aside">
            <button
              className="editor-aside-button"
              onClick={() => handleButtonClick("event")}
            >
              Etkinlik Sayfası
            </button>
            <button
              className="editor-aside-button"
              onClick={() => handleButtonClick("announcement")}
            >
              Duyuru Sayfası
            </button>
            <button
              className="editor-aside-button"
              onClick={() => handleButtonClick("news")}
            >
              Haber Sayfası
            </button>
          </aside>
          <main className="editor-main">
            <article className="editor-article-left">
              {renderMainContent()}
            </article>
            <article className="editor-article-right">
              {renderRightArticle()}
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

export default Editor;
