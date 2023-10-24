import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from './src/screens/search-screen';
import {DetailScreen} from './src/screens/detail-screen/DetailScreen';
import {ISearchItem} from './src/services/types';

export type MainStackType = {
  Search: undefined;
  Detail: {
    item: ISearchItem;
  };
};

const Stack = createNativeStackNavigator<MainStackType>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{header: () => null}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
