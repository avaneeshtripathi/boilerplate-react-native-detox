/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: () => JSX.Element = () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.welcomeTextCtr}>
                        <Text testID="welcome" style={styles.welcomeTextLabel}>
                            Welcome!
                        </Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Button testID="hello_button" title="Tap Here" onPress={() => alert('Hello world!')} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    welcomeTextCtr: {
        paddingVertical: 40,
        backgroundColor: Colors.white,
        alignItems: 'center',
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    },
    welcomeTextLabel: {
        color: Colors.black,
        fontSize: 24,
    },
});

export default App;
