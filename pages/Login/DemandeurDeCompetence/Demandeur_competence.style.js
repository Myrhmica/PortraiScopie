import styled from "styled-components";

const WrapperALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const WrapperContent = styled.div`
  font-family: Sawarabi Gothic;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperInscription = styled.div`
  @media only screen and (min-width: 801px) {
    form {
      width: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 800px) and (min-width: 601px) {
    form {
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 20px;
`;
export const Subtitle = styled.h4`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  font-size: 17px;
  a {
    text-decoration: underline;
  }
`;

export const WrapperInput = styled.div`
  @media only screen and (min-width: 801px) {
    input {
      padding-left: 20px;
      font-size: 20px;
      height: 75px;
      width: 600px;
      border-radius: 15px;
    }
  }
  @media only screen and (max-width: 800px) and (min-width: 601px) {
    input {
      padding-left: 20px;
      font-size: 20px;
      height: 75px;
      width: 400px;
      border-radius: 15px;
    }
  }
  @media only screen and (max-width: 600px) {
    input {
      padding-left: 20px;
      font-size: 20px;
      height: 75px;
      width: 300px;
      border-radius: 15px;
    }
  }
`;

export const WrapperBottom = styled.div`
  @media only screen and (min-width: 801px) {
    width: 600px;
  }
  @media only screen and (max-width: 800px) and (min-width: 601px) {
    width: 400px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

export const Button = styled.button`
  margin: 20px;
  margin-right: 0px;
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

export default WrapperALL;
