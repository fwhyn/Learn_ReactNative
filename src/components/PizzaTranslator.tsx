import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function PizzaTranslator() {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                placeholder="Type here to translate!"
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
                style={{
                    height: 30,
                    padding: 2,
                    marginHorizontal: 4,
                    borderWidth: 1,
                }}
            />
            <Text style={{ padding: 2, fontSize: 42 }}>
                {text
                    .split(' ')
                    .map((word) => word && '🍕')
                    .join('*')}
            </Text>
        </View>
    );
}
