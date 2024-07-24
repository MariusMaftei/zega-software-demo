import React from "react";
import classes from "../UI/Map.module.css";

export default function Map() {
  return (
    <iframe
      className={classes.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5337482977366!2d25.623771477373943!3d45.66018427107792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35d6154b55977%3A0x1f140ade7fedfcac!2sZEGASOFTWARE!5e0!3m2!1sen!2sro!4v1720303040113!5m2!1sen!2sro"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
