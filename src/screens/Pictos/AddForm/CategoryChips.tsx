import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SpaceTheme } from "../../../styles/theme";
import { DEFAULT_CATEGORY } from "../../../types/pictogramTypes";

type CategoryChipsProps = {
    availableCategories: string[];
    selectedCategories: string[];
    handlePress: (category: string) => void;
    handleLongPress: (category: string) => void;
}

export const CategoryChips = ({
    availableCategories,
    selectedCategories,
    handlePress,
    handleLongPress,
}: CategoryChipsProps) => {

    return (
        <View style={styles.categoryChipsContainer}>
            {availableCategories.map((category) => (
                <View key={category} style={styles.chipWrapper}>
                    <TouchableOpacity
                        style={[
                            styles.categoryChip,
                            selectedCategories.includes(category) && styles.selectedCategoryChip
                        ]}
                        onPress={() => handlePress(category)}
                        onLongPress={() => handleLongPress(category)}
                        delayLongPress={500} // Tiempo para activar long press
                    >
                        <Text style={styles.categoryChipText}>{category}</Text>
                        {category !== DEFAULT_CATEGORY && (
                            <View style={styles.deleteIndicator} />
                        )}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    categoryChipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryChip: {
        backgroundColor: SpaceTheme.colors.nebulaEdge,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    categoryChipText: {
        color: SpaceTheme.colors.deepSpace,
        fontSize: 14,
    },
    chipWrapper: {
        position: 'relative',
        marginRight: 8,
        marginBottom: 8,
    },
    selectedCategoryChip: {
        backgroundColor: SpaceTheme.colors.cosmicDanger,
        borderWidth: 2,
        borderColor: SpaceTheme.colors.deepSpace,
    },
    deleteIndicator: {
        position: 'absolute',
        top: -5,
        right: -5,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: SpaceTheme.colors.deepSpace,
        justifyContent: 'center',
        alignItems: 'center',
    },
});