(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i);a(14),a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(1),c=a(2),s=a(4),u=a(3),m=a(8),p=a.n(m),d=(a(18),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.id,n=e.title,i=e.changeImg;return t?r.a.createElement("div",{className:"container-sticky-slider"},r.a.createElement("div",{className:"content-sticky-slider",onClick:i.bind(this,a),style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"footer-sticky-slider"},n)):void 0}}]),a}(r.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.changeImg,n={slidesPerView:4,slidesPerGroup:2,spaceBetween:40};return r.a.createElement("div",{className:"margin-top"},r.a.createElement(p.a,n,t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(d,{url:e.url,title:e.tags.split(",")[0],id:e.id,changeImg:a}))}))))}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.options,n=e.takeCellImg,i={backgroundImage:t,backgroundPosition:a.position};return r.a.createElement("div",{className:"cell",style:i,onMouseDown:n.bind(this)})}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null))},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.dropCellImg;return r.a.createElement("div",{style:{border:"1px solid black"},className:"cell",onMouseUp:e.bind(this)})}}]),a}(r.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.clearCellPuzzle;return r.a.createElement("div",{className:"button-box"},r.a.createElement("button",{className:"button",onClick:e.bind(this)},"Clear Board"))}}]),a}(r.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.takeCellImg,n=e.dropCellImg,i=e.clearCellPuzzle;return r.a.createElement("div",{className:"container-boards"},r.a.createElement("div",{className:"shuffled-puzzles"},t.targetURL?t.options.map((function(e){return r.a.createElement(g,{key:e.id,url:t.targetURL,takeCellImg:a,options:e})})):r.a.createElement("div",{className:"loader"},r.a.createElement("h2",null,"Click on the picture to complete the puzzle"),r.a.createElement(b,null))),r.a.createElement(f,{clearCellPuzzle:i.bind(this)}),r.a.createElement("div",null,r.a.createElement("h2",null,"Game board"),r.a.createElement("div",{className:"board-for-images"},t.options.map((function(e,t){return r.a.createElement(v,{key:e.id,dropCellImg:n})})))))}}]),a}(r.a.Component);function C(e){for(var t,a,n=e.length-1;n>0;n--)a=e[t=Math.floor(Math.random()*(n+1))],e[t]=e[n],e[n]=a;return e}var y=[{id:1,position:"top left"},{id:2,position:"top"},{id:3,position:"right top"},{id:4,position:"left"},{id:5,position:"center"},{id:6,position:"right"},{id:7,position:"bottom left"},{id:8,position:"bottom"},{id:9,position:"bottom right"}],E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).searchPhotoRequest=function(){return fetch("https://pixabay.com/api/?key=".concat("17518139-b73def73b5f5b784fdb869618","&image_type=photo")).then((function(e){return e.json()})).then((function(e){return e.hits})).then((function(t){var a=t.map((function(e){return{id:e.id,tags:e.tags,url:e.webformatURL}}));e.setState({images:a})}))},e.changeImgOnClick=function(t){var a=e.state.images.find((function(e){return e.id===t})).url;a='url("'.concat(a,'")'),e.setState({targetURL:a})},e.takeCellImg=function(t){var a=t.target.style,n=a.backgroundPosition,r=a.backgroundImage;if(!e.state.active&&r){var i={position:n,image:r};a.backgroundImage=null,e.setState({stylesCell:i,active:!0})}},e.dropCellImg=function(t){var a=t.target.style,n=e.state,r=n.active,i=n.stylesCell,o=i.position,l=i.posSwap,c=i.image;if(r&&!a.backgroundImage)a.backgroundPosition=o,a.backgroundImage=c,e.setState({active:!1});else if(!r&&!l){var s=a.backgroundPosition;e.setState({posSwap:s})}},e.clearCellPuzzle=function(){e.setState({targetURL:""})},e.state={options:C(y),images:[],targetURL:"",active:!1,stylesCell:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.searchPhotoRequest,1e3)}},{key:"render",value:function(){return this.state.images.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{images:this.state.images,changeImg:this.changeImgOnClick}),r.a.createElement("hr",{className:"hr-horizontal-gradient"}),r.a.createElement(k,{values:this.state,takeCellImg:this.takeCellImg,dropCellImg:this.dropCellImg,clearCellPuzzle:this.clearCellPuzzle})):r.a.createElement("div",{className:"preloader"},r.a.createElement(b,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.df2ed523.chunk.js.map