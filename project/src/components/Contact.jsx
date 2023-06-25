import React from "react";
import "../styles/Contact.css";
import { useFormik } from "formik";
import { useAddContactMutation } from "../store";
function Contact() {
  const [addContact] = useAddContactMutation();
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        message: "",
      },
      onSubmit: async (values, { resetForm }) => {
        try {
          await addContact(values); // Gönderi eklemek için mutation'u çağır
          resetForm(); // Formu sıfırla
        } catch (error) {
          console.error("Gönderi eklenirken bir hata oluştu:", error);
        }
      },
    });
  return (
    <div className="contact-div">
      <div className="contact-left">
        <h3 className="title">Size Nasil Yardimci Olabiliriz?</h3>
        <p>
          Oneri, istek ve sikayetlerinizi bizimle paylasabilirsin. Ucuncu
          kisilerle asla paylasilmaz
        </p>
        <p>
          CampusConnect'e ilginiz icin tesekkur ederiz.En yakin zamanda sizinle
          iletisime gececegiz.
        </p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <label> E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mailinizi yazınız"
            value={values.email}
            onChange={handleChange}
          />
          <label> Mesajiniz:</label>
          <textarea
            name="message"
            id="message"
            cols="60"
            rows="3"
            placeholder="Mesajınızı yazınız"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          <div>
            <button type="submit" className="contact-send">
              Gonder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
