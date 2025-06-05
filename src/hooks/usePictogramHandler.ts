import { usePictogramStore } from '../stores/usePictogramStore';
import { useImagePicker } from './useImagePicker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Pictogram } from '../types/pictogramTypes';
import { AddPictogramNavigation } from '../navigation/types';

export const usePictogramHandler = (pictoToEdit?: Pictogram) => {
    const [label, setLabel] = useState(pictoToEdit?.label || '');
    const [imgUrl, setImgUrl] = useState(pictoToEdit?.imgUrl || '');

    const navigation = useNavigation<AddPictogramNavigation>();
    const { pickImage } = useImagePicker();
    const {
        selectedIds,
        deletePictograms,
        startSelecting,
        clearSelection,
        addPicto,
        updatePicto,
        pictograms,
        isSelecting,
        allSelection
    } = usePictogramStore();

    const handleActivateSelection = () => {
        if (!isSelecting) return startSelecting();
        clearSelection();
    };

    const handleLongPressSelection = () => {
        allSelection();
    };

    const handleDelete = () => {
        if (selectedIds.length === 0) return;
        deletePictograms(selectedIds);
        clearSelection();
    };

    const handleEdit = (filteredPictograms: Pictogram[]) => {
        const picto = filteredPictograms.find(p => p.id === selectedIds[0]);

        if (!picto) return;
        console.log("Editing pictogram:", picto);
        navigation.navigate('AddPictogram', { pictoToEdit: picto });
        clearSelection();
    };

    const handleAdd = () => navigation.navigate('AddPictogram', {});

    const handlePickImage = async () => {
        const uri = await pickImage();
        if (uri) setImgUrl(uri);
    };

    const handleOnChangeText = (value: string) => setLabel(value);

    const handleSubmit = (categories: string[]) => {
        if (!label.trim()) return Alert.alert("Error", "El nombre es requerido");
        if (pictograms.some(p => p.label === label.trim() && p.id !== pictoToEdit?.id)) {
            return Alert.alert("Error", "¡Este nombre ya existe!");
        }
        if (pictoToEdit) {
            updatePicto({
                ...pictoToEdit, label, imgUrl, categories,
            });
        } else {
            addPicto({
                id: Date.now().toString(),
                label: label.trim(),
                imgUrl,
                categories,
            });
        }

        navigation.goBack();
    }

    const handlers = {
        handleDelete,
        handleEdit,
        handleAdd,
        handleSubmit,
        handleOnChangeText,
        handlePickImage,
        handleActivateSelection,
        handleLongPressSelection,
    }

    return {
        label,
        imgUrl,
        handlers,
    }
}
