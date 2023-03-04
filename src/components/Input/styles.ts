import styled from "styled-components";
import {IButtonProps} from "../Button/types";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #EEEEEE;
`
export const InputText = styled.input`
  background-color: transparent;
  color: #F5EAEA;
  border: none;
  height: 30px;
  width: inherit;
  padding: 0 8px;
  outline: none;
  
  &::placeholder {
    color: #EEEEEE;
  }
`

export const InputError = styled.p`
    color: red;
`