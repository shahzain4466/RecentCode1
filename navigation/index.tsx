import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';

// AuthStack
import ForgotPasswordScreen from '../screens/AuthStack/ForgotPasswordScreen'
import SigninScreen from '../screens/AuthStack/SigninScreen'
import SignupScreen from '../screens/AuthStack/SignupScreen';
import NewPasswordScreen from '../screens/AuthStack/NewPasswordScreen';
import VerifyOTPScreen from '../screens/AuthStack/VerifyOTPScreen';

// HomeStack
// Bottom Tabs
import HomeScreen from 'screens/HomeStack/HomeScreen';
import FavoritesScreen from 'screens/HomeStack/FavoritesScreen';
import ContactScreen from 'screens/HomeStack/ContactScreen';
import ProfileScreen from 'screens/HomeStack/ProfileScreen';
// Others
import SubscriptionPlanScreen from 'screens/HomeStack/SubscriptionPlanScreen';
import CommercialGuideAddOrEditScreen from 'screens/HomeStack/CommercialGuideAddOrEditScreen';
import CommercialGuideDetailsScreen from 'screens/HomeStack/CommercialGuideDetailsScreen';
import CommercialGuidesListScreen from 'screens/HomeStack/CommercialGuidesListScreen';
import EventAddOrEditScreen from 'screens/HomeStack/EventAddOrEditScreen';
import EventDetailsScreen from 'screens/HomeStack/EventDetailsScreen';
import EventsListScreen from 'screens/HomeStack/EventsListScreen';
import HabitatAddOrEditScreen from 'screens/HomeStack/HabitatAddOrEditScreen';
import HabitatDetailsScreen from 'screens/HomeStack/HabitatDetailsScreen';
import HabitatsListScreen from 'screens/HomeStack/HabitatsListScreen';
import JobAddOrEditScreen from 'screens/HomeStack/JobAddOrEditScreen';
import JobDetailsScreen from 'screens/HomeStack/JobDetailsScreen';
import JobsListScreen from 'screens/HomeStack/JobsListScreen';
import VehicleAddOrEditScreen from 'screens/HomeStack/VehicleAddOrEditScreen';
import VehicleDetailsScreen from 'screens/HomeStack/VehicleDetailsScreen';
import VehiclesListScreen from 'screens/HomeStack/VehiclesListScreen';

import { navigationRef, isReadyRef, reset as resetToNavigation } from './RootNavigation';
import {
  ContactIcon,
  FavoriteIcon,
  HomeIcon,
  UserIcon
} from 'assets/icons';
import { colors } from '../utils/Colors';
import TabButton from 'components/TabButton';

enableScreens(false);

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const getActiveRouteName: any = (state: any) => {
  if (!state || typeof state?.index !== 'number') {
    return 'Unknown';
  }

  const route = state.routes[state?.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'SigninScreen'}>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="VerifyOTPScreen" component={VerifyOTPScreen} />
    </Stack.Navigator>
  );
};

const BottomTabs = (props) => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route, navigation }) => ({
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        headerShown: false,
        style: styles.tabBarStyle,
        tabBarStyle: {
          backgroundColor: colors.backgroundTab,
          borderTopWidth: 0
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'HomeScreen')
            return <TabButton
              icon={HomeIcon}
              focused={focused}
              onPress={() => navigation.navigate("HomeScreen", true)}
            />
          if (route.name === 'FavoritesScreen')
            return <TabButton
              icon={FavoriteIcon}
              focused={focused}
              onPress={() => navigation.navigate("FavoritesScreen", true)}
            />
          if (route.name === 'ContactScreen')
            return <TabButton
              icon={ContactIcon}
              focused={focused}
              onPress={() => navigation.navigate("ContactScreen", true)}
            />
          if (route.name === 'ProfileScreen')
            return <TabButton
              icon={UserIcon}
              focused={focused}
              onPress={() => navigation.navigate("ProfileScreen", true)}
            />
        },
      })}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <BottomTab.Screen name="ContactScreen" component={ContactScreen} />
      <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"BottomTabs"}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SubscriptionPlanScreen" component={SubscriptionPlanScreen} />
      <Stack.Screen name="CommercialGuideAddOrEditScreen" component={CommercialGuideAddOrEditScreen} />
      <Stack.Screen name="CommercialGuideDetailsScreen" component={CommercialGuideDetailsScreen} />
      <Stack.Screen name="CommercialGuidesListScreen" component={CommercialGuidesListScreen} />
      <Stack.Screen name="EventAddOrEditScreen" component={EventAddOrEditScreen} />
      <Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} />
      <Stack.Screen name="EventsListScreen" component={EventsListScreen} />
      <Stack.Screen name="HabitatAddOrEditScreen" component={HabitatAddOrEditScreen} />
      <Stack.Screen name="HabitatDetailsScreen" component={HabitatDetailsScreen} />
      <Stack.Screen name="HabitatsListScreen" component={HabitatsListScreen} />
      <Stack.Screen name="JobAddOrEditScreen" component={JobAddOrEditScreen} />
      <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} />
      <Stack.Screen name="JobsListScreen" component={JobsListScreen} />
      <Stack.Screen name="VehicleAddOrEditScreen" component={VehicleAddOrEditScreen} />
      <Stack.Screen name="VehicleDetailsScreen" component={VehicleDetailsScreen} />
      <Stack.Screen name="VehiclesListScreen" component={VehiclesListScreen} />
    </Stack.Navigator>
  );
};


const Navigation = ({ }) => {
  const [routeName, setRouteName] = useState('Unknown');
  const { isSignedIn } = useSelector((state) => state.auth);

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const newRouteName = getActiveRouteName(state);
        if (routeName !== newRouteName) {
          setRouteName(newRouteName);
        }
      }}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    minHeight: 70,
    width: '100%',
    marginBottom: 30,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  borderTabStyle: {
    borderTopWidth: 1,
    borderColor: '#080C0B26',
    shadowColor: "#080C0B26",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  linearGradientContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    overflow: 'visible'
  },
  tabBarIcon: {
    alignSelf: 'center',
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  tabBarImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 4,
    marginVertical: 4,
    marginHorizontal: 0.4,
  },
  tabLabel: {
    // fontFamily: fontFamilies.InterMedium,
    marginTop: 4,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#009491',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 4,
  },
  triAngle: {
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#009491',
    position: 'absolute',
    bottom: -7,
    right: 10,
    transform: [{ rotate: '60deg' }],
  },
  notificationTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'ManropeBold',
  },
  notificationHover: {
    height: 42,
    backgroundColor: '#009491',
    borderRadius: 15,
    width: 135,
    justifyContent: 'center',
    alignItems: 'center'
  },
  laoderView: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
