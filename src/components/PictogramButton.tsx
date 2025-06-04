import { TouchableOpacity, Text, StyleSheet, Image, Dimensions, useWindowDimensions, View } from 'react-native';
import * as Speech from 'expo-speech';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SpaceTheme } from '../styles/theme';

type PictogramButtonProps = {
    label: string;
    imgUrl?: string;
    isSelected?: boolean;
    isSelecting?: boolean;
    onLongPress?: () => void;
    onSelect?: () => void;
};

export default function PictogramButton({
    label,
    imgUrl,
    isSelected,
    isSelecting,
    onLongPress,
    onSelect,
}: PictogramButtonProps) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const speak = () => {
        Speech.speak(label);
    };

    const handlePress = () => {
        if (isSelecting) {
            onSelect?.();
        } else {
            speak();
        }
    };
    return (
        <TouchableOpacity
            onPress={handlePress}
            onLongPress={onLongPress}
            style={[
                styles.button,
                isSelected ? styles.selected : null,
                isLandscape && styles.landscapeButton,
            ]}
        >
            <View style={styles.imgContainer}>
                {imgUrl && <Image source={{ uri: imgUrl }} style={styles.image} />}
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
        margin: 8,
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
    },
    imgContainer: {
        width: '78%',
        height: '78%',
        margin: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    selected: {
        borderColor: SpaceTheme.colors.borders,
        borderWidth: 2,
        backgroundColor: SpaceTheme.colors.nebulaEdgeDark,
    },
    checkIcon: {
        position: 'absolute',
        top: -5,
        right: -5,
    },
});
