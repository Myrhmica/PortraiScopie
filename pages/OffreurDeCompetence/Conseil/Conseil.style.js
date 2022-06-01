import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Conseils = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ConseilsCard = styled.div`
  background-color: white;
  font-family: "Lato";
  border: 1px solid #2a3985;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 300px;
  height: 400px;
  display: flex;
`;

export const WrapperImage = styled.div`
  width: 200px;
  height: 100px;
  padding-bottom: 170px;
`;

export const Text = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextTop = styled.h2`
  color: white;
  border-radius: 20px;
  background-color: #f2bf3d;
  width: 650px;
  height: 75px;
  padding: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const WrapperConseilsCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 60px;
`;

export const ButtonLink = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 30px;
`;

export const Button = styled.button`
  background-color: #2a3985;
  color: white;
  font-size: 18px;
  height: 40px;
  width: 350px;
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Footer1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Container;
