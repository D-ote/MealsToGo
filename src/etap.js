// // View
// import React from "react";
// import { View } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class Qiew extends React.Component {
//   render = () => (
//     <View {...this.props} style={[viewStyles(this.props), this.props.style]} />
//   );
// }

// // Text
// import React from "react";
// import { Text } from "react-native";
// import { textStyles } from "../../utils/StylesGenerator";

// export class Qext extends React.Component {
//   render() {
//     return (
//       <Text
//         allowFontScaling={false}
//         {...this.props}
//         style={[textStyles(this.props), this.props.style]}
//       />
//     );
//   }
// }

// // Touch
// import React from "react";
// import { TouchableOpacity } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class Qouch extends React.Component {
//   render() {
//     return (
//       <TouchableOpacity
//         {...this.props}
//         style={[viewStyles(this.props), this.props.style]}
//       />
//     );
//   }
// }

// // scroll
// import React from "react";
// import { ScrollView } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class Qcroll extends React.Component {
//   render() {
//     return (
//       <ScrollView
//         {...this.props}
//         style={[viewStyles(this.props), this.props.style]}
//       />
//     );
//   }
// }

// // pressable
// import React from "react";
// import { Pressable } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class Qressable extends React.Component {
//   render = () => (
//     <Pressable
//       {...this.props}
//       style={[viewStyles(this.props), this.props.style]}
//     />
//   );
// }

// // noeffect
// import React from "react";
// import { TouchableWithoutFeedback } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class NoFeedBack extends React.Component {
//   render() {
//     return (
//       <TouchableWithoutFeedback
//         {...this.props}
//         style={[viewStyles(this.props), this.props.style]}
//       />
//     );
//   }
// }

// // image
// import React from "react";
// import { I18nManager, Image } from "react-native";
// import { viewStyles } from "../../utils/StylesGenerator";

// export class Qmage extends React.Component {
//   render() {
//     const { contain, stretch, cover, center } = this.props;
//     return (
//       <Image
//         {...this.props}
//         resizeMode={
//           contain
//             ? "contain"
//             : cover
//             ? "cover"
//             : stretch
//             ? "stretch"
//             : center
//             ? "center"
//             : "contain"
//         }
//         style={[
//           { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] },
//           viewStyles(this.props),
//           this.props.style,
//         ]}
//       />
//     );
//   }
// }

// // spinner
// import React, { Component } from "react";
// import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
// import PropTypes from "prop-types";
// import { PRIMARY } from "../../utils/Colors.ts";

// const { bool, any, string } = PropTypes;

// const Base = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignSelf: "center",
//   },
//   centering: {
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 8,
//   },
//   center: {},
//   bottom: {
//     position: "absolute",
//     bottom: 0,
//   },
// });

// class Spinner extends Component {
//   static propTypes = {
//     children: any,
//     center: bool,
//     bottom: bool,
//     backHandler: bool,
//     spinnerColor: string,
//     spinnerSize: string,
//   };

//   render() {
//     const {
//       text,
//       spinnerStyle,
//       textStyle,
//       center,
//       //bottom,
//       spinnerColor,
//       spinnerSize,
//     } = this.props;
//     return (
//       <View
//         style={[
//           Base.container,
//           center ? Base.centering : Base.bottom,
//           spinnerStyle,
//         ]}
//       >
//         <ActivityIndicator
//           animating
//           color={spinnerColor || PRIMARY}
//           style={[Base.centering, {}]}
//           size={spinnerSize || "large"}
//         />
//         <Text style={textStyle}>{text || "Please Wait..."}</Text>
//       </View>
//     );
//   }
// }

// export { Spinner };
