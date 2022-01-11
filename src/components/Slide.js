import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Slide() {
  const [idx, setIdx] = useState(1);
  const [trigger, setTrigger] = useState(false);
  const description = [
    { h2: "대한민국 No.1", h1: "Cold Chain Platform" },
    {
      h2: "TIMF",
      h1: "Connect Freshness",
    },
    {
      h2: "Commerce Trend",
      h1: "신선식품 물류를 선도하는 시스템 구축",
    },
  ];
  const handlePrev = () => {
    if (idx === 0) {
      return;
    } else {
      setIdx(idx - 1);
    }
  };
  const handleNext = () => {
    if (idx === 4) {
      return;
    } else {
      setIdx(idx + 1);
    }
  };

  useEffect(() => {
    const addIdx = setTimeout(() => setIdx(idx + 1), 6000);
    return () => clearTimeout(addIdx);
  }, [idx]);

  useEffect(() => {
    const timeFnc = setTimeout(() => {
      if (idx === 0) {
        setTrigger(true);
        setIdx(3);
      } else if (idx === 4) {
        setTrigger(true);
        setIdx(1);
      } else {
        setTrigger(false);
      }
    }, 200);
    return () => clearTimeout(timeFnc);
  }, [idx]);

  return (
    <Container>
      <CarouselContainer style={{ left: `-${idx * 100}%` }} trigger={trigger}>
        <Carousel>
          <img
            src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background3.png"
            alt=""
          />
          <Desc>
            <h2>Commerce Trend</h2>
            <h1>신선식품 물류를 선도하는 시스템 구축</h1>
          </Desc>
        </Carousel>
        {description.map((desc, idx) => {
          return (
            <Carousel key={idx}>
              <img
                src={`https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background${
                  idx + 1
                }.png`}
                alt=""
              />
              <Desc>
                <h2>{desc.h2}</h2>
                <h1>{desc.h1}</h1>
              </Desc>
            </Carousel>
          );
        })}
        <Carousel>
          <img
            src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background1.png"
            alt=""
          />
          <Desc>
            <h2>대한민국 No.1</h2>
            <h1>Cold Chain Platform</h1>
          </Desc>
        </Carousel>
      </CarouselContainer>
      <Prev onClick={handlePrev} />
      <Next onClick={handleNext} />
      <StickContainer>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Stick key={i} active={i + 1 === idx} />
          ))}
      </StickContainer>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (max-width: 576px) {
    img {
      height: 20rem;
    }
  }
  img {
    width: 100%;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  transition: ${({ trigger }) => (trigger ? null : "all 0.2s linear")};
`;
const Carousel = styled.div`
  width: 100%;
  flex: 1 0 auto;
  position: relative;
`;

const Desc = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Prev = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  &:hover {
    opacity: 1;
  }
`;

const Next = styled(Prev)`
  left: 90%;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
`;

const StickContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  margin-left: -53px;
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 577px) {
    display: none;
  }
`;
const Stick = styled.div`
  width: 30px;
  height: 3px;
  background-color: #fff;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
