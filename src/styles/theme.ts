export interface SpaceThemeType {
    colors: {
        cosmicDust: string;
        nebulaEdge: string;
        deepSpace: string;
        cosmicDustLight?: string;
        nebulaEdgeDark?: string;
        deepSpaceLight?: string;
        primary: string;
        secondary: string;
        text: string;
        borders: string;
        gray: string;
        white: string;
        black: string;
        transparent: string;
        cosmicDanger: string;
        cosmicDangerDark?: string;
        backgroundColor: string;
    };

}

export const SpaceTheme: SpaceThemeType = {
    colors: {
        // Base palette (nombres semánticos)
        cosmicDust: '#F1C8A0',    // Original: image button (naranja)
        nebulaEdge: '#B0D3DA',    // Original: border y submitButton (azul claro)
        deepSpace: '#284967',     // Original: texto (azul fuerte)
        cosmicDanger: '#E58E7B',

        // Variaciones para estados (opcional)
        cosmicDustLight: '#F8E4D0',
        nebulaEdgeDark: '#8CB3C0',
        deepSpaceLight: '#4A6B8A',
        cosmicDangerDark: '#E34A4A',

        // Colores funcionales
        primary: '#B0D3DA',       // nebulaEdge como primario
        secondary: '#F1C8A0',     // cosmicDust como secundario
        text: '#284967',          // deepSpace para texto
        borders: '#B0D3DA',        // nebulaEdge para bordes
        gray: '#95a5a6',
        white: "#ffffff",
        black: "#000000",
        transparent: 'transparent',
        backgroundColor: '#F5F2ED'
    },
};

