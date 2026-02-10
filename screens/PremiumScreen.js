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
            duration: '99 Days Premium',
            price: '₹99',
            originalPrice: '₹999',
            save: 'Save 90%',
            features: [
                'Ad-free experience',
                'Unlimited access to all videos',
                'Download for offline viewing',
                'Priority customer support',
                'Exclusive webinars access'
            ],
            popular: true,
            color: ['#3399FF', '#0088FF']
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
                                    activeOpacity={0.8}
                                    className="w-full rounded-xl shadow-md overflow-hidden"
                                >
                                    <LinearGradient
                                        colors={plan.color}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="w-full py-4 items-center justify-center"
                                    >
                                        <Text className="text-white font-bold text-lg">Subscribe Now</Text>
                                    </LinearGradient>
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
