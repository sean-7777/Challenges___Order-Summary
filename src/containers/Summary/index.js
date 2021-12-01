import React from "react";
import "./style.less";
import Details from "#/Details";

export default function Summary() {
  return (
    <div className="summary">
      <img src="/assets/illustractoin-hero.svg" alt="" className="hero" />
      <Details>
        <Details.Description title="Prder Summary">
          You can now listen to millions of songs, audio-books, and podcasts on
          any device anywhere you like!
        </Details.Description>
        <Details.Plan
          name="Annual Plan"
          price="$59.99/year"
          icon={{ src: "/assets/icon-music.svg", alt: "" }}
        />
      </Details>
    </div>
  );
}
