import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './Navigation';

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
