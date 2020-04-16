(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"26TT":function(e,t,n){"use strict";n.r(t);var s=n("5fFP"),a={head:{title:function(){return{inner:"Extension"}}},data:function(){return{endpoint:"/datatable/extensions"}},methods:{destroy:function(e){axios.delete("/api/extensions/"+e).then((function(e){s.a.dispatch("navigation/fetchAdminNavigation"),toast("Extension successfully deleted.","success"),proton().$emit("refresh-datatable-extensions")}))}}},o=n("KHd+"),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"seedling"}},[e._v("Extensions")])],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"content-container"},[n("p-table",{key:"extensions_table",attrs:{endpoint:e.endpoint,id:"extensions","sort-by":"name","primary-key":"handle"},scopedSlots:e._u([{key:"name",fn:function(t){return[n("div",{staticClass:"flex items-center"},[n("p-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),n("router-link",{attrs:{to:{name:"extensions.edit",params:{extension:t.record.id}}}},[e._v(e._s(t.record.name))])],1)]}},{key:"handle",fn:function(t){return[e._v("\n                    "+e._s(t.record.handle)+"\n                ")]}},{key:"type",fn:function(t){return[n("span",{staticClass:"badge"},[e._v(e._s(t.record.type))])]}},{key:"description",fn:function(t){return[n("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[n("p-actions",{key:"extension_"+t.record.id+"_actions",attrs:{id:"extension_"+t.record.id+"_actions"}},[n("p-dropdown-link",{attrs:{to:{name:"extensions.edit",params:{extension:t.record.id}}}},[e._v("Edit")]),e._v(" "),n("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-extension",value:t.record,expression:"table.record",arg:"delete-extension"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),e._v(" "),n("portal",{attrs:{to:"modals"}},[n("p-modal",{key:"delete_extension",attrs:{name:"delete-extension",title:"Delete Extension"},scopedSlots:e._u([{key:"footer",fn:function(t){return[n("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-extension",arg:"delete-extension"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(n){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),n("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-extension",arg:"delete-extension"}]},[e._v("Cancel")])]}}])},[n("p",[e._v("Are you sure you want to permenantly delete this extension?")])])],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);