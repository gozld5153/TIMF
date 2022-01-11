import React from "react";
import styled from "styled-components";

export default function BusinessCard() {
  const bodyDesc = [
    {
      title: "새벽배송",
      desc: "팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.",
    },
    {
      title: "화물주선",
      desc: "화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.",
    },
    {
      title: "풀필먼트",
      desc: "풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다. 각 화주사별 요구사항을 매뉴얼화해 관리합니다.",
    },
    {
      title: "그로서리",
      desc: "급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.",
    },
  ];
  return (
    <Container>
      <Title>TIMF BUSINESS</Title>
      <CardContainer>
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <Card key={idx}>
              <img
                src={`https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card${
                  idx + 1
                }${idx >= 2 ? ".jpg" : ".png"}`}
                alt=""
              />
              <CardBody>
                <div>{bodyDesc[idx].title}</div>
                <p>{bodyDesc[idx].desc}</p>
                <button>더 알아보기</button>
              </CardBody>
            </Card>
          ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.8rem;
`;

const Title = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  color: #3a3c3e;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const CardContainer = styled.div`
  padding: 0.8rem;
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const Card = styled.div`
  width: 80vw;
  margin: 0 auto 2rem auto;
  img {
    width: 100%;
  }
`;

const CardBody = styled.div`
  padding: 0.8rem;
  div {
    font-size: 1.2rem;
    font-weight: 700;
    color: #3a3c3e;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  button {
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    border: none;
    border: 1px solid #6c757d;
    color: #6c757d;
    background-color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #6c757d;
      color: #fff;
    }
  }
`;
