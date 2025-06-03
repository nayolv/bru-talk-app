import { useNavigation } from "@react-navigation/native";
import { usePictogramStore } from "../../stores/usePictogramStore";
import { usePictogramHandler } from "../../hooks/usePictogramHandler";
import { FlatList, StyleSheet, View } from "react-native";
import { Navigation } from "../../navigation/types";
import { RoundButton } from "../../components/Buttons/RoundButton";
import PictogramButton from "../../components/PictogramButton";


export default function HomeScreen() {
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
    console.log(pictograms)
    return (
        <View>
            <View style={styles.buttonWrapper}>
                <RoundButton icon="add" onPress={handleAdd} />
                {isSelecting && (
                    <>
                        <RoundButton
                            icon="edit"
                            backgroundColor="#4CAF50"
                            onPress={() => {
                                const pictoToEdit = pictograms.find(p => p.id === selectedIds[0]);
                                if (pictoToEdit) handleEdit(pictoToEdit);
                            }}
                        />
                        <RoundButton
                            icon="delete"
                            backgroundColor="red"
                            onPress={handleDelete}
                        />
                    </>
                )}
            </View>
            <FlatList
                data={pictograms}
                keyExtractor={(picto) => picto.id}
                numColumns={2}
                contentContainerStyle={styles.grid}
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
    container: { flex: 1, padding: 20 },
    grid: { gap: 10 },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});