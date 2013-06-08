define("arale/popup/1.1.0/popup",["$","arale/overlay/1.1.0/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/position/1.0.0/position","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events"],function(a,b,c){var d=a("$"),e=a("arale/overlay/1.1.0/overlay"),f=e.extend({attrs:{trigger:{value:null,getter:function(a){return d(a)}},triggerType:"hover",delegateNode:{value:null,getter:function(a){var b=d(a);return b.length||(b=this.get("trigger").parent()),b}},align:{value:{baseXY:[0,"100%"],selfXY:[0,0]},setter:function(a){return a?(a.baseElement?this._specifiedBaseElement=!0:this.activeTrigger&&(a.baseElement=this.activeTrigger),a):void 0},getter:function(a){return d.extend({},a,this._specifiedBaseElement?{}:{baseElement:this.activeTrigger})}},delay:70,disabled:!1,effect:void 0,duration:250},setup:function(){f.superclass.setup.call(this),this._bindTrigger(),this._blurHide(this.get("trigger")),this.activeTrigger=this.get("trigger").eq(0)},show:function(){return this.get("disabled")?void 0:f.superclass.show.call(this)},_bindTrigger:function(){var a=this.get("triggerType");"click"===a?this._bindClick():"focus"===a?this._bindFocus():this._bindHover()},_bindClick:function(){function a(a){b.get("disabled")||b.get("trigger").each(function(c,e){a==e?(e._active=!0,b.activeTrigger=d(e)):e._active=!1})}var b=this;this.delegateEvents(this.get("delegateNode"),"click "+this.get("trigger").selector,function(b){var c=b.currentTarget;"a"===c.tagName.toLowerCase()&&b.preventDefault(),c._active===!0?this.hide():(a(c),this.show())}),this.before("hide",function(){a()})},_bindFocus:function(){var a=this,b=this.get("trigger"),c=this.get("delegateNode");this.delegateEvents(c,"focus "+b.selector,function(a){this.activeTrigger=d(a.currentTarget),this.show()}),this.delegateEvents(c,"blur "+b.selector,function(){setTimeout(function(){!a._downOnElement&&a.hide(),a._downOnElement=!1},this.get("delay"))}),this.delegateEvents("mousedown",function(){this._downOnElement=!0})},_bindHover:function(){function a(){clearTimeout(b),b=null,this.get("visible")&&(c=setTimeout(function(){h.hide()},g))}var b,c,e=this.get("trigger"),f=this.get("delegateNode"),g=this.get("delay"),h=this;return 0>g?(this._bindTooltip(),void 0):(this.delegateEvents(f,"mouseenter "+e.selector,function(a){clearTimeout(c),c=null,this.activeTrigger=d(a.currentTarget),b=setTimeout(function(){h.show()},g)}),this.delegateEvents(f,"mouseleave "+e.selector,a),this.delegateEvents("mouseenter",function(){clearTimeout(c)}),this.delegateEvents("mouseleave",a),void 0)},_bindTooltip:function(){var a=this.get("trigger"),b=this.get("delegateNode");this.delegateEvents(b,"mouseenter "+a.selector,function(a){this.activeTrigger=d(a.currentTarget),this.show()}),this.delegateEvents(b,"mouseleave "+a.selector,function(){this.hide()})},_onRenderVisible:function(a){var b=this.get("effect"),c=b?-1!==b.indexOf("fade"):!1,d=b?-1!==b.indexOf("slide"):!1,e={};d&&(e.height=a?"show":"hide"),c&&(e.opacity=a?"show":"hide"),c||d?this.element.stop(!0,!0).animate(e,this.get("duration")).css({visibility:"visible"}):this.element[a?"show":"hide"]()}});c.exports=f});
