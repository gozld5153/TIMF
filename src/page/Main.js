import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import JumboTron from "../components/JumboTron";
import BusinessCard from "../components/BusinessCard";
import Notice from "../components/Notice";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Slide />
      <JumboTron />
      <BusinessCard />
      <Notice />
      <Connect />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
