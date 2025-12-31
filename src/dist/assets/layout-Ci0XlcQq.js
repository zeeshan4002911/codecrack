import{_ as Si,S as dr,a as ur,b as hr,c as gr,p as pr,d as fr,O as mr,m as _r,i as Cr,e as Ei,f as yr,o as fs,g as br,ɵ as Di,h as Ii,j as E,E as Ue,R as gt,k as B,l as ce,n as vr,K as ms,q as le,V as tt,T as Xt,I as Mr,r as xr,s as Et,t as wr,u as T,v as Pr,w as _s,x as Or,C as Dt,L as It,D as Sr,y as pt,N as Er,z as Z,A as V,B as He,F as Dr,G as Pe,H as ee,J as te,M as J,P as v,Q as Ie,U as X,W as oe,X as io,Y as ki,Z as I,$ as D,a0 as Be,a1 as Ir,a2 as kr,a3 as Ar,a4 as Tr,a5 as fe,a6 as ti,a7 as Fr,a8 as R,a9 as Lr,aa as Wt,ab as re,ac as nt,ad as Cs,ae as ys,af as We,ag as Ot,ah as u,ai as k,aj as h,ak as oo,al as so,am as Br,an as de,ao as Y,ap as Ce,aq as zr,ar as ge,as as f,at as j,au as ye,av as at,aw as lt,ax as ct,ay as H,az as dt,aA as ht,aB as _,aC as L,aD as Kt,aE as ni,aF as Zn,aG as C,aH as y,aI as Vr,aJ as Ai,aK as Ti,aL as w,aM as we,aN as Rr,aO as Me,aP as bs,aQ as Fi,aR as ro,aS as Nr,aT as xe,aU as ao,aV as Hr,aW as Wr,aX as Zr,aY as Ur,aZ as Yr,a_ as lo,a$ as jr,b0 as $r,b1 as co,b2 as Gr}from"./index-BVvUDN1Q.js";import{l as Xr,e as _e}from"./monaco-editor-CNQ60DIa.js";var Kr={now:function(){return Date.now()}},Jr=(function(i){Si(o,i);function o(e,t){return i.call(this)||this}return o.prototype.schedule=function(e,t){return this},o})(dr),uo={setInterval:function(i,o){for(var e=[],t=2;t<arguments.length;t++)e[t-2]=arguments[t];return setInterval.apply(void 0,ur([i,o],hr(e)))},clearInterval:function(i){return clearInterval(i)},delegate:void 0},qr=(function(i){Si(o,i);function o(e,t){var n=i.call(this,e,t)||this;return n.scheduler=e,n.work=t,n.pending=!1,n}return o.prototype.schedule=function(e,t){var n;if(t===void 0&&(t=0),this.closed)return this;this.state=e;var s=this.id,r=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(r,s,t)),this.pending=!0,this.delay=t,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(r,this.id,t),this},o.prototype.requestAsyncId=function(e,t,n){return n===void 0&&(n=0),uo.setInterval(e.flush.bind(e,this),n)},o.prototype.recycleAsyncId=function(e,t,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return t;t!=null&&uo.clearInterval(t)},o.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},o.prototype._execute=function(e,t){var n=!1,s;try{this.work(e)}catch(r){n=!0,s=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),s},o.prototype.unsubscribe=function(){if(!this.closed){var e=this,t=e.id,n=e.scheduler,s=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,gr(s,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},o})(Jr),ho=(function(){function i(o,e){e===void 0&&(e=i.now),this.schedulerActionCtor=o,this.now=e}return i.prototype.schedule=function(o,e,t){return e===void 0&&(e=0),new this.schedulerActionCtor(this,o).schedule(t,e)},i.now=Kr.now,i})(),Qr=(function(i){Si(o,i);function o(e,t){t===void 0&&(t=ho.now);var n=i.call(this,e,t)||this;return n.actions=[],n._active=!1,n}return o.prototype.flush=function(e){var t=this.actions;if(this._active){t.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}},o})(ho),ea=new Qr(qr);function ta(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var e=pr(i),t=fr(i),n=t.args,s=t.keys,r=new mr(function(a){var l=n.length;if(!l){a.complete();return}for(var c=new Array(l),d=l,g=l,M=function(b){var S=!1;Cr(n[b]).subscribe(Ei(a,function(A){S||(S=!0,g--),c[b]=A},function(){return d--},void 0,function(){(!d||!S)&&(g||a.next(s?yr(s,c):c),a.complete())}))},p=0;p<l;p++)M(p)});return e?r.pipe(_r(e)):r}function fn(i,o){return o===void 0&&(o=ea),fs(function(e,t){var n=null,s=null,r=null,a=function(){if(n){n.unsubscribe(),n=null;var c=s;s=null,t.next(c)}};function l(){var c=r+i,d=o.now();if(d<c){n=this.schedule(void 0,c-d),t.add(n);return}a()}e.subscribe(Ei(t,function(c){s=c,r=o.now(),n||(n=o.schedule(l,i),t.add(n))},function(){a(),t.complete()},void 0,function(){s=n=null}))})}function na(i,o){return o===void 0&&(o=br),i=i??ia,fs(function(e,t){var n,s=!0;e.subscribe(Ei(t,function(r){var a=o(r);(s||!i(n,a))&&(s=!1,n=a,t.next(r))}))})}function ia(i,o){return i===o}const vs={ADP:[void 0,void 0,0],AFN:[void 0,"؋",0],ALL:[void 0,void 0,0],AMD:[void 0,"֏",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"₼"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"৳"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN¥","¥"],COP:[void 0,"$",2],CRC:[void 0,"₡",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"Kč",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E£"],ESP:[void 0,"₧",0],EUR:["€"],FJD:[void 0,"$"],FKP:[void 0,"£"],GBP:["£"],GEL:[void 0,"₾"],GHS:[void 0,"GH₵"],GIP:[void 0,"£"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["₪"],INR:["₹"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["¥",void 0,0],KHR:[void 0,"៛"],KMF:[void 0,"CF",0],KPW:[void 0,"₩",0],KRW:["₩",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"₸"],LAK:[void 0,"₭",0],LBP:[void 0,"L£",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"₮",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"₦"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["₱"],PKR:[void 0,"Rs",2],PLN:[void 0,"zł"],PYG:[void 0,"₲",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"₽"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"£"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"£"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"£",0],THB:[void 0,"฿"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"₺"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"₴"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["₫",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["¤"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};var Fn=(function(i){return i[i.Decimal=0]="Decimal",i[i.Percent=1]="Percent",i[i.Currency=2]="Currency",i[i.Scientific=3]="Scientific",i})(Fn||{}),xt=(function(i){return i[i.Zero=0]="Zero",i[i.One=1]="One",i[i.Two=2]="Two",i[i.Few=3]="Few",i[i.Many=4]="Many",i[i.Other=5]="Other",i})(xt||{}),he=(function(i){return i[i.Format=0]="Format",i[i.Standalone=1]="Standalone",i})(he||{}),U=(function(i){return i[i.Narrow=0]="Narrow",i[i.Abbreviated=1]="Abbreviated",i[i.Wide=2]="Wide",i[i.Short=3]="Short",i})(U||{}),ve=(function(i){return i[i.Short=0]="Short",i[i.Medium=1]="Medium",i[i.Long=2]="Long",i[i.Full=3]="Full",i})(ve||{});const Q={Decimal:0,Group:1,PercentSign:3,MinusSign:5,Exponential:6,Infinity:9,CurrencyDecimal:12,CurrencyGroup:13};function oa(i){return Pe(i)[ee.LocaleId]}function sa(i,o,e){const t=Pe(i),n=[t[ee.DayPeriodsFormat],t[ee.DayPeriodsStandalone]],s=Se(n,o);return Se(s,e)}function ra(i,o,e){const t=Pe(i),n=[t[ee.DaysFormat],t[ee.DaysStandalone]],s=Se(n,o);return Se(s,e)}function aa(i,o,e){const t=Pe(i),n=[t[ee.MonthsFormat],t[ee.MonthsStandalone]],s=Se(n,o);return Se(s,e)}function la(i,o){const t=Pe(i)[ee.Eras];return Se(t,o)}function Qt(i,o){const e=Pe(i);return Se(e[ee.DateFormat],o)}function en(i,o){const e=Pe(i);return Se(e[ee.TimeFormat],o)}function tn(i,o){const t=Pe(i)[ee.DateTimeFormat];return Se(t,o)}function Oe(i,o){const e=Pe(i),t=e[ee.NumberSymbols][o];if(typeof t>"u"){if(o===Q.CurrencyDecimal)return e[ee.NumberSymbols][Q.Decimal];if(o===Q.CurrencyGroup)return e[ee.NumberSymbols][Q.Group]}return t}function Li(i,o){return Pe(i)[ee.NumberFormats][o]}function ca(i){return Pe(i)[ee.Currencies]}const da=Dr;function Ms(i){if(!i[ee.ExtraData])throw new le(2303,!1)}function ua(i){const o=Pe(i);return Ms(o),(o[ee.ExtraData][2]||[]).map(t=>typeof t=="string"?Un(t):[Un(t[0]),Un(t[1])])}function ha(i,o,e){const t=Pe(i);Ms(t);const n=[t[ee.ExtraData][0],t[ee.ExtraData][1]],s=Se(n,o)||[];return Se(s,e)||[]}function Se(i,o){for(let e=o;e>-1;e--)if(typeof i[e]<"u")return i[e];throw new le(2304,!1)}function Un(i){const[o,e]=i.split(":");return{hours:+o,minutes:+e}}function ga(i,o,e="en"){const t=ca(e)[i]||vs[i]||[],n=t[1];return o==="narrow"&&typeof n=="string"?n:t[0]||i}const pa=2;function fa(i){let o;const e=vs[i];return e&&(o=e[2]),typeof o=="number"?o:pa}const ma=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,nn={},_a=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Ca(i,o,e,t){let n=Sa(i);o=Ge(e,o)||o;let r=[],a;for(;o;)if(a=_a.exec(o),a){r=r.concat(a.slice(1));const d=r.pop();if(!d)break;o=d}else{r.push(o);break}let l=n.getTimezoneOffset();t&&(l=ws(t,l),n=Oa(n,t));let c="";return r.forEach(d=>{const g=wa(d);c+=g?g(n,e,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function Cn(i,o,e){const t=new Date(0);return t.setFullYear(i,o,e),t.setHours(0,0,0),t}function Ge(i,o){const e=oa(i);if(nn[e]??={},nn[e][o])return nn[e][o];let t="";switch(o){case"shortDate":t=Qt(i,ve.Short);break;case"mediumDate":t=Qt(i,ve.Medium);break;case"longDate":t=Qt(i,ve.Long);break;case"fullDate":t=Qt(i,ve.Full);break;case"shortTime":t=en(i,ve.Short);break;case"mediumTime":t=en(i,ve.Medium);break;case"longTime":t=en(i,ve.Long);break;case"fullTime":t=en(i,ve.Full);break;case"short":const n=Ge(i,"shortTime"),s=Ge(i,"shortDate");t=on(tn(i,ve.Short),[n,s]);break;case"medium":const r=Ge(i,"mediumTime"),a=Ge(i,"mediumDate");t=on(tn(i,ve.Medium),[r,a]);break;case"long":const l=Ge(i,"longTime"),c=Ge(i,"longDate");t=on(tn(i,ve.Long),[l,c]);break;case"full":const d=Ge(i,"fullTime"),g=Ge(i,"fullDate");t=on(tn(i,ve.Full),[d,g]);break}return t&&(nn[e][o]=t),t}function on(i,o){return o&&(i=i.replace(/\{([^}]+)}/g,function(e,t){return o!=null&&t in o?o[t]:e})),i}function Le(i,o,e="-",t,n){let s="";(i<0||n&&i<=0)&&(n?i=-i+1:(i=-i,s=e));let r=String(i);for(;r.length<o;)r="0"+r;return t&&(r=r.slice(r.length-o)),s+r}function ya(i,o){return Le(i,3).substring(0,o)}function q(i,o,e=0,t=!1,n=!1){return function(s,r){let a=ba(i,s);if((e>0||a>-e)&&(a+=e),i===3)a===0&&e===-12&&(a=12);else if(i===6)return ya(a,o);const l=Oe(r,Q.MinusSign);return Le(a,o,l,t,n)}}function ba(i,o){switch(i){case 0:return o.getFullYear();case 1:return o.getMonth();case 2:return o.getDate();case 3:return o.getHours();case 4:return o.getMinutes();case 5:return o.getSeconds();case 6:return o.getMilliseconds();case 7:return o.getDay();default:throw new le(2301,!1)}}function $(i,o,e=he.Format,t=!1){return function(n,s){return va(n,s,i,o,e,t)}}function va(i,o,e,t,n,s){switch(e){case 2:return aa(o,n,t)[i.getMonth()];case 1:return ra(o,n,t)[i.getDay()];case 0:const r=i.getHours(),a=i.getMinutes();if(s){const l=ua(o),c=ha(o,n,t),d=l.findIndex(g=>{if(Array.isArray(g)){const[M,p]=g,b=r>=M.hours&&a>=M.minutes,S=r<p.hours||r===p.hours&&a<p.minutes;if(M.hours<p.hours){if(b&&S)return!0}else if(b||S)return!0}else if(g.hours===r&&g.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return sa(o,n,t)[r<12?0:1];case 3:return la(o,t)[i.getFullYear()<=0?0:1];default:throw new le(2302,!1)}}function sn(i){return function(o,e,t){const n=-1*t,s=Oe(e,Q.MinusSign),r=n>0?Math.floor(n/60):Math.ceil(n/60);switch(i){case 0:return(n>=0?"+":"")+Le(r,2,s)+Le(Math.abs(n%60),2,s);case 1:return"GMT"+(n>=0?"+":"")+Le(r,1,s);case 2:return"GMT"+(n>=0?"+":"")+Le(r,2,s)+":"+Le(Math.abs(n%60),2,s);case 3:return t===0?"Z":(n>=0?"+":"")+Le(r,2,s)+":"+Le(Math.abs(n%60),2,s);default:throw new le(2310,!1)}}}const Ma=0,mn=4;function xa(i){const o=Cn(i,Ma,1).getDay();return Cn(i,0,1+(o<=mn?mn:mn+7)-o)}function xs(i){const o=i.getDay(),e=o===0?-3:mn-o;return Cn(i.getFullYear(),i.getMonth(),i.getDate()+e)}function Yn(i,o=!1){return function(e,t){let n;if(o){const s=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,r=e.getDate();n=1+Math.floor((r+s)/7)}else{const s=xs(e),r=xa(s.getFullYear()),a=s.getTime()-r.getTime();n=1+Math.round(a/6048e5)}return Le(n,i,Oe(t,Q.MinusSign))}}function rn(i,o=!1){return function(e,t){const s=xs(e).getFullYear();return Le(s,i,Oe(t,Q.MinusSign),o)}}const jn={};function wa(i){if(jn[i])return jn[i];let o;switch(i){case"G":case"GG":case"GGG":o=$(3,U.Abbreviated);break;case"GGGG":o=$(3,U.Wide);break;case"GGGGG":o=$(3,U.Narrow);break;case"y":o=q(0,1,0,!1,!0);break;case"yy":o=q(0,2,0,!0,!0);break;case"yyy":o=q(0,3,0,!1,!0);break;case"yyyy":o=q(0,4,0,!1,!0);break;case"Y":o=rn(1);break;case"YY":o=rn(2,!0);break;case"YYY":o=rn(3);break;case"YYYY":o=rn(4);break;case"M":case"L":o=q(1,1,1);break;case"MM":case"LL":o=q(1,2,1);break;case"MMM":o=$(2,U.Abbreviated);break;case"MMMM":o=$(2,U.Wide);break;case"MMMMM":o=$(2,U.Narrow);break;case"LLL":o=$(2,U.Abbreviated,he.Standalone);break;case"LLLL":o=$(2,U.Wide,he.Standalone);break;case"LLLLL":o=$(2,U.Narrow,he.Standalone);break;case"w":o=Yn(1);break;case"ww":o=Yn(2);break;case"W":o=Yn(1,!0);break;case"d":o=q(2,1);break;case"dd":o=q(2,2);break;case"c":case"cc":o=q(7,1);break;case"ccc":o=$(1,U.Abbreviated,he.Standalone);break;case"cccc":o=$(1,U.Wide,he.Standalone);break;case"ccccc":o=$(1,U.Narrow,he.Standalone);break;case"cccccc":o=$(1,U.Short,he.Standalone);break;case"E":case"EE":case"EEE":o=$(1,U.Abbreviated);break;case"EEEE":o=$(1,U.Wide);break;case"EEEEE":o=$(1,U.Narrow);break;case"EEEEEE":o=$(1,U.Short);break;case"a":case"aa":case"aaa":o=$(0,U.Abbreviated);break;case"aaaa":o=$(0,U.Wide);break;case"aaaaa":o=$(0,U.Narrow);break;case"b":case"bb":case"bbb":o=$(0,U.Abbreviated,he.Standalone,!0);break;case"bbbb":o=$(0,U.Wide,he.Standalone,!0);break;case"bbbbb":o=$(0,U.Narrow,he.Standalone,!0);break;case"B":case"BB":case"BBB":o=$(0,U.Abbreviated,he.Format,!0);break;case"BBBB":o=$(0,U.Wide,he.Format,!0);break;case"BBBBB":o=$(0,U.Narrow,he.Format,!0);break;case"h":o=q(3,1,-12);break;case"hh":o=q(3,2,-12);break;case"H":o=q(3,1);break;case"HH":o=q(3,2);break;case"m":o=q(4,1);break;case"mm":o=q(4,2);break;case"s":o=q(5,1);break;case"ss":o=q(5,2);break;case"S":o=q(6,1);break;case"SS":o=q(6,2);break;case"SSS":o=q(6,3);break;case"Z":case"ZZ":case"ZZZ":o=sn(0);break;case"ZZZZZ":o=sn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":o=sn(1);break;case"OOOO":case"ZZZZ":case"zzzz":o=sn(2);break;default:return null}return jn[i]=o,o}function ws(i,o){i=i.replace(/:/g,"");const e=Date.parse("Jan 01, 1970 00:00:00 "+i)/6e4;return isNaN(e)?o:e}function Pa(i,o){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+o),i}function Oa(i,o,e){const n=i.getTimezoneOffset(),s=ws(o,n);return Pa(i,-1*(s-n))}function Sa(i){if(go(i))return i;if(typeof i=="number"&&!isNaN(i))return new Date(i);if(typeof i=="string"){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){const[n,s=1,r=1]=i.split("-").map(a=>+a);return Cn(n,s-1,r)}const e=parseFloat(i);if(!isNaN(i-e))return new Date(e);let t;if(t=i.match(ma))return Ea(t)}const o=new Date(i);if(!go(o))throw new le(2311,!1);return o}function Ea(i){const o=new Date(0);let e=0,t=0;const n=i[8]?o.setUTCFullYear:o.setFullYear,s=i[8]?o.setUTCHours:o.setHours;i[9]&&(e=Number(i[9]+i[10]),t=Number(i[9]+i[11])),n.call(o,Number(i[1]),Number(i[2])-1,Number(i[3]));const r=Number(i[4]||0)-e,a=Number(i[5]||0)-t,l=Number(i[6]||0),c=Math.floor(parseFloat("0."+(i[7]||0))*1e3);return s.call(o,r,a,l,c),o}function go(i){return i instanceof Date&&!isNaN(i.valueOf())}const Da=/^(\d+)?\.((\d+)(-(\d+))?)?$/,po=22,yn=".",Zt="0",Ia=";",ka=",",$n="#",fo="¤",Aa="%";function Bi(i,o,e,t,n,s,r=!1){let a="",l=!1;if(!isFinite(i))a=Oe(e,Q.Infinity);else{let c=za(i);r&&(c=Ba(c));let d=o.minInt,g=o.minFrac,M=o.maxFrac;if(s){const P=s.match(Da);if(P===null)throw new le(2306,!1);const W=P[1],K=P[3],ue=P[5];W!=null&&(d=Gn(W)),K!=null&&(g=Gn(K)),ue!=null?M=Gn(ue):K!=null&&g>M&&(M=g)}Va(c,g,M);let p=c.digits,b=c.integerLen;const S=c.exponent;let A=[];for(l=p.every(P=>!P);b<d;b++)p.unshift(0);for(;b<0;b++)p.unshift(0);b>0?A=p.splice(b,p.length):(A=p,p=[0]);const m=[];for(p.length>=o.lgSize&&m.unshift(p.splice(-o.lgSize,p.length).join(""));p.length>o.gSize;)m.unshift(p.splice(-o.gSize,p.length).join(""));p.length&&m.unshift(p.join("")),a=m.join(Oe(e,t)),A.length&&(a+=Oe(e,n)+A.join("")),S&&(a+=Oe(e,Q.Exponential)+"+"+S)}return i<0&&!l?a=o.negPre+a+o.negSuf:a=o.posPre+a+o.posSuf,a}function Ta(i,o,e,t,n){const s=Li(o,Fn.Currency),r=zi(s,Oe(o,Q.MinusSign));return r.minFrac=fa(t),r.maxFrac=r.minFrac,Bi(i,r,o,Q.CurrencyGroup,Q.CurrencyDecimal,n).replace(fo,e).replace(fo,"").trim()}function Fa(i,o,e){const t=Li(o,Fn.Percent),n=zi(t,Oe(o,Q.MinusSign));return Bi(i,n,o,Q.Group,Q.Decimal,e,!0).replace(new RegExp(Aa,"g"),Oe(o,Q.PercentSign))}function La(i,o,e){const t=Li(o,Fn.Decimal),n=zi(t,Oe(o,Q.MinusSign));return Bi(i,n,o,Q.Group,Q.Decimal,e)}function zi(i,o="-"){const e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=i.split(Ia),n=t[0],s=t[1],r=n.indexOf(yn)!==-1?n.split(yn):[n.substring(0,n.lastIndexOf(Zt)+1),n.substring(n.lastIndexOf(Zt)+1)],a=r[0],l=r[1]||"";e.posPre=a.substring(0,a.indexOf($n));for(let d=0;d<l.length;d++){const g=l.charAt(d);g===Zt?e.minFrac=e.maxFrac=d+1:g===$n?e.maxFrac=d+1:e.posSuf+=g}const c=a.split(ka);if(e.gSize=c[1]?c[1].length:0,e.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,s){const d=n.length-e.posPre.length-e.posSuf.length,g=s.indexOf($n);e.negPre=s.substring(0,g).replace(/'/g,""),e.negSuf=s.slice(g+d).replace(/'/g,"")}else e.negPre=o+e.posPre,e.negSuf=e.posSuf;return e}function Ba(i){if(i.digits[0]===0)return i;const o=i.digits.length-i.integerLen;return i.exponent?i.exponent+=2:(o===0?i.digits.push(0,0):o===1&&i.digits.push(0),i.integerLen+=2),i}function za(i){let o=Math.abs(i)+"",e=0,t,n,s,r,a;for((n=o.indexOf(yn))>-1&&(o=o.replace(yn,"")),(s=o.search(/e/i))>0?(n<0&&(n=s),n+=+o.slice(s+1),o=o.substring(0,s)):n<0&&(n=o.length),s=0;o.charAt(s)===Zt;s++);if(s===(a=o.length))t=[0],n=1;else{for(a--;o.charAt(a)===Zt;)a--;for(n-=s,t=[],r=0;s<=a;s++,r++)t[r]=Number(o.charAt(s))}return n>po&&(t=t.splice(0,po-1),e=n-1,n=1),{digits:t,exponent:e,integerLen:n}}function Va(i,o,e){if(o>e)throw new le(2307,!1);let t=i.digits,n=t.length-i.integerLen;const s=Math.min(Math.max(o,n),e);let r=s+i.integerLen,a=t[r];if(r>0){t.splice(Math.max(i.integerLen,r));for(let g=r;g<t.length;g++)t[g]=0}else{n=Math.max(0,n),i.integerLen=1,t.length=Math.max(1,r=s+1),t[0]=0;for(let g=1;g<r;g++)t[g]=0}if(a>=5)if(r-1<0){for(let g=0;g>r;g--)t.unshift(0),i.integerLen++;t.unshift(1),i.integerLen++}else t[r-1]++;for(;n<Math.max(0,s);n++)t.push(0);let l=s!==0;const c=o+i.integerLen,d=t.reduceRight(function(g,M,p,b){return M=M+g,b[p]=M<10?M:M-10,l&&(b[p]===0&&p>=c?b.pop():l=!1),M>=10?1:0},0);d&&(t.unshift(d),i.integerLen++)}function Gn(i){const o=parseInt(i);if(isNaN(o))throw new le(2305,!1);return o}let Vi=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:function(t){let n=null;return t?n=new t:n=(s=>new Ra(s))(V(It)),n},providedIn:"root"})}return i})();function Ps(i,o,e,t){let n=`=${i}`;if(o.indexOf(n)>-1||(n=e.getPluralCategory(i,t),o.indexOf(n)>-1))return n;if(o.indexOf("other")>-1)return"other";throw new le(2308,!1)}let Ra=(()=>{class i extends Vi{locale;constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(da(t||this.locale)(e)){case xt.Zero:return"zero";case xt.One:return"one";case xt.Two:return"two";case xt.Few:return"few";case xt.Many:return"many";default:return"other"}}static ɵfac=function(t){return new(t||i)(V(It))};static ɵprov=Z({token:i,factory:i.ɵfac})}return i})();const Xn=/\s+/,mo=[];let bn=(()=>{class i{_ngEl;_renderer;initialClasses=mo;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Xn):mo}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Xn):e}ngDoCheck(){for(const t of this.initialClasses)this._updateState(t,!0);const e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(const t of e)this._updateState(t,!0);else if(e!=null)for(const t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){const n=this.stateMap.get(e);n!==void 0?(n.enabled!==t&&(n.changed=!0,n.enabled=t),n.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(const e of this.stateMap){const t=e[0],n=e[1];n.changed?(this._toggleClass(t,n.enabled),n.changed=!1):n.touched||(n.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),n.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Xn).forEach(n=>{t?this._renderer.addClass(this._ngEl.nativeElement,n):this._renderer.removeClass(this._ngEl.nativeElement,n)})}static ɵfac=function(t){return new(t||i)(E(Ue),E(gt))};static ɵdir=B({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})(),_o=(()=>{class i{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletEnvironmentInjector;ngComponentOutletContent;ngComponentOutletNgModule;ngComponentOutletNgModuleFactory;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(e){this._viewContainerRef=e}_needToReCreateNgModuleInstance(e){return e.ngComponentOutletNgModule!==void 0||e.ngComponentOutletNgModuleFactory!==void 0}_needToReCreateComponentInstance(e){return e.ngComponentOutlet!==void 0||e.ngComponentOutletContent!==void 0||e.ngComponentOutletInjector!==void 0||e.ngComponentOutletEnvironmentInjector!==void 0||this._needToReCreateNgModuleInstance(e)}ngOnChanges(e){if(this._needToReCreateComponentInstance(e)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){const t=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(e)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=xr(this.ngComponentOutletNgModule,Co(t)):this.ngComponentOutletNgModuleFactory?this._moduleRef=this.ngComponentOutletNgModuleFactory.create(Co(t)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:t,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent,environmentInjector:this.ngComponentOutletEnvironmentInjector})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(const e of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(e,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(e){for(const[t,n]of this._inputsUsed)n?(e.setInput(t,this.ngComponentOutletInputs[t]),this._inputsUsed.set(t,!1)):(e.setInput(t,void 0),this._inputsUsed.delete(t))}static ɵfac=function(t){return new(t||i)(E(tt))};static ɵdir=B({type:i,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletEnvironmentInjector:"ngComponentOutletEnvironmentInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},exportAs:["ngComponentOutlet"],features:[Et]})}return i})();function Co(i){return i.get(Er).injector}class Na{$implicit;ngForOf;index;count;constructor(o,e,t,n){this.$implicit=o,this.ngForOf=e,this.index=t,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}}let ii=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=this._viewContainer;e.forEachOperation((n,s,r)=>{if(n.previousIndex==null)t.createEmbeddedView(this._template,new Na(n.item,this._ngForOf,-1,-1),r===null?void 0:r);else if(r==null)t.remove(s===null?void 0:s);else if(s!==null){const a=t.get(s);t.move(a,r),yo(a,n)}});for(let n=0,s=t.length;n<s;n++){const a=t.get(n).context;a.index=n,a.count=s,a.ngForOf=this._ngForOf}e.forEachIdentityChange(n=>{const s=t.get(n.currentIndex);yo(s,n)})}static ngTemplateContextGuard(e,t){return!0}static ɵfac=function(t){return new(t||i)(E(tt),E(Xt),E(Mr))};static ɵdir=B({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function yo(i,o){i.context.$implicit=o.item}let bo=(()=>{class i{_viewContainer;_context=new Ha;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){vo(e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){vo(e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static ɵfac=function(t){return new(t||i)(E(tt),E(Xt))};static ɵdir=B({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return i})();class Ha{$implicit=null;ngIf=null}function vo(i,o){if(i&&!i.createEmbeddedView)throw new le(2020,!1)}class Ri{_viewContainerRef;_templateRef;_created=!1;constructor(o,e){this._viewContainerRef=o,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(o){o&&!this._created?this.create():!o&&this._created&&this.destroy()}}let vn=(()=>{class i{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){const t=e===this._ngSwitch;return this._lastCasesMatched||=t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(const t of this._defaultViews)t.enforceState(e)}}static ɵfac=function(t){return new(t||i)};static ɵdir=B({type:i,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return i})(),Mo=(()=>{class i{ngSwitch;_view;ngSwitchCase;constructor(e,t,n){this.ngSwitch=n,n._addCase(),this._view=new Ri(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static ɵfac=function(t){return new(t||i)(E(tt),E(Xt),E(vn,9))};static ɵdir=B({type:i,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return i})(),xo=(()=>{class i{constructor(e,t,n){n._addDefault(new Ri(e,t))}static ɵfac=function(t){return new(t||i)(E(tt),E(Xt),E(vn,9))};static ɵdir=B({type:i,selectors:[["","ngSwitchDefault",""]]})}return i})(),oi=(()=>{class i{_localization;_activeView;_caseViews={};constructor(e){this._localization=e}set ngPlural(e){this._updateView(e)}addCase(e,t){this._caseViews[e]=t}_updateView(e){this._clearViews();const t=Object.keys(this._caseViews),n=Ps(e,t,this._localization);this._activateView(this._caseViews[n])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}static ɵfac=function(t){return new(t||i)(E(Vi))};static ɵdir=B({type:i,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}})}return i})(),wo=(()=>{class i{value;constructor(e,t,n,s){this.value=e;const r=!isNaN(Number(e));s.addCase(r?`=${e}`:e,new Ri(n,t))}static ɵfac=function(t){return new(t||i)(wr("ngPluralCase"),E(Xt),E(tt),E(oi,1))};static ɵdir=B({type:i,selectors:[["","ngPluralCase",""]]})}return i})(),si=(()=>{class i{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[n,s]=e.split("."),r=n.indexOf("-")===-1?void 0:vr.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,s?`${t}${s}`:t,r):this._renderer.removeStyle(this._ngEl.nativeElement,n,r)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static ɵfac=function(t){return new(t||i)(E(Ue),E(ms),E(gt))};static ɵdir=B({type:i,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return i})(),Po=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){const t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}const n=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,n,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,n)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,n):!1,get:(e,t,n)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,n)}})}static ɵfac=function(t){return new(t||i)(E(tt))};static ɵdir=B({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Et]})}return i})();function ze(i,o){return new le(2100,!1)}class Wa{createSubscription(o,e,t){return He(()=>o.subscribe({next:e,error:t}))}dispose(o){He(()=>o.unsubscribe())}}class Za{createSubscription(o,e,t){return o.then(n=>e?.(n),n=>t?.(n)),{unsubscribe:()=>{e=null,t=null}}}dispose(o){o.unsubscribe()}}const Ua=new Za,Ya=new Wa;let Oo=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=T(Pr);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(_s(e))return Ua;if(Or(e))return Ya;throw ze()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(t){return new(t||i)(E(Dt,16))};static ɵpipe=ce({name:"async",type:i,pure:!1})}return i})(),So=(()=>{class i{transform(e){if(e==null)return null;if(typeof e!="string")throw ze();return e.toLowerCase()}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"lowercase",type:i,pure:!0})}return i})();const ja=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;let ri=(()=>{class i{transform(e){if(e==null)return null;if(typeof e!="string")throw ze();return e.replace(ja,t=>t[0].toUpperCase()+t.slice(1).toLowerCase())}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"titlecase",type:i,pure:!0})}return i})(),Eo=(()=>{class i{transform(e){if(e==null)return null;if(typeof e!="string")throw ze();return e.toUpperCase()}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"uppercase",type:i,pure:!0})}return i})();const $a="mediumDate",Ga=new pt(""),Xa=new pt("");let Do=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(e,t,n){this.locale=e,this.defaultTimezone=t,this.defaultOptions=n}transform(e,t,n,s){if(e==null||e===""||e!==e)return null;try{const r=t??this.defaultOptions?.dateFormat??$a,a=n??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ca(e,r,s||this.locale,a)}catch(r){throw ze(i,r.message)}}static ɵfac=function(t){return new(t||i)(E(It,16),E(Ga,24),E(Xa,24))};static ɵpipe=ce({name:"date",type:i,pure:!0})}return i})();const Ka=/#/g;let Io=(()=>{class i{_localization;constructor(e){this._localization=e}transform(e,t,n){if(e==null)return"";if(typeof t!="object"||t===null)throw ze();const s=Ps(e,Object.keys(t),this._localization,n);return t[s].replace(Ka,e.toString())}static ɵfac=function(t){return new(t||i)(E(Vi,16))};static ɵpipe=ce({name:"i18nPlural",type:i,pure:!0})}return i})(),ko=(()=>{class i{transform(e,t){if(e==null)return"";if(typeof t!="object"||typeof e!="string")throw ze();return t.hasOwnProperty(e)?t[e]:t.hasOwnProperty("other")?t.other:""}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"i18nSelect",type:i,pure:!0})}return i})(),Ao=(()=>{class i{transform(e){return JSON.stringify(e,null,2)}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"json",type:i,pure:!1})}return i})();function Ja(i,o){return{key:i,value:o}}let To=(()=>{class i{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=Fo;transform(e,t=Fo){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();const n=this.differ.diff(e),s=t!==this.compareFn;return n&&(this.keyValues=[],n.forEachItem(r=>{this.keyValues.push(Ja(r.key,r.currentValue))})),(n||s)&&(t&&this.keyValues.sort(t),this.compareFn=t),this.keyValues}static ɵfac=function(t){return new(t||i)(E(ms,16))};static ɵpipe=ce({name:"keyvalue",type:i,pure:!1})}return i})();function Fo(i,o){const e=i.key,t=o.key;if(e===t)return 0;if(e==null)return 1;if(t==null)return-1;if(typeof e=="string"&&typeof t=="string")return e<t?-1:1;if(typeof e=="number"&&typeof t=="number")return e-t;if(typeof e=="boolean"&&typeof t=="boolean")return e<t?-1:1;const n=String(e),s=String(t);return n==s?0:n<s?-1:1}let Lo=(()=>{class i{_locale;constructor(e){this._locale=e}transform(e,t,n){if(!Ni(e))return null;n||=this._locale;try{const s=Hi(e);return La(s,n,t)}catch(s){throw ze(i,s.message)}}static ɵfac=function(t){return new(t||i)(E(It,16))};static ɵpipe=ce({name:"number",type:i,pure:!0})}return i})(),Bo=(()=>{class i{_locale;constructor(e){this._locale=e}transform(e,t,n){if(!Ni(e))return null;n||=this._locale;try{const s=Hi(e);return Fa(s,n,t)}catch(s){throw ze(i,s.message)}}static ɵfac=function(t){return new(t||i)(E(It,16))};static ɵpipe=ce({name:"percent",type:i,pure:!0})}return i})(),zo=(()=>{class i{_locale;_defaultCurrencyCode;constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t=this._defaultCurrencyCode,n="symbol",s,r){if(!Ni(e))return null;r||=this._locale,typeof n=="boolean"&&(n=n?"symbol":"code");let a=t||this._defaultCurrencyCode;n!=="code"&&(n==="symbol"||n==="symbol-narrow"?a=ga(a,n==="symbol"?"wide":"narrow",r):a=n);try{const l=Hi(e);return Ta(l,r,a,t,s)}catch(l){throw ze(i,l.message)}}static ɵfac=function(t){return new(t||i)(E(It,16),E(Sr,16))};static ɵpipe=ce({name:"currency",type:i,pure:!0})}return i})();function Ni(i){return!(i==null||i===""||i!==i)}function Hi(i){if(typeof i=="string"&&!isNaN(Number(i)-parseFloat(i)))return Number(i);if(typeof i!="number")throw new le(2309,!1);return i}let Vo=(()=>{class i{transform(e,t,n){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw ze();return e.slice(t,n)}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"slice",type:i,pure:!1})}return i})(),kt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Di({type:i,imports:[bn,_o,ii,bo,Po,si,vn,Mo,xo,oi,wo,Oo,Eo,So,Ao,Vo,Lo,Bo,ri,zo,Do,Io,ko,To],exports:[bn,_o,ii,bo,Po,si,vn,Mo,xo,oi,wo,Oo,Eo,So,Ao,Vo,Lo,Bo,ri,zo,Do,Io,ko,To]});static ɵinj=Ii({})}return i})();let Os=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static ɵfac=function(t){return new(t||i)(E(gt),E(Ue))};static ɵdir=B({type:i})}return i})(),ft=(()=>{class i extends Os{static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,features:[J]})}return i})();const it=new pt(""),qa={provide:it,useExisting:oe(()=>ai),multi:!0};let ai=(()=>{class i extends ft{writeValue(e){this.setProperty("checked",e)}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,n){t&1&&v("change",function(r){return n.onChange(r.target.checked)})("blur",function(){return n.onTouched()})},standalone:!1,features:[te([qa]),J]})}return i})();const Qa={provide:it,useExisting:oe(()=>$t),multi:!0};function el(){const i=io()?io().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}const tl=new pt("");let $t=(()=>{class i extends Os{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!el())}writeValue(e){const t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(t){return new(t||i)(E(gt),E(Ue),E(tl,8))};static ɵdir=B({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&v("input",function(r){return n._handleInput(r.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(r){return n._compositionEnd(r.target.value)})},standalone:!1,features:[te([Qa]),J]})}return i})();function Wi(i){return i==null||Zi(i)===0}function Zi(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}const Ve=new pt(""),Ui=new pt(""),nl=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function il(i){return o=>{if(o.value==null||i==null)return null;const e=parseFloat(o.value);return!isNaN(e)&&e<i?{min:{min:i,actual:o.value}}:null}}function ol(i){return o=>{if(o.value==null||i==null)return null;const e=parseFloat(o.value);return!isNaN(e)&&e>i?{max:{max:i,actual:o.value}}:null}}function sl(i){return Wi(i.value)?{required:!0}:null}function rl(i){return i.value===!0?null:{required:!0}}function al(i){return Wi(i.value)||nl.test(i.value)?null:{email:!0}}function ll(i){return o=>{const e=o.value?.length??Zi(o.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function cl(i){return o=>{const e=o.value?.length??Zi(o.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function dl(i){if(!i)return li;let o,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=i.toString(),o=i),t=>{if(Wi(t.value))return null;const n=t.value;return o.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function li(i){return null}function Ss(i){return i!=null}function Es(i){return _s(i)?Ir(i):i}function Ds(i){let o={};return i.forEach(e=>{o=e!=null?{...o,...e}:o}),Object.keys(o).length===0?null:o}function Is(i,o){return o.map(e=>e(i))}function ul(i){return!i.validate}function ks(i){return i.map(o=>ul(o)?o:e=>o.validate(e))}function hl(i){if(!i)return null;const o=i.filter(Ss);return o.length==0?null:function(e){return Ds(Is(e,o))}}function Yi(i){return i!=null?hl(ks(i)):null}function gl(i){if(!i)return null;const o=i.filter(Ss);return o.length==0?null:function(e){const t=Is(e,o).map(Es);return ta(t).pipe(ti(Ds))}}function ji(i){return i!=null?gl(ks(i)):null}function Ro(i,o){return i===null?[o]:Array.isArray(i)?[...i,o]:[i,o]}function pl(i){return i._rawValidators}function fl(i){return i._rawAsyncValidators}function ci(i){return i?Array.isArray(i)?i:[i]:[]}function Mn(i,o){return Array.isArray(i)?i.includes(o):i===o}function No(i,o){const e=ci(o);return ci(i).forEach(n=>{Mn(e,n)||e.push(n)}),e}function Ho(i,o){return ci(o).filter(e=>!Mn(i,e))}class As{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Yi(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=ji(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}}class mt extends As{name;get formDirective(){return null}get path(){return null}}class Ln extends As{_parent=null;name=null;valueAccessor=null}class Ts{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}}let di=(()=>{class i extends Ts{constructor(e){super(e)}static ɵfac=function(t){return new(t||i)(E(Ln,2))};static ɵdir=B({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&Ie("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[J]})}return i})(),Wo=(()=>{class i extends Ts{constructor(e){super(e)}static ɵfac=function(t){return new(t||i)(E(mt,10))};static ɵdir=B({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&Ie("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[J]})}return i})();const Rt="VALID",an="INVALID",bt="PENDING",Nt="DISABLED";class At{}class Zo extends At{value;source;constructor(o,e){super(),this.value=o,this.source=e}}class Kn extends At{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}}class Jn extends At{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}}class ln extends At{status;source;constructor(o,e){super(),this.status=o,this.source=e}}class ml extends At{source;constructor(o){super(),this.source=o}}class Fs extends At{source;constructor(o){super(),this.source=o}}function Ls(i){return(Bn(i)?i.validators:i)||null}function _l(i){return Array.isArray(i)?Yi(i):i||null}function Bs(i,o){return(Bn(o)?o.asyncValidators:i)||null}function Cl(i){return Array.isArray(i)?ji(i):i||null}function Bn(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function yl(i,o,e){const t=i.controls;if(!Object.keys(t).length)throw new le(1e3,"");if(!t[e])throw new le(1001,"")}function bl(i,o,e){i._forEachChild((t,n)=>{if(e[n]===void 0)throw new le(1002,"")})}class zs{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return He(this.statusReactive)}set status(o){He(()=>this.statusReactive.set(o))}_status=I(()=>this.statusReactive());statusReactive=D(void 0);get valid(){return this.status===Rt}get invalid(){return this.status===an}get pending(){return this.status==bt}get disabled(){return this.status===Nt}get enabled(){return this.status!==Nt}errors;get pristine(){return He(this.pristineReactive)}set pristine(o){He(()=>this.pristineReactive.set(o))}_pristine=I(()=>this.pristineReactive());pristineReactive=D(!0);get dirty(){return!this.pristine}get touched(){return He(this.touchedReactive)}set touched(o){He(()=>this.touchedReactive.set(o))}_touched=I(()=>this.touchedReactive());touchedReactive=D(!1);get untouched(){return!this.touched}_events=new Be;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(No(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(No(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Ho(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Ho(o,this._rawAsyncValidators))}hasValidator(o){return Mn(this._rawValidators,o)}hasAsyncValidator(o){return Mn(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){const e=this.touched===!1;this.touched=!0;const t=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched({...o,sourceControl:t}),e&&o.emitEvent!==!1&&this._events.next(new Jn(!0,t))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){const e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;const t=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:t})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t),e&&o.emitEvent!==!1&&this._events.next(new Jn(!1,t))}markAsDirty(o={}){const e=this.pristine===!0;this.pristine=!1;const t=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty({...o,sourceControl:t}),e&&o.emitEvent!==!1&&this._events.next(new Kn(!1,t))}markAsPristine(o={}){const e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;const t=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),e&&o.emitEvent!==!1&&this._events.next(new Kn(!0,t))}markAsPending(o={}){this.status=bt;const e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ln(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending({...o,sourceControl:e})}disable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=Nt,this.errors=null,this._forEachChild(n=>{n.disable({...o,onlySelf:!0})}),this._updateValue();const t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Zo(this.value,t)),this._events.next(new ln(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...o,skipPristineCheck:e},this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=Rt,this._forEachChild(t=>{t.enable({...o,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors({...o,skipPristineCheck:e},this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){const t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Rt||this.status===bt)&&this._runAsyncValidator(t,o.emitEvent)}const e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Zo(this.value,e)),this._events.next(new ln(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity({...o,sourceControl:e})}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nt:Rt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=bt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};const t=Es(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();const o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(o,e){const t=e?this.get(e):this;return t&&t.errors?t.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,t){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||t)&&this._events.next(new ln(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,t)}_initObservables(){this.valueChanges=new X,this.statusChanges=new X}_calculateStatus(){return this._allControlsDisabled()?Nt:this.errors?an:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(bt)?bt:this._anyControlsHaveStatus(an)?an:Rt}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){const t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),n&&this._events.next(new Kn(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Jn(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Bn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){const e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=_l(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Cl(this._rawAsyncValidators)}}class Uo extends zs{constructor(o,e,t){super(Ls(e),Bs(t,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,t={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){bl(this,!0,o),Object.keys(o).forEach(t=>{yl(this,!0,t),this.controls[t].setValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(t=>{const n=this.controls[t];n&&n.patchValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((t,n)=>{t.reset(o?o[n]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fs(this))}getRawValue(){return this._reduceChildren({},(o,e,t)=>(o[t]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{const t=this.controls[e];t&&o(t,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(const[e,t]of Object.entries(this.controls))if(this.contains(e)&&o(t))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(o,e){let t=o;return this._forEachChild((n,s)=>{t=e(t,n,s)}),t}_allControlsDisabled(){for(const o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}}const zn=new pt("",{providedIn:"root",factory:()=>Vn}),Vn="always";function Vs(i,o){return[...o.path,i]}function Rs(i,o,e=Vn){Ns(i,o),o.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(i.disabled),Ml(i,o),wl(i,o),xl(i,o),vl(i,o)}function Yo(i,o){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function vl(i,o){if(o.valueAccessor.setDisabledState){const e=t=>{o.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),o._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Ns(i,o){const e=pl(i);o.validator!==null?i.setValidators(Ro(e,o.validator)):typeof e=="function"&&i.setValidators([e]);const t=fl(i);o.asyncValidator!==null?i.setAsyncValidators(Ro(t,o.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);const n=()=>i.updateValueAndValidity();Yo(o._rawValidators,n),Yo(o._rawAsyncValidators,n)}function Ml(i,o){o.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Hs(i,o)})}function xl(i,o){o.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Hs(i,o),i.updateOn!=="submit"&&i.markAsTouched()})}function Hs(i,o){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function wl(i,o){const e=(t,n)=>{o.valueAccessor.writeValue(t),n&&o.viewToModelUpdate(t)};i.registerOnChange(e),o._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Pl(i,o){Ns(i,o)}function Ol(i,o){if(!i.hasOwnProperty("model"))return!1;const e=i.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Sl(i){return Object.getPrototypeOf(i.constructor)===ft}function El(i,o){i._syncPendingControls(),o.forEach(e=>{const t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Dl(i,o){if(!o)return null;let e,t,n;return o.forEach(s=>{s.constructor===$t?e=s:Sl(s)?t=s:n=s}),n||t||e||null}const Il={provide:mt,useExisting:oe(()=>xn)},Ht=Promise.resolve();let xn=(()=>{class i extends mt{callSetDisabledState;get submitted(){return He(this.submittedReactive)}_submitted=I(()=>this.submittedReactive());submittedReactive=D(!1);_directives=new Set;form;ngSubmit=new X;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new Uo({},Yi(e),ji(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ht.then(()=>{const t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Rs(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ht.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ht.then(()=>{const t=this._findContainer(e.path),n=new Uo({});Pl(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ht.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ht.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),El(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ml(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(t){return new(t||i)(E(Ve,10),E(Ui,10),E(zn,8))};static ɵdir=B({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&v("submit",function(r){return n.onSubmit(r)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[te([Il]),J]})}return i})();function jo(i,o){const e=i.indexOf(o);e>-1&&i.splice(e,1)}function $o(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}const kl=class extends zs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,t){super(Ls(e),Bs(t,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bn(e)&&(e.nonNullable||e.initialValueIsDefault)&&($o(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fs(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){jo(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){jo(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){$o(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};let Al=(()=>{class i extends mt{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Vs(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,standalone:!1,features:[J]})}return i})();const Tl={provide:mt,useExisting:oe(()=>ui)};let ui=(()=>{class i extends Al{name="";constructor(e,t,n){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(n)}_checkParentType(){!(this._parent instanceof i)&&this._parent instanceof xn}static ɵfac=function(t){return new(t||i)(E(mt,5),E(Ve,10),E(Ui,10))};static ɵdir=B({type:i,selectors:[["","ngModelGroup",""]],inputs:{name:[0,"ngModelGroup","name"]},exportAs:["ngModelGroup"],standalone:!1,features:[te([Tl]),J]})}return i})();const Fl={provide:Ln,useExisting:oe(()=>wn)},Go=Promise.resolve();let wn=(()=>{class i extends Ln{_changeDetectorRef;callSetDisabledState;control=new kl;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new X;constructor(e,t,n,s,r,a){super(),this._changeDetectorRef=r,this.callSetDisabledState=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Dl(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ol(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Rs(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Go.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const t=e.isDisabled.currentValue,n=t!==0&&ki(t);Go.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Vs(e,this._parent):[e]}static ɵfac=function(t){return new(t||i)(E(mt,9),E(Ve,10),E(Ui,10),E(it,10),E(Dt,8),E(zn,8))};static ɵdir=B({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[te([Fl]),J,Et]})}return i})(),Xo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=B({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();const Ll={provide:it,useExisting:oe(()=>hi),multi:!0};let hi=(()=>{class i extends ft{writeValue(e){const t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,n){t&1&&v("input",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[te([Ll]),J]})}return i})();const Bl={provide:it,useExisting:oe(()=>gi),multi:!0};let zl=(()=>{class i{_accessors=[];add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e){this._accessors.splice(t,1);return}}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return e[0].control?e[0]._parent===t._control._parent&&e[1].name===t.name:!1}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),gi=(()=>{class i extends ft{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=T(zn,{optional:!0})??Vn;constructor(e,t,n,s){super(e,t),this._registry=n,this._injector=s}ngOnInit(){this._control=this._injector.get(Ln),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static ɵfac=function(t){return new(t||i)(E(gt),E(Ue),E(zl),E(Fr))};static ɵdir=B({type:i,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,n){t&1&&v("change",function(){return n.onChange()})("blur",function(){return n.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[te([Bl]),J]})}return i})();const Vl={provide:it,useExisting:oe(()=>pi),multi:!0};let pi=(()=>{class i extends ft{writeValue(e){this.setProperty("value",parseFloat(e))}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,n){t&1&&v("change",function(r){return n.onChange(r.target.value)})("input",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[te([Vl]),J]})}return i})();const Rl={provide:it,useExisting:oe(()=>Pn),multi:!0};function Ws(i,o){return i==null?`${o}`:(o&&typeof o=="object"&&(o="Object"),`${i}: ${o}`.slice(0,50))}function Nl(i){return i.split(":")[0]}let Pn=(()=>{class i extends ft{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=T(kr).injector;destroyRef=T(Ar);cdr=T(Dt);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Tr({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;const t=this._getOptionId(e),n=Ws(t,e);this.setProperty("value",n)}registerOnChange(e){this.onChange=t=>{this.value=this._getOptionValue(t),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t),e))return t;return null}_getOptionValue(e){const t=Nl(e);return this._optionMap.has(t)?this._optionMap.get(t):e}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,n){t&1&&v("change",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[te([Rl]),J]})}return i})(),fi=(()=>{class i{_element;_renderer;_select;id;constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(Ws(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select&&this._select._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select._writeValueAfterRender())}static ɵfac=function(t){return new(t||i)(E(Ue),E(gt),E(Pn,9))};static ɵdir=B({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})();const Hl={provide:it,useExisting:oe(()=>On),multi:!0};function Ko(i,o){return i==null?`${o}`:(typeof o=="string"&&(o=`'${o}'`),o&&typeof o=="object"&&(o="Object"),`${i}: ${o}`.slice(0,50))}function Wl(i){return i.split(":")[0]}let On=(()=>{class i extends ft{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let t;if(Array.isArray(e)){const n=e.map(s=>this._getOptionId(s));t=(s,r)=>{s._setSelected(n.indexOf(r.toString())>-1)}}else t=(n,s)=>{n._setSelected(!1)};this._optionMap.forEach(t)}registerOnChange(e){this.onChange=t=>{const n=[],s=t.selectedOptions;if(s!==void 0){const r=s;for(let a=0;a<r.length;a++){const l=r[a],c=this._getOptionValue(l.value);n.push(c)}}else{const r=t.options;for(let a=0;a<r.length;a++){const l=r[a];if(l.selected){const c=this._getOptionValue(l.value);n.push(c)}}}this.value=n,e(n)}}_registerOption(e){const t=(this._idCounter++).toString();return this._optionMap.set(t,e),t}_getOptionId(e){for(const t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t)._value,e))return t;return null}_getOptionValue(e){const t=Wl(e);return this._optionMap.has(t)?this._optionMap.get(t)._value:e}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,n){t&1&&v("change",function(r){return n.onChange(r.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[te([Hl]),J]})}return i})(),mi=(()=>{class i{_element;_renderer;_select;id;_value;constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Ko(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Ko(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(t){return new(t||i)(E(Ue),E(gt),E(On,9))};static ɵdir=B({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})();function Zs(i){return typeof i=="number"?i:parseInt(i,10)}function Us(i){return typeof i=="number"?i:parseFloat(i)}let _t=(()=>{class i{_validator=li;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){const t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):li,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(t){return new(t||i)};static ɵdir=B({type:i,features:[Et]})}return i})();const Zl={provide:Ve,useExisting:oe(()=>_i),multi:!0};let _i=(()=>{class i extends _t{max;inputName="max";normalizeInput=e=>Us(e);createValidator=e=>ol(e);static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[te([Zl]),J]})}return i})();const Ul={provide:Ve,useExisting:oe(()=>Ci),multi:!0};let Ci=(()=>{class i extends _t{min;inputName="min";normalizeInput=e=>Us(e);createValidator=e=>il(e);static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[te([Ul]),J]})}return i})();const Yl={provide:Ve,useExisting:oe(()=>Sn),multi:!0},jl={provide:Ve,useExisting:oe(()=>yi),multi:!0};let Sn=(()=>{class i extends _t{required;inputName="required";normalizeInput=ki;createValidator=e=>sl;enabled(e){return e}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,n){t&2&&R("required",n._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[te([Yl]),J]})}return i})(),yi=(()=>{class i extends Sn{createValidator=e=>rl;static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("required",n._enabled?"":null)},standalone:!1,features:[te([jl]),J]})}return i})();const $l={provide:Ve,useExisting:oe(()=>bi),multi:!0};let bi=(()=>{class i extends _t{email;inputName="email";normalizeInput=ki;createValidator=e=>al;enabled(e){return e}static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},standalone:!1,features:[te([$l]),J]})}return i})();const Gl={provide:Ve,useExisting:oe(()=>vi),multi:!0};let vi=(()=>{class i extends _t{minlength;inputName="minlength";normalizeInput=e=>Zs(e);createValidator=e=>ll(e);static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("minlength",n._enabled?n.minlength:null)},inputs:{minlength:"minlength"},standalone:!1,features:[te([Gl]),J]})}return i})();const Xl={provide:Ve,useExisting:oe(()=>Mi),multi:!0};let Mi=(()=>{class i extends _t{maxlength;inputName="maxlength";normalizeInput=e=>Zs(e);createValidator=e=>cl(e);static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("maxlength",n._enabled?n.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[te([Xl]),J]})}return i})();const Kl={provide:Ve,useExisting:oe(()=>xi),multi:!0};let xi=(()=>{class i extends _t{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>dl(e);static ɵfac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static ɵdir=B({type:i,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&R("pattern",n._enabled?n.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[te([Kl]),J]})}return i})(),Jo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Di({type:i,declarations:[Xo,fi,mi,$t,hi,pi,ai,Pn,On,gi,di,Wo,Sn,vi,Mi,xi,yi,bi,Ci,_i],exports:[Xo,fi,mi,$t,hi,pi,ai,Pn,On,gi,di,Wo,Sn,vi,Mi,xi,yi,bi,Ci,_i]});static ɵinj=Ii({})}return i})(),$i=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:zn,useValue:e.callSetDisabledState??Vn}]}}static ɵfac=function(t){return new(t||i)};static ɵmod=Di({type:i,declarations:[wn,ui,xn],exports:[Jo,wn,ui,xn]});static ɵinj=Ii({imports:[Jo]})}return i})();var _n={exports:{}},Jl=_n.exports,qo;function ql(){return qo||(qo=1,(function(i){(function(o){var e=function(m,P,W){if(!c(P)||g(P)||M(P)||p(P)||l(P))return P;var K,ue=0,ot=0;if(d(P))for(K=[],ot=P.length;ue<ot;ue++)K.push(e(m,P[ue],W));else{K={};for(var Je in P)Object.prototype.hasOwnProperty.call(P,Je)&&(K[m(Je,W)]=e(m,P[Je],W))}return K},t=function(m,P){P=P||{};var W=P.separator||"_",K=P.split||/(?=[A-Z])/;return m.split(K).join(W)},n=function(m){return b(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(P,W){return W?W.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},s=function(m){var P=n(m);return P.substr(0,1).toUpperCase()+P.substr(1)},r=function(m,P){return t(m,P).toLowerCase()},a=Object.prototype.toString,l=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},d=function(m){return a.call(m)=="[object Array]"},g=function(m){return a.call(m)=="[object Date]"},M=function(m){return a.call(m)=="[object RegExp]"},p=function(m){return a.call(m)=="[object Boolean]"},b=function(m){return m=m-0,m===m},S=function(m,P){var W=P&&"process"in P?P.process:P;return typeof W!="function"?m:function(K,ue){return W(K,m,ue)}},A={camelize:n,decamelize:r,pascalize:s,depascalize:r,camelizeKeys:function(m,P){return e(S(n,P),m)},decamelizeKeys:function(m,P){return e(S(r,P),m,P)},pascalizeKeys:function(m,P){return e(S(s,P),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};i.exports?i.exports=A:o.humps=A})(Jl)})(_n)),_n.exports}var Ql=ql();class Ut{_localStorage={};constructor(){this._localStorage=JSON.parse(localStorage.getItem("codecrack")??"{}")}get(o){return this._localStorage[o]}getAll(){return this._localStorage}set(o,e){this._localStorage[o]=e,localStorage.setItem("codecrack",JSON.stringify(this._localStorage))}setAll(o){this._localStorage=o,localStorage.setItem("codecrack",JSON.stringify(this._localStorage))}clear(){this._localStorage={},localStorage.removeItem("codecrack")}static ɵfac=function(e){return new(e||Ut)};static ɵprov=Z({token:Ut,factory:Ut.ɵfac,providedIn:"root"})}class Yt{_https;apiUrl="http://localhost:8787";constructor(o){this._https=o}pullCodeHandler(o){return this._https.get(`${this.apiUrl}/pull?codeShareId=${o}`)}pushCodeHandler(o){return this._https.post(`${this.apiUrl}/push`,o)}static ɵfac=function(e){return new(e||Yt)(V(Lr))};static ɵprov=Z({token:Yt,factory:Yt.ɵfac,providedIn:"root"})}class Xe{_localStorageService;_cloudStorageService;codeShareId="";prefersDarkMode=window.matchMedia("(prefers-color-scheme: dark)").matches;defaultData={editorOptions:{theme:"vs",language:"javascript",automaticLayout:!0,scrollBeyondLastLine:!0,wordWrap:!0,fontSize:14},selectedTab:"editor",themeMode:this.prefersDarkMode?"dark":"light",selectedLanguage:{id:"javascript",extensions:[".js"],aliases:["JavaScript"],mimetypes:["text/javascript"]},editorCode:`function x() {
	console.log("Hello world 😺!");
}`,originalCode:`function x() {
	console.log("Hello world from left 😺!");
}`,modifiedCode:`function x() {
	console.log("Hello world from right 😺!");
}`};constructor(o,e){this._localStorageService=o,this._cloudStorageService=e;const t=this._localStorageService.get("editorOptions");t&&(this.editorOptions=t),this.selectedTab=this._localStorageService.get("selectedTab")??this.defaultData.selectedTab;const n=this._localStorageService.get("themeMode");(n=="dark"||n=="light")&&this.themeModeSubject.next(n);const s=this._localStorageService.get("selectedLanguage");s&&this.selectedLanguageSubject.next(s),this.languages=Xr.getLanguages(),this.languages.push({id:"json-compression",extensions:[".json"],aliases:["JSON Compression"],mimetypes:["application/json"]});const r=this._localStorageService.get("editorCode");r&&(this.editorCode=r);const a=this._localStorageService.get("originalCode");a&&(this.originalCode=a);const l=this._localStorageService.get("modifiedCode");l&&(this.modifiedCode=l);const c=3e3;this.editorCodeSubject.pipe(fn(c)).subscribe(d=>{this._localStorageService.set("editorCode",d)}),this.originalCodeSubject.pipe(fn(c)).subscribe(d=>{this._localStorageService.set("originalCode",d)}),this.modifiedCodeSubject.pipe(fn(c)).subscribe(d=>{this._localStorageService.set("modifiedCode",d)})}getCodeShareId=()=>{let o=this.codeShareId;return o||(o=this._localStorageService.get("codeshareId")),o};setCodeShareId(o){this.codeShareId=o,this._localStorageService.set("codeshareId",this.codeShareId)}themeModeSubject=new Wt(this.defaultData.themeMode);themeMode$=this.themeModeSubject.asObservable();toggleThemeMode(o){this.themeModeSubject.next(o),this._localStorageService.set("themeMode",o)}languages=[];selectedLanguageSubject=new Wt(this.defaultData.selectedLanguage);selectedLanguage$=this.selectedLanguageSubject.asObservable();setEditorLanguage(o){this.selectedLanguageSubject.next(o),this._localStorageService.set("selectedLanguage",o)}appActionSubject=new Be;appAction$=this.appActionSubject.asObservable();dispatchAction(o,e={}){let t=!0;switch(o){case"font-up":this.editorOptions.fontSize+=2;break;case"font-down":this.editorOptions.fontSize=Math.max(6,this.editorOptions.fontSize-2);break;case"word-wrap-toggle":this.editorOptions.wordWrap=!this.editorOptions.wordWrap;break;default:t=!1}this.appActionSubject.next({action:o,payload:e}),t&&this._localStorageService.set("editorOptions",this.editorOptions)}selectedTab=this.defaultData.selectedTab;setSelectedTab(o){this.selectedTab=o,this._localStorageService.set("selectedTab",o)}editorOptions=this.defaultData.editorOptions;editorUpdateSubject=new Wt(null);editorUpdate$=this.editorUpdateSubject.asObservable();editorCode=this.defaultData.editorCode;originalCode=this.defaultData.originalCode;modifiedCode=this.defaultData.modifiedCode;editorCodeSubject=new Be;originalCodeSubject=new Be;modifiedCodeSubject=new Be;setEditorCode(o){this.editorCode=o,this.editorCodeSubject.next(o)}setOriginalCode(o){this.originalCode=o,this.originalCodeSubject.next(o)}setModifiedCode(o){this.modifiedCode=o,this.modifiedCodeSubject.next(o)}resetApp(){this._localStorageService.clear(),this.setAppParameters({})}getCloudData(){this._cloudStorageService.pullCodeHandler(this.codeShareId).subscribe({next:o=>{if(console.log("Response:",o),o.data&&o.data.codeshare_id==this.codeShareId){const e={},t=o.data;for(let n in t)if(t[n]){const s=Ql.camelize(n);e[s]=t[n],["editorOptions","selectedLanguage"].includes(s)&&(e[s]=JSON.parse(e[s]))}this.setAppParameters(e),this.dispatchAction("bToast",{type:"success",message:o.message})}else console.error("Response error",o),this.dispatchAction("bToast",{type:"error",message:"Response format error"})},error:o=>{console.error("Error:",o);let e="error",t="Unknown Error";o.status==404&&(e="warning",t=o?.error?.message),this.dispatchAction("bToast",{type:e,message:t})},complete:()=>{}})}setCloudData(){let o=structuredClone(this._localStorageService.getAll());o.codeShareId=this.codeShareId,o.editorOptions=JSON.stringify(o.editorOptions),o.selectedLanguage=JSON.stringify(o.selectedLanguage),this._cloudStorageService.pushCodeHandler(o).subscribe({next:e=>{console.log("Response:",e),this.dispatchAction("bToast",{type:"success",message:e.message})},error:e=>{console.error("Error:",e);let t="error",n="Unknown Error";e.status==500&&(n=e?.error?.message),this.dispatchAction("bToast",{type:t,message:n})},complete:()=>{}})}setAppParameters(o){const e={...this.defaultData,...o};this.editorOptions=e.editorOptions,this.selectedTab=e.selectedTab,this.themeModeSubject.next(e.themeMode),this.selectedLanguageSubject.next(e.selectedLanguage),this.editorCode=e.editorCode,this.originalCode=e.originalCode,this.modifiedCode=e.modifiedCode,this.editorUpdateSubject.next(null),this._localStorageService.setAll(e)}static ɵfac=function(e){return new(e||Xe)(V(Ut),V(Yt))};static ɵprov=Z({token:Xe,factory:Xe.ɵfac,providedIn:"root"})}const ec=(i,o)=>({width:i,height:o});class En{_appInit;_destroy=new Be;editorInstance=null;size={width:0,height:0};constructor(o){this._appInit=o,this._appInit.themeMode$.pipe(re(this._destroy)).subscribe(e=>{const t=e=="dark";this._appInit.editorOptions.theme=t?"vs-dark":"vs",this.editorInstance&&_e.setTheme(this._appInit.editorOptions.theme)}),this._appInit.selectedLanguage$.pipe(re(this._destroy)).subscribe(e=>{this._appInit.editorOptions.language=e.id,this.editorInstance&&_e.setModelLanguage(this.editorInstance.getModel(),e.id)}),this._appInit.appAction$.pipe(re(this._destroy)).subscribe(e=>{if(!this.editorInstance){console.error("Editor doesn't exists to perform action");return}const{action:t,paylod:n}=e;switch(t){case"format-code":this.editorInstance.getAction("editor.action.formatDocument")?.run();break;case"scroll-to-top":this.editorInstance.setScrollPosition({scrollTop:0});break;case"scroll-to-bottom":const s=this.editorInstance.getModel()?.getLineCount();this.editorInstance.revealLine(s??0);break;case"undo":this.editorInstance.trigger("undo-button","undo",null);break;case"redo":this.editorInstance.trigger("undo-button","redo",null);break;case"font-up":case"font-down":this.editorInstance.updateOptions({fontSize:this._appInit.editorOptions.fontSize});break;case"clear-all":this.editorInstance.pushUndoStop(),this.editorInstance.executeEdits("clear-all",[{range:this.editorInstance.getModel().getFullModelRange(),text:"",forceMoveMarkers:!0}]),this.editorInstance.pushUndoStop();break;case"json-compression":const r=this.editorInstance.getValue();try{const a=JSON.parse(r),l=JSON.stringify(a);this.editorInstance.setValue(l),_e.setModelLanguage(this.editorInstance.getModel(),"json")}catch(a){console.error("Invalid JSON:",a)}break;case"word-wrap-toggle":this.editorInstance.updateOptions({wordWrap:this._appInit.editorOptions.wordWrap?"on":"off"});break;default:console.warn("No such action exists",t)}}),this._appInit.editorUpdate$.pipe(re(this._destroy)).subscribe(()=>{this.editorInstance&&(this.editorInstance.updateOptions({automaticLayout:this._appInit.editorOptions.automaticLayout,scrollBeyondLastLine:this._appInit.editorOptions.scrollBeyondLastLine,wordWrap:this._appInit.editorOptions.wordWrap?"on":"off",fontSize:this._appInit.editorOptions.fontSize}),this.editorInstance.setValue(this._appInit.editorCode))})}ngOnChanges(o){o.size&&!o.size.isFirstChange()&&this.editorInstance&&this.editorInstance.layout()}ngAfterViewInit(){this.editorInstance=_e.create(document.getElementById("monaco-container"),{value:this._appInit.editorCode,language:this._appInit.editorOptions.language,automaticLayout:this._appInit.editorOptions.automaticLayout,scrollBeyondLastLine:this._appInit.editorOptions.scrollBeyondLastLine,wordWrap:this._appInit.editorOptions.wordWrap?"on":"off",theme:this._appInit.editorOptions.theme,fontSize:this._appInit.editorOptions.fontSize}),this.editorInstance?.onDidChangeModelContent(()=>{const o=this.editorInstance?.getValue()??"";this._appInit.setEditorCode(o)})}handleKeyboardEvent(o){o.altKey&&o.key.toLowerCase()=="z"&&!o.shiftKey&&this._appInit.dispatchAction("word-wrap-toggle")}ngOnDestroy(){this._destroy.next(!1),this._destroy.complete(),this.editorInstance&&this.editorInstance.dispose()}static ɵfac=function(e){return new(e||En)(E(Xe))};static ɵcmp=nt({type:En,selectors:[["app-editor-view"]],hostBindings:function(e,t){e&1&&v("keydown",function(s){return t.handleKeyboardEvent(s)},Ot)},inputs:{size:"size"},features:[Et],decls:1,vars:5,consts:[["id","monaco-container",1,"h-100","w-100"]],template:function(e,t){e&1&&Cs(0,"div",0),e&2&&ys(We(2,ec,t.size.width?t.size.width+"px !important":null,t.size.height?t.size.height+"px !important":null))},dependencies:[$i],encapsulation:2})}class Dn{_appInit;_destroy=new Be;diffEditorInstance=null;constructor(o){this._appInit=o,this._appInit.themeMode$.pipe(re(this._destroy)).subscribe(e=>{const t=e=="dark";this._appInit.editorOptions.theme=t?"vs-dark":"vs",this.diffEditorInstance&&_e.setTheme(this._appInit.editorOptions.theme)}),this._appInit.selectedLanguage$.pipe(re(this._destroy)).subscribe(e=>{this._appInit.editorOptions.language=e.id,this.diffEditorInstance&&this.diffEditorInstance.getModel()?.modified&&(_e.setModelLanguage(this.diffEditorInstance.getModel().modified,e.id),_e.setModelLanguage(this.diffEditorInstance.getModel().original,e.id))}),this._appInit.appAction$.pipe(re(this._destroy)).subscribe(e=>{if(!this.diffEditorInstance){console.error("Diff Checker doesn't exists to perform action");return}const{action:t,paylod:n}=e;switch(t){case"format-code":this.diffEditorInstance.getOriginalEditor().getAction("editor.action.formatDocument")?.run(),this.diffEditorInstance.getModifiedEditor().getAction("editor.action.formatDocument")?.run();break;case"scroll-to-top":this.diffEditorInstance.getOriginalEditor().setScrollPosition({scrollTop:0}),this.diffEditorInstance.getModifiedEditor().setScrollPosition({scrollTop:0});break;case"scroll-to-bottom":const s=this.diffEditorInstance.getOriginalEditor(),r=s.getModel()?.getLineCount();s.revealLine(r??0);const a=this.diffEditorInstance.getModifiedEditor(),l=a.getModel()?.getLineCount();a.revealLine(l??0);break;case"undo":this.diffEditorInstance.trigger("undo-button","undo",null);break;case"redo":this.diffEditorInstance.trigger("undo-button","redo",null);break;case"font-up":case"font-down":this.diffEditorInstance.getOriginalEditor().updateOptions({fontSize:this._appInit.editorOptions.fontSize}),this.diffEditorInstance.getModifiedEditor().updateOptions({fontSize:this._appInit.editorOptions.fontSize});break;case"clear-all":const g=this.diffEditorInstance.getOriginalEditor();g.pushUndoStop(),g.executeEdits("clear-all",[{range:g.getModel().getFullModelRange(),text:"",forceMoveMarkers:!0}]),g.pushUndoStop();const M=this.diffEditorInstance.getModifiedEditor();M.pushUndoStop(),M.executeEdits("clear-all",[{range:M.getModel().getFullModelRange(),text:"",forceMoveMarkers:!0}]),M.pushUndoStop();break;case"json-compression":const p=this.diffEditorInstance.getOriginalEditor(),b=p.getValue();try{const m=JSON.parse(b),P=JSON.stringify(m);p.setValue(P),_e.setModelLanguage(p.getModel(),"json")}catch(m){console.error("Invalid Left JSON:",m)}const S=this.diffEditorInstance.getModifiedEditor(),A=S.getValue();try{const m=JSON.parse(A),P=JSON.stringify(m);S.setValue(P),_e.setModelLanguage(S.getModel(),"json")}catch(m){console.error("Invalid Right JSON:",m)}break;case"word-wrap-toggle":this.diffEditorInstance.updateOptions({wordWrap:this._appInit.editorOptions.wordWrap?"on":"off"});break;default:console.warn("No such action exists",t)}}),this._appInit.editorUpdate$.pipe(re(this._destroy)).subscribe(()=>{if(this.diffEditorInstance){this.diffEditorInstance.updateOptions({automaticLayout:this._appInit.editorOptions.automaticLayout,scrollBeyondLastLine:this._appInit.editorOptions.scrollBeyondLastLine,wordWrap:this._appInit.editorOptions.wordWrap?"on":"off",fontSize:this._appInit.editorOptions.fontSize});const e=_e.createModel(this._appInit.originalCode,this._appInit.editorOptions.language),t=_e.createModel(this._appInit.modifiedCode,this._appInit.editorOptions.language);this.diffEditorInstance.setModel({original:e,modified:t})}})}ngAfterViewInit(){this.diffEditorInstance=_e.createDiffEditor(document.getElementById("diff-checker-container"),{enableSplitViewResizing:!0,renderSideBySide:!0,readOnly:!1,originalEditable:!0,automaticLayout:this._appInit.editorOptions.automaticLayout,scrollBeyondLastLine:this._appInit.editorOptions.scrollBeyondLastLine,wordWrap:this._appInit.editorOptions.wordWrap?"on":"off",theme:this._appInit.editorOptions.theme,fontSize:this._appInit.editorOptions.fontSize});const o=_e.createModel(this._appInit.originalCode,this._appInit.editorOptions.language),e=_e.createModel(this._appInit.modifiedCode,this._appInit.editorOptions.language);this.diffEditorInstance.setModel({original:o,modified:e});const t=this.diffEditorInstance.getOriginalEditor();t.onDidChangeModelContent(()=>{const s=t.getValue()??"";this._appInit.setOriginalCode(s)});const n=this.diffEditorInstance.getModifiedEditor();n.onDidChangeModelContent(()=>{const s=n.getValue()??"";this._appInit.setModifiedCode(s)})}handleKeyboardEvent(o){o.altKey&&o.key.toLowerCase()=="z"&&!o.shiftKey&&this._appInit.dispatchAction("word-wrap-toggle")}ngOnDestroy(){this._destroy.next(!1),this._destroy.complete(),this.diffEditorInstance&&this.diffEditorInstance.dispose()}static ɵfac=function(e){return new(e||Dn)(E(Xe))};static ɵcmp=nt({type:Dn,selectors:[["app-diff-checker-view"]],hostBindings:function(e,t){e&1&&v("keydown",function(s){return t.handleKeyboardEvent(s)},Ot)},decls:1,vars:0,consts:[["id","diff-checker-container",2,"height","90vh","width","100vw"]],template:function(e,t){e&1&&Cs(0,"div",0)},encapsulation:2})}const tc=["contextMenu"],Rn=(i,o)=>o.id;function nc(i,o){if(i&1&&(u(0,"span",9),w(1),h()),i&2){const e=_().$implicit;f(),we(e.shortcut)}}function ic(i,o){i&1&&(u(0,"span",10),w(1,"›"),h())}function oc(i,o){if(i&1){const e=H();u(0,"div",6),v("click",function(n){const s=C(e).$implicit,r=_(2);return y(r.onItemClick(s,n))})("mouseenter",function(n){const s=C(e).$implicit,r=_(2);return y(r.onItemHover(s,n))})("mouseleave",function(){C(e);const n=_(2);return y(n.onItemLeave())}),u(1,"div",7)(2,"span",8),w(3),h(),Y(4,nc,2,1,"span",9),Y(5,ic,2,0,"span",10),h()()}if(i&2){const e=o.$implicit,t=_(2);Ie("disabled",!e.enabled)("divider-after",e.divider)("has-submenu",e.submenu)("active",t.hoveredItem===e)("focused",t.isFocused(e)),R("title",e.shortcut||null),f(3),we(e.label),f(),j(e.shortcut?4:-1),f(),j(e.submenu?5:-1)}}function sc(i,o){if(i&1&&(u(0,"div",3),Ce(1,oc,6,14,"div",5,Rn),h()),i&2){const e=o.$implicit;f(),ye(e.items)}}function rc(i,o){if(i&1&&(u(0,"span",9),w(1),h()),i&2){const e=_().$implicit;f(),we(e.shortcut)}}function ac(i,o){if(i&1){const e=H();u(0,"div",13),v("click",function(n){const s=C(e).$implicit,r=_(2);return y(r.onItemClick(s,n))}),u(1,"div",7)(2,"span",8),w(3),h(),Y(4,rc,2,1,"span",9),h()()}if(i&2){const e=o.$implicit,t=_(2);Ie("disabled",!e.enabled)("divider-after",e.divider)("focused",t.isFocused(e)),R("title",e.shortcut||null),f(3),we(e.label),f(),j(e.shortcut?4:-1)}}function lc(i,o){if(i&1){const e=H();u(0,"div",11),v("mouseenter",function(){C(e);const n=_();return y(n.onSubmenuEnter())})("mouseleave",function(){C(e);const n=_();return y(n.onSubmenuLeave())})("click",function(n){return C(e),y(n.stopPropagation())}),Ce(1,ac,5,9,"div",12,Rn),h()}if(i&2){const e=_();ge("left",e.submenuPosition.left,"px")("top",e.submenuPosition.top,"px"),f(),ye(e.hoveredItem.submenu)}}const cc=["svgContainer"],dc=()=>["n","s","e","w"],Qo=()=>["nw","ne","se","sw"];function uc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"rect",15),h()),i&2){const e=_();R("transform",e.gridConfig().transform),f(),R("width",e.gridConfig().width+200)("height",e.gridConfig().height+200)}}function hc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"path",17),ht(2,"pointsToPath"),h()),i&2){const e=_().$implicit;f(),R("d",Kt(2,7,e.points,e.pathOptions))("stroke-width",e.style.strokeWidth)("stroke-linecap",e.style.lineCap)("stroke-linejoin",e.style.lineJoin)("stroke",e.style.strokeColor)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)}}function gc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"image",18),h()),i&2){const e=_().$implicit;f(),R("height",e.height)("width",e.width)("href",e.src,null,"xlink")("href",e.src)("stroke-width",e.style.strokeWidth)("fill",e.style.fill)("stroke",e.style.strokeColor)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)}}function pc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"line"),h()),i&2){const e=_().$implicit;f(),R("x1",e.x1)("y1",e.y1)("x2",e.x2)("y2",e.y2)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)("stroke-width",e.style.strokeWidth)("stroke-linecap",e.style.lineCap)("stroke",e.style.strokeColor)}}function fc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"line",19),h()),i&2){const e=_().$implicit;f(),R("x1",e.x1)("y1",e.y1)("x2",e.x2)("y2",e.y2)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)("stroke-width",e.style.strokeWidth)("stroke-linecap",e.style.lineCap)("stroke",e.style.strokeColor)("fill",e.style.strokeColor)}}function mc(i,o){if(i&1&&(de(),u(0,"g"),k(1,"rect"),h()),i&2){const e=_().$implicit;f(),R("rx",e.rx)("width",e.width)("height",e.height)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)("stroke-width",e.style.strokeWidth)("fill",e.style.fill)("stroke",e.style.strokeColor)("stroke-linejoin",e.style.lineJoin)}}function _c(i,o){if(i&1&&(de(),u(0,"g"),k(1,"ellipse"),h()),i&2){const e=_().$implicit;f(),R("cx",e.cx)("cy",e.cy)("rx",e.rx)("ry",e.ry)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)("stroke-width",e.style.strokeWidth)("stroke",e.style.strokeColor)("fill",e.style.fill)}}function Cc(i,o){if(i&1&&(de(),u(0,"tspan"),w(1),h()),i&2){const e=o.$implicit,t=o.$index,n=_(2).$implicit;R("x",0)("dy",t===0?0:(n.style.fontSize||16)*1.2),f(),we(e)}}function yc(i,o){if(i&1&&(de(),u(0,"g")(1,"text",20),Ce(2,Cc,2,3,":svg:tspan",null,Vr),h()()),i&2){const e=_().$implicit;f(),R("font-size",e.style.fontSize)("font-family",e.style.fontFamily)("fill",e.style.color)("font-style",e.style.fontStyle)("font-weight",e.style.fontWeight)("stroke-linecap",e.style.lineCap)("stroke-linejoin",e.style.lineJoin)("stroke-dasharray",e.style.dasharray)("stroke-dashoffset",e.style.dashoffset)("stroke",e.style.strokeColor)("stroke-width",e.style.strokeWidth),f(),ye(e.text.split(`
`))}}function bc(i,o){if(i&1&&(de(),u(0,"g",16),ht(1,"elementOpacity"),Y(2,hc,3,10,":svg:g")(3,gc,2,9,":svg:g")(4,pc,2,9,":svg:g")(5,fc,2,10,":svg:g")(6,mc,2,9,":svg:g")(7,_c,2,9,":svg:g")(8,yc,4,11,":svg:g"),h()),i&2){let e;const t=o.$implicit,n=_();ge("pointer-events",t.isLocked?"none":"auto")("mix-blend-mode",t.blendMode),L("id","item_"+t.id),R("data-wb-id",t.id)("transform",t.transform)("opacity",Kt(1,9,t,n.layers())),f(2),j((e=t.type)===n.types.Pen?2:e===n.types.Image?3:e===n.types.Line?4:e===n.types.Arrow?5:e===n.types.Rectangle?6:e===n.types.Ellipse?7:e===n.types.Text?8:-1)}}function vc(i,o){if(i&1&&(de(),k(0,"rect",13)),i&2){const e=o;R("x",e.x)("y",e.y)("width",e.width)("height",e.height)}}function Mc(i,o){if(i&1&&(de(),Ai(0),k(1,"rect",24),ht(2,"gripCursor"),Ti()),i&2){const e=o.$implicit,t=_();f(),R("id","selectorGrip_resize_"+e)("x",e==="n"||e==="s"?t.x:e==="e"?t.x+t.width-5:t.x-5)("y",e==="n"?t.y-5:e==="s"?t.y+t.height-5:t.y)("width",e==="n"||e==="s"?t.width:10)("height",e==="n"||e==="s"?10:t.height)("cursor",Kt(2,6,e,t.rotation))}}function xc(i,o){if(i&1&&(de(),Ai(0),k(1,"rect",25),ht(2,"gripCursor"),Ti()),i&2){const e=o.$implicit,t=_();f(),R("id","selectorGrip_resize_"+e)("x",t.x+(e==="ne"||e==="se"?t.width:0)-5)("y",t.y+(e==="se"||e==="sw"?t.height:0)-5)("cursor",Kt(2,4,e,t.rotation))}}function wc(i,o){if(i&1&&(de(),Ai(0),k(1,"circle",26),ht(2,"gripCursor"),Ti()),i&2){const e=o.$implicit,t=_();f(),R("id","selectorGrip_rotate_"+e)("cx",t.x+(e==="ne"||e==="se"?t.width:-20)+10)("cy",t.y+(e==="se"||e==="sw"?t.height:-20)+10)("cursor",Kt(2,4,"rotate_"+e,t.rotation))}}function Pc(i,o){if(i&1&&(de(),u(0,"g",14),k(1,"rect",21),ni(2,Mc,3,9,"ng-container",22)(3,xc,3,7,"ng-container",22),k(4,"circle",23),ni(5,wc,3,7,"ng-container",22),h()),i&2){const e=o;R("transform","rotate("+e.rotation+","+(e.x+e.width/2)+","+(e.y+e.height/2)+")"),f(),R("x",e.x)("y",e.y)("width",e.width)("height",e.height),f(),L("ngForOf",Zn(10,dc)),f(),L("ngForOf",Zn(11,Qo)),f(),R("cx",e.handles.rotateHandle.x)("cy",e.handles.rotateHandle.y),f(),L("ngForOf",Zn(12,Qo))}}var G=(function(i){return i.Pen="pen",i.Rectangle="rectangle",i.Ellipse="ellipse",i.Line="line",i.Arrow="arrow",i.Text="text",i.Image="image",i})(G||{}),O=(function(i){return i.Ready="ready",i.Destroyed="destroyed",i.DrawStart="drawStart",i.Drawing="drawing",i.DrawEnd="drawEnd",i.ElementsAdded="elementsAdded",i.ElementsUpdated="elementsUpdated",i.ElementsSelected="elementsSelected",i.ElementsRemoved="elementsRemoved",i.ElementDoubleClicked="elementDoubleClicked",i.Undo="undo",i.Redo="redo",i.Clear="clear",i.DataChange="dataChange",i.Save="save",i.ImageAdded="imageAdded",i.ToolChange="toolChange",i.ConfigChange="configChange",i.ZoomChange="zoomChange",i})(O||{}),se=(function(i){return i.Png="png",i.Jpeg="jpeg",i.Svg="svg",i.Base64="base64",i})(se||{}),N=(function(i){return i.Left="left",i.Center="center",i.Right="right",i.Top="top",i.Middle="middle",i.Bottom="bottom",i.DistributeHorizontally="distribute-horizontally",i.DistributeVertically="distribute-vertically",i})(N||{}),Te=(function(i){return i.Round="round",i.Butt="butt",i.Square="square",i})(Te||{}),Fe=(function(i){return i.Round="round",i.Miter="miter",i.Bevel="bevel",i.MiterClip="miter-clip",i})(Fe||{}),F=(function(i){return i.NW="nw",i.N="n",i.NE="ne",i.E="e",i.SE="se",i.S="s",i.SW="sw",i.W="w",i})(F||{}),Ne=(function(i){return i.Pen="pen",i.Marker="marker",i.Highlighter="highlighter",i.Brush="brush",i.Pencil="pencil",i})(Ne||{}),z=(function(i){return i.ExtraFine="extra-fine",i.Fine="fine",i.Medium="medium",i.Thick="thick",i.ExtraThick="extra-thick",i})(z||{});const qn={size:3,thinning:.8,smoothing:.9,streamline:.8,simulatePressure:!0,easing:i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,start:{cap:!0,taper:.5},end:{cap:!0,taper:.6}},es={size:6,thinning:0,smoothing:.2,streamline:.3,simulatePressure:!1,easing:()=>1,start:{cap:!1,taper:!1},end:{cap:!1,taper:!1}},Oc={size:18,thinning:.05,smoothing:.1,streamline:.1,simulatePressure:!1,easing:i=>i,start:{cap:!1,taper:!1},end:{cap:!1,taper:!1}},Sc={size:14,thinning:.85,smoothing:.95,streamline:.9,simulatePressure:!0,easing:i=>Math.pow(i,1.8),start:{cap:!0,taper:.7},end:{cap:!0,taper:.8}},Ec={size:1.5,thinning:.6,smoothing:.15,streamline:.1,simulatePressure:!0,easing:i=>{const o=i*.7+.3;return Math.min(1,o+Math.sin(i*20)*.1)},start:{cap:!0,taper:.1},end:{cap:!0,taper:.2}},qe={[z.ExtraFine]:1,[z.Fine]:3,[z.Medium]:6,[z.Thick]:12,[z.ExtraThick]:20},Qe={[z.ExtraFine]:.5,[z.Fine]:1.5,[z.Medium]:3,[z.Thick]:6,[z.ExtraThick]:10},Gi={"pen-fine":{id:"pen-fine",name:"Fine Pen",type:Ne.Pen,thickness:z.Fine,strokeColor:"#000000",strokeWidth:Qe[z.Fine],lineCap:Te.Round,lineJoin:Fe.Round,strokeOptions:{...qn,size:qe[z.Fine]},display:{description:"Smooth fine pen for detailed drawing",icon:"✏️"}},"pen-medium":{id:"pen-medium",name:"Medium Pen",type:Ne.Pen,thickness:z.Medium,strokeColor:"#000000",strokeWidth:Qe[z.Medium],lineCap:Te.Round,lineJoin:Fe.Round,strokeOptions:{...qn,size:qe[z.Medium]},display:{description:"Standard pen for general use",icon:"🖊️"}},"pen-thick":{id:"pen-thick",name:"Thick Pen",type:Ne.Pen,thickness:z.Thick,strokeColor:"#000000",strokeWidth:Qe[z.Thick],lineCap:Te.Round,lineJoin:Fe.Round,strokeOptions:{...qn,size:qe[z.Thick]},display:{description:"Thick pen for bold strokes",icon:"🖍️"}},"marker-medium":{id:"marker-medium",name:"Medium Marker",type:Ne.Marker,thickness:z.Medium,strokeColor:"#2563eb",strokeWidth:Qe[z.Medium],lineCap:Te.Square,lineJoin:Fe.Miter,strokeOptions:{...es,size:qe[z.Medium]},display:{description:"Consistent marker for clean lines",icon:"🖍️"}},"marker-thick":{id:"marker-thick",name:"Thick Marker",type:Ne.Marker,thickness:z.Thick,strokeColor:"#dc2626",strokeWidth:Qe[z.Thick],lineCap:Te.Square,lineJoin:Fe.Miter,strokeOptions:{...es,size:qe[z.Thick]},display:{description:"Thick marker for emphasis",icon:"🖍️"}},"highlighter-medium":{id:"highlighter-medium",name:"Highlighter",type:Ne.Highlighter,thickness:z.Medium,strokeColor:"#fefc34",strokeWidth:Qe[z.ExtraThick],lineCap:Te.Square,lineJoin:Fe.Miter,opacity:.4,strokeOptions:{...Oc,size:qe[z.ExtraThick]},display:{description:"Translucent highlighter for emphasis",icon:"🖍️"}},"brush-medium":{id:"brush-medium",name:"Paint Brush",type:Ne.Brush,thickness:z.Medium,strokeColor:"#059669",strokeWidth:Qe[z.Thick],lineCap:Te.Round,lineJoin:Fe.Round,strokeOptions:{...Sc,size:qe[z.Thick]},display:{description:"Expressive brush with pressure sensitivity",icon:"🖌️"}},"pencil-fine":{id:"pencil-fine",name:"Pencil",type:Ne.Pencil,thickness:z.Fine,strokeColor:"#374151",strokeWidth:Qe[z.Fine],lineCap:Te.Round,lineJoin:Fe.Round,strokeOptions:{...Ec,size:qe[z.Fine]},display:{description:"Natural pencil for sketching",icon:"✏️"}}},Dc=Object.values(Gi),Ys={};Object.values(Gi).forEach(i=>{const o=`${i.type}-${i.thickness}`;Ys[o]=i});const Ic=Gi["pen-medium"];function kc(i,o){return Ys[`${i}-${o}`]}function ts(i,o=z.Medium){const e=kc(i,o);return e||Dc.find(n=>n.type===i)||Ic}const Ct={strokeWidth:2,strokeColor:"#000000",fill:"#000000",lineJoin:Fe.Round,lineCap:Te.Round,dasharray:"",dashoffset:0},ns={...Ct,fontSize:14,fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal",color:"#000000"};var x=(function(i){return i.Hand="hand",i.Select="select",i.Pen="pen",i.Rectangle="rectangle",i.Image="image",i.Line="line",i.Arrow="arrow",i.Ellipse="ellipse",i.Text="text",i.Eraser="eraser",i})(x||{});const Re={[x.Hand]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M402-40q-30 0-56-13.5T303-92L48-465l24-23q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v537L212-367l157 229q5 8 14 13t19 5h278q33 0 56.5-23.5T760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 66-47 113T680-40H402Zm38-440v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h-80Zm160 0v-360q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v360h-80ZM486-300Z"/></svg>',[x.Select]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z"/></svg>',[x.Pen]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>',[x.Line]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M199-199q-9-9-9-21t9-21l520-520q9-9 21-9t21 9q9 9 9 21t-9 21L241-199q-9 9-21 9t-21-9Z"/></svg>',[x.Arrow]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>',[x.Rectangle]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200Zm0-80h560v-400H200v400Zm0 0v-400 400Z"/></svg>',[x.Ellipse]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',[x.Text]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z"/></svg>',[x.Image]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>',[x.Eraser]:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"/></svg>'},rt=[{value:"normal",label:"Normal",description:"Default blending",category:"normal"},{value:"multiply",label:"Multiply",description:"Darkens by multiplying colors",category:"darken"},{value:"darken",label:"Darken",description:"Keeps darkest colors",category:"darken"},{value:"color-burn",label:"Color Burn",description:"Increases contrast and darkens",category:"darken"},{value:"screen",label:"Screen",description:"Lightens by inverting and multiplying",category:"lighten"},{value:"lighten",label:"Lighten",description:"Keeps lightest colors",category:"lighten"},{value:"color-dodge",label:"Color Dodge",description:"Brightens and reduces contrast",category:"lighten"},{value:"overlay",label:"Overlay",description:"Combines multiply and screen",category:"contrast"},{value:"soft-light",label:"Soft Light",description:"Subtle version of overlay",category:"contrast"},{value:"hard-light",label:"Hard Light",description:"Intense version of overlay",category:"contrast"},{value:"difference",label:"Difference",description:"Subtracts colors",category:"contrast"},{value:"exclusion",label:"Exclusion",description:"Similar to difference but less contrast",category:"contrast"},{value:"hue",label:"Hue",description:"Uses hue of top layer",category:"component"},{value:"saturation",label:"Saturation",description:"Uses saturation of top layer",category:"component"},{value:"color",label:"Color",description:"Uses hue and saturation of top layer",category:"component"},{value:"luminosity",label:"Luminosity",description:"Uses luminosity of top layer",category:"component"}];var pe=(function(i){return i.Default="default",i.Pointer="pointer",i.None="none",i.ContextMenu="context-menu",i.Help="help",i.Progress="progress",i.Wait="wait",i.Crosshair="crosshair",i.Cell="cell",i.Text="text",i.VerticalText="vertical-text",i.Grab="grab",i.Grabbing="grabbing",i.Move="move",i.AllScroll="all-scroll",i.NResize="n-resize",i.SResize="s-resize",i.EResize="e-resize",i.WResize="w-resize",i.NEResize="ne-resize",i.NWResize="nw-resize",i.SEResize="se-resize",i.SWResize="sw-resize",i.EWResize="ew-resize",i.NSResize="ns-resize",i.NESWResize="nesw-resize",i.NWSEResize="nwse-resize",i.Copy="copy",i.Alias="alias",i.NoDrop="no-drop",i.NotAllowed="not-allowed",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ColResize="col-resize",i.RowResize="row-resize",i.Pencil="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzAwMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0ibTE2LjMxOCA2LjExLTMuNTM2LTMuNTM1IDEuNDE1LTEuNDE0Yy42My0uNjMgMi4wNzMtLjc1NSAyLjgyOCAwbC43MDcuNzA3Yy43NTUuNzU1LjYzMSAyLjE5OCAwIDIuODI5TDE2LjMxOCA2LjExem0tMS40MTQgMS40MTUtOS45IDkuOS00LjU5NiAxLjA2IDEuMDYtNC41OTYgOS45LTkuOSAzLjUzNiAzLjUzNnoiLz48L3N2Zz4=') 0 24, auto",i.Brush="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNNyAxNGMtMS42NiAwLTMgMS4zNC0zIDMgMCAxLjMxLTEuMTYgMi0yIDIgLjkyIDEuMjIgMi40OSAyIDQgMiAyLjIxIDAgNC0xLjc5IDQtNCAwLTEuNjYtMS4zNC0zLTMtM3ptMTMuNzEtOS4zN2wtMS4zNC0xLjM0YS45OTYuOTk2IDAgMCAwLTEuNDEgMEw5IDEyLjI1IDExLjc1IDE1bDguOTYtOC45NmEuOTk2Ljk5NiAwIDAgMCAwLTEuNDF6Ii8+PC9zdmc+') 0 24, auto",i.Eraser="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMTYuMjQgMy41Nmw0Ljk1IDQuOTRjLjc4Ljc5Ljc4IDIuMDUgMCAyLjg0TDEyIDIwLjUzYTQuMDA4IDQuMDA4IDAgMCAxLTUuNjYgMEwyLjgxIDE3Yy0uNzgtLjc5LS43OC0yLjA1IDAtMi44NGwxMC42LTEwLjZjLjc5LS43OCAyLjA1LS43OCAyLjgzIDBNNC4yMiAxNS41OGwzLjU0IDMuNTNjLjc4Ljc5IDIuMDQuNzkgMi44MyAwbDMuNTMtMy41My00Ljk1LTQuOTUtNC45NSA0Ljk1eiIvPjwvc3ZnPg==') 12 12, auto",i.Highlighter="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB4PSI0IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0yIDIwaDIwdjNIMnoiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==') 12 24, auto",i.TextCursor="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNNSA0djNoNS41djEyaDNWN0gxOVY0SDV6Ii8+PC9zdmc+') 12 0, text",i.Shape="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==') 12 12, crosshair",i.Arrow="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMyAzbDcuMDcgMTYuOTcgMi41MS03LjM5IDcuMzktMi41MUwzIDN6Ii8+PC9zdmc+') 0 0, default",i.Hand="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMTMgNnY1aDNMMTIgMTdsLTQtNmgzVjZjMC0xLjEuOS0yIDItMnMyIC5IDIgMnptOCAwdjVoLTJWNmMwLTIuMjEtMS43OS00LTQtNGgtMkMxMC43OSAyIDkgMy43OSA5IDZ2NUg3VjZjMC0zLjMxIDIuNjktNiA2LTZoMmMzLjMxIDAgNiAyLjY5IDYgNnoiLz48L3N2Zz4=') 12 12, grab",i.Rotate="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2eiIvPjwvc3ZnPg==') 12 12, grab",i.Eyedropper="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMjAuNzEgNS42M2wtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMy4xMiAzLjEyLTEuOTMtMS45MS0xLjQxIDEuNDEgMS40MiAxLjQyTDMgMTYuMjVWMjFoNC43NWw4LjkyLTguOTIgMS40MiAxLjQyIDEuNDEtMS40MS0xLjkyLTEuOTIgMy4xMy0zLjEyYy4zOS0uMzkuMzktMS4wMiAwLTEuNDJ6Ii8+PC9zdmc+') 0 24, crosshair",i.LaserPointer="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+') 12 12, none",i.Image="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIxLjUiIGZpbGw9IiMwMDAiLz48cG9seWxpbmUgcG9pbnRzPSIyMSAxNSAxNSA5IDkgMTUgNiAxMiAzIDE1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==') 12 12, crosshair",i.Dot="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==') 10 10, crosshair",i.Plus="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIvPjwvc3ZnPg==') 12 12, crosshair",i.Line="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bGluZSB4MT0iMyIgeTE9IjIxIiB4Mj0iMjEiIHkyPSIzIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMyIgY3k9IjIxIiByPSIyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMjEiIGN5PSIzIiByPSIyIiBmaWxsPSIjMDAwIi8+PC9zdmc+') 12 12, crosshair",i})(pe||{});let Ee=(()=>{class i{eventSubject=new Be;eventSignals={[O.Ready]:D(void 0),[O.Destroyed]:D(void 0),[O.DrawStart]:D(void 0),[O.Drawing]:D(void 0),[O.DrawEnd]:D(void 0),[O.ElementsAdded]:D(void 0),[O.ElementsUpdated]:D(void 0),[O.ElementsSelected]:D(void 0),[O.ElementsRemoved]:D(void 0),[O.ElementDoubleClicked]:D(void 0),[O.Undo]:D(void 0),[O.Redo]:D(void 0),[O.Clear]:D(void 0),[O.DataChange]:D(void 0),[O.Save]:D(void 0),[O.ImageAdded]:D(void 0),[O.ToolChange]:D(void 0),[O.ConfigChange]:D(void 0),[O.ZoomChange]:D(void 0)};lastEventInternal=D(void 0);lastEvent=this.lastEventInternal.asReadonly();defaultDebounceConfigs={[O.ElementsAdded]:{debounceTime:100,distinctUntilChanged:!0},[O.Drawing]:{debounceTime:16,distinctUntilChanged:!1}};ngOnDestroy(){this.destroy()}emit(e,t){const n={type:e,payload:t,timestamp:Date.now()};this.eventSubject.next(n),He(()=>{this.eventSignals[e].set(n.payload),this.lastEventInternal.set(n)})}listen(){return this.eventSubject.asObservable()}getEventSignal(e){return this.eventSignals[e].asReadonly()}getAllEventsSignal(){return this.lastEvent}on(e,t){let n=this.eventSubject.pipe(so(r=>r.type===e),ti(r=>r.payload));const s=t||this.defaultDebounceConfigs[e];if(!s)return n;if(s.debounceTime>0&&(n=n.pipe(fn(s.debounceTime))),s.distinctUntilChanged){const r=s.comparator;n=n.pipe(na(r))}return n}listenToMultiple(e){return this.eventSubject.pipe(so(t=>e.includes(t.type)),ti(t=>({type:t.type,payload:t.payload,timestamp:t.timestamp})))}destroy(){this.eventSubject.complete()}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),De=(()=>{class i{eventBusService;config=D({drawingEnabled:!0,canvasWidth:800,canvasHeight:600,fullScreen:!0,center:!0,canvasX:0,canvasY:0,strokeColor:"#333333",strokeWidth:2,backgroundColor:"#F8F9FA",lineJoin:Fe.Round,lineCap:Te.Round,fill:"transparent",zoom:1,x:0,y:0,fontFamily:"sans-serif",fontSize:24,dasharray:"",dashoffset:0,enableGrid:!1,gridSize:10,snapToGrid:!0,keyboardShortcutsEnabled:!0,penType:Ne.Pen});editorConfig=D({title:"Whiteboard",enableEditor:!0,showTitle:!0,showZoom:!0,showLayers:!0,showTools:!0,showGrid:!0,showBackground:!0,showStroke:!0,showFill:!0,showOpacity:!0,showFont:!0,showDash:!0,showEraser:!0,showUndo:!0,showRedo:!0,showClear:!0,showSave:!0,showLoad:!1,showExport:!0,showImport:!1,showShare:!1,showSettings:!1,showHelp:!1,showAbout:!1,showFeedback:!1,showSupport:!1,showContact:!1,showPrivacy:!1,showTerms:!1,showLicense:!1,showAttribution:!1,showCredits:!1,showChangelog:!1,showReleaseNotes:!1,showRoadmap:!1,showBlog:!1,showForum:!1,showCommunity:!1,showEvents:!1,showWebinars:!1,showWorkshops:!1,showTutorials:!1,showDocumentation:!1,showAPI:!1,showSDK:!1,showCLI:!1,showPlugins:!1,showExtensions:!1,showIntegrations:!1,showAddons:!1,showThemes:!1,showTemplates:!1,showSnippets:!1,showExamples:!0,showDemos:!0,showSamples:!1,showShowcases:!1,showPortfolios:!1,showCaseStudies:!1,showSuccessStories:!1,showTestimonials:!1,showReviews:!1,showRatings:!1,showComparisons:!1,showAlternatives:!1,showInsights:!1});constructor(e){this.eventBusService=e}getConfig(){return this.config()}getConfigSignal(){return this.config.asReadonly()}getEditorConfig(){return this.editorConfig()}getEditorConfigSignal(){return this.editorConfig.asReadonly()}updateConfig(e,t=!0){if(this.config.update(s=>({...s,...e})),"zoom"in e){const s=this.config();this.eventBusService.emit(O.ZoomChange,{zoom:s.zoom})}t&&this.eventBusService.emit(O.ConfigChange,this.config())}isConfigDifferent(e,t){return this.config()[e]!==t}updateConfigValue(e,t){this.config.update(n=>({...n,[e]:t})),this.eventBusService.emit(O.ConfigChange,this.config())}updateEditorConfigValue(e,t){this.editorConfig.update(n=>({...n,[e]:t}))}checkAndUpdateConfig(e,t){this.isConfigDifferent(e,t)&&this.updateConfigValue(e,t)}getConfigValue(e){return this.config()[e]}setConfigValue(e,t){this.config.update(n=>({...n,[e]:t})),this.eventBusService.emit(O.ConfigChange,this.config())}getConfigKeys(){return Object.keys(this.config())}getConfigValues(){return Object.values(this.config())}static ɵfac=function(t){return new(t||i)(V(Ee))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Tt=(()=>{class i{configService;eventBusService;renderer;svgContainer=null;transform=I(()=>{const{zoom:e,x:t,y:n}=this.getConfig();return`translate(${t}, ${n}) scale(${e})`});constructor(e,t,n){this.configService=e,this.eventBusService=t,this.renderer=n.createRenderer(null,null)}initializeCanvas(e){this.svgContainer=e;const{fullScreen:t,center:n}=this.getConfig();!t&&n&&setTimeout(()=>{this.centerCanvas()},0),this.eventBusService.emit(O.Ready)}getCanvas(){if(!this.svgContainer)throw new Error("SVG container not initialized");return this.svgContainer}isCanvasInitialized(){return this.svgContainer!==null}getConfig(){return this.configService.getConfig()}setCanvasDimensions(e,t){this.configService.updateConfig({canvasWidth:e,canvasHeight:t})}setCanvasPosition(e,t){this.configService.updateConfig({x:e,y:t})}getCanvasDimensions(){const e=this.getConfig();return{width:e.canvasWidth,height:e.canvasHeight}}getCanvasPosition(){const e=this.getConfig();return{x:e.x,y:e.y}}getContainerDimensions(){return this.svgContainer?{width:this.svgContainer.clientWidth||0,height:this.svgContainer.clientHeight||0}:{width:0,height:0}}fullScreen(){const{width:e,height:t}=this.getContainerDimensions();this.setCanvasDimensions(e,t),this.configService.updateConfig({fullScreen:!0}),this.centerCanvas()}exitFullScreen(e=800,t=600){this.setCanvasDimensions(e,t),this.configService.updateConfig({fullScreen:!1,zoom:1}),this.centerCanvas()}centerCanvas(){const{fullScreen:e}=this.getConfig();if(e)this.configService.updateConfig({x:0,y:0,canvasX:0,canvasY:0});else{const{canvasWidth:t,canvasHeight:n,zoom:s,center:r}=this.getConfig(),{width:a,height:l}=this.getContainerDimensions(),c=t*s,d=n*s,g=(a-c)/2,M=(l-d)/2,p=r?t/2:0,b=r?n/2:0;this.configService.updateConfig({x:p,y:b,canvasX:g,canvasY:M})}}resetCanvas(){this.configService.updateConfig({x:0,y:0,zoom:1,canvasX:0,canvasY:0})}toggleGrid(){const{enableGrid:e}=this.getConfig();this.configService.updateConfig({enableGrid:!e})}setGridVisible(e){this.configService.updateConfig({enableGrid:e})}setGridSize(e){this.configService.updateConfig({gridSize:e})}toggleSnapToGrid(){const{snapToGrid:e}=this.getConfig();this.configService.updateConfig({snapToGrid:!e})}getTransform(){return this.transform}getTransformString(){return this.transform()}screenToCanvas(e,t){const{zoom:n,x:s,y:r}=this.getConfig();return{x:(e-s)/n,y:(t-r)/n}}canvasToScreen(e,t){const{zoom:n,x:s,y:r}=this.getConfig();return{x:e*n+s,y:t*n+r}}getVisibleBounds(){const{zoom:e,x:t,y:n}=this.getConfig(),{width:s,height:r}=this.getContainerDimensions();return{left:-t/e,top:-n/e,right:(-t+s)/e,bottom:(-n+r)/e}}isPointVisible(e,t){const n=this.getVisibleBounds();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}isRectVisible(e,t,n,s){const r=this.getVisibleBounds();return!(e+n<r.left||e>r.right||t+s<r.top||t>r.bottom)}getCanvasDimensionsProvider(){return()=>this.getCanvasDimensions()}getContainerDimensionsProvider(){return()=>this.getContainerDimensions()}transformCoordinates(e,t){return{x:e,y:t}}validateZoom(e){return Math.max(.1,Math.min(10,e))}static ɵfac=function(t){return new(t||i)(V(De),V(Ee),V(Br))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Xi=(()=>{class i{undoStack=[];redoStack=[];MAX_HISTORY=50;canUndoSignal=D(!1);canRedoSignal=D(!1);undoDescriptionSignal=D(void 0);redoDescriptionSignal=D(void 0);batching=!1;batchDepth=0;batchBeforeSnapshot=null;batchDescription="Batch operation";pendingBatchAfter=null;getCanUndoSignal(){return this.canUndoSignal.asReadonly()}getCanRedoSignal(){return this.canRedoSignal.asReadonly()}getUndoDescriptionSignal(){return this.undoDescriptionSignal.asReadonly()}getRedoDescriptionSignal(){return this.redoDescriptionSignal.asReadonly()}recordChange(e,t,n){this.batching||this.snapshotsEqual(e,t)||this.pushHistory({before:this.cloneElements(e),after:this.cloneElements(t),description:n,timestamp:Date.now()})}recordElementCreation(e,t){this.recordChange(e,t,"Create element")}recordElementUpdate(e,t){this.recordChange(e,t,"Update element")}recordElementDeletion(e,t){this.recordChange(e,t,"Delete element")}recordClear(e,t){this.recordChange(e,t,"Clear whiteboard")}startBatch(e,t){return this.batchDepth===0&&(this.batchBeforeSnapshot=this.cloneElements(t),this.batchDescription=e,this.batching=!0),this.batchDepth++,{execute:()=>this.finishBatchCommit(),clear:()=>this.cancelBatch()}}completeBatch(e){this.batching&&(this.pendingBatchAfter=this.cloneElements(e))}finishBatchCommit(){if(this.batchDepth=Math.max(0,this.batchDepth-1),this.batchDepth>0)return;if(!this.batching||!this.batchBeforeSnapshot){this.resetBatchState();return}const e=this.pendingBatchAfter??this.batchBeforeSnapshot;this.snapshotsEqual(this.batchBeforeSnapshot,e)||this.pushHistory({before:this.batchBeforeSnapshot,after:e,description:this.batchDescription,timestamp:Date.now()}),this.resetBatchState()}cancelBatch(){this.batchDepth=0,this.resetBatchState()}resetBatchState(){this.batching=!1,this.batchBeforeSnapshot=null,this.batchDescription="Batch operation"}undo(){return this.performUndo()}redo(){return this.performRedo()}clearHistory(){this.undoStack=[],this.redoStack=[],this.updateSignals()}performUndo(){if(this.undoStack.length===0)return null;const e=this.undoStack.pop();return e?(this.redoStack.push(e),this.updateSignals(),this.cloneElements(e.before)):null}performRedo(){if(this.redoStack.length===0)return null;const e=this.redoStack.pop();return e?(this.undoStack.push(e),this.updateSignals(),this.cloneElements(e.after)):null}pushHistory(e){this.undoStack.push(e),this.undoStack.length>this.MAX_HISTORY&&this.undoStack.shift(),this.redoStack=[],this.updateSignals()}updateSignals(){this.canUndoSignal.set(this.undoStack.length>0),this.canRedoSignal.set(this.redoStack.length>0),this.undoDescriptionSignal.set(this.undoStack[this.undoStack.length-1]?.description),this.redoDescriptionSignal.set(this.redoStack[this.redoStack.length-1]?.description)}cloneElements(e){return e.map(t=>{const n={...t},s=t.points;return Array.isArray(s)&&(n.points=s.map(r=>[...r])),n})}snapshotsEqual(e,t){if(e.length!==t.length)return!1;const n=new Map(e.map(s=>[s.id,s]));for(const s of t){const r=n.get(s.id);if(!r||JSON.stringify(r)!==JSON.stringify(s))return!1}return!0}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})();function Ac(i,o){const e=document.createElement("a");e.href=i,e.setAttribute("visibility","hidden"),e.download=o||"new white-board",document.body.appendChild(e),e.click(),document.body.removeChild(e)}function yt(){return Math.random().toString(36).substring(2).padEnd(12,"0").substring(0,12)}const Tc="selectorGroup",Fc="svgroot",js="item_",$s="selectorBox",Lc="selectorGrip_",Bc="selectorGrip_resize",zc="selectorGrip_rotate",Gs="data-wb-id",is=.25,cn=.1,dn=5,os=1,ss=.5,wt={MIDDLE:1,RIGHT:2},un={PAN_MIDDLE:"pan-middle",PAN_SPACE:"pan-space"},Qn={HTML:"text/html",PLAIN:"text/plain",JSON:"application/json"},Vc={COPY:"copy"},In={ESCAPE:"Escape",ENTER:"Enter",SPACE:"Space"},ne={ESCAPE:"escape",DELETE:"delete",BACKSPACE:"backspace",ARROW_UP:"arrowup",ARROW_DOWN:"arrowdown",ARROW_LEFT:"arrowleft",ARROW_RIGHT:"arrowright"},Xs={IMAGE:"image/"},hn={SMALL_STEP:1,LARGE_STEP:10},Rc=1e-6;function rs(i,o){return Math.atan2(o.y-i.y,o.x-i.x)*(180/Math.PI)}function wi(i){return i=i%360,i<0?i+360:i}function as(i,o){return Math.abs(i)>Math.abs(o)?{x:i,y:0}:{x:0,y:o}}function Gt(i,o,e,t){const n=e.x,s=e.y,r=t.x,a=t.y,l=(r-n)**2+(a-s)**2;if(l===0)return Math.sqrt((i-n)**2+(o-s)**2);let c=((i-n)*(r-n)+(o-s)*(a-s))/l;c=Math.max(0,Math.min(1,c));const d=n+c*(r-n),g=s+c*(a-s);return Math.sqrt((i-d)**2+(o-g)**2)}function Nc(i,o,e,t,n=Rc){const s=(b,S)=>b.x*S.y-b.y*S.x,r=(b,S)=>({x:b.x-S.x,y:b.y-S.y}),a=r(o,i),l=r(t,e),c=r(e,i),d=s(a,l),g=s(c,a);if(Math.abs(d)<n){if(Math.abs(g)>=n)return!1;const b=a.x*a.x+a.y*a.y,S=(c.x*a.x+c.y*a.y)/b,A=r(t,i),m=(A.x*a.x+A.y*a.y)/b;return S>=0&&S<=1||m>=0&&m<=1||S<0&&m>1||S>1&&m<0}const M=g/d,p=s(c,l)/d;return M>=0&&M<=1&&p>=0&&p<=1}function Hc(i,o){return i.minX<=o.x+o.width&&i.maxX>=o.x&&i.minY<=o.y+o.height&&i.maxY>=o.y}function Wc(i,o){const e=Math.round(wi(o)/45)%8,t=Object.values(F),s=(t.indexOf(i)+e)%8;return t[s]}function Ki(i,o,e,t){const n=[[{x:i.minX,y:i.minY},{x:i.maxX,y:i.minY}],[{x:i.maxX,y:i.minY},{x:i.maxX,y:i.maxY}],[{x:i.maxX,y:i.maxY},{x:i.minX,y:i.maxY}],[{x:i.minX,y:i.maxY},{x:i.minX,y:i.minY}]];for(const[s,r]of n)if(Nc(o,e,s,r,t))return!0;return!1}function Zc(i,o,e,t,n,s,r){return Gt(i,o,n,s)<=Math.max(e,t)+r}function Ks(i,o,e,t,n,s,r){const a={x:i,y:o},l={x:e,y:t};return Gt(n.x,n.y,a,l)<=r||Gt(s.x,s.y,a,l)<=r}function Uc(i,o,e,t){for(let n=0;n<i.length-1;n++){const s={x:i[n][0],y:i[n][1]},r={x:i[n+1][0],y:i[n+1][1]};if(Gt(o.x,o.y,s,r)<=t||Gt(e.x,e.y,s,r)<=t)return!0}return!1}function Yc(i,o){return[i[0]+o[0],i[1]+o[1]]}function Js(i,o){return[i[0]-o[0],i[1]-o[1]]}function jc(i,o){return[i[0]*o,i[1]*o]}function $c(i){return i[0]*i[0]+i[1]*i[1]}function ei(i,o){return $c(Js(i,o))}function Gc(i,o){return Math.hypot(i[1]-o[1],i[0]-o[0])}function ls(i,o,e){return Yc(i,jc(Js(o,i),e))}function Xc(i){const o=i[0]!==void 0?i[0]:0,e=i[1]!==void 0?i[1]:0,t=i[2]!==void 0?i[2]:1;return[o,e,t]}function Kc(i,o){return Math.abs(i[0]-o[0])<1e-4&&Math.abs(i[1]-o[1])<1e-4}class Jc{create(o){return{type:G.Arrow,id:yt(),x:0,y:0,x1:0,y1:0,x2:0,y2:0,rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){return e.includes(F.N)&&(o.y2+=n),e.includes(F.S)&&(o.y1+=n),e.includes(F.W)&&(o.x1+=t),e.includes(F.E)&&(o.x2+=t),o}getBounds(o){const e=o.x1+o.x,t=o.y1+o.y,n=o.x2+o.x,s=o.y2+o.y;return{minX:Math.min(e,n),minY:Math.min(t,s),maxX:Math.max(e,n),maxY:Math.max(t,s),width:Math.abs(n-e),height:Math.abs(s-t)}}hitTest(o,e,t,n){const{x1:s,y1:r,x2:a,y2:l}=o;return Ks(s,r,a,l,e,t,n)}}class qc{create(o){return{type:G.Ellipse,id:yt(),x:0,y:0,cx:0,cy:0,rx:1,ry:1,rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){if(e.includes(F.N)){const s=o.ry-n/2;s>0&&(o.ry=s,o.cy+=n/2)}if(e.includes(F.S)){const s=o.ry+n/2;s>0&&(o.ry=s,o.cy+=n/2)}if(e.includes(F.W)){const s=o.rx-t/2;s>0&&(o.rx=s,o.cx+=t/2)}if(e.includes(F.E)){const s=o.rx+t/2;s>0&&(o.rx=s,o.cx+=t/2)}return o}getBounds(o){const e=o.cx+o.x,t=o.cy+o.y;return{minX:e-o.rx,minY:t-o.ry,maxX:e+o.rx,maxY:t+o.ry,width:o.rx*2,height:o.ry*2}}hitTest(o,e,t,n){const{cx:s,cy:r,rx:a,ry:l}=o;return Zc(s,r,a,l,e,t,n)}}class Qc{create(o){return{type:G.Image,id:yt(),x:0,y:0,width:1,height:1,src:"",rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){if(e.includes(F.N)){const s=o.height-n;s>0&&(o.y+=n,o.height=s)}if(e.includes(F.S)){const s=o.height+n;s>0&&(o.height=s)}if(e.includes(F.W)){const s=o.width-t;s>0&&(o.x+=t,o.width=s)}if(e.includes(F.E)){const s=o.width+t;s>0&&(o.width=s)}return o}getBounds(o){return{minX:o.x,minY:o.y,maxX:o.x+o.width,maxY:o.y+o.height,width:o.width,height:o.height}}hitTest(o,e,t,n){const s=this.getBounds(o);return Ki(s,e,t,n)}}class ed{create(o){return{type:G.Line,id:yt(),x:0,y:0,x1:0,y1:0,x2:0,y2:0,rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){return e.includes(F.N)&&(o.y1+=n),e.includes(F.S)&&(o.y2+=n),e.includes(F.W)&&(o.x1+=t),e.includes(F.E)&&(o.x2+=t),o}getBounds(o){const e=o.x1+o.x,t=o.y1+o.y,n=o.x2+o.x,s=o.y2+o.y;return{minX:Math.min(e,n),minY:Math.min(t,s),maxX:Math.max(e,n),maxY:Math.max(t,s),width:Math.abs(n-e),height:Math.abs(s-t)}}hitTest(o,e,t,n){const{x1:s,y1:r,x2:a,y2:l}=o;return Ks(s,r,a,l,e,t,n)}}function cs(i){if(i.length===0)throw new Error("Cannot calculate bounding box for empty points array");let o=1/0,e=1/0,t=-1/0,n=-1/0;for(const[s,r]of i)o=Math.min(o,s),e=Math.min(e,r),t=Math.max(t,s),n=Math.max(n,r);return{minX:o,minY:e,maxX:t,maxY:n,width:t-o,height:n-e}}function td(i,o,e,t){return i.minX-t<=Math.max(o.x,e.x)&&i.maxX+t>=Math.min(o.x,e.x)&&i.minY-t<=Math.max(o.y,e.y)&&i.maxY+t>=Math.min(o.y,e.y)}class nd{create(o){return{type:G.Pen,id:yt(),x:0,y:0,points:[],rotation:0,opacity:100,zIndex:1,selectAfterDraw:!1,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){const s=cs(o.points),{points:r,position:a}=this.getScaleFactors(e,s,t,n),l=s.minX+s.width/2,c=s.minY+s.height/2,[d,g]=r;return s.width*d<10||s.height*g<10||(o.x+=a.x,o.y+=a.y,o.points=o.points.map(M=>[l+(M[0]-l)*d,c+(M[1]-c)*g])),o}getScaleFactors(o,e,t,n){const s=[1,1],r={x:0,y:0};return o.includes("w")&&(s[0]=(e.width-t)/e.width,r.x+=t/2),o.includes("n")&&(s[1]=(e.height-n)/e.height,r.y+=n/2),o.includes("e")&&(s[0]=(e.width+t)/e.width,r.x+=t/2),o.includes("s")&&(s[1]=(e.height+n)/e.height,r.y+=n/2),{points:s,position:r}}getBounds(o){const{minX:e,minY:t,maxX:n,maxY:s,width:r,height:a}=cs(o.points);return{minX:e+o.x,minY:t+o.y,maxX:n+o.x,maxY:s+o.y,width:r,height:a}}hitTest(o,e,t,n){return Uc(o.points,e,t,n)}}class id{create(o){return{type:G.Rectangle,id:yt(),x:0,y:0,width:1,height:1,rx:5,rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,...o,style:{...Ct,...o.style}}}resize(o,e,t,n){if(e.includes(F.N)){const s=o.height-n;s>0&&(o.y+=n,o.height=s)}if(e.includes(F.S)){const s=o.height+n;s>0&&(o.height=s)}if(e.includes(F.W)){const s=o.width-t;s>0&&(o.x+=t,o.width=s)}if(e.includes(F.E)){const s=o.width+t;s>0&&(o.width=s)}return o}getBounds(o){return{minX:o.x,minY:o.y,maxX:o.x+o.width,maxY:o.y+o.height,width:o.width,height:o.height}}hitTest(o,e,t,n){const s=this.getBounds(o);return Ki(s,e,t,n)}}class od{create(o){return{type:G.Text,id:yt(),x:0,y:0,text:"",rotation:0,opacity:100,zIndex:1,selectAfterDraw:!0,scaleX:1,scaleY:1,...o,style:{...ns,...o.style}}}resize(o,e,t,n){const a=t*.016,l=n*.016;switch(e){case F.NW:o.x+=t,o.y+=n,o.scaleX=Math.max(.1,o.scaleX-a),o.scaleY=Math.max(.1,o.scaleY-l);break;case F.N:o.y+=n,o.scaleY=Math.max(.1,o.scaleY-l);break;case F.NE:o.y+=n,o.scaleX=Math.max(.1,o.scaleX+a),o.scaleY=Math.max(.1,o.scaleY-l);break;case F.E:o.scaleX=Math.max(.1,o.scaleX+a);break;case F.SE:o.scaleX=Math.max(.1,o.scaleX+a),o.scaleY=Math.max(.1,o.scaleY+l);break;case F.S:o.scaleY=Math.max(.1,o.scaleY+l);break;case F.SW:o.x+=t,o.scaleX=Math.max(.1,o.scaleX-a),o.scaleY=Math.max(.1,o.scaleY+l);break;case F.W:o.x+=t,o.scaleX=Math.max(.1,o.scaleX-a);break}return o}getBounds(o){const{text:e,x:t,y:n,scaleX:s,scaleY:r,style:a}=o,l=a.fontSize??ns.fontSize??16,c=l*1.2,d=l*.6,g=e.split(`
`),M=g.reduce((A,m)=>Math.max(A,m.length),0),p=d*M*s||l*s,b=c*g.length*r||l*r,S=l*.8*r;return{minX:t,minY:n-S,maxX:t+p,maxY:n-S+b,width:p,height:b}}hitTest(o,e,t,n){const s=this.getBounds(o);return Ki(s,e,t,n)}}const qs={[G.Arrow]:new Jc,[G.Ellipse]:new qc,[G.Image]:new Qc,[G.Line]:new ed,[G.Pen]:new nd,[G.Rectangle]:new id,[G.Text]:new od};function Pt(i){return qs[i]}function Ke(i,o,e){const n={...o,layerId:e||""};return qs[i].create(n)}function ut(i){return Pt(i.type).getBounds(i)}function Qs(i,o){const e=er(i);if(e){if(e.id===Tc)return null;const t=e.getAttribute(Gs);return o.find(s=>s.id===t)||null}return null}function er(i){if(!i?.target)return null;let o=i.target;for(;o;){if(o.id===Fc)return null;if(o.id.includes(js)||o.id.includes(Lc)||o.id.includes($s))return o;if(o.parentNode)o=o.parentNode;else break}return null}function Pi(i,o){const{zoom:e,x:t,y:n,canvasX:s,canvasY:r,fullScreen:a}=i;if(a){const M=o.x/e-t,p=o.y/e-n;return{x:M,y:p}}const l=o.x-s,c=o.y-r,d=l/e-t,g=c/e-n;return{x:d,y:g}}function tr(i,o,e,t){const n=Math.PI/4,s=e-i,r=t-o,a=Math.atan2(r,s),l=Math.sqrt(s*s+r*r),c=Math.round(a/n)*n,d=i+l*Math.cos(c),g=o+l*Math.sin(c);return{x:d,y:g,a:c}}function ie(i,o){return Math.round(i/o)*o}function sd(i){const o=ut(i);if(!i.rotation||i.rotation===0)return o;const e=o.width/2,t=o.height/2,n=[{x:0,y:0},{x:o.width,y:0},{x:o.width,y:o.height},{x:0,y:o.height}],s=(i.rotation||0)*(Math.PI/180),r=Math.cos(s),a=Math.sin(s),c=n.map(A=>{const m=A.x-e,P=A.y-t,W=m*r-P*a,K=m*a+P*r;return{x:W+e,y:K+t}}).map(A=>({x:A.x+i.x,y:A.y+i.y})),d=c.map(A=>A.x),g=c.map(A=>A.y),M=Math.min(...d),p=Math.min(...g),b=Math.max(...d),S=Math.max(...g);return{minX:M,minY:p,maxX:b,maxY:S,width:b-M,height:S-p}}function rd(i){if(i.length===0)return null;const o=i.map(r=>sd(r)),e=Math.min(...o.map(r=>r.minX)),t=Math.min(...o.map(r=>r.minY)),n=Math.max(...o.map(r=>r.maxX)),s=Math.max(...o.map(r=>r.maxY));return{minX:e,minY:t,maxX:n,maxY:s,width:n-e,height:s-t}}function ad(i,o,e){const t=e*(Math.PI/180),n=Math.cos(t),s=Math.sin(t),r=i.x-o.x,a=i.y-o.y;return{x:o.x+r*n-a*s,y:o.y+r*s+a*n}}let Nn=(()=>{class i{_layers=D([]);_activeLayerId=D("");layers=this._layers.asReadonly();activeLayerId=this._activeLayerId.asReadonly();activeLayer=I(()=>{const e=this._layers(),t=this._activeLayerId();return e.find(n=>n.id===t)||e[0]});sortedLayers=I(()=>[...this._layers()].sort((e,t)=>e.zIndex-t.zIndex));visibleLayers=I(()=>this._layers().filter(e=>e.visible));unlockedLayers=I(()=>this._layers().filter(e=>!e.locked));constructor(){this.initializeDefaultLayer()}addLayer(e){const t=this._layers(),n=Math.max(...t.map(l=>l.zIndex),0)+1,s=t.length+1,r={id:this.generateLayerId(),name:e||`Layer ${s}`,visible:!0,locked:!1,zIndex:n,elements:[],opacity:1,blendMode:"normal"},a=t.map(l=>({...l,visible:!1}));return this._layers.set([...a,r]),this.setActiveLayer(r.id),r}removeLayer(e){const t=this._layers();if(t.length<=1)return console.warn("Cannot delete the last remaining layer"),!1;if(!t.find(r=>r.id===e))return console.warn(`Layer with id ${e} not found`),!1;const s=t.filter(r=>r.id!==e);if(this._layers.set(s),this._activeLayerId()===e){const r=s[Math.max(0,s.length-1)];this.setActiveLayer(r.id)}return!0}duplicateLayer(e,t){const n=this._layers(),s=n.find(d=>d.id===e);if(!s)return console.warn(`Layer with id ${e} not found`),{layer:null,elementMap:new Map};const r=Math.max(...n.map(d=>d.zIndex),0)+1,a={id:this.generateLayerId(),name:`${s.name} Copy`,visible:!0,locked:s.locked,zIndex:r,elements:[],opacity:s.opacity,blendMode:s.blendMode},l=new Map;return t.filter(d=>s.elements.includes(d.id)).forEach(d=>{const g=crypto.randomUUID();l.set(d.id,g),a.elements.push(g)}),this._layers.set([...n,a]),this.setActiveLayer(a.id),{layer:a,elementMap:l}}renameLayer(e,t){const n=this._layers(),s=n.findIndex(a=>a.id===e);if(s===-1)return console.warn(`Layer with id ${e} not found`),!1;if(n[s].locked)return console.warn(`Cannot rename locked layer: ${n[s].name}`),!1;const r=[...n];return r[s]={...r[s],name:t.trim()||`Layer ${s+1}`},this._layers.set(r),!0}reorderLayer(e,t){const n=this._layers(),s=n.findIndex(a=>a.id===e);if(s===-1)return console.warn(`Layer with id ${e} not found`),!1;if(n[s].locked)return console.warn(`Cannot reorder locked layer: ${n[s].name}`),!1;const r=[...n];return r[s]={...r[s],zIndex:t},this._layers.set(r),!0}moveLayerUp(e){const t=this.sortedLayers(),n=t.findIndex(a=>a.id===e);if(n===-1||n===t.length-1)return!1;const s=t[n];if(s.locked)return console.warn(`Cannot move locked layer: ${s.name}`),!1;const r=t[n+1];return this.reorderLayer(s.id,r.zIndex)&&this.reorderLayer(r.id,s.zIndex)}moveLayerDown(e){const t=this.sortedLayers(),n=t.findIndex(a=>a.id===e);if(n===-1||n===0)return!1;const s=t[n];if(s.locked)return console.warn(`Cannot move locked layer: ${s.name}`),!1;const r=t[n-1];return this.reorderLayer(s.id,r.zIndex)&&this.reorderLayer(r.id,s.zIndex)}reorderLayersByIndex(e,t){const n=this._layers();if(e===t)return!1;if(e<0||e>=n.length||t<0||t>=n.length)return console.warn("Invalid layer indices for reordering"),!1;const s=n[e];if(s.locked)return console.warn(`Cannot reorder locked layer: ${s.name}`),!1;const r=[...n];r.splice(e,1),r.splice(t,0,s);const a=r.map((l,c)=>({...l,zIndex:r.length-1-c}));return this._layers.set(a),!0}toggleLayerVisibility(e){return this.updateLayerProperty(e,"visible",t=>!t)}toggleLayerLock(e){return this._layers().find(s=>s.id===e)?this.updateLayerProperty(e,"locked",s=>!s):(console.warn(`Layer with id ${e} not found`),!1)}setLayerOpacity(e,t){const s=this._layers().find(a=>a.id===e);if(!s)return console.warn(`Layer with id ${e} not found`),!1;if(s.locked)return console.warn(`Cannot change opacity of locked layer: ${s.name}`),!1;const r=Math.max(0,Math.min(1,t));return this.updateLayerProperty(e,"opacity",()=>r)}setLayerBlendMode(e,t){const s=this._layers().find(a=>a.id===e);return s?s.locked?(console.warn(`Cannot change blend mode of locked layer: ${s.name}`),!1):rt.map(a=>a.value).includes(t)?this.updateLayerProperty(e,"blendMode",()=>t):(console.warn(`Invalid blend mode: ${t}. Using 'normal' instead.`),this.updateLayerProperty(e,"blendMode",()=>"normal")):(console.warn(`Layer with id ${e} not found`),!1)}setActiveLayer(e){const t=this._layers();if(!t.find(r=>r.id===e))return console.warn(`Layer with id ${e} not found`),!1;const s=t.map(r=>({...r,visible:r.id===e}));return this._layers.set(s),this._activeLayerId.set(e),!0}getActiveLayerId(){return this._activeLayerId()}isActiveLayerValid(){const e=this.activeLayer();return!!e&&e.visible&&!e.locked}getActiveLayerIssues(){const e=this.activeLayer();if(!e)return["No active layer"];const t=[];return e.visible||t.push("Active layer is hidden"),e.locked&&t.push("Active layer is locked"),t}assignElementToActiveLayer(e){const t=this._activeLayerId();return this.assignElementToLayer(e,t)}assignElementToLayer(e,t){const n=this._layers(),s=n.findIndex(d=>d.id===t);if(s===-1)return console.warn(`Layer with id ${t} not found`),!1;if(n[s].locked)return console.warn(`Cannot assign elements to locked layer: ${n[s].name}`),!1;this.removeElementFromAllLayers(e);const r=this._layers(),a=r.findIndex(d=>d.id===t),l=[...r],c=[...l[a].elements];return c.includes(e)||(c.push(e),l[a]={...l[a],elements:c},this._layers.set(l)),!0}removeElementFromAllLayers(e){const n=this._layers().map(s=>({...s,elements:s.elements.filter(r=>r!==e)}));this._layers.set(n)}getElementLayer(e){return this._layers().find(n=>n.elements.includes(e))||null}getVisibleElements(e){const t=this.visibleLayers(),n=new Set(t.flatMap(s=>s.elements));return e.filter(s=>n.has(s.id))}getEditableElements(e){const t=this.unlockedLayers(),n=new Set(t.flatMap(s=>s.elements));return e.filter(s=>n.has(s.id))}getSortedElements(e){const t=this.sortedLayers(),n=new Map;return t.forEach(s=>{s.elements.forEach(r=>{n.set(r,s.zIndex)})}),e.sort((s,r)=>{const a=n.get(s.id)??0,l=n.get(r.id)??0;return a-l})}exportLayerState(){return{layers:this._layers(),activeLayerId:this._activeLayerId()}}importLayerState(e){if(!e.layers||e.layers.length===0){console.warn("Invalid layer state provided"),this.initializeDefaultLayer();return}this._layers.set(e.layers);const t=e.layers.find(n=>n.id===e.activeLayerId);this._activeLayerId.set(t?e.activeLayerId:e.layers[0].id)}reset(){this.initializeDefaultLayer()}initializeDefaultLayer(){const e={id:"default",name:"Layer 1",visible:!0,locked:!1,zIndex:0,elements:[],opacity:1,blendMode:"normal"};this._layers.set([e]),this._activeLayerId.set(e.id)}generateLayerId(){return`layer-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}updateLayerProperty(e,t,n){const s=this._layers(),r=s.findIndex(c=>c.id===e);if(r===-1)return console.warn(`Layer with id ${e} not found`),!1;const a=[...s],l=a[r][t];return a[r]={...a[r],[t]:n(l)},this._layers.set(a),!0}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Ft=(()=>{class i{eventBus;historyService=T(Xi);layerManagement=T(Nn);_elements=D([]);_draftElements=D([]);_maxZIndex=D(0);_locks=D(new Map);constructor(e){this.eventBus=e}elements=this._elements.asReadonly();draftElements=this._draftElements.asReadonly();allElements=I(()=>[...this._elements(),...this._draftElements()]);elementsCount=I(()=>this._elements().length);hasElements=I(()=>this.elementsCount()>0);elementTypes=I(()=>{const e=this._elements().map(t=>t.type);return[...new Set(e)]});elementsByType=I(()=>{const e=this._elements(),t=new Map;return e.forEach(n=>{const s=n.type;t.has(s)||t.set(s,[]);const r=t.get(s);r&&r.push(n)}),t});maxZIndex=I(()=>this._maxZIndex());elementsByZIndex=I(()=>[...this._elements()].sort((e,t)=>(e.zIndex||0)-(t.zIndex||0)));lockedElements=I(()=>this._elements().filter(e=>e.locked===!0));unlockedElements=I(()=>this._elements().filter(e=>e.locked!==!0));lockedElementsCount=I(()=>this.lockedElements().length);hasLockedElements=I(()=>this.lockedElementsCount()>0);lockStats=I(()=>{const e=this.elementsCount(),t=this.lockedElementsCount(),n=e-t,s=e>0?Math.round(t/e*100):0;return{total:e,locked:t,unlocked:n,lockPercentage:s,allLocked:e>0&&t===e,noneLocked:t===0}});locks=this._locks.asReadonly();getElements(){return[...this._elements()]}getDraftElements(){return[...this._draftElements()]}getAllElements(){return this.allElements()}addElements(e){if(!e?.length)return;const t=this.layerManagement.getActiveLayerId(),n=e.map(a=>({...a,zIndex:a.zIndex??this.getNextZIndex(),layerId:a.layerId??t}));this.updateMaxZIndex(n);const s=this._elements(),r=[...s,...n];this._elements.set(r),n.forEach(a=>{a.layerId&&this.layerManagement.assignElementToLayer(a.id,a.layerId)}),this.historyService.recordElementCreation(s,r),this.eventBus.emit(O.ElementsAdded,n),this.eventBus.emit(O.DataChange,r)}updateElements(e,t=!1){if(!e?.length)return;const n=this._elements(),s=new Map(e.map(l=>[l.id,l])),r=[],a=n.map(l=>{const c=s.get(l.id);if(!c)return l;if(!t&&l.locked&&!this.isLockOperation(c))return console.warn(`Attempted to modify locked element: ${l.id}`),l;if(!t&&l.layerId){const g=this.layerManagement.getElementLayer(l.id);if(g?.locked)return console.warn(`Attempted to modify element on locked layer: ${g.name}`),l}const d={...l,...c};return d.zIndex!=null&&this._maxZIndex.update(g=>Math.max(g,d.zIndex)),r.push(d),d});this._elements.set(a),r.length>0&&this.historyService.recordElementUpdate(n,a),r.length>0&&(this.eventBus.emit(O.ElementsUpdated,r),this.eventBus.emit(O.DataChange,a))}removeElementsByIds(e,t=!1){if(!e?.length)return;const n=new Set(e),s=this._elements(),r=s.filter(c=>{if(!n.has(c.id))return!1;if(!t&&c.locked)return console.warn(`Attempted to remove locked element: ${c.id}`),!1;if(!t&&c.layerId){const d=this.layerManagement.getElementLayer(c.id);if(d?.locked)return console.warn(`Attempted to remove element from locked layer: ${d.name}`),!1}return!0});if(r.length===0)return;const a=new Set(r.map(c=>c.id)),l=s.filter(c=>!a.has(c.id));this._elements.set(l),r.forEach(c=>{this.layerManagement.removeElementFromAllLayers(c.id)}),this.historyService.recordElementDeletion(s,l),this.eventBus.emit(O.ElementsRemoved,r),this.eventBus.emit(O.DataChange,l)}removeElements(e,t=!1){const n=e.map(s=>s.id);this.removeElementsByIds(n,t)}clear(){const e=this._elements();this._elements.set([]),this._maxZIndex.set(0),e.forEach(t=>{this.layerManagement.removeElementFromAllLayers(t.id)}),this.historyService.recordClear(e,[]),this.eventBus.emit(O.DataChange,[])}setElements(e){const t=e.map(n=>({...n,zIndex:n.zIndex??this.getNextZIndex()}));this.updateMaxZIndex(t),this._elements.set([...t]),this.eventBus.emit(O.DataChange,t)}addDraftElements(e){if(!e?.length)return;const t=this.layerManagement.activeLayer();if(t?.locked){console.warn(`Cannot draw on locked layer: ${t.name}`);return}const n=e.map(a=>({...a,zIndex:a.zIndex??this.getNextZIndex()}));this.updateMaxZIndex(n);const r=[...this._draftElements(),...n];this._draftElements.set(r)}updateDraftElements(e){if(!e?.length)return;const t=this._draftElements(),n=new Map(e.map(r=>[r.id,r])),s=t.map(r=>{const a=n.get(r.id);return a?{...r,...a}:r});this._draftElements.set(s)}removeDraftElements(e){if(!e?.length)return;const t=new Set(e),s=this._draftElements().filter(r=>!t.has(r.id));this._draftElements.set(s)}clearDraftElements(){this._draftElements.set([])}commitDraftElements(e){const t=this._draftElements(),n=e?t.filter(a=>e.includes(a.id)):t;if(n.length===0)return[];const s=this.layerManagement.activeLayer();if(s?.locked)return console.warn(`Cannot commit elements to locked layer: ${s.name}`),this._draftElements.set([]),[];this.addElements(n);const r=e?t.filter(a=>!e.includes(a.id)):[];return this._draftElements.set(r),n}getNextZIndex(){return this._maxZIndex.update(e=>e+1),this._maxZIndex()}bringToFront(e,t=!1){if(!e?.length)return;const n=this.getNextZIndex(),s=e.map(r=>({id:r,zIndex:n}));this.updateElements(s,t)}sendToBack(e,t=!1){if(!e?.length)return;const n=e.map(s=>({id:s,zIndex:0}));this.updateElements(n,t)}lockElements(e){if(!e?.length)return;const t={timestamp:Date.now(),reason:"User locked"},n=this._locks(),s=new Map(n),r=e.map(a=>(s.set(a,t),{id:a,locked:!0}));this._locks.set(s),this.updateElements(r,!0)}unlockElements(e){if(!e?.length)return;const t=this._locks(),n=new Map(t),s=e.map(r=>(n.delete(r),{id:r,locked:!1}));this._locks.set(n),this.updateElements(s,!0)}toggleElementsLock(e){if(!e?.length)return;const t=[],n=[];e.forEach(s=>{const r=this.getElementById(s);r&&(r.locked?n.push(s):t.push(s))}),t.length>0&&this.lockElements(t),n.length>0&&this.unlockElements(n)}lockAllElements(){const e=this._elements().map(t=>t.id);this.lockElements(e)}unlockAllElements(){const e=this._elements().map(t=>t.id);this.unlockElements(e)}isElementLocked(e){return!!this.getElementById(e)?.locked}getLockedElementIds(){return this.lockedElements().map(e=>e.id)}getUnlockedElementIds(){return this.unlockedElements().map(e=>e.id)}moveToLayer(e,t,n=!1){if(!e?.length)return;const s=e.map(r=>({id:r,layerId:t}));this.updateElements(s,n)}getElementsByLayer(e){return this._elements().filter(t=>t.layerId===e)}getElementById(e){const t=this._elements().find(n=>n.id===e);return t||this._draftElements().find(n=>n.id===e)}getElementsByIds(e){const t=new Set(e);return this.allElements().filter(s=>t.has(s.id))}getElementsByType(e){return this._elements().filter(t=>t.type===e)}searchElements(e){let t=this._elements();if(e.type&&(t=t.filter(n=>n.type===e.type)),e.layerId&&(t=t.filter(n=>n.layerId===e.layerId)),e.locked!==void 0&&(t=t.filter(n=>!!n.locked===e.locked)),e.textContent){const n=e.textContent.toLowerCase();t=t.filter(s=>{const r=s;return(r.text||r.content||"").toLowerCase().includes(n)})}if(e.zIndexRange){const{min:n,max:s}=e.zIndexRange;t=t.filter(r=>{const a=r.zIndex||0;return a>=n&&a<=s})}return e.bounds&&(t=this.findElementsInBounds(e.bounds).filter(n=>t.some(s=>s.id===n.id))),t}findElementsByText(e){return this.searchElements({textContent:e})}getElementsInRadius(e,t,n){return this._elements().filter(s=>{const r=s.x-e,a=s.y-t;return Math.sqrt(r*r+a*a)<=n})}getNearestElement(e,t){const n=this._elements();if(n.length===0)return;let s=n[0],r=this.getDistanceToElement(e,t,s);for(let a=1;a<n.length;a++){const l=this.getDistanceToElement(e,t,n[a]);l<r&&(r=l,s=n[a])}return s}createSnapshot(){return{elements:[...this._elements()],draftElements:[...this._draftElements()],maxZIndex:this._maxZIndex(),timestamp:Date.now()}}restoreSnapshot(e){this._elements.set([...e.elements]),this._draftElements.set([...e.draftElements]),this._maxZIndex.set(e.maxZIndex)}findElementsInBounds(e){return this._elements().filter(t=>{const n=t.width||50,s=t.height||50;return t.x<e.x+e.width&&t.x+n>e.x&&t.y<e.y+e.height&&t.y+s>e.y})}calculateElementsBounds(e){if(e.length===0)return null;const t=e.map(ut),n=Math.min(...t.map(d=>d.minX)),s=Math.min(...t.map(d=>d.minY)),r=Math.max(...t.map(d=>d.maxX)),a=Math.max(...t.map(d=>d.maxY)),l=r-n,c=a-s;return{x:n,y:s,width:l,height:c,centerX:n+l/2,centerY:s+c/2}}getElementsCount(){return this.elementsCount()}getElementTypes(){return this.elementTypes()}normalizeZIndices(){const e=[...this._elements()].sort((n,s)=>(n.zIndex||0)-(s.zIndex||0)),t=e.map((n,s)=>({id:n.id,zIndex:s+1}));this._maxZIndex.set(e.length),this.updateElements(t,!0)}addElement(e){this.addElements([e])}updateElement(e,t=!1){this.updateElements([e],t)}removeElement(e,t=!1){this.removeElementsByIds([e.id],t)}elementExists(e){return this.getElementById(e)!==void 0}getElementsByZIndexRange(e,t){return this._elements().filter(n=>{const s=n.zIndex||0;return s>=e&&s<=t})}getElementsByProperty(e,t){return this._elements().filter(n=>n[e]===t)}lockElement(e){this.lockElements([e])}unlockElement(e){this.unlockElements([e])}toggleElementLock(e){this.toggleElementsLock([e])}getModifiableElements(){return this.unlockedElements()}hasLockedElementsInSelection(e){return e.some(t=>this.isElementLocked(t))}filterUnlockedElements(e){return e.filter(t=>!this.isElementLocked(t))}getModifiableElementsFromIds(e){const t=this.filterUnlockedElements(e);return this.getElementsByIds(t)}safeUpdateElements(e){const t=[],n=[],s=e.filter(r=>this.isElementLocked(r.id)?(t.push(r.id),!1):(n.push(r.id),!0));return s.length>0&&this.updateElements(s,!1),{updated:n,locked:t}}isLockOperation(e){return"locked"in e}updateMaxZIndex(e){const t=Math.max(...e.map(n=>n.zIndex||0));this._maxZIndex.update(n=>Math.max(n,t))}getDistanceToElement(e,t,n){const s=n.width||50,r=n.height||50,a=n.x+s/2,l=n.y+r/2,c=e-a,d=t-l;return Math.sqrt(c*c+d*d)}static ɵfac=function(t){return new(t||i)(V(Ee))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Ji=(()=>{class i{configService;eventBusService;DEFAULT_PAN_BOUNDS={x:-1/0,y:-1/0,width:1/0,height:1/0};panBounds=this.DEFAULT_PAN_BOUNDS;constructor(e,t){this.configService=e,this.eventBusService=t}getConfig(){return this.configService.getConfig()}pan(e,t){const n=this.getConfig(),{x:s,y:r}=n,a=s+e,l=r+t,c=this.constrainPanPosition(a,l);this.setCanvasPosition(c.x,c.y)}panTo(e,t){const n=this.constrainPanPosition(e,t);this.setCanvasPosition(n.x,n.y)}setCanvasPosition(e,t){this.configService.updateConfig({x:e,y:t})}getPanPosition(){const e=this.getConfig();return{x:e.x,y:e.y}}resetPan(){this.setCanvasPosition(0,0)}setPanBounds(e){this.panBounds=e}resetPanBounds(){this.panBounds=this.DEFAULT_PAN_BOUNDS}getPanBounds(){return{...this.panBounds}}constrainPanPosition(e,t){if(this.panBounds===this.DEFAULT_PAN_BOUNDS)return{x:e,y:t};const n=Math.max(this.panBounds.x,Math.min(this.panBounds.x+this.panBounds.width,e)),s=Math.max(this.panBounds.y,Math.min(this.panBounds.y+this.panBounds.height,t));return{x:n,y:s}}isPositionWithinBounds(e,t){return this.panBounds===this.DEFAULT_PAN_BOUNDS?!0:e>=this.panBounds.x&&e<=this.panBounds.x+this.panBounds.width&&t>=this.panBounds.y&&t<=this.panBounds.y+this.panBounds.height}getDistanceToBounds(){const{x:e,y:t}=this.getPanPosition();return this.panBounds===this.DEFAULT_PAN_BOUNDS?{left:1/0,top:1/0,right:1/0,bottom:1/0}:{left:e-this.panBounds.x,top:t-this.panBounds.y,right:this.panBounds.x+this.panBounds.width-e,bottom:this.panBounds.y+this.panBounds.height-t}}panWithEasing(e,t){this.panTo(e,t)}panWithMomentum(e,t){this.pan(e,t)}validatePanOperation(e,t,n,s){return this.isPositionWithinBounds(e+n,t+s)}applyPanAcceleration(e,t){return{dx:e,dy:t}}onPanChange(e,t){}static ɵfac=function(t){return new(t||i)(V(De),V(Ee))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),qi=(()=>{class i{elementsService;CLIPBOARD_KEY="whiteboard-clipboard";OFFSET_INCREMENT=20;constructor(e){this.elementsService=e}copy(e){if(e.length===0)return;const t={elements:e,timestamp:Date.now()};try{localStorage.setItem(this.CLIPBOARD_KEY,JSON.stringify(t))}catch(n){console.error("Failed to copy elements to clipboard:",n)}}cut(e){this.copy(e)}paste(){const e=this.getData();if(!e?.elements.length)return[];const t=this.duplicateElementsWithOffset(e.elements,this.OFFSET_INCREMENT,this.OFFSET_INCREMENT);return this.elementsService.addElements(t),t}clear(){try{localStorage.removeItem(this.CLIPBOARD_KEY)}catch(e){console.error("Failed to clear clipboard:",e)}}hasData(){const e=this.getData();return e!==null&&e.elements.length>0}getData(){try{const e=localStorage.getItem(this.CLIPBOARD_KEY);return e?JSON.parse(e):null}catch(e){return console.error("Failed to read clipboard data:",e),null}}duplicateElements(e,t=this.OFFSET_INCREMENT,n=this.OFFSET_INCREMENT){if(e.length===0)return[];const s=this.duplicateElementsWithOffset(e,t,n);return this.elementsService.addElements(s),s}createDuplicates(e,t=this.OFFSET_INCREMENT,n=this.OFFSET_INCREMENT){return this.duplicateElementsWithOffset(e,t,n)}getClipboardInfo(){const e=this.getData();return e?{elementCount:e.elements.length,timestamp:e.timestamp}:null}isDataFresh(e=300*1e3){const t=this.getData();return t?Date.now()-t.timestamp<=e:!1}getClipboardElementTypes(){const e=this.getData();if(!e)return[];const t=e.elements.map(n=>n.type);return[...new Set(t)]}duplicateElementsWithOffset(e,t,n){return e.map(s=>({...s,id:`${s.id}_copy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,x:s.x+t,y:s.y+n}))}static ɵfac=function(t){return new(t||i)(V(Ft))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})();class Ye{apiService;active=!1;baseCursor=pe.Default;constructor(o){this.apiService=o}get whiteboardConfig(){return this.apiService?.getConfig()}getPointerPosition({x:o,y:e}){return Pi(this.apiService.getConfig(),{x:o,y:e})}activate(){this.active=!0,this.onActivate?.()}deactivate(){this.active=!1,this.onDeactivate?.()}setCursor(o){this.apiService.setCursor(o)}resetCursor(){this.apiService.resetCursor()}get isActive(){return this.active}}class ld extends Ye{type=x.Arrow;baseCursor=pe.Crosshair;element=null;startPoint=null;lastX=0;lastY=0;MIN_LENGTH=2;handlePointerDown(o){if(!this.active)return;const e=this.getPointerPosition(o);let{x:t,y:n}=e;const{snapToGrid:s}=this.whiteboardConfig;if(s){const{gridSize:r}=this.whiteboardConfig;t=ie(t,r),n=ie(n,r)}this.startPoint={x:t,y:n},this.lastX=t,this.lastY=n,this.element=Ke(G.Arrow,{x1:t,y1:n,x2:t,y2:n,style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId()),this.apiService.addDraftElements([this.element])}handlePointerMove(o){if(!this.active||!this.element)return;const e=this.getPointerPosition(o);let t=e.x,n=e.y;const{snapToGrid:s}=this.whiteboardConfig;if(s){const{gridSize:r}=this.whiteboardConfig;t=ie(t,r),n=ie(n,r)}if(o.shiftKey){const r=this.element.x1,a=this.element.y1,{x:l,y:c}=tr(r,a,t,n);t=l,n=c}(Math.abs(t-this.lastX)>this.MIN_LENGTH||Math.abs(n-this.lastY)>this.MIN_LENGTH)&&(this.apiService.updateDraftElements([{id:this.element.id,x2:t,y2:n}]),this.lastX=t,this.lastY=n)}handlePointerUp(){if(this.active){if(this.element&&this.startPoint){const o=this.element;this.apiService.commitDraftElements(),o.selectAfterDraw&&this.apiService.selectElements([o.id]),this.startPoint=null,this.element=null}this.lastX=0,this.lastY=0}}getElementStyle(){return{strokeColor:this.whiteboardConfig.strokeColor,strokeWidth:this.whiteboardConfig.strokeWidth,lineCap:this.whiteboardConfig.lineCap,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset}}}class cd extends Ye{type=x.Ellipse;baseCursor=pe.Crosshair;element=null;startPoint=null;handlePointerDown(o){if(!this.active)return;let{x:e,y:t}=this.getPointerPosition(o);const{snapToGrid:n}=this.whiteboardConfig;if(n){const{gridSize:s}=this.whiteboardConfig;e=ie(e,s),t=ie(t,s)}this.startPoint={x:e,y:t},this.element=Ke(G.Ellipse,{cx:e,cy:t,style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId()),this.apiService.addDraftElements([this.element])}handlePointerMove(o){if(!this.active||!this.element||!this.startPoint)return;const{x:e,y:t}=this.getPointerPosition(o),{x:n,y:s}=this.startPoint;let r,a,l,c;o.altKey?(r=n,a=s,l=Math.abs(e-r),c=o.shiftKey?l:Math.abs(t-a)):(r=(n+e)/2,a=(s+t)/2,l=Math.abs(n-e)/2,c=o.shiftKey?l:Math.abs(s-t)/2,o.shiftKey&&(a=t>s?s+l:s-l)),this.apiService.updateDraftElements([{id:this.element.id,rx:l,ry:c,cx:r,cy:a}])}handlePointerUp(){if(this.active&&this.element&&this.startPoint){const o=this.element;this.apiService.commitDraftElements(),o.selectAfterDraw&&this.apiService.selectElements([o.id]),this.startPoint=null,this.element=null}}getElementStyle(){return{strokeColor:this.whiteboardConfig.strokeColor,strokeWidth:this.whiteboardConfig.strokeWidth,fill:this.whiteboardConfig.fill,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset}}}class dd extends Ye{type=x.Eraser;baseCursor=pe.Eraser;isErasing=!1;hoveredElementIds=new Set;lastPosition=null;handlePointerDown(o){if(!this.active)return;this.hoveredElementIds.clear();const e=this.getPointerPosition(o);this.isErasing=!0,this.eraseElementsAt(e,e),this.lastPosition=e}handlePointerMove(o){if(!this.active||!this.isErasing||!this.lastPosition)return;const e=this.getPointerPosition(o);this.eraseElementsAt(this.lastPosition,e,o.altKey),this.lastPosition=e}handlePointerUp(){if(this.active){if(this.hoveredElementIds.size>0){const o=Array.from(this.hoveredElementIds),e=this.expandToIncludeGroups(o),t=this.apiService.getElements().filter(n=>e.includes(n.id));t.forEach(n=>{n.isDeleting=!1}),this.apiService.updateElements(t),this.apiService.removeElements(t)}this.hoveredElementIds.clear(),this.isErasing=!1,this.lastPosition=null}}eraseElementsAt(o,e,t=!1){const n=this.apiService.getElements(),s=this.apiService.getConfig()?.zoom||1,r=Math.hypot(e.x-o.x,e.y-o.y),a=10/s,l=Math.log2(r+1)*.5,c=a+r*l;for(const d of n){const g=Pt(d.type).getBounds(d);if(td(g,o,e,c)&&this.isPointInElement(d,o,e,c)){t&&this.expandToIncludeGroups([d.id]).forEach(S=>{this.hoveredElementIds.delete(S);const A=n.find(m=>m.id===S);A&&(A.isDeleting=!1)}),!t&&!this.hoveredElementIds.has(d.id)&&this.expandToIncludeGroups([d.id]).forEach(S=>{this.hoveredElementIds.add(S);const A=n.find(m=>m.id===S);A&&(A.isDeleting=!0)});const M=this.expandToIncludeGroups([d.id]),p=n.filter(b=>M.includes(b.id));this.apiService.updateElements(p)}}}isPointInElement(o,e,t,n){return Pt(o.type).hitTest(o,e,t,n)}expandToIncludeGroups(o){const e=this.apiService.getElements(),t=e.filter(r=>o.includes(r.id)),n=new Set(t.map(r=>r.groupId).filter(r=>r!=null));return n.size===0?o:e.filter(r=>o.includes(r.id)||r.groupId&&n.has(r.groupId)).map(r=>r.id)}}class ud extends Ye{type=x.Hand;baseCursor=pe.Grab;isDragging=!1;startX=0;startY=0;handlePointerDown(o){this.isDragging=!0,this.startX=o.clientX,this.startY=o.clientY,this.setCursor(pe.Grabbing)}handlePointerMove(o){if(!this.isDragging)return;const{zoom:e}=this.whiteboardConfig,t=(o.clientX-this.startX)/e,n=(o.clientY-this.startY)/e;this.apiService.pan(t,n),this.startX=o.clientX,this.startY=o.clientY}handlePointerUp(){this.isDragging=!1,this.resetCursor()}}class hd extends Ye{type=x.Image;baseCursor=pe.Image;handlePointerDown(o){const{x:e,y:t}=this.getPointerPosition(o),n=document.createElement("input");n.type="file",n.accept="image/*",n.onchange=s=>{const r=s.target.files;if(r){const a=new FileReader;a.onload=l=>{const c=l.target.result;this.apiService.addImage({image:c,x:e,y:t})},a.readAsDataURL(r[0])}},n.click()}}class gd extends Ye{type=x.Line;baseCursor=pe.Crosshair;element=null;startPoint=null;lastX=0;lastY=0;MIN_LENGTH=2;handlePointerDown(o){if(!this.active)return;let{x:e,y:t}=this.getPointerPosition(o);const{snapToGrid:n}=this.whiteboardConfig;if(n){const{gridSize:s}=this.whiteboardConfig;e=ie(e,s),t=ie(t,s)}this.startPoint={x:e,y:t},this.lastX=e,this.lastY=t,this.element=Ke(G.Line,{x1:e,y1:t,x2:e,y2:t,style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId()),this.apiService.addDraftElements([this.element])}handlePointerMove(o){if(!this.active||!this.element)return;const e=this.getPointerPosition(o);let t=e.x,n=e.y;const{snapToGrid:s}=this.whiteboardConfig;if(s){const{gridSize:r}=this.whiteboardConfig;t=ie(t,r),n=ie(n,r)}if(o.shiftKey){const r=this.element.x1,a=this.element.y1,{x:l,y:c}=tr(r,a,t,n);[t,n]=[l,c]}(Math.abs(t-this.lastX)>this.MIN_LENGTH||Math.abs(n-this.lastY)>this.MIN_LENGTH)&&(this.apiService.updateDraftElements([{id:this.element.id,x2:t,y2:n}]),this.lastX=t,this.lastY=n)}handlePointerUp(){if(this.active){if(this.element&&this.startPoint){const o=this.element;this.apiService.commitDraftElements(),o.selectAfterDraw&&this.apiService.selectElements([o.id]),this.startPoint=null,this.element=null}this.lastX=0,this.lastY=0}}getElementStyle(){return{strokeColor:this.whiteboardConfig.strokeColor,strokeWidth:this.whiteboardConfig.strokeWidth,lineCap:this.whiteboardConfig.lineCap,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset}}}class pd extends Ye{type=x.Pen;baseCursor=pe.Crosshair;element=null;constructor(o){super(o)}getCurrentPathOptions(){const o=this.whiteboardConfig.penType,t=ts(o,z.Medium).strokeOptions;return{smoothing:t.smoothing||.5,streamline:t.streamline||.5,thinning:t.thinning||.5,simulatePressure:t.simulatePressure!==void 0?t.simulatePressure:!0,size:t.size||16,easing:t.easing||(n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2),start:t.start||{cap:!0,taper:.3},end:t.end||{cap:!0,taper:.4}}}handlePointerDown(o){if(!this.active)return;const e=this.getPointerPosition(o),t=this.getCurrentPathOptions(),n=[[e.x,e.y]];this.element=Ke(G.Pen,{points:n,pathOptions:t,isComplete:!1,style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId()),this.apiService.addDraftElements([this.element])}handlePointerMove(o){if(!this.active||!this.element)return;const{x:e,y:t}=this.getPointerPosition(o),n=[...this.element.points,[e,t]];this.element.points=n,this.apiService.updateDraftElements([{id:this.element.id,points:n}])}handlePointerUp(){if(this.active&&this.element){const o=this.element;this.apiService.updateDraftElements([{id:o.id,isComplete:!0}]),this.apiService.commitDraftElements(),o.selectAfterDraw&&this.apiService.selectElements([o.id]),this.element=null}}getElementStyle(){const o=this.whiteboardConfig.penType,e=ts(o,z.Medium);return{strokeColor:this.whiteboardConfig.strokeColor,strokeWidth:this.whiteboardConfig.strokeWidth,lineCap:this.whiteboardConfig.lineCap,lineJoin:this.whiteboardConfig.lineJoin,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset,opacity:e.opacity}}}class fd extends Ye{type=x.Rectangle;baseCursor=pe.Crosshair;element=null;startPoint=null;handlePointerDown(o){if(!this.active)return;let{x:e,y:t}=this.getPointerPosition(o);const{snapToGrid:n}=this.whiteboardConfig;if(n){const{gridSize:s}=this.whiteboardConfig;e=ie(e,s),t=ie(t,s)}this.startPoint={x:e,y:t},this.element=Ke(G.Rectangle,{x:e,y:t,style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId()),this.apiService.addDraftElements([this.element])}handlePointerMove(o){if(!this.active||!this.element||!this.startPoint)return;const{x:e,y:t}=this.getPointerPosition(o),n=this.startPoint.x,s=this.startPoint.y;let r=Math.abs(e-n),a=Math.abs(t-s),l=null,c=null;o.shiftKey?(r=a=Math.max(r,a),l=n<e?n:n-r,c=s<t?s:s-a):(l=Math.min(n,e),c=Math.min(s,t)),o.altKey&&(r*=2,a*=2,l=n-r/2,c=s-a/2);const{snapToGrid:d}=this.whiteboardConfig;if(d){const{gridSize:g}=this.whiteboardConfig;r=ie(r,g),a=ie(a,g),l=ie(l,g),c=ie(c,g)}this.apiService.updateDraftElements([{id:this.element.id,width:r,height:a,x:l,y:c}])}handlePointerUp(){if(this.active&&this.element&&this.startPoint){const o=this.element;this.apiService.commitDraftElements(),o.selectAfterDraw&&this.apiService.selectElements([o.id]),this.startPoint=null,this.element=null}}getElementStyle(){return{strokeColor:this.whiteboardConfig.strokeColor,strokeWidth:this.whiteboardConfig.strokeWidth,lineJoin:this.whiteboardConfig.lineJoin,fill:this.whiteboardConfig.fill,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset}}}var me=(function(i){return i[i.None=0]="None",i[i.Select=1]="Select",i[i.Move=2]="Move",i[i.Resize=3]="Resize",i[i.Rotate=4]="Rotate",i[i.BoxSelect=5]="BoxSelect",i})(me||{});class md extends Ye{type=x.Select;baseCursor=pe.Default;currentAction=me.None;startPoint=null;currentHandle=null;rotateStartAngle=null;selectionCenter=null;initialBoundingBox=null;initialElementRotations=new Map;initialElementStates=new Map;rafId=null;pendingPointerEvent=null;getCurrentAction(){return this.currentAction}getStartPoint(){return this.startPoint}getCurrentHandle(){return this.currentHandle}onDeactivate(){this.apiService.clearSelection()}handlePointerDown(o){const e=er(o),t=e?.id??"";if(this.startPoint=this.getPointerPosition(o),t.includes(js)){const n=e?.getAttribute(Gs)??null;this.handleElementSelect(n,o.shiftKey),this.currentAction=me.Move}else t.includes(Bc)?(this.currentHandle=this.getResizeDirection(t),this.initializeResize(),this.currentAction=me.Resize):t.includes(zc)?(this.initializeRotation(o),this.currentAction=me.Rotate):t.includes($s)?this.currentAction=me.Move:(this.initializeBoxSelect(o),this.currentAction=me.BoxSelect)}handlePointerMove(o){this.pendingPointerEvent=o,this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{if(this.rafId=null,!this.pendingPointerEvent||!this.startPoint)return;const e=this.pendingPointerEvent,t=this.getPointerPosition(e);switch(this.currentAction){case me.Move:this.handleMove(t,e.shiftKey);break;case me.Resize:this.handleResize(t,e.shiftKey);break;case me.Rotate:this.handleRotate(t,e.ctrlKey);break;case me.BoxSelect:this.handleBoxSelect(t,e.shiftKey);break}}))}handlePointerUp(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.pendingPointerEvent=null,this.currentAction===me.BoxSelect&&this.apiService.clearSelectionBox(),this.currentAction===me.Rotate&&(this.initialElementRotations.clear(),this.apiService.updateBoundingBox()),this.initialElementStates.clear(),this.currentAction=me.None,this.startPoint=null,this.currentHandle=null,this.rotateStartAngle=null,this.selectionCenter=null,this.initialBoundingBox=null}handleElementSelect(o,e){if(!o)return;const t=this.apiService.getElementById(o);t&&(t.locked||(e?this.apiService.toggleSelection(t):this.apiService.selectElements([t])))}handleMove(o,e){if(!this.startPoint)return;const t=o.x-this.startPoint.x,n=o.y-this.startPoint.y;let s=t,r=n;if(e){const a=as(t,n);s=a.x,r=a.y}this.apiService.transformSelectedElements(a=>a.map(l=>l.locked?l:{...l,x:l.x+s,y:l.y+r})),this.startPoint=o}handleResize(o,e){if(!this.startPoint||this.currentHandle===null||!this.initialBoundingBox)return;const t=this.currentHandle,n=this.apiService.getSelectedElements();if(!n.length)return;if(n.length===1){const A=n[0];if(!this.initialElementStates.get(A.id))return;const P=o.x-this.startPoint.x,W=o.y-this.startPoint.y;let K=P,ue=W;if(A.rotation&&A.rotation!==0){const je=-A.rotation*Math.PI/180,be=Math.cos(je),ae=Math.sin(je);K=P*be-W*ae,ue=P*ae+W*be}let ot=K,Je=ue;if(e){const je=as(K,ue);ot=je.x,Je=je.y}this.apiService.transformSelectedElements(je=>je.map(be=>{if(be.locked)return be;const ae=this.initialElementStates.get(be.id);if(!ae)return be;let qt=null;if(ae.rotation&&ae.rotation!==0){const $e=ae,Lt=$e.width||$e.rx*2||0,Bt=$e.height||$e.ry*2||0;let ke=0,Ae=0;t.includes(F.N)?Ae=Bt:t.includes(F.S)?Ae=0:Ae=Bt/2,t.includes(F.W)?ke=Lt:t.includes(F.E)?ke=0:ke=Lt/2;const Wn=ae.rotation*Math.PI/180,zt=Math.cos(Wn),Vt=Math.sin(Wn);qt={x:ae.x+(ke*zt-Ae*Vt),y:ae.y+(ke*Vt+Ae*zt)}}const st=Pt(ae.type).resize({...ae},t,ot,Je);if(ae.rotation&&ae.rotation!==0&&qt){const $e=st,Lt=$e.width||$e.rx*2||0,Bt=$e.height||$e.ry*2||0;let ke=0,Ae=0;t.includes(F.N)?Ae=Bt:t.includes(F.S)?Ae=0:Ae=Bt/2,t.includes(F.W)?ke=Lt:t.includes(F.E)?ke=0:ke=Lt/2;const zt=(st.rotation??0)*Math.PI/180,Vt=Math.cos(zt),to=Math.sin(zt),no={x:st.x+(ke*Vt-Ae*to),y:st.y+(ke*to+Ae*Vt)};st.x+=qt.x-no.x,st.y+=qt.y-no.y}return st}));return}const s=this.initialBoundingBox,r=o.x-this.startPoint.x,a=o.y-this.startPoint.y;let l,c,d,g;switch(t){case F.N:l=s.x,c=s.y+s.height,d=s.width,g=s.height-a;break;case F.S:l=s.x,c=s.y,d=s.width,g=s.height+a;break;case F.E:l=s.x,c=s.y,d=s.width+r,g=s.height;break;case F.W:l=s.x+s.width,c=s.y,d=s.width-r,g=s.height;break;case F.NE:l=s.x,c=s.y+s.height,d=s.width+r,g=s.height-a;break;case F.NW:l=s.x+s.width,c=s.y+s.height,d=s.width-r,g=s.height-a;break;case F.SE:l=s.x,c=s.y,d=s.width+r,g=s.height+a;break;case F.SW:l=s.x+s.width,c=s.y,d=s.width-r,g=s.height+a;break;default:return}if(d<=0||g<=0)return;const M=d/s.width,p=g/s.height;let b=M,S=p;if(e){const A=Math.min(Math.abs(M),Math.abs(p))*Math.sign(M)*Math.sign(p);b=A,S=A}this.apiService.transformSelectedElements(A=>A.map(m=>{if(m.locked)return m;const P=this.initialElementStates.get(m.id);if(!P)return m;const W=P.x-l,K=P.y-c,ue=W*b,ot=K*S,Je=l+ue,je=c+ot,be={...m,x:Je,y:je};if("width"in P&&P.width!==void 0&&(be.width=P.width*Math.abs(b)),"height"in P&&P.height!==void 0&&(be.height=P.height*Math.abs(S)),P.style?.strokeWidth){const ae=(Math.abs(b)+Math.abs(S))/2;be.style={...m.style,strokeWidth:P.style.strokeWidth*ae}}return be.rotation=P.rotation,be}))}handleRotate(o,e){if(!this.startPoint||!this.selectionCenter||this.rotateStartAngle===null)return;const t=this.apiService.getSelectedElements();if(t.length===0)return;let s=rs(this.selectionCenter,o)-this.rotateStartAngle;if(s>180&&(s-=360),s<-180&&(s+=360),e&&(s=Math.round(s/15)*15),t.length>1){const r=this.selectionCenter;this.apiService.transformSelectedElements(a=>a.map(l=>{if(l.locked)return l;const c=this.initialElementStates.get(l.id);if(!c)return l;const d=this.initialElementRotations.get(l.id)??c.rotation??0,M=Pt(c.type).getBounds(c),p={x:(M.minX+M.maxX)/2,y:(M.minY+M.maxY)/2},b=ad(p,r,s),S=p.x-c.x,A=p.y-c.y,m=b.x-S,P=b.y-A,W=wi(d+s);return{...l,x:m,y:P,rotation:W}}))}else{const r=t[0];let l=(this.initialElementRotations.get(r.id)??r.rotation??0)+s;l=wi(l),this.apiService.transformSelectedElements(c=>c.map(d=>d.locked?d:{...d,rotation:l}))}}handleBoxSelect(o,e){if(!this.startPoint)return;const t={x:Math.min(this.startPoint.x,o.x),y:Math.min(this.startPoint.y,o.y),width:Math.abs(o.x-this.startPoint.x),height:Math.abs(o.y-this.startPoint.y),visible:!0};this.apiService.setSelectionBox(t);const s=this.apiService.getElements().filter(r=>this.checkElementInSelectionBox(r,t)&&!r.locked);this.apiService.selectElements(s,e),this.apiService.updateBoundingBox()}initializeBoxSelect(o){o.shiftKey||this.apiService.clearSelection();const{x:e,y:t}=this.getPointerPosition(o),n={x:e,y:t,width:0,height:0,visible:!0};this.apiService.setSelectionBox(n)}initializeResize(){const o=this.apiService.getSelectedElements();if(o.length===0)return;this.initialElementStates.clear(),o.forEach(a=>{this.initialElementStates.set(a.id,{...a})});const e=o.map(a=>ut(a)),t=Math.min(...e.map(a=>a.minX)),n=Math.min(...e.map(a=>a.minY)),s=Math.max(...e.map(a=>a.maxX)),r=Math.max(...e.map(a=>a.maxY));this.initialBoundingBox={x:t,y:n,width:s-t,height:r-n}}initializeRotation(o){const e=this.apiService.getBoundingBoxSignal(),t=e,n=typeof t=="function"?t():e;if(!n)return;this.selectionCenter={x:n.x+n.width/2,y:n.y+n.height/2};const s=this.getPointerPosition(o);this.rotateStartAngle=rs(this.selectionCenter,s);const r=this.apiService.getSelectedElements();this.initialElementRotations.clear(),this.initialElementStates.clear(),r.forEach(a=>{this.initialElementRotations.set(a.id,a.rotation||0),this.initialElementStates.set(a.id,{...a})}),this.apiService.setBoundingBox(null)}checkElementInSelectionBox(o,e){const n=Pt(o.type).getBounds(o);return Hc(n,e)}getResizeDirection(o){const e=o.split("_")[2];let t=F.N;Object.values(F).includes(e)&&(t=e);const n=this.apiService.getSelectedElements();if(n.length>0){const s=n[0].rotation||0;return Wc(t,s)}return t}}class _d extends Ye{type=x.Text;baseCursor=pe.Text;textElement=null;textInput=null;get isEditing(){return this.textInput!==null}handlePointerDown(o){if(!this.active)return;if(this.textInput){this.finishTextInput();return}const e=Qs(o,this.apiService.getElements());if(e&&e.type===G.Text){this.textElement=e,this.createTextInput(e.x,e.y,e.text);return}const{x:t,y:n}=this.getPointerPosition(o),s=this.whiteboardConfig.fontSize||16,r=n+s*.8;this.textElement=this.createTextElement(t,r),this.createTextInput(t,r,"",o)}handlePointerUp(){this.textInput&&(this.textInput.addEventListener("blur",()=>this.finishTextInput()),this.textInput.focus())}createTextElement(o,e){const{snapToGrid:t,gridSize:n}=this.whiteboardConfig;return Ke(G.Text,{x:t?ie(o,n):o,y:t?ie(e,n):e,text:"",style:this.getElementStyle(),zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId())}createTextInput(o,e,t="",n){const a=(this.textElement?.style?.fontSize||16)*.8,c=this.apiService.getCanvas().parentElement;if(!c){console.error("Cannot find whiteboard container");return}const d=c.getBoundingClientRect();let g,M;if(n)g=n.clientX-d.left-1,M=n.clientY-d.top-1;else{const b=this.whiteboardConfig;g=b.canvasX+(o+b.x)*b.zoom-1,M=b.canvasY+(e+b.y)*b.zoom-1-a*b.zoom}const p=document.createElement("textarea");p.id="whiteboard-text-input",p.setAttribute("aria-label","Text input"),p.style.position="absolute",p.style.left=`${g}px`,p.style.top=`${M}px`,p.style.fontSize=`${this.textElement?.style?.fontSize||16}px`,p.style.fontFamily=this.textElement?.style?.fontFamily||"Arial",p.style.color=this.textElement?.style?.color||"#000000",p.style.fontWeight=this.textElement?.style?.fontWeight||"normal",p.style.fontStyle=this.textElement?.style?.fontStyle||"normal",p.style.border="1px dashed #000",p.style.background="white",p.style.outline="none",p.style.resize="none",p.style.overflow="hidden",p.style.lineHeight="1.2",p.style.whiteSpace="pre-wrap",p.style.margin="0",p.style.padding="2px",p.style.boxSizing="border-box",p.style.zIndex="10000",p.style.pointerEvents="auto",p.value=t,p.rows=1,p.addEventListener("input",()=>this.handleTextInput(p)),p.addEventListener("keydown",b=>{b.key===In.ENTER&&b.ctrlKey?(b.preventDefault(),this.finishTextInput()):b.key===In.ESCAPE&&(b.preventDefault(),this.finishTextInput())}),c?c.appendChild(p):document.body.appendChild(p),p.focus(),this.textInput=p,this.handleTextInput(p)}handleTextInput(o){const e=o.value.split(`
`),t=e.reduce((n,s)=>Math.max(n,s.length),0);o.style.width=`${Math.max(t,10)}ch`,o.rows=Math.max(e.length,1),this.textElement&&(this.textElement.text=o.value,this.apiService.updateElements([this.textElement]))}finishTextInput(){if(this.textInput&&this.textElement){this.textInput.value.trim()?this.apiService.elementExists(this.textElement.id)||(this.apiService.addElements([this.textElement]),this.textElement.selectAfterDraw&&this.apiService.selectElements([this.textElement.id])):this.apiService.removeElements([this.textElement]);try{this.textInput.parentElement&&this.textInput.parentElement.removeChild(this.textInput)}catch{}this.textInput=null,this.textElement=null}}getElementStyle(){return{color:this.whiteboardConfig.strokeColor,fontSize:this.whiteboardConfig.fontSize,fontFamily:this.whiteboardConfig.fontFamily,lineJoin:this.whiteboardConfig.lineJoin,lineCap:this.whiteboardConfig.lineCap,dasharray:this.whiteboardConfig.dasharray,dashoffset:this.whiteboardConfig.dashoffset,strokeColor:this.whiteboardConfig.fill,strokeWidth:0}}}let nr=(()=>{class i{createTool(e,t){switch(e){case x.Arrow:return new ld(t);case x.Ellipse:return new cd(t);case x.Eraser:return new dd(t);case x.Hand:return new ud(t);case x.Image:return new hd(t);case x.Line:return new gd(t);case x.Pen:return new pd(t);case x.Rectangle:return new fd(t);case x.Select:return new md(t);case x.Text:return new _d(t);default:throw new Error(`Unknown tool type: ${e}`)}}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})();const Cd=[{id:"hand",type:x.Hand,name:"Hand",description:"Pan and navigate the canvas",icon:Re[x.Hand],enabled:!0,order:0},{id:"select",type:x.Select,name:"Select",description:"Select and manipulate elements",icon:Re[x.Select],enabled:!0,order:1},{id:"pen",type:x.Pen,name:"Pen",description:"Draw freehand lines",icon:Re[x.Pen],enabled:!0,order:2},{id:"line",type:x.Line,name:"Line",description:"Draw straight lines",icon:Re[x.Line],enabled:!0,order:3},{id:"arrow",type:x.Arrow,name:"Arrow",description:"Draw arrow lines",icon:Re[x.Arrow],enabled:!0,order:4},{id:"rectangle",type:x.Rectangle,name:"Rectangle",description:"Draw rectangles",icon:Re[x.Rectangle],enabled:!0,order:5},{id:"ellipse",type:x.Ellipse,name:"Ellipse",description:"Draw ellipses and circles",icon:Re[x.Ellipse],enabled:!0,order:6},{id:"text",type:x.Text,name:"Text",description:"Add text annotations",icon:Re[x.Text],enabled:!0,order:7},{id:"image",type:x.Image,name:"Image",description:"Add images",icon:Re[x.Image],enabled:!0,order:8},{id:"eraser",type:x.Eraser,name:"Eraser",description:"Remove elements",icon:Re[x.Eraser],enabled:!0,order:9}];let St=(()=>{class i{eventBusService=T(Ee);toolFactory=T(nr);_apiServiceCache=D(void 0);_selectedTool=D(x.Pen);_toolConfigs=D(new Map);_currentToolInstance=D(null);_cursor=D(pe.Default);_temporaryOverrides=D([]);toolInstanceCache=new Map;selectedTool=this._selectedTool.asReadonly();currentTool=this._currentToolInstance.asReadonly();cursor=this._cursor.asReadonly();temporaryOverrides=this._temporaryOverrides.asReadonly();effectiveTool=I(()=>{const e=this._temporaryOverrides();return e.length>0?e[e.length-1].tool:this._selectedTool()});availableTools=I(()=>{const e=this._toolConfigs();return Array.from(e.values()).filter(t=>t.enabled).sort((t,n)=>(t.order??999)-(n.order??999))});constructor(){this.initializeDefaultTools(),oo(()=>{const e=this.effectiveTool();this._apiServiceCache()&&this.updateCurrentToolInstance(e)},{}),oo(()=>{this._currentToolInstance()&&this.updateCursorForActiveTool()},{})}initializeDefaultTools(){const e=new Map;Cd.forEach(t=>{e.set(t.id,{...t})}),this._toolConfigs.set(e)}updateCurrentToolInstance(e){const t=this._currentToolInstance();t&&t.type!==e&&t.deactivate();const n=this.getToolInstance(e);n.activate(),this._currentToolInstance.set(n),this.hasTemporaryOverride()||this.eventBusService.emit(O.ToolChange,e)}updateCursorForActiveTool(){const e=this._currentToolInstance();e&&"baseCursor"in e?this._cursor.set(e.baseCursor):this._cursor.set(pe.Default)}getActiveToolType(){return this.effectiveTool()}getActiveToolInstance(){const e=this._currentToolInstance();if(!e)throw new Error("No active tool instance found.");return e}setActiveTool(e){this._selectedTool()!==e&&this._selectedTool.set(e)}isToolActive(e){return this.effectiveTool()===e}getToolInstance(e){if(!Array.from(this._toolConfigs().values()).some(s=>s.type===e))throw new Error(`Tool type '${e}' is not registered.`);if(!this.toolInstanceCache.has(e)){const s=this._apiServiceCache();if(!s)throw new Error("ApiService not set. Call setApiService() first.");const r=this.toolFactory.createTool(e,s);this.toolInstanceCache.set(e,r)}const n=this.toolInstanceCache.get(e);if(!n)throw new Error(`Failed to create or retrieve tool instance for type: ${e}`);return n}getRegisteredToolTypes(){return Array.from(this._toolConfigs().values()).map(e=>e.type).filter((e,t,n)=>n.indexOf(e)===t)}isToolRegistered(e){return Array.from(this._toolConfigs().values()).some(t=>t.type===e)}resetToDefaultTool(){this.setActiveTool(x.Pen)}registerTool(e){const t=this._toolConfigs(),n=new Map(t);n.set(e.id,{...e}),this._toolConfigs.set(n)}registerTools(e){const t=this._toolConfigs(),n=new Map(t);e.forEach(s=>{n.set(s.id,{...s})}),this._toolConfigs.set(n)}unregisterTool(e){const t=this._toolConfigs();if(!t.has(e))return!1;const n=t.get(e),s=new Map(t);return s.delete(e),this._toolConfigs.set(s),this._selectedTool()===n?.type&&this.resetToDefaultTool(),!0}getToolConfig(e){return this._toolConfigs().get(e)}getToolConfigs(){return Array.from(this._toolConfigs().values())}setToolEnabled(e,t){const n=this.getToolConfig(e);return n?(this.registerTool({...n,enabled:t}),!t&&this._selectedTool()===n.type&&this.resetToDefaultTool(),!0):!1}setToolEnabledByType(e,t){const n=Array.from(this._toolConfigs().values()).find(s=>s.type===e);return n?this.setToolEnabled(n.id,t):!1}setEnabledTools(e){const t=new Set(e),n=this._toolConfigs(),s=new Map;if(n.forEach((r,a)=>{s.set(a,{...r,enabled:t.has(r.type)})}),this._toolConfigs.set(s),!t.has(this._selectedTool())){const r=e[0]||x.Pen;this.setActiveTool(r)}}pushTemporaryTool(e,t=`temp-${Date.now()}`){if(this._temporaryOverrides().some(r=>r.reason===t))return;const s={tool:e,reason:t,timestamp:Date.now()};this._temporaryOverrides.update(r=>[...r,s])}popTemporaryTool(e){const t=this._temporaryOverrides();if(t.length===0)return;let n;e?n=t.filter(s=>s.reason!==e):n=t.slice(0,-1),n.length!==t.length&&this._temporaryOverrides.set(n)}clearTemporaryTools(){this._temporaryOverrides.set([])}hasTemporaryOverride(){return this._temporaryOverrides().length>0}setCursor(e){this._cursor.set(e)}resetCursor(){this.updateCursorForActiveTool()}destroy(){const e=this._currentToolInstance();e&&e.deactivate(),this.toolInstanceCache.clear(),this.clearTemporaryTools()}setApiService(e){this._apiServiceCache.set(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Jt=(()=>{class i{eventBus;clipboardService;elementsService;toolsService;canvasService;OFFSET_INCREMENT=20;selectedElementIdsSignal=D(new Set);selectionBoxSignal=D({x:0,y:0,width:0,height:0,visible:!1});boundingBoxSignal=D(null);selectedIdsSignal=I(()=>Array.from(this.selectedElementIdsSignal()));hasSelectionSignal=I(()=>this.selectedElementIdsSignal().size>0);getElementsFn;updateElementsFn;removeElementsFn;constructor(e,t,n,s,r){this.eventBus=e,this.clipboardService=t,this.elementsService=n,this.toolsService=s,this.canvasService=r,this.initializeDataProviders()}initializeDataProviders(){this.getElementsFn=()=>this.elementsService.getElements(),this.updateElementsFn=e=>this.elementsService.updateElements(e),this.removeElementsFn=(e,t)=>this.elementsService.removeElements(e,t)}cutElements(){const e=this.getSelectedElements();e.length!==0&&(this.clipboardService.cut(e),this.deleteSelectedElements())}copyElements(){const e=this.getSelectedElements();e.length!==0&&this.clipboardService.copy(e)}pasteElements(){const e=this.clipboardService.paste();e.length>0&&this.selectElements(e)}duplicateElements(){const e=this.getSelectedElements();if(e.length===0)return;const t=this.clipboardService.duplicateElements(e);t.length>0&&this.selectElements(t)}deleteSelectedElements(){const e=this.getSelectedElements();e.length===0||!this.removeElementsFn||(this.removeElementsFn(e,!0),this.clearSelection())}getSelectedIds(){return this.selectedIdsSignal()}getSelectedElements(){if(!this.getElementsFn)return console.warn("Element data provider not set"),[];const e=this.getSelectedIds();return this.getElementsFn().filter(t=>e.includes(t.id))}getSelectedElementsSignal(){return I(()=>this.getSelectedElements())}isSelected(e){const t=typeof e=="string"?e:e.id;return this.selectedElementIdsSignal().has(t)}getSelectionCount(){return this.selectedElementIdsSignal().size}hasSelection(){return this.getSelectionCount()>0}selectElements(e,t=!1){const s=(Array.isArray(e)?e:[e]).map(d=>typeof d=="string"?d:d.id),r=this.expandSelectionToIncludeGroups(s),a=Array.from(this.selectedElementIdsSignal()),l=t?[...new Set([...a,...r])]:r;this.selectedElementIdsSignal.set(new Set(l)),l.length>0&&this.toolsService.setActiveTool(x.Select);const c=this.getSelectedElements();this.updateBoundingBoxFromElements(c),this.eventBus.emit(O.ElementsSelected,c)}deselectElement(e){const t=typeof e=="string"?e:e.id,n=new Set(this.selectedElementIdsSignal());if(n.has(t)){this.expandSelectionToIncludeGroups([t]).forEach(a=>{n.delete(a)}),this.selectedElementIdsSignal.set(n),this.updateBoundingBox();const r=this.getSelectedElements();this.eventBus.emit(O.ElementsSelected,r)}}toggleSelection(e){const t=typeof e=="string"?e:e.id,n=new Set(this.selectedElementIdsSignal()),s=n.has(t),r=this.expandSelectionToIncludeGroups([t]);s?r.forEach(l=>{n.delete(l)}):(r.forEach(l=>{n.add(l)}),this.toolsService.setActiveTool(x.Select)),this.selectedElementIdsSignal.set(n),this.updateBoundingBox();const a=this.getSelectedElements();this.eventBus.emit(O.ElementsSelected,a)}clearSelection(){this.selectedElementIdsSignal.set(new Set),this.clearBoundingBox(),this.eventBus.emit(O.ElementsSelected,[])}selectAll(){if(!this.getElementsFn){console.warn("Element data provider not set");return}const e=this.getElementsFn(),t=new Set(e.map(n=>n.id));this.selectedElementIdsSignal.set(t),e.length>0&&this.toolsService.setActiveTool(x.Select),this.updateBoundingBox(),this.eventBus.emit(O.ElementsSelected,e)}selectElementsInArea(e){if(!this.getElementsFn){console.warn("Element data provider not set");return}const t=this.getElementsFn(),n=[];t.forEach(s=>{const r=ut(s);!(r.maxX<e.x||r.minX>e.x+e.width||r.maxY<e.y||r.minY>e.y+e.height)&&n.push(s.id)}),n.length>0&&this.selectElements(n)}setSelectionBox(e){this.selectionBoxSignal.set(e)}getSelectionBox(){return this.selectionBoxSignal()}getSelectionBoxSignal(){return this.selectionBoxSignal.asReadonly()}clearSelectionBox(){this.selectionBoxSignal.set({x:0,y:0,width:0,height:0,visible:!1})}updateBoundingBox(){const e=this.getSelectedElements();this.updateBoundingBoxFromElements(e)}getBoundingBox(){return this.boundingBoxSignal()}getBoundingBoxSignal(){return this.boundingBoxSignal.asReadonly()}clearBoundingBox(){this.boundingBoxSignal.set(null)}setBoundingBox(e){this.boundingBoxSignal.set(e)}expandSelectionToIncludeGroups(e){if(!this.getElementsFn)return e;const t=this.getElementsFn(),n=t.filter(a=>e.includes(a.id)),s=new Set(n.map(a=>a.groupId).filter(a=>a!=null));return s.size===0?e:t.filter(a=>e.includes(a.id)||a.groupId&&s.has(a.groupId)).map(a=>a.id)}calculateBoundingBox(e){let t,n=0;if(e.length===1){const p=e[0];n=p.rotation||0,t=ut(p)}else{const p=rd(e);if(!p)throw new Error("Cannot calculate bounding box for empty element list");t=p,n=0}const{minX:s,minY:r,maxX:a,maxY:l,width:c,height:d}=t,g=s+c/2;return{x:s,y:r,width:c,height:d,handles:{topLeft:{x:s,y:r},topRight:{x:a,y:r},bottomLeft:{x:s,y:l},bottomRight:{x:a,y:l},rotateHandle:{x:g,y:r-20}},rotation:n}}updateBoundingBoxFromElements(e){if(!e||e.length===0){this.clearBoundingBox();return}this.boundingBoxSignal.set(this.calculateBoundingBox(e))}updateSelectedElements(e,t){const n=this.getSelectedElements();if(n.length===0)return;const s=t||this.updateElementsFn;if(!s)return;const r=n.map(l=>({...e,id:l.id}));s(r,!0),this.updateBoundingBox();const a=this.getSelectedElements();this.eventBus.emit(O.ElementsSelected,a)}transformSelectedElements(e,t){const n=this.getSelectedElements();if(n.length===0)return;const s=t||this.updateElementsFn;if(!s)return;const a=e(n).map(c=>({...c,id:c.id}));s(a,!0),this.updateBoundingBox();const l=this.getSelectedElements();this.eventBus.emit(O.ElementsSelected,l)}getSelectionBounds(){const e=this.getSelectedElements();if(e.length===0)return null;const t=e.map(ut);return{minX:Math.min(...t.map(n=>n.minX)),minY:Math.min(...t.map(n=>n.minY)),maxX:Math.max(...t.map(n=>n.maxX)),maxY:Math.max(...t.map(n=>n.maxY))}}selectionContainsType(e){return this.getSelectedElements().some(t=>t.type===e)}getSelectedElementTypes(){const e=this.getSelectedElements().map(t=>t.type);return[...new Set(e)]}removeSelectedElements(){const e=this.getSelectedElements();e.length!==0&&this.removeElementsFn&&(this.removeElementsFn(e,!0),this.clearSelection())}bringToFront(){const e=this.getSelectedElements();if(e.length===0||!this.getElementsFn||!this.updateElementsFn)return;const t=this.getElementsFn(),n=Math.max(...t.map(r=>r.zIndex||0)),s=e.map((r,a)=>({id:r.id,zIndex:n+a+1}));this.updateElementsFn(s)}bringForward(){const e=this.getSelectedElements();if(e.length===0||!this.getElementsFn||!this.updateElementsFn)return;const n=[...this.getElementsFn()].sort((r,a)=>(r.zIndex||0)-(a.zIndex||0)),s=[];e.forEach(r=>{let l=n.findIndex(c=>c.id===r.id)+1;for(;l<n.length&&e.some(c=>c.id===n[l].id);)l++;if(l<n.length){const c=n[l];s.push({id:r.id,zIndex:c.zIndex}),s.push({id:c.id,zIndex:r.zIndex})}}),s.length>0&&this.updateElementsFn(s)}sendBackward(){const e=this.getSelectedElements();if(e.length===0||!this.getElementsFn||!this.updateElementsFn)return;const n=[...this.getElementsFn()].sort((r,a)=>(r.zIndex||0)-(a.zIndex||0)),s=[];e.forEach(r=>{let l=n.findIndex(c=>c.id===r.id)-1;for(;l>=0&&e.some(c=>c.id===n[l].id);)l--;if(l>=0){const c=n[l];s.push({id:r.id,zIndex:c.zIndex}),s.push({id:c.id,zIndex:r.zIndex})}}),s.length>0&&this.updateElementsFn(s)}sendToBack(){const e=this.getSelectedElements();if(e.length===0||!this.getElementsFn||!this.updateElementsFn)return;const t=e.map((a,l)=>({id:a.id,zIndex:l+1}));this.updateElementsFn(t);const r=this.getElementsFn().filter(a=>!e.some(l=>l.id===a.id)).map((a,l)=>({id:a.id,zIndex:e.length+l+1}));r.length>0&&this.updateElementsFn(r)}groupSelectedElements(){const e=this.getSelectedElements();if(e.length<2||!this.updateElementsFn)return;const t=`group_${Date.now()}`,n=e.map(s=>({id:s.id,groupId:t}));this.updateElementsFn(n)}ungroupSelectedElements(){const e=this.getSelectedElements();if(e.length===0||!this.getElementsFn||!this.updateElementsFn)return;const t=e.filter(l=>l.groupId!==void 0&&l.groupId!==null);if(t.length===0)return;const n=[...new Set(t.map(l=>l.groupId).filter(Boolean))],a=this.getElementsFn().filter(l=>l.groupId!==void 0&&l.groupId!==null&&n.includes(l.groupId)).map(l=>({id:l.id,groupId:void 0}));this.updateElementsFn(a)}lockElements(){const e=this.getSelectedElements();if(e.length===0||!this.updateElementsFn)return;const t=e.map(n=>({id:n.id,locked:!0}));this.updateElementsFn(t)}unlockElements(){const e=this.getSelectedElements();if(e.length===0||!this.updateElementsFn)return;const t=e.map(n=>({id:n.id,locked:!1}));this.updateElementsFn(t)}alignElements(e){const t=this.getSelectedElements();if(t.length===0)return;if(!this.updateElementsFn){console.warn("Update elements function not available");return}const n=this.calculateAlignmentUpdates(t,e);n.length>0&&(this.updateElementsFn(n,!0),this.updateBoundingBox())}distributeHorizontally(){this.alignElements(N.DistributeHorizontally)}distributeVertically(){this.alignElements(N.DistributeVertically)}calculateAlignmentUpdates(e,t){if(e.length===0)return[];const n=[],s=e.map(r=>({element:r,bounds:ut(r)}));if(e.length===1){const r=this.canvasService.getVisibleBounds(),a=s[0].bounds,l=s[0].element;switch(t){case N.Left:{const c=r.left-a.minX;c!==0&&n.push({id:l.id,x:l.x+c});break}case N.Center:{const c=(r.left+r.right)/2,d=a.minX+a.width/2,g=c-d;g!==0&&n.push({id:l.id,x:l.x+g});break}case N.Right:{const c=r.right-a.maxX;c!==0&&n.push({id:l.id,x:l.x+c});break}case N.Top:{const c=r.top-a.minY;c!==0&&n.push({id:l.id,y:l.y+c});break}case N.Middle:{const c=(r.top+r.bottom)/2,d=a.minY+a.height/2,g=c-d;g!==0&&n.push({id:l.id,y:l.y+g});break}case N.Bottom:{const c=r.bottom-a.maxY;c!==0&&n.push({id:l.id,y:l.y+c});break}default:return console.warn("Unsupported alignment type for single element:",t),[]}return n}switch(t){case N.Left:{const r=Math.min(...s.map(a=>a.bounds.minX));s.forEach(({element:a,bounds:l})=>{const c=r-l.minX;c!==0&&n.push({id:a.id,x:a.x+c})});break}case N.Center:{const r=s.reduce((a,l)=>a+(l.bounds.minX+l.bounds.width/2),0)/s.length;s.forEach(({element:a,bounds:l})=>{const c=l.minX+l.width/2,d=r-c;d!==0&&n.push({id:a.id,x:a.x+d})});break}case N.Right:{const r=Math.max(...s.map(a=>a.bounds.maxX));s.forEach(({element:a,bounds:l})=>{const c=r-l.maxX;c!==0&&n.push({id:a.id,x:a.x+c})});break}case N.Top:{const r=Math.min(...s.map(a=>a.bounds.minY));s.forEach(({element:a,bounds:l})=>{const c=r-l.minY;c!==0&&n.push({id:a.id,y:a.y+c})});break}case N.Middle:{const r=s.reduce((a,l)=>a+(l.bounds.minY+l.bounds.height/2),0)/s.length;s.forEach(({element:a,bounds:l})=>{const c=l.minY+l.height/2,d=r-c;d!==0&&n.push({id:a.id,y:a.y+d})});break}case N.Bottom:{const r=Math.max(...s.map(a=>a.bounds.maxY));s.forEach(({element:a,bounds:l})=>{const c=r-l.maxY;c!==0&&n.push({id:a.id,y:a.y+c})});break}case N.DistributeHorizontally:{if(e.length<3)return[];const r=s.sort((b,S)=>b.bounds.minX-S.bounds.minX),a=r[0].bounds.minX,c=r[r.length-1].bounds.maxX-a,d=r.reduce((b,S)=>b+S.bounds.width,0),M=(c-d)/(r.length-1);let p=a;r.forEach(({element:b,bounds:S},A)=>{if(A===0)p+=S.width;else{if(A===r.length-1)return;{p+=M;const m=p-S.minX;m!==0&&n.push({id:b.id,x:b.x+m}),p+=S.width}}});break}case N.DistributeVertically:{if(e.length<3)return[];const r=s.sort((b,S)=>b.bounds.minY-S.bounds.minY),a=r[0].bounds.minY,c=r[r.length-1].bounds.maxY-a,d=r.reduce((b,S)=>b+S.bounds.height,0),M=(c-d)/(r.length-1);let p=a;r.forEach(({element:b,bounds:S},A)=>{if(A===0)p+=S.height;else{if(A===r.length-1)return;{p+=M;const m=p-S.minY;m!==0&&n.push({id:b.id,y:b.y+m}),p+=S.height}}});break}default:return console.warn("Unsupported alignment type:",t),[]}return n}flipHorizontal(){const e=this.getSelectedElements();if(e.length===0||!this.updateElementsFn)return;const t=e.map(n=>{const s=n.scaleX??1;return{id:n.id,scaleX:-s}});this.updateElementsFn(t,!0),this.updateBoundingBox()}flipVertical(){const e=this.getSelectedElements();if(e.length===0||!this.updateElementsFn)return;const t=e.map(n=>{const s=n.scaleY??1;return{id:n.id,scaleY:-s}});this.updateElementsFn(t,!0),this.updateBoundingBox()}moveSelectedElements(e,t){const n=this.getSelectedElements();if(n.length===0||!this.updateElementsFn)return;const s=n.map(r=>({id:r.id,x:r.x+e,y:r.y+t}));this.updateElementsFn(s,!0),this.updateBoundingBox()}rotateSelectedElements(e){const t=this.getSelectedElements();if(t.length===0||!this.updateElementsFn)return;const n=t.map(s=>({id:s.id,rotation:(s.rotation||0)+e}));this.updateElementsFn(n,!0),this.updateBoundingBox()}scaleSelectedElements(e){const t=this.getSelectedElements();if(t.length===0||!this.updateElementsFn)return;const n=t.map(s=>{const r={id:s.id};return"width"in s&&s.width!==void 0&&(r.width=s.width*e),"height"in s&&s.height!==void 0&&(r.height=s.height*e),s.style?.strokeWidth!==void 0&&(r.style={...s.style,strokeWidth:s.style.strokeWidth*e}),"rx"in s&&s.rx!==void 0&&(r.rx=s.rx*e),"ry"in s&&s.ry!==void 0&&(r.ry=s.ry*e),r}).filter(s=>Object.keys(s).length>1);n.length>0&&(this.updateElementsFn(n,!0),this.updateBoundingBox())}static ɵfac=function(t){return new(t||i)(V(Ee),V(qi),V(Ft),V(St),V(Tt))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Qi=(()=>{class i{canvasService=T(Tt);elementsService=T(Ft);selectionService=T(Jt);configService=T(De);eventBusService=T(Ee);DEFAULT_FIT_MARGIN=.9;zoomSubscription;constructor(){this.zoomSubscription=this.eventBusService.on(O.ZoomChange).subscribe(()=>{const{center:e,fullScreen:t,zoom:n}=this.getConfig();e&&!t&&this.centerCanvas(n)})}ngOnDestroy(){this.zoomSubscription?.unsubscribe()}emitZoomChangeEvent(){const{zoom:e}=this.getConfig();this.eventBusService.emit(O.ZoomChange,{zoom:e})}getConfig(){return this.configService.getConfig()}centerCanvas(e){const{canvasWidth:t,canvasHeight:n}=this.getConfig(),s=this.canvasService.getContainerDimensions(),r=(s.width-t*e)/2,a=(s.height-n*e)/2;return this.configService.updateConfig({canvasX:r,canvasY:a},!1),{x:r,y:a}}zoom(e,t=!0,n=300){if(e<=0)return;const s=Math.round(this.clampZoom(e)*100)/100;t?this.animateToTarget(s,n):this.setInstant(s)}zoomIn(e=!0,t=300){const{zoom:n}=this.getConfig(),s=Math.round((n+is)*100)/100;s<=dn&&this.zoom(s,e,t)}zoomOut(e=!0,t=300){const{zoom:n}=this.getConfig(),s=Math.round((n-is)*100)/100;s>=cn&&this.zoom(s,e,t)}resetZoom(e=!0,t=300){e?this.animateToTarget(os,t):this.setInstant(os)}getZoomLevel(){return this.getConfig().zoom}getZoomPercentage(){return Math.round(this.getConfig().zoom*100)}zoomToFit(e=this.DEFAULT_FIT_MARGIN,t=!0,n=300){const s=this.elementsService.getElements();if(s.length===0){this.resetZoom(t,n);return}this.zoomToElements(s,e,t,n)}zoomToSelection(e=this.DEFAULT_FIT_MARGIN,t=!0,n=300){const s=this.selectionService.getSelectedElements();s.length!==0&&this.zoomToElements(s,e,t,n)}zoomToElements(e,t=this.DEFAULT_FIT_MARGIN,n=!0,s=300){if(e.length===0)return;const r=this.elementsService.calculateElementsBounds(e);if(!r)return;const{fullScreen:a}=this.getConfig(),l=a?this.canvasService.getContainerDimensions():this.canvasService.getCanvasDimensions(),c=l.width*t/r.width,d=l.height*t/r.height,g=Math.min(c,d);n?this.animateToTarget(g,s):this.setInstant(g)}zoomToArea(e,t,n,s,r=this.DEFAULT_FIT_MARGIN,a=!0,l=300){const c=this.canvasService.getCanvasDimensions(),d=c.width*r/n,g=c.height*r/s,M=Math.min(d,g);a?this.animateToTarget(M,l):this.setInstant(M)}getOptimalZoom(e,t,n=this.DEFAULT_FIT_MARGIN){const s=this.canvasService.getCanvasDimensions(),r=s.width/e,a=s.height/t;return this.clampZoom(Math.min(r,a)*n)}clampZoom(e){return Math.max(cn,Math.min(dn,e))}isValidZoom(e){return e>=cn&&e<=dn}getZoomLimits(){return{min:cn,max:dn}}easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}setInstant(e){const{fullScreen:t,center:n}=this.getConfig(),s=this.clampZoom(e);!t&&n&&this.centerCanvas(s),this.configService.updateConfig({zoom:s}),this.emitZoomChangeEvent()}animateToTarget(e,t=300){const{zoom:n,fullScreen:s,center:r}=this.getConfig(),a=this.clampZoom(e);!s&&r&&this.centerCanvas(a);const l=performance.now(),c=d=>{const g=d-l,M=Math.min(g/t,1),p=this.easeInOutCubic(M),b=n+(a-n)*p;this.configService.updateConfig({zoom:b}),M<1?requestAnimationFrame(c):this.emitZoomChangeEvent()};requestAnimationFrame(c)}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),ir=(()=>{class i{apiService;configService;constructor(e,t){this.apiService=e,this.configService=t}handleFiles(e){Array.from(e).forEach(t=>{if(t.type.startsWith(Xs.IMAGE)){const n=new FileReader;n.onload=s=>{const r=s.target?.result;if(r){const a=Ke(G.Image,{src:r,x:100,y:100,width:200,height:200,zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId());this.apiService.addElements([a])}},n.readAsDataURL(t)}})}handleText(e,t,n=!1){const s=this.configService.getConfig(),{x:r,y:a}=Pi(s,{x:t.clientX,y:t.clientY});let l=e,c={color:s.strokeColor,fontSize:s.fontSize,fontFamily:s.fontFamily,fontWeight:"normal",fontStyle:"normal"};if(n){const g=new DOMParser().parseFromString(e,"text/html");l=(g.body.textContent||"").trim();const p=g.body.firstElementChild;if(p){const b=window.getComputedStyle(p);c={color:b.color||c.color,fontSize:parseInt(b.fontSize)||c.fontSize,fontFamily:b.fontFamily||c.fontFamily,fontWeight:b.fontWeight==="bold"||parseInt(b.fontWeight)>=700?"bold":"normal",fontStyle:b.fontStyle==="italic"?"italic":"normal"}}}if(l){const d=Ke(G.Text,{x:r,y:a+c.fontSize*.8,text:l,style:c,zIndex:this.apiService.getNextZIndex()},this.apiService.getActiveLayerId());this.apiService.addElements([d])}}handleElements(e,t){const n=this.configService.getConfig(),s=Pi(n,{x:t.clientX,y:t.clientY}),r=e.map(a=>({...a,x:s.x+(a.x||0),y:s.y+(a.y||0),zIndex:this.apiService.getNextZIndex()}));this.apiService.addElements(r)}static ɵfac=function(t){return new(t||i)(V(Ze),V(De))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})();function yd(i,o,e,t=se.Png){return new Promise((n,s)=>{const r=document.createElement("canvas");r.width=o,r.height=e;const a=r.getContext("2d"),l=new Image,c=encodeURIComponent(i);l.src=`data:image/svg+xml;charset=utf-8,${c}`,l.onload=()=>{a.drawImage(l,0,0,o,e);const d=r.toDataURL(`image/${t}`);n(d)},l.onerror=d=>{s(d)}})}let or=(()=>{class i{elementsService;canvasService;zoomService;panService;eventBusService;selectionService;layerManagementService;configService;constructor(e,t,n,s,r,a,l,c){this.elementsService=e,this.canvasService=t,this.zoomService=n,this.panService=s,this.eventBusService=r,this.selectionService=a,this.layerManagementService=l,this.configService=c}addImage(e){const t=new Image;t.onload=()=>{const{canvasHeight:n}=this.canvasService.getConfig(),s=t.width,r=t.height,a=t.width/t.height,l=r>n?n-40:r,c=l===n-40?(n-40)*a:s;let d=e.x||0,g=e.y||0;d<0&&(d=0),g<0&&(g=0);const M=Ke(G.Image,{src:e.image,width:c,height:l,x:d,y:g,zIndex:this.elementsService.getNextZIndex()});this.elementsService.addElements([M]),M.selectAfterDraw&&this.selectionService.selectElements([M.id]),this.eventBusService.emit(O.ImageAdded,M.src)},t.onerror=()=>{console.error("Failed to load image")},t.src=e.image}importImageFile(e,t,n){return new Promise((s,r)=>{if(!e.type.startsWith(Xs.IMAGE)){r(new Error("Invalid file type. Only images are supported."));return}const a=new FileReader;a.onload=l=>{const c=l.target?.result;c?(this.addImage({image:c,x:t,y:n}),s()):r(new Error("Failed to read file"))},a.onerror=()=>{r(new Error("Failed to read file"))},a.readAsDataURL(e)})}async importImageFromUrl(e,t,n){try{const r=await(await fetch(e)).blob();return new Promise((a,l)=>{const c=new FileReader;c.onload=d=>{const g=d.target?.result;g?(this.addImage({image:g,x:t,y:n}),a()):l(new Error("Failed to process URL"))},c.onerror=()=>{l(new Error("Failed to process URL"))},c.readAsDataURL(r)})}catch(s){throw new Error(`Failed to load image from URL: ${s}`)}}async save(e=se.Base64,t="New board"){const s=this.canvasService.getCanvas().getElementById("svgcontent");if(!s)throw new Error("SVG content not found");const r=this.prepareSvgForExport(s),a=new XMLSerializer().serializeToString(r),{canvasWidth:l,canvasHeight:c}=this.canvasService.getConfig();try{const d=await yd(a,l,c,e);switch(e){case se.Base64:this.eventBusService.emit(O.Save,d);break;case se.Svg:{const g="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a)));this.downloadFile(g,t,"svg"),this.eventBusService.emit(O.Save,g);break}default:this.downloadFile(d,t,this.getFileExtension(e)),this.eventBusService.emit(O.Save,d);break}return d}catch(d){throw console.error("Failed to save whiteboard:",d),d}}async exportAsPng(e="whiteboard"){return this.save(se.Png,e)}async exportAsJpeg(e="whiteboard"){return this.save(se.Jpeg,e)}async exportAsSvg(e="whiteboard"){return this.save(se.Svg,e)}async exportAsBase64(){return this.save(se.Base64)}exportData(){const e=this.elementsService.getElements(),t=this.canvasService.getConfig(),n=this.layerManagementService.exportLayerState(),s=this.configService.getEditorConfig(),r={version:"1.0",timestamp:new Date().toISOString(),elements:e,layers:n,canvas:{width:t.canvasWidth,height:t.canvasHeight,backgroundColor:t.backgroundColor,fullScreen:t.fullScreen,center:t.center},viewport:{zoom:t.zoom,x:t.x,y:t.y,canvasX:t.canvasX,canvasY:t.canvasY},drawing:{strokeColor:t.strokeColor,strokeWidth:t.strokeWidth,fill:t.fill,lineJoin:t.lineJoin,lineCap:t.lineCap,dasharray:t.dasharray,dashoffset:t.dashoffset,penType:t.penType},grid:{enabled:t.enableGrid,size:t.gridSize,snapToGrid:t.snapToGrid},text:{fontFamily:t.fontFamily,fontSize:t.fontSize},editor:s,settings:{drawingEnabled:t.drawingEnabled,keyboardShortcutsEnabled:t.keyboardShortcutsEnabled}};return JSON.stringify(r,null,2)}exportDataAsFile(e="whiteboard-export"){const t=this.exportData(),n="data:application/json;charset=utf-8,"+encodeURIComponent(t);this.downloadFile(n,e,"json"),this.eventBusService.emit(O.Save,t)}importData(e){try{const t=JSON.parse(e);if(!t.elements||!Array.isArray(t.elements))throw new Error("Invalid data format: elements array not found");if(this.elementsService.clear(),t.layers&&this.layerManagementService.importLayerState(t.layers),this.elementsService.setElements(t.elements),t.canvas){const{canvas:n}=t;n.width&&n.height&&this.canvasService.setCanvasDimensions(n.width,n.height),n.backgroundColor!==void 0&&this.configService.updateConfig({backgroundColor:n.backgroundColor},!1),n.fullScreen!==void 0&&this.configService.updateConfig({fullScreen:n.fullScreen},!1),n.center!==void 0&&this.configService.updateConfig({center:n.center},!1)}if(t.viewport){const{viewport:n}=t;n.zoom!==void 0&&this.zoomService.zoom(n.zoom),n.x!==void 0&&n.y!==void 0&&this.panService.panTo(n.x,n.y),n.canvasX!==void 0&&n.canvasY!==void 0&&this.configService.updateConfig({canvasX:n.canvasX,canvasY:n.canvasY},!1)}if(t.drawing){const{drawing:n}=t,s={};n.strokeColor!==void 0&&(s.strokeColor=n.strokeColor),n.strokeWidth!==void 0&&(s.strokeWidth=n.strokeWidth),n.fill!==void 0&&(s.fill=n.fill),n.lineJoin!==void 0&&(s.lineJoin=n.lineJoin),n.lineCap!==void 0&&(s.lineCap=n.lineCap),n.dasharray!==void 0&&(s.dasharray=n.dasharray),n.dashoffset!==void 0&&(s.dashoffset=n.dashoffset),n.penType!==void 0&&(s.penType=n.penType),this.configService.updateConfig(s,!1)}if(t.grid){const{grid:n}=t,s={};n.enabled!==void 0&&(s.enableGrid=n.enabled),n.size!==void 0&&(s.gridSize=n.size),n.snapToGrid!==void 0&&(s.snapToGrid=n.snapToGrid),this.configService.updateConfig(s,!1)}if(t.text){const{text:n}=t,s={};n.fontFamily!==void 0&&(s.fontFamily=n.fontFamily),n.fontSize!==void 0&&(s.fontSize=n.fontSize),this.configService.updateConfig(s,!1)}if(t.editor&&Object.keys(t.editor).forEach(s=>{this.configService.updateEditorConfigValue(s,t.editor[s])}),t.settings){const{settings:n}=t,s={};n.drawingEnabled!==void 0&&(s.drawingEnabled=n.drawingEnabled),n.keyboardShortcutsEnabled!==void 0&&(s.keyboardShortcutsEnabled=n.keyboardShortcutsEnabled),this.configService.updateConfig(s,!1)}this.configService.updateConfig({},!0),this.eventBusService.emit(O.ElementsAdded,t.elements)}catch(t){throw console.error("Failed to import data:",t),new Error(`Failed to import data: ${t}`)}}importDataFromFile(e){return new Promise((t,n)=>{if(!e.type.includes("json")){n(new Error("Invalid file type. Only JSON files are supported."));return}const s=new FileReader;s.onload=r=>{const a=r.target?.result;if(a&&typeof a=="string")try{this.importData(a),t()}catch(l){n(l)}else n(new Error("Failed to read file"))},s.onerror=()=>{n(new Error("Failed to read file"))},s.readAsText(e)})}downloadFile(e,t,n){const s=`${t}.${n}`;Ac(e,s)}getFileExtension(e){switch(e){case se.Png:return"png";case se.Jpeg:return"jpg";case se.Svg:return"svg";case se.Base64:return"txt";default:return"png"}}prepareSvgForExport(e){const t=e.cloneNode(!0),n=t.querySelector("#selectorParentGroup");n&&n.remove();const s=t.querySelector("#contentBackground");return s&&s.removeAttribute("opacity"),t.setAttribute("x","0"),t.setAttribute("y","0"),t}async importMultipleImages(e,t=50){const n=[];let s=0,r=0;for(let a=0;a<e.length;a++){const l=e[a];n.push(this.importImageFile(l,s,r)),s+=200+t,s>800&&(s=0,r+=200+t)}await Promise.all(n)}processImage(e){return e}static ɵfac=function(t){return new(t||i)(V(Ft),V(Tt),V(Qi),V(Ji),V(Ee),V(Jt),V(Nn),V(De))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),sr=(()=>{class i{configService=T(De);apiService=T(Ze);toggleKeyboardShortcuts(){const e=this.configService.getConfig();this.configService.updateConfigValue("keyboardShortcutsEnabled",!e.keyboardShortcutsEnabled)}handleKeyDown(e){if(this.isInputFocused())return;const t=e.key.toLowerCase(),n=e.ctrlKey||e.metaKey,s=e.shiftKey,r=e.altKey;this.handleKeyDownShortcuts(t,n,s,r)&&(e.preventDefault(),e.stopPropagation())}handleKeyUp(e){}isInputFocused(){const e=document.activeElement;return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e?.getAttribute("contenteditable")==="true"}handleKeyDownShortcuts(e,t,n,s){if(!t&&!n&&!s){if(e==="v")return this.apiService.setActiveTool(x.Select),!0;if(e==="d")return this.apiService.setActiveTool(x.Pen),!0;if(e==="e")return this.apiService.setActiveTool(x.Eraser),!0;if(e==="h")return this.apiService.setActiveTool(x.Hand),!0;if(e==="r")return this.apiService.setActiveTool(x.Rectangle),!0;if(e==="o")return this.apiService.setActiveTool(x.Ellipse),!0;if(e==="a")return this.apiService.setActiveTool(x.Arrow),!0;if(e==="l")return this.apiService.setActiveTool(x.Line),!0;if(e==="t")return this.apiService.setActiveTool(x.Text),!0}if(t&&e==="z"&&!n)return this.apiService.undo();if(t&&(e==="y"||e==="z"&&n))return this.apiService.redo();if(t&&e==="a")return this.apiService.selectAll(),!0;if(e===ne.ESCAPE)return this.apiService.clearSelection(),!0;if(t&&e==="c")return this.apiService.copyElements(),!0;if(t&&e==="x")return this.apiService.cutElements(),!0;if(t&&e==="v")return this.apiService.pasteElements(),!0;if(t&&e==="d")return this.apiService.duplicateElements(),!0;if(e===ne.DELETE||e===ne.BACKSPACE)return this.apiService.deleteSelectedElements(),!0;if(t&&e==="g"&&!n)return this.apiService.groupSelectedElements(),!0;if(t&&e==="g"&&n)return this.apiService.ungroupSelectedElements(),!0;if(!t&&!n&&!s&&e==="]")return this.apiService.bringToFront(),!0;if(s&&!t&&!n&&e==="]")return this.apiService.bringForward(),!0;if(s&&!t&&!n&&e==="[")return this.apiService.sendBackward(),!0;if(!t&&!n&&!s&&e==="[")return this.apiService.sendToBack(),!0;if(n&&!t&&!s&&e==="h")return this.apiService.flipHorizontal(),!0;if(n&&!t&&!s&&e==="v")return this.apiService.flipVertical(),!0;if(s&&!t&&!n&&e==="w")return this.apiService.alignElements(N.Top),!0;if(s&&!t&&!n&&e==="v")return this.apiService.alignElements(N.Middle),!0;if(s&&!t&&!n&&e==="s")return this.apiService.alignElements(N.Bottom),!0;if(s&&!t&&!n&&e==="a")return this.apiService.alignElements(N.Left),!0;if(s&&!t&&!n&&e==="h")return this.apiService.alignElements(N.Center),!0;if(s&&!t&&!n&&e==="d")return this.apiService.alignElements(N.Right),!0;if(t&&e==="="||t&&e==="+")return this.apiService.zoomIn(),!0;if(t&&e==="-")return this.apiService.zoomOut(),!0;if(n&&!t&&!s&&e==="0")return this.apiService.resetZoom(),!0;if(n&&!t&&!s&&e==="1")return this.apiService.zoomToFit(),!0;if(n&&!t&&!s&&e==="2")return this.apiService.zoomToSelection(),!0;if(t&&e==="'"&&!n)return this.apiService.toggleGrid(),!0;if(t&&e===";"&&n)return this.apiService.toggleSnapToGrid(),!0;if(!t&&!n&&!s&&(e===ne.ARROW_UP||e===ne.ARROW_DOWN||e===ne.ARROW_LEFT||e===ne.ARROW_RIGHT)){const r=e===ne.ARROW_RIGHT?hn.SMALL_STEP:e===ne.ARROW_LEFT?-1:0,a=e===ne.ARROW_DOWN?hn.SMALL_STEP:e===ne.ARROW_UP?-1:0;return this.apiService.moveSelectedElements(r,a),!0}if(!t&&n&&!s&&(e===ne.ARROW_UP||e===ne.ARROW_DOWN||e===ne.ARROW_LEFT||e===ne.ARROW_RIGHT)){const r=e===ne.ARROW_RIGHT?hn.LARGE_STEP:e===ne.ARROW_LEFT?-10:0,a=e===ne.ARROW_DOWN?hn.LARGE_STEP:e===ne.ARROW_UP?-10:0;return this.apiService.moveSelectedElements(r,a),!0}return!1}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Ze=(()=>{class i{elementsService=T(Ft);canvasService=T(Tt);selectionService=T(Jt);toolsService=T(St);ioService=T(or);historyService=T(Xi);zoomService=T(Qi);panService=T(Ji);layerService=T(Nn);configService=T(De);clipboardService=T(qi);eventBusService=T(Ee);elements=this.elementsService.elements;draftElements=this.elementsService.draftElements;allElements=this.elementsService.allElements;selectedElements=this.selectionService.getSelectedElementsSignal();config=I(()=>this.configService.getConfig());elementsCount=this.elementsService.elementsCount;hasElements=this.elementsService.hasElements;selectedTool=this.toolsService.selectedTool;availableTools=this.toolsService.availableTools;layers=this.layerService.layers;activeLayerId=this.layerService.activeLayerId;activeLayer=this.layerService.activeLayer;setElements(e){this.elementsService.setElements(e)}getElements(){return this.elementsService.getElements()}addElements(e){this.elementsService.addElements(e)}updateElements(e){const t=e.map(n=>({...n,id:n.id}));this.elementsService.updateElements(t)}removeElements(e){this.elementsService.removeElements(e)}clear(){this.elementsService.clear()}clearAll(){this.elementsService.clear(),this.selectionService.clearSelection()}addElement(e){this.addElements([e])}updateElement(e){this.updateElements([e])}removeElementsByIds(e){this.elementsService.removeElementsByIds(e)}getElementById(e){return this.elementsService.getElementById(e)}getElementsByIds(e){return this.elementsService.getElementsByIds(e)}getNextZIndex(){return this.elementsService.getNextZIndex()}getAllElements(){return this.elementsService.getElements()}getDraftElements(){return this.elementsService.getDraftElements()}addDraftElements(e){this.elementsService.addDraftElements(e)}updateDraftElements(e){this.elementsService.updateDraftElements(e)}removeDraftElements(e){this.elementsService.removeDraftElements(e)}commitDraftElements(){this.elementsService.commitDraftElements()}elementExists(e){return this.elementsService.elementExists(e)}selectElements(e,t=!1){this.selectionService.selectElements(e,t)}deselectElement(e){this.selectionService.deselectElement(e)}toggleSelection(e){this.selectionService.toggleSelection(e)}clearSelection(){this.selectionService.clearSelection()}selectAll(){this.selectionService.selectAll()}getSelectedElements(){return this.selectionService.getSelectedElements()}updateSelectedElements(e){this.selectionService.updateSelectedElements(e)}removeSelectedElements(){this.selectionService.removeSelectedElements()}isSelected(e){return this.selectionService.isSelected(e)}clearSelectionBox(){this.selectionService.clearSelectionBox()}transformSelectedElements(e){this.selectionService.transformSelectedElements(e)}setSelectionBox(e){this.selectionService.setSelectionBox(e)}updateBoundingBox(){this.selectionService.updateBoundingBox()}getBoundingBox(){return this.selectionService.getBoundingBox()}setBoundingBox(e){this.selectionService.setBoundingBox(e)}getClipboardInfo(){return this.clipboardService.getClipboardInfo()}copyElements(){this.selectionService.copyElements()}cutElements(){this.selectionService.cutElements()}pasteElements(){this.selectionService.pasteElements()}duplicateElements(){this.selectionService.duplicateElements()}deleteSelectedElements(){this.selectionService.deleteSelectedElements()}bringToFront(){this.selectionService.bringToFront()}bringForward(){this.selectionService.bringForward()}sendBackward(){this.selectionService.sendBackward()}sendToBack(){this.selectionService.sendToBack()}groupSelectedElements(){this.selectionService.groupSelectedElements()}ungroupSelectedElements(){this.selectionService.ungroupSelectedElements()}lockElements(){this.selectionService.lockElements()}unlockElements(){this.selectionService.unlockElements()}alignElements(e){this.selectionService.alignElements(e)}distributeHorizontally(){this.selectionService.distributeHorizontally()}distributeVertically(){this.selectionService.distributeVertically()}flipHorizontal(){this.selectionService.flipHorizontal()}flipVertical(){this.selectionService.flipVertical()}moveSelectedElements(e,t){this.selectionService.moveSelectedElements(e,t)}rotateSelectedElements(e){this.selectionService.rotateSelectedElements(e)}scaleSelectedElements(e){this.selectionService.scaleSelectedElements(e)}initializeWhiteboard(e){this.canvasService.initializeCanvas(e),this.toolsService.setApiService(this)}getCanvas(){return this.canvasService.getCanvas()}setCanvasDimensions(e,t){this.canvasService.setCanvasDimensions(e,t)}centerCanvas(){this.canvasService.centerCanvas()}fullScreen(){this.canvasService.fullScreen()}exitFullScreen(e,t){this.canvasService.exitFullScreen(e,t)}resetCanvas(){this.canvasService.resetCanvas()}setZoom(e){this.zoomService.zoom(e)}zoomIn(){this.zoomService.zoomIn()}zoomOut(){this.zoomService.zoomOut()}resetZoom(){this.zoomService.resetZoom()}zoomToFit(){this.zoomService.zoomToFit()}zoomToSelection(){this.zoomService.zoomToSelection()}pan(e,t){this.panService.pan(e,t)}panTo(e,t){this.panService.panTo(e,t)}resetPan(){this.panService.resetPan()}async save(e=se.Base64,t="whiteboard"){return this.ioService.save(e,t)}addImage(e){this.ioService.addImage(e)}async importImageFile(e,t,n){return this.ioService.importImageFile(e,t,n)}exportData(){return this.ioService.exportData()}importData(e){this.ioService.importData(e)}async exportAsPNG(e="whiteboard"){return this.ioService.exportAsPng(e)}async exportAsSVG(e="whiteboard"){return this.ioService.exportAsSvg(e)}exportAsJSON(e="whiteboard"){const t=this.ioService.exportData(),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=`${e}.json`,r.click(),URL.revokeObjectURL(s)}undo(){const e=this.historyService.undo();return e?(this.elementsService.setElements(e),this.selectionService.clearSelection(),this.eventBusService.emit(O.Undo,void 0),!0):!1}redo(){const e=this.historyService.redo();return e?(this.elementsService.setElements(e),this.selectionService.clearSelection(),this.eventBusService.emit(O.Redo,void 0),!0):!1}getCanUndoSignal(){return this.historyService.getCanUndoSignal()}getCanRedoSignal(){return this.historyService.getCanRedoSignal()}clearHistory(){this.historyService.clearHistory()}recordElementCreation(e,t){this.historyService.recordElementCreation(e,t)}recordElementUpdate(e,t){this.historyService.recordElementUpdate(e,t)}recordElementDeletion(e,t){this.historyService.recordElementDeletion(e,t)}recordClear(e,t){this.historyService.recordClear(e,t)}recordChange(e,t,n){this.historyService.recordChange(e,t,n)}getConfig(){return this.configService.getConfig()}updateConfig(e){this.configService.updateConfig(e)}updateConfigValue(e,t){this.configService.updateConfigValue(e,t)}addLayer(e){return this.layerService.addLayer(e)}removeLayer(e){return this.layerService.removeLayer(e)}duplicateLayer(e){const t=this.elementsService.elements(),n=this.layerService.duplicateLayer(e,t);if(n.layer&&n.elementMap.size>0){const s=[...t],r=[];n.elementMap.forEach((l,c)=>{const d=t.find(g=>g.id===c);if(d){const g=n.layer;if(!g)return;const M={...d,id:l,layerId:g.id};r.push(M)}}),this.elementsService.addElements(r);const a=this.elementsService.elements();this.historyService.recordChange(s,a,`Duplicate layer: ${n.layer.name}`)}}setActiveLayer(e){return this.layerService.setActiveLayer(e)}getActiveLayerId(){return this.layerService.getActiveLayerId()}toggleLayerVisibility(e){return this.layerService.toggleLayerVisibility(e)}toggleLayerLock(e){return this.layerService.toggleLayerLock(e)}renameLayer(e,t){return this.layerService.renameLayer(e,t)}setLayerOpacity(e,t){return this.layerService.setLayerOpacity(e,t)}setLayerBlendMode(e,t){return this.layerService.setLayerBlendMode(e,t)}moveLayerUp(e){return this.layerService.moveLayerUp(e)}moveLayerDown(e){return this.layerService.moveLayerDown(e)}reorderLayersByIndex(e,t){return this.layerService.reorderLayersByIndex(e,t)}toggleGrid(){this.canvasService.toggleGrid()}toggleSnapToGrid(){this.canvasService.toggleSnapToGrid()}setGridSize(e){this.canvasService.setGridSize(e)}setActiveTool(e){this.toolsService.setActiveTool(e)}getActiveTool(){return this.toolsService.getActiveToolType()}setToolEnabled(e,t){return this.toolsService.setToolEnabledByType(e,t)}setEnabledTools(e){this.toolsService.setEnabledTools(e)}setCursor(e){this.toolsService.setCursor(e)}resetCursor(){this.toolsService.resetCursor()}screenToCanvas(e,t){return this.canvasService.screenToCanvas(e,t)}canvasToScreen(e,t){return this.canvasService.canvasToScreen(e,t)}getSelectionBoxSignal(){return this.selectionService.getSelectionBoxSignal()}getBoundingBoxSignal(){return this.selectionService.getBoundingBoxSignal()}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac})}return i})(),rr=(()=>{class i{instances=new Map;_activeId=D(null);activeId=this._activeId.asReadonly();_registryVersion=D(0);registryVersion=this._registryVersion.asReadonly();register(e,t){if(!e||e.trim().length===0)throw new Error("Whiteboard instance ID cannot be empty.");if(!(t instanceof Ze))throw new Error("Instance must be an ApiService instance.");this.instances.set(e,t),this._registryVersion.update(n=>n+1)}unregister(e){const t=this.instances.delete(e);return t&&(this._activeId()===e&&this._activeId.set(null),this._registryVersion.update(n=>n+1)),t}getInstance(e){return this.instances.get(e)}hasInstance(e){return this.instances.has(e)}getAllInstanceIds(){return Array.from(this.instances.keys())}getInstanceCount(){return this.instances.size}setActive(e){if(!this.hasInstance(e))throw new Error(`Whiteboard with ID "${e}" not found in registry. Cannot set as active.`);this._activeId.set(e)}clearActive(){this._activeId.set(null)}getActiveInstance(){const e=this._activeId();return e?this.instances.get(e):void 0}clearAll(){this.instances.clear(),this._activeId.set(null),this._registryVersion.update(e=>e+1)}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),ds=(()=>{class i{instanceService=T(rr);activeBoardId=D(null);setActiveBoard(e){this.activeBoardId.set(e)}getActiveBoard(){return this.activeBoardId()}getApi(e){const t=e||this.activeBoardId();if(!t)throw new Error("NgWhiteboardService: No boardId provided and no active board set. Call setActiveBoard() first or pass boardId parameter.");const n=this.instanceService.getInstance(t);if(!n)throw new Error(`NgWhiteboardService: Board "${t}" not found. Ensure the whiteboard component is initialized.`);return n}signals(e){return{elements:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.elements():[]}),selectedElements:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.selectedElements():[]}),config:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.config():{}}),elementsCount:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.elementsCount():0}),hasElements:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.hasElements():!1}),selectedTool:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.selectedTool():x.Pen}),availableTools:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.availableTools():[]}),layers:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.layers():[]}),activeLayerId:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.activeLayerId():null}),activeLayer:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.activeLayer():null}),canUndo:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.getCanUndoSignal()():!1}),canRedo:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.getCanRedoSignal()():!1}),selectionBox:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.getSelectionBoxSignal()():{x:0,y:0,width:0,height:0}}),boundingBox:I(()=>{this.instanceService.registryVersion();const t=this.instanceService.getInstance(e);return t?t.getBoundingBoxSignal()():null})}}getAllBoards(){return this.instanceService.getAllInstanceIds()}getBoardCount(){return this.instanceService.getInstanceCount()}hasBoard(e){return this.instanceService.hasInstance(e)}setElements(e){this.getApi().setElements(e)}getElements(){return this.getApi().getElements()}addElements(e){this.getApi().addElements(e)}updateElements(e){this.getApi().updateElements(e)}removeElements(e){this.getApi().removeElements(e)}clear(){this.getApi().clear()}clearAll(){this.getApi().clearAll()}addElement(e){this.getApi().addElement(e)}updateElement(e){this.getApi().updateElement(e)}removeElementsByIds(e){this.getApi().removeElementsByIds(e)}getElementById(e){return this.getApi().getElementById(e)}getElementsByIds(e){return this.getApi().getElementsByIds(e)}getNextZIndex(){return this.getApi().getNextZIndex()}elementExists(e){return this.getApi().elementExists(e)}selectElements(e,t=!1){this.getApi().selectElements(e,t)}deselectElement(e){this.getApi().deselectElement(e)}toggleSelection(e){this.getApi().toggleSelection(e)}clearSelection(){this.getApi().clearSelection()}selectAll(){this.getApi().selectAll()}getSelectedElements(){return this.getApi().getSelectedElements()}updateSelectedElements(e){this.getApi().updateSelectedElements(e)}removeSelectedElements(){this.getApi().removeSelectedElements()}isSelected(e){return this.getApi().isSelected(e)}clearSelectionBox(){this.getApi().clearSelectionBox()}transformSelectedElements(e){this.getApi().transformSelectedElements(e)}setSelectionBox(e){this.getApi().setSelectionBox(e)}updateBoundingBox(){this.getApi().updateBoundingBox()}getClipboardInfo(){return this.getApi().getClipboardInfo()}copyElements(){this.getApi().copyElements()}cutElements(){this.getApi().cutElements()}pasteElements(){this.getApi().pasteElements()}duplicateElements(){this.getApi().duplicateElements()}deleteSelectedElements(){this.getApi().deleteSelectedElements()}bringToFront(){this.getApi().bringToFront()}bringForward(){this.getApi().bringForward()}sendBackward(){this.getApi().sendBackward()}sendToBack(){this.getApi().sendToBack()}groupSelectedElements(){this.getApi().groupSelectedElements()}ungroupSelectedElements(){this.getApi().ungroupSelectedElements()}lockElements(){this.getApi().lockElements()}unlockElements(){this.getApi().unlockElements()}alignElements(e){this.getApi().alignElements(e)}getCanvas(){return this.getApi().getCanvas()}setCanvasDimensions(e,t){this.getApi().setCanvasDimensions(e,t)}centerCanvas(){this.getApi().centerCanvas()}fullScreen(){this.getApi().fullScreen()}exitFullScreen(e,t){this.getApi().exitFullScreen(e,t)}resetCanvas(){this.getApi().resetCanvas()}setZoom(e){this.getApi().setZoom(e)}zoomIn(){this.getApi().zoomIn()}zoomOut(){this.getApi().zoomOut()}resetZoom(){this.getApi().resetZoom()}zoomToFit(){this.getApi().zoomToFit()}zoomToSelection(){this.getApi().zoomToSelection()}pan(e,t){this.getApi().pan(e,t)}panTo(e,t){this.getApi().panTo(e,t)}resetPan(){this.getApi().resetPan()}async save(e=se.Base64,t="whiteboard"){return this.getApi().save(e,t)}addImage(e){this.getApi().addImage(e)}async importImageFile(e,t,n){return this.getApi().importImageFile(e,t,n)}exportData(){return this.getApi().exportData()}importData(e){this.getApi().importData(e)}undo(){return this.getApi().undo()}redo(){return this.getApi().redo()}getCanUndoSignal(){return this.getApi().getCanUndoSignal()}getCanRedoSignal(){return this.getApi().getCanRedoSignal()}clearHistory(){this.getApi().clearHistory()}getConfig(){return this.getApi().getConfig()}updateConfig(e){this.getApi().updateConfig(e)}updateConfigValue(e,t){this.getApi().updateConfigValue(e,t)}addLayer(e){this.getApi().addLayer(e)}removeLayer(e){return this.getApi().removeLayer(e)}duplicateLayer(e){this.getApi().duplicateLayer(e)}setActiveLayer(e){return this.getApi().setActiveLayer(e)}getActiveLayerId(){return this.getApi().getActiveLayerId()}toggleLayerVisibility(e){return this.getApi().toggleLayerVisibility(e)}toggleLayerLock(e){return this.getApi().toggleLayerLock(e)}renameLayer(e,t){return this.getApi().renameLayer(e,t)}setLayerOpacity(e,t){return this.getApi().setLayerOpacity(e,t)}setLayerBlendMode(e,t){return this.getApi().setLayerBlendMode(e,t)}moveLayerUp(e){return this.getApi().moveLayerUp(e)}moveLayerDown(e){return this.getApi().moveLayerDown(e)}reorderLayersByIndex(e,t){return this.getApi().reorderLayersByIndex(e,t)}toggleGrid(){this.getApi().toggleGrid()}toggleSnapToGrid(){this.getApi().toggleSnapToGrid()}setGridSize(e){this.getApi().setGridSize(e)}setActiveTool(e){this.getApi().setActiveTool(e)}getActiveTool(){return this.getApi().getActiveTool()}setToolEnabled(e,t){return this.getApi().setToolEnabled(e,t)}setEnabledTools(e){this.getApi().setEnabledTools(e)}setCursor(e){this.getApi().setCursor(e)}resetCursor(){this.getApi().resetCursor()}screenToCanvas(e,t){return this.getApi().screenToCanvas(e,t)}canvasToScreen(e,t){return this.getApi().canvasToScreen(e,t)}getSelectionBoxSignal(){return this.getApi().getSelectionBoxSignal()}getBoundingBoxSignal(){return this.getApi().getBoundingBoxSignal()}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac})}return i})(),bd=(()=>{class i{elementRef;apiService;_cd;resizeObserver;constructor(e,t,n){this.elementRef=e,this.apiService=t,this._cd=n}ngOnInit(){this.resizeObserver=new ResizeObserver(([e])=>{if(e.target===this.elementRef.nativeElement){const{fullScreen:t,center:n}=this.apiService.getConfig();setTimeout(()=>{t&&this.apiService.fullScreen(),n&&!t&&this.apiService.centerCanvas(),this._cd.detectChanges()},0)}}),this.resizeObserver.observe(this.elementRef.nativeElement)}ngOnDestroy(){this.resizeObserver?.disconnect()}static ɵfac=function(t){return new(t||i)(E(Ue),E(Ze),E(Dt))};static ɵdir=B({type:i,selectors:[["","resizeHandler",""]]})}return i})();const vd={cut:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Zm9 0a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 13 3.5V12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 1 4.5 2H5V1Zm1 0v1h4V1H6Z"/></svg>',copy:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/></svg>',paste:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-7Zm-1.5.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-9ZM6 1a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1H6Z"/></svg>',duplicate:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M11 2a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7Zm4.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0Z"/></svg>',"select-all":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13ZM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5h-13A.5.5 0 0 1 1 13V3.5Z"/></svg>',delete:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>',order:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V3.5A.5.5 0 0 1 8 3Zm0 7a.5.5 0 0 1 .5.5V12H10a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 8 10Zm-5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>',"bring-to-front":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 9v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9Z"/></svg>',"bring-forward":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Zm1 0v4h6V2H2Zm6 6v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm6-6v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Zm-1 0H9v4h5V2Z"/></svg>',"send-backward":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2Zm1 0v4h5V2H1Zm0 6v6a1 1 0 0 1 1 1h6a1 1 0 0 1-1-1V8a1 1 0 0 1-1-1H1Zm8-6v4a1 1 0 0 1 1 1h5a1 1 0 0 1 1-1V2a1 1 0 0 1-1-1H9a1 1 0 0 1 1 1Z"/></svg>',"send-to-back":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm8 7h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9Z"/></svg>',align:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-13ZM1 1.5a.5.5 0 0 1 .5-.5H4v3.5H1V1.5ZM5 4.5h6V1H5v3.5ZM12 5h3v6h-3V5Zm-1 6H5V5h6v6Zm-7-6H1v6h3V5Z"/></svg>',"align-left":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 1a.5.5 0 0 0-1 0v14a.5.5 0 0 0 1 0V1Zm3 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V1Zm0 7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8Z"/></svg>',"align-center":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13A.5.5 0 0 0 8 1ZM2 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1Zm2 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1Z"/></svg>',"align-right":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M14.5 1a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V1Zm-2.5 0a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h7a.5.5 0 0 1-.5-.5V1Zm0 7a.5.5 0 0 1 .5-.5H2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h10a.5.5 0 0 1-.5-.5V8Z"/></svg>',"align-top":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 1.5a.5.5 0 0 0 1 0V1h13v.5a.5.5 0 0 0 1 0V1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v.5Zm4 1a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Zm6 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"/></svg>',"align-middle":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 8a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 0-1H1.5A.5.5 0 0 0 1 8Zm3.5-5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5Zm7 0a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5Z"/></svg>',"align-bottom":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 14.5a.5.5 0 0 1 1 0V15h13v-.5a.5.5 0 0 1 1 0V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-.5Zm4-1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-1 0v10a.5.5 0 0 0 .5.5Zm6 0a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v7a.5.5 0 0 0 .5.5Z"/></svg>',distribute:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Zm14 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM5 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Z"/></svg>',"distribute-horizontal":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Zm14 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM4 5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm5 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5Z"/></svg>',"distribute-vertical":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 1a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 14a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13ZM5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm0 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z"/></svg>',flip:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0ZM2.5 2A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1h-4Zm7 0a.5.5 0 0 0 0 1h4a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-4a.5.5 0 0 0 0 1h4a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2h-4Z"/></svg>',"flip-horizontal":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0ZM2.5 2A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1h-4Zm7 0a.5.5 0 0 0 0 1h4a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-4a.5.5 0 0 0 0 1h4a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2h-4Z"/></svg>',"flip-vertical":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M.5 8a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H1A.5.5 0 0 0 .5 8ZM2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4Zm0 11v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5Z"/></svg>',group:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3A1.5 1.5 0 0 0 0 4.5v7A1.5 1.5 0 0 0 1.5 13H7a.5.5 0 0 0 0-1H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7a.5.5 0 0 0 0-1H1.5ZM9 4a.5.5 0 0 0 0 1h5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H9a.5.5 0 0 0 0 1h5.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 3H9Z"/></svg>',ungroup:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h5A1.5 1.5 0 0 1 8 1.5V7H1.5A1.5 1.5 0 0 1 0 5.5v-4Zm8 0V7h6.5A1.5 1.5 0 0 0 16 5.5v-4A1.5 1.5 0 0 0 14.5 0h-5A1.5 1.5 0 0 0 8 1.5Zm-8 8A1.5 1.5 0 0 1 1.5 8H8v6.5A1.5 1.5 0 0 1 6.5 16h-5A1.5 1.5 0 0 1 0 14.5v-5Zm8 0V16h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 14 8H8Z"/></svg>',lock:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/></svg>',unlock:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/></svg>',"arrow-right":'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'};let eo=(()=>{class i{apiService;contextMenuVisibleSignal=D(!1);contextMenuPositionSignal=D({x:0,y:0});containerBoundsSignal=D(null);focusedItemIndexSignal=D(-1);focusedSubmenuIdSignal=D(null);constructor(e){this.apiService=e}allMenuItemsCache=I(()=>{const e=this.getContextMenuSections()(),t=[];return e.forEach(n=>{n.items.forEach(s=>{t.push(s),s.submenu&&this.focusedSubmenuIdSignal()===s.id&&s.submenu.forEach(r=>{t.push(r)})})}),t});getContextMenuVisible(){return this.contextMenuVisibleSignal.asReadonly()}getContextMenuPosition(){return this.contextMenuPositionSignal.asReadonly()}getContainerBounds(){return this.containerBoundsSignal.asReadonly()}getFocusedItemIndex(){return this.focusedItemIndexSignal.asReadonly()}getFocusedSubmenuId(){return this.focusedSubmenuIdSignal.asReadonly()}showContextMenu(e,t,n){this.contextMenuPositionSignal.set({x:e,y:t}),this.containerBoundsSignal.set(n||null),this.contextMenuVisibleSignal.set(!0),this.focusedItemIndexSignal.set(-1),this.focusedSubmenuIdSignal.set(null)}hideContextMenu(){this.contextMenuVisibleSignal.set(!1),this.focusedItemIndexSignal.set(-1),this.focusedSubmenuIdSignal.set(null)}getContextMenuSections(){return I(()=>{const e=this.apiService.getSelectedElements(),t=e.length>0,n=e.length>1,s=e.length>2,r=this.apiService.getClipboardInfo(),a=r!==null&&r.elementCount>0,l=t&&e.some(p=>p.groupId),c=t&&e.some(p=>p.locked),d=t&&e.some(p=>!p.locked);return[{id:"clipboard",items:[{id:"cut",label:"Cut",shortcut:"Ctrl+X",enabled:t,visible:t,action:()=>this.apiService.cutElements()},{id:"copy",label:"Copy",shortcut:"Ctrl+C",enabled:t,visible:t,action:()=>this.apiService.copyElements()},{id:"paste",label:"Paste",shortcut:"Ctrl+V",enabled:a,visible:a,action:()=>this.apiService.pasteElements()},{id:"duplicate",label:"Duplicate",shortcut:"Ctrl+D",enabled:t,visible:t,divider:!0,action:()=>this.apiService.duplicateElements()}]},{id:"selection",items:[{id:"select-all",label:"Select All",shortcut:"Ctrl+A",enabled:!0,visible:!0,action:()=>this.apiService.selectAll()},{id:"delete",label:"Delete",shortcut:"Del",enabled:t,visible:t,divider:!0,action:()=>this.apiService.deleteSelectedElements()}]},{id:"arrange",items:[{id:"order",label:"Order",enabled:t,visible:t,submenu:[{id:"bring-to-front",label:"Bring to Front",shortcut:"Ctrl+Shift+]",enabled:!0,visible:!0,action:()=>this.apiService.bringToFront()},{id:"bring-forward",label:"Bring Forward",shortcut:"Ctrl+]",enabled:!0,visible:!0,action:()=>this.apiService.bringForward()},{id:"send-backward",label:"Send Backward",shortcut:"Ctrl+[",enabled:!0,visible:!0,action:()=>this.apiService.sendBackward()},{id:"send-to-back",label:"Send to Back",shortcut:"Ctrl+Shift+[",enabled:!0,visible:!0,action:()=>this.apiService.sendToBack()}]},{id:"transform",label:"Transform",enabled:t,visible:t,submenu:[{id:"align-left",label:"Align Left",enabled:!0,visible:!0,action:()=>this.apiService.alignElements(N.Left)},{id:"align-center",label:"Align Center",enabled:!0,visible:!0,action:()=>this.apiService.alignElements(N.Center)},{id:"align-right",label:"Align Right",enabled:!0,visible:!0,divider:!0,action:()=>this.apiService.alignElements(N.Right)},{id:"align-top",label:"Align Top",enabled:!0,visible:!0,action:()=>this.apiService.alignElements(N.Top)},{id:"align-middle",label:"Align Middle",enabled:!0,visible:!0,action:()=>this.apiService.alignElements(N.Middle)},{id:"align-bottom",label:"Align Bottom",enabled:!0,visible:!0,divider:!0,action:()=>this.apiService.alignElements(N.Bottom)},{id:"distribute-horizontal",label:"Distribute Horizontally",enabled:s,visible:s,action:()=>this.apiService.distributeHorizontally()},{id:"distribute-vertical",label:"Distribute Vertically",enabled:s,visible:s,divider:!0,action:()=>this.apiService.distributeVertically()},{id:"flip-horizontal",label:"Flip Horizontal",enabled:!0,visible:!0,action:()=>this.apiService.flipHorizontal()},{id:"flip-vertical",label:"Flip Vertical",enabled:!0,visible:!0,action:()=>this.apiService.flipVertical()}]}]},{id:"object",items:[{id:"group",label:"Group",shortcut:"Ctrl+G",enabled:n,visible:n,action:()=>this.apiService.groupSelectedElements()},{id:"ungroup",label:"Ungroup",shortcut:"Ctrl+Shift+G",enabled:l,visible:l,action:()=>this.apiService.ungroupSelectedElements()},{id:"lock",label:"Lock",shortcut:"Ctrl+L",enabled:d,visible:d,action:()=>this.apiService.lockElements()},{id:"unlock",label:"Unlock",shortcut:"Ctrl+Shift+L",enabled:c,visible:c,action:()=>this.apiService.unlockElements()}]}].map(p=>({...p,items:p.items.filter(b=>b.visible)})).filter(p=>p.items.length>0)})}executeAction(e){try{e()}catch(t){console.error("Error executing context menu action:",t)}finally{this.hideContextMenu()}}focusNextItem(){const e=this.allMenuItemsCache(),t=e.filter(d=>d.enabled);if(t.length===0)return;const n=this.focusedItemIndexSignal(),s=n>=0?e[n]:null,a=((s?t.indexOf(s):-1)+1)%t.length,l=t[a],c=e.indexOf(l);this.focusedItemIndexSignal.set(c)}focusPreviousItem(){const e=this.allMenuItemsCache(),t=e.filter(d=>d.enabled);if(t.length===0)return;const n=this.focusedItemIndexSignal(),s=n>=0?e[n]:null,r=s?t.indexOf(s):-1,a=r<=0?t.length-1:r-1,l=t[a],c=e.indexOf(l);this.focusedItemIndexSignal.set(c)}focusFirstItem(){const e=this.allMenuItemsCache(),t=e.filter(r=>r.enabled);if(t.length===0)return;const n=t[0],s=e.indexOf(n);this.focusedItemIndexSignal.set(s)}focusLastItem(){const e=this.allMenuItemsCache(),t=e.filter(r=>r.enabled);if(t.length===0)return;const n=t[t.length-1],s=e.indexOf(n);this.focusedItemIndexSignal.set(s)}openFocusedSubmenu(){const e=this.allMenuItemsCache(),t=this.focusedItemIndexSignal();if(t<0||t>=e.length)return;const n=e[t];n.submenu&&n.enabled&&this.focusedSubmenuIdSignal.set(n.id)}closeFocusedSubmenu(){this.focusedSubmenuIdSignal.set(null)}executeFocusedAction(){const e=this.allMenuItemsCache(),t=this.focusedItemIndexSignal();if(t<0||t>=e.length)return;const n=e[t];n.enabled&&n.action?this.executeAction(n.action):n.submenu&&n.enabled&&this.openFocusedSubmenu()}getIcon(e){return e&&vd[e]||""}getAllMenuItems(){return this.allMenuItemsCache()}static ɵfac=function(t){return new(t||i)(V(Ze))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),Md=(()=>{class i{contextMenuService;contextMenu;isVisible;position;sections;containerBounds;focusedItem;hoveredItem=null;submenuPosition={left:0,top:0};submenuTimeout=null;constructor(e){this.contextMenuService=e,this.isVisible=this.contextMenuService.getContextMenuVisible(),this.position=this.contextMenuService.getContextMenuPosition(),this.sections=this.contextMenuService.getContextMenuSections(),this.containerBounds=this.contextMenuService.getContainerBounds(),this.focusedItem=I(()=>{const t=this.contextMenuService.getFocusedItemIndex()();return this.contextMenuService.getAllMenuItems()[t]||null})}ngOnInit(){this.position=I(()=>{const e=this.contextMenuService.getContextMenuPosition()(),t=this.containerBounds();let n=e.x,s=e.y;return t&&(n=e.x-t.left,s=e.y-t.top),this.adjustPosition(n,s)})}ngOnDestroy(){this.contextMenuService.hideContextMenu(),this.submenuTimeout&&clearTimeout(this.submenuTimeout)}onItemClick(e,t){if(e.enabled){if(e.submenu){t.stopPropagation();return}e.action&&this.contextMenuService.executeAction(e.action)}}onItemHover(e,t){if(this.submenuTimeout&&(clearTimeout(this.submenuTimeout),this.submenuTimeout=null),e.submenu&&e.enabled){this.hoveredItem=e;const n=t.currentTarget;this.calculateSubmenuPosition(n)}else this.hoveredItem=null}onItemLeave(){this.submenuTimeout&&clearTimeout(this.submenuTimeout),this.submenuTimeout=setTimeout(()=>{this.hoveredItem=null},100)}onSubmenuEnter(){this.submenuTimeout&&(clearTimeout(this.submenuTimeout),this.submenuTimeout=null)}onSubmenuLeave(){this.submenuTimeout&&clearTimeout(this.submenuTimeout),this.submenuTimeout=setTimeout(()=>{this.hoveredItem=null},100)}calculateSubmenuPosition(e){const t=e.getBoundingClientRect(),n=this.containerBounds();if(!n){this.submenuPosition={left:t.right+4,top:t.top-4};return}const s=200,r=4,a=t.left-n.left,l=t.right-n.left,c=t.top-n.top,g=this.contextMenu?.nativeElement?.getBoundingClientRect(),M=g?g.top-n.top:r,p=g?g.bottom-n.top:n.height-r;let b=l+r;const S=n.width-l-r,A=a-r;S<s&&A>S&&(b=a-s-r);let m=c;const K=(this.hoveredItem?.submenu?.length||0)*32+8;m+K>p&&(m=p-K),m<M&&(m=M),b<r&&(b=r),b+s>n.width-r&&(b=n.width-s-r),this.submenuPosition={left:b,top:m}}onKeyDown(e){if(this.isVisible())switch(e.key){case"Escape":e.preventDefault(),this.contextMenuService.hideContextMenu();break;case"ArrowDown":e.preventDefault(),this.contextMenuService.focusNextItem();break;case"ArrowUp":e.preventDefault(),this.contextMenuService.focusPreviousItem();break;case"ArrowRight":e.preventDefault(),this.contextMenuService.openFocusedSubmenu();break;case"ArrowLeft":e.preventDefault(),this.contextMenuService.closeFocusedSubmenu();break;case"Enter":e.preventDefault(),this.contextMenuService.executeFocusedAction();break;case"Home":e.preventDefault(),this.contextMenuService.focusFirstItem();break;case"End":e.preventDefault(),this.contextMenuService.focusLastItem();break}}onDocumentClick(e){if(this.isVisible()&&this.contextMenu?.nativeElement){const t=this.contextMenu.nativeElement,n=e.target;t.contains(n)||this.contextMenuService.hideContextMenu()}}adjustPosition(e,t){if(!this.contextMenu?.nativeElement)return{x:e,y:t};const s=this.contextMenu.nativeElement.getBoundingClientRect(),r=this.containerBounds();if(!r)return{x:e,y:t};let a=e,l=t;const c=10,d=400;e+s.width>r.width-c&&(a=Math.max(c,e-s.width)),a<c&&(a=c);const g=r.height-t-c,M=Math.min(s.height,d);if(M>g){const p=t-c;M<=p?l=t-M:p>g?l=t-Math.min(M,p):l=Math.max(c,r.height-M-c)}return l<c&&(l=c),l+M>r.height-c&&(l=r.height-M-c),{x:a,y:l}}isFocused(e){return this.focusedItem()===e}static ɵfac=function(t){return new(t||i)(E(eo))};static ɵcmp=nt({type:i,selectors:[["wb-context-menu"]],viewQuery:function(t,n){if(t&1&&at(tc,7),t&2){let s;lt(s=ct())&&(n.contextMenu=s.first)}},hostBindings:function(t,n){t&1&&v("keydown",function(r){return n.onKeyDown(r)},dt)("click",function(r){return n.onDocumentClick(r)},dt)},decls:6,vars:7,consts:[["contextMenu",""],[1,"context-menu",3,"click"],[1,"context-menu-content"],[1,"context-menu-section"],[1,"submenu",3,"left","top"],[1,"context-menu-item",3,"disabled","divider-after","has-submenu","active","focused"],[1,"context-menu-item",3,"click","mouseenter","mouseleave"],[1,"item-content"],[1,"item-label"],[1,"item-shortcut"],[1,"item-arrow"],[1,"submenu",3,"mouseenter","mouseleave","click"],[1,"context-menu-item","submenu-item",3,"disabled","divider-after","focused"],[1,"context-menu-item","submenu-item",3,"click"]],template:function(t,n){if(t&1){const s=H();u(0,"div",1,0),v("click",function(a){return C(s),y(a.stopPropagation())}),u(2,"div",2),Ce(3,sc,3,0,"div",3,Rn),h()(),Y(5,lc,3,4,"div",4)}t&2&&(ge("left",n.position().x,"px")("top",n.position().y,"px"),Ie("visible",n.isVisible()),f(3),ye(n.sections()),f(2),j(n.hoveredItem&&n.hoveredItem.submenu?5:-1))},dependencies:[kt],styles:['.context-menu[_ngcontent-%COMP%]{position:absolute;z-index:10000;opacity:0;visibility:hidden;transform:scale(.95);transition:all .1s ease-out;pointer-events:none}.context-menu.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:scale(1);pointer-events:auto}.context-menu-content[_ngcontent-%COMP%]{background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #00000026;padding:4px 0;min-width:200px;max-width:300px;max-height:400px;overflow-y:auto;-webkit-user-select:none;user-select:none}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:3px}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:3px}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.context-menu-section[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #f0f0f0;margin-bottom:4px;padding-bottom:4px}.context-menu-item[_ngcontent-%COMP%]{padding:8px 16px;cursor:pointer;transition:background-color .1s ease;position:relative}.context-menu-item[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#f5f5f5}.context-menu-item.focused[_ngcontent-%COMP%]:not(.disabled){background-color:#e3f2fd;outline:2px solid #2196f3;outline-offset:-2px}.context-menu-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.context-menu-item.divider-after[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:16px;right:16px;height:1px;background-color:#e0e0e0;margin-bottom:-4px}.item-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.item-label[_ngcontent-%COMP%]{flex:1;font-size:14px;color:#333;font-weight:400}.item-shortcut[_ngcontent-%COMP%]{font-size:12px;color:#666;margin-left:16px;font-family:Monaco,Menlo,Ubuntu Mono,monospace}.item-arrow[_ngcontent-%COMP%]{margin-left:8px;font-size:16px;color:#999}.context-menu-item.has-submenu[_ngcontent-%COMP%]{position:relative}.context-menu-item.has-submenu.active[_ngcontent-%COMP%]{background-color:#f5f5f5}.submenu[_ngcontent-%COMP%]{position:absolute;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #00000026;padding:4px 0;min-width:200px;max-width:300px;-webkit-user-select:none;user-select:none;z-index:10001;opacity:1;transform:scale(1);transition:opacity .1s ease,transform .1s ease}.submenu-item[_ngcontent-%COMP%]{padding:8px 16px}.submenu-item[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#f5f5f5}.context-menu-item.disabled[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%], .context-menu-item.disabled[_ngcontent-%COMP%]   .item-shortcut[_ngcontent-%COMP%], .context-menu-item.disabled[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%]{color:#999}@media (prefers-color-scheme: dark){.context-menu-content[_ngcontent-%COMP%], .submenu[_ngcontent-%COMP%]{background:#2a2a2a;border-color:#404040}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#3a3a3a}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#666}.context-menu-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#777}.context-menu-item[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#404040}.context-menu-item.focused[_ngcontent-%COMP%]:not(.disabled){background-color:#1e3a5f;outline:2px solid #1976d2}.context-menu-item.has-submenu.active[_ngcontent-%COMP%]{background-color:#404040}.submenu-item[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#404040}.item-label[_ngcontent-%COMP%]{color:#e0e0e0}.item-shortcut[_ngcontent-%COMP%]{color:#a0a0a0}.item-arrow[_ngcontent-%COMP%], .context-menu-item.disabled[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%], .context-menu-item.disabled[_ngcontent-%COMP%]   .item-shortcut[_ngcontent-%COMP%], .context-menu-item.disabled[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%]{color:#666}.context-menu-section[_ngcontent-%COMP%]:not(:last-child){border-bottom-color:#404040}.context-menu-item.divider-after[_ngcontent-%COMP%]:after{background-color:#404040}}']})}return i})(),ar=(()=>{class i{apiService=T(Ze);handleWheel(e){e.preventDefault(),e.ctrlKey?this.handleZoom(e):e.shiftKey?this.handleHorizontalPan(e):this.handleVerticalPan(e)}handleZoom(e){(e.deltaY<0?1:-1)>0?this.apiService.zoomIn():this.apiService.zoomOut()}handleHorizontalPan(e){const t=this.apiService.getConfig(),n=e.deltaY*ss/t.zoom;this.apiService.pan(n,0)}handleVerticalPan(e){const t=this.apiService.getConfig(),n=e.deltaY*ss/t.zoom;this.apiService.pan(0,n)}static ɵfac=function(t){return new(t||i)};static ɵprov=Z({token:i,factory:i.ɵfac})}return i})(),Hn=(()=>{class i{toolsService;configService;EventBusService;keyboardShortcutService;apiService;contextMenuService;dragDropService;wheelHandlerService;pointerDownSig=D(null);pointerMoveSig=D(null);pointerUpSig=D(null);isSpaceHeld=!1;constructor(e,t,n,s,r,a,l,c){this.toolsService=e,this.configService=t,this.EventBusService=n,this.keyboardShortcutService=s,this.apiService=r,this.contextMenuService=a,this.dragDropService=l,this.wheelHandlerService=c}onPointerDown(e){if(e.button===wt.MIDDLE){this.toolsService.pushTemporaryTool(x.Hand,un.PAN_MIDDLE),this.safeGetHandTool()?.handlePointerDown?.(e);return}if(e.button===wt.RIGHT||this.toolsService.hasTemporaryOverride()||!this.canDraw())return;this.EventBusService.emit(O.DrawStart,e),this.toolsService.getActiveToolInstance()?.handlePointerDown?.(e),e.isDoubleClick&&this.EventBusService.emit(O.ElementDoubleClicked,{target:e.target,clientX:e.clientX,clientY:e.clientY}),this.pointerDownSig.set(e)}onPointerMove(e){if(this.toolsService.hasTemporaryOverride()){this.safeGetHandTool()?.handlePointerMove?.(e);return}if(!this.canDraw())return;this.EventBusService.emit(O.Drawing,e),this.toolsService.getActiveToolInstance()?.handlePointerMove?.(e),this.pointerMoveSig.set(e)}onPointerUp(e){if(e.button===wt.MIDDLE&&this.toolsService.hasTemporaryOverride()){this.safeGetHandTool()?.handlePointerUp?.(e),this.toolsService.popTemporaryTool(un.PAN_MIDDLE);return}if(!this.canDraw())return;this.EventBusService.emit(O.DrawEnd),this.toolsService.getActiveToolInstance()?.handlePointerUp?.(e),this.pointerUpSig.set(e)}onKeyDown(e){if(e.code===In.SPACE&&!this.isSpaceHeld&&!this.isTextToolEditing()){this.isSpaceHeld=!0,this.toolsService.pushTemporaryTool(x.Hand,un.PAN_SPACE),e.preventDefault();return}this.toolsService.getActiveToolInstance()?.handleKeyDown?.(e),this.canUseKeyboardShortcuts()&&this.keyboardShortcutService.handleKeyDown(e)}onKeyUp(e){if(e.code===In.SPACE&&this.isSpaceHeld&&!this.isTextToolEditing()){this.isSpaceHeld=!1,this.toolsService.popTemporaryTool(un.PAN_SPACE),e.preventDefault();return}this.toolsService.getActiveToolInstance()?.handleKeyUp?.(e),this.canUseKeyboardShortcuts()&&this.keyboardShortcutService.handleKeyUp(e)}onWheel(e){this.canDraw()&&this.wheelHandlerService.handleWheel(e)}onDragOver(e){this.canDraw()&&e.dataTransfer&&(e.dataTransfer.dropEffect=Vc.COPY)}onDrop(e){if(!this.canDraw())return;const t=e.dataTransfer?.files;if(t&&t.length>0){this.dragDropService.handleFiles(t);return}const n=e.dataTransfer?.getData(Qn.HTML);if(n){this.dragDropService.handleText(n,e,!0);return}const s=e.dataTransfer?.getData(Qn.PLAIN);if(s){this.dragDropService.handleText(s,e,!1);return}const r=e.dataTransfer?.getData(Qn.JSON);if(r)try{const a=JSON.parse(r);Array.isArray(a)&&this.dragDropService.handleElements(a,e)}catch(a){console.warn("Failed to parse dropped JSON:",a)}}onContextMenu(e,t){if(!this.canDraw())return;const n=this.getTargetElementFromPointer(e),s=this.apiService.selectedElements(),r=s.length>0;n?s.some(l=>l.id===n.id)||this.apiService.selectElements(n):r||this.apiService.clearSelection(),this.contextMenuService.showContextMenu(e.clientX,e.clientY,t)}canDraw(){return this.configService.getConfig().drawingEnabled}canUseKeyboardShortcuts(){return this.configService.getConfig().keyboardShortcutsEnabled}isTextToolEditing(){return this.toolsService.getActiveToolType()!==x.Text?!1:this.toolsService.getActiveToolInstance()?.isEditing===!0}safeGetHandTool(){try{return this.toolsService.getToolInstance(x.Hand)}catch{return null}}getTargetElementFromPointer(e){const t=this.apiService.getElements();return Qs(e,t)}static ɵfac=function(t){return new(t||i)(V(St),V(De),V(Ee),V(sr),V(Ze),V(eo),V(ir),V(ar))};static ɵprov=Z({token:i,factory:i.ɵfac,providedIn:"root"})}return i})(),xd=(()=>{class i{configService=T(De);svgService=T(Hn);elementRef=T(Ue);isHovered=!1;lastInteractionTime=0;INTERACTION_TIMEOUT=500;static activeDirective=null;ngOnInit(){const e=this.elementRef.nativeElement;e.addEventListener("mouseenter",this.handleMouseEnter),e.addEventListener("mouseleave",this.handleMouseLeave),e.addEventListener("pointerdown",this.handleInteraction),e.addEventListener("pointerup",this.handleInteraction)}ngOnDestroy(){const e=this.elementRef.nativeElement;e.removeEventListener("mouseenter",this.handleMouseEnter),e.removeEventListener("mouseleave",this.handleMouseLeave),e.removeEventListener("pointerdown",this.handleInteraction),e.removeEventListener("pointerup",this.handleInteraction),i.activeDirective===this&&(i.activeDirective=null)}handleMouseEnter=()=>{this.isHovered=!0,i.activeDirective=this};handleMouseLeave=()=>{this.isHovered=!1};handleInteraction=()=>{this.lastInteractionTime=Date.now(),i.activeDirective=this};isActiveWhiteboard(){const e=Date.now()-this.lastInteractionTime<this.INTERACTION_TIMEOUT;return this.isHovered||e||i.activeDirective===this}onGlobalKeyDown(e){this.configService.getConfig().keyboardShortcutsEnabled&&this.isActiveWhiteboard()&&this.svgService.onKeyDown(e)}onGlobalKeyUp(e){this.configService.getConfig().keyboardShortcutsEnabled&&this.isActiveWhiteboard()&&this.svgService.onKeyUp(e)}static ɵfac=function(t){return new(t||i)};static ɵdir=B({type:i,selectors:[["","globalKeyboard",""]],hostBindings:function(t,n){t&1&&v("keydown",function(r){return n.onGlobalKeyDown(r)},Ot)("keyup",function(r){return n.onGlobalKeyUp(r)},Ot)}})}return i})(),wd=(()=>{class i{svgService;elementRef=T(Ue);lastX;lastY;lastClickTime=0;lastClickX=0;lastClickY=0;DOUBLE_CLICK_THRESHOLD=300;DOUBLE_CLICK_DISTANCE=10;constructor(e){this.svgService=e}onPointerDown(e){if(e.button!==wt.RIGHT&&e.preventDefault(),e.currentTarget&&e.currentTarget.setPointerCapture(e.pointerId),e.button===wt.RIGHT)return;const t=Date.now(),n=e.clientX,s=e.clientY;if(this.lastClickTime&&t-this.lastClickTime<this.DOUBLE_CLICK_THRESHOLD&&Math.abs(n-this.lastClickX)<this.DOUBLE_CLICK_DISTANCE&&Math.abs(s-this.lastClickY)<this.DOUBLE_CLICK_DISTANCE){const a=this.createPointerInfo(e);a.isDoubleClick=!0,this.svgService.onPointerDown(a),this.lastClickTime=0;return}this.lastClickTime=t,this.lastClickX=n,this.lastClickY=s;const r=this.createPointerInfo(e);this.svgService.onPointerDown(r)}onPointerMove(e){if(e.clientX===this.lastX&&e.clientY===this.lastY||(this.lastX=e.clientX,this.lastY=e.clientY,e.buttons&2))return;const t=this.createPointerInfo(e);this.svgService.onPointerMove(t)}onPointerUp(e){if(this.lastX=e.clientX,this.lastY=e.clientY,e.currentTarget&&e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),e.button===wt.RIGHT)return;const t=this.createPointerInfo(e);this.svgService.onPointerUp(t)}onWheel(e){e.preventDefault(),this.svgService.onWheel(e)}onKeyDown(e){e.preventDefault(),this.svgService.onKeyDown(e)}onKeyUp(e){this.svgService.onKeyUp(e)}onDragOver(e){e.preventDefault(),e.stopPropagation(),this.svgService.onDragOver(e)}onDragEnter(e){e.preventDefault(),e.stopPropagation()}onDrop(e){e.preventDefault(),e.stopPropagation(),this.svgService.onDrop(e)}onContextMenu(e){e.preventDefault();const t=this.createPointerInfo(e),n=e.currentTarget.getBoundingClientRect(),s=this.getPointerPosition(e),r={...t,clientX:n.left+s.x,clientY:n.top+s.y};this.svgService.onContextMenu(r,n)}createPointerInfo(e){const{x:t,y:n}=this.getPointerPosition(e);return{x:t,y:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,movementX:e.movementX,movementY:e.movementY,pressure:e.pressure,tangentialPressure:e.tangentialPressure,tiltX:e.tiltX,tiltY:e.tiltY,twist:e.twist,width:e.width,height:e.height,pointerType:e.pointerType,pointerId:e.pointerId,isPrimary:e.isPrimary,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,eventType:e.type,timeStamp:e.timeStamp,target:e.target}}getPointerPosition(e){const t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top;return{x:n,y:s}}static ɵfac=function(t){return new(t||i)(E(Hn))};static ɵdir=B({type:i,selectors:[["","svg",""]],hostBindings:function(t,n){t&1&&v("pointerdown",function(r){return n.onPointerDown(r)})("pointermove",function(r){return n.onPointerMove(r)})("pointerup",function(r){return n.onPointerUp(r)})("wheel",function(r){return n.onWheel(r)})("keydown",function(r){return n.onKeyDown(r)})("keyup",function(r){return n.onKeyUp(r)})("dragover",function(r){return n.onDragOver(r)})("dragenter",function(r){return n.onDragEnter(r)})("drop",function(r){return n.onDrop(r)})("contextmenu",function(r){return n.onContextMenu(r)})}})}return i})();const us="nw-resize",hs="ne-resize",gs="ns-resize",ps="ew-resize",Pd="grab",Od="default",Sd=45,Ed=135,Dd="rotate";let Id=(()=>{class i{cornerGrips=["nw","ne","se","sw"];sideGrips=["n","s","e","w"];transform(e,t){if(e.includes(Dd))return Pd;const n=this.isHorizontalOrientation(t);return this.cornerGrips.includes(e)?this.getCornerCursor(e,n):this.sideGrips.includes(e)?this.getSideCursor(e,n):Od}isHorizontalOrientation(e){const t=e%180;return t<Sd||t>Ed}getCornerCursor(e,t){return e==="nw"||e==="se"?t?us:hs:t?hs:us}getSideCursor(e,t){return e==="n"||e==="s"?t?gs:ps:t?ps:gs}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"gripCursor",type:i,pure:!0})}return i})(),kd=(()=>{class i{transform(e,t){if(e.isDeleting)return .1;let n=(e.opacity||100)/100;if(e.style?.opacity!==void 0&&(n*=e.style.opacity),e.layerId){const s=t.find(r=>r.id===e.layerId);s&&s.opacity!==void 0&&(n*=s.opacity)}return n}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"elementOpacity",type:i,pure:!0})}return i})();const Ad=.025,Td=.01;function Fd(i,o={}){const{streamline:e=.5,size:t=16,simulatePressure:n=!1}=o;if(i.length===0)return[];const s=.15+(1-e)*.85;let r=[...i],a=0;if(!n){let m=r[0];for(;m&&!(m[2]>=Ad);)r.shift(),m=r[0]}if(!n){let m=r[r.length-1];for(;m&&!(m[2]>=Td);)r.pop(),m=r[r.length-1]}if(r.length===0){const m=i[0];return m&&typeof m[0]=="number"&&typeof m[1]=="number"&&!isNaN(m[0])&&!isNaN(m[1])?[Xc(m)]:[]}let l=r[1];for(;l&&!(ei(l,r[0])>(t/3)**2);)r[0][2]=Math.max(r[0][2],l[2]),r.splice(1,1),l=r[1];const c=r.pop();if(!c)return[];const d=c;for(l=r[r.length-1];l&&!(ei(l,d)>(t/3)**2);)r.pop(),l=r[r.length-1],a++;r.push(d);const g=o.last||!o.simulatePressure||r.length>1&&ei(r[r.length-1],r[r.length-2])<t**2||a>0;if(r.length===2&&o.simulatePressure){const m=r[1];r=r.slice(0,-1);for(let P=1;P<5;P++){const W=ls(r[0],m,P/4);W[2]=(r[0][2]+(m[2]-r[0][2]))*P/4,r.push(W)}}const M=[r[0]];let p=0,b=M[0],S,A;g&&e>0&&r.push(r[r.length-1]);for(let m=1,P=r.length;m<P;m++)S=!s||o.last&&m===P-1?r[m]:ls(r[m],b,1-s),!Kc(b,S)&&(A=Gc(S,b),p+=A,!(m<4&&p<t)&&(b=S,M.push(S)));return M}function Ld(i,o=!1){const e=i.length;if(e===0)return"";if(e===1){const r=i[0];if(!r||r.length<2||isNaN(r[0])||isNaN(r[1]))return"";const a=2;return`M ${r[0]} ${r[1]} m -${a}, 0 a ${a},${a} 0 1,0 ${a*2},0 a ${a},${a} 0 1,0 -${a*2},0`}let t=i[0],n=i[1];if(e===2)return`M${vt(t)}L${vt(n)}`;let s="";for(let r=2,a=e-1;r<a;r++)t=i[r],n=i[r+1],s+=Mt(t,n);return o?`M${Mt(i[0],i[1])}Q${vt(i[1])}${Mt(i[1],i[2])}T${s}${Mt(i[e-1],i[0])}${Mt(i[0],i[1])}Z`:`M${vt(i[0])}Q${vt(i[1])}${Mt(i[1],i[2])}${i.length>3?"T":""}${s}L${vt(i[e-1])}`}function vt(i){return`${kn(i[0])},${kn(i[1])} `}function Mt(i,o){return`${kn((i[0]+o[0])/2)},${kn((i[1]+o[1])/2)} `}function kn(i){return Math.round(i*1e4)/1e4}let Bd=(()=>{class i{transform(e,t){if(!e||e.length===0)return"";const n=Fd(e,t);return Ld(n)}static ɵfac=function(t){return new(t||i)};static ɵpipe=ce({name:"pointsToPath",type:i,pure:!0})}return i})(),zd=(()=>{class i{svgContainer;apiService=T(Ze);configService=T(De);toolsService=T(St);selectionService=T(Jt);canvasService=T(Tt);svgService=T(Hn);config=this.configService.getConfigSignal();elements=this.apiService.allElements;layers=this.apiService.layers;selectedToolSignal=this.toolsService.selectedTool;selectionBoxSignal=this.selectionService.getSelectionBoxSignal();boundingBoxSignal=this.selectionService.getBoundingBoxSignal();transform=this.canvasService.getTransform();filteredElements=I(()=>{const e=this.layers(),t=this.elements(),n=l=>l.slice().sort((c,d)=>{const g=c.layerId?e.find(S=>S.id===c.layerId):void 0,M=d.layerId?e.find(S=>S.id===d.layerId):void 0,p=(g?.zIndex??0)*1e3+(c.zIndex??0),b=(M?.zIndex??0)*1e3+(d.zIndex??0);return p-b}),s=e.filter(l=>l.visible).map(l=>l.id);if(s.length===0)return[];const r=t.filter(l=>!l.layerId||s.includes(l.layerId));return n(r).map(l=>({...l,transform:this.buildTransform(l),isLocked:this.computeIsLocked(l,e),blendMode:this.computeBlendMode(l,e)}))});buildTransform(e){const t=e.scaleX??1,n=e.scaleY??1;return`translate(${e.x},${e.y}) rotate(${e.rotation}) scale(${t},${n})`}computeIsLocked(e,t){return e.layerId&&t.find(s=>s.id===e.layerId)?.locked||!1}computeBlendMode(e,t){return e.layerId&&t.find(s=>s.id===e.layerId)?.blendMode||"normal"}canvasWidth=I(()=>this.config().canvasWidth);canvasHeight=I(()=>this.config().canvasHeight);zoom=I(()=>this.config().zoom);x=I(()=>this.config().x);y=I(()=>this.config().y);canvasX=I(()=>this.config().canvasX);canvasY=I(()=>this.config().canvasY);gridSize=I(()=>this.config().gridSize);backgroundColor=I(()=>this.config().backgroundColor);enableGrid=I(()=>this.config().enableGrid);fullScreen=I(()=>this.config().fullScreen);svgDimensions=I(()=>{const e=this.fullScreen(),t=this.canvasWidth(),n=this.canvasHeight(),s=this.zoom();return e?{width:"100%",height:"100%"}:{width:`${t*s}px`,height:`${n*s}px`}});svgViewBox=I(()=>{if(this.fullScreen()){const e=this.canvasWidth()/this.zoom(),t=this.canvasHeight()/this.zoom();return`0 0 ${e} ${t}`}else return`0 0 ${this.canvasWidth()} ${this.canvasHeight()}`});contentTransform=I(()=>{const e=this.x(),t=this.y();return`translate(${e}, ${t})`});gridConfig=I(()=>{const e=this.x(),t=this.y(),n=this.zoom(),s=e%100,r=t%100;return{transform:`translate(${s}, ${r})`,width:(this.canvasWidth()+100)/n,height:(this.canvasHeight()+100)/n}});cursor=I(()=>this.toolsService.cursor());types=G;tools=x;ngAfterViewInit(){this.apiService.initializeWhiteboard(this.svgContainer.nativeElement)}static ɵfac=function(t){return new(t||i)};static ɵcmp=nt({type:i,selectors:[["ng-whiteboard-canvas"]],viewQuery:function(t,n){if(t&1&&at(cc,5),t&2){let s;lt(s=ct())&&(n.svgContainer=s.first)}},decls:18,vars:17,consts:[["svgContainer",""],["id","svgroot","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","tabindex","0","svg","","resizeHandler","","globalKeyboard",""],["id","svgcontent"],["id","smallGrid","patternUnits","userSpaceOnUse"],["fill","none","stroke","gray","stroke-width","0.5"],["id","grid","width","100","height","100","patternUnits","userSpaceOnUse"],["width","100","height","100","fill","url(#smallGrid)"],["d","M 100 0 H 0 V 100","fill","none","stroke","gray","stroke-width","2"],["id","arrow","refX","3","refY","3","markerWidth","6","markerHeight","6","stroke","context-stroke","fill","none","orient","auto"],["d","M 0 0 L 3 3 L 0 6"],["width","100%","height","100%"],[2,"pointer-events","all"],["transform-origin","center",1,"wb_element",3,"id","pointer-events","mix-blend-mode"],["stroke","blue","stroke-dasharray","5,5","fill","transparent"],["id","selectorParentGroup"],["x","-100","y","-100","fill","url(#grid)"],["transform-origin","center",1,"wb_element",3,"id"],["fill","none"],["preserveAspectRatio","none"],["marker-end","url(#arrow)"],["text-anchor","start","alignment-baseline","before-edge"],["id","selectorBox","fill","transparent","stroke","dodgerblue","stroke-width","1","cursor","move","pointer-events","all"],[4,"ngFor","ngForOf"],["id","selectorGrip_rotate_n","r","6","fill","white","stroke","green","stroke-width","1","cursor","grab"],["fill","transparent","stroke","transparent","pointer-events","all"],["width","10","height","10","fill","white","stroke","dodgerblue","stroke-width","1"],["r","6","fill","none","stroke","none","stroke-width","1"]],template:function(t,n){if(t&1&&(de(),u(0,"svg",1,0)(2,"svg",2)(3,"defs")(4,"pattern",3),k(5,"path",4),h(),u(6,"pattern",5),k(7,"rect",6)(8,"path",7),h(),u(9,"marker",8),k(10,"path",9),h()(),k(11,"rect",10),Y(12,uc,2,3,":svg:g"),u(13,"g",11),Ce(14,bc,9,12,":svg:g",12,Rn),Y(16,vc,1,4,":svg:rect",13),Y(17,Pc,6,13,":svg:g",14),h()()()),t&2){let s,r;zr("svgroot "+n.selectedToolSignal()),ge("cursor",n.cursor()),f(2),R("width",n.svgDimensions().width)("height",n.svgDimensions().height)("viewBox",n.svgViewBox())("x",n.canvasX())("y",n.canvasY()),f(2),R("width",n.gridSize())("height",n.gridSize()),f(),R("d","M "+n.gridSize()+" 0 H 0 V "+n.gridSize()),f(6),R("fill",n.backgroundColor()),f(),j(n.enableGrid()?12:-1),f(),R("transform",n.contentTransform()),f(),ye(n.filteredElements()),f(2),j((s=n.selectionBoxSignal())?16:-1,s),f(),j((r=n.boundingBoxSignal())?17:-1,r)}},dependencies:[kt,ii,Id,kd,Bd,wd,bd,xd],styles:["[_nghost-%COMP%]{width:inherit;height:inherit;min-width:inherit;min-height:inherit;max-width:inherit;max-height:inherit}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]{position:absolute;inset:0;-webkit-user-select:none;user-select:none;outline:none;width:inherit;height:inherit;min-width:inherit;min-height:inherit;max-width:inherit;max-height:inherit;background-size:cover;background-position:50%;background-repeat:no-repeat;touch-action:none}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .wb_element[_ngcontent-%COMP%], [_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .selectorGroup[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .handlers[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .onMove[_ngcontent-%COMP%]{cursor:move}[_nghost-%COMP%]   .svgroot[_ngcontent-%COMP%]   .onMove[_ngcontent-%COMP%]   .handlers[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .select[_ngcontent-%COMP%]   .wb_element[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0})}return i})(),Vd=(()=>{class i{configService=T(De);apiService=T(Ze);toolsService=T(St);eventBusService=T(Ee);cd=T(Dt);instanceService=T(rr);boardId=crypto.randomUUID();set config(e){this.configService.updateConfig(e,!1)}get config(){return this.configService.getConfig()}set data(e){e&&e!==this.apiService.getElements()&&this.apiService.setElements(e)}set selectedTool(e){e&&this.toolsService.getActiveToolType()!==e&&this.toolsService.setActiveTool(e)}ready=new X;destroyed=new X;drawStart=new X;drawing=new X;drawEnd=new X;elementsAdded=new X;elementsUpdated=new X;elementsSelected=new X;elementsRemoved=new X;elementDoubleClicked=new X;undo=new X;redo=new X;clear=new X;dataChange=new X;save=new X;imageAdded=new X;selectedToolChange=new X;configChange=new X;zoomChange=new X;eventsMap={[O.Ready]:this.ready,[O.Destroyed]:this.destroyed,[O.DrawStart]:this.drawStart,[O.Drawing]:this.drawing,[O.DrawEnd]:this.drawEnd,[O.ElementsAdded]:this.elementsAdded,[O.ElementsUpdated]:this.elementsUpdated,[O.ElementsSelected]:this.elementsSelected,[O.ElementsRemoved]:this.elementsRemoved,[O.ElementDoubleClicked]:this.elementDoubleClicked,[O.Undo]:this.undo,[O.Redo]:this.redo,[O.Clear]:this.clear,[O.DataChange]:this.dataChange,[O.Save]:this.save,[O.ImageAdded]:this.imageAdded,[O.ToolChange]:this.selectedToolChange,[O.ConfigChange]:this.configChange,[O.ZoomChange]:this.zoomChange};eventsSubscription;ngOnInit(){this.instanceService.register(this.boardId,this.apiService),this.eventsSubscription=this.eventBusService.listen().subscribe(e=>{const t=this.eventsMap[e.type];t&&(e.payload!==void 0?t.emit(e.payload):t.emit(),this.cd.markForCheck())})}ngOnDestroy(){this.instanceService.unregister(this.boardId),this.eventBusService.emit(O.Destroyed),this.eventsSubscription&&this.eventsSubscription.unsubscribe()}static ɵfac=function(t){return new(t||i)};static ɵcmp=nt({type:i,selectors:[["ng-whiteboard"]],inputs:{boardId:"boardId",config:"config",data:"data",selectedTool:"selectedTool"},outputs:{ready:"ready",destroyed:"destroyed",drawStart:"drawStart",drawing:"drawing",drawEnd:"drawEnd",elementsAdded:"elementsAdded",elementsUpdated:"elementsUpdated",elementsSelected:"elementsSelected",elementsRemoved:"elementsRemoved",elementDoubleClicked:"elementDoubleClicked",undo:"undo",redo:"redo",clear:"clear",dataChange:"dataChange",save:"save",imageAdded:"imageAdded",selectedToolChange:"selectedToolChange",configChange:"configChange",zoomChange:"zoomChange"},features:[te([Hn,Ze,Ft,Tt,or,Qi,Ji,Jt,qi,St,nr,Ee,De,sr,Nn,Xi,eo,ir,ar])],decls:3,vars:0,consts:[[2,"width","100%","height","100%","position","relative"]],template:function(t,n){t&1&&(u(0,"div",0),k(1,"ng-whiteboard-canvas")(2,"wb-context-menu"),h())},dependencies:[kt,zd,Md],styles:["[_nghost-%COMP%]{display:block;width:inherit;height:inherit;min-width:inherit;min-height:inherit;max-width:inherit;max-height:inherit}"],changeDetection:0})}return i})();const lr=(i,o)=>o.type,Rd=(i,o)=>o.name,Nd=(i,o)=>o.value,Hd=(i,o)=>o.id;function Wd(i,o){if(i&1&&(u(0,"option",52),w(1),h()),i&2){const e=o.$implicit;L("value",e.value)("title",e.description),f(),Me(" ",e.label," ")}}function Zd(i,o){if(i&1&&(u(0,"optgroup",51),Ce(1,Wd,2,3,"option",52,Nd),h()),i&2){const e=o.$implicit;L("label",e.name),f(),ye(e.modes)}}function Ud(i,o){if(i&1){const e=H();u(0,"div",43),v("click",function(n){return C(e),_().closeLayerContextMenu(),y(n.stopPropagation())})("keydown.escape",function(){C(e);const n=_();return y(n.closeLayerContextMenu())}),h(),u(1,"div",44),v("click",function(n){return C(e),y(n.stopPropagation())})("keydown",function(n){return C(e),y(n.stopPropagation())}),u(2,"button",45),v("click",function(){C(e);const n=_();return n.startRenameLayer(n.showLayerContextMenu()),y(n.closeLayerContextMenu())}),u(3,"span",11),w(4,"edit"),h(),w(5," Rename "),h(),k(6,"div",46),u(7,"button",47),v("click",function(){C(e);const n=_();return n.deleteLayer(n.showLayerContextMenu()),y(n.closeLayerContextMenu())}),u(8,"span",11),w(9,"delete"),h(),w(10," Delete "),h(),k(11,"div",46),u(12,"button",45),v("click",function(){C(e);const n=_();return n.duplicateLayer(n.showLayerContextMenu()),y(n.closeLayerContextMenu())}),u(13,"span",11),w(14,"content_copy"),h(),w(15," Duplicate "),h(),k(16,"div",46),u(17,"div",48)(18,"div",49)(19,"span",11),w(20,"layers"),h(),w(21," Blend Mode "),h(),u(22,"select",50),v("change",function(n){C(e);const s=_();return y(s.setLayerBlendMode(s.showLayerContextMenu(),n.target.value))})("click",function(n){return C(e),y(n.stopPropagation())}),Ce(23,Zd,3,1,"optgroup",51,Rd),h()()()}if(i&2){const e=_();f(),ge("position","fixed")("top",e.contextMenuPosition().top,"px")("left",e.contextMenuPosition().left,"px")("z-index",99999),f(6),L("disabled",e.layers().length===1),f(15),L("value",e.getLayerBlendMode(e.showLayerContextMenu())),f(),ye(e.blendModeCategories)}}function Yd(i,o){if(i&1){const e=H();u(0,"input",73,2),v("blur",function(n){C(e);const s=_().$implicit,r=_(2);return y(r.finishRenameLayer(n,s.id))})("keyup.enter",function(n){C(e);const s=_().$implicit,r=_(2);return y(r.finishRenameLayer(n,s.id))})("click",function(n){return C(e),y(n.stopPropagation())}),h()}if(i&2){const e=_().$implicit;L("value",e.name)}}function jd(i,o){if(i&1&&(u(0,"span",64),w(1),h()),i&2){const e=_().$implicit;f(),we(e.name)}}function $d(i,o){if(i&1){const e=H();u(0,"div",59),v("dragover",function(n){const s=C(e).$index,r=_(2);return y(r.onDragOver(n,s))})("dragleave",function(n){C(e);const s=_(2);return y(s.onDragLeave(n))})("drop",function(n){const s=C(e).$index,r=_(2);return y(r.onDrop(n,s))}),u(1,"div",60),v("click",function(){const n=C(e).$implicit,s=_(2);return y(s.switchToLayer(n.id))})("keyup.enter",function(){const n=C(e).$implicit,s=_(2);return y(s.switchToLayer(n.id))})("keyup.space",function(){const n=C(e).$implicit,s=_(2);return y(s.switchToLayer(n.id))}),u(2,"div",61),v("dragstart",function(n){const s=C(e).$index,r=_(2);return y(r.onDragStart(n,s))})("dragend",function(){C(e);const n=_(2);return y(n.onDragEnd())}),u(3,"span",11),w(4,"drag_indicator"),h()(),u(5,"div",62),Y(6,Yd,2,1,"input",63)(7,jd,2,1,"span",64),u(8,"span",65),w(9),h(),u(10,"div",66),v("mousedown",function(n){return C(e),y(n.stopPropagation())})("dragstart",function(n){return C(e),n.preventDefault(),y(n.stopPropagation())}),u(11,"span",67),w(12),h(),u(13,"input",68),v("input",function(n){const s=C(e).$implicit,r=_(2);return y(r.setLayerOpacity(s.id,n.target.value/100))})("pointerdown",function(n){return C(e),y(n.stopPropagation())})("click",function(n){return C(e),y(n.stopPropagation())})("dragstart",function(n){return C(e),n.preventDefault(),y(n.stopPropagation())}),h()()()(),u(14,"div",69)(15,"button",70),v("click",function(n){const s=C(e).$implicit;return _(2).toggleLayerVisibility(s.id),y(n.stopPropagation())}),u(16,"span",11),w(17),h()(),u(18,"button",70),v("click",function(n){const s=C(e).$implicit;return _(2).toggleLayerLock(s.id),y(n.stopPropagation())}),u(19,"span",11),w(20),h()(),u(21,"div",71)(22,"button",72,1),v("click",function(n){const s=C(e).$implicit,r=_(2);return y(r.toggleLayerContextMenu(n,s.id))}),u(24,"span",11),w(25,"more_vert"),h()()()()()}if(i&2){const e=o.$implicit,t=_(2);Ie("active",t.activeLayerId()===e.id)("locked-layer",e.locked),R("data-locked",e.locked)("data-visible",e.visible)("aria-label","Switch to "+e.name+(e.locked?" (locked - no editing allowed)":"")),f(6),j(t.editingLayerId()===e.id?6:7),f(3),Me("",e.elements.length," elements"),f(3),Me("",t.getLayerOpacityPercent(e.id),"%"),f(),L("value",t.getLayerOpacityPercent(e.id))("disabled",e.locked),R("aria-label","Layer opacity: "+t.getLayerOpacityPercent(e.id)+"%"),f(2),L("title",e.visible?"Hide layer":"Show layer"),f(2),we(e.visible?"visibility":"visibility_off"),f(),L("title",e.locked?"Unlock layer (allow editing)":"Lock layer (prevent editing)"),f(2),we(e.locked?"lock":"lock_open")}}function Gd(i,o){if(i&1){const e=H();u(0,"div",53),v("click",function(n){return C(e),y(n.stopPropagation())})("keyup",function(n){return C(e),y(n.stopPropagation())}),u(1,"div",54)(2,"span",55),w(3,"Layers"),h(),u(4,"button",56),v("click",function(){C(e);const n=_();return y(n.addLayer())}),u(5,"span",11),w(6,"add"),h()()(),u(7,"div",57),v("scroll",function(){C(e);const n=_();return y(n.onLayersListScroll())}),Ce(8,$d,26,17,"div",58,Hd),h()()}if(i&2){const e=_();f(8),ye(e.layers())}}function Xd(i,o){if(i&1){const e=H();u(0,"input",74,3),v("blur",function(n){C(e);const s=_();return y(s.finishEditingTitle(n))})("keyup.enter",function(n){C(e);const s=_();return y(s.finishEditingTitle(n))}),h()}if(i&2){const e=_();L("value",e.boardTitle())}}function Kd(i,o){if(i&1){const e=H();u(0,"button",75),v("click",function(){C(e);const n=_();return y(n.startEditingTitle())}),u(1,"span",11),w(2,"dashboard"),h(),u(3,"span",76),w(4),h(),u(5,"span",77),w(6,"edit"),h()()}if(i&2){const e=_();f(4),we(e.boardTitle())}}function Jd(i,o){if(i&1){const e=H();u(0,"div",19)(1,"button",78),v("click",function(){C(e);const n=_();return y(n.toggleFullscreen())}),u(2,"span",11),w(3),h(),w(4),h(),k(5,"div",79),u(6,"button",78),v("click",function(){C(e);const n=_();return y(n.toggleGrid())}),u(7,"span",11),w(8),h(),w(9," Toggle Grid "),h(),u(10,"button",78),v("click",function(){C(e);const n=_();return y(n.clear())}),u(11,"span",11),w(12,"clear_all"),h(),w(13," Clear Board "),h(),u(14,"button",78),v("click",function(){C(e);const n=_();return y(n.saveAsImage())}),u(15,"span",11),w(16,"download"),h(),w(17," Save as PNG "),h(),u(18,"button",78),v("click",function(){C(e);const n=_();return y(n.exportBoard())}),u(19,"span",11),w(20,"file_download"),h(),w(21," Export Board "),h(),u(22,"input",80,4),v("change",function(n){C(e);const s=_();return y(s.importBoard(n))}),h(),u(24,"button",78),v("click",function(){C(e);const n=ro(23);return y(n.click())}),u(25,"span",11),w(26,"file_upload"),h(),w(27," Import Board "),h(),u(28,"input",81,5),v("change",function(n){C(e);const s=_();return y(s.uploadImage(n))}),h(),u(30,"button",78),v("click",function(){C(e);const n=ro(29);return y(n.click())}),u(31,"span",11),w(32,"image"),h(),w(33," Add Image "),h()()}if(i&2){const e=_();f(3),we(e.isFullscreen()?"fullscreen_exit":"fullscreen"),f(),Me(" ",e.isFullscreen()?"Exit Fullscreen":"Enter Fullscreen"," "),f(4),we(e.config().enableGrid?"check_box":"check_box_outline_blank")}}function qd(i,o){i&1&&(u(0,"div",23)(1,"p"),w(2,"Press "),u(3,"kbd"),w(4,"ESC"),h(),w(5," or click "),u(6,"span",11),w(7,"close"),h(),w(8," to exit fullscreen"),h()())}function Qd(i,o){if(i&1){const e=H();u(0,"button",82),v("click",function(){const n=C(e).$implicit,s=_();return y(s.selectTool(n.type))}),h()}if(i&2){const e=o.$implicit,t=_();Ie("active",t.selectedTool()===e.type),L("title",e.name)("innerHTML",e.icon,bs)}}function eu(i,o){if(i&1){const e=H();u(0,"button",88),v("click",function(){const n=C(e).$implicit,s=_(3);return y(s.selectTool(n.type))}),k(1,"span",89),w(2),h()}if(i&2){const e=o.$implicit,t=_(3);Ie("active",t.selectedTool()===e.type),f(),L("innerHTML",e.icon,bs),f(),Me(" ",e.name," ")}}function tu(i,o){if(i&1&&(u(0,"div",86),Ce(1,eu,3,4,"button",87,lr),h()),i&2){const e=_(2);f(),ye(e.overflowTools())}}function nu(i,o){if(i&1){const e=H();k(0,"div",83),u(1,"div",84)(2,"button",85),v("click",function(){C(e);const n=_();return y(n.toggleToolsOverflow())}),u(3,"span",11),w(4,"more_horiz"),h()(),Y(5,tu,3,0,"div",86),h()}if(i&2){const e=_();f(5),j(e.showToolsOverflow()?5:-1)}}function iu(i,o){i&1&&(u(0,"span",93),w(1,"check"),h())}function ou(i,o){if(i&1){const e=H();u(0,"button",92),v("click",function(){const n=C(e).$implicit,s=_(2);return y(s.selectColor(n))}),Y(1,iu,2,0,"span",93),h()}if(i&2){const e=o.$implicit,t=_(2);ge("background",e),Ie("selected",t.selectedColor()===e),L("title",e),f(),j(t.selectedColor()===e?1:-1)}}function su(i,o){if(i&1&&(u(0,"div",36)(1,"div",90),Ce(2,ou,2,6,"button",91,Fi),h()()),i&2){const e=_();f(2),ye(e.quickColors)}}function ru(i,o){i&1&&(u(0,"span",93),w(1,"check"),h())}function au(i,o){if(i&1){const e=H();u(0,"button",92),v("click",function(){const n=C(e).$implicit,s=_(2);return y(s.selectBackgroundColor(n))}),Y(1,ru,2,0,"span",93),h()}if(i&2){const e=o.$implicit,t=_(2);ge("background",e),Ie("selected",t.config().backgroundColor===e),L("title",e),f(),j(t.config().backgroundColor===e?1:-1)}}function lu(i,o){if(i&1&&(u(0,"div",36)(1,"div",90),Ce(2,au,2,6,"button",91,Fi),h()()),i&2){const e=_();f(2),ye(e.quickColors)}}function cu(i,o){if(i&1){const e=H();u(0,"button",95),v("click",function(){const n=C(e).$implicit,s=_(2);return y(s.selectWidth(n))}),k(1,"div",96),u(2,"span",97),w(3),h()()}if(i&2){const e=o.$implicit,t=_(2);Ie("selected",t.selectedWidth()===e),f(),ge("height",e,"px")("background",t.selectedColor()),f(2),Me("",e,"px")}}function du(i,o){if(i&1&&(u(0,"div",42),Ce(1,cu,4,7,"button",94,Fi),h()),i&2){const e=_();f(),ye(e.strokeWidths)}}class An{whiteboardService=T(ds);sanitizer=T(Rr);_appInit=T(Xe);_destroy=new Be;clickOutsideListener;draggedLayerIndex=null;draggedElement=null;data=[];dataChange=new X;boardId="whiteboard-app";boardSignals=this.whiteboardService.signals(this.boardId);layers=this.boardSignals.layers;activeLayerId=this.boardSignals.activeLayerId;activeLayer=this.boardSignals.activeLayer;selectedTool=this.boardSignals.selectedTool;canUndo=this.boardSignals.canUndo;canRedo=this.boardSignals.canRedo;availableTools=this.boardSignals.availableTools;selectedElements=this.boardSignals.selectedElements;whiteboardConfig=this.boardSignals.config;formatType=se;toolType=x;selectedColor=I(()=>{const o=this.selectedElements();return o.length>0&&o[0].style?.strokeColor?o[0].style.strokeColor:this.config().strokeColor||"#000000"});selectedWidth=I(()=>{const o=this.selectedElements();return o.length>0&&o[0].style?.strokeWidth!==void 0?o[0].style.strokeWidth:this.config().strokeWidth||3});zoomLevel=I(()=>{const o=this.whiteboardConfig().zoom||1;return Math.round(o*100)});showColorPalette=D(!1);showBackgroundPalette=D(!1);showWidthMenu=D(!1);showMoreMenu=D(!1);isFullscreen=D(!1);showFullscreenHint=D(!1);boardTitle=D("Untitled Board");isEditingTitle=D(!1);showLayersMenu=D(!1);editingLayerId=D(null);showLayerContextMenu=D(null);contextMenuPosition=D({top:0,left:0});showToolsOverflow=D(!1);maxVisibleTools=D(6);blendModes=rt;blendModeCategories=[{name:"Normal",modes:rt.filter(o=>o.category==="normal")},{name:"Darken",modes:rt.filter(o=>o.category==="darken")},{name:"Lighten",modes:rt.filter(o=>o.category==="lighten")},{name:"Contrast",modes:rt.filter(o=>o.category==="contrast")},{name:"Component",modes:rt.filter(o=>o.category==="component")}];primaryTools=I(()=>{const o=this.availableTools(),e=[x.Hand,x.Select,x.Pen,x.Eraser];return o.filter(t=>e.includes(t.type)&&t.enabled).map(t=>({type:t.type,name:t.name,description:t.description,icon:this.sanitizer.bypassSecurityTrustHtml(t.icon||"")})).sort((t,n)=>e.indexOf(t.type)-e.indexOf(n.type))});shapeTools=I(()=>{const o=this.availableTools(),e=[x.Line,x.Arrow,x.Rectangle,x.Ellipse,x.Text];return o.filter(t=>e.includes(t.type)&&t.enabled).map(t=>({type:t.type,name:t.name,description:t.description,icon:this.sanitizer.bypassSecurityTrustHtml(t.icon||"")})).sort((t,n)=>e.indexOf(t.type)-e.indexOf(n.type))});allTools=I(()=>[...this.primaryTools(),...this.shapeTools()]);visibleTools=I(()=>{const o=this.allTools(),e=this.maxVisibleTools();return o.slice(0,e)});overflowTools=I(()=>{const o=this.allTools(),e=this.maxVisibleTools();return o.slice(e)});hasOverflowTools=I(()=>this.overflowTools().length>0);quickColors=["#000000","#ffffff","#dc2626","#ea580c","#d97706","#65a30d","#059669","#0891b2","#2563eb","#7c3aed","#c026d3","#e11d48"];strokeWidths=[1,2,3,5,8,12,16,20];config=D({strokeColor:"#000000",backgroundColor:"#ffffff",strokeWidth:3,fullScreen:!0,enableGrid:!1,snapToGrid:!1,gridSize:20});constructor(){this.whiteboardService.setActiveBoard(this.boardId),this.setupClickOutsideHandler(),this.setupResponsiveToolbar(),this._appInit.themeMode$.pipe(re(this._destroy)).subscribe(o=>{const e=o=="dark";this._appInit.editorOptions.theme=e?"vs-dark":"vs",this.config.update(t=>({...t,backgroundColor:e?"#000000":"#ffffff",strokeColor:e?"#ffffff":"#000000"}))}),this._appInit.appAction$.pipe(re(this._destroy)).subscribe(o=>{const{action:e,paylod:t}=o;switch(e){case"scroll-to-top":break;case"scroll-to-bottom":break;case"undo":this.whiteboardService.undo();break;case"redo":this.whiteboardService.redo();break;case"font-up":case"font-down":break;case"clear-all":this.whiteboardService.clear();break;case"word-wrap-toggle":break;default:console.warn("No such action exists",e)}})}ngOnDestroy(){this.clickOutsideListener&&typeof document<"u"&&document.removeEventListener("click",this.clickOutsideListener),this.isFullscreen()&&(document.body.style.overflow=""),typeof window<"u"&&window.removeEventListener("resize",this.handleResize),this._destroy.next(!1),this._destroy.complete()}onDataChange(o){this.dataChange.emit(o)}selectTool(o){this.whiteboardService.setActiveTool(o),this.closeAllMenus()}selectColor(o){const e=this.selectedElements();e.length>0&&this.whiteboardService.updateSelectedElements({style:{...e[0].style,strokeColor:o}}),this.config.update(t=>({...t,strokeColor:o})),this.showColorPalette.set(!1)}selectWidth(o){const e=this.selectedElements();e.length>0&&this.whiteboardService.updateSelectedElements({style:{...e[0].style,strokeWidth:o}}),this.config.update(t=>({...t,strokeWidth:o})),this.showWidthMenu.set(!1)}selectBackgroundColor(o){this.config.update(e=>({...e,backgroundColor:o})),this.showBackgroundPalette.set(!1)}closeAllMenus(){this.showColorPalette.set(!1),this.showBackgroundPalette.set(!1),this.showWidthMenu.set(!1),this.showMoreMenu.set(!1),this.showToolsOverflow.set(!1)}toggleColorPalette(){this.showColorPalette.set(!this.showColorPalette()),this.showBackgroundPalette.set(!1),this.showWidthMenu.set(!1),this.showMoreMenu.set(!1)}toggleBackgroundPalette(){this.showBackgroundPalette.set(!this.showBackgroundPalette()),this.showColorPalette.set(!1),this.showWidthMenu.set(!1),this.showMoreMenu.set(!1)}toggleWidthMenu(){this.showWidthMenu.set(!this.showWidthMenu()),this.showColorPalette.set(!1),this.showBackgroundPalette.set(!1),this.showMoreMenu.set(!1)}toggleMoreMenu(){this.showMoreMenu.set(!this.showMoreMenu()),this.showColorPalette.set(!1),this.showBackgroundPalette.set(!1),this.showWidthMenu.set(!1),this.showToolsOverflow.set(!1)}toggleToolsOverflow(){this.showToolsOverflow.set(!this.showToolsOverflow()),this.showColorPalette.set(!1),this.showBackgroundPalette.set(!1),this.showWidthMenu.set(!1),this.showMoreMenu.set(!1)}startEditingTitle(){this.isEditingTitle.set(!0)}finishEditingTitle(o){const e=o.target;this.boardTitle.set(e.value||"Untitled Board"),this.isEditingTitle.set(!1)}undo(){this.whiteboardService.undo()}redo(){this.whiteboardService.redo()}clear(){this.whiteboardService.clear()}zoomIn(){this.whiteboardService.zoomIn()}zoomOut(){this.whiteboardService.zoomOut()}resetZoom(){this.whiteboardService.resetZoom()}toggleFullscreen(){const o=!this.isFullscreen();this.isFullscreen.set(o),o?(document.body.style.overflow="hidden",this.showFullscreenHint.set(!0),setTimeout(()=>{this.showFullscreenHint.set(!1)},3e3)):(document.body.style.overflow="",this.showFullscreenHint.set(!1)),this.closeAllMenus()}toggleGrid(){this.config.update(o=>({...o,enableGrid:!o.enableGrid})),this.showMoreMenu.set(!1)}toggleLayersMenu(){this.showLayersMenu.update(o=>!o),this.showLayerContextMenu.set(null)}switchToLayer(o){if(this.activeLayerId()===o)return;this.whiteboardService.setActiveLayer(o),this.showLayerContextMenu.set(null);const e=this.layers().find(t=>t.id===o);e?.locked&&console.info(`Active layer "${e.name}" is locked. Drawing is disabled on locked layers.`)}addLayer(){const o=this.layers().length;this.whiteboardService.addLayer(`Layer ${o+1}`),this.showLayerContextMenu.set(null)}deleteLayer(o){const t=this.layers().find(r=>r.id===o)?.name||"this layer";if(!confirm(`Are you sure you want to delete "${t}"? This action cannot be undone.`))return;this.whiteboardService.removeLayer(o)||alert("Cannot delete the last layer. At least one layer is required."),this.showLayerContextMenu.set(null)}duplicateLayer(o){this.whiteboardService.duplicateLayer(o),this.showLayerContextMenu.set(null)}startRenameLayer(o){this.editingLayerId.set(o),this.showLayerContextMenu.set(null),setTimeout(()=>{const e=document.querySelector(".layer-name-input");e&&(e.focus(),e.select())},50)}finishRenameLayer(o,e){const t=o.target,n=t.value.trim();if(!n){alert("Layer name cannot be empty."),t.focus();return}if(n.length>50){alert("Layer name is too long. Maximum 50 characters."),t.focus();return}this.whiteboardService.renameLayer(e,n),this.editingLayerId.set(null)}toggleLayerVisibility(o){this.whiteboardService.toggleLayerVisibility(o)}toggleLayerLock(o){this.layers().find(t=>t.id===o)&&this.whiteboardService.toggleLayerLock(o)}toggleLayerContextMenu(o,e){if(o.stopPropagation(),this.showLayerContextMenu()===e)this.closeLayerContextMenu();else{const n=o.currentTarget.getBoundingClientRect(),s=220,r=280;let a=n.right-s,l=n.bottom+4;a<0&&(a=n.left),l+r>window.innerHeight&&(l=n.top-r-4),this.contextMenuPosition.set({top:l,left:a}),this.showLayerContextMenu.set(e)}}closeLayerContextMenu(){this.showLayerContextMenu.set(null)}onLayersListScroll(){this.closeLayerContextMenu()}onDragStart(o,e){const t=o.target;if(this.draggedLayerIndex=e,this.draggedElement=t.closest(".layer-item"),o.dataTransfer&&this.draggedElement){o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("text/plain",e.toString());const n=this.draggedElement.getBoundingClientRect();o.dataTransfer.setDragImage(this.draggedElement,n.width/2,n.height/2)}setTimeout(()=>{this.draggedElement?.classList.add("dragging")},0)}onDragOver(o,e){if(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="move"),this.draggedLayerIndex===null||this.draggedLayerIndex===e)return;const n=o.target.closest(".layer-item");if(!n)return;const s=n.getBoundingClientRect(),r=s.top+s.height/2;o.clientY<r?(n.classList.add("drag-over-top"),n.classList.remove("drag-over-bottom")):(n.classList.add("drag-over-bottom"),n.classList.remove("drag-over-top"))}onDragLeave(o){o.target.closest(".layer-item")?.classList.remove("drag-over-top","drag-over-bottom")}onDrop(o,e){o.preventDefault(),o.stopPropagation();const n=o.target.closest(".layer-item");if(n?.classList.remove("drag-over-top","drag-over-bottom"),!(this.draggedLayerIndex===null||this.draggedLayerIndex===e)&&n){const s=n.getBoundingClientRect(),r=s.top+s.height/2,a=o.clientY<r?e:e+1,l=this.draggedLayerIndex<a?a-1:a;this.draggedLayerIndex!==l&&this.whiteboardService.reorderLayersByIndex(this.draggedLayerIndex,l)}}onDragEnd(){this.draggedElement?.classList.remove("dragging"),document.querySelectorAll(".layer-item").forEach(o=>{o.classList.remove("drag-over-top","drag-over-bottom")}),this.draggedLayerIndex=null,this.draggedElement=null}async saveAsImage(){try{await this.whiteboardService.save(se.Png,this.boardTitle()),this.showMoreMenu.set(!1),console.log("Whiteboard saved successfully")}catch(o){console.error("Save failed:",o),alert("Failed to save whiteboard as image. Please try again.")}}exportBoard(){try{const o=this.whiteboardService.exportData();if(!o){alert("No data to export.");return}const e=new Blob([o],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a"),s=new Date().toISOString().split("T")[0];n.href=t,n.download=`${this.boardTitle()}_${s}.json`,n.click(),URL.revokeObjectURL(t),this.showMoreMenu.set(!1),console.log("Board exported successfully")}catch(o){console.error("Export failed:",o),alert("Failed to export board data. Please try again.")}}importBoard(o){const e=o.target;if(!e.files||!e.files[0])return;const t=e.files[0];if(!t.name.endsWith(".json")){alert("Please select a valid JSON file."),e.value="";return}const n=10*1024*1024;if(t.size>n){alert("File is too large. Maximum size is 10MB."),e.value="";return}const s=new FileReader;s.onload=r=>{try{const a=r.target?.result;if(!a)throw new Error("Failed to read file");JSON.parse(a),this.whiteboardService.importData(a),e.value="",this.showMoreMenu.set(!1),console.log("Board imported successfully")}catch(a){console.error("Import failed:",a),alert("Failed to import board data. The file may be corrupted or invalid."),e.value=""}},s.onerror=()=>{alert("Failed to read file. Please try again."),e.value=""},s.readAsText(t)}uploadImage(o){const e=o.target;if(!e.files||!e.files[0])return;const t=e.files[0];if(!["image/jpeg","image/jpg","image/png","image/gif","image/webp"].includes(t.type)){alert("Please select a valid image file (JPEG, PNG, GIF, or WebP)."),e.value="";return}const s=5*1024*1024;if(t.size>s){alert("Image is too large. Maximum size is 5MB."),e.value="";return}const r=new FileReader;r.onload=a=>{try{const l=a.target?.result;if(!l)throw new Error("Failed to read image");this.whiteboardService.addImage({image:l}),e.value="",this.showMoreMenu.set(!1),console.log("Image uploaded successfully")}catch(l){console.error("Image upload failed:",l),alert("Failed to upload image. Please try again."),e.value=""}},r.onerror=()=>{alert("Failed to read image file. Please try again."),e.value=""},r.readAsDataURL(t)}setLayerOpacity(o,e){this.whiteboardService.setLayerOpacity(o,e)||console.warn("Failed to set layer opacity")}setLayerBlendMode(o,e){this.whiteboardService.setLayerBlendMode(o,e)||console.warn("Failed to set layer blend mode")}getLayerOpacityPercent(o){const e=this.layers().find(t=>t.id===o);return e&&e.opacity!==void 0?Math.round(e.opacity*100):100}getLayerBlendMode(o){return this.layers().find(t=>t.id===o)?.blendMode||"normal"}onMenuItemClick(){this.showMoreMenu.set(!1)}onSave(){console.log("Whiteboard auto-saved")}onReady(){console.log("Whiteboard ready")}setupClickOutsideHandler(){typeof document>"u"||(this.clickOutsideListener=o=>{const e=o.target;this.showLayersMenu()&&!e.closest(".layers-section")&&!e.closest(".layer-context-menu")&&setTimeout(()=>this.showLayersMenu.set(!1),0),this.showColorPalette()&&!e.closest(".prop-color-btn, .floating-color-palette")&&setTimeout(()=>this.showColorPalette.set(!1),0),this.showBackgroundPalette()&&!e.closest(".prop-color-btn, .floating-color-palette")&&setTimeout(()=>this.showBackgroundPalette.set(!1),0),this.showWidthMenu()&&!e.closest(".prop-width-btn, .floating-width-menu")&&setTimeout(()=>this.showWidthMenu.set(!1),0),this.showMoreMenu()&&!e.closest(".more-menu-wrapper, .more-menu")&&setTimeout(()=>this.showMoreMenu.set(!1),0),this.showToolsOverflow()&&!e.closest(".tools-overflow-wrapper, .tools-overflow-menu")&&setTimeout(()=>this.showToolsOverflow.set(!1),0)},document.addEventListener("click",this.clickOutsideListener))}handleResize=()=>{if(typeof window>"u")return;const o=window.innerWidth;o<480?this.maxVisibleTools.set(7):o<640?this.maxVisibleTools.set(8):o<768?this.maxVisibleTools.set(9):o<1024?this.maxVisibleTools.set(9):this.maxVisibleTools.set(9)};setupResponsiveToolbar(){typeof window>"u"||(this.handleResize(),window.addEventListener("resize",this.handleResize))}static ɵfac=function(e){return new(e||An)};static ɵcmp=nt({type:An,selectors:[["app-whiteboard-view"]],inputs:{data:"data"},outputs:{dataChange:"dataChange"},features:[te([ds])],decls:60,vars:27,consts:[["layersSection",""],["contextMenuTrigger",""],["layerNameInput",""],["titleInput",""],["importFileInput",""],["imageFileInput",""],[1,"basic-demo"],["id","ng-whiteboard-portals"],[1,"toolbar-top"],[1,"layers-section"],["title","Layers",1,"layers-menu-btn",3,"click"],[1,"material-icons"],["tabindex","-1","role","dialog","aria-label","Layers menu",1,"layers-dropdown"],[1,"board-name-section"],["type","text",1,"board-name-input",3,"value"],["title","Click to edit board name",1,"board-name-display"],[1,"toolbar-separator"],[1,"more-menu-wrapper"],["title","More Options",1,"layer-btn",3,"click"],[1,"more-menu"],[1,"app-content"],[1,"canvas-area"],[1,"whiteboard-canvas",3,"dataChange","configChange","save","ready","boardId","config"],[1,"fullscreen-hint"],[1,"toolbar-bottom-center"],[1,"toolbar-main-tools"],[1,"bottom-btn",3,"active","title","innerHTML"],[1,"toolbar-bottom-right"],["title","Zoom Out",1,"bottom-btn",3,"click"],["title","Reset Zoom (100%)",1,"bottom-btn","zoom-reset-btn",3,"click"],["title","Zoom In",1,"bottom-btn",3,"click"],[1,"toolbar-properties"],[1,"prop-group"],[1,"prop-label"],["title","Stroke Color",1,"prop-color-btn",3,"click"],[1,"color-preview"],[1,"floating-color-palette"],[1,"prop-separator"],["title","Canvas Background Color",1,"prop-color-btn",3,"click"],["title","Stroke Width",1,"prop-width-btn",3,"click"],[1,"width-preview-line"],[1,"width-value"],[1,"floating-width-menu"],["tabindex","-1","role","button","aria-label","Close context menu",1,"context-menu-backdrop",3,"click","keydown.escape"],["role","menu","tabindex","-1",1,"layer-context-menu",3,"click","keydown"],["role","menuitem",1,"context-menu-item",3,"click"],[1,"context-menu-divider"],["role","menuitem",1,"context-menu-item","danger",3,"click","disabled"],[1,"context-menu-section"],[1,"context-menu-label"],[1,"blend-mode-select",3,"change","click","value"],[3,"label"],[3,"value","title"],["tabindex","-1","role","dialog","aria-label","Layers menu",1,"layers-dropdown",3,"click","keyup"],[1,"layers-dropdown-header"],[1,"layers-dropdown-title"],["title","Add New Layer",1,"header-action-btn",3,"click"],[1,"layers-list",3,"scroll"],["tabindex","0","role","button",1,"layer-item",3,"active","locked-layer"],["tabindex","0","role","button",1,"layer-item",3,"dragover","dragleave","drop"],["tabindex","0","role","button",1,"layer-item-left",3,"click","keyup.enter","keyup.space"],["draggable","true",1,"layer-drag-handle",3,"dragstart","dragend"],[1,"layer-info"],["type","text",1,"layer-name-input",3,"value"],[1,"layer-name"],[1,"layer-meta"],[1,"layer-opacity-control",3,"mousedown","dragstart"],[1,"opacity-label"],["type","range","min","0","max","100","draggable","false",1,"opacity-slider-inline",3,"input","pointerdown","click","dragstart","value","disabled"],[1,"layer-item-right"],[1,"layer-action-btn",3,"click","title"],[1,"layer-more-wrapper"],["title","More options",1,"layer-action-btn","layer-more-btn",3,"click"],["type","text",1,"layer-name-input",3,"blur","keyup.enter","click","value"],["type","text",1,"board-name-input",3,"blur","keyup.enter","value"],["title","Click to edit board name",1,"board-name-display",3,"click"],[1,"board-name-text"],[1,"material-icons","edit-icon"],[1,"menu-item",3,"click"],[1,"menu-divider"],["type","file","id","importFile","accept",".json",1,"hidden-input",3,"change"],["type","file","id","imageFile","accept","image/*",1,"hidden-input",3,"change"],[1,"bottom-btn",3,"click","title","innerHTML"],[1,"separator"],[1,"tools-overflow-wrapper"],["title","More Tools",1,"bottom-btn",3,"click"],[1,"tools-overflow-menu"],[1,"menu-item","tool-menu-item",3,"active"],[1,"menu-item","tool-menu-item",3,"click"],[1,"tool-icon",3,"innerHTML"],[1,"palette-grid"],[1,"palette-color-item",3,"background","selected","title"],[1,"palette-color-item",3,"click","title"],[1,"material-icons","check-icon"],[1,"width-menu-item",3,"selected"],[1,"width-menu-item",3,"click"],[1,"width-menu-preview"],[1,"width-menu-label"]],template:function(e,t){if(e&1){const n=H();u(0,"div",6)(1,"div",7),Y(2,Ud,25,10),h(),u(3,"div",8)(4,"div",9,0)(6,"button",10),v("click",function(){return C(n),y(t.toggleLayersMenu())}),u(7,"span",11),w(8,"layers"),h()(),Y(9,Gd,10,0,"div",12),h(),u(10,"div",13),Y(11,Xd,2,1,"input",14)(12,Kd,7,1,"button",15),h(),k(13,"div",16),u(14,"div",17)(15,"button",18),v("click",function(){return C(n),y(t.toggleMoreMenu())}),u(16,"span",11),w(17,"more_vert"),h()(),Y(18,Jd,34,3,"div",19),h()(),u(19,"div",20)(20,"main",21)(21,"ng-whiteboard",22),v("dataChange",function(r){return C(n),y(t.onDataChange(r))})("configChange",function(r){return C(n),y(t.config.set(r))})("save",function(){return C(n),y(t.onSave())})("ready",function(){return C(n),y(t.onReady())}),h(),Y(22,qd,9,0,"div",23),h()(),u(23,"div",24)(24,"div",25),Ce(25,Qd,1,4,"button",26,lr),Y(27,nu,6,1),h()(),u(28,"div",27)(29,"button",28),v("click",function(){return C(n),y(t.zoomOut())}),u(30,"span",11),w(31,"zoom_out"),h()(),u(32,"button",29),v("click",function(){return C(n),y(t.resetZoom())}),w(33),h(),u(34,"button",30),v("click",function(){return C(n),y(t.zoomIn())}),u(35,"span",11),w(36,"zoom_in"),h()()(),u(37,"div",31)(38,"div",32)(39,"span",33),w(40,"Stroke"),h(),u(41,"button",34),v("click",function(){return C(n),y(t.toggleColorPalette())}),k(42,"span",35),h(),Y(43,su,4,0,"div",36),h(),k(44,"div",37),u(45,"div",32)(46,"span",33),w(47,"BG"),h(),u(48,"button",38),v("click",function(){return C(n),y(t.toggleBackgroundPalette())}),k(49,"span",35),h(),Y(50,lu,4,0,"div",36),h(),k(51,"div",37),u(52,"div",32)(53,"span",33),w(54,"Size"),h(),u(55,"button",39),v("click",function(){return C(n),y(t.toggleWidthMenu())}),k(56,"div",40),u(57,"span",41),w(58),h()(),Y(59,du,3,0,"div",42),h()()()}e&2&&(Ie("fullscreen-mode",t.isFullscreen()),f(2),j(t.showLayerContextMenu()!==null?2:-1),f(7),j(t.showLayersMenu()?9:-1),f(2),j(t.isEditingTitle()?11:12),f(7),j(t.showMoreMenu()?18:-1),f(3),L("boardId",t.boardId)("config",t.config()),f(),j(t.showFullscreenHint()?22:-1),f(3),ye(t.visibleTools()),f(2),j(t.hasOverflowTools()?27:-1),f(6),Me(" ",t.zoomLevel(),"% "),f(8),ge("background",t.selectedColor()),f(),ge("background",t.selectedColor()),f(),j(t.showColorPalette()?43:-1),f(5),ge("background",t.config().backgroundColor||"#ffffff"),f(),ge("background",t.config().backgroundColor||"#ffffff"),f(),j(t.showBackgroundPalette()?50:-1),f(6),ge("height",t.selectedWidth(),"px")("background",t.selectedColor()),f(2),Me("",t.selectedWidth(),"px"),f(),j(t.showWidthMenu()?59:-1))},dependencies:[kt,$i,fi,mi,Vd],styles:[`[_nghost-%COMP%]   .basic-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border-bottom: 1px solid #dadce0;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1);
  z-index: 100;
}
[_nghost-%COMP%]   .header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 24px;
}
[_nghost-%COMP%]   .app-logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
[_nghost-%COMP%]   .app-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {
  font-size: 24px;
  color: #4285f4;
}
[_nghost-%COMP%]   .app-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 500;
  color: #202124;
}
[_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-display[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #5f6368;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: none;
}
[_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-display[_ngcontent-%COMP%]:hover:not(:disabled), [_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-display[_ngcontent-%COMP%]:focus:not(:disabled) {
  background: rgba(66, 133, 244, 0.04);
  outline: none;
}
[_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-display[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
[_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-input[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 400;
  color: #202124;
  border: 1px solid #4285f4;
  border-radius: 4px;
  padding: 6px 12px;
  outline: none;
  background: #ffffff;
  min-width: 200px;
}
[_nghost-%COMP%]   .header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
[_nghost-%COMP%]   .header-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  color: #5f6368;
}
[_nghost-%COMP%]   .header-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(95, 99, 104, 0.04);
}
[_nghost-%COMP%]   .header-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .header-btn[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
}
[_nghost-%COMP%]   .header-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
[_nghost-%COMP%]   .app-content[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
[_nghost-%COMP%]   .canvas-area[_ngcontent-%COMP%] {
  flex: 1;
  position: relative;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
[_nghost-%COMP%]   .whiteboard-canvas[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  flex: 1;
}
[_nghost-%COMP%]   .whiteboard-canvas[_ngcontent-%COMP%]     ng-whiteboard {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}
[_nghost-%COMP%]   .whiteboard-canvas[_ngcontent-%COMP%]     .whiteboard-container {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  position: relative !important;
}
[_nghost-%COMP%]   .whiteboard-canvas[_ngcontent-%COMP%]     .whiteboard-svg {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}
[_nghost-%COMP%]   .whiteboard-canvas[_ngcontent-%COMP%]     .whiteboard-canvas-wrapper {
  width: 100% !important;
  height: 100% !important;
}
[_nghost-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {
  width: 80px;
  min-width: 80px;
  background: #ffffff;
  border-right: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  gap: 20px;
  z-index: 50;
  flex-shrink: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
}
[_nghost-%COMP%]   .tool-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
[_nghost-%COMP%]   .tool-group[_ngcontent-%COMP%]:not(:first-child) {
  border-top: 1px solid #e8eaed;
  padding-top: 20px;
}
[_nghost-%COMP%]   .tool-group[_ngcontent-%COMP%]:not(:first-child)::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 1px;
  background: #e8eaed;
}
[_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 12px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
[_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  border-color: rgba(66, 133, 244, 0.2);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.15);
}
[_nghost-%COMP%]   .tool-btn.active[_ngcontent-%COMP%] {
  background: #4285f4;
  color: white;
  border-color: #4285f4;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  color: #9aa0a6;
  background: transparent;
  border-color: transparent;
  transform: none;
  box-shadow: none;
}
[_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
  border-color: transparent;
  transform: none;
  box-shadow: none;
}
[_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 22px;
}
[_nghost-%COMP%]   .property-control[_ngcontent-%COMP%] {
  position: relative;
}
[_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #ffffff;
  border: 2px solid #dadce0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1);
}
[_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
[_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%]   .color-indicator[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.3);
}
[_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #ffffff;
  border: 2px solid #dadce0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1);
}
[_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
[_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}
[_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%]   .width-line[_ngcontent-%COMP%] {
  width: 28px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
[_nghost-%COMP%]   .color-palette[_ngcontent-%COMP%] {
  position: absolute;
  left: 92px;
  top: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(60, 64, 67, 0.15);
  z-index: 200;
  animation: _ngcontent-%COMP%_slideInLeft 0.2s ease;
  min-width: 200px;
}
[_nghost-%COMP%]   .palette-color[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 3px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
[_nghost-%COMP%]   .palette-color[_ngcontent-%COMP%]:hover {
  transform: scale(1.1);
  border-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
[_nghost-%COMP%]   .palette-color.selected[_ngcontent-%COMP%] {
  border-color: #4285f4;
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}
[_nghost-%COMP%]   .width-menu[_ngcontent-%COMP%] {
  position: absolute;
  left: 92px;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(60, 64, 67, 0.15);
  z-index: 200;
  animation: _ngcontent-%COMP%_slideInLeft 0.2s ease;
  min-width: 120px;
}
[_nghost-%COMP%]   .width-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 40px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .width-option[_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
  background: rgba(66, 133, 244, 0.04);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.15);
}
[_nghost-%COMP%]   .width-option.selected[_ngcontent-%COMP%] {
  border-color: #4285f4;
  background: rgba(66, 133, 244, 0.1);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.2);
}
[_nghost-%COMP%]   .width-option[_ngcontent-%COMP%]   .width-preview[_ngcontent-%COMP%] {
  width: 60px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
@keyframes _ngcontent-%COMP%_slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
[_nghost-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {
  width: 320px;
  min-width: 320px;
  background: #ffffff;
  border-left: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
  z-index: 50;
  flex-shrink: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
}
[_nghost-%COMP%]   .properties-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
[_nghost-%COMP%]   .properties-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e8eaed;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 10;
}
[_nghost-%COMP%]   .properties-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #202124;
}
[_nghost-%COMP%]   .properties-content[_ngcontent-%COMP%] {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
[_nghost-%COMP%]   .property-empty[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #9aa0a6;
  font-size: 14px;
  text-align: center;
  padding: 20px;
}
[_nghost-%COMP%]   .property-section[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
[_nghost-%COMP%]   .property-section[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
[_nghost-%COMP%]   .property-label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #5f6368;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
[_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 40%;
  scale: 0.6;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 150;
  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_fadeInDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
[_nghost-%COMP%]   .board-name-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  color: #202124;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%]:hover {
  background: rgba(66, 133, 244, 0.06);
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%] {
  opacity: 1;
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #5f6368;
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  opacity: 0;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .board-name-display[_ngcontent-%COMP%]   .board-name-text[_ngcontent-%COMP%] {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
[_nghost-%COMP%]   .board-name-input[_ngcontent-%COMP%] {
  padding: 6px 12px;
  border: 2px solid #4285f4;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #202124;
  outline: none;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
}
[_nghost-%COMP%]   .board-name-input[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .toolbar-separator[_ngcontent-%COMP%] {
  width: 1px;
  height: 28px;
  background: #e8eaed;
}
[_nghost-%COMP%]   .toolbar-secondary-left[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .toolbar-secondary-right[_ngcontent-%COMP%] {
  display: none;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  border: 1px solid rgba(218, 220, 224, 0.5);
  margin-bottom: 4px;
}
[_nghost-%COMP%]   .secondary-group[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 2px;
}
[_nghost-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}
[_nghost-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
}
[_nghost-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  background: rgba(66, 133, 244, 0.12);
  transform: scale(0.95);
}
[_nghost-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .secondary-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
[_nghost-%COMP%]   .secondary-zoom-level[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 600;
  color: #202124;
  min-width: 28px;
  text-align: center;
  padding: 2px 4px;
  background: rgba(66, 133, 244, 0.06);
  border-radius: 4px;
  line-height: 1.3;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  color: #5f6368;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]:hover {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 380px;
  max-height: 500px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(60, 64, 67, 0.15);
  overflow: visible;
  z-index: 1001;
  animation: _ngcontent-%COMP%_slideUpFade 0.2s ease-out;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: rgba(66, 133, 244, 0.04);
  border-bottom: 1px solid #e8eaed;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .layers-dropdown-title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #202124;
  letter-spacing: -0.01em;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #5f6368;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]:hover {
  background: #4285f4;
  border-color: #4285f4;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {
  color: white;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%] {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: visible;
  padding: 10px;
  min-height: 60px;
  display: block;
  position: relative;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #dadce0;
  border-radius: 3px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #9aa0a6;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  margin-bottom: 4px;
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  cursor: default;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  user-select: none;
  box-sizing: border-box;
  overflow: visible;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]:hover:not(.active) {
  background: rgba(66, 133, 244, 0.02);
  border-color: #dadce0;
  transform: translateX(2px);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.active[_ngcontent-%COMP%] {
  background: rgba(66, 133, 244, 0.06);
  border-color: #4285f4;
  box-shadow: 0 2px 4px rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.active[_ngcontent-%COMP%]   .layer-name[_ngcontent-%COMP%] {
  color: #4285f4;
  font-weight: 600;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.active[_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
  background: rgba(66, 133, 244, 0.08);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.locked-layer[_ngcontent-%COMP%] {
  cursor: pointer;
  background: rgba(251, 191, 36, 0.05);
  border-left: 3px solid #fbbf24;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.locked-layer[_ngcontent-%COMP%]:hover:not(.active) {
  background: rgba(251, 191, 36, 0.08);
  border-color: #fbbf24;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.locked-layer.active[_ngcontent-%COMP%] {
  background: rgba(66, 133, 244, 0.06);
  border-color: #4285f4;
  border-left-color: #fbbf24;
  box-shadow: 0 2px 4px rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.locked-layer[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%] {
  border-color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item.locked-layer[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #f59e0b;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[data-visible=false][_ngcontent-%COMP%] {
  opacity: 0.5;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[data-visible=false][_ngcontent-%COMP%]   .layer-name[_ngcontent-%COMP%] {
  color: #9aa0a6;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[data-visible=false][_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%] {
  opacity: 0.5;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
  cursor: grab;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]:active {
  cursor: grabbing;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9aa0a6;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  opacity: 0.6;
  cursor: grab;
  pointer-events: auto;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  pointer-events: none;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%]:hover {
  opacity: 1;
  background: rgba(95, 99, 104, 0.05);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%]:active {
  cursor: grabbing;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%] {
  width: 44px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border: 1px solid #e8eaed;
  border-radius: 4px;
  flex-shrink: 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #9aa0a6;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: #202124;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-name-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #4285f4;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  background: #ffffff;
  font-family: inherit;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-name-input[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-meta[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #9aa0a6;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  padding: 4px 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-label[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 600;
  color: #5f6368;
  min-width: 32px;
  text-align: right;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%] {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(to right, rgba(66, 133, 244, 0.2) 0%, #4285f4 100%);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0;
  padding: 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]:hover {
  height: 5px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4285f4;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: -5px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-webkit-slider-thumb:active {
  transform: scale(1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4285f4;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-moz-range-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-moz-range-thumb:active {
  transform: scale(1);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: transparent;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-moz-range-track {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: transparent;
  border: none;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-opacity-control[_ngcontent-%COMP%]   .opacity-slider-inline[_ngcontent-%COMP%]::-moz-range-progress {
  height: 4px;
  border-radius: 2px;
  background: transparent;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  overflow: visible;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%]:hover {
  background: rgba(95, 99, 104, 0.08);
  color: #202124;
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: translateY(0);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
[_nghost-%COMP%]   .layer-indicator[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  background: rgba(66, 133, 244, 0.06);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #202124;
  min-width: 50px;
  justify-content: center;
}
[_nghost-%COMP%]   .layer-indicator[_ngcontent-%COMP%]   .page-current[_ngcontent-%COMP%] {
  color: #4285f4;
}
[_nghost-%COMP%]   .layer-indicator[_ngcontent-%COMP%]   .page-separator[_ngcontent-%COMP%] {
  color: #9aa0a6;
}
[_nghost-%COMP%]   .layer-indicator[_ngcontent-%COMP%]   .page-total[_ngcontent-%COMP%] {
  color: #5f6368;
}
[_nghost-%COMP%]   .page-divider[_ngcontent-%COMP%] {
  width: 1px;
  height: 20px;
  background: #e8eaed;
  margin: 0 4px;
}
[_nghost-%COMP%]   .layers-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]:hover {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
[_nghost-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {
  font-size: 20px;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  color: currentColor;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  border-color: rgba(66, 133, 244, 0.2);
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: translateY(0);
}
[_nghost-%COMP%]   .bottom-btn.active[_ngcontent-%COMP%] {
  background: #4285f4;
  color: white;
  border-color: #4285f4;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
}
[_nghost-%COMP%]   .bottom-btn.active[_ngcontent-%COMP%]:hover {
  background: #3367d6;
  border-color: #3367d6;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  color: #9aa0a6;
  background: transparent;
  border-color: transparent;
  transform: none;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
  border-color: transparent;
  transform: none;
}
[_nghost-%COMP%]   .toolbar-bottom-left[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 100;
  animation: _ngcontent-%COMP%_fadeInUpLeft 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_fadeInUpLeft {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
[_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 38%;
  scale: 0.6;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 100;
  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out 0.1s;
  animation-fill-mode: both;
  max-width: calc(100% - 40px);
  overflow: visible;
}
[_nghost-%COMP%]   .toolbar-main-tools[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
}
[_nghost-%COMP%]   .toolbar-bottom-right[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  right: -1%;
  scale: 0.6;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 100;
  animation: _ngcontent-%COMP%_fadeInUpRight 0.3s ease-out 0.2s;
  animation-fill-mode: both;
}
@keyframes _ngcontent-%COMP%_fadeInUpRight {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
[_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%] {
  position: absolute;
  scale: 0.6;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px;
  width: 54px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 150;
  animation: _ngcontent-%COMP%_slideInFromRight 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_slideInFromRight {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}
[_nghost-%COMP%]   .prop-group[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
[_nghost-%COMP%]   .prop-label[_ngcontent-%COMP%] {
  font-size: 9px;
  font-weight: 600;
  color: #5f6368;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  writing-mode: horizontal-tb;
  text-align: center;
}
[_nghost-%COMP%]   .prop-color-btn[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border: 2px solid #dadce0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
[_nghost-%COMP%]   .prop-color-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
[_nghost-%COMP%]   .prop-color-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: #e8eaed;
}
[_nghost-%COMP%]   .prop-color-btn[_ngcontent-%COMP%]:disabled:hover {
  transform: none;
  box-shadow: none;
}
[_nghost-%COMP%]   .prop-color-btn[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 4px;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 4px 6px;
  background: transparent;
  border: 1px solid #dadce0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  width: 32px;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.06);
  border-color: #4285f4;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: #e8eaed;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
  border-color: #e8eaed;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]:disabled   .width-value[_ngcontent-%COMP%] {
  color: #9aa0a6;
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]   .width-preview-line[_ngcontent-%COMP%] {
  width: 20px;
  border-radius: 2px;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]   .width-value[_ngcontent-%COMP%] {
  font-size: 9px;
  font-weight: 500;
  color: #5f6368;
}
[_nghost-%COMP%]   .prop-separator[_ngcontent-%COMP%] {
  width: 24px;
  height: 1px;
  background: #e8eaed;
  margin: 2px 0;
}
[_nghost-%COMP%]   .floating-color-palette[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  right: calc(100% + 8px);
  transform: translateY(-50%);
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 200;
  animation: _ngcontent-%COMP%_slideInFromRight 0.2s ease;
}
[_nghost-%COMP%]   .palette-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}
[_nghost-%COMP%]   .palette-color-item[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
[_nghost-%COMP%]   .palette-color-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: scale(1.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
[_nghost-%COMP%]   .palette-color-item.selected[_ngcontent-%COMP%] {
  border-color: #4285f4;
  box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
}
[_nghost-%COMP%]   .palette-color-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .palette-color-item[_ngcontent-%COMP%]:disabled:hover {
  transform: none;
  box-shadow: none;
}
[_nghost-%COMP%]   .palette-color-item[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
[_nghost-%COMP%]   .floating-width-menu[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  right: calc(100% + 8px);
  transform: translateY(-50%);
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 200;
  min-width: 160px;
  animation: _ngcontent-%COMP%_slideInFromRight 0.2s ease;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.06);
}
[_nghost-%COMP%]   .width-menu-item.selected[_ngcontent-%COMP%] {
  background: rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .width-menu-item.selected[_ngcontent-%COMP%]   .width-menu-label[_ngcontent-%COMP%] {
  color: #4285f4;
  font-weight: 600;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]:disabled   .width-menu-label[_ngcontent-%COMP%] {
  color: #9aa0a6;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]   .width-menu-preview[_ngcontent-%COMP%] {
  flex: 1;
  border-radius: 2px;
  min-width: 60px;
}
[_nghost-%COMP%]   .width-menu-item[_ngcontent-%COMP%]   .width-menu-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 500;
  color: #5f6368;
  min-width: 32px;
}
[_nghost-%COMP%]   .toolbar-left-section[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .toolbar-right-section[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .toolbar-center-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
[_nghost-%COMP%]   .toolbar-center-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
[_nghost-%COMP%]   .toolbar-left-section[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .toolbar-right-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
}
[_nghost-%COMP%]   .toolbar-center-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 6px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 12px;
  font-weight: 500;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]:hover {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.15);
}
[_nghost-%COMP%]   .bottom-btn.active[_ngcontent-%COMP%] {
  background: #4285f4;
  color: white;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
}
[_nghost-%COMP%]   .bottom-btn.zoom-reset-btn[_ngcontent-%COMP%] {
  min-width: 50px;
  font-weight: 600;
}
[_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
[_nghost-%COMP%]   .separator[_ngcontent-%COMP%] {
  width: 1px;
  height: 20px;
  background: #e8eaed;
  margin: 0 4px;
  flex-shrink: 0;
}
[_nghost-%COMP%]   .prop-separator[_ngcontent-%COMP%] {
  width: 100%;
  height: 1px;
  background: #e8eaed;
  margin: 6px 0;
  flex-shrink: 0;
}
[_nghost-%COMP%]   .more-menu-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
[_nghost-%COMP%]   .more-menu[_ngcontent-%COMP%] {
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  min-width: 220px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 200;
  animation: _ngcontent-%COMP%_slideUpFade 0.2s ease;
  overflow: hidden;
}
[_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .more-menu[_ngcontent-%COMP%] {
  top: calc(100% + 12px);
  bottom: auto;
  animation: _ngcontent-%COMP%_slideDown 0.2s ease;
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 18px;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 15px;
  font-weight: 500;
  color: #202124;
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.06);
  transform: translateY(-1px);
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: translateY(0);
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  color: #9aa0a6;
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]:disabled:hover {
  background: transparent;
  transform: none;
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]:disabled   .material-icons[_ngcontent-%COMP%] {
  color: #9aa0a6;
}
[_nghost-%COMP%]   .menu-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #5f6368;
}
[_nghost-%COMP%]   .menu-divider[_ngcontent-%COMP%] {
  height: 1px;
  background: #e8eaed;
  margin: 8px 0;
}
[_nghost-%COMP%]   .hidden-input[_ngcontent-%COMP%] {
  display: none;
}
[_nghost-%COMP%]   .tools-overflow-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%] {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 200;
  animation: _ngcontent-%COMP%_slideUpFade 0.2s ease;
  min-width: 160px;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  text-align: left;
  width: 100%;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%]   .tool-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%]   .tool-icon[_ngcontent-%COMP%]     svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%]   .tool-icon[_ngcontent-%COMP%]     .material-icons {
  font-size: 20px;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.08);
  color: #4285f4;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item.active[_ngcontent-%COMP%] {
  background: rgba(66, 133, 244, 0.12);
  color: #4285f4;
  font-weight: 600;
}
[_nghost-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%]   .tool-menu-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
@keyframes _ngcontent-%COMP%_slideUpFade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  15%, 85% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
@keyframes _ngcontent-%COMP%_slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(-50%);
  }
}
@keyframes _ngcontent-%COMP%_slideInFromBottom {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
[_nghost-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #ffffff;
  overflow: hidden;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%] {
  height: 100vh;
  overflow: hidden;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .canvas-area[_ngcontent-%COMP%] {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-top[_ngcontent-%COMP%] {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-properties[_ngcontent-%COMP%] {
  position: fixed;
  z-index: 1000;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {
  display: none;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-left.fullscreen-toolbar[_ngcontent-%COMP%] {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: auto;
  max-height: 80vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #dadce0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  overflow-y: auto;
  padding-top: 56px;
  animation: _ngcontent-%COMP%_slideInFromLeft 0.3s ease-out;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-left.fullscreen-toolbar[_ngcontent-%COMP%]   .color-palette[_ngcontent-%COMP%] {
  left: 88px;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-left.fullscreen-toolbar[_ngcontent-%COMP%]   .width-menu[_ngcontent-%COMP%] {
  left: 88px;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-close-btn[_ngcontent-%COMP%] {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 36px;
  height: 36px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
  z-index: 1001;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-close-btn[_ngcontent-%COMP%]:hover {
  background: #3367d6;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(66, 133, 244, 0.4);
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .hidden-in-fullscreen[_ngcontent-%COMP%] {
  display: none !important;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-bottom-left[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .toolbar-bottom-right[_ngcontent-%COMP%] {
  position: fixed;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-hint[_ngcontent-%COMP%] {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  animation: _ngcontent-%COMP%_fadeInOut 3s ease-in-out forwards;
  pointer-events: none;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-hint[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
[_nghost-%COMP%]   .basic-demo.fullscreen-mode[_ngcontent-%COMP%]   .fullscreen-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px;
  border-radius: 3px;
}
@media (max-width: 1024px) and (min-width: 769px) {
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%] {
    max-width: 90%;
    gap: 12px;
    padding: 6px 14px;
  }
  [_nghost-%COMP%]   .mobile-controls[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .mobile-separator[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .toolbar-secondary-left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-secondary-right[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .toolbar-bottom-left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-right[_ngcontent-%COMP%] {
    padding: 8px;
    gap: 4px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%] {
    max-width: calc(100% - 220px);
    gap: 5px;
    padding: 8px 12px;
    flex-direction: row;
    align-items: center;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%] {
    right: 0;
  }
  [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
    min-width: 38px;
    height: 38px;
    padding: 0 10px;
  }
  [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {
    font-size: 19px;
  }
  [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    width: 19px;
    height: 19px;
  }
  [_nghost-%COMP%]   .bottom-btn.zoom-reset-btn[_ngcontent-%COMP%] {
    min-width: 46px;
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  [_nghost-%COMP%]   .app-header[_ngcontent-%COMP%] {
    height: 56px;
    padding: 0 12px;
  }
  [_nghost-%COMP%]   .header-left[_ngcontent-%COMP%] {
    gap: 16px;
  }
  [_nghost-%COMP%]   .app-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-display[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  [_nghost-%COMP%]   .board-title[_ngcontent-%COMP%]   .title-input[_ngcontent-%COMP%] {
    font-size: 14px;
    min-width: 150px;
  }
  [_nghost-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {
    width: 68px;
    padding: 12px 6px;
    gap: 16px;
  }
  [_nghost-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%] {
    gap: 6px;
    padding: 6px 10px;
    width: fit-content;
    left: 8px;
    right: auto;
    transform: none;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .toolbar-separator[_ngcontent-%COMP%] {
    height: 24px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
    padding: 0;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .board-name-display[_ngcontent-%COMP%] {
    padding: 4px 8px;
    gap: 6px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .board-name-display[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .board-name-display[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .board-name-input[_ngcontent-%COMP%] {
    padding: 4px 8px;
    font-size: 13px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%] {
    gap: 4px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%] {
    padding: 4px 8px;
    font-size: 12px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .layers-count[_ngcontent-%COMP%] {
    padding: 1px 4px;
    font-size: 10px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%] {
    position: fixed;
    left: 0;
    right: 0;
    width: 100vw;
    min-width: unset;
    max-width: fit-content;
    transform: none;
    border-radius: 0;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%] {
    padding: 12px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .layers-dropdown-title[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-dropdown-header[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%] {
    padding: 10px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%] {
    gap: 8px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%] {
    width: 20px;
    height: 20px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%] {
    width: 40px;
    height: 30px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-thumbnail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-name[_ngcontent-%COMP%] {
    font-size: 13px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-left[_ngcontent-%COMP%]   .layer-info[_ngcontent-%COMP%]   .layer-meta[_ngcontent-%COMP%] {
    font-size: 11px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%] {
    gap: 2px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-section[_ngcontent-%COMP%]   .layers-dropdown[_ngcontent-%COMP%]   .layers-list[_ngcontent-%COMP%]   .layer-item[_ngcontent-%COMP%]   .layer-item-right[_ngcontent-%COMP%]   .layer-action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-indicator[_ngcontent-%COMP%] {
    padding: 2px 8px;
    font-size: 12px;
    min-width: 40px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%] {
    width: 50px;
    height: 50px;
  }
  [_nghost-%COMP%]   .tool-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  [_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%] {
    width: 50px;
    height: 50px;
  }
  [_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%]   .color-indicator[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]   .color-indicator[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
  }
  [_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
  }
  [_nghost-%COMP%]   .color-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%]   .width-line[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .width-btn[_ngcontent-%COMP%]   .width-indicator[_ngcontent-%COMP%]   .width-line[_ngcontent-%COMP%] {
    width: 24px;
  }
  [_nghost-%COMP%]   .color-palette[_ngcontent-%COMP%] {
    left: 76px;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px;
    min-width: 160px;
  }
  [_nghost-%COMP%]   .color-palette[_ngcontent-%COMP%]   .palette-color[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
  }
  [_nghost-%COMP%]   .width-menu[_ngcontent-%COMP%] {
    left: 76px;
    padding: 12px;
    min-width: 100px;
  }
  [_nghost-%COMP%]   .width-menu[_ngcontent-%COMP%]   .width-option[_ngcontent-%COMP%] {
    width: 76px;
    height: 36px;
  }
  [_nghost-%COMP%]   .width-menu[_ngcontent-%COMP%]   .width-option[_ngcontent-%COMP%]   .width-preview[_ngcontent-%COMP%] {
    width: 48px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-right[_ngcontent-%COMP%] {
    top: 2rem;
    right: 0;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%] {
    top: 2rem;
    left: 5rem;
    padding: 8px 10px;
    width: calc(100% - 32px);
    gap: 4px;
    flex-direction: column;
    align-items: stretch;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-secondary-left[_ngcontent-%COMP%] {
    display: flex;
    position: absolute;
    bottom: 100%;
    left: 5px;
    width: fit-content;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-secondary-right[_ngcontent-%COMP%] {
    display: flex;
    position: absolute;
    bottom: 100%;
    right: 5px;
    width: fit-content;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-main-tools[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: nowrap;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    width: 18px;
    height: 18px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {
    margin: 0 2px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .tools-overflow-menu[_ngcontent-%COMP%] {
    left: 0;
    right: auto;
    max-width: 90vw;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%] {
    top: 0;
    right: 0;
    left: auto;
    transform: none;
    flex-direction: row;
    gap: 4px;
    padding: 6px 10px;
    width: auto;
    max-width: 200px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-group[_ngcontent-%COMP%] {
    flex-direction: row;
    gap: 6px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-label[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-separator[_ngcontent-%COMP%] {
    width: 1px;
    height: 24px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-color-btn[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-width-btn[_ngcontent-%COMP%] {
    min-width: auto;
    padding: 4px 8px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]   .width-preview-line[_ngcontent-%COMP%] {
    max-width: 20px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-width-btn[_ngcontent-%COMP%]   .width-value[_ngcontent-%COMP%] {
    font-size: 10px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .floating-color-palette[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .floating-width-menu[_ngcontent-%COMP%] {
    top: calc(100% + 8px);
    right: 0;
    bottom: auto;
    left: auto;
    transform: none;
  }
  [_nghost-%COMP%]   .palette-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(4, 1fr);
  }
  [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
    width: 36px;
    height: 36px;
  }
  [_nghost-%COMP%]   .bottom-btn.zoom-reset-btn[_ngcontent-%COMP%] {
    min-width: 48px;
    font-size: 12px;
  }
  [_nghost-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  [_nghost-%COMP%]   .separator[_ngcontent-%COMP%] {
    display: none;
  }
  [_nghost-%COMP%]   .more-menu[_ngcontent-%COMP%] {
    min-width: 180px;
  }
}
@media (max-width: 480px) {
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%] {
    width: fit-content;
    padding: 5px 8px;
    gap: 4px;
    left: -2rem;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {
    width: 22px;
    height: 22px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .secondary-zoom-level[_ngcontent-%COMP%] {
    font-size: 9px;
    min-width: 26px;
    padding: 1px 3px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%] {
    width: 26px;
    height: 26px;
  }
  [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layers-menu-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-top[_ngcontent-%COMP%]   .layer-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-right[_ngcontent-%COMP%] {
    right: -1rem;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%] {
    width: calc(100% - 24px);
    padding: 6px;
    gap: 3px;
    left: 3rem;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-secondary-left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-secondary-right[_ngcontent-%COMP%] {
    bottom: 100%;
    padding: 4px 6px;
    gap: 3px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .toolbar-main-tools[_ngcontent-%COMP%] {
    gap: 2px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%] {
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  [_nghost-%COMP%]   .toolbar-bottom-center[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    width: 16px;
    height: 16px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%] {
    top: 0;
    right: -2%;
    padding: 3px 5px;
    gap: 2px;
  }
  [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-color-btn[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   .toolbar-properties[_ngcontent-%COMP%]   .prop-width-btn[_ngcontent-%COMP%] {
    width: 24px;
    height: 24px;
    padding: 2px 4px;
  }
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
[_nghost-%COMP%]   .layer-item-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  z-index: 1;
}
[_nghost-%COMP%]   .layer-more-wrapper[_ngcontent-%COMP%] {
  position: relative;
}
[_nghost-%COMP%]   .context-menu-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: transparent;
  cursor: default;
  opacity: 1 !important;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%] {
  position: fixed;
  width: 220px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 6px;
  z-index: 1100;
  animation: _ngcontent-%COMP%_slideUpFade 0.15s ease-out;
  opacity: 1 !important;
  overflow: visible !important;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]:focus {
  outline: none;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%] {
  padding: 10px 12px;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .context-menu-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #5f6368;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .context-menu-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #5f6368;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .blend-mode-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 8px 10px;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  color: #202124;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .blend-mode-select[_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .blend-mode-select[_ngcontent-%COMP%]:focus {
  border-color: #4285f4;
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .blend-mode-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 6px;
  font-size: 13px;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-section[_ngcontent-%COMP%]   .blend-mode-select[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  color: #5f6368;
  padding: 4px 0;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #202124;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #5f6368;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(66, 133, 244, 0.06);
  transform: translateX(2px);
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item.danger[_ngcontent-%COMP%] {
  color: #dc2626;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item.danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #dc2626;
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-item.danger[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(220, 38, 38, 0.06);
}
[_nghost-%COMP%]   .layer-context-menu[_ngcontent-%COMP%]   .context-menu-divider[_ngcontent-%COMP%] {
  height: 1px;
  background: #e8eaed;
  margin: 4px 0;
}
[_nghost-%COMP%]   .layer-item.dragging[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: move;
}
[_nghost-%COMP%]   .layer-item.drag-over-top[_ngcontent-%COMP%] {
  border-top: 2px solid #4285f4;
  margin-top: -2px;
}
[_nghost-%COMP%]   .layer-item.drag-over-bottom[_ngcontent-%COMP%] {
  border-bottom: 2px solid #4285f4;
  margin-bottom: -2px;
}
[_nghost-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%] {
  cursor: move;
}
[_nghost-%COMP%]   .layer-drag-handle[_ngcontent-%COMP%]:active {
  cursor: grabbing;
}`]})}class jt{worker;autoTerminateTimeMS=6e4;output$=new Wt("Click Run button to execute code");waitingForInput$=new Wt(!1);run(o,e){if(this.cleanup(),e=="javascript"?(this.output$.next(`Loading the Javascript worker for environment....
`),this.worker=new Worker(new URL("/assets/js.worker-DaGOnG9i.js",import.meta.url))):e=="typescript"?(this.output$.next(`Loading the Typescript worker for environment....
`),this.worker=new Worker(new URL("/assets/ts.worker-CbuK8GRL.js",import.meta.url),{type:"module"})):e==="python"&&(this.output$.next(`Loading the Python worker for environment....
`),this.worker=new Worker(new URL("/assets/python.worker-fIKXqFMA.js",import.meta.url),{type:"module"})),!this.worker){this.output$.next(`No worker present for ${e}`);return}this.worker.onmessage=({data:t})=>{switch(t.type){case"output":this.output$.next(this.output$.value+t.value+`
`);break;case"input-request":this.waitingForInput$.next(!0);break;case"done":this.output$.next(this.output$.value+`[Finished in ${t.value} ms]
`);break;case"error":this.cleanup(),this.output$.next(this.output$.value+t.value);break;case"ready":this.output$.next(`Executing the code....
`),this.worker&&this.worker.postMessage({type:"run",code:o}),setTimeout(()=>{this.cleanup(),this.output$.next(this.output$.value+`[Terminated in ${this.autoTerminateTimeMS} ms]
`)},this.autoTerminateTimeMS)}}}sendInput(o){this.waitingForInput$.next(!1),this.worker?.postMessage({type:"input",value:o})}cleanup(){this.worker?.terminate(),this.worker=void 0,this.waitingForInput$.next(!1)}static ɵfac=function(e){return new(e||jt)};static ɵprov=Z({token:jt,factory:jt.ɵfac,providedIn:"root"})}const uu=(i,o,e,t,n)=>({top:i,left:o,width:e,height:t,cursor:n}),hu=(i,o)=>({"header-dark":i,"header-light":o}),gn=i=>({"active-border":i}),gu=(i,o)=>({"theme-dark":i,"theme-light":o});function pu(i,o){if(i&1){const e=H();u(0,"input",15),v("keydown.enter",function(n){C(e);const s=_();return y(s.submit(n))}),h()}i&2&&ge("min-width","fit-content")}function fu(i,o){if(i&1){const e=H();u(0,"div",16),v("mousedown",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))})("touchstart",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))}),h()}}function mu(i,o){if(i&1){const e=H();u(0,"div",17),v("mousedown",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))})("touchstart",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))}),h()}}function _u(i,o){if(i&1){const e=H();u(0,"div",18),v("mousedown",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))})("touchstart",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))}),h()}}function Cu(i,o){if(i&1){const e=H();u(0,"div",19),v("mousedown",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))})("touchstart",function(n){C(e);const s=_();return y(s.resizeStartHandler(n))}),k(1,"i",20),h()}}class Tn{_appInit;_codeRunner;_destroy=new Be;viewContainer;selectedLayout="";sizeEmitter=new X;position={top:50,left:50};defaultSize={width:300,height:200};size={width:300,height:200};dragStart={x:0,y:0};isResizableEnable=!0;isDraggableEnable=!0;isResizing=!1;isDragging=!1;isDarkMode=!1;output="";waitingForInput=!1;selectedLanguage={};constructor(o,e){this._appInit=o,this._codeRunner=e,this._appInit.themeMode$.pipe(re(this._destroy)).subscribe(t=>{const n=t=="dark";this._appInit.editorOptions.theme=n?"vs-dark":"vs",this.isDarkMode=n}),this._appInit.selectedLanguage$.pipe(re(this._destroy)).subscribe(t=>{this.selectedLanguage=t}),this._codeRunner.output$.pipe(re(this._destroy)).subscribe(t=>this.output=t),this._codeRunner.waitingForInput$.pipe(re(this._destroy)).subscribe(t=>this.waitingForInput=t)}submit(o){this.waitingForInput=!1,this._codeRunner.sendInput(o.target.value),o.target.value=""}runCode(){const o=this._appInit.editorCode,e=this.selectedLanguage;this._codeRunner.run(o,e.id)}ngOnChanges(o){if(o.viewContainer&&!o.viewContainer.isFirstChange()){const e=this.viewContainer?.nativeElement?.offsetHeight??0;this.position.top=e-this.size.height,this.position.left=0}o.selectedLayout&&this.layoutChangeHandler(this.selectedLayout)}ngOnInit(){}ngAfterViewInit(){}onResize(o){this.layoutChangeHandler(this.selectedLayout)}layoutChangeHandler(o){this.selectedLayout=o;const e=this.viewContainer?.nativeElement?.offsetHeight??0,t=this.viewContainer?.nativeElement?.offsetWidth??0;this.isResizableEnable=!1,this.isDraggableEnable=!1,o=="bottom"?(this.position.top=e-this.size.height,this.position.left=0,this.size.width=t,this.size.height=this.defaultSize.height,this.sizeEmitter.emit({...this.size,layout:o})):o=="left"?(this.position.top=0,this.position.left=0,this.size.height=e,this.size.width=this.defaultSize.width,this.sizeEmitter.emit({...this.size,layout:o})):o=="right"?(this.position.top=0,this.position.left=t-this.size.width,this.size.height=e,this.size.width=this.defaultSize.width,this.sizeEmitter.emit({...this.size,layout:o})):o=="separate-window"&&(this.isResizableEnable=!0,this.isDraggableEnable=!0,this.size={...this.defaultSize},this.position={top:50,left:50},this.sizeEmitter.emit({width:0,height:0,layout:o}))}dragStartHandler(o){if(!this.isDraggableEnable)return;this.isDragging=!0;const e=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,t=o instanceof MouseEvent?o.clientY:o.touches[0].clientY;this.dragStart.x=e-this.position.left,this.dragStart.y=t-this.position.top,o.preventDefault()}resizeStartHandler(o){o.preventDefault(),this.isResizableEnable&&(this.isResizing=!0)}_f1(o){const e=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,t=o instanceof MouseEvent?o.clientY:o.touches[0].clientY;if(this.isResizing){const n=this.viewContainer?.nativeElement?.offsetHeight??0,s=this.viewContainer?.nativeElement?.offsetWidth??0;let r=e-this.position.left,a=t-this.position.top;r=Math.min(r,s-this.position.left),a=Math.min(a,n-this.position.top);const l=300,c=200;r=Math.max(r,l),a=Math.max(a,c),this.size.width=r,this.size.height=a}else this.isDragging&&(this.position.left=e-this.dragStart.x,this.position.top=t-this.dragStart.y,this.checkStickPosition())}_f2(){this.isDragging=!1,this.isResizing=!1}checkStickPosition(){const e=this.viewContainer?.nativeElement?.offsetHeight??0,t=this.viewContainer?.nativeElement?.offsetWidth??0;this.position.left<5?this.position.left=0:this.position.left+this.size.width>t-5&&(this.position.left=t-this.size.width),this.position.top<5?this.position.top=0:this.position.top+this.size.height>e-5&&(this.position.top=e-this.size.height)}ngOnDestroy(){this._destroy.next(!1),this._destroy.complete(),this.position={top:0,left:0},this.size={width:0,height:0},this.dragStart={x:0,y:0},this.isResizing=!1,this.isDragging=!1,this.output="",this.waitingForInput=!1,this.selectedLanguage={}}static ɵfac=function(e){return new(e||Tn)(E(Xe),E(jt))};static ɵcmp=nt({type:Tn,selectors:[["app-terminal-view"]],hostBindings:function(e,t){e&1&&v("resize",function(s){return t.onResize(s)},Ot)("mousemove",function(s){return t._f1(s)},dt)("touchmove",function(s){return t._f1(s)},dt)("mouseup",function(){return t._f2()},dt)("touchend",function(){return t._f2()},dt)},inputs:{viewContainer:"viewContainer",selectedLayout:"selectedLayout"},outputs:{sizeEmitter:"sizeEmitter"},features:[Et],decls:18,vars:30,consts:[["id","terminal-view",1,"d-flex","flex-column",3,"mousedown","touchstart","ngStyle"],[1,"header","d-flex","justify-content-between","py-1","px-2",3,"ngClass"],[1,"terminal-control","d-flex"],[1,"bi","bi-play-fill","cursor-pointer",3,"click"],[1,"bi","bi-layout-sidebar","layout-bottom","cursor-pointer",3,"click","ngClass"],[1,"bi","bi-layout-sidebar","cursor-pointer",3,"click","ngClass"],[1,"bi","bi-layout-sidebar-reverse","cursor-pointer",3,"click","ngClass"],[1,"bi","bi-box-arrow-down-left","separate-window","cursor-pointer",3,"click","ngClass"],[1,"terminal-content","py-1","px-2","flex-grow-1","overflow-scroll",3,"ngClass"],[1,"terminal-output","d-block","m-0"],["autofocus","",1,"px-1","auto-input","w-100",3,"minWidth"],[1,"resize-handler","resize-handler-bottom","w-100","position-absolute"],[1,"resize-handler","resize-handler-right","h-100","position-absolute"],[1,"resize-handler","resize-handler-left","h-100","position-absolute"],[1,"resize-handler-window","d-flex"],["autofocus","",1,"px-1","auto-input","w-100",3,"keydown.enter"],[1,"resize-handler","resize-handler-bottom","w-100","position-absolute",3,"mousedown","touchstart"],[1,"resize-handler","resize-handler-right","h-100","position-absolute",3,"mousedown","touchstart"],[1,"resize-handler","resize-handler-left","h-100","position-absolute",3,"mousedown","touchstart"],[1,"resize-handler-window","d-flex",3,"mousedown","touchstart"],[1,"bi","bi-bounding-box","resize-handler-icon"]],template:function(e,t){e&1&&(u(0,"div",0),v("mousedown",function(s){return t.dragStartHandler(s)})("touchstart",function(s){return t.dragStartHandler(s)}),u(1,"div",1)(2,"div"),w(3,"Terminal"),h(),u(4,"div",2)(5,"i",3),v("click",function(){return t.runCode()}),h(),u(6,"i",4),v("click",function(){return t.layoutChangeHandler("bottom"),t.layoutChangeHandler("bottom")}),h(),u(7,"i",5),v("click",function(){return t.layoutChangeHandler("left"),t.layoutChangeHandler("left")}),h(),u(8,"i",6),v("click",function(){return t.layoutChangeHandler("right"),t.layoutChangeHandler("right")}),h(),u(9,"i",7),v("click",function(){return t.layoutChangeHandler("separate-window")}),h()()(),u(10,"div",8)(11,"pre",9),w(12),h(),Y(13,pu,1,2,"input",10),h(),Y(14,fu,1,0,"div",11)(15,mu,1,0,"div",12)(16,_u,1,0,"div",13)(17,Cu,2,0,"div",14),h()),e&2&&(L("ngStyle",Nr(10,uu,t.position.top+"px",t.position.left+"px",t.size.width+"px",t.size.height+"px",t.selectedLayout==="separate-window"?"move":"")),f(),L("ngClass",We(16,hu,t.isDarkMode,!t.isDarkMode)),f(5),L("ngClass",xe(19,gn,t.selectedLayout==="bottom")),f(),L("ngClass",xe(21,gn,t.selectedLayout==="left")),f(),L("ngClass",xe(23,gn,t.selectedLayout==="right")),f(),L("ngClass",xe(25,gn,t.selectedLayout==="separate-window")),f(),L("ngClass",We(27,gu,t.isDarkMode,!t.isDarkMode)),f(2),we(t.output),f(),j(t.waitingForInput?13:-1),f(),j(t.selectedLayout==="bottom"?14:t.selectedLayout==="right"?15:t.selectedLayout==="left"?16:t.selectedLayout==="separate-window"?17:-1))},dependencies:[kt,bn,si],styles:[`[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 10;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .theme-dark[_ngcontent-%COMP%] {
  background-color: #000;
  color: #ccc;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .theme-light[_ngcontent-%COMP%] {
  background-color: #eee;
  color: black;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header-dark[_ngcontent-%COMP%] {
  background-color: #333;
  color: white;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header-light[_ngcontent-%COMP%] {
  background-color: #aaa;
  color: black;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .terminal-control[_ngcontent-%COMP%] {
  gap: 0.5rem;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .active-border[_ngcontent-%COMP%] {
  border-bottom: 1px solid white;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .separate-window[_ngcontent-%COMP%]::before {
  transform: rotate(180deg);
  vertical-align: 0;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .layout-bottom[_ngcontent-%COMP%]::before {
  transform: rotate(-90deg);
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .terminal-content[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-family: monospace;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .terminal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  outline: none;
  border: none;
  background-color: unset;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .terminal-content[_ngcontent-%COMP%]   .auto-input[_ngcontent-%COMP%] {
  display: inline-block;
  white-space: pre;
  outline: none;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .terminal-output[_ngcontent-%COMP%] {
  white-space: pre-wrap;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler[_ngcontent-%COMP%] {
  opacity: 0;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler[_ngcontent-%COMP%]:hover {
  background-color: #13A10E;
  opacity: 1;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-bottom[_ngcontent-%COMP%] {
  height: 3px;
  top: 0;
  cursor: n-resize;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-left[_ngcontent-%COMP%] {
  width: 3px;
  right: 0;
  cursor: e-resize;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-right[_ngcontent-%COMP%] {
  width: 3px;
  left: 0;
  cursor: w-resize;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-window[_ngcontent-%COMP%] {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: se-resize;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-icon[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
[_nghost-%COMP%]   #terminal-view[_ngcontent-%COMP%]   .resize-handler-icon[_ngcontent-%COMP%]::before {
  vertical-align: 0.125rem;
}`]})}const yu=["viewContainer"],bu=["moreOptionsBtn"],vu=["moreOptionsContent"],Mu=["codeShareBtn"],xu=["codeShareContent"],pn=(i,o)=>({"btn-theme-dark":i,"btn-theme-light":o}),cr=(i,o)=>({"btn-nav-light":i,"btn-nav-dark":o}),et=i=>({active:i}),wu=(i,o)=>({"btn-theme-secondary-dark":i,"btn-theme-secondary-light":o}),Pu=(i,o,e)=>({"bg-success text-white":i,"bg-warning text-black":o,"bg-danger text-white":e}),Ou=i=>({float:i}),Su=(i,o)=>o.id;function Eu(i,o){i&1&&(u(0,"button",9),k(1,"span",50),h())}function Du(i,o){if(i&1){const e=H();u(0,"a",51),w(1,"</> codecrack"),h(),u(2,"nav",52)(3,"a",53),v("click",function(){C(e);const n=_();return y(n.setSelectedTab("editor"))}),w(4," Editor "),h(),u(5,"a",54),v("click",function(){C(e);const n=_();return y(n.setSelectedTab("diff-checker"))}),w(6," Diff-Checker "),h(),u(7,"a",54),v("click",function(){C(e);const n=_();return y(n.setSelectedTab("whiteboard"))}),w(8," Whiteboard "),h(),u(9,"a",54),v("click",function(){C(e);const n=_();return y(n.setSelectedTab("terminal"))}),w(10," Terminal "),h()()}if(i&2){const e=_();f(2),L("ngClass",We(5,cr,e.themeMode=="light",e.themeMode=="dark")),f(),L("ngClass",xe(8,et,e.selectedTab=="editor")),f(2),L("ngClass",xe(10,et,e.selectedTab=="diff-checker")),f(2),L("ngClass",xe(12,et,e.selectedTab=="whiteboard")),f(2),L("ngClass",xe(14,et,e.selectedTab=="terminal"))}}function Iu(i,o){if(i&1){const e=H();u(0,"li",55),ht(1,"titlecase"),v("click",function(){const n=C(e).$implicit,s=_();return y(s.selectLanguage(n))}),w(2),ht(3,"titlecase"),h()}if(i&2){const e=o.$implicit;L("title",(e==null||e.aliases==null?null:e.aliases[0])||co(1,2,e.id)),f(2),Me(" ",(e==null||e.aliases==null?null:e.aliases[0])||co(3,4,e.id)," ")}}function ku(i,o){i&1&&k(0,"i",23)}function Au(i,o){i&1&&k(0,"i",24)}function Tu(i,o){i&1&&k(0,"app-diff-checker-view")}function Fu(i,o){i&1&&k(0,"app-whiteboard-view")}function Lu(i,o){if(i&1){const e=H();u(0,"app-terminal-view",58),v("sizeEmitter",function(n){C(e);const s=_(2);return y(s.onTerminalResize(n))}),h()}if(i&2){const e=_(2);L("viewContainer",e.viewContainerRef)("selectedLayout",e.terminalLayout)}}function Bu(i,o){if(i&1&&(k(0,"app-editor-view",56),Y(1,Lu,1,2,"app-terminal-view",57)),i&2){const e=_();ys(xe(4,Ou,e.terminalLayout=="left"?"right":null)),L("size",e.editorSize),f(),j(e.selectedTab=="terminal"?1:-1)}}function zu(i,o){if(i&1){const e=H();u(0,"div",59)(1,"div",60)(2,"span")(3,"i"),w(4,"Code Share"),h()(),k(5,"hr",61),u(6,"p",62),w(7," Push to cloud and then share the link "),h(),u(8,"div",63),k(9,"input",64),h(),u(10,"div",65)(11,"button",66),v("click",function(){C(e);const n=_();return y(n.copyToClipboard())}),k(12,"i",67),h(),u(13,"button",68),v("click",function(){C(e);const n=_();return y(n.shareTheLink())}),k(14,"i",69),h(),u(15,"button",70),v("click",function(){C(e);const n=_();return y(n.saveFile())}),k(16,"i",71),h(),u(17,"button",72),v("click",function(){C(e);const n=_();return y(n.codeShareHandler("push-code"))}),k(18,"i",73),h(),u(19,"button",74),v("click",function(){C(e);const n=_();return y(n.codeShareHandler("pull-code"))}),k(20,"i",75),h()()()()}if(i&2){const e=o.codeShareURL;f(9),L("value",e)}}function Vu(i,o){if(i&1){const e=H();u(0,"div",76)(1,"div",77)(2,"button",78),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("scroll-to-top"))}),k(3,"i",79),h(),u(4,"button",80),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("scroll-to-bottom"))}),k(5,"i",81),h()(),u(6,"div",77)(7,"button",82),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("undo"))}),k(8,"i",83),h(),u(9,"button",84),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("redo"))}),k(10,"i",85),h()(),u(11,"div",77)(12,"button",86),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("font-up"))}),w(13," A "),k(14,"i",87),h(),u(15,"button",88),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("font-down"))}),w(16," A "),k(17,"i",89),h()(),u(18,"div",77)(19,"button",90),v("click",function(){C(e);const n=_();return y(n.moreOptionHanlder("word-wrap-toggle"))}),k(20,"i",91),h(),u(21,"button",92),v("click",function(){C(e);const n=_();return y(n.resetApp())}),k(22,"i",93),h()(),k(23,"div",77),h()}}class Oi{_appInit;_route;_router;_viewContainerRef;_cdr;_destroy=new Be;isMobile=!1;viewContainerRef;viewContainerHeight="";editorSize={width:0,height:0};selectedTab="editor";themeMode="light";selectedLanguage={};searchLanguage="";languages=[];codeShareURL="";moreOptionsPopoverInstance;moreOptionsBtn;moreOptionsContent;codeSharePopoverInstance;codeShareBtn;codeShareContent;bModal;bModalMeta={message:"This is a modal view",context:"",primary_btn_txt:"Confirm",secondary_btn_txt:"Close"};bToast;bToastMeta={type:"",message:"This is a sample toast"};terminalLayout="";constructor(o,e,t,n,s){this._appInit=o,this._route=e,this._router=t,this._viewContainerRef=n,this._cdr=s,this._appInit.themeMode$.pipe(re(this._destroy)).subscribe(r=>{this.themeMode=r,this.bodyTagThemeUpdateHandler()}),this._appInit.selectedLanguage$.pipe(re(this._destroy)).subscribe(r=>{this.selectedLanguage=r}),this._appInit.appAction$.pipe(re(this._destroy)).subscribe(r=>{const{action:a,payload:l}=r;a=="bToast"&&(this.bToastMeta.type=l.type,this.bToastMeta.message=l.message,this.bToast.show())}),this.checkIfMobile()}ngOnInit(){this.languages=this._appInit.languages,this.selectedTab=this._appInit.selectedTab;const o=this._route.snapshot.paramMap.get("codeShareId"),e=this._appInit.getCodeShareId();if(o&&o!=e)this._appInit.setCodeShareId(o),this._appInit.getCloudData();else{let t=null;e?t=e:t=String(new Date().getTime()),this._appInit.setCodeShareId(t),this._router.navigate([`${t}`])}this.codeShareURL=window.location.href}ngAfterViewInit(){const e=this.moreOptionsContent.createEmbeddedView(null).rootNodes[0];this.moreOptionsPopoverInstance=new ao(this.moreOptionsBtn.nativeElement,{html:!0,content:e,customClass:"no-padding-popover"});const n=this._viewContainerRef.createEmbeddedView(this.codeShareContent,{codeShareURL:this.codeShareURL}).rootNodes[0];this.codeSharePopoverInstance=new ao(this.codeShareBtn.nativeElement,{html:!0,content:n,customClass:"no-padding-popover"}),this.codeSharePopoverInstance.show(),this.codeSharePopoverInstance.hide();const s=document.getElementById("bModal");if(s){this.bModal=new Hr(s);const a=s.querySelector("#primary-btn"),l=s.querySelector("#secondary-btn");a&&a.addEventListener("click",()=>this.bModalPrimaryBtnClickHandler()),l&&l.addEventListener("click",()=>this.bModalSecondaryBtnClickHandler())}const r=document.getElementById("bToast");r&&(this.bToast=new Wr(r)),setTimeout(()=>{this.onResize(null)},0),this._cdr.detectChanges()}checkIfMobile(){this.isMobile=window.innerWidth<=768}setSelectedTab(o){o=="terminal"&&this.selectedTab=="terminal"&&(o="editor"),this.selectedTab=o,this._appInit.setSelectedTab(o),o!="terminal"&&this.onResize(null)}toggleTheme(){this.themeMode=this.themeMode=="light"?"dark":"light",this._appInit.toggleThemeMode(this.themeMode),this.bodyTagThemeUpdateHandler()}bodyTagThemeUpdateHandler(){this.themeMode=="dark"?document.body.setAttribute("data-bs-theme","dark"):document.body.setAttribute("data-bs-theme","light")}moreOptionHanlder(o){this.selectedLanguage.id=="json-compression"&&(o="json-compression"),this._appInit.dispatchAction(o)}selectLanguage(o){this.selectedLanguage=o,o.id!=="json-compression"&&this._appInit.setEditorLanguage(o)}filterLanguages(){const o=this.searchLanguage.toLowerCase().trim();this.languages=this._appInit.languages.filter(e=>{const t=e.id.includes(o);let n=!1;return e.hasOwnProperty("aliases")&&Array.isArray(e.aliases)&&(n=e.aliases.some(s=>s.toLowerCase().includes(o))),t||n})}resetApp(){this._appInit.resetApp()}openModal=()=>this.bModal?this.bModal.show():null;openToast=()=>this.bToast?this.bToast.show():null;onDocumentClick(o){if(this.moreOptionsPopoverInstance){const e=o.target;document.querySelector(".popover-content")?.contains(e)||this.moreOptionsPopoverInstance.hide()}if(this.codeSharePopoverInstance){const e=o.target;document.querySelector(".popover-content")?.contains(e)||this.codeSharePopoverInstance.hide()}}onResize(o){this.checkIfMobile();const e=document.getElementById("app-header")?.offsetHeight??0;this.viewContainerHeight=`calc(100vh - ${e}px)`,setTimeout(()=>{const t=this.viewContainerRef?.nativeElement?.offsetHeight??0,n=this.viewContainerRef?.nativeElement?.offsetWidth??0;this.editorSize={width:n,height:t},this.terminalLayout=this.terminalLayout||"bottom",this._cdr.detectChanges()},0)}onTerminalResize(o){const e=this.viewContainerRef?.nativeElement?.offsetHeight??0,t=this.viewContainerRef?.nativeElement?.offsetWidth??0,n=t-o.width>0?t-o.width:t,s=e-o.height>0?e-o.height:e;this.editorSize={width:n,height:s},this.terminalLayout=o.layout,this._cdr.detectChanges()}bModalPrimaryBtnClickHandler(){this.bModal&&this.bModal.hide(),this.bModalMeta.context=="pull-code"?this._appInit.getCloudData():this.bModalMeta.context=="push-code"&&this._appInit.setCloudData()}bModalSecondaryBtnClickHandler(){}codeShareHandler(o){o=="pull-code"?this.bModalMeta.message=`This will pull the code from "${this._appInit.getCodeShareId()}",
      and replace the current version of code. Would you like to continue?`:o=="push-code"&&(this.bModalMeta.message=`This will push the code to "${this._appInit.getCodeShareId()}",
      and replace the earlier version of code. Would you like to continue?`),this.codeSharePopoverInstance&&this.codeSharePopoverInstance.hide(),this.bModalMeta.context=o,this.bModal.show()}copyToClipboard(){navigator.clipboard.writeText(this.codeShareURL).then(()=>{this.bToastMeta.type="success",this.bToastMeta.message="Copied to Clipboard",this.bToast.show()}).catch(o=>{console.error("Error in copy to clipboard",o),this.bToastMeta.type="failed",this.bToastMeta.message="Failed to Copy",this.bToast.show()}).finally(()=>{this.codeSharePopoverInstance&&this.codeSharePopoverInstance.hide()})}shareTheLink(){navigator.share?navigator.share({title:"Codecrack",text:"A platform to write, format and share your code.",url:window.location.href}).then(()=>{console.log("Content shared successfully")}).catch(o=>{console.error("Error sharing content:",o)}):navigator.clipboard?this.copyToClipboard():(this.bToastMeta.type="failed",this.bToastMeta.message="Sharing is not supported on your browser.",this.bToast.show())}async saveFile(){const o=this._appInit.editorCode,e=this.selectedLanguage.extensions??[".txt"],t=this.selectedLanguage.aliases?.[0]??"Text",n=this.selectedLanguage.mimetypes?.[0]??"text/plain",s="codecrack-editor-"+this._appInit.getCodeShareId()+e[0],r={[n]:e};if("showSaveFilePicker"in window)try{const l=await(await window.showSaveFilePicker({suggestedName:s,types:[{description:`${t} file`,accept:r}]})).createWritable();await l.write(o),await l.close()}catch(a){console.warn("Native save canceled or failed",a)}else{const a=new Blob([o],{type:n}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=s,c.style.display="none",document.body.appendChild(c),c.click(),setTimeout(()=>{document.body.removeChild(c),URL.revokeObjectURL(l)},0)}}ngOnDestroy(){this._destroy.next(!1),this._destroy.complete(),this.viewContainerHeight=void 0,this.themeMode=void 0,this.moreOptionsPopoverInstance=void 0,this.codeSharePopoverInstance=void 0,this.selectedTab=void 0,this.selectedLanguage={},this.searchLanguage="",this.languages=void 0,this.codeShareURL="",this.editorSize={width:0,height:0}}static ɵfac=function(e){return new(e||Oi)(E(Xe),E(Zr),E(Ur),E(tt),E(Dt))};static ɵcmp=nt({type:Oi,selectors:[["app-layout"]],viewQuery:function(e,t){if(e&1&&(at(yu,5),at(bu,5),at(vu,5),at(Mu,5),at(xu,5)),e&2){let n;lt(n=ct())&&(t.viewContainerRef=n.first),lt(n=ct())&&(t.moreOptionsBtn=n.first),lt(n=ct())&&(t.moreOptionsContent=n.first),lt(n=ct())&&(t.codeShareBtn=n.first),lt(n=ct())&&(t.codeShareContent=n.first)}},hostBindings:function(e,t){e&1&&v("click",function(s){return t.onDocumentClick(s)},dt)("resize",function(s){return t.onResize(s)},Ot)},decls:71,vars:52,consts:[["codeShareBtn",""],["moreOptionsBtn",""],["viewContainer",""],["codeShareContent",""],["moreOptionsContent",""],["id","app-header"],[1,"navbar","navbar-expand-lg","navbar","border-bottom","p-0"],[1,"container-fluid","p-0","justify-content-between"],[1,"d-flex","align-items-center","justify-content-center"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasMobile","aria-controls","offcanvasMobile",1,"btn","btn-theme-borderless","py-0","ps-3","pe-2"],[1,"d-flex","align-items-center","pe-1"],[1,"language-dropdown","dropdown","px-2"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","dropdown-header","dropdown-toggle","p-1"],[1,"dropdown-menu","w-100","pt-0"],[1,"d-flex","flex-column","align-items-center","py-2"],["id","dropdownSearch","type","text","placeholder","Search...","autocomplete","off",1,"form-control","py-1",3,"ngModelChange","keyup","ngModel"],[1,"language-dropdown-body","p-0","overflow-auto"],["role","button","data-bs-toggle","tooltip",1,"dropdown-item","text-truncate","cursor-pointer",3,"title"],["data-bs-toggle","tooltip","title","Formatter",1,"btn","btn-theme","btn-theme-circle","py-1","px-2",3,"click","ngClass"],[1,"bi","bi-braces"],["data-bs-toggle","tooltip","title","Erase all",1,"btn","btn-theme","btn-theme-circle","py-1","px-2",3,"click","ngClass"],[1,"bi","bi-trash"],["data-bs-toggle","tooltip","title","Toggle theme",1,"btn","btn-theme","btn-theme-circle","py-1","px-2",3,"click","ngClass"],[1,"bi","bi-moon-stars"],[1,"bi","bi-sun"],["type","button","data-bs-toggle","popover","data-bs-placement","bottom",1,"btn","btn-theme","btn-theme-circle","py-1","px-2"],["data-bs-toggle","tooltip","title","Code share",1,"bi","bi-share-fill"],["data-bs-toggle","tooltip","title","More options",1,"bi","bi-three-dots-vertical"],["id","view-container",1,"position-relative"],["tabindex","-1","id","offcanvasMobile","aria-labelledby","offcanvasLabel",1,"offcanvas","offcanvas-start","w-75","w-sm-50","w-md-25","h-100"],[1,"offcanvas-header"],["id","offcanvasLabel",1,"navbar-brand","px-3","m-0","offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"offcanvas-body"],[1,"nav","d-flex","flex-column",3,"ngClass"],["data-bs-dismiss","offcanvas",1,"btn-nav","cursor-pointer","px-2","py-1","active",3,"click","ngClass"],["data-bs-dismiss","offcanvas",1,"btn-nav","cursor-pointer","px-2","py-1",3,"click","ngClass"],["id","bModal","tabindex","-1","aria-labelledby","bModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content","mx-auto","w-75","w-sm-100"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["id","secondary-btn","type","button","data-bs-dismiss","modal",1,"btn","btn-theme",3,"ngClass"],["id","primary-btn","type","button",1,"btn","btn-theme",3,"ngClass"],["id","bToast","role","alert","aria-live","assertive","aria-atomic","true",1,"toast","align-items-center","end-0","position-absolute","mx-3",3,"ngClass"],[1,"d-flex"],[1,"toast-body"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close","me-2","m-auto"],[1,"navbar-toggler-icon"],[1,"navbar-brand","px-3","m-0"],[1,"nav",3,"ngClass"],[1,"btn-nav","cursor-pointer","px-2","py-1","active",3,"click","ngClass"],[1,"btn-nav","cursor-pointer","px-2","py-1",3,"click","ngClass"],["role","button","data-bs-toggle","tooltip",1,"dropdown-item","text-truncate","cursor-pointer",3,"click","title"],[3,"size"],[3,"viewContainer","selectedLayout"],[3,"sizeEmitter","viewContainer","selectedLayout"],[1,"code-share-container","popover-content","d-flex","flex-column"],[1,"d-flex","flex-column","p-3"],[1,"m-0"],[1,"sub-title","m-0","py-2"],[1,"d-flex","align-items-center","justify-content-start"],["type","text","readonly","true",1,"outline-none","border","rounded","ps-2","w-100",3,"value"],[1,"pt-1"],["type","button","data-bs-toggle","tooltip","title","Copy to clipboard",1,"btn","btn-theme","btn-theme-circle","border","border-2","py-1","px-2","ms-1",3,"click"],[1,"bi","bi-clipboard2"],["data-bs-toggle","tooltip","title","Share",1,"btn","btn-theme","btn-theme-circle","border","border-2","py-1","px-2",3,"click"],[1,"bi","bi-send"],["data-bs-toggle","tooltip","title","Download",1,"btn","btn-theme","btn-theme-circle","border","border-2","py-1","px-2",3,"click"],[1,"bi","bi-download"],["data-bs-toggle","tooltip","title","Push code",1,"btn","btn-theme","btn-theme-circle","border","border-2","py-1","px-2",3,"click"],[1,"bi","bi-cloud-arrow-up"],["data-bs-toggle","tooltip","title","Pull code",1,"btn","btn-theme","btn-theme-circle","border","border-2","py-1","px-2",3,"click"],[1,"bi","bi-cloud-arrow-down"],[1,"popover-content","d-flex","flex-column"],[1,"d-flex","justify-content-center"],["data-bs-toggle","tooltip","title","Move to top",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-arrow-up"],["data-bs-toggle","tooltip","title","Move to bottom",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-arrow-down"],["data-bs-toggle","tooltip","title","Undo",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-arrow-counterclockwise"],["data-bs-toggle","tooltip","title","Redo",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-arrow-clockwise"],["data-bs-toggle","tooltip","title","Font increment",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","p-1",3,"click"],[1,"bi","bi-caret-up-fill","icon-super"],["data-bs-toggle","tooltip","title","Font decrement",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","p-1",3,"click"],[1,"bi","bi-caret-down-fill","icon-super"],["data-bs-toggle","tooltip","title","Toggle word wrap",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-text-wrap"],["data-bs-toggle","tooltip","title","Reset",1,"btn","btn-theme","btn-theme-circle","btn-theme-borderless","py-1","px-2",3,"click"],[1,"bi","bi-arrow-repeat"]],template:function(e,t){if(e&1){const n=H();u(0,"section",5)(1,"nav",6)(2,"div",7)(3,"span",8),Y(4,Eu,2,0,"button",9)(5,Du,11,16),h(),u(6,"span",10)(7,"div",11)(8,"button",12),w(9),h(),u(10,"ul",13)(11,"li",14)(12,"input",15),Yr("ngModelChange",function(r){return C(n),Gr(t.searchLanguage,r)||(t.searchLanguage=r),y(r)}),v("keyup",function(){return C(n),y(t.filterLanguages())}),h()(),u(13,"ul",16),Ce(14,Iu,4,6,"li",17,Su),h()()(),u(16,"button",18),v("click",function(){return C(n),y(t.moreOptionHanlder("format-code"))}),k(17,"i",19),h(),u(18,"button",20),v("click",function(){return C(n),y(t.moreOptionHanlder("clear-all"))}),k(19,"i",21),h(),u(20,"button",22),v("click",function(){return C(n),y(t.toggleTheme())}),Y(21,ku,1,0,"i",23)(22,Au,1,0,"i",24),h(),u(23,"button",25,0),k(25,"i",26),h(),u(26,"button",25,1),k(28,"i",27),h()()()()(),u(29,"div",28,2),Y(31,Tu,1,0,"app-diff-checker-view")(32,Fu,1,0,"app-whiteboard-view")(33,Bu,2,6),h(),u(34,"div",29)(35,"div",30)(36,"a",31),w(37,"</> codecrack"),h(),k(38,"button",32),h(),u(39,"div",33)(40,"nav",34)(41,"a",35),v("click",function(){return C(n),y(t.setSelectedTab("editor"))}),w(42," Editor "),h(),u(43,"a",36),v("click",function(){return C(n),y(t.setSelectedTab("diff-checker"))}),w(44," Diff-Checker "),h(),u(45,"a",36),v("click",function(){return C(n),y(t.setSelectedTab("whiteboard"))}),w(46," Whiteboard "),h(),u(47,"a",36),v("click",function(){return C(n),y(t.setSelectedTab("terminal"))}),w(48," Terminal "),h()()()(),u(49,"div",37)(50,"div",38)(51,"div",39)(52,"div",40),k(53,"button",41),h(),u(54,"div",42)(55,"p"),w(56),h()(),u(57,"div",43)(58,"button",44),w(59),h(),u(60,"button",45),w(61),h()()()()(),u(62,"div",46)(63,"div",47)(64,"div",48),w(65),h(),k(66,"button",49),h()(),ni(67,zu,21,1,"ng-template",null,3,lo)(69,Vu,24,0,"ng-template",null,4,lo)}if(e&2){let n;f(4),j(t.isMobile?4:5),f(5),Me(" ",(t.selectedLanguage==null||t.selectedLanguage.aliases==null?null:t.selectedLanguage.aliases[0])||t.selectedLanguage.id," "),f(3),jr("ngModel",t.searchLanguage),f(2),ye(t.languages),f(2),L("ngClass",We(22,pn,t.themeMode=="light",t.themeMode=="dark")),f(2),L("ngClass",We(25,pn,t.themeMode=="light",t.themeMode=="dark")),f(2),L("ngClass",We(28,pn,t.themeMode=="light",t.themeMode=="dark")),f(),j(t.themeMode=="light"?21:22),f(8),ge("height",t.viewContainerHeight),f(2),j((n=t.selectedTab)==="diff-checker"?31:n==="whiteboard"?32:33),f(9),L("ngClass",We(31,cr,t.themeMode=="light",t.themeMode=="dark")),f(),L("ngClass",xe(34,et,t.selectedTab=="editor")),f(2),L("ngClass",xe(36,et,t.selectedTab=="diff-checker")),f(2),L("ngClass",xe(38,et,t.selectedTab=="whiteboard")),f(2),L("ngClass",xe(40,et,t.selectedTab=="terminal")),f(9),we(t.bModalMeta.message),f(2),L("ngClass",We(42,wu,t.themeMode=="light",t.themeMode=="dark")),f(),Me(" ",t.bModalMeta.secondary_btn_txt," "),f(),L("ngClass",We(45,pn,t.themeMode=="light",t.themeMode=="dark")),f(),Me(" ",t.bModalMeta.primary_btn_txt," "),f(),L("ngClass",$r(48,Pu,t.bToastMeta.type=="success",t.bToastMeta.type=="warning",t.bToastMeta.type=="error")),f(3),Me(" ",t.bToastMeta.message," ")}},dependencies:[kt,bn,$i,$t,di,wn,En,Dn,An,Tn,ri],styles:[`[_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {
  font-family: monospace;
}
[_nghost-%COMP%]   .btn-theme-light[_ngcontent-%COMP%] {
  background-color: white !important;
  color: #343a40 !important;
}
[_nghost-%COMP%]   .btn-theme-dark[_ngcontent-%COMP%] {
  color: white !important;
  background-color: #343a40 !important;
}
[_nghost-%COMP%]   .btn-theme-circle[_ngcontent-%COMP%] {
  border-radius: 100%;
  transform: scale(0.8);
}
[_nghost-%COMP%]   .btn-nav[_ngcontent-%COMP%] {
  font-family: monospace;
  font-size: 0.85rem;
  text-decoration: none;
  color: inherit;
}
[_nghost-%COMP%]   .btn-nav.active[_ngcontent-%COMP%] {
  text-decoration: underline;
}
[_nghost-%COMP%]   .btn-nav-light[_ngcontent-%COMP%] {
  color: #343a40 !important;
}
[_nghost-%COMP%]   .btn-nav-dark[_ngcontent-%COMP%] {
  color: white !important;
}
[_nghost-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   #dropdownSearch[_ngcontent-%COMP%] {
  width: 90%;
}
[_nghost-%COMP%]   .language-dropdown-body[_ngcontent-%COMP%] {
  max-height: 40vh;
}
[_nghost-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {
  background-color: #343a40 !important;
  color: white !important;
}
[_nghost-%COMP%]   #bToast[_ngcontent-%COMP%] {
  z-index: 1000;
  top: 10vh;
}
[_nghost-%COMP%]   .code-share-container[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {
  font-size: smaller;
}`]})}export{Oi as Layout};
