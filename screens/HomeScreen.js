import { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Filter, Play, Home, BookOpen, MessageSquare, LayoutGrid, User, Star, X, CheckCircle } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavBar from '../components/BottomNavBar';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const coursesData = [
        {
            title: 'Product Design Course',
            instructor: 'Emily Hazel',
            price: '₹4,299',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.8,
            reviews: 120,
            description: 'Master Digital Product Design: UX Research, UI Design, & Interaction.',
            lessons: '40 lessons',
            duration: '20h 10m'
        },
        {
            title: 'Web Development Basics',
            instructor: 'John Hail',
            price: '₹1,999',
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/85.jpg',
            rating: 4.5,
            reviews: 85,
            description: 'Start your journey as a Web Developer. Learn HTML, CSS, and JS.',
            lessons: '25 lessons',
            duration: '26h 25m'
        },
        {
            title: 'Data Science Basics',
            instructor: 'Sarah Cole',
            price: '₹3,499',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 4.9,
            reviews: 210,
            description: 'Introduction to Data Science with Python. Analyze data like a pro.',
            lessons: '45 lessons',
            duration: '32h 15m'
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const filteredCourses = coursesData.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="light" backgroundColor="#F97316" />

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header Section with Gradient */}
                <LinearGradient
                    colors={['#F97316', '#FB923C', '#FDBA74']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="pb-8 rounded-b-[30px] pt-12 px-6 shadow-xl shadow-orange-300 relative overflow-hidden"
                >
                    {/* Floating Decorative Circles */}
                    <View className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full" />
                    <View className="absolute top-32 -left-16 w-32 h-32 bg-white/10 rounded-full" />
                    <View className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full" />

                    {/* Top Bar */}
                    <View className="flex-row justify-between items-center mb-6">
                        <View className="flex-row items-center space-x-4">
                            <LinearGradient
                                colors={['#FFFFFF30', '#FFFFFF15']}
                                className="w-12 h-12 rounded-full items-center justify-center border-2 border-white/30"
                            >
                                <User size={24} color="white" />
                            </LinearGradient>
                            <View>
                                <Text className="text-orange-100 text-sm font-medium">Good Morning ☁️</Text>
                                <Text className="text-white text-xl font-bold">Student Name</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="bg-white/20 p-2.5 rounded-full border border-white/30 backdrop-blur-sm relative">
                            <Bell size={24} color="white" />
                            <View className="absolute top-2 right-2.5 w-2 h-2 bg-red-400 rounded-full border-2 border-white shadow-lg" />
                        </TouchableOpacity>
                    </View>

                    {/* Search Bar with Glassmorphism */}
                    <View className="flex-row space-x-3 items-center">
                        <View className="flex-1 bg-white/20 flex-row items-center p-3.5 rounded-2xl border border-white/30 backdrop-blur-md">
                            <Search size={22} color="white" className="mr-3" />
                            <TextInput
                                placeholder="What do you want to learn?"
                                placeholderTextColor="#fed7aa"
                                className="flex-1 text-white text-base ml-2 font-medium"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        </View>
                        <LinearGradient
                            colors={['#FFFFFF30', '#FFFFFF15']}
                            className="p-3.5 rounded-2xl border border-white/30"
                        >
                            <TouchableOpacity>
                                <Filter size={24} color="white" />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </LinearGradient>

                {/* Content Body */}
                <View className="px-6 mt-6">

                    {/* Guidance Video Previews */}
                    <View className="mb-6">
                        <Text className="text-xl font-bold text-slate-800 mb-4">Guidance Previews</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
                            {[
                                { id: 1, title: "Effective Study Habits", duration: "5:20", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 2, title: "Exam Preparation Tips", duration: "3:45", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 3, title: "Career Guidance 2026", duration: "8:10", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            ].map((video, index) => (
                                <TouchableOpacity key={index} className="mr-4 relative" activeOpacity={0.8}>
                                    <View className="w-60 h-36 rounded-2xl overflow-hidden bg-slate-200 shadow-sm relative">
                                        <Image source={{ uri: video.image }} className="w-full h-full" resizeMode="cover" />
                                        <View className="absolute w-full h-full items-center justify-center bg-black/20 z-10">
                                            <View className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full items-center justify-center border border-white/50">
                                                <Play size={20} color="white" fill="white" style={{ marginLeft: 2 }} />
                                            </View>
                                        </View>
                                        <View className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded-md">
                                            <Text className="text-white text-[10px] font-bold">{video.duration}</Text>
                                        </View>
                                    </View>
                                    <Text className="text-slate-800 font-bold mt-2 ml-1">{video.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* In Progress Section */}
                    <View className="flex-row justify-between items-center mb-5">
                        <Text className="text-xl font-bold text-slate-800">In Progress</Text>
                        <TouchableOpacity>
                            <Text className="text-orange-500 font-semibold">See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 -mx-6 px-6">
                        {/* Course Card 1 - Enhanced */}
                        <View className="bg-white p-5 rounded-[24px] w-[280px] shadow-2xl shadow-orange-200 border border-orange-100/50 mr-5">
                            <View className="flex-row items-start space-x-3 mb-4">
                                <LinearGradient
                                    colors={['#FEF3C7', '#FDE68A']}
                                    className="w-12 h-12 rounded-2xl items-center justify-center shadow-md"
                                >
                                    <Text className="text-2xl">🎨</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Become A UI/UX Designer</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-amber-600 font-bold ml-1">4.8</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Course Progress</Text>
                                    <Text className="text-xs font-bold text-orange-500">60%</Text>
                                </View>
                                <View className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                    <LinearGradient
                                        colors={['#F97316', '#FB923C']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="h-full w-[60%] rounded-full"
                                    />
                                </View>
                            </View>

                            <View className="flex-row justify-between items-center border-t border-slate-50 pt-3">
                                <Text className="text-xs text-slate-500 font-medium">16 / 24 Lessons</Text>
                                <LinearGradient
                                    colors={['#F97316', '#FB923C']}
                                    className="w-9 h-9 rounded-full items-center justify-center shadow-lg shadow-orange-300"
                                >
                                    <TouchableOpacity>
                                        <Play size={14} color="white" fill="white" style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>

                        {/* Course Card 2 - Enhanced */}
                        <View className="bg-white p-5 rounded-[24px] w-[280px] shadow-2xl shadow-orange-200 border border-orange-100/50 mr-6">
                            <View className="flex-row items-start space-x-3 mb-4">
                                <LinearGradient
                                    colors={['#DBEAFE', '#BFDBFE']}
                                    className="w-12 h-12 rounded-2xl items-center justify-center shadow-md"
                                >
                                    <Text className="text-2xl">💻</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Web Dev Crash Course</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-amber-600 font-bold ml-1">4.6</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Course Progress</Text>
                                    <Text className="text-xs font-bold text-orange-500">40%</Text>
                                </View>
                                <View className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                    <LinearGradient
                                        colors={['#F97316', '#FB923C']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="h-full w-[40%] rounded-full"
                                    />
                                </View>
                            </View>

                            <View className="flex-row justify-between items-center border-t border-slate-50 pt-3">
                                <Text className="text-xs text-slate-500 font-medium">12 / 31 Lessons</Text>
                                <LinearGradient
                                    colors={['#F97316', '#FB923C']}
                                    className="w-9 h-9 rounded-full items-center justify-center shadow-lg shadow-orange-300"
                                >
                                    <TouchableOpacity>
                                        <Play size={14} color="white" fill="white" style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Popular Courses */}
                    <View className="flex-row justify-between items-center mb-5">
                        <Text className="text-xl font-bold text-slate-800">Popular Courses</Text>
                        <TouchableOpacity>
                            <Text className="text-orange-500 font-semibold">See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="space-y-4 mb-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedCourse(course)}
                                    className="bg-white p-3 rounded-2xl border border-slate-100 flex-row space-x-4 shadow-sm"
                                >
                                    <View className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden">
                                        <Image
                                            source={{ uri: course.image }}
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <View className="flex-1 py-1 justify-between">
                                        <View>
                                            <Text className="font-bold text-slate-800 text-base mb-1">{course.title}</Text>
                                            <Text className="text-xs text-slate-400">{course.duration} • {course.lessons}</Text>
                                        </View>
                                        <View className="flex-row justify-between items-center mt-2">
                                            <View className="flex-row items-center space-x-2">
                                                <View className="w-6 h-6 bg-slate-200 rounded-full overflow-hidden">
                                                    <Image source={{ uri: course.authorImage }} className="w-full h-full" />
                                                </View>
                                                <Text className="text-xs text-slate-600 font-medium">{course.instructor}</Text>
                                            </View>
                                            <Text className="text-orange-500 font-bold text-base">{course.price}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <View className="items-center justify-center py-10">
                                <Text className="text-slate-400">No courses found matching "{searchQuery}"</Text>
                            </View>
                        )}
                    </View>

                </View>
            </ScrollView>

            {/* Course Details Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={selectedCourse !== null}
                onRequestClose={() => setSelectedCourse(null)}
            >
                <View className="flex-1 bg-black/50 justify-center items-center px-4">
                    <View className="bg-white w-full rounded-[30px] p-6 shadow-2xl">
                        {selectedCourse && (
                            <>
                                <View className="flex-row justify-between items-start mb-6">
                                    <View className="flex-1 mr-4">
                                        <Text className="text-2xl font-bold text-slate-900 leading-8 mb-2">{selectedCourse.title}</Text>
                                        <View className="flex-row items-center space-x-1">
                                            <Star size={16} color="#F59E0B" fill="#F59E0B" />
                                            <Text className="font-bold text-slate-800">{selectedCourse.rating}</Text>
                                            <Text className="text-slate-400 text-xs">({selectedCourse.reviews} reviews)</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => setSelectedCourse(null)}
                                        className="bg-slate-100 p-2 rounded-full"
                                    >
                                        <X size={20} color="#64748B" />
                                    </TouchableOpacity>
                                </View>

                                <View className="h-40 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                                    <Image
                                        source={{ uri: selectedCourse.image }}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>

                                <Text className="text-slate-500 mb-6 leading-6">{selectedCourse.description}</Text>

                                <View className="flex-row justify-between items-center bg-orange-50 p-4 rounded-xl mb-6 border border-orange-100">
                                    <View>
                                        <Text className="text-orange-400 text-xs font-bold uppercase mb-1">Total Price</Text>
                                        <Text className="text-3xl font-bold text-orange-600">{selectedCourse.price}</Text>
                                    </View>
                                    <View className="items-end">
                                        <Text className="text-slate-500 font-medium text-xs">{selectedCourse.lessons}</Text>
                                        <Text className="text-slate-500 font-medium text-xs">{selectedCourse.duration}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-orange-600 w-full py-4 rounded-xl shadow-lg shadow-orange-300">
                                    <Text className="text-white text-center font-bold text-lg">Enroll Now</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            {/* Floating Bottom Navigation */}
            <BottomNavBar activeTab="Home" navigation={navigation} />
        </View>
    );
}
