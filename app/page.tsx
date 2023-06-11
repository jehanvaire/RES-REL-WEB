"use client";
import React from "react";
import Authentification from "./components/Authentification";
import withAuth from "./components/withauth";

const HomePage = () => {
  return <Authentification>HomePage</Authentification>;
};

export default withAuth(HomePage);
