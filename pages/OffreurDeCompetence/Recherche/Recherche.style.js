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

export default WrapperTitle;
