import { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Filter, Play, Home, BookOpen, MessageSquare, LayoutGrid, User, Star, X, CheckCircle, Languages, Landmark, TrendingUp, Building2, Wallet, ChevronDown, PieChart, Calculator, Briefcase, Coins, ShieldCheck, Eye, Clock } from 'lucide-react-native';
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
            id: 1,
            title: 'How to Start Investing in Stock Market 2026',
            instructor: 'CA Rajesh Mehta',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/44.jpg',
            views: '1.2M views',
            duration: '15:30',
            description: 'A complete beginner guide to starting your journey in the Indian Stock Market.'
        },
        {
            id: 2,
            title: 'Top 5 Mutual Funds for High Returns',
            instructor: 'Priya Sharma',
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/85.jpg',
            views: '850K views',
            duration: '12:45',
            description: 'Analysis of top performing mutual funds for the current fiscal year.'
        },
        {
            id: 3,
            title: 'Budgeting 101: Save Money Fast',
            instructor: 'Vikram Patil',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/65.jpg',
            views: '2.1M views',
            duration: '08:20',
            description: 'Practical tips to manage your monthly budget and save more.'
        },
        {
            id: 4,
            title: 'Crypto Trading Strategies for Beginners',
            instructor: 'Aditya Kulkarni',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/66.jpg',
            views: '540K views',
            duration: '18:15',
            description: 'Learn the basics of cryptocurrency trading and chart patterns.'
        },
        {
            id: 5,
            title: 'Tax Saving Hacks for Salaried Employees',
            instructor: 'CA Suresh Joshi',
            image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/55.jpg',
            views: '1.5M views',
            duration: '22:10',
            description: 'Maximize your tax refunds with these legal saving strategies.'
        },
        {
            id: 6,
            title: 'Gold Investment: Digital vs Physical',
            instructor: 'Neha Gupta',
            image: 'https://images.unsplash.com/photo-1610375461490-679bb6e28dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            views: '920K views',
            duration: '14:20',
            description: 'Understanding the best way to invest in gold for long term returns.'
        },
        {
            id: 7,
            title: 'SIP vs Lumpsum: What to Choose?',
            instructor: 'Rahul Verma',
            image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            views: '1.8M views',
            duration: '10:15',
            description: 'Mathematical comparison of SIP and Lumpsum investment strategies.'
        },
        {
            id: 8,
            title: 'Insurance Guide: Term vs Life',
            instructor: 'Dr. Anita Desai',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
            views: '750K views',
            duration: '16:50',
            description: 'Clear confusion between Term Insurance and Life Insurance policies.'
        },
        {
            id: 9,
            title: 'Retirement Planning at 30',
            instructor: 'Karan Malhotra',
            image: 'https://images.unsplash.com/photo-1534951009808-766178b47efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/men/85.jpg',
            views: '2.5M views',
            duration: '19:40',
            description: 'Step-by-step guide to retire early with financial freedom.'
        },
        {
            id: 10,
            title: '5 Side Hustles to Earn ₹50k/Month',
            instructor: 'Simran Kaur',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            authorImage: 'https://randomuser.me/api/portraits/women/90.jpg',
            views: '3.0M views',
            duration: '11:10',
            description: 'Legitimate online ways to earn extra income in your spare time.'
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAllPopular, setShowAllPopular] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredCourses = coursesData.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                                activeOpacity={0.7}
                            >
                                <LinearGradient
                                    colors={['#ffffff', '#eff6ff']}
                                    className="flex-row items-center px-3 py-1.5 rounded-full border border-blue-100 shadow-sm"
                                >
                                    <Languages size={14} color="#3B82F6" style={{ marginRight: 4 }} />
                                    <Text className="text-slate-700 text-xs font-bold">
                                        {language === 'english' ? 'English' : language === 'hindi' ? 'Hindi' : 'Marathi'}
                                    </Text>
                                </LinearGradient>
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

                    </View>
                </View>

                {/* Content Body */}
                <View className="px-6 mt-6">

                    {/* Financial Content Types Grid */}
                    <View className="mb-6">
                        <TouchableOpacity
                            onPress={toggleExpand}
                            activeOpacity={0.7}
                            className="flex-row justify-between items-center mb-4"
                        >
                            <Text className="text-lg font-bold text-slate-800">Financial & Money Content Types</Text>
                            <View>
                                {isExpanded ? (
                                    <ChevronDown size={20} color="#334155" style={{ transform: [{ rotate: '180deg' }] }} />
                                ) : (
                                    <ChevronDown size={20} color="#334155" />
                                )}
                            </View>
                        </TouchableOpacity>

                        <View className="flex-row flex-wrap justify-between">
                            {/* Card 1: Banking */}
                            <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                <Landmark size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                <Text className="text-center text-xs font-medium text-slate-700">Banking Alert Update</Text>
                            </TouchableOpacity>

                            {/* Card 2: Stock Market */}
                            <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                <TrendingUp size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                <Text className="text-center text-xs font-medium text-slate-700">Stock Market Alert</Text>
                            </TouchableOpacity>

                            {/* Card 3: Govt Scheme */}
                            <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                <Building2 size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                <Text className="text-center text-xs font-medium text-slate-700">Government Scheme Alert</Text>
                            </TouchableOpacity>

                            {/* Card 4: Money Saving */}
                            <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                <View className="w-8 h-8 rounded-full bg-blue-500 items-center justify-center mb-2">
                                    <Text className="text-white font-bold text-lg">₹</Text>
                                </View>
                                <Text className="text-center text-xs font-medium text-slate-700">Money Saving Alert</Text>
                            </TouchableOpacity>

                            {/* Expanded Content - Extra Cards */}
                            {isExpanded && (
                                <>
                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <PieChart size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Mutual Funds & SIP</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <ShieldCheck size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Insurance Guide</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <Calculator size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Tax Planning</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <Coins size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Crypto & Digital Assets</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <Briefcase size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Retirement Planning</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="w-[48%] bg-white border border-blue-400 rounded-xl p-4 items-center justify-center mb-4 shadow-sm h-32">
                                        <Wallet size={32} color="#3B82F6" style={{ marginBottom: 8 }} />
                                        <Text className="text-center text-xs font-medium text-slate-700">Loans & Credit Score</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    </View>

                    {/* Guidance Video Previews */}
                    <View className="mb-6">
                        <Text className="text-xl font-bold text-slate-800 mb-4">{t('guidancePreviews')}</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
                            {[
                                { id: 1, title: "Investing Basics for Beginners", duration: "10:25", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 2, title: "Mutual Funds Explained", duration: "8:45", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                                { id: 3, title: "Personal Finance Tips", duration: "12:30", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
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
                        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
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
                                    <Text className="text-2xl">📈</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Stock Market Basics</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-blue-600 font-bold ml-1">4.9</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Video Progress</Text>
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
                                <Text className="text-xs text-slate-500 font-medium">29 / 45 Videos</Text>
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
                                    <Text className="text-2xl">💰</Text>
                                </LinearGradient>
                                <View className="flex-1">
                                    <Text className="font-bold text-slate-800 text-lg leading-6">Personal Finance</Text>
                                    <View className="flex-row items-center mt-1">
                                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                                        <Text className="text-xs text-blue-600 font-bold ml-1">4.9</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mb-4">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-xs text-slate-400 font-medium">Video Progress</Text>
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
                                <Text className="text-xs text-slate-500 font-medium">14 / 32 Videos</Text>
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
                        <TouchableOpacity onPress={() => setShowAllPopular(!showAllPopular)}>
                            <Text className="text-blue-500 font-semibold">{showAllPopular ? 'Show Less' : t('seeAll')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="space-y-4 mb-6">
                        {filteredCourses.length > 0 ? (
                            (showAllPopular ? filteredCourses : filteredCourses.slice(0, 4)).map((course, index) => (
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
                                            <Text className="font-bold text-slate-800 text-base mb-1" numberOfLines={2}>{course.title}</Text>
                                            <Text className="text-xs text-slate-400">{course.views} • {course.duration}</Text>
                                        </View>
                                        <View className="flex-row items-center mt-2">
                                            <View className="flex-row items-center space-x-2">
                                                <View className="w-6 h-6 bg-blue-100 rounded-full overflow-hidden">
                                                    <Image source={{ uri: course.authorImage }} className="w-full h-full" />
                                                </View>
                                                <Text className="text-xs text-slate-600 font-medium">{course.instructor}</Text>
                                            </View>
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

                                <View className="flex-row justify-around items-center mb-6">
                                    <View className="flex-row items-center space-x-2 bg-blue-50 px-4 py-3 rounded-2xl border border-blue-100 flex-1 mr-2 justify-center">
                                        <Eye size={20} color="#3B82F6" />
                                        <Text className="text-slate-700 font-bold text-sm">{selectedCourse.views}</Text>
                                    </View>
                                    <View className="flex-row items-center space-x-2 bg-amber-50 px-4 py-3 rounded-2xl border border-amber-100 flex-1 ml-2 justify-center">
                                        <Clock size={20} color="#F59E0B" />
                                        <Text className="text-slate-700 font-bold text-sm">{selectedCourse.duration}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    className="bg-blue-600 w-full py-4 rounded-xl shadow-lg shadow-blue-300"
                                    onPress={() => {
                                        setSelectedCourse(null);
                                        navigation.navigate('Premium');
                                    }}
                                >
                                    <Text className="text-white text-center font-bold text-lg">Watch</Text>
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
