import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import { Pictogram } from '../../types/pictogramTypes';
import { FlatList } from 'react-native-gesture-handler';

interface ResponsiveGridProps {
    data: Pictogram[];
    renderItem: ({ item }: { item: Pictogram }) => React.JSX.Element;
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
        <View style={{ width: columnWidth }}>
            <View style={styles.itemContainer}>
                {renderItem({ item })}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                key={`key-${numColumns}`}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItemWrapper}
                numColumns={numColumns}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: '100%',
        minWidth: 190,
        maxWidth: 240,
        minHeight: 190
    }
});