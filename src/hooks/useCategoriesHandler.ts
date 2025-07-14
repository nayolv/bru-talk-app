import { useState } from "react";
import { Alert } from "react-native";
import { usePictogramStore } from "../stores/usePictogramStore";
import { DEFAULT_CATEGORY, Pictogram } from "../types/pictogramTypes";

export const useCategoriesHandler = (pictoToEdit?: Pictogram) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(pictoToEdit?.categories || [DEFAULT_CATEGORY]);
    const [newCategory, setNewCategory] = useState('');

    const {
        availableCategories,
        addCategory,
        editCategory,
        deleteCategory
    } = usePictogramStore();

    const categories = selectedCategories.length > 0 ? selectedCategories : [DEFAULT_CATEGORY];

    const handleAddCategory = () => {
        if (newCategory.trim() && !availableCategories.includes(newCategory)) {
            addCategory(newCategory);
            setSelectedCategories([...selectedCategories, newCategory]);
            setNewCategory('');
        }
    };

    const handleCategoryChange = (category: string) => setNewCategory(category);
    const handleSelectedCategories = (categories: string[]) => setSelectedCategories(categories);

    const handlePress = (category: string) => {
        if (category === DEFAULT_CATEGORY) return;
        if (selectedCategories.includes(category)) {
            handleSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            handleSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleEditCategory = (oldCategory: string) => {
        if (oldCategory === DEFAULT_CATEGORY) return;

        Alert.alert(
            'Editar categoría',
            `Modificar "${oldCategory}" por:`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Guardar',
                    onPress: (newName) => {
                        const safeName = (newName ?? '').trim();
                        if (safeName && safeName !== oldCategory) {
                            editCategory(oldCategory, safeName);
                            setSelectedCategories((prev) =>
                                prev.map((c) => (c === oldCategory ? safeName : c))
                            );
                        }
                    },
                },
            ],
        );
    };

    const handleLongPress = (category: string) => {
        if (category !== 'Todos') {
            Alert.alert(
                "Eliminar categoría",
                `¿Quieres eliminar "${category}"?`,
                [
                    { text: "Cancelar", style: "cancel" },
                    {
                        text: "Eliminar",
                        onPress: () => {
                            deleteCategory(category);
                            if (selectedCategories.includes(category)) {
                                handleSelectedCategories(selectedCategories.filter((c) => c !== category));
                            }
                        },
                    },
                ]
            );
        }
    };

    return {
        categoryProps: {
            categories,
            newCategory,
            availableCategories,
            selectedCategories,
            handleCategoryChange,
            handleAddCategory,
            handlePress,
            handleLongPress,
            handleEditCategory,
        },
    };
};
