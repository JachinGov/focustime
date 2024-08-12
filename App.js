import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { Colors } from './src/Utils/Colors';
import { Focus } from './src/Features/Focus';
import { Timer } from './src/Features/Timer';
import { FocusHistory } from './src/Features/FocusHistory'
import { useState } from 'react';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history, subject])
        }}
        clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.darkBlue,
  },
});
