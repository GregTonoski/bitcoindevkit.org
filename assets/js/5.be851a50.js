(window.webpackJsonp=window.webpackJsonp||[]).push([[5,17],{253:function(t,e,s){},255:function(t,e,s){},256:function(t,e,s){"use strict";s.r(e);var a=s(265),i=s(263),r=s(252);function n(t,e){if("group"===e.type){const s=e.path&&Object(r.e)(t,e.path),a=e.children.some(e=>"group"===e.type?n(t,e):"page"===e.type&&Object(r.e)(t,e.path));return s||a}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:a.default,SidebarLink:i.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const a=e[s];if(n(t,a))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(r.e)(this.$route,t.regularPath)}}},l=s(7),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,a){return e("li",{key:a},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:a===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},257:function(t,e,s){},258:function(t,e,s){},260:function(t,e,s){"use strict";s(253)},261:function(t,e,s){},263:function(t,e,s){"use strict";s.r(e);var a=s(252);function i(t,e,s,a,i){const r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,s)}function r(t,e,s,n,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(a.e)(n,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,s+"#"+e.slug,e.title,u,e.level-1),r(t,e.children,s,n,o,l+1)])}))}var n={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:n,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(a.e)(n,u.path),d="auto"===u.type?p||u.children.some(t=>Object(a.e)(n,u.basePath+"#"+t.slug)):p,h="external"===u.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,u.path,u.title||u.path):i(t,u.path,u.title||u.path,d),b=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),f=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,r(t,u.children,u.basePath,n,b)];if((d||f)&&u.headers&&!a.d.test(u.path)){return[h,r(t,Object(a.c)(u.headers),u.path,n,b)]}return h}},o=(s(260),s(7)),l=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=l.exports},264:function(t,e,s){"use strict";s(255)},265:function(t,e,s){"use strict";s.r(e);var a=s(262),i=s(252),r={name:"SidebarGroup",components:{DropdownTransition:a.default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(256).default},methods:{isActive:i.e}},n=(s(264),s(7)),o=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=o.exports},266:function(t,e,s){"use strict";s(257)},267:function(t,e,s){"use strict";s(258)},269:function(t,e,s){"use strict";s.r(e);var a=s(256),i=s(276),r={name:"Sidebar",components:{SidebarLinks:a.default,NavLinks:i.default},props:["items"]},n=(s(266),s(7)),o=Object(n.a)(r,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},270:function(t,e,s){"use strict";s.r(e);var a={name:"Footer",components:{NavLink:s(254).default},computed:{links(){return this.$site.themeConfig.footer.links},copyright(){return this.$site.themeConfig.footer.copyright}}},i=(s(267),s(7)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"footer-content"},t._l(t.links,(function(s){return e("div",{key:s.title,staticClass:"footer-block"},[e("h4",[t._v(t._s(s.title))]),t._v(" "),t._l(s.children,(function(t){return e("div",{key:t.link},[e("NavLink",{attrs:{item:t}})],1)}))],2)})),0),t._v(" "),t.copyright?e("p",{staticClass:"copyright"},[t._v(t._s(t.copyright))]):t._e()])])])])}),[],!1,null,null,null);e.default=r.exports},275:function(t,e,s){"use strict";s(261)},277:function(t,e,s){"use strict";s.r(e);var a=s(286),i=s(269),r=s(270),n=s(252),o={name:"Layout",components:{Sidebar:i.default,Navbar:a.default,Footer:r.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},l=(s(275),s(7)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t._t("default")],2)]),t._v(" "),e("Footer")],1)}),[],!1,null,"b812d5fc",null);e.default=u.exports},278:function(t,e){t.exports={capitalize:t=>t.replace(/^\w/,t=>t.toUpperCase())}},377:function(t,e,s){"use strict";s.r(e);var a=s(277),i=s(278),r={name:"FrontmatterKey",components:{LayoutWrap:a.default},computed:{items(){return this.$frontmatterKey.list}},methods:{displayName(t){return this.$page.path.startsWith("/blog/tags/")?Object(i.capitalize)(t):t}}},n=s(7),o=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("LayoutWrap",[e("main",{staticClass:"page"},[e("div",{staticClass:"theme-default-content"},[this.$page.path.startsWith("/blog/tags/")?e("h1",[t._v("Tags")]):e("h1",[t._v("Authors")]),t._v(" "),e("ul",t._l(t.items,(function(s){return e("li",{key:s.name},[e("router-link",{attrs:{to:s.path}},[t._v(t._s(t.displayName(s.name)))])],1)})),0)])])])}),[],!1,null,null,null);e.default=o.exports}}]);