import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Button from "../components/forms/form_elements/Button";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import BottomTab from "../components/navigation/BottomTab";
import { Box, Text } from "../utils/restyle";

interface ComponentsScreenProps {}

const ComponentsScreen: React.FC<ComponentsScreenProps> = ({}) => {
    return (
        <Layout>
            <ScrollView style={styles.container}>
                <Box m="m">
                    <Text variant="headline">Form Elements</Text>
                    <Input placeholder="Input" />
                    <Button
                        title='PRIMARY'
                        variant='PRIMARY'
                        onPress={() => {}}
                    />
                        <Button
                        title='DEFAULT'
                        variant='DEFAULT'
                        onPress={() => {}}
                    />
                </Box>
                <Box marginVertical='m'>
                    <Text variant="headline" mb='m' marginHorizontal='m'>Navigation</Text>
                    <BottomTab route_name='Home' />
                </Box>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ComponentsScreen;
