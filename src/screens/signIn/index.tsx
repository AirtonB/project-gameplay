
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    StatusBar
} from 'react-native';
import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
    // const [text, setText] = useState('lorem');
    return (
        <View style={styles.container} >
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent />
            <Image source={IlustrationImg} style={styles.image}
                resizeMode='stretch' />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{`\n`}
                    your {`\n`}
                    gameplays!{`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Community {`\n`}
                    and more{`\n`}
                    by: AirtonB{`\n`}
                </Text>

                <ButtonIcon
                    title="Entrar no discord"
                    activeOpacity={0.7} />
            </View>
        </View>
    );
}