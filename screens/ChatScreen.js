import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bell, User, MessageSquare } from 'lucide-react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function ChatScreen({ navigation }) {
    const chats = [
        {
            id: 1,
            name: 'Dr. Rajesh Kumar',
            message: 'New UPSC syllabus update for 2026 has been uploaded.',
            time: '02:03 PM',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        },
        {
            id: 2,
            name: 'Prof. Anjali Deshmukh',
            message: 'Don\'t forget to complete the Polity mock test by Friday.',
            time: '12:41 AM',
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        },
        {
            id: 3,
            name: 'Dr. Vikram Patil',
            message: 'Today\'s current affairs session covers Budget 2026 highlights.',
            time: '08:01 AM',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        },
        {
            id: 4,
            name: 'Prof. Meera Shah',
            message: 'Essay writing tips for UPSC Mains - new video uploaded!',
            time: 'Yesterday',
            avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        },
        {
            id: 5,
            name: 'Dr. Suresh Joshi',
            message: 'MPSC Prelims exam dates announced. Check the portal.',
            time: 'Thu',
            avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
        },
        {
            id: 6,
            name: 'Prof. Priya Kulkarni',
            message: 'Geography revision notes for Indian rivers uploaded.',
            time: 'Sun',
            avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
        }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ChatDetail', { user: item })}
            className="flex-row items-center p-4 border-b border-blue-100 bg-white"
        >
            <View className="w-14 h-14 rounded-full bg-blue-100 mr-4 overflow-hidden">
                <Image source={{ uri: item.avatar }} className="w-full h-full" resizeMode="cover" />
            </View>
            <View className="flex-1 mr-2">
                <Text className="text-blue-500 font-bold text-base mb-1">{item.name}</Text>
                <Text className="text-slate-500 text-sm leading-5" numberOfLines={1}>{item.message}</Text>
            </View>
            <Text className="text-slate-400 text-xs font-medium">{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="dark" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View className="bg-white pt-12 pb-6 px-6 shadow-lg z-10 rounded-b-[30px]">
                <View className="flex-row justify-between items-start mb-6">
                    <View className="flex-row items-center space-x-4">
                        <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center border border-blue-100">
                            <MessageSquare size={24} color="#334155" />
                        </View>
                        <View>
                            <Text className="text-slate-800 text-xl font-bold">Messages</Text>
                            <Text className="text-slate-500 text-xs">You have 4 new messages.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 p-2.5 rounded-full border border-blue-100">
                        <Bell size={24} color="#334155" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Unread Label Section */}
            <View className="flex-row justify-between items-center px-6 py-5">
                <View className="flex-row items-center space-x-2">
                    <Text className="text-xl font-bold text-slate-800">Unread</Text>
                    <View className="bg-blue-500 w-6 h-6 rounded-full items-center justify-center shadow-sm">
                        <Text className="text-white text-xs font-bold">4</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text className="text-slate-400 font-medium text-sm">Mark as read</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={chats}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                className="flex-1 px-2"
            />

            <BottomNavBar activeTab="Chat" navigation={navigation} />
        </View>
    );
}
