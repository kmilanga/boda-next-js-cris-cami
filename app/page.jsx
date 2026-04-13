"use client";

import Hero from "../components/Hero";
import Story from "../components/Story";
import Details from "../components/Details";
import Map from "../components/Map";
import Gallery from "../components/Gallery";
import RSVP from "../components/RSVP";
import ThankYou from "../components/ThankYou";

import useReveal from "../reveal.js";
import useSmoothScroll from "../smoothScroll.js";

export default function Home() {
  
  useReveal();
  useSmoothScroll();

  return (
    <>
      <Hero />
      <Story />
      <Details />
      <Map />
      <Gallery />
      <RSVP />
      <ThankYou />
    </>
  );
}