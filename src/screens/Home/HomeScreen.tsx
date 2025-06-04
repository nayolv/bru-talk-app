import { usePictogramStore } from "../../stores/usePictogramStore";
import { usePictogramHandler } from "../../hooks/usePictogramHandler";
import { useOrientation } from "../../hooks/useOrientation";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import { RoundButton } from "../../components/Buttons/RoundButton";
import PictogramButton from "../../components/PictogramButton";
import ResponsiveGrid from "../../components/Layouts/ResponsiveGrid";
import { SpaceTheme } from "../../styles/theme";

export default function HomeScreen() {
    const orientation = useOrientation();
    const isLandscape = orientation === 'landscape';

    const {
        handleDelete,
        handleLongPress,
        handleEdit,
        handleAdd
    } = usePictogramHandler();
    const {
        pictograms,
        isSelecting,
        selectedIds,
        toggleSelection,
    } = usePictogramStore();

    return (
        <View >
            <View style={[
                styles.buttonWrapper,
                isLandscape && styles.landscapeButtonWrapper
            ]}>
                <RoundButton
                    backgroundColor={SpaceTheme.colors.nebulaEdgeDark}
                    icon="add"
                    iconColor={SpaceTheme.colors.deepSpace}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                    onPress={handleAdd}
                />
                {isSelecting && (
                    <>
                        <RoundButton
                            backgroundColor={SpaceTheme.colors.cosmicDust}
                            icon="edit"
                            iconColor={SpaceTheme.colors.deepSpace}
                            borderColor={SpaceTheme.colors.white}
                            borderWidth={2}
                            onPress={() => {
                                const pictoToEdit = pictograms.find(p => p.id === selectedIds[0]);
                                if (pictoToEdit) handleEdit(pictoToEdit);
                            }}
                        />
                        <RoundButton
                            backgroundColor={SpaceTheme.colors.cosmicDanger}
                            icon="delete"
                            iconColor={SpaceTheme.colors.deepSpace}
                            borderColor={SpaceTheme.colors.white}
                            borderWidth={2}
                            onPress={handleDelete}
                        />
                    </>
                )}
            </View>
            <ResponsiveGrid
                data={pictograms}
                renderItem={({ item }) => (
                    <PictogramButton
                        label={item.label}
                        imgUrl={item.imgUrl}
                        isSelected={selectedIds.includes(item.id)}
                        isSelecting={isSelecting}
                        onLongPress={() => handleLongPress(item.id)}
                        onSelect={() => toggleSelection(item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    landscapeContainer: {
        paddingHorizontal: 40,
    },
    tabletContainer: {
        paddingVertical: 30,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    landscapeButtonWrapper: {
        marginBottom: 25,
    },
    grid: {
    },
    landscapeGrid: {
        gap: 20
    }
});