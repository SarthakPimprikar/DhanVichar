import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Home, BookOpen, LayoutGrid, Crown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BottomNavBar({ activeTab, navigation }) {
    return (
        <View className="absolute bottom-6 left-12 right-12">
            {/* Enhanced Shadow layer */}
            <View className="absolute top-4 left-6 right-6 h-14 bg-blue-500/40 rounded-[35px] blur-lg" />

            {/* Main Nav Bar with Gradient */}
            <LinearGradient
                colors={['#0088FF', '#3399FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-[35px] h-[72px] flex-row items-center justify-between px-6 shadow-2xl relative border-2 border-white/20"
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Home' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <Home size={24} color={activeTab === 'Home' ? 'white' : '#B3D9FF'} fill={activeTab === 'Home' ? 'rgba(255,255,255,0.2)' : 'none'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Home' ? 'text-white' : 'text-blue-100'}`}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Courses')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Courses' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <BookOpen size={24} color={activeTab === 'Courses' ? 'white' : '#B3D9FF'} fill={activeTab === 'Courses' ? 'rgba(255,255,255,0.2)' : 'none'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Courses' ? 'text-white' : 'text-blue-100'}`}>Videos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Premium')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Premium' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <Crown size={24} color={activeTab === 'Premium' ? 'white' : '#B3D9FF'} fill={activeTab === 'Premium' ? 'rgba(255,255,255,0.2)' : 'none'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Premium' ? 'text-white' : 'text-blue-100'}`}>Premium</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Profile' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <LayoutGrid size={24} color={activeTab === 'Profile' ? 'white' : '#B3D9FF'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Profile' ? 'text-white' : 'text-blue-100'}`}>Profile</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
