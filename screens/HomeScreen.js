import { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Filter, Play, Home, BookOpen, MessageSquare, LayoutGrid, User, Star, X, CheckCircle, Languages } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavBar from '../components/BottomNavBar';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const { language, toggleLanguage, isMarathi } = useLanguage();
    const t = (key) => getTranslation(language, key);

    const coursesData = [
        {
            titleKey: 'course1',
            instructor: 'Dr. Rajesh Kumar',
            price: '₹8,999',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/44.jpg',
            rating: 4.9,
            reviews: 2450,
            description: 'Complete UPSC Civil Services Prelims preparation with GS Paper I & II.',
            lessons: '120 lessons',
            duration: '80h 30m'
        },
        {
            titleKey: 'course2',
            instructor: 'Prof. Anjali Rai',
            price: '₹6,499',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/85.jpg',
            rating: 4.8,
            reviews: 1820,
            description: 'Maharashtra PSC State Services exam preparation with Marathi & English.',
            lessons: '95 lessons',
            duration: '65h 45m'
        },
        {
            titleKey: 'course3',
            instructor: 'Dr. Vikram Patil',
            price: '₹3,999',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/65.jpg',
            rating: 4.9,
            reviews: 3120,
            description: 'Master Indian Constitution, Polity, and Governance for UPSC & MPSC.',
            lessons: '75 lessons',
            duration: '50h 20m'
        },
        {
            titleKey: 'course4',
            instructor: 'Dr. Meera Shah',
            price: '₹4,499',
            image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/22.jpg',
            rating: 4.7,
            reviews: 2180,
            description: 'Complete coverage of Modern Indian History from 1857 to Independence.',
            lessons: '85 lessons',
            duration: '58h 15m'
        },
        {
            titleKey: 'course5',
            instructor: 'Prof. Suresh Joshi',
            price: '₹3,799',
            image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/55.jpg',
            rating: 4.8,
            reviews: 1950,
            description: 'Physical, Human Geography and Environmental Studies for competitive exams.',
            lessons: '70 lessons',
            duration: '48h 30m'
        },
        {
            titleKey: 'course6',
            instructor: 'Dr. Priya Kulkarni',
            price: '₹4,999',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/66.jpg',
            rating: 4.9,
            reviews: 2650,
            description: 'Indian Economy, Banking, Budget Analysis and Economic Survey coverage.',
            lessons: '90 lessons',
            duration: '62h 45m'
        },
        {
            titleKey: 'course7',
            instructor: 'Mr. Aditya Sharma',
            price: '₹2,999',
            image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.6,
            reviews: 3420,
            description: 'Daily current affairs updates with monthly compilations and quizzes.',
            lessons: '365 lessons',
            duration: '120h 00m'
        },
        {
            titleKey: 'course8',
            instructor: 'Prof. Kavita Desai',
            price: '₹3,499',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.8,
            reviews: 2240,
            description: 'Complete CSAT preparation with Aptitude, Reasoning and Comprehension.',
            lessons: '65 lessons',
            duration: '45h 20m'
        },
        {
            titleKey: 'course9',
            instructor: 'Dr. Ramesh Iyer',
            price: '₹2,499',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/78.jpg',
            rating: 4.7,
            reviews: 1680,
            description: 'Master essay writing techniques and Ethics, Integrity & Aptitude for Mains.',
            lessons: '50 lessons',
            duration: '35h 40m'
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const filteredCourses = coursesData.filter(course =>
        t(course.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="dark" backgroundColor="#FFFFFF" />

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header Section with White Background */}
                <View className="pb-8 rounded-b-[30px] pt-12 px-6 shadow-lg bg-white">

                    {/* Top Bar */}
                    <View className="flex-row justify-between items-center mb-6">
                        <View className="flex-row items-center space-x-3">
                            {/* Logo */}
                            <Image
                                source={require('../assets/logo.jpeg')}
                                className="w-12 h-12"
                                resizeMode="contain"
                            />
                            {/* App Name */}
                            <Image
                                source={require('../assets/app-name.png')}
                                className="h-10"
                                style={{ width: 120 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View className="flex-row space-x-2">
                            <TouchableOpacity
                                onPress={toggleLanguage}
                                className="bg-blue-50 rounded-full items-center justify-center px-2.5 py-2 flex-row space-x-1 border border-blue-100"
                            >
                                <Text className="text-slate-700 text-sm">{isMarathi ? '🇮🇳' : '🇬🇧'}</Text>
                                <Text className="text-slate-700 text-[10px] font-bold">{isMarathi ? 'मर' : 'EN'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-50 p-2.5 rounded-full border border-blue-100 relative">
                                <Bell size={24} color="#334155" />
                                <View className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-lg" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Search Bar */}
                    <View className="flex-row space-x-3 items-center">
                        <View className="flex-1 bg-blue-50 flex-row items-center p-2.5 rounded-2xl border border-blue-100">
                            <Search size={20} color="#64748b" className="mr-2" />
                            <TextInput
                                placeholder={t('whatLearn')}
                                placeholderTextColor="#94a3b8"
                                className="flex-1 text-slate-700 text-sm ml-2 font-medium"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        </View>
                        <View className="bg-blue-50 p-2.5 rounded-2xl border border-blue-100">
                            <TouchableOpacity>
                                <Filter size={20} color="#334155" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Content Body */}
                <View className="px-6 mt-6">

                    {/* Guidance Video Previews */}
                    <View className="mb-6">
                        <Text className="text-xl font-bold text-slate-800 mb-4">{t('guidancePreviews')}</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
                            {[
                                { id: 1, title: "UPSC Exam Strategy 2026", duration: "12:45", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 2, title: "MPSC Prelims Tips", duration: "8:30", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 3, title: "Current Affairs Daily", duration: "15:20", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            ].map((video, index) => (
                                <TouchableOpacity key={index} className="mr-4 relative" activeOpacity={0.8}>
                                    <View className="w-60 h-36 rounded-2xl overflow-hidden bg-blue-100 shadow-sm relative">
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
                        <Text className="text-xl font-bold text-slate-800">{t('inProgress')}</Text>
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-semibold">{t('seeAll')}</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 -mx-6 px-6">
                        {/* Course Card 1 - Enhanced */}
                        <View className="bg-white p-5 rounded-[24px] w-[280px] shadow-2xl shadow-blue-200 border border-blue-100/50 mr-5">
                            <View className="flex-row items-start space-x-3 mb-4">
                                <LinearGradient
                                    colors={['#FEF3C7', '#FDE68A']}
                                    className="w-12 h-12 rounded-2xl items-center justify-center shadow-md"
                                >
                                    <Text className="text-2xl">📜</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Indian History & Culture</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-blue-600 font-bold ml-1">4.9</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Course Progress</Text>
                                    <Text className="text-xs font-bold text-blue-500">65%</Text>
                                </View>
                                <View className="h-2.5 bg-blue-50 rounded-full overflow-hidden shadow-inner">
                                    <LinearGradient
                                        colors={['#0088FF', '#3399FF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="h-full w-[65%] rounded-full"
                                    />
                                </View>
                            </View>

                            <View className="flex-row justify-between items-center border-t border-slate-50 pt-3">
                                <Text className="text-xs text-slate-500 font-medium">52 / 80 Lessons</Text>
                                <LinearGradient
                                    colors={['#0088FF', '#3399FF']}
                                    className="w-9 h-9 rounded-full items-center justify-center shadow-lg shadow-blue-300"
                                >
                                    <TouchableOpacity>
                                        <Play size={14} color="white" fill="white" style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>

                        {/* Course Card 2 - Enhanced */}
                        <View className="bg-white p-5 rounded-[24px] w-[280px] shadow-2xl shadow-blue-200 border border-blue-100/50 mr-6">
                            <View className="flex-row items-start space-x-3 mb-4">
                                <LinearGradient
                                    colors={['#DBEAFE', '#BFDBFE']}
                                    className="w-12 h-12 rounded-2xl items-center justify-center shadow-md"
                                >
                                    <Text className="text-2xl">🌍</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Geography & Environment</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-blue-600 font-bold ml-1">4.7</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Course Progress</Text>
                                    <Text className="text-xs font-bold text-blue-500">45%</Text>
                                </View>
                                <View className="h-2.5 bg-blue-50 rounded-full overflow-hidden shadow-inner">
                                    <LinearGradient
                                        colors={['#0088FF', '#3399FF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="h-full w-[45%] rounded-full"
                                    />
                                </View>
                            </View>

                            <View className="flex-row justify-between items-center border-t border-slate-50 pt-3">
                                <Text className="text-xs text-slate-500 font-medium">36 / 70 Lessons</Text>
                                <LinearGradient
                                    colors={['#0088FF', '#3399FF']}
                                    className="w-9 h-9 rounded-full items-center justify-center shadow-lg shadow-blue-300"
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
                        <Text className="text-xl font-bold text-slate-800">{t('popularCourses')}</Text>
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-semibold">{t('seeAll')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="space-y-4 mb-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedCourse(course)}
                                    className="bg-white p-3 rounded-2xl border border-blue-100 flex-row space-x-4 shadow-sm"
                                >
                                    <View className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden">
                                        <Image
                                            source={{ uri: course.image }}
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <View className="flex-1 py-1 justify-between">
                                        <View>
                                            <Text className="font-bold text-slate-800 text-base mb-1">{t(course.titleKey)}</Text>
                                            <Text className="text-xs text-slate-400">{course.duration} • {course.lessons}</Text>
                                        </View>
                                        <View className="flex-row justify-between items-center mt-2">
                                            <View className="flex-row items-center space-x-2">
                                                <View className="w-6 h-6 bg-blue-100 rounded-full overflow-hidden">
                                                    <Image source={{ uri: course.authorImage }} className="w-full h-full" />
                                                </View>
                                                <Text className="text-xs text-slate-600 font-medium">{course.instructor}</Text>
                                            </View>
                                            <Text className="text-blue-500 font-bold text-base">{course.price}</Text>
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
                                        className="bg-blue-50 p-2 rounded-full"
                                    >
                                        <X size={20} color="#64748B" />
                                    </TouchableOpacity>
                                </View>

                                <View className="h-40 bg-blue-50 rounded-2xl mb-6 overflow-hidden">
                                    <Image
                                        source={{ uri: selectedCourse.image }}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>

                                <Text className="text-slate-500 mb-6 leading-6">{selectedCourse.description}</Text>

                                <View className="flex-row justify-between items-center bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                                    <View>
                                        <Text className="text-blue-400 text-xs font-bold uppercase mb-1">Total Price</Text>
                                        <Text className="text-3xl font-bold text-blue-600">{selectedCourse.price}</Text>
                                    </View>
                                    <View className="items-end">
                                        <Text className="text-slate-500 font-medium text-xs">{selectedCourse.lessons}</Text>
                                        <Text className="text-slate-500 font-medium text-xs">{selectedCourse.duration}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-blue-600 w-full py-4 rounded-xl shadow-lg shadow-blue-300">
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
