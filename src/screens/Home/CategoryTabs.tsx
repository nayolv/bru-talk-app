import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SpaceTheme } from '../../styles/theme';

interface CategoryTabsProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
    categories,
    selectedCategory,
    onSelectCategory
}) => {
    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category}
                    style={[
                        styles.tab,
                        selectedCategory === category && styles.selectedTab
                    ]}
                    onPress={() => onSelectCategory(category)}
                >
                    <Text style={[
                        styles.tabText,
                        selectedCategory === category && styles.selectedTabText
                    ]}>
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: SpaceTheme.colors.nebulaEdge,
        borderBottomWidth: 2,
        borderBottomColor: SpaceTheme.colors.deepSpace,
    },
    tab: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: SpaceTheme.colors.nebulaEdgeDark,
    },
    selectedTab: {
        backgroundColor: SpaceTheme.colors.cosmicDust,
    },
    tabText: {
        color: SpaceTheme.colors.deepSpace,
        fontWeight: 'bold',
    },
    selectedTabText: {
        color: SpaceTheme.colors.deepSpace,
        textDecorationLine: 'underline',
    },
});