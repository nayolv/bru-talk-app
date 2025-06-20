import { ComponentProps } from "react";
import { DimensionValue, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SpaceTheme } from "../../styles/theme";

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type RoundButtonProps = {
    onPress?: () => void;
    onLongPress?: () => void;
    text?: string;
    textColor?: string;
    textSize?: number;
    backgroundColor?: string;
    icon?: MaterialIconName;
    iconColor?: string
    iconSize?: number;
    disabled?: boolean;
    borderColor?: string;
    borderWidth?: number;
    width?: number | DimensionValue;
    height?: number | DimensionValue;
    minWidth?: number | DimensionValue;
    minHeight?: number | DimensionValue;
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
    borderWidth = 0,
    onLongPress,
    width = 50,
    height = 50,
    minWidth = 50,
    minHeight = 50,
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
                    width,
                    height,
                    minWidth,
                    minHeight
                }
            ]}
            onLongPress={onLongPress}
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
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
        elevation: 3,
        shadowColor: SpaceTheme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        padding: 10,
    },
    buttonText: {
        fontWeight: '600',
    },
});