import React, { useEffect, useState } from "react";
import { About } from "../components/About";
import BlackModal from "../components/blackFriday/BlackFriday";
import { Course } from "../components/courses/Course";
import Gain from "../components/gain/Gain";
import Hero from "../components/Hero";
import More from "../components/More";
import Register from "../components/register/Register";
import Testimonial from "../components/Testimonial";
import { WhyJoin } from "../components/whyJoin/WhyJoin";
import { Youtube } from "../components/youtube/Youtube";

const Home = () => {
  const [show, setshow] = useState(false);
  const closeModal = () => {
    setshow(!show);
  };

  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 5000);
  }, []);
  return (
    <div>
      <BlackModal modalVisible={show} closeModal={closeModal} />
      <Hero />
      <Gain />
      <WhyJoin />
      <More />
      <Testimonial />
      <Course />
      <Youtube />
      <About />
      <Register />
    </div>
  );
};

export default Home;
