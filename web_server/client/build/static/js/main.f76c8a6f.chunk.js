(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(26)},16:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(8),c=t.n(s),l=(t(16),t(1)),r=t(2),i=t(4),u=t(3),d=t(5),m=t(9),p=t.n(m),h=(t(18),t(6)),w=(t(20),t(22),function(e){function n(){return Object(l.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(r.a)(n,[{key:"redirectToUrl",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"news-container",onClick:function(){return e.redirectToUrl(e.props.news.url)}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s4 fill"},o.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),o.a.createElement("div",{className:"col s8"},o.a.createElement("div",{className:"news-intro-col"},o.a.createElement("div",{className:"news-intro-panel"},o.a.createElement("h4",null,this.props.news.title),o.a.createElement("div",{className:"news-description"},o.a.createElement("p",null,this.props.news.description),o.a.createElement("div",null,null!=this.props.news.source&&o.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&o.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.time&&o.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))))}}]),n}(o.a.Component)),v=t(10),f=t.n(v),E=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).state={news:null},e.handleScroll=e.handleScroll.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.loadMoreNews(),this.loadMoreNews=f.a.debounce(this.loadMoreNews,1e3),window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-50&&(console.log("Loading more news"),this.loadMoreNews())}},{key:"loadMoreNews",value:function(){var e=this,n=new Request("http://localhost:3000/news",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});fetch(n).then(function(e){return e.json()}).then(function(n){console.log(n),e.setState({news:e.state.news?e.state.news.concat(n):n})}).catch(function(e){return console.log(e)})}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return o.a.createElement("a",{className:"list-group-item"},o.a.createElement(w,{news:e}))});return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?o.a.createElement("div",null,this.renderNews()):o.a.createElement("div",null,o.a.createElement("div",{id:"msg-app-loading"},"Loading..."))}}]),n}(o.a.Component),g=function(e){function n(){return Object(l.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("img",{className:"logo",src:p.a,alt:"logo"}),o.a.createElement("div",{className:"container"},o.a.createElement(E,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.f76c8a6f.chunk.js.map