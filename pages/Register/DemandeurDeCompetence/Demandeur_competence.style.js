import styled from "styled-components";

const WrapperContent = styled.div`
  font-family: Sawarabi Gothic;
  padding-bottom: 0px;
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const WrapperInscription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
export const Subtitle = styled.h4`
  padding-top: 15px;
  padding-left: 300px;
  font-size: 15px;
  a {
    text-decoration: underline;
    color: #2a3985;
  }
`;
export const WrapperInput = styled.div`
  padding: 10px;
  input {
    padding-left: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    height: 75px;
    width: 600px;
    border-radius: 15px;
    border: 1px solid #000000;
    filter: drop-shadow(2px 5px 4px rgba(59, 51, 97, 0.45));
  }
`;

export const WrapperCoche = styled.div`
  margin-right: 150px;
  width: 430px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  a {
    text-decoration: underline;
  }
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const WrapperButton = styled.div`
  padding-left: 160px;
  font-size: 20px;
`;

export const Button = styled.button`
  margin: 20px;
  background-color: #2a3985;
  color: white;
  border-radius: 30px;
  width: 200px;

  &:text {
    color: white;
    font-size: 20px;
  }
`;
export const Text = styled.p``;

export const Footer1 = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export default WrapperContent;
