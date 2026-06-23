import { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Cat } from '../components/Cat';

const Cafe = () => {
    const [isHungry, setIsHungry] = useState(true);

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
            
            <Text>Add space here</Text>
            <Cat firstName="Ari" lastName="Kirk" isHungry={isHungry} />
            <Cat firstName="John" lastName="Lenon" />

            <Button
                onPress={() => {
                    setIsHungry(!isHungry);
                }}
                title={isHungry ? 'Give me some food, please' : 'Thank you!'}
            />
        </View>
    );
};

export default Cafe;
