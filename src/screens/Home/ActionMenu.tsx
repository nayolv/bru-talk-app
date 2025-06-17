import { RoundButton } from '../../components/Buttons/RoundButton';
import { usePictogramStore } from '../../stores/usePictogramStore';
import { StyleSheet, Text, View } from 'react-native';
import { SpaceTheme } from '../../styles/theme';
import { useOrientation } from '../../hooks/useOrientation';
import { Pictogram } from '../../types/pictogramTypes';
import { ModeToggleButton } from '../../components/Buttons/ModeToggleButton';
import { useAppMode } from '../../stores/useAppMode';
import { usePictogramHandler } from '../../hooks/usePictogramHandler';

type ActionMenuProps = {
    filteredPictograms: Pictogram[];
}

export const ActionMenu = ({ filteredPictograms }: ActionMenuProps) => {
    const { handlers } = usePictogramHandler();
    const { selectedIds, isSelecting } = usePictogramStore();
    const { mode } = useAppMode();
    const orientation = useOrientation();
    const isLandscape = orientation === 'landscape';

    const safeMode = mode === 'safe';

    return (
        <View style={[
            styles.buttonWrapper,
            isLandscape && styles.landscapeButtonWrapper,
            {
                backgroundColor: safeMode ? SpaceTheme.colors.gray : SpaceTheme.colors.nebulaEdge
            },

        ]}>
            <View>
                <ModeToggleButton />
            </View>
            <View style={styles.crudActions}>
                <RoundButton
                    backgroundColor={SpaceTheme.colors.deepSpaceLight}
                    text={isSelecting ? 'Cancelar selección' : 'Seleccionar'}
                    textColor={SpaceTheme.colors.white}
                    iconColor={SpaceTheme.colors.white}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                    height={50}
                    width={'auto'}
                    minWidth={120}
                    onPress={handlers.handleActivateSelection}
                    onLongPress={handlers.handleLongPressSelection}
                    disabled={safeMode || filteredPictograms?.length === 0}
                />
                <RoundButton
                    backgroundColor={SpaceTheme.colors.nebulaEdgeDark}
                    icon="add"
                    iconColor={SpaceTheme.colors.deepSpace}
                    borderColor={SpaceTheme.colors.white}
                    borderWidth={2}
                    onPress={handlers.handleAdd}
                    disabled={safeMode}
                />
                {selectedIds.length === 1 &&
                    <RoundButton
                        backgroundColor={SpaceTheme.colors.cosmicDust}
                        icon="edit"
                        iconColor={SpaceTheme.colors.deepSpace}
                        borderColor={SpaceTheme.colors.white}
                        borderWidth={2}
                        onPress={() => handlers.handleEdit(filteredPictograms)}
                        disabled={safeMode}
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
                            handlers.handleActivateSelection();
                            handlers.handleDelete();
                        }}
                        disabled={safeMode}
                    />
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    crudActions: {
        flexDirection: 'row',

    },
    landscapeButtonWrapper: {
    },
});