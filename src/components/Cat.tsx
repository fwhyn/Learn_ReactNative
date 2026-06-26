import { Text } from 'react-native';
import { CatProps } from '../types/CatProps';

export const Cat = ({ firstName, lastName, isHungry = true }: CatProps) => {
    return (
        <Text>
            I am {firstName} {lastName} and I am {isHungry ? 'hungry' : 'full'}
        </Text>
    );
};
