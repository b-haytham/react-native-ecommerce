import React from "react";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box } from "../../utils/restyle";
import Input from "./form_elements/Input";
import Button from "./form_elements/Button";

import * as Yup from "yup";
import { useFormik } from "formik";

interface LoginFormProps {
    onSubmit(data: { email: string; password: string }): void;
}

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const theme = useTheme<Theme>();

    const formik = useFormik({
        initialValues: {
            email: "John@doe.com",
            password: "password",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {},
    });

    console.log(formik.errors);
    return (
        <Box>
            <Input
            error={formik.errors.email ? formik.errors.email : undefined}
                placeholder="E-mail"
                onBlur={formik.handleBlur("email")}
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
            error={formik.errors.password ? formik.errors.password : undefined}

                placeholder="Password"
                onBlur={formik.handleBlur("password")}
                textInputProps={{
                    value: formik.values.password,
                    onChangeText: (v) => formik.handleChange("password")(v),
                }}
                password
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

            <Button
                variant="PRIMARY"
                title={"SIGN IN"}
                onPress={() =>
                    onSubmit({
                        email: formik.values.email,
                        password: formik.values.password,
                    })
                }
            />
        </Box>
    );
};

export default LoginForm;
