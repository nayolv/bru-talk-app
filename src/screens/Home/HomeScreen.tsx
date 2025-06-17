import { usePictogramStore } from "../../stores/usePictogramStore";
import { usePictogramHandler } from "../../hooks/usePictogramHandler";
import { View, StyleSheet } from "react-native";
import { SpaceTheme } from "../../styles/theme";
import { CategoryTabs } from "./CategoryTabs";
import { useFilterCategory } from "../../hooks/useFilterCategory";
import { ActionMenu } from "./ActionMenu";
import PictogramButton from "../../components/PictogramButton";
import ResponsiveGrid from "../../components/Layouts/ResponsiveGrid";
import { useAppMode } from "../../stores/useAppMode";

export default function HomeScreen() {
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
    };

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: isSelecting ? 'gray' : SpaceTheme.colors.backgroundColor,

            }
        ]}>
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
            <ActionMenu {...actionMenuProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    pictogramContainer: {
        flex: 1,
    },

});