import {InputContainer, InputText, InputError} from "./styles";
import {IInputProps} from "./types";
import {Controller} from "react-hook-form";

export const Input = ({control, name, type, errorMessage, ...rest}: IInputProps) => {
    return (
        <>
        <InputContainer>
            <Controller render={({field: {onChange, onBlur, value, ref}}) => (
                <InputText {...rest} onChange={onChange}
                           onBlur={onBlur} value={value}
                           ref={ref} type={type}/>)}
                        control={control}
                        name={name}
            />

        </InputContainer>
    {errorMessage ? <InputError>{errorMessage}</InputError> : null}
        </>
    )
}