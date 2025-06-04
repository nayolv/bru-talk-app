import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';
import { usePictogramHandler } from '../../hooks/usePictogramHandler';
import { AddPictogramScreenProps, RootStackParamList } from '../../navigation/types';
import { SpaceTheme } from '../../styles/theme';

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
            <View style={styles.formImgContainer}>
                <Image
                    source={require('../../../assets/astro.png')}
                    style={styles.formImg}
                />
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder='Nombre del picto'
                    style={styles.input}
                    value={label}
                    onChangeText={handleOnChangeText}
                    placeholderTextColor={SpaceTheme.colors.nebulaEdgeDark}
                    underlineColorAndroid="transparent"
                />
                <View style={styles.imagePreviewContainer}>
                    {imgUrl ?
                        <Image
                            source={{ uri: imgUrl }}
                            style={styles.imagePreview}
                            resizeMode="contain"
                        />
                        :
                        <Image
                            source={require('../../../assets/no-image.png')}
                            style={styles.imagePreview}
                            resizeMode="contain"
                        />
                    }
                </View>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    form: {
        width: '50%',
        borderColor: SpaceTheme.colors.borders,
        borderWidth: 2,
        padding: 20,
        borderRadius: 12,
    },
    formImgContainer: {
        width: 250,
        height: 250,
    },
    formImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    input: {
        borderWidth: 2,
        borderColor: SpaceTheme.colors.borders,
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: SpaceTheme.colors.white,
        fontWeight: 'bold'
    },
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