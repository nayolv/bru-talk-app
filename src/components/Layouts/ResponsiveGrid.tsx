import { Dimensions, FlatList, StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import { Pictogram } from '../../types/pictogramTypes';

interface ResponsiveGridProps {
    data: Pictogram[];
    renderItem: ({ item }: { item: Pictogram }) => React.JSX.Element;
    style?: ViewStyle;
}

export default function ResponsiveGrid({ data, renderItem }: ResponsiveGridProps) {
    const orientation = useOrientation();
    const { width } = useWindowDimensions();
    const itemWidth = orientation === 'landscape' ? 240 : 200;
    const spacing = 16;
    const horizontalPadding = 40;

    const calculateColumns = () => {
        const isTablet = width >= 768;

        if (!isTablet) return 2;

        const availableWidth = width - horizontalPadding;

        if (orientation === 'portrait') {
            return Math.max(2, Math.floor(availableWidth / (itemWidth + spacing)));
        }

        return Math.max(3, Math.floor(availableWidth / itemWidth));
    };

    const numColumns = calculateColumns();
    const columnWidth = (width - horizontalPadding - spacing * (numColumns - 1)) / numColumns;

    const renderItemWrapper = ({ item }: { item: any }) => (
        <View style={{ width: columnWidth, alignItems: 'center' }}>
            <View style={{ width: '100%', minWidth: 180, maxWidth: 240 }}>
                {renderItem({ item })}
            </View>
        </View>
    );

    return (
        <FlatList
            key={`grid-${numColumns}`}
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={[styles.grid]}
            columnWrapperStyle={
                numColumns > 1
                    ? {
                        justifyContent: data.length < numColumns ? 'center' : 'center',
                    }
                    : undefined
            } renderItem={renderItemWrapper}
            scrollEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    grid: {
        padding: 20,
    },
    row: {
        borderWidth: 5,
    },
});
