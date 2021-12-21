var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=BottomModal;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _styled=require("./styled");var _theme=require("../../theme");var _styles=require("../../styles");var _vectorIcons=require("@expo/vector-icons");var _jsxFileName="/Users/dawidsowinski/Documents/FamGenix/todo_list/src/screens/BottomModal/index.js";function BottomModal(_ref){var inputText=_ref.inputText,setInputText=_ref.setInputText,setIsFocused=_ref.setIsFocused,handleEditTask=_ref.handleEditTask,handleDeleteTask=_ref.handleDeleteTask,getInputStyle=_ref.getInputStyle;return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_styled.BottomModalView,{__self:this,__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:13}},_react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:17}},_react.default.createElement(_styled.ModalInputContainer,{__self:this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:21}},_react.default.createElement(_styled.ModalInputCounter,{__self:this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:25}},inputText.length,"/30")),_react.default.createElement(_styled.ModalInput,{placeholder:"Task name",placeholderTextColor:_theme.colors.PLACEHOLDER_COLOR,onChangeText:function onChangeText(text){return setInputText(text);},defaultValue:inputText,maxLength:30,style:getInputStyle,onFocus:function onFocus(){return setIsFocused(true);},onBlur:function onBlur(){return setIsFocused(false);},__self:this,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:21}}),_react.default.createElement(_styled.SaveButtonBox,{__self:this,__source:{fileName:_jsxFileName,lineNumber:46,columnNumber:21}},_react.default.createElement(_styled.SaveButton,{onPress:handleEditTask,__self:this,__source:{fileName:_jsxFileName,lineNumber:47,columnNumber:25}},_react.default.createElement(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:29}},"Save")))),_react.default.createElement(_reactNative.View,{style:_styles.styles.bottomSheetButtonsView,__self:this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:17}},_react.default.createElement(_styled.DeleteButton,{onPress:handleDeleteTask,__self:this,__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:21}},_react.default.createElement(_styled.DoneButtonText,{__self:this,__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:25}},_react.default.createElement(_vectorIcons.EvilIcons,{name:"trash",size:25,color:"black",__self:this,__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:29}}))))));}