import styled from "styled-components";

const WrapperALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 100vh;
`;
export const WrapperAll = styled.div`
  background-color: white;
  padding-left: 70px;
  margin-bottom: 50px;
  width: 1700px;
  height: auto;
  border-radius: 30px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperTop = styled.div`
  background: #f2bf3d;
  border-radius: 30px;
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const TitleTop = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const TitleColor = styled.h2`
  color: #2a3985;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const TitleImp = styled.h2`
  font-size: 20px;
  color: #2a3985;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const TextAjout = styled.h2`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperImp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 40px;
  width: 1400px;
`;

export const WrapperImage = styled.div``;

export const Divider = styled.div`
  background-color: #2a3985;
  width: 1400px;
  height: 1px;
`;

export const WrapperContent = styled.div``;

export const WrapperMenuDeroulant = styled.div`
  width: 730px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  input {
    background: #f0efe9;
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 700px;
    height: 50px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const WrapperMetier = styled.div``;

export const WrapperDebut = styled.div``;

export const WrapperFin = styled.div``;

export const WrapperDate = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  input {
    background: #f0efe9;
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 200px;
    height: 50px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-right: 50px;
  line-height: 24px;
`;

export const ButtonLinkPrec = styled.button`
  font-size: 20px;
  color: white;
  background: #c4c4c4;
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

export const WrapperAjout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperAdd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperAllAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLinkAdd = styled.button`
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 130px;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 15px;
  line-height: 24px;
  a {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`;

export const ButtonLinkMS = styled.button`
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 130px;
  margin-top: 25px;
  margin-bottom: 10px;
  line-height: 24px;
`;

export const WrapperButtonAdd = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperTextI = styled.div`
  background: #f0efe9;
  width: 250px;
  height: 130px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TextI = styled.p`
  margin: 0;
  font-size: 20px;
`;

export default WrapperALL;
