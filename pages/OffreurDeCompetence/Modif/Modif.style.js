import styled from "styled-components";

// Div
const WrapperTitle = styled.div`
  padding: 20px;
  padding-left: 650px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export const WrapperAll = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  width: 1500px;
  height: auto;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperBoxAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  width: 1500px;
`;

export const WrapperBox = styled.div`
  background: #2a3985;
  color: white;
  border-radius: 30px;
  width: 350px;
  height: 370px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperProgression = styled.div`
  padding-right: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Progression = styled.div`
  background-color: #f2bf3d;
  width: 300px;
  height: 10px;
  border-radius: 15px;
`;

export const ButtonLink = styled.div`
  padding-top: 25px;
`;

// Text
export const Title = styled.h2`
  padding-top: 15px;
`;

export const TitleTop = styled.h2`
  background: #2a3985;
  border-radius: 30px;
  color: white;
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.h2`
  background: #2a3985;
  border-radius: 30px;
  color: white;
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TitleBox = styled.h2`
  background-color: white;
  color: black;
  border-radius: 30px;
  font-size: 20px;
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  padding: 15px;
  padding-left: 30px;
  font-size: 24px;
`;

export const TextBox = styled.h2``;

export const TextDel = styled.h2`
  color: #fb3042;
  font-weight: 400;
  font-size: 18px;
`;

export default WrapperTitle;
