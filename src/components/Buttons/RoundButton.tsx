import { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SpaceTheme } from "../../styles/theme";

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type RoundButtonProps = {
    onPress: () => void;
    text?: string;
    textColor?: string;
    textSize?: number;
    backgroundColor?: string;
    icon?: MaterialIconName;
    iconColor?: string
    iconSize?: number;
    disabled?: boolean;
    borderColor?: string;
    borderWidth?: number
}

export const RoundButton = ({
    onPress,
    text,
    textColor = SpaceTheme.colors.deepSpace,
    textSize = 16,
    backgroundColor = SpaceTheme.colors.nebulaEdge,
    icon,
    iconColor = SpaceTheme.colors.deepSpace,
    iconSize = 24,
    disabled = false,
    borderColor = 'none',
    borderWidth = 0
}: RoundButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                {
                    backgroundColor,
                    opacity: disabled ? 0.6 : 1,
                    borderWidth,
                    borderColor,
                }
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            {icon && <MaterialIcons name={icon} size={iconSize} color={iconColor} />}
            {text && (
                <Text style={[
                    styles.buttonText,
                    {
                        color: textColor,
                        fontSize: textSize,
                        marginLeft: icon ? 8 : 0
                    }
                ]}>
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: 50,
        minHeight: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        flexDirection: 'row',
        paddingHorizontal: 12,
        elevation: 3,
        shadowColor: SpaceTheme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    buttonText: {
        fontWeight: '600',
    },
});