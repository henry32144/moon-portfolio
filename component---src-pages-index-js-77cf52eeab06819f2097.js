(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7pJ2":function(e,t,r){e.exports=r.p+"static/avatar-64e219b5f12c1233e3c2937a6c4548c9.jpg"},"8/g6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=r("kNCj")},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),c=a(r("pVnL")),l=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),r=p(t);return g[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,x=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&l.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+r+a+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(C,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,n(a),s):s})),C=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(v||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=p(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,x=e.itemProp,S=e.loading,O=e.draggable,R=g||h;if(!R)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,c.default)({opacity:N?1:0,transition:P?"opacity "+b+"ms":"none"},s),T="boolean"==typeof v?"lightgray":v,k={transitionDelay:b+"ms"},H=(0,c.default)({opacity:this.state.imgLoaded?0:1},P&&k,s,f),W={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:x},V=this.state.isHydrated?m(R):R[0];if(g)return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&k)}),V.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:W,imageVariants:R,generateSources:j}),V.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:W,imageVariants:R,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(C,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:r,title:t,loading:S},V,{imageVariants:R}))}}));if(h){var M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete M.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},P&&k)}),V.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:W,imageVariants:R,generateSources:j}),V.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:W,imageVariants:R,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(C,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:r,title:t,loading:S},V,{imageVariants:R}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function T(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}N.propTypes={resolutions:P,sizes:L,fixed:T(d.default.oneOfType([P,d.default.arrayOf(P)])),fluid:T(d.default.oneOfType([L,d.default.arrayOf(L)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=N;t.default=k},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=(r("Wbzz"),r("Bl7J")),o=(r("9eSz"),r("vrFN")),s=r("R/WZ"),c=(r("E9XD"),r("Ff2n")),l=r("wx14"),d=r("iuhU"),u=r("H2TA"),f=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var g=a.forwardRef((function(e,t){var r=e.alignContent,n=void 0===r?"stretch":r,i=e.alignItems,o=void 0===i?"stretch":i,s=e.classes,u=e.className,f=e.component,p=void 0===f?"div":f,m=e.container,g=void 0!==m&&m,h=e.direction,v=void 0===h?"row":h,b=e.item,y=void 0!==b&&b,x=e.justify,w=void 0===x?"flex-start":x,S=e.lg,E=void 0!==S&&S,j=e.md,O=void 0!==j&&j,R=e.sm,I=void 0!==R&&R,z=e.spacing,C=void 0===z?0:z,N=e.wrap,P=void 0===N?"wrap":N,L=e.xl,T=void 0!==L&&L,k=e.xs,H=void 0!==k&&k,W=e.zeroMinWidth,V=void 0!==W&&W,M=Object(c.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),q=Object(d.a)(s.root,u,g&&[s.container,0!==C&&s["spacing-xs-".concat(String(C))]],y&&s.item,V&&s.zeroMinWidth,"row"!==v&&s["direction-xs-".concat(String(v))],"wrap"!==P&&s["wrap-xs-".concat(String(P))],"stretch"!==o&&s["align-items-xs-".concat(String(o))],"stretch"!==n&&s["align-content-xs-".concat(String(n))],"flex-start"!==w&&s["justify-xs-".concat(String(w))],!1!==H&&s["grid-xs-".concat(String(H))],!1!==I&&s["grid-sm-".concat(String(I))],!1!==O&&s["grid-md-".concat(String(O))],!1!==E&&s["grid-lg-".concat(String(E))],!1!==T&&s["grid-xl-".concat(String(T))]);return a.createElement(p,Object(l.a)({className:q,ref:t},M))})),h=Object(u.a)((function(e){return Object(l.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return f.forEach((function(a){var n=e.spacing(a);0!==n&&(r["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(n,2)),width:"calc(100% + ".concat(m(n),")"),"& > $item":{padding:m(n,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var a={};p.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?Object(l.a)(e,a):e[t.breakpoints.up(r)]=a}(t,e,r),t}),{}))}),{name:"MuiGrid"})(g),v=r("KQm4"),b=(r("17x9"),r("bv9d"));var y=function(e){var t=function(t){var r=e(t);return t.css?Object(l.a)({},Object(b.a)(r,e(Object(l.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(v.a)(e.filterProps)),t};var x=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?Object(b.a)(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},w=r("rePB"),S=r("LybE");function E(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var j=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,n=e.themeKey,i=e.transform,o=function(e){if(null==e[t])return null;var r=e[t],o=E(e.theme,n)||{};return Object(S.a)(e,r,(function(e){var t;return"function"==typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=E(o,e)||e,i&&(t=i(t))),!1===a?t:Object(w.a)({},a,t)}))};return o.propTypes={},o.filterProps=[t],o};function O(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var R=x(j({prop:"border",themeKey:"borders",transform:O}),j({prop:"borderTop",themeKey:"borders",transform:O}),j({prop:"borderRight",themeKey:"borders",transform:O}),j({prop:"borderBottom",themeKey:"borders",transform:O}),j({prop:"borderLeft",themeKey:"borders",transform:O}),j({prop:"borderColor",themeKey:"palette"}),j({prop:"borderRadius",themeKey:"shape"})),I=x(j({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),j({prop:"display"}),j({prop:"overflow"}),j({prop:"textOverflow"}),j({prop:"visibility"}),j({prop:"whiteSpace"})),z=x(j({prop:"flexBasis"}),j({prop:"flexDirection"}),j({prop:"flexWrap"}),j({prop:"justifyContent"}),j({prop:"alignItems"}),j({prop:"alignContent"}),j({prop:"order"}),j({prop:"flex"}),j({prop:"flexGrow"}),j({prop:"flexShrink"}),j({prop:"alignSelf"}),j({prop:"justifyItems"}),j({prop:"justifySelf"})),C=x(j({prop:"gridGap"}),j({prop:"gridColumnGap"}),j({prop:"gridRowGap"}),j({prop:"gridColumn"}),j({prop:"gridRow"}),j({prop:"gridAutoFlow"}),j({prop:"gridAutoColumns"}),j({prop:"gridAutoRows"}),j({prop:"gridTemplateColumns"}),j({prop:"gridTemplateRows"}),j({prop:"gridTemplateAreas"}),j({prop:"gridArea"})),N=x(j({prop:"position"}),j({prop:"zIndex",themeKey:"zIndex"}),j({prop:"top"}),j({prop:"right"}),j({prop:"bottom"}),j({prop:"left"})),P=x(j({prop:"color",themeKey:"palette"}),j({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),L=j({prop:"boxShadow",themeKey:"shadows"});function T(e){return e<=1?"".concat(100*e,"%"):e}var k=j({prop:"width",transform:T}),H=j({prop:"maxWidth",transform:T}),W=j({prop:"minWidth",transform:T}),V=j({prop:"height",transform:T}),M=j({prop:"maxHeight",transform:T}),q=j({prop:"minHeight",transform:T}),A=(j({prop:"size",cssProperty:"width",transform:T}),j({prop:"size",cssProperty:"height",transform:T}),x(k,H,W,V,M,q,j({prop:"boxSizing"}))),G=r("+Hmc"),B=x(j({prop:"fontFamily",themeKey:"typography"}),j({prop:"fontSize",themeKey:"typography"}),j({prop:"fontStyle",themeKey:"typography"}),j({prop:"fontWeight",themeKey:"typography"}),j({prop:"letterSpacing"}),j({prop:"lineHeight"}),j({prop:"textAlign"})),F=r("2mql"),K=r.n(F),_=r("RD7I");function D(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}var J=r("cNwE"),U=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.name,i=Object(c.a)(r,["name"]);var o,s=a,u="function"==typeof t?function(e){return{root:function(r){return t(Object(l.a)({theme:e},r))}}}:{root:t},f=Object(_.a)(u,Object(l.a)({Component:e,name:a||e.displayName,classNamePrefix:s},i));t.filterProps&&(o=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=n.a.forwardRef((function(t,r){var a=t.children,i=t.className,s=t.clone,u=t.component,p=Object(c.a)(t,["children","className","clone","component"]),m=f(t),g=Object(d.a)(m.root,i),h=p;if(o&&(h=D(h,o)),s)return n.a.cloneElement(a,Object(l.a)({className:Object(d.a)(a.props.className,g)},h));if("function"==typeof a)return a(Object(l.a)({className:g},h));var v=u||e;return n.a.createElement(v,Object(l.a)({ref:r,className:g},h),a)}));return K()(p,e),p}}(e);return function(e,r){return t(e,Object(l.a)({defaultTheme:J.a},r))}},X=y(x(R,I,z,C,N,P,L,A,G.b,B)),Q=U("div")(X,{name:"MuiBox"}),Z=r("y9eO"),Y=r.n(Z),$=r("lJuC"),ee=r.n($),te=r("RwSH"),re=r.n(te),ae=r("7pJ2"),ne=r.n(ae),ie=Object(s.a)((function(e){var t;return{root:(t={flexGrow:1,width:"100%",height:"calc(100vh - 56px)"},t["@media (min-width: 0px) and (orientation: landscape)"]={height:"calc(100vh - 48px)"},t[e.breakpoints.up("sm")]={height:"calc(100vh - 64px)"},t),container:{flexGrow:1,height:"100%"},avatar:{width:"200px",height:"200px",objectFit:"cover",margin:"0 auto",borderRadius:"50%"},moon:{width:"200px",height:"200px",borderRadius:"100%",background:"#ddd",margin:"0 auto",transition:"1s",position:"absolute",boxShadow:"0 0 50px rgb(255 215 0 / 0.75), 0 0 150px rgb(255 215 0 / 0.75), inset 0 20px 20px 20px rgb(245 245 245 / 0.5), inset 30px 0 35px 11px rgb(255 255 240 / 0.5)","&:hover":{boxShadow:"0 0 0px tomato,0 0 0px orange, inset 0 0px 0px 0px #ddd, inset 0px 0 0px 0px #ccc",background:"rgb(0,0,0,0)",transition:"1s"}},iconContainer:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},icon:{fontSize:44,color:e.palette.secondary.main,transition:"transform .2s","&:hover":{transform:"scale(1.25)"}}}})),oe=function(e){e.siteTitle;var t=ie();return n.a.createElement("div",{className:t.root},n.a.createElement(h,{container:!0,direction:"row",justify:"center",alignItems:"center",className:t.container},n.a.createElement(h,{item:!0,container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(h,{item:!0},n.a.createElement("a",{href:"https://henry32144.github.io/hugo-website/"},n.a.createElement(Q,{className:t.moon}),n.a.createElement("img",{className:t.avatar,alt:"CHENGHAN WU",src:ne.a}))),n.a.createElement(h,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center",className:t.iconContainer,spacing:1},n.a.createElement(h,{item:!0},n.a.createElement("a",{href:"mailto:henry3214456@gmail.com"},n.a.createElement(Y.a,{className:t.icon}))),n.a.createElement(h,{item:!0},n.a.createElement("a",{href:"https://www.linkedin.com/in/cheng-han-wu-0803/?locale=en_US"},n.a.createElement(ee.a,{className:t.icon}))),n.a.createElement(h,{item:!0},n.a.createElement("a",{href:"https://github.com/henry32144"},n.a.createElement(re.a,{style:{fontSize:"36px"},className:t.icon})))))))};oe.defaultProps={};var se=oe,ce=r("Ji2X");t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(ce.a,{maxWidth:"lg"},n.a.createElement(o.a,{title:"Home"}),n.a.createElement(se,null)))}},RwSH:function(e,t,r){"use strict";var a=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("q1tI")),o=(0,a(r("8/g6")).default)(i.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=o},kNCj:function(e,t,r){"use strict";r.r(t),r.d(t,"capitalize",(function(){return a.a})),r.d(t,"createChainedFunction",(function(){return n})),r.d(t,"createSvgIcon",(function(){return p})),r.d(t,"debounce",(function(){return m.a})),r.d(t,"deprecatedPropType",(function(){return g})),r.d(t,"isMuiElement",(function(){return h})),r.d(t,"ownerDocument",(function(){return v})),r.d(t,"ownerWindow",(function(){return b})),r.d(t,"requirePropFactory",(function(){return y.a})),r.d(t,"setRef",(function(){return x.a})),r.d(t,"unsupportedProp",(function(){return w})),r.d(t,"useControlled",(function(){return S})),r.d(t,"useEventCallback",(function(){return E.a})),r.d(t,"useForkRef",(function(){return j.a})),r.d(t,"unstable_useId",(function(){return O})),r.d(t,"useIsFocusVisible",(function(){return R.a}));var a=r("NqtD");r("E9XD");function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),(function(){}))}var i=r("wx14"),o=r("q1tI"),s=r.n(o),c=r("Ff2n"),l=r("iuhU"),d=r("H2TA"),u=o.forwardRef((function(e,t){var r=e.children,n=e.classes,s=e.className,d=e.color,u=void 0===d?"inherit":d,f=e.component,p=void 0===f?"svg":f,m=e.fontSize,g=void 0===m?"default":m,h=e.htmlColor,v=e.titleAccess,b=e.viewBox,y=void 0===b?"0 0 24 24":b,x=Object(c.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(p,Object(i.a)({className:Object(l.a)(n.root,s,"inherit"!==u&&n["color".concat(Object(a.a)(u))],"default"!==g&&n["fontSize".concat(Object(a.a)(g))]),focusable:"false",viewBox:y,color:h,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},x),r,v?o.createElement("title",null,v):null)}));u.muiName="SvgIcon";var f=Object(d.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u);function p(e,t){var r=function(t,r){return s.a.createElement(f,Object(i.a)({ref:r},t),e)};return r.muiName=f.muiName,s.a.memo(s.a.forwardRef(r))}var m=r("l3Wi");function g(e,t){return function(){return null}}function h(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function v(e){return e&&e.ownerDocument||document}function b(e){return v(e).defaultView||window}var y=r("ueBp"),x=r("GIek");function w(e,t,r,a,n){return null}function S(e){var t=e.controlled,r=e.default,a=(e.name,e.state,o.useRef(void 0!==t).current),n=o.useState(r),i=n[0],s=n[1];return[a?t:i,o.useCallback((function(e){a||s(e)}),[])]}var E=r("Ovef"),j=r("bfFb");function O(e){var t=o.useState(e),r=t[0],a=t[1],n=e||r;return o.useEffect((function(){null==r&&a("mui-".concat(Math.round(1e5*Math.random())))}),[r]),n}var R=r("G7As")},lJuC:function(e,t,r){"use strict";var a=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("q1tI")),o=(0,a(r("8/g6")).default)(i.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=o},ueBp:function(e,t,r){"use strict";function a(e){return function(){return null}}r.d(t,"a",(function(){return a}))},y9eO:function(e,t,r){"use strict";var a=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("q1tI")),o=(0,a(r("8/g6")).default)(i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=o}}]);
//# sourceMappingURL=component---src-pages-index-js-77cf52eeab06819f2097.js.map