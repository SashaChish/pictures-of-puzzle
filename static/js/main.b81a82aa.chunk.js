(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i);a(19),a(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(9),s=a(1),c=a(2),u=a(4),p=a(3),m=a(12),d=a.n(m),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.id,n=e.title,i=e.changeImg;return t?r.a.createElement("div",{className:"container-sticky-slider"},r.a.createElement("div",{className:"content-sticky-slider",onClick:i.bind(null,a),style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"footer-sticky-slider"},n)):void 0}}]),a}(r.a.Component);var g=function(e){var t=e.start,a=e.current,n=e.end;return r.a.createElement("div",{className:"swiper-button-container"},r.a.createElement("button",{type:"button",className:"button-swiper",onClick:t},"Start"),r.a.createElement("button",{type:"button",className:"button-swiper",onClick:a},"Current"),r.a.createElement("button",{type:"button",className:"button-swiper",onClick:n},"End"))},h=(a(23),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).goStart=function(){e.swiperRef.current.swiper.slideTo(0,1e3)},e.goCurrent=function(){var t=e.props,a=t.images,n=t.targetURL,r=e.swiperRef.current,i=a.findIndex((function(e){return e.url===n}));-1!==i&&r.swiper.slideTo(i-1,1e3)},e.goEnd=function(){var t=e.swiperRef.current,a=e.props.images.length;t.swiper.slideTo(a,1e3)},e.swiperRef=r.a.createRef(),e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.changeImg;return r.a.createElement("div",{className:"margin-top"},r.a.createElement(d.a,Object.assign({},{slidesPerView:4,slidesPerGroup:2,spaceBetween:40,grabCursor:!0,observer:!0,effect:"coverflow",coverflowEffect:{rotate:40,stretch:10,depth:150,modifier:1,slideShadows:!1},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next.swiper-button-black",prevEl:".swiper-button-prev.swiper-button-black"}},{ref:this.swiperRef}),t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f,{url:e.url,title:e.tags.split(",")[0],id:e.id,changeImg:a}))}))),r.a.createElement(g,{start:this.goStart,current:this.goCurrent,end:this.goEnd}))}}]),a}(r.a.Component)),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.id,n=e.options.item.position,i=e.takeCell,o={backgroundImage:"url(".concat(t,")"),backgroundPosition:n};return r.a.createElement("div",{className:"cell",style:o,onClick:i.bind(null,a)})}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null))},C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).fokus=function(e){e.preventDefault(),e.target.style.border="1px solid red"},e.outFokus=function(e){return e.target.style.border=null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.option,a=t.id,n=t.stylesCell,i=e.index,o=e.dropCell,l=e.takeCell,s=e.switchCell;return r.a.createElement("div",{className:"cell border",style:n,onClick:o.bind(null,a),onMouseDown:l.bind(null,i),onMouseUp:s.bind(null,i),onMouseOver:this.fokus,onMouseOut:this.outFokus})}}]),a}(r.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.perPage,a=e.clearCellPuzzle,n=e.morePictures,i=!(t<=100);return r.a.createElement("div",{className:"button-box"},r.a.createElement("button",{type:"button",className:"button",onClick:a},"Clear Boards"),r.a.createElement("button",{type:"button",className:"button",onClick:n,disabled:i},"More Pictures"))}}]),a}(r.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.takeCellImg,n=e.dropCellImg,i=e.takeCellGameBoard,o=e.switchCellGameBoard,l=e.clearCellPuzzle,s=e.morePictures,c={width:t.shuffleOptions.length<=6?"600px":"700px",height:t.shuffleOptions.length<=4?"200px":"470px"};return r.a.createElement("div",{className:"container-boards"},r.a.createElement("div",{className:"shuffled-puzzles",style:c},t.targetURL?t.shuffleOptions.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,url:t.targetURL,takeCell:a,options:e})})):r.a.createElement("div",{className:"loader"},r.a.createElement("h2",null,"Click on the picture to complete the puzzle"),r.a.createElement(v,null))),t.targetURL&&r.a.createElement(k,{perPage:t.perPage,clearCellPuzzle:l,morePictures:s}),t.targetURL&&r.a.createElement("div",null,r.a.createElement("h2",null,"Game board"),r.a.createElement("div",{className:"board-for-play"},t.options.map((function(e,a){return r.a.createElement(C,{url:t.targetURL,index:a,key:e.id,option:e,dropCell:n,takeCell:i,switchCell:o})})))))}}]),a}(r.a.Component),E=a(13);function w(e){for(var t,a,n=Object(E.a)(e),r=n.length-1;r>0;r--)a=n[t=Math.floor(Math.random()*(r+1))],n[t]=n[r],n[r]=a;return n}var O=[{id:1,item:{position:"top left"}},{id:2,item:{position:"top"}},{id:3,item:{position:"right top"}},{id:4,item:{position:"left"}},{id:5,item:{position:"center"}},{id:6,item:{position:"right"}},{id:7,item:{position:"bottom left"}},{id:8,item:{position:"bottom"}},{id:9,item:{position:"bottom right"}}],j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getImages=function(t){fetch("https://pixabay.com/api/?key=".concat("17518139-b73def73b5f5b784fdb869618","&image_type=photo&per_page=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.hits})).then((function(t){var a=t.map((function(e){return{id:e.id,tags:e.tags,url:e.webformatURL}}));e.setState({images:a})}))},e.morePictures=function(){return e.setState({perPage:e.state.perPage+20})},e.changeImgOnClick=function(t){var a=e.state,n=a.images,r=a.options,i=n.find((function(e){return e.id===t})).url,o=r.map((function(e){return e.stylesCell?(delete e.stylesCell,e):e})),l={shuffleOptions:w(O),options:o,targetCell:!1,targetURL:i};e.setState(l)},e.takeCellImg=function(t,a){var n=a.target.style,r=n.backgroundPosition,i=n.backgroundImage,o=e.state,l=o.targetCell,s=o.shuffleOptions;if(!l&&i){var c={stylesCell:{backgroundPosition:r,backgroundImage:i},shuffleOptions:s.filter((function(e){return e.id!==t})),targetCell:!0};e.setState(c)}},e.dropCellImg=function(t,a){var n=a.target.style,r=e.state,i=r.options,o=r.targetCell,s=r.stylesCell;if(o&&!n.backgroundImage){var c=i.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{stylesCell:s}):e}));e.setState({targetCell:!1,options:c})}},e.takeCellGameBoard=function(t,a){a.preventDefault(),e.setState({switchIndex:t})},e.switchCellGameBoard=function(t){var a=e.state,n=a.options,r=a.switchIndex;if(t!==r){var i=n[t];n[t]=n[r],n[r]=i,e.setState({options:n})}},e.clearCellPuzzleBoards=function(){setTimeout((function(){e.setState({targetCell:!1,stylesCell:{},targetURL:""})}),200)},e.state={options:O,shuffleOptions:[],images:[],perPage:20,targetURL:"",switchIndex:0,targetCell:!1,stylesCell:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.getImages,2e3)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.perPage;t.perPage!==a&&this.getImages(a)}},{key:"render",value:function(){return this.state.images.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{images:this.state.images,targetURL:this.state.targetURL,changeImg:this.changeImgOnClick}),r.a.createElement("hr",{className:"hr-horizontal-gradient"}),r.a.createElement(y,{values:this.state,takeCellImg:this.takeCellImg,dropCellImg:this.dropCellImg,clearCellPuzzle:this.clearCellPuzzleBoards,takeCellGameBoard:this.takeCellGameBoard,switchCellGameBoard:this.switchCellGameBoard,morePictures:this.morePictures})):r.a.createElement("div",{className:"preloader"},r.a.createElement(v,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b81a82aa.chunk.js.map