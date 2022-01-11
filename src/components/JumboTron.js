import React from "react";
import styled from "styled-components";

export default function JumboTron() {
  return (
    <Container>
      <SentenceContainer>
        <Title>대한민국 No.1 Cold-Chain Platform </Title>
        <Desc>
          팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
          제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한
          설비/역량을 보유하고 있습니다.
        </Desc>
      </SentenceContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: -5px;
  height: 30vh;
  background-color: #02204a;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 576px) {
    background-color: #fff;
  }
`;

const SentenceContainer = styled.div`
  width: 80vw;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 576px) {
    color: #02204a;
    font-size: 1.1rem;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 576px) {
    color: #02204a;
    font-size: 0.85rem;
  }
`;
