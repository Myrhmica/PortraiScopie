import styled from "styled-components";

const WrapperALL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 100vh;
`;

export const WrapperContent = styled.div``;

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
    border: none;
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 700px;
    height: 70px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
  input:focus {
    outline: none;
  }
  input:required {
    border: 2px solid red;
  }
  input:checked {
    border: 2px solid green;
  }
`;

export const ButtonLinkLeft = styled.button`
  color: white;
  background: #c4c4c4;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 250px;
  height: 50px;
  dislpay: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ButtonLinkRight = styled.button`
  font-size: 20px;
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const WrapperButton = styled.div`
  width: 800px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TextBottom = styled.h2`
  margin: 0;
`;

export const Footer1 = styled.div``;

export default WrapperALL;
