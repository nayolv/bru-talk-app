import { RoundButton } from '../../components/Buttons/RoundButton';
import { usePictogramStore } from '../../stores/usePictogramStore';
import { StyleSheet, View } from 'react-native';
import { SpaceTheme } from '../../styles/theme';
import { useOrientation } from '../../hooks/useOrientation';
import { Pictogram } from '../../types/pictogramTypes';

type ActionMenuProps = {
    filteredPictograms: Pictogram[];
    handleActivateSelection: () => void;
    handleLongPressSelection: () => void;
    handleAdd: () => void;
    handleEdit: (filteredPictograms: Pictogram[]) => void;
    handleDelete: () => void;
}

export const ActionMenu = ({
    filteredPictograms,
    handleActivateSelection,
    handleLongPressSelection,
    handleAdd,
    handleEdit,
    handleDelete,
}: ActionMenuProps) => {

    const orientation = useOrientation();
    const isLandscape = orientation === 'landscape';
    const { selectedIds } = usePictogramStore();

    return (
        <View style={[
            styles.buttonWrapper,
            isLandscape && styles.landscapeButtonWrapper
        ]}>
            <RoundButton
                backgroundColor={SpaceTheme.colors.deepSpaceLight}
                icon="check"
                iconColor={SpaceTheme.colors.white}
                borderColor={SpaceTheme.colors.white}
                borderWidth={2}
                onPress={() => handleActivateSelection()}
                onLongPress={() => handleLongPressSelection()}
            />
            <RoundButton
                backgroundColor={SpaceTheme.colors.nebulaEdgeDark}
                icon="add"
                iconColor={SpaceTheme.colors.deepSpace}
                borderColor={SpaceTheme.colors.white}
                borderWidth={2}
                onPress={handleAdd}
            />
            {selectedIds.length === 1 &&
                <RoundButton
                    backgroundColor={SpaceTheme.colors.cosmicDust}
                    icon="edit"
                    iconColor={SpaceTheme.colors.deepSpace}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                    onPress={() => handleEdit(filteredPictograms)}
                />
            }
            {selectedIds.length > 0 &&
                <RoundButton
                    backgroundColor={SpaceTheme.colors.cosmicDanger}
                    icon="delete"
                    iconColor={SpaceTheme.colors.deepSpace}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                    onPress={() => {
                        handleActivateSelection();
                        handleDelete();
                    }}
                />
            }
        </View>)
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    landscapeButtonWrapper: {
        marginBottom: 5,
    },
});