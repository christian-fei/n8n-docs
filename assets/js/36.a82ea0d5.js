(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{417:function(t,e,o){t.exports=o.p+"assets/img/using-oauth.a8386beb.gif"},418:function(t,e,o){t.exports=o.p+"assets/img/using-access-token.74030f2a.gif"},419:function(t,e,o){t.exports=o.p+"assets/img/using-developer-api-key.0f533d1d.gif"},860:function(t,e,o){"use strict";o.r(e);var n=o(26),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"hubspot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hubspot"}},[t._v("#")]),t._v(" HubSpot")]),t._v(" "),n("p",[t._v("You can use these credentials to authenticate the following nodes with HubSpot.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/HubSpot/"}},[t._v("HubSpot")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/HubSpotTrigger/"}},[t._v("HubSpot Trigger")])],1)]),t._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("Create a "),n("a",{attrs:{href:"https://www.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot"),n("OutboundLink")],1),t._v(" account.")]),t._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[t._v("#")]),t._v(" Using OAuth")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("⛅️ Note for n8n.cloud users")]),t._v(" "),n("p",[t._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your HubSpot account to n8n.")])]),t._v(" "),n("ol",[n("li",[t._v("Access your "),n("a",{attrs:{href:"https://developers.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot Developer Home"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Manage apps")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Create app")])]),t._v(" button in the top right.")]),t._v(" "),n("li",[t._v("Specify an app name in the "),n("em",[n("strong",[t._v("Public app name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the 'Auth' tab.")]),t._v(" "),n("li",[t._v("Use the provided "),n("em",[n("strong",[t._v("Client ID")])]),t._v(" and the "),n("em",[n("strong",[t._v("Client secret")])]),t._v(" with your HubSpot OAuth2 API credentials in n8n.")]),t._v(" "),n("li",[t._v("If you are using the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/HubSpotTrigger/"}},[t._v("HubSpot Trigger")]),t._v(" node, copy the "),n("em",[n("strong",[t._v("App ID")])]),t._v(" along with the information in the previous step.")],1),t._v(" "),n("li",[t._v("Copy your OAuth Callback URL from the 'Create New Credentials' screen in n8n and paste in the "),n("em",[n("strong",[t._v("Redirect URL")])]),t._v(" section.")]),t._v(" "),n("li",[t._v("In the Scopes section, make sure that the 'Basic OAuth functionality' scope is selected from the "),n("em",[n("strong",[t._v("Add a required scope")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Select any other Scopes you plan to use with n8n.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Save")])]),t._v(" button to save your settings in HubSpot.")]),t._v(" "),n("li",[t._v("Back in n8n, click on the circle button in the OAuth section to connect your HubSpot account to n8n.")]),t._v(" "),n("li",[t._v("Click the "),n("em",[n("strong",[t._v("Save")])]),t._v(" button to save your credentials.")])]),t._v(" "),n("p",[n("img",{attrs:{src:o(417),alt:"Getting HubSpot OAuth credentials"}})]),t._v(" "),n("h2",{attrs:{id:"using-access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[t._v("#")]),t._v(" Using Access Token")]),t._v(" "),n("ol",[n("li",[t._v("Access your HubSpot dashboard.")]),t._v(" "),n("li",[t._v("Click on the gear icon on the top right.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Integrations")])]),t._v(" and then "),n("em",[n("strong",[t._v("API key")])]),t._v(".")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Create key")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Use the key with HubSpot node credentials in n8n.")])]),t._v(" "),n("p",[n("img",{attrs:{src:o(418),alt:"Getting HubSpot credentials"}})]),t._v(" "),n("h2",{attrs:{id:"using-developer-api-key-for-hubspot-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-developer-api-key-for-hubspot-trigger-node"}},[t._v("#")]),t._v(" Using Developer API Key (for HubSpot Trigger node)")]),t._v(" "),n("ol",[n("li",[t._v("Access your "),n("a",{attrs:{href:"https://developers.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot Developer Home"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("Click on 'Apps' in the top bar.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Get HubSpot API key")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Show key")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Use the displayed Developer API key with your HubSpot Trigger node credentials in n8n.")])]),t._v(" "),n("p",[n("img",{attrs:{src:o(419),alt:"Getting HubSpot Developer API key"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);