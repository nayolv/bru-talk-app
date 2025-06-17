import { useMemo, useState } from 'react'
import { DEFAULT_CATEGORY } from '../types/pictogramTypes';
import { usePictogramStore } from '../stores/usePictogramStore';

export const useFilterCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
    const { pictograms } = usePictogramStore();

    const allCategories = useMemo(() => {
        const categories = new Set<string>([DEFAULT_CATEGORY]);
        pictograms.forEach(p => {
            p.categories?.forEach(c => categories.add(c));
        });
        return Array.from(categories);
    }, [pictograms]);

    const filteredPictograms = useMemo(() => {
        return pictograms.filter(p => p.categories?.includes(selectedCategory));
    }, [pictograms, selectedCategory]);

    const handleSelectedCategory = (category: string) => setSelectedCategory(category);

    return {
        allCategories,
        filteredPictograms,
        selectedCategory,
        handleSelectedCategory,
    }
}
