import styled from "styled-components";

const WrapperALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const WrapperContent = styled.div`
  font-family: Sawarabi Gothic;
`;

export const WrapperInscription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;
export const Title = styled.h2`
  font-size: 20px;
`;
export const Subtitle = styled.h4`
  padding-top: 15px;
  padding-left: 300px;
  font-size: 17px;
  a {
    text-decoration: underline;
  }
`;
export const WrapperInput = styled.div`
  input {
    padding-left: 20px;
    font-size: 20px;
    height: 75px;
    width: 600px;
    border-radius: 15px;
  }
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

export default WrapperALL;
