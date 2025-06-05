import { usePictogramStore } from "../../stores/usePictogramStore";
import { usePictogramHandler } from "../../hooks/usePictogramHandler";
import { useOrientation } from "../../hooks/useOrientation";
import { View, StyleSheet } from "react-native";
import { RoundButton } from "../../components/Buttons/RoundButton";
import PictogramButton from "../../components/PictogramButton";
import ResponsiveGrid from "../../components/Layouts/ResponsiveGrid";
import { SpaceTheme } from "../../styles/theme";
import { CategoryTabs } from "./CategoryTabs";
import { useFilterCategory } from "../../hooks/useFilterCategory";
import { ActionMenu } from "./ActionMenu";

export default function HomeScreen() {
    const { handlers } = usePictogramHandler();
    const {
        allCategories,
        filteredPictograms,
        selectedCategory,
        handleSelectedCategory,
    } = useFilterCategory();
    const {
        isSelecting,
        selectedIds,
        toggleSelection,
    } = usePictogramStore();

    const actionMenuProps = {
        filteredPictograms,
        ...handlers,
    }

    return (
        <View style={styles.container}>
            <ActionMenu {...actionMenuProps} />
            <CategoryTabs
                categories={allCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectedCategory}
            />
            <View style={styles.pictogramContainer}>
                <ResponsiveGrid
                    data={filteredPictograms}
                    renderItem={({ item }) => (
                        <PictogramButton
                            label={item.label}
                            imgUrl={item.imgUrl}
                            isSelected={selectedIds.includes(item.id)}
                            isSelecting={isSelecting}
                            onSelect={() => toggleSelection(item.id)}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SpaceTheme.colors.backgroundColor,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    pictogramContainer: {
        flex: 1,
    },

});