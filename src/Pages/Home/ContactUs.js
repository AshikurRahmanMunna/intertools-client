import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bg from '../../assets/images/banner-bg.jpg';

const ContactUs = () => {
  return (
    <div style={{background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: "fixed"}} className="mb-16">
      <div className="container mx-auto py-24 text-white backdrop-brightness-50">
        <h2 className="text-5xl mb-3">Contact <span className="text-primary">Us</span></h2>
        <p className="text-xl mb-2">
          <FontAwesomeIcon className="text-primary" icon={faMapMarkerAlt} /> Mulibash Bazar, Hajigonj,
          Fatulla, Narrayangonj
        </p>
        <p className="text-xl mb-2">
          <FontAwesomeIcon className="text-primary" icon={faPhone} /> +8801715808691
        </p>
        <p className="text-xl mb-2">
          <FontAwesomeIcon className="text-primary" icon={faPhone} /> +8801819475655
        </p>
        <p className="text-xl mb-2">
          <FontAwesomeIcon className="text-primary" icon={faEnvelope} /> ashikurrahmanmunna3@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
