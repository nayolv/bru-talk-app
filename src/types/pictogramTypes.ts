import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, PersistOptions } from "zustand/middleware";

export type Pictogram = {
    id: string;
    label: string;
    imgUrl?: string;
    audioUrl?: string;
}

export type PictogramState = {
    pictograms: Pictogram[];
    addPicto: (picto: Pictogram) => void;
    updatePicto: (picto: Pictogram) => void;
    deletePictograms: (ids: string[]) => void;
};

export type SelectionState = {
    isSelecting: boolean;
    selectedIds: string[];
    toggleSelection: (id: string) => void;
    startSelecting: () => void;
    clearSelection: () => void;
};


