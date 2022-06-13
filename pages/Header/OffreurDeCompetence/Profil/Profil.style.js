import styled from "styled-components";

const WrapperTitle = styled.div`
  padding-top: 50px;
  padding-left: 50px;
`;

export const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 680px;
  height: 100px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

export const WrapperCard = styled.div`
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperBox = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 4px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  width: 250px;
  height: 225px;
`;

export const WrapperBottom1 = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 20px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperCompetence = styled.div`
  background: #2a3985;
  border-radius: 30px;
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WrapperBottom = styled.div`
  background: #2a3985;
  border-radius: 30px;
  height: 90px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonLink = styled.div``;

//Title & Text
export const TitleCard = styled.h2`
  font-size: 25px;
  color: white;
`;

export const Text = styled.h2``;

export const TextTop = styled.h2`
  padding-left: 10px;
  font-size: 25px;
`;

export const TextTopButton = styled.h2`
  background: #2a3985;
  border-radius: 30px;
  color: white;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBottom = styled.h2`
  font-size: 18px;
  background-color: white;
  color: black;
  border-radius: 20px;
  width: 150px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default WrapperTitle;
