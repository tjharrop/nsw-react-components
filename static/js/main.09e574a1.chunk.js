/*! For license information please see main.09e574a1.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(7),i=n.n(s),l=(n(17),n(1)),o=n(2),r=n(8),d=n(9),j=n(4),b=n(12),h=n(11),m=n(5),O=n.n(m),p=n(0),u=0,f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(r.a)(this,n),a=t.call(this,e);e.header,e.closed,e.speed,e.onOpen,e.afterOpen,e.onClose,e.afterClose,e.dark;var c=e.className,s=void 0===c?"":c,i=(e.children,Object(o.a)(e,["header","closed","speed","onOpen","afterOpen","onClose","afterClose","dark","className","children"]));return a.setAriaRoles=a.setAriaRoles.bind(Object(j.a)(a)),a.toggleClasses=a.toggleClasses.bind(Object(j.a)(a)),a.removeClass=a.removeClass.bind(Object(j.a)(a)),a.addClass=a.addClass.bind(Object(j.a)(a)),a.accordionToggle=a.accordionToggle.bind(Object(j.a)(a)),a.accordionOpen=a.accordionOpen.bind(Object(j.a)(a)),a.accordionClose=a.accordionClose.bind(Object(j.a)(a)),a.toggle=a.toggle.bind(Object(j.a)(a)),a.className=s,a.attributeOptions=i,u++,a.ID="accordion".concat(u),a.closeClass=a.props.closed?"nsw-accordion--closed":"",a}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.closed!==e.closed&&(this.props.closed?this.accordionClose(this.accordionHeader):this.accordionOpen(this.accordionHeader))}},{key:"setAriaRoles",value:function(e,t,n){"closing"===n?e.setAttribute("aria-expanded",!1):e.setAttribute("aria-expanded",!0)}},{key:"toggleClasses",value:function(e,t,n,a){if("opening"===t||"open"===t)var c=n||"nsw-accordion--closed",s=a||"nsw-accordion--open";else c=a||"nsw-accordion--open",s=n||"nsw-accordion--closed";this.removeClass(e,c),this.addClass(e,s)}},{key:"removeClass",value:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(e,t){e.classList?e.classList.add(t):e.className=e.className+" "+t}},{key:"accordionToggle",value:function(e,t,n){var a=this.setAriaRoles,c=this.toggleClasses;try{window.event.cancelBubble=!0,window.event.stopPropagation()}catch(r){}void 0===e.length&&(e=[e]),"object"!=typeof n&&(n={});for(var s=0;s<e.length;s++){var i=e[s],l=i.getAttribute("aria-controls"),o=document.getElementById(l);if(null==o)throw new Error("AU.animate.Toggle cannot find the target to be toggled from inside aria-controls");o.style.display="block",function(e){O.a.animate.Toggle({element:o,property:"height",speed:t||250,prefunction:function(t,s){"opening"===s?(t.style.display="block","function"===typeof n.onOpen&&n.onOpen()):"function"===typeof n.onClose&&n.onClose(),a(e,t,s),c(e,s)},postfunction:function(e,t){"closed"===t?(e.style.display="",e.style.height="","function"===typeof n.afterOpen&&n.afterClose()):"function"===typeof n.afterClose&&n.afterOpen(),c(e,t)}})}(i)}return!1}},{key:"accordionOpen",value:function(e,t){var n=this.toggleClasses;try{window.event.cancelBubble=!0,window.event.stopPropagation()}catch(o){}void 0===e.length&&(e=[e]);for(var a=0;a<e.length;a++){var c=e[a],s=c.getAttribute("aria-controls"),i=document.getElementById(s),l=0;l="undefined"!==typeof getComputedStyle?window.getComputedStyle(i).height:i.currentStyle.height,0===parseInt(l)&&(i.style.height="0px"),i.style.display="",this.toggleClasses(i,"opening"),this.toggleClasses(c,"opening"),this.setAriaRoles(c,i,"opening"),function(e,t,a){O.a.animate.Run({element:e,property:"height",endSize:"auto",speed:t||250,callback:function(){n(a,"opening")}})}(i,t,c)}}},{key:"accordionClose",value:function(e,t){var n=this.toggleClasses;try{window.event.cancelBubble=!0,window.event.stopPropagation()}catch(l){}void 0===e.length&&(e=[e]);for(var a=0;a<e.length;a++){var c=e[a],s=c.getAttribute("aria-controls"),i=document.getElementById(s);this.toggleClasses(c,"closing"),this.setAriaRoles(c,i,"closing"),function(e,t){O.a.animate.Run({element:e,property:"height",endSize:0,speed:t||250,callback:function(){e.style.display="",e.style.height="",n(e,"close")}})}(i,t)}}},{key:"toggle",value:function(e){e.preventDefault(),this.accordionToggle(this.accordionHeader,this.props.speed,{onOpen:this.props.onOpen,afterOpen:this.props.afterOpen,onClose:this.props.onClose,afterClose:this.props.afterClose})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("section",Object(l.a)(Object(l.a)({className:"nsw-accordion ".concat(this.className).concat(this.props.dark?" nsw-accordion--dark":"")},this.attributeOptions),{},{children:[Object(p.jsx)("h2",{className:"nsw-accordion__title js-nsw-accordion ".concat(this.closeClass),"aria-controls":this.ID,"aria-expanded":!this.props.closed,ref:function(t){e.accordionHeader=t},onClick:function(t){return e.toggle(t)},children:this.props.header}),Object(p.jsx)("div",{className:"nsw-accordion__body ".concat(this.closeClass),id:this.ID,children:Object(p.jsx)("div",{className:"nsw-accordion__body-wrapper",children:this.props.children})})]}))}}]),n}(c.a.PureComponent);f.defaultProps={closed:!1};var v={primary:"nsw-button--primary",secondary:"nsw-button--secondary",danger:"nsw-button--highlight"},g=function(e){var t=e.linkComponent,n=e.link,a=e.children,c=e.as,s=e.dark,i=e.type,r=e.block,d=e.className,j=void 0===d?"":d,b=Object(o.a)(e,["linkComponent","link","children","as","dark","type","block","className"]);if(n){var h=t;return"a"===h?b.href=n:"function"===typeof h&&(b.to=n),Object(p.jsx)(h,Object(l.a)(Object(l.a)({className:"nsw-button ".concat(j," ").concat(v[c]).concat(r?" nsw-button--block":"").concat(s?" nsw-button--dark":"")},b),{},{children:a}))}return Object(p.jsx)("button",Object(l.a)(Object(l.a)({type:i,className:"nsw-button ".concat(j," ").concat(v[c]).concat(r?" nsw-button--block":"").concat(s?" nsw-button--dark":"")},b),{},{children:a}))};g.defaultProps={type:"button",as:"primary",linkComponent:"a"};var x=g,k={info:"nsw-notification--info",warning:"nsw-notification--warning",error:"nsw-notification--error",success:"nsw-notification--success"},w={info:"info",warning:"cancel",error:"error",success:"check_circle"},C=function(e){var t=e.title,n=void 0===t?"":t,a=e.as,c=e.alt,s=e.dark,i=e.children,r=e.className,d=void 0===r?"":r,j=Object(o.a)(e,["title","as","alt","dark","children","className"]);return Object(p.jsxs)("div",Object(l.a)(Object(l.a)({className:"nsw-notification ".concat(d," ").concat(s?" nsw-notification--dark au-body--dark":"").concat(c?" nsw-notification--alt au-body--alt":""," ").concat(k[a])},j),{},{children:[Object(p.jsx)("i",{focusable:"false",className:"material-icons nsw-material-icons nsw-notification__icon",children:w[a]}),Object(p.jsxs)("div",{class:"nsw-notification__content",children:[Object(p.jsx)("h4",{class:"nsw-notification__title",children:n}),i]})]}))},N=function(e){var t=e.link,n=e.dark,a=e.text,c=e.linkComponent,s=e.className,i=Object(o.a)(e,["link","dark","text","linkComponent","className"]),r=c;return"a"===r?i.href=t:"function"===typeof r&&(i.to=t),t?Object(p.jsx)(r,Object(l.a)(Object(l.a)({className:"nsw-tag ".concat(n?"nsw-tag--dark":""," ").concat(s)},i),{},{children:a})):Object(p.jsx)("span",Object(l.a)(Object(l.a)({},i),{},{className:"nsw-tag ".concat(n?"nsw-tag--dark":""," ").concat(s),children:a}))};N.defaultProps={linkComponent:"a",className:""};var y=function(e){var t=e.dark,n=e.tags,a=e.className,c=void 0===a?"":a,s=Object(o.a)(e,["dark","tags","className"]);return Object(p.jsx)("div",Object(l.a)(Object(l.a)({className:"nsw-tag-list ".concat(c)},s),{},{children:n.map((function(e,n){return Object(p.jsx)(N,Object(l.a)({dark:t,linkComponent:e.linkComponent,link:e.link,text:e.text},e.attributeOptions))}))}))};y.defaultProps={dark:!1};var _=y,P=function(e){var t=e.title,n=e.level,a=e.srOnlyTitle,c=e.dark,s=e.alt,i=(e.description,e.children),r=e.className,d=void 0===r?"":r,j=Object(o.a)(e,["title","level","srOnlyTitle","dark","alt","description","children","className"]),b="h".concat(n);return Object(p.jsx)("div",Object(l.a)(Object(l.a)({className:"nsw-callout ".concat(d).concat(c?" nsw-callout--dark":"").concat(s?" nsw-callout--alt":"")},j),{},{children:Object(p.jsxs)("div",{class:"nsw-callout__content",children:[Object(p.jsx)(b,{children:t,className:"nsw-callout__title".concat(a?" nsw-callout__title--sronly":"")}),i]})}))};P.defaultProps={level:4,srOnlyTitle:!1};var A=P,T=function(e){var t=e.link,n=e.title,a=e.li,c=void 0===a?{}:a,s=Object(o.a)(e,["link","title","li"]);return Object(p.jsx)("li",Object(l.a)(Object(l.a)({className:"nsw-page-nav__list-item"},c),{},{children:Object(p.jsx)("a",Object(l.a)(Object(l.a)({className:"nsw-page-nav__link",href:"#".concat(t)},s),{},{children:n}))}))},M=function(e){var t=e.dark,n=e.title,a=e.sections,c=e.ariaLabel,s=e.className,i=void 0===s?"":s,r=Object(o.a)(e,["dark","title","sections","ariaLabel","className"]);return Object(p.jsxs)("nav",Object(l.a)(Object(l.a)({className:"nsw-page-nav ".concat(i).concat(t?" nsw-page-nav--dark":""),ariaLabel:c},r),{},{children:[Object(p.jsx)("h2",{className:"nsw-page-nav__title",children:n}),Object(p.jsx)("ul",{className:"nsw-page-nav__list",children:a.map((function(e,t){return Object(p.jsx)(T,Object(l.a)({},e),t)}))})]}))};M.defaultProps={title:"Contents",ariaLabel:"in page navigation"};var S=M,I=function(e){e.dark;var t=e.label,n=e.items,a=e.linkComponent,c=e.className,s=void 0===c?"":c,i=Object(o.a)(e,["dark","label","items","linkComponent","className"]);return Object(p.jsx)("nav",Object(l.a)(Object(l.a)({className:"nsw-breadcrumb ".concat(s),"aria-label":t},i),{},{children:Object(p.jsx)(F,{inline:!0,linkComponent:a,items:n})}))};I.defaultProps={linkComponent:"a"};var B=function(e){var t=e.text,n=e.link,a=e.linkComponent,c=e.li,s=void 0===c?{}:c,i=e.children,r=e.onClick,d=Object(o.a)(e,["text","link","linkComponent","li","children","onClick"]),j=a;return"function"===typeof r&&(d.onClick=r,n||(n="#")),"a"===j?d.href=n:"function"===typeof j&&(d.to=n),n?Object(p.jsxs)("li",Object(l.a)(Object(l.a)({className:"nsw-breadcrumb__item"},s),{},{children:[Object(p.jsx)(j,Object(l.a)(Object(l.a)({className:"nsw-breadcrumb__link"},d),{},{children:t})),i]})):Object(p.jsxs)("li",Object(l.a)(Object(l.a)({className:"nsw-breadcrumb__item"},s),{},{children:[t,i]}))};B.defaultProps={linkComponent:"a"};var F=function(e){var t=e.inline,n=e.items,a=e.linkComponent,c=e.className,s=void 0===c?"":c,i=Object(o.a)(e,["inline","items","linkComponent","className"]);return Object(p.jsx)("ol",Object(l.a)(Object(l.a)({className:"nsw-breadcrumb__list ".concat(s).concat(t?" nsw-breadcrumb__list--inline":"")},i),{},{children:n.map((function(e,t){return Object(p.jsx)(B,Object(l.a)({linkComponent:a},e),t)}))}))};F.defaultProps={linkComponent:"a"};var L=I,D=function(e){var t=e.text,n=e.link,a=e.linkComponent,c=e.li,s=void 0===c?{}:c,i=e.children,r=e.onClick,d=Object(o.a)(e,["text","link","linkComponent","li","children","onClick"]),j=a;return"function"===typeof r&&(d.onClick=r,n||(n="#")),"a"===j?d.href=n:"function"===typeof j&&(d.to=n),n?Object(p.jsxs)("li",Object(l.a)(Object(l.a)({className:"nsw-link-list__item"},s),{},{children:[Object(p.jsxs)(j,Object(l.a)(Object(l.a)({},d),{},{children:[t,Object(p.jsx)("i",{class:"material-icons nsw-material-icons nsw-link-list__icon",focusable:"false","aria-hidden":"true",children:"east"})]})),i]})):Object(p.jsxs)("li",Object(l.a)(Object(l.a)({className:"nsw-link-list__item"},s),{},{children:[t,i]}))};D.defaultProps={linkComponent:"a"};var E=function(e){var t=e.inline,n=e.items,a=e.linkComponent,c=e.className,s=void 0===c?"":c,i=Object(o.a)(e,["inline","items","linkComponent","className"]);return Object(p.jsx)("div",{class:"nsw-link-list",children:Object(p.jsx)("ol",Object(l.a)(Object(l.a)({className:"nsw-link-list__list ".concat(s).concat(t?" nsw-link-list__list--inline":"")},i),{},{children:n.map((function(e,t){return Object(p.jsx)(D,Object(l.a)({linkComponent:a},e),t)}))}))})};E.defaultProps={linkComponent:"a"};var R=E,Y=n(10),H=n.n(Y),z=function(e){var t=e.link,n=e.headline,a=e.content,c=e.tag,s=e.date,i=e.dateMomentFormat,r=e.image,d=e.imageAlt,j=e.className,b=e.children,h=Object(o.a)(e,["link","headline","content","tag","date","dateMomentFormat","image","imageAlt","className","children"]),m="div";return void 0!==t&&(m="div",h.href=t),Object(p.jsxs)(m,Object(l.a)(Object(l.a)({className:"nsw-card ".concat(j)+"".concat(n?"nsw-card--headline":""," ")+"".concat(a?"nsw-card--content":""," ")},h),{},{children:[Object(p.jsxs)(J,{children:[n?Object(p.jsx)(U,{link:t,children:n}):"",b,s?Object(p.jsx)(G,{date:s,dateMomentFormat:i}):"",c?Object(p.jsx)(q,{children:c}):""]}),r?Object(p.jsx)(W,{src:r,alt:d}):""]}))};z.defaultProps={shadow:!1,centred:!1,clickable:!1,dark:!1,alt:!1,className:"",dateMomentFormat:"Do MMMM YYYY"};var J=function(e){var t=e.className,n=e.children,a=Object(o.a)(e,["className","children"]);return Object(p.jsxs)("div",Object(l.a)(Object(l.a)({className:"nsw-card__content ".concat(t)},a),{},{children:[n,Object(p.jsx)("i",{className:"material-icons nsw-material-icons nsw-card__icon",focusable:"false","aria-hidden":"true",children:"east"})]}))};J.defaultProps={className:""};var U=function(e){e.className;var t=e.level,n=(e.alt,e.dark,e.link),a=e.children,c=(Object(o.a)(e,["className","level","alt","dark","link","children"]),"h".concat(t));return void 0!=n?Object(p.jsx)(c,{className:"nsw-card__title",children:Object(p.jsx)("a",{href:"",className:"nsw-card__link",children:a})}):Object(p.jsx)(c,{className:"nsw-card__title",children:a})};U.defaultProps={className:"",dark:!1,alt:!1,level:2};var W=function(e){var t=e.src,n=e.className,a=e.alt,c=Object(o.a)(e,["src","className","alt"]);return Object(p.jsx)("div",{class:"nsw-card__image-area",children:Object(p.jsx)("img",Object(l.a)({className:"nsw-card__image ".concat(n),src:t,alt:a},c))})};W.defaultProps={className:""};var $=function(e){e.src;var t=e.children,n=e.className;Object(o.a)(e,["src","children","className"]);return Object(p.jsx)("p",{className:"nsw-card__copy ".concat(n),children:t})};$.defaultProps={className:""};var q=function(e){e.src;var t=e.children,n=e.className;Object(o.a)(e,["src","children","className"]);return Object(p.jsx)("p",{className:"nsw-card__tag ".concat(n),children:t})};q.defaultProps={className:""};var G=function(e){e.src,e.children;var t=e.className,n=e.dateMomentFormat,a=e.date;Object(o.a)(e,["src","children","className","dateMomentFormat","date"]);return Object(p.jsx)("p",{className:"nsw-card__date ".concat(t),children:Object(p.jsx)("time",{datetime:a,children:H()(a).format(n)})})};G.defaultProps={className:"",dateMomentFormat:"Do MMMM YYYY"};var K=z;n(20);var Q=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{class:"nsw-container",children:[Object(p.jsx)("h2",{class:"section-title",children:"Buttons"}),Object(p.jsx)(x,{children:"Primary button"}),Object(p.jsx)(x,{as:"secondary",children:"Secondary button"}),Object(p.jsx)(x,{as:"danger",children:"Danger button"}),Object(p.jsx)("h2",{class:"section-title",children:"In-page notifications"}),Object(p.jsx)(C,{as:"info",title:"Info alert",children:Object(p.jsx)("p",{children:"Content of alert"})}),Object(p.jsx)("br",{}),Object(p.jsx)(C,{as:"error",title:"Error alert",children:Object(p.jsx)("p",{children:"Content of alert"})}),Object(p.jsx)("br",{}),Object(p.jsx)(C,{as:"warning",title:"Warning alert",children:Object(p.jsx)("p",{children:"Content of alert"})}),Object(p.jsx)("br",{}),Object(p.jsx)(C,{as:"success",title:"Success alert",children:Object(p.jsx)("p",{children:"Content of alert"})}),Object(p.jsx)("h2",{class:"section-title",children:"Tags"}),Object(p.jsx)(_,{tags:[{text:"foo"},{text:"bar"},{text:"baz"}]}),Object(p.jsx)("h2",{class:"section-title",children:"Callout"}),Object(p.jsx)(A,{title:"Title of callout",children:Object(p.jsx)("p",{children:"Description of callout"})}),Object(p.jsx)("h2",{class:"section-title",children:"Cards"}),Object(p.jsx)("div",{class:"nsw-grid",children:Object(p.jsx)("div",{class:"nsw-col nsw-col-md-4",children:Object(p.jsx)(K,{date:"2021-03-17",tag:"Environment",link:"#",headline:"Card Title",image:"https://picsum.photos/id/292/400/200",imageAlt:"alt text",children:Object(p.jsx)($,{children:"Some text"})})})}),Object(p.jsx)("div",{class:"nsw-grid",children:Object(p.jsx)("div",{class:"nsw-col nsw-col-md-4",children:Object(p.jsx)(K,{content:!0,date:"2021-03-17",tag:"Environment",link:"#",headline:"Card Title",image:"https://picsum.photos/id/292/400/200",imageAlt:"alt text",children:Object(p.jsx)($,{children:"Some text"})})})}),Object(p.jsx)("div",{class:"nsw-grid",children:Object(p.jsx)("div",{class:"nsw-col nsw-col-md-4",children:Object(p.jsx)(K,{content:!0,link:"#",headline:"Card Title",children:Object(p.jsx)($,{children:"Some text"})})})}),Object(p.jsx)("div",{class:"nsw-grid",children:Object(p.jsx)("div",{class:"nsw-col nsw-col-md-4",children:Object(p.jsx)(K,{link:"#",headline:"Card Title",children:Object(p.jsx)($,{children:"Some text"})})})}),Object(p.jsx)("h2",{class:"section-title",children:"In-page nav"}),Object(p.jsx)(S,{sections:[{link:"section1",title:"Section 1"},{link:"section2",title:"Section 2"}]}),Object(p.jsx)("h2",{class:"section-title",children:"Breadcrumbs"}),Object(p.jsx)(L,{label:"Breadcrumb for this page",items:[{link:"#",text:"Home"},{link:"#",text:"Parent"},{text:"Current page"}]}),Object(p.jsx)("h2",{class:"section-title",children:"Link list"}),Object(p.jsx)(R,{items:[{link:"#",text:"Home"},{link:"#",text:"Parent"}]})]})})},V=(n(21),n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))});i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),V()}},[[23,1,2]]]);
//# sourceMappingURL=main.09e574a1.chunk.js.map