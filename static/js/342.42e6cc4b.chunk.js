"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{913:function(e,r,t){t.d(r,{r:function(){return c}});var n,a=t(2791),o=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function s(e,r){var t=e.title,s=e.titleId,c=l(e,o);return a.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":s},c),t?a.createElement("title",{id:s},t):null,n||(n=a.createElement("path",{d:"M20.0001 7L9.0001 18L4 13",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var c=a.forwardRef(s);t.p},2241:function(e,r,t){t.d(r,{r:function(){return c}});var n,a=t(2791),o=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function s(e,r){var t=e.title,s=e.titleId,c=l(e,o);return a.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":s},c),t?a.createElement("title",{id:s},t):null,n||(n=a.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#F43F5E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var c=a.forwardRef(s);t.p},4710:function(e,r,t){t.d(r,{d:function(){return o},g:function(){return a}});var n=t(6727),a=n.Ry().shape({name:n.Z_().required("Name is required").matches(/^(?=.{2,16}$)[A-Za-z ]+$/,"Please enter valid name"),email:n.Z_().email("Enter a valid Email").required("Email is required"),password:n.Z_().required("Password is required").min(6,"Enter more than 6 characters").max(16,"Max 16").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit"),confirmPassword:n.Z_().required("Confirm your password").oneOf([n.iH("password"),null],"Passwords must match!")}),o=n.Ry().shape({email:n.Z_().email("Enter a valid Email").required("Email is required"),password:n.Z_().required("Password is required").min(6,"Enter more than 6 characters").max(16,"Max 16").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit")})},5342:function(e,r,t){t.r(r),t.d(r,{default:function(){return D}});var n,a=t(2791),o=t(1413),i=t(4165),l=t(5861),s=t(9439),c=t(1087),d=t(5705),u=t(4710),p=t(9434),m=t(7621),x=t(890),f=t(3466),h=t(3400),b=t(6151),g=t(4554),w=t(3710),v=t(9569),y=t(168),Z=t(225),j=t(8660),k=(0,Z.Z)(j.Z)(n||(n=(0,y.Z)(["\n  & .MuiInputBase-root.MuiOutlinedInput-root {\n    border-radius: 40px;\n    color: #888888;\n  }\n\n  & .MuiFormHelperText-root {\n    color: #00c3ad;\n  }\n\n   &.dark-theme {\n    .MuiInputBase-root.MuiOutlinedInput-root {\n      color: #111111; \n    }\n\n  &.green-border .MuiOutlinedInput-notchedOutline {\n    border-color: #00c3ad;\n    border-width: 2px;\n  }\n"]))),O={boxShadow:"none",mt:{mobile:"10px",tablet:"20px"},textTransform:"none",width:"100%",height:"48px",border:"2px solid #54ADFF",borderRadius:"40px",fontWeight:600,fontSize:"20px",lineHeight:"27px",padding:"9px 20px",backgroundColor:"rgba(84, 173, 255, 1)",color:"rgba(255, 255, 255, 1)","&:hover":{backgroundColor:"#54ADFF",color:"#FEF9F9"},"&:active":{backgroundColor:"#54ADFF",color:"#FEF9F9"},"&:focus":{backgroundColor:"#54ADFF",color:"#FEF9F9"}},F={display:"flex",flexDirection:"column",gap:"24px",minHeight:{mobile:"441px",tablet:"481px"},width:{mobile:"280px",tablet:"608px"},boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",borderRadius:{mobile:"20px",tablet:"40px"},ml:"auto",mr:"auto",mb:{mobile:"36px",tablet:"119px"},padding:{mobile:"35px 12px",tablet:"50px 75px"},justifyContent:"center",alignItems:"center"},E={textAlign:"center",fontFamily:"Manrope",fontWeight:"500",fontSize:{mobile:"24px",tablet:"36px"},lineHeight:{mobile:"33px",tablet:"49px"},color:"#111111"},A={textAlign:"center",fontFamily:"Manrope",fontWeight:"400",fontSize:{mobile:"12px",tablet:"14px"},lineHeight:{mobile:"16px",tablet:"18px"},color:"#888888"},C={textDecoration:"none",fontSize:{mobile:"12px",tablet:"14px"},lineHeight:{mobile:"16px",tablet:"18px"},color:"#54ADFF",textDecorationLine:"underline"},P=t(2241),I=t(913),S=t(1140),M=t(9230),z=t(3024),q=t(184),L={email:"",password:""};var _=function(){var e=(0,a.useState)(!1),r=(0,s.Z)(e,2),t=r[0],n=r[1],y=(0,a.useState)(""),Z=(0,s.Z)(y,2),j=Z[0],_=Z[1],D=(0,a.useState)(""),B=(0,s.Z)(D,2),$=B[0],H=B[1],R=(0,M.$G)().t,W=(0,p.v9)(z.$),N="dark"===W?"dark-theme":"",T=(0,p.I0)(),G=function(){n(!t)},J=function(e){var r=e.target,t=r.name,n=r.value;switch(t){case"email":var a=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n);return _(a);case"password":var o=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/i.test(n);return H(o);default:return}},U=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(r,t){var n,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,a=t.resetForm,e.prev=1,e.next=4,u.d.validate(r,{abortEarly:!1});case 4:T((0,S.x4)({email:r.email,password:r.password})),a(),_(""),H(""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o={},e.t0.inner.forEach((function(e){o[e.path]=e.message})),n(o);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r,t){return e.apply(this,arguments)}}();return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(m.Z,{sx:(0,o.Z)((0,o.Z)({},F),{},{backgroundColor:"dark"===W&&"#6b818f"}),children:[(0,q.jsx)(x.Z,{sx:E,children:R("Login")}),(0,q.jsx)(d.J9,{initialValues:L,onSubmit:U,children:function(e){var r=e.values,n=e.errors,a=e.touched,o=e.handleSubmit,i=e.handleChange;return(0,q.jsxs)(d.l0,{children:[(0,q.jsx)(d.gN,{as:k,placeholder:R("Email"),type:"email",name:"email",fullWidth:!0,focused:!0,margin:"dense",className:N,onChange:function(e){i(e),J(e)},value:r.email,error:a.email&&Boolean(n.email),helperText:a.email&&n.email?(0,q.jsx)(d.Bc,{name:"email"}):" ",InputProps:{color:a.email&&n.email?"error":j?"success":"primary",endAdornment:(0,q.jsx)(f.Z,{position:"end",children:a.email&&n.email?(0,q.jsx)(P.r,{onClick:function(){i({target:{name:"email",value:""}}),_(!1)}}):j?(0,q.jsx)(I.r,{stroke:"#00C3AD"}):null})}}),(0,q.jsx)(d.gN,{as:k,placeholder:R("Password"),type:t?"text":"password",name:"password",fullWidth:!0,focused:!0,margin:"dense",className:N,InputProps:{color:a.password&&n.password?"error":$?"success":"primary",endAdornment:(0,q.jsx)(h.Z,{"aria-label":"toggle password visibility",onClick:G,edge:"end",size:"small",children:t?(0,q.jsx)(w.Z,{}):(0,q.jsx)(v.Z,{})})},onChange:function(e){i(e),J(e)},value:r.password,error:a.password&&Boolean(n.password),helperText:a.password&&n.password?(0,q.jsx)(d.Bc,{name:"password"}):" "}),(0,q.jsx)(b.Z,{variant:"outlined",type:"submit",onClick:o,sx:O,children:R("Login")})]})}}),(0,q.jsx)(g.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px"},children:(0,q.jsxs)(x.Z,{sx:(0,o.Z)((0,o.Z)({},A),{},{color:"dark"===W&&"#111111"}),children:[R("Already have an account?")," ",(0,q.jsx)(c.rU,{to:"/register",children:(0,q.jsx)(x.Z,{component:"span",sx:C,children:R("Register")})})]})})]})})};var D=function(){return(0,q.jsx)(_,{})}}}]);
//# sourceMappingURL=342.42e6cc4b.chunk.js.map