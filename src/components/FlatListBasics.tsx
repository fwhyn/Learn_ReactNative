import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 30,
    },
});

export default function FlatListBasics() {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Yana' },
                    { key: 'Yelsa' },
                    { key: 'Yesna' },
                    { key: 'Yana1' },
                    { key: 'Yelsa1' },
                    { key: 'Yesna1' },
                    { key: 'Yana2' },
                    { key: 'Yelsa2' },
                    { key: 'Yesna2' },
                    { key: 'Yana3' },
                    { key: 'Yelsa3' },
                    { key: 'Yesna3' },
                    { key: 'Yana4' },
                    { key: 'Yelsa4' },
                    { key: 'Yesna4' },
                    { key: 'Yana5' },
                    { key: 'Yelsa5' },
                    { key: 'Yesna5' },
                    { key: 'Yana6' },
                    { key: 'Yelsa6' },
                    { key: 'Yesna6' },
                    { key: 'Yana7' },
                    { key: 'Yelsa7' },
                    { key: 'Yesna7' },
                    { key: 'Yana8' },
                    { key: 'Yelsa8' },
                    { key: 'Yesna8' },
                    { key: 'Yana9' },
                    { key: 'Yelsa9' },
                    { key: 'Yesna9' },
                    { key: 'Yana10' },
                    { key: 'Yelsa10' },
                    { key: 'Yesna10' }
                ]}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.key}</Text>
                )}
            />
        </View>
    );
}
