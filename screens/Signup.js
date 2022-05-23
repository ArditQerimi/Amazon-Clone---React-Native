import {
  Image,
  Text,
  View,
  Pressable,
  StatusBar,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import * as Yup from "yup";

import { getAuth, createUserWithEmailAndPassword } from "../firebase";

import Checkbox from "expo-checkbox";
const LoginFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(30)
    .required(<Text style={{ fontSize: 16 }}>Enter your name</Text>),
  email: Yup.string()
    .email(
      <View>
        <Text style={{ fontSize: 16 }}>
          ! Wrong or Invalid email address or
        </Text>
        <Text style={{ fontSize: 16 }}>
          mobile phone number. Please correct
        </Text>
        <Text style={{ fontSize: 16 }}>and try again.</Text>
      </View>
    )
    .required(<Text style={{ fontSize: 16 }}>Enter your email address</Text>),

  password: Yup.string()
    .min(
      6,
      <Text style={{ fontSize: 16 }}>
        Passwords must be at least 6 characters
      </Text>
    )
    .required(<Text style={{ fontSize: 16 }}>Enter your password</Text>),
});

const Signup = ({ navigation }) => {
  const [checked, setChecked] = React.useState("first");
  const [borderColor, setBorderColor] = React.useState();
  const [borderWidth, setBorderWidth] = React.useState(1);
  const [check, setCheck] = React.useState(false);

  const auth = getAuth();

  const onSignup = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);
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
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) =>
            onSignup(values.email, values.password, values.username)
          }
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            errors,
            touched,
          }) => (
            <View style={{}}>
              <View>
                {(errors.email &&
                  touched.email &&
                  errors.password &&
                  errors.name && (
                    <View
                      style={{
                        borderColor: "#d0424a",
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: "white",
                        margin: 25,
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 2,
                          borderColor: "#f0c1c4",
                          borderRadius: 5,
                          padding: 10,
                        }}
                      >
                        <View style={{ alignItems: "flex-start" }}>
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
                          <Text>{errors.name}</Text>

                          <Text>{errors.email}</Text>

                          <Text>{errors.password}</Text>
                        </View>
                      </View>
                    </View>
                  )) ||
                  (errors.email &&
                    touched.email &&
                    errors.password &&
                    touched.password && (
                      <View
                        style={{
                          borderColor: "#d0424a",
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "white",
                          margin: 25,
                        }}
                      >
                        <View
                          style={{
                            borderWidth: 2,
                            borderColor: "#f0c1c4",
                            borderRadius: 5,
                            padding: 10,
                          }}
                        >
                          <View style={{ alignItems: "flex-start" }}>
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

                            <Text>{errors.email}</Text>

                            <Text>{errors.password}</Text>
                          </View>
                        </View>
                      </View>
                    )) ||
                  (errors.name &&
                    touched.name &&
                    errors.password &&
                    touched.password && (
                      <View
                        style={{
                          borderColor: "#d0424a",
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "white",
                          margin: 25,
                        }}
                      >
                        <View
                          style={{
                            borderWidth: 2,
                            borderColor: "#f0c1c4",
                            borderRadius: 5,
                            padding: 10,
                          }}
                        >
                          <View style={{ alignItems: "flex-start" }}>
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
                            <Text>{errors.name}</Text>

                            <Text>{errors.password}</Text>
                          </View>
                        </View>
                      </View>
                    )) ||
                  (errors.name &&
                    touched.name &&
                    errors.email &&
                    touched.email && (
                      <View
                        style={{
                          borderColor: "#d0424a",
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "white",
                          margin: 25,
                        }}
                      >
                        <View
                          style={{
                            borderWidth: 2,
                            borderColor: "#f0c1c4",
                            borderRadius: 5,
                            padding: 10,
                          }}
                        >
                          <View style={{ alignItems: "flex-start" }}>
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
                            <Text>{errors.name}</Text>

                            <Text>{errors.email}</Text>
                          </View>
                        </View>
                      </View>
                    )) ||
                  (errors.name && touched.name && (
                    <View
                      style={{
                        borderColor: "#d0424a",
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: "white",
                        margin: 25,
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 2,
                          borderColor: "#f0c1c4",
                          borderRadius: 5,
                          padding: 10,
                        }}
                      >
                        <View style={{ alignItems: "flex-start" }}>
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
                          <Text>{errors.name}</Text>
                        </View>
                      </View>
                    </View>
                  )) ||
                  (errors.password && touched.password && (
                    <View
                      style={{
                        borderColor: "#d0424a",
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: "white",
                        margin: 25,
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 2,
                          borderColor: "#f0c1c4",
                          borderRadius: 5,
                          padding: 10,
                        }}
                      >
                        <View style={{ alignItems: "flex-start" }}>
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
                          <Text>{errors.password}</Text>
                        </View>
                      </View>
                    </View>
                  )) ||
                  (errors.email && touched.email && (
                    <View
                      style={{
                        borderColor: "#d0424a",
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: "white",
                        margin: 25,
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 2,
                          borderColor: "#f0c1c4",
                          borderRadius: 5,
                          padding: 10,
                        }}
                      >
                        <View style={{ alignItems: "flex-start" }}>
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
                          <Text>{errors.email}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                >
                  Welcome
                </Text>
              </View>
              {/* //////////////////////////////////////////////////////////// */}
              <View
                style={{
                  marginHorizontal: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 0,
                    backgroundColor: checked === "first" ? "white" : "#f3f4f8",
                  }}
                >
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                    color="orange"
                  />
                  <Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Create account.{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontSize: 16,
                      }}
                    >
                      New to Amazon?
                    </Text>
                  </Text>
                </View>
              </View>
              {checked === "first" ? (
                <View
                  style={{
                    marginHorizontal: 15,
                    backgroundColor: "white",
                    paddingVertical: 10,
                    marginBottom: 20,
                  }}
                >
                  <View>
                    <View>
                      <View style={{ marginHorizontal: 30 }}>
                        <Text
                          style={{
                            color: "#31383d",
                            fontWeight: "bold",
                            fontSize: 16,
                            marginTop: 14,
                          }}
                        >
                          First and last name
                        </Text>
                      </View>

                      <View style={{ margin: 10, alignItems: "center" }}>
                        <View style={{ margin: 10, alignItems: "center" }}>
                          <View style={{ marginBottom: 5, width: 300 }}>
                            <TextInput
                              autoCapitalize="none"
                              keyboardType="default"
                              textContentType="default"
                              autoFocus={true}
                              onChangeText={handleChange("name")}
                              onBlur={() => (
                                setBorderColor(""), setBorderWidth(1)
                              )}
                              value={values.name}
                              style={{
                                borderWidth,
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderColor,
                                borderRadius: 5,
                              }}
                              onFocus={() => (
                                setBorderColor("#f0c1c4"), setBorderWidth(2)
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginHorizontal: 30 }}>
                        <Text
                          style={{
                            color: "#31383d",
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        >
                          Mobile number or email
                        </Text>
                      </View>
                      <View style={{ margin: 10, alignItems: "center" }}>
                        <View style={{ marginBottom: 5, width: 300 }}>
                          <TextInput
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            autoFocus={true}
                            onChangeText={handleChange("email")}
                            onBlur={() => (
                              setBorderColor(""), setBorderWidth(1)
                            )}
                            value={values.email}
                            style={{
                              borderWidth,
                              paddingVertical: 10,
                              paddingHorizontal: 10,
                              borderColor,
                              borderRadius: 5,
                            }}
                            onFocus={() => (
                              setBorderColor("#f0c1c4"), setBorderWidth(2)
                            )}
                          />
                        </View>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginHorizontal: 30 }}>
                        <Text
                          style={{
                            color: "#31383d",
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        >
                          Create a password
                        </Text>
                      </View>
                      <View style={{ margin: 10, alignItems: "center" }}>
                        <View style={{ marginBottom: 5, width: 300 }}>
                          <TextInput
                            autoCapitalize="none"
                            textContentType="password"
                            autoFocus={true}
                            onChangeText={handleChange("password")}
                            onBlur={() => (
                              setBorderColor(""), setBorderWidth(1)
                            )}
                            secureTextEntry={!check ? true : false}
                            value={values.password}
                            style={{
                              borderWidth,
                              paddingVertical: 10,
                              paddingHorizontal: 10,
                              borderColor,
                              borderRadius: 5,
                            }}
                            onFocus={() => (
                              setBorderColor("#f0c1c4"), setBorderWidth(2)
                            )}
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
                              paddingRight: 150,
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
                        </View>

                        <View style={{ width: 300 }}>
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
                              Continue
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>

                    <View style={{ marginHorizontal: 30 }}>
                      <Text style={{ fontSize: 15 }}>
                        By continuing, you agree to Amazon's{" "}
                        <Text style={{ color: "#3e86c0" }}>
                          Conditions of Use{" "}
                        </Text>
                        and{" "}
                        <Text style={{ color: "#3e86c0" }}>
                          Privacy Notice.
                        </Text>
                      </Text>
                      <Text></Text>
                      <Text
                        style={{
                          color: "#3e86c0",
                          fontSize: 15,
                          marginBottom: 15,
                        }}
                      >
                        Need help?
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <></>
              )}
              {/* //////////////////////////////////////////////////////////// */}
              <View
                style={{
                  marginHorizontal: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: checked === "second" ? "white" : "#f3f4f8",
                  }}
                  onPress={() => navigation.navigate("Signin")}
                >
                  <RadioButton
                    value="second"
                    status={checked === "second" ? "checked" : "unchecked"}
                    color="orange"
                    onPress={() => navigation.navigate("Signin")}
                  />
                  <Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Sign-in.{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Already a customer?
                    </Text>
                  </Text>
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
            <Pressable onPress={() => navigation.navigate("Signin")}>
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

export default Signup;
