import React from "react";
import styled from "styled-components";
import facebook from "../img/facebook.png";
import youtube from "../img/youtube.png";
export default function Connect() {
  return (
    <Container>
      <Title>Connect</Title>
      <IconBox>
        <a href="https://www.facebook.com/teamfresh.timf">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
          <img src={youtube} alt="" />
        </a>
      </IconBox>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 1rem 0 3rem 0;
`;
const IconBox = styled.div`
  text-align: center;
  margin: 3rem;
  a {
    cursor: pointer;
  }
  img {
    margin: 0 2rem;
    width: 2rem;
    @media screen and (min-width: 578px) {
      width: 3rem;
    }
    @media screen and (min-width: 769px) {
      width: 5rem;
    }
    &:hover {
      transform: scale(1.3, 1.3);
    }
  }
`;
