import React, { useState, useEffect } from "react";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import StationList from "@components/StationList";
import TimeFilter from "@components/TimeFilter";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Train Schedule Filter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StationList/>
        <TimeFilter/>
      </main>
      <Footer />
    </div>
  );
}
