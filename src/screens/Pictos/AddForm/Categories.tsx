import { View } from 'react-native';
import { CategoryInput } from './CategoryInput';
import { CategoryChips } from './CategoryChips';

type CategoriesProps = {
  newCategory: string;
  availableCategories: string[];
  selectedCategories: string[];
  handleAddCategory: () => void;
  handleCategoryChange: (text: string) => void;
  handlePress: (category: string) => void;
  handleLongPress: (category: string) => void;
}

export const Categories = ({
  newCategory,
  availableCategories,
  selectedCategories,
  handleAddCategory,
  handleCategoryChange,
  handlePress,
  handleLongPress,
}: CategoriesProps) => {

  return (
    <View>
      <CategoryInput
        newCategory={newCategory}
        handleAddCategory={handleAddCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <CategoryChips
        availableCategories={availableCategories}
        selectedCategories={selectedCategories}
        handlePress={handlePress}
        handleLongPress={handleLongPress}
      />
    </View>
  )
}
