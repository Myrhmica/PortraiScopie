import styled from "styled-components";

const WrapperContent = styled.div``;

export const WrapperContentLeft = styled.div`
  @media only screen and (min-width: 1251px) {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    img {
      width: 280px;
      height: 200px;
      display: flex;
      justify-content: center;
      filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
  @media only screen and (max-width: 1250px) and (min-width: 701px) {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    img {
      width: 200px;
      height: 120px;
      display: flex;
      justify-content: center;
      filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
  @media only screen and (max-width: 700px) {
  }
`;

export const WrapperBox = styled.div`
  @media only screen and (min-width: 1251px) {
    padding-bottom: 200px;
    display: grid;
  }
  @media only screen and (max-width: 1250px) and (min-width: 701px) {
    padding-bottom: 150px;
  }
  @media only screen and (max-width: 700px) {
    padding-bottom: 100px;
  }
`;

export const WrapperDialog = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Wrapper1 = styled.div`
  @media only screen and (min-width: 1251px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 250px;
    border-radius: 250px / 140px;
    background: #ffffff;
    border: 1px solid #2a3985;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media only screen and (max-width: 1250px) and (min-width: 701px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 250px;
    border-radius: 250px / 140px;
    background: #ffffff;
    border: 1px solid #2a3985;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media only screen and (max-width: 700px) {
    padding-bottom: 100px;
  }
`;

export const Wrapper2 = styled.div`
  position: absolute;
  top: 570px;
  width: 200px;
  height: 110px;
  border-radius: 250px / 140px;
  background: #ffffff;
  border: 1px solid #2a3985;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Wrapper3 = styled.div`
  position: absolute;
  top: 650px;
  width: 90px;
  height: 50px;
  border-radius: 250px / 140px;
  background: #ffffff;
  border: 1px solid #2a3985;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TextBox = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #2a3985;
`;

export const WrapperImageTop = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const WrapperImageBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
`;

export const Text = styled.p`
  font-size: 28px;
  text-align: center;
  margin: 10px;
`;

export const Button = styled.div`
  background-color: #5e3f8e;
  color: white;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const WrapperButton = styled.div`
  display: flex;
  filter: drop-shadow(3px 4px 4px rgba(90, 58, 140, 0.5));
`;

export const WrapperContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperContentMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export default WrapperContent;
