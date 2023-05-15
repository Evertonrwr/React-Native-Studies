import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AuthNavigator from './AuthNavigator';

export default function AppNavContainer() {
  const {authState:{isLoggedIn}} = useContext(GlobalContext)
  
  return (
    <NavigationContainer>
      {isLoggedIn
        ? <DrawerNavigator/>: <AuthNavigator/>
      }
      
    </NavigationContainer>
  );
}