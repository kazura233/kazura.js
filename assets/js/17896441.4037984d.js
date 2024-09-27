"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{2651:(e,t,n)=>{n.d(t,{A:()=>c});n(7378);var s=n(3372),a=n(8971),i=n(5606),l=n(5486),o=n(6106);function r(e){let{className:t}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(r,{...e})]})}},9905:(e,t,n)=>{n.d(t,{A:()=>d});n(7378);var s=n(3372),a=n(8971),i=n(5606),l=n(5486),o=n(6106);function r(e){let{className:t}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,s.A)(t,i.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=n(2651);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(r,{})]})}},7372:(e,t,n)=>{n.d(t,{A:()=>g});n(7378);var s=n(3372),a=n(5606),i=n(3091),l=n(2756),o=n(1641),r=n(5780),c=n(3374),d=n(6106);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_rGir"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_o_QY"};function b(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},8807:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var s=n(7378),a=n(2311),i=n(2831),l=n(6106);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(3372),m=n(6328),h=n(8306);function v(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var b=n(287),x=n(204),g=n(5606),f=n(6326),p=n(6674);function j(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(f.A,{tags:a})})}),o&&(0,l.jsx)(p.A,{className:(0,u.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var A=n(6549),N=n(2230),L=n(5780);const C={tocCollapsibleButton:"tocCollapsibleButton_h9mJ",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_KYZ3"};function _(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",C.tocCollapsibleButton,!t&&C.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_NHNU",tocCollapsibleContent:"tocCollapsibleContent_PZxu",tocCollapsibleExpanded:"tocCollapsibleExpanded__4UP"};function k(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,n),children:[(0,l.jsx)(_,{collapsed:i,onClick:o}),(0,l.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(N.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_Yl0b"};function y(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(k,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(g.G.docs.docTocMobile,H.tocMobile)})}var M=n(6054);function w(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(M.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var B=n(9366),I=n(9567);function E(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(g.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(B.A,{as:"h1",children:n})}),(0,l.jsx)(I.A,{children:t})]})}var R=n(7372),V=n(9905);const O={docItemContainer:"docItemContainer_NiLs",docItemCol:"docItemCol_ZCvO"};function G(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(y,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(w,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&O.docItemCol),children:[(0,l.jsx)(V.A,{metadata:s}),(0,l.jsx)(b.A,{}),(0,l.jsxs)("div",{className:O.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(R.A,{}),(0,l.jsx)(x.A,{}),n.mobile,(0,l.jsx)(E,{children:t}),(0,l.jsx)(j,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function U(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(G,{children:(0,l.jsx)(n,{})})]})})}},8306:(e,t,n)=>{n.d(t,{A:()=>l});n(7378);var s=n(5780),a=n(9619),i=n(6106);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},204:(e,t,n)=>{n.d(t,{A:()=>r});n(7378);var s=n(3372),a=n(5780),i=n(5606),l=n(9926),o=n(6106);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},287:(e,t,n)=>{n.d(t,{A:()=>x});n(7378);var s=n(3372),a=n(9013),i=n(1641),l=n(5780),o=n(3862),r=n(5606),c=n(5299),d=n(9926),u=n(6106);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,o.HW)(l),x=m??(g=b).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},9619:(e,t,n)=>{n.d(t,{A:()=>l});n(7378);var s=n(3372),a=n(1641),i=n(6106);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6054:(e,t,n)=>{n.d(t,{A:()=>c});n(7378);var s=n(3372),a=n(2230);const i={tableOfContents:"tableOfContents_pNe_",docItemContainer:"docItemContainer_kW6K"};var l=n(6106);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.A,{...n,linkClassName:o,linkActiveClassName:r})})}},2230:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(7378),a=n(765);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(1641),m=n(6106);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[o,r,x,g])),(0,m.jsx)(v,{toc:f,className:n,linkClassName:o,...h})}},3864:(e,t,n)=>{n.d(t,{A:()=>o});n(7378);var s=n(3372),a=n(1641);const i={tag:"tag_bIDQ",tagRegular:"tagRegular_hRcZ",tagWithCount:"tagWithCount_QsCC"};var l=n(6106);function o(e){let{permalink:t,label:n,count:o,description:r}=e;return(0,l.jsxs)(a.A,{href:t,title:r,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},6326:(e,t,n)=>{n.d(t,{A:()=>r});n(7378);var s=n(3372),a=n(5780),i=n(3864);const l={tags:"tags_sivG",tag:"tag_eRLz"};var o=n(6106);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},8971:(e,t,n)=>{n.d(t,{AE:()=>r,Rc:()=>l,TT:()=>d,Uh:()=>o,Yh:()=>c});n(7378);var s=n(5780),a=n(5327),i=n(6106);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);