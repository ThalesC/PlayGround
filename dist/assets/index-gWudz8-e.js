(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const $a="186",Nc=0,Io=1,Fc=2,Js=1,Gl=2,ls=3,un=0,Ze=1,je=2,Oi=0,us=1,ds=2,Uo=3,No=4,Oc=5,Bn=100,Bc=101,kc=102,zc=103,Gc=104,Hc=200,Vc=201,Wc=202,Xc=203,Hl=204,Vl=205,qc=206,Yc=207,Zc=208,$c=209,Kc=210,Jc=211,Qc=212,jc=213,th=214,sa=0,ra=1,aa=2,fs=3,oa=4,la=5,ca=6,ha=7,Ka=0,eh=1,ih=2,wi=0,Wl=1,Xl=2,ql=3,Ja=4,Yl=5,Zl=6,$l=7,Kl=300,dn=301,Hn=302,Mr=303,Sr=304,pr=306,ua=1e3,Ni=1001,da=1002,Ne=1003,nh=1004,ws=1005,ze=1006,yr=1007,cn=1008,ti=1009,Jl=1010,Ql=1011,ps=1012,Qa=1013,Ei=1014,di=1015,Ti=1016,ja=1017,to=1018,ms=1020,jl=35902,tc=35899,ec=1021,ic=1022,fi=1023,ki=1026,hn=1027,eo=1028,io=1029,fn=1030,no=1031,so=1033,Qs=33776,js=33777,tr=33778,er=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,Ma=37488,Sa=37489,sr=37490,ya=37491,ba=37808,wa=37809,Ea=37810,Ta=37811,Aa=37812,Ra=37813,Ca=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Ua=37819,Na=37820,Fa=37821,Oa=36492,Ba=36494,ka=36495,za=36283,Ga=36284,rr=36285,Ha=36286,sh=3200,Va=0,rh=1,Ki="",Ye="srgb",ar="srgb-linear",or="linear",ae="srgb",br=7680,ah=519,oh=512,lh=513,ch=514,ro=515,hh=516,uh=517,ao=518,dh=519,nc=35044,Fo="300 es",bi=2e3,gs=2001;function fh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ph(){const s=lr("canvas");return s.style.display="block",s}const Oo={};function cr(...s){const t="THREE."+s.shift();console.log(t,...s)}function sc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ut(...s){s=sc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Jt(...s){s=sc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function zn(...s){const t=s.join(" ");t in Oo||(Oo[t]=!0,Ut(...s))}function mh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const gh={[sa]:ra,[aa]:ca,[oa]:ha,[fs]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:fs};class pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,Wa=180/Math.PI;function Ji(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function _h(s,t){return(s%t+t)%t}function Er(s,t,e){return(1-e)*s+e*t}function yi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vo=class vo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vo.prototype.isVector2=!0;let It=vo;class Wn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==p||h!==v){let m=l*u+c*p+h*v+d*y;m<0&&(u=-u,p=-p,v=-v,y=-y,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),R=Math.sin(S);f=Math.sin(f*S)/R,o=Math.sin(o*S)/R,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+y*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+y*o;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*d+l*p-c*u,t[e+1]=l*v+h*u+c*d-o*p,t[e+2]=c*v+h*p+o*u-l*d,t[e+3]=h*v-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),p=l(n/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xo=class xo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xo.prototype.isVector3=!0;let P=xo;const Tr=new P,Bo=new Wn,Mo=class Mo{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],y=n[0],m=n[3],f=n[6],S=n[1],R=n[4],M=n[7],E=n[2],w=n[5],T=n[8];return r[0]=a*y+o*S+l*E,r[3]=a*m+o*R+l*w,r[6]=a*f+o*M+l*T,r[1]=c*y+h*S+d*E,r[4]=c*m+h*R+d*w,r[7]=c*f+h*M+d*T,r[2]=u*y+p*S+v*E,r[5]=u*m+p*R+v*w,r[8]=u*f+p*M+v*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,v=e*d+i*u+n*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=d*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=u*y,t[4]=(h*e-n*l)*y,t[5]=(n*r-o*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mo.prototype.isMatrix3=!0;let Ot=Mo;const Ar=new Ot,ko=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vh(){const s={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(n.r=Gn(n.r),n.g=Gn(n.g),n.b=Gn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ki?or:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ar]:{primaries:t,whitePoint:i,transfer:or,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),s}const Zt=vh();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vn;class xh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vn===void 0&&(vn=lr("canvas")),vn.width=t.width,vn.height=t.height;const n=vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=vn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mh=0;class oo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Rr(n[a].image)):r.push(Rr(n[a]))}else r=Rr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Sh=0;const Cr=new P;class Ge extends pn{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=Ni,n=Ni,r=ze,a=cn,o=fi,l=ti,c=Ge.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ji(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Kl;Ge.DEFAULT_ANISOTROPY=1;const So=class So{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,M=(p+1)/2,E=(f+1)/2,w=(h+u)/4,T=(d+y)/4,g=(v+m)/4;return R>M&&R>E?R<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(R),n=w/i,r=T/i):M>E?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=w/n,r=g/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=T/r,n=g/r),this.set(i,n,r,e),this}let S=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};So.prototype.isVector4=!0;let Se=So;class yh extends pn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new Ge(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new oo(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends yh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rc extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fr=class fr{constructor(t,e,i,n,r,a,o,l,c,h,d,u,p,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,p,v,y,m)}set(t,e,i,n,r,a,o,l,c,h,d,u,p,v,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/xn.setFromMatrixColumn(t,0).length(),r=1/xn.setFromMatrixColumn(t,1).length(),a=1/xn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,v=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,v=c*h,y=c*d;e[0]=u+y*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,v=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,v=o*h,y=o*d;e[0]=l*h,e[4]=v*c-p,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=v*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+v,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*l,p=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=p*d-v,e[2]=v*d-p,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wh,t,Eh)}lookAt(t,e,i){const n=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Vi.crossVectors(i,$e),Vi.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Vi.crossVectors(i,$e)),Vi.normalize(),Es.crossVectors($e,Vi),n[0]=Vi.x,n[4]=Es.x,n[8]=$e.x,n[1]=Vi.y,n[5]=Es.y,n[9]=$e.y,n[2]=Vi.z,n[6]=Es.z,n[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],S=i[3],R=i[7],M=i[11],E=i[15],w=n[0],T=n[4],g=n[8],b=n[12],C=n[1],D=n[5],F=n[9],H=n[13],N=n[2],z=n[6],$=n[10],W=n[14],nt=n[3],q=n[7],tt=n[11],it=n[15];return r[0]=a*w+o*C+l*N+c*nt,r[4]=a*T+o*D+l*z+c*q,r[8]=a*g+o*F+l*$+c*tt,r[12]=a*b+o*H+l*W+c*it,r[1]=h*w+d*C+u*N+p*nt,r[5]=h*T+d*D+u*z+p*q,r[9]=h*g+d*F+u*$+p*tt,r[13]=h*b+d*H+u*W+p*it,r[2]=v*w+y*C+m*N+f*nt,r[6]=v*T+y*D+m*z+f*q,r[10]=v*g+y*F+m*$+f*tt,r[14]=v*b+y*H+m*W+f*it,r[3]=S*w+R*C+M*N+E*nt,r[7]=S*T+R*D+M*z+E*q,r[11]=S*g+R*F+M*$+E*tt,r[15]=S*b+R*H+M*W+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],y=t[7],m=t[11],f=t[15],S=l*p-c*u,R=o*p-c*d,M=o*u-l*d,E=a*p-c*h,w=a*u-l*h,T=a*d-o*h;return e*(y*S-m*R+f*M)-i*(v*S-m*E+f*w)+n*(v*R-y*E+f*T)-r*(v*M-y*w+m*T)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],y=t[13],m=t[14],f=t[15],S=e*o-i*a,R=e*l-n*a,M=e*c-r*a,E=i*l-n*o,w=i*c-r*o,T=n*c-r*l,g=h*y-d*v,b=h*m-u*v,C=h*f-p*v,D=d*m-u*y,F=d*f-p*y,H=u*f-p*m,N=S*H-R*F+M*D+E*C-w*b+T*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return t[0]=(o*H-l*F+c*D)*z,t[1]=(n*F-i*H-r*D)*z,t[2]=(y*T-m*w+f*E)*z,t[3]=(u*w-d*T-p*E)*z,t[4]=(l*C-a*H-c*b)*z,t[5]=(e*H-n*C+r*b)*z,t[6]=(m*M-v*T-f*R)*z,t[7]=(h*T-u*M+p*R)*z,t[8]=(a*F-o*C+c*g)*z,t[9]=(i*C-e*F-r*g)*z,t[10]=(v*w-y*M+f*S)*z,t[11]=(d*M-h*w-p*S)*z,t[12]=(o*b-a*D-l*g)*z,t[13]=(e*D-i*b+n*g)*z,t[14]=(y*R-v*E-m*S)*z,t[15]=(h*E-d*R+u*S)*z,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,v=r*d,y=a*h,m=a*d,f=o*d,S=l*c,R=l*h,M=l*d,E=i.x,w=i.y,T=i.z;return n[0]=(1-(y+f))*E,n[1]=(p+M)*E,n[2]=(v-R)*E,n[3]=0,n[4]=(p-M)*w,n[5]=(1-(u+f))*w,n[6]=(m+S)*w,n[7]=0,n[8]=(v+R)*T,n[9]=(m-S)*T,n[10]=(1-(u+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=xn.set(n[0],n[1],n[2]).length();const o=xn.set(n[4],n[5],n[6]).length(),l=xn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),li.copy(this);const c=1/a,h=1/o,d=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,e.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=bi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),p=(i+n)/(i-n);let v,y;if(l)v=r/(a-r),y=a*r/(a-r);else if(o===bi)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===gs)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=bi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),p=-(i+n)/(i-n);let v,y;if(l)v=1/(a-r),y=a/(a-r);else if(o===bi)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===gs)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fr.prototype.isMatrix4=!0;let ue=fr;const xn=new P,li=new ue,wh=new P(0,0,0),Eh=new P(1,1,1),Vi=new P,Es=new P,$e=new P,Go=new ue,Ho=new Wn;class Qi{constructor(t=0,e=0,i=0,n=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Th=0;const Vo=new P,Mn=new Wn,Ri=new ue,Ts=new P,Yn=new P,Ah=new P,Rh=new Wn,Wo=new P(1,0,0),Xo=new P(0,1,0),qo=new P(0,0,1),Yo={type:"added"},Ch={type:"removed"},Sn={type:"childadded",child:null},Pr={type:"childremoved",child:null};class Re extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new P,e=new Qi,i=new Wn,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ot}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.premultiply(Mn),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,e){return Vo.copy(t).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Yn,Ts,this.up):Ri.lookAt(Ts,Yn,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),Mn.setFromRotationMatrix(Ri),this.quaternion.premultiply(Mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yo),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ch),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yo),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,t,Ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,Rh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.DEFAULT_UP=new P(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _t extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ph={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},As={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=_h(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Dr(a,r,t+1/3),this.g=Dr(a,r,t),this.b=Dr(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=ac[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Zt.workingToColorSpace(ke.copy(this),t),Math.round($t(ke.r*255,0,255))*65536+Math.round($t(ke.g*255,0,255))*256+Math.round($t(ke.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ke.copy(this),e);const i=ke.r,n=ke.g,r=ke.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ye){Zt.workingToColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,n=ke.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(As);const i=Er(Wi.h,As.h,e),n=Er(Wi.s,As.s,e),r=Er(Wi.l,As.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new kt;kt.NAMES=ac;class co{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lh extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ci=new P,Ci=new P,Ir=new P,Pi=new P,yn=new P,bn=new P,Zo=new P,Ur=new P,Nr=new P,Fr=new P,Or=new Se,Br=new Se,kr=new Se;class si{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ci.subVectors(t,e),n.cross(ci);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ci.subVectors(n,e),Ci.subVectors(i,e),Ir.subVectors(t,e);const a=ci.dot(ci),o=ci.dot(Ci),l=ci.dot(Ir),c=Ci.dot(Ci),h=Ci.dot(Ir),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Or.setScalar(0),Br.setScalar(0),kr.setScalar(0),Or.fromBufferAttribute(t,e),Br.fromBufferAttribute(t,i),kr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,i,n){return ci.subVectors(i,e),Ci.subVectors(t,e),ci.cross(Ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ci.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return si.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;yn.subVectors(n,i),bn.subVectors(r,i),Ur.subVectors(t,i);const l=yn.dot(Ur),c=bn.dot(Ur);if(l<=0&&c<=0)return e.copy(i);Nr.subVectors(t,n);const h=yn.dot(Nr),d=bn.dot(Nr);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(yn,a);Fr.subVectors(t,r);const p=yn.dot(Fr),v=bn.dot(Fr);if(v>=0&&p<=v)return e.copy(r);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(bn,o);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Zo.subVectors(r,n),o=(d-h)/(d-h+(p-v)),e.copy(n).addScaledVector(Zo,o);const f=1/(m+y+u);return a=y*f,o=u*f,e.copy(i).addScaledVector(yn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zn),Cs.subVectors(this.max,Zn),wn.subVectors(t.a,Zn),En.subVectors(t.b,Zn),Tn.subVectors(t.c,Zn),Xi.subVectors(En,wn),qi.subVectors(Tn,En),tn.subVectors(wn,Tn);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-tn.z,tn.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,tn.z,0,-tn.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-tn.y,tn.x,0];return!zr(e,wn,En,Tn,Cs)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,wn,En,Tn,Cs))?!1:(Ps.crossVectors(Xi,qi),e=[Ps.x,Ps.y,Ps.z],zr(e,wn,En,Tn,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,Rs=new mn,wn=new P,En=new P,Tn=new P,Xi=new P,qi=new P,tn=new P,Zn=new P,Cs=new P,Ps=new P,en=new P;function zr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){en.fromArray(s,r);const o=n.x*Math.abs(en.x)+n.y*Math.abs(en.y)+n.z*Math.abs(en.z),l=t.dot(en),c=e.dot(en),h=i.dot(en);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ee=new P,Ls=new It;let Dh=0;class ai extends pn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class oc extends ai{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class lc extends ai{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends ai{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Ih=new mn,$n=new P,Gr=new P;class xs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ih.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$n.subVectors(t,this.center);const e=$n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector($n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($n.copy(t.center).add(Gr)),this.expandByPoint($n.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Uh=0;const ni=new ue,Hr=new Re,An=new P,Ke=new mn,Kn=new mn,De=new P;class Ie extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fh(t)?lc:oc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Ke.min,Kn.min),Ke.expandByPoint(De),De.addVectors(Ke.max,Kn.max),Ke.expandByPoint(De)):(Ke.expandByPoint(Kn.min),Ke.expandByPoint(Kn.max))}Ke.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(An.fromBufferAttribute(t,c),De.add(An)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new P,l[g]=new P;const c=new P,h=new P,d=new P,u=new It,p=new It,v=new It,y=new P,m=new P;function f(g,b,C){c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,g),p.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),o[g].add(y),o[b].add(y),o[C].add(y),l[g].add(m),l[b].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,b=S.length;g<b;++g){const C=S[g],D=C.start,F=C.count;for(let H=D,N=D+F;H<N;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const R=new P,M=new P,E=new P,w=new P;function T(g){E.fromBufferAttribute(n,g),w.copy(E);const b=o[g];R.copy(b),R.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(w,b);const D=M.dot(l[g])<0?-1:1;a.setXYZW(g,R.x,R.y,R.z,D)}for(let g=0,b=S.length;g<b;++g){const C=S[g],D=C.start,F=C.count;for(let H=D,N=D+F;H<N;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new ai(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ve=new P;class hr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ai(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vr=new P,Fh=new P,Oh=new Ot;class $i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Vr.subVectors(i,e).cross(Fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Oh.getNormalMatrix(t),n=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Bh=0;class Xn extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=us,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new It().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xa extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rn;const Jn=new P,Cn=new P,Pn=new P,Ln=new It,Qn=new It,cc=new ue,Ds=new P,jn=new P,Is=new P,$o=new It,Wr=new It,Ko=new It;class Jo extends Re{constructor(t=new Xa){if(super(),this.isSprite=!0,this.type="Sprite",Rn===void 0){Rn=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nh(e,5);Rn.setIndex([0,1,2,0,2,3]),Rn.setAttribute("position",new hr(i,3,0,!1)),Rn.setAttribute("uv",new hr(i,2,3,!1))}this.geometry=Rn,this.material=t,this.center=new It(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cn.setFromMatrixScale(this.matrixWorld),cc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cn.multiplyScalar(-Pn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Us(Ds.set(-.5,-.5,0),Pn,a,Cn,n,r),Us(jn.set(.5,-.5,0),Pn,a,Cn,n,r),Us(Is.set(.5,.5,0),Pn,a,Cn,n,r),$o.set(0,0),Wr.set(1,0),Ko.set(1,1);let o=t.ray.intersectTriangle(Ds,jn,Is,!1,Jn);if(o===null&&(Us(jn.set(-.5,.5,0),Pn,a,Cn,n,r),Wr.set(0,1),o=t.ray.intersectTriangle(Ds,Is,jn,!1,Jn),o===null))return;const l=t.ray.origin.distanceTo(Jn);l<t.near||l>t.far||e.push({distance:l,point:Jn.clone(),uv:si.getInterpolation(Jn,Ds,jn,Is,$o,Wr,Ko,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Us(s,t,e,i,n,r){Ln.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Qn.x=r*Ln.x-n*Ln.y,Qn.y=n*Ln.x+r*Ln.y):Qn.copy(Ln),s.copy(t),s.x+=Qn.x,s.y+=Qn.y,s.applyMatrix4(cc)}const Di=new P,Xr=new P,Ns=new P,Fs=new P;class hc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Xr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Fs.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=Fs.dot(this.direction),l=-Fs.dot(Ns),c=Fs.lengthSq(),h=Math.abs(1-a*a);let d,u,p,v;if(h>0)if(d=a*l-o,u=a*o-l,v=r*h,d>=0)if(u>=-v)if(u<=v){const y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Xr).addScaledVector(Ns,u),p}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),n=Di.dot(Di)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,v=e.x-a.x,y=e.y-a.y,m=e.z-a.z,f=i.x-a.x,S=i.y-a.y,R=i.z-a.z,M=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let T,g,b,C,D,F,H,N,z,$,W,nt;if(M>=E&&M>=w?(b=l,F=d,z=v,nt=f,l>=0?(T=c,g=h,C=u,D=p,H=y,N=m,$=S,W=R):(T=h,g=c,C=p,D=u,H=m,N=y,$=R,W=S)):E>=w?(b=c,F=u,z=y,nt=S,c>=0?(T=h,g=l,C=p,D=d,H=m,N=v,$=R,W=f):(T=l,g=h,C=d,D=p,H=v,N=m,$=f,W=R)):(b=h,F=p,z=m,nt=R,h>=0?(T=l,g=c,C=d,D=u,H=v,N=y,$=f,W=S):(T=c,g=l,C=u,D=d,H=y,N=v,$=S,W=f)),b===0)return null;const q=T/b,tt=g/b,it=1/b,Pt=C-q*F,At=D-tt*F,de=H-q*z,Kt=N-tt*z,ee=$-q*nt,Y=W-tt*nt,j=ee*Kt-Y*de,Mt=Pt*Y-At*ee,Ft=de*At-Kt*Pt;if(n){if(j<0||Mt<0||Ft<0)return null}else if((j<0||Mt<0||Ft<0)&&(j>0||Mt>0||Ft>0))return null;const vt=j+Mt+Ft;if(vt===0)return null;const Vt=it*(j*F+Mt*z+Ft*nt);return(vt>0?Vt<0:Vt>0)?null:this.at(Vt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qo=new ue,nn=new hc,Os=new xs,jo=new P,Bs=new P,ks=new P,zs=new P,qr=new P,Gs=new P,tl=new P,Hs=new P;class Wt extends Re{constructor(t=new Ie,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(qr.fromBufferAttribute(d,t),a?Gs.addScaledVector(qr,h):Gs.addScaledVector(qr.sub(e),h))}e.add(Gs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),nn.copy(t.ray).recast(t.near),!(Os.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Os,jo)===null||nn.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Qo.copy(r).invert(),nn.copy(t.ray).applyMatrix4(Qo),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,nn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],f=a[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,E=R;M<E;M+=3){const w=o.getX(M),T=o.getX(M+1),g=o.getX(M+2);n=Vs(this,f,t,i,c,h,d,w,T,g),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const S=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);n=Vs(this,a,t,i,c,h,d,S,R,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const m=u[v],f=a[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,E=R;M<E;M+=3){const w=M,T=M+1,g=M+2;n=Vs(this,f,t,i,c,h,d,w,T,g),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const S=m,R=m+1,M=m+2;n=Vs(this,a,t,i,c,h,d,S,R,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function kh(s,t,e,i,n,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===un,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:s}}function Vs(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Bs),s.getVertexPosition(l,ks),s.getVertexPosition(c,zs);const h=kh(s,t,e,i,Bs,ks,zs,tl);if(h){const d=new P;si.getBarycoord(tl,Bs,ks,zs,d),n&&(h.uv=si.getInterpolatedAttribute(n,o,l,c,d,new It)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,l,c,d,new It)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};si.getNormal(Bs,ks,zs,u.normal),h.face=u,h.barycoord=d}return h}class uc extends Ge{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el extends ai{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dn=new ue,il=new ue,Ws=[],nl=new mn,zh=new ue,ts=new Wt,es=new xs;class is extends Wt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,zh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),nl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),es.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(i),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Dn),il.multiplyMatrices(i,Dn),ts.matrixWorld=il,ts.raycast(t,Ws);for(let a=0,o=Ws.length;a<o;a++){const l=Ws[a];l.instanceId=r,l.object=this,e.push(l)}Ws.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new uc(new Float32Array(n*this.count),n,this.count,eo,di));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sn=new xs,Gh=new It(.5,.5),Xs=new P;class ho{constructor(t=new $i,e=new $i,i=new $i,n=new $i,r=new $i,a=new $i){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],v=r[8],y=r[9],m=r[10],f=r[11],S=r[12],R=r[13],M=r[14],E=r[15];if(n[0].setComponents(c-a,p-h,f-v,E-S).normalize(),n[1].setComponents(c+a,p+h,f+v,E+S).normalize(),n[2].setComponents(c+o,p+d,f+y,E+R).normalize(),n[3].setComponents(c-o,p-d,f-y,E-R).normalize(),i)n[4].setComponents(l,u,m,M).normalize(),n[5].setComponents(c-l,p-u,f-m,E-M).normalize();else if(n[4].setComponents(c-l,p-u,f-m,E-M).normalize(),e===bi)n[5].setComponents(c+l,p+u,f+m,E+M).normalize();else if(e===gs)n[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(t){sn.center.set(0,0,0);const e=Gh.distanceTo(t.center);return sn.radius=.7071067811865476+e,sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Xs.x=n.normal.x>0?t.max.x:t.min.x,Xs.y=n.normal.y>0?t.max.y:t.min.y,Xs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dc extends Ge{constructor(t=[],e=dn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hh extends Ge{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _s extends Ge{constructor(t,e,i=Ei,n,r,a,o=Ne,l=Ne,c,h=ki,d=1){if(h!==ki&&h!==hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Vh extends _s{constructor(t,e=Ei,i=dn,n,r,a=Ne,o=Ne,l,c=ki){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fc extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ei extends Ie{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,n,a,2),v("x","z","y",1,-1,t,i,-e,n,a,3),v("x","y","z",1,-1,t,e,i,n,r,4),v("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function v(y,m,f,S,R,M,E,w,T,g,b){const C=M/T,D=E/g,F=M/2,H=E/2,N=w/2,z=T+1,$=g+1;let W=0,nt=0;const q=new P;for(let tt=0;tt<$;tt++){const it=tt*D-H;for(let Pt=0;Pt<z;Pt++){const At=Pt*C-F;q[y]=At*S,q[m]=it*R,q[f]=N,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(Pt/T),d.push(1-tt/g),W+=1}}for(let tt=0;tt<g;tt++)for(let it=0;it<T;it++){const Pt=u+it+z*tt,At=u+it+z*(tt+1),de=u+(it+1)+z*(tt+1),Kt=u+(it+1)+z*tt;l.push(Pt,At,Kt),l.push(At,de,Kt),nt+=6}o.addGroup(p,nt,b),p+=nt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class vs extends Ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new It;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=i+d/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Ie{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],p=[];let v=0;const y=[],m=i/2;let f=0;S(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(p,2));function S(){const M=new P,E=new P;let w=0;const T=(e-t)/i;for(let g=0;g<=r;g++){const b=[],C=g/r,D=C*(e-t)+t;for(let F=0;F<=n;F++){const H=F/n,N=H*l+o,z=Math.sin(N),$=Math.cos(N);E.x=D*z,E.y=-C*i+m,E.z=D*$,d.push(E.x,E.y,E.z),M.set(z,T,$).normalize(),u.push(M.x,M.y,M.z),p.push(H,1-C),b.push(v++)}y.push(b)}for(let g=0;g<n;g++)for(let b=0;b<r;b++){const C=y[b][g],D=y[b+1][g],F=y[b+1][g+1],H=y[b][g+1];(t>0||b!==0)&&(h.push(C,D,H),w+=3),(e>0||b!==r-1)&&(h.push(D,F,H),w+=3)}c.addGroup(f,w,0),f+=w}function R(M){const E=v,w=new It,T=new P;let g=0;const b=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),v++;const D=v;for(let F=0;F<=n;F++){const N=F/n*l+o,z=Math.cos(N),$=Math.sin(N);T.x=b*$,T.y=m*C,T.z=b*z,d.push(T.x,T.y,T.z),u.push(0,C,0),w.x=z*.5+.5,w.y=$*.5*C+.5,p.push(w.x,w.y),v++}for(let F=0;F<n;F++){const H=E+F,N=D+F;M===!0?h.push(N,N+1,H):h.push(N+1,N,H),g+=3}c.addGroup(f,g,M===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pi extends oe{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const R=new P,M=new P,E=new P;for(let w=0;w<e.length;w+=3)p(e[w+0],R),p(e[w+1],M),p(e[w+2],E),l(R,M,E,S)}function l(S,R,M,E){const w=E+1,T=[];for(let g=0;g<=w;g++){T[g]=[];const b=S.clone().lerp(M,g/w),C=R.clone().lerp(M,g/w),D=w-g;for(let F=0;F<=D;F++)F===0&&g===w?T[g][F]=b:T[g][F]=b.clone().lerp(C,F/D)}for(let g=0;g<w;g++)for(let b=0;b<2*(w-g)-1;b++){const C=Math.floor(b/2);b%2===0?(u(T[g][C+1]),u(T[g+1][C]),u(T[g][C])):(u(T[g][C+1]),u(T[g+1][C+1]),u(T[g+1][C]))}}function c(S){const R=new P;for(let M=0;M<r.length;M+=3)R.x=r[M+0],R.y=r[M+1],R.z=r[M+2],R.normalize().multiplyScalar(S),r[M+0]=R.x,r[M+1]=R.y,r[M+2]=R.z}function h(){const S=new P;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];const M=m(S)/2/Math.PI+.5,E=f(S)/Math.PI+.5;a.push(M,1-E)}v(),d()}function d(){for(let S=0;S<a.length;S+=6){const R=a[S+0],M=a[S+2],E=a[S+4],w=Math.max(R,M,E),T=Math.min(R,M,E);w>.9&&T<.1&&(R<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,R){const M=S*3;R.x=t[M+0],R.y=t[M+1],R.z=t[M+2]}function v(){const S=new P,R=new P,M=new P,E=new P,w=new It,T=new It,g=new It;for(let b=0,C=0;b<r.length;b+=9,C+=6){S.set(r[b+0],r[b+1],r[b+2]),R.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),w.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),g.set(a[C+4],a[C+5]),E.copy(S).add(R).add(M).divideScalar(3);const D=m(E);y(w,C+0,S,D),y(T,C+2,R,D),y(g,C+4,M,D)}}function y(S,R,M,E){E<0&&S.x===1&&(a[R]=S.x-1),M.x===0&&M.z===0&&(a[R]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.vertices,t.indices,t.radius,t.detail)}}class Fi extends Ms{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fi(t.radius,t.detail)}}class Ue extends Ms{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ue(t.radius,t.detail)}}class uo extends Ms{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uo(t.radius,t.detail)}}class Ss extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,p=[],v=[],y=[],m=[];for(let f=0;f<h;f++){const S=f*u-a;for(let R=0;R<c;R++){const M=R*d-r;v.push(M,-S,0),y.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const R=S+c*f,M=S+c*(f+1),E=S+1+c*(f+1),w=S+1+c*f;p.push(R,M,w),p.push(M,E,w)}this.setIndex(p),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}class fo extends Ie{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,p=new P,v=new It;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}d+=u}for(let y=0;y<n;y++){const m=y*(i+1);for(let f=0;f<i;f++){const S=f+m,R=S,M=S+i+1,E=S+i+2,w=S+1;o.push(R,M,w),o.push(M,E,w)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class po extends Ie{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new P,p=new P,v=new P;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let f=0;f<=n;f++){const S=f/n*r;p.x=(t+e*Math.cos(m))*Math.cos(S),p.y=(t+e*Math.cos(m))*Math.sin(S),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),v.subVectors(p,u).normalize(),h.push(v.x,v.y,v.z),d.push(f/n),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=n;m++){const f=(n+1)*y+m-1,S=(n+1)*(y-1)+m-1,R=(n+1)*(y-1)+m,M=(n+1)*y+m;l.push(f,S,M),l.push(S,R,M)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ur extends Ie{constructor(t=1,e=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],d=new P,u=new P,p=new P,v=new P,y=new P,m=new P,f=new P;for(let R=0;R<=i;++R){const M=R/i*r*Math.PI*2;S(M,r,a,t,p),S(M+.01,r,a,t,v),m.subVectors(v,p),f.addVectors(v,p),y.crossVectors(m,f),f.crossVectors(y,m),y.normalize(),f.normalize();for(let E=0;E<=n;++E){const w=E/n*Math.PI*2,T=-e*Math.cos(w),g=e*Math.sin(w);d.x=p.x+(T*f.x+g*y.x),d.y=p.y+(T*f.y+g*y.y),d.z=p.z+(T*f.z+g*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(R/i),h.push(E/n)}}for(let R=1;R<=i;R++)for(let M=1;M<=n;M++){const E=(n+1)*(R-1)+(M-1),w=(n+1)*R+(M-1),T=(n+1)*R+M,g=(n+1)*(R-1)+M;o.push(E,w,g),o.push(w,T,g)}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2));function S(R,M,E,w,T){const g=Math.cos(R),b=Math.sin(R),C=E/M*R,D=Math.cos(C);T.x=w*(2+D)*.5*g,T.y=w*(2+D)*b*.5,T.z=w*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}function Vn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(sl(n))n.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(sl(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Xe(s){const t={};for(let e=0;e<s.length;e++){const i=Vn(s[e]);for(const n in i)t[n]=i[n]}return t}function sl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Wh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Xh={clone:Vn,merge:Xe};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vn(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(n.value);break;case"v2":this.uniforms[i].value=new It().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Se().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Zh extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mr extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $h extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mo extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jh extends mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Yr=new ue,rl=new P,al=new P;class mc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Yr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qs=new P,Ys=new Wn,vi=new P;class gc extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qs,Ys,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(qs,Ys,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new P,ol=new It,ll=new It;class Qe extends gc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,ol,ll),e.subVectors(ll,ol)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qh extends mc{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Ui extends mo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class go extends gc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jh extends mc{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const In=-90,Un=1;class tu extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qe(In,Un,t,e);n.layers=this.layers,this.add(n);const r=new Qe(In,Un,t,e);r.layers=this.layers,this.add(r);const a=new Qe(In,Un,t,e);a.layers=this.layers,this.add(a);const o=new Qe(In,Un,t,e);o.layers=this.layers,this.add(o);const l=new Qe(In,Un,t,e);l.layers=this.layers,this.add(l);const c=new Qe(In,Un,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class eu extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const hl=new ue;class _c{constructor(t,e,i=0,n=1/0){this.ray=new hc(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(t,e=!0,i=[]){return qa(t,this,i,e),i.sort(ul),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)qa(t[n],this,i,e);return i.sort(ul),i}}function ul(s,t){return s.distance-t.distance}function qa(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)qa(r[a],t,e,!0)}}const yo=class yo{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};yo.prototype.isMatrix2=!0;let dl=yo;function fl(s,t,e,i){const n=iu(i);switch(e){case ec:return s*t;case eo:return s*t/n.components*n.byteLength;case io:return s*t/n.components*n.byteLength;case fn:return s*t*2/n.components*n.byteLength;case no:return s*t*2/n.components*n.byteLength;case ic:return s*t*3/n.components*n.byteLength;case fi:return s*t*4/n.components*n.byteLength;case so:return s*t*4/n.components*n.byteLength;case Qs:case js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(s,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(s,8)*Math.max(t,8)/2;case _a:case va:case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xa:case sr:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ba:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case za:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rr:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iu(s){switch(s){case ti:case Jl:return{byteLength:1,components:1};case ps:case Ql:case Ti:return{byteLength:2,components:1};case ja:case to:return{byteLength:2,components:4};case Ei:case Qa:case di:return{byteLength:4,components:1};case jl:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function vc(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ff=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:vu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:yu,color_fragment:bu,color_pars_fragment:wu,color_pars_vertex:Eu,color_vertex:Tu,common:Au,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Pu,displacementmap_vertex:Lu,emissivemap_fragment:Du,emissivemap_pars_fragment:Iu,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Fu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Bu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Ku,envmap_vertex:zu,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:Vu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_pars_fragment:qu,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:Zu,lights_pars_begin:$u,lights_toon_fragment:Ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:ju,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:id,lights_fragment_begin:nd,lights_fragment_maps:sd,lights_fragment_end:rd,lightprobes_pars_fragment:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:_d,morphcolor_vertex:vd,morphnormal_vertex:xd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:yd,normal_fragment_maps:bd,normal_pars_fragment:wd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Ld,opaque_fragment:Dd,packing:Id,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Vd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:jd,uv_pars_fragment:tf,uv_pars_vertex:ef,uv_vertex:nf,worldpos_vertex:sf,background_vert:rf,background_frag:af,backgroundCube_vert:of,backgroundCube_frag:lf,cube_vert:cf,cube_frag:hf,depth_vert:uf,depth_frag:df,distance_vert:ff,distance_frag:pf,equirect_vert:mf,equirect_frag:gf,linedashed_vert:_f,linedashed_frag:vf,meshbasic_vert:xf,meshbasic_frag:Mf,meshlambert_vert:Sf,meshlambert_frag:yf,meshmatcap_vert:bf,meshmatcap_frag:wf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:Rf,meshphysical_vert:Cf,meshphysical_frag:Pf,meshtoon_vert:Lf,meshtoon_frag:Df,points_vert:If,points_frag:Uf,shadow_vert:Nf,shadow_frag:Ff,sprite_vert:Of,sprite_frag:Bf},dt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Mi={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mi.physical={uniforms:Xe([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Zs={r:0,b:0,g:0},kf=new ue,xc=new Ot;xc.set(-1,0,0,0,1,0,0,0,1);function zf(s,t,e,i,n,r){const a=new kt(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const M=S.backgroundBlurriness>0;R=t.get(R,M)}return R}function v(S){let R=!1;const M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,R){const M=p(R);M&&(M.isCubeTexture||M.mapping===pr)?(c===void 0&&(c=new Wt(new ei(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Vn(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xc),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wt(new Ss(2,2),new Ai({name:"BackgroundMaterial",uniforms:Vn(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(Zs,pc(s)),e.buffers.color.setClear(Zs.r,Zs.g,Zs.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:v,addToRenderList:y,dispose:f}}function Gf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(D,F,H,N,z){let $=!1;const W=d(D,N,H,F);r!==W&&(r=W,c(r.object)),$=p(D,N,H,z),$&&v(D,N,H,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(D,F,H,N),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,F,H,N){const z=N.wireframe===!0;let $=i[F.id];$===void 0&&($={},i[F.id]=$);const W=D.isInstancedMesh===!0?D.id:0;let nt=$[W];nt===void 0&&(nt={},$[W]=nt);let q=nt[H.id];q===void 0&&(q={},nt[H.id]=q);let tt=q[z];return tt===void 0&&(tt=u(l()),q[z]=tt),tt}function u(D){const F=[],H=[],N=[];for(let z=0;z<e;z++)F[z]=0,H[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,F,H,N){const z=r.attributes,$=F.attributes;let W=0;const nt=H.getAttributes();for(const q in nt)if(nt[q].location>=0){const it=z[q];let Pt=$[q];if(Pt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),it===void 0||it.attribute!==Pt||Pt&&it.data!==Pt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function v(D,F,H,N){const z={},$=F.attributes;let W=0;const nt=H.getAttributes();for(const q in nt)if(nt[q].location>=0){let it=$[q];it===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));const Pt={};Pt.attribute=it,it&&it.data&&(Pt.data=it.data),z[q]=Pt,W++}r.attributes=z,r.attributesNum=W,r.index=N}function y(){const D=r.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function m(D){f(D,0)}function f(D,F){const H=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;H[D]=1,N[D]===0&&(s.enableVertexAttribArray(D),N[D]=1),z[D]!==F&&(s.vertexAttribDivisor(D,F),z[D]=F)}function S(){const D=r.newAttributes,F=r.enabledAttributes;for(let H=0,N=F.length;H<N;H++)F[H]!==D[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function R(D,F,H,N,z,$,W){W===!0?s.vertexAttribIPointer(D,F,H,z,$):s.vertexAttribPointer(D,F,H,N,z,$)}function M(D,F,H,N){y();const z=N.attributes,$=H.getAttributes(),W=F.defaultAttributeValues;for(const nt in $){const q=$[nt];if(q.location>=0){let tt=z[nt];if(tt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){const it=tt.normalized,Pt=tt.itemSize,At=t.get(tt);if(At===void 0)continue;const de=At.buffer,Kt=At.type,ee=At.bytesPerElement,Y=Kt===s.INT||Kt===s.UNSIGNED_INT||tt.gpuType===Qa;if(tt.isInterleavedBufferAttribute){const j=tt.data,Mt=j.stride,Ft=tt.offset;if(j.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)f(q.location+vt,j.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);s.bindBuffer(s.ARRAY_BUFFER,de);for(let vt=0;vt<q.locationSize;vt++)R(q.location+vt,Pt/q.locationSize,Kt,it,Mt*ee,(Ft+Pt/q.locationSize*vt)*ee,Y)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)f(q.location+j,tt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,de);for(let j=0;j<q.locationSize;j++)R(q.location+j,Pt/q.locationSize,Kt,it,Pt*ee,Pt/q.locationSize*j*ee,Y)}}else if(W!==void 0){const it=W[nt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(q.location,it);break;case 3:s.vertexAttrib3fv(q.location,it);break;case 4:s.vertexAttrib4fv(q.location,it);break;default:s.vertexAttrib1fv(q.location,it)}}}}S()}function E(){b();for(const D in i){const F=i[D];for(const H in F){const N=F[H];for(const z in N){const $=N[z];for(const W in $)h($[W].object),delete $[W];delete N[z]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const H in F){const N=F[H];for(const z in N){const $=N[z];for(const W in $)h($[W].object),delete $[W];delete N[z]}}delete i[D.id]}function T(D){for(const F in i){const H=i[F];for(const N in H){const z=H[N];if(z[D.id]===void 0)continue;const $=z[D.id];for(const W in $)h($[W].object),delete $[W];delete z[D.id]}}}function g(D){for(const F in i){const H=i[F],N=D.isInstancedMesh===!0?D.id:0,z=H[N];if(z!==void 0){for(const $ in z){const W=z[$];for(const nt in W)h(W[nt].object),delete W[nt];delete z[$]}delete H[N],Object.keys(H).length===0&&delete i[F]}}}function b(){C(),a=!0,r!==n&&(r=n,c(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Hf(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vf(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==fi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const g=T===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ti&&T!==di&&!g&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:w}}function Wf(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new $i,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||v===null||v.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,R=S*4;let M=f.clippingState||null;l.value=M,M=h(v,u,R,p);for(let E=0;E!==R;++E)M[E]=e[E];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,M=p;R!==y;++R,M+=4)a.copy(d[R]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const kn=4,Xf=6,qf=20,Yf=256,ns=new go,pl=new kt;let Zr=null,$r=0,Kr=0,Jr=!1;const Zf=new P,rn=new P;class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=Zf}=r;Zr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,$r,Kr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Nn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dn||t.mapping===Hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Ti,format:fi,colorSpace:ar,depthBuffer:!1},n=gl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$f(r)),this._blurMaterial=Jf(r,t,e),this._ggxMaterial=Kf(r,t,e)}return n}_compileMaterial(t){const e=new Wt(new Ie,t);this._renderer.compile(e,ns)}_sceneToCubeUV(t,e,i,n,r){const l=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(pl),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new ei,new ri({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(pl),f=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));const E=this._cubeSize;Nn(n,M*E,R>2?E:0,E,E),d.setRenderTarget(n),f&&d.render(y,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===dn||t.mapping===Hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Nn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ns)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-kn?i-v+kn:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-e,Nn(r,m,f,3*y,2*y),n.setRenderTarget(r),n.render(o,ns),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,Nn(t,m,f,3*y,2*y),n.setRenderTarget(t),n.render(o,ns)}_blur(t,e,i,n){const r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],d=3*h*(n>this._lodMax-kn?n-this._lodMax+kn:0),u=4*(this._cubeSize-h);Nn(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ns)}}function $f(s){const t=[],e=[];let i=s;const n=s-kn+1+Xf;for(let r=0;r<n;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,v=new Float32Array(p*u*d),y=new Float32Array(p*u*d);for(let f=0;f<d;f++){const S=f%3*2/3-1,R=f>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];v.set(M,p*u*f);for(let E=0;E<u;E++){const w=h[E*2]*2-1,T=h[E*2+1]*2-1;f===0?rn.set(1,T,w):f===1?rn.set(-w,1,-T):f===2?rn.set(-w,T,1):f===3?rn.set(-1,T,-w):f===4?rn.set(-w,-1,T):rn.set(w,T,-1),rn.toArray(y,(f*u+E)*p)}}const m=new Ie;m.setAttribute("position",new ai(v,p)),m.setAttribute("outputDirection",new ai(y,p)),e.push(new Wt(m,null)),i>kn&&i--}return{lodMeshes:e,sizeLods:t}}function gl(s,t,e){const i=new mi(s,t,e);return i.texture.mapping=pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Kf(s,t,e){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jf(s,t,e){return new Ai({name:"SphericalGaussianBlur",defines:{SAMPLES:qf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function _l(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function vl(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function gr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mc extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new dc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ei(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Oi});r.uniforms.tEquirect.value=e;const a=new Wt(n,r),o=e.minFilter;return e.minFilter===cn&&(e.minFilter=ze),new tu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}function Qf(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Mr||p===Sr)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new Mc(v.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,v=p===Mr||p===Sr,y=p===dn||p===Hn;if(v||y){let m=e.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new ml(s)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return v&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new ml(s)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Mr?u.mapping=dn:p===Sr&&(u.mapping=Hn),u}function l(u){let p=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function jf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&zn("WebGLRenderer: "+i+" extension not supported."),n}}}function tp(s,t,e,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete n[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const S=p.array;y=p.version;for(let R=0,M=S.length;R<M;R+=3){const E=S[R+0],w=S[R+1],T=S[R+2];u.push(E,w,w,T,T,E)}}else{const S=v.array;y=v.version;for(let R=0,M=S.length/3-1;R<M;R+=3){const E=R+0,w=R+1,T=R+2;u.push(E,w,w,T,T,E)}}const m=new(v.count>=65535?lc:oc)(u,1);m.version=y;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ep(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,p){p!==0&&(s.drawElementsInstanced(i,u,r,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ip(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function np(s,t,e){const i=new WeakMap,n=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let E=o.attributes.position.count*M,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*w*4*d),g=new rc(T,E,w,d);g.type=di,g.needsUpdate=!0;const b=M*4;for(let D=0;D<d;D++){const F=f[D],H=S[D],N=R[D],z=E*w*4*D;for(let $=0;$<F.count;$++){const W=$*b;v===!0&&(n.fromBufferAttribute(F,$),T[z+W+0]=n.x,T[z+W+1]=n.y,T[z+W+2]=n.z,T[z+W+3]=0),y===!0&&(n.fromBufferAttribute(H,$),T[z+W+4]=n.x,T[z+W+5]=n.y,T[z+W+6]=n.z,T[z+W+7]=0),m===!0&&(n.fromBufferAttribute(N,$),T[z+W+8]=n.x,T[z+W+9]=n.y,T[z+W+10]=n.z,T[z+W+11]=N.itemSize===4?n.w:1)}}u={count:d,texture:g,size:new It(E,w)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(s,"morphTargetBaseInfluence",y),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function sp(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const rp={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function ap(s,t,e,i,n,r){const a=new mi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ie;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));const h=new Zh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Wt(c,h),u=new go(-1,1,1,-1,0,1);let p=null,v=null,y=!1,m,f=null,S=[],R=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let w=0;w<S.length;w++){const T=S[w];T.setSize&&T.setSize(M,E)}},this.setEffects=function(M){S=M,R=S.length>0&&S[0].isRenderPass===!0;const E=a.width,w=a.height;S.length>0&&o===null&&(o=new mi(E,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new mi(E,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){const g=S[T];g.setSize&&g.setSize(E,w)}},this.begin=function(M,E){if(y||M.toneMapping===wi&&S.length===0)return!1;if(f=E,E!==null){const w=E.width,T=E.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=wi,!0},this.hasRenderPass=function(){return R},this.end=function(M,E){M.toneMapping=m,y=!0;let w=a,T=o;for(let g=0;g<S.length;g++){const b=S[g];b.enabled!==!1&&(b.render(M,T,w,E),b.needsSwap!==!1&&(w=T,T=T===o?l:o))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,h.defines={},Zt.getTransfer(p)===ae&&(h.defines.SRGB_TRANSFER="");const g=rp[v];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(f),M.render(d,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Sc=new Ge,Ya=new _s(1,1),yc=new rc,bc=new bh,wc=new dc,xl=[],Ml=[],Sl=new Float32Array(16),yl=new Float32Array(9),bl=new Float32Array(4);function qn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=xl[n];if(r===void 0&&(r=new Float32Array(n),xl[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function _r(s,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function up(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;bl.set(i),s.uniformMatrix2fv(this.addr,!1,bl),Pe(e,i)}}function dp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;yl.set(i),s.uniformMatrix3fv(this.addr,!1,yl),Pe(e,i)}}function fp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Sl.set(i),s.uniformMatrix4fv(this.addr,!1,Sl),Pe(e,i)}}function pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function yp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ya.compareFunction=e.isReversedDepthBuffer()?ao:ro,r=Ya):r=Sc,e.setTexture2D(t||r,n)}function bp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||bc,n)}function wp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||wc,n)}function Ep(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||yc,n)}function Tp(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Ap(s,t){s.uniform1fv(this.addr,t)}function Rp(s,t){const e=qn(t,this.size,2);s.uniform2fv(this.addr,e)}function Cp(s,t){const e=qn(t,this.size,3);s.uniform3fv(this.addr,e)}function Pp(s,t){const e=qn(t,this.size,4);s.uniform4fv(this.addr,e)}function Lp(s,t){const e=qn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dp(s,t){const e=qn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ip(s,t){const e=qn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Up(s,t){s.uniform1iv(this.addr,t)}function Np(s,t){s.uniform2iv(this.addr,t)}function Fp(s,t){s.uniform3iv(this.addr,t)}function Op(s,t){s.uniform4iv(this.addr,t)}function Bp(s,t){s.uniform1uiv(this.addr,t)}function kp(s,t){s.uniform2uiv(this.addr,t)}function zp(s,t){s.uniform3uiv(this.addr,t)}function Gp(s,t){s.uniform4uiv(this.addr,t)}function Hp(s,t,e){const i=this.cache,n=t.length,r=_r(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ya:a=Sc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Vp(s,t,e){const i=this.cache,n=t.length,r=_r(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||bc,r[a])}function Wp(s,t,e){const i=this.cache,n=t.length,r=_r(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||wc,r[a])}function Xp(s,t,e){const i=this.cache,n=t.length,r=_r(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||yc,r[a])}function qp(s){switch(s){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return kp;case 36295:return zp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class Zp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class $p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function wl(s,t){s.seq.push(t),s.map[t.id]=t}function Kp(s,t,e){const i=s.name,n=i.length;for(Qr.lastIndex=0;;){const r=Qr.exec(i),a=Qr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){wl(e,c===void 0?new Yp(o,s,t):new Zp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new $p(o),wl(e,d)),e=d}}}class ir{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Kp(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function El(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Jp=37297;let Qp=0;function jp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Tl=new Ot;function tm(s){Zt._getMatrix(Tl,Zt.workingColorSpace,s);const t=`mat3( ${Tl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case or:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Al(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jp(s.getShaderSource(t),o)}else return r}function em(s,t){const e=tm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const im={[Wl]:"Linear",[Xl]:"Reinhard",[ql]:"Cineon",[Ja]:"ACESFilmic",[Zl]:"AgX",[$l]:"Neutral",[Yl]:"Custom"};function nm(s,t){const e=im[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new P;function sm(){Zt.getLuminanceCoefficients($s);const s=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function am(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function om(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function cs(s){return s!==""}function Rl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(s){return s.replace(lm,hm)}const cm=new Map;function hm(s,t){let e=Ht[t];if(e===void 0){const i=cm.get(t);if(i!==void 0)e=Ht[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Za(e)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(s){return s.replace(um,dm)}function dm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ll(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fm={[Js]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function pm(s){return fm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mm={[dn]:"ENVMAP_TYPE_CUBE",[Hn]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function gm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _m={[Hn]:"ENVMAP_MODE_REFRACTION"};function vm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_m[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xm={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[eh]:"ENVMAP_BLENDING_MIX",[ih]:"ENVMAP_BLENDING_ADD"};function Mm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xm[s.combine]||"ENVMAP_BLENDING_NONE"}function Sm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ym(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pm(e),c=gm(e),h=vm(e),d=Mm(e),u=Sm(e),p=rm(e),v=am(r),y=n.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(cs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(cs).join(`
`),f.length>0&&(f+=`
`)):(m=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),f=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==wi?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,em("linearToOutputTexel",e.outputColorSpace),sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=Za(a),a=Rl(a,e),a=Cl(a,e),o=Za(o),o=Rl(o,e),o=Cl(o,e),a=Pl(a),o=Pl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=S+m+a,M=S+f+o,E=El(n,n.VERTEX_SHADER,R),w=El(n,n.FRAGMENT_SHADER,M);n.attachShader(y,E),n.attachShader(y,w),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function T(D){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(y)||"",H=n.getShaderInfoLog(E)||"",N=n.getShaderInfoLog(w)||"",z=F.trim(),$=H.trim(),W=N.trim();let nt=!0,q=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,E,w);else{const tt=Al(n,E,"vertex"),it=Al(n,w,"fragment");Jt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+tt+`
`+it)}else z!==""?Ut("WebGLProgram: Program Info Log:",z):($===""||W==="")&&(q=!1);q&&(D.diagnostics={runnable:nt,programLog:z,vertexShader:{log:$,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(E),n.deleteShader(w),g=new ir(n,y),b=om(n,y)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(y,Jp)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}let bm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Em(t),e.set(t,i)),i}}class Em{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Tm(s){return s===fn||s===sr||s===rr}function Am(s,t,e,i,n,r){const a=new lo,o=new wm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,C,D,F,H){const N=D.fog,z=F.geometry,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,nt=t.get(g.envMap||$,W),q=nt&&nt.mapping===pr?nt.image.height:null,tt=p[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Ut("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=it!==void 0?it.length:0;let At=0;z.morphAttributes.position!==void 0&&(At=1),z.morphAttributes.normal!==void 0&&(At=2),z.morphAttributes.color!==void 0&&(At=3);let de,Kt,ee,Y;if(tt){const pe=Mi[tt];de=pe.vertexShader,Kt=pe.fragmentShader}else{de=g.vertexShader,Kt=g.fragmentShader;const pe=o.getVertexShaderStage(g),ie=o.getFragmentShaderStage(g);o.update(g,pe,ie),ee=pe.id,Y=ie.id}const j=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,Vt=!!g.map,Ae=!!g.matcap,Xt=!!nt,jt=!!g.aoMap,fe=!!g.lightMap,Yt=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,Le=!!g.displacementMap,qe=!!g.emissiveMap,Me=!!g.metalnessMap,be=!!g.roughnessMap,U=g.anisotropy>0,Fe=g.clearcoat>0,re=g.dispersion>0,A=g.retroreflectivity>0,_=g.iridescence>0,O=g.sheen>0,G=g.transmission>0,X=U&&!!g.anisotropyMap,rt=Fe&&!!g.clearcoatMap,at=Fe&&!!g.clearcoatNormalMap,Z=Fe&&!!g.clearcoatRoughnessMap,J=_&&!!g.iridescenceMap,ot=_&&!!g.iridescenceThicknessMap,Et=O&&!!g.sheenColorMap,ut=O&&!!g.sheenRoughnessMap,lt=!!g.specularMap,Tt=!!g.specularColorMap,Dt=!!g.specularIntensityMap,zt=G&&!!g.transmissionMap,I=G&&!!g.thicknessMap,ct=!!g.gradientMap,K=!!g.alphaMap,ht=g.alphaTest>0,mt=!!g.alphaHash,et=!!g.extensions;let Rt=wi;g.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const bt={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:de,fragmentShader:Kt,defines:g.defines,customVertexShaderID:ee,customFragmentShaderID:Y,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Vt,matcap:Ae,envMap:Xt,envMapMode:Xt&&nt.mapping,envMapCubeUVHeight:q,aoMap:jt,lightMap:fe,bumpMap:Yt,normalMap:xe,displacementMap:Le,emissiveMap:qe,normalMapObjectSpace:xe&&g.normalMapType===rh,normalMapTangentSpace:xe&&g.normalMapType===Va,packedNormalMap:xe&&g.normalMapType===Va&&Tm(g.normalMap.format),metalnessMap:Me,roughnessMap:be,anisotropy:U,anisotropyMap:X,clearcoat:Fe,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:Z,dispersion:re,retroreflection:A,iridescence:_,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Dt,transmission:G,transmissionMap:zt,thicknessMap:I,gradientMap:ct,opaque:g.transparent===!1&&g.blending===us&&g.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:mt,combine:g.combine,mapUv:Vt&&v(g.map.channel),aoMapUv:jt&&v(g.aoMap.channel),lightMapUv:fe&&v(g.lightMap.channel),bumpMapUv:Yt&&v(g.bumpMap.channel),normalMapUv:xe&&v(g.normalMap.channel),displacementMapUv:Le&&v(g.displacementMap.channel),emissiveMapUv:qe&&v(g.emissiveMap.channel),metalnessMapUv:Me&&v(g.metalnessMap.channel),roughnessMapUv:be&&v(g.roughnessMap.channel),anisotropyMapUv:X&&v(g.anisotropyMap.channel),clearcoatMapUv:rt&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(g.sheenRoughnessMap.channel),specularMapUv:lt&&v(g.specularMap.channel),specularColorMapUv:Tt&&v(g.specularColorMap.channel),specularIntensityMapUv:Dt&&v(g.specularIntensityMap.channel),transmissionMapUv:zt&&v(g.transmissionMap.channel),thicknessMapUv:I&&v(g.thicknessMap.channel),alphaMapUv:K&&v(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||U),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Vt||K),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:At,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Vt&&g.map.isVideoTexture===!0&&Zt.getTransfer(g.map.colorSpace)===ae,decodeVideoTextureEmissive:qe&&g.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(g.emissiveMap.colorSpace)===ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===je,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:et&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&g.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)b.push(C),b.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(f(b,g),S(b,g),b.push(s.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function f(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function S(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function R(g){const b=p[g.type];let C;if(b){const D=Mi[b];C=Xh.clone(D.uniforms)}else C=g.uniforms;return C}function M(g,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new ym(s,b,g,n),c.push(C),h.set(b,C)),C}function E(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function Rm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Il(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,y,m,f){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:p,material:v,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},s[t]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=v,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=f),t++,S}function l(u,p,v,y,m,f,S){S.reversedDepth===!0&&(m=-m);const R=o(u,p,v,y,m,f);v.transmission>0?i.push(R):v.transparent===!0?n.push(R):e.push(R)}function c(u,p,v,y,m,f){const S=o(u,p,v,y,m,f);v.transmission>0?i.unshift(S):v.transparent===!0?n.unshift(S):e.unshift(S)}function h(u,p){e.length>1&&e.sort(u||Cm),i.length>1&&i.sort(p||Dl),n.length>1&&n.sort(p||Dl)}function d(){for(let u=t,p=s.length;u<p;u++){const v=s[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Pm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Il,s.set(i,[a])):n>=r.length?(a=new Il,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Im=0;function Um(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Nm(s){const t=new Lm,e=Dm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new ue,a=new ue;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,v=0,y=0,m=0,f=0,S=0,R=0,M=0,E=0,w=0,T=0,g=0,b=0,C=0;c.sort(Um);for(let F=0,H=c.length;F<H;F++){const N=c[F],z=N.color,$=N.intensity,W=N.distance;let nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===fn?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*$,d+=z.g*$,u+=z.b*$;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],$);C++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[v]=it,i.sunShadowMap[v]=nt;const Pt=tt.getViewportCount();for(let At=0;At<Pt;At++)i.sunShadowMatrix[y+At]=tt.getMatrix(At),i.sunShadowCascade[y+At]=tt._cascadeData[At];y+=Pt,v++}i.sun[p]=q,p++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=N.shadow.matrix,E++}i.directional[m]=q,m++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(z).multiplyScalar($),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[S]=q;const tt=N.shadow;if(N.map&&(i.spotLightMap[g]=N.map,g++,tt.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[S]=tt.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,i.spotShadow[S]=it,i.spotShadowMap[S]=nt,T++}S++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(z).multiplyScalar($),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[R]=q,R++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=nt,i.pointShadowMatrix[f]=N.shadow.matrix,w++}i.point[f]=q,f++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar($),q.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[M]=q,M++}}R>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==S||D.rectAreaLength!==R||D.hemiLength!==M||D.numSunShadows!==v||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==T||D.numSpotMaps!==g||D.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=R,i.point.length=f,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+g-b,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=S,D.rectAreaLength=R,D.hemiLength=M,D.numSunShadows=v,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=T,D.numSpotMaps=g,D.numLightProbes=C,i.version=Im++)}function l(c,h){let d=0,u=0,p=0,v=0,y=0,m=0;const f=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){const M=c[S];if(M.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),d++}else if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(f),u++}else if(M.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(f),v++}else if(M.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Ul(s){const t=new Nm(s),e=[],i=[],n=[];function r(u){d.camera=u,e.length=0,i.length=0,n.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fm(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Ul(s),t.set(n,[o])):r>=a.length?(o=new Ul(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,km=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],zm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Nl=new ue,ss=new P,jr=new P;function Gm(s,t,e){let i=new ho;const n=new It,r=new It,a=new Se,o=new $h,l=new Kh,c={},h=e.maxTextureSize,d={[un]:Ze,[Ze]:un,[je]:je},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ie;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let f=this.type;this.render=function(w,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Gl&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);const b=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==this.type;H&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=w.length;N<z;N++){const $=w[N],W=$.shadow;if(W===void 0){Ut("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const nt=W.getFrameExtents();n.multiply(nt),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,W.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ls){if($.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new mi(n.x,n.y,{format:fn,type:Ti,minFilter:ze,magFilter:ze,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new _s(n.x,n.y,di),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=ki,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne}else $.isPointLight?(W.map=new Mc(n.x),W.map.depthTexture=new Vh(n.x,Ei)):(W.map=new mi(n.x,n.y),W.map.depthTexture=new _s(n.x,n.y,Ei)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=ki,this.type===Js?(W.map.depthTexture.compareFunction=q?ao:ro,W.map.depthTexture.minFilter=ze,W.map.depthTexture.magFilter=ze):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);const tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,g);for(let it=0;it<tt;it++){const Pt=W.getCamera(it);if($.isPointLight){const At=W.camera,de=W.matrix,Kt=$.distance||At.far;Kt!==At.far&&(At.far=Kt,At.updateProjectionMatrix()),ss.setFromMatrixPosition($.matrixWorld),At.position.copy(ss),jr.copy(At.position),jr.add(km[it]),At.up.copy(zm[it]),At.lookAt(jr),At.updateMatrixWorld(),de.makeTranslation(-ss.x,-ss.y,-ss.z),Nl.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Nl,At.coordinateSystem,At.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,it),s.clear();else{it===0&&(s.setRenderTarget(W.map),s.clear());const At=W.getViewport(it);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}i=W.getFrustum(it),M(T,g,Pt,$,this.type)}W.isPointLightShadow!==!0&&this.type===ls&&S(W,g),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,C,D)};function S(w,T){const g=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new mi(n.x,n.y,{format:fn,type:Ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,g,u,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,g,p,y,null)}function R(w,T,g,b){let C=null;const D=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=g.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=C.uuid,H=T.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let z=N[H];z===void 0&&(z=C.clone(),N[H]=z,T.addEventListener("dispose",E)),C=z}if(C.visible=T.visible,C.wireframe=T.wireframe,b===ls?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=s.properties.get(C);F.light=g}return C}function M(w,T,g,b,C){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ls)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);const H=t.update(w),N=w.material;if(Array.isArray(N)){const z=H.groups;for(let $=0,W=z.length;$<W;$++){const nt=z[$],q=N[nt.materialIndex];if(q&&q.visible){const tt=R(w,q,b,C);w.onBeforeShadow(s,w,T,g,H,tt,nt),s.renderBufferDirect(g,null,H,tt,w,nt),w.onAfterShadow(s,w,T,g,H,tt,nt)}}}else if(N.visible){const z=R(w,N,b,C);w.onBeforeShadow(s,w,T,g,H,z,null),s.renderBufferDirect(g,null,H,z,w,null),w.onAfterShadow(s,w,T,g,H,z,null)}}const F=w.children;for(let H=0,N=F.length;H<N;H++)M(F[H],T,g,b,C)}function E(w){w.target.removeEventListener("dispose",E);for(const g in c){const b=c[g],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Hm(s,t){function e(){let I=!1;const ct=new Se;let K=null;const ht=new Se(0,0,0,0);return{setMask:function(mt){K!==mt&&!I&&(s.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){I=mt},setClear:function(mt,et,Rt,bt,pe){pe===!0&&(mt*=bt,et*=bt,Rt*=bt),ct.set(mt,et,Rt,bt),ht.equals(ct)===!1&&(s.clearColor(mt,et,Rt,bt),ht.copy(ct))},reset:function(){I=!1,K=null,ht.set(-1,0,0,0)}}}function i(){let I=!1,ct=!1,K=null,ht=null,mt=null;return{setReversed:function(et){if(ct!==et){const Rt=t.get("EXT_clip_control");et?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(et){et?j(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(et){K!==et&&!I&&(s.depthMask(et),K=et)},setFunc:function(et){if(ct&&(et=gh[et]),ht!==et){switch(et){case sa:s.depthFunc(s.NEVER);break;case ra:s.depthFunc(s.ALWAYS);break;case aa:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case oa:s.depthFunc(s.EQUAL);break;case la:s.depthFunc(s.GEQUAL);break;case ca:s.depthFunc(s.GREATER);break;case ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=et}},setLocked:function(et){I=et},setClear:function(et){mt!==et&&(mt=et,ct&&(et=1-et),s.clearDepth(et))},reset:function(){I=!1,K=null,ht=null,mt=null,ct=!1}}}function n(){let I=!1,ct=null,K=null,ht=null,mt=null,et=null,Rt=null,bt=null,pe=null;return{setTest:function(ie){I||(ie?j(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!I&&(s.stencilMask(ie),ct=ie)},setFunc:function(ie,oi,gi){(K!==ie||ht!==oi||mt!==gi)&&(s.stencilFunc(ie,oi,gi),K=ie,ht=oi,mt=gi)},setOp:function(ie,oi,gi){(et!==ie||Rt!==oi||bt!==gi)&&(s.stencilOp(ie,oi,gi),et=ie,Rt=oi,bt=gi)},setLocked:function(ie){I=ie},setClear:function(ie){pe!==ie&&(s.clearStencil(ie),pe=ie)},reset:function(){I=!1,ct=null,K=null,ht=null,mt=null,et=null,Rt=null,bt=null,pe=null}}}const r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],y=null,m=!1,f=null,S=null,R=null,M=null,E=null,w=null,T=null,g=new kt(0,0,0),b=0,C=!1,D=null,F=null,H=null,N=null,z=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=nt>=2);let tt=null,it={};const Pt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),de=new Se().fromArray(Pt),Kt=new Se().fromArray(At);function ee(I,ct,K,ht){const mt=new Uint8Array(4),et=s.createTexture();s.bindTexture(I,et),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<K;Rt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return et}const Y={};Y[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(fs),Yt(!1),xe(Io),j(s.CULL_FACE),jt(Oi);function j(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Mt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ft(I,ct){return u[I]!==ct?(s.bindFramebuffer(I,ct),u[I]=ct,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(I,ct){let K=v,ht=!1;if(I){K=p.get(ct),K===void 0&&(K=[],p.set(ct,K));const mt=I.textures;if(K.length!==mt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let et=0,Rt=mt.length;et<Rt;et++)K[et]=s.COLOR_ATTACHMENT0+et;K.length=mt.length,ht=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ht=!0);ht&&s.drawBuffers(K)}function Vt(I){return y!==I?(s.useProgram(I),y=I,!0):!1}const Ae={[Bn]:s.FUNC_ADD,[Bc]:s.FUNC_SUBTRACT,[kc]:s.FUNC_REVERSE_SUBTRACT};Ae[zc]=s.MIN,Ae[Gc]=s.MAX;const Xt={[Hc]:s.ZERO,[Vc]:s.ONE,[Wc]:s.SRC_COLOR,[Hl]:s.SRC_ALPHA,[Kc]:s.SRC_ALPHA_SATURATE,[Zc]:s.DST_COLOR,[qc]:s.DST_ALPHA,[Xc]:s.ONE_MINUS_SRC_COLOR,[Vl]:s.ONE_MINUS_SRC_ALPHA,[$c]:s.ONE_MINUS_DST_COLOR,[Yc]:s.ONE_MINUS_DST_ALPHA,[Jc]:s.CONSTANT_COLOR,[Qc]:s.ONE_MINUS_CONSTANT_COLOR,[jc]:s.CONSTANT_ALPHA,[th]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(I,ct,K,ht,mt,et,Rt,bt,pe,ie){if(I===Oi){m===!0&&(Mt(s.BLEND),m=!1);return}if(m===!1&&(j(s.BLEND),m=!0),I!==Oc){if(I!==f||ie!==C){if((S!==Bn||E!==Bn)&&(s.blendEquation(s.FUNC_ADD),S=Bn,E=Bn),ie)switch(I){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFunc(s.ONE,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case No:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",I);break}else switch(I){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Uo:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case No:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",I);break}R=null,M=null,w=null,T=null,g.set(0,0,0),b=0,f=I,C=ie}return}mt=mt||ct,et=et||K,Rt=Rt||ht,(ct!==S||mt!==E)&&(s.blendEquationSeparate(Ae[ct],Ae[mt]),S=ct,E=mt),(K!==R||ht!==M||et!==w||Rt!==T)&&(s.blendFuncSeparate(Xt[K],Xt[ht],Xt[et],Xt[Rt]),R=K,M=ht,w=et,T=Rt),(bt.equals(g)===!1||pe!==b)&&(s.blendColor(bt.r,bt.g,bt.b,pe),g.copy(bt),b=pe),f=I,C=!1}function fe(I,ct){I.side===je?Mt(s.CULL_FACE):j(s.CULL_FACE);let K=I.side===Ze;ct&&(K=!K),Yt(K),I.blending===us&&I.transparent===!1?jt(Oi):jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ht=I.stencilWrite;o.setTest(ht),ht&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(I){D!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),D=I)}function xe(I){I!==Nc?(j(s.CULL_FACE),I!==F&&(I===Io?s.cullFace(s.BACK):I===Fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),F=I}function Le(I){I!==H&&(W&&s.lineWidth(I),H=I)}function qe(I,ct,K){I?(j(s.POLYGON_OFFSET_FILL),(N!==ct||z!==K)&&(N=ct,z=K,a.getReversed()&&(ct=-ct),s.polygonOffset(ct,K))):Mt(s.POLYGON_OFFSET_FILL)}function Me(I){I?j(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function be(I){I===void 0&&(I=s.TEXTURE0+$-1),tt!==I&&(s.activeTexture(I),tt=I)}function U(I,ct,K){K===void 0&&(tt===null?K=s.TEXTURE0+$-1:K=tt);let ht=it[K];ht===void 0&&(ht={type:void 0,texture:void 0},it[K]=ht),(ht.type!==I||ht.texture!==ct)&&(tt!==K&&(s.activeTexture(K),tt=K),s.bindTexture(I,ct||Y[I]),ht.type=I,ht.texture=ct)}function Fe(){const I=it[tt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function _(){try{s.texSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function O(){try{s.texSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function rt(){try{s.texStorage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function at(){try{s.texStorage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Z(){try{s.texImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function J(){try{s.texImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function ot(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function Et(I,ct){d[I]!==ct&&(s.pixelStorei(I,ct),d[I]=ct)}function ut(I){de.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function lt(I){Kt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Kt.copy(I))}function Tt(I,ct){let K=c.get(ct);K===void 0&&(K=new WeakMap,c.set(ct,K));let ht=K.get(I);ht===void 0&&(ht=s.getUniformBlockIndex(ct,I.name),K.set(I,ht))}function Dt(I,ct){const ht=c.get(ct).get(I);l.get(ct)!==ht&&(s.uniformBlockBinding(ct,ht,I.__bindingPointIndex),l.set(ct,ht))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,it={},u={},p=new WeakMap,v=[],y=null,m=!1,f=null,S=null,R=null,M=null,E=null,w=null,T=null,g=new kt(0,0,0),b=0,C=!1,D=null,F=null,H=null,N=null,z=null,de.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:Mt,bindFramebuffer:Ft,drawBuffers:vt,useProgram:Vt,setBlending:jt,setMaterial:fe,setFlipSided:Yt,setCullFace:xe,setLineWidth:Le,setPolygonOffset:qe,setScissorTest:Me,activeTexture:be,bindTexture:U,unbindTexture:Fe,compressedTexImage2D:re,compressedTexImage3D:A,texImage2D:Z,texImage3D:J,pixelStorei:Et,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ut,viewport:lt,reset:zt}}function Vm(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return v?new OffscreenCanvas(A,_):lr("canvas")}function m(A,_,O){let G=1;const X=re(A);if((X.width>O||X.height>O)&&(G=O/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(G*X.width),at=Math.floor(G*X.height);u===void 0&&(u=y(rt,at));const Z=_?y(rt,at):u;return Z.width=rt,Z.height=at,Z.getContext("2d").drawImage(A,0,0,rt,at),Ut("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+rt+"x"+at+")."),Z}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function f(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,O,G,X,rt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===s.RED&&(O===s.FLOAT&&(Z=s.R32F),O===s.HALF_FLOAT&&(Z=s.R16F),O===s.UNSIGNED_BYTE&&(Z=s.R8),O===s.UNSIGNED_SHORT&&at&&(Z=at.R16_EXT),O===s.SHORT&&at&&(Z=at.R16_SNORM_EXT)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.R8UI),O===s.UNSIGNED_SHORT&&(Z=s.R16UI),O===s.UNSIGNED_INT&&(Z=s.R32UI),O===s.BYTE&&(Z=s.R8I),O===s.SHORT&&(Z=s.R16I),O===s.INT&&(Z=s.R32I)),_===s.RG&&(O===s.FLOAT&&(Z=s.RG32F),O===s.HALF_FLOAT&&(Z=s.RG16F),O===s.UNSIGNED_BYTE&&(Z=s.RG8),O===s.UNSIGNED_SHORT&&at&&(Z=at.RG16_EXT),O===s.SHORT&&at&&(Z=at.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RG8UI),O===s.UNSIGNED_SHORT&&(Z=s.RG16UI),O===s.UNSIGNED_INT&&(Z=s.RG32UI),O===s.BYTE&&(Z=s.RG8I),O===s.SHORT&&(Z=s.RG16I),O===s.INT&&(Z=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),O===s.UNSIGNED_INT&&(Z=s.RGB32UI),O===s.BYTE&&(Z=s.RGB8I),O===s.SHORT&&(Z=s.RGB16I),O===s.INT&&(Z=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),O===s.UNSIGNED_INT&&(Z=s.RGBA32UI),O===s.BYTE&&(Z=s.RGBA8I),O===s.SHORT&&(Z=s.RGBA16I),O===s.INT&&(Z=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&(Z=at.RGB16_EXT),O===s.SHORT&&at&&(Z=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),_===s.RGBA){const J=rt?or:Zt.getTransfer(X);O===s.FLOAT&&(Z=s.RGBA32F),O===s.HALF_FLOAT&&(Z=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Z=J===ae?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&(Z=at.RGBA16_EXT),O===s.SHORT&&at&&(Z=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(A,_){let O;return A?_===null||_===Ei||_===ms?O=s.DEPTH24_STENCIL8:_===di?O=s.DEPTH32F_STENCIL8:_===ps&&(O=s.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ei||_===ms?O=s.DEPTH_COMPONENT24:_===di?O=s.DEPTH_COMPONENT32F:_===ps&&(O=s.DEPTH_COMPONENT16),O}function w(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ne&&A.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function g(A){const _=A.target;_.removeEventListener("dispose",g),D(_)}function b(A){const _=i.get(A);if(_.__webglInit===void 0)return;const O=A.source,G=p.get(O);if(G){const X=G[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(A),Object.keys(G).length===0&&p.delete(O)}i.remove(A)}function C(A){const _=i.get(A);s.deleteTexture(_.__webglTexture);const O=A.source,G=p.get(O);delete G[_.__cacheKey],a.memory.textures--}function D(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let X=0;X<_.__webglFramebuffer[G].length;X++)s.deleteFramebuffer(_.__webglFramebuffer[G][X]);else s.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)s.deleteFramebuffer(_.__webglFramebuffer[G]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let G=0,X=O.length;G<X;G++){const rt=i.get(O[G]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(A)}let F=0;function H(){F=0}function N(){return F}function z(A){F=A}function $(){const A=F;return A>=n.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),F+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function nt(A,_){const O=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const G=A.image;if(G===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function q(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function tt(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function it(A,_){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ft(O,A,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const Pt={[ua]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},At={[Ne]:s.NEAREST,[nh]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[cn]:s.LINEAR_MIPMAP_LINEAR},de={[oh]:s.NEVER,[dh]:s.ALWAYS,[lh]:s.LESS,[ro]:s.LEQUAL,[ch]:s.EQUAL,[ao]:s.GEQUAL,[hh]:s.GREATER,[uh]:s.NOTEQUAL};function Kt(A,_){if(_.type===di&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===yr||_.magFilter===ws||_.magFilter===cn||_.minFilter===ze||_.minFilter===yr||_.minFilter===ws||_.minFilter===cn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Pt[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Pt[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Pt[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,At[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==ws&&_.minFilter!==cn||_.type===di&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ee(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const G=_.source;let X=p.get(G);X===void 0&&(X={},p.set(G,X));const rt=W(_);if(rt!==A.__cacheKey){X[rt]===void 0&&(X[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[rt].usedTimes++;const at=X[A.__cacheKey];at!==void 0&&(X[A.__cacheKey].usedTimes--,at.usedTimes===0&&C(_)),A.__cacheKey=rt,A.__webglTexture=X[rt].texture}return O}function Y(A,_,O){return Math.floor(Math.floor(A/O)/_)}function j(A,_,O,G){const rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{rt.sort((Et,ut)=>Et.start-ut.start);let at=0;for(let Et=1;Et<rt.length;Et++){const ut=rt[at],lt=rt[Et],Tt=ut.start+ut.count,Dt=Y(lt.start,_.width,4),zt=Y(ut.start,_.width,4);lt.start<=Tt+1&&Dt===zt&&Y(lt.start+lt.count-1,_.width,4)===Dt?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++at,rt[at]=lt)}rt.length=at+1;const Z=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Et=0,ut=rt.length;Et<ut;Et++){const lt=rt[Et],Tt=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),zt=Tt%_.width,I=Math.floor(Tt/_.width),ct=Dt,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,zt,I,ct,K,O,G,_.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot)}}function Mt(A,_,O){let G=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=s.TEXTURE_3D);const X=ee(A,_),rt=_.source;e.bindTexture(G,A.__webglTexture,s.TEXTURE0+O);const at=i.get(rt);if(rt.version!==at.__version||X===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=Zt.getPrimaries(Zt.workingColorSpace),ht=_.colorSpace===Ki?null:Zt.getPrimaries(_.colorSpace),mt=_.colorSpace===Ki||K===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,n.maxTextureSize);J=Fe(_,J);const ot=r.convert(_.format,_.colorSpace),Et=r.convert(_.type);let ut=M(_.internalFormat,ot,Et,_.normalized,_.colorSpace,_.isVideoTexture);Kt(G,_);let lt;const Tt=_.mipmaps,Dt=_.isVideoTexture!==!0,zt=at.__version===void 0||X===!0,I=rt.dataReady,ct=w(_,J);if(_.isDepthTexture)ut=E(_.format===hn,_.type),zt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Et,null));else if(_.isDataTexture)if(Tt.length>0){Dt&&zt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let K=0,ht=Tt.length;K<ht;K++)lt=Tt[K],Dt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(s.TEXTURE_2D,K,ut,lt.width,lt.height,0,ot,Et,lt.data);_.generateMipmaps=!1}else Dt?(zt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,J.width,J.height),I&&j(_,J,ot,Et)):e.texImage2D(s.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Et,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,Tt[0].width,Tt[0].height,J.depth);for(let K=0,ht=Tt.length;K<ht;K++)if(lt=Tt[K],_.format!==fi)if(ot!==null)if(Dt){if(I)if(_.layerUpdates.size>0){const mt=fl(lt.width,lt.height,_.format,_.type);for(const et of _.layerUpdates){const Rt=lt.data.subarray(et*mt/lt.data.BYTES_PER_ELEMENT,(et+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,et,lt.width,lt.height,1,ot,Rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,J.depth,ot,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ut,lt.width,lt.height,J.depth,0,lt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,J.depth,ot,Et,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,ut,lt.width,lt.height,J.depth,0,ot,Et,lt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Dt&&zt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let K=0,ht=Tt.length;K<ht;K++)lt=Tt[K],_.format!==fi?ot!==null?Dt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,ut,lt.width,lt.height,0,lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(s.TEXTURE_2D,K,ut,lt.width,lt.height,0,ot,Et,lt.data)}else if(_.isDataArrayTexture)if(Dt){if(zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,J.width,J.height,J.depth),I)if(_.layerUpdates.size>0){const K=fl(J.width,J.height,_.format,_.type);for(const ht of _.layerUpdates){const mt=J.data.subarray(ht*K/J.data.BYTES_PER_ELEMENT,(ht+1)*K/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,ot,Et,mt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,Et,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,Et,J.data);else if(_.isData3DTexture)Dt?(zt&&e.texStorage3D(s.TEXTURE_3D,ct,ut,J.width,J.height,J.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,Et,J.data)):e.texImage3D(s.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,Et,J.data);else if(_.isFramebufferTexture){if(zt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ct,ut,J.width,J.height);else{let K=J.width,ht=J.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,ut,K,ht,0,ot,Et,null),K>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),d.add(_),K.onpaint=ht=>{const mt=ht.changedElements;for(const et of d)mt.includes(et.image)&&(et.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const mt=s.RGBA,et=s.RGBA,Rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,et,Rt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Dt&&zt){const K=re(Tt[0]);e.texStorage2D(s.TEXTURE_2D,ct,ut,K.width,K.height)}for(let K=0,ht=Tt.length;K<ht;K++)lt=Tt[K],Dt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ot,Et,lt):e.texImage2D(s.TEXTURE_2D,K,ut,ot,Et,lt);_.generateMipmaps=!1}else if(Dt){if(zt){const K=re(J);e.texStorage2D(s.TEXTURE_2D,ct,ut,K.width,K.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,Et,J)}else e.texImage2D(s.TEXTURE_2D,0,ut,ot,Et,J);f(_)&&S(G),at.__version=rt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ft(A,_,O){if(_.image.length!==6)return;const G=ee(A,_),X=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const rt=i.get(X);if(X.version!==rt.__version||G===!0){e.activeTexture(s.TEXTURE0+O);const at=Zt.getPrimaries(Zt.workingColorSpace),Z=_.colorSpace===Ki?null:Zt.getPrimaries(_.colorSpace),J=_.colorSpace===Ki||at===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ot=_.isCompressedTexture||_.image[0].isCompressedTexture,Et=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!ot&&!Et?ut[et]=m(_.image[et],!0,n.maxCubemapSize):ut[et]=Et?_.image[et].image:_.image[et],ut[et]=Fe(_,ut[et]);const lt=ut[0],Tt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),zt=M(_.internalFormat,Tt,Dt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ct=rt.__version===void 0||G===!0,K=X.dataReady;let ht=w(_,lt);Kt(s.TEXTURE_CUBE_MAP,_);let mt;if(ot){I&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,lt.width,lt.height);for(let et=0;et<6;et++){mt=ut[et].mipmaps;for(let Rt=0;Rt<mt.length;Rt++){const bt=mt[Rt];_.format!==fi?Tt!==null?I?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,zt,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,bt.width,bt.height,Tt,Dt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,zt,bt.width,bt.height,0,Tt,Dt,bt.data)}}}else{if(mt=_.mipmaps,I&&ct){mt.length>0&&ht++;const et=re(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,et.width,et.height)}for(let et=0;et<6;et++)if(Et){I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,Tt,Dt,ut[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,ut[et].width,ut[et].height,0,Tt,Dt,ut[et].data);for(let Rt=0;Rt<mt.length;Rt++){const pe=mt[Rt].image[et].image;I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,pe.width,pe.height,Tt,Dt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,zt,pe.width,pe.height,0,Tt,Dt,pe.data)}}else{I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt,Dt,ut[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,Tt,Dt,ut[et]);for(let Rt=0;Rt<mt.length;Rt++){const bt=mt[Rt];I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,Tt,Dt,bt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,zt,Tt,Dt,bt.image[et])}}}f(_)&&S(s.TEXTURE_CUBE_MAP),rt.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function vt(A,_,O,G,X,rt){const at=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),J=M(O.internalFormat,at,Z,O.normalized,O.colorSpace),ot=i.get(_),Et=i.get(O);if(Et.__renderTarget=_,!ot.__hasExternalTextures){const ut=Math.max(1,_.width>>rt),lt=Math.max(1,_.height>>rt);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?e.texImage3D(X,rt,J,ut,lt,_.depth,0,at,Z,null):e.texImage2D(X,rt,J,ut,lt,0,at,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,X,Et.__webglTexture,0,Me(_)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,X,Et.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(A,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const G=_.depthTexture,X=G&&G.isDepthTexture?G.type:null,rt=E(_.stencilBuffer,X),at=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;be(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(_),rt,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(_),rt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,rt,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,A)}else{const G=_.textures;for(let X=0;X<G.length;X++){const rt=G[X],at=r.convert(rt.format,rt.colorSpace),Z=r.convert(rt.type),J=M(rt.internalFormat,at,Z,rt.normalized,rt.colorSpace);be(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(_),J,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(_),J,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,J,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(A,_,O){const G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Kt(s.TEXTURE_CUBE_MAP,_.depthTexture);const ot=r.convert(_.depthTexture.format),Et=r.convert(_.depthTexture.type);let ut;_.depthTexture.format===ki?ut=s.DEPTH_COMPONENT24:_.depthTexture.format===hn&&(ut=s.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,_.width,_.height,0,ot,Et,null)}}else nt(_.depthTexture,0);const rt=X.__webglTexture,at=Me(_),Z=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,J=_.depthTexture.format===hn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===ki)be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,rt,0);else if(_.depthTexture.format===hn)be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(A){const _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Ae(_.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?Ae(_.__webglFramebuffer[0],A,0):Ae(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=s.createRenderbuffer(),Vt(_.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,rt)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Vt(_.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(A,_,O){const G=i.get(A);_!==void 0&&vt(G.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Xt(A)}function fe(A){const _=A.texture,O=i.get(A),G=i.get(_);A.addEventListener("dispose",g);const X=A.textures,rt=A.isWebGLCubeRenderTarget===!0,at=X.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=_.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[Z][J]=s.createFramebuffer()}else O.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let Z=0,J=X.length;Z<J;Z++){const ot=i.get(X[Z]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&be(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<X.length;Z++){const J=X[Z];O.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ot=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),ut=M(J.internalFormat,ot,Et,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),lt=Me(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ut,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Kt(s.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)vt(O.__webglFramebuffer[Z][J],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else vt(O.__webglFramebuffer[Z],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(_)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Z=0,J=X.length;Z<J;Z++){const ot=X[Z],Et=i.get(ot);let ut=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Et.__webglTexture),Kt(ut,ot),vt(O.__webglFramebuffer,A,ot,s.COLOR_ATTACHMENT0+Z,ut,0),f(ot)&&S(ut)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),Kt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)vt(O.__webglFramebuffer[J],A,_,s.COLOR_ATTACHMENT0,Z,J);else vt(O.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,Z,0);f(_)&&S(Z),e.unbindTexture()}A.depthBuffer&&Xt(A)}function Yt(A){const _=A.textures;for(let O=0,G=_.length;O<G;O++){const X=_[O];if(f(X)){const rt=R(A),at=i.get(X).__webglTexture;e.bindTexture(rt,at),S(rt),e.unbindTexture()}}}const xe=[],Le=[];function qe(A){if(A.samples>0){if(be(A)===!1){const _=A.textures,O=A.width,G=A.height;let X=s.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=i.get(A),Z=_.length>1;if(Z)for(let ot=0;ot<_.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=i.get(_[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,X,s.NEAREST),l===!0&&(xe.length=0,Le.length=0,xe.push(s.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(xe.push(rt),Le.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ot=0;ot<_.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=i.get(_[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Me(A){return Math.min(n.maxSamples,A.samples)}function be(A){const _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Fe(A,_){const O=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ar&&O!==Ki&&(Zt.getTransfer(O)===ae?(G!==fi||X!==ti)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",O)),_}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=jt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wm(s,t){function e(i,n=Ki){let r;const a=Zt.getTransfer(n);if(i===ti)return s.UNSIGNED_BYTE;if(i===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(i===to)return s.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===tc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jl)return s.BYTE;if(i===Ql)return s.SHORT;if(i===ps)return s.UNSIGNED_SHORT;if(i===Qa)return s.INT;if(i===Ei)return s.UNSIGNED_INT;if(i===di)return s.FLOAT;if(i===Ti)return s.HALF_FLOAT;if(i===ec)return s.ALPHA;if(i===ic)return s.RGB;if(i===fi)return s.RGBA;if(i===ki)return s.DEPTH_COMPONENT;if(i===hn)return s.DEPTH_STENCIL;if(i===eo)return s.RED;if(i===io)return s.RED_INTEGER;if(i===fn)return s.RG;if(i===no)return s.RG_INTEGER;if(i===so)return s.RGBA_INTEGER;if(i===Qs||i===js||i===tr||i===er)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fa||i===pa||i===ma||i===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_a||i===va||i===xa||i===Ma||i===Sa||i===sr||i===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_a||i===va)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ma)return r.COMPRESSED_R11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sr)return r.COMPRESSED_RG11_EAC;if(i===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ba||i===wa||i===Ea||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oa||i===Ba||i===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Oa)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===za||i===Ga||i===rr||i===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ai({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends pn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",m=new Ym,f={},S=e.getContextAttributes();let R=null,M=null;const E=[],w=[],T=new It;let g=null,b=null;const C=new Qe;C.viewport=new Se;const D=new Qe;D.viewport=new Se;const F=[C,D],H=new eu;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=E[Y];return j===void 0&&(j=new Lr,E[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=E[Y];return j===void 0&&(j=new Lr,E[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=E[Y];return j===void 0&&(j=new Lr,E[Y]=j),j.getHandSpace()};function $(Y){const j=w.indexOf(Y.inputSource);if(j===-1)return;const Mt=E[j];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<E.length;Y++){const j=w[Y];j!==null&&(w[Y]=null,E[Y].disconnect(j))}N=null,z=null,m.reset();for(const Y in f)delete f[Y];if(t.setRenderTarget(R),p=null,u=null,d=null,n=null,M=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(T.width,T.height,!1),b!==null){const Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(R=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",W),n.addEventListener("inputsourceschange",nt),S.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ft=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=S.stencil?hn:ki,Ft=S.stencil?ms:Ei);const Vt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new mi(u.textureWidth,u.textureHeight,{format:fi,type:ti,depthTexture:new _s(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,Mt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new mi(p.framebufferWidth,p.framebufferHeight,{format:fi,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let j=0;j<Y.removed.length;j++){const Mt=Y.removed[j],Ft=w.indexOf(Mt);Ft>=0&&(w[Ft]=null,E[Ft].disconnect(Mt))}for(let j=0;j<Y.added.length;j++){const Mt=Y.added[j];let Ft=w.indexOf(Mt);if(Ft===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=w.length){w.push(Mt),Ft=Vt;break}else if(w[Vt]===null){w[Vt]=Mt,Ft=Vt;break}if(Ft===-1)break}const vt=E[Ft];vt&&vt.connect(Mt)}}const q=new P,tt=new P;function it(Y,j,Mt){q.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);const Ft=q.distanceTo(tt),vt=j.projectionMatrix.elements,Vt=Mt.projectionMatrix.elements,Ae=vt[14]/(vt[10]-1),Xt=vt[14]/(vt[10]+1),jt=(vt[9]+1)/vt[5],fe=(vt[9]-1)/vt[5],Yt=(vt[8]-1)/vt[0],xe=(Vt[8]+1)/Vt[0],Le=Ae*Yt,qe=Ae*xe,Me=Ft/(-Yt+xe),be=Me*-Yt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(be),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const U=Ae+Me,Fe=Xt+Me,re=Le-be,A=qe+(Ft-be),_=jt*Xt/Fe*U,O=fe*Xt/Fe*U;Y.projectionMatrix.makePerspective(re,A,_,O,U,Fe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Pt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let j=Y.near,Mt=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),H.near=D.near=C.near=j,H.far=D.far=C.far=Mt,(N!==H.near||z!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,z=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const Ft=Y.parent,vt=H.cameras;Pt(H,Ft);for(let Vt=0;Vt<vt.length;Vt++)Pt(vt[Vt],Ft);vt.length===2?it(H,C,D):H.projectionMatrix.copy(C.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),At(Y,H,Ft)};function At(Y,j,Mt){Mt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return f[Y]};let de=null;function Kt(Y,j){if(h=j.getViewerPose(c||a),v=j,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ft=!1;Mt.length!==H.cameras.length&&(H.cameras.length=0,Ft=!0);for(let Xt=0;Xt<Mt.length;Xt++){const jt=Mt[Xt];let fe=null;if(p!==null)fe=p.getViewport(jt);else{const xe=d.getViewSubImage(u,jt);fe=xe.viewport,Xt===0&&(t.setRenderTargetTextures(M,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(M))}let Yt=F[Xt];Yt===void 0&&(Yt=new Qe,Yt.layers.enable(Xt),Yt.viewport=new Se,F[Xt]=Yt),Yt.matrix.fromArray(jt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(jt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(fe.x,fe.y,fe.width,fe.height),Xt===0&&(H.matrix.copy(Yt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ft===!0&&H.cameras.push(Yt)}const vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Xt=d.getDepthInformation(Mt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,n.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<Mt.length;Xt++){const jt=Mt[Xt].camera;if(jt){let fe=f[jt];fe||(fe=new fc,f[jt]=fe);const Yt=d.getCameraImage(jt);fe.sourceTexture=Yt}}}}for(let Mt=0;Mt<E.length;Mt++){const Ft=w[Mt],vt=E[Mt];Ft!==null&&vt!==void 0&&vt.update(Ft,j,c||a)}de&&de(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const ee=new vc;ee.setAnimationLoop(Kt),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const $m=new ue,Ec=new Ot;Ec.set(-1,0,0,0,1,0,0,0,1);function Km(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,pc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,S,R,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),R=S.envMap,M=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ec),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jm(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const w=E.program;i.uniformBlockBinding(M,w)}function c(M,E){let w=n[M.id];w===void 0&&(m(M),w=h(M),n[M.id]=w,M.addEventListener("dispose",S));const T=E.program;i.updateUBOMapping(M,T);const g=t.render.frame;r[M.id]!==g&&(u(M),r[M.id]=g)}function h(M){const E=d();M.__bindingPointIndex=E;const w=s.createBuffer(),T=M.__size,g=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,g),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,w),w}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=n[M.id],w=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let g=0,b=w.length;g<b;g++){const C=w[g];if(Array.isArray(C))for(let D=0,F=C.length;D<F;D++)p(C[D],g,D,T);else p(C,g,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,E,w,T){if(y(M,E,w,T)===!0){const g=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const F=b[D],H=f(F);v(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,g,M.__data)}}function v(M,E,w){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,w)}function y(M,E,w,T){const g=M.value,b=E+"_"+w;if(T[b]===void 0)return typeof g=="number"||typeof g=="boolean"?T[b]=g:ArrayBuffer.isView(g)?T[b]=g.slice():T[b]=g.clone(),!0;{const C=T[b];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return T[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(M){const E=M.uniforms;let w=0;const T=16;for(let b=0,C=E.length;b<C;b++){const D=Array.isArray(E[b])?E[b]:[E[b]];for(let F=0,H=D.length;F<H;F++){const N=D[F],z=Array.isArray(N.value)?N.value:[N.value];for(let $=0,W=z.length;$<W;$++){const nt=z[$],q=f(nt),tt=w%T,it=tt%q.boundary,Pt=tt+it;w+=it,Pt!==0&&T-Pt<q.storage&&(w+=T-Pt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=q.storage}}}const g=w%T;return g>0&&(w+=T-g),M.__size=w,M.__cache={},this}function f(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",M),E}function S(M){const E=M.target;E.removeEventListener("dispose",S);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function R(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:R}}const Qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function jm(){return xi===null&&(xi=new uc(Qm,16,16,fn,Ti),xi.name="DFG_LUT",xi.minFilter=ze,xi.magFilter=ze,xi.wrapS=Ni,xi.wrapT=Ni,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class t0{constructor(t={}){const{canvas:e=ph(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=p,m=new Set([so,no,io]),f=new Set([ti,Ei,ps,ms,ja,to]),S=new Uint32Array(4),R=new Int32Array(4),M=new P;let E=null,w=null;const T=[],g=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,F=null,H=null,N=null,z=null;this._outputColorSpace=Ye;let $=0,W=0,nt=null,q=-1,tt=null;const it=new Se,Pt=new Se;let At=null;const de=new kt(0);let Kt=0,ee=e.width,Y=e.height,j=1,Mt=null,Ft=null;const vt=new Se(0,0,ee,Y),Vt=new Se(0,0,ee,Y);let Ae=!1;const Xt=new ho;let jt=!1,fe=!1;const Yt=new ue,xe=new P,Le=new Se,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function be(){return nt===null?j:1}let U=i;function Fe(x,L){return e.getContext(x,L)}let re,A,_,O,G,X,rt,at,Z,J,ot,Et,ut,lt,Tt,Dt,zt,I,ct,K,ht,mt,et;try{const x={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",oi,!1),U===null){const L="webgl2";if(U=Fe(L,x),U===null)throw Fe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(x){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),Jt("WebGLRenderer: "+x.message),x}function Rt(){re=new jf(U),re.init(),ht=new Wm(U,re),A=new Vf(U,re,t,ht),_=new Hm(U,re),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),z=U.createFramebuffer(),O=new ip(U),G=new Rm,X=new Vm(U,re,_,G,A,ht,O),rt=new Qf(C),at=new nu(U),mt=new Gf(U,at),Z=new tp(U,at,O,mt),J=new sp(U,Z,at,mt,O),I=new np(U,A,X),Tt=new Wf(G),ot=new Am(C,rt,re,A,mt,Tt),Et=new Km(C,G),ut=new Pm,lt=new Fm(re),zt=new zf(C,rt,_,J,v,l),Dt=new Gm(C,J,A),et=new Jm(U,O,A,_),ct=new Hf(U,re,O),K=new ep(U,re,O),O.programs=ot.programs,C.capabilities=A,C.extensions=re,C.properties=G,C.renderLists=ut,C.shadowMap=Dt,C.state=_,C.info=O}y!==ti&&(b=new ap(y,e.width,e.height,o,n,r));const bt=new Zm(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(ee,Y,!1))},this.getSize=function(x){return x.set(ee,Y)},this.setSize=function(x,L,V=!0){if(bt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=x,Y=L,e.width=Math.floor(x*j),e.height=Math.floor(L*j),V===!0&&(e.style.width=x+"px",e.style.height=L+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(ee*j,Y*j).floor()},this.setDrawingBufferSize=function(x,L,V){ee=x,Y=L,j=V,e.width=Math.floor(x*V),e.height=Math.floor(L*V),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(y===ti){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(it)},this.getViewport=function(x){return x.copy(vt)},this.setViewport=function(x,L,V,B){x.isVector4?vt.set(x.x,x.y,x.z,x.w):vt.set(x,L,V,B),_.viewport(it.copy(vt).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Vt)},this.setScissor=function(x,L,V,B){x.isVector4?Vt.set(x.x,x.y,x.z,x.w):Vt.set(x,L,V,B),_.scissor(Pt.copy(Vt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(x){_.setScissorTest(Ae=x)},this.setOpaqueSort=function(x){Mt=x},this.setTransparentSort=function(x){Ft=x},this.getClearColor=function(x){return x.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,V=!0){let B=0;if(x){let k=!1;if(nt!==null){const pt=nt.texture.format;k=m.has(pt)}if(k){const pt=nt.texture.type,xt=f.has(pt),ft=zt.getClearColor(),St=zt.getClearAlpha(),wt=ft.r,Gt=ft.g,qt=ft.b;xt?(S[0]=wt,S[1]=Gt,S[2]=qt,S[3]=St,U.clearBufferuiv(U.COLOR,0,S)):(R[0]=wt,R[1]=Gt,R[2]=qt,R[3]=St,U.clearBufferiv(U.COLOR,0,R))}else B|=U.COLOR_BUFFER_BIT}L&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),zt.dispose(),ut.dispose(),lt.dispose(),G.dispose(),rt.dispose(),J.dispose(),mt.dispose(),et.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",wo),bt.removeEventListener("sessionend",Eo),ji.stop()};function pe(x){x.preventDefault(),cr("WebGLRenderer: Context Lost."),D=!0}function ie(){cr("WebGLRenderer: Context Restored."),D=!1;const x=O.autoReset,L=Dt.enabled,V=Dt.autoUpdate,B=Dt.needsUpdate,k=Dt.type;Rt(),O.autoReset=x,Dt.enabled=L,Dt.autoUpdate=V,Dt.needsUpdate=B,Dt.type=k}function oi(x){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function gi(x){const L=x.target;L.removeEventListener("dispose",gi),Rc(L)}function Rc(x){Cc(x),G.remove(x)}function Cc(x){const L=G.get(x).programs;L!==void 0&&(L.forEach(function(V){ot.releaseProgram(V)}),x.isShaderMaterial&&ot.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,V,B,k,pt){L===null&&(L=qe);const xt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ft=Dc(x,L,V,B,k);_.setMaterial(B,xt);let St=V.index,wt=1;if(B.wireframe===!0){if(St=Z.getWireframeAttribute(V),St===void 0)return;wt=2}const Gt=V.drawRange,qt=V.attributes.position;let yt=Gt.start*wt,ne=(Gt.start+Gt.count)*wt;pt!==null&&(yt=Math.max(yt,pt.start*wt),ne=Math.min(ne,(pt.start+pt.count)*wt)),St!==null?(yt=Math.max(yt,0),ne=Math.min(ne,St.count)):qt!=null&&(yt=Math.max(yt,0),ne=Math.min(ne,qt.count));const we=ne-yt;if(we<0||we===1/0)return;mt.setup(k,B,ft,V,St);let ge,he=ct;if(St!==null&&(ge=at.get(St),he=K,he.setIndex(ge)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*be()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(k.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),_.setLineWidth(Oe*be()),k.isLineSegments?he.setMode(U.LINES):k.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else k.isPoints?he.setMode(U.POINTS):k.isSprite&&he.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Oe=k._multiDrawStarts,gt=k._multiDrawCounts,He=k._multiDrawCount,Qt=St?at.get(St).bytesPerElement:1,ii=G.get(B).currentProgram.getUniforms();for(let _i=0;_i<He;_i++)ii.setValue(U,"_gl_DrawID",_i),he.render(Oe[_i]/Qt,gt[_i])}else if(k.isInstancedMesh)he.renderInstances(yt,we,k.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,Oe);he.renderInstances(yt,we,gt)}else he.render(yt,we)};function bo(x,L,V,B){F!==null&&x.isNodeMaterial&&F.setObject(B,x),jt===!0&&Tt.setState(x,V,!1),x.transparent===!0&&x.side===je&&x.forceSinglePass===!1?(x.side=Ze,x.needsUpdate=!0,bs(x,L,B),x.side=un,x.needsUpdate=!0,bs(x,L,B),x.side=je):bs(x,L,B)}this.compile=function(x,L,V=null){V===null&&(V=x),F!==null&&F.renderStart(x,L,V),w=lt.get(V),w.init(L),g.push(w),V.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),x!==V&&x.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),fe=this.localClippingEnabled,jt=Tt.init(this.clippingPlanes,fe),jt===!0&&Tt.setGlobalState(this.clippingPlanes,L),F!==null&&Dt.render(w.state.shadowsArray,V,L);const B=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const ft=pt[xt];bo(ft,V,L,k),B.add(ft)}else bo(pt,V,L,k),B.add(pt)}),w=g.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(x,L,V=null){const B=this.compile(x,L,V);return new Promise(k=>{function pt(){if(B.forEach(function(xt){const St=G.get(xt).currentProgram;(St===void 0||St.isReady())&&B.delete(xt)}),B.size===0){k(x);return}setTimeout(pt,10)}re.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let vr=null;function Pc(x){vr&&vr(x)}function wo(){ji.stop()}function Eo(){ji.start()}const ji=new vc;ji.setAnimationLoop(Pc),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(x){vr=x,bt.setAnimationLoop(x),x===null?ji.stop():ji.start()},bt.addEventListener("sessionstart",wo),bt.addEventListener("sessionend",Eo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(x,L);const V=bt.enabled===!0&&bt.isPresenting===!0,B=b!==null&&(nt===null||V)&&b.begin(C,nt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,nt),w=lt.get(x,g.length),w.init(L),w.state.textureUnits=X.getTextureUnits(),g.push(w),Yt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xt.setFromProjectionMatrix(Yt,bi,L.reversedDepth),fe=this.localClippingEnabled,jt=Tt.init(this.clippingPlanes,fe),E=ut.get(x,T.length),E.init(),T.push(E),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&xr(xt,L,-1/0,C.sortObjects)}xr(x,L,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Mt,Ft),Me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Me&&zt.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Tt.beginShadows();const k=w.state.shadowsArray;if(Dt.render(k,x,L),jt===!0&&Tt.endShadows(),(B&&b.hasRenderPass())===!1){const xt=E.opaque,ft=E.transmissive;if(w.setupLights(),L.isArrayCamera){const St=L.cameras;if(ft.length>0)for(let wt=0,Gt=St.length;wt<Gt;wt++){const qt=St[wt];Ao(xt,ft,x,qt)}Me&&zt.render(x);for(let wt=0,Gt=St.length;wt<Gt;wt++){const qt=St[wt];To(E,x,qt,qt.viewport)}}else ft.length>0&&Ao(xt,ft,x,L),Me&&zt.render(x),To(E,x,L)}nt!==null&&W===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),B&&b.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),mt.resetDefaultState(),q=-1,tt=null,g.pop(),g.length>0?(w=g[g.length-1],X.setTextureUnits(w.state.textureUnits),jt===!0&&Tt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,F!==null&&F.renderEnd()};function xr(x,L,V,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)w.pushLightProbeGrid(x);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Xt)){B&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Yt);const xt=J.update(x),ft=x.material;ft.visible&&E.push(x,xt,ft,V,Le.z,null,L)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Xt))){const xt=J.update(x),ft=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Le.copy(xt.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(Yt)),Array.isArray(ft)){const St=xt.groups;for(let wt=0,Gt=St.length;wt<Gt;wt++){const qt=St[wt],yt=ft[qt.materialIndex];yt&&yt.visible&&E.push(x,xt,yt,V,Le.z,qt,L)}}else ft.visible&&E.push(x,xt,ft,V,Le.z,null,L)}}const pt=x.children;for(let xt=0,ft=pt.length;xt<ft;xt++)xr(pt[xt],L,V,B)}function To(x,L,V,B){const{opaque:k,transmissive:pt,transparent:xt}=x;w.setupLightsView(V),jt===!0&&Tt.setGlobalState(C.clippingPlanes,V),B&&_.viewport(it.copy(B)),k.length>0&&ys(k,L,V),pt.length>0&&ys(pt,L,V),xt.length>0&&ys(xt,L,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ao(x,L,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new mi(1,1,{generateMipmaps:!0,type:yt?Ti:ti,minFilter:cn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const pt=w.state.transmissionRenderTarget[B.id],xt=B.viewport||it;pt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),St=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(de),Kt=C.getClearAlpha(),Kt<1&&C.setClearColor(16777215,.5),C.clear(),Me&&zt.render(V);const Gt=C.toneMapping;C.toneMapping=wi;const qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),jt===!0&&Tt.setGlobalState(C.clippingPlanes,B),ys(x,V,B),X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt),re.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ne=0,we=L.length;ne<we;ne++){const ge=L[ne],{object:he,geometry:Oe,material:gt,group:He}=ge;if(gt.side===je&&he.layers.test(B.layers)){const Qt=gt.side;gt.side=Ze,gt.needsUpdate=!0,Ro(he,V,B,Oe,gt,He),gt.side=Qt,gt.needsUpdate=!0,yt=!0}}yt===!0&&(X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,St,wt),C.setClearColor(de,Kt),qt!==void 0&&(B.viewport=qt),C.toneMapping=Gt}function ys(x,L,V){const B=L.isScene===!0?L.overrideMaterial:null;for(let k=0,pt=x.length;k<pt;k++){const xt=x[k],{object:ft,geometry:St,group:wt}=xt;let Gt=xt.material;Gt.allowOverride===!0&&B!==null&&(Gt=B),ft.layers.test(V.layers)&&Ro(ft,L,V,St,Gt,wt)}}function Ro(x,L,V,B,k,pt){F!==null&&k.isNodeMaterial&&F.setObject(x,k),x.onBeforeRender(C,L,V,B,k,pt),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(C,L,V,B,x,pt),k.transparent===!0&&k.side===je&&k.forceSinglePass===!1?(k.side=Ze,k.needsUpdate=!0,C.renderBufferDirect(V,L,B,k,x,pt),k.side=un,k.needsUpdate=!0,C.renderBufferDirect(V,L,B,k,x,pt),k.side=je):C.renderBufferDirect(V,L,B,k,x,pt),x.onAfterRender(C,L,V,B,k,pt)}function bs(x,L,V){L.isScene!==!0&&(L=qe);const B=G.get(x),k=w.state.lights,pt=w.state.shadowsArray,xt=k.state.version,ft=ot.getParameters(x,k.state,pt,L,V,w.state.lightProbeGridArray),St=ot.getProgramCacheKey(ft);let wt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Gt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=rt.get(x.envMap||B.environment,Gt),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,wt===void 0&&(x.addEventListener("dispose",gi),wt=new Map,B.programs=wt);let qt=wt.get(St);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===xt)return Po(x,ft),qt}else ft.uniforms=ot.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,V,ft),x.onBeforeCompile(ft,C),qt=ot.acquireProgram(ft,St),wt.set(St,qt),B.uniforms=ft.uniforms;const yt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(yt.clippingPlanes=Tt.uniform),Po(x,ft),B.needsLights=Uc(x),B.lightsStateVersion=xt,B.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.sunLights.value=k.state.sun,yt.sunLightShadows.value=k.state.sunShadow,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.sunShadowMatrix.value=k.state.sunShadowMatrix,yt.sunShadowCascade.value=k.state.sunShadowCascade,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=qt,B.uniformsList=null,qt}function Co(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=ir.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Po(x,L){const V=G.get(x);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Lc(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let V=0,B=x.length;V<B;V++){const k=x[V];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Dc(x,L,V,B,k){L.isScene!==!0&&(L=qe),X.resetTextureUnits();const pt=L.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,ft=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=rt.get(B.envMap||xt,St),Gt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,we=!!V.morphAttributes.color;let ge=wi;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=C.toneMapping);const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Oe=he!==void 0?he.length:0,gt=G.get(B),He=w.state.lights;if(jt===!0&&(fe===!0||x!==tt)){const me=x===tt&&B.id===q;Tt.setState(B,x,me)}let Qt=!1;B.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==He.state.version||gt.outputColorSpace!==ft||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==wt||B.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Gt||gt.vertexTangents!==qt||gt.morphTargets!==yt||gt.morphNormals!==ne||gt.morphColors!==we||gt.toneMapping!==ge||gt.morphTargetsCount!==Oe||!!gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,gt.__version=B.version);let ii=gt.currentProgram;Qt===!0&&(ii=bs(B,L,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,ii,gt));let _i=!1,zi=!1,gn=!1;const le=ii.getUniforms(),ye=gt.uniforms;if(_.useProgram(ii.program)&&(_i=!0,zi=!0,gn=!0),B.id!==q&&(q=B.id,zi=!0),gt.needsLights){const me=Lc(w.state.lightProbeGridArray,k);gt.lightProbeGrid!==me&&(gt.lightProbeGrid=me,zi=!0)}if(_i||tt!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),le.setValue(U,"projectionMatrix",x.projectionMatrix),le.setValue(U,"viewMatrix",x.matrixWorldInverse);const Hi=le.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,xe.setFromMatrixPosition(x.matrixWorld)),A.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),tt!==x&&(tt=x,zi=!0,gn=!0)}if(gt.needsLights&&(He.state.sunShadowMap.length>0&&le.setValue(U,"sunShadowMap",He.state.sunShadowMap,X),He.state.directionalShadowMap.length>0&&le.setValue(U,"directionalShadowMap",He.state.directionalShadowMap,X),He.state.spotShadowMap.length>0&&le.setValue(U,"spotShadowMap",He.state.spotShadowMap,X),He.state.pointShadowMap.length>0&&le.setValue(U,"pointShadowMap",He.state.pointShadowMap,X)),k.isSkinnedMesh){le.setOptional(U,k,"bindMatrix"),le.setOptional(U,k,"bindMatrixInverse");const me=k.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),le.setValue(U,"boneTexture",me.boneTexture,X))}k.isBatchedMesh&&(le.setOptional(U,k,"batchingTexture"),le.setValue(U,"batchingTexture",k._matricesTexture,X),le.setOptional(U,k,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",k._indirectTexture,X),le.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",k._colorsTexture,X));const Gi=V.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&I.update(k,V,ii),(zi||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,le.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(ye.envMapIntensity.value=L.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=jm()),zi){if(le.setValue(U,"toneMappingExposure",C.toneMappingExposure),gt.needsLights&&Ic(ye,gn),pt&&B.fog===!0&&Et.refreshFogUniforms(ye,pt),Et.refreshMaterialUniforms(ye,B,j,Y,w.state.transmissionRenderTarget[x.id]),gt.needsLights&&gt.lightProbeGrid){const me=gt.lightProbeGrid;ye.probesSH.value=me.texture,ye.probesMin.value.copy(me.boundingBox.min),ye.probesMax.value.copy(me.boundingBox.max),ye.probesResolution.value.copy(me.resolution)}ir.upload(U,Co(gt),ye,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ir.upload(U,Co(gt),ye,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(U,"center",k.center),le.setValue(U,"modelViewMatrix",k.modelViewMatrix),le.setValue(U,"normalMatrix",k.normalMatrix),le.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const me=B.uniformsGroups;for(let Hi=0,_n=me.length;Hi<_n;Hi++){const Do=me[Hi];et.update(Do,ii),et.bind(Do,ii)}}return ii}function Ic(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Uc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(x,L,V){const B=G.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=L,G.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const V=G.get(x);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,V=0){nt=x,$=L,W=V;let B=null,k=!1,pt=!1;if(x){const ft=G.get(x);if(ft.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(x.viewport),Pt.copy(x.scissor),At=x.scissorTest,_.viewport(it),_.scissor(Pt),_.setScissorTest(At),q=-1;return}else if(ft.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(ft.__hasExternalTextures)X.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Gt=x.depthTexture;if(ft.__boundDepthTexture!==Gt){if(Gt!==null&&G.has(Gt)&&(x.width!==Gt.image.width||x.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);const wt=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?B=wt[L][V]:B=wt[L],k=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?B=G.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[V]:B=wt,it.copy(x.viewport),Pt.copy(x.scissor),At=x.scissorTest}else it.copy(vt).multiplyScalar(j).floor(),Pt.copy(Vt).multiplyScalar(j).floor(),At=Ae;if(V!==0&&(B=H),_.bindFramebuffer(U.FRAMEBUFFER,B)&&_.drawBuffers(x,B),_.viewport(it),_.scissor(Pt),_.setScissorTest(At),k){const ft=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,V)}else if(pt){const ft=L;for(let St=0;St<x.textures.length;St++){const wt=G.get(x.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,wt.__webglTexture,V,ft)}}else if(x!==null&&V!==0){const ft=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,V)}q=-1};function Lo(x){const L=G.get(x);return(L.__readFormat!==x.format||L.__readType!==x.type)&&(L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=A.textureFormatReadable(x.format),L.__typeReadable=A.textureTypeReadable(x.type)),L}this.readRenderTargetPixels=function(x,L,V,B,k,pt,xt,ft=0){if(!(x&&x.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){_.bindFramebuffer(U.FRAMEBUFFER,St);try{const wt=x.textures[ft],Gt=wt.format,qt=wt.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const yt=Lo(wt);if(yt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-B&&V>=0&&V<=x.height-k&&U.readPixels(L,V,B,k,ht.convert(Gt),ht.convert(qt),pt)}finally{const wt=nt!==null?G.get(nt).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(x,L,V,B,k,pt,xt,ft=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(L>=0&&L<=x.width-B&&V>=0&&V<=x.height-k){_.bindFramebuffer(U.FRAMEBUFFER,St);const wt=x.textures[ft],Gt=wt.format,qt=wt.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const yt=Lo(wt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(L,V,B,k,ht.convert(Gt),ht.convert(qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const we=nt!==null?G.get(nt).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,we);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mh(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ne),U.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,V=0){const B=Math.pow(2,-V),k=Math.floor(x.image.width*B),pt=Math.floor(x.image.height*B),xt=L!==null?L.x:0,ft=L!==null?L.y:0;X.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,xt,ft,k,pt),_.unbindTexture()},this.copyTextureToTexture=function(x,L,V=null,B=null,k=0,pt=0){let xt,ft,St,wt,Gt,qt,yt,ne,we;const ge=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(V!==null)xt=V.max.x-V.min.x,ft=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Gt=V.min.y,qt=V.isBox3?V.min.z:0;else{const ye=Math.pow(2,-k);xt=Math.floor(ge.width*ye),ft=Math.floor(ge.height*ye),x.isDataArrayTexture?St=ge.depth:x.isData3DTexture?St=Math.floor(ge.depth*ye):St=1,wt=0,Gt=0,qt=0}B!==null?(yt=B.x,ne=B.y,we=B.z):(yt=0,ne=0,we=0);const he=ht.convert(L.format),Oe=ht.convert(L.type);let gt;L.isData3DTexture?(X.setTexture3D(L,0),gt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(X.setTexture2DArray(L,0),gt=U.TEXTURE_2D_ARRAY):(X.setTexture2D(L,0),gt=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const He=_.getParameter(U.UNPACK_ROW_LENGTH),Qt=_.getParameter(U.UNPACK_IMAGE_HEIGHT),ii=_.getParameter(U.UNPACK_SKIP_PIXELS),_i=_.getParameter(U.UNPACK_SKIP_ROWS),zi=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),_.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),_.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);const gn=x.isDataArrayTexture||x.isData3DTexture,le=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const ye=G.get(x),Gi=G.get(L),me=G.get(ye.__renderTarget),Hi=G.get(Gi.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,me.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let _n=0;_n<St;_n++)gn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(x).__webglTexture,k,qt+_n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(L).__webglTexture,pt,we+_n)),U.blitFramebuffer(wt,Gt,xt,ft,yt,ne,xt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||G.has(x)){const ye=G.get(x),Gi=G.get(L);_.bindFramebuffer(U.READ_FRAMEBUFFER,N),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let me=0;me<St;me++)gn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,k,qt+me):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,k),le?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gi.__webglTexture,pt,we+me):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gi.__webglTexture,pt),k!==0?U.blitFramebuffer(wt,Gt,xt,ft,yt,ne,xt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):le?U.copyTexSubImage3D(gt,pt,yt,ne,we+me,wt,Gt,xt,ft):U.copyTexSubImage2D(gt,pt,yt,ne,wt,Gt,xt,ft);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(gt,pt,yt,ne,we,xt,ft,St,he,Oe,ge.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,pt,yt,ne,we,xt,ft,St,he,ge.data):U.texSubImage3D(gt,pt,yt,ne,we,xt,ft,St,he,Oe,ge):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,yt,ne,xt,ft,he,Oe,ge.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,yt,ne,ge.width,ge.height,he,ge.data):U.texSubImage2D(U.TEXTURE_2D,pt,yt,ne,xt,ft,he,Oe,ge);_.pixelStorei(U.UNPACK_ROW_LENGTH,He),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),_.pixelStorei(U.UNPACK_SKIP_PIXELS,ii),_.pixelStorei(U.UNPACK_SKIP_ROWS,_i),_.pixelStorei(U.UNPACK_SKIP_IMAGES,zi),pt===0&&L.generateMipmaps&&U.generateMipmap(gt),_.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){$=0,W=0,nt=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const rs="waykeepers.save.v1",_o=1,st={render:{fov:60,near:.1,far:220,fogNear:32,fogFar:138,clearColor:9348506,highPixelRatio:1.5,lowPixelRatio:.75},player:{maxHealth:100,maxStamina:100,walkSpeed:4,sprintSpeed:6,sprintStaminaPerSecond:15,radius:.38,healCharges:2,healAmount:40,healTime:1.4,healMoveSpeed:1.15,staminaRegenPerSecond:30,staminaRegenDelay:.75,hitReactionTime:.25,damageInvulnerability:.8,inputBuffer:.15,dodge:{stamina:25,duration:.6,distance:2.6,invulnerableFrom:.06,invulnerableTo:.3},attacks:{light:{id:"light",stamina:20,damage:25,windup:.22,active:.1,recovery:.33,reach:2.8,facingWindow:.1,tipRadius:.32,forwardStep:0},heavy:{id:"heavy",stamina:35,damage:45,windup:.62,active:.14,recovery:.54,reach:3.2,facingWindow:.3,tipRadius:.38,forwardStep:.55}},workshopUpgrade:{light:30,heavy:54},camera:{distance:5,minDistance:.9,targetHeight:1.35,pitch:.2,minPitch:-.3,maxPitch:.85,mouseSensitivity:.0024,collisionRadius:.22,restoreSpeed:7.5},lockOn:{acquireRange:10,releaseRange:14,facingTurnRate:12}},ordinaryEnemies:{briarling:{type:"briarling",name:"Briarling",health:60,speed:2.25,radius:.5,height:1.05,aggroRange:8.5,attackRange:2.5,stopRange:1.85,leash:11,facingLock:.25,staggerResistance:2,staggerDuration:.35,attack:{id:"briar-lunge",tell:.8,active:.12,recovery:.9,damage:18,reach:2.4,halfArc:.62}},mossguard:{type:"mossguard",name:"Mossguard",health:90,speed:1.55,radius:.72,height:2.15,aggroRange:9.5,attackRange:3.2,stopRange:2.5,leash:13,facingLock:.25,staggerResistance:2,staggerDuration:.35,attack:{id:"moss-sweep",tell:1.2,active:.18,recovery:1.5,damage:26,reach:3,halfArc:1.05}}},boss:{name:"Gate Warden",health:420,radius:1.15,height:3.9,speed:4,stopRange:3.8,attackRange:4.4,facingLock:.3,transitionTime:1,attacks:{sweep:{id:"warden-sweep",tell:1.1,active:.2,recovery:1.7,damage:24,reach:4.2,halfArc:150*Math.PI/360},overhead:{id:"warden-overhead",tell:1.35,active:.16,recovery:2,damage:32,radius:1.3,impactDistance:2.9},doubleSweep:{first:{id:"warden-double-sweep-a",tell:1.1,active:.2,damage:24,reach:4.2,halfArc:150*Math.PI/360},gap:.85,second:{id:"warden-double-sweep-b",tell:.85,active:.2,damage:24,reach:4.2,halfArc:150*Math.PI/360},recovery:2}}},world:{bounds:{minX:-34,maxX:34,minZ:-138,maxZ:32},interactionRange:2.7,combatQuietTime:5,bossTriggerZ:-104.2,bossArena:{x:0,z:-117,radius:13.5,groundY:1.5}},economy:{cacheSalvage:2,bossSalvage:4,workshopCost:4,beaconCost:8}},We={camp:{id:"camp",name:"Alder Hollow Hearth",short:"Camp",position:{x:0,z:14.5,y:0},spawn:{x:0,z:12.8,yaw:Math.PI}},brazier:{id:"brazier",name:"Field Brazier",short:"Brazier",position:{x:0,z:-96,y:1.5},spawn:{x:0,z:-93.4,yaw:Math.PI}}},nr=[{id:"cache-a",name:"Mossroad Supply Cache",x:4.2,z:-21.5,y:0},{id:"cache-b",name:"Cart Yard Supply Cache",x:-7.4,z:-43,y:0},{id:"cache-c",name:"Wayhouse Supply Cache",x:-8.8,z:-72,y:1.5},{id:"cache-d",name:"Upper Store Supply Cache",x:8.4,z:-83,y:1.5}],e0={briarling:{id:"briarling",trigger:{x:0,z:-13.5,radius:6.5},enemies:[{type:"briarling",x:-1.4,z:-17.2,homeRadius:7.5}]},mossguard:{id:"mossguard",trigger:{x:0,z:-39,radius:8.5},enemies:[{type:"mossguard",x:3.2,z:-41.5,homeRadius:9.5}]},mixed:{id:"mixed",trigger:{x:0,z:-77,radius:9.5},enemies:[{type:"briarling",x:-4.2,z:-80,homeRadius:9},{type:"mossguard",x:4.8,z:-80.8,homeRadius:9.5}]}},Fn={initial:"Cross the Mossroad, defeat the Gate Warden and recover the Beacon Lens.",brazier:"The field brazier is lit. Rest there before entering the Warden courtyard.",boss:"Defeat the Gate Warden and recover the Beacon Lens.",lens:"Return to Alder Hollow and restore the bridge beacon.",lensNoSalvage:"Gather Salvage for the bridge beacon, then return to Alder Hollow.",complete:"Chapter complete: the road is lit. Explore Alder Hollow at your leisure."},Ii={arrival:{title:"Mara, Caretaker of Alder Hollow",body:`You came back. The road has swallowed better travelers than us.

The Mossroad climbs to the old wayhouse, then the Warden's courtyard. The Gate Warden keeps the Beacon Lens. Bring it home and we can light the bridge again.

There are supply caches along the way. Rest at the field brazier before you challenge the gate. The Warden is slow, but every blow is meant to end a fight.`},lens:{title:"Mara, Caretaker of Alder Hollow",body:`The Lens. I had begun to think the Warden's gate would stay dark forever.

Bring eight Salvage and the Lens to the broken beacon by the bridge. I will fit the lens and wake the road lamps. The workshop can wait; the beacon cannot.`},lensPoor:{title:"Mara, Caretaker of Alder Hollow",body:"The Lens is safe in your pack. The beacon needs eight Salvage besides. Search the caches you passed; the road is generous to those who look."},complete:{title:"Mara, Caretaker of Alder Hollow",body:`Look at it. The bridge lamps, the beacon, the whole road waking one stone at a time.

You have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.`},beaconInspected:{title:"The Broken Beacon",body:`The lens cradle is empty, its brass teeth furred with moss. A plaque reads: LIGHT THE ROAD.

Mara at the hearth knows what the beacon needs. The Gate Warden on the Mossroad carries its Beacon Lens.`},beaconRestored:{title:"The Bridge Beacon",body:"Warm light pours through the lens. Across the bridge, old lamps answer one by one. For the first time in years, Alder Hollow has a road worth walking."},workshopBuilt:{title:"The Restored Workshop",body:"The bench is true, the roof is whole, and the grindstone turns. Your spear tip has been reinforced. Light and heavy thrusts now strike harder."},shortcutLocked:{title:"Shortcut Gate",body:"The latch is on the far side. This gate was built to be opened from the cart yard, not from camp."},shortcutOpened:{title:"Shortcut Opened",body:"The old latch gives way. A narrow path now runs from the cart yard back toward Alder Hollow."},keepsake:{title:"Carved Keepsake",body:"A small carved warden's knot, worn smooth by a thumb. It belongs on the hearth shelf, where someone can remember it."}};function i0(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ie;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Fl(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][u]);const v=Fl(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}}return l}function Fl(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ai(a,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,p=h.count;u<p;u++)for(let v=0;v<e;v++){const y=h.getComponent(u,v);o.setComponent(u+d,v,y)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const ve=(s,t,e)=>Math.max(t,Math.min(e,s)),Te=(s,t,e)=>s+(t-s)*e,n0=s=>(s=ve(s,0,1),s*s*(3-2*s)),s0=(s,t,e,i)=>Te(s,t,1-Math.exp(-7.5*i)),Lt=(s,t)=>s+Math.random()*(t-s);function Tc(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function ui(s,t,e){const i=Tc(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}function Ks(s,t,e,i){return Math.atan2(e-s,i-t)}function Ac(s,t,e,i,n){const r=e.x-s.x,a=e.z-s.z,o=Math.hypot(r,a);if(o>i)return!1;if(o<.001)return!0;const l=Math.atan2(r,a);return Math.abs(Tc(t,l))<=n}function Ol(s,t,e,i,n,r){const a=e-s,o=i-t,l=n-s,c=r-t,h=a*a+o*o;let d=h>1e-6?(l*a+c*o)/h:0;d=ve(d,0,1);const u=s+a*d,p=t+o*d;return Math.hypot(n-u,r-p)}const Q={grass:5139024,grassDark:3492668,path:8483930,pathLight:9798759,stone:7634036,stoneDark:5397848,stoneLight:9277830,timber:6112818,timberLight:8282436,roof:4609098,leaf:4154441,leafDark:2903098,amber:16757853};function ln(s,t){return t>-56?0:t>-64?n0((-t-56)/8)*1.5:1.5}function ta(s,t,e,i,n,r){const a=n-e,o=r-i,l=a*a+o*o;let c=l>1e-4?((s-e)*a+(t-i)*o)/l:0;return c=ve(c,0,1),Math.hypot(s-(e+a*c),t-(i+o*c))}function as(s,t){let e=99;t>4&&t<28&&(e=Math.min(e,Math.abs(s)<10?0:Math.abs(s)-10+8)),t<=6&&t>-30&&(e=Math.min(e,Math.abs(s))),t<=-28&&t>-54&&(e=Math.min(e,Math.max(0,Math.abs(s)-9))),t<=-62&&t>-88&&(e=Math.min(e,Math.max(0,Math.abs(s)-8))),t<=-86&&t>-104&&(e=Math.min(e,Math.max(0,Math.abs(s)-4))),e=Math.min(e,ta(s,t,20,-37,20,6)),e=Math.min(e,ta(s,t,20,6,9,6)),e=Math.min(e,ta(s,t,20,-32,27,-27));const i=Math.hypot(s-0,t+117);return i<15&&(e=Math.min(e,Math.max(0,i-12.2))),e}const Bl=new Map;function _e(s,t={}){const e=Object.keys(t).sort().map(r=>`${r}:${String(t[r])}`).join("|"),i=`${s}|${e}`;let n=Bl.get(i);return n||(n=new mr({color:s,flatShading:!0,...t}),Bl.set(i,n)),n}function Nt(s,t,e,i,n,r,a,o,l=0,c=s){const h=new Wt(new ei(t,e,i),_e(n));return h.position.set(r,a,o),h.rotation.y=l,h.castShadow=!0,h.receiveShadow=!0,c.add(h),h}function Bt(s,t,e,i,n,r,a,o,l,c=0,h=s){const d=new Wt(new oe(t,e,i,n),_e(r));return d.position.set(a,o,l),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,h.add(d),d}function Zi(s,t,e,i=1,n=Q.stone){const r=new Fi(1,0),a=new Wt(r,_e(n));return a.position.set(t,ln(t,e)+.35*i,e),a.scale.set(i*Lt(.8,1.4),i*Lt(.5,.95),i*Lt(.8,1.4)),a.rotation.set(Lt(-.3,.3),Lt(0,Math.PI),Lt(-.3,.3)),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function kl(s,t,e,i,n,r=s){const a=new P().subVectors(e,t),o=a.length(),l=new Wt(new oe(i,i,o,5),_e(n));return l.position.copy(t).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}function r0(){const s=document.createElement("canvas");s.width=64,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,36,2,32,36,30);e.addColorStop(0,"rgba(255,247,196,1)"),e.addColorStop(.25,"rgba(255,181,70,0.9)"),e.addColorStop(.65,"rgba(225,93,26,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new Hh(s);return i.colorSpace=Ye,i}class a0{constructor(t,e){this.scene=t,this.renderer=e,this.colliders=[],this.cameraOccluders=[],this.interactables=[],this.cacheMeshes=new Map,this.animated=[],this.time=0,this.quality="high",this.groundHeight=ln,this.flameTex=r0(),this._buildLights(),this._buildGround(),this._buildForest(),this._buildCamp(),this._buildMossroad(),this._buildCartYard(),this._buildShortcut(),this._buildWayhouse(),this._buildBrazier(),this._buildCourtyard(),this._buildBoundaries(),this._initLightFlags(),this._mergeStaticGeometry()}_initLightFlags(){this.scene.traverse(t=>{t.isPointLight&&(t.userData.lightEnabled===void 0&&(t.userData.lightEnabled=t.visible),t.userData.lowLight===void 0&&(t.userData.lowLight=!1))}),this.hearthLight.userData.lowLight=!0,this.brazierLight.userData.lowLight=!0,this.beaconLight.userData.lowLight=!0}_setPointLight(t,e){t.userData.lightEnabled=e,t.visible=e&&(this.quality!=="low"||t.userData.lowLight===!0)}_mergeStaticGeometry(){const t=[this.hearthFire,this.workshopRoof,this.workshopTools,this.workshopBench,this.beaconLens,this.brokenLens,this.campKeepsake,this.bridgeGateBar,this.shortcutDoor,this.keepsake,this.keepsakeShelf,this.bossDoor,...this.bridgeLamps.map(n=>n.group),...Array.from(this.cacheMeshes.values(),n=>n.group)],e=new Set(this.cameraOccluders);for(const n of t)n&&n.traverse(r=>e.add(r));this.scene.updateMatrixWorld(!0);const i=new Map;this.scene.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh||n.children.length>0||e.has(n))return;const r=n.material;if(!r||Array.isArray(r)||r.transparent||r.opacity<1||r.vertexColors||!n.geometry||n.geometry.getAttribute("color"))return;const a=`${r.uuid}|${n.castShadow?1:0}|${n.receiveShadow?1:0}`;let o=i.get(a);o||(o={material:r,castShadow:n.castShadow,receiveShadow:n.receiveShadow,meshes:[],geometries:[]},i.set(a,o));const l=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();l.applyMatrix4(n.matrixWorld);for(const c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&l.deleteAttribute(c);if(l.getAttribute("normal")||l.computeVertexNormals(),!l.getAttribute("uv")){const c=l.getAttribute("position").count;l.setAttribute("uv",new se(new Float32Array(c*2),2))}o.meshes.push(n),o.geometries.push(l)});for(const n of i.values()){if(n.meshes.length<2){for(const o of n.geometries)o.dispose();continue}const r=i0(n.geometries,!1);if(!r){for(const o of n.geometries)o.dispose();continue}const a=new Wt(r,n.material);a.name="MergedStatic",a.castShadow=n.castShadow,a.receiveShadow=n.receiveShadow,this.scene.add(a);for(const o of n.meshes)o.parent?.remove(o);for(const o of n.geometries)o.dispose()}}_buildLights(){this.scene.background=new kt(st.render.clearColor),this.scene.fog=new co(8558987,st.render.fogNear,st.render.fogFar);const t=new Jh(13623506,2833202,1.55);this.scene.add(t);const e=new cl(16773844,2);e.position.set(-28,42,18),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-42,e.shadow.camera.right=42,e.shadow.camera.top=42,e.shadow.camera.bottom=-42,e.shadow.camera.near=1,e.shadow.camera.far=110,e.shadow.bias=-8e-4,this.sun=e,this.scene.add(e);const i=new cl(10336173,.4);i.position.set(20,12,-35),this.scene.add(i)}_buildGround(){const o=new Ss(84,178,84,178);o.rotateX(-Math.PI/2),o.translate(0/2,0,-110/2);const l=o.attributes.position,c=[],h=new kt(Q.grass),d=new kt(Q.grassDark),u=new kt(Q.path),p=new kt(Q.pathLight),v=new kt(Q.stone);for(let f=0;f<l.count;f++){const S=l.getX(f),R=l.getZ(f),M=ln(S,R);l.setY(f,M);const E=(Math.sin(S*.73+R*1.31)+Math.sin(S*1.91-R*.51)+Math.sin(R*.29))*.12,w=as(S,R),T=Math.hypot(S,R+117)<13.2;let g;T?g=v.clone().lerp(d,ve((Math.hypot(S,R+117)-10.5)/3,0,1)):w<3.2?g=u.clone().lerp(p,.35+E*.5):w<6.5?g=u.clone().lerp(d,.55+E*.4):g=h.clone().lerp(d,.45+E*.8),g.offsetHSL(0,0,E*.05),c.push(g.r,g.g,g.b)}o.setAttribute("color",new se(c,3)),o.computeVertexNormals();const y=new mr({vertexColors:!0,flatShading:!0});this.ground=new Wt(o,y),this.ground.receiveShadow=!0,this.ground.name="terrain",this.scene.add(this.ground),this.cameraOccluders.push(this.ground);const m=new Wt(new vs(180,24),_e(2832947));m.rotation.x=-Math.PI/2,m.position.y=-2.2,this.scene.add(m)}_buildForest(){const t=new oe(.18,.34,3.6,5),e=new pi(1.7,4.2,6),i=new pi(1.15,2.8,5),n=_e(5324847),r=_e(Q.leaf),a=_e(Q.leafDark),o=230,l=new is(t,n,o),c=new is(e,r,o),h=new is(i,a,o);l.castShadow=!1,c.castShadow=!1,h.castShadow=!1,l.receiveShadow=!0;const d=new Re,u=new kt;let p=0,v=0;for(;p<o&&v<4e3;){v++;const g=(Math.random()<.5?-1:1)*Lt(10.5,39),b=Lt(-142,32);if(as(g,b)<7.4||g>12&&g<31&&b>-39&&b<10||Math.abs(g)<15&&b>-105||Math.hypot(g,b+117)<17.5)continue;const C=Lt(.72,1.5),D=ln(g,b);d.position.set(g,D+1.8*C,b),d.rotation.set(0,Lt(0,Math.PI*2),0),d.scale.set(C,C,C),d.updateMatrix(),l.setMatrixAt(p,d.matrix),d.position.y=D+4.3*C,d.scale.set(C*Lt(.8,1.2),C*Lt(.9,1.35),C*Lt(.8,1.2)),d.updateMatrix(),c.setMatrixAt(p,d.matrix),d.position.y=D+6.2*C,d.scale.set(C*Lt(.7,1.1),C*Lt(.7,1.2),C*Lt(.7,1.1)),d.updateMatrix(),h.setMatrixAt(p,d.matrix),u.setHSL(Lt(.27,.36),Lt(.18,.34),Lt(.24,.38)),c.setColorAt(p,u),u.setHSL(Lt(.27,.34),Lt(.16,.3),Lt(.19,.29)),h.setColorAt(p,u),p++}l.count=p,c.count=p,h.count=p,this.scene.add(l,c,h),this.treeMeshes=[l,c,h];const y=new Ue(.62,0),m=_e(4613706),f=new is(y,m,260);let S=0,R=0;for(;S<260&&R<3e3;){R++;const g=(Math.random()<.5?-1:1)*Lt(6.5,37),b=Lt(-142,32);if(as(g,b)<3.6||g>12&&g<31&&b>-39&&b<10&&as(g,b)<4.2||Math.hypot(g,b+117)<15.5)continue;d.position.set(g,ln(g,b)+.28,b),d.rotation.set(Lt(-.2,.2),Lt(0,Math.PI*2),Lt(-.2,.2));const C=Lt(.55,1.35);d.scale.set(C*Lt(.8,1.4),C*Lt(.5,.9),C*Lt(.8,1.4)),d.updateMatrix(),f.setMatrixAt(S,d.matrix),u.setHSL(Lt(.25,.35),Lt(.2,.35),Lt(.24,.36)),f.setColorAt(S,u),S++}f.count=S,f.castShadow=!1,f.receiveShadow=!0,this.scene.add(f);const M=new pi(.09,.6,3),E=_e(7901276),w=new is(M,E,600);for(let T=0;T<600;T++){const g=Lt(-32,32),b=Lt(-138,30);if(as(g,b)<2.1){T--;continue}d.position.set(g,ln(g,b)+.25,b),d.rotation.set(Lt(-.15,.15),Lt(0,Math.PI*2),Lt(-.15,.15));const C=Lt(.5,1.5);d.scale.set(C,C,C),d.updateMatrix(),w.setMatrixAt(T,d.matrix)}w.castShadow=!1,this.scene.add(w)}_buildCamp(){const t=new _t;t.name="Alder Hollow",this.scene.add(t),this.campGroup=t;const e=Bt(t,1.65,1.85,.42,9,Q.stoneDark,0,.22,16);e.receiveShadow=!0;for(let T=0;T<9;T++){const g=T/9*Math.PI*2;Zi(t,Math.cos(g)*1.75,16+Math.sin(g)*1.75,.42,Q.stone)}this.hearthFire=new Jo(new Xa({map:this.flameTex,transparent:!0,depthWrite:!1,blending:ds})),this.hearthFire.position.set(0,.95,16),this.hearthFire.scale.set(1.4,1.8,1),t.add(this.hearthFire),this.hearthLight=new Ui(Q.amber,2.4,16,1.7),this.hearthLight.position.set(0,2,16),this.hearthLight.castShadow=!1,t.add(this.hearthLight);const i=kl(t,new P(-.65,.45,15.7),new P(.65,.45,16.3),.16,Q.timber),n=kl(t,new P(-.65,.45,16.3),new P(.65,.45,15.7),.16,Q.timberLight);i.rotation.z=0,n.rotation.z=0,this.colliders.push({type:"circle",x:0,z:16,r:1.75,tag:"hearth"});const r=new _t;r.position.set(-4.2,0,17.8),r.rotation.y=Math.PI*.85;const a=new Wt(new oe(.28,.42,1.25,6),_e(6641996));a.position.y=.68,r.add(a);const o=new Wt(new Ue(.22,0),_e(13214589));o.position.y=1.48,r.add(o);const l=new Wt(new pi(.32,.5,6),_e(7035980));l.position.y=1.64,r.add(l);const c=Bt(r,.035,.045,1.7,5,Q.timber,.44,.85,0);c.rotation.z=-.12,this.scene.add(r),this.mara=r,this.colliders.push({type:"circle",x:-4.2,z:17.8,r:.5,tag:"mara"});const h=new _t;h.position.set(-8.6,0,9.5),h.rotation.y=.16;const d=Nt(h,6.2,.22,5,Q.stoneDark,0,.11,0);d.receiveShadow=!0,Bt(h,.13,.16,2.5,5,Q.timber,-2.7,1.25,-2.1),Bt(h,.13,.16,2.5,5,Q.timber,2.7,1.25,-2.1),Bt(h,.13,.16,2.5,5,Q.timber,-2.7,1.25,2.1),Bt(h,.13,.16,2.5,5,Q.timber,2.7,1.25,2.1);const u=Nt(h,5.7,1.8,.22,Q.timber,0,1.05,-2.25);u.castShadow=!0;const p=Nt(h,2.8,.18,.75,Q.timberLight,.4,.78,.5);p.castShadow=!0,this.workshopBench=p,this.workshopGroup=h,this.scene.add(h),this.colliders.push({type:"box",minX:-11.8,maxX:-5.4,minZ:6.6,maxZ:12.4,tag:"workshop"}),this.cameraOccluders.push(d,u),this.workshopRoof=new _t;const v=Nt(this.workshopRoof,3.4,.18,5.4,Q.roof,-1.55,2.72,0,0);v.rotation.z=.34;const y=Nt(this.workshopRoof,3.4,.18,5.4,Q.roof,1.55,2.72,0,0);y.rotation.z=-.34,this.workshopRoof.position.set(-8.6,0,9.5),this.workshopRoof.rotation.y=.16,this.workshopRoof.visible=!1,this.scene.add(this.workshopRoof),this.workshopLight=new Ui(16757082,0,7,2),this.workshopLight.position.set(-8.6,1.8,9.5),this.workshopLight.visible=!1,this.workshopLight.userData.lightEnabled=!1,this.scene.add(this.workshopLight),this.workshopTools=new _t;for(let T=0;T<3;T++){const g=Bt(this.workshopTools,.035,.035,1.1,4,Q.timberLight,-.8+T*.5,1.65,-2.05);g.rotation.z=.3+T*.2}this.workshopTools.position.set(-8.6,0,9.5),this.workshopTools.visible=!1,this.scene.add(this.workshopTools);const m=new _t;m.position.set(8.2,0,22.5),Bt(m,.9,1.25,.7,8,Q.stoneDark,0,.35,0),Bt(m,.42,.62,3.4,8,Q.stone,0,2,0);const f=Bt(m,.68,.5,.4,8,Q.timber,0,3.7,0);f.castShadow=!0;const S=new Wt(new oe(.42,.34,.3,8),_e(3820358,{transparent:!0,opacity:.75}));S.position.set(0,3.95,0),S.rotation.z=.35,m.add(S),this.brokenLens=S,this.beaconGroup=m,this.scene.add(m),this.colliders.push({type:"circle",x:8.2,z:22.5,r:1,tag:"beacon"}),this.cameraOccluders.push(m.children[0],m.children[1]),this.beaconLens=new Wt(new oe(.43,.43,.22,10),new ri({color:16767370,transparent:!0,opacity:.9})),this.beaconLens.position.set(8.2,3.97,22.5),this.beaconLens.visible=!1,this.scene.add(this.beaconLens),this.beaconLight=new Ui(16761965,0,24,1.4),this.beaconLight.position.set(8.2,4.6,22.5),this.beaconLight.visible=!1,this.beaconLight.userData.lightEnabled=!1,this.scene.add(this.beaconLight);const R=Nt(t,2.4,.16,.55,Q.timberLight,2.7,.9,17.8);R.castShadow=!0,Bt(t,.06,.07,.9,4,Q.timber,1.6,.45,17.8),Bt(t,.06,.07,.9,4,Q.timber,3.8,.45,17.8),this.campKeepsake=new _t,this.campKeepsake.position.set(2.9,1.02,17.7);const M=new Wt(new ur(.13,.045,32,5,2,3),_e(12886894,{emissive:3810312,emissiveIntensity:.4}));M.rotation.x=.5,this.campKeepsake.add(M),this.campKeepsake.visible=!1,this.scene.add(this.campKeepsake),this.colliders.push({type:"circle",x:2.9,z:17.8,r:.55,tag:"hearth-shelf"}),this.bridgeGroup=new _t,this.bridgeGroup.position.set(13.2,0,22.5);for(let T=0;T<6;T++)Nt(this.bridgeGroup,1.25,.18,2.2,Q.timber,T*1.2-3,.16,0);Nt(this.bridgeGroup,7.3,.22,.16,Q.timberLight,0,.82,1.02),Nt(this.bridgeGroup,7.3,.22,.16,Q.timberLight,0,.82,-1.02);for(let T=0;T<4;T++)Bt(this.bridgeGroup,.06,.07,.85,5,Q.timber,-3.2+T*2.15,.48,1.02);this.scene.add(this.bridgeGroup),this.bridgeLamps=[];for(let T=0;T<4;T++){const g=new _t;g.position.set(10.4+T*2,.85,21.4),Bt(g,.025,.03,1.5,4,Q.timber,0,.75,0);const b=new Wt(new Ue(.13,0),new ri({color:16767114}));b.position.y=1.55,g.add(b);const C=new Ui(16759651,0,7,1.7);C.position.y=1.6,g.add(C),g.visible=!0,b.visible=!1,C.visible=!1,this.scene.add(g),this.bridgeLamps.push({group:g,bulb:b,light:C})}this.bridgeGate=new _t,this.bridgeGate.position.set(18.2,0,22.5),Bt(this.bridgeGate,.16,.2,3.2,5,Q.timber,-2.1,1.6,0),Bt(this.bridgeGate,.16,.2,3.2,5,Q.timber,2.1,1.6,0),Nt(this.bridgeGate,4.5,.25,.3,Q.timberLight,0,3.1,0);const E=Nt(this.bridgeGate,3.7,1.8,.15,Q.timber,0,1.6,0);E.rotation.z=.02,this.bridgeGateBar=E,this.scene.add(this.bridgeGate),this.colliders.push({type:"box",minX:16,maxX:20.4,minZ:21.3,maxZ:23.7,tag:"bridge-gate",enabled:!0});const w=new _t;w.position.set(3.3,0,6.2),Bt(w,.07,.09,1.7,5,Q.timber,0,.85,0),Nt(w,1.7,.65,.1,Q.timberLight,0,1.55,0),this.scene.add(w),this.campSign=w}_buildMossroad(){const t=new _t;t.name="Mossroad",this.scene.add(t);const e=new _t;e.position.set(0,0,3.2),Bt(e,.25,.33,4.3,6,Q.timber,-4.1,2.15,0),Bt(e,.25,.33,4.3,6,Q.timber,4.1,2.15,0),Nt(e,8.9,.4,.5,Q.timberLight,0,4.25,0),Nt(e,3.6,.7,.12,Q.timber,0,3.55,0),this.scene.add(e),this.colliders.push({type:"circle",x:-4.1,z:3.2,r:.55,tag:"camp-arch"}),this.colliders.push({type:"circle",x:4.1,z:3.2,r:.55,tag:"camp-arch"});const i=new _t;i.position.set(-3.6,0,-2.3),i.rotation.y=-.2,Bt(i,.06,.08,1.5,4,Q.timber,0,.75,0),Nt(i,1.45,.55,.08,Q.timberLight,0,1.35,0),this.scene.add(i);const n=new _t;n.position.set(3.7,0,-8.3),n.rotation.y=.18,Bt(n,.06,.08,1.5,4,Q.timber,0,.75,0),Nt(n,1.45,.55,.08,Q.timberLight,0,1.35,0),this.scene.add(n);for(let a=0;a<7;a++){const o=a%2===0?-1:1;Zi(this.scene,o*Lt(4.2,7.5),-5-a*5.3,Lt(.45,1.15),a%3===0?Q.stoneLight:Q.stone)}for(let a=0;a<8;a++){const o=Lt(-12,12),l=Lt(-28,2);Math.abs(o)<3.5||this.colliders.push({type:"circle",x:o,z:l,r:.65,tag:"road-rock"})}this._buildCache("cache-a",4.2,0,-21.5,.2);const r=new _t;r.position.set(-5.8,0,-24.5),Zi(this.scene,-5.8,-24.5,.85,Q.stoneDark),Nt(r,.8,.25,.55,Q.stoneLight,0,1.1,0),this.scene.add(r)}_buildCartYard(){const t=new _t;t.name="Cart Yard",this.scene.add(t);const e=new _t;e.position.set(-4.6,0,-35),e.rotation.y=.25,Nt(e,2.6,.55,1.5,Q.timber,0,.78,0),Nt(e,2.4,.18,1.3,Q.timberLight,0,1.05,0);for(const[r,a]of[[-1,-.75],[1,-.75],[-1,.75],[1,.75]]){const o=new Wt(new po(.48,.1,5,8),_e(Q.timberLight));o.position.set(r,.52,a),o.rotation.y=Math.PI/2,e.add(o)}this.scene.add(e),this.colliders.push({type:"box",minX:-6.2,maxX:-3,minZ:-36.2,maxZ:-33.8,tag:"cart"}),this.cameraOccluders.push(e);const i=new _t;i.position.set(7,0,-49),i.rotation.y=-.55,Nt(i,2.2,.5,1.3,Q.timber,0,.62,0),this.scene.add(i),this.colliders.push({type:"box",minX:5.7,maxX:8.3,minZ:-50,maxZ:-48,tag:"cart2"});for(let r=0;r<8;r++){const a=Bt(t,.24,.26,2.7,6,r%2?Q.timber:Q.timberLight,-9.5+r%2*.5,.26+Math.floor(r/2)*.46,-40.5+Math.floor(r/2)*.55);a.rotation.z=Math.PI/2}this.colliders.push({type:"box",minX:-11.2,maxX:-8.1,minZ:-41.4,maxZ:-37.7,tag:"logs"});for(let r=0;r<10;r++){const a=Lt(-14,14),o=Lt(-51,-31);Math.abs(a)<4&&o>-43||Zi(this.scene,a,o,Lt(.4,1.3))}this._buildCache("cache-b",-7.4,0,-43,-.35);const n=new _t;n.position.set(9.5,0,-34.5),Bt(n,.13,.18,2.4,5,Q.timber,0,1.2,0),Nt(n,1.1,.7,.1,Q.timberLight,0,2,0),this.scene.add(n)}_buildShortcut(){const t=new _t;t.name="Shortcut",this.scene.add(t),this.shortcutGate=new _t,this.shortcutGate.position.set(20,0,-20),Bt(this.shortcutGate,.2,.26,3.4,5,Q.timber,-2.35,1.7,0),Bt(this.shortcutGate,.2,.26,3.4,5,Q.timber,2.35,1.7,0),Nt(this.shortcutGate,5,.35,.32,Q.timberLight,0,3.3,0);const e=new _t;e.position.set(-2.2,0,0);for(let c=0;c<4;c++)Nt(e,1,2.7,.13,c%2?Q.timber:Q.timberLight,.55+c*1.05,1.5,0);Nt(e,4.25,.18,.2,Q.stoneDark,2.15,2.5,.09);const i=new Wt(new ei(4.5,3.2,.5),new ri({visible:!1}));i.position.set(2.15,1.5,0),e.add(i),this.cameraOccluders.push(i),this.shortcutGate.add(e),this.shortcutDoor=e,this.scene.add(this.shortcutGate),this.shortcutCollider={type:"box",minX:17.4,maxX:22.6,minZ:-20.8,maxZ:-19.2,tag:"shortcut-gate",enabled:!0},this.colliders.push(this.shortcutCollider),this.cameraOccluders.push(e);const n=new _t;n.position.set(27.2,0,-26.8),n.rotation.y=-.35,Nt(n,4.6,.18,3.8,Q.stoneDark,0,.09,0),Bt(n,.12,.15,2.2,5,Q.timber,-1.9,1.1,-1.5),Bt(n,.12,.15,2.2,5,Q.timber,1.9,1.1,-1.5);const r=Nt(n,4.4,.15,3.7,Q.roof,0,2.35,0);r.rotation.z=.06,Nt(n,3.6,1.4,.18,Q.timber,0,.8,-1.85);const a=Nt(n,2.2,.16,.45,Q.timberLight,.4,.9,1.4);this.scene.add(n),this.colliders.push({type:"box",minX:25.1,maxX:29.3,minZ:-28.6,maxZ:-24.9,tag:"shelter"}),this.cameraOccluders.push(r,n.children[4]),this.keepsake=new _t,this.keepsake.position.set(27.5,1.02,-25.4);const o=new Wt(new ur(.16,.055,36,5,2,3),_e(12886894,{emissive:2759432,emissiveIntensity:.4}));o.rotation.x=.6,this.keepsake.add(o);const l=new Ui(16766346,.55,3,2);l.position.y=.2,this.keepsake.add(l),this.scene.add(this.keepsake),this.keepsakeShelf=a}_buildWayhouse(){const t=new _t;t.name="Upper Wayhouse",this.scene.add(t);const e=1.5,i=new _t;i.position.set(-7.5,e,-74),i.rotation.y=.08;const n=Nt(i,9.5,.28,7.5,Q.stoneDark,0,.14,0);n.receiveShadow=!0;const r=Nt(i,.3,3,7.3,Q.timber,-4.6,1.7,0),a=Nt(i,.3,3,7.3,Q.timber,4.6,1.7,0),o=Nt(i,9.2,3,.3,Q.timber,0,1.7,-3.5),l=Nt(i,5.6,.22,7.9,Q.roof,-2.35,3.7,0);l.rotation.z=.42;const c=Nt(i,5.6,.22,7.9,Q.roof,2.35,3.7,0);c.rotation.z=-.42,Nt(i,2.3,2.6,.22,Q.timberLight,1.4,1.35,3.45),Nt(i,1.2,1.2,.12,2831407,-2.6,1.9,3.48),this.scene.add(i),this.colliders.push({type:"box",minX:-12.2,maxX:-2.8,minZ:-77.8,maxZ:-70.2,tag:"wayhouse"}),this.cameraOccluders.push(r,a,o,l,c),this.wayhouse=i;const h=new _t;h.position.set(6.5,e,-71),Bt(h,.85,.95,.8,8,Q.stone,0,.4,0),Bt(h,.6,.6,.1,8,2440250,0,.82,0),Bt(h,.09,.11,2.5,5,Q.timber,-.9,1.4,0),Bt(h,.09,.11,2.5,5,Q.timber,.9,1.4,0),Nt(h,2.1,.2,1.4,Q.roof,0,2.7,0),this.scene.add(h),this.colliders.push({type:"circle",x:6.5,z:-71,r:1.1,tag:"well"}),this._buildCache("cache-c",-8.8,1.5,-72,.12),this._buildCache("cache-d",8.4,1.5,-83,-.2);for(let u=0;u<12;u++){const p=Lt(-15,15),v=Lt(-88,-66);Math.abs(p)<6&&v>-80||Zi(this.scene,p,v,Lt(.35,1))}const d=new _t;d.position.set(2.2,e,-67.5),Bt(d,.07,.1,2.3,5,Q.timber,0,1.15,0),Nt(d,.5,.45,.5,Q.stoneDark,0,2.25,0),this.scene.add(d)}_buildBrazier(){const e=new _t;e.name="Field Brazier",e.position.set(0,1.5,-96),Bt(e,1.25,1.55,.35,9,Q.stoneDark,0,.18,0),Bt(e,.36,.5,1.2,7,Q.stone,0,.9,0),Bt(e,.72,.42,.5,8,Q.stoneLight,0,1.7,0);const i=new Wt(new oe(.78,.5,.35,8,1,!0),_e(Q.stoneDark,{side:je}));i.position.y=1.95,e.add(i),this.scene.add(e),this.colliders.push({type:"circle",x:0,z:-96,r:1.15,tag:"brazier"}),this.brazierGroup=e,this.brazierFire=new Jo(new Xa({map:this.flameTex,transparent:!0,depthWrite:!1,blending:ds})),this.brazierFire.position.set(0,2.3,0),this.brazierFire.scale.set(1,1.4,1),this.brazierFire.visible=!1,e.add(this.brazierFire),this.brazierLight=new Ui(16757853,0,14,1.6),this.brazierLight.visible=!1,this.brazierLight.userData.lightEnabled=!1,this.brazierLight.position.set(0,2.7,0),e.add(this.brazierLight);const n=new _t;n.position.set(0,1.5,-100),Bt(n,.1,.13,2.2,5,Q.timber,-3.3,1.1,0),Bt(n,.1,.13,2.2,5,Q.timber,3.3,1.1,0),this.scene.add(n),this.bossGate=new _t,this.bossGate.position.set(0,1.5,-103.4),Bt(this.bossGate,.32,.42,4.8,6,Q.stoneDark,-3.9,2.4,0),Bt(this.bossGate,.32,.42,4.8,6,Q.stoneDark,3.9,2.4,0),Nt(this.bossGate,8.6,.55,.65,Q.stone,0,4.9,0);const r=new _t;r.position.set(0,0,0);for(let o=0;o<4;o++)Nt(r,1.55,3.8,.25,o%2?Q.stoneDark:Q.stone,-2.45+o*1.63,2,0);for(let o=0;o<4;o++)Nt(r,.18,3.9,.32,Q.stoneLight,-3.1+o*2.06,2,.1);const a=new Wt(new ei(8.6,4,.5),new ri({visible:!1}));a.position.set(0,2,0),r.add(a),this.cameraOccluders.push(a),this.bossGate.add(r),this.bossDoor=r,this.scene.add(this.bossGate),this.bossGateCollider={type:"box",minX:-4.2,maxX:4.2,minZ:-104,maxZ:-102.8,tag:"boss-gate",enabled:!0},this.colliders.push(this.bossGateCollider),this.cameraOccluders.push(r),this.bossGateOpen=!1}_buildCourtyard(){const t=st.world.bossArena,e=new _t;e.position.set(t.x,t.groundY,t.z);const i=new fo(12.4,14.4,40,1),n=new Wt(i,_e(Q.stoneDark,{side:je}));n.rotation.x=-Math.PI/2,n.position.y=.035,n.receiveShadow=!0,e.add(n);const r=new vs(12.6,36),a=new Wt(r,_e(Q.stone,{side:je}));a.rotation.x=-Math.PI/2,a.position.y=.02,a.receiveShadow=!0,e.add(a),this.scene.add(e);const o=_e(Q.stoneDark),l=new ei(3,3.6,1.2);for(let d=0;d<22;d++){const u=d/22*Math.PI*2;if(Math.abs((u+Math.PI)%(Math.PI*2)-Math.PI)<.19)continue;const p=t.x+Math.sin(u)*14,v=t.z+Math.cos(u)*14,y=new Wt(l,o);y.position.set(p,t.groundY+1.2,v),y.rotation.y=u,y.castShadow=!0,y.receiveShadow=!0,this.scene.add(y),this.colliders.push({type:"circle",x:p,z:v,r:1.25,tag:"arena-wall"}),this.cameraOccluders.push(y),d%2===0&&Zi(this.scene,p+Math.sin(u)*.8,v+Math.cos(u)*.8,.8,Q.stoneLight)}for(let d=0;d<8;d++){const u=.4+d*.75,p=t.x+Math.sin(u)*10.2,v=t.z+Math.cos(u)*10.2;if(Math.abs(p)<2.5&&v>t.z+8)continue;const y=Zi(this.scene,p,v,Lt(.35,.75),Q.stone);y.position.y=t.groundY+.3}const c=new _t;c.position.set(t.x,t.groundY,t.z-3),Bt(c,2,2.5,.35,8,Q.stoneDark,0,.18,0),Bt(c,1.25,1.6,.55,8,Q.stone,0,.55,0),this.scene.add(c),this.bossDais=c;const h=new _t;h.position.set(0,t.groundY,t.z+13.8),Bt(h,.4,.5,5.2,6,Q.stoneDark,-4.5,2.6,0),Bt(h,.4,.5,5.2,6,Q.stoneDark,4.5,2.6,0),Nt(h,10,.6,.7,Q.stone,0,5.2,0),this.scene.add(h),this.courtyardCenter=t}_buildCache(t,e,i,n,r){const a=new _t;a.position.set(e,i,n),a.rotation.y=r;const o=Nt(a,1.05,.7,.72,Q.timber,0,.38,0),l=Nt(a,1.1,.2,.78,Q.timberLight,0,.8,0);l.name="lid",Nt(a,.18,.5,.05,Q.stoneLight,0,.48,.38);const c=new Ui(16763247,.65,3.5,2);c.position.set(0,1.1,0),a.add(c);const h=new Wt(new uo(.13,0),new ri({color:16766085}));return h.position.y=1.25,a.add(h),this.scene.add(a),this.cacheMeshes.set(t,{group:a,lid:l,glow:c,marker:h,base:o}),this.colliders.push({type:"circle",x:e,z:n,r:.65,tag:t}),a}_buildBoundaries(){const t=st.world.bounds,e=2;this.colliders.push({type:"box",minX:t.minX-e,maxX:t.minX,minZ:t.minZ-4,maxZ:t.maxZ+4,tag:"boundary"}),this.colliders.push({type:"box",minX:t.maxX,maxX:t.maxX+e,minZ:t.minZ-4,maxZ:t.maxZ+4,tag:"boundary"}),this.colliders.push({type:"box",minX:t.minX-4,maxX:t.maxX+4,minZ:t.minZ-e,maxZ:t.minZ,tag:"boundary"}),this.colliders.push({type:"box",minX:t.minX-4,maxX:t.maxX+4,minZ:t.maxZ,maxZ:t.maxZ+e,tag:"boundary"}),this.boundaryRocks=[];for(let i=0;i<26;i++){const n=t.minX+i/25*(t.maxX-t.minX);this.boundaryRocks.push(Zi(this.scene,n,t.minZ+.8,Lt(.9,1.8),Q.stoneDark))}}addCollider(t){return this.colliders.push(t),t}resolveMovement(t,e,i,n){const r=st.world.bounds;let a=ve(t,r.minX+i,r.maxX-i),o=ve(e,r.minZ+i,r.maxZ-i);for(let l=0;l<4;l++){let c=!1;for(const h of this.colliders)if(h.enabled!==!1){if(h.type==="circle"){const d=a-h.x,u=o-h.z,p=i+h.r,v=Math.hypot(d,u);v<p&&(c=!0,v<1e-4?a=h.x+p:(a=h.x+d/v*p,o=h.z+u/v*p))}else if(h.type==="box"){const d=ve(a,h.minX,h.maxX),u=ve(o,h.minZ,h.maxZ),p=a-d,v=o-u,y=Math.hypot(p,v);if(y<i)if(c=!0,y>1e-4)a=d+p/y*i,o=u+v/y*i;else{const m=a-h.minX,f=h.maxX-a,S=o-h.minZ,R=h.maxZ-o,M=Math.min(m,f,S,R);M===m?a=h.minX-i:M===f?a=h.maxX+i:M===S?o=h.minZ-i:o=h.maxZ+i}}}if(!c)break}return!Number.isFinite(a)||!Number.isFinite(o)?{x:n.x,z:n.z}:{x:a,z:o}}isPositionValid(t,e,i=.38){const n=st.world.bounds;if(t<n.minX+i||t>n.maxX-i||e<n.minZ+i||e>n.maxZ-i||!Number.isFinite(ln(t,e)))return!1;for(const r of this.colliders)if(r.enabled!==!1){if(r.type==="circle"){if(Math.hypot(t-r.x,e-r.z)<r.r+i-.02)return!1}else if(r.type==="box"){const a=ve(t,r.minX,r.maxX),o=ve(e,r.minZ,r.maxZ);if(Math.hypot(t-a,e-o)<i-.02)return!1}}return!0}setCacheClaimed(t,e=!0){const i=this.cacheMeshes.get(t);i&&(e?(i.lid.rotation.x=-1.15,i.lid.position.z=-.28,i.lid.position.y=.7,i.glow.intensity=0,this._setPointLight(i.glow,!1),i.marker.visible=!1,i.base.material=_e(4997170)):(i.lid.rotation.x=0,i.lid.position.z=0,i.lid.position.y=.8,i.glow.intensity=.65,this._setPointLight(i.glow,!0),i.marker.visible=!0,i.base.material=_e(Q.timber)))}setKeepsakeCollected(t){this.keepsake.visible=!t,this.campKeepsake.visible=t,t&&(this.keepsakeShelf.material=_e(9269063))}setWorkshopBuilt(t){this.workshopRoof.visible=t,this.workshopTools.visible=t,this.workshopLight.intensity=t?1.7:0,this._setPointLight(this.workshopLight,t),this.workshopBench.material=_e(t?10123341:Q.timberLight)}setBrazierActive(t){this.brazierFire.visible=t,this.brazierLight.intensity=t?2.2:0,this._setPointLight(this.brazierLight,t)}setShortcutOpen(t){this.shortcutCollider.enabled=!t,this.shortcutDoor.rotation.y=t?-1.65:0}setBossGate(t){this.bossGateOpen=t,this.bossGateCollider.enabled=!t,this.bossDoor.rotation.y=t?1.35:0,this.bossDoor.position.x=t?1.8:0}setBeaconBuilt(t){this.brokenLens.visible=!t,this.beaconLens.visible=t,this.beaconLight.intensity=t?3.2:0,this._setPointLight(this.beaconLight,t);for(const i of this.bridgeLamps)i.bulb.visible=t,this._setPointLight(i.light,t),i.light.intensity=t?1.4:0;const e=this.colliders.find(i=>i.tag==="bridge-gate");e&&(e.enabled=!t),this.bridgeGateBar&&(this.bridgeGateBar.visible=!t)}setBridgeLights(t){for(const e of this.bridgeLamps)e.bulb.visible=t,this._setPointLight(e.light,t),e.light.intensity=t?1.4:0;this.beaconLight.intensity=t?3.2:0,this._setPointLight(this.beaconLight,t),this.beaconLens.visible=t}setQuality(t){this.quality=t;const e=t==="low";this.sun.castShadow=!e,this.renderer.shadowMap.enabled=!e,this.scene.traverse(i=>{if(i.isPointLight){i.visible=i.userData.lightEnabled!==!1&&(!e||i.userData.lowLight===!0);return}i.isMesh&&(i.userData.baseCastShadow===void 0&&(i.userData.baseCastShadow=i.castShadow),i.castShadow=!e&&i.userData.baseCastShadow)});for(const i of this.treeMeshes)i.castShadow=!1}update(t,e,i){if(this.time=e,this.hearthFire){const r=.92+Math.sin(e*12.3)*.08+Math.sin(e*20.1)*.04;this.hearthFire.scale.set(1.4*r,1.8*r,1),this.hearthLight.intensity=2.2+Math.sin(e*9.7)*.18}if(this.brazierFire.visible){const r=.9+Math.sin(e*10.4)*.1+Math.sin(e*17.2)*.05;this.brazierFire.scale.set(1*r,1.4*r,1),this.brazierLight.intensity=2+Math.sin(e*8.1)*.25}this.beaconLens.visible&&(this.beaconLens.rotation.y+=t*.6);const n=1.25+Math.sin(e*2.2)*.1;for(const[,r]of this.cacheMeshes)r.marker.visible&&(r.marker.position.y=n,r.marker.rotation.y+=t*1.4);this.keepsake.visible&&(this.keepsake.rotation.y+=t*.7,this.keepsake.position.y=1.02+Math.sin(e*2.5)*.05),this.campKeepsake.visible&&(this.campKeepsake.rotation.y+=t*.4)}}function an(s,t={}){return new mr({color:s,flatShading:!0,...t})}function Je(s,t,e){const i=new Wt(s,t);return i.castShadow=!0,i.receiveShadow=!0,e.add(i),i}class o0{constructor(t){this.game=t,this.radius=st.player.radius,this.position=new P,this.safePosition=new P,this.facing=Math.PI,this.health=st.player.maxHealth,this.stamina=st.player.maxStamina,this.healCharges=st.player.healCharges,this.state="normal",this.stateTime=0,this.attack=null,this.attackCounter=0,this.dodge=null,this.heal=null,this.hurtTimer=0,this.deathTimer=0,this.invulnerableUntil=-1,this.lastDamageTime=-99,this.lastStaminaUse=-99,this.lastCombatEvent=-99,this.queuedAction=null,this.queuedAt=-99,this.lockTarget=null,this.sprinting=!1,this.walkPhase=0,this.lastStep=-1,this.flash=0,this.facingCommitted=!1,this.spearReinforced=!1,this._buildMesh(),this.updateVisual(0,0)}_buildMesh(){this.root=new _t,this.root.name="Traveler",this.body=new _t,this.root.add(this.body),this.bodyMats=[];const t=an(8809552),e=an(5200977),i=an(13017210),n=an(5061419),r=an(3682087);this.bodyMats.push(t,e,i,n,r),this.hips=new _t,this.hips.position.y=.9,this.body.add(this.hips);const a=Je(new oe(.24,.34,.78,6),e,this.hips);a.position.y=.3,this.torso=a;const o=Je(new oe(.3,.25,.28,6),n,this.hips);o.position.y=.56;const l=Je(new Ue(.19,1),i,this.hips);l.position.y=.88;const c=Je(new pi(.29,.42,6),t,this.hips);c.position.set(0,1.01,-.02),c.rotation.x=-.06;const h=Je(new pi(.47,.95,6,1,!0),t,this.body);h.position.set(0,.78,-.23),h.rotation.x=.1,h.material=t,this.cloak=h;const d=Je(new ei(.42,.46,.25),n,this.body);d.position.set(0,1.08,-.31),d.rotation.x=.08,this.pack=d,this.leftLeg=new _t,this.leftLeg.position.set(-.14,.78,0),this.body.add(this.leftLeg);const u=Je(new oe(.09,.075,.72,5),r,this.leftLeg);u.position.y=-.36,this.rightLeg=new _t,this.rightLeg.position.set(.14,.78,0),this.body.add(this.rightLeg);const p=Je(new oe(.09,.075,.72,5),r,this.rightLeg);p.position.y=-.36,this.leftArm=new _t,this.leftArm.position.set(-.3,1.36,0),this.body.add(this.leftArm);const v=Je(new oe(.065,.055,.58,5),e,this.leftArm);v.position.y=-.27,this.rightArm=new _t,this.rightArm.position.set(.31,1.36,0),this.body.add(this.rightArm);const y=Je(new oe(.065,.055,.58,5),e,this.rightArm);y.position.y=-.27,this.spearPivot=new _t,this.spearPivot.position.set(.34,1.22,.1),this.body.add(this.spearPivot);const m=Je(new oe(.032,.038,2.35,6),n,this.spearPivot);m.rotation.x=Math.PI/2,m.position.z=1.03;const f=Je(new oe(.06,.06,.12,6),an(7169108),this.spearPivot);f.rotation.x=Math.PI/2,f.position.z=2.13,this.spearTipMat=an(11907232,{emissive:1118220,emissiveIntensity:.2});const S=Je(new pi(.075,.34,5),this.spearTipMat,this.spearPivot);S.rotation.x=Math.PI/2,S.position.z=2.36,this.spearTip=S,this.healGlow=new Ui(9560224,0,3.2,2),this.healGlow.position.set(0,1.1,0),this.body.add(this.healGlow),this.root.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)}),this.game.scene.add(this.root)}setReinforced(t){this.spearReinforced=t,this.spearTipMat.color.setHex(t?15913354:11907232),this.spearTipMat.emissive.setHex(t?5913096:1118220),this.spearTipMat.emissiveIntensity=t?.45:.2}resetAt(t,e=!0){const i=t.spawn;this.position.set(i.x,this.game.world.groundHeight(i.x,i.z),i.z),this.safePosition.copy(this.position),this.facing=i.yaw,this.state="normal",this.stateTime=0,this.attack=null,this.dodge=null,this.heal=null,this.hurtTimer=0,this.deathTimer=0,this.queuedAction=null,this.lockTarget=null,this.invulnerableUntil=-1,this.lastDamageTime=-99,this.lastStaminaUse=-99,this.lastCombatEvent=-99,this.sprinting=!1,this.flash=0,e&&(this.health=st.player.maxHealth,this.stamina=st.player.maxStamina,this.healCharges=st.player.healCharges),this.root.visible=!0,this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.root.rotation.set(0,this.facing,0),this.root.position.copy(this.position),this.updateVisual(0,this.game.time)}get isDead(){return this.state==="dead"}get isBusy(){return this.state==="attack"||this.state==="dodge"||this.state==="heal"||this.state==="hurt"||this.state==="dead"}get attackDamage(){if(!this.attack)return 0;const t=st.player.attacks[this.attack.type].damage;return this.spearReinforced?st.player.workshopUpgrade[this.attack.type]:t}queueAction(t){this.isDead||(this.queuedAction=t,this.queuedAt=this.game.time)}toggleLockOn(){if(this.isDead)return;if(this.lockTarget){this.lockTarget=null,this.game.audio.lockOn();return}const t=this.getLockCandidates();t.length?(this.lockTarget=t[0],this.game.audio.lockOn(),this.game.ui?.toast(`Locked: ${this.lockTarget.name}`)):this.game.ui?.toast("No visible target within reach.")}cycleLockTarget(t){const e=this.getLockCandidates();if(!e.length){this.lockTarget=null;return}let i=e.indexOf(this.lockTarget);i<0?i=0:i=(i+(t>0?1:-1)+e.length)%e.length,this.lockTarget=e[i],this.game.audio.lockOn()}getLockCandidates(){const t=this.game.getHostileTargets().filter(r=>r.alive&&!r.isBossHidden),e=this.game.camera,i=e.position,n=[];for(const r of t){const a=r.lockPoint(),o=Math.hypot(a.x-this.position.x,a.z-this.position.z);if(o>st.player.lockOn.acquireRange)continue;const l=a.clone().project(e);if(l.z<-1||l.z>1||Math.abs(l.x)>.85||Math.abs(l.y)>.82||i.distanceTo(a)>24||!this.game.hasLineOfSight(a))continue;const h=Math.hypot(l.x,l.y);n.push({target:r,score:h*2.1+o*.035})}return n.sort((r,a)=>r.score-a.score),n.map(r=>r.target)}update(t,e){const i=e.time;if(this.stateTime+=t,this.flash>0&&(this.flash=Math.max(0,this.flash-t)),this.state==="dead"){this.deathTimer+=t,this.updateVisual(t,i);return}this.validateLockTarget(),this.queuedAction&&i-this.queuedAt>st.player.inputBuffer&&(this.queuedAction=null);const n=e.input.movementAxes(),r=e.cameraRig.yaw,a=-Math.sin(r),o=-Math.cos(r),l=Math.cos(r),c=-Math.sin(r);let h=a*n.z+l*n.x,d=o*n.z+c*n.x;const u=Math.hypot(h,d);u>.001&&(h/=u,d/=u);const p=u>.001,v=e.input.isDown("ShiftLeft")&&p&&!this.isBusy&&this.state!=="heal";if(this.state==="normal"||this.state==="heal")if(this.queuedAction&&this.state==="normal"&&this.tryStartAction(this.queuedAction,h,d,p,e),this.state==="normal"){this.sprinting=v&&this.stamina>0;let m=this.sprinting?st.player.sprintSpeed:st.player.walkSpeed;if(this.sprinting&&(this.stamina-=st.player.sprintStaminaPerSecond*t,this.lastStaminaUse=i,this.stamina<=0&&(this.stamina=0,this.sprinting=!1,m=st.player.walkSpeed)),p){if(this.moveWithCollision(h*m*t,d*m*t,e),this.lockTarget){const S=this.lockTarget.lockPoint();this.facing=ui(this.facing,Ks(this.position.x,this.position.z,S.x,S.z),st.player.lockOn.facingTurnRate*t)}else this.facing=ui(this.facing,Math.atan2(h,d),13*t);this.walkPhase+=m*t*2.5;const f=Math.floor(this.walkPhase/Math.PI);f!==this.lastStep&&(this.lastStep=f,e.audio.footstep(this.sprinting))}else if(this.lockTarget){const f=this.lockTarget.lockPoint();this.facing=ui(this.facing,Ks(this.position.x,this.position.z,f.x,f.z),st.player.lockOn.facingTurnRate*t)}}else this.state==="heal"&&(this.sprinting=!1,p&&(this.moveWithCollision(h*st.player.healMoveSpeed*t,d*st.player.healMoveSpeed*t,e),this.facing=ui(this.facing,Math.atan2(h,d),5*t)),this.updateHeal(t,e));else this.state==="attack"?(this.sprinting=!1,this.updateAttack(t,i,e,h,d,p)):this.state==="dodge"?(this.sprinting=!1,this.updateDodge(t,e)):this.state==="hurt"&&(this.sprinting=!1,this.hurtTimer-=t,this.hurtTimer<=0&&(this.state="normal"));this.state==="normal"&&this.queuedAction&&this.tryStartAction(this.queuedAction,h,d,p,e),!(this.state==="attack"||this.state==="dodge"||this.state==="heal"||this.state==="hurt"||this.sprinting)&&i-this.lastStaminaUse>=st.player.staminaRegenDelay&&(this.stamina=Math.min(st.player.maxStamina,this.stamina+st.player.staminaRegenPerSecond*t)),this.position.y=e.world.groundHeight(this.position.x,this.position.z),e.world.isPositionValid(this.position.x,this.position.z,this.radius)?this.safePosition.copy(this.position):(this.position.x=this.safePosition.x,this.position.z=this.safePosition.z,this.position.y=e.world.groundHeight(this.position.x,this.position.z)),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this.updateVisual(t,i)}validateLockTarget(){if(!this.lockTarget)return;if(!this.lockTarget.alive){this.lockTarget=null;return}const t=this.lockTarget.lockPoint();Math.hypot(t.x-this.position.x,t.z-this.position.z)>st.player.lockOn.releaseRange&&(this.lockTarget=null)}tryStartAction(t,e,i,n,r){if(t==="light"||t==="heavy"){const a=st.player.attacks[t];return this.stamina<a.stamina?!1:(this.startAttack(t,e,i,n,r),!0)}return t==="dodge"?this.stamina<st.player.dodge.stamina?!1:(this.startDodge(e,i,n,r),!0):t==="heal"?this.health>=st.player.maxHealth||this.healCharges<=0?!1:(this.startHeal(r),!0):!1}startAttack(t,e,i,n,r){const a=st.player.attacks[t];this.stamina-=a.stamina,this.lastStaminaUse=r.time,this.lastCombatEvent=r.time,this.state="attack",this.stateTime=0,this.queuedAction=null,this.facingCommitted=!1;let o=this.facing;if(this.lockTarget&&this.lockTarget.alive){const l=this.lockTarget.lockPoint();o=Ks(this.position.x,this.position.z,l.x,l.z)}else n&&(o=Math.atan2(e,i));this.facing=o,this.attack={type:t,id:`${t}-${++this.attackCounter}`,elapsed:0,hit:new Set,prevTip:null,stepped:0,damage:this.spearReinforced?st.player.workshopUpgrade[t]:a.damage},r.audio.swing(t),r.onCombatEvent()}startDodge(t,e,i,n){const r=st.player.dodge;this.stamina-=r.stamina,this.lastStaminaUse=n.time,this.lastCombatEvent=n.time;let a=t,o=e;i||(a=-Math.sin(this.facing),o=-Math.cos(this.facing)),this.state="dodge",this.stateTime=0,this.queuedAction=null,this.dodge={elapsed:0,dx:a,dz:o,distance:r.distance,duration:r.duration,moved:0},this.facing=Math.atan2(a,o),n.audio.dodge(),n.onCombatEvent()}startHeal(t){this.state="heal",this.stateTime=0,this.queuedAction=null,this.heal={elapsed:0},t.audio.healStart(),t.onCombatEvent()}updateAttack(t,e,i,n,r,a){const o=st.player.attacks[this.attack.type];this.attack.elapsed+=t;const l=this.attack.elapsed,c=o.windup+o.active+o.recovery;if(!this.facingCommitted)if(l<=o.facingWindow)if(this.lockTarget&&this.lockTarget.alive){const u=this.lockTarget.lockPoint();this.facing=ui(this.facing,Ks(this.position.x,this.position.z,u.x,u.z),18*t)}else a&&(this.facing=ui(this.facing,Math.atan2(n,r),10*t));else this.facingCommitted=!0;const h=o.windup+o.active*.5;if(l<h&&this.attack.stepped<o.forwardStep){const u=Math.min(o.forwardStep-this.attack.stepped,1.6*t);this.attack.stepped+=u,this.moveWithCollision(Math.sin(this.facing)*u,Math.cos(this.facing)*u,i)}this.root.updateMatrixWorld(!0);const d=this.getSpearTip();if(this.attack.prevTip||(this.attack.prevTip=d.clone()),l>=o.windup&&l<=o.windup+o.active)for(const u of i.getHostileTargets()){if(!u.alive||this.attack.hit.has(u))continue;const p=u.lockPoint();if(Math.hypot(p.x-this.position.x,p.z-this.position.z)>o.reach)continue;const y=Ol(this.attack.prevTip.x,this.attack.prevTip.z,d.x,d.z,p.x,p.z),m=Ol(this.position.x,this.position.z,d.x,d.z,p.x,p.z);Math.min(y,m)>o.tipRadius+u.radius||(this.attack.hit.add(u),i.queueOutgoingHit(u,this.attack.damage,this.attack.type,this.attack.id))}this.attack.prevTip.copy(d),l>=c&&(this.attack=null,this.state="normal",this.stateTime=0)}updateDodge(t,e){const i=st.player.dodge;this.dodge.elapsed+=t;const n=i.distance/i.duration*t,r=this.position.x,a=this.position.z;this.moveWithCollision(this.dodge.dx*n,this.dodge.dz*n,e),this.dodge.moved+=Math.hypot(this.position.x-r,this.position.z-a),this.dodge.elapsed>=i.duration&&(this.dodge=null,this.state="normal",this.stateTime=0)}updateHeal(t,e){this.heal.elapsed+=t,this.heal.elapsed>=st.player.healTime&&(this.health=Math.min(st.player.maxHealth,this.health+st.player.healAmount),this.healCharges=Math.max(0,this.healCharges-1),this.heal=null,this.state="normal",this.stateTime=0,e.audio.healComplete(),e.ui?.toast("Wounds bound. One healing charge spent."))}moveWithCollision(t,e,i){if(t===0&&e===0)return;const n={x:this.position.x,z:this.position.z},r=this.position.x+t,a=this.position.z+e,o=i.world.resolveMovement(r,a,this.radius,n);Number.isFinite(o.x)&&Number.isFinite(o.z)&&(this.position.x=o.x,this.position.z=o.z),this.position.y=i.world.groundHeight(this.position.x,this.position.z)}isInvulnerable(t=this.game.time){if(t<this.invulnerableUntil)return!0;if(this.state==="dodge"&&this.dodge){const e=st.player.dodge;if(this.dodge.elapsed>=e.invulnerableFrom&&this.dodge.elapsed<=e.invulnerableTo)return!0}return!1}takeDamage(t,e,i,n){const r=n.time;return this.state==="dead"||this.isInvulnerable(r)?!1:(this.health=Math.max(0,this.health-t),this.invulnerableUntil=r+st.player.damageInvulnerability,this.lastDamageTime=r,this.lastCombatEvent=r,this.flash=.22,this.clearCommittedAttack(),this.state==="heal"&&(this.heal=null,n.ui?.toast("Healing interrupted.")),this.state==="dodge"&&(this.dodge=null),this.state="hurt",this.stateTime=0,this.hurtTimer=st.player.hitReactionTime,this.sprinting=!1,n.audio.hurt(),n.onPlayerDamaged(e,t),this.health<=0&&this.die(n),!0)}clearCommittedAttack(){this.attack&&(this.attack.hit.clear(),this.attack.prevTip=null,this.attack=null)}die(t){this.state="dead",this.deathTimer=0,this.attack=null,this.heal=null,this.dodge=null,this.lockTarget=null,this.sprinting=!1,t.audio.death(),t.onPlayerDeath()}getSpearTip(){const t=new P(0,0,2.38);return this.spearPivot.updateWorldMatrix(!0,!1),this.spearPivot.localToWorld(t)}updateVisual(t,e){const i=this.state;this.stateTime;let n=0,r=0,a=0,o=.1,l=0,c=0,h=0,d=0,u=0,p=0;if(this.state==="normal"&&(this.game.input?.movementAxes().x!==0||this.game.input?.movementAxes().z!==0)){const m=this.sprinting?.75:.48;h=Math.sin(this.walkPhase)*m,d=-Math.sin(this.walkPhase)*m,u=-Math.sin(this.walkPhase)*m*.55,r=Math.abs(Math.sin(this.walkPhase*2))*.035,n=this.sprinting?.18:.04}else i==="normal"&&(r=Math.sin(e*1.8)*.012);if(i==="attack"&&this.attack){const m=st.player.attacks[this.attack.type],f=this.attack.elapsed;if(f<m.windup){const S=f/m.windup;o=Te(.1,-.34,S),n=-.08*S,p=-.6*S,u=.3*S,c=-.08*S}else if(f<m.windup+m.active){const S=(f-m.windup)/m.active;o=Te(-.34,.62,S),n=Te(-.08,.28,S),p=Te(-.6,.8,S),u=Te(.3,-.45,S),c=Te(-.08,.03,S),r=-.05}else{const S=(f-m.windup-m.active)/m.recovery;o=Te(.62,.1,S),n=Te(.28,0,S),p=Te(.8,0,S),u=Te(-.45,0,S),c=Te(.03,0,S)}this.attack.type==="heavy"&&(l=Math.sin(f/(m.windup+m.active+m.recovery)*Math.PI)*-.12)}else if(i==="dodge"&&this.dodge){const m=ve(this.dodge.elapsed/st.player.dodge.duration,0,1);n=Math.sin(m*Math.PI)*.5,r=-Math.sin(m*Math.PI)*.28,a=Math.sin(m*Math.PI)*.32,h=.7,d=-.7,o=-.05}else if(i==="heal")n=-.08,u=-.65,p=-.2,o=-.1,this.healGlow.intensity=.8+Math.sin(e*7)*.3;else if(i==="hurt"){const m=1-this.hurtTimer/st.player.hitReactionTime;n=-.28*Math.sin(m*Math.PI),a=.14*Math.sin(m*Math.PI),u=-.35,p=-.35}else if(i==="dead"){const m=ve(this.deathTimer/.85,0,1);a=m*1.42,r=-m*.52,this.healGlow.intensity=0}i!=="heal"&&(this.healGlow.intensity=0),this.body.rotation.x=n,this.body.rotation.z=a,this.body.position.y=r,this.leftLeg.rotation.x=h,this.rightLeg.rotation.x=d,this.leftArm.rotation.x=u,this.rightArm.rotation.x=p,this.spearPivot.position.z=o,this.spearPivot.rotation.x=l,this.spearPivot.rotation.y=c,this.cloak.rotation.x=.1+n*.4+(this.sprinting?.16:0);const y=this.flash>0?this.flash/.22:0;for(const m of this.bodyMats)m.emissive.setRGB(y*.5,y*.07,y*.04),m.emissiveIntensity=1}}function Si(s,t={}){return new mr({color:s,flatShading:!0,...t})}function te(s,t,e,i=0,n=0,r=0){const a=new Wt(t,e);return a.position.set(i,n,r),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function l0(s,t,e=22){const i=[0,0,0],n=[];for(let a=0;a<=e;a++){const o=-t+a/e*t*2;i.push(Math.sin(o)*s,0,Math.cos(o)*s),a>0&&n.push(0,a,a+1)}const r=new Ie;return r.setAttribute("position",new se(i,3)),r.setIndex(n),r.computeVertexNormals(),r}function c0(s=16757853){return new ri({color:s,transparent:!0,opacity:.2,depthWrite:!1,side:je,blending:ds})}function dr(s,t,e){const i=new _t,n=new Wt(s==="circle"?new vs(t,30):l0(t,e),c0());return n.rotation.x=s==="circle"?-Math.PI/2:0,n.position.y=.035,i.add(n),i.visible=!1,{group:i,mesh:n}}class h0{constructor(t,e,i){this.game=t,this.def=e,this.encounter=i,this.type=e.type,this.cfg=st.ordinaryEnemies[e.type],this.name=this.cfg.name,this.radius=this.cfg.radius,this.height=this.cfg.height,this.maxHealth=this.cfg.health,this.health=this.maxHealth,this.home={x:e.x,z:e.z},this.position=new P(e.x,t.world.groundHeight(e.x,e.z),e.z),this.facing=0,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attackCounter=0,this.attack=null,this.hitPlayer=!1,this.staggerResistantUntil=-1,this.flash=0,this.idlePhase=Math.random()*Math.PI*2,this.deathTime=0,this.hasToken=!1,this._buildVisual(),this.reset()}_buildVisual(){this.root=new _t,this.root.name=this.name,this.body=new _t,this.root.add(this.body),this.materials=[],this.type==="briarling"?this._buildBriarling():this._buildMossguard(),this.game.scene.add(this.root),this.tells={},this.type==="briarling"?this.tells.lunge=dr("sector",this.cfg.attack.reach,this.cfg.attack.halfArc):this.tells.sweep=dr("sector",this.cfg.attack.reach,this.cfg.attack.halfArc);for(const t of Object.keys(this.tells))this.game.scene.add(this.tells[t].group)}_buildBriarling(){const t=Si(4995627),e=Si(6638386),i=Si(3814440),n=new ri({color:16762726});this.materials.push(t,e,i);const r=te(this.body,new Ue(.46,0),t,0,.58,0);r.scale.set(1,.82,1.2),this.core=r;for(let a=0;a<7;a++){const o=a/7*Math.PI*2,l=te(this.body,new pi(.09,.45,4),i,Math.sin(o)*.38,.68+a%2*.12,Math.cos(o)*.42);l.rotation.z=Math.cos(o)*.8,l.rotation.x=-Math.sin(o)*.8}for(const a of[-1,1]){const o=te(this.body,new Ue(.055,0),n,a*.14,.66,.37);o.castShadow=!1}this.legs=[];for(let a=0;a<4;a++){const o=new _t;o.position.set((a%2?1:-1)*.28,.36,(a<2?1:-1)*.22);const l=te(o,new oe(.045,.025,.55,4),t,0,-.25,0);l.rotation.z=(a%2?-1:1)*.35,this.body.add(o),this.legs.push(o)}this.armL=new _t,this.armL.position.set(-.34,.62,.12),te(this.armL,new oe(.05,.03,.5,4),e,-.1,-.18,0),this.body.add(this.armL),this.armR=new _t,this.armR.position.set(.34,.62,.12),te(this.armR,new oe(.05,.03,.5,4),e,.1,-.18,0),this.body.add(this.armR)}_buildMossguard(){const t=Si(6910827),e=Si(5266003),i=Si(6454602),n=new ri({color:16762726});this.materials.push(t,e,i);const r=te(this.body,new Fi(.78,0),t,0,1.22,0);r.scale.set(1,1.1,.72),this.core=r,te(this.body,new ei(.82,.28,.58),i,0,1.72,-.04),te(this.body,new Ue(.28,0),e,0,1.92,.08).scale.set(1,.82,.9),te(this.body,new Ue(.055,0),n,-.11,1.96,.32).castShadow=!1,te(this.body,new Ue(.055,0),n,.11,1.96,.32).castShadow=!1,this.legL=new _t,this.legL.position.set(-.38,.72,0),te(this.legL,new oe(.17,.14,.82,5),e,0,-.38,0),this.body.add(this.legL),this.legR=new _t,this.legR.position.set(.38,.72,0),te(this.legR,new oe(.17,.14,.82,5),e,0,-.38,0),this.body.add(this.legR),this.armL=new _t,this.armL.position.set(-.82,1.55,0),te(this.armL,new oe(.15,.12,.75,5),e,0,-.36,0),this.body.add(this.armL),this.armR=new _t,this.armR.position.set(.82,1.55,0),te(this.armR,new oe(.22,.17,1,5),t,0,-.44,0),te(this.armR,new Fi(.3,0),e,0,-.98,0).scale.set(1.2,1,1.1),this.body.add(this.armR),te(this.body,new Ue(.22,0),i,-.5,1.5,-.4).scale.set(1,.4,1),te(this.body,new Ue(.18,0),i,.45,.9,.28).scale.set(1,.35,1)}reset(){this.releaseToken(),this.position.set(this.home.x,this.game.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.health=this.maxHealth,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attack=null,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.staggerResistantUntil=-1,this.root.visible=!0,this.root.position.copy(this.position),this.root.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.scale.set(1,1,1);for(const t of Object.keys(this.tells))this.tells[t].group.visible=!1;this.updateHealthBar()}engage(){!this.alive||this.engaged||(this.engaged=!0,this.state="chase",this.stateTime=0)}lockPoint(){return new P(this.position.x,this.position.y+this.height*.62,this.position.z)}updateHealthBar(){}receiveToken(){return this.hasToken?!0:this.game.ordinaryAttacker&&this.game.ordinaryAttacker!==this?!1:(this.hasToken=!0,this.game.ordinaryAttacker=this,!0)}releaseToken(){(this.hasToken||this.game.ordinaryAttacker===this)&&(this.game.ordinaryAttacker===this&&(this.game.ordinaryAttacker=null),this.hasToken=!1)}update(t,e){if(this.flash>0&&(this.flash=Math.max(0,this.flash-t)),!this.alive){this.deathTime+=t,this._animate(t,e.time);return}if(!this.engaged){this._animate(t,e.time);return}const i=e.player;if(i.isDead){this._animate(t,e.time);return}if(this._shouldReset(i)){this.reset(),e.onEnemyLeashReset(this);return}this.stateTime+=t;const n=i.position.x-this.position.x,r=i.position.z-this.position.z,a=Math.hypot(n,r),o=Math.atan2(n,r);if(this.state==="chase"||this.state==="idle"){if(this.state="chase",(this.stateTime<.2||a>this.cfg.stopRange)&&(this.facing=ui(this.facing,o,5.5*t)),a>this.cfg.stopRange){const c=this.cfg.speed,h=Math.min(c*t,a-this.cfg.stopRange+.05);h>0&&this._move(Math.sin(o)*h,Math.cos(o)*h,e)}else if(!this.hasToken&&e.ordinaryAttacker&&e.ordinaryAttacker!==this){const c=this.stateTime%2<1?1:-1,h=o+Math.PI/2*c;this._move(Math.sin(h)*this.cfg.speed*.35*t,Math.cos(h)*this.cfg.speed*.35*t,e)}const l=a<=this.cfg.attackRange&&a>.3;if(l&&this.receiveToken())this._startAttack(e);else if(l&&!this.hasToken){const c=Math.sin(e.time*.8+this.idlePhase)>0?1:-1,h=o+Math.PI/2*c;this._move(Math.sin(h)*this.cfg.speed*.3*t,Math.cos(h)*this.cfg.speed*.3*t,e)}}else if(this.state==="windup"){const l=this.attack;this.stateTime<l.tell-this.cfg.facingLock&&(this.facing=ui(this.facing,o,7*t)),this.stateTime>=l.tell&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this._hideTells())}else if(this.state==="active"){const l=this.attack;if(this.type==="briarling"){const c=2*t;this._move(Math.sin(this.facing)*c,Math.cos(this.facing)*c,e)}this.hitPlayer||Ac(this.position,this.facing,i.position,l.reach,l.halfArc)&&(this.hitPlayer=!0,e.queueIncomingHit(this,l.damage,l.id,"ordinary")),this.stateTime>=l.active&&(this.state="recovery",this.stateTime=0)}else this.state==="recovery"?this.stateTime>=this.attack.recovery&&(this.releaseToken(),this.attack=null,this.state="chase",this.stateTime=0):this.state==="stagger"&&this.stateTime>=this.cfg.staggerDuration&&(this.state="chase",this.stateTime=0);this.position.y=e.world.groundHeight(this.position.x,this.position.z),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this._animate(t,e.time)}_shouldReset(t){return t.position.z>3&&Math.abs(t.position.x)<20?!0:Math.hypot(t.position.x-this.home.x,t.position.z-this.home.z)>this.cfg.leash}_move(t,e,i){const n={x:this.position.x,z:this.position.z},r=i.world.resolveMovement(this.position.x+t,this.position.z+e,this.radius,n);this.position.x=r.x,this.position.z=r.z}_startAttack(t){this.attackCounter++,this.state="windup",this.stateTime=0,this.attack={...this.cfg.attack,id:`${this.type}-${this.attackCounter}`,activeElapsed:0};const e=t.player.position.x-this.position.x,i=t.player.position.z-this.position.z;this.facing=Math.atan2(e,i),t.audio.enemyTell(this.type),this.game.onCombatEvent()}_hideTells(){for(const t of Object.keys(this.tells))this.tells[t].group.visible=!1}_showTell(t,e,i,n,r,a){const o=this.tells[t];if(o){for(const l of Object.keys(this.tells))l!==t&&(this.tells[l].group.visible=!1);o.group.visible=!0,o.group.position.set(e,a+.04,i),o.group.rotation.y=n,o.mesh.material.opacity=r}}receivePlayerHit(t,e,i,n){if(this.alive){if(this.health=Math.max(0,this.health-t),this.flash=.18,n.onEnemyDamaged(this,t,e),this.health<=0){this.die(n);return}e==="heavy"&&this.state==="windup"&&n.time>=this.staggerResistantUntil&&(this.staggerResistantUntil=n.time+this.cfg.staggerResistance,this.releaseToken(),this.attack=null,this.state="stagger",this.stateTime=0,this._hideTells(),n.ui?.toast(`${this.name} staggered.`)),this.updateHealthBar()}}die(t){this.alive&&(this.alive=!1,this.engaged=!1,this.state="dead",this.deathTime=0,this.releaseToken(),this._hideTells(),this.attack=null,t.onEnemyKilled(this))}_animate(t,e){const i=this.state;let n=Math.sin(e*2+this.idlePhase)*.02,r=0,a=0,o=0,l=1,c=1,h=1,d=0,u=0,p=0,v=0;if(this.type==="briarling"){if(i==="windup"){const m=ve(this.stateTime/this.cfg.attack.tell,0,1);n=-.18*m,r=-.18*m,l=1+.18*m,h=1-.16*m,this._showTell("lunge",this.position.x,this.position.z,this.facing,.08+m*.28,this.position.y)}else if(i==="active")o=.38,r=.22,h=1.28,l=.9;else if(i==="recovery")o=.1,r=.08;else if(i==="stagger")a=.55,n=-.12;else if(i==="dead"){const m=ve(this.deathTime/.7,0,1);a=m*1.4,n=-m*.3}else for(let m=0;m<this.legs.length;m++)this.legs[m].rotation.x=Math.sin(e*4+m*1.7)*.15;this.armL.rotation.x=-.3+d,this.armR.rotation.x=-.3+u,this.armL.rotation.z=p,this.armR.rotation.z=v,i==="windup"?(this.armL.rotation.x=-.9,this.armR.rotation.x=-.9):i==="active"&&(this.armL.rotation.x=.7,this.armR.rotation.x=.7)}else{if(i==="windup"){const m=ve(this.stateTime/this.cfg.attack.tell,0,1);r=-.14*m,n=-.08*m,u=-1.1*m,d=.25*m,this._showTell("sweep",this.position.x,this.position.z,this.facing,.08+m*.28,this.position.y)}else if(i==="active")r=.18,u=1.35,d=-.25;else if(i==="recovery")r=.05,u=.6;else if(i==="stagger")r=-.24,a=.2;else if(i==="dead"){const m=ve(this.deathTime/1,0,1);a=m*1.35,n=-m*.45}else this.legL.rotation.x=Math.sin(e*2.5+this.idlePhase)*.08,this.legR.rotation.x=-Math.sin(e*2.5+this.idlePhase)*.08;this.armL.rotation.x=d,this.armR.rotation.x=u}this.body.position.set(0,n,o),this.body.rotation.x=r,this.body.rotation.z=a,this.body.scale.set(l,c,h);const y=this.flash>0?this.flash/.18:0;for(const m of this.materials)m.emissive.setRGB(y*.42,y*.08,y*.04),m.emissiveIntensity=1}}class u0{constructor(t){this.game=t,this.cfg=st.boss,this.name=this.cfg.name,this.radius=this.cfg.radius,this.height=this.cfg.height,this.maxHealth=this.cfg.health,this.health=this.maxHealth,this.home={x:0,z:-120},this.position=new P(this.home.x,t.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.alive=!0,this.engaged=!1,this.isBoss=!0,this.isBossHidden=!1,this.state="idle",this.stateTime=0,this.attack=null,this.attackCounter=0,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.phase=1,this.phaseTransitionPending=!1,this.sequenceIndex=0,this.idlePhase=1.2,this._buildVisual(),this.tells={sweep:dr("sector",this.cfg.attacks.sweep.reach,this.cfg.attacks.sweep.halfArc),overhead:dr("circle",this.cfg.attacks.overhead.radius,Math.PI)};for(const e of Object.keys(this.tells))this.game.scene.add(this.tells[e].group);this.reset()}_buildVisual(){const t=Si(6911085),e=Si(5134675),i=Si(8950153),n=Si(5994567),r=new ri({color:16760161});this.materials=[t,e,i,n],this.root=new _t,this.root.name="Gate Warden",this.body=new _t,this.root.add(this.body),this.torsoGroup=new _t,this.torsoGroup.position.y=2.25,this.body.add(this.torsoGroup);const a=te(this.torsoGroup,new Fi(1.15,0),t,0,0,0);a.scale.set(1.05,1.25,.72),this.core=a,te(this.torsoGroup,new ei(1.5,.45,.9),e,0,.55,0),te(this.torsoGroup,new ei(1.25,.35,.85),n,0,.12,-.55).scale.set(1,.4,1),te(this.torsoGroup,new Ue(.42,0),i,0,1.15,.1).scale.set(1,.82,.95),te(this.torsoGroup,new Ue(.075,0),r,-.16,1.2,.47).castShadow=!1,te(this.torsoGroup,new Ue(.075,0),r,.16,1.2,.47).castShadow=!1;const l=te(this.torsoGroup,new pi(.28,.7,5),e,0,1.55,-.1);l.rotation.z=.1;for(const d of[-1,1])te(this.torsoGroup,new Fi(.55,0),e,d*1.15,.6,0).scale.set(1,.9,.85);this.armL=new _t,this.armL.position.set(-1.3,2.72,0),te(this.armL,new oe(.25,.2,1.3,5),e,0,-.6,0),te(this.armL,new Fi(.48,0),t,0,-1.35,0).scale.set(1.15,1,1.1),this.body.add(this.armL),this.armR=new _t,this.armR.position.set(1.3,2.72,0),te(this.armR,new oe(.3,.23,1.45,5),e,0,-.66,0),te(this.armR,new Fi(.58,0),t,0,-1.5,0).scale.set(1.2,1.05,1.15),this.body.add(this.armR),this.legL=new _t,this.legL.position.set(-.55,1.15,0),te(this.legL,new oe(.3,.26,1.25,5),e,0,-.6,0),this.body.add(this.legL),this.legR=new _t,this.legR.position.set(.55,1.15,0),te(this.legR,new oe(.3,.26,1.25,5),e,0,-.6,0),this.body.add(this.legR),this.phaseGlow=new Ui(16747586,0,10,1.6),this.phaseGlow.position.set(0,2.3,.6),this.body.add(this.phaseGlow),this.game.scene.add(this.root)}reset(){this.position.set(this.home.x,this.game.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.health=this.maxHealth,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attack=null,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.phase=1,this.phaseTransitionPending=!1,this.sequenceIndex=0,this.root.visible=!this.isBossHidden,this.root.position.copy(this.position),this.root.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.scale.set(1,1,1),this.phaseGlow.intensity=0;for(const t of Object.keys(this.tells))this.tells[t].group.visible=!1}setDefeatedAbsent(t){if(this.isBossHidden=t,t){this.alive=!1,this.engaged=!1,this.state="dead",this.root.visible=!1;for(const e of Object.keys(this.tells))this.tells[e].group.visible=!1}}engage(){!this.alive||this.engaged||(this.engaged=!0,this.state="chase",this.stateTime=0,this.game.audio.bossTransition(),this.game.ui?.toast("The Gate Warden stirs."))}lockPoint(){return new P(this.position.x,this.position.y+2.4,this.position.z)}update(t,e){if(this.flash>0&&(this.flash=Math.max(0,this.flash-t)),!this.alive){this.deathTime+=t,this.deathTime>4&&(this.root.visible=!1),this._animate(t,e.time);return}if(!this.engaged){this._animate(t,e.time);return}const i=e.player;if(i.isDead){this._animate(t,e.time);return}this.stateTime+=t;const n=i.position.x-this.position.x,r=i.position.z-this.position.z,a=Math.hypot(n,r),o=Math.atan2(n,r);if(this.state==="chase"){if(this.facing=ui(this.facing,o,4.5*t),a>this.cfg.stopRange){const l=Math.min(this.cfg.speed*t,a-this.cfg.stopRange+.02);this._move(Math.sin(o)*l,Math.cos(o)*l,e)}a<=this.cfg.attackRange&&this.stateTime>.25&&this._chooseAttack(e)}else if(this.state==="windup"){const l=this.attack;this.stateTime<l.tell-this.cfg.facingLock&&(this.facing=ui(this.facing,o,4.2*t)),this.stateTime>=l.tell&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this._hideTells(),e.audio.swing(l.damage>=30?"heavy":"light"))}else this.state==="active"?(this._checkContact(e),this.stateTime>=this.attack.active&&(this.attack.kind==="double"&&this.attack.stage==="first"?(this.state="doubleGap",this.stateTime=0,this.attack.secondId=`${this.cfg.attacks.doubleSweep.second.id}-${++this.attackCounter}`):(this.state="recovery",this.stateTime=0))):this.state==="doubleGap"?(this.stateTime<this.cfg.attacks.doubleSweep.gap-this.cfg.facingLock&&(this.facing=ui(this.facing,o,3.6*t)),this.stateTime>=this.cfg.attacks.doubleSweep.gap&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this.attack.stage="second",this.attack.id=this.attack.secondId,this.attack.tell=0,this._hideTells(),e.audio.swing("light"))):this.state==="recovery"?this.stateTime>=this.attack.recovery&&(this.attack=null,this.health<=this.maxHealth*.5&&this.phase===1?(this.state="transition",this.stateTime=0,this.phaseTransitionPending=!0,this.phaseGlow.intensity=2,e.audio.bossTransition(),e.ui?.toast("The Warden draws deeper strength.")):(this.state="chase",this.stateTime=0)):this.state==="transition"&&this.stateTime>=this.cfg.transitionTime&&(this.phase=2,this.phaseTransitionPending=!1,this.state="chase",this.stateTime=0,this.sequenceIndex=0,this.phaseGlow.intensity=.7,e.ui?.toast("The Gate Warden enters a second phase."));this.position.y=e.world.groundHeight(this.position.x,this.position.z),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this._animate(t,e.time)}_chooseAttack(t){let e;if(this.phase===1)e=this.sequenceIndex%2===0?"sweep":"overhead",this.sequenceIndex++;else{const i=["sweep","overhead","double"];e=i[this.sequenceIndex%i.length],this.sequenceIndex++}if(this.attackCounter++,e==="sweep"){const i=this.cfg.attacks.sweep;this.attack={kind:"sweep",id:`${i.id}-${this.attackCounter}`,tell:i.tell,active:i.active,recovery:i.recovery,damage:i.damage,reach:i.reach,halfArc:i.halfArc},t.audio.enemyTell("warden-sweep")}else if(e==="overhead"){const i=this.cfg.attacks.overhead;this.attack={kind:"overhead",id:`${i.id}-${this.attackCounter}`,tell:i.tell,active:i.active,recovery:i.recovery,damage:i.damage,radius:i.radius,impactDistance:i.impactDistance},t.audio.enemyTell("warden-overhead")}else{const i=this.cfg.attacks.doubleSweep;this.attack={kind:"double",stage:"first",id:`${i.first.id}-${this.attackCounter}`,tell:i.first.tell,active:i.first.active,recovery:i.recovery,damage:i.first.damage,reach:i.first.reach,halfArc:i.first.halfArc},t.audio.enemyTell("warden-sweep")}this.state="windup",this.stateTime=0,this.facing=Math.atan2(t.player.position.x-this.position.x,t.player.position.z-this.position.z),t.onCombatEvent()}_checkContact(t){if(this.hitPlayer||!this.attack)return;const e=t.player;let i=!1;if(this.attack.kind==="overhead"){const n=this.position.x+Math.sin(this.facing)*this.attack.impactDistance,r=this.position.z+Math.cos(this.facing)*this.attack.impactDistance;i=Math.hypot(e.position.x-n,e.position.z-r)<=this.attack.radius+e.radius}else i=Ac(this.position,this.facing,e.position,this.attack.reach,this.attack.halfArc);i&&(this.hitPlayer=!0,t.queueIncomingHit(this,this.attack.damage,this.attack.id,"boss"))}_move(t,e,i){const n={x:this.position.x,z:this.position.z},r=i.world.resolveMovement(this.position.x+t,this.position.z+e,this.radius,n);this.position.x=r.x,this.position.z=r.z}_hideTells(){for(const t of Object.keys(this.tells))this.tells[t].group.visible=!1}_showSweepTell(t,e=0){const i=this.tells.sweep;i.group.visible=!0,this.tells.overhead.group.visible=!1,i.group.position.set(this.position.x,this.position.y+.04,this.position.z),i.group.rotation.y=this.facing+e,i.mesh.material.opacity=t}_showOverheadTell(t){const e=this.tells.overhead;e.group.visible=!0,this.tells.sweep.group.visible=!1;const i=this.position.x+Math.sin(this.facing)*this.cfg.attacks.overhead.impactDistance,n=this.position.z+Math.cos(this.facing)*this.cfg.attacks.overhead.impactDistance;e.group.position.set(i,this.position.y+.04,n),e.group.rotation.y=0,e.mesh.material.opacity=t}receivePlayerHit(t,e,i,n){this.alive&&(this.health=Math.max(0,this.health-t),this.flash=.16,n.onBossDamaged(this,t,e),this.health<=0&&this.die(n))}die(t){this.alive&&(this.alive=!1,this.engaged=!1,this.state="dead",this.deathTime=0,this._hideTells(),this.attack=null,this.phaseGlow.intensity=0,t.onBossDefeated(this))}_animate(t,e){const i=this.state,n=this.attack;let r=Math.sin(e*1.5+this.idlePhase)*.018,a=0,o=0,l=0,c=0,h=0,d=0,u=0,p=0,v=0,y=0;if(i==="windup"&&n){const f=ve(this.stateTime/n.tell,0,1);n.kind==="sweep"||n.kind==="double"?(l=-1.1*f,p=-1.25*f,d=-.4*f,u=.3*f,r=-.1*f,this._showSweepTell(.08+f*.3)):(c=-.24*f,h=-2.25*f,d=-2.25*f,r=.12*f,this._showOverheadTell(.08+f*.32))}else if(i==="active"&&n)if(n.kind==="sweep"||n.kind==="double"){const f=ve(this.stateTime/n.active,0,1);n.stage==="second"?(l=Te(.95,-.95,f),p=Te(1.2,-1.2,f)):(l=Te(-1.1,1,f),p=Te(-1.25,1.2,f)),a=.12,r=-.05}else{const f=ve(this.stateTime/n.active,0,1);c=Te(-.24,.38,f),h=Te(-2.25,.8,f),d=Te(-2.25,.8,f),r=Te(.12,-.25,f),f>.9&&(r=-.2)}else if(i==="doubleGap"&&n){const f=ve(this.stateTime/this.cfg.attacks.doubleSweep.gap,0,1);l=.95,p=1.2,d=.25,r=-.04,this._showSweepTell(.1+f*.32,0)}else if(i==="recovery"&&n){const f=ve(this.stateTime/n.recovery,0,1);n.kind==="sweep"||n.kind==="double"?(l=1*(1-f),p=1.1*(1-f),d=.4*(1-f)):(c=.38*(1-f),h=.8*(1-f),d=.8*(1-f),r=-.2*(1-f))}else if(i==="transition"){const f=ve(this.stateTime/this.cfg.transitionTime,0,1),S=Math.sin(f*Math.PI*4);r=-.18*Math.sin(f*Math.PI),c=-.18*Math.sin(f*Math.PI),u=.5+S*.2,p=-.5-S*.2,this.phaseGlow.intensity=2.2+S*.6,v=.1,y=-.1}else if(i==="dead"){const f=ve(this.deathTime/1.8,0,1);o=f*1.25,r=-f*.9,c=f*.4,h=f*.8,d=f*.8,v=-f*.5,y=f*.5}else u=.06+Math.sin(e*1.2)*.025,p=-.06-Math.sin(e*1.2)*.025,v=Math.sin(e*1.4)*.025,y=-Math.sin(e*1.4)*.025;this.body.position.y=r,this.body.rotation.x=a,this.body.rotation.z=o,this.torsoGroup.rotation.y=l,this.torsoGroup.rotation.x=c,this.armL.rotation.x=h,this.armR.rotation.x=d,this.armL.rotation.z=u,this.armR.rotation.z=p,this.legL.rotation.x=v,this.legR.rotation.x=y;const m=this.flash>0?this.flash/.16:0;for(const f of this.materials)f.emissive.setRGB(m*.5,m*.1,m*.05),f.emissiveIntensity=1}}class d0{constructor(t){this.canvas=t,this.game=null,this.keys=new Set,this.pressed=new Set,this.pointerLocked=!1,this.mouse={dx:0,dy:0},this.ignoreUnlock=!1,this.firstGesture=!1,this._bind()}attach(t){this.game=t}_bind(){window.addEventListener("keydown",t=>{if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&this.game?.mode==="playing"&&t.preventDefault(),this._gesture(),!t.repeat){if(this.keys.add(t.code),this.pressed.add(t.code),t.code==="Escape"){this.game?.mode==="playing"?(t.preventDefault(),this.game.pause("pause")):this.game?.mode==="paused"&&this.game.resumeFromPause();return}this.game?.acceptsGameplayInput()&&(t.code==="Space"?this.game.player.queueAction("dodge"):t.code==="KeyR"?this.game.player.queueAction("heal"):t.code==="KeyE"?this.game.interact():t.code==="KeyQ"&&this.game.player.toggleLockOn())}}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.game?.mode==="playing"&&this.game.pause("focus")}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.game?.mode==="playing"&&this.game.pause("focus")}),window.addEventListener("contextmenu",t=>{this.game?.mode==="playing"&&t.preventDefault()}),this.canvas.addEventListener("mousedown",t=>{if(this._gesture(),this.game?.mode==="playing"){if(!this.pointerLocked){this.requestCapture();return}t.button===0?this.game.player.queueAction("light"):t.button===2&&this.game.player.queueAction("heavy")}}),this.canvas.addEventListener("wheel",t=>{this.game?.mode!=="playing"||!this.pointerLocked||(t.preventDefault(),this.game.player.lockTarget&&this.game.player.cycleLockTarget(Math.sign(t.deltaY)))},{passive:!1}),document.addEventListener("mousemove",t=>{if(!this.pointerLocked||this.game?.mode!=="playing")return;const e=st.player.camera.mouseSensitivity*(this.game.progress?.settings.mouseSensitivity??1);this.mouse.dx+=t.movementX*e,this.mouse.dy+=t.movementY*e}),document.addEventListener("pointerlockchange",()=>{const t=this.pointerLocked;this.pointerLocked=document.pointerLockElement===this.canvas,!this.pointerLocked&&t&&(this.keys.clear(),this.game?.mode==="playing"&&!this.ignoreUnlock&&this.game.pause("mouse")),this.ignoreUnlock=!1,this.game?.ui?.setCaptureState(this.pointerLocked)}),document.addEventListener("pointerlockerror",()=>{this.game?.ui?.showCaptureHint()})}_gesture(){this.firstGesture||(this.firstGesture=!0,this.game?.audio?.start())}requestCapture(){if(!this.pointerLocked)try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>this.game?.ui?.showCaptureHint())}catch{this.game?.ui?.showCaptureHint()}}releaseCapture(){document.pointerLockElement&&(this.ignoreUnlock=!0,document.exitPointerLock()),this.pointerLocked=!1,this.keys.clear()}consumeMouse(){const t={x:this.mouse.dx,y:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,t}isDown(t){return this.keys.has(t)}movementAxes(){let t=0,e=0;return this.keys.has("KeyW")&&(e+=1),this.keys.has("KeyS")&&(e-=1),this.keys.has("KeyA")&&(t-=1),this.keys.has("KeyD")&&(t+=1),{x:t,z:e}}clear(){this.keys.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}}class f0{constructor(){this.ctx=null,this.started=!1,this.settings=null,this.musicGain=null,this.effectsGain=null,this.campGain=null,this.windGain=null,this.campDistance=99}start(){if(this.started){this.ctx?.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t,this.started=!0,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.effectsGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.effectsGain.connect(this.master),this._buildAmbience(),this.applySettings(this.settings)}catch{this.ctx=null}}_noiseBuffer(t=2){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);let r=0;for(let a=0;a<e;a++){const o=Math.random()*2-1;r=r*.985+o*.015,n[a]=r*3.5}return i}_buildAmbience(){const t=this.ctx,e=t.createBufferSource();e.buffer=this._noiseBuffer(3),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=520,i.Q.value=.4,this.windGain=t.createGain(),this.windGain.gain.value=.12,e.connect(i).connect(this.windGain).connect(this.musicGain),e.start();const n=t.createBufferSource();n.buffer=this._noiseBuffer(2.2),n.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=740,r.Q.value=.8,this.campGain=t.createGain(),this.campGain.gain.value=0,n.connect(r).connect(this.campGain).connect(this.musicGain),n.start();const a=t.createGain();a.gain.value=.035,a.connect(this.musicGain);for(const[o,l]of[[55,.5],[82.5,.22],[110,.12]]){const c=t.createOscillator();c.type="sine",c.frequency.value=o;const h=t.createGain();h.gain.value=l,c.connect(h).connect(a),c.start()}}applySettings(t){if(this.settings=t,!this.ctx||!t)return;const e=this.ctx.currentTime;this.musicGain.gain.setTargetAtTime(t.musicVolume*.72,e,.08),this.effectsGain.gain.setTargetAtTime(t.effectsVolume,e,.05)}update(t,e){if(!this.ctx||!this.campGain)return;if(e?.player){const n=e.player.position;this.campDistance=Math.hypot(n.x-0,n.z-16)}const i=this.campDistance<16?Math.max(0,.055*(1-this.campDistance/16)):0;this.campGain.gain.setTargetAtTime(i,this.ctx.currentTime,.15)}_env(t,e,i,n,r,a){const o=t.gain;o.cancelScheduledValues(e),o.setValueAtTime(1e-4,e),o.exponentialRampToValueAtTime(Math.max(2e-4,a),e+i),o.setValueAtTime(Math.max(2e-4,a),e+i+n),o.exponentialRampToValueAtTime(1e-4,e+i+n+r)}_tone({freq:t=220,type:e="sine",duration:i=.2,volume:n=.1,slide:r=0,attack:a=.01,release:o=.15,pan:l=0,delay:c=0}){if(!this.ctx)return;const h=this.ctx,d=h.currentTime+c,u=h.createOscillator(),p=h.createGain(),v=h.createStereoPanner();u.type=e,u.frequency.setValueAtTime(t,d),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),d+i),this._env(p,d,a,Math.max(0,i-a-o),o,n),v.pan.value=l,u.connect(p).connect(v).connect(this.effectsGain),u.start(d),u.stop(d+i+.05)}_noise({duration:t=.2,volume:e=.1,freq:i=800,q:n=.8,type:r="bandpass",slide:a=0,pan:o=0,delay:l=0}){if(!this.ctx)return;const c=this.ctx,h=c.currentTime+l,d=c.createBufferSource();d.buffer=this._noiseBuffer(Math.max(.12,t+.1));const u=c.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(i,h),u.Q.value=n,a&&u.frequency.exponentialRampToValueAtTime(Math.max(60,i+a),h+t);const p=c.createGain();this._env(p,h,.01,Math.max(0,t-.06),.05,e);const v=c.createStereoPanner();v.pan.value=o,d.connect(u).connect(p).connect(v).connect(this.effectsGain),d.start(h),d.stop(h+t+.15)}uiClick(){this._tone({freq:520,type:"triangle",duration:.06,volume:.045,slide:-90})}pickup(){this._tone({freq:430,type:"triangle",duration:.16,volume:.08,slide:190}),this._tone({freq:640,type:"sine",duration:.22,volume:.05,slide:120,delay:.08})}save(){this._tone({freq:760,type:"sine",duration:.08,volume:.025,slide:80})}denied(){this._tone({freq:120,type:"square",duration:.12,volume:.04,slide:-30})}lockOn(){this._tone({freq:900,type:"sine",duration:.09,volume:.035,slide:220})}swing(t="light"){t==="heavy"?this._noise({duration:.22,volume:.16,freq:420,q:.7,slide:-240}):this._noise({duration:.14,volume:.12,freq:720,q:.9,slide:-380})}hit(t=!1){this._tone({freq:t?95:135,type:"triangle",duration:.16,volume:t?.18:.12,slide:-40}),this._noise({duration:.08,volume:t?.15:.1,freq:1300,q:1.2,slide:-700})}hurt(){this._tone({freq:170,type:"sawtooth",duration:.24,volume:.11,slide:-85}),this._noise({duration:.12,volume:.08,freq:600,q:.5,slide:-260})}dodge(){this._noise({duration:.22,volume:.07,freq:900,q:.4,slide:-600})}healStart(){this._tone({freq:320,type:"sine",duration:.6,volume:.035,slide:160})}healComplete(){this._tone({freq:540,type:"sine",duration:.5,volume:.055,slide:120}),this._tone({freq:810,type:"sine",duration:.6,volume:.03,slide:80,delay:.12})}death(){this._tone({freq:140,type:"sawtooth",duration:1,volume:.1,slide:-90}),this._noise({duration:.7,volume:.06,freq:300,q:.5,slide:-200})}enemyTell(t){t==="briarling"?(this._noise({duration:.55,volume:.08,freq:1800,q:1.2,slide:-900}),this._tone({freq:340,type:"triangle",duration:.35,volume:.04,slide:100})):t==="mossguard"?(this._noise({duration:.8,volume:.11,freq:260,q:.7,slide:120}),this._tone({freq:78,type:"sawtooth",duration:.65,volume:.045,slide:-10})):t==="warden-sweep"?(this._noise({duration:.9,volume:.12,freq:420,q:.6,slide:300}),this._tone({freq:70,type:"sawtooth",duration:.9,volume:.05,slide:15})):t==="warden-overhead"?(this._tone({freq:115,type:"square",duration:1,volume:.055,slide:90}),this._noise({duration:.8,volume:.08,freq:900,q:.8,slide:-400})):this._tone({freq:200,type:"triangle",duration:.5,volume:.05,slide:80})}gate(){this._noise({duration:.7,volume:.12,freq:320,q:.7,slide:220}),this._tone({freq:90,type:"triangle",duration:.8,volume:.06,slide:35})}construction(){this._tone({freq:220,type:"triangle",duration:.25,volume:.08,slide:110}),this._tone({freq:330,type:"triangle",duration:.3,volume:.06,slide:140,delay:.22}),this._tone({freq:494,type:"sine",duration:.7,volume:.04,slide:90,delay:.46})}beacon(){this._tone({freq:196,type:"sine",duration:1.4,volume:.06,slide:98}),this._tone({freq:392,type:"sine",duration:1.6,volume:.04,slide:196,delay:.35}),this._tone({freq:587,type:"sine",duration:1.9,volume:.03,slide:90,delay:.7})}bossTransition(){this._tone({freq:55,type:"sawtooth",duration:1,volume:.08,slide:55}),this._noise({duration:1,volume:.08,freq:240,q:.5,slide:500})}bossDefeat(){this._tone({freq:120,type:"sawtooth",duration:1.8,volume:.09,slide:-70}),this._tone({freq:392,type:"sine",duration:1.4,volume:.05,slide:180,delay:.5})}footstep(t=!1){this._noise({duration:.06,volume:t?.025:.014,freq:180,q:.5,slide:-60})}}const p0={mouseSensitivity:1,invertY:!1,cameraShake:!0,motionBlur:!1,textScale:1,musicVolume:.45,effectsVolume:.75,lowQuality:!1};function ea(){return{version:_o,salvage:0,claimedCaches:[],keepsake:!1,lens:!1,lensConsumed:!1,workshopBuilt:!1,beaconBuilt:!1,shortcutOpen:!1,bossDefeated:!1,activatedCheckpoints:["camp"],activeCheckpoint:"camp",dialogue:{arrivalSeen:!1,lensSeen:!1,completeSeen:!1,beaconInspected:!1},chapterComplete:!1,settings:{...p0},savedAt:0}}const os=s=>typeof s=="number"&&Number.isFinite(s),On=s=>typeof s=="boolean",zl=s=>typeof s=="string";function hs(s){if(!s||typeof s!="object")return{ok:!1,reason:"not an object"};if(s.version!==_o)return{ok:!1,reason:"unsupported version"};if(!os(s.salvage)||s.salvage<0||s.salvage>999)return{ok:!1,reason:"salvage"};if(!Array.isArray(s.claimedCaches)||!s.claimedCaches.every(zl))return{ok:!1,reason:"caches"};const t=new Set(nr.map(i=>i.id));if(new Set(s.claimedCaches).size!==s.claimedCaches.length)return{ok:!1,reason:"duplicate cache"};if(!s.claimedCaches.every(i=>t.has(i)))return{ok:!1,reason:"unknown cache"};if(!Array.isArray(s.activatedCheckpoints)||!s.activatedCheckpoints.every(zl))return{ok:!1,reason:"checkpoints"};if(new Set(s.activatedCheckpoints).size!==s.activatedCheckpoints.length)return{ok:!1,reason:"duplicate checkpoint"};if(!s.activatedCheckpoints.every(i=>["camp","brazier"].includes(i)))return{ok:!1,reason:"unknown checkpoint"};if(!["camp","brazier"].includes(s.activeCheckpoint))return{ok:!1,reason:"active checkpoint"};if(!s.activatedCheckpoints.includes(s.activeCheckpoint))return{ok:!1,reason:"inactive checkpoint"};for(const i of["keepsake","lens","lensConsumed","workshopBuilt","beaconBuilt","shortcutOpen","bossDefeated","chapterComplete"])if(!On(s[i]))return{ok:!1,reason:i};if(!s.dialogue||typeof s.dialogue!="object")return{ok:!1,reason:"dialogue"};for(const i of["arrivalSeen","lensSeen","completeSeen","beaconInspected"])if(!On(s.dialogue[i]))return{ok:!1,reason:`dialogue.${i}`};if(!s.settings||typeof s.settings!="object")return{ok:!1,reason:"settings"};const e=s.settings;return!os(e.mouseSensitivity)||e.mouseSensitivity<.2||e.mouseSensitivity>3?{ok:!1,reason:"sensitivity"}:!On(e.invertY)||!On(e.cameraShake)||!On(e.motionBlur)||!On(e.lowQuality)?{ok:!1,reason:"settings flags"}:!os(e.textScale)||e.textScale<.8||e.textScale>1.6?{ok:!1,reason:"text scale"}:!os(e.musicVolume)||e.musicVolume<0||e.musicVolume>1?{ok:!1,reason:"music volume"}:!os(e.effectsVolume)||e.effectsVolume<0||e.effectsVolume>1?{ok:!1,reason:"effects volume"}:!s.lensConsumed&&s.beaconBuilt?{ok:!1,reason:"beacon without lens"}:!s.bossDefeated&&s.lens?{ok:!1,reason:"lens without boss"}:s.beaconBuilt&&!s.chapterComplete?{ok:!1,reason:"beacon chapter flag"}:{ok:!0}}function ia(s){try{return JSON.parse(s)}catch{return null}}class m0{constructor(t){this.onStatus=t||(()=>{}),this.available=!0,this.lastStatus="idle",this.storage=null;try{const e="__waykeepers_probe__";window.localStorage.setItem(e,"1"),window.localStorage.removeItem(e),this.storage=window.localStorage}catch{this.available=!1,this.onStatus("unavailable","Save unavailable")}}_backupKey(){return`${rs}.backup`}load(){if(!this.storage)return{ok:!1,reason:"unavailable"};let t=null;try{t=this.storage.getItem(rs)}catch{return this.available=!1,{ok:!1,reason:"unavailable"}}if(t){const e=ia(t),i=hs(e);if(i.ok)return{ok:!0,progress:e,source:"primary"};const n=this.storage.getItem(this._backupKey());if(n){const r=ia(n);if(hs(r).ok)return{ok:!0,progress:r,source:"backup"}}return{ok:!1,reason:i.reason||"invalid"}}return{ok:!1,reason:"empty"}}save(t){if(!this.storage)return this.available=!1,this.onStatus("unavailable","Save unavailable"),!1;const e=JSON.parse(JSON.stringify(t));if(e.version=_o,e.savedAt=Date.now(),!hs(e).ok)return this.onStatus("unavailable","Save unavailable"),!1;try{const n=this.storage.getItem(rs);if(n){const r=ia(n);hs(r).ok&&this.storage.setItem(this._backupKey(),n)}return this.storage.setItem(rs,JSON.stringify(e)),t.savedAt=e.savedAt,this.available=!0,this.onStatus("saved","Saved"),!0}catch{return this.available=!1,this.onStatus("unavailable","Save unavailable"),!1}}clear(){if(!this.storage)return!1;try{return this.storage.removeItem(rs),this.storage.removeItem(this._backupKey()),!0}catch{return!1}}hasSave(){return this.load().ok}}const Ct=s=>document.querySelector(s);class g0{constructor(t){this.game=t,this.refs={hud:Ct("#hud"),objective:Ct("#objective-text"),save:Ct("#save-indicator"),salvage:Ct("#salvage-pill"),healthFill:Ct("#health-fill"),healthText:Ct("#health-text"),staminaFill:Ct("#stamina-fill"),staminaText:Ct("#stamina-text"),healPips:[...document.querySelectorAll(".heal-pip")],enemyHud:Ct("#enemy-hud"),bossHud:Ct("#boss-hud"),bossFill:Ct("#boss-fill"),bossPhase:Ct("#boss-phase"),interaction:Ct("#interaction-prompt"),interactionText:Ct("#interaction-text"),toast:Ct("#toast"),chapterBanner:Ct("#chapter-banner"),lockReticle:Ct("#lock-reticle"),captureHint:Ct("#capture-hint"),damageFlash:Ct("#damage-flash"),title:Ct("#title-screen"),continueBtn:Ct("#btn-continue"),pause:Ct("#pause-menu"),journal:Ct("#journal-panel"),settings:Ct("#settings-panel"),dialogue:Ct("#dialogue-panel"),rest:Ct("#rest-panel"),project:Ct("#project-panel"),confirm:Ct("#confirm-panel"),death:Ct("#death-overlay"),deathText:Ct("#death-text"),ending:Ct("#ending-panel"),endingText:Ct("#ending-text"),transition:Ct("#transition-overlay"),transitionText:Ct("#transition-text"),controlsHint:Ct("#controls-hint")},this.toastTimer=null,this.saveTimer=null,this.bannerTimer=null,this.dialogueClose=null,this.confirmYes=null,this.settingsOrigin="title",this.currentRest=null,this.projectKind=null,this.enemyRows=new Map,this.enemySignature="",this._bind(),this.applyTextScale(t.progress.settings.textScale),this.populateSettings()}_bind(){const t=(e,i)=>{const n=document.getElementById(e);n&&n.addEventListener("click",r=>{r.preventDefault(),this.game.audio.start(),this.game.audio.uiClick(),i(r)})};t("btn-continue",()=>this.game.continueGame()),t("btn-new-game",()=>this.game.requestNewGame()),t("btn-title-settings",()=>this.game.openSettings("title")),t("btn-resume",()=>this.game.resumeFromPause()),t("btn-journal",()=>this.game.openJournal()),t("btn-pause-settings",()=>this.game.openSettings("pause")),t("btn-title-return",()=>this.game.returnToTitle()),t("btn-dialogue-continue",()=>this.game.closeDialogue()),t("btn-confirm-yes",()=>{const e=this.confirmYes;this.confirmYes=null,this.hide(this.refs.confirm),e&&e()}),t("btn-confirm-no",()=>this.game.cancelConfirm()),t("btn-ending-continue",()=>this.game.finishEnding()),document.querySelectorAll('[data-close="journal"]').forEach(e=>e.addEventListener("click",()=>this.game.closeJournal())),document.querySelectorAll('[data-close="settings"]').forEach(e=>e.addEventListener("click",()=>this.game.closeSettings())),window.addEventListener("keydown",e=>{e.code==="Escape"&&(this.game.mode==="journal"?this.game.closeJournal():this.game.mode==="settings"?this.game.closeSettings():this.game.mode==="dialogue"?this.game.closeDialogue():this.game.mode==="rest"?this.game.closeMenu():this.game.mode==="project"?this.game.closeMenu():this.game.mode==="confirm"&&this.game.cancelConfirm())}),this._bindSettings()}_bindSettings(){const t=(i,n,r,a=o=>o.toFixed(2))=>{const o=document.getElementById(i),l=document.getElementById(n),c=h=>{const d=this.game.progress.settings;d[r]=Number(o.value),l.textContent=a(d[r]),this.game.onSettingsChanged(r,h)};o.addEventListener("input",()=>c(!1)),o.addEventListener("change",()=>c(!0))},e=(i,n)=>{const r=document.getElementById(i);r.addEventListener("change",()=>{this.game.progress.settings[n]=r.checked,this.game.onSettingsChanged(n,!0)})};t("set-sensitivity","out-sensitivity","mouseSensitivity",i=>`${i.toFixed(2)}×`),e("set-invert","invertY"),e("set-shake","cameraShake"),e("set-motion","motionBlur"),t("set-text","out-text","textScale",i=>`${Math.round(i*100)}%`),t("set-music","out-music","musicVolume",i=>`${Math.round(i*100)}%`),t("set-effects","out-effects","effectsVolume",i=>`${Math.round(i*100)}%`),e("set-quality","lowQuality")}populateSettings(){const t=this.game.progress.settings,e=(n,r)=>{const a=document.getElementById(n);a&&(a.value=r)},i=(n,r)=>{const a=document.getElementById(n);a&&(a.checked=r)};e("set-sensitivity",t.mouseSensitivity),i("set-invert",t.invertY),i("set-shake",t.cameraShake),i("set-motion",t.motionBlur),e("set-text",t.textScale),e("set-music",t.musicVolume),e("set-effects",t.effectsVolume),i("set-quality",t.lowQuality),Ct("#out-sensitivity").textContent=`${t.mouseSensitivity.toFixed(2)}×`,Ct("#out-text").textContent=`${Math.round(t.textScale*100)}%`,Ct("#out-music").textContent=`${Math.round(t.musicVolume*100)}%`,Ct("#out-effects").textContent=`${Math.round(t.effectsVolume*100)}%`}applyTextScale(t){document.documentElement.style.setProperty("--text-scale",String(t))}show(t){t.classList.remove("hidden")}hide(t){t.classList.add("hidden")}showTitle(t,e=!1){this.hide(this.refs.hud),this.hide(this.refs.pause),this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.hide(this.refs.death),this.hide(this.refs.ending),this.hide(this.refs.transition),this.show(this.refs.title),this.refs.continueBtn.disabled=!t,this.refs.continueBtn.classList.toggle("hidden",!t),this.hide(this.refs.captureHint);const i=document.querySelector(".title-footer");i&&(i.textContent=e?"Save unavailable in this browser · Progress cannot persist between sessions":"Solo expedition · Saves belong to this browser and device")}showGame(){this.hide(this.refs.title),this.hide(this.refs.pause),this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.hide(this.refs.death),this.hide(this.refs.ending),this.show(this.refs.hud),this.updateCaptureHint()}showPause(){this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.show(this.refs.pause),this.hide(this.refs.captureHint)}hidePause(){this.hide(this.refs.pause)}openJournal(){this.hide(this.refs.pause),this.hide(this.refs.settings),this.show(this.refs.journal),this.updateJournal()}openSettings(t){this.settingsOrigin=t,this.hide(this.refs.pause),this.hide(this.refs.journal),this.show(this.refs.settings),this.populateSettings()}closeSettings(){this.hide(this.refs.settings)}closeJournal(){this.hide(this.refs.journal)}showDialogue(t,e,i,n){Ct("#dialogue-kicker").textContent=i||"Alder Hollow",Ct("#dialogue-title").textContent=t,Ct("#dialogue-body").textContent=e,this.dialogueClose=n||null,this.hide(this.refs.pause),this.hide(this.refs.journal),this.show(this.refs.dialogue)}hideDialogue(){this.hide(this.refs.dialogue)}showRestMenu(t){this.currentRest=t,Ct("#rest-title").textContent=t.title,Ct("#rest-body").textContent=t.body;const e=Ct("#rest-actions");e.innerHTML="";const i=(n,r,a)=>{const o=document.createElement("button");o.className=`menu-button ${r||""}`,o.textContent=n,o.addEventListener("click",()=>{this.game.audio.uiClick(),a()}),e.appendChild(o)};if(i("Rest","",()=>this.game.performRestAt(t.checkpointId)),t.canTravel)for(const n of t.travelOptions)i(`Travel to ${n.short}`,"",()=>this.game.travelTo(n.id));i("Leave","subtle",()=>this.game.closeMenu()),this.hide(this.refs.pause),this.show(this.refs.rest)}hideRest(){this.hide(this.refs.rest)}showProject(t){this.projectKind=t.kind,Ct("#project-title").textContent=t.title,Ct("#project-body").textContent=t.body,Ct("#project-resources").innerHTML=t.resources;const e=Ct("#project-actions");if(e.innerHTML="",!t.built&&t.canBuild){const n=document.createElement("button");n.className="menu-button",n.textContent=t.buildLabel,n.addEventListener("click",()=>{this.game.audio.uiClick(),this.game.buildProject(t.kind)}),e.appendChild(n)}const i=document.createElement("button");i.className="menu-button subtle",i.textContent="Leave",i.addEventListener("click",()=>{this.game.audio.uiClick(),this.game.closeMenu()}),e.appendChild(i),this.hide(this.refs.pause),this.show(this.refs.project)}hideProject(){this.hide(this.refs.project)}showConfirm(t,e,i){Ct("#confirm-title").textContent=t,Ct("#confirm-body").textContent=e,this.confirmYes=i,this.hide(this.refs.pause),this.show(this.refs.confirm)}hideConfirm(){this.hide(this.refs.confirm)}showDeath(t){this.refs.deathText.textContent=t,this.show(this.refs.death),this.hide(this.refs.captureHint)}hideDeath(){this.hide(this.refs.death)}showEnding(t){this.refs.endingText.textContent=t,this.show(this.refs.ending),this.hide(this.refs.hud),this.hide(this.refs.captureHint)}hideEnding(){this.hide(this.refs.ending)}hideHud(){this.hide(this.refs.hud)}showTransition(t){this.refs.transitionText.textContent=t,this.refs.transition.classList.remove("fade"),this.show(this.refs.transition)}fadeTransition(){this.refs.transition.classList.add("fade"),setTimeout(()=>this.hide(this.refs.transition),500)}showTransitionText(t){this.refs.transitionText.textContent=t}setCaptureState(t){this.updateCaptureHint()}updateCaptureHint(){const t=this.game;if(!this.refs.captureHint)return;const e=["title","paused","journal","settings","dialogue","rest","project","confirm","ending","transition"].includes(t.mode),i=t.mode==="playing"&&!t.input.pointerLocked&&!e&&!t.player.isDead;this.refs.captureHint.classList.toggle("hidden",!i)}toast(t,e=2.4){t&&(this.refs.toast.textContent=t,this.refs.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.refs.toast.classList.remove("show"),e*1e3))}showSaveStatus(t,e){const i=this.refs.save;if(!i)return;const n=document.querySelector(".title-footer"),r=this.refs.title&&!this.refs.title.classList.contains("hidden");i.classList.remove("save-idle","save-saved","save-unavailable"),clearTimeout(this.saveTimer),t==="saved"?(i.textContent=e||"Saved",i.classList.add("save-saved"),this.saveTimer=setTimeout(()=>{i.textContent="Autosave ready",i.classList.add("save-idle")},2200)):t==="unavailable"?(i.textContent=e||"Save unavailable",i.classList.add("save-unavailable"),this.toast("Save unavailable. Progress remains for this session only.",5),n&&r&&(n.textContent="Save unavailable in this browser · Progress cannot persist between sessions")):(n&&r&&(n.textContent="Solo expedition · Saves belong to this browser and device"),i.textContent=e||"Autosave ready",i.classList.add("save-idle"))}damageFlash(){this.refs.damageFlash.classList.add("show"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>this.refs.damageFlash.classList.remove("show"),90)}showChapterBanner(t,e,i=4){this.refs.chapterBanner.innerHTML=`<small>${e||""}</small>${t}`,this.refs.chapterBanner.classList.remove("hidden"),requestAnimationFrame(()=>this.refs.chapterBanner.classList.add("show")),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>{this.refs.chapterBanner.classList.remove("show"),setTimeout(()=>this.refs.chapterBanner.classList.add("hidden"),800)},i*1e3)}updateJournal(){const t=this.game.getJournalData();Ct("#journal-objective").textContent=t.objective,Ct("#journal-resources").textContent=t.resources;const e=Ct("#journal-rest");e.innerHTML="";for(const n of t.restPoints){const r=document.createElement("li");r.textContent=n,e.appendChild(r)}Ct("#journal-shortcut").textContent=t.shortcut;const i=Ct("#journal-discoveries");i.innerHTML="";for(const n of t.discoveries){const r=document.createElement("li");r.textContent=n,i.appendChild(r)}}update(t){const e=this.game,i=e.mode==="playing"||e.mode==="paused"||e.mode==="journal"||e.mode==="settings"||e.mode==="dialogue"||e.mode==="rest"||e.mode==="project"||e.mode==="confirm";if(this.refs.hud.classList.toggle("hidden",!i),e.mode==="title"){this.hide(this.refs.captureHint);return}this.updateVitals(),this.updateObjective(),this.updateInteraction(),this.updateEnemyHud(),this.updateBossHud(),this.updateReticle(),this.updateCaptureHint()}updateVitals(){const t=this.game.player,e=Math.max(0,Math.ceil(t.health)),i=Math.max(0,Math.ceil(t.stamina));this.refs.healthFill.style.width=`${t.health/st.player.maxHealth*100}%`,this.refs.staminaFill.style.width=`${t.stamina/st.player.maxStamina*100}%`,this.refs.healthText.textContent=`${e}`,this.refs.staminaText.textContent=`${i}`,this.refs.healPips.forEach((n,r)=>n.classList.toggle("filled",r<t.healCharges)),this.refs.salvage.textContent=`Salvage ${this.game.progress.salvage}`}updateObjective(){this.refs.objective.textContent=this.game.getObjective()}updateInteraction(){const t=this.game,e=t.currentInteraction,i=t.mode==="playing"&&e&&!t.player.isDead;this.refs.interaction.classList.toggle("hidden",!i),i&&(this.refs.interactionText.textContent=e.label)}updateEnemyHud(){const e=this.game.getEngagedEnemies().filter(n=>!n.isBoss&&n.alive),i=e.map(n=>`${n.name}:${n.home.x}`).join("|");if(i!==this.enemySignature){this.enemySignature=i,this.refs.enemyHud.innerHTML="",this.enemyRows.clear();for(const n of e){const r=document.createElement("div");r.className="enemy-bar-wrap";const a=document.createElement("div");a.className="enemy-bar-label";const o=document.createElement("span");o.textContent=n.name;const l=document.createElement("span");l.className="enemy-hp-text",a.append(o,l);const c=document.createElement("div");c.className="bar enemy-bar";const h=document.createElement("div");c.appendChild(h),r.append(a,c),this.refs.enemyHud.appendChild(r),this.enemyRows.set(n,{wrap:r,hp:l,fill:h})}}for(const n of e){const r=this.enemyRows.get(n);if(!r)continue;const a=Math.max(0,n.health/n.maxHealth);r.fill.style.width=`${a*100}%`,r.hp.textContent=`${Math.ceil(n.health)} / ${n.maxHealth}`}this.refs.enemyHud.classList.toggle("hidden",e.length===0)}updateBossHud(){const t=this.game,e=t.boss,i=e&&e.alive&&e.engaged&&t.mode==="playing";this.refs.bossHud.classList.toggle("hidden",!i),i&&(this.refs.bossFill.style.width=`${Math.max(0,e.health/e.maxHealth*100)}%`,this.refs.bossPhase.textContent=e.phase===1?"I":"II")}updateReticle(){const t=this.game,e=t.player.lockTarget;if(!e||!e.alive||t.mode!=="playing"){this.refs.lockReticle.classList.add("hidden");return}const i=e.lockPoint().project(t.camera);if(i.z>1||i.z<-1){this.refs.lockReticle.classList.add("hidden");return}const n=(i.x*.5+.5)*window.innerWidth,r=(-i.y*.5+.5)*window.innerHeight;this.refs.lockReticle.style.left=`${n}px`,this.refs.lockReticle.style.top=`${r}px`,this.refs.lockReticle.classList.remove("hidden")}}const on=s=>JSON.parse(JSON.stringify(s)),na=1/60;class _0{constructor(t){this.game=t,this.yaw=0,this.pitch=st.player.camera.pitch,this.distance=st.player.camera.distance,this.currentDistance=this.distance,this.raycaster=new _c,this.tempTarget=new P,this.tempDir=new P,this.tempDesired=new P,this.tempCam=new P,this.titleAngle=0,this.cinematic=null,this.shakeOffset=new P}reset(){this.yaw=0,this.pitch=st.player.camera.pitch,this.currentDistance=this.distance,this.cinematic=null,this.game.input.consumeMouse()}setCinematic(t,e){this.cinematic={position:t.clone(),lookAt:e.clone()}}clearCinematic(){this.cinematic=null}update(t){const e=this.game,i=e.camera;if(e.mode==="title"){this.titleAngle+=t*.035;const v=this.titleAngle+.3;i.position.set(Math.sin(v)*19+4,8.2,15+Math.cos(v)*19),i.lookAt(0,1.7,14.5);return}if(e.mode==="ending"&&this.cinematic){i.position.lerp(this.cinematic.position,1-Math.exp(-2.2*t));const v=this.cinematic.lookAt,y=new P;i.getWorldDirection(y);const m=new P().copy(i.position).add(y.multiplyScalar(10));m.lerp(v,1-Math.exp(-2.2*t)),i.lookAt(m);return}if(e.mode!=="playing"&&e.mode!=="transition"||!e.player)return;const n=e.input.consumeMouse(),r=e.progress.settings;this.yaw-=n.x,this.pitch+=n.y*(r.invertY?-1:1),this.pitch=ve(this.pitch,st.player.camera.minPitch,st.player.camera.maxPitch);const a=this.tempTarget.set(e.player.position.x,e.player.position.y+st.player.camera.targetHeight,e.player.position.z),o=Math.cos(this.pitch),l=this.tempDir.set(Math.sin(this.yaw)*o,Math.sin(this.pitch),Math.cos(this.yaw)*o).normalize(),c=this.distance;let h=c;this.raycaster.set(a,l),this.raycaster.far=c+.4;const d=this.raycaster.intersectObjects(e.world.cameraOccluders,!0);for(const v of d)v.distance<h&&(h=v.distance-st.player.camera.collisionRadius);h=Math.max(st.player.camera.minDistance,h),h<this.currentDistance?this.currentDistance=h:this.currentDistance=s0(this.currentDistance,h,st.player.camera.restoreSpeed,t);const u=this.tempCam.copy(a).addScaledVector(l,this.currentDistance),p=e.world.groundHeight(u.x,u.z);if(u.y<p+.32&&(u.y=p+.32),e.shake>0&&r.cameraShake){const v=e.shake;u.x+=(Math.random()-.5)*v,u.y+=(Math.random()-.5)*v*.7,u.z+=(Math.random()-.5)*v}i.position.copy(u),i.lookAt(a)}}class v0{constructor(t){this.canvas=t,this.mode="title",this.time=0,this.ambientTime=0,this.accumulator=0,this.lastFrame=performance.now(),this.lastCombatEvent=-99,this.deathTimer=0,this.shake=0,this.outgoingHits=[],this.incomingHits=[],this.effects=[],this.ordinaryAttacker=null,this.currentInteraction=null,this.hasStarted=!1,this.hasSave=!1,this.pendingSave=null,this.settingsOrigin="title",this.endingState=null,this.farBoundaryShown=!1,this.transitionTimer=null,this.renderer=new t0({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,st.render.highPixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gl,this.renderer.outputColorSpace=Ye,this.renderer.toneMapping=Ja,this.renderer.toneMappingExposure=1.03,this.scene=new Lh,this.camera=new Qe(st.render.fov,window.innerWidth/window.innerHeight,st.render.near,st.render.far),this.audio=new f0,this.input=new d0(t),this.saveManager=new m0((n,r)=>{this.saveStatus={status:n,text:r},this.ui?.showSaveStatus(n,r)}),this.progress=ea();const e=this.saveManager.load();e.ok?(this.progress=e.progress,this.pendingSave=on(e.progress),this.hasSave=!0,this.loadedFromBackup=e.source==="backup"):this.loadError=e.reason,this.world=new a0(this.scene,this.renderer),this.player=new o0(this),this.boss=new u0(this),this.enemies=[],this.encounters=[],this._setupEncounters(),this.cameraRig=new _0(this),this.ui=new g0(this),this.input.attach(this),this.sparkGeo=new Ue(.06,0),this._resize(),window.addEventListener("resize",()=>this._resize()),this.applySettings(!1),this.applyProgressVisuals(),this.player.root.visible=!1,this.ui.showTitle(this.hasSave,!this.saveManager.available);const i=document.querySelector(".title-footer");i&&!this.saveManager.available?i.textContent="Save unavailable in this browser · Progress cannot persist between sessions":i&&this.loadedFromBackup?i.textContent="Recovered the last valid autosave":i&&this.loadError&&this.loadError!=="empty"&&(i.textContent="Previous save could not be read · Starting a new journey will replace it"),this.currentInteraction=null,this._setupDebug(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}_setupEncounters(){for(const t of Object.values(e0)){const e={id:t.id,def:t,active:!1,cleared:!1,enemies:[]};for(const i of t.enemies){const n=new h0(this,i,e);e.enemies.push(n),this.enemies.push(n)}this.encounters.push(e)}}_resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();const i=this.progress.settings.lowQuality;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i?st.render.lowPixelRatio:st.render.highPixelRatio))}applySettings(t=!1){const e=this.progress.settings;this.ui?.applyTextScale(e.textScale),this.audio.applySettings(e),this.world.setQuality(e.lowQuality?"low":"high"),this.renderer.shadowMap.enabled=!e.lowQuality,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.lowQuality?st.render.lowPixelRatio:st.render.highPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),t&&this.saveNow("settings")}onSettingsChanged(t,e=!1){this.applySettings(!1),e&&this.saveNow("settings")}_setupDebug(){if(!new URLSearchParams(window.location.search).has("debug"))return;const t=this;window.__waykeepers={game:t,snapshot:()=>({mode:t.mode,time:t.time,progress:on(t.progress),player:{x:t.player.position.x,y:t.player.position.y,z:t.player.position.z,health:t.player.health,stamina:t.player.stamina,healCharges:t.player.healCharges,state:t.player.state,lock:t.player.lockTarget?.name||null},enemies:t.enemies.map(e=>({type:e.type,x:e.position.x,z:e.position.z,health:e.health,alive:e.alive,engaged:e.engaged,state:e.state})),boss:{x:t.boss.position.x,z:t.boss.position.z,health:t.boss.health,alive:t.boss.alive,engaged:t.boss.engaged,state:t.boss.state,phase:t.boss.phase},checkpoint:t.progress.activeCheckpoint,saveAvailable:t.saveManager.available}),teleport:(e,i)=>{t.player.position.set(e,t.world.groundHeight(e,i),i),t.player.safePosition.copy(t.player.position),t.player.root.position.copy(t.player.position),t.cameraRig.reset()},setPlayerHealth:e=>{t.player.health=e},setPlayerStamina:e=>{t.player.stamina=e},setBossHealth:e=>{t.boss.health=e},setEnemyHealth:(e,i)=>{t.enemies[e]&&(t.enemies[e].health=i)},damagePlayer:e=>t.player.takeDamage(e,null,"debug",t),damageBoss:e=>t.boss.receivePlayerHit(e,"light","debug",t),damageEnemy:(e,i)=>t.enemies[e]?.receivePlayerHit(i,"light","debug",t),giveSalvage:e=>{t.progress.salvage+=e,t.saveNow("debug")},forceSave:()=>t.saveNow("debug"),forceLoad:()=>t.saveManager.load(),resetProgress:()=>{t.progress=ea(),t.saveNow("debug"),t.applyProgressVisuals()},setProgress:e=>{Object.assign(t.progress,e),t.saveNow("debug"),t.applyProgressVisuals()},activateBrazier:()=>t.activateBrazier(),openRest:e=>t.openRest(e),openProject:e=>t.openProject(e),buildWorkshop:()=>t.buildProject("workshop"),buildBeacon:()=>t.buildProject("beacon"),openDialogue:e=>t.openDialogueData(Ii[e]||Ii.arrival,"Alder Hollow"),closeDialogue:()=>t.closeDialogue(),interact:()=>t.interact(),respawn:()=>t.respawnAfterDeath(),resetCombat:()=>t.resetCombatAndEnemies(),setTimeScale:e=>{t.debugTimeScale=e},rendererInfo:()=>({...t.renderer.info.render,memory:{...t.renderer.info.memory}})}}loop(t){requestAnimationFrame(this.loop);const e=(t-this.lastFrame)/1e3;this.lastFrame=t;const i=Math.min(.1,Math.max(0,e)),n=this.debugTimeScale||1;if(this.ambientTime+=i,this.shake=Math.max(0,this.shake-i*.65),this.mode==="playing"){this.accumulator+=i*n;let r=0;for(;this.accumulator>=na&&r<6;)this.fixedUpdate(na),this.accumulator-=na,r++;r===15&&(this.accumulator=0)}else this.accumulator=0;this.mode==="ending"&&this.updateEnding(i),this.mode!=="paused"&&this.mode!=="journal"&&this.mode!=="settings"&&this.mode!=="dialogue"&&this.mode!=="rest"&&this.mode!=="project"&&this.mode!=="confirm"&&this.mode!=="transition"&&this.world.update(i,this.mode==="playing"?this.time:this.ambientTime,this),this.cameraRig.update(i),this.audio.update(i,this),this.ui.update(i),this.renderer.render(this.scene,this.camera)}fixedUpdate(t){if(this.time+=t,this.mode==="playing"){this._updateEncounterTriggers(),this._updateBossTrigger(),this._updateBossArenaGate(),this.outgoingHits.length=0,this.incomingHits.length=0,this.player.update(t,this);for(const e of this.enemies)e.update(t,this);this.boss.update(t,this),this._resolveHits(),this._updateEncounters(),this._updateEffects(t),this.currentInteraction=this.player.isDead?null:this.findInteraction(),this.player.isDead&&(this.deathTimer+=t,this.deathTimer>=2.6&&this.respawnAfterDeath()),this._checkFarBoundary()}}_resolveHits(){for(const t of this.outgoingHits)!t.target||!t.target.alive||t.target.receivePlayerHit(t.damage,t.type,t.attackId,this);for(const t of this.incomingHits){if(this.player.isDead)break;this.player.takeDamage(t.damage,t.source,t.attackId,this)}this.outgoingHits.length=0,this.incomingHits.length=0}queueOutgoingHit(t,e,i,n){this.outgoingHits.push({target:t,damage:e,type:i,attackId:n})}queueIncomingHit(t,e,i,n){this.incomingHits.push({source:t,damage:e,attackId:i,kind:n})}_updateEncounterTriggers(){if(!this.player.isDead)for(const t of this.encounters){if(t.active||t.cleared)continue;const e=t.def.trigger;if(Math.hypot(this.player.position.x-e.x,this.player.position.z-e.z)<=e.radius){t.active=!0;for(const r of t.enemies)r.engage();const n=[...new Set(t.enemies.map(r=>r.name))].join(" and ");this.ui.toast(n==="Briarling"?"A Briarling blocks the Mossroad.":n==="Mossguard"?"A Mossguard holds the cart yard.":"A Mossguard and a Briarling guard the wayhouse."),this.onCombatEvent()}}}_updateEncounters(){for(const t of this.encounters)t.active&&t.enemies.every(e=>!e.alive)&&(t.active=!1,t.cleared=!0,this.ordinaryAttacker&&t.enemies.includes(this.ordinaryAttacker)&&(this.ordinaryAttacker=null))}_updateBossTrigger(){this.player.isDead||this.progress.bossDefeated||this.boss.engaged||this.progress.activatedCheckpoints.includes("brazier")&&this.player.position.z<st.world.bossTriggerZ&&(this.progress.activeCheckpoint="brazier",this.saveNow("arena-entry"),this.boss.engage(),this.bossGateNotified=!1,this.onCombatEvent(),this.ui.toast("The Gate Warden wakes. Advance into the courtyard."))}_updateBossArenaGate(){!this.boss.engaged||this.progress.bossDefeated||this.player.position.z>=-108.5||(this.world.setBossGate(!1),this.bossGateNotified||(this.bossGateNotified=!0,this.ui.toast("The gate grinds shut behind you.")))}onCombatEvent(){this.lastCombatEvent=this.time,this.player&&(this.player.lastCombatEvent=this.time)}onEnemyDamaged(t,e,i){this.onCombatEvent(),this._spawnHitEffect(t.lockPoint(),i==="heavy"),this.audio.hit(i==="heavy"),this.progress.settings.cameraShake&&(this.shake=Math.min(.18,this.shake+(i==="heavy"?.075:.045)))}onBossDamaged(t,e,i){this.onCombatEvent(),this._spawnHitEffect(t.lockPoint(),i==="heavy"),this.audio.hit(i==="heavy"),this.progress.settings.cameraShake&&(this.shake=Math.min(.2,this.shake+(i==="heavy"?.08:.05)))}onPlayerDamaged(t,e){this.onCombatEvent(),this.ui.damageFlash(),this.progress.settings.cameraShake&&(this.shake=Math.min(.28,this.shake+.16))}onPlayerDeath(){this.deathTimer=0,this.currentInteraction=null;const t=We[this.progress.activeCheckpoint]||We.camp;this.ui.showDeath(`Returning to ${t.name}...`)}onEnemyKilled(t){this.ui.toast(`${t.name} falls.`),this.ordinaryAttacker===t&&(this.ordinaryAttacker=null),this._updateEncounters()}onEnemyLeashReset(t){const e=t.encounter;if(e){for(const i of e.enemies)i.reset();e.active=!1,e.cleared=!1,this.ordinaryAttacker&&e.enemies.includes(this.ordinaryAttacker)&&(this.ordinaryAttacker=null),this.ui.toast("The road falls quiet. The enemy returns to its post.")}}onBossDefeated(t){this.progress.bossDefeated||(this.progress.bossDefeated=!0,this.progress.lens=!0,this.progress.salvage+=st.economy.bossSalvage,this.world.setBossGate(!0),this.onCombatEvent(),this.audio.bossDefeat(),this.saveNow("boss-victory"),this.ui.toast("Beacon Lens recovered. +4 Salvage."),this.ui.showChapterBanner("The Warden falls","Beacon Lens recovered",3.6))}saveNow(t){if(!this.hasStarted&&!this.hasSave)return!1;const e=this.saveManager.save(this.progress);return e&&(this.hasSave=!0,this.pendingSave=on(this.progress)),e}applyProgressVisuals(){const t=this.progress;this.world.setWorkshopBuilt(t.workshopBuilt),this.player.setReinforced(t.workshopBuilt),this.world.setBeaconBuilt(t.beaconBuilt);for(const e of nr)this.world.setCacheClaimed(e.id,t.claimedCaches.includes(e.id));this.world.setKeepsakeCollected(t.keepsake),this.world.setShortcutOpen(t.shortcutOpen),this.world.setBrazierActive(t.activatedCheckpoints.includes("brazier")),t.bossDefeated?this.boss.setDefeatedAbsent(!0):(this.boss.isBossHidden=!1,this.boss.state==="dead"&&this.boss.reset()),this.updateBossGate()}updateBossGate(){if(this.boss.engaged){this.world.setBossGate(!1);return}const t=this.progress.bossDefeated||this.progress.activatedCheckpoints.includes("brazier");this.world.setBossGate(t)}resetCombatAndEnemies(){this.ordinaryAttacker=null,this.bossGateNotified=!1;for(const t of this.encounters){t.active=!1,t.cleared=!1;for(const e of t.enemies)e.reset()}this.progress.bossDefeated?this.boss.setDefeatedAbsent(!0):(this.boss.isBossHidden=!1,this.boss.reset()),this.outgoingHits.length=0,this.incomingHits.length=0,this.lastCombatEvent=-99,this.deathTimer=0,this.updateBossGate()}startAtCheckpoint(t,e=!0){let i=t;(!We[i]||!this.progress.activatedCheckpoints.includes(i))&&(i="camp"),this.progress.activeCheckpoint=i;const n=We[i];this.player.root.visible=!0,this.player.resetAt(n,e),this.cameraRig.reset(),this.resetCombatAndEnemies(),this.ui.hideDeath(),this.ui.hideEnding(),this.currentInteraction=null,this.farBoundaryShown=!1,this.ambientTime=0,this.lastCombatEvent=-99}continueGame(){if(this.mode!=="title")return;let t=this.pendingSave?on(this.pendingSave):null;if(!t){const e=this.saveManager.load();e.ok&&(t=e.progress)}if(!t||!hs(t).ok){this.ui.toast("No valid journey to continue.");return}this.progress=t,this.hasStarted=!0,this.hasSave=!0,this.pendingSave=on(t),this.applySettings(!1),this.applyProgressVisuals(),this.startAtCheckpoint(this.progress.activeCheckpoint,!0),this.mode="playing",this.ui.showGame(),this.ui.toast(this.loadedFromBackup?"Recovered the last valid autosave.":`Continued at ${We[this.progress.activeCheckpoint].name}.`),this.loadedFromBackup=!1,this.input.requestCapture(),this.progress.chapterComplete?this.ui.showChapterBanner("Chapter complete","Light the Road",4):this.ui.showChapterBanner("Alder Hollow","Chapter I · Light the Road",3.2)}requestNewGame(){if(this.mode!=="title")return;this.hasSave||this.hasStarted?(this.ui.showConfirm("Replace this journey?","Starting a new game replaces the saved journey in this browser. This cannot be undone.",()=>this.startNewGame()),this.mode="confirm"):this.startNewGame()}startNewGame(){const t={...this.progress.settings};this.progress=ea(),this.progress.settings=t,this.hasStarted=!0,this.hasSave=!0,this.loadedFromBackup=!1,this.loadError=null,this.pendingSave=on(this.progress),this.applySettings(!1),this.applyProgressVisuals(),this.startAtCheckpoint("camp",!0),this.mode="playing",this.ui.hideConfirm(),this.ui.showGame(),this.ui.hideDeath(),this.saveNow("new-game"),this.input.requestCapture(),this.ui.showChapterBanner("Light the Road","Chapter I",4.2),this.ui.toast("Mara waits by the hearth."),this.audio.start()}cancelConfirm(){this.ui.hideConfirm(),this.mode="title",this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available)}pause(t="pause"){this.mode==="playing"&&(this.mode="paused",this.accumulator=0,this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showPause(),this.pauseReason=t)}resumeFromPause(){this.mode==="paused"&&(this.mode="playing",this.accumulator=0,this.input.consumeMouse(),this.ui.hidePause(),this.input.requestCapture(),this.ui.updateCaptureHint())}returnToTitle(){["paused","playing"].includes(this.mode)&&(this.saveNow("return-title"),this.pendingSave=on(this.progress),this.mode="title",this.input.releaseCapture(),this.input.consumeMouse(),this.player.root.visible=!1,this.currentInteraction=null,this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available))}openJournal(){this.mode==="paused"&&(this.mode="journal",this.input.consumeMouse(),this.ui.openJournal())}closeJournal(){this.mode==="journal"&&(this.ui.closeJournal(),this.mode="paused",this.ui.showPause())}openSettings(t="pause"){["title","paused"].includes(this.mode)&&(this.settingsOrigin=t,this.mode="settings",this.input.consumeMouse(),this.ui.openSettings(t))}closeSettings(){this.mode==="settings"&&(this.ui.closeSettings(),this.settingsOrigin==="pause"?(this.mode="paused",this.ui.showPause()):(this.mode="title",this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available)))}acceptsGameplayInput(){return this.mode==="playing"&&!this.player.isDead}getHostileTargets(){const t=this.enemies.filter(e=>e.alive);return this.boss.alive&&!this.boss.isBossHidden&&t.push(this.boss),t}getEngagedEnemies(){return this.enemies.filter(t=>t.alive&&t.engaged)}hasLineOfSight(t){if(!this.camera)return!0;const e=this.camera.position.clone(),i=t.clone().sub(e),n=i.length();return n<.2?!0:(i.normalize(),new _c(e,i,.1,Math.max(.2,n-.6)).intersectObjects(this.world.cameraOccluders,!0).length===0)}getObjective(){return this.progress.beaconBuilt?Fn.complete:this.progress.bossDefeated||this.progress.lens?this.progress.salvage>=st.economy.beaconCost?Fn.lens:Fn.lensNoSalvage:this.boss.engaged?Fn.boss:this.progress.activatedCheckpoints.includes("brazier")?Fn.brazier:Fn.initial}getJournalData(){const t=this.progress,e=[];for(const n of["camp","brazier"])e.push(t.activatedCheckpoints.includes(n)?`${We[n].name} — active`:`${We[n].name} — undiscovered`);const i=[];return i.push(`Supply caches: ${t.claimedCaches.length} of 4`),t.keepsake&&i.push("Carved keepsake — on the hearth shelf"),t.workshopBuilt&&i.push("Workshop restored"),t.bossDefeated&&i.push("Gate Warden defeated"),t.beaconBuilt&&i.push("Bridge beacon restored"),i.length||i.push("Nothing discovered yet."),{objective:this.getObjective(),resources:`Salvage: ${t.salvage} · Beacon Lens: ${t.beaconBuilt?"set in the beacon":t.lensConsumed?"spent":t.lens?"carried":"not found"}`,restPoints:e,shortcut:t.shortcutOpen?"Open — cart yard to Alder Hollow":"Closed — opens from the cart yard side",discoveries:i}}findInteraction(){if(!this.player||this.player.isDead)return null;const t=this.player.position,e=[],i=(n,r,a,o,l=st.world.interactionRange)=>{const c=Math.hypot(t.x-a,t.z-o);c<=l&&e.push({id:n,label:r,x:a,z:o,distance:c})};i("mara","Talk to Mara",-4.2,17.8),i("hearth","Rest at the hearth",0,16,3.4),i("workshop",this.progress.workshopBuilt?"Inspect the restored workshop":"Restore the workshop",-8.6,13.3,3.1),this.progress.beaconBuilt?i("beacon","Inspect the bridge beacon",8.2,20.5,3.1):this.progress.lens?i("beacon","Restore the bridge beacon",8.2,20.5,3.1):i("beacon","Inspect the broken beacon",8.2,20.5,3.1);for(const n of nr)this.progress.claimedCaches.includes(n.id)||i(`cache:${n.id}`,`Open ${n.name.toLowerCase()}`,n.x,n.z,2.5);if(this.progress.keepsake||i("keepsake","Take the carved keepsake",27.5,-25.4,2.5),this.progress.activatedCheckpoints.includes("brazier")?i("brazier","Rest at the field brazier",0,-96,3.3):i("brazier","Activate the field brazier",0,-96,3.3),!this.progress.shortcutOpen){const n=t.z<-20.8;i("shortcut",n?"Open the shortcut gate":"Inspect the shortcut gate",20,-20,3.3)}return e.sort((n,r)=>n.distance-r.distance),e[0]||null}interact(){if(this.mode!=="playing"||this.player.isDead)return;const t=this.findInteraction();if(!t)return;const e=t.id;e==="mara"?this.talkToMara():e==="hearth"?this.openRest("camp"):e==="workshop"?this.openProject("workshop"):e==="beacon"?this.progress.beaconBuilt?this.openDialogueData(Ii.beaconRestored,"The Bridge Beacon"):this.progress.lens?this.openProject("beacon"):(this.progress.dialogue.beaconInspected=!0,this.saveNow("beacon-inspected"),this.openDialogueData(Ii.beaconInspected,"The Broken Beacon")):e.startsWith("cache:")?this.collectCache(e.slice(6)):e==="keepsake"?this.collectKeepsake():e==="brazier"?this.progress.activatedCheckpoints.includes("brazier")?this.openRest("brazier"):this.activateBrazier():e==="shortcut"&&(this.player.position.z<-20.8?this.openShortcut():this.openDialogueData(Ii.shortcutLocked,"Shortcut Gate"))}talkToMara(){let t;this.progress.beaconBuilt?(t=Ii.complete,this.progress.dialogue.completeSeen=!0):this.progress.bossDefeated||this.progress.lens?(t=this.progress.salvage>=st.economy.beaconCost?Ii.lens:Ii.lensPoor,this.progress.dialogue.lensSeen=!0):(t=Ii.arrival,this.progress.dialogue.arrivalSeen=!0),this.saveNow("dialogue"),this.openDialogueData(t,"Alder Hollow")}openDialogueData(t,e){this.mode==="playing"&&(this.mode="dialogue",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showDialogue(t.title,t.body,e))}closeDialogue(){this.mode==="dialogue"&&(this.ui.hideDialogue(),this.mode="playing",this.input.requestCapture(),this.ui.updateCaptureHint())}collectCache(t){if(this.progress.claimedCaches.includes(t))return;const e=nr.find(i=>i.id===t);e&&(this.progress.claimedCaches.push(t),this.progress.salvage+=st.economy.cacheSalvage,this.world.setCacheClaimed(t,!0),this.audio.pickup(),this.saveNow("cache"),this.ui.toast(`${e.name}: +2 Salvage.`))}collectKeepsake(){this.progress.keepsake||(this.progress.keepsake=!0,this.world.setKeepsakeCollected(!0),this.audio.pickup(),this.saveNow("keepsake"),this.ui.toast("Carved keepsake recovered. It now rests on the hearth shelf."))}openShortcut(){this.progress.shortcutOpen||(this.progress.shortcutOpen=!0,this.world.setShortcutOpen(!0),this.audio.gate(),this.saveNow("shortcut"),this.ui.toast("Shortcut opened: cart yard to Alder Hollow."),this.ui.showChapterBanner("Shortcut opened","The old road returns",3))}isRestAllowed(){return!(this.player.isDead||this.boss.engaged||this.enemies.some(t=>t.alive&&t.engaged)||this.time-this.lastCombatEvent<st.world.combatQuietTime)}openRest(t){if(this.mode!=="playing")return;if(!this.isRestAllowed()){this.ui.toast("You cannot rest while the road is restless. Wait five seconds after combat.");return}const e=this.progress.activatedCheckpoints,i=t==="brazier"||e.includes("brazier"),n=[];if(i)for(const r of["camp","brazier"])r===t||!e.includes(r)||n.push({id:r,short:We[r].short,name:We[r].name});this.mode="rest",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showRestMenu({checkpointId:t,title:We[t].name,body:`Rest restores health, stamina and both healing charges. Ordinary enemies and an undefeated Gate Warden reset. Permanent progress remains.

Walking past a rest point does not rest you.`,canTravel:n.length>0,travelOptions:n})}closeMenu(){["rest","project"].includes(this.mode)&&(this.ui.hideRest(),this.ui.hideProject(),this.mode="playing",this.input.requestCapture(),this.ui.updateCaptureHint())}performRestAt(t){if(!this.isRestAllowed()){this.ui.hideRest(),this.mode="playing",this.ui.toast("The road is still restless."),this.input.requestCapture();return}this.progress.activeCheckpoint=t,this.startAtCheckpoint(t,!0),this.saveNow("rest"),this.ui.hideRest(),this._runTransition(`Resting at ${We[t].name}`,.75),this.ui.toast("Rested. Health, stamina and healing charges restored.")}travelTo(t){if(!this.isRestAllowed()){this.ui.hideRest(),this.mode="playing",this.ui.toast("The road is still restless."),this.input.requestCapture();return}this.progress.activatedCheckpoints.includes(t)&&(this.progress.activeCheckpoint=t,this.startAtCheckpoint(t,!0),this.saveNow("travel"),this.ui.hideRest(),this._runTransition(`Traveling to ${We[t].name}`,.9),this.ui.toast(`Traveled to ${We[t].name}.`))}activateBrazier(){this.progress.activatedCheckpoints.includes("brazier")||this.mode==="playing"&&(this.progress.activatedCheckpoints.push("brazier"),this.progress.activeCheckpoint="brazier",this.world.setBrazierActive(!0),this.updateBossGate(),this.startAtCheckpoint("brazier",!0),this.saveNow("brazier"),this.audio.beacon(),this._runTransition("The field brazier catches",1),this.ui.toast("Field brazier lit. It is now your active rest point."),this.ui.showChapterBanner("Field Brazier Lit","A safe place before the gate",3.6))}openProject(t){if(this.mode!=="playing")return;this.mode="project",this.input.consumeMouse(),this.input.releaseCapture();const e=this.progress.salvage;let i;if(t==="workshop"){const n=this.progress.workshopBuilt;i={kind:t,title:n?"Restored Workshop":"Restore the Workshop",body:n?"The bench is true, the roof is whole and the tools are warm. The reinforced spear tip raises light thrusts to 30 damage and heavy thrusts to 54.":`Repair the bench, roof and tools. Warm light returns to the workshop, and the visible spear tip is reinforced.

Benefit: light thrust 25 → 30 damage, heavy thrust 45 → 54. Reach, speed and stamina are unchanged.

A Briarling falls in two light hits; a Mossguard in three.`,resources:`Salvage <strong>${e}</strong> · Cost <strong>${st.economy.workshopCost}</strong>`,built:n,canBuild:!n&&e>=st.economy.workshopCost,buildLabel:`Restore workshop · ${st.economy.workshopCost} Salvage`}}else{const n=this.progress.beaconBuilt;i={kind:t,title:n?"The Bridge Beacon":"Restore the Bridge Beacon",body:n?"The Beacon Lens is set, the bridge lamps burn and the road gate stands open. The chapter is complete; Alder Hollow remains yours to explore.":`Fit the Beacon Lens and repair the beacon. Bridge lamps will wake along the old crossing and the road gate will open.

Requires the Beacon Lens from the Gate Warden and eight Salvage.

Completing this restores the chapter.`,resources:`Salvage <strong>${e}</strong> · Cost <strong>${st.economy.beaconCost}</strong> · Lens <strong>${this.progress.lens?"carried":"missing"}</strong>`,built:n,canBuild:!n&&this.progress.lens&&e>=st.economy.beaconCost,buildLabel:`Restore bridge beacon · ${st.economy.beaconCost} Salvage + Lens`}}this.ui.showProject(i)}buildProject(t){if(this.mode==="project"){if(t==="workshop"){if(this.progress.workshopBuilt)return;if(this.progress.salvage<st.economy.workshopCost){this.ui.toast("Not enough Salvage for the workshop.");return}this.progress.salvage-=st.economy.workshopCost,this.progress.workshopBuilt=!0,this.world.setWorkshopBuilt(!0),this.player.setReinforced(!0),this.saveNow("workshop-built"),this.audio.construction(),this.ui.hideProject(),this._runTransition("The workshop takes shape",.9),this.ui.toast("Workshop restored. Spear damage is now 30 light / 54 heavy."),this.ui.showChapterBanner("Workshop Restored","The spear tip is reinforced",3.2)}else if(t==="beacon"){if(this.progress.beaconBuilt)return;if(!this.progress.lens){this.ui.toast("The Beacon Lens is still missing.");return}if(this.progress.salvage<st.economy.beaconCost){this.ui.toast("Not enough Salvage for the bridge beacon.");return}this.progress.salvage-=st.economy.beaconCost,this.progress.lensConsumed=!0,this.progress.beaconBuilt=!0,this.progress.chapterComplete=!0,this.saveNow("beacon-built"),this.world.setBeaconBuilt(!0),this.ui.hideProject(),this.startEnding()}}}startEnding(){this.mode="ending",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.hideProject(),this.ui.hideHud(),this.audio.beacon(),this.world.setBeaconBuilt(!0),this.world.setBridgeLights(!1),this.world.beaconLens.visible=!0,this.world.beaconLight.intensity=3.2;for(const t of this.world.bridgeLamps)t.bulb.visible=!1,t.light.visible=!1,t.light.intensity=0;this.cameraRig.setCinematic(new P(14.2,5.1,30),new P(8.4,2.5,22.2)),this.endingState={elapsed:0,shown:!1,lamps:0},this.ui.showChapterBanner("The bridge wakes","Light the Road",2.4)}updateEnding(t){if(!this.endingState)return;this.endingState.elapsed+=t;const e=this.endingState.elapsed,i=ve(Math.floor((e-.55)/.42)+1,0,this.world.bridgeLamps.length);if(i>this.endingState.lamps){for(let n=this.endingState.lamps;n<i;n++){const r=this.world.bridgeLamps[n];r.bulb.visible=!0,r.light.visible=!0,r.light.intensity=1.4,this.audio._tone({freq:480+n*90,type:"sine",duration:.5,volume:.03,slide:60})}this.endingState.lamps=i}e>=2.9&&!this.endingState.shown&&(this.endingState.shown=!0,this.world.setBridgeLights(!0),this.ui.showEnding(`Mara stands at the hearth and watches the old lamps answer one by one.

“You have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.”

Chapter complete — Light the Road.`))}finishEnding(){this.mode==="ending"&&(this.world.setBridgeLights(!0),this.ui.hideEnding(),this.ui.showGame(),this.cameraRig.clearCinematic(),this.mode="playing",this.endingState=null,this.saveNow("chapter-complete"),this.input.requestCapture(),this.ui.showChapterBanner("Chapter complete","Light the Road",5),this.ui.toast("The road is lit. Explore Alder Hollow and finish any missed work."))}respawnAfterDeath(){const t=We[this.progress.activeCheckpoint]||We.camp;this.player.resetAt(t,!0),this.cameraRig.reset(),this.resetCombatAndEnemies(),this.outgoingHits.length=0,this.incomingHits.length=0,this.lastCombatEvent=-99,this.deathTimer=0,this.currentInteraction=null,this.ui.hideDeath(),this.ui.toast(`Returned to ${t.name}.`)}_checkFarBoundary(){this.farBoundaryShown||!this.progress.chapterComplete||this.player.position.z<-129&&(this.farBoundaryShown=!0,this.ui.showChapterBanner("Chapter complete","The road beyond is not yet built",5),this.ui.toast("Chapter complete. The next road is not part of this build."))}_runTransition(t,e){this.mode="transition",this.input.consumeMouse(),this.ui.showTransition(t),this.input.requestCapture(),this.transitionTimer&&clearTimeout(this.transitionTimer),this.transitionTimer=setTimeout(()=>{this.ui.fadeTransition(),this.mode="playing",this.accumulator=0,this.input.consumeMouse(),this.ui.updateCaptureHint()},e*1e3)}_spawnHitEffect(t,e){const i=new _t;i.position.copy(t);const n=new ri({color:e?16765059:15909498,transparent:!0,opacity:.9,depthWrite:!1}),r=[],a=e?8:5;for(let o=0;o<a;o++){const l=new Wt(this.sparkGeo,n);l.position.set(0,0,0);const c=Math.random()*Math.PI*2,h=Math.random()*1.7+.4,d=Math.random()*2.2+.8;r.push({mesh:l,vx:Math.sin(c)*d,vy:h,vz:Math.cos(c)*d}),i.add(l)}this.scene.add(i),this.effects.push({group:i,material:n,parts:r,life:.36,maxLife:.36})}_updateEffects(t){for(let e=this.effects.length-1;e>=0;e--){const i=this.effects[e];i.life-=t;for(const n of i.parts)n.vy-=9.8*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.scale.setScalar(Math.max(.1,i.life/i.maxLife));i.material.opacity=Math.max(0,i.life/i.maxLife),i.life<=0&&(this.scene.remove(i.group),i.material.dispose(),this.effects.splice(e,1))}}}const x0=document.getElementById("game-canvas");try{window.waykeepers=new v0(x0)}catch(s){console.error(s);const t=document.createElement("div");t.className="fatal-error",t.innerHTML=`<strong>Waykeepers could not start.</strong><br>${String(s.message||s)}`,document.body.appendChild(t)}
