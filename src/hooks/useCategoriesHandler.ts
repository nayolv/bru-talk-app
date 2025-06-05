import { useState } from "react";
import { DEFAULT_CATEGORY } from "../types/pictogramTypes";
import { Alert } from "react-native";

export const useCategoriesHandler = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [availableCategories, setAvailableCategories] = useState<string[]>([DEFAULT_CATEGORY]);
    const [newCategory, setNewCategory] = useState('');
    const categories = selectedCategories.length > 0 ? selectedCategories : [DEFAULT_CATEGORY]

    const handleAddCategory = () => {
        if (newCategory.trim() && !availableCategories.includes(newCategory)) {
            setAvailableCategories([...availableCategories, newCategory]);
            setSelectedCategories([...selectedCategories, newCategory]);
            setNewCategory('');
        }
    };

    const handleCategoryChange = (category: string) => setNewCategory(category);
    const handleSelectedCategories = (categories: string[]) => setSelectedCategories(categories);

    const handlePress = (category: string) => {
        if (selectedCategories.includes(category)) {
            handleSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            handleSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleDeleteCategory = (category: string) => {
        setAvailableCategories(availableCategories.filter(c => c !== category));
    };

    const handleLongPress = (category: string) => {
        if (handleDeleteCategory && category !== DEFAULT_CATEGORY) {
            Alert.alert(
                "Eliminar categoría",
                `¿Quieres eliminar "${category}"?`,
                [
                    { text: "Cancelar", style: "cancel" },
                    {
                        text: "Eliminar",
                        onPress: () => {
                            handleDeleteCategory(category);
                            if (selectedCategories.includes(category)) {
                                handleSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                        }
                    }
                ]
            );
        }
    };

    const categoryProps = {
        categories,
        newCategory,
        availableCategories,
        selectedCategories,
        handleCategoryChange,
        handleAddCategory,
        handlePress,
        handleLongPress,
    }
    return {
        categoryProps,
    }
}
