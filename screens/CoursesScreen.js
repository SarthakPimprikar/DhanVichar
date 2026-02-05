import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Bell, Search, Filter, ChevronRight, User } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNavBar from '../components/BottomNavBar';

export default function CoursesScreen({ navigation }) {
    const courses = [
        {
            id: 1,
            title: 'Stock Market Basics',
            progress: 0.7,
            lessonsCompleted: 29,
            totalLessons: 45,
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            title: 'Mutual Funds Guide',
            progress: 0.55,
            lessonsCompleted: 21,
            totalLessons: 38,
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 3,
            title: 'Personal Finance & Budgeting',
            progress: 0.45,
            lessonsCompleted: 14,
            totalLessons: 32,
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 4,
            title: 'Cryptocurrency Investing',
            progress: 0.3,
            lessonsCompleted: 13,
            totalLessons: 42,
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="dark" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View className="bg-white pt-12 pb-6 px-6 rounded-b-[30px] shadow-lg z-10">
                <View className="flex-row justify-between items-start mb-6">
                    <View className="flex-row items-center space-x-4">
                        <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center border border-blue-100">
                            <User size={24} color="#334155" />
                        </View>
                        <View>
                            <Text className="text-slate-800 text-xl font-bold">My Videos</Text>
                            <Text className="text-slate-500 text-xs">You have {courses.length} videos to watch.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 p-2.5 rounded-full border border-blue-100">
                        <Bell size={24} color="#334155" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row space-x-3 items-center">
                    <View className="flex-1 bg-blue-50 flex-row items-center p-2.5 rounded-2xl border border-blue-100">
                        <Search size={20} color="#64748b" className="mr-2" />
                        <TextInput
                            placeholder="Search videos..."
                            placeholderTextColor="#94a3b8"
                            className="flex-1 text-slate-700 text-sm ml-2 font-medium"
                        />
                    </View>
                    <TouchableOpacity className="bg-blue-50 p-2.5 rounded-2xl border border-blue-100">
                        <Filter size={20} color="#334155" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {courses.map((course) => (
                    <View key={course.id} className="bg-white p-4 rounded-[20px] mb-4 flex-row items-center shadow-sm border border-blue-100">
                        <View className="w-20 h-20 rounded-xl bg-blue-100 overflow-hidden mr-4">
                            <Image source={{ uri: course.image }} className="w-full h-full" resizeMode="cover" />
                        </View>

                        <View className="flex-1 mr-2">
                            <Text className="text-slate-800 font-bold text-base mb-2" numberOfLines={1}>{course.title}</Text>

                            <View className="flex-row justify-between items-center mb-1">
                                <Text className="text-xs text-slate-400">Video Progress</Text>
                                <Text className="text-xs font-bold text-blue-500">{Math.round(course.progress * 100)}%</Text>
                            </View>

                            <View className="h-2 bg-blue-50 rounded-full overflow-hidden mb-2">
                                <View className="h-full bg-blue-500 rounded-full" style={{ width: `${course.progress * 100}%` }} />
                            </View>

                            <Text className="text-xs text-slate-500 font-medium">
                                <Text className="text-blue-500 font-bold">{course.lessonsCompleted}</Text> / {course.totalLessons} Videos
                            </Text>
                        </View>

                        <TouchableOpacity className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center shadow-lg shadow-blue-300">
                            <ChevronRight size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <BottomNavBar activeTab="Courses" navigation={navigation} />
        </View>
    );
}
