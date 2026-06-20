import { Text, View } from 'react-native';
import Cat from '../components/Cat';

const Cafe = () => {
    return (
        <View>
            <Text>Hello!!!</Text>
            <Cat firstName="John" lastName="Lenon" />
        </View>
    );
};

export default Cafe;
