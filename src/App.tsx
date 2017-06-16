import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface AppProperties {}

interface AppState {}

export default class App extends React.Component<AppProperties, AppState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/App.tsx
        </Text>
        <Text style={styles.instructions}>
          {Platform.OS === 'android'
            ? 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu'
            : 'Press Cmd+R to reload,\nCmd+D or shake for dev menu'
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
