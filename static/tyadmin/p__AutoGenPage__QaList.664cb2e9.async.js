(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44,332],{"4KAj":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"},c=r,i=n("6VBw"),u=function(e,t){return a["createElement"](i["a"],Object.assign({},e,{ref:t,icon:c}))};u.displayName="ExportOutlined";t["default"]=a["forwardRef"](u)},"86ie":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return f})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return w}));n("k1fw");var a=n("WmNS"),r=n.n(a),c=n("9og8"),i=n("t3Un"),u=n("+n12");function l(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(r.a.mark((function e(t){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type",{params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(r.a.mark((function e(t){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],a=Object(u["c"])(t,n),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type",{method:"POST",data:a}));case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=[],c=Object(u["c"])(t,a),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type/".concat(n),{method:"PUT",data:c}));case 3:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=Object(c["a"])(r.a.mark((function e(t){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type/verbose_name",{params:t}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(r.a.mark((function e(t){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type/list_display",{params:t}));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=Object(c["a"])(r.a.mark((function e(t){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/qa_type/display_order",{params:t}));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}},IpcI:function(e,t,n){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,n){"use strict";n("DZo9");var a=n("8z0m"),r=n("oBTY"),c=n("fWQN"),i=n("mtLc"),u=n("yKVA"),l=n("879j"),s=n("q1tI"),o=n.n(s),p=n("ye1Q"),f=n("xvlK"),d=n("IpcI"),m=n.n(d);function b(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var h=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(e){var a;return Object(c["a"])(this,n),a=t.call(this,e),a.state={loading:!1,fileList:[]},a.handleChange=function(e){var t=Object(r["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),a.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return a.setState({fileList:t,imageUrl:e,loading:!1})}))},a}return Object(i["a"])(n,[{key:"render",value:function(e){var t=o.a.createElement("div",null,this.state.loading?o.a.createElement(p["default"],null):o.a.createElement(f["default"],null),o.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(n=this.props.img),o.a.createElement(a["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},n?o.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t)}}]),n}(o.a.Component);t["a"]=function(e){return o.a.createElement("div",{className:m.a.container},o.a.createElement("div",{id:"components-upload-demo-avatar"},o.a.createElement(h,e)))}},q92e:function(e,t,n){"use strict";n.r(t);n("qVdP");var a=n("jsC+"),r=(n("lUTK"),n("BvKs")),c=(n("5NDa"),n("5rEg")),i=(n("+L6B"),n("2/Rp")),u=n("oBTY"),l=(n("P2fV"),n("NJEC")),s=(n("/zsF"),n("PArb")),o=n("PpiC"),p=n("WmNS"),f=n.n(p),d=n("k1fw"),m=(n("miYZ"),n("tsqr")),b=n("9og8"),h=n("tJVT"),v=(n("y8nQ"),n("Vl3Y")),j=(n("OaEy"),n("2fM7")),O=n("G3dp"),w=n("/MfK"),y=n("xvlK"),x=n("4KAj"),E=n("8Skl"),g=n("q1tI"),k=n.n(g),I=n("Hx5s"),S=n("56R7"),C=(n("2qtc"),n("kLXV")),q=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u65b0\u5efaQa",visible:t,width:1200,onCancel:function(){return n()},footer:null},e.children)},R=q,V=n("t3Un"),T=n("+n12");function _(e){return L.apply(this,arguments)}function L(){return L=Object(b["a"])(f.a.mark((function e(t){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa",{params:t}));case 1:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function K(e){return U.apply(this,arguments)}function U(){return U=Object(b["a"])(f.a.mark((function e(t){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function A(e){return N.apply(this,arguments)}function N(){return N=Object(b["a"])(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["avatar"],a=Object(T["c"])(t,n),e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa",{method:"POST",data:a}));case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function P(e,t){return Q.apply(this,arguments)}function Q(){return Q=Object(b["a"])(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=["avatar"],r=Object(T["c"])(t,a),e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa/".concat(n),{method:"PUT",data:r}));case 3:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function F(e){return B.apply(this,arguments)}function B(){return B=Object(b["a"])(f.a.mark((function e(t){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa/list_display",{params:t}));case 1:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function J(e){return z.apply(this,arguments)}function z(){return z=Object(b["a"])(f.a.mark((function e(t){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(V["a"])("/api/xadmin/v1/qa/display_order",{params:t}));case 1:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var D=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u4fee\u6539Qa",visible:t,width:1200,onCancel:function(){return n()},footer:null},e.children)},H=D,M=n("PkmJ"),W=n("86ie"),Y=n("wd/R"),Z=n.n(Y),G=(n("Lzxq"),j["a"].Option,v["a"].Item,function(){var e=Object(g["useState"])(!1),t=Object(h["a"])(e,2),n=t[0],p=t[1],v=Object(g["useState"])(!1),j=Object(h["a"])(v,2),C=j[0],q=j[1],V=Object(g["useState"])({}),L=Object(h["a"])(V,2),U=L[0],N=L[1],Q=Object(g["useRef"])(),B=Object(g["useRef"])(),z=Object(g["useRef"])(),D=function(){var e=Object(b["a"])(f.a.mark((function e(t){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=m["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,A(Object(d["a"])({},t));case 4:return n(),m["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(T["e"])(e.t0,B,n,"\u6dfb\u52a0"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(b["a"])(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=m["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,P(t,n);case 4:return a(),m["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(T["e"])(e.t0,z,a,"\u4fee\u6539"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(b["a"])(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=m["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,a=t.map((function(e){return e.id})).join(","),e.next=7,K(a);case 7:return n(),m["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),n(),e.abrupt("return",Object(T["h"])(e.t0,"\u5220\u9664"));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),X=["time"],$=[{title:"id",hideInForm:!0,hideInSearch:!0,dataIndex:"id",valueType:"digit",rules:[]},{title:"\u8bfe\u7a0bid",dataIndex:"lessonid",rules:[{required:!0,message:"\u8bfe\u7a0bid\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u95ee\u9898\u540d\u79f0",initialValue:"",dataIndex:"title",rules:[]},{title:"\u63d0\u95ee\u8005\u5934\u50cf",hideInSearch:!0,initialValue:"",dataIndex:"avatar",valueType:"avatar",rules:[],renderFormItem:function(e,t,n){t.type,t.defaultRender,Object(o["a"])(t,["type","defaultRender"]);var a=n.getFieldValue("avatar");return k.a.createElement(M["a"],{img:a})}},{title:"\u56de\u7b54\u6570",initialValue:0,dataIndex:"answers",valueType:"digit",rules:[]},{title:"\u67e5\u770b\u6570",initialValue:0,dataIndex:"views",valueType:"digit",rules:[]},{title:"\u7ae0\u8282\u540d\u5b57",initialValue:"",dataIndex:"chapter",rules:[]},{title:"\u8bc4\u8bba\u65f6\u95f4",hideInForm:!0,dataIndex:"time",valueType:"dateTime",rules:[]},{title:"\u8bc4\u8bba\u5185\u5bb9",initialValue:"",dataIndex:"comment",rules:[]},{title:"\u95ee\u9898\u7c7b\u578b",initialValue:"",dataIndex:"type",rules:[],renderFormItem:function(e,t){var n=t.value,a=t.onChange;return Object(T["f"])(e,n,a,ye)},render:function(e,t){return Object(T["u"])(e,ke)}},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return k.a.createElement(k.a.Fragment,null,k.a.createElement(O["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(b["a"])(f.a.mark((function e(){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.time=null===t.time?t.time:Z()(t.time),q(!0),N(t);case 3:case"end":return e.stop()}}),e)})))}),k.a.createElement(s["a"],{type:"vertical"}),k.a.createElement(l["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664Qa\u5417\uff1f",placement:"topRight",onConfirm:function(){G([t]),Q.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},k.a.createElement(w["default"],{title:"\u5220\u9664",className:"icon"})))}}],ee=Object(T["j"])($),te=Object(g["useState"])([]),ne=Object(h["a"])(te,2),ae=ne[0],re=ne[1];Object(g["useEffect"])((function(){J().then((function(e){re(e.form_order)}))}),[]);var ce=Object(T["q"])(ee),ie=Object(T["j"])($),ue=Object(T["s"])(ae,ie),le=Object(u["a"])(ue),se=Object(T["j"])(ue),oe=Object(T["r"])(se),pe=Object(g["useState"])({}),fe=Object(h["a"])(pe,2),de=fe[0],me=fe[1],be=Object(g["useState"])({}),he=Object(h["a"])(be,2),ve=he[0],je=he[1];Object(g["useEffect"])((function(){F().then((function(e){me(e)}))}),[]);var Oe=Object(g["useState"])([]),we=Object(h["a"])(Oe,2),ye=we[0],xe=we[1];Object(g["useEffect"])((function(){Object(W["b"])({all:1}).then((function(e){xe(e)}))}),[]);var Ee=Object(g["useState"])([]),ge=Object(h["a"])(Ee,2),ke=ge[0],Ie=ge[1];return Object(g["useEffect"])((function(){Object(W["e"])().then((function(e){Ie(e)}))}),[]),k.a.createElement(I["c"],null,k.a.createElement(S["a"],{beforeSearchSubmit:function(e){return Object(T["i"])(e,X),e},params:ve,scroll:{x:"100%"},columnsStateMap:de,onColumnsStateChange:function(e){return me(e)},headerTitle:"Qa\u8868\u683c",actionRef:Q,rowKey:"id",toolBarRender:function(e,t){var n=t.selectedRows;return[k.a.createElement(i["a"],{type:"primary",onClick:function(){return p(!0)}},k.a.createElement(y["default"],null)," \u65b0\u5efa"),k.a.createElement(i["a"],{type:"primary",onClick:function(){return Object(T["k"])(ve,_,ce,"Qa-All")}},k.a.createElement(x["default"],null)," \u5bfc\u51fa\u5168\u90e8"),k.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22Qa",onSearch:function(e){je({search:e}),Q.current.reload()}}),n&&n.length>0&&k.a.createElement(a["a"],{overlay:k.a.createElement(r["a"],{onClick:function(){var e=Object(b["a"])(f.a.mark((function e(t){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=6;break}return e.next=3,G(n);case 3:Q.current.reloadAndRest(),e.next=7;break;case 6:"export_current"===t.key&&Object(T["l"])(n,ce,"Qa-select");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},k.a.createElement(r["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"),k.a.createElement(r["a"].Item,{key:"export_current"},"\u5bfc\u51fa\u5df2\u9009"))},k.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",k.a.createElement(E["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&k.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",k.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,n){return _(Object(d["a"])(Object(d["a"])({},e),{},{sorter:t,filter:n}))},columns:ce,rowSelection:{}}),k.a.createElement(R,{onCancel:function(){return p(!1)},modalVisible:n},k.a.createElement(S["a"],{formRef:B,onSubmit:function(){var e=Object(b["a"])(f.a.mark((function e(t){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(T["w"])(t),e.next=3,D(t);case 3:n=e.sent,n&&(p(!1),Q.current&&Q.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",search:T["x"],form:{labelCol:{span:6},labelAlign:"left"},columns:le,rowSelection:{}})),k.a.createElement(H,{onCancel:function(){return q(!1)},modalVisible:C},k.a.createElement(S["a"],{formRef:z,onSubmit:function(){var e=Object(b["a"])(f.a.mark((function e(t){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(T["w"])(t),e.next=3,Y(t,U.id);case 3:n=e.sent,n&&(q(!1),Q.current&&Q.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",search:T["x"],type:"form",form:{initialValues:U,labelCol:{span:6},labelAlign:"left"},columns:oe,rowSelection:{}})))});t["default"]=G}}]);