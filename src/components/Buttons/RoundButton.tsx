import { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type RoundButtonProps = {
    onPress: () => void;
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    icon?: MaterialIconName;
    iconColor?: string
}

export const RoundButton = ({
    onPress,
    text,
    textColor = '#FFFFFF',
    backgroundColor = '#4f9deb',
    icon,
    iconColor = '#FFFFFF',
}: RoundButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor }]}
            onPress={onPress}
        >
            {icon && <MaterialIcons name={icon} size={24} color={iconColor} />}
            {text && <Text style={{ color: textColor, fontSize: 20 }}>{text}</Text>}
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        width: 50,
        height: 50,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
});