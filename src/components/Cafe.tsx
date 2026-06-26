import { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Cat } from '../components/Cat';

const Cafe = () => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <>
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

            <View style={{ height: 20 }} />
            <Cat firstName="Ari" lastName="Kirk" isHungry={isHungry} />
            <Cat firstName="John" lastName="Lenon" />

            <View style={{ height: 10 }} />
            <View style={{ maxWidth: 400 }}>
                <Button
                    onPress={() => {
                        setIsHungry(!isHungry);
                    }}
                    title={
                        isHungry ? 'Give me some food, please' : 'Thank you!'
                    }
                />
            </View>
        </>
    );
};

export default Cafe;
