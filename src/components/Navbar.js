import React, { useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const handleDropDownMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Container>
      <img
        src="https://www.teamfresh.co.kr/resources/assets/img/logo.png"
        alt=""
      />

      <NavBtn onClick={handleDropDownMenu} isClicked={isClicked}>
        <span></span>
      </NavBtn>
      <NavMenuContainer isClicked={isClicked}>
        <li>
          <span>회사소개</span>
          <SubMenu>
            <a>회사소개</a>
            <a>협력사 소개</a>
            <a>고객사 소개</a>
            <a>오시는 길</a>
          </SubMenu>
        </li>
        <li>
          <span>사업소개</span>
          <SubMenu>
            <a>새벽배송</a>
            <a>화물주선</a>
            <a>풀필먼트</a>
            <a>그로서리</a>
          </SubMenu>
        </li>
        <li>
          <span>공지사항</span>
          <SubMenu>
            <a>공지사항</a>
            <a>인재채용</a>
            <a>서비스소개</a>
          </SubMenu>
        </li>
        <li>
          <span>보도자료</span>
        </li>
        <li>
          <span>테스트</span>
        </li>
      </NavMenuContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 0.8rem;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 110px;
    padding-left: 10px;
  }
  @media screen and (max-width: 993px) {
    flex-direction: column;
    align-items: flex-start;
    /* gap: 2rem; */
    /* justify-content: center; */
  }
`;

const NavMenuContainer = styled.ul`
  display: flex;
  gap: 2rem;
  margin-right: 2.5rem;
  color: rgb(96, 96, 96);
  font-weight: 500;
  font-size: 0.9rem;

  @media screen and (max-width: 993px) {
    width: 100%;
    background-color: #f8f9fa;
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
    display: ${({ isClicked }) => (isClicked ? "flex" : "none")};
  }
  li {
    position: relative;
  }
  li:hover > div {
    display: block;
  }

  li > span {
    cursor: pointer;
  }
  li > span:hover {
    font-weight: bold;
    color: black;
  }
`;

const NavBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 6px;
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 0;
  background-color: transparent;
  border: ${({ isClicked }) =>
    isClicked ? "2px solid #222" : "1px solid #dedfe0"};
  border-radius: 0.25rem;
  cursor: pointer;
  @media screen and (min-width: 994px) {
    display: none;
  }

  span {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
  }
`;

const SubMenu = styled.div`
  @media screen and (min-width: 993px) {
    position: absolute;
    width: 260%;
    top: 22px;
  }
  width: 100%;
  background-color: rgb(241 241 241);
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
  display: none;
  a {
    display: block;
    padding: 0.7rem;
    cursor: pointer;
  }
  a:hover {
    color: #222;
    font-weight: bold;
    background-color: rgb(221 221 221);
  }
`;
