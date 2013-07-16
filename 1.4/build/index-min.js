/*! radio - v1.4 - 2013-07-16 2:02:12 PM
* Copyright (c) 2013 sirzxj; Licensed  */
KISSY.add("gallery/radio/1.4/index",function(a,b,c){function d(b,c){var e=this;c=a.merge({target:b},c),d.superclass.constructor.call(e,c)}var e=b.all;return a.extend(d,c,{render:function(){var a=this;return a._loadCss(),a._replaceKfbtn(),a._bindEvent(),a},recoverKfbtn:function(){var a,b=this,c=b.get("target"),d=b.get("kfbtn"),f=b.get("getLabelFunc");return e(d).each(function(b,d){b.hide(),e(c[d]).show(),a=f?f(e(c[d])):b.next("label"),a.detach("hover").detach("click")}),b},_replaceKfbtn:function(){var b,c,d=this,f=d.get("target"),g=d._getHtml(0),h=d._getHtml(2),i=d._getHtml(1),j=[],k=d.get("accessible"),l=d.get("getLabelFunc");return 0===f.length?!1:(f.each(function(f){if(f.hide(),d._isDisabled(f)?b=e(h).insertBefore(f).attr("ks-kfbtn-disabled","disabled").removeAttr("tabindex"):(b=d._isSelected(f)?e(i):e(g),b.insertBefore(f)),k)try{c=l?l(f).text():f.next("label").text(),b.attr("aria-label",c)}catch(m){return a.log("html\u7ed3\u6784\u4e0d\u7b26\u5408"),!1}j.push(b)}),d.set("kfbtn",j),void 0)},_loadCss:function(){var b=this,c=b.get("cssUrl");""!==c&&a.use(c,function(){})},_getHtml:function(b){var c=this,d=c.get("cls"),e=d.init,f=d.selected,g=d.disabled,h='<span tabindex="0" class="{defalutName} {secondName}"></span>',i={defalutName:e};switch(b){case 0:i.secondName="";break;case 1:i.secondName=f;break;case 2:i.secondName=g}return a.substitute(h,i)},_bindEvent:function(){var a=this,b=e(a.get("kfbtn")),c=this.get("cls").hover,d=a.get("hasLabel");a.get("target"),a.get("getLabelFunc"),b.each(function(b,e){b.on("mouseenter mouseleave",function(d){if(!a._isSelected(b)&&!a._isDisabled(b))switch(d.type){case"mouseenter":b.addClass(c);break;case"mouseleave":b.removeClass(c)}}).on("click",function(){a._isDisabled(b)||a._clickHandler.call(a,e)}).on("keyup",function(a){13===a.keyCode&&b.fire("click")}),d&&a._labelHandler(e,b)})},_labelHandler:function(a,b){var c=this,d=c.get("target"),f=e(c.get("kfbtn")),g=c.get("cls"),h=g.selected,i=(g.disabled,g.hover),j=c.get("getLabelFunc"),k=j?j(e(d[a])):b.next("label");k.on("click",function(){c._isDisabled(f[a])||c._isSelected(f[a])||(k.contains(b)&&b.detach("click"),f.each(function(a){a.removeClass(h)}),b.addClass(h),e(d[a]).prop("checked",!0))}).on("mouseenter",function(){c._isDisabled(f[a])||c._isSelected(f[a])||(k.contains(b)&&b.detach("mouseenter"),b.addClass(i))}).on("mouseleave",function(){c._isDisabled(f[a])||(k.contains(b)&&b.detach("mouseleave"),b.removeClass(i))})},_clickHandler:function(a){var b=this,c=b.get("target"),d=e(b.get("kfbtn"));kfbtn=e(b.get("kfbtn")[a]),getCls=this.get("cls"),selectedClass=getCls.selected,hoverClass=getCls.hover,e(c[a]).fire("click"),d.each(function(a){a.removeClass(selectedClass).removeClass(hoverClass)}),kfbtn.addClass(selectedClass)},_isDisabled:function(a){var b=e(a).attr("disabled"),c=e(a).attr("ks-kfbtn-disabled");return"disabled"===b||"disabled"===c},_isSelected:function(a){var b=e(a).prop("checked"),c=e(a).hasClass(this.get("cls").selected);return b||c},setDisabled:function(a){var b,c,d=this,f=d.get("kfbtn"),g=d.get("target"),h=this.get("cls"),i=h.selected,j=h.disabled,k=h.hover;return"number"==typeof a&&(b=e(f[a]),c=e(g[a]),b.attr("ks-kfbtn-disabled","disabled").removeClass(i+" "+k).addClass(j),c.attr("disabled","disabled"),b.removeAttr("tabindex")),d},setAvailabe:function(b){var c,d,f=this,g=f.get("kfbtn"),h=f.get("target"),i=this.get("cls").disabled;return a.isNumber(b)&&(c=e(g[b]),d=e(h[b]),c.removeAttr("ks-kfbtn-disabled","disabled").removeClass(i),d.removeAttr("disabled","disabled"),c.attr("tabindex","0")),f},getSelected:function(a){var b,c=this,d=c.get("target"),f=[];for(i=0,len=d.length;len>i;i++)if(b=e(d[i]),!c._isDisabled(b)&&c._isSelected(b)){if(!a)return i;f.push(i)}return a?f:null}},{ATTRS:{target:{value:"",setter:function(a){return e(a)},getter:function(a){return e(a)}},kfbtn:{value:[]},cls:{value:{init:"ks-radio",selected:"ks-radio-selected",disabled:"ks-radio-disabled",hover:"ks-radio-hover"}},cssUrl:{value:"gallery/radio/1.4/style.css"},hasLabel:{value:!1},getLabelFunc:{value:void 0,setter:function(a){return a},getter:function(a){return a}},accessible:{value:!1}}}),d},{requires:["node","base"]});