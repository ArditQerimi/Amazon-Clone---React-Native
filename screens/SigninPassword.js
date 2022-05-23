import {
  Image,
  Text,
  View,
  Pressable,
  StatusBar,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "../firebase";
import Checkbox from "expo-checkbox";

const LoginFormSchema = Yup.object().shape({
  password: Yup.string()
    // .min(6)
    .required(
      <View
        style={{
          backgroundColor: "white",
          marginTop: 15,
          borderRadius: 5,
        }}
      >
        <View
          style={{ borderColor: "#d0424a", borderWidth: 1, borderRadius: 5 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "#f0c1c4",
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#c81641",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              There was a problem
            </Text>
            <Text style={{ fontSize: 16 }}>Enter your password</Text>
          </View>
        </View>
      </View>
    ),
});

const auth = getAuth();
const SigninPassword = ({ navigation, route }) => {
  const [check, setCheck] = React.useState(false);
  const [error, setError] = useState();

  const onLogin = async (email, password) => {
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(
        <View
          style={{
            backgroundColor: "white",
            marginTop: 15,
            borderRadius: 5,
          }}
        >
          <View
            style={{ borderColor: "#d0424a", borderWidth: 1, borderRadius: 5 }}
          >
            <View
              style={{
                borderWidth: 2,
                borderColor: "#f0c1c4",
                borderRadius: 5,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "#c81641",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                There was a problem
              </Text>
              <Text style={{ fontSize: 16 }}>Your password is incorrect</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView>
      <>
        <View
          style={{
            backgroundColor: "#f3f4f8",
            alignItems: "center",
            borderColor: "#c1c2c5",
            borderBottomWidth: 1,
            paddingTop: StatusBar.currentHeight,
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../assets/amazonlogo.png")}
            resizeMode="contain"
            style={{ width: 90, height: 40 }}
          />
        </View>
        <Formik
          style={{
            flex: 1,
            backgroundColor: "#f3f4f8",
          }}
          initialValues={{ password: "" }}
          onSubmit={(values) => onLogin(route.params?.email, values.password)}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <View style={{ alignItems: "center" }}>
                {errors.password && touched.password && (
                  <>
                    <Text>{errors.password}</Text>
                  </>
                )}
              </View>
              <View style={{ alignItems: "center" }}>
                {error && values.password.length > 0 && (
                  <>
                    <Text>{error}</Text>
                  </>
                )}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                >
                  Sign-In
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    paddingLeft: 15,
                  }}
                >
                  {route.params?.email}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3e86c0",
                    paddingVertical: 5,
                  }}
                >
                  Change
                </Text>
              </View>

              {/* //////////////////////////////////////////////////////////// */}

              <View
                style={{
                  marginHorizontal: 15,
                  marginBottom: 50,
                }}
              >
                <View>
                  <View>
                    <View>
                      <View style={{ marginHorizontal: 10 }}>
                        <Text
                          style={{
                            color: "#31383d",
                            fontWeight: "bold",
                            fontSize: 16,
                            marginTop: 5,
                          }}
                        >
                          Amazon Password
                        </Text>
                      </View>
                      <View style={{ margin: 10, alignItems: "center" }}>
                        <View style={{ marginBottom: 5, width: 350 }}>
                          <TextInput
                            autoCapitalize="none"
                            // keyboardType="visible-password"
                            textContentType="password"
                            autoFocus={true}
                            secureTextEntry={!check ? true : false}
                            onChangeText={handleChange("password")}
                            value={values.password}
                            style={{
                              borderWidth: 1,
                              paddingVertical: 10,
                              paddingHorizontal: 10,
                              backgroundColor: "white",
                              borderRadius: 5,
                            }}
                          />
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: 20,
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              paddingRight: 40,
                            }}
                          >
                            <Checkbox
                              value={check}
                              onValueChange={setCheck}
                              style={{ paddingRight: 15 }}
                            />
                            <Text style={{ paddingLeft: 15 }}>
                              Show Password
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              paddingLeft: 40,
                            }}
                          >
                            <Text style={{ color: "#3e86c0" }}>
                              Forgot password?
                            </Text>
                          </View>
                        </View>

                        <View style={{ width: 350, paddingTop: 10 }}>
                          <Pressable
                            onPress={handleSubmit}
                            style={{
                              backgroundColor: "#f3d27e",
                              borderColor: "#aa9754",
                              borderWidth: 1,
                              borderRadius: 5,
                              alignItems: "center",
                              marginBottom: 5,
                            }}
                          >
                            <Text
                              style={{
                                paddingVertical: 10,
                                color: "#463000",
                                fontSize: 16,
                              }}
                            >
                              Sign-In
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </>
      {/* ///////////////// FOOTER ///////////////////// */}

      <View
        style={{ borderTopWidth: 1, borderColor: "#c1c2c5", paddingTop: 30 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 10,
          }}
        >
          <View>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: "#3e86c0", fontSize: 16 }}>
                Conditions of Use
              </Text>
            </Pressable>
          </View>
          <View>
            <Text style={{ color: "#3e86c0", fontSize: 16 }}>
              Privacy Notice
            </Text>
          </View>
          <View>
            <Text style={{ color: "#3e86c0", fontSize: 16 }}>Help</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ alignItems: "center", fontSize: 12 }}>
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SigninPassword;
