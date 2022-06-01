import styled from "styled-components";

const WrapperContent = styled.div``;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const WrapperImage = styled.div``;

export const Title = styled.h2`
  color: white;
  background-color: #f2bf3d;
  border-radius: 20px;
  width: 650px;
  height: 75px;
  padding: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.h2``;

export const TextTop = styled.h1`
  font-weight: bold;
  padding-right: 10px;
`;

export const Text = styled.h2`
  padding-left: 150px;
`;

export const WrapperCompetence = styled.div``;

export const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 150px;
`;

export const WrapperInput = styled.div`
  padding: 40px;
  padding-left: 150px;
  input {
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 700px;
    height: 70px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonLinkLeft = styled.button`
  color: white;
  background: #c4c4c4;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 250px;
  dislpay: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

export const ButtonLinkRight = styled.button`
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 200px;
  dislpay: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

export const WrapperButton = styled.div`
  padding-left: 700px;
`;

export const TextBottom = styled.h2``;

export const Footer1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default WrapperContent;
