import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../Utils/Colors';
import { fontSizes, spacing } from '../Utils/Size';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We have not focued on anything yet :( </Text>;

  const renderItem=({item}) => <Text style={styles.item} >- {item}</Text>

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Things we have focued on: </Text>
      <FlatList
      data={history}
      renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1,
  },
  item: {
    fontSize: spacing.md,
    color: Colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: Colors.white,
    fontSize: fontSizes.md,
    
    fontWeight: 'bold'
  },
});
