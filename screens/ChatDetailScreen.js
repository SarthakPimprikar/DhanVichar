import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { ChevronLeft, Send, Phone, Video } from 'lucide-react-native';
import { useState } from 'react';

export default function ChatDetailScreen({ route, navigation }) {
    const { user } = route.params; // Get user data passed from ChatScreen

    // Dummy messages history
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi, how are you?', sender: 'them', time: '10:00 AM' },
        { id: 2, text: 'I am good, thanks! How about you?', sender: 'me', time: '10:01 AM' },
        { id: 3, text: user.message, sender: 'them', time: '10:02 AM' }, // Using the preview message as the last received
    ].reverse()); // Reverse initial state so standard FlatList order works if we weren't inverting... wait, for inverted list we want newest first (index 0). 
    // Actually simpler: 
    // State: [Oldest, ..., Newest]
    // Render: [Newest, ..., Oldest] (Inverted)

    // Let's stick to standard chronological order in state

    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim()) {
            const newMsg = { id: Date.now(), text: inputText, sender: 'me', time: 'Now' };
            setMessages([...messages, newMsg]);
            setInputText('');
        }
    };

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            {/* Header */}
            <View className="bg-orange-500 pt-12 pb-4 px-4 rounded-b-[30px] shadow-sm z-10 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3 p-1">
                        <ChevronLeft size={28} color="white" />
                    </TouchableOpacity>
                    <Image source={{ uri: user.avatar }} className="w-10 h-10 rounded-full bg-slate-200" />
                    <View className="ml-3">
                        <Text className="text-white font-bold text-lg">{user.name}</Text>
                        <Text className="text-orange-100 text-xs">Online</Text>
                    </View>
                </View>
                <View className="flex-row space-x-4 mr-2">
                    <TouchableOpacity>
                        <Phone size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Video size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Messages body */}
            <FlatList
                data={[...messages].reverse()}
                inverted
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => (
                    <View className={`mb-4 max-w-[80%] ${item.sender === 'me' ? 'self-end' : 'self-start'}`}>
                        <View className={`p-3 rounded-2xl ${item.sender === 'me' ? 'bg-orange-500 rounded-tr-none' : 'bg-white rounded-tl-none border border-slate-100 shadow-sm'}`}>
                            <Text className={`${item.sender === 'me' ? 'text-white' : 'text-slate-800'}`}>{item.text}</Text>
                        </View>
                        <Text className={`text-[10px] mt-1 ${item.sender === 'me' ? 'text-right text-slate-400' : 'text-slate-400'}`}>{item.time}</Text>
                    </View>
                )}
            />

            {/* Input Area */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View className="p-4 bg-white border-t border-slate-100 flex-row items-center safe-bottom">
                    <TextInput
                        className="flex-1 bg-slate-100 rounded-full px-5 py-3 mr-3 text-slate-800 max-h-24"
                        placeholder="Type a message..."
                        placeholderTextColor="#94a3b8"
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                    />
                    <TouchableOpacity
                        onPress={sendMessage}
                        className={`w-12 h-12 rounded-full items-center justify-center ${inputText.trim() ? 'bg-orange-500 shadow-lg shadow-orange-300' : 'bg-slate-200'}`}
                        disabled={!inputText.trim()}
                    >
                        <Send size={20} color="white" style={{ marginLeft: 2 }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}
