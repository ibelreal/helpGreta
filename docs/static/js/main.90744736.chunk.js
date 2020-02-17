(this["webpackJsonphelp-greta"]=this["webpackJsonphelp-greta"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/dioxido-de-carbono.8344664c.svg"},35:function(e,t,a){e.exports=a(51)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(30),c=a.n(r),l=a(5),o=a(4),s=a(7),u=a(6),h=a(3),d=a(8),m=a(16),f=a(31),p=a.n(f),y=(a(40),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",{className:"header__title"},"help greta"),i.a.createElement("img",{className:"header__img",src:p.a,alt:"cloud"}))}),S=(a(41),function(e){return i.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},i.a.createElement("label",{htmlFor:"searchCity",className:"form__label"},"Search for a city: "),i.a.createElement("input",{className:"form__input searchBar",type:"text",name:"searchCity",id:"searchCity",placeholder:"Madrid",value:e.valueCity,onChange:function(t){var a=t.target.value.toLowerCase();e.handleSearch(a)}}),i.a.createElement("label",{htmlFor:"isSorted",className:"form__label"},"Sort List:"),i.a.createElement("input",{className:"form__input checkbox",name:"isSorted",type:"checkbox",checked:e.isSorted,onChange:function(){e.handleSorted()}}))}),b=a(19);a(42);var E=function(e){var t=e.filterBySearch;return t&&0!==t.length?i.a.createElement("section",{className:"container"},i.a.createElement("ul",{className:"list"},!0===e.isSorted?e.filterBySearch.sort((function(e,t){return e.station.name.localeCompare(t.station.name)})).map((function(e){return i.a.createElement("li",{key:e.uid,className:"list__item"},i.a.createElement(b.b,{to:"/cities/".concat(e.uid),replace:!0},i.a.createElement("p",{className:"list__item--title"},e.station.name)))})):e.filterBySearch.map((function(e){return i.a.createElement("li",{key:e.uid,className:"list__item"},i.a.createElement(b.b,{to:"/cities/".concat(e.uid),replace:!0},i.a.createElement("p",{className:"list__item--title"},e.station.name)))})))):i.a.createElement("div",{className:"container not__found"},i.a.createElement("p",{className:"not__found"},"Oh...We can't find the city... "))},v=a(9),C=a(26),_=(a(48),a(49),function(e){var t=e.latCity,a=e.lonCity,r=Object(n.useState)({width:500,height:600,latitude:53.36,longitude:12.06,zoom:3}),c=Object(v.a)(r,1)[0];return i.a.createElement("div",{className:"container__map"},i.a.createElement(C.b,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoibGViMDAiLCJhIjoiY2s2bHlrZ3d2MGlwcDNycnJsdjIxaTV3eCJ9.EvM78HQcXB5yJV64WiFyfA"},c,{mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:function(e){e.longitude>0&&(e.longitude=0)}}),i.a.createElement(C.a,{latitude:t,longitude:a,closeButton:!1,closeOnClick:!1,anchor:"top"},i.a.createElement("div",null,"You are here"))))}),g=function(){return fetch("https://api.waqi.info/map/bounds/?latlng=64.554282,-24.228128,38.935809,28.855621&token=85c0bae54393878039985ebe5ebae7977c0c8acc").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){for(var t=[],a=0;a<10;a++)t.push(e[a]);return t})).catch((function(e){return alert("Se ha detectado un error: ".concat(e))}))},N=(a(50),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={pollution:[],searchCity:"",isSorted:!1,loading:!0},a.renderMapCities=a.renderMapCities.bind(Object(h.a)(a)),a.handleSearch=a.handleSearch.bind(Object(h.a)(a)),a.filterBySearch=a.filterBySearch.bind(Object(h.a)(a)),a.selectedCity=a.selectedCity.bind(Object(h.a)(a)),a.handleSorted=a.handleSorted.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){return t?e.setState({pollution:t,loading:!1}):e.setState({loading:!0})}))}},{key:"handleSearch",value:function(e){this.setState({searchCity:e})}},{key:"handleSorted",value:function(){!1===this.state.isSorted?this.setState({isSorted:!0}):this.setState({isSorted:!1})}},{key:"filterBySearch",value:function(){var e=this;return this.state.pollution.filter((function(t){return t.station.name.toLowerCase().includes(e.state.searchCity)}))}},{key:"selectedCity",value:function(e){for(var t={},a=0;a<this.state.pollution.length;a++)if(this.state.pollution[a].uid===e)return t.lat=this.state.pollution[a].lat,t.lon=this.state.pollution[a].lon,t}},{key:"renderMapCities",value:function(e){var t=parseInt(e.match.params.uid),a=this.selectedCity(t);if(void 0!==a)return i.a.createElement("div",{className:"map"},i.a.createElement(_,{latCity:a.lat,lonCity:a.lon}),i.a.createElement(E,{filterBySearch:this.filterBySearch(),isSorted:this.state.isSorted}))}},{key:"render",value:function(){return i.a.createElement("main",{className:"home"},i.a.createElement(y,null),i.a.createElement(S,{handleSearch:this.handleSearch,valueCity:this.state.searchCity,handleSorted:this.handleSorted}),i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/"},i.a.createElement(E,{filterBySearch:this.filterBySearch(),isSorted:this.state.isSorted})),i.a.createElement(m.a,{path:"/cities/:uid",render:this.renderMapCities})))}}]),t}(i.a.Component));c.a.render(i.a.createElement(b.a,null,i.a.createElement(N,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.90744736.chunk.js.map