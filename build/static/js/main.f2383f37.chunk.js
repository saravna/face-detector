(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Logo.78a3f79d.png"},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),r=a.n(i),o=(a(17),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),p=(a(18),function(e){var t=e.isSignedIn,a=e.onRouteChange;return t?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",marginRight:"20px"}},s.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",marginRight:"20px"}},s.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return a("register")},className:"f3 dim black underline pa3 pointer"},"Register"))}),h=a(8),d=a.n(h),g=a(9),b=a.n(g),f=function(){return s.a.createElement(d.a,{className:"position br2 shadow-3 Tilt",options:{reverse:!0,max:20},style:{height:100,width:100}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{alt:"",src:b.a})," "))},E=function(e){var t=e.onSubmitClick,a=e.onInputChange;return s.a.createElement("div",null,s.a.createElement("div",{className:"br2 shadow-2 w-30 center pa3 tc"},s.a.createElement("input",{type:"text",onChange:a,className:"center w-70"}),s.a.createElement("button",{onClick:t,className:"ba w-30 br1 link pointer grow bg-orange"},"Detect Face")))},w=function(e){var t=e.name,a=e.entries;return console.log("rank",t,a),s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", your entry count is....")),s.a.createElement("div",{className:"white f1"},a))},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detect1.herokuapp.com/signin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):alert("Invalid Username or Password")})},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("article",{className:"br3 shadow-5 ba dark-gray b--black-10 mv3 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e.props.onRouteChange("register")},className:"f6 link dim black db"},"Register")))))}}]),t}(s.a.Component),N=a(10),C=a.n(N),y=(a(19),function(e){var t=e.box,a=e.imageUrl;return console.log(),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{alt:"",id:"image",src:a,height:"auto",width:"400px "}),s.a.createElement("div",{style:{top:t.top,right:t.right,bottom:t.bottom,left:t.left},className:"bounding-box"})))}),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitChange=function(){fetch("https://face-detect1.herokuapp.com/register",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})},a.state={name:"",email:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("article",{className:"br3 shadow-5 ba dark-gray b--black-10 mv3 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"text",id:"text"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitChange})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e.props.onRouteChange("signin")},className:"f6 link dim black db"},"Sign in")))))}}]),t}(s.a.Component),S={particles:{number:{value:100,density:{enable:!0,value_area:400}}}},j={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,join:new Date}},x=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,join:t.join}})},e.calculateFaceLocation=function(t){t=t[0].region_info.bounding_box;var a=document.getElementById("image"),n=Number(a.width),s=Number(a.height);e.displayFaceBox({top:s*t.top_row,right:n-n*t.right_col,bottom:s-s*t.bottom_row,left:n*t.left_col})},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onRouteChange=function(t){"signin"===t?e.setState(j):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.onSubmitClick=function(){e.setState({imageUrl:e.state.input}),fetch("https://face-detect1.herokuapp.com/apicall",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then(function(e){return e.json()}).then(function(t){t.outputs&&(t=t.outputs[0].data.regions,e.calculateFaceLocation(t),fetch("https://face-detect1.herokuapp.com/image",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:e.state.user.name,id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}).catch(console.log))}).catch(function(e){return console.log(e)})},e.state=j,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,a=e.box,n=e.route,i=e.isSignedIn;return s.a.createElement("div",{className:"App"},s.a.createElement(C.a,{className:"particles",params:S}),s.a.createElement(p,{isSignedIn:i,onRouteChange:this.onRouteChange}),s.a.createElement(f,null),"signin"===n?s.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):"register"===n?s.a.createElement(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement("div",null,s.a.createElement(w,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(E,{onInputChange:this.onInputChange,onSubmitClick:this.onSubmitClick}),s.a.createElement(y,{box:a,imageUrl:t}),s.a.createElement("script",{type:"text/javascript",src:"https://sdk.clarifai.com/js/clarifai-latest.js"})))}}]),t}(n.Component);a(20);r.a.render(s.a.createElement(x,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f2383f37.chunk.js.map