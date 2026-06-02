import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <Text style={{ fontSize: 14 }}>Content is in safe area.</Text>
        </View>
    );
}

export default function Index() {
    return <HomeScreen />;
}
