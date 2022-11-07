"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2224],{82096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},i="Klarna",l={unversionedId:"integrations/sources/klarna",id:"integrations/sources/klarna",title:"Klarna",description:"This page contains the setup guide and reference information for the Klarna source connector.",source:"@site/../docs/integrations/sources/klarna.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/klarna",permalink:"/integrations/sources/klarna",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/klarna.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Kafka",permalink:"/integrations/sources/kafka"},next:{title:"Klaviyo",permalink:"/integrations/sources/klaviyo"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Klarna",id:"step-1-set-up-klarna",level:3},{value:"Step 2: Set up the Klarna connector in Airbyte",id:"step-2-set-up-the-klarna-connector-in-airbyte",level:2},{value:"For Airbyte Open Source:",id:"for-airbyte-open-source",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"klarna"},"Klarna"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the Klarna source connector."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://developers.klarna.com/api/#settlements-api"},"Klarna Settlements API")," is used to get the payouts and transactions for a Klarna account."),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"step-1-set-up-klarna"},"Step 1: Set up Klarna"),(0,a.kt)("p",null,"In order to get an ",(0,a.kt)("inlineCode",{parentName:"p"},"Username (UID)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," please go to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.klarna.com/"},"this")," page here you should find ",(0,a.kt)("strong",{parentName:"p"},"Merchant Portal")," button. Using this button you could log in to your production / playground in proper region. After registration / login you may find and create ",(0,a.kt)("inlineCode",{parentName:"p"},"Username (UID)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," in settings tab."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Klarna Source Connector does not support OAuth at this time due to limitations outside of control.")),(0,a.kt)("h2",{id:"step-2-set-up-the-klarna-connector-in-airbyte"},"Step 2: Set up the Klarna connector in Airbyte"),(0,a.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,a.kt)("li",{parentName:"ol"},"Set the name for your source"),(0,a.kt)("li",{parentName:"ol"},"Choose if your account is sandbox"),(0,a.kt)("li",{parentName:"ol"},"Enter your username"),(0,a.kt)("li",{parentName:"ol"},"Enter your password"),(0,a.kt)("li",{parentName:"ol"},"Enter the date you want your sync to start from"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"))),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The Klarna source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"This Source is capable of syncing the following Klarna Settlements Streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.klarna.com/api/#settlements-api-get-all-payouts"},"Payouts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.klarna.com/api/#settlements-api-get-transactions"},"Transactions"))),(0,a.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"Klarna API has ",(0,a.kt)("a",{parentName:"p",href:"https://developers.klarna.com/api/#api-rate-limiting"},"rate limiting")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Production environments"),": the API rate limit is 20 create-sessions per second on average measured over a 1-minute period. For the other operations, the API limit is 200 requests per second on average, measured over a 1 minute period\n",(0,a.kt)("strong",{parentName:"p"},"Playground environments"),": the API rate limit is one quarter (1/4th) of the rate limits of production environments."),(0,a.kt)("p",null,"Connector will handle an issue with rate limiting as Klarna returns 429 status code when limits are reached"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-24"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18385"},"18385")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Klarna Settlements Payout and Transactions API")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);