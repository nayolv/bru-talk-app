import { StyleSheet } from "react-native";
import { SpaceTheme } from "./theme";

export const generalStyles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: SpaceTheme.colors.borders,
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: SpaceTheme.colors.white,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
});