import styled from "styled-components";

const WrapperTitle = styled.div`
  padding-top: 50px;
  padding-left: 50px;
`;

export const WrapperRecherche = styled.div`
  padding-top: 25px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;

  input {
    font-weight: 500;
    font-size: 20px;
    padding-left: 20px;
    width: 1000px;
    height: 70px;
    border-radius: 20px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const WrapperImage = styled.div`
  padding-left: 20px;
`;

export const Title = styled.h2``;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonLink = styled.button`
  font-size: 20px;
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
  line-height: 24px;
`;

export default WrapperTitle;
