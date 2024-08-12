import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../Utils/Colors';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { RoundedButton } from '../Components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
        <RoundedButton 
        title="+" 
        size={50} 
        onPress={() => addSubject(subject)}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
justifyContent: 'center'
  },
});
