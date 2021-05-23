import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Input from "../components/forms/form_elements/Input";
import Layout from "../components/Layout";
import { Box, Text } from "../utils/restyle";

interface ComponentsScreenProps {}

const ComponentsScreen: React.FC<ComponentsScreenProps> = ({}) => {
    return (
        <Layout>
            <ScrollView style={styles.container}>
                <Box m="m">
                    <Text variant="headline">Form Elements</Text>
                    <Input placeholder="Input" />
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
