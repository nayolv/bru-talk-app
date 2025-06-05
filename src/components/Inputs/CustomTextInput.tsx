import { TextInput } from "react-native"
import { generalStyles } from "../../styles/generalStyles"
import { SpaceTheme } from "../../styles/theme"

type CustomTextInputProps = {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    customStyle?: object;
}

export const CustomTextInput = ({ value, placeholder, customStyle, onChangeText }: CustomTextInputProps) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={[generalStyles.input, customStyle]}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={SpaceTheme.colors.nebulaEdgeDark}
        />)
}
