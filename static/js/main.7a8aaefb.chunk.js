(this.webpackJsonpmartijnwip=this.webpackJsonpmartijnwip||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),r=n(21),s=n.n(r),l=n(174),o=(n(141),function(e){var t=e.children;return Object(a.jsx)("div",{children:t})}),j=n(107),d=n(43),h=n(44),b=n(49),m=n(48),x=n(118),O=n(168),u=n(177),g=n(176),p=n(40),v=n(169),f=n(178),y=n(170),I=n(179),w=n(180),S=n(95),k=n(171),C=n(123),A=n(172),F=Object(x.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),N=F.MediaContextProvider,M=F.Media,R=function(e){var t=e.mobile;return Object(a.jsxs)(O.a,{text:!0,children:[Object(a.jsx)(u.a,{as:"h1",content:"Martijn Wip",inverted:!0,style:{fontSize:t?"1.5em":"3em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"1em"}}),Object(a.jsx)(u.a,{as:"h2",content:"React & Django Developer",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:"0.5em"}}),Object(a.jsxs)(g.a,{inverted:!0,color:"red",children:[Object(a.jsx)(p.a,{name:"react"}),"  React"]}),Object(a.jsxs)(g.a,{inverted:!0,color:"orange",children:[Object(a.jsx)(p.a,{name:"python"}),"Python"]}),Object(a.jsxs)(g.a,{inverted:!0,color:"yellow",children:[Object(a.jsx)(p.a,{name:"sass"}),"Sass"]}),Object(a.jsxs)(g.a,{inverted:!0,color:"olive",children:[Object(a.jsx)(p.a,{name:"node js"}),"NodeJS"]}),Object(a.jsxs)(g.a,{inverted:!0,color:"green",children:[Object(a.jsx)(p.a,{name:"database"}),"Postgres"]}),Object(a.jsxs)(g.a,{inverted:!0,color:"teal",children:[Object(a.jsx)(p.a,{name:"aws"}),"AWS"]})]})},E=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return Object(a.jsxs)(M,{greaterThan:"mobile",children:[Object(a.jsx)(v.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu,children:Object(a.jsxs)(f.a,{inverted:!0,textAlign:"center",style:{minHeight:300,padding:"1em 0em"},vertical:!0,children:[Object(a.jsx)(y.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(y.a.Item,{as:"a",active:!0,children:"Home"}),Object(a.jsx)(y.a.Item,{as:"a",href:"#aboutme",children:"About me"}),Object(a.jsx)(y.a.Item,{as:"a",href:"#frontend",children:"Front End"}),Object(a.jsx)(y.a.Item,{as:"a",href:"martijn_wip_cv.pdf",target:"_blank",children:"Resum\xe9"}),Object(a.jsxs)(y.a.Item,{position:"right",children:[Object(a.jsxs)(g.a,{as:"a",href:"https://www.linkedin.com/in/martijn-wip-48330b8/",target:"_blank",inverted:!t,children:[Object(a.jsx)(p.a,{name:"linkedin"})," LinkedIn"]}),Object(a.jsx)(g.a,{as:"a",href:"martijn_wip_cv.pdf",target:"_blank",inverted:!t,primary:t,style:{marginLeft:"0.5em"},children:"Resum\xe9"})]})]})}),Object(a.jsx)(R,{})]})}),e]})}}]),n}(i.Component),P=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleSidebarHide=function(){return e.setState({sidebarOpened:!1})},e.handleToggle=function(){return e.setState({sidebarOpened:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.children,n=this.state.sidebarOpened;return Object(a.jsx)(M,{as:I.a.Pushable,at:"mobile",children:Object(a.jsxs)(I.a.Pushable,{children:[Object(a.jsxs)(I.a,{as:y.a,animation:"overlay",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:n,children:[Object(a.jsx)(y.a.Item,{as:"a",active:!0,children:"Home"}),Object(a.jsx)(y.a.Item,{as:"a",onClick:function(){return e.setState({sidebarOpened:!1})},href:"#aboutme",children:"About me"}),Object(a.jsx)(y.a.Item,{as:"a",onClick:function(){return e.setState({sidebarOpened:!1})},href:"#frontend",children:"Front End"}),Object(a.jsx)(y.a.Item,{as:"a",href:"martijn_wip_cv.pdf",target:"_blank",children:"Resum\xe9"})]}),Object(a.jsxs)(I.a.Pusher,{dimmed:n,children:[Object(a.jsxs)(f.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0,children:[Object(a.jsx)(O.a,{children:Object(a.jsxs)(y.a,{inverted:!0,pointing:!0,secondary:!0,size:"large",children:[Object(a.jsx)(y.a.Item,{onClick:this.handleToggle,children:Object(a.jsx)(p.a,{name:"sidebar"})}),Object(a.jsx)(y.a.Item,{position:"right",children:Object(a.jsxs)(g.a,{as:"a",href:"https://www.linkedin.com/in/martijn-wip-48330b8/",target:"_blank",inverted:!0,style:{marginLeft:"0.5em"},children:[Object(a.jsx)(p.a,{name:"linkedin"}),"LinkedIn"]})})]})}),Object(a.jsx)(R,{mobile:!0})]}),t]})]})})}}]),n}(i.Component),T=function(e){var t=e.children;return Object(a.jsxs)(N,{children:[Object(a.jsx)(E,{children:t}),Object(a.jsx)(P,{children:t})]})},D=function(e){var t=e.framework,n=c.a.useState(!1),i=Object(j.a)(n,2),r=i[0],s=i[1],l={django:{color:"violet",description:"I <a href=''>have</a> been developing Django REST APIs REST API using Python, Django (2.0), Django REST Framework (3.9),\n Docker, Travis CI, Postgres and Test Driven Development",tags:["nginx","api","pipelines"]},laravel:{color:"purple",description:"Laravel is the first backend framework I worked with. I was surprised how fast I could pick this and start to develop  a full backend system for mydailymoves.nl",tags:["PHP","Eloquent","MySQL","Apache","API","PHPUnit"]},node:{color:"pink",description:"For Jalt I developed a Reporting System for their Facebook business Manager.",tags:["Express","Sequelize","OAuth2","Facebook API"]}};return Object(a.jsxs)(k.a,{onClose:function(){return s(!1)},onOpen:function(){return s(!0)},open:r,size:"large",trigger:Object(a.jsx)(g.a,{color:l[t].color,children:"Read more"}),children:[Object(a.jsx)(k.a.Header,{children:"Back-end Framework"}),Object(a.jsx)(k.a.Content,{image:!0,children:Object(a.jsxs)(k.a.Description,{children:[Object(a.jsx)(u.a,{style:{textTransform:"Capitalize"},children:t}),Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:l[t].description}}),Object(a.jsx)("p",{children:l[t].tags.map((function(e){return Object(a.jsx)(S.a,{children:e})}))})]})}),Object(a.jsx)(k.a.Actions,{children:Object(a.jsx)(g.a,{color:"green",onClick:function(){return s(!1)},children:"Done"})})]})},z=function(){var e=Object(i.useState)(0),t=Object(j.a)(e,2);t[0],t[1];return Object(a.jsxs)(T,{children:[Object(a.jsx)(f.a,{id:"aboutme",style:{padding:"8em 0em"},vertical:!0,children:Object(a.jsx)(w.a,{container:!0,stackable:!0,verticalAlign:"middle",children:Object(a.jsxs)(w.a.Row,{children:[Object(a.jsxs)(w.a.Column,{width:8,children:[Object(a.jsx)(u.a,{as:"h3",style:{fontSize:"2em"},children:"About me"}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"Full Stack Developer adapt in all stages of advanced web development. Knowledgeable in user interface, testing and debugging processes. Bringing forth expertise in design, testing and maintenance of web systems."}),Object(a.jsx)(u.a,{as:"h3",style:{fontSize:"2em"},children:"More then twenty years of experience"}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including React, Django, Laravel, Typescript, Python and Microsoft SQL Server, MySql and Nginx. Able to effectively self-manage during independent projects, as well as collaborate in a team setting."})]}),Object(a.jsx)(w.a.Column,{floated:"right",width:6,children:Object(a.jsx)(C.a,{rounded:!0,size:"medium",src:"me.png",circular:!0})})]})})}),Object(a.jsx)(f.a,{id:"frontend",inverted:!0,style:{padding:"8em 0em"},vertical:!0,children:Object(a.jsxs)(w.a,{container:!0,stackable:!0,verticalAlign:"middle",children:[Object(a.jsx)(w.a.Row,{children:Object(a.jsx)(w.a.Column,{children:Object(a.jsx)(u.a,{inverted:!0,textAlign:"center",as:"h3",style:{fontSize:"2.3em"},children:"Front End Development"})})}),Object(a.jsxs)(w.a.Row,{children:[Object(a.jsx)(w.a.Column,{width:3,children:Object(a.jsx)(p.a,{name:"react",color:"purple",size:"massive"})}),Object(a.jsx)(w.a.Column,{width:4,children:Object(a.jsxs)(A.a,{bulleted:!0,children:[Object(a.jsx)(A.a.Item,{style:{color:"#D95C5C"},children:"React"}),Object(a.jsx)(A.a.Item,{style:{color:"#E07B53"},children:"Higher Order Components"}),Object(a.jsx)(A.a.Item,{style:{color:"#F2C61F"},children:"Redux / Redux Form"}),Object(a.jsx)(A.a.Item,{style:{color:"#b5cc18"},children:"React Transitions Group"}),Object(a.jsx)(A.a.Item,{style:{color:"#21ba45"},children:"Styled Components / CSS Modules"}),Object(a.jsx)(A.a.Item,{style:{color:"#00b5ad"},children:"CSS / Sass / BEM"}),Object(a.jsx)(A.a.Item,{style:{color:"#3B83C0"},children:"Testing / Jest / Enzyme"}),Object(a.jsx)(A.a.Item,{style:{color:"#6435c9"},children:"Semantic UI"}),Object(a.jsx)(A.a.Item,{style:{color:"#a333c8"},children:"Redux Thunk / Async Redux"})]})}),Object(a.jsx)(w.a.Column,{width:7,children:Object(a.jsx)("p",{style:{fontSize:"1.33em",paddingLeft:"1em"},children:"I have worked with many front-end technologies. Started my carees as a Flash Developer. But with the introdcution of the frameworks by Google and Facebook I first switched to Angular and Ionic to develop mobile apps. I realized however that the React and React Native technology are more popular I decided to switch to React."})})]})]})}),Object(a.jsx)(f.a,{style:{padding:"0em"},vertical:!0,children:Object(a.jsx)(w.a,{celled:"internally",columns:"equal",stackable:!0,children:Object(a.jsxs)(w.a.Row,{textAlign:"center",children:[Object(a.jsxs)(w.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsxs)(u.a,{as:"h3",style:{fontSize:"2em"},children:[Object(a.jsx)(p.a,{name:"python"}),"Django"]}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"Django REST framework is a powerful and flexible toolkit for building Web APIs"}),Object(a.jsx)(D,{framework:"django"})]}),Object(a.jsxs)(w.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsxs)(u.a,{as:"h3",style:{fontSize:"2em"},children:[Object(a.jsx)(p.a,{name:"laravel"}),"Laravel"]}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"In my role as a Full Stack developer at the GGD/Amsterdam I worked with Laravel."}),Object(a.jsx)(D,{framework:"laravel"})]}),Object(a.jsxs)(w.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsxs)(u.a,{as:"h3",style:{fontSize:"2em"},children:[Object(a.jsx)(p.a,{name:"node js"}),"NodeJS"]}),Object(a.jsxs)("p",{style:{fontSize:"1.33em"},children:["For ",Object(a.jsx)("a",{href:"https://jalt.nl/",target:"_blank",rel:"noreferrer",children:"Jalt"})," I developed a Reporting System for their Facebook business Manager."]}),Object(a.jsx)(D,{framework:"node"})]})]})})}),Object(a.jsx)(f.a,{inverted:!0,style:{padding:"8em 0em"},vertical:!0,textAlign:"center",children:Object(a.jsxs)(w.a,{columns:"equal",container:!0,stackable:!0,verticalAlign:"middle",children:[Object(a.jsx)(w.a.Row,{children:Object(a.jsx)(w.a.Column,{children:Object(a.jsx)(u.a,{as:"h2",className:"ui icon dividing inverted header",children:Object(a.jsxs)("div",{className:"content",children:["Work",Object(a.jsx)("div",{className:"sub header",children:"Summary of my work as an employer or freelance"})]})})})}),Object(a.jsxs)(w.a.Row,{children:[Object(a.jsxs)(w.a.Column,{children:[Object(a.jsx)("h4",{className:"ui dividing inverted header",children:"Employers"}),Object(a.jsxs)(A.a,{children:[Object(a.jsx)(A.a.Item,{children:"Freelance"}),Object(a.jsx)(A.a.Item,{children:"GGD Amsterdam"}),Object(a.jsx)(A.a.Item,{children:"Fonk Amsterdam"}),Object(a.jsx)(A.a.Item,{children:"Sanoma"}),Object(a.jsx)(A.a.Item,{children:"USMedia"}),Object(a.jsx)(A.a.Item,{children:"Media Republic"}),Object(a.jsx)(A.a.Item,{children:"Ogilvy"}),Object(a.jsx)(A.a.Item,{children:"FreelanceFirm"}),Object(a.jsx)(A.a.Item,{children:"NFP"})]})]}),Object(a.jsxs)(w.a.Column,{children:[Object(a.jsx)("h4",{className:"ui dividing inverted header",children:"Projects "}),Object(a.jsxs)(A.a,{children:[Object(a.jsx)(A.a.Item,{children:"GGD Malaria App"}),Object(a.jsx)(A.a.Item,{children:"MyDailyMoves"}),Object(a.jsx)(A.a.Item,{children:"Tandenland App / GroeiGids"}),Object(a.jsx)(A.a.Item,{children:"Jalt Campaign Reports"}),Object(a.jsx)(A.a.Item,{children:"Sportrusten.nl"}),Object(a.jsx)(A.a.Item,{children:"Fixico"}),Object(a.jsx)(A.a.Item,{children:"Ikea"}),Object(a.jsx)(A.a.Item,{children:"Ford Nederland"}),Object(a.jsx)(A.a.Item,{children:"Tommy Hilfiger"})]})]}),Object(a.jsxs)(w.a.Column,{children:[Object(a.jsx)("h4",{className:"ui dividing inverted header",children:"More "}),Object(a.jsxs)(A.a,{children:[Object(a.jsx)(A.a.Item,{children:"Nuon"}),Object(a.jsx)(A.a.Item,{children:"Red Bull"}),Object(a.jsx)(A.a.Item,{children:"Tempo Team"}),Object(a.jsx)(A.a.Item,{children:"Andrelon"}),Object(a.jsx)(A.a.Item,{children:"KPN"}),Object(a.jsx)(A.a.Item,{children:"HVA"}),Object(a.jsx)(A.a.Item,{children:"and much more"}),Object(a.jsx)(A.a.Item,{children:"\xa0"}),Object(a.jsx)(A.a.Item,{}),Object(a.jsx)(A.a.Item,{}),Object(a.jsx)(A.a.Item,{})]})]})]})]})}),Object(a.jsx)(f.a,{style:{padding:"8em 0em"},vertical:!0,children:Object(a.jsxs)(O.a,{text:!0,textAlign:"center",children:[Object(a.jsxs)(u.a,{as:"h2",icon:!0,children:[Object(a.jsx)(p.a,{name:"js",circular:!0}),Object(a.jsxs)("div",{className:"content",children:["Javascript",Object(a.jsx)("div",{className:"sub header",children:"I am fully comfortable with NextGen Javascript"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(S.a,{children:"ES6"}),Object(a.jsx)(S.a,{children:"ES7"}),Object(a.jsx)(S.a,{children:"ES8"}),Object(a.jsx)(S.a,{children:"ES9"}),Object(a.jsx)(S.a,{children:"Higher Order Functions"}),Object(a.jsx)(S.a,{children:"Functional Programming"}),Object(a.jsx)(S.a,{children:"Currying"}),Object(a.jsx)(S.a,{children:"Pure Functions"}),Object(a.jsx)(S.a,{children:"Asynchronous JavaScript"}),Object(a.jsx)(S.a,{children:"Callbacks, Promises, Async/Await"})]})]})}),Object(a.jsx)(f.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"},children:Object(a.jsx)(O.a,{children:Object(a.jsx)(w.a,{divided:!0,inverted:!0,stackable:!0,children:Object(a.jsxs)(w.a.Row,{children:[Object(a.jsxs)(w.a.Column,{width:3,children:[Object(a.jsx)(u.a,{inverted:!0,as:"h4",content:"About"}),Object(a.jsxs)(A.a,{link:!0,inverted:!0,children:[Object(a.jsxs)(A.a.Item,{as:"a",href:"https://flyingwip.github.io/",children:[Object(a.jsx)("i",{className:"github inverted icon"}),"Github"]}),Object(a.jsxs)(A.a.Item,{as:"a",children:[Object(a.jsx)(p.a,{name:"mail",inverted:!0}),"[martijnwip](@)[gmail][com]"]}),Object(a.jsxs)(A.a.Item,{as:"a",children:[Object(a.jsx)(p.a,{name:"twitter",inverted:!0}),"Twitter"]}),Object(a.jsxs)(A.a.Item,{as:"a",children:[Object(a.jsx)(p.a,{name:"instagram"}),"Instagram"]})]})]}),Object(a.jsxs)(w.a.Column,{width:3,children:[Object(a.jsx)(u.a,{inverted:!0,as:"h4",content:"Services"}),Object(a.jsxs)(A.a,{link:!0,inverted:!0,children:[Object(a.jsx)(A.a.Item,{as:"a",children:"Frontend Development"}),Object(a.jsx)(A.a.Item,{as:"a",children:"Full Stack Development"})]})]}),Object(a.jsxs)(w.a.Column,{width:7,children:[Object(a.jsx)(u.a,{as:"h4",inverted:!0,children:"Martijn Wip"}),Object(a.jsx)("div",{children:"Full Stack Developer"})]})]})})})})]})},H=n(173),B=n(104),_=n.n(B),G=(n(151),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showBalloon:!0},e.toggle=function(){e.setState((function(e){return{showBalloon:!e.showBalloon,highlightedMenuItem:!1}}))},e.toggleHighlightedMenuItem=function(){e.setState((function(e){return{highlightedMenuItem:!e.highlightedMenuItem}}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("button",{className:_()("toggler",{"toggler--active":this.state.showBalloon}),onClick:this.toggle,children:"Menu"}),Object(a.jsx)(H.a,{in:this.state.showBalloon,timeout:350,classNames:"balloon",unmountOnExit:!0,appear:!0,onEnter:function(){return console.log("onEnter")},onEntering:function(){return console.log("onEntering")},onEntered:this.toggleHighlightedMenuItem,onExit:this.toggleHighlightedMenuItem,onExiting:function(){return console.log("onExiting")},onExited:function(){return console.log("onExited")},children:Object(a.jsx)("div",{className:"top-menu",children:Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("li",{className:"list-item",children:"Home"}),Object(a.jsx)("li",{className:_()("list-item",{"list-item--active":this.state.highlightedMenuItem}),children:"Profile"}),Object(a.jsx)("li",{className:"list-item",children:"Favorites"}),Object(a.jsx)("li",{className:"list-item",children:"Sign out"})]})})})]})}}]),n}(c.a.Component)),L=n(124),J=n(181),q=n(175),W=(n(152),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).items=[{name:"Potato",id:Object(q.a)()},{name:"Carrot",id:Object(q.a)()},{name:"Pepper",id:Object(q.a)()},{name:"Eggplant",id:Object(q.a)()},{name:"Onion",id:Object(q.a)()},{name:"Garlic",id:Object(q.a)()}],e.state={favorites:[]},e.toggleInFavorites=function(t){var n;n=e.state.favorites.find((function(e){return e.id===t}))?e.state.favorites.filter((function(e){return e.id!==t})):[].concat(Object(L.a)(e.state.favorites),[e.items.find((function(e){return t===e.id}))]),e.setState({favorites:n})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("ul",{className:"ingredients",children:this.items.map((function(t){var n=t.id,i=t.name;return Object(a.jsxs)("li",{className:"ingredient",onClick:function(){return e.toggleInFavorites(n)},children:[i,Object(a.jsx)("span",{className:"star",children:e.state.favorites.find((function(e){return e.id===n}))?"\u2605":"\u2606"})]},n)}))}),Object(a.jsxs)("div",{className:"favorites",children:[Object(a.jsx)("p",{children:"My Favorites:"}),Object(a.jsx)(J.a,{component:"ol",children:this.state.favorites.map((function(e){var t=e.id,n=e.name;return Object(a.jsx)(H.a,{timeout:500,classNames:"fade",children:Object(a.jsx)("li",{className:"favorite",children:n})},t)}))})]})]})}}]),n}(i.Component));s.a.render(Object(a.jsx)(l.a,{children:Object(a.jsxs)(o,{children:[Object(a.jsx)(l.b,{path:"/",exact:!0,component:z}),Object(a.jsx)(l.b,{path:"/css-transition",exact:!0,component:G}),Object(a.jsx)(l.b,{path:"/group-transition",exact:!0,component:W})]})}),document.querySelector("#root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.7a8aaefb.chunk.js.map