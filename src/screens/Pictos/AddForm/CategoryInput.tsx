import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SpaceTheme } from '../../../styles/theme';
import { generalStyles } from '../../../styles/generalStyles';
import { CustomTextInput } from '../../../components/Inputs/CustomTextInput';
import { RoundButton } from '../../../components/Buttons/RoundButton';

type CategoryInputProps = {
    newCategory: string;
    handleAddCategory: () => void;
    handleCategoryChange: (text: string) => void;
}

export const CategoryInput = ({
    newCategory,
    handleAddCategory,
    handleCategoryChange,
}: CategoryInputProps) => {

    return (
        <View style={styles.categorySection}>
            <Text style={styles.sectionTitle}>Categorías</Text>
            <View style={styles.categoryInputContainer}>
                <CustomTextInput
                    placeholder="Añadir nueva categoría"
                    value={newCategory}
                    onChangeText={handleCategoryChange}
                    customStyle={styles.categoryInput}
                />
                <RoundButton
                    onPress={handleAddCategory}
                    backgroundColor={SpaceTheme.colors.cosmicDust}
                    icon="add"
                    iconColor={SpaceTheme.colors.deepSpace}
                    iconSize={30}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categorySection: {
        width: '100%',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: SpaceTheme.colors.deepSpace,
        marginBottom: 10,
    },
    categoryInputContainer: {
        flexDirection: 'row',
    },
    categoryInput: {
        flex: 1,
        marginRight: 10,
    },
});