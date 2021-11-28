import React from "react";
import "./style.less";
import Details from "#/Details";

export default function Summary() {
  const text = {
    title: "Order Summary",
    description: "You can now listen to millions of songs, audio-books, and podcasts on any device anywhere you like!",
  };

  return (
    <div className="summary">
      <img src="/assets/illustration-hero.svg" alt="" className="hero" />
      <Details>
        <Details.Description title={text.title}>{text.description}</Details.Description>
      </Details>
    </div>
  );
}
