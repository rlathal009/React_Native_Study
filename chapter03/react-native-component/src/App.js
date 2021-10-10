import React from 'react';
import {Text, View, Pressable} from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const Button = (props) => {
    return(
        <Pressable
        style={{padding: 10, backgroundColor: '#1abc9c'}}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => console.log('Press Out')}
        onPress={() => console.log('Press')}
        onLongPress={() => console.log('Long Press')}
        delayLongPress={3000}
        pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
        hitSlop={50}>
            <Text style={{padding: 10, fontSize: 30}}>{props.title}</Text>
        </Pressable>
    );
};

const App = () => {
    return (
        <View
          style={{
              flex : 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
          }}
        >
            <Button title="Pressable" />
        </View>
    );
};

// const App = () => {
//     return (
//         <View
//           style={{
//               flex : 1,
//               backgroundColor: '#fff',
//               alignItems: 'center',
//               justifyContent: 'center',
//           }}
//         >
//             <EventButton />
//             <EventInput />
//         </View>
//     );
// };

// const App = () => {
//     return (
//         <View
//           style={{
//               flex : 1,
//               backgroundColor: '#fff',
//               alignItems: 'center',
//               justifyContent: 'center',
//           }}
//         >
//             <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
//             <MyButton title="Button" onPress={() => alert('props')} />
//             <MyButton title = "Button" onPress={() => alert('Children')}>
//                 Children Props
//             </MyButton>
//             <MyButton onPress={()=> alert('default')} />
//         </View>
//     );
// };

export default App;