var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.fetchData=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _axios=_interopRequireDefault(require("axios"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var API_URL='https://sheet.best/api/sheets/8032dfa7-ce66-4f6c-ae98-e488176d3f5e';var fetchData=function fetchData(method){var body,path,response,_args=arguments;return _regenerator.default.async(function fetchData$(_context){while(1){switch(_context.prev=_context.next){case 0:body=_args.length>1&&_args[1]!==undefined?_args[1]:null;path=_args.length>2&&_args[2]!==undefined?_args[2]:'';_context.prev=2;_context.next=5;return _regenerator.default.awrap((0,_axios.default)({method:method,url:""+API_URL+path,data:body?_objectSpread({},body):undefined}));case 5:response=_context.sent;return _context.abrupt("return",response);case 9:_context.prev=9;_context.t0=_context["catch"](2);console.log('index.js (23) - error',_context.t0);return _context.abrupt("return",{isFetchError:true});case 13:case"end":return _context.stop();}}},null,null,[[2,9]],Promise);};exports.fetchData=fetchData;