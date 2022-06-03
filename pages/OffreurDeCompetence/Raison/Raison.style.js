import styled from "styled-components";

const WrapperALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: white;
  background-color: #f2bf3d;
  border-radius: 20px;
  width: 650px;
  height: 75px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  padding-left: 15px;
`;

export const WrapperCocheAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
`;

export const WrapperCocheLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperCocheRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperCoche = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
`;

export const Coche = styled.div`
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 30px;
    height: 30px;
  }
  input[type="checkbox"]:checked {
    background-color: #f2bf3d;
    &:before {
    }
  }
`;

export const ButtonLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBottom = styled.h2`
  color: white;
  background: #2a3985;
  border-radius: 30px;
  width: 200px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer1 = styled.div``;

export default WrapperALL;
