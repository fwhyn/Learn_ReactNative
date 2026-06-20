import { Text } from 'react-native';
import CatProps from '../types/CatProps';

const Cat = (props: CatProps) => {
    return (
        <Text>
            I am {props.firstName} {props.lastName}.
        </Text>
    );
};

export default Cat;
