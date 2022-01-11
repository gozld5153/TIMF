import React from "react";
import styled from "styled-components";
export default function Notice() {
  const boardDate = ["2021-09-15", "2021-09-08", "2021-08-31"];
  return (
    <Container>
      <BoardContainer>
        <BoardBox>
          <span>공지사항</span>
          <Board>
            <h3>
              Notice
              <img
                src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_plus.png"
                alt=""
              />
            </h3>
            {boardDate.map((date, idx) => (
              <div key={idx}>
                <p>[공고] 신주발행 공고(제3자 배정방식)</p>
                <p>
                  <img
                    src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_clock.png"
                    alt=""
                  />
                  <span>{date}</span>
                </p>
              </div>
            ))}
          </Board>
        </BoardBox>
        <BoardBox>
          <span>보도자료</span>
          <Board>
            <h3>
              TimF News
              <img
                src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_plus.png"
                alt=""
              />
            </h3>
          </Board>
        </BoardBox>
      </BoardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  border-top: 1px solid #dedfe0;
  border-bottom: 1px solid #dedfe0;
  padding: 0 0.8rem;
`;

const BoardContainer = styled.div`
  padding: 4rem 0.8rem;

  @media screen and (min-width: 992px) {
    display: flex;
    gap: 2rem;
    div {
      flex: 1;
    }
  }
`;

const BoardBox = styled.div`
  > span {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1rem 0;
  }
`;

const Board = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 2rem;

  h3 {
    padding-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    border-bottom: 1px solid gray;
    img {
      margin-left: 1rem;
      width: 1rem;
    }
  }

  div {
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover > :first-child {
      border-bottom: 1px solid gray;
    }
  }

  p {
    position: relative;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  p > img {
    position: absolute;
    top: 5px;
    left: -25px;
    width: 1rem;
    margin-right: 0.5rem;
  }
`;
