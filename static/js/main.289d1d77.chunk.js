(window["webpackJsonpface-detection"]=window["webpackJsonpface-detection"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),r=(a(14),a(1)),c=a(2),l=a(4),m=a(3),u=a(5),p=(a(15),function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{className:"nav-box"},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim dark-gray underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{className:"nav-box"},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim dark-gray underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim dark-gray underline pa3 pointer"},"Register"))}),d=(a(16),function(e){var t=e.onInputChange,a=e.onPictureSubmit,n=e.oneFace,i=e.manyFaces,o=e.isUrlBlank;return s.a.createElement("div",null,s.a.createElement("div",{className:"f3 sentence"},"This site will find up to 300 faces in your pictures."),s.a.createElement("div",{className:"f3 sentence"},"Enter the URL of an image or try these examples and click detect to see it in action!"),s.a.createElement("p",null,s.a.createElement("button",{className:"f5 link dim br3 ph3 pv2 mb2 dib white bg-dark-green",type:"submit",onClick:n},"One Face"),s.a.createElement("button",{className:"f5 link dim br3 ph3 pv2 mb2 dib white bg-dark-green",type:"submit",onClick:i},"Many Faces")),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{id:"urlfield",className:"f3 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{disabled:o(),type:"submit",className:"w-30 f4 link ph1 pv2 dib white bg-orange",onClick:a},"Detect"))))}),h=(a(17),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputImage",alt:"user submission",src:t}),a.faces.map((function(e,t){return s.a.createElement("div",{key:t,className:"bounding-box",style:{left:e.leftCol,top:e.topRow,right:e.rightCol,bottom:e.bottomRow}})})),s.a.createElement("p",null,a.faces.length," face(s) detected")))}),g=(a(18),function(e){var t=e.name,a=e.entries;return s.a.createElement("div",{className:"rank"},"".concat(t,", your current entry count is..."),s.a.createElement("div",{className:"white f1 "},a))}),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detection-backend-aje.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.guestSignIn=function(){fetch("https://face-detection-backend-aje.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"guest@gmail.com",password:"123"})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"bg-washed-blue br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",null,s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("input",{onClick:this.guestSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",type:"submit",value:"Sign in as Guest"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(s.a.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detection-backend-aje.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"bg-washed-blue br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(s.a.Component);a(19);a(20).config();var w={input:"",imageUrl:"",box:{faces:[{leftCol:0,topRow:0,rightCol:0,bottomRow:0}]},route:"signin",isSignedIn:!1,showImage:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){for(var t=document.getElementById("inputImage"),a=Number(t.width),n=Number(t.height),s=[],i=0;i<e.outputs[0].data.regions.length;i++){var o=e.outputs[0].data.regions[i].region_info.bounding_box,r=o.left_col*a,c=o.top_row*n,l=a-o.right_col*a,m=n-o.bottom_row*n+50;s.push({leftCol:r,topRow:c,rightCol:l,bottomRow:m})}return{faces:s}},e.displayFaceBox=function(t){e.setState({box:t})},e.clearURL=function(){e.setState({input:""}),document.getElementById("urlfield").value=""},e.onInputChange=function(t){e.setState({input:t.target.value})},e.isUrlBlank=function(){return""===e.state.input},e.oneFace=function(){e.setState({input:"https://images.unsplash.com/photo-1569001821155-104016a820c7"}),document.getElementById("urlfield").value="https://images.unsplash.com/photo-1569001821155-104016a820c7"},e.manyFaces=function(){e.setState({input:"https://images.unsplash.com/photo-1544097797-bf8fc095364c"}),document.getElementById("urlfield").value="https://images.unsplash.com/photo-1544097797-bf8fc095364c"},e.onPictureSubmit=function(){e.setState({imageUrl:e.state.input}),e.clearURL(),fetch("https://face-detection-backend-aje.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if("unable to work with API"===t)return e.setState({showImage:!1}),console.log("not a valid image url"),0;t?fetch("https://face-detection-backend-aje.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log):alert("No server response"),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)})),e.setState({showImage:!0})},e.onRouteChange=function(t){"signout"===t?e.setState(w):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=w,e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("div",{className:"title"},"Face Detector"),s.a.createElement(p,{isSignedIn:t,onRouteChange:this.onRouteChange})),"home"===n?s.a.createElement("div",null,"guest@gmail.com"!==this.state.user.email?s.a.createElement(g,{name:this.state.user.name,entries:this.state.user.entries}):"",s.a.createElement(d,{onInputChange:this.onInputChange,onPictureSubmit:this.onPictureSubmit,oneFace:this.oneFace,manyFaces:this.manyFaces,isUrlBlank:this.isUrlBlank}),!0===this.state.showImage?s.a.createElement(h,{box:i,imageUrl:a}):""):"signin"===n?s.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.289d1d77.chunk.js.map