import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import Modal from "../components/Modal";

export default function SearchDelivery() {
  const [address, setAddress] = useState({});
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [trick, setTrick] = useState(false);
  const [totalAddress, setTotalAddress] = useState("");
  const [possibleDely, setPossibleDely] = useState(0);
  let subAddress = "";
  const postCodeStyle = {
    height: "100vh",
  };

  const handleAddress = (data) => {
    setAddress(data);
    setShow(true);
    setTotalAddress(data.address);
  };

  const handleModal = () => {
    axios
      .post(
        "https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest",
        {
          addrBasic: totalAddress,
        },
        {
          "Content-type": "application/json",
        }
      )
      .then((data) => {
        console.log(data.data.result.delyverYn);
        setPossibleDely(data.data.result.delyverYn);
      })
      .then(() => {
        setTrick(true);
        setModal(true);
      })
      .catch((err) => console.log(err.response));
  };

  const handleModalClose = () => {
    setTrick(false);
    setTimeout(() => setModal(false), 200);
  };

  const handleValue = (e) => {
    subAddress = e.target.value;
    setTotalAddress(address.address + " " + subAddress);
  };

  return (
    <>
      {show ? (
        <Container>
          <Header>
            <span onClick={() => setShow(false)}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACJUlEQVRIia3TT0jTYRzH8ffn2XSbodsILDDcFBXqGtGhoJ2khMjo4qFdvEh0ywiJqEtIdOrYKQqCTkEE/TMIEyIoIpHsj9tMmjbIgv1My2j+vh0ySESZbt/Lw8P3eZ7X8+X5PqLsSAVJhPc4dMw3d4tP916Vu9OVt+xQiObwUcldNdSFv/S7/MuVizS7HklXwEKG9TP98M1GEK2b3dbZSCTQL3QCY8T80gD5oQ0BAME1M8mDSee7CxjdYHd9c+fJD01uFIC1Kkl2bZfZTcFepGt+afEy009mNgPAqkpSQRLhTsElpKjv+6fRzxtMDy9uFliNJOvSMk5hbDHfzpBfvA3DpUqA/5DdNSQa04JB4LNhJ8k/eAT4lQIAIpmKOYucM+gDRs23i5Tc+2ocDkDohxekFOogoF5BxGQhOQ1Qa1UzRORFkOCvCazuOtCHqQ14JvG1Wojv28vlFt5VS6I5LWkQY8aks0zdH6JKbxL4O8wu4WVfE+v4JrRf0E20vYDX9AGmKoYCK2bFhnFidZOSDkgcpiEwj7djHKYqauOVCAUfL5sh2npHKCWpl3jtVuqTY8xNfq8Sshxebp5424gz1yjokQIJi7WM4uWK1UMAitmihVueK+jChqVFYCfR1jG83Gz1EICF3IJ5mcfEOwrCjkvuCPH2HMXMJFD2Z1of+RfFtndE3Uc59snoor79KXOZL9VFyC7hNU0Q1aiDGpN7i5cplIv8AY12wKKU1jaJAAAAAElFTkSuQmCC"
                alt=""
              />
            </span>
            <div>다시 주소 검색하기</div>
          </Header>
          <hr />
          <AddressInfo>
            <AddressInputSmall readOnly value={address.zonecode} />
            <AddressInput readOnly value={address.address} />
            <AddressInput
              placeholder="나머지 주소를 입력해 주세요."
              onChange={handleValue}
            />
          </AddressInfo>
          <ButtonContainer>
            <button onClick={handleModal}>주소입력</button>
          </ButtonContainer>
          <Footer>
            <div>새벽배송 지역 중 배송 불가 장소 안내</div>
            <p>관공서/학교/병원/시장/공단/도서산간지역</p>
            <hr />
            <p>가락동농수산물도매시장</p>
            <p>가천대학교</p>
          </Footer>
          {modal ? (
            <Modal
              handleModal={handleModalClose}
              trick={trick}
              possibleDely={possibleDely}
            />
          ) : null}
        </Container>
      ) : (
        <DaumPostcode style={postCodeStyle} onComplete={handleAddress} />
      )}
    </>
  );
}

const Container = styled.div`
  width: 420px;
  height: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  hr {
    width: 95%;
    margin: 1rem auto;
    height: 5px;
    background-color: #02204a;
  }
`;

const Header = styled.div`
  width: 400px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  line-height: 50px;
  display: flex;
  margin-left: 1rem;
  padding: 1rem;
  gap: 2rem;
  span {
    cursor: pointer;
  }
  div {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2.2;
    color: #7e8681;
  }
`;
const AddressInfo = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-left: 1rem;
`;
const AddressInput = styled.input`
  padding: 0.6rem;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;

const AddressInputSmall = styled(AddressInput)`
  width: 40%;
`;

const ButtonContainer = styled.div`
  width: 95%;
  margin: 0.8rem auto;
  text-align: center;
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #02204a;
    color: white;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 95%;
  height: 480px;
  margin: 37px auto 0 auto;
  padding: 1rem;
  background-color: #e5e8ef;
  div {
    color: red;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: bold;
  }
  hr {
    width: 99%;
    height: 2px;
    margin: 3rem 0;
  }
  p {
    color: #9aa8af;
    font-size: 14px;
  }
`;
