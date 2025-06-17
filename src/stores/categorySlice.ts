import { StateCreator } from "zustand";
import { CategoryState, DEFAULT_CATEGORY, PictogramState, SelectionState } from "../types/pictogramTypes";

export const createCategorySlice: StateCreator<
    PictogramState & SelectionState & CategoryState,
    [],
    [],
    CategoryState
> = (set) => ({
    availableCategories: [DEFAULT_CATEGORY],
    addCategory: (category) =>
        set((state) => {
            if (
                category.trim() === '' ||
                state.availableCategories.includes(category)
            ) {
                return state;
            }

            return {
                availableCategories: [...state.availableCategories, category],
            };
        }),
    deleteCategory: (category) =>
        set((state) => ({
            availableCategories: state.availableCategories.filter(
                (c) => c !== category
            ),
            pictograms: state.pictograms.map((picto) => ({
                ...picto,
                categories: picto.categories.filter((c) => c !== category),
            })),
        })),
    editCategory: (oldName: string, newName: string) =>
        set((state) => {
            const trimmedNew = newName.trim();
            if (
                trimmedNew === '' ||
                trimmedNew === oldName ||
                state.availableCategories.includes(trimmedNew)
            ) {
                return state;
            }

            return {
                availableCategories: state.availableCategories.map((c) =>
                    c === oldName ? trimmedNew : c
                ),
                pictograms: state.pictograms.map((picto) => ({
                    ...picto,
                    categories: picto.categories.map((c) =>
                        c === oldName ? trimmedNew : c
                    ),
                })),
            };
        }),
    resetCategories: () => set({ availableCategories: [DEFAULT_CATEGORY] }),
});
