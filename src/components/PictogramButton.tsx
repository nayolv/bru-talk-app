import * as Speech from 'expo-speech';
import { TouchableOpacity, Text, StyleSheet, Image, Dimensions, useWindowDimensions, View, Alert } from 'react-native';
import { SpaceTheme } from '../styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAppMode } from '../stores/useAppMode';

type PictogramButtonProps = {
    label: string;
    imgUrl?: string;
    isSelected?: boolean;
    isSelecting?: boolean;
    onSelect?: () => void;
};

export default function PictogramButton({
    label,
    imgUrl,
    isSelected,
    isSelecting,
    onSelect,
}: PictogramButtonProps) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const { mode, setMode } = useAppMode();

    const speak = () => Speech.speak(label);

    const handlePress = () => {
        if (isSelecting) return onSelect?.();
        if (mode === 'config') {
            return Alert.alert(
                "Debes activar modo seguro para continuar.",
                "¿Deseas activarlo ahora o continuar con la seleccion?",
                [
                    { text: "Cancelar", style: "cancel" },
                    {
                        text: "Activar Modo Seguro",
                        onPress: () => setMode("safe")
                    }
                ]
            )
        }

        speak();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                styles.button,
                isSelected ? styles.selected : null,
                isLandscape && styles.landscapeButton,
            ]}
        >
            <View style={styles.imgContainer}>
                {imgUrl ?
                    <Image source={{ uri: imgUrl }} style={styles.image} />
                    :
                    <Image
                        source={require('../../assets/no-image.png')}
                        style={styles.imagePreview}
                        resizeMode="contain"
                    />
                }
            </View>
            <Text style={styles.text}>{label}</Text>
            {isSelecting && (
                <MaterialIcons
                    name={isSelected ? 'check-circle' : 'radio-button-unchecked'}
                    size={30}
                    color={isSelected ? SpaceTheme.colors.deepSpaceLight : SpaceTheme.colors.deepSpace}
                    style={styles.checkIcon}
                />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: SpaceTheme.colors.nebulaEdge,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 6,
        marginRight: 6,
        borderRadius: 12,
        borderColor: SpaceTheme.colors.white,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: SpaceTheme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        position: 'relative',
    },
    landscapeButton: {
        maxHeight: 250,
    },
    text: {
        fontSize: 18,
        color: SpaceTheme.colors.black,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    imgContainer: {
        width: '90%',
        height: '75%',
        margin: 0,

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        borderColor: SpaceTheme.colors.cosmicDust,
        borderWidth: 3,
    },
    imagePreview: {
        width: '100%',
        height: '100%',
    },
    selected: {
        borderColor: SpaceTheme.colors.borders,
        borderWidth: 2,
        backgroundColor: SpaceTheme.colors.nebulaEdgeDark,
    },
    checkIcon: {
        position: 'absolute',
        top: -15,
        right: -10,
    },
});
