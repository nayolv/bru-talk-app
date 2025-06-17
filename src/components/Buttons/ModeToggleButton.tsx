import { useAppMode } from '../../stores/useAppMode';
import { RoundButton } from './RoundButton';
import { SpaceTheme } from '../../styles/theme';

export const ModeToggleButton = () => {
    const { mode, toggleMode } = useAppMode();

    return (
        <RoundButton
            backgroundColor={SpaceTheme.colors.deepSpaceLight}
            text={mode === 'safe' ? 'Modo seguro' : 'Configuración'}
            textColor={SpaceTheme.colors.white}
            icon={mode === 'safe' ? 'lock' : 'lock-open'}
            iconColor={SpaceTheme.colors.white}
            borderColor={SpaceTheme.colors.white}
            borderWidth={2}
            height={50}
            width={160}
            onLongPress={toggleMode}
        />
    );
};
