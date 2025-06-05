import { useCategoriesHandler } from '../../../hooks/useCategoriesHandler';
import { usePictogramHandler } from '../../../hooks/usePictogramHandler';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AddPictogramScreenProps } from '../../../navigation/types';
import { SpaceTheme } from '../../../styles/theme';
import { ImageForm } from './ImageForm';
import { NameInput } from './NameInput';
import { ImagePreview } from './ImagePreview';
import { ButtonsForm } from './ButtonsForm';
import { Categories } from './Categories';

export default function AddPictogramScreen({ route }: AddPictogramScreenProps) {
    const { pictoToEdit } = route.params || {};
    const { label, imgUrl, handlers, } = usePictogramHandler(pictoToEdit);
    const { categoryProps } = useCategoriesHandler();

    const buttonsProps = {
        ...handlers,
        label,
        imgUrl,
        categories: categoryProps.categories,
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageForm />
            <View style={styles.form}>
                <NameInput label={label} handleOnChange={handlers.handleOnChangeText} />
                <Categories {...categoryProps} />
                <ImagePreview imgUrl={imgUrl} />
                <ButtonsForm {...buttonsProps} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingBottom: 80,
        minHeight: '100%',
    },
    form: {
        width: '90%',
        maxWidth: 500, borderColor: SpaceTheme.colors.borders,
        borderWidth: 2,
        padding: 20,
        borderRadius: 12,
    },
});