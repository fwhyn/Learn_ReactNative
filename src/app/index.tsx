import { Image, Text, View } from 'react-native';
import { Cat } from '../components/Cat';

const Cafe = () => {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
            <Text>Hello!</Text>
            <Cat firstName="John" lastName="Lenon" />
            <Cat firstName="Ari" lastName="Kirk" />
        </View>
    );
};

export default Cafe;
