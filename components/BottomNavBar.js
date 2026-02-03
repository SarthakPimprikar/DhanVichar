import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Home, BookOpen, MessageSquare, LayoutGrid } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BottomNavBar({ activeTab, navigation }) {
    return (
        <View className="absolute bottom-6 left-6 right-6">
            {/* Enhanced Shadow layer */}
            <View className="absolute top-4 left-4 right-4 h-14 bg-orange-500/40 rounded-[35px] blur-lg" />

            {/* Main Nav Bar with Gradient */}
            <LinearGradient
                colors={['#F97316', '#FB923C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-[35px] h-[72px] flex-row items-center justify-between px-6 shadow-2xl relative border-2 border-white/20"
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Home' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <Home size={24} color={activeTab === 'Home' ? 'white' : '#FED7AA'} fill={activeTab === 'Home' ? 'rgba(255,255,255,0.2)' : 'none'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Home' ? 'text-white' : 'text-orange-100'}`}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Courses')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Courses' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <BookOpen size={24} color={activeTab === 'Courses' ? 'white' : '#FED7AA'} fill={activeTab === 'Courses' ? 'rgba(255,255,255,0.2)' : 'none'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Courses' ? 'text-white' : 'text-orange-100'}`}>Courses</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Chat')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Chat' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <MessageSquare size={24} color={activeTab === 'Chat' ? 'white' : '#FED7AA'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Chat' ? 'text-white' : 'text-orange-100'}`}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    className={`items-center justify-center space-y-1 ${activeTab === 'Profile' ? 'opacity-100' : 'opacity-70'}`}
                >
                    <LayoutGrid size={24} color={activeTab === 'Profile' ? 'white' : '#FED7AA'} />
                    <Text className={`text-[10px] font-medium ${activeTab === 'Profile' ? 'text-white' : 'text-orange-100'}`}>Profile</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
