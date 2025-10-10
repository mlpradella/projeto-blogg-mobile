// src/utils/render-item.tsx
import { StyleSheet, View } from 'react-native';

interface RenderItemProps {
  rounded?: boolean;
}

export const renderItem = ({ rounded = false }: RenderItemProps = {}) => {
  return ({ item, index }: { item: string; index: number }) => {
    return (
      <View
        key={index}
        style={[
          styles.item,
          { backgroundColor: item },
          rounded && styles.rounded
        ]}
      />
    );
  };
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  rounded: {
    borderRadius: 12,
  },
});