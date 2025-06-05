import { CustomTextInput } from "../../../components/Inputs/CustomTextInput";

type NameInputProps = {
    label: string;
    handleOnChange: (text: string) => void;
};

export const NameInput = ({ label, handleOnChange }: NameInputProps) => {
    return (
        <CustomTextInput
            placeholder='Nombre del picto'
            value={label}
            onChangeText={handleOnChange}
        />
    )
}

