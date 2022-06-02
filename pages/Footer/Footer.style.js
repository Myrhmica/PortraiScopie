import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #3b3361;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
  width: 100%;
  height: 150px;
`;

export const ImageWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*export const TextWrapper = styled.div`
  min-width: 285px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;*/

export const WrapperTextAll = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const WrapperTextTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const WrapperTextBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 78%;
`;

export const ContentWrapper = styled.div`
  color: white;
  display: flex;
`;

export const Text = styled.h2`
  font-size: 20px;
`;

export default FooterWrapper;
