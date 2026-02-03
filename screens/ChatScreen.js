import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bell, User } from 'lucide-react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function ChatScreen({ navigation }) {
    const chats = [
        {
            id: 1,
            name: 'Wade Warren',
            message: 'I enjoyed today\'s history lecture.',
            time: '02:03 PM',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        },
        {
            id: 2,
            name: 'Annette Black',
            message: 'Don\'t forget to submit your science project.',
            time: '12:41 AM',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 3,
            name: 'Jacob Jones',
            message: 'Good morning, class! Today we start a new module.',
            time: '08:01 AM',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        },
        {
            id: 4,
            name: 'Leslie Alexander',
            message: 'Congratulations to our robotics team!',
            time: 'Yesterday',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
        {
            id: 5,
            name: 'Theresa Webb',
            message: 'Parents\' Night is on October 15th.',
            time: 'Thu',
            avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
        },
        {
            id: 6,
            name: 'Devon Lane',
            message: 'Homework for tonight: Read pages 20-30.',
            time: 'Sun',
            avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
        }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ChatDetail', { user: item })}
            className="flex-row items-center p-4 border-b border-slate-100 bg-white"
        >
            <View className="w-14 h-14 rounded-full bg-slate-200 mr-4 overflow-hidden">
                <Image source={{ uri: item.avatar }} className="w-full h-full" resizeMode="cover" />
            </View>
            <View className="flex-1 mr-2">
                <Text className="text-orange-500 font-bold text-base mb-1">{item.name}</Text>
                <Text className="text-slate-500 text-sm leading-5" numberOfLines={1}>{item.message}</Text>
            </View>
            <Text className="text-slate-400 text-xs font-medium">{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="light" backgroundColor="#F97316" />

            {/* Header */}
            <View className="bg-orange-500 pt-12 pb-6 px-6 shadow-xl shadow-orange-300 z-10 rounded-b-[30px]">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center space-x-4">
                        <View className="w-12 h-12 bg-orange-400/50 rounded-full items-center justify-center border border-orange-300">
                            <User size={24} color="white" />
                        </View>
                        <View>
                            <Text className="text-white text-xl font-bold">Messages</Text>
                            <Text className="text-orange-100 text-xs">You have 4 new messages.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-orange-400/40 p-2.5 rounded-full border border-orange-300/20 backdrop-blur-sm">
                        <Bell size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Unread Label Section */}
            <View className="flex-row justify-between items-center px-6 py-5">
                <View className="flex-row items-center space-x-2">
                    <Text className="text-xl font-bold text-slate-800">Unread</Text>
                    <View className="bg-orange-500 w-6 h-6 rounded-full items-center justify-center shadow-sm">
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
