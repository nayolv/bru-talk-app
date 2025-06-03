import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export const useImagePicker = () => {
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Se necesitan permisos para acceder a las imágenes');
            return null;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (result.canceled) return null;

        const { uri } = result.assets[0];
        const fileName = uri.split('/').pop()!;
        const newPath = `${FileSystem.documentDirectory}${fileName}`;

        await FileSystem.copyAsync({
            from: uri,
            to: newPath,
        });

        return newPath;
    };

    return { pickImage };
};