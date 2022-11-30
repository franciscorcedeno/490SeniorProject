import React from "react";
import { View, Text, StyleSheet, Dimensions, Button, TextInput, TouchableOpacity } from "react-native";
import { colors, parameters, title } from "../../constants/styles";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { SCREEN_NAMES } from "../../constants/navigation";
import { Screen } from "../../components/layout/Screen";

export function MyMealsScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
                <Text>MyMeals</Text>
            </TouchableOpacity>
        </View>
    )
}