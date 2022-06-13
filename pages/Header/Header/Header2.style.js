import styled from "styled-components";

const HeaderWrapper = styled.div``;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperTitle = styled.div`
  background-color: #2a3985;
  color: white;
  display: flex;
  flex-direction: row;
`;

export const ContainerMenu = styled.div``;

export const Title = styled.h2`
  color: white;
  padding-left: 40px;
  font-weight: 500;
  font-size: 20px;
`;

export const Text = styled.h2`
  padding-right: 10px;
  font-weight: 500;
  font-size: 20px;
  margin: 0px;
`;

export default HeaderWrapper;
