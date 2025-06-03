import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';
import { usePictogramHandler } from '../../hooks/usePictogramHandler';
import { AddPictogramScreenProps, RootStackParamList } from '../../navigation/types';

export default function AddPictogramScreen({ route }: AddPictogramScreenProps) {
    const { pictoToEdit } = route.params || {};
    const {
        label,
        imgUrl,
        handleOnChangeText,
        handleSubmit,
        handlePickImage
    } = usePictogramHandler(pictoToEdit);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nombre del picto'
                style={styles.input}
                value={label}
                onChangeText={handleOnChangeText}
            />
            {imgUrl && (
                <View style={styles.imagePreviewContainer}>
                    <Image
                        source={{ uri: imgUrl }}
                        style={styles.imagePreview}
                        resizeMode="contain"
                    />
                </View>
            )}
            <TouchableOpacity
                onPress={handlePickImage}
                style={styles.imageButton}
            >
                <Text style={styles.buttonText}>
                    {imgUrl ? "Cambiar imagen" : "Añadir imagen"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.submitButton, !label && styles.disabledButton]}
                disabled={!label}
            >
                <Text style={styles.buttonText}>
                    {pictoToEdit ? 'Guardar cambios' : 'Agregar'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    input: {
        borderWidth: 1,
        borderColor: '#4f9deb',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 16
    },
    imageButton: {
        backgroundColor: '#4f9deb',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    submitButton: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    disabledButton: {
        backgroundColor: '#95a5a6',
        opacity: 0.6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    imagePreviewContainer: {
        alignItems: 'center',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    imagePreview: {
        width: 200,
        height: 200,
        borderRadius: 8
    }
});