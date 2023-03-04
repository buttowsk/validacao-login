import {ButtonContainer, ButtonContent} from "./styles"
import {IButtonProps} from "./types";

export const Button = ({value, disable}: IButtonProps) => {
    return (
        <ButtonContainer>
            <ButtonContent disabled={disable}>
                {value}
            </ButtonContent>
        </ButtonContainer>
    )
}