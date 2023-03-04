import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  background-color: cyan;
  margin: 12px 0;
`

export const ButtonContent = styled.button`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border-radius: 12px;
  background-color: cadetblue;
  color: #EEEEEE;
  
  
  &:disabled {
    backdrop-filter: blur(10px);
    color: #EEEEEE;
  }
`