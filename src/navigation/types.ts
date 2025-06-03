import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pictogram } from "../types/pictogramTypes";

export type RootStackParamList = {
    Home: undefined;
    AddPictogram: { pictoToEdit?: Pictogram };
};

export type Navigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AddPictogramNavigation = NativeStackNavigationProp<RootStackParamList, 'AddPictogram'>;
export type AddPictogramScreenProps = NativeStackScreenProps<RootStackParamList, 'AddPictogram'>;
