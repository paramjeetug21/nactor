import { ROUTES } from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Auth/Login';
import { SignUp } from '../Auth/Singup';
import { HomeCart } from '../HomeCart';
import { SplashScreen } from '../splash/SplashScreen';
import { OnBoarding } from '../OnBoarding';
import { NumberInput } from '../Number';
import { OtpInput } from '../Otp';
import { SetLocation } from '../SetLocation';
import { Auth } from '../Auth/Auth';
import { Cart } from '../Cart';
import { Favourite } from '../Favourite';

export const Navigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      initialRouteName={ROUTES.FAVOURITE}
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name={ROUTES.LOGIN} component={Login} />
      <stack.Screen name={ROUTES.SINGUP} component={SignUp} />
      <stack.Screen name={ROUTES.SPLASHSCREEN} component={SplashScreen} />
      <stack.Screen name={ROUTES.ONBOARDING} component={OnBoarding} />
      <stack.Screen name={ROUTES.NUMBERINPUT} component={NumberInput} />
      <stack.Screen name={ROUTES.OTPINPUT} component={OtpInput} />
      <stack.Screen name={ROUTES.SETLOCATION} component={SetLocation} />
      <stack.Screen name={ROUTES.AUTH} component={Auth} />
      <stack.Screen name={ROUTES.CART} component={Cart} />
      <stack.Screen name={ROUTES.HOMECART} component={HomeCart} />
      <stack.Screen name={ROUTES.FAVOURITE} component={Favourite}/>
    </stack.Navigator>
  );
};
