var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.BottomSheetHeaderClose=exports.BottomSheetHeaderBox=void 0;var _native=_interopRequireDefault(require("@emotion/native"));var BottomSheetHeaderBox=_native.default.View({flexDirection:'row',padding:15,width:300,display:'flex',justifyContent:'space-between'});exports.BottomSheetHeaderBox=BottomSheetHeaderBox;var BottomSheetHeaderClose=_native.default.TouchableOpacity({width:20,height:20,alignItems:'center',justifyContent:'center'});exports.BottomSheetHeaderClose=BottomSheetHeaderClose;