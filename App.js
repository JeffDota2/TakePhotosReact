import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBarProvider from './app/contexts/TabBarProvider';
import Formulario from './app/components/Formulario';
import DetallesEquipo from './app/components/DetallesEquipo';
import Mantenimiento from './app/components/Mantenimiento';
import Entrega from './app/components/Entrega';
import Tab from './app/components/Tab';
import TabNavigator from './app/mostrar/TabNavigator';
import TakePhoto from './app/components/TakePhoto';

export default function App() {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <TakePhoto/>
      </NavigationContainer>
    </TabBarProvider>
  
  
  );
}
