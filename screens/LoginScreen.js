import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CheckCircle } from 'lucide-react-native';

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                    <View className="px-8 py-6 items-center">
                        {/* Logo */}
                        <View className="items-center mb-8">
                            <Image
                                source={require('../assets/logo.jpeg')}
                                className="w-24 h-24 rounded-full"
                                resizeMode="cover"
                            />
                        </View>

                        <Text className="text-2xl font-bold text-slate-800 mb-8">Login to your Account</Text>

                        {/* Google Login Button */}
                        <View className="flex-row justify-center space-x-4 mb-6">
                            <TouchableOpacity className="w-16 h-16 bg-white rounded-2xl items-center justify-center border border-slate-100 shadow-sm elevation-2">
                                <Image
                                    source={{ uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" }}
                                    className="w-8 h-8"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <Text className="text-slate-500 text-sm mb-6">Or sign in with</Text>

                        {/* Form */}
                        <View className="w-full space-y-4">
                            <View>
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#94a3b8"
                                    className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 text-slate-700 font-medium"
                                />
                            </View>

                            <View>
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#94a3b8"
                                    secureTextEntry
                                    className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 text-slate-700 font-medium"
                                />
                            </View>

                            <TouchableOpacity
                                className="w-full h-14 bg-blue-500 rounded-xl items-center justify-center shadow-lg shadow-blue-200 mt-4"
                                onPress={() => navigation.replace('Home')}
                            >
                                <Text className="text-white font-bold text-lg">Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Footer */}
                        <View className="flex-row mt-8">
                            <Text className="text-slate-500 font-medium">Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                                <Text className="text-blue-500 font-bold">Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
