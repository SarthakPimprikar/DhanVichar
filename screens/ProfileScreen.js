import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ChevronRight, ChevronLeft, Edit3, BookOpen, Flag, BarChart2, User, Settings, FileText, Share2, HelpCircle, LogOut, Languages } from 'lucide-react-native';
import BottomNavBar from '../components/BottomNavBar';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
    const { language, toggleLanguage, isMarathi } = useLanguage();
    const t = (key) => getTranslation(language, key);

    const MenuItem = ({ icon: Icon, label, color, border = true }) => (
        <TouchableOpacity className={`flex-row items-center p-4 ${border ? 'border-b border-slate-50' : ''}`}>
            <View className="w-10 h-10 bg-blue-50 rounded-full items-center justify-center mr-4">
                <Icon size={20} color="#64748B" />
            </View>
            <Text className="flex-1 text-slate-700 font-semibold text-base">{label}</Text>
            <ChevronRight size={20} color="#CBD5E1" />
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="dark" backgroundColor="#FFFFFF" />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* Top Header Background */}
                <View className="bg-white h-72 rounded-b-[40px] pt-12 px-6 shadow-lg">

                    <View className="flex-row justify-between items-center z-10 mb-8">
                        <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 bg-blue-50 rounded-full items-center justify-center">
                            <ChevronLeft size={24} color="#334155" />
                        </TouchableOpacity>
                        <Text className="text-slate-800 text-xl font-bold">{t('profile')}</Text>
                        <TouchableOpacity
                            onPress={toggleLanguage}
                            className="bg-blue-50 rounded-full items-center justify-center px-3 py-2 flex-row space-x-1 border border-blue-100"
                        >
                            <Text className="text-slate-700 text-lg">{isMarathi ? '🇮🇳' : '🇬🇧'}</Text>
                            <Text className="text-slate-700 text-xs font-bold">{isMarathi ? 'मर' : 'EN'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Name and Role in Header Area */}
                    <View className="items-center z-10">
                        <Text className="text-slate-800 text-2xl font-bold">{t('aspirantName')}</Text>
                    </View>
                </View>

                {/* Profile Card & Stats */}
                <View className="px-6 -mt-20">
                    {/* Avatar Container */}
                    <View className="items-center mb-6">
                        <View className="p-1.5 bg-white rounded-full shadow-lg shadow-blue-900/20">
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                                className="w-32 h-32 rounded-full"
                            />
                        </View>
                    </View>

                    {/* Stats Row */}
                    <View className="flex-row justify-between mb-8">
                        {/* Card 1 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-blue-100 shadow-blue-100">
                            <View className="bg-amber-50 p-2.5 rounded-full mb-2">
                                <BookOpen size={20} color="#0088FF" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">12</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">{t('enrolledCourses')}</Text>
                        </View>

                        {/* Card 2 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-blue-100 shadow-green-100">
                            <View className="bg-green-50 p-2.5 rounded-full mb-2">
                                <Flag size={20} color="#16A34A" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">45</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">{t('mockTestsDone')}</Text>
                        </View>

                        {/* Card 3 */}
                        <View className="bg-white p-4 rounded-2xl w-[31%] items-center shadow-sm border border-blue-100 shadow-purple-100">
                            <View className="bg-purple-50 p-2.5 rounded-full mb-2">
                                <BarChart2 size={20} color="#9333EA" />
                            </View>
                            <Text className="text-xl font-bold text-slate-800">82%</Text>
                            <Text className="text-[10px] text-slate-400 text-center font-medium mt-1">{t('examReadiness')}</Text>
                        </View>
                    </View>

                    {/* Menu Items (Second Half) */}
                    <View className="bg-white rounded-3xl p-2 shadow-sm border border-blue-100 mb-6">
                        <MenuItem icon={User} label={t('personalData')} />
                        <MenuItem icon={Settings} label={t('settings')} />
                        <MenuItem icon={FileText} label={t('eStatement')} />
                        <MenuItem icon={Share2} label={t('referralCode')} />
                        <MenuItem icon={HelpCircle} label={t('faqs')} border={false} />
                    </View>

                    <TouchableOpacity className="flex-row items-center justify-center p-4 bg-red-50 rounded-2xl border border-red-100 mb-6 active:opacity-70">
                        <LogOut size={20} color="#EF4444" />
                        <Text className="text-red-500 font-bold ml-2">{t('logOut')}</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <BottomNavBar activeTab="Profile" navigation={navigation} />
        </View>
    );
}
