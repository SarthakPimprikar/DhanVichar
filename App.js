import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

import CoursesScreen from './screens/CoursesScreen';
import ChatScreen from './screens/ChatScreen';
import ChatDetailScreen from './screens/ChatDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import PremiumScreen from './screens/PremiumScreen';
import { LanguageProvider } from './contexts/LanguageContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <LanguageProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Courses" component={CoursesScreen} />
                    <Stack.Screen name="Premium" component={PremiumScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </LanguageProvider>
    );
}
