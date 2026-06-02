import { useAssets } from 'expo-asset';
import { Image, Text } from 'react-native';

function HomeScreen() {
    const [assets, error] = useAssets([
        require('@/assets/images/react-logo.png'),
        require('@/assets/images/icon.png'),
    ]);

    if (error) {
        return <Text>Unable to load assets.</Text>;
    }

    return assets ? (
        <Image
            source={{ uri: assets[1].uri }}
            style={{ width: 100, height: 100 }}
        />
    ) : null;
}

export default function Index() {
    return <HomeScreen />;
}
