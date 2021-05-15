(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(13),s=n.n(r),o=n(17),l=n(4),i=n(14),d=n(15),h=n(19),j=n(18),b=n(16),u=n.n(b),m=function(){return u.a.get("https://randomuser.me/api/?results=40")},p=n(0);var O=function(){return Object(p.jsx)("div",{className:"card text-center",children:Object(p.jsx)("div",{id:"employee-header",className:"card-header",children:Object(p.jsx)("h2",{children:"Employee Directory"})})})};var x=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"display-4",children:"Welcome to your Employee Dashboard"}),Object(p.jsxs)("p",{className:"lead",children:["Please use the buttons below to filter employees by",Object(p.jsx)("strong",{children:" Name"}),", ",Object(p.jsx)("strong",{children:"Email"}),","," ",Object(p.jsx)("strong",{children:"Phone"}),", and ",Object(p.jsx)("strong",{children:"Birthday"})]}),Object(p.jsx)("button",{type:"button",onClick:e.handleFormSubmit,className:"btn btn-secondary btn-lg ml-2",children:"Age"})]})})})};var y=function(e){var t;return Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{"data-handle":"name",scope:"col",children:"Name"}),Object(p.jsx)("th",{"data-handle":"email",scope:"col",children:"Email"}),Object(p.jsx)("th",{"data-handle":"phone",scope:"col",children:"Phone"}),Object(p.jsx)("th",{"data-handle":"age",scope:"col",children:"Age"})]})}),Object(p.jsx)("tbody",{children:null===(t=e.employees)||void 0===t?void 0:t.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).toUpperCase().includes(e.search.toUpperCase())})).map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:Object(p.jsx)("img",{src:e.picture.medium,alt:"employee"+t})}),Object(p.jsx)("td",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(p.jsx)("td",{children:e.cell}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:new Date(e.dob.date).toLocaleDateString()}),Object(p.jsx)("td",{children:e.dob.age})]})}))})]})};var g=function(e){return Object(p.jsxs)("div",{className:"input-group mb-3",children:[Object(p.jsx)("div",{className:"input-group-prepend",children:Object(p.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Filter By Employee Name"})}),Object(p.jsx)("input",{onChange:e.handleInputChange,value:e.search,type:"text",name:"search",className:"form-control",placeholder:"Employee Name","aria-label":"Emlpoyee Name","aria-describedby":"basic-addon1"})]})},f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[],employees:[]},e.employeeGrab=function(){m().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.tableSort=function(t){var n=t.target.getAttribute("data-handle"),a=e.state.employees.map((function(e){return e}));a.sort((function(t,a){return t[n]>a[n]?1*e.state[n]:t[n]<a[n]?-1*e.state[n]:0})),e.setState(Object(l.a)({employees:a},n,-1*e.state[n]))},e.handleInputChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(l.a)({},n,a))},e.handleFormSubmit=function(t){var n=Object(o.a)(e.state.employees);console.log("Test"),n.sort((function(e,t){return e.dob.age-t.dob.age})),e.setState({employees:n})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.employeeGrab()}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsx)(x,{handleFormSubmit:this.handleFormSubmit}),Object(p.jsx)(g,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(p.jsx)(y,{search:this.state.search,employees:this.state.employees,handleFormSubmit:this.handleFormSubmit})]})}}]),n}(a.Component);var v=function(){return Object(p.jsx)(f,{})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(43),n(44),n(45);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.f6f3b2ac.chunk.js.map