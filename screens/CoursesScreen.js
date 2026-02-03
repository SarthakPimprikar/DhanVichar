import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Bell, Search, Filter, ChevronRight, User } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNavBar from '../components/BottomNavBar';

export default function CoursesScreen({ navigation }) {
    const courses = [
        {
            id: 1,
            title: 'Product Design Course',
            progress: 0.6,
            lessonsCompleted: 16,
            totalLessons: 24,
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            title: 'Content Writing Pro',
            progress: 0.4,
            lessonsCompleted: 8,
            totalLessons: 20,
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 3,
            title: 'Financial Literacy Bootcamp',
            progress: 0.9,
            lessonsCompleted: 18,
            totalLessons: 20,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 4,
            title: 'AI and Machine Learning Basic',
            progress: 0.2,
            lessonsCompleted: 5,
            totalLessons: 25,
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="light" backgroundColor="#F97316" />

            {/* Header */}
            <View className="bg-orange-500 pt-12 pb-6 px-6 rounded-b-[30px] shadow-xl shadow-orange-300 z-10">
                <View className="flex-row justify-between items-start mb-6">
                    <View className="flex-row items-center space-x-4">
                        <View className="w-12 h-12 bg-orange-400/50 rounded-full items-center justify-center border border-orange-300">
                            <User size={24} color="white" />
                        </View>
                        <View>
                            <Text className="text-white text-xl font-bold">My Course</Text>
                            <Text className="text-orange-100 text-xs">There are {courses.length} courses for you.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-orange-400/40 p-2.5 rounded-full border border-orange-300/20 backdrop-blur-sm">
                        <Bell size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row space-x-3 items-center">
                    <View className="flex-1 bg-orange-400/30 flex-row items-center p-3.5 rounded-2xl border border-orange-300/30">
                        <Search size={22} color="white" className="mr-3" />
                        <TextInput
                            placeholder="What do you want to learn?"
                            placeholderTextColor="#fed7aa"
                            className="flex-1 text-white text-base ml-2 font-medium"
                        />
                    </View>
                    <TouchableOpacity className="bg-orange-400/30 p-3.5 rounded-2xl border border-orange-300/30">
                        <Filter size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {courses.map((course) => (
                    <View key={course.id} className="bg-white p-4 rounded-[20px] mb-4 flex-row items-center shadow-sm border border-slate-100">
                        <View className="w-20 h-20 rounded-xl bg-slate-200 overflow-hidden mr-4">
                            <Image source={{ uri: course.image }} className="w-full h-full" resizeMode="cover" />
                        </View>

                        <View className="flex-1 mr-2">
                            <Text className="text-slate-800 font-bold text-base mb-2" numberOfLines={1}>{course.title}</Text>

                            <View className="flex-row justify-between items-center mb-1">
                                <Text className="text-xs text-slate-400">Course Progress</Text>
                                <Text className="text-xs font-bold text-orange-500">{Math.round(course.progress * 100)}%</Text>
                            </View>

                            <View className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                                <View className="h-full bg-orange-500 rounded-full" style={{ width: `${course.progress * 100}%` }} />
                            </View>

                            <Text className="text-xs text-slate-500 font-medium">
                                <Text className="text-orange-500 font-bold">{course.lessonsCompleted}</Text> / {course.totalLessons} Lessons
                            </Text>
                        </View>

                        <TouchableOpacity className="w-10 h-10 bg-orange-500 rounded-full items-center justify-center shadow-lg shadow-orange-300">
                            <ChevronRight size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <BottomNavBar activeTab="Courses" navigation={navigation} />
        </View>
    );
}
