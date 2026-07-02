import { Image, ScrollView, Text } from 'react-native';

const logo = require('../../assets/images/icon.png');
const logoStyle = { width: 100, height: 100 };

const ScrollableView = () => (
    <ScrollView>
        <Text style={{ fontSize: 100 }}>Scroll me please!</Text>

        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />

        <Text style={{ fontSize: 100 }}>Scroll me please!</Text>
        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />

        <Text style={{ fontSize: 100 }}>Scroll me please!</Text>
        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />
        <Image source={logo} style={logoStyle} />
    </ScrollView>
);

export default ScrollableView;
