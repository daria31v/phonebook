"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{166:function(e,t,n){n.d(t,{Z:function(){return te}});var o=n(4942),r=n(3433),i=n(3366),a=n(7462),l=n(2791),u=n(4419),s=n(2466),d=n(9439),c=n(6189),p=n(8182),f=n(4164),m=n(7563),v=n(9723);function h(e){return(0,v.Z)(e).defaultView||window}var b=n(5721),y=n(184),g=["onChange","maxRows","minRows","style","value"];function w(e){return parseInt(e,10)||0}var Z={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function x(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var S=l.forwardRef((function(e,t){var n=e.onChange,o=e.maxRows,r=e.minRows,u=void 0===r?1:r,s=e.style,c=e.value,p=(0,i.Z)(e,g),v=l.useRef(null!=c).current,S=l.useRef(null),C=(0,m.Z)(t,S),R=l.useRef(null),k=l.useRef(0),z=l.useState({outerHeightStyle:0}),A=(0,d.Z)(z,2),B=A[0],I=A[1],M=l.useCallback((function(){var t=S.current,n=h(t).getComputedStyle(t);if("0px"===n.width)return{outerHeightStyle:0};var r=R.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var i=n.boxSizing,a=w(n.paddingBottom)+w(n.paddingTop),l=w(n.borderBottomWidth)+w(n.borderTopWidth),s=r.scrollHeight;r.value="x";var d=r.scrollHeight,c=s;return u&&(c=Math.max(Number(u)*d,c)),o&&(c=Math.min(Number(o)*d,c)),{outerHeightStyle:(c=Math.max(c,d))+("border-box"===i?a+l:0),overflow:Math.abs(c-s)<=1}}),[o,u,e.placeholder]),P=function(e,t){var n=t.outerHeightStyle,o=t.overflow;return k.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==o)?(k.current+=1,{overflow:o,outerHeightStyle:n}):e},F=l.useCallback((function(){var e=M();x(e)||I((function(t){return P(t,e)}))}),[M]);l.useEffect((function(){var e,t=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var l=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(l,n)}return o.clear=function(){clearTimeout(t)},o}((function(){k.current=0,S.current&&function(){var e=M();x(e)||f.flushSync((function(){I((function(t){return P(t,e)}))}))}()})),n=S.current,o=h(n);return o.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(n),function(){t.clear(),o.removeEventListener("resize",t),e&&e.disconnect()}})),(0,b.Z)((function(){F()})),l.useEffect((function(){k.current=0}),[c]);return(0,y.jsxs)(l.Fragment,{children:[(0,y.jsx)("textarea",(0,a.Z)({value:c,onChange:function(e){k.current=0,v||F(),n&&n(e)},ref:C,rows:u,style:(0,a.Z)({height:B.outerHeightStyle,overflow:B.overflow?"hidden":void 0},s)},p)),(0,y.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:R,tabIndex:-1,style:(0,a.Z)({},Z,s,{padding:0})})]})})),C=S,R=n(627);var k=l.createContext(void 0);var z=n(7630),A=n(1046),B=n(4036),I=n(2071),M=b.Z,P=n(2554);function F(e){var t=e.styles,n=e.defaultTheme,o=void 0===n?{}:n,r="function"===typeof t?function(e){return t(void 0===(n=e)||null===n||0===Object.keys(n).length?o:e);var n}:t;return(0,y.jsx)(P.xB,{styles:r})}var W=n(6482);var E=function(e){return(0,y.jsx)(F,(0,a.Z)({},e,{defaultTheme:W.Z}))};function T(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var O=n(5878),j=n(1217);function H(e){return(0,j.Z)("MuiInputBase",e)}var L=(0,O.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],U=function(e,t){var n=e.ownerState;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat((0,B.Z)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},K=function(e,t){var n=e.ownerState;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},V=(0,z.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:U})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},t.typography.body1,(0,o.Z)({color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(L.disabled),{color:(t.vars||t).palette.text.disabled,cursor:"default"}),n.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),D=(0,z.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:K})((function(e){var t,n=e.theme,r=e.ownerState,i="light"===n.palette.mode,l=(0,a.Z)({color:"currentColor"},n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),u={opacity:"0 !important"},s=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return(0,a.Z)((t={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,o.Z)(t,"label[data-shrink=false] + .".concat(L.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus:-ms-input-placeholder":s,"&:focus::-ms-input-placeholder":s}),(0,o.Z)(t,"&.".concat(L.disabled),{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled}),(0,o.Z)(t,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),t),"small"===r.size&&{paddingTop:1},r.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===r.type&&{MozAppearance:"textfield"})})),_=(0,y.jsx)(E,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),q=l.forwardRef((function(e,t){var n,o=(0,A.Z)({props:e,name:"MuiInputBase"}),r=o["aria-describedby"],s=o.autoComplete,f=o.autoFocus,m=o.className,v=o.components,h=void 0===v?{}:v,b=o.componentsProps,g=void 0===b?{}:b,w=o.defaultValue,Z=o.disabled,x=o.disableInjectingGlobalStyles,S=o.endAdornment,z=o.fullWidth,P=void 0!==z&&z,F=o.id,W=o.inputComponent,E=void 0===W?"input":W,O=o.inputProps,j=void 0===O?{}:O,L=o.inputRef,U=o.maxRows,K=o.minRows,q=o.multiline,X=void 0!==q&&q,G=o.name,J=o.onBlur,Q=o.onChange,Y=o.onClick,$=o.onFocus,ee=o.onKeyDown,te=o.onKeyUp,ne=o.placeholder,oe=o.readOnly,re=o.renderSuffix,ie=o.rows,ae=o.slotProps,le=void 0===ae?{}:ae,ue=o.slots,se=void 0===ue?{}:ue,de=o.startAdornment,ce=o.type,pe=void 0===ce?"text":ce,fe=o.value,me=(0,i.Z)(o,N),ve=null!=j.value?j.value:fe,he=l.useRef(null!=ve).current,be=l.useRef(),ye=l.useCallback((function(e){0}),[]),ge=(0,I.Z)(be,L,j.ref,ye),we=l.useState(!1),Ze=(0,d.Z)(we,2),xe=Ze[0],Se=Ze[1],Ce=l.useContext(k);var Re=function(e){var t=e.props,n=e.states,o=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e}),{})}({props:o,muiFormControl:Ce,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Re.focused=Ce?Ce.focused:xe,l.useEffect((function(){!Ce&&Z&&xe&&(Se(!1),J&&J())}),[Ce,Z,xe,J]);var ke=Ce&&Ce.onFilled,ze=Ce&&Ce.onEmpty,Ae=l.useCallback((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(T(e.value)&&""!==e.value||t&&T(e.defaultValue)&&""!==e.defaultValue)}(e)?ze&&ze():ke&&ke()}),[ke,ze]);M((function(){he&&Ae({value:ve})}),[ve,Ae,he]);l.useEffect((function(){Ae(be.current)}),[]);var Be=E,Ie=j;X&&"input"===Be&&(Ie=ie?(0,a.Z)({type:void 0,minRows:ie,maxRows:ie},Ie):(0,a.Z)({type:void 0,maxRows:U,minRows:K},Ie),Be=C);l.useEffect((function(){Ce&&Ce.setAdornedStart(Boolean(de))}),[Ce,de]);var Me=(0,a.Z)({},o,{color:Re.color||"primary",disabled:Re.disabled,endAdornment:S,error:Re.error,focused:Re.focused,formControl:Ce,fullWidth:P,hiddenLabel:Re.hiddenLabel,multiline:X,size:Re.size,startAdornment:de,type:pe}),Pe=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,s=e.fullWidth,d=e.hiddenLabel,c=e.multiline,p=e.readOnly,f=e.size,m=e.startAdornment,v=e.type,h={root:["root","color".concat((0,B.Z)(n)),o&&"disabled",r&&"error",s&&"fullWidth",a&&"focused",l&&"formControl","small"===f&&"sizeSmall",c&&"multiline",m&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel",p&&"readOnly"],input:["input",o&&"disabled","search"===v&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",i&&"inputAdornedEnd",p&&"readOnly"]};return(0,u.Z)(h,H,t)}(Me),Fe=se.root||h.Root||V,We=le.root||g.root||{},Ee=se.input||h.Input||D;return Ie=(0,a.Z)({},Ie,null!=(n=le.input)?n:g.input),(0,y.jsxs)(l.Fragment,{children:[!x&&_,(0,y.jsxs)(Fe,(0,a.Z)({},We,!(0,R.Z)(Fe)&&{ownerState:(0,a.Z)({},Me,We.ownerState)},{ref:t,onClick:function(e){be.current&&e.currentTarget===e.target&&be.current.focus(),Y&&Y(e)}},me,{className:(0,p.Z)(Pe.root,We.className,m,oe&&"MuiInputBase-readOnly"),children:[de,(0,y.jsx)(k.Provider,{value:null,children:(0,y.jsx)(Ee,(0,a.Z)({ownerState:Me,"aria-invalid":Re.error,"aria-describedby":r,autoComplete:s,autoFocus:f,defaultValue:w,disabled:Re.disabled,id:F,onAnimationStart:function(e){Ae("mui-auto-fill-cancel"===e.animationName?be.current:{value:"x"})},name:G,placeholder:ne,readOnly:oe,required:Re.required,rows:ie,value:ve,onKeyDown:ee,onKeyUp:te,type:pe},Ie,!(0,R.Z)(Ee)&&{as:Be,ownerState:(0,a.Z)({},Me,Ie.ownerState)},{ref:ge,className:(0,p.Z)(Pe.input,Ie.className,oe&&"MuiInputBase-readOnly"),onBlur:function(e){J&&J(e),j.onBlur&&j.onBlur(e),Ce&&Ce.onBlur?Ce.onBlur(e):Se(!1)},onChange:function(e){if(!he){var t=e.target||be.current;if(null==t)throw new Error((0,c.Z)(1));Ae({value:t.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];j.onChange&&j.onChange.apply(j,[e].concat(o)),Q&&Q.apply(void 0,[e].concat(o))},onFocus:function(e){Re.disabled?e.stopPropagation():($&&$(e),j.onFocus&&j.onFocus(e),Ce&&Ce.onFocus?Ce.onFocus(e):Se(!0))}}))}),S,re?re((0,a.Z)({},Re,{startAdornment:de})):null]}))]})})),X=q;function G(e){return(0,j.Z)("MuiInput",e)}var J=(0,a.Z)({},L,(0,O.Z)("MuiInput",["root","underline","input"])),Q=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],Y=(0,z.ZP)(V,{shouldForwardProp:function(e){return(0,z.FO)(e)||"classes"===e},name:"MuiInput",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[].concat((0,r.Z)(U(e,t)),[!n.disableUnderline&&t.underline])}})((function(e){var t,n=e.theme,r=e.ownerState,i="light"===n.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(i="rgba(".concat(n.vars.palette.common.onBackgroundChannel," / ").concat(n.vars.opacity.inputUnderline,")")),(0,a.Z)({position:"relative"},r.formControl&&{"label + &":{marginTop:16}},!r.disableUnderline&&(t={"&:after":{borderBottom:"2px solid ".concat((n.vars||n).palette[r.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"}},(0,o.Z)(t,"&.".concat(J.focused,":after"),{transform:"scaleX(1) translateX(0)"}),(0,o.Z)(t,"&.".concat(J.error),{"&:before, &:after":{borderBottomColor:(n.vars||n).palette.error.main}}),(0,o.Z)(t,"&:before",{borderBottom:"1px solid ".concat(i),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"}),(0,o.Z)(t,"&:hover:not(.".concat(J.disabled,", .").concat(J.error,"):before"),{borderBottom:"2px solid ".concat((n.vars||n).palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(i)}}),(0,o.Z)(t,"&.".concat(J.disabled,":before"),{borderBottomStyle:"dotted"}),t))})),$=(0,z.ZP)(D,{name:"MuiInput",slot:"Input",overridesResolver:K})({}),ee=l.forwardRef((function(e,t){var n,o,r,l,d=(0,A.Z)({props:e,name:"MuiInput"}),c=d.disableUnderline,p=d.components,f=void 0===p?{}:p,m=d.componentsProps,v=d.fullWidth,h=void 0!==v&&v,b=d.inputComponent,g=void 0===b?"input":b,w=d.multiline,Z=void 0!==w&&w,x=d.slotProps,S=d.slots,C=void 0===S?{}:S,R=d.type,k=void 0===R?"text":R,z=(0,i.Z)(d,Q),B=function(e){var t=e.classes,n={root:["root",!e.disableUnderline&&"underline"],input:["input"]},o=(0,u.Z)(n,G,t);return(0,a.Z)({},t,o)}(d),I={root:{ownerState:{disableUnderline:c}}},M=(null!=x?x:m)?(0,s.Z)(null!=x?x:m,I):I,P=null!=(n=null!=(o=C.root)?o:f.Root)?n:Y,F=null!=(r=null!=(l=C.input)?l:f.Input)?r:$;return(0,y.jsx)(X,(0,a.Z)({slots:{root:P,input:F},slotProps:M,fullWidth:h,inputComponent:g,multiline:Z,ref:t,type:k},z,{classes:B}))}));ee.muiName="Input";var te=ee}}]);
//# sourceMappingURL=166.3e6ac9de.chunk.js.map