import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../../utils/restyle";


import FacebookLogo from "../../logos/FacebookLogo";
import GoogleLogo from "../../logos/GoogleLogo";

interface SocialProps {
    title: string;
}

const Social: React.FC<SocialProps> = ({ title }) => {
    return (
        <Box marginHorizontal="m" alignItems="center">
            <Text opacity={.8} fontWeight='bold'  marginBottom="m" marginTop="l" variant="body">
                {title}
            </Text>
            <Box
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <TouchableOpacity>
                    <Box
                        backgroundColor="white"
                        borderRadius="m"
                        padding="m"
                        marginHorizontal="m"
                    >
                        <GoogleLogo width={30} height={30} />
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box
                        backgroundColor="white"
                        borderRadius="m"
                        padding="m"
                        marginHorizontal="m"
                    >
                        <FacebookLogo width={30} height={30} />
                    </Box>
                </TouchableOpacity>
            </Box>
        </Box>
    );
};

export default Social;
