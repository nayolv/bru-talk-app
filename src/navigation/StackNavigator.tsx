import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types';
import HomeScreen from '../screens/Home/HomeScreen';
import AddPictogramScreen from '../screens/Pictos/AddPictogramScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddPictogram" component={AddPictogramScreen} />
        </Stack.Navigator>)
}
