import { usePictogramStore } from '../stores/usePictogramStore';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Pictogram } from '../types/pictogramTypes';
import { AddPictogramNavigation } from '../navigation/types';
import { useImagePicker } from './useImagePicker';

export const usePictogramHandler = (pictoToEdit?: Pictogram) => {
    const [label, setLabel] = useState(pictoToEdit?.label || '');
    const [imgUrl, setImgUrl] = useState(pictoToEdit?.imgUrl || '');

    const navigation = useNavigation<AddPictogramNavigation>();
    const { pickImage } = useImagePicker();
    const {
        selectedIds,
        deletePictograms,
        toggleSelection,
        startSelecting,
        clearSelection,
        addPicto,
        updatePicto,
        pictograms,
    } = usePictogramStore();

    const handleDelete = () => {
        if (selectedIds.length === 0) return;
        deletePictograms(selectedIds);
        clearSelection();
    };

    const handleEdit = (picto: Pictogram) => {
        navigation.navigate('AddPictogram', { pictoToEdit: picto });
        clearSelection();
    };

    const handleAdd = () => {
        navigation.navigate('AddPictogram', {})
    }

    const handleLongPress = (id: string) => {
        startSelecting();
        toggleSelection(id);
    };

    const handlePickImage = async () => {
        const uri = await pickImage();
        if (uri) setImgUrl(uri);
    };

    const handleOnChangeText = (value: string) => setLabel(value);

    const handleSubmit = () => {
        if (!label.trim()) return Alert.alert("Error", "El nombre es requerido");
        if (pictograms.some(p => p.label === label.trim() && p.id !== pictoToEdit?.id)) {
            return Alert.alert("Error", "¡Este nombre ya existe!");
        }
        if (pictoToEdit) {
            updatePicto({ ...pictoToEdit, label, imgUrl });
        } else {
            addPicto({
                id: Date.now().toString(),
                label: label.trim(),
                imgUrl
            });
        }

        navigation.goBack();
    }

    return {
        label,
        imgUrl,
        handleDelete,
        handleEdit,
        handleAdd,
        handleLongPress,
        handleSubmit,
        handleOnChangeText,
        handlePickImage,
    }
}
