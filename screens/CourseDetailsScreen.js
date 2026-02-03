import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowLeft, PlayCircle, Star, Clock, BookOpen, Share2, MoreVertical, CheckCircle } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function CourseDetailsScreen({ navigation }) {
    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="light" />

            {/* Top Image Section */}
            <View className="relative">
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
                    className="w-full h-72"
                    resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30" />

                <SafeAreaView className="absolute top-0 left-0 right-0 z-10">
                    <View className="flex-row justify-between items-center px-6 pt-4">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full items-center justify-center border border-white/30"
                        >
                            <ArrowLeft size={20} color="white" />
                        </TouchableOpacity>
                        <View className="flex-row space-x-3">
                            <TouchableOpacity className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full items-center justify-center border border-white/30">
                                <Share2 size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full items-center justify-center border border-white/30">
                                <MoreVertical size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

                <View className="absolute bottom-0 left-0 right-0 h-4 bg-[#F5F7FA] rounded-t-[30px]" />
            </View>

            <ScrollView className="flex-1 -mt-4" contentContainerStyle={{ paddingBottom: 100 }}>
                <View className="px-6">
                    <View className="flex-row items-center space-x-2 mb-2">
                        <View className="bg-orange-100 px-3 py-1 rounded-full">
                            <Text className="text-orange-500 text-xs font-bold">Best Seller</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Star size={14} color="#F59E0B" fill="#F59E0B" />
                            <Text className="text-slate-600 text-xs font-bold ml-1">4.8 (2.5k reviews)</Text>
                        </View>
                    </View>

                    <Text className="text-2xl font-bold text-slate-800 mb-2">Complete Product Design Course: UI/UX Masterclass</Text>

                    <View className="flex-row items-center space-x-4 mb-6">
                        <View className="flex-row items-center space-x-2">
                            <Clock size={16} color="#94A3B8" />
                            <Text className="text-slate-500 text-sm">20h 10m</Text>
                        </View>
                        <View className="flex-row items-center space-x-2">
                            <BookOpen size={16} color="#94A3B8" />
                            <Text className="text-slate-500 text-sm">40 Lessons</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center justify-between mb-8">
                        <View className="flex-row items-center space-x-3">
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                            <View>
                                <Text className="text-slate-500 text-xs">Created by</Text>
                                <Text className="text-slate-800 font-bold">Emily Hazel</Text>
                            </View>
                        </View>
                        <Text className="text-3xl font-bold text-blue-500">₹4,299</Text>
                    </View>

                    <Text className="text-lg font-bold text-slate-800 mb-4">About Course</Text>
                    <Text className="text-slate-500 leading-6 mb-8">
                        Learn to design websites and mobile applications securely and beautifully. This course covers everything from wireframing to high-fidelity prototyping using Figma and Adobe XD. Perfect for beginners!
                    </Text>

                    <Text className="text-lg font-bold text-slate-800 mb-4">Curriculum</Text>
                    <View className="space-y-4">
                        {[1, 2, 3, 4].map((item, index) => (
                            <View key={index} className="bg-white p-4 rounded-2xl border border-slate-100 flex-row items-center justify-between">
                                <View className="flex-row items-center space-x-4">
                                    <View className="w-10 h-10 bg-blue-50 rounded-full items-center justify-center">
                                        <Text className="text-blue-500 font-bold">{index + 1}</Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold text-slate-800">Introduction to UI Design</Text>
                                        <Text className="text-slate-400 text-xs">10:30 mins</Text>
                                    </View>
                                </View>
                                <TouchableOpacity className="w-8 h-8 rounded-full bg-blue-500 items-center justify-center shadow-lg shadow-blue-200">
                                    <PlayCircle size={18} color="white" fill="white" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Floating Action Button */}
            <View className="absolute bottom-8 left-6 right-6">
                <TouchableOpacity className="bg-blue-600 p-4 rounded-2xl flex-row items-center justify-center shadow-lg shadow-blue-400 space-x-2">
                    <Text className="text-white font-bold text-lg">Enroll Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
