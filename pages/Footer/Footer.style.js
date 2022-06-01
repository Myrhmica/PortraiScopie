import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #3b3361;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ImageWrapper = styled.div``;

/*export const TextWrapper = styled.div`
  min-width: 285px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;*/

export const ContentWrapper = styled.div`
  background-color: #3b3361;
  color: white;
  display: flex;
`;

export const Text = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  font-size: 20px;
`;

export default FooterWrapper;
