import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import * as Speech from 'expo-speech';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
    onSelect
}: PictogramButtonProps) {

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
            ]}
        >
            {imgUrl && <Image source={{ uri: imgUrl }} style={styles.image} />}
            <Text style={styles.text}>{label}</Text>
            {isSelecting && (
                <MaterialIcons
                    name={isSelected ? 'check-circle' : 'radio-button-unchecked'}
                    size={20}
                    color={isSelected ? 'green' : 'gray'}
                    style={styles.checkIcon}
                />
            )}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        margin: 8,
        paddingTop: 25,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        position: 'relative',
        height: 175
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    selected: {
        borderColor: '#1d91c9',
        borderWidth: 2,
        backgroundColor: '#e6f7ff',
    },
    checkIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
});
