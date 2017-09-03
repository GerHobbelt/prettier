var graphql = (function () {
function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var parserGraphql_1 = createCommonjsModule(function (module) {
"use strict";function createError(e,n){const r=new SyntaxError(e+" ("+n.start.line+":"+n.start.column+")");return r.loc=n,r}function createCommonjsModule$$1(e,n){return n={exports:{}},e(n,n.exports),n.exports}function parseComments(e){const n=[];let r=e.loc.startToken.next;for(;"<EOF>"!==r.kind;)"Comment"===r.kind&&(Object.assign(r,{column:r.column-1}),n.push(r)),r=r.next;return n}function removeTokens(e){if(e&&"object"==typeof e){delete e.startToken,delete e.endToken,delete e.prev,delete e.next;for(const n in e)removeTokens(e[n]);}return e}function parse(e){const n=language;try{const r=n.parse(e);return r.comments=parseComments(r),removeTokens(r),r}catch(e){throw e instanceof error.GraphQLError?parserCreateError(e.message,{start:{line:e.locations[0].line,column:e.locations[0].column}}):e}}var parserCreateError=createError,location=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getLocation=function(e,n){for(var r=/\r\n|[\n\r]/g,t=1,i=n+1,o=void 0;(o=r.exec(e.body))&&o.index<n;)t+=1,i=n+1-(o.index+o[0].length);return{line:t,column:i}};}),GraphQLError_1=createCommonjsModule$$1(function(e,n){function r(e,n,t,i,o,a){var u=t;if(!u&&n&&n.length>0){var c=n[0];u=c&&c.loc&&c.loc.source;}var l=i;!l&&n&&(l=n.filter(function(e){return Boolean(e.loc)}).map(function(e){return e.loc.start})),l&&0===l.length&&(l=void 0);var s=void 0,d=u;d&&l&&(s=l.map(function(e){return(0,location.getLocation)(d,e)})),Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:s||void 0,enumerable:!0},path:{value:o||void 0,enumerable:!0},nodes:{value:n||void 0},source:{value:u||void 0},positions:{value:l||void 0},originalError:{value:a}}),a&&a.stack?Object.defineProperty(this,"stack",{value:a.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0});}Object.defineProperty(n,"__esModule",{value:!0}),n.GraphQLError=r,r.prototype=Object.create(Error.prototype,{constructor:{value:r},name:{value:"GraphQLError"}});}),syntaxError_1=createCommonjsModule$$1(function(e,n){function r(e,n){var r=n.line,a=e.locationOffset.line-1,u=t(e,n),c=r+a,l=(c-1).toString(),s=c.toString(),d=(c+1).toString(),f=d.length,v=e.body.split(/\r\n|[\n\r]/g);return v[0]=i(e.locationOffset.column-1)+v[0],(r>=2?o(f,l)+": "+v[r-2]+"\n":"")+o(f,s)+": "+v[r-1]+"\n"+i(2+f+n.column-1+u)+"^\n"+(r<v.length?o(f,d)+": "+v[r]+"\n":"")}function t(e,n){return 1===n.line?e.locationOffset.column-1:0}function i(e){return Array(e+1).join(" ")}function o(e,n){return i(e-n.length)+n}Object.defineProperty(n,"__esModule",{value:!0}),n.syntaxError=function(e,n,i){var o=(0,location.getLocation)(e,n),a=o.line+e.locationOffset.line-1,u=t(e,o),c=o.column+u;return new GraphQLError_1.GraphQLError("Syntax Error "+e.name+" ("+a+":"+c+") "+i+"\n\n"+r(e,o),void 0,e,[n])};}),locatedError_1=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.locatedError=function(e,n,r){if(e&&e.path)return e;var t=e?e.message||String(e):"An unknown error occurred.";return new GraphQLError_1.GraphQLError(t,e&&e.nodes||n,e&&e.source,e&&e.positions,r,e)};}),invariant_1=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!e)throw new Error(n)};}),formatError_1=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.formatError=function(e){return e||(0,r.default)(0,"Received null or undefined error."),{message:e.message,locations:e.locations,path:e.path}};var r=function(e){return e&&e.__esModule?e:{default:e}}(invariant_1);}),error=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"GraphQLError",{enumerable:!0,get:function(){return GraphQLError_1.GraphQLError}}),Object.defineProperty(n,"syntaxError",{enumerable:!0,get:function(){return syntaxError_1.syntaxError}}),Object.defineProperty(n,"locatedError",{enumerable:!0,get:function(){return locatedError_1.locatedError}}),Object.defineProperty(n,"formatError",{enumerable:!0,get:function(){return formatError_1.formatError}});}),lexer=createCommonjsModule$$1(function(e,n){function r(){var e=this.lastToken=this.token;if(e.kind!==T){do{e=e.next=o(this,e);}while(e.kind===R);this.token=e;}return e}function t(e,n,r,t,i,o,a){this.kind=e,this.start=n,this.end=r,this.line=t,this.column=i,this.value=a,this.prev=o,this.next=null;}function i(e){return isNaN(e)?T:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'+("00"+e.toString(16).toUpperCase()).slice(-4)+'"'}function o(e,n){var r=e.source,o=r.body,s=o.length,f=u(o,n.end,e),v=e.line,E=1+f-e.lineStart;if(f>=s)return new t(T,s,s,v,E,n);var L=K.call(o,f);if(L<32&&9!==L&&10!==L&&13!==L)throw(0,error.syntaxError)(r,f,"Cannot contain the invalid character "+i(L)+".");switch(L){case 33:return new t(k,f,f+1,v,E,n);case 35:return c(r,f,v,E,n);case 36:return new t(m,f,f+1,v,E,n);case 40:return new t(y,f,f+1,v,E,n);case 41:return new t(N,f,f+1,v,E,n);case 46:if(46===K.call(o,f+1)&&46===K.call(o,f+2))return new t(I,f,f+3,v,E,n);break;case 58:return new t(O,f,f+1,v,E,n);case 61:return new t(_,f,f+1,v,E,n);case 64:return new t(h,f,f+1,v,E,n);case 91:return new t(x,f,f+1,v,E,n);case 93:return new t(A,f,f+1,v,E,n);case 123:return new t(g,f,f+1,v,E,n);case 124:return new t(D,f,f+1,v,E,n);case 125:return new t(b,f,f+1,v,E,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return p(r,f,v,E,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l(r,f,L,v,E,n);case 34:return d(r,f,v,E,n)}throw(0,error.syntaxError)(r,f,a(L))}function a(e){return 39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character "+i(e)+"."}function u(e,n,r){for(var t=e.length,i=n;i<t;){var o=K.call(e,i);if(9===o||32===o||44===o||65279===o)++i;else if(10===o)++i,++r.line,r.lineStart=i;else{if(13!==o)break;10===K.call(e,i+1)?i+=2:++i,++r.line,r.lineStart=i;}}return i}function c(e,n,r,i,o){var a=e.body,u=void 0,c=n;do{u=K.call(a,++c);}while(null!==u&&(u>31||9===u));return new t(R,n,c,r,i,o,F.call(a,n+1,c))}function l(e,n,r,o,a,u){var c=e.body,l=r,d=n,f=!1;if(45===l&&(l=K.call(c,++d)),48===l){if((l=K.call(c,++d))>=48&&l<=57)throw(0,error.syntaxError)(e,d,"Invalid number, unexpected digit after 0: "+i(l)+".")}else d=s(e,d,l),l=K.call(c,d);return 46===l&&(f=!0,l=K.call(c,++d),d=s(e,d,l),l=K.call(c,d)),69!==l&&101!==l||(f=!0,43!==(l=K.call(c,++d))&&45!==l||(l=K.call(c,++d)),d=s(e,d,l)),new t(f?C:S,n,d,o,a,u,F.call(c,n,d))}function s(e,n,r){var t=e.body,o=n,a=r;if(a>=48&&a<=57){do{a=K.call(t,++o);}while(a>=48&&a<=57);return o}throw(0,error.syntaxError)(e,o,"Invalid number, expected digit but got: "+i(a)+".")}function d(e,n,r,o,a){for(var u=e.body,c=n+1,l=c,s=0,d="";c<u.length&&null!==(s=K.call(u,c))&&10!==s&&13!==s&&34!==s;){if(s<32&&9!==s)throw(0,error.syntaxError)(e,c,"Invalid character within String: "+i(s)+".");if(++c,92===s){switch(d+=F.call(u,l,c-1),s=K.call(u,c)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var v=f(K.call(u,c+1),K.call(u,c+2),K.call(u,c+3),K.call(u,c+4));if(v<0)throw(0,error.syntaxError)(e,c,"Invalid character escape sequence: \\u"+u.slice(c+1,c+5)+".");d+=String.fromCharCode(v),c+=4;break;default:throw(0,error.syntaxError)(e,c,"Invalid character escape sequence: \\"+String.fromCharCode(s)+".")}l=++c;}}if(34!==s)throw(0,error.syntaxError)(e,c,"Unterminated string.");return d+=F.call(u,l,c),new t(P,n,c+1,r,o,a,d)}function f(e,n,r,t){return v(e)<<12|v(n)<<8|v(r)<<4|v(t)}function v(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function p(e,n,r,i,o){for(var a=e.body,u=a.length,c=n+1,l=0;c!==u&&null!==(l=K.call(a,c))&&(95===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122);)++c;return new t(L,n,c,r,i,o,F.call(a,n,c))}Object.defineProperty(n,"__esModule",{value:!0}),n.TokenKind=void 0,n.createLexer=function(e,n){var i=new t(E,0,0,0,0,null);return{source:e,options:n,lastToken:i,token:i,line:1,lineStart:0,advance:r}},n.getTokenDesc=function(e){var n=e.value;return n?e.kind+' "'+n+'"':e.kind};var E="<SOF>",T="<EOF>",k="!",m="$",y="(",N=")",I="...",O=":",_="=",h="@",x="[",A="]",g="{",D="|",b="}",L="Name",S="Int",C="Float",P="String",R="Comment",K=(n.TokenKind={SOF:E,EOF:T,BANG:k,DOLLAR:m,PAREN_L:y,PAREN_R:N,SPREAD:I,COLON:O,EQUALS:_,AT:h,BRACKET_L:x,BRACKET_R:A,BRACE_L:g,PIPE:D,BRACE_R:b,NAME:L,INT:S,FLOAT:C,STRING:P,COMMENT:R},String.prototype.charCodeAt),F=String.prototype.slice;t.prototype.toJSON=t.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}};}),source=createCommonjsModule$$1(function(e,n){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Source=void 0;var t=function(e){return e&&e.__esModule?e:{default:e}}(invariant_1);n.Source=function e(n,i,o){r(this,e),this.body=n,this.name=i||"GraphQL request",this.locationOffset=o||{line:1,column:1},this.locationOffset.line>0||(0,t.default)(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||(0,t.default)(0,"column in locationOffset is 1-indexed and must be positive");};}),kinds=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.VARIABLE="Variable",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.TYPE_EXTENSION_DEFINITION="TypeExtensionDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition";}),parser=createCommonjsModule$$1(function(e,n){function r(e){var n=X(e,lexer.TokenKind.NAME);return{kind:kinds.NAME,value:n.value,loc:J(e,n)}}function t(e){var n=e.token;X(e,lexer.TokenKind.SOF);var r=[];do{r.push(i(e));}while(!H(e,lexer.TokenKind.EOF));return{kind:kinds.DOCUMENT,definitions:r,loc:J(e,n)}}function i(e){if(W(e,lexer.TokenKind.BRACE_L))return o(e);if(W(e,lexer.TokenKind.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return o(e);case"fragment":return T(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"extend":case"directive":return D(e)}throw z(e)}function o(e){var n=e.token;if(W(e,lexer.TokenKind.BRACE_L))return{kind:kinds.OPERATION_DEFINITION,operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:s(e),loc:J(e,n)};var t=a(e),i=void 0;return W(e,lexer.TokenKind.NAME)&&(i=r(e)),{kind:kinds.OPERATION_DEFINITION,operation:t,name:i,variableDefinitions:u(e),directives:h(e),selectionSet:s(e),loc:J(e,n)}}function a(e){var n=X(e,lexer.TokenKind.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw z(e,n)}function u(e){return W(e,lexer.TokenKind.PAREN_L)?ee(e,lexer.TokenKind.PAREN_L,c,lexer.TokenKind.PAREN_R):[]}function c(e){var n=e.token;return{kind:kinds.VARIABLE_DEFINITION,variable:l(e),type:(X(e,lexer.TokenKind.COLON),A(e)),defaultValue:H(e,lexer.TokenKind.EQUALS)?m(e,!0):null,loc:J(e,n)}}function l(e){var n=e.token;return X(e,lexer.TokenKind.DOLLAR),{kind:kinds.VARIABLE,name:r(e),loc:J(e,n)}}function s(e){var n=e.token;return{kind:kinds.SELECTION_SET,selections:ee(e,lexer.TokenKind.BRACE_L,d,lexer.TokenKind.BRACE_R),loc:J(e,n)}}function d(e){return W(e,lexer.TokenKind.SPREAD)?E(e):f(e)}function f(e){var n=e.token,t=r(e),i=void 0,o=void 0;return H(e,lexer.TokenKind.COLON)?(i=t,o=r(e)):(i=null,o=t),{kind:kinds.FIELD,alias:i,name:o,arguments:v(e),directives:h(e),selectionSet:W(e,lexer.TokenKind.BRACE_L)?s(e):null,loc:J(e,n)}}function v(e){return W(e,lexer.TokenKind.PAREN_L)?ee(e,lexer.TokenKind.PAREN_L,p,lexer.TokenKind.PAREN_R):[]}function p(e){var n=e.token;return{kind:kinds.ARGUMENT,name:r(e),value:(X(e,lexer.TokenKind.COLON),m(e,!1)),loc:J(e,n)}}function E(e){var n=e.token;if(X(e,lexer.TokenKind.SPREAD),W(e,lexer.TokenKind.NAME)&&"on"!==e.token.value)return{kind:kinds.FRAGMENT_SPREAD,name:k(e),directives:h(e),loc:J(e,n)};var r=null;return"on"===e.token.value&&(e.advance(),r=g(e)),{kind:kinds.INLINE_FRAGMENT,typeCondition:r,directives:h(e),selectionSet:s(e),loc:J(e,n)}}function T(e){var n=e.token;return $(e,"fragment"),{kind:kinds.FRAGMENT_DEFINITION,name:k(e),typeCondition:($(e,"on"),g(e)),directives:h(e),selectionSet:s(e),loc:J(e,n)}}function k(e){if("on"===e.token.value)throw z(e);return r(e)}function m(e,n){var r=e.token;switch(r.kind){case lexer.TokenKind.BRACKET_L:return I(e,n);case lexer.TokenKind.BRACE_L:return O(e,n);case lexer.TokenKind.INT:return e.advance(),{kind:kinds.INT,value:r.value,loc:J(e,r)};case lexer.TokenKind.FLOAT:return e.advance(),{kind:kinds.FLOAT,value:r.value,loc:J(e,r)};case lexer.TokenKind.STRING:return e.advance(),{kind:kinds.STRING,value:r.value,loc:J(e,r)};case lexer.TokenKind.NAME:return"true"===r.value||"false"===r.value?(e.advance(),{kind:kinds.BOOLEAN,value:"true"===r.value,loc:J(e,r)}):"null"===r.value?(e.advance(),{kind:kinds.NULL,loc:J(e,r)}):(e.advance(),{kind:kinds.ENUM,value:r.value,loc:J(e,r)});case lexer.TokenKind.DOLLAR:if(!n)return l(e)}throw z(e)}function y(e){return m(e,!0)}function N(e){return m(e,!1)}function I(e,n){var r=e.token,t=n?y:N;return{kind:kinds.LIST,values:Z(e,lexer.TokenKind.BRACKET_L,t,lexer.TokenKind.BRACKET_R),loc:J(e,r)}}function O(e,n){var r=e.token;X(e,lexer.TokenKind.BRACE_L);for(var t=[];!H(e,lexer.TokenKind.BRACE_R);)t.push(_(e,n));return{kind:kinds.OBJECT,fields:t,loc:J(e,r)}}function _(e,n){var t=e.token;return{kind:kinds.OBJECT_FIELD,name:r(e),value:(X(e,lexer.TokenKind.COLON),m(e,n)),loc:J(e,t)}}function h(e){for(var n=[];W(e,lexer.TokenKind.AT);)n.push(x(e));return n}function x(e){var n=e.token;return X(e,lexer.TokenKind.AT),{kind:kinds.DIRECTIVE,name:r(e),arguments:v(e),loc:J(e,n)}}function A(e){var n=e.token,r=void 0;return H(e,lexer.TokenKind.BRACKET_L)?(r=A(e),X(e,lexer.TokenKind.BRACKET_R),r={kind:kinds.LIST_TYPE,type:r,loc:J(e,n)}):r=g(e),H(e,lexer.TokenKind.BANG)?{kind:kinds.NON_NULL_TYPE,type:r,loc:J(e,n)}:r}function g(e){var n=e.token;return{kind:kinds.NAMED_TYPE,name:r(e),loc:J(e,n)}}function D(e){if(W(e,lexer.TokenKind.NAME))switch(e.token.value){case"schema":return b(e);case"scalar":return S(e);case"type":return C(e);case"interface":return w(e);case"union":return j(e);case"enum":return V(e);case"input":return U(e);case"extend":return G(e);case"directive":return Y(e)}throw z(e)}function b(e){var n=e.token;$(e,"schema");var r=h(e),t=ee(e,lexer.TokenKind.BRACE_L,L,lexer.TokenKind.BRACE_R);return{kind:kinds.SCHEMA_DEFINITION,directives:r,operationTypes:t,loc:J(e,n)}}function L(e){var n=e.token,r=a(e);X(e,lexer.TokenKind.COLON);var t=g(e);return{kind:kinds.OPERATION_TYPE_DEFINITION,operation:r,type:t,loc:J(e,n)}}function S(e){var n=e.token;$(e,"scalar");var t=r(e),i=h(e);return{kind:kinds.SCALAR_TYPE_DEFINITION,name:t,directives:i,loc:J(e,n)}}function C(e){var n=e.token;$(e,"type");var t=r(e),i=P(e),o=h(e),a=Z(e,lexer.TokenKind.BRACE_L,R,lexer.TokenKind.BRACE_R);return{kind:kinds.OBJECT_TYPE_DEFINITION,name:t,interfaces:i,directives:o,fields:a,loc:J(e,n)}}function P(e){var n=[];if("implements"===e.token.value){e.advance();do{n.push(g(e));}while(W(e,lexer.TokenKind.NAME))}return n}function R(e){var n=e.token,t=r(e),i=K(e);X(e,lexer.TokenKind.COLON);var o=A(e),a=h(e);return{kind:kinds.FIELD_DEFINITION,name:t,arguments:i,type:o,directives:a,loc:J(e,n)}}function K(e){return W(e,lexer.TokenKind.PAREN_L)?ee(e,lexer.TokenKind.PAREN_L,F,lexer.TokenKind.PAREN_R):[]}function F(e){var n=e.token,t=r(e);X(e,lexer.TokenKind.COLON);var i=A(e),o=null;H(e,lexer.TokenKind.EQUALS)&&(o=y(e));var a=h(e);return{kind:kinds.INPUT_VALUE_DEFINITION,name:t,type:i,defaultValue:o,directives:a,loc:J(e,n)}}function w(e){var n=e.token;$(e,"interface");var t=r(e),i=h(e),o=Z(e,lexer.TokenKind.BRACE_L,R,lexer.TokenKind.BRACE_R);return{kind:kinds.INTERFACE_TYPE_DEFINITION,name:t,directives:i,fields:o,loc:J(e,n)}}function j(e){var n=e.token;$(e,"union");var t=r(e),i=h(e);X(e,lexer.TokenKind.EQUALS);var o=M(e);return{kind:kinds.UNION_TYPE_DEFINITION,name:t,directives:i,types:o,loc:J(e,n)}}function M(e){H(e,lexer.TokenKind.PIPE);var n=[];do{n.push(g(e));}while(H(e,lexer.TokenKind.PIPE));return n}function V(e){var n=e.token;$(e,"enum");var t=r(e),i=h(e),o=ee(e,lexer.TokenKind.BRACE_L,B,lexer.TokenKind.BRACE_R);return{kind:kinds.ENUM_TYPE_DEFINITION,name:t,directives:i,values:o,loc:J(e,n)}}function B(e){var n=e.token,t=r(e),i=h(e);return{kind:kinds.ENUM_VALUE_DEFINITION,name:t,directives:i,loc:J(e,n)}}function U(e){var n=e.token;$(e,"input");var t=r(e),i=h(e),o=Z(e,lexer.TokenKind.BRACE_L,F,lexer.TokenKind.BRACE_R);return{kind:kinds.INPUT_OBJECT_TYPE_DEFINITION,name:t,directives:i,fields:o,loc:J(e,n)}}function G(e){var n=e.token;$(e,"extend");var r=C(e);return{kind:kinds.TYPE_EXTENSION_DEFINITION,definition:r,loc:J(e,n)}}function Y(e){var n=e.token;$(e,"directive"),X(e,lexer.TokenKind.AT);var t=r(e),i=K(e);$(e,"on");var o=Q(e);return{kind:kinds.DIRECTIVE_DEFINITION,name:t,arguments:i,locations:o,loc:J(e,n)}}function Q(e){H(e,lexer.TokenKind.PIPE);var n=[];do{n.push(r(e));}while(H(e,lexer.TokenKind.PIPE));return n}function J(e,n){if(!e.options.noLocation)return new q(n,e.lastToken,e.source)}function q(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r;}function W(e,n){return e.token.kind===n}function H(e,n){var r=e.token.kind===n;return r&&e.advance(),r}function X(e,n){var r=e.token;if(r.kind===n)return e.advance(),r;throw(0,error.syntaxError)(e.source,r.start,"Expected "+n+", found "+(0,lexer.getTokenDesc)(r))}function $(e,n){var r=e.token;if(r.kind===lexer.TokenKind.NAME&&r.value===n)return e.advance(),r;throw(0,error.syntaxError)(e.source,r.start,'Expected "'+n+'", found '+(0,lexer.getTokenDesc)(r))}function z(e,n){var r=n||e.token;return(0,error.syntaxError)(e.source,r.start,"Unexpected "+(0,lexer.getTokenDesc)(r))}function Z(e,n,r,t){X(e,n);for(var i=[];!H(e,t);)i.push(r(e));return i}function ee(e,n,r,t){X(e,n);for(var i=[r(e)];!H(e,t);)i.push(r(e));return i}Object.defineProperty(n,"__esModule",{value:!0}),n.parse=function(e,n){var r="string"==typeof e?new source.Source(e):e;if(!(r instanceof source.Source))throw new TypeError("Must provide Source. Received: "+String(r));return t((0,lexer.createLexer)(r,n||{}))},n.parseValue=function(e,n){var r="string"==typeof e?new source.Source(e):e,t=(0,lexer.createLexer)(r,n||{});X(t,lexer.TokenKind.SOF);var i=m(t,!1);return X(t,lexer.TokenKind.EOF),i},n.parseType=function(e,n){var r="string"==typeof e?new source.Source(e):e,t=(0,lexer.createLexer)(r,n||{});X(t,lexer.TokenKind.SOF);var i=A(t);return X(t,lexer.TokenKind.EOF),i},n.parseConstValue=y,n.parseTypeReference=A,n.parseNamedType=g,q.prototype.toJSON=q.prototype.inspect=function(){return{start:this.start,end:this.end}};}),visitor=createCommonjsModule$$1(function(e,n){function r(e){return e&&"string"==typeof e.kind}function t(e,n,r){var t=e[n];if(t){if(!r&&"function"==typeof t)return t;var i=r?t.leave:t.enter;if("function"==typeof i)return i}else{var o=r?e.leave:e.enter;if(o){if("function"==typeof o)return o;var a=o[n];if("function"==typeof a)return a}}}Object.defineProperty(n,"__esModule",{value:!0}),n.visit=function(e,n,a){var u=a||i,c=void 0,l=Array.isArray(e),s=[e],d=-1,f=[],v=void 0,p=[],E=[],T=e;do{var k=++d===s.length,m=void 0,y=void 0,N=k&&0!==f.length;if(k){if(m=0===E.length?void 0:p.pop(),y=v,v=E.pop(),N){if(l)y=y.slice();else{var I={};for(var O in y)y.hasOwnProperty(O)&&(I[O]=y[O]);y=I;}for(var _=0,h=0;h<f.length;h++){var x=f[h][0],A=f[h][1];l&&(x-=_),l&&null===A?(y.splice(x,1),_++):y[x]=A;}}d=c.index,s=c.keys,f=c.edits,l=c.inArray,c=c.prev;}else{if(m=v?l?d:s[d]:void 0,null===(y=v?v[m]:T)||void 0===y)continue;v&&p.push(m);}var g=void 0;if(!Array.isArray(y)){if(!r(y))throw new Error("Invalid AST Node: "+JSON.stringify(y));var D=t(n,y.kind,k);if(D){if((g=D.call(n,y,m,v,p,E))===o)break;if(!1===g){if(!k){p.pop();continue}}else if(void 0!==g&&(f.push([m,g]),!k)){if(!r(g)){p.pop();continue}y=g;}}}void 0===g&&N&&f.push([m,y]),k||(c={inArray:l,index:d,keys:s,edits:f,prev:c},s=(l=Array.isArray(y))?y:u[y.kind]||[],d=-1,f=[],v&&E.push(v),v=y);}while(void 0!==c);return 0!==f.length&&(T=f[f.length-1][1]),T},n.visitInParallel=function(e){var n=new Array(e.length);return{enter:function(r){for(var i=0;i<e.length;i++)if(!n[i]){var a=t(e[i],r.kind,!1);if(a){var u=a.apply(e[i],arguments);if(!1===u)n[i]=r;else if(u===o)n[i]=o;else if(void 0!==u)return u}}},leave:function(r){for(var i=0;i<e.length;i++)if(n[i])n[i]===r&&(n[i]=null);else{var a=t(e[i],r.kind,!0);if(a){var u=a.apply(e[i],arguments);if(u===o)n[i]=o;else if(void 0!==u&&!1!==u)return u}}}}},n.visitWithTypeInfo=function(e,n){return{enter:function(i){e.enter(i);var o=t(n,i.kind,!1);if(o){var a=o.apply(n,arguments);return void 0!==a&&(e.leave(i),r(a)&&e.enter(a)),a}},leave:function(r){var i=t(n,r.kind,!0),o=void 0;return i&&(o=i.apply(n,arguments)),e.leave(r),o}}},n.getVisitFn=t;var i=n.QueryDocumentKeys={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["name","directives"],ObjectTypeDefinition:["name","interfaces","directives","fields"],FieldDefinition:["name","arguments","type","directives"],InputValueDefinition:["name","type","defaultValue","directives"],InterfaceTypeDefinition:["name","directives","fields"],UnionTypeDefinition:["name","directives","types"],EnumTypeDefinition:["name","directives","values"],EnumValueDefinition:["name","directives"],InputObjectTypeDefinition:["name","directives","fields"],TypeExtensionDefinition:["definition"],DirectiveDefinition:["name","arguments","locations"]},o=n.BREAK={};}),printer=createCommonjsModule$$1(function(e,n){function r(e,n){return e?e.filter(function(e){return e}).join(n||""):""}function t(e){return e&&0!==e.length?o("{\n"+r(e,"\n"))+"\n}":"{}"}function i(e,n,r){return n?e+n+(r||""):""}function o(e){return e&&e.replace(/\n/g,"\n  ")}Object.defineProperty(n,"__esModule",{value:!0}),n.print=function(e){return(0,visitor.visit)(e,{leave:a})};var a={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return r(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var n=e.operation,t=e.name,o=i("(",r(e.variableDefinitions,", "),")"),a=r(e.directives," "),u=e.selectionSet;return t||a||o||"query"!==n?r([n,r([t,o]),a,u]," "):u},VariableDefinition:function(e){return e.variable+": "+e.type+i(" = ",e.defaultValue)},SelectionSet:function(e){return t(e.selections)},Field:function(e){var n=e.alias,t=e.name,o=e.arguments,a=e.directives,u=e.selectionSet;return r([i("",n,": ")+t+i("(",r(o,", "),")"),r(a," "),u]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+i(" ",r(e.directives," "))},InlineFragment:function(e){var n=e.typeCondition,t=e.directives,o=e.selectionSet;return r(["...",i("on ",n),r(t," "),o]," ")},FragmentDefinition:function(e){var n=e.name,t=e.typeCondition,o=e.directives,a=e.selectionSet;return"fragment "+n+" on "+t+" "+i("",r(o," ")," ")+a},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e){var n=e.value;return JSON.stringify(n)},BooleanValue:function(e){var n=e.value;return JSON.stringify(n)},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+r(e.values,", ")+"]"},ObjectValue:function(e){return"{"+r(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+i("(",r(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:function(e){var n=e.directives,i=e.operationTypes;return r(["schema",r(n," "),t(i)]," ")},OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:function(e){return r(["scalar",e.name,r(e.directives," ")]," ")},ObjectTypeDefinition:function(e){var n=e.name,o=e.interfaces,a=e.directives,u=e.fields;return r(["type",n,i("implements ",r(o,", ")),r(a," "),t(u)]," ")},FieldDefinition:function(e){var n=e.name,t=e.arguments,o=e.type,a=e.directives;return n+i("(",r(t,", "),")")+": "+o+i(" ",r(a," "))},InputValueDefinition:function(e){var n=e.name,t=e.type,o=e.defaultValue,a=e.directives;return r([n+": "+t,i("= ",o),r(a," ")]," ")},InterfaceTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.fields;return r(["interface",n,r(i," "),t(o)]," ")},UnionTypeDefinition:function(e){var n=e.name,t=e.directives,i=e.types;return r(["union",n,r(t," "),"= "+r(i," | ")]," ")},EnumTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.values;return r(["enum",n,r(i," "),t(o)]," ")},EnumValueDefinition:function(e){return r([e.name,r(e.directives," ")]," ")},InputObjectTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.fields;return r(["input",n,r(i," "),t(o)]," ")},TypeExtensionDefinition:function(e){return"extend "+e.definition},DirectiveDefinition:function(e){var n=e.name,t=e.arguments,o=e.locations;return"directive @"+n+i("(",r(t,", "),")")+" on "+r(o," | ")}};}),language=createCommonjsModule$$1(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.BREAK=n.getVisitFn=n.visitWithTypeInfo=n.visitInParallel=n.visit=n.Source=n.print=n.parseType=n.parseValue=n.parse=n.TokenKind=n.createLexer=n.Kind=n.getLocation=void 0,Object.defineProperty(n,"getLocation",{enumerable:!0,get:function(){return location.getLocation}}),Object.defineProperty(n,"createLexer",{enumerable:!0,get:function(){return lexer.createLexer}}),Object.defineProperty(n,"TokenKind",{enumerable:!0,get:function(){return lexer.TokenKind}}),Object.defineProperty(n,"parse",{enumerable:!0,get:function(){return parser.parse}}),Object.defineProperty(n,"parseValue",{enumerable:!0,get:function(){return parser.parseValue}}),Object.defineProperty(n,"parseType",{enumerable:!0,get:function(){return parser.parseType}}),Object.defineProperty(n,"print",{enumerable:!0,get:function(){return printer.print}}),Object.defineProperty(n,"Source",{enumerable:!0,get:function(){return source.Source}}),Object.defineProperty(n,"visit",{enumerable:!0,get:function(){return visitor.visit}}),Object.defineProperty(n,"visitInParallel",{enumerable:!0,get:function(){return visitor.visitInParallel}}),Object.defineProperty(n,"visitWithTypeInfo",{enumerable:!0,get:function(){return visitor.visitWithTypeInfo}}),Object.defineProperty(n,"getVisitFn",{enumerable:!0,get:function(){return visitor.getVisitFn}}),Object.defineProperty(n,"BREAK",{enumerable:!0,get:function(){return visitor.BREAK}});var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}(kinds);n.Kind=r;}),parserGraphql=parse;module.exports=parserGraphql;
});

var parserGraphql = unwrapExports(parserGraphql_1);

return parserGraphql;

}());
