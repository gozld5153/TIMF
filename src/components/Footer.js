import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Container>
      <BoxContainer>
        <ItemBox>
          <div>Timf</div>
          <div>상호명:(주)팀프레시</div>
          <div>사업자등록번호: 561-88-01138</div>
          <div>대표자: 이성일</div>
        </ItemBox>
        <ItemBox>
          <div>Contact us</div>
          <div>Tel: 02-423-0525</div>
          <div>Fax: 02-3432-0525</div>
          <div>E-mail: info@timf.co.kr</div>
          <div>서울특별시 송파구 위례성대로 12길 15-1</div>
          <Special>영업 및 제휴 문의:</Special>
          <div>E-mail: sales@timf.co.kr</div>
        </ItemBox>
        <ItemBox>
          <div>Others</div>
          <a href="/">
            <span>인재채용</span>
          </a>
          <a href="/">
            <span>서비스 소개</span>
          </a>
          <a href="/">
            <span>개인정보 처리방침</span>
          </a>
          <a href="/">
            <span>위치기반 서비스 이용약관</span>
          </a>
        </ItemBox>
      </BoxContainer>
      <Right>© TeamFresh All right reserved</Right>
    </Container>
  );
}

const Container = styled.div`
  background-color: #31353e;
  color: rgb(213 213 213);
  font-size: 0.85rem;
`;

const BoxContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const ItemBox = styled.div`
  flex: 1;
  padding: 3rem 3rem 2rem 3rem;
  text-align: center;
  & > :nth-child(1) {
    padding: 0.8rem 0;
    border-top: 1px solid rgb(213 213 213);
    border-bottom: 1px solid rgb(213 213 213);
  }
  div {
    margin-bottom: 1rem;
  }
  a {
    display: block;
    margin-bottom: 1rem;
    color: rgb(213 213 213);
    font-size: 0.85rem;
    cursor: pointer;
  }
  a:hover span {
    border-bottom: 1px solid rgb(213 213 213);
  }
`;

const Special = styled.div`
  padding-top: 2rem;
`;

const Right = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0 2rem 0;
  text-align: center;
  border-top: 1px solid rgb(213 213 213);
`;
