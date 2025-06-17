import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SpaceTheme } from '../../../styles/theme';
import { Pictogram } from '../../../types/pictogramTypes';

type ButtonsFormProps = {
    label: string;
    imgUrl?: string;
    categories: string[];
    pictoToEdit?: Pictogram;
    handlePickImage: () => void;
    handleSubmit: (categories: string[]) => void;
}

export const ButtonsForm = ({
    label,
    imgUrl,
    categories,
    pictoToEdit,
    handlePickImage,
    handleSubmit
}: ButtonsFormProps) => {

    return (
        <View>
            <TouchableOpacity
                onPress={handlePickImage}
                style={styles.imageButton}
            >
                <Text style={styles.buttonText}>
                    {imgUrl ? "Cambiar imagen" : "Añadir imagen"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleSubmit(categories)}
                style={[styles.submitButton, !label && styles.disabledButton]}
                disabled={!label}
            >
                <Text style={styles.buttonText}>
                    {pictoToEdit ? 'Guardar cambios' : 'Agregar'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageButton: {
        backgroundColor: SpaceTheme.colors.cosmicDust,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: SpaceTheme.colors.nebulaEdge,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    disabledButton: {
        backgroundColor: SpaceTheme.colors.gray,
        opacity: 0.6
    },
    buttonText: {
        color: SpaceTheme.colors.text,
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});