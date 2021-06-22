import React, { useState } from "react";
import {
    Platform,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";

import { useTheme } from "@shopify/restyle";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../utils/theme";
import { Box } from "../../utils/restyle";
import Input from "./form_elements/Input";
import Button from "./form_elements/Button";

import * as Yup from "yup";
import { useFormik } from "formik";

const registerSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    confirm_password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

interface RegisterFormProps {
    onSubmit(data: {
        full_name: string;
        email: string;
        password: string;
    }): void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const theme = useTheme<Theme>();

    const formik = useFormik({
        initialValues: {
            full_name: "John Doe",
            email: "John@doe.com",
            password: "password",
            confirm_password: "password",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {},
    });
    return (
        <Box>
            <Box>
                <Input
                    error={
                        formik.errors.full_name
                            ? formik.errors.full_name
                            : undefined
                    }
                    onBlur={formik.handleBlur("full_name")}
                    placeholder="Full Name"
                    textInputProps={{
                        value: formik.values.full_name,
                        onChangeText: (v) =>
                            formik.handleChange("full_name")(v),
                    }}
                    icon={
                        !formik.errors.full_name ? (
                            <MaterialCommunityIcons
                                name="check"
                                size={24}
                                color={theme.colors.success}
                            />
                        ) : (
                            <Entypo
                                name="cross"
                                size={24}
                                color={theme.colors.error}
                            />
                        )
                    }
                />
                <Input
                    onBlur={formik.handleBlur("email")}
                    error={
                        formik.errors.email ? formik.errors.email : undefined
                    }
                    placeholder="E-mail"
                    textInputProps={{
                        value: formik.values.email,
                        onChangeText: (v) => formik.handleChange("email")(v),
                    }}
                    icon={
                        !formik.errors.email ? (
                            <MaterialCommunityIcons
                                name="check"
                                size={24}
                                color={theme.colors.success}
                            />
                        ) : (
                            <Entypo
                                name="cross"
                                size={24}
                                color={theme.colors.error}
                            />
                        )
                    }
                />
                <Input
                    onBlur={formik.handleBlur("password")}
                    error={
                        formik.errors.password
                            ? formik.errors.password
                            : undefined
                    }
                    placeholder="Password"
                    password
                    textInputProps={{
                        value: formik.values.password,
                        onChangeText: (v) => formik.handleChange("password")(v),
                    }}
                    icon={
                        !formik.errors.password ? (
                            <MaterialCommunityIcons
                                name="check"
                                size={24}
                                color={theme.colors.success}
                            />
                        ) : (
                            <Entypo
                                name="cross"
                                size={24}
                                color={theme.colors.error}
                            />
                        )
                    }
                />
                <Input
                    onBlur={formik.handleBlur("confirm_password")}
                    error={
                        formik.errors.confirm_password
                            ? formik.errors.confirm_password
                            : undefined
                    }
                    placeholder="Confirm Password"
                    password
                    textInputProps={{
                        value: formik.values.confirm_password,
                        onChangeText: (v) =>
                            formik.handleChange("confirm_password")(v),
                    }}
                    icon={
                        !formik.errors.confirm_password ? (
                            <MaterialCommunityIcons
                                name="check"
                                size={24}
                                color={theme.colors.success}
                            />
                        ) : (
                            <Entypo
                                name="cross"
                                size={24}
                                color={theme.colors.error}
                            />
                        )
                    }
                />
            </Box>
            <Button
                variant="PRIMARY"
                title={"SIGN UP"}
                onPress={() =>
                    onSubmit({
                        full_name: formik.values.full_name,
                        email: formik.values.password,
                        password: formik.values.password,
                    })
                }
            />
        </Box>
    );
};

export default RegisterForm;
