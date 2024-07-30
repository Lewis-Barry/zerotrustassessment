"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[8971],{99386:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(85893),s=n(11151);const r={},o="144: Delivery Optimization",l={id:"workshop-guidance/devices/RMD_144",title:"144: Delivery Optimization",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_144.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_144",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_144",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_144.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"143: Quality Updates",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_143"},next:{title:"145: Office Apps via Intune",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_145"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Impact on End Users",id:"impact-on-end-users",level:3},{value:"Steps to Deploy Delivery Optimization",id:"steps-to-deploy-delivery-optimization",level:3},{value:"Tying to Zero Trust",id:"tying-to-zero-trust",level:3},{value:"Reference",id:"reference",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"144-delivery-optimization",children:"144: Delivery Optimization"}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"Delivery Optimization for Windows devices in Microsoft Intune is a feature designed to reduce bandwidth consumption when downloading updates and applications. Here's a comprehensive overview:"}),"\n",(0,t.jsx)(i.h3,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Bandwidth Efficiency"}),": Delivery Optimization reduces the amount of bandwidth used by allowing devices to share updates and apps with each other, rather than downloading them individually from the internet."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Faster Updates"}),": By using peer-to-peer sharing, updates can be distributed more quickly across devices."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Cost Savings"}),": Reduces the need for expensive bandwidth upgrades, especially in environments with limited internet connectivity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Centralized Management"}),": Intune allows you to manage Delivery Optimization settings from a single console, simplifying administration."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Initial Setup Complexity"}),": Configuring Delivery Optimization settings can be complex and may require careful planning."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Network Configuration"}),": Requires proper network configuration to ensure optimal performance and security."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Compatibility Issues"}),": Some older devices or specific network configurations might not fully support all Delivery Optimization settings."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"impact-on-end-users",children:"Impact on End Users"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Improved Performance"}),": Users experience faster update downloads, reducing downtime."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Minimal Disruption"}),": Properly configured Delivery Optimization can be deployed with minimal disruption to users."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"steps-to-deploy-delivery-optimization",children:"Steps to Deploy Delivery Optimization"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Create a Profile"}),": Sign in to the Microsoft Intune admin center. Navigate to Devices > Configuration profiles > Create profile."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Select Platform and Profile Type"}),": Choose Windows 10 and later as the platform, and select Templates > Delivery Optimization."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Configure Settings"}),": Define how you want updates and apps to download. This includes settings like download mode, bandwidth limits, and caching options."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Assign Profile"}),": Assign the profile to the appropriate groups of devices or users."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Monitor and Adjust"}),": Continuously monitor the deployment and make adjustments as needed."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"tying-to-zero-trust",children:"Tying to Zero Trust"}),"\n",(0,t.jsx)(i.p,{children:"Zero Trust is a security model that assumes no implicit trust and continuously verifies every request. Deploying Delivery Optimization through Intune aligns with Zero Trust principles by:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Ensuring Secure Access"}),": Delivery Optimization settings can be configured to ensure secure peer-to-peer sharing within trusted networks."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Continuous Verification"}),": Regularly updated settings help maintain secure access, aligning with the continuous verification aspect of Zero Trust."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Reducing Attack Surface"}),": By managing update distribution centrally, Delivery Optimization reduces the potential attack surface."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Windows Delivery Optimization settings in Microsoft Intune. ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/mem/intune/configuration/delivery-optimization-windows",children:"https://learn.microsoft.com/en-us/mem/intune/configuration/delivery-optimization-windows"})]}),"\n",(0,t.jsxs)(i.li,{children:["Windows 10 Delivery Optimization settings for Intune - Microsoft Intune .... ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/mem/intune/configuration/delivery-optimization-settings",children:"https://learn.microsoft.com/en-us/mem/intune/configuration/delivery-optimization-settings"})]}),"\n",(0,t.jsxs)(i.li,{children:["Delivery Optimization settings for Windows devices in Intune. ",(0,t.jsx)(i.a,{href:"https://github.com/MicrosoftDocs/memdocs/blob/main/memdocs/intune/configuration/delivery-optimization-settings.md",children:"https://github.com/MicrosoftDocs/memdocs/blob/main/memdocs/intune/configuration/delivery-optimization-settings.md"})]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>o});var t=n(67294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);