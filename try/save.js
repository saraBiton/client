import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from '../components/Director/User'

<View style={styles.container}>
      <Log />
  </View>

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [activeButton, setActiveButton] = useState(null);

  function handleButtonClick(buttonName) {
      setActiveButton(buttonName);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to SURF-IT </Text>
      <TouchableOpacity style={styles.button}>
        <button title='Admin' onPress={() => handleButtonClick('Admin')}></button>
        <br></br>
        <button title='Admin' onPress={() => handleButtonClick('User')}></button>
        </TouchableOpacity>
        {activeButton === 'Admin' && <Admin />}
        {activeButton === 'User' && <Users />}
    </View>
  );
}
function UserSceen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to SURF-IT </Text>
      <Text style={styles.subtitle}>Rental of drowning prevention equipment</Text>
      <Text style={styles.text}>Choose according to the age of the bather</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => navigation.navigate('AgeGroup', { ageGroup: 'Youth' })}
      >
        <Text style={styles.buttonText}>Youth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate('AgeGroup', { ageGroup: 'Adult' })}
      >
        <Text style={styles.buttonText}>Adult</Text>
      </TouchableOpacity>
    </View>
  );
}
function AgeGroupScreen({ route, navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.ageGroup} Age Group </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => navigation.navigate('Buttons', { buttonText: 'Button' })}
      >
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
      />
    </View>
  );
}

function ButtonsScreen({ route }) {
  const [text, setText] = useState('');

  let buttons = [];

  for (let i = 1; i <= 5; i++) {
    buttons.push(
      <TouchableOpacity
        key={i}
        style={styles.button}
        onPress={() => setText(`Button ${i}`)}
      >
        <Text style={styles.buttonText}>{i}</Text>
      </TouchableOpacity>
    );
  }

  if (route.params.buttonText === 'Button') {
    for (let i = 6; i <= 10; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={styles.button}
          onPress={() => setText(`Button ${i}`)}
        >
          <Text style={styles.buttonText}>Button {i}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={styles.container}>
      {buttons}
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserSceen}/>
        <Stack.Screen name="AgeGroup" component={AgeGroupScreen} />
        <Stack.Screen name="Buttons" component={ButtonsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    borderRadius: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 20, // יש להקטין את הגודל של הכותרת
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative', // שינוי מ-'absolute' ל-'relative' כדי לאפשר מיקום של הכותרת מתחת לכותרת ראשית
    top: 0,
    width: '100%',
    marginTop: 10, // שינוי מ-'paddingTop' ל-'marginTop' כדי להזיז את הכותרת מקום למטה
  }
})

