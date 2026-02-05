import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Check, Crown, Star } from 'lucide-react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function PremiumScreen({ navigation }) {
    const plans = [
        {
            id: 1,
            duration: '1 Month',
            price: '₹199',
            originalPrice: '₹299',
            save: 'Save 33%',
            features: ['Ad-free experience', 'Unlimited access to all videos', 'Download for offline viewing'],
            color: ['#60A5FA', '#3B82F6']
        },
        {
            id: 2,
            duration: '3 Months',
            price: '₹499',
            originalPrice: '₹897',
            save: 'Save 45%',
            features: ['All monthly features', 'Priority support', 'Exclusive webinars'],
            popular: true,
            color: ['#F59E0B', '#D97706']
        },
        {
            id: 3,
            duration: '6 Months',
            price: '₹899',
            originalPrice: '₹1,794',
            save: 'Save 50%',
            features: ['All 3-month features', '1-on-1 financial session', 'Certificate of completion'],
            color: ['#8B5CF6', '#7C3AED']
        },
        {
            id: 4,
            duration: '1 Year',
            price: '₹1,499',
            originalPrice: '₹3,588',
            save: 'Save 60%',
            features: ['All 6-month features', 'Personalized financial plan', 'Lifetime community access'],
            color: ['#10B981', '#059669']
        }
    ];

    return (
        <View className="flex-1 bg-[#F5F7FA]">
            <StatusBar style="dark" />

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="pt-12 pb-6 px-6 bg-white rounded-b-[30px] shadow-sm mb-6">
                    <View className="items-center mb-4">
                        <View className="w-16 h-16 bg-amber-100 rounded-full items-center justify-center mb-3">
                            <Crown size={32} color="#D97706" fill="#D97706" />
                        </View>
                        <Text className="text-2xl font-bold text-slate-800">Go Premium</Text>
                        <Text className="text-slate-500 text-center mt-1">Unlock your full financial potential with exclusive access</Text>
                    </View>
                </View>

                {/* Plans */}
                <View className="px-6 space-y-6">
                    {plans.map((plan) => (
                        <TouchableOpacity
                            key={plan.id}
                            activeOpacity={0.9}
                            className="bg-white rounded-[24px] overflow-hidden shadow-lg shadow-blue-100 border border-slate-100 relative"
                        >
                            {plan.popular && (
                                <View className="absolute top-0 right-0 bg-amber-500 px-3 py-1 rounded-bl-xl z-10">
                                    <Text className="text-white text-xs font-bold">MOST POPULAR</Text>
                                </View>
                            )}

                            <LinearGradient
                                colors={[plan.color[0] + '20', '#ffffff']}
                                className="p-6"
                            >
                                <View className="flex-row justify-between items-start mb-4">
                                    <View>
                                        <Text className="text-lg font-bold text-slate-800">{plan.duration}</Text>
                                        <View className="bg-green-100 px-2 py-1 rounded-md self-start mt-2">
                                            <Text className="text-green-700 text-xs font-bold">{plan.save}</Text>
                                        </View>
                                    </View>
                                    <View className="items-end">
                                        <Text className="text-3xl font-bold text-slate-800">{plan.price}</Text>
                                        <Text className="text-slate-400 text-sm line-through">{plan.originalPrice}</Text>
                                    </View>
                                </View>

                                <View className="w-full h-[1px] bg-slate-100 mb-4" />

                                <View className="space-y-3 mb-6">
                                    {plan.features.map((feature, index) => (
                                        <View key={index} className="flex-row items-center space-x-3">
                                            <View className="w-5 h-5 rounded-full bg-green-500 items-center justify-center">
                                                <Check size={12} color="white" strokeWidth={3} />
                                            </View>
                                            <Text className="text-slate-600 text-sm font-medium flex-1">{feature}</Text>
                                        </View>
                                    ))}
                                </View>

                                <TouchableOpacity
                                    className="w-full py-4 rounded-xl items-center justify-center shadow-md"
                                    style={{ backgroundColor: plan.color[1] }}
                                >
                                    <Text className="text-white font-bold text-lg">Subscribe Now</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <BottomNavBar activeTab="Premium" navigation={navigation} />
        </View>
    );
}
