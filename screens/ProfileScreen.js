import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ChevronRight, ChevronLeft, Edit3, BookOpen, Flag, BarChart2, User, Settings, FileText, Share2, HelpCircle, LogOut } from 'lucide-react-native';
import BottomNavBar from '../components/BottomNavBar';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
    const MenuItem = ({ icon: Icon, label, color, border = true }) => (
        <TouchableOpacity className={`flex-row items-center p-4 ${border ? 'border-b border-slate-50' : ''}`}>
            <View className="w-10 h-10 bg-slate-50 rounded-full items-center justify-center mr-4">
                <Icon size={20} color="#64748B" />
            </View>
            <Text className="flex-1 text-slate-700 font-semibold text-base">{label}</Text>
            <ChevronRight size={20} color="#CBD5E1" />
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="light" backgroundColor="#F97316" />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* Top Header Background */}
                <View className="bg-orange-600 h-72 rounded-b-[40px] pt-12 px-6 relative overflow-hidden">
                    {/* Decorative circles for the 'abstract' look */}
                    <View className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl" />
                    <View className="absolute top-20 -left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl" />

                    <View className="flex-row justify-between items-center z-10 mb-8">
                        <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 bg-white/20 rounded-full items-center justify-center backdrop-blur-md">
                            <ChevronLeft size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white text-xl font-bold">Profile</Text>
                        <TouchableOpacity className="w-10 h-10 bg-white/20 rounded-full items-center justify-center backdrop-blur-md">
                            <Edit3 size={20} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Name and Role in Blue Area */}
                    <View className="items-center z-10">
                        <Text className="text-white text-2xl font-bold">Student Name</Text>
                    </View>
                </View>

                {/* Profile Card & Stats */}
                <View className="px-6 -mt-20">
                    {/* Avatar Container */}
                    <View className="items-center mb-6">
                        <View className="p-1.5 bg-white rounded-full shadow-lg shadow-orange-900/20">
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                                className="w-32 h-32 rounded-full"
                            />
                        </View>
                    </View>

                    {/* Stats Row */}
                    <View className="flex-row justify-between mb-8">
                        {/* Card 1 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-slate-100 shadow-orange-100">
                            <View className="bg-amber-50 p-2.5 rounded-full mb-2">
                                <BookOpen size={20} color="#F97316" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">100</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">Enrolled Course</Text>
                        </View>

                        {/* Card 2 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-slate-100 shadow-green-100">
                            <View className="bg-green-50 p-2.5 rounded-full mb-2">
                                <Flag size={20} color="#16A34A" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">100</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">Complete Success</Text>
                        </View>

                        {/* Card 3 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-slate-100 shadow-purple-100">
                            <View className="bg-purple-50 p-2.5 rounded-full mb-2">
                                <BarChart2 size={20} color="#9333EA" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">7.8</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">Learning Score</Text>
                        </View>
                    </View>

                    {/* Menu Items (Second Half) */}
                    <View className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 mb-6">
                        <MenuItem icon={User} label="Personal Data" />
                        <MenuItem icon={Settings} label="Settings" />
                        <MenuItem icon={FileText} label="E-Statement" />
                        <MenuItem icon={Share2} label="Referral Code" />
                        <MenuItem icon={HelpCircle} label="FAQs" border={false} />
                    </View>

                    <TouchableOpacity className="flex-row items-center justify-center p-4 bg-red-50 rounded-2xl border border-red-100 mb-6 active:opacity-70">
                        <LogOut size={20} color="#EF4444" />
                        <Text className="text-red-500 font-bold ml-2">Log Out</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <BottomNavBar activeTab="Profile" navigation={navigation} />
        </View>
    );
}
