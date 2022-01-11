import React from "react";
import styled from "styled-components";
import warning from "../img/warning.png";
import possible from "../img/possible.png";

export default function Modal({ handleModal, trick, possibleDely }) {
  return (
    <Container onClick={handleModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()} trick={trick}>
        <Title>
          {possibleDely === "1" ? "새벽배송가능" : "새벽배송불가능"}
        </Title>
        <TotalContainer>
          <ImgContainer>
            <img src={possibleDely === "1" ? possible : warning} alt="" />
          </ImgContainer>
          <Comment>
            <span>
              {possibleDely === "1"
                ? "새벽배송가능 지역입니다."
                : "새벽배송불가능 지역입니다."}
            </span>
            {possibleDely === "1" ? (
              <>
                <p>다음날 아침 7시 이전에 도착합니다.</p>
                <p
                  style={{ fontSize: "14px", color: "red", marginTop: "1rem" }}
                >
                  (관공서/학교/병원/시장/공단/도서산간지역 배송불가)
                </p>
              </>
            ) : (
              <>
                <p>지번주소(구 주소)로 검색하셨다면</p>
                <p>도로명 주소로 다시 시도해 주세요.</p>
              </>
            )}
          </Comment>
        </TotalContainer>
        <BtnContainer>
          <button onClick={handleModal}>확인</button>
        </BtnContainer>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(78, 99, 128, 0.5);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -60%);
  border-radius: 5px;
  z-index: 200;
  animation: ${({ trick }) =>
    trick ? "move 0.3s linear" : "fadeOut 0.3s linear"};
  @keyframes fadeOut {
    from {
      transform: translate(-50%, -60%);
      opacity: 1;
      display: block;
    }
    to {
      transform: translate(-50%, -80%);
      opacity: 0;
      display: none;
    }
  }
  @keyframes move {
    from {
      transform: translate(-50%, -75%);
    }
    to {
      transform: translate(-50%, -60%);
    }
  }
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #6c757d;
  padding: 1.2rem;
`;

const TotalContainer = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
const ImgContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Comment = styled.div`
  padding: 0rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
  span {
    display: inline-block;
    font-size: 22px;
    color: #404040;
    font-weight: bold;
  }
  > :nth-child(2) {
    margin-top: 1rem;
  }
  > :last-child {
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 15px;
    color: #606060;
  }
`;

const BtnContainer = styled.div`
  text-align: right;
  padding: 1rem;
  button {
    width: 57px;
    height: 38px;
    color: #fff;
    background-color: #0acf97;
    border-color: #0acf97;
    box-shadow: 0 2px 6px 0 rgb(10 207 151 / 50%);
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #049169;
    }
  }
`;
