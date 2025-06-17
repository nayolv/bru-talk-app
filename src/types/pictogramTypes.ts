export const DEFAULT_CATEGORY = "Todos";

export type Pictogram = {
    id: string;
    label: string;
    imgUrl?: string;
    audioUrl?: string;
    categories: string[];
}

export type CategoryState = {
    availableCategories: string[];
    addCategory: (category: string) => void;
    editCategory: (coldName: string, newName: string) => void;
    deleteCategory: (category: string) => void;
    resetCategories: () => void;
};

export type PictogramState = {
    pictograms: Pictogram[];
    addPicto: (picto: Pictogram) => void;
    updatePicto: (picto: Pictogram) => void;
    deletePictograms: (ids: string[]) => void;
    reorderPictograms: (newOrder: Pictogram[]) => void;
};

export type SelectionState = {
    isSelecting: boolean;
    selectedIds: string[];
    toggleSelection: (id: string) => void;
    startSelecting: () => void;
    clearSelection: () => void;
    allSelection: () => void
};


