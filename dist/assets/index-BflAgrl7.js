(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const nl="186",Iu=0,ql=1,Du=2,Gr=1,Ch=2,Fs=3,tn=0,ii=1,ti=2,Qi=0,zs=1,Ws=2,Yl=3,Kl=4,Nu=5,ss=100,Uu=101,Fu=102,Ou=103,ku=104,Bu=200,zu=201,Gu=202,Hu=203,Lh=204,Ph=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,Ku=211,$u=212,Zu=213,Ju=214,co=0,ho=1,uo=2,Xs=3,fo=4,po=5,mo=6,go=7,ca=0,ju=1,Qu=2,Fi=0,Ih=1,Dh=2,Nh=3,sl=4,Uh=5,Fh=6,Oh=7,$l="attached",ed="detached",kh=300,Pn=301,ds=302,va=303,ya=304,ha=306,In=1e3,Ni=1001,Jr=1002,Nt=1003,Bh=1004,Os=1005,Ut=1006,Hr=1007,Zi=1008,ai=1009,zh=1010,Gh=1011,qs=1012,rl=1013,Oi=1014,pi=1015,ki=1016,al=1017,ol=1018,Ys=1020,Hh=35902,Vh=35899,Wh=1021,Xh=1022,mi=1023,nn=1026,Ln=1027,ll=1028,cl=1029,Dn=1030,hl=1031,ul=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,_o=35840,xo=35841,vo=35842,yo=35843,Mo=36196,So=37492,bo=37496,To=37488,wo=37489,jr=37490,Eo=37491,Ao=37808,Ro=37809,Co=37810,Lo=37811,Po=37812,Io=37813,Do=37814,No=37815,Uo=37816,Fo=37817,Oo=37818,ko=37819,Bo=37820,zo=37821,Go=36492,Ho=36494,Vo=36495,Wo=36283,Xo=36284,Qr=36285,qo=36286,Ks=2300,$s=2301,Ma=2302,Zl=2303,Jl=2400,jl=2401,Ql=2402,td=2500,id=0,qh=1,Yo=2,nd=3200,Zs=0,sd=1,xn="",Tt="srgb",li="srgb-linear",ea="linear",lt="srgb",Sa=7680,rd=519,ad=512,od=513,ld=514,dl=515,cd=516,hd=517,fl=518,ud=519,Yh=35044,ec="300 es",Ui=2e3,Js=2001;function dd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pd(){const r=js("canvas");return r.style.display="block",r}const tc={};function ta(...r){const e="THREE."+r.shift();console.log(e,...r)}function Kh(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Re(...r){r=Kh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Fe(...r){r=Kh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ls(...r){const e=r.join(" ");e in tc||(tc[e]=!0,Re(...r))}function md(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const gd={[co]:ho,[uo]:mo,[fo]:go,[Xs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:Xs};class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Gs=Math.PI/180,fs=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function pl(r,e){return(r%e+e)%e}function _d(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function xd(r,e,t){return r!==e?(t-r)/(e-r):0}function Hs(r,e,t){return(1-t)*r+t*e}function vd(r,e,t,i){return Hs(r,e,1-Math.exp(-t*i))}function yd(r,e=1){return e-Math.abs(pl(r,e*2)-e)}function Md(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Td(r,e){return r+Math.random()*(e-r)}function wd(r){return r*(.5-Math.random())}function Ed(r){r!==void 0&&(ic=r);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(r){return r*Gs}function Rd(r){return r*fs}function Cd(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Ld(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Pd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Id(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dd={DEG2RAD:Gs,RAD2DEG:fs,generateUUID:bi,clamp:je,euclideanModulo:pl,mapLinear:_d,inverseLerp:xd,lerp:Hs,damp:vd,pingpong:yd,smoothstep:Md,smootherstep:Sd,randInt:bd,randFloat:Td,randFloatSpread:wd,seededRandom:Ed,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:Cd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Id,normalize:ct,denormalize:Mi},Pl=class Pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pl.prototype.isVector2=!0;let Ie=Pl;class sn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Il=class Il{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Il.prototype.isVector3=!0;let L=Il;const ba=new L,nc=new sn,Dl=class Dl{constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],M=n[1],A=n[4],y=n[7],T=n[2],b=n[5],E=n[8];return s[0]=a*v+o*M+l*T,s[3]=a*m+o*A+l*b,s[6]=a*p+o*y+l*E,s[1]=c*v+h*M+u*T,s[4]=c*m+h*A+u*b,s[7]=c*p+h*y+u*E,s[2]=d*v+f*M+g*T,s[5]=d*m+f*A+g*b,s[8]=d*p+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;let Be=Dl;const Ta=new Be,sc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){const r={enabled:!0,workingColorSpace:li,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(n.r=en(n.r),n.g=en(n.g),n.b=en(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?ea:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[li]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}const qe=Nd();function en(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let On;class Ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{On===void 0&&(On=js("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=On}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=en(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(en(t[i]/255)*255):t[i]=en(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class ml{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(wa(n[a].image)):s.push(wa(n[a]))}else s=wa(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Od=0;const Ea=new L;class Ft extends Nn{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Ni,n=Ni,s=Ut,a=Zi,o=mi,l=ai,c=Ft.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=bi(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=kh;Ft.DEFAULT_ANISOTROPY=1;const Nl=class Nl{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(f+1)/2,T=(p+1)/2,b=(h+d)/4,E=(u+v)/4,_=(g+m)/4;return A>y&&A>T?A<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(A),n=b/i,s=E/i):y>T?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=b/n,s=_/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=E/s,n=_/s),this.set(i,n,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;let ft=Nl;class kd extends Nn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},s=new Ft(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends kd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $h extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const la=class la{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,i,n,s,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),a=1/kn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Gd)}lookAt(e,t,i){const n=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),cn.crossVectors(i,ni),cn.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),cn.crossVectors(i,ni)),cn.normalize(),cr.crossVectors(ni,cn),n[0]=cn.x,n[4]=cr.x,n[8]=ni.x,n[1]=cn.y,n[5]=cr.y,n[9]=ni.y,n[2]=cn.z,n[6]=cr.z,n[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],A=i[7],y=i[11],T=i[15],b=n[0],E=n[4],_=n[8],w=n[12],C=n[1],I=n[5],F=n[9],G=n[13],N=n[2],H=n[6],K=n[10],$=n[14],ne=n[3],X=n[7],ee=n[11],ie=n[15];return s[0]=a*b+o*C+l*N+c*ne,s[4]=a*E+o*I+l*H+c*X,s[8]=a*_+o*F+l*K+c*ee,s[12]=a*w+o*G+l*$+c*ie,s[1]=h*b+u*C+d*N+f*ne,s[5]=h*E+u*I+d*H+f*X,s[9]=h*_+u*F+d*K+f*ee,s[13]=h*w+u*G+d*$+f*ie,s[2]=g*b+v*C+m*N+p*ne,s[6]=g*E+v*I+m*H+p*X,s[10]=g*_+v*F+m*K+p*ee,s[14]=g*w+v*G+m*$+p*ie,s[3]=M*b+A*C+y*N+T*ne,s[7]=M*E+A*I+y*H+T*X,s[11]=M*_+A*F+y*K+T*ee,s[15]=M*w+A*G+y*$+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*f-c*d,A=o*f-c*u,y=o*d-l*u,T=a*f-c*h,b=a*d-l*h,E=a*u-o*h;return t*(v*M-m*A+p*y)-i*(g*M-m*T+p*b)+n*(g*A-v*T+p*E)-s*(g*y-v*b+m*E)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*o-i*a,A=t*l-n*a,y=t*c-s*a,T=i*l-n*o,b=i*c-s*o,E=n*c-s*l,_=h*v-u*g,w=h*m-d*g,C=h*p-f*g,I=u*m-d*v,F=u*p-f*v,G=d*p-f*m,N=M*G-A*F+y*I+T*C-b*w+E*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/N;return e[0]=(o*G-l*F+c*I)*H,e[1]=(n*F-i*G-s*I)*H,e[2]=(v*E-m*b+p*T)*H,e[3]=(d*b-u*E-f*T)*H,e[4]=(l*C-a*G-c*w)*H,e[5]=(t*G-n*C+s*w)*H,e[6]=(m*y-g*E-p*A)*H,e[7]=(h*E-d*y+f*A)*H,e[8]=(a*F-o*C+c*_)*H,e[9]=(i*C-t*F-s*_)*H,e[10]=(g*b-v*y+p*M)*H,e[11]=(u*y-h*b-f*M)*H,e[12]=(o*w-a*I-l*_)*H,e[13]=(t*I-i*w+n*_)*H,e[14]=(v*A-g*T-m*M)*H,e[15]=(h*T-u*A+d*M)*H,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,v=a*h,m=a*u,p=o*u,M=l*c,A=l*h,y=l*u,T=i.x,b=i.y,E=i.z;return n[0]=(1-(v+p))*T,n[1]=(f+y)*T,n[2]=(g-A)*T,n[3]=0,n[4]=(f-y)*b,n[5]=(1-(d+p))*b,n[6]=(m+M)*b,n[7]=0,n[8]=(g+A)*E,n[9]=(m-M)*E,n[10]=(1-(d+v))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=kn.set(n[0],n[1],n[2]).length();const o=kn.set(n[4],n[5],n[6]).length(),l=kn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),_i.copy(this);const c=1/a,h=1/o,u=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=Ui,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===Ui)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Js)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Ui,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===Ui)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Js)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};la.prototype.isMatrix4=!0;let Ve=la;const kn=new L,_i=new Ve,zd=new L(0,0,0),Gd=new L(1,1,1),cn=new L,cr=new L,ni=new L,ac=new Ve,oc=new sn;class Bi{constructor(e=0,t=0,i=0,n=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const lc=new L,Bn=new sn,Vi=new Ve,hr=new L,vs=new L,Vd=new L,Wd=new sn,cc=new L(1,0,0),hc=new L(0,1,0),uc=new L(0,0,1),dc={type:"added"},Xd={type:"removed"},zn={type:"childadded",child:null},Aa={type:"childremoved",child:null};class yt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,t=new Bi,i=new sn,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Be}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hr.copy(e):hr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(vs,hr,this.up):Vi.lookAt(hr,vs,this.up),this.quaternion.setFromRotationMatrix(Vi),n&&(Vi.extractRotation(n.matrixWorld),Bn.setFromRotationMatrix(Vi),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),zn.child=e,this.dispatchEvent(zn),zn.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),zn.child=e,this.dispatchEvent(zn),zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class me extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qd={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ca(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=qe.workingColorSpace){if(e=pl(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ca(a,s,e+1/3),this.g=Ca(a,s,e),this.b=Ca(a,s,e-1/3)}return qe.colorSpaceToWorking(this,n),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return qe.workingToColorSpace(qt.copy(this),e),Math.round(je(qt.r*255,0,255))*65536+Math.round(je(qt.g*255,0,255))*256+Math.round(je(qt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(qt.copy(this),t);const i=qt.r,n=qt.g,s=qt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Tt){qe.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,n=qt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(ur);const i=Hs(hn.h,ur.h,t),n=Hs(hn.s,ur.s,t),s=Hs(hn.l,ur.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Me;Me.NAMES=Zh;class _l{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=i}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yd extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new L,Wi=new L,La=new L,Xi=new L,Gn=new L,Hn=new L,fc=new L,Pa=new L,Ia=new L,Da=new L,Na=new ft,Ua=new ft,Fa=new ft;class fi{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xi.subVectors(e,t),n.cross(xi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){xi.subVectors(n,t),Wi.subVectors(i,t),La.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(Wi),l=xi.dot(La),c=Wi.dot(Wi),h=Wi.dot(La),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Na.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,i),Fa.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Na,s.x),a.addScaledVector(Ua,s.y),a.addScaledVector(Fa,s.z),a}static isFrontFacing(e,t,i,n){return xi.subVectors(i,t),Wi.subVectors(e,t),xi.cross(Wi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Gn.subVectors(n,i),Hn.subVectors(s,i),Pa.subVectors(e,i);const l=Gn.dot(Pa),c=Hn.dot(Pa);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,n);const h=Gn.dot(Ia),u=Hn.dot(Ia);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Gn,a);Da.subVectors(e,s);const f=Gn.dot(Da),g=Hn.dot(Da);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Hn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return fc.subVectors(s,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(fc,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Gn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),fr.subVectors(this.max,ys),Vn.subVectors(e.a,ys),Wn.subVectors(e.b,ys),Xn.subVectors(e.c,ys),un.subVectors(Wn,Vn),dn.subVectors(Xn,Wn),Mn.subVectors(Vn,Xn);let t=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Mn.z,Mn.y,un.z,0,-un.x,dn.z,0,-dn.x,Mn.z,0,-Mn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Mn.y,Mn.x,0];return!Oa(t,Vn,Wn,Xn,fr)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Vn,Wn,Xn,fr))?!1:(pr.crossVectors(un,dn),t=[pr.x,pr.y,pr.z],Oa(t,Vn,Wn,Xn,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,dr=new rn,Vn=new L,Wn=new L,Xn=new L,un=new L,dn=new L,Mn=new L,ys=new L,fr=new L,pr=new L,Sn=new L;function Oa(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Sn.fromArray(r,s);const o=n.x*Math.abs(Sn.x)+n.y*Math.abs(Sn.y)+n.z*Math.abs(Sn.z),l=e.dot(Sn),c=t.dot(Sn),h=i.dot(Sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pt=new L,mr=new Ie;let Kd=0;class jt extends Nn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jh extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jh extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $e extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const $d=new rn,Ms=new L,ka=new L;class Gi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$d.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ms,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ka)),this.expandByPoint(Ms.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Zd=0;const hi=new Ve,Ba=new yt,qn=new L,si=new rn,Ss=new rn,zt=new L;class wt extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?jh:Jh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(si.min,Ss.min),si.expandByPoint(zt),zt.addVectors(si.max,Ss.max),si.expandByPoint(zt)):(si.expandByPoint(Ss.min),si.expandByPoint(Ss.max))}si.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(qn.fromBufferAttribute(e,c),zt.add(qn)),n=Math.max(n,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,u=new L,d=new Ie,f=new Ie,g=new Ie,v=new L,m=new L;function p(_,w,C){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(v),o[w].add(v),o[C].add(v),l[_].add(m),l[w].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,w=M.length;_<w;++_){const C=M[_],I=C.start,F=C.count;for(let G=I,N=I+F;G<N;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new L,y=new L,T=new L,b=new L;function E(_){T.fromBufferAttribute(n,_),b.copy(T);const w=o[_];A.copy(w),A.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(b,w);const I=y.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,I)}for(let _=0,w=M.length;_<w;++_){const C=M[_],I=C.start,F=C.count;for(let G=I,N=I+F;G<N;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new jt(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Kt=new L;class Qs{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const za=new L,Jd=new L,jd=new Be;class gn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=za.subVectors(i,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jd.getNormalMatrix(e),n=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Qd=0;class Qt extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=zs,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Ph,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ko extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yn;const bs=new L,Kn=new L,$n=new L,Zn=new Ie,Ts=new Ie,eu=new Ve,gr=new L,ws=new L,_r=new L,pc=new Ie,Ga=new Ie,mc=new Ie;class gc extends yt{constructor(e=new Ko){if(super(),this.isSprite=!0,this.type="Sprite",Yn===void 0){Yn=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qh(t,5);Yn.setIndex([0,1,2,0,2,3]),Yn.setAttribute("position",new Qs(i,3,0,!1)),Yn.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=Yn,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kn.setFromMatrixScale(this.matrixWorld),eu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$n.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kn.multiplyScalar(-$n.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;xr(gr.set(-.5,-.5,0),$n,a,Kn,n,s),xr(ws.set(.5,-.5,0),$n,a,Kn,n,s),xr(_r.set(.5,.5,0),$n,a,Kn,n,s),pc.set(0,0),Ga.set(1,0),mc.set(1,1);let o=e.ray.intersectTriangle(gr,ws,_r,!1,bs);if(o===null&&(xr(ws.set(-.5,.5,0),$n,a,Kn,n,s),Ga.set(0,1),o=e.ray.intersectTriangle(gr,_r,ws,!1,bs),o===null))return;const l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||t.push({distance:l,point:bs.clone(),uv:fi.getInterpolation(bs,gr,ws,_r,pc,Ga,mc,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xr(r,e,t,i,n,s){Zn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Ts.x=s*Zn.x-n*Zn.y,Ts.y=n*Zn.x+s*Zn.y):Ts.copy(Zn),r.copy(e),r.x+=Ts.x,r.y+=Ts.y,r.applyMatrix4(eu)}const Yi=new L,Ha=new L,vr=new L,yr=new L;class sr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ha.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=yr.dot(this.direction),l=-yr.dot(vr),c=yr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ha).addScaledVector(vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),n=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,n,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let E,_,w,C,I,F,G,N,H,K,$,ne;if(y>=T&&y>=b?(w=l,F=u,H=g,ne=p,l>=0?(E=c,_=h,C=d,I=f,G=v,N=m,K=M,$=A):(E=h,_=c,C=f,I=d,G=m,N=v,K=A,$=M)):T>=b?(w=c,F=d,H=v,ne=M,c>=0?(E=h,_=l,C=f,I=u,G=m,N=g,K=A,$=p):(E=l,_=h,C=u,I=f,G=g,N=m,K=p,$=A)):(w=h,F=f,H=m,ne=A,h>=0?(E=l,_=c,C=u,I=d,G=g,N=v,K=p,$=M):(E=c,_=l,C=d,I=u,G=v,N=g,K=M,$=p)),w===0)return null;const X=E/w,ee=_/w,ie=1/w,De=C-X*F,Ce=I-ee*F,mt=G-X*H,et=N-ee*H,st=K-X*ne,q=$-ee*ne,Q=st*et-q*mt,ye=De*q-Ce*st,ke=mt*Ce-et*De;if(n){if(Q<0||ye<0||ke<0)return null}else if((Q<0||ye<0||ke<0)&&(Q>0||ye>0||ke>0))return null;const xe=Q+ye+ke;if(xe===0)return null;const Ye=ie*(Q*F+ye*H+ke*ne);return(xe>0?Ye<0:Ye>0)?null:this.at(Ye/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _c=new Ve,bn=new sr,Mr=new Gi,xc=new L,Sr=new L,br=new L,Tr=new L,Va=new L,wr=new L,vc=new L,Er=new L;class He extends yt{constructor(e=new wt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Va.fromBufferAttribute(u,e),a?wr.addScaledVector(Va,h):wr.addScaledVector(Va.sub(t),h))}t.add(wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(s),bn.copy(e.ray).recast(e.near),!(Mr.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Mr,xc)===null||bn.origin.distanceToSquared(xc)>(e.far-e.near)**2))&&(_c.copy(s).invert(),bn.copy(e.ray).applyMatrix4(_c),!(i.boundingBox!==null&&bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=A;y<T;y+=3){const b=o.getX(y),E=o.getX(y+1),_=o.getX(y+2);n=Ar(this,p,e,i,c,h,u,b,E,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);n=Ar(this,a,e,i,c,h,u,M,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=A;y<T;y+=3){const b=y,E=y+1,_=y+2;n=Ar(this,p,e,i,c,h,u,b,E,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,A=m+1,y=m+2;n=Ar(this,a,e,i,c,h,u,M,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ef(r,e,t,i,n,s,a,o){let l;if(e.side===ii?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===tn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:r}}function Ar(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Sr),r.getVertexPosition(l,br),r.getVertexPosition(c,Tr);const h=ef(r,e,t,i,Sr,br,Tr,vc);if(h){const u=new L;fi.getBarycoord(vc,Sr,br,Tr,u),n&&(h.uv=fi.getInterpolatedAttribute(n,o,l,c,u,new Ie)),s&&(h.uv1=fi.getInterpolatedAttribute(s,o,l,c,u,new Ie)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};fi.getNormal(Sr,br,Tr,d.normal),h.face=d,h.barycoord=u}return h}const Es=new ft,yc=new ft,Mc=new ft,tf=new ft,Sc=new Ve,Rr=new L,Wa=new Gi,bc=new Ve,Xa=new sr;class nf extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Rr),this.boundingBox.expandByPoint(Rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Rr),this.boundingSphere.expandByPoint(Rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1&&(bc.copy(n).invert(),Xa.copy(e.ray).applyMatrix4(bc),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;yc.fromBufferAttribute(n.attributes.skinIndex,e),Mc.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Es.copy(t),t.set(0,0,0,0)):(Es.set(...t,1),t.set(0,0,0)),Es.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Mc.getComponent(s);if(a!==0){const o=yc.getComponent(s);Sc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(tf.copy(Es).applyMatrix4(Sc),a)}}return t.isVector4&&(t.w=Es.w),t.applyMatrix4(this.bindMatrixInverse)}}class tu extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xl extends Ft{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Nt,h=Nt,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Ve,sf=new Ve;class vl{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:sf;Tc.multiplyMatrices(o,t[s]),Tc.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new xl(t,e,e,mi,pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(Re("Skeleton: No bone found with UUID:",s),a=new tu),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class ia extends jt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jn=new Ve,wc=new Ve,Cr=[],Ec=new rn,rf=new Ve,As=new He,Rs=new Gi;class rs extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,rf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jn),Ec.copy(e.boundingBox).applyMatrix4(Jn),this.boundingBox.union(Ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jn),Rs.copy(e.boundingSphere).applyMatrix4(Jn),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(i),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Jn),wc.multiplyMatrices(i,Jn),As.matrixWorld=wc,As.raycast(e,Cr);for(let a=0,o=Cr.length;a<o;a++){const l=Cr[a];l.instanceId=s,l.object=this,t.push(l)}Cr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(n*this.count),n,this.count,ll,pi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tn=new Gi,af=new Ie(.5,.5),Lr=new L;class yl{constructor(e=new gn,t=new gn,i=new gn,n=new gn,s=new gn,a=new gn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){const n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],v=s[9],m=s[10],p=s[11],M=s[12],A=s[13],y=s[14],T=s[15];if(n[0].setComponents(c-a,f-h,p-g,T-M).normalize(),n[1].setComponents(c+a,f+h,p+g,T+M).normalize(),n[2].setComponents(c+o,f+u,p+v,T+A).normalize(),n[3].setComponents(c-o,f-u,p-v,T-A).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,p-m,T-y).normalize();else if(n[4].setComponents(c-l,f-d,p-m,T-y).normalize(),t===Ui)n[5].setComponents(c+l,f+d,p+m,T+y).normalize();else if(t===Js)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){Tn.center.set(0,0,0);const t=af.distanceTo(e.center);return Tn.radius=.7071067811865476+t,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Lr.x=n.normal.x>0?e.max.x:e.min.x,Lr.y=n.normal.y>0?e.max.y:e.min.y,Lr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vs extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new L,sa=new L,Ac=new Ve,Cs=new sr,Pr=new Gi,qa=new L,Rc=new L;class Ml extends yt{constructor(e=new wt,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)na.fromBufferAttribute(t,n-1),sa.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=na.distanceTo(sa);e.setAttribute("lineDistance",new $e(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(n),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;Ac.copy(n).invert(),Cs.copy(e.ray).applyMatrix4(Ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),M=h.getX(v+1),A=Ir(this,e,Cs,l,p,M,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Ir(this,e,Cs,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Ir(this,e,Cs,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Ir(this,e,Cs,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ir(r,e,t,i,n,s,a){const o=r.geometry.attributes.position;if(na.fromBufferAttribute(o,n),sa.fromBufferAttribute(o,s),t.distanceSqToSegment(na,sa,qa,Rc)>i)return;qa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(qa);if(!(c<e.near||c>e.far))return{distance:c,point:Rc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Cc=new L,Lc=new L;class $o extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Cc.fromBufferAttribute(t,n),Lc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Cc.distanceTo(Lc);e.setAttribute("lineDistance",new $e(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class of extends Ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class as extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pc=new Ve,Zo=new sr,Dr=new Gi,Nr=new L;class Yr extends yt{constructor(e=new wt,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(n),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;Pc.copy(n).invert(),Zo.copy(e.ray).applyMatrix4(Pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Nr.fromBufferAttribute(u,m),Ic(Nr,m,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Nr.fromBufferAttribute(u,g),Ic(Nr,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(r,e,t,i,n,s,a){const o=Zo.distanceSqToPoint(r);if(o<t){const l=new L;Zo.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iu extends Ft{constructor(e=[],t=Pn,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lf extends Ft{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Ft{constructor(e,t,i=Oi,n,s,a,o=Nt,l=Nt,c,h=nn,u=1){if(h!==nn&&h!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cf extends er{constructor(e,t=Oi,i=Pn,n,s,a=Nt,o=Nt,l,c=nn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nu extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oi extends wt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(v,m,p,M,A,y,T,b,E,_,w){const C=y/E,I=T/_,F=y/2,G=T/2,N=b/2,H=E+1,K=_+1;let $=0,ne=0;const X=new L;for(let ee=0;ee<K;ee++){const ie=ee*I-G;for(let De=0;De<H;De++){const Ce=De*C-F;X[v]=Ce*M,X[m]=ie*A,X[p]=N,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(De/E),u.push(1-ee/_),$+=1}}for(let ee=0;ee<_;ee++)for(let ie=0;ie<E;ie++){const De=d+ie+H*ee,Ce=d+ie+H*(ee+1),mt=d+(ie+1)+H*(ee+1),et=d+(ie+1)+H*ee;l.push(De,Ce,et),l.push(Ce,mt,et),ne+=6}o.addGroup(f,ne,w),f+=ne,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tr extends wt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new L,h=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ut extends wt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function M(){const y=new L,T=new L;let b=0;const E=(t-e)/i;for(let _=0;_<=s;_++){const w=[],C=_/s,I=C*(t-e)+e;for(let F=0;F<=n;F++){const G=F/n,N=G*l+o,H=Math.sin(N),K=Math.cos(N);T.x=I*H,T.y=-C*i+m,T.z=I*K,u.push(T.x,T.y,T.z),y.set(H,E,K).normalize(),d.push(y.x,y.y,y.z),f.push(G,1-C),w.push(g++)}v.push(w)}for(let _=0;_<n;_++)for(let w=0;w<s;w++){const C=v[w][_],I=v[w+1][_],F=v[w+1][_+1],G=v[w][_+1];(e>0||w!==0)&&(h.push(C,I,G),b+=3),(t>0||w!==s-1)&&(h.push(I,F,G),b+=3)}c.addGroup(p,b,0),p+=b}function A(y){const T=g,b=new Ie,E=new L;let _=0;const w=y===!0?e:t,C=y===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=n;F++){const N=F/n*l+o,H=Math.cos(N),K=Math.sin(N);E.x=w*K,E.y=m*C,E.z=w*H,u.push(E.x,E.y,E.z),d.push(0,C,0),b.x=H*.5+.5,b.y=K*.5*C+.5,f.push(b.x,b.y),g++}for(let F=0;F<n;F++){const G=T+F,N=I+F;y===!0?h.push(N,N+1,G):h.push(N+1,N,G),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Si extends ut{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Si(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rr extends wt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(s.slice(),3)),this.setAttribute("uv",new $e(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new L,y=new L,T=new L;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],y),f(t[b+2],T),l(A,y,T,M)}function l(M,A,y,T){const b=T+1,E=[];for(let _=0;_<=b;_++){E[_]=[];const w=M.clone().lerp(y,_/b),C=A.clone().lerp(y,_/b),I=b-_;for(let F=0;F<=I;F++)F===0&&_===b?E[_][F]=w:E[_][F]=w.clone().lerp(C,F/I)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){const C=Math.floor(w/2);w%2===0?(d(E[_][C+1]),d(E[_+1][C]),d(E[_][C])):(d(E[_][C+1]),d(E[_+1][C+1]),d(E[_+1][C]))}}function c(M){const A=new L;for(let y=0;y<s.length;y+=3)A.x=s[y+0],A.y=s[y+1],A.z=s[y+2],A.normalize().multiplyScalar(M),s[y+0]=A.x,s[y+1]=A.y,s[y+2]=A.z}function h(){const M=new L;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const y=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(y,1-T)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const A=a[M+0],y=a[M+2],T=a[M+4],b=Math.max(A,y,T),E=Math.min(A,y,T);b>.9&&E<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,A){const y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function g(){const M=new L,A=new L,y=new L,T=new L,b=new Ie,E=new Ie,_=new Ie;for(let w=0,C=0;w<s.length;w+=9,C+=6){M.set(s[w+0],s[w+1],s[w+2]),A.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),b.set(a[C+0],a[C+1]),E.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),T.copy(M).add(A).add(y).divideScalar(3);const I=m(T);v(b,C+0,M,I),v(E,C+2,A,I),v(_,C+4,y,I)}}function v(M,A,y,T){T<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.vertices,e.indices,e.radius,e.detail)}}class Ji extends rr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ji(e.radius,e.detail)}}class Gt extends rr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gt(e.radius,e.detail)}}class Sl extends rr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sl(e.radius,e.detail)}}class ar extends wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let A=0;A<c;A++){const y=A*u-s;g.push(y,-M,0),v.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,y=M+c*(p+1),T=M+1+c*(p+1),b=M+1+c*p;f.push(A,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends wt{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new L,g=new Ie;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const M=p+m,A=M,y=M+i+1,T=M+i+2,b=M+1;o.push(A,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tl extends wt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=n;p++){const M=p/n*s;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/n),u.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=n;m++){const p=(n+1)*v+m-1,M=(n+1)*(v-1)+m-1,A=(n+1)*(v-1)+m,y=(n+1)*v+m;l.push(p,M,y),l.push(M,A,y)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ra extends wt{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],u=new L,d=new L,f=new L,g=new L,v=new L,m=new L,p=new L;for(let A=0;A<=i;++A){const y=A/i*s*Math.PI*2;M(y,s,a,e,f),M(y+.01,s,a,e,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let T=0;T<=n;++T){const b=T/n*Math.PI*2,E=-t*Math.cos(b),_=t*Math.sin(b);u.x=f.x+(E*p.x+_*v.x),u.y=f.y+(E*p.y+_*v.y),u.z=f.z+(E*p.z+_*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(A/i),h.push(T/n)}}for(let A=1;A<=i;A++)for(let y=1;y<=n;y++){const T=(n+1)*(A-1)+(y-1),b=(n+1)*A+(y-1),E=(n+1)*A+y,_=(n+1)*(A-1)+y;o.push(T,b,_),o.push(b,E,_)}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2));function M(A,y,T,b,E){const _=Math.cos(A),w=Math.sin(A),C=T/y*A,I=Math.cos(C);E.x=b*(2+I)*.5*_,E.y=b*(2+I)*w*.5,E.z=b*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function ps(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];if(Dc(n))n.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Dc(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Zt(r){const e={};for(let t=0;t<r.length;t++){const i=ps(r[t]);for(const n in i)e[n]=i[n]}return e}function Dc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function su(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const uf={clone:ps,merge:Zt};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Me().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pf extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wl extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends wl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ru extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ua extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mf extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gf extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _n(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Kr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function _f(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Nc(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function xf(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class ms{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vf extends ms{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case jl:s=e,o=2*t-i;break;case Ql:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jl:a=e,l=2*i-t;break;case Ql:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let T=0;T!==o;++T)s[T]=p*a[h+T]+M*a[c+T]+A*a[l+T]+y*a[u+T];return s}}class yf extends ms{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Mf extends ms{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sf extends ms{interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(i-t)/(n-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*v+a[l+m]*g;return s}const d=o*2,f=e-1;for(let g=0;g!==o;++g){const v=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],A=u[p+1],y=e*d+g*2,T=h[y],b=h[y+1],E=Tf(i,t,M,T,n);s[g]=au(E,v,A,b,m)}return s}}function au(r,e,t,i,n){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function bf(r,e,t,i,n){const s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function Tf(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){const o=au(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;const l=bf(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class wi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_n(t,this.TimeBufferType),this.values=_n(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_n(e.times,Array),values:_n(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Kr(e.settings)&&(i.settings={inTangents:_n(e.settings.inTangents,Array),outTangents:_n(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Sf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break;case Zl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Kr(this.settings)&&(Uc(this.settings.inTangents,e),Uc(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&fd(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ma,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Kr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}}function Uc(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=$s;class gs extends wi{constructor(e,t,i){super(e,t,i)}}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ks;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends wi{constructor(e,t,i,n){super(e,t,i,n)}}ou.prototype.ValueTypeName="color";class ir extends wi{constructor(e,t,i,n){super(e,t,i,n)}}ir.prototype.ValueTypeName="number";class wf extends ms{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class nr extends wi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new wf(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends wi{constructor(e,t,i){super(e,t,i)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ks;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends wi{constructor(e,t,i,n){super(e,t,i,n)}}aa.prototype.ValueTypeName="vector";class Ef{constructor(e="",t=-1,i=[],n=td){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Rf(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(wi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=_f(l);l=Nc(l,1,h),c=Nc(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Af(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return aa;case"color":return ou;case"quaternion":return nr;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Rf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Af(r.type);if(r.times===void 0){const i=[],n=[];xf(r.keys,i,n,"value"),r.times=i,r.values=n}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Kr(r.settings)&&(t.settings={inTangents:_n(r.settings.inTangents,Float32Array),outTangents:_n(r.settings.outTangents,Float32Array)}),t}const ji={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Fc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Fc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Fc(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Cf{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lu=new Cf;class vn{constructor(e){this.manager=e!==void 0?e:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class Lf extends Error{constructor(e,t){super(e),this.response=t}}class da extends vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ji.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:i,onError:n});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ki[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:A,value:y})=>{if(A)p.close();else{v+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,E=h.length;b<E;b++){const _=h[b];_.onProgress&&_.onProgress(T)}p.enqueue(y),M()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Lf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ji.add(`file:${e}`,c);const h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const jn=new WeakMap;class Pf extends vn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ji.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=jn.get(a);u===void 0&&(u=[],jn.set(a,u)),u.push({onLoad:t,onError:n})}return a}const o=js("img");function l(){h(),t&&t(this);const u=jn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}jn.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),ji.remove(`image:${e}`);const d=jn.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}jn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ji.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class cu extends vn{constructor(e){super(e)}load(e,t,i,n){const s=new Ft,a=new Pf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class fa extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class If extends fa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ya=new Ve,Oc=new L,kc=new L;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ur=new L,Fr=new sn,Ri=new L;class hu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ur,Fr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ur,Fr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fn=new L,Bc=new Ie,zc=new Ie;class Jt extends hu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Df extends El{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=fs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Nf extends fa{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Df}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Uf extends El{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Pi extends fa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pa extends hu{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ff extends El{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ka=new WeakMap;class Of extends vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ji.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Ka.has(a)===!0?(n&&n(Ka.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ji.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Ka.set(l,c),ji.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ji.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qn=-90,es=1;class kf extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(Qn,es,e,t);n.layers=this.layers,this.add(n);const s=new Jt(Qn,es,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Qn,es,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Qn,es,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Qn,es,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Qn,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bf extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Al="\\[\\]\\.:\\/",zf=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",Gf="[^"+Al.replace("\\.","")+"]",Hf=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Vf=/(WCOD+)?/.source.replace("WCOD",Gf),Wf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),qf=new RegExp("^"+Hf+Vf+Wf+Xf+"$"),Yf=["material","materials","bones","map"];class Kf{constructor(e,t,i){const n=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zf,"")}static parseTrackName(e){const t=qf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Yf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Kf;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Gc=new Ve;class uu{constructor(e,t,i=0,n=1/0){this.ray=new sr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,i=[]){return jo(e,this,i,t),i.sort(Hc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)jo(e[n],this,i,t);return i.sort(Hc),i}}function Hc(r,e){return r.distance-e.distance}function jo(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)jo(s[a],e,t,!0)}}const Ul=class Ul{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};Ul.prototype.isMatrix2=!0;let Vc=Ul;function Wc(r,e,t,i){const n=$f(i);switch(t){case Wh:return r*e;case ll:return r*e/n.components*n.byteLength;case cl:return r*e/n.components*n.byteLength;case Dn:return r*e*2/n.components*n.byteLength;case hl:return r*e*2/n.components*n.byteLength;case Xh:return r*e*3/n.components*n.byteLength;case mi:return r*e*4/n.components*n.byteLength;case ul:return r*e*4/n.components*n.byteLength;case Vr:case Wr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xo:case yo:return Math.max(r,16)*Math.max(e,8)/4;case _o:case vo:return Math.max(r,8)*Math.max(e,8)/2;case Mo:case So:case To:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:case jr:case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Go:case Ho:case Vo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qr:case qo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $f(r){switch(r){case ai:case zh:return{byteLength:1,components:1};case qs:case Gh:case ki:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case Oi:case rl:case pi:return{byteLength:4,components:1};case Hh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function du(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zf(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
}`,Zp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,vg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jf,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:ip,aomap_fragment:np,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:vp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Np,fog_pars_vertex:Up,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:jp,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:nm,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:_m,normal_pars_vertex:xm,normal_vertex:vm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Tm,opaque_fragment:wm,packing:Em,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Lm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Nm,shadowmap_vertex:Um,shadowmask_pars_fragment:Fm,skinbase_vertex:Om,skinning_pars_vertex:km,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:$m,worldpos_vertex:Zm,background_vert:Jm,background_frag:jm,backgroundCube_vert:Qm,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ig,depth_vert:ng,depth_frag:sg,distance_vert:rg,distance_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:_g,meshnormal_frag:xg,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:Mg,meshphysical_frag:Sg,meshtoon_vert:bg,meshtoon_frag:Tg,points_vert:wg,points_frag:Eg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Lg},de={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Ii={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ii.physical={uniforms:Zt([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Or={r:0,b:0,g:0},Pg=new Ve,fu=new Be;fu.set(-1,0,0,0,1,0,0,0,1);function Ig(r,e,t,i,n,s){const a=new Me(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function g(M){let A=!1;const y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(M,A){const y=f(A);y&&(y.isCubeTexture||y.mapping===ha)?(c===void 0&&(c=new He(new oi(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ps(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fu),c.material.toneMapped=qe.getTransfer(y.colorSpace)!==lt,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new He(new ar(2,2),new zi({name:"BackgroundMaterial",uniforms:ps(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(Or,su(r)),t.buffers.color.setClear(Or.r,Or.g,Or.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Dg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(I,F,G,N,H){let K=!1;const $=u(I,N,G,F);s!==$&&(s=$,c(s.object)),K=f(I,N,G,H),K&&g(I,N,G,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(I,F,G,N),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function u(I,F,G,N){const H=N.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const $=I.isInstancedMesh===!0?I.id:0;let ne=K[$];ne===void 0&&(ne={},K[$]=ne);let X=ne[G.id];X===void 0&&(X={},ne[G.id]=X);let ee=X[H];return ee===void 0&&(ee=d(l()),X[H]=ee),ee}function d(I){const F=[],G=[],N=[];for(let H=0;H<t;H++)F[H]=0,G[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,F,G,N){const H=s.attributes,K=F.attributes;let $=0;const ne=G.getAttributes();for(const X in ne)if(ne[X].location>=0){const ie=H[X];let De=K[X];if(De===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(De=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(De=I.instanceColor)),ie===void 0||ie.attribute!==De||De&&ie.data!==De.data)return!0;$++}return s.attributesNum!==$||s.index!==N}function g(I,F,G,N){const H={},K=F.attributes;let $=0;const ne=G.getAttributes();for(const X in ne)if(ne[X].location>=0){let ie=K[X];ie===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const De={};De.attribute=ie,ie&&ie.data&&(De.data=ie.data),H[X]=De,$++}s.attributes=H,s.attributesNum=$,s.index=N}function v(){const I=s.newAttributes;for(let F=0,G=I.length;F<G;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const G=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;G[I]=1,N[I]===0&&(r.enableVertexAttribArray(I),N[I]=1),H[I]!==F&&(r.vertexAttribDivisor(I,F),H[I]=F)}function M(){const I=s.newAttributes,F=s.enabledAttributes;for(let G=0,N=F.length;G<N;G++)F[G]!==I[G]&&(r.disableVertexAttribArray(G),F[G]=0)}function A(I,F,G,N,H,K,$){$===!0?r.vertexAttribIPointer(I,F,G,H,K):r.vertexAttribPointer(I,F,G,N,H,K)}function y(I,F,G,N){v();const H=N.attributes,K=G.getAttributes(),$=F.defaultAttributeValues;for(const ne in K){const X=K[ne];if(X.location>=0){let ee=H[ne];if(ee===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const ie=ee.normalized,De=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const mt=Ce.buffer,et=Ce.type,st=Ce.bytesPerElement,q=et===r.INT||et===r.UNSIGNED_INT||ee.gpuType===rl;if(ee.isInterleavedBufferAttribute){const Q=ee.data,ye=Q.stride,ke=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,Q.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let xe=0;xe<X.locationSize;xe++)A(X.location+xe,De/X.locationSize,et,ie,ye*st,(ke+De/X.locationSize*xe)*st,q)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,ee.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Q=0;Q<X.locationSize;Q++)A(X.location+Q,De/X.locationSize,et,ie,De*st,De/X.locationSize*Q*st,q)}}else if($!==void 0){const ie=$[ne];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(X.location,ie);break;case 3:r.vertexAttrib3fv(X.location,ie);break;case 4:r.vertexAttrib4fv(X.location,ie);break;default:r.vertexAttrib1fv(X.location,ie)}}}}M()}function T(){w();for(const I in i){const F=i[I];for(const G in F){const N=F[G];for(const H in N){const K=N[H];for(const $ in K)h(K[$].object),delete K[$];delete N[H]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const G in F){const N=F[G];for(const H in N){const K=N[H];for(const $ in K)h(K[$].object),delete K[$];delete N[H]}}delete i[I.id]}function E(I){for(const F in i){const G=i[F];for(const N in G){const H=G[N];if(H[I.id]===void 0)continue;const K=H[I.id];for(const $ in K)h(K[$].object),delete K[$];delete H[I.id]}}}function _(I){for(const F in i){const G=i[F],N=I.isInstancedMesh===!0?I.id:0,H=G[N];if(H!==void 0){for(const K in H){const $=H[K];for(const ne in $)h($[ne].object),delete $[ne];delete H[K]}delete G[N],Object.keys(G).length===0&&delete i[F]}}}function w(){C(),a=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Ng(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ug(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==mi&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const _=E===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ai&&E!==pi&&!_&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:b}}function Fg(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new gn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:i,A=M*4;let y=p.clippingState||null;l.value=y,y=h(g,d,A,f);for(let T=0;T!==A;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==v;++A,y+=4)a.copy(u[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const os=4,Og=6,kg=20,Bg=256,Ls=new pa,Xc=new Me;let $a=null,Za=0,Ja=0,ja=!1;const zg=new L,wn=new L;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:a=256,position:o=zg}=s;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($a,Za,Ja),this._renderer.xr.enabled=ja,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pn||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:ki,format:mi,colorSpace:li,depthBuffer:!1},n=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gg(s)),this._blurMaterial=Vg(s,e,t),this._ggxMaterial=Hg(s,e,t)}return n}_compileMaterial(e){const t=new He(new wt,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,i,n,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Xc),u.toneMapping=Fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new oi,new Ht({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Xc),p=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const T=this._cubeSize;ts(n,y*T,A>2?T:0,T,T),u.setRenderTarget(n),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Pn||e.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ls)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-os?i-g+os:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ts(s,m,p,3*v,2*v),n.setRenderTarget(s),n.render(o,Ls),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ts(e,m,p,3*v,2*v),n.setRenderTarget(e),n.render(o,Ls)}_blur(e,t,i,n){const s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,n,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],u=3*h*(n>this._lodMax-os?n-this._lodMax+os:0),d=4*(this._cubeSize-h);ts(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Ls)}}function Gg(r){const e=[],t=[];let i=r;const n=r-os+1+Og;for(let s=0;s<n;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){const M=p%3*2/3-1,A=p>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(y,f*d*p);for(let T=0;T<d;T++){const b=h[T*2]*2-1,E=h[T*2+1]*2-1;p===0?wn.set(1,E,b):p===1?wn.set(-b,1,-E):p===2?wn.set(-b,E,1):p===3?wn.set(-1,E,-b):p===4?wn.set(-b,-1,E):wn.set(b,E,-1),wn.toArray(v,(p*d+T)*f)}}const m=new wt;m.setAttribute("position",new jt(g,f)),m.setAttribute("outputDirection",new jt(v,f)),t.push(new He(m,null)),i>os&&i--}return{lodMeshes:t,sizeLods:e}}function Yc(r,e,t){const i=new Ti(r,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Hg(r,e,t){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Vg(r,e,t){return new zi({name:"SphericalGaussianBlur",defines:{SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Kc(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $c(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pu extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new iu(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new oi(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Qi});s.uniforms.tEquirect.value=t;const a=new He(n,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Ut),new kf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}function Wg(r){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===va||f===ya)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new pu(g.height);return v.fromEquirectangularTexture(r,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===va||f===ya,v=f===Pn||f===ds;if(g||v){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new qc(r)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new qc(r)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===va?d.mapping=Pn:f===ya&&(d.mapping=ds),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Xg(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ls("WebGLRenderer: "+i+" extension not supported."),n}}}function qg(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let A=0,y=M.length;A<y;A+=3){const T=M[A+0],b=M[A+1],E=M[A+2];d.push(T,b,b,E,E,T)}}else{const M=g.array;v=g.version;for(let A=0,y=M.length/3-1;A<y;A+=3){const T=A+0,b=A+1,E=A+2;d.push(T,b,b,E,E,T)}}const m=new(g.count>=65535?jh:Jh)(d,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Yg(r,e,t){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function $g(r,e,t){const i=new WeakMap,n=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*T*4*u),E=new $h(b,y,T,u);E.type=pi,E.needsUpdate=!0;const _=A*4;for(let C=0;C<u;C++){const I=m[C],F=p[C],G=M[C],N=y*T*4*C;for(let H=0;H<I.count;H++){const K=H*_;f===!0&&(n.fromBufferAttribute(I,H),b[N+K+0]=n.x,b[N+K+1]=n.y,b[N+K+2]=n.z,b[N+K+3]=0),g===!0&&(n.fromBufferAttribute(F,H),b[N+K+4]=n.x,b[N+K+5]=n.y,b[N+K+6]=n.z,b[N+K+7]=0),v===!0&&(n.fromBufferAttribute(G,H),b[N+K+8]=n.x,b[N+K+9]=n.y,b[N+K+10]=n.z,b[N+K+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:E,size:new Ie(y,T)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Zg(r,e,t,i,n){let s=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Jg={[Ih]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[sl]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function jg(r,e,t,i,n,s){const a=new Ti(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new wt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));const h=new pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new He(c,h),d=new pa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,M=[],A=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<M.length;b++){const E=M[b];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;const T=a.width,b=a.height;M.length>0&&o===null&&(o=new Ti(T,b,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(T,b,{type:ki,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){const _=M[E];_.setSize&&_.setSize(T,b)}},this.begin=function(y,T){if(v||y.toneMapping===Fi&&M.length===0)return!1;if(p=T,T!==null){const b=T.width,E=T.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Fi,!0},this.hasRenderPass=function(){return A},this.end=function(y,T){y.toneMapping=m,v=!0;let b=a,E=o;for(let _=0;_<M.length;_++){const w=M[_];w.enabled!==!1&&(w.render(y,E,b,T),w.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},qe.getTransfer(f)===lt&&(h.defines.SRGB_TRANSFER="");const _=Jg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const mu=new Ft,Qo=new er(1,1),gu=new $h,_u=new Bd,xu=new iu,Zc=[],Jc=[],jc=new Float32Array(16),Qc=new Float32Array(9),eh=new Float32Array(4);function xs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Zc[n];if(s===void 0&&(s=new Float32Array(n),Zc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ga(r,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function n0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;eh.set(i),r.uniformMatrix2fv(this.addr,!1,eh),kt(t,i)}}function s0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Qc.set(i),r.uniformMatrix3fv(this.addr,!1,Qc),kt(t,i)}}function r0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;jc.set(i),r.uniformMatrix4fv(this.addr,!1,jc),kt(t,i)}}function a0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function o0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function p0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Qo.compareFunction=t.isReversedDepthBuffer()?fl:dl,s=Qo):s=mu,t.setTexture2D(e||s,n)}function m0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||_u,n)}function g0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||xu,n)}function _0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||gu,n)}function x0(r){switch(r){case 5126:return Qg;case 35664:return e0;case 35665:return t0;case 35666:return i0;case 35674:return n0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(r,e){r.uniform1fv(this.addr,e)}function y0(r,e){const t=xs(e,this.size,2);r.uniform2fv(this.addr,t)}function M0(r,e){const t=xs(e,this.size,3);r.uniform3fv(this.addr,t)}function S0(r,e){const t=xs(e,this.size,4);r.uniform4fv(this.addr,t)}function b0(r,e){const t=xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T0(r,e){const t=xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function w0(r,e){const t=xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function E0(r,e){r.uniform1iv(this.addr,e)}function A0(r,e){r.uniform2iv(this.addr,e)}function R0(r,e){r.uniform3iv(this.addr,e)}function C0(r,e){r.uniform4iv(this.addr,e)}function L0(r,e){r.uniform1uiv(this.addr,e)}function P0(r,e){r.uniform2uiv(this.addr,e)}function I0(r,e){r.uniform3uiv(this.addr,e)}function D0(r,e){r.uniform4uiv(this.addr,e)}function N0(r,e,t){const i=this.cache,n=e.length,s=ga(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Qo:a=mu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function U0(r,e,t){const i=this.cache,n=e.length,s=ga(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||_u,s[a])}function F0(r,e,t){const i=this.cache,n=e.length,s=ga(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||xu,s[a])}function O0(r,e,t){const i=this.cache,n=e.length,s=ga(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||gu,s[a])}function k0(r){switch(r){case 5126:return v0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return E0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return L0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class B0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function th(r,e){r.seq.push(e),r.map[e.id]=e}function H0(r,e,t){const i=r.name,n=i.length;for(Qa.lastIndex=0;;){const s=Qa.exec(i),a=Qa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){th(t,c===void 0?new B0(o,r,e):new z0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new G0(o),th(t,u)),t=u}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);H0(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function ih(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const V0=37297;let W0=0;function X0(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const nh=new Be;function q0(r){qe._getMatrix(nh,qe.workingColorSpace,r);const e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case ea:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function sh(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+X0(r.getShaderSource(e),o)}else return s}function Y0(r,e){const t=q0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const K0={[Ih]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[sl]:"ACESFilmic",[Fh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function $0(r,e){const t=K0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new L;function Z0(){qe.getLuminanceCoefficients(kr);const r=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function j0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q0(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ks(r){return r!==""}function rh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(r){return r.replace(e_,i_)}const t_=new Map;function i_(r,e){let t=Xe[e];if(t===void 0){const i=t_.get(e);if(i!==void 0)t=Xe[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return el(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(r){return r.replace(n_,s_)}function s_(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function lh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r_={[Gr]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function a_(r){return r_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o_={[Pn]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function l_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":o_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const c_={[ds]:"ENVMAP_MODE_REFRACTION"};function h_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u_={[ca]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function d_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":u_[r.combine]||"ENVMAP_BLENDING_NONE"}function f_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p_(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=a_(t),c=l_(t),h=h_(t),u=d_(t),d=f_(t),f=J0(t),g=j0(s),v=n.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),Z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=el(a),a=rh(a,t),a=ah(a,t),o=el(o),o=rh(o,t),o=ah(o,t),a=oh(a),o=oh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+m+a,y=M+p+o,T=ih(n,n.VERTEX_SHADER,A),b=ih(n,n.FRAGMENT_SHADER,y);n.attachShader(v,T),n.attachShader(v,b),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(I){if(r.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",G=n.getShaderInfoLog(T)||"",N=n.getShaderInfoLog(b)||"",H=F.trim(),K=G.trim(),$=N.trim();let ne=!0,X=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,T,b);else{const ee=sh(n,T,"vertex"),ie=sh(n,b,"fragment");Fe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ee+`
`+ie)}else H!==""?Re("WebGLProgram: Program Info Log:",H):(K===""||$==="")&&(X=!1);X&&(I.diagnostics={runnable:ne,programLog:H,vertexShader:{log:K,prefix:m},fragmentShader:{log:$,prefix:p}})}n.deleteShader(T),n.deleteShader(b),_=new $r(n,v),w=Q0(n,v)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(v,V0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new __(e),t.set(e,i)),i}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function x_(r){return r===Dn||r===jr||r===Qr}function v_(r,e,t,i,n,s){const a=new gl,o=new g_,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,w,C,I,F,G){const N=I.fog,H=F.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||K,$),X=ne&&ne.mapping===ha?ne.image.height:null,ee=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,De=ie!==void 0?ie.length:0;let Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let mt,et,st,q;if(ee){const _t=Ii[ee];mt=_t.vertexShader,et=_t.fragmentShader}else{mt=_.vertexShader,et=_.fragmentShader;const _t=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,_t,rt),st=_t.id,q=rt.id}const Q=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Ye=!!_.map,Dt=!!_.matcap,Ze=!!ne,it=!!_.aoMap,gt=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,bt=!!_.normalMap,Bt=!!_.displacementMap,ei=!!_.emissiveMap,Et=!!_.metalnessMap,Ct=!!_.roughnessMap,U=_.anisotropy>0,Vt=_.clearcoat>0,ot=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,z=_.transmission>0,W=U&&!!_.anisotropyMap,re=Vt&&!!_.clearcoatMap,ae=Vt&&!!_.clearcoatNormalMap,Y=Vt&&!!_.clearcoatRoughnessMap,J=x&&!!_.iridescenceMap,oe=x&&!!_.iridescenceThicknessMap,Ee=O&&!!_.sheenColorMap,ue=O&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ae=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Ge=z&&!!_.transmissionMap,D=z&&!!_.thicknessMap,ce=!!_.gradientMap,Z=!!_.alphaMap,he=_.alphaTest>0,ge=!!_.alphaHash,te=!!_.extensions;let Le=Fi;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=r.toneMapping);const Te={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:et,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:Dt,envMap:Ze,envMapMode:Ze&&ne.mapping,envMapCubeUVHeight:X,aoMap:it,lightMap:gt,bumpMap:Qe,normalMap:bt,displacementMap:Bt,emissiveMap:ei,normalMapObjectSpace:bt&&_.normalMapType===sd,normalMapTangentSpace:bt&&_.normalMapType===Zs,packedNormalMap:bt&&_.normalMapType===Zs&&x_(_.normalMap.format),metalnessMap:Et,roughnessMap:Ct,anisotropy:U,anisotropyMap:W,clearcoat:Vt,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:Y,dispersion:ot,retroreflection:R,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ae,specularIntensityMap:Ue,transmission:z,transmissionMap:Ge,thicknessMap:D,gradientMap:ce,opaque:_.transparent===!1&&_.blending===zs&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:ge,combine:_.combine,mapUv:Ye&&g(_.map.channel),aoMapUv:it&&g(_.aoMap.channel),lightMapUv:gt&&g(_.lightMap.channel),bumpMapUv:Qe&&g(_.bumpMap.channel),normalMapUv:bt&&g(_.normalMap.channel),displacementMapUv:Bt&&g(_.displacementMap.channel),emissiveMapUv:ei&&g(_.emissiveMap.channel),metalnessMapUv:Et&&g(_.metalnessMap.channel),roughnessMapUv:Ct&&g(_.roughnessMap.channel),anisotropyMapUv:W&&g(_.anisotropyMap.channel),clearcoatMapUv:re&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(_.sheenRoughnessMap.channel),specularMapUv:le&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:Ue&&g(_.specularIntensityMap.channel),transmissionMapUv:Ge&&g(_.transmissionMap.channel),thicknessMapUv:D&&g(_.thicknessMap.channel),alphaMapUv:Z&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||U),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ye||Z),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:ei&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ti,flipSided:_.side===ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),M(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){const w=f[_.type];let C;if(w){const I=Ii[w];C=uf.clone(I.uniforms)}else C=_.uniforms;return C}function y(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new p_(r,w,_,n),c.push(C),h.set(w,C)),C}function T(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:E}}function y_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function M_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hh(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let M=r[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},r[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);const A=o(d,f,g,v,m,p);g.transmission>0?i.push(A):g.transparent===!0?n.push(A):t.push(A)}function c(d,f,g,v,m,p){const M=o(d,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?n.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||M_),i.length>1&&i.sort(f||ch),n.length>1&&n.sort(f||ch)}function u(){for(let d=e,f=r.length;d<f;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function S_(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new hh,r.set(i,[a])):n>=s.length?(a=new hh,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function b_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function T_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let w_=0;function E_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function A_(r){const e=new b_,t=T_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,s=new Ve,a=new Ve;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,A=0,y=0,T=0,b=0,E=0,_=0,w=0,C=0;c.sort(E_);for(let F=0,G=c.length;F<G;F++){const N=c[F],H=N.color,K=N.intensity,$=N.distance;let ne=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Dn?ne=N.shadow.map.texture:ne=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=H.r*K,u+=H.g*K,d+=H.b*K;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],K);C++}else if(N.isSunLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ie=t.get(N);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=ie,i.sunShadowMap[g]=ne;const De=ee.getViewportCount();for(let Ce=0;Ce<De;Ce++)i.sunShadowMatrix[v+Ce]=ee.getMatrix(Ce),i.sunShadowCascade[v+Ce]=ee._cascadeData[Ce];v+=De,g++}i.sun[f]=X,f++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ie=t.get(N);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=N.shadow.matrix,T++}i.directional[m]=X,m++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(H).multiplyScalar(K),X.distance=$,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[M]=X;const ee=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,ee.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[M]=ee.matrix,N.castShadow){const ie=t.get(N);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.spotShadow[M]=ie,i.spotShadowMap[M]=ne,E++}M++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(H).multiplyScalar(K),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[A]=X,A++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const ee=N.shadow,ie=t.get(N);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=X,p++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(K),X.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[y]=X,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==A||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==b||I.numSpotShadows!==E||I.numSpotMaps!==_||I.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=A,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=b,I.numSpotShadows=E,I.numSpotMaps=_,I.numLightProbes=C,i.version=w_++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const y=c[M];if(y.isSunLight){const T=i.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),u++}else if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function uh(r){const e=new A_(r),t=[],i=[],n=[];function s(d){u.camera=d,t.length=0,i.length=0,n.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function R_(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new uh(r),e.set(n,[o])):s>=a.length?(o=new uh(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`,P_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],I_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],dh=new Ve,Ps=new L,eo=new L;function D_(r,e,t){let i=new yl;const n=new Ie,s=new Ie,a=new ft,o=new mf,l=new gf,c={},h=t.maxTextureSize,u={[tn]:ii,[ii]:tn,[ti]:ti},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:C_,fragmentShader:L_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(b,E,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ch&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const w=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=p!==this.type;G&&E.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=b.length;N<H;N++){const K=b[N],$=K.shadow;if($===void 0){Re("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const ne=$.getFrameExtents();n.multiply(ne),s.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ne.x),n.x=s.x*ne.x,$.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ne.y),n.y=s.y*ne.y,$.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=X,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Fs){if(K.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ti(n.x,n.y,{format:Dn,type:ki,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new er(n.x,n.y,pi),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=nn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt}else K.isPointLight?($.map=new pu(n.x),$.map.depthTexture=new cf(n.x,Oi)):($.map=new Ti(n.x,n.y),$.map.depthTexture=new er(n.x,n.y,Oi)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=nn,this.type===Gr?($.map.depthTexture.compareFunction=X?fl:dl,$.map.depthTexture.minFilter=Ut,$.map.depthTexture.magFilter=Ut):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==n.x||$.map.height!==n.y)&&$.map.setSize(n.x,n.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,_);for(let ie=0;ie<ee;ie++){const De=$.getCamera(ie);if(K.isPointLight){const Ce=$.camera,mt=$.matrix,et=K.distance||Ce.far;et!==Ce.far&&(Ce.far=et,Ce.updateProjectionMatrix()),Ps.setFromMatrixPosition(K.matrixWorld),Ce.position.copy(Ps),eo.copy(Ce.position),eo.add(P_[ie]),Ce.up.copy(I_[ie]),Ce.lookAt(eo),Ce.updateMatrixWorld(),mt.makeTranslation(-Ps.x,-Ps.y,-Ps.z),dh.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),$._frustum.setFromProjectionMatrix(dh,Ce.coordinateSystem,Ce.reversedDepth)}if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,ie),r.clear();else{ie===0&&(r.setRenderTarget($.map),r.clear());const Ce=$.getViewport(ie);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),F.viewport(a)}i=$.getFrustum(ie),y(E,_,De,K,this.type)}$.isPointLightShadow!==!0&&this.type===Fs&&M($,_),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,C,I)};function M(b,E){const _=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ti(n.x,n.y,{format:Dn,type:ki}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,_,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,_,f,v,null)}function A(b,E,_,w){let C=null;const I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=C.uuid,G=E.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let H=N[G];H===void 0&&(H=C.clone(),N[G]=H,E.addEventListener("dispose",T)),C=H}if(C.visible=E.visible,C.wireframe=E.wireframe,w===Fs?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=r.properties.get(C);F.light=_}return C}function y(b,E,_,w,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Fs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const G=e.update(b),N=b.material;if(Array.isArray(N)){const H=G.groups;for(let K=0,$=H.length;K<$;K++){const ne=H[K],X=N[ne.materialIndex];if(X&&X.visible){const ee=A(b,X,w,C);b.onBeforeShadow(r,b,E,_,G,ee,ne),r.renderBufferDirect(_,null,G,ee,b,ne),b.onAfterShadow(r,b,E,_,G,ee,ne)}}}else if(N.visible){const H=A(b,N,w,C);b.onBeforeShadow(r,b,E,_,G,H,null),r.renderBufferDirect(_,null,G,H,b,null),b.onAfterShadow(r,b,E,_,G,H,null)}}const F=b.children;for(let G=0,N=F.length;G<N;G++)y(F[G],E,_,w,C)}function T(b){b.target.removeEventListener("dispose",T);for(const _ in c){const w=c[_],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function N_(r,e){function t(){let D=!1;const ce=new ft;let Z=null;const he=new ft(0,0,0,0);return{setMask:function(ge){Z!==ge&&!D&&(r.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){D=ge},setClear:function(ge,te,Le,Te,_t){_t===!0&&(ge*=Te,te*=Te,Le*=Te),ce.set(ge,te,Le,Te),he.equals(ce)===!1&&(r.clearColor(ge,te,Le,Te),he.copy(ce))},reset:function(){D=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,Z=null,he=null,ge=null;return{setReversed:function(te){if(ce!==te){const Le=e.get("EXT_clip_control");te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Te=ge;ge=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(te){te?Q(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(te){Z!==te&&!D&&(r.depthMask(te),Z=te)},setFunc:function(te){if(ce&&(te=gd[te]),he!==te){switch(te){case co:r.depthFunc(r.NEVER);break;case ho:r.depthFunc(r.ALWAYS);break;case uo:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case fo:r.depthFunc(r.EQUAL);break;case po:r.depthFunc(r.GEQUAL);break;case mo:r.depthFunc(r.GREATER);break;case go:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=te}},setLocked:function(te){D=te},setClear:function(te){ge!==te&&(ge=te,ce&&(te=1-te),r.clearDepth(te))},reset:function(){D=!1,Z=null,he=null,ge=null,ce=!1}}}function n(){let D=!1,ce=null,Z=null,he=null,ge=null,te=null,Le=null,Te=null,_t=null;return{setTest:function(rt){D||(rt?Q(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!D&&(r.stencilMask(rt),ce=rt)},setFunc:function(rt,gi,Ei){(Z!==rt||he!==gi||ge!==Ei)&&(r.stencilFunc(rt,gi,Ei),Z=rt,he=gi,ge=Ei)},setOp:function(rt,gi,Ei){(te!==rt||Le!==gi||Te!==Ei)&&(r.stencilOp(rt,gi,Ei),te=rt,Le=gi,Te=Ei)},setLocked:function(rt){D=rt},setClear:function(rt){_t!==rt&&(r.clearStencil(rt),_t=rt)},reset:function(){D=!1,ce=null,Z=null,he=null,ge=null,te=null,Le=null,Te=null,_t=null}}}const s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,y=null,T=null,b=null,E=null,_=new Me(0,0,0),w=0,C=!1,I=null,F=null,G=null,N=null,H=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=ne>=2);let ee=null,ie={};const De=r.getParameter(r.SCISSOR_BOX),Ce=r.getParameter(r.VIEWPORT),mt=new ft().fromArray(De),et=new ft().fromArray(Ce);function st(D,ce,Z,he){const ge=new Uint8Array(4),te=r.createTexture();r.bindTexture(D,te),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<Z;Le++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(ce+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return te}const q={};q[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(r.DEPTH_TEST),a.setFunc(Xs),Qe(!1),bt(ql),Q(r.CULL_FACE),it(Qi);function Q(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function ke(D,ce){return d[D]!==ce?(r.bindFramebuffer(D,ce),d[D]=ce,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(D,ce){let Z=g,he=!1;if(D){Z=f.get(ce),Z===void 0&&(Z=[],f.set(ce,Z));const ge=D.textures;if(Z.length!==ge.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Le=ge.length;te<Le;te++)Z[te]=r.COLOR_ATTACHMENT0+te;Z.length=ge.length,he=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,he=!0);he&&r.drawBuffers(Z)}function Ye(D){return v!==D?(r.useProgram(D),v=D,!0):!1}const Dt={[ss]:r.FUNC_ADD,[Uu]:r.FUNC_SUBTRACT,[Fu]:r.FUNC_REVERSE_SUBTRACT};Dt[Ou]=r.MIN,Dt[ku]=r.MAX;const Ze={[Bu]:r.ZERO,[zu]:r.ONE,[Gu]:r.SRC_COLOR,[Lh]:r.SRC_ALPHA,[Yu]:r.SRC_ALPHA_SATURATE,[Xu]:r.DST_COLOR,[Vu]:r.DST_ALPHA,[Hu]:r.ONE_MINUS_SRC_COLOR,[Ph]:r.ONE_MINUS_SRC_ALPHA,[qu]:r.ONE_MINUS_DST_COLOR,[Wu]:r.ONE_MINUS_DST_ALPHA,[Ku]:r.CONSTANT_COLOR,[$u]:r.ONE_MINUS_CONSTANT_COLOR,[Zu]:r.CONSTANT_ALPHA,[Ju]:r.ONE_MINUS_CONSTANT_ALPHA};function it(D,ce,Z,he,ge,te,Le,Te,_t,rt){if(D===Qi){m===!0&&(ye(r.BLEND),m=!1);return}if(m===!1&&(Q(r.BLEND),m=!0),D!==Nu){if(D!==p||rt!==C){if((M!==ss||T!==ss)&&(r.blendEquation(r.FUNC_ADD),M=ss,T=ss),rt)switch(D){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ws:r.blendFunc(r.ONE,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Fe("WebGLState: Invalid blending: ",D);break}else switch(D){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Yl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",D);break}A=null,y=null,b=null,E=null,_.set(0,0,0),w=0,p=D,C=rt}return}ge=ge||ce,te=te||Z,Le=Le||he,(ce!==M||ge!==T)&&(r.blendEquationSeparate(Dt[ce],Dt[ge]),M=ce,T=ge),(Z!==A||he!==y||te!==b||Le!==E)&&(r.blendFuncSeparate(Ze[Z],Ze[he],Ze[te],Ze[Le]),A=Z,y=he,b=te,E=Le),(Te.equals(_)===!1||_t!==w)&&(r.blendColor(Te.r,Te.g,Te.b,_t),_.copy(Te),w=_t),p=D,C=!1}function gt(D,ce){D.side===ti?ye(r.CULL_FACE):Q(r.CULL_FACE);let Z=D.side===ii;ce&&(Z=!Z),Qe(Z),D.blending===zs&&D.transparent===!1?it(Qi):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ei(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function bt(D){D!==Iu?(Q(r.CULL_FACE),D!==F&&(D===ql?r.cullFace(r.BACK):D===Du?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),F=D}function Bt(D){D!==G&&($&&r.lineWidth(D),G=D)}function ei(D,ce,Z){D?(Q(r.POLYGON_OFFSET_FILL),(N!==ce||H!==Z)&&(N=ce,H=Z,a.getReversed()&&(ce=-ce),r.polygonOffset(ce,Z))):ye(r.POLYGON_OFFSET_FILL)}function Et(D){D?Q(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Ct(D){D===void 0&&(D=r.TEXTURE0+K-1),ee!==D&&(r.activeTexture(D),ee=D)}function U(D,ce,Z){Z===void 0&&(ee===null?Z=r.TEXTURE0+K-1:Z=ee);let he=ie[Z];he===void 0&&(he={type:void 0,texture:void 0},ie[Z]=he),(he.type!==D||he.texture!==ce)&&(ee!==Z&&(r.activeTexture(Z),ee=Z),r.bindTexture(D,ce||q[D]),he.type=D,he.texture=ce)}function Vt(){const D=ie[ee];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ot(){try{r.compressedTexImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function x(){try{r.texSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function O(){try{r.texSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function z(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function W(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function re(){try{r.texStorage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function ae(){try{r.texStorage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Y(){try{r.texImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function J(){try{r.texImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function oe(D){return u[D]!==void 0?u[D]:r.getParameter(D)}function Ee(D,ce){u[D]!==ce&&(r.pixelStorei(D,ce),u[D]=ce)}function ue(D){mt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function le(D){et.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function Ae(D,ce){let Z=c.get(ce);Z===void 0&&(Z=new WeakMap,c.set(ce,Z));let he=Z.get(D);he===void 0&&(he=r.getUniformBlockIndex(ce,D.name),Z.set(D,he))}function Ue(D,ce){const he=c.get(ce).get(D);l.get(ce)!==he&&(r.uniformBlockBinding(ce,he,D.__bindingPointIndex),l.set(ce,he))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ie={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,y=null,T=null,b=null,E=null,_=new Me(0,0,0),w=0,C=!1,I=null,F=null,G=null,N=null,H=null,mt.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:ye,bindFramebuffer:ke,drawBuffers:xe,useProgram:Ye,setBlending:it,setMaterial:gt,setFlipSided:Qe,setCullFace:bt,setLineWidth:Bt,setPolygonOffset:ei,setScissorTest:Et,activeTexture:Ct,bindTexture:U,unbindTexture:Vt,compressedTexImage2D:ot,compressedTexImage3D:R,texImage2D:Y,texImage3D:J,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:re,texStorage3D:ae,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ue,viewport:le,reset:Ge}}function U_(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return g?new OffscreenCanvas(R,x):js("canvas")}function m(R,x,O){let z=1;const W=ot(R);if((W.width>O||W.height>O)&&(z=O/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(z*W.width),ae=Math.floor(z*W.height);d===void 0&&(d=v(re,ae));const Y=x?v(re,ae):d;return Y.width=re,Y.height=ae,Y.getContext("2d").drawImage(R,0,0,re,ae),Re("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+re+"x"+ae+")."),Y}else return"data"in R&&Re("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,x,O,z,W,re=!1){if(R!==null){if(r[R]!==void 0)return r[R];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;z&&(ae=e.get("EXT_texture_norm16"),ae||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8),O===r.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),O===r.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),x===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8),O===r.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),O===r.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),O===r.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),x===r.RGBA){const J=re?ea:qe.getTransfer(W);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=J===lt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),O===r.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(R,x){let O;return R?x===null||x===Oi||x===Ys?O=r.DEPTH24_STENCIL8:x===pi?O=r.DEPTH32F_STENCIL8:x===qs&&(O=r.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===Ys?O=r.DEPTH_COMPONENT24:x===pi?O=r.DEPTH_COMPONENT32F:x===qs&&(O=r.DEPTH_COMPONENT16),O}function b(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){const x=R.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(R){const x=R.target;x.removeEventListener("dispose",_),I(x)}function w(R){const x=i.get(R);if(x.__webglInit===void 0)return;const O=R.source,z=f.get(O);if(z){const W=z[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(R),Object.keys(z).length===0&&f.delete(O)}i.remove(R)}function C(R){const x=i.get(R);r.deleteTexture(x.__webglTexture);const O=R.source,z=f.get(O);delete z[x.__cacheKey],a.memory.textures--}function I(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let W=0;W<x.__webglFramebuffer[z].length;W++)r.deleteFramebuffer(x.__webglFramebuffer[z][W]);else r.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)r.deleteFramebuffer(x.__webglFramebuffer[z]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=R.textures;for(let z=0,W=O.length;z<W;z++){const re=i.get(O[z]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(O[z])}i.remove(R)}let F=0;function G(){F=0}function N(){return F}function H(R){F=R}function K(){const R=F;return R>=n.maxTextures&&Re("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),F+=1,R}function $(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ne(R,x){const O=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const z=R.image;if(z===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,R,x);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function X(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ye(O,R,x);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function ee(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ye(O,R,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function ie(R,x){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){ke(O,R,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const De={[In]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[Jr]:r.MIRRORED_REPEAT},Ce={[Nt]:r.NEAREST,[Bh]:r.NEAREST_MIPMAP_NEAREST,[Os]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Hr]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},mt={[ad]:r.NEVER,[ud]:r.ALWAYS,[od]:r.LESS,[dl]:r.LEQUAL,[ld]:r.EQUAL,[fl]:r.GEQUAL,[cd]:r.GREATER,[hd]:r.NOTEQUAL};function et(R,x){if(x.type===pi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===Hr||x.magFilter===Os||x.magFilter===Zi||x.minFilter===Ut||x.minFilter===Hr||x.minFilter===Os||x.minFilter===Zi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,De[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,De[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,De[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Ce[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,mt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Os&&x.minFilter!==Zi||x.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(R,x){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));const z=x.source;let W=f.get(z);W===void 0&&(W={},f.set(z,W));const re=$(x);if(re!==R.__cacheKey){W[re]===void 0&&(W[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),W[re].usedTimes++;const ae=W[R.__cacheKey];ae!==void 0&&(W[R.__cacheKey].usedTimes--,ae.usedTimes===0&&C(x)),R.__cacheKey=re,R.__webglTexture=W[re].texture}return O}function q(R,x,O){return Math.floor(Math.floor(R/O)/x)}function Q(R,x,O,z){const re=R.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,z,x.data);else{re.sort((Ee,ue)=>Ee.start-ue.start);let ae=0;for(let Ee=1;Ee<re.length;Ee++){const ue=re[ae],le=re[Ee],Ae=ue.start+ue.count,Ue=q(le.start,x.width,4),Ge=q(ue.start,x.width,4);le.start<=Ae+1&&Ue===Ge&&q(le.start+le.count-1,x.width,4)===Ue?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++ae,re[ae]=le)}re.length=ae+1;const Y=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),oe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,ue=re.length;Ee<ue;Ee++){const le=re[Ee],Ae=Math.floor(le.start/4),Ue=Math.ceil(le.count/4),Ge=Ae%x.width,D=Math.floor(Ae/x.width),ce=Ue,Z=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ge,D,ce,Z,O,z,x.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function ye(R,x,O){let z=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=r.TEXTURE_3D);const W=st(R,x),re=x.source;t.bindTexture(z,R.__webglTexture,r.TEXTURE0+O);const ae=i.get(re);if(re.version!==ae.__version||W===!0){if(t.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Z=qe.getPrimaries(qe.workingColorSpace),he=x.colorSpace===xn?null:qe.getPrimaries(x.colorSpace),ge=x.colorSpace===xn||Z===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,n.maxTextureSize);J=Vt(x,J);const oe=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type);let ue=y(x.internalFormat,oe,Ee,x.normalized,x.colorSpace,x.isVideoTexture);et(z,x);let le;const Ae=x.mipmaps,Ue=x.isVideoTexture!==!0,Ge=ae.__version===void 0||W===!0,D=re.dataReady,ce=b(x,J);if(x.isDepthTexture)ue=T(x.format===Ln,x.type),Ge&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,ue,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,ue,J.width,J.height,0,oe,Ee,null));else if(x.isDataTexture)if(Ae.length>0){Ue&&Ge&&t.texStorage2D(r.TEXTURE_2D,ce,ue,Ae[0].width,Ae[0].height);for(let Z=0,he=Ae.length;Z<he;Z++)le=Ae[Z],Ue?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(r.TEXTURE_2D,Z,ue,le.width,le.height,0,oe,Ee,le.data);x.generateMipmaps=!1}else Ue?(Ge&&t.texStorage2D(r.TEXTURE_2D,ce,ue,J.width,J.height),D&&Q(x,J,oe,Ee)):t.texImage2D(r.TEXTURE_2D,0,ue,J.width,J.height,0,oe,Ee,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,ue,Ae[0].width,Ae[0].height,J.depth);for(let Z=0,he=Ae.length;Z<he;Z++)if(le=Ae[Z],x.format!==mi)if(oe!==null)if(Ue){if(D)if(x.layerUpdates.size>0){const ge=Wc(le.width,le.height,x.format,x.type);for(const te of x.layerUpdates){const Le=le.data.subarray(te*ge/le.data.BYTES_PER_ELEMENT,(te+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,te,le.width,le.height,1,oe,Le)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,oe,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,ue,le.width,le.height,J.depth,0,le.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,oe,Ee,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,ue,le.width,le.height,J.depth,0,oe,Ee,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&Ge&&t.texStorage2D(r.TEXTURE_2D,ce,ue,Ae[0].width,Ae[0].height);for(let Z=0,he=Ae.length;Z<he;Z++)le=Ae[Z],x.format!==mi?oe!==null?Ue?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,ue,le.width,le.height,0,le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(r.TEXTURE_2D,Z,ue,le.width,le.height,0,oe,Ee,le.data)}else if(x.isDataArrayTexture)if(Ue){if(Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,ue,J.width,J.height,J.depth),D)if(x.layerUpdates.size>0){const Z=Wc(J.width,J.height,x.format,x.type);for(const he of x.layerUpdates){const ge=J.data.subarray(he*Z/J.data.BYTES_PER_ELEMENT,(he+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,oe,Ee,ge)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ee,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,oe,Ee,J.data);else if(x.isData3DTexture)Ue?(Ge&&t.texStorage3D(r.TEXTURE_3D,ce,ue,J.width,J.height,J.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ee,J.data)):t.texImage3D(r.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,oe,Ee,J.data);else if(x.isFramebufferTexture){if(Ge)if(Ue)t.texStorage2D(r.TEXTURE_2D,ce,ue,J.width,J.height);else{let Z=J.width,he=J.height;for(let ge=0;ge<ce;ge++)t.texImage2D(r.TEXTURE_2D,ge,ue,Z,he,0,oe,Ee,null),Z>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),u.add(x),Z.onpaint=he=>{const ge=he.changedElements;for(const te of u)ge.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{const ge=r.RGBA,te=r.RGBA,Le=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,te,Le,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ue&&Ge){const Z=ot(Ae[0]);t.texStorage2D(r.TEXTURE_2D,ce,ue,Z.width,Z.height)}for(let Z=0,he=Ae.length;Z<he;Z++)le=Ae[Z],Ue?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,oe,Ee,le):t.texImage2D(r.TEXTURE_2D,Z,ue,oe,Ee,le);x.generateMipmaps=!1}else if(Ue){if(Ge){const Z=ot(J);t.texStorage2D(r.TEXTURE_2D,ce,ue,Z.width,Z.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ee,J)}else t.texImage2D(r.TEXTURE_2D,0,ue,oe,Ee,J);p(x)&&M(z),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ke(R,x,O){if(x.image.length!==6)return;const z=st(R,x),W=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const re=i.get(W);if(W.version!==re.__version||z===!0){t.activeTexture(r.TEXTURE0+O);const ae=qe.getPrimaries(qe.workingColorSpace),Y=x.colorSpace===xn?null:qe.getPrimaries(x.colorSpace),J=x.colorSpace===xn||ae===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!oe&&!Ee?ue[te]=m(x.image[te],!0,n.maxCubemapSize):ue[te]=Ee?x.image[te].image:x.image[te],ue[te]=Vt(x,ue[te]);const le=ue[0],Ae=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type),Ge=y(x.internalFormat,Ae,Ue,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ce=re.__version===void 0||z===!0,Z=W.dataReady;let he=b(x,le);et(r.TEXTURE_CUBE_MAP,x);let ge;if(oe){D&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ge,le.width,le.height);for(let te=0;te<6;te++){ge=ue[te].mipmaps;for(let Le=0;Le<ge.length;Le++){const Te=ge[Le];x.format!==mi?Ae!==null?D?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,Ge,Te.width,Te.height,0,Te.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Te.width,Te.height,Ae,Ue,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,Ge,Te.width,Te.height,0,Ae,Ue,Te.data)}}}else{if(ge=x.mipmaps,D&&ce){ge.length>0&&he++;const te=ot(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ae,Ue,ue[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,ue[te].width,ue[te].height,0,Ae,Ue,ue[te].data);for(let Le=0;Le<ge.length;Le++){const _t=ge[Le].image[te].image;D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,_t.width,_t.height,Ae,Ue,_t.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,Ge,_t.width,_t.height,0,Ae,Ue,_t.data)}}else{D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,Ue,ue[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Ae,Ue,ue[te]);for(let Le=0;Le<ge.length;Le++){const Te=ge[Le];D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,Ae,Ue,Te.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,Ge,Ae,Ue,Te.image[te])}}}p(x)&&M(r.TEXTURE_CUBE_MAP),re.__version=W.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function xe(R,x,O,z,W,re){const ae=s.convert(O.format,O.colorSpace),Y=s.convert(O.type),J=y(O.internalFormat,ae,Y,O.normalized,O.colorSpace),oe=i.get(x),Ee=i.get(O);if(Ee.__renderTarget=x,!oe.__hasExternalTextures){const ue=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,re,J,ue,le,x.depth,0,ae,Y,null):t.texImage2D(W,re,J,ue,le,0,ae,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ct(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,W,Ee.__webglTexture,0,Et(x)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,W,Ee.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(R,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const z=x.depthTexture,W=z&&z.isDepthTexture?z.type:null,re=T(x.stencilBuffer,W),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ct(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(x),re,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(x),re,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,re,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,R)}else{const z=x.textures;for(let W=0;W<z.length;W++){const re=z[W],ae=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),J=y(re.internalFormat,ae,Y,re.normalized,re.colorSpace);Ct(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(x),J,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(x),J,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,J,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(R,x,O){const z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(x.depthTexture);if(W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),et(r.TEXTURE_CUBE_MAP,x.depthTexture);const oe=s.convert(x.depthTexture.format),Ee=s.convert(x.depthTexture.type);let ue;x.depthTexture.format===nn?ue=r.DEPTH_COMPONENT24:x.depthTexture.format===Ln&&(ue=r.DEPTH24_STENCIL8);for(let le=0;le<6;le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,oe,Ee,null)}}else ne(x.depthTexture,0);const re=W.__webglTexture,ae=Et(x),Y=z?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,J=x.depthTexture.format===Ln?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===nn)Ct(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,re,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,re,0);else if(x.depthTexture.format===Ln)Ct(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,re,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(R){const x=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const z=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){const W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=z}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Dt(x.__webglFramebuffer[z],R,z);else{const z=R.texture.mipmaps;z&&z.length>0?Dt(x.__webglFramebuffer[0],R,0):Dt(x.__webglFramebuffer,R,0)}else if(O){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=r.createRenderbuffer(),Ye(x.__webglDepthbuffer[z],R,!1);else{const W=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[z];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,re)}}else{const z=R.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ye(x.__webglDepthbuffer,R,!1);else{const W=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(R,x,O){const z=i.get(R);x!==void 0&&xe(z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ze(R)}function gt(R){const x=R.texture,O=i.get(R),z=i.get(x);R.addEventListener("dispose",_);const W=R.textures,re=R.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=x.version,a.memory.textures++),re){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=r.createFramebuffer()}else O.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ae)for(let Y=0,J=W.length;Y<J;Y++){const oe=i.get(W[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ct(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){const J=W[Y];O.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const oe=s.convert(J.format,J.colorSpace),Ee=s.convert(J.type),ue=y(J.internalFormat,oe,Ee,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),le=Et(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,le,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),et(r.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)xe(O.__webglFramebuffer[Y][J],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else xe(O.__webglFramebuffer[Y],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Y=0,J=W.length;Y<J;Y++){const oe=W[Y],Ee=i.get(oe);let ue=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),et(ue,oe),xe(O.__webglFramebuffer,R,oe,r.COLOR_ATTACHMENT0+Y,ue,0),p(oe)&&M(ue)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),et(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)xe(O.__webglFramebuffer[J],R,x,r.COLOR_ATTACHMENT0,Y,J);else xe(O.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,Y,0);p(x)&&M(Y),t.unbindTexture()}R.depthBuffer&&Ze(R)}function Qe(R){const x=R.textures;for(let O=0,z=x.length;O<z;O++){const W=x[O];if(p(W)){const re=A(R),ae=i.get(W).__webglTexture;t.bindTexture(re,ae),M(re),t.unbindTexture()}}}const bt=[],Bt=[];function ei(R){if(R.samples>0){if(Ct(R)===!1){const x=R.textures,O=R.width,z=R.height;let W=r.COLOR_BUFFER_BIT;const re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(R),Y=x.length>1;if(Y)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(x[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,O,z,0,0,O,z,W,r.NEAREST),l===!0&&(bt.length=0,Bt.length=0,bt.push(r.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(bt.push(re),Bt.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(x[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Et(R){return Math.min(n.maxSamples,R.samples)}function Ct(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Vt(R,x){const O=R.colorSpace,z=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==li&&O!==xn&&(qe.getTransfer(O)===lt?(z!==mi||W!==ai)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",O)),x}function ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=ie,this.rebindTextures=it,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function F_(r,e){function t(i,n=xn){let s;const a=qe.getTransfer(n);if(i===ai)return r.UNSIGNED_BYTE;if(i===al)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===zh)return r.BYTE;if(i===Gh)return r.SHORT;if(i===qs)return r.UNSIGNED_SHORT;if(i===rl)return r.INT;if(i===Oi)return r.UNSIGNED_INT;if(i===pi)return r.FLOAT;if(i===ki)return r.HALF_FLOAT;if(i===Wh)return r.ALPHA;if(i===Xh)return r.RGB;if(i===mi)return r.RGBA;if(i===nn)return r.DEPTH_COMPONENT;if(i===Ln)return r.DEPTH_STENCIL;if(i===ll)return r.RED;if(i===cl)return r.RED_INTEGER;if(i===Dn)return r.RG;if(i===hl)return r.RG_INTEGER;if(i===ul)return r.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_o||i===xo||i===vo||i===yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===So||i===bo||i===To||i===wo||i===jr||i===Eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mo||i===So)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===To)return s.COMPRESSED_R11_EAC;if(i===wo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jr)return s.COMPRESSED_RG11_EAC;if(i===Eo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ao||i===Ro||i===Co||i===Lo||i===Po||i===Io||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===ko||i===Bo||i===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ao)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===No)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ko)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Ho||i===Vo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Go)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===Qr||i===qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zi({vertexShader:O_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Nn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new B_,p={},M=t.getContextAttributes();let A=null,y=null;const T=[],b=[],E=new Ie;let _=null,w=null;const C=new Jt;C.viewport=new ft;const I=new Jt;I.viewport=new ft;const F=[C,I],G=new Bf;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=T[q];return Q===void 0&&(Q=new Ra,T[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=T[q];return Q===void 0&&(Q=new Ra,T[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=T[q];return Q===void 0&&(Q=new Ra,T[q]=Q),Q.getHandSpace()};function K(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const ye=T[Q];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",ne);for(let q=0;q<T.length;q++){const Q=b[q];Q!==null&&(b[q]=null,T[q].disconnect(Q))}N=null,H=null,m.reset();for(const q in p)delete p[q];if(e.setRenderTarget(A),f=null,d=null,u=null,n=null,y=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),w!==null){const q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",$),n.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?Ln:nn,ke=M.stencil?Ys:Oi);const Ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ti(d.textureWidth,d.textureHeight,{format:mi,type:ai,depthTexture:new er(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ti(f.framebufferWidth,f.framebufferHeight,{format:mi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),st.setContext(n),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let Q=0;Q<q.removed.length;Q++){const ye=q.removed[Q],ke=b.indexOf(ye);ke>=0&&(b[ke]=null,T[ke].disconnect(ye))}for(let Q=0;Q<q.added.length;Q++){const ye=q.added[Q];let ke=b.indexOf(ye);if(ke===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=b.length){b.push(ye),ke=Ye;break}else if(b[Ye]===null){b[Ye]=ye,ke=Ye;break}if(ke===-1)break}const xe=T[ke];xe&&xe.connect(ye)}}const X=new L,ee=new L;function ie(q,Q,ye){X.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const ke=X.distanceTo(ee),xe=Q.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,Dt=xe[14]/(xe[10]-1),Ze=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],gt=(xe[9]-1)/xe[5],Qe=(xe[8]-1)/xe[0],bt=(Ye[8]+1)/Ye[0],Bt=Dt*Qe,ei=Dt*bt,Et=ke/(-Qe+bt),Ct=Et*-Qe;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const U=Dt+Et,Vt=Ze+Et,ot=Bt-Ct,R=ei+(ke-Ct),x=it*Ze/Vt*U,O=gt*Ze/Vt*U;q.projectionMatrix.makePerspective(ot,R,x,O,U,Vt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function De(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let Q=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),G.near=I.near=C.near=Q,G.far=I.far=C.far=ye,(N!==G.near||H!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,H=G.far),G.layers.mask=q.layers.mask|6,C.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const ke=q.parent,xe=G.cameras;De(G,ke);for(let Ye=0;Ye<xe.length;Ye++)De(xe[Ye],ke);xe.length===2?ie(G,C,I):G.projectionMatrix.copy(C.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),Ce(q,G,ke)};function Ce(q,Q,ye){ye===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let mt=null;function et(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;ye.length!==G.cameras.length&&(G.cameras.length=0,ke=!0);for(let Ze=0;Ze<ye.length;Ze++){const it=ye[Ze];let gt=null;if(f!==null)gt=f.getViewport(it);else{const bt=u.getViewSubImage(d,it);gt=bt.viewport,Ze===0&&(e.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(y))}let Qe=F[Ze];Qe===void 0&&(Qe=new Jt,Qe.layers.enable(Ze),Qe.viewport=new ft,F[Ze]=Qe),Qe.matrix.fromArray(it.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(it.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(gt.x,gt.y,gt.width,gt.height),Ze===0&&(G.matrix.copy(Qe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ke===!0&&G.cameras.push(Qe)}const xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Ze=u.getDepthInformation(ye[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,n.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ze=0;Ze<ye.length;Ze++){const it=ye[Ze].camera;if(it){let gt=p[it];gt||(gt=new nu,p[it]=gt);const Qe=u.getCameraImage(it);gt.sourceTexture=Qe}}}}for(let ye=0;ye<T.length;ye++){const ke=b[ye],xe=T[ye];ke!==null&&xe!==void 0&&xe.update(ke,Q,c||a)}mt&&mt(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const st=new du;st.setAnimationLoop(et),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const G_=new Ve,vu=new Be;vu.set(-1,0,0,0,1,0,0,0,1);function H_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,su(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ii&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ii&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ii&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function V_(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=n[y.id];b===void 0&&(m(y),b=h(y),n[y.id]=b,y.addEventListener("dispose",M));const E=T.program;i.updateUBOMapping(y,E);const _=e.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function h(y){const T=u();y.__bindingPointIndex=T;const b=r.createBuffer(),E=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=n[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let _=0,w=b.length;_<w;_++){const C=b[_];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)f(C[I],_,I,E);else f(C,_,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,T,b,E){if(v(y,T,b,E)===!0){const _=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let I=0;I<w.length;I++){const F=w[I],G=p(F);g(F,y.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function g(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function v(y,T,b,E){const _=y.value,w=T+"_"+b;if(E[w]===void 0)return typeof _=="number"||typeof _=="boolean"?E[w]=_:ArrayBuffer.isView(_)?E[w]=_.slice():E[w]=_.clone(),!0;{const C=E[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return E[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(y){const T=y.uniforms;let b=0;const E=16;for(let w=0,C=T.length;w<C;w++){const I=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,G=I.length;F<G;F++){const N=I[F],H=Array.isArray(N.value)?N.value:[N.value];for(let K=0,$=H.length;K<$;K++){const ne=H[K],X=p(ne),ee=b%E,ie=ee%X.boundary,De=ee+ie;b+=ie,De!==0&&E-De<X.storage&&(b+=E-De),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=X.storage}}}const _=b%E;return _>0&&(b+=E-_),y.__size=b,y.__cache={},this}function p(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){const T=y.target;T.removeEventListener("dispose",M);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function A(){for(const y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:A}}const W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function X_(){return Ci===null&&(Ci=new xl(W_,16,16,Dn,ki),Ci.name="DFG_LUT",Ci.minFilter=Ut,Ci.magFilter=Ut,Ci.wrapS=Ni,Ci.wrapT=Ni,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class q_{constructor(e={}){const{canvas:t=pd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ai}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,m=new Set([ul,hl,cl]),p=new Set([ai,Oi,qs,Ys,al,ol]),M=new Uint32Array(4),A=new Int32Array(4),y=new L;let T=null,b=null;const E=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,F=null,G=null,N=null,H=null;this._outputColorSpace=Tt;let K=0,$=0,ne=null,X=-1,ee=null;const ie=new ft,De=new ft;let Ce=null;const mt=new Me(0);let et=0,st=t.width,q=t.height,Q=1,ye=null,ke=null;const xe=new ft(0,0,st,q),Ye=new ft(0,0,st,q);let Dt=!1;const Ze=new yl;let it=!1,gt=!1;const Qe=new Ve,bt=new L,Bt=new ft,ei={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ct(){return ne===null?Q:1}let U=i;function Vt(S,P){return t.getContext(S,P)}let ot,R,x,O,z,W,re,ae,Y,J,oe,Ee,ue,le,Ae,Ue,Ge,D,ce,Z,he,ge,te;try{const S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",gi,!1),U===null){const P="webgl2";if(U=Vt(P,S),U===null)throw Vt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(S){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Fe("WebGLRenderer: "+S.message),S}function Le(){ot=new Xg(U),ot.init(),he=new F_(U,ot),R=new Ug(U,ot,e,he),x=new N_(U,ot),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),G=U.createFramebuffer(),N=U.createFramebuffer(),H=U.createFramebuffer(),O=new Kg(U),z=new y_,W=new U_(U,ot,x,z,R,he,O),re=new Wg(C),ae=new Zf(U),ge=new Dg(U,ae),Y=new qg(U,ae,O,ge),J=new Zg(U,Y,ae,ge,O),D=new $g(U,R,W),Ae=new Fg(z),oe=new v_(C,re,ot,R,ge,Ae),Ee=new H_(C,z),ue=new S_,le=new R_(ot),Ge=new Ig(C,re,x,J,g,l),Ue=new D_(C,J,R),te=new V_(U,O,R,x),ce=new Ng(U,ot,O),Z=new Yg(U,ot,O),O.programs=oe.programs,C.capabilities=R,C.extensions=ot,C.properties=z,C.renderLists=ue,C.shadowMap=Ue,C.state=x,C.info=O}v!==ai&&(w=new jg(v,t.width,t.height,o,n,s));const Te=new z_(C,U);this.xr=Te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(st,q,!1))},this.getSize=function(S){return S.set(st,q)},this.setSize=function(S,P,V=!0){if(Te.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}st=S,q=P,t.width=Math.floor(S*Q),t.height=Math.floor(P*Q),V===!0&&(t.style.width=S+"px",t.style.height=P+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(st*Q,q*Q).floor()},this.setDrawingBufferSize=function(S,P,V){st=S,q=P,Q=V,t.width=Math.floor(S*V),t.height=Math.floor(P*V),this.setViewport(0,0,S,P)},this.setEffects=function(S){if(v===ai){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let P=0;P<S.length;P++)if(S[P].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,P,V,k){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,P,V,k),x.viewport(ie.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,P,V,k){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,P,V,k),x.scissor(De.copy(Ye).multiplyScalar(Q).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(S){x.setScissorTest(Dt=S)},this.setOpaqueSort=function(S){ye=S},this.setTransparentSort=function(S){ke=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(S=!0,P=!0,V=!0){let k=0;if(S){let B=!1;if(ne!==null){const pe=ne.texture.format;B=m.has(pe)}if(B){const pe=ne.texture.type,ve=p.has(pe),fe=Ge.getClearColor(),Se=Ge.getClearAlpha(),we=fe.r,We=fe.g,Je=fe.b;ve?(M[0]=we,M[1]=We,M[2]=Je,M[3]=Se,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=we,A[1]=We,A[2]=Je,A[3]=Se,U.clearBufferiv(U.COLOR,0,A))}else k|=U.COLOR_BUFFER_BIT}P&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Ge.dispose(),ue.dispose(),le.dispose(),z.dispose(),re.dispose(),J.dispose(),ge.dispose(),te.dispose(),oe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ol),Te.removeEventListener("sessionend",kl),yn.stop()};function _t(S){S.preventDefault(),ta("WebGLRenderer: Context Lost."),I=!0}function rt(){ta("WebGLRenderer: Context Restored."),I=!1;const S=O.autoReset,P=Ue.enabled,V=Ue.autoUpdate,k=Ue.needsUpdate,B=Ue.type;Le(),O.autoReset=S,Ue.enabled=P,Ue.autoUpdate=V,Ue.needsUpdate=k,Ue.type=B}function gi(S){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ei(S){const P=S.target;P.removeEventListener("dispose",Ei),wu(P)}function wu(S){Eu(S),z.remove(S)}function Eu(S){const P=z.get(S).programs;P!==void 0&&(P.forEach(function(V){oe.releaseProgram(V)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,V,k,B,pe){P===null&&(P=ei);const ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,fe=Cu(S,P,V,k,B);x.setMaterial(k,ve);let Se=V.index,we=1;if(k.wireframe===!0){if(Se=Y.getWireframeAttribute(V),Se===void 0)return;we=2}const We=V.drawRange,Je=V.attributes.position;let be=We.start*we,at=(We.start+We.count)*we;pe!==null&&(be=Math.max(be,pe.start*we),at=Math.min(at,(pe.start+pe.count)*we)),Se!==null?(be=Math.max(be,0),at=Math.min(at,Se.count)):Je!=null&&(be=Math.max(be,0),at=Math.min(at,Je.count));const Lt=at-be;if(Lt<0||Lt===1/0)return;ge.setup(B,k,fe,V,Se);let Mt,pt=ce;if(Se!==null&&(Mt=ae.get(Se),pt=Z,pt.setIndex(Mt)),B.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Ct()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(B.isLine){let Wt=k.linewidth;Wt===void 0&&(Wt=1),x.setLineWidth(Wt*Ct()),B.isLineSegments?pt.setMode(U.LINES):B.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else B.isPoints?pt.setMode(U.POINTS):B.isSprite&&pt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Wt=B._multiDrawStarts,_e=B._multiDrawCounts,Yt=B._multiDrawCount,tt=Se?ae.get(Se).bytesPerElement:1,ci=z.get(k).currentProgram.getUniforms();for(let Ai=0;Ai<Yt;Ai++)ci.setValue(U,"_gl_DrawID",Ai),pt.render(Wt[Ai]/tt,_e[Ai])}else if(B.isInstancedMesh)pt.renderInstances(be,Lt,B.count);else if(V.isInstancedBufferGeometry){const Wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_e=Math.min(V.instanceCount,Wt);pt.renderInstances(be,Lt,_e)}else pt.render(be,Lt)};function Fl(S,P,V,k){F!==null&&S.isNodeMaterial&&F.setObject(k,S),it===!0&&Ae.setState(S,V,!1),S.transparent===!0&&S.side===ti&&S.forceSinglePass===!1?(S.side=ii,S.needsUpdate=!0,lr(S,P,k),S.side=tn,S.needsUpdate=!0,lr(S,P,k),S.side=ti):lr(S,P,k)}this.compile=function(S,P,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,P,V),b=le.get(V),b.init(P),_.push(b),V.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),S!==V&&S.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),gt=this.localClippingEnabled,it=Ae.init(this.clippingPlanes,gt),it===!0&&Ae.setGlobalState(this.clippingPlanes,P),F!==null&&Ue.render(b.state.shadowsArray,V,P);const k=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];Fl(fe,V,P,B),k.add(fe)}else Fl(pe,V,P,B),k.add(pe)}),b=_.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(S,P,V=null){const k=this.compile(S,P,V);return new Promise(B=>{function pe(){if(k.forEach(function(ve){const Se=z.get(ve).currentProgram;(Se===void 0||Se.isReady())&&k.delete(ve)}),k.size===0){B(S);return}setTimeout(pe,10)}ot.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let _a=null;function Au(S){_a&&_a(S)}function Ol(){yn.stop()}function kl(){yn.start()}const yn=new du;yn.setAnimationLoop(Au),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(S){_a=S,Te.setAnimationLoop(S),S===null?yn.stop():yn.start()},Te.addEventListener("sessionstart",Ol),Te.addEventListener("sessionend",kl),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,P);const V=Te.enabled===!0&&Te.isPresenting===!0,k=w!==null&&(ne===null||V)&&w.begin(C,ne);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(P),P=Te.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,P,ne),b=le.get(S,_.length),b.init(P),b.state.textureUnits=W.getTextureUnits(),_.push(b),Qe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ze.setFromProjectionMatrix(Qe,Ui,P.reversedDepth),gt=this.localClippingEnabled,it=Ae.init(this.clippingPlanes,gt),T=ue.get(S,E.length),T.init(),E.push(T),Te.enabled===!0&&Te.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&xa(ve,P,-1/0,C.sortObjects)}xa(S,P,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(b.state.lightsArray),C.sortObjects===!0&&T.sort(ye,ke),Et=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Et&&Ge.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Ae.beginShadows();const B=b.state.shadowsArray;if(Ue.render(B,S,P),it===!0&&Ae.endShadows(),(k&&w.hasRenderPass())===!1){const ve=T.opaque,fe=T.transmissive;if(b.setupLights(),P.isArrayCamera){const Se=P.cameras;if(fe.length>0)for(let we=0,We=Se.length;we<We;we++){const Je=Se[we];zl(ve,fe,S,Je)}Et&&Ge.render(S);for(let we=0,We=Se.length;we<We;we++){const Je=Se[we];Bl(T,S,Je,Je.viewport)}}else fe.length>0&&zl(ve,fe,S,P),Et&&Ge.render(S),Bl(T,S,P)}ne!==null&&$===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),k&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,P),ge.resetDefaultState(),X=-1,ee=null,_.pop(),_.length>0?(b=_[_.length-1],W.setTextureUnits(b.state.textureUnits),it===!0&&Ae.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,F!==null&&F.renderEnd()};function xa(S,P,V,k){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ze)){k&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Qe);const ve=J.update(S),fe=S.material;fe.visible&&T.push(S,ve,fe,V,Bt.z,null,P)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ze))){const ve=J.update(S),fe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Bt.copy(ve.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(Qe)),Array.isArray(fe)){const Se=ve.groups;for(let we=0,We=Se.length;we<We;we++){const Je=Se[we],be=fe[Je.materialIndex];be&&be.visible&&T.push(S,ve,be,V,Bt.z,Je,P)}}else fe.visible&&T.push(S,ve,fe,V,Bt.z,null,P)}}const pe=S.children;for(let ve=0,fe=pe.length;ve<fe;ve++)xa(pe[ve],P,V,k)}function Bl(S,P,V,k){const{opaque:B,transmissive:pe,transparent:ve}=S;b.setupLightsView(V),it===!0&&Ae.setGlobalState(C.clippingPlanes,V),k&&x.viewport(ie.copy(k)),B.length>0&&or(B,P,V),pe.length>0&&or(pe,P,V),ve.length>0&&or(ve,P,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function zl(S,P,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const be=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:be?ki:ai,minFilter:Zi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const pe=b.state.transmissionRenderTarget[k.id],ve=k.viewport||ie;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Se=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(mt),et=C.getClearAlpha(),et<1&&C.setClearColor(16777215,.5),C.clear(),Et&&Ge.render(V);const We=C.toneMapping;C.toneMapping=Fi;const Je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),it===!0&&Ae.setGlobalState(C.clippingPlanes,k),or(S,V,k),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let at=0,Lt=P.length;at<Lt;at++){const Mt=P[at],{object:pt,geometry:Wt,material:_e,group:Yt}=Mt;if(_e.side===ti&&pt.layers.test(k.layers)){const tt=_e.side;_e.side=ii,_e.needsUpdate=!0,Gl(pt,V,k,Wt,_e,Yt),_e.side=tt,_e.needsUpdate=!0,be=!0}}be===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Se,we),C.setClearColor(mt,et),Je!==void 0&&(k.viewport=Je),C.toneMapping=We}function or(S,P,V){const k=P.isScene===!0?P.overrideMaterial:null;for(let B=0,pe=S.length;B<pe;B++){const ve=S[B],{object:fe,geometry:Se,group:we}=ve;let We=ve.material;We.allowOverride===!0&&k!==null&&(We=k),fe.layers.test(V.layers)&&Gl(fe,P,V,Se,We,we)}}function Gl(S,P,V,k,B,pe){F!==null&&B.isNodeMaterial&&F.setObject(S,B),S.onBeforeRender(C,P,V,k,B,pe),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(C,P,V,k,S,pe),B.transparent===!0&&B.side===ti&&B.forceSinglePass===!1?(B.side=ii,B.needsUpdate=!0,C.renderBufferDirect(V,P,k,B,S,pe),B.side=tn,B.needsUpdate=!0,C.renderBufferDirect(V,P,k,B,S,pe),B.side=ti):C.renderBufferDirect(V,P,k,B,S,pe),S.onAfterRender(C,P,V,k,B,pe)}function lr(S,P,V){P.isScene!==!0&&(P=ei);const k=z.get(S),B=b.state.lights,pe=b.state.shadowsArray,ve=B.state.version,fe=oe.getParameters(S,B.state,pe,P,V,b.state.lightProbeGridArray),Se=oe.getProgramCacheKey(fe);let we=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;const We=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=re.get(S.envMap||k.environment,We),k.envMapRotation=k.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",Ei),we=new Map,k.programs=we);let Je=we.get(Se);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===ve)return Vl(S,fe),Je}else fe.uniforms=oe.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,fe),S.onBeforeCompile(fe,C),Je=oe.acquireProgram(fe,Se),we.set(Se,Je),k.uniforms=fe.uniforms;const be=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=Ae.uniform),Vl(S,fe),k.needsLights=Pu(S),k.lightsStateVersion=ve,k.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.sunLights.value=B.state.sun,be.sunLightShadows.value=B.state.sunShadow,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.sunShadowMatrix.value=B.state.sunShadowMatrix,be.sunShadowCascade.value=B.state.sunShadowCascade,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=Je,k.uniformsList=null,Je}function Hl(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Vl(S,P){const V=z.get(S);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Ru(S,P){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let V=0,k=S.length;V<k;V++){const B=S[V];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function Cu(S,P,V,k,B){P.isScene!==!0&&(P=ei),W.resetTextureUnits();const pe=P.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,fe=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,we=re.get(k.envMap||ve,Se),We=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Je=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,Lt=!!V.morphAttributes.color;let Mt=Fi;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Wt=pt!==void 0?pt.length:0,_e=z.get(k),Yt=b.state.lights;if(it===!0&&(gt===!0||S!==ee)){const xt=S===ee&&k.id===X;Ae.setState(k,S,xt)}let tt=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Yt.state.version||_e.outputColorSpace!==fe||B.isBatchedMesh&&_e.batching===!1||!B.isBatchedMesh&&_e.batching===!0||B.isBatchedMesh&&_e.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&_e.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&_e.instancing===!1||!B.isInstancedMesh&&_e.instancing===!0||B.isSkinnedMesh&&_e.skinning===!1||!B.isSkinnedMesh&&_e.skinning===!0||B.isInstancedMesh&&_e.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_e.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_e.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_e.instancingMorph===!1&&B.morphTexture!==null||_e.envMap!==we||k.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==We||_e.vertexTangents!==Je||_e.morphTargets!==be||_e.morphNormals!==at||_e.morphColors!==Lt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Wt||!!_e.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,_e.__version=k.version);let ci=_e.currentProgram;tt===!0&&(ci=lr(k,P,B),F&&k.isNodeMaterial&&F.onUpdateProgram(k,ci,_e));let Ai=!1,an=!1,Un=!1;const dt=ci.getUniforms(),At=_e.uniforms;if(x.useProgram(ci.program)&&(Ai=!0,an=!0,Un=!0),k.id!==X&&(X=k.id,an=!0),_e.needsLights){const xt=Ru(b.state.lightProbeGridArray,B);_e.lightProbeGrid!==xt&&(_e.lightProbeGrid=xt,an=!0)}if(Ai||ee!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",S.projectionMatrix),dt.setValue(U,"viewMatrix",S.matrixWorldInverse);const ln=dt.map.cameraPosition;ln!==void 0&&ln.setValue(U,bt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,an=!0,Un=!0)}if(_e.needsLights&&(Yt.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",Yt.state.sunShadowMap,W),Yt.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,W),Yt.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,W),Yt.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,W)),B.isSkinnedMesh){dt.setOptional(U,B,"bindMatrix"),dt.setOptional(U,B,"bindMatrixInverse");const xt=B.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),dt.setValue(U,"boneTexture",xt.boneTexture,W))}B.isBatchedMesh&&(dt.setOptional(U,B,"batchingTexture"),dt.setValue(U,"batchingTexture",B._matricesTexture,W),dt.setOptional(U,B,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",B._indirectTexture,W),dt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",B._colorsTexture,W));const on=V.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&D.update(B,V,ci),(an||_e.receiveShadow!==B.receiveShadow)&&(_e.receiveShadow=B.receiveShadow,dt.setValue(U,"receiveShadow",B.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(At.envMapIntensity.value=P.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=X_()),an){if(dt.setValue(U,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Lu(At,Un),pe&&k.fog===!0&&Ee.refreshFogUniforms(At,pe),Ee.refreshMaterialUniforms(At,k,Q,q,b.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const xt=_e.lightProbeGrid;At.probesSH.value=xt.texture,At.probesMin.value.copy(xt.boundingBox.min),At.probesMax.value.copy(xt.boundingBox.max),At.probesResolution.value.copy(xt.resolution)}$r.upload(U,Hl(_e),At,W)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($r.upload(U,Hl(_e),At,W),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(U,"center",B.center),dt.setValue(U,"modelViewMatrix",B.modelViewMatrix),dt.setValue(U,"normalMatrix",B.normalMatrix),dt.setValue(U,"modelMatrix",B.matrixWorld),k.uniformsGroups!==void 0){const xt=k.uniformsGroups;for(let ln=0,Fn=xt.length;ln<Fn;ln++){const Xl=xt[ln];te.update(Xl,ci),te.bind(Xl,ci)}}return ci}function Lu(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.sunLights.needsUpdate=P,S.sunLightShadows.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(S,P,V){const k=z.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(S.texture).__webglTexture=P,z.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,P){const V=z.get(S);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,V=0){ne=S,K=P,$=V;let k=null,B=!1,pe=!1;if(S){const fe=z.get(S);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),ie.copy(S.viewport),De.copy(S.scissor),Ce=S.scissorTest,x.viewport(ie),x.scissor(De),x.setScissorTest(Ce),X=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(fe.__hasExternalTextures)W.rebindTextures(S,z.get(S.texture).__webglTexture,z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const We=S.depthTexture;if(fe.__boundDepthTexture!==We){if(We!==null&&z.has(We)&&(S.width!==We.image.width||S.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const we=z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[P])?k=we[P][V]:k=we[P],B=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?k=z.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[V]:k=we,ie.copy(S.viewport),De.copy(S.scissor),Ce=S.scissorTest}else ie.copy(xe).multiplyScalar(Q).floor(),De.copy(Ye).multiplyScalar(Q).floor(),Ce=Dt;if(V!==0&&(k=G),x.bindFramebuffer(U.FRAMEBUFFER,k)&&x.drawBuffers(S,k),x.viewport(ie),x.scissor(De),x.setScissorTest(Ce),B){const fe=z.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,V)}else if(pe){const fe=P;for(let Se=0;Se<S.textures.length;Se++){const we=z.get(S.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,we.__webglTexture,V,fe)}}else if(S!==null&&V!==0){const fe=z.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,V)}X=-1};function Wl(S){const P=z.get(S);return(P.__readFormat!==S.format||P.__readType!==S.type)&&(P.__readFormat=S.format,P.__readType=S.type,P.__formatReadable=R.textureFormatReadable(S.format),P.__typeReadable=R.textureTypeReadable(S.type)),P}this.readRenderTargetPixels=function(S,P,V,k,B,pe,ve,fe=0){if(!(S&&S.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){x.bindFramebuffer(U.FRAMEBUFFER,Se);try{const we=S.textures[fe],We=we.format,Je=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const be=Wl(we);if(be.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-k&&V>=0&&V<=S.height-B&&U.readPixels(P,V,k,B,he.convert(We),he.convert(Je),pe)}finally{const we=ne!==null?z.get(ne).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,P,V,k,B,pe,ve,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(P>=0&&P<=S.width-k&&V>=0&&V<=S.height-B){x.bindFramebuffer(U.FRAMEBUFFER,Se);const we=S.textures[fe],We=we.format,Je=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const be=Wl(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(P,V,k,B,he.convert(We),he.convert(Je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Lt=ne!==null?z.get(ne).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Lt);const Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await md(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(Mt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,P=null,V=0){const k=Math.pow(2,-V),B=Math.floor(S.image.width*k),pe=Math.floor(S.image.height*k),ve=P!==null?P.x:0,fe=P!==null?P.y:0;W.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ve,fe,B,pe),x.unbindTexture()},this.copyTextureToTexture=function(S,P,V=null,k=null,B=0,pe=0){let ve,fe,Se,we,We,Je,be,at,Lt;const Mt=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(V!==null)ve=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,We=V.min.y,Je=V.isBox3?V.min.z:0;else{const At=Math.pow(2,-B);ve=Math.floor(Mt.width*At),fe=Math.floor(Mt.height*At),S.isDataArrayTexture?Se=Mt.depth:S.isData3DTexture?Se=Math.floor(Mt.depth*At):Se=1,we=0,We=0,Je=0}k!==null?(be=k.x,at=k.y,Lt=k.z):(be=0,at=0,Lt=0);const pt=he.convert(P.format),Wt=he.convert(P.type);let _e;P.isData3DTexture?(W.setTexture3D(P,0),_e=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),_e=U.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),_e=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const Yt=x.getParameter(U.UNPACK_ROW_LENGTH),tt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=x.getParameter(U.UNPACK_SKIP_PIXELS),Ai=x.getParameter(U.UNPACK_SKIP_ROWS),an=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,we),x.pixelStorei(U.UNPACK_SKIP_ROWS,We),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const Un=S.isDataArrayTexture||S.isData3DTexture,dt=P.isDataArrayTexture||P.isData3DTexture;if(S.isDepthTexture){const At=z.get(S),on=z.get(P),xt=z.get(At.__renderTarget),ln=z.get(on.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,xt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let Fn=0;Fn<Se;Fn++)Un&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(S).__webglTexture,B,Je+Fn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(P).__webglTexture,pe,Lt+Fn)),U.blitFramebuffer(we,We,ve,fe,be,at,ve,fe,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||z.has(S)){const At=z.get(S),on=z.get(P);x.bindFramebuffer(U.READ_FRAMEBUFFER,N),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let xt=0;xt<Se;xt++)Un?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,B,Je+xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,B),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,pe,Lt+xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,pe),B!==0?U.blitFramebuffer(we,We,ve,fe,be,at,ve,fe,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(_e,pe,be,at,Lt+xt,we,We,ve,fe):U.copyTexSubImage2D(_e,pe,be,at,we,We,ve,fe);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(_e,pe,be,at,Lt,ve,fe,Se,pt,Wt,Mt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,pe,be,at,Lt,ve,fe,Se,pt,Mt.data):U.texSubImage3D(_e,pe,be,at,Lt,ve,fe,Se,pt,Wt,Mt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,be,at,ve,fe,pt,Wt,Mt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,be,at,Mt.width,Mt.height,pt,Mt.data):U.texSubImage2D(U.TEXTURE_2D,pe,be,at,ve,fe,pt,Wt,Mt);x.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ai),x.pixelStorei(U.UNPACK_SKIP_IMAGES,an),pe===0&&P.generateMipmaps&&U.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(S){z.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){K=0,$=0,ne=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Is="waykeepers.save.v1",Cl=1,se={render:{fov:60,near:.1,far:220,fogNear:32,fogFar:138,clearColor:9348506,highPixelRatio:1.5,lowPixelRatio:.75},player:{maxHealth:100,maxStamina:100,walkSpeed:4,sprintSpeed:6,sprintStaminaPerSecond:15,radius:.38,healCharges:2,healAmount:40,healTime:1.4,healMoveSpeed:1.15,staminaRegenPerSecond:30,staminaRegenDelay:.75,hitReactionTime:.25,damageInvulnerability:.8,inputBuffer:.15,dodge:{stamina:25,duration:.6,distance:2.6,invulnerableFrom:.06,invulnerableTo:.3},attacks:{light:{id:"light",stamina:20,damage:25,windup:.22,active:.1,recovery:.33,reach:2.8,facingWindow:.1,tipRadius:.32,forwardStep:0},heavy:{id:"heavy",stamina:35,damage:45,windup:.62,active:.14,recovery:.54,reach:3.2,facingWindow:.3,tipRadius:.38,forwardStep:.55}},workshopUpgrade:{light:30,heavy:54},camera:{distance:5,minDistance:.9,targetHeight:1.35,pitch:.2,minPitch:-.3,maxPitch:.85,mouseSensitivity:.0024,collisionRadius:.22,restoreSpeed:7.5},lockOn:{acquireRange:10,releaseRange:14,facingTurnRate:12}},ordinaryEnemies:{briarling:{type:"briarling",name:"Briarling",health:60,speed:2.25,radius:.5,height:1.05,aggroRange:8.5,attackRange:2.5,stopRange:1.85,leash:11,facingLock:.25,staggerResistance:2,staggerDuration:.35,attack:{id:"briar-lunge",tell:.8,active:.12,recovery:.9,damage:18,reach:2.4,halfArc:.62}},mossguard:{type:"mossguard",name:"Mossguard",health:90,speed:1.55,radius:.72,height:2.15,aggroRange:9.5,attackRange:3.2,stopRange:2.5,leash:13,facingLock:.25,staggerResistance:2,staggerDuration:.35,attack:{id:"moss-sweep",tell:1.2,active:.18,recovery:1.5,damage:26,reach:3,halfArc:1.05}}},boss:{name:"Gate Warden",health:420,radius:1.15,height:3.9,speed:4,stopRange:3.8,attackRange:4.4,facingLock:.3,transitionTime:1,attacks:{sweep:{id:"warden-sweep",tell:1.1,active:.2,recovery:1.7,damage:24,reach:4.2,halfArc:150*Math.PI/360},overhead:{id:"warden-overhead",tell:1.35,active:.16,recovery:2,damage:32,radius:1.3,impactDistance:2.9},doubleSweep:{first:{id:"warden-double-sweep-a",tell:1.1,active:.2,damage:24,reach:4.2,halfArc:150*Math.PI/360},gap:.85,second:{id:"warden-double-sweep-b",tell:.85,active:.2,damage:24,reach:4.2,halfArc:150*Math.PI/360},recovery:2}}},world:{bounds:{minX:-34,maxX:34,minZ:-138,maxZ:32},interactionRange:2.7,combatQuietTime:5,bossTriggerZ:-104.2,bossArena:{x:0,z:-117,radius:13.5,groundY:1.5}},economy:{cacheSalvage:2,bossSalvage:4,workshopCost:4,beaconCost:8}},$t={camp:{id:"camp",name:"Alder Hollow Hearth",short:"Camp",position:{x:0,z:14.5,y:0},spawn:{x:0,z:12.8,yaw:Math.PI}},brazier:{id:"brazier",name:"Field Brazier",short:"Brazier",position:{x:0,z:-96,y:1.5},spawn:{x:0,z:-93.4,yaw:Math.PI}}},Zr=[{id:"cache-a",name:"Mossroad Supply Cache",x:4.2,z:-21.5,y:0},{id:"cache-b",name:"Cart Yard Supply Cache",x:-7.4,z:-43,y:0},{id:"cache-c",name:"Wayhouse Supply Cache",x:-8.8,z:-72,y:1.5},{id:"cache-d",name:"Upper Store Supply Cache",x:8.4,z:-83,y:1.5}],Y_={briarling:{id:"briarling",trigger:{x:0,z:-13.5,radius:6.5},enemies:[{type:"briarling",x:-1.4,z:-17.2,homeRadius:7.5}]},mossguard:{id:"mossguard",trigger:{x:0,z:-39,radius:8.5},enemies:[{type:"mossguard",x:3.2,z:-41.5,homeRadius:9.5}]},mixed:{id:"mixed",trigger:{x:0,z:-77,radius:9.5},enemies:[{type:"briarling",x:-4.2,z:-80,homeRadius:9},{type:"mossguard",x:4.8,z:-80.8,homeRadius:9.5}]}},is={initial:"Cross the Mossroad, defeat the Gate Warden and recover the Beacon Lens.",brazier:"The field brazier is lit. Rest there before entering the Warden courtyard.",boss:"Defeat the Gate Warden and recover the Beacon Lens.",lens:"Return to Alder Hollow and restore the bridge beacon.",lensNoSalvage:"Gather Salvage for the bridge beacon, then return to Alder Hollow.",complete:"Chapter complete: the road is lit. Explore Alder Hollow at your leisure."},$i={arrival:{title:"Mara, Caretaker of Alder Hollow",body:`You came back. The road has swallowed better travelers than us.

The Mossroad climbs to the old wayhouse, then the Warden's courtyard. The Gate Warden keeps the Beacon Lens. Bring it home and we can light the bridge again.

There are supply caches along the way. Rest at the field brazier before you challenge the gate. The Warden is slow, but every blow is meant to end a fight.`},lens:{title:"Mara, Caretaker of Alder Hollow",body:`The Lens. I had begun to think the Warden's gate would stay dark forever.

Bring eight Salvage and the Lens to the broken beacon by the bridge. I will fit the lens and wake the road lamps. The workshop can wait; the beacon cannot.`},lensPoor:{title:"Mara, Caretaker of Alder Hollow",body:"The Lens is safe in your pack. The beacon needs eight Salvage besides. Search the caches you passed; the road is generous to those who look."},complete:{title:"Mara, Caretaker of Alder Hollow",body:`Look at it. The bridge lamps, the beacon, the whole road waking one stone at a time.

You have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.`},beaconInspected:{title:"The Broken Beacon",body:`The lens cradle is empty, its brass teeth furred with moss. A plaque reads: LIGHT THE ROAD.

Mara at the hearth knows what the beacon needs. The Gate Warden on the Mossroad carries its Beacon Lens.`},beaconRestored:{title:"The Bridge Beacon",body:"Warm light pours through the lens. Across the bridge, old lamps answer one by one. For the first time in years, Alder Hollow has a road worth walking."},workshopBuilt:{title:"The Restored Workshop",body:"The bench is true, the roof is whole, and the grindstone turns. Your spear tip has been reinforced. Light and heavy thrusts now strike harder."},shortcutLocked:{title:"Shortcut Gate",body:"The latch is on the far side. This gate was built to be opened from the cart yard, not from camp."},shortcutOpened:{title:"Shortcut Opened",body:"The old latch gives way. A narrow path now runs from the cart yard back toward Alder Hollow."},keepsake:{title:"Carved Keepsake",body:"A small carved warden's knot, worn smooth by a thumb. It belongs on the hearth shelf, where someone can remember it."}};function K_(r,e=!1){const t=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new wt;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=fh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=fh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function fh(r){let e,t,i,n=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new jt(a,t,i);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}function ph(r,e){if(e===id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Yo||e===qh){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===Yo)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const vt=(r,e,t)=>Math.max(e,Math.min(t,r)),It=(r,e,t)=>r+(e-r)*t,$_=r=>(r=vt(r,0,1),r*r*(3-2*r)),Z_=(r,e,t,i)=>It(r,e,1-Math.exp(-7.5*i)),Ne=(r,e)=>r+Math.random()*(e-r);function yu(r,e){let t=e-r;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function yi(r,e,t){const i=yu(r,e);return Math.abs(i)<=t?e:r+Math.sign(i)*t}function Br(r,e,t,i){return Math.atan2(t-r,i-e)}function Mu(r,e,t,i,n){const s=t.x-r.x,a=t.z-r.z,o=Math.hypot(s,a);if(o>i)return!1;if(o<.001)return!0;const l=Math.atan2(s,a);return Math.abs(yu(e,l))<=n}function mh(r,e,t,i,n,s){const a=t-r,o=i-e,l=n-r,c=s-e,h=a*a+o*o;let u=h>1e-6?(l*a+c*o)/h:0;u=vt(u,0,1);const d=r+a*u,f=e+o*u;return Math.hypot(n-d,s-f)}const j={grass:5139024,grassDark:3492668,path:8483930,pathLight:9798759,stone:7634036,stoneDark:5397848,stoneLight:9277830,timber:6112818,timberLight:8282436,roof:4609098,leaf:4154441,leafDark:2903098,amber:16757853};function Cn(r,e){if(e>-56){const t=Math.hypot(r,e-14.5);let i=Math.max(0,.52-t*.032);return i+=Math.sin(r*.23)*.11+Math.cos(e*.19)*.08,e<2&&(i-=Math.max(0,(2-e)*.018)),vt(i,-.35,.55)}return e>-64?$_((-e-56)/8)*1.5+Math.sin(r*.21)*.08:1.5+Math.sin(r*.17)*.12}function to(r,e,t,i,n,s){const a=n-t,o=s-i,l=a*a+o*o;let c=l>1e-4?((r-t)*a+(e-i)*o)/l:0;return c=vt(c,0,1),Math.hypot(r-(t+a*c),e-(i+o*c))}function Ds(r,e){let t=99;e>4&&e<28&&(t=Math.min(t,Math.abs(r)<10?0:Math.abs(r)-10+8)),e<=6&&e>-30&&(t=Math.min(t,Math.abs(r))),e<=-28&&e>-54&&(t=Math.min(t,Math.max(0,Math.abs(r)-9))),e<=-62&&e>-88&&(t=Math.min(t,Math.max(0,Math.abs(r)-8))),e<=-86&&e>-104&&(t=Math.min(t,Math.max(0,Math.abs(r)-4))),t=Math.min(t,to(r,e,20,-37,20,6)),t=Math.min(t,to(r,e,20,6,9,6)),t=Math.min(t,to(r,e,20,-32,27,-27));const i=Math.hypot(r-0,e+117);i<15&&(t=Math.min(t,Math.max(0,i-12.2)));const n=t+Math.sin(r*.37+e*.71)*.75+Math.cos(r*.19-e*.33)*.45;return Math.max(0,n)}const gh=new Map;function St(r,e={}){const t=Object.keys(e).sort().map(s=>`${s}:${String(e[s])}`).join("|"),i=`${r}|${t}`;let n=gh.get(i);return n||(n=new ua({color:r,flatShading:!0,...e}),gh.set(i,n)),n}function Oe(r,e,t,i,n,s,a,o,l=0,c=r){const h=new He(new oi(e,t,i),St(n));return h.position.set(s,a,o),h.rotation.y=l,h.castShadow=!0,h.receiveShadow=!0,c.add(h),h}function ze(r,e,t,i,n,s,a,o,l,c=0,h=r){const u=new He(new ut(e,t,i,n),St(s));return u.position.set(a,o,l),u.rotation.y=c,u.castShadow=!0,u.receiveShadow=!0,h.add(u),u}function pn(r,e,t,i=1,n=j.stone){const s=new Ji(1,0),a=new He(s,St(n));return a.position.set(e,Cn(e,t)+.35*i,t),a.scale.set(i*Ne(.8,1.4),i*Ne(.5,.95),i*Ne(.8,1.4)),a.rotation.set(Ne(-.3,.3),Ne(0,Math.PI),Ne(-.3,.3)),a.castShadow=!0,a.receiveShadow=!0,r.add(a),a}function _h(r,e,t,i,n,s=r){const a=new L().subVectors(t,e),o=a.length(),l=new He(new ut(i,i,o,5),St(n));return l.position.copy(e).add(t).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),l.castShadow=!0,l.receiveShadow=!0,s.add(l),l}function J_(){const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,36,2,32,36,30);t.addColorStop(0,"rgba(255,247,196,1)"),t.addColorStop(.25,"rgba(255,181,70,0.9)"),t.addColorStop(.65,"rgba(225,93,26,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new lf(r);return i.colorSpace=Tt,i}class j_{constructor(e,t,i={}){this.scene=e,this.assets=i,this.renderer=t,this.colliders=[],this.cameraOccluders=[],this.interactables=[],this.cacheMeshes=new Map,this.animated=[],this.time=0,this.quality="high",this.groundHeight=Cn,this.flameTex=J_(),this._buildLights(),this._buildGround(),this._buildForest(),this._buildCamp(),this._buildImportedCampDetails(),this._buildMossroad(),this._buildCartYard(),this._buildShortcut(),this._buildWayhouse(),this._buildBrazier(),this._buildCourtyard(),this._buildBoundaries(),this._initLightFlags(),this._mergeStaticGeometry()}_initLightFlags(){this.scene.traverse(e=>{e.isPointLight&&(e.userData.lightEnabled===void 0&&(e.userData.lightEnabled=e.visible),e.userData.lowLight===void 0&&(e.userData.lowLight=!1))}),this.hearthLight.userData.lowLight=!0,this.brazierLight.userData.lowLight=!0,this.beaconLight.userData.lowLight=!0}_setPointLight(e,t){e.userData.lightEnabled=t,e.visible=t&&(this.quality!=="low"||e.userData.lowLight===!0)}_mergeStaticGeometry(){const e=[this.hearthFire,this.workshopRoof,this.workshopTools,this.workshopBench,this.beaconLens,this.brokenLens,this.campKeepsake,this.bridgeGateBar,this.shortcutDoor,this.keepsake,this.keepsakeShelf,this.bossDoor,...this.bridgeLamps.map(n=>n.group),...Array.from(this.cacheMeshes.values(),n=>n.group)],t=new Set(this.cameraOccluders);for(const n of e)n&&n.traverse(s=>t.add(s));this.scene.updateMatrixWorld(!0);const i=new Map;this.scene.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh||n.children.length>0||t.has(n))return;const s=n.material;if(!s||Array.isArray(s)||s.transparent||s.opacity<1||s.vertexColors||!n.geometry||n.geometry.getAttribute("color"))return;const a=`${s.uuid}|${n.castShadow?1:0}|${n.receiveShadow?1:0}`;let o=i.get(a);o||(o={material:s,castShadow:n.castShadow,receiveShadow:n.receiveShadow,meshes:[],geometries:[]},i.set(a,o));const l=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();l.applyMatrix4(n.matrixWorld);for(const c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&l.deleteAttribute(c);if(l.getAttribute("normal")||l.computeVertexNormals(),!l.getAttribute("uv")){const c=l.getAttribute("position").count;l.setAttribute("uv",new $e(new Float32Array(c*2),2))}o.meshes.push(n),o.geometries.push(l)});for(const n of i.values()){if(n.meshes.length<2){for(const o of n.geometries)o.dispose();continue}const s=K_(n.geometries,!1);if(!s){for(const o of n.geometries)o.dispose();continue}const a=new He(s,n.material);a.name="MergedStatic",a.castShadow=n.castShadow,a.receiveShadow=n.receiveShadow,this.scene.add(a);for(const o of n.meshes)o.parent?.remove(o);for(const o of n.geometries)o.dispose()}}_buildLights(){this.scene.background=new Me(se.render.clearColor),this.scene.fog=new _l(8558987,se.render.fogNear,se.render.fogFar);const e=new If(13623506,2833202,1.55);this.scene.add(e);const t=new Jo(16773844,2);t.position.set(-28,42,18),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-42,t.shadow.camera.right=42,t.shadow.camera.top=42,t.shadow.camera.bottom=-42,t.shadow.camera.near=1,t.shadow.camera.far=110,t.shadow.bias=-8e-4,this.sun=t,this.scene.add(t);const i=new Jo(10336173,.4);i.position.set(20,12,-35),this.scene.add(i)}_buildGround(){const o=new ar(84,178,84,178);o.rotateX(-Math.PI/2),o.translate(0/2,0,-110/2);const l=o.attributes.position,c=[],h=new Me(j.grass),u=new Me(j.grassDark),d=new Me(j.path),f=new Me(j.pathLight),g=new Me(j.stone);for(let p=0;p<l.count;p++){const M=l.getX(p),A=l.getZ(p),y=Cn(M,A);l.setY(p,y);const T=(Math.sin(M*.73+A*1.31)+Math.sin(M*1.91-A*.51)+Math.sin(A*.29))*.12,b=Ds(M,A),E=Math.hypot(M,A+117)<13.2;let _;E?_=g.clone().lerp(u,vt((Math.hypot(M,A+117)-10.5)/3,0,1)):b<3.2?_=d.clone().lerp(f,.35+T*.5):b<6.5?_=d.clone().lerp(u,.55+T*.4):_=h.clone().lerp(u,.45+T*.8),_.offsetHSL(0,0,T*.05),c.push(_.r,_.g,_.b)}o.setAttribute("color",new $e(c,3)),o.computeVertexNormals();const v=new ua({vertexColors:!0,flatShading:!0});this.ground=new He(o,v),this.ground.receiveShadow=!0,this.ground.name="terrain",this.scene.add(this.ground),this.cameraOccluders.push(this.ground);const m=new He(new tr(180,24),St(2832947));m.rotation.x=-Math.PI/2,m.position.y=-2.2,this.scene.add(m)}_buildForest(){const e=new ut(.18,.34,3.6,5),t=new Si(1.7,4.2,6),i=new Si(1.15,2.8,5),n=St(5324847),s=St(j.leaf),a=St(j.leafDark),o=230,l=new rs(e,n,o),c=new rs(t,s,o),h=new rs(i,a,o);l.castShadow=!1,c.castShadow=!1,h.castShadow=!1,l.receiveShadow=!0;const u=new yt,d=new Me;let f=0,g=0;for(;f<o&&g<4e3;){g++;const _=(Math.random()<.5?-1:1)*Ne(10.5,39),w=Ne(-142,32);if(Ds(_,w)<7.4||_>12&&_<31&&w>-39&&w<10||Math.abs(_)<15&&w>-105||Math.hypot(_,w+117)<17.5)continue;const C=Ne(.72,1.5),I=Cn(_,w);u.position.set(_,I+1.8*C,w),u.rotation.set(0,Ne(0,Math.PI*2),0),u.scale.set(C,C,C),u.updateMatrix(),l.setMatrixAt(f,u.matrix),u.position.y=I+4.3*C,u.scale.set(C*Ne(.8,1.2),C*Ne(.9,1.35),C*Ne(.8,1.2)),u.updateMatrix(),c.setMatrixAt(f,u.matrix),u.position.y=I+6.2*C,u.scale.set(C*Ne(.7,1.1),C*Ne(.7,1.2),C*Ne(.7,1.1)),u.updateMatrix(),h.setMatrixAt(f,u.matrix),d.setHSL(Ne(.27,.36),Ne(.18,.34),Ne(.24,.38)),c.setColorAt(f,d),d.setHSL(Ne(.27,.34),Ne(.16,.3),Ne(.19,.29)),h.setColorAt(f,d),f++}l.count=f,c.count=f,h.count=f,this.scene.add(l,c,h),this.treeMeshes=[l,c,h];const v=new Gt(.62,0),m=St(4613706),p=new rs(v,m,260);let M=0,A=0;for(;M<260&&A<3e3;){A++;const _=(Math.random()<.5?-1:1)*Ne(6.5,37),w=Ne(-142,32);if(Ds(_,w)<3.6||_>12&&_<31&&w>-39&&w<10&&Ds(_,w)<4.2||Math.hypot(_,w+117)<15.5)continue;u.position.set(_,Cn(_,w)+.28,w),u.rotation.set(Ne(-.2,.2),Ne(0,Math.PI*2),Ne(-.2,.2));const C=Ne(.55,1.35);u.scale.set(C*Ne(.8,1.4),C*Ne(.5,.9),C*Ne(.8,1.4)),u.updateMatrix(),p.setMatrixAt(M,u.matrix),d.setHSL(Ne(.25,.35),Ne(.2,.35),Ne(.24,.36)),p.setColorAt(M,d),M++}p.count=M,p.castShadow=!1,p.receiveShadow=!0,this.scene.add(p);const y=new Si(.09,.6,3),T=St(7901276),b=new rs(y,T,600);for(let E=0;E<600;E++){const _=Ne(-32,32),w=Ne(-138,30);if(Ds(_,w)<2.1){E--;continue}u.position.set(_,Cn(_,w)+.25,w),u.rotation.set(Ne(-.15,.15),Ne(0,Math.PI*2),Ne(-.15,.15));const C=Ne(.5,1.5);u.scale.set(C,C,C),u.updateMatrix(),b.setMatrixAt(E,u.matrix)}b.castShadow=!1,this.scene.add(b)}_buildCamp(){const e=new me;e.name="Alder Hollow",this.scene.add(e),this.campGroup=e;const t=ze(e,1.65,1.85,.42,9,j.stoneDark,0,.22,16);t.receiveShadow=!0;for(let E=0;E<9;E++){const _=E/9*Math.PI*2;pn(e,Math.cos(_)*1.75,16+Math.sin(_)*1.75,.42,j.stone)}this.hearthFire=new gc(new Ko({map:this.flameTex,transparent:!0,depthWrite:!1,blending:Ws})),this.hearthFire.position.set(0,.95,16),this.hearthFire.scale.set(1.4,1.8,1),e.add(this.hearthFire),this.hearthLight=new Pi(j.amber,2.4,16,1.7),this.hearthLight.position.set(0,2,16),this.hearthLight.castShadow=!1,e.add(this.hearthLight);const i=_h(e,new L(-.65,.45,15.7),new L(.65,.45,16.3),.16,j.timber),n=_h(e,new L(-.65,.45,16.3),new L(.65,.45,15.7),.16,j.timberLight);i.rotation.z=0,n.rotation.z=0,this.colliders.push({type:"circle",x:0,z:16,r:1.75,tag:"hearth"});const s=new me;s.position.set(-4.2,0,17.8),s.rotation.y=Math.PI*.85;const a=new He(new ut(.28,.42,1.25,6),St(6641996));a.position.y=.68,s.add(a);const o=new He(new Gt(.22,0),St(13214589));o.position.y=1.48,s.add(o);const l=new He(new Si(.32,.5,6),St(7035980));l.position.y=1.64,s.add(l);const c=ze(s,.035,.045,1.7,5,j.timber,.44,.85,0);c.rotation.z=-.12,this.scene.add(s),this.mara=s,this.colliders.push({type:"circle",x:-4.2,z:17.8,r:.5,tag:"mara"});const h=new me;h.position.set(-8.6,0,9.5),h.rotation.y=.16;const u=Oe(h,6.2,.22,5,j.stoneDark,0,.11,0);u.receiveShadow=!0,ze(h,.13,.16,2.5,5,j.timber,-2.7,1.25,-2.1),ze(h,.13,.16,2.5,5,j.timber,2.7,1.25,-2.1),ze(h,.13,.16,2.5,5,j.timber,-2.7,1.25,2.1),ze(h,.13,.16,2.5,5,j.timber,2.7,1.25,2.1);const d=Oe(h,5.7,1.8,.22,j.timber,0,1.05,-2.25);d.castShadow=!0;const f=Oe(h,2.8,.18,.75,j.timberLight,.4,.78,.5);f.castShadow=!0,this.workshopBench=f,this.workshopGroup=h,this.scene.add(h),this.colliders.push({type:"box",minX:-11.8,maxX:-5.4,minZ:6.6,maxZ:12.4,tag:"workshop"}),this.cameraOccluders.push(u,d),this.workshopRoof=new me;const g=Oe(this.workshopRoof,3.4,.18,5.4,j.roof,-1.55,2.72,0,0);g.rotation.z=.34;const v=Oe(this.workshopRoof,3.4,.18,5.4,j.roof,1.55,2.72,0,0);v.rotation.z=-.34,this.workshopRoof.position.set(-8.6,0,9.5),this.workshopRoof.rotation.y=.16,this.workshopRoof.visible=!1,this.scene.add(this.workshopRoof),this.workshopLight=new Pi(16757082,0,7,2),this.workshopLight.position.set(-8.6,1.8,9.5),this.workshopLight.visible=!1,this.workshopLight.userData.lightEnabled=!1,this.scene.add(this.workshopLight),this.workshopTools=new me;for(let E=0;E<3;E++){const _=ze(this.workshopTools,.035,.035,1.1,4,j.timberLight,-.8+E*.5,1.65,-2.05);_.rotation.z=.3+E*.2}this.workshopTools.position.set(-8.6,0,9.5),this.workshopTools.visible=!1,this.scene.add(this.workshopTools);const m=new me;m.position.set(8.2,0,22.5),ze(m,.9,1.25,.7,8,j.stoneDark,0,.35,0),ze(m,.42,.62,3.4,8,j.stone,0,2,0);const p=ze(m,.68,.5,.4,8,j.timber,0,3.7,0);p.castShadow=!0;const M=new He(new ut(.42,.34,.3,8),St(3820358,{transparent:!0,opacity:.75}));M.position.set(0,3.95,0),M.rotation.z=.35,m.add(M),this.brokenLens=M,this.beaconGroup=m,this.scene.add(m),this.colliders.push({type:"circle",x:8.2,z:22.5,r:1,tag:"beacon"}),this.cameraOccluders.push(m.children[0],m.children[1]),this.beaconLens=new He(new ut(.43,.43,.22,10),new Ht({color:16767370,transparent:!0,opacity:.9})),this.beaconLens.position.set(8.2,3.97,22.5),this.beaconLens.visible=!1,this.scene.add(this.beaconLens),this.beaconLight=new Pi(16761965,0,24,1.4),this.beaconLight.position.set(8.2,4.6,22.5),this.beaconLight.visible=!1,this.beaconLight.userData.lightEnabled=!1,this.scene.add(this.beaconLight);const A=Oe(e,2.4,.16,.55,j.timberLight,2.7,.9,17.8);A.castShadow=!0,ze(e,.06,.07,.9,4,j.timber,1.6,.45,17.8),ze(e,.06,.07,.9,4,j.timber,3.8,.45,17.8),this.campKeepsake=new me,this.campKeepsake.position.set(2.9,1.02,17.7);const y=new He(new ra(.13,.045,32,5,2,3),St(12886894,{emissive:3810312,emissiveIntensity:.4}));y.rotation.x=.5,this.campKeepsake.add(y),this.campKeepsake.visible=!1,this.scene.add(this.campKeepsake),this.colliders.push({type:"circle",x:2.9,z:17.8,r:.55,tag:"hearth-shelf"}),this.bridgeGroup=new me,this.bridgeGroup.position.set(13.2,0,22.5);for(let E=0;E<6;E++)Oe(this.bridgeGroup,1.25,.18,2.2,j.timber,E*1.2-3,.16,0);Oe(this.bridgeGroup,7.3,.22,.16,j.timberLight,0,.82,1.02),Oe(this.bridgeGroup,7.3,.22,.16,j.timberLight,0,.82,-1.02);for(let E=0;E<4;E++)ze(this.bridgeGroup,.06,.07,.85,5,j.timber,-3.2+E*2.15,.48,1.02);this.scene.add(this.bridgeGroup),this.bridgeLamps=[];for(let E=0;E<4;E++){const _=new me;_.position.set(10.4+E*2,.85,21.4),ze(_,.025,.03,1.5,4,j.timber,0,.75,0);const w=new He(new Gt(.13,0),new Ht({color:16767114}));w.position.y=1.55,_.add(w);const C=new Pi(16759651,0,7,1.7);C.position.y=1.6,_.add(C),_.visible=!0,w.visible=!1,C.visible=!1,this.scene.add(_),this.bridgeLamps.push({group:_,bulb:w,light:C})}this.bridgeGate=new me,this.bridgeGate.position.set(18.2,0,22.5),ze(this.bridgeGate,.16,.2,3.2,5,j.timber,-2.1,1.6,0),ze(this.bridgeGate,.16,.2,3.2,5,j.timber,2.1,1.6,0),Oe(this.bridgeGate,4.5,.25,.3,j.timberLight,0,3.1,0);const T=Oe(this.bridgeGate,3.7,1.8,.15,j.timber,0,1.6,0);T.rotation.z=.02,this.bridgeGateBar=T,this.scene.add(this.bridgeGate),this.colliders.push({type:"box",minX:16,maxX:20.4,minZ:21.3,maxZ:23.7,tag:"bridge-gate",enabled:!0});const b=new me;b.position.set(3.3,0,6.2),ze(b,.07,.09,1.7,5,j.timber,0,.85,0),Oe(b,1.7,.65,.1,j.timberLight,0,1.55,0),this.scene.add(b),this.campSign=b}_cloneAsset(e,t){const i=this.assets?.[e]?.[t];if(!i)return null;const n=i.clone(!0);return n.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),n}_addAsset(e,t,i,n,s,a=0,o=1,l=!0){const c=this._cloneAsset(e,t);return c?(c.position.set(i,n,s),c.rotation.y=a,c.scale.setScalar(o),this.scene.add(c),l&&c.traverse(h=>{h.isMesh&&this.cameraOccluders.push(h)}),c):null}_buildImportedCampDetails(){this._addAsset("nature","BirchTree_2",-13.5,0,24.5,.35,1),this._addAsset("nature","BirchTree_2",12.8,0,25.2,-.2,.9),this._addAsset("nature","MapleTree_3",-15.2,0,12,.8,.95),this._addAsset("nature","MapleTree_3",14.2,0,13.5,-.55,1),this._addAsset("nature","DeadTree_2",16.5,0,-3.5,.25,1.05),this._addAsset("nature","DeadTree_2",-17,0,-1.5,-.35,.9),this._addAsset("nature","Bush_Large",-10.5,0,12.5,.4,1),this._addAsset("nature","Bush_Large",9.5,0,19.5,-.3,.95),this._addAsset("nature","Bush_Small",-3,0,13,.6,1),this._addAsset("nature","Bush_Small",4.5,0,13.5,-.8,.9),this._addAsset("nature","Bush_Flowers",-6.8,0,16.5,.2,.9),this._addAsset("nature","Bush_Flowers",6.2,0,17.2,-.4,.85),this._addAsset("nature","Flower_1_Clump",-4,0,15.5,.5,1),this._addAsset("nature","Flower_2_Clump",3.5,0,15,-.2,.95),this._addAsset("nature","Grass_Large",-1,0,11.5,.1,1,!1),this._addAsset("nature","Grass_Large",2.5,0,12.5,-.6,.9,!1),this.workshopDamagedGroup=new me,this.workshopDamagedGroup.name="workshop-damaged",this.scene.add(this.workshopDamagedGroup);const e=(i,n,s,a,o=0,l=1)=>{const c=this._cloneAsset("ruins",i);return c?(c.position.set(n,s,a),c.rotation.y=o,c.scale.setScalar(l),this.workshopDamagedGroup.add(c),c.traverse(h=>{h.isMesh&&this.cameraOccluders.push(h)}),c):null};e("Wall_Broken",-9.8,0,8.6,.15,1),e("Wall_Half",-7.4,0,11.2,-.25,1),e("Wall_Overgrown",-10,0,10.8,1.35,.95),e("Support_Left",-9.2,0,9.8,.2,1),e("Support_Right",-7.8,0,9.2,-.1,1),e("Arch_Round",-8.6,0,9.5,0,.85),e("Column_Round",-9.6,0,9,0,.9),e("Column_Round_Short",-7.6,0,10.2,0,.9),e("Barrel",-6.8,0,8.9,.4,.9),e("Crate",-7.1,0,10.8,-.3,.85),e("Cart",-10.8,0,10,.7,.9),e("Pot1",-6.4,0,9.8,.2,.9),e("Pot1_Broken",-8,0,8.4,-.5,.85),e("Pot2",-9,0,11.4,.3,.85),e("Torch",-7.2,0,9,0,.85),e("Stairs",-8.6,0,7.8,0,.75),e("Floor_Standard",-8.6,0,9.5,0,.9),this.workshopRestoredGroup=new me,this.workshopRestoredGroup.name="workshop-restored",this.workshopRestoredGroup.visible=!1,this.scene.add(this.workshopRestoredGroup);const t=(i,n,s,a,o=0,l=1)=>{const c=this._cloneAsset("ruins",i);return c?(c.position.set(n,s,a),c.rotation.y=o,c.scale.setScalar(l),this.workshopRestoredGroup.add(c),c.traverse(h=>{h.isMesh&&this.cameraOccluders.push(h)}),c):null};t("Wall",-9.8,0,8.6,.15,1),t("Wall_ArchRound",-8.6,0,9.5,0,.95),t("Wall",-7.4,0,11.2,-.25,1),t("Support_Center",-8.6,0,9.5,0,1),t("Support_Left",-9.2,0,9.8,.2,1),t("Support_Right",-7.8,0,9.2,-.1,1),t("Column_Round",-9.6,0,9,0,.9),t("Column_Round_Short",-7.6,0,10.2,0,.9),t("Barrel",-6.8,0,8.9,.4,.9),t("Crate",-7.1,0,10.8,-.3,.85),t("Cart",-10.8,0,10,.7,.9),t("Pot1",-6.4,0,9.8,.2,.9),t("Pot2",-9,0,11.4,.3,.85),t("Torch",-7.2,0,9,0,.85),t("Floor_Standard",-8.6,0,9.5,0,.95),this._addAsset("nature","DeadTree_2",18,0,-8,.5,.75)}_buildMossroad(){const e=new me;e.name="Mossroad",this.scene.add(e);const t=new me;t.position.set(0,0,3.2),ze(t,.25,.33,4.3,6,j.timber,-4.1,2.15,0),ze(t,.25,.33,4.3,6,j.timber,4.1,2.15,0),Oe(t,8.9,.4,.5,j.timberLight,0,4.25,0),Oe(t,3.6,.7,.12,j.timber,0,3.55,0),this.scene.add(t),this.colliders.push({type:"circle",x:-4.1,z:3.2,r:.55,tag:"camp-arch"}),this.colliders.push({type:"circle",x:4.1,z:3.2,r:.55,tag:"camp-arch"});const i=new me;i.position.set(-3.6,0,-2.3),i.rotation.y=-.2,ze(i,.06,.08,1.5,4,j.timber,0,.75,0),Oe(i,1.45,.55,.08,j.timberLight,0,1.35,0),this.scene.add(i);const n=new me;n.position.set(3.7,0,-8.3),n.rotation.y=.18,ze(n,.06,.08,1.5,4,j.timber,0,.75,0),Oe(n,1.45,.55,.08,j.timberLight,0,1.35,0),this.scene.add(n);for(let a=0;a<7;a++){const o=a%2===0?-1:1;pn(this.scene,o*Ne(4.2,7.5),-5-a*5.3,Ne(.45,1.15),a%3===0?j.stoneLight:j.stone)}for(let a=0;a<8;a++){const o=Ne(-12,12),l=Ne(-28,2);Math.abs(o)<3.5||this.colliders.push({type:"circle",x:o,z:l,r:.65,tag:"road-rock"})}this._buildCache("cache-a",4.2,0,-21.5,.2);const s=new me;s.position.set(-5.8,0,-24.5),pn(this.scene,-5.8,-24.5,.85,j.stoneDark),Oe(s,.8,.25,.55,j.stoneLight,0,1.1,0),this.scene.add(s)}_buildCartYard(){const e=new me;e.name="Cart Yard",this.scene.add(e);const t=new me;t.position.set(-4.6,0,-35),t.rotation.y=.25,Oe(t,2.6,.55,1.5,j.timber,0,.78,0),Oe(t,2.4,.18,1.3,j.timberLight,0,1.05,0);for(const[s,a]of[[-1,-.75],[1,-.75],[-1,.75],[1,.75]]){const o=new He(new Tl(.48,.1,5,8),St(j.timberLight));o.position.set(s,.52,a),o.rotation.y=Math.PI/2,t.add(o)}this.scene.add(t),this.colliders.push({type:"box",minX:-6.2,maxX:-3,minZ:-36.2,maxZ:-33.8,tag:"cart"}),this.cameraOccluders.push(t);const i=new me;i.position.set(7,0,-49),i.rotation.y=-.55,Oe(i,2.2,.5,1.3,j.timber,0,.62,0),this.scene.add(i),this.colliders.push({type:"box",minX:5.7,maxX:8.3,minZ:-50,maxZ:-48,tag:"cart2"});for(let s=0;s<8;s++){const a=ze(e,.24,.26,2.7,6,s%2?j.timber:j.timberLight,-9.5+s%2*.5,.26+Math.floor(s/2)*.46,-40.5+Math.floor(s/2)*.55);a.rotation.z=Math.PI/2}this.colliders.push({type:"box",minX:-11.2,maxX:-8.1,minZ:-41.4,maxZ:-37.7,tag:"logs"});for(let s=0;s<10;s++){const a=Ne(-14,14),o=Ne(-51,-31);Math.abs(a)<4&&o>-43||pn(this.scene,a,o,Ne(.4,1.3))}this._buildCache("cache-b",-7.4,0,-43,-.35);const n=new me;n.position.set(9.5,0,-34.5),ze(n,.13,.18,2.4,5,j.timber,0,1.2,0),Oe(n,1.1,.7,.1,j.timberLight,0,2,0),this.scene.add(n)}_buildShortcut(){const e=new me;e.name="Shortcut",this.scene.add(e),this.shortcutGate=new me,this.shortcutGate.position.set(20,0,-20),ze(this.shortcutGate,.2,.26,3.4,5,j.timber,-2.35,1.7,0),ze(this.shortcutGate,.2,.26,3.4,5,j.timber,2.35,1.7,0),Oe(this.shortcutGate,5,.35,.32,j.timberLight,0,3.3,0);const t=new me;t.position.set(-2.2,0,0);for(let c=0;c<4;c++)Oe(t,1,2.7,.13,c%2?j.timber:j.timberLight,.55+c*1.05,1.5,0);Oe(t,4.25,.18,.2,j.stoneDark,2.15,2.5,.09);const i=new He(new oi(4.5,3.2,.5),new Ht({visible:!1}));i.position.set(2.15,1.5,0),t.add(i),this.cameraOccluders.push(i),this.shortcutGate.add(t),this.shortcutDoor=t,this.scene.add(this.shortcutGate),this.shortcutCollider={type:"box",minX:17.4,maxX:22.6,minZ:-20.8,maxZ:-19.2,tag:"shortcut-gate",enabled:!0},this.colliders.push(this.shortcutCollider),this.cameraOccluders.push(t);const n=new me;n.position.set(27.2,0,-26.8),n.rotation.y=-.35,Oe(n,4.6,.18,3.8,j.stoneDark,0,.09,0),ze(n,.12,.15,2.2,5,j.timber,-1.9,1.1,-1.5),ze(n,.12,.15,2.2,5,j.timber,1.9,1.1,-1.5);const s=Oe(n,4.4,.15,3.7,j.roof,0,2.35,0);s.rotation.z=.06,Oe(n,3.6,1.4,.18,j.timber,0,.8,-1.85);const a=Oe(n,2.2,.16,.45,j.timberLight,.4,.9,1.4);this.scene.add(n),this.colliders.push({type:"box",minX:25.1,maxX:29.3,minZ:-28.6,maxZ:-24.9,tag:"shelter"}),this.cameraOccluders.push(s,n.children[4]),this.keepsake=new me,this.keepsake.position.set(27.5,1.02,-25.4);const o=new He(new ra(.16,.055,36,5,2,3),St(12886894,{emissive:2759432,emissiveIntensity:.4}));o.rotation.x=.6,this.keepsake.add(o);const l=new Pi(16766346,.55,3,2);l.position.y=.2,this.keepsake.add(l),this.scene.add(this.keepsake),this.keepsakeShelf=a}_buildWayhouse(){const e=new me;e.name="Upper Wayhouse",this.scene.add(e);const t=1.5,i=new me;i.position.set(-7.5,t,-74),i.rotation.y=.08;const n=Oe(i,9.5,.28,7.5,j.stoneDark,0,.14,0);n.receiveShadow=!0;const s=Oe(i,.3,3,7.3,j.timber,-4.6,1.7,0),a=Oe(i,.3,3,7.3,j.timber,4.6,1.7,0),o=Oe(i,9.2,3,.3,j.timber,0,1.7,-3.5),l=Oe(i,5.6,.22,7.9,j.roof,-2.35,3.7,0);l.rotation.z=.42;const c=Oe(i,5.6,.22,7.9,j.roof,2.35,3.7,0);c.rotation.z=-.42,Oe(i,2.3,2.6,.22,j.timberLight,1.4,1.35,3.45),Oe(i,1.2,1.2,.12,2831407,-2.6,1.9,3.48),this.scene.add(i),this.colliders.push({type:"box",minX:-12.2,maxX:-2.8,minZ:-77.8,maxZ:-70.2,tag:"wayhouse"}),this.cameraOccluders.push(s,a,o,l,c),this.wayhouse=i;const h=new me;h.position.set(6.5,t,-71),ze(h,.85,.95,.8,8,j.stone,0,.4,0),ze(h,.6,.6,.1,8,2440250,0,.82,0),ze(h,.09,.11,2.5,5,j.timber,-.9,1.4,0),ze(h,.09,.11,2.5,5,j.timber,.9,1.4,0),Oe(h,2.1,.2,1.4,j.roof,0,2.7,0),this.scene.add(h),this.colliders.push({type:"circle",x:6.5,z:-71,r:1.1,tag:"well"}),this._buildCache("cache-c",-8.8,1.5,-72,.12),this._buildCache("cache-d",8.4,1.5,-83,-.2);for(let d=0;d<12;d++){const f=Ne(-15,15),g=Ne(-88,-66);Math.abs(f)<6&&g>-80||pn(this.scene,f,g,Ne(.35,1))}const u=new me;u.position.set(2.2,t,-67.5),ze(u,.07,.1,2.3,5,j.timber,0,1.15,0),Oe(u,.5,.45,.5,j.stoneDark,0,2.25,0),this.scene.add(u)}_buildBrazier(){const t=new me;t.name="Field Brazier",t.position.set(0,1.5,-96),ze(t,1.25,1.55,.35,9,j.stoneDark,0,.18,0),ze(t,.36,.5,1.2,7,j.stone,0,.9,0),ze(t,.72,.42,.5,8,j.stoneLight,0,1.7,0);const i=new He(new ut(.78,.5,.35,8,1,!0),St(j.stoneDark,{side:ti}));i.position.y=1.95,t.add(i),this.scene.add(t),this.colliders.push({type:"circle",x:0,z:-96,r:1.15,tag:"brazier"}),this.brazierGroup=t,this.brazierFire=new gc(new Ko({map:this.flameTex,transparent:!0,depthWrite:!1,blending:Ws})),this.brazierFire.position.set(0,2.3,0),this.brazierFire.scale.set(1,1.4,1),this.brazierFire.visible=!1,t.add(this.brazierFire),this.brazierLight=new Pi(16757853,0,14,1.6),this.brazierLight.visible=!1,this.brazierLight.userData.lightEnabled=!1,this.brazierLight.position.set(0,2.7,0),t.add(this.brazierLight);const n=new me;n.position.set(0,1.5,-100),ze(n,.1,.13,2.2,5,j.timber,-3.3,1.1,0),ze(n,.1,.13,2.2,5,j.timber,3.3,1.1,0),this.scene.add(n),this.bossGate=new me,this.bossGate.position.set(0,1.5,-103.4),ze(this.bossGate,.32,.42,4.8,6,j.stoneDark,-3.9,2.4,0),ze(this.bossGate,.32,.42,4.8,6,j.stoneDark,3.9,2.4,0),Oe(this.bossGate,8.6,.55,.65,j.stone,0,4.9,0);const s=new me;s.position.set(0,0,0);for(let o=0;o<4;o++)Oe(s,1.55,3.8,.25,o%2?j.stoneDark:j.stone,-2.45+o*1.63,2,0);for(let o=0;o<4;o++)Oe(s,.18,3.9,.32,j.stoneLight,-3.1+o*2.06,2,.1);const a=new He(new oi(8.6,4,.5),new Ht({visible:!1}));a.position.set(0,2,0),s.add(a),this.cameraOccluders.push(a),this.bossGate.add(s),this.bossDoor=s,this.scene.add(this.bossGate),this.bossGateCollider={type:"box",minX:-4.2,maxX:4.2,minZ:-104,maxZ:-102.8,tag:"boss-gate",enabled:!0},this.colliders.push(this.bossGateCollider),this.cameraOccluders.push(s),this.bossGateOpen=!1}_buildCourtyard(){const e=se.world.bossArena,t=new me;t.position.set(e.x,e.groundY,e.z);const i=new bl(12.4,14.4,40,1),n=new He(i,St(j.stoneDark,{side:ti}));n.rotation.x=-Math.PI/2,n.position.y=.035,n.receiveShadow=!0,t.add(n);const s=new tr(12.6,36),a=new He(s,St(j.stone,{side:ti}));a.rotation.x=-Math.PI/2,a.position.y=.02,a.receiveShadow=!0,t.add(a),this.scene.add(t);const o=St(j.stoneDark),l=new oi(3,3.6,1.2);for(let u=0;u<22;u++){const d=u/22*Math.PI*2;if(Math.abs((d+Math.PI)%(Math.PI*2)-Math.PI)<.19)continue;const f=e.x+Math.sin(d)*14,g=e.z+Math.cos(d)*14,v=new He(l,o);v.position.set(f,e.groundY+1.2,g),v.rotation.y=d,v.castShadow=!0,v.receiveShadow=!0,this.scene.add(v),this.colliders.push({type:"circle",x:f,z:g,r:1.25,tag:"arena-wall"}),this.cameraOccluders.push(v),u%2===0&&pn(this.scene,f+Math.sin(d)*.8,g+Math.cos(d)*.8,.8,j.stoneLight)}for(let u=0;u<8;u++){const d=.4+u*.75,f=e.x+Math.sin(d)*10.2,g=e.z+Math.cos(d)*10.2;if(Math.abs(f)<2.5&&g>e.z+8)continue;const v=pn(this.scene,f,g,Ne(.35,.75),j.stone);v.position.y=e.groundY+.3}const c=new me;c.position.set(e.x,e.groundY,e.z-3),ze(c,2,2.5,.35,8,j.stoneDark,0,.18,0),ze(c,1.25,1.6,.55,8,j.stone,0,.55,0),this.scene.add(c),this.bossDais=c;const h=new me;h.position.set(0,e.groundY,e.z+13.8),ze(h,.4,.5,5.2,6,j.stoneDark,-4.5,2.6,0),ze(h,.4,.5,5.2,6,j.stoneDark,4.5,2.6,0),Oe(h,10,.6,.7,j.stone,0,5.2,0),this.scene.add(h),this.courtyardCenter=e}_buildCache(e,t,i,n,s){const a=new me;a.position.set(t,i,n),a.rotation.y=s;const o=Oe(a,1.05,.7,.72,j.timber,0,.38,0),l=Oe(a,1.1,.2,.78,j.timberLight,0,.8,0);l.name="lid",Oe(a,.18,.5,.05,j.stoneLight,0,.48,.38);const c=new Pi(16763247,.65,3.5,2);c.position.set(0,1.1,0),a.add(c);const h=new He(new Sl(.13,0),new Ht({color:16766085}));return h.position.y=1.25,a.add(h),this.scene.add(a),this.cacheMeshes.set(e,{group:a,lid:l,glow:c,marker:h,base:o}),this.colliders.push({type:"circle",x:t,z:n,r:.65,tag:e}),a}_buildBoundaries(){const e=se.world.bounds,t=2;this.colliders.push({type:"box",minX:e.minX-t,maxX:e.minX,minZ:e.minZ-4,maxZ:e.maxZ+4,tag:"boundary"}),this.colliders.push({type:"box",minX:e.maxX,maxX:e.maxX+t,minZ:e.minZ-4,maxZ:e.maxZ+4,tag:"boundary"}),this.colliders.push({type:"box",minX:e.minX-4,maxX:e.maxX+4,minZ:e.minZ-t,maxZ:e.minZ,tag:"boundary"}),this.colliders.push({type:"box",minX:e.minX-4,maxX:e.maxX+4,minZ:e.maxZ,maxZ:e.maxZ+t,tag:"boundary"}),this.boundaryRocks=[];for(let i=0;i<26;i++){const n=e.minX+i/25*(e.maxX-e.minX);this.boundaryRocks.push(pn(this.scene,n,e.minZ+.8,Ne(.9,1.8),j.stoneDark))}}addCollider(e){return this.colliders.push(e),e}resolveMovement(e,t,i,n){const s=se.world.bounds;let a=vt(e,s.minX+i,s.maxX-i),o=vt(t,s.minZ+i,s.maxZ-i);for(let l=0;l<4;l++){let c=!1;for(const h of this.colliders)if(h.enabled!==!1){if(h.type==="circle"){const u=a-h.x,d=o-h.z,f=i+h.r,g=Math.hypot(u,d);g<f&&(c=!0,g<1e-4?a=h.x+f:(a=h.x+u/g*f,o=h.z+d/g*f))}else if(h.type==="box"){const u=vt(a,h.minX,h.maxX),d=vt(o,h.minZ,h.maxZ),f=a-u,g=o-d,v=Math.hypot(f,g);if(v<i)if(c=!0,v>1e-4)a=u+f/v*i,o=d+g/v*i;else{const m=a-h.minX,p=h.maxX-a,M=o-h.minZ,A=h.maxZ-o,y=Math.min(m,p,M,A);y===m?a=h.minX-i:y===p?a=h.maxX+i:y===M?o=h.minZ-i:o=h.maxZ+i}}}if(!c)break}return!Number.isFinite(a)||!Number.isFinite(o)?{x:n.x,z:n.z}:{x:a,z:o}}isPositionValid(e,t,i=.38){const n=se.world.bounds;if(e<n.minX+i||e>n.maxX-i||t<n.minZ+i||t>n.maxZ-i||!Number.isFinite(Cn(e,t)))return!1;for(const s of this.colliders)if(s.enabled!==!1){if(s.type==="circle"){if(Math.hypot(e-s.x,t-s.z)<s.r+i-.02)return!1}else if(s.type==="box"){const a=vt(e,s.minX,s.maxX),o=vt(t,s.minZ,s.maxZ);if(Math.hypot(e-a,t-o)<i-.02)return!1}}return!0}setCacheClaimed(e,t=!0){const i=this.cacheMeshes.get(e);i&&(t?(i.lid.rotation.x=-1.15,i.lid.position.z=-.28,i.lid.position.y=.7,i.glow.intensity=0,this._setPointLight(i.glow,!1),i.marker.visible=!1,i.base.material=St(4997170)):(i.lid.rotation.x=0,i.lid.position.z=0,i.lid.position.y=.8,i.glow.intensity=.65,this._setPointLight(i.glow,!0),i.marker.visible=!0,i.base.material=St(j.timber)))}setKeepsakeCollected(e){this.keepsake.visible=!e,this.campKeepsake.visible=e,e&&(this.keepsakeShelf.material=St(9269063))}setWorkshopBuilt(e){this.workshopRoof.visible=e,this.workshopTools.visible=e,this.workshopLight.intensity=e?1.7:0,this._setPointLight(this.workshopLight,e),this.workshopBench.material=St(e?10123341:j.timberLight),this.workshopDamagedGroup&&(this.workshopDamagedGroup.visible=!e),this.workshopRestoredGroup&&(this.workshopRestoredGroup.visible=e)}setBrazierActive(e){this.brazierFire.visible=e,this.brazierLight.intensity=e?2.2:0,this._setPointLight(this.brazierLight,e)}setShortcutOpen(e){this.shortcutCollider.enabled=!e,this.shortcutDoor.rotation.y=e?-1.65:0}setBossGate(e){this.bossGateOpen=e,this.bossGateCollider.enabled=!e,this.bossDoor.rotation.y=e?1.35:0,this.bossDoor.position.x=e?1.8:0}setBeaconBuilt(e){this.brokenLens.visible=!e,this.beaconLens.visible=e,this.beaconLight.intensity=e?3.2:0,this._setPointLight(this.beaconLight,e);for(const i of this.bridgeLamps)i.bulb.visible=e,this._setPointLight(i.light,e),i.light.intensity=e?1.4:0;const t=this.colliders.find(i=>i.tag==="bridge-gate");t&&(t.enabled=!e),this.bridgeGateBar&&(this.bridgeGateBar.visible=!e)}setBridgeLights(e){for(const t of this.bridgeLamps)t.bulb.visible=e,this._setPointLight(t.light,e),t.light.intensity=e?1.4:0;this.beaconLight.intensity=e?3.2:0,this._setPointLight(this.beaconLight,e),this.beaconLens.visible=e}setQuality(e){this.quality=e;const t=e==="low";this.sun.castShadow=!t,this.renderer.shadowMap.enabled=!t,this.scene.traverse(i=>{if(i.isPointLight){i.visible=i.userData.lightEnabled!==!1&&(!t||i.userData.lowLight===!0);return}i.isMesh&&(i.userData.baseCastShadow===void 0&&(i.userData.baseCastShadow=i.castShadow),i.castShadow=!t&&i.userData.baseCastShadow)});for(const i of this.treeMeshes)i.castShadow=!1}update(e,t,i){if(this.time=t,this.hearthFire){const s=.92+Math.sin(t*12.3)*.08+Math.sin(t*20.1)*.04;this.hearthFire.scale.set(1.4*s,1.8*s,1),this.hearthLight.intensity=2.2+Math.sin(t*9.7)*.18}if(this.brazierFire.visible){const s=.9+Math.sin(t*10.4)*.1+Math.sin(t*17.2)*.05;this.brazierFire.scale.set(1*s,1.4*s,1),this.brazierLight.intensity=2+Math.sin(t*8.1)*.25}this.beaconLens.visible&&(this.beaconLens.rotation.y+=e*.6);const n=1.25+Math.sin(t*2.2)*.1;for(const[,s]of this.cacheMeshes)s.marker.visible&&(s.marker.position.y=n,s.marker.rotation.y+=e*1.4);this.keepsake.visible&&(this.keepsake.rotation.y+=e*.7,this.keepsake.position.y=1.02+Math.sin(t*2.5)*.05),this.campKeepsake.visible&&(this.campKeepsake.rotation.y+=e*.4)}}function En(r,e={}){return new ua({color:r,flatShading:!0,...e})}function ri(r,e,t){const i=new He(r,e);return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}class Q_{constructor(e){this.game=e,this.radius=se.player.radius,this.position=new L,this.safePosition=new L,this.facing=Math.PI,this.health=se.player.maxHealth,this.stamina=se.player.maxStamina,this.healCharges=se.player.healCharges,this.state="normal",this.stateTime=0,this.attack=null,this.attackCounter=0,this.dodge=null,this.heal=null,this.hurtTimer=0,this.deathTimer=0,this.invulnerableUntil=-1,this.lastDamageTime=-99,this.lastStaminaUse=-99,this.lastCombatEvent=-99,this.queuedAction=null,this.queuedAt=-99,this.lockTarget=null,this.sprinting=!1,this.walkPhase=0,this.lastStep=-1,this.flash=0,this.facingCommitted=!1,this.spearReinforced=!1,this._buildMesh(),this.updateVisual(0,0)}_buildMesh(){this.root=new me,this.root.name="Traveler",this.body=new me,this.root.add(this.body),this.bodyMats=[];const e=En(8809552),t=En(5200977),i=En(13017210),n=En(5061419),s=En(3682087);this.bodyMats.push(e,t,i,n,s),this.hips=new me,this.hips.position.y=.9,this.body.add(this.hips);const a=ri(new ut(.24,.34,.78,6),t,this.hips);a.position.y=.3,this.torso=a;const o=ri(new ut(.3,.25,.28,6),n,this.hips);o.position.y=.56;const l=ri(new Gt(.19,1),i,this.hips);l.position.y=.88;const c=ri(new Si(.29,.42,6),e,this.hips);c.position.set(0,1.01,-.02),c.rotation.x=-.06;const h=ri(new Si(.47,.95,6,1,!0),e,this.body);h.position.set(0,.78,-.23),h.rotation.x=.1,h.material=e,this.cloak=h;const u=ri(new oi(.42,.46,.25),n,this.body);u.position.set(0,1.08,-.31),u.rotation.x=.08,this.pack=u,this.leftLeg=new me,this.leftLeg.position.set(-.14,.78,0),this.body.add(this.leftLeg);const d=ri(new ut(.09,.075,.72,5),s,this.leftLeg);d.position.y=-.36,this.rightLeg=new me,this.rightLeg.position.set(.14,.78,0),this.body.add(this.rightLeg);const f=ri(new ut(.09,.075,.72,5),s,this.rightLeg);f.position.y=-.36,this.leftArm=new me,this.leftArm.position.set(-.3,1.36,0),this.body.add(this.leftArm);const g=ri(new ut(.065,.055,.58,5),t,this.leftArm);g.position.y=-.27,this.rightArm=new me,this.rightArm.position.set(.31,1.36,0),this.body.add(this.rightArm);const v=ri(new ut(.065,.055,.58,5),t,this.rightArm);v.position.y=-.27,this.spearPivot=new me,this.spearPivot.position.set(.34,1.22,.1),this.body.add(this.spearPivot);const m=ri(new ut(.032,.038,2.35,6),n,this.spearPivot);m.rotation.x=Math.PI/2,m.position.z=1.03;const p=ri(new ut(.06,.06,.12,6),En(7169108),this.spearPivot);p.rotation.x=Math.PI/2,p.position.z=2.13,this.spearTipMat=En(11907232,{emissive:1118220,emissiveIntensity:.2});const M=ri(new Si(.075,.34,5),this.spearTipMat,this.spearPivot);M.rotation.x=Math.PI/2,M.position.z=2.36,this.spearTip=M,this.healGlow=new Pi(9560224,0,3.2,2),this.healGlow.position.set(0,1.1,0),this.body.add(this.healGlow),this.root.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),this.game.scene.add(this.root)}setReinforced(e){this.spearReinforced=e,this.spearTipMat.color.setHex(e?15913354:11907232),this.spearTipMat.emissive.setHex(e?5913096:1118220),this.spearTipMat.emissiveIntensity=e?.45:.2}resetAt(e,t=!0){const i=e.spawn;this.position.set(i.x,this.game.world.groundHeight(i.x,i.z),i.z),this.safePosition.copy(this.position),this.facing=i.yaw,this.state="normal",this.stateTime=0,this.attack=null,this.dodge=null,this.heal=null,this.hurtTimer=0,this.deathTimer=0,this.queuedAction=null,this.lockTarget=null,this.invulnerableUntil=-1,this.lastDamageTime=-99,this.lastStaminaUse=-99,this.lastCombatEvent=-99,this.sprinting=!1,this.flash=0,t&&(this.health=se.player.maxHealth,this.stamina=se.player.maxStamina,this.healCharges=se.player.healCharges),this.root.visible=!0,this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.root.rotation.set(0,this.facing,0),this.root.position.copy(this.position),this.updateVisual(0,this.game.time)}get isDead(){return this.state==="dead"}get isBusy(){return this.state==="attack"||this.state==="dodge"||this.state==="heal"||this.state==="hurt"||this.state==="dead"}get attackDamage(){if(!this.attack)return 0;const e=se.player.attacks[this.attack.type].damage;return this.spearReinforced?se.player.workshopUpgrade[this.attack.type]:e}queueAction(e){this.isDead||(this.queuedAction=e,this.queuedAt=this.game.time)}toggleLockOn(){if(this.isDead)return;if(this.lockTarget){this.lockTarget=null,this.game.audio.lockOn();return}const e=this.getLockCandidates();e.length?(this.lockTarget=e[0],this.game.audio.lockOn(),this.game.ui?.toast(`Locked: ${this.lockTarget.name}`)):this.game.ui?.toast("No visible target within reach.")}cycleLockTarget(e){const t=this.getLockCandidates();if(!t.length){this.lockTarget=null;return}let i=t.indexOf(this.lockTarget);i<0?i=0:i=(i+(e>0?1:-1)+t.length)%t.length,this.lockTarget=t[i],this.game.audio.lockOn()}getLockCandidates(){const e=this.game.getHostileTargets().filter(s=>s.alive&&!s.isBossHidden),t=this.game.camera,i=t.position,n=[];for(const s of e){const a=s.lockPoint(),o=Math.hypot(a.x-this.position.x,a.z-this.position.z);if(o>se.player.lockOn.acquireRange)continue;const l=a.clone().project(t);if(l.z<-1||l.z>1||Math.abs(l.x)>.85||Math.abs(l.y)>.82||i.distanceTo(a)>24||!this.game.hasLineOfSight(a))continue;const h=Math.hypot(l.x,l.y);n.push({target:s,score:h*2.1+o*.035})}return n.sort((s,a)=>s.score-a.score),n.map(s=>s.target)}update(e,t){const i=t.time;if(this.stateTime+=e,this.flash>0&&(this.flash=Math.max(0,this.flash-e)),this.state==="dead"){this.deathTimer+=e,this.updateVisual(e,i);return}this.validateLockTarget(),this.queuedAction&&i-this.queuedAt>se.player.inputBuffer&&(this.queuedAction=null);const n=t.input.movementAxes(),s=t.cameraRig.yaw,a=-Math.sin(s),o=-Math.cos(s),l=Math.cos(s),c=-Math.sin(s);let h=a*n.z+l*n.x,u=o*n.z+c*n.x;const d=Math.hypot(h,u);d>.001&&(h/=d,u/=d);const f=d>.001,g=t.input.isDown("ShiftLeft")&&f&&!this.isBusy&&this.state!=="heal";if(this.state==="normal"||this.state==="heal")if(this.queuedAction&&this.state==="normal"&&this.tryStartAction(this.queuedAction,h,u,f,t),this.state==="normal"){this.sprinting=g&&this.stamina>0;let m=this.sprinting?se.player.sprintSpeed:se.player.walkSpeed;if(this.sprinting&&(this.stamina-=se.player.sprintStaminaPerSecond*e,this.lastStaminaUse=i,this.stamina<=0&&(this.stamina=0,this.sprinting=!1,m=se.player.walkSpeed)),f){if(this.moveWithCollision(h*m*e,u*m*e,t),this.lockTarget){const M=this.lockTarget.lockPoint();this.facing=yi(this.facing,Br(this.position.x,this.position.z,M.x,M.z),se.player.lockOn.facingTurnRate*e)}else this.facing=yi(this.facing,Math.atan2(h,u),13*e);this.walkPhase+=m*e*2.5;const p=Math.floor(this.walkPhase/Math.PI);p!==this.lastStep&&(this.lastStep=p,t.audio.footstep(this.sprinting))}else if(this.lockTarget){const p=this.lockTarget.lockPoint();this.facing=yi(this.facing,Br(this.position.x,this.position.z,p.x,p.z),se.player.lockOn.facingTurnRate*e)}}else this.state==="heal"&&(this.sprinting=!1,f&&(this.moveWithCollision(h*se.player.healMoveSpeed*e,u*se.player.healMoveSpeed*e,t),this.facing=yi(this.facing,Math.atan2(h,u),5*e)),this.updateHeal(e,t));else this.state==="attack"?(this.sprinting=!1,this.updateAttack(e,i,t,h,u,f)):this.state==="dodge"?(this.sprinting=!1,this.updateDodge(e,t)):this.state==="hurt"&&(this.sprinting=!1,this.hurtTimer-=e,this.hurtTimer<=0&&(this.state="normal"));this.state==="normal"&&this.queuedAction&&this.tryStartAction(this.queuedAction,h,u,f,t),!(this.state==="attack"||this.state==="dodge"||this.state==="heal"||this.state==="hurt"||this.sprinting)&&i-this.lastStaminaUse>=se.player.staminaRegenDelay&&(this.stamina=Math.min(se.player.maxStamina,this.stamina+se.player.staminaRegenPerSecond*e)),this.position.y=t.world.groundHeight(this.position.x,this.position.z),t.world.isPositionValid(this.position.x,this.position.z,this.radius)?this.safePosition.copy(this.position):(this.position.x=this.safePosition.x,this.position.z=this.safePosition.z,this.position.y=t.world.groundHeight(this.position.x,this.position.z)),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this.updateVisual(e,i)}validateLockTarget(){if(!this.lockTarget)return;if(!this.lockTarget.alive){this.lockTarget=null;return}const e=this.lockTarget.lockPoint();Math.hypot(e.x-this.position.x,e.z-this.position.z)>se.player.lockOn.releaseRange&&(this.lockTarget=null)}tryStartAction(e,t,i,n,s){if(e==="light"||e==="heavy"){const a=se.player.attacks[e];return this.stamina<a.stamina?!1:(this.startAttack(e,t,i,n,s),!0)}return e==="dodge"?this.stamina<se.player.dodge.stamina?!1:(this.startDodge(t,i,n,s),!0):e==="heal"?this.health>=se.player.maxHealth||this.healCharges<=0?!1:(this.startHeal(s),!0):!1}startAttack(e,t,i,n,s){const a=se.player.attacks[e];this.stamina-=a.stamina,this.lastStaminaUse=s.time,this.lastCombatEvent=s.time,this.state="attack",this.stateTime=0,this.queuedAction=null,this.facingCommitted=!1;let o=this.facing;if(this.lockTarget&&this.lockTarget.alive){const l=this.lockTarget.lockPoint();o=Br(this.position.x,this.position.z,l.x,l.z)}else n&&(o=Math.atan2(t,i));this.facing=o,this.attack={type:e,id:`${e}-${++this.attackCounter}`,elapsed:0,hit:new Set,prevTip:null,stepped:0,damage:this.spearReinforced?se.player.workshopUpgrade[e]:a.damage},s.audio.swing(e),s.onCombatEvent()}startDodge(e,t,i,n){const s=se.player.dodge;this.stamina-=s.stamina,this.lastStaminaUse=n.time,this.lastCombatEvent=n.time;let a=e,o=t;i||(a=-Math.sin(this.facing),o=-Math.cos(this.facing)),this.state="dodge",this.stateTime=0,this.queuedAction=null,this.dodge={elapsed:0,dx:a,dz:o,distance:s.distance,duration:s.duration,moved:0},this.facing=Math.atan2(a,o),n.audio.dodge(),n.onCombatEvent()}startHeal(e){this.state="heal",this.stateTime=0,this.queuedAction=null,this.heal={elapsed:0},e.audio.healStart(),e.onCombatEvent()}updateAttack(e,t,i,n,s,a){const o=se.player.attacks[this.attack.type];this.attack.elapsed+=e;const l=this.attack.elapsed,c=o.windup+o.active+o.recovery;if(!this.facingCommitted)if(l<=o.facingWindow)if(this.lockTarget&&this.lockTarget.alive){const d=this.lockTarget.lockPoint();this.facing=yi(this.facing,Br(this.position.x,this.position.z,d.x,d.z),18*e)}else a&&(this.facing=yi(this.facing,Math.atan2(n,s),10*e));else this.facingCommitted=!0;const h=o.windup+o.active*.5;if(l<h&&this.attack.stepped<o.forwardStep){const d=Math.min(o.forwardStep-this.attack.stepped,1.6*e);this.attack.stepped+=d,this.moveWithCollision(Math.sin(this.facing)*d,Math.cos(this.facing)*d,i)}this.root.updateMatrixWorld(!0);const u=this.getSpearTip();if(this.attack.prevTip||(this.attack.prevTip=u.clone()),l>=o.windup&&l<=o.windup+o.active)for(const d of i.getHostileTargets()){if(!d.alive||this.attack.hit.has(d))continue;const f=d.lockPoint();if(Math.hypot(f.x-this.position.x,f.z-this.position.z)>o.reach)continue;const v=mh(this.attack.prevTip.x,this.attack.prevTip.z,u.x,u.z,f.x,f.z),m=mh(this.position.x,this.position.z,u.x,u.z,f.x,f.z);Math.min(v,m)>o.tipRadius+d.radius||(this.attack.hit.add(d),i.queueOutgoingHit(d,this.attack.damage,this.attack.type,this.attack.id))}this.attack.prevTip.copy(u),l>=c&&(this.attack=null,this.state="normal",this.stateTime=0)}updateDodge(e,t){const i=se.player.dodge;this.dodge.elapsed+=e;const n=i.distance/i.duration*e,s=this.position.x,a=this.position.z;this.moveWithCollision(this.dodge.dx*n,this.dodge.dz*n,t),this.dodge.moved+=Math.hypot(this.position.x-s,this.position.z-a),this.dodge.elapsed>=i.duration&&(this.dodge=null,this.state="normal",this.stateTime=0)}updateHeal(e,t){this.heal.elapsed+=e,this.heal.elapsed>=se.player.healTime&&(this.health=Math.min(se.player.maxHealth,this.health+se.player.healAmount),this.healCharges=Math.max(0,this.healCharges-1),this.heal=null,this.state="normal",this.stateTime=0,t.audio.healComplete(),t.ui?.toast("Wounds bound. One healing charge spent."))}moveWithCollision(e,t,i){if(e===0&&t===0)return;const n={x:this.position.x,z:this.position.z},s=this.position.x+e,a=this.position.z+t,o=i.world.resolveMovement(s,a,this.radius,n);Number.isFinite(o.x)&&Number.isFinite(o.z)&&(this.position.x=o.x,this.position.z=o.z),this.position.y=i.world.groundHeight(this.position.x,this.position.z)}isInvulnerable(e=this.game.time){if(e<this.invulnerableUntil)return!0;if(this.state==="dodge"&&this.dodge){const t=se.player.dodge;if(this.dodge.elapsed>=t.invulnerableFrom&&this.dodge.elapsed<=t.invulnerableTo)return!0}return!1}takeDamage(e,t,i,n){const s=n.time;return this.state==="dead"||this.isInvulnerable(s)?!1:(this.health=Math.max(0,this.health-e),this.invulnerableUntil=s+se.player.damageInvulnerability,this.lastDamageTime=s,this.lastCombatEvent=s,this.flash=.22,this.clearCommittedAttack(),this.state==="heal"&&(this.heal=null,n.ui?.toast("Healing interrupted.")),this.state==="dodge"&&(this.dodge=null),this.state="hurt",this.stateTime=0,this.hurtTimer=se.player.hitReactionTime,this.sprinting=!1,n.audio.hurt(),n.onPlayerDamaged(t,e),this.health<=0&&this.die(n),!0)}clearCommittedAttack(){this.attack&&(this.attack.hit.clear(),this.attack.prevTip=null,this.attack=null)}die(e){this.state="dead",this.deathTimer=0,this.attack=null,this.heal=null,this.dodge=null,this.lockTarget=null,this.sprinting=!1,e.audio.death(),e.onPlayerDeath()}getSpearTip(){const e=new L(0,0,2.38);return this.spearPivot.updateWorldMatrix(!0,!1),this.spearPivot.localToWorld(e)}updateVisual(e,t){const i=this.state;this.stateTime;let n=0,s=0,a=0,o=.1,l=0,c=0,h=0,u=0,d=0,f=0;if(this.state==="normal"&&(this.game.input?.movementAxes().x!==0||this.game.input?.movementAxes().z!==0)){const m=this.sprinting?.75:.48;h=Math.sin(this.walkPhase)*m,u=-Math.sin(this.walkPhase)*m,d=-Math.sin(this.walkPhase)*m*.55,s=Math.abs(Math.sin(this.walkPhase*2))*.035,n=this.sprinting?.18:.04}else i==="normal"&&(s=Math.sin(t*1.8)*.012);if(i==="attack"&&this.attack){const m=se.player.attacks[this.attack.type],p=this.attack.elapsed;if(p<m.windup){const M=p/m.windup;o=It(.1,-.34,M),n=-.08*M,f=-.6*M,d=.3*M,c=-.08*M}else if(p<m.windup+m.active){const M=(p-m.windup)/m.active;o=It(-.34,.62,M),n=It(-.08,.28,M),f=It(-.6,.8,M),d=It(.3,-.45,M),c=It(-.08,.03,M),s=-.05}else{const M=(p-m.windup-m.active)/m.recovery;o=It(.62,.1,M),n=It(.28,0,M),f=It(.8,0,M),d=It(-.45,0,M),c=It(.03,0,M)}this.attack.type==="heavy"&&(l=Math.sin(p/(m.windup+m.active+m.recovery)*Math.PI)*-.12)}else if(i==="dodge"&&this.dodge){const m=vt(this.dodge.elapsed/se.player.dodge.duration,0,1);n=Math.sin(m*Math.PI)*.5,s=-Math.sin(m*Math.PI)*.28,a=Math.sin(m*Math.PI)*.32,h=.7,u=-.7,o=-.05}else if(i==="heal")n=-.08,d=-.65,f=-.2,o=-.1,this.healGlow.intensity=.8+Math.sin(t*7)*.3;else if(i==="hurt"){const m=1-this.hurtTimer/se.player.hitReactionTime;n=-.28*Math.sin(m*Math.PI),a=.14*Math.sin(m*Math.PI),d=-.35,f=-.35}else if(i==="dead"){const m=vt(this.deathTimer/.85,0,1);a=m*1.42,s=-m*.52,this.healGlow.intensity=0}i!=="heal"&&(this.healGlow.intensity=0),this.body.rotation.x=n,this.body.rotation.z=a,this.body.position.y=s,this.leftLeg.rotation.x=h,this.rightLeg.rotation.x=u,this.leftArm.rotation.x=d,this.rightArm.rotation.x=f,this.spearPivot.position.z=o,this.spearPivot.rotation.x=l,this.spearPivot.rotation.y=c,this.cloak.rotation.x=.1+n*.4+(this.sprinting?.16:0);const v=this.flash>0?this.flash/.22:0;for(const m of this.bodyMats)m.emissive.setRGB(v*.5,v*.07,v*.04),m.emissiveIntensity=1}}function Di(r,e={}){return new ua({color:r,flatShading:!0,...e})}function nt(r,e,t,i=0,n=0,s=0){const a=new He(e,t);return a.position.set(i,n,s),a.castShadow=!0,a.receiveShadow=!0,r.add(a),a}function ex(r,e,t=22){const i=[0,0,0],n=[];for(let a=0;a<=t;a++){const o=-e+a/t*e*2;i.push(Math.sin(o)*r,0,Math.cos(o)*r),a>0&&n.push(0,a,a+1)}const s=new wt;return s.setAttribute("position",new $e(i,3)),s.setIndex(n),s.computeVertexNormals(),s}function tx(r=16757853){return new Ht({color:r,transparent:!0,opacity:.2,depthWrite:!1,side:ti,blending:Ws})}function oa(r,e,t){const i=new me,n=new He(r==="circle"?new tr(e,30):ex(e,t),tx());return n.rotation.x=r==="circle"?-Math.PI/2:0,n.position.y=.035,i.add(n),i.visible=!1,{group:i,mesh:n}}class ix{constructor(e,t,i){this.game=e,this.def=t,this.encounter=i,this.type=t.type,this.cfg=se.ordinaryEnemies[t.type],this.name=this.cfg.name,this.radius=this.cfg.radius,this.height=this.cfg.height,this.maxHealth=this.cfg.health,this.health=this.maxHealth,this.home={x:t.x,z:t.z},this.position=new L(t.x,e.world.groundHeight(t.x,t.z),t.z),this.facing=0,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attackCounter=0,this.attack=null,this.hitPlayer=!1,this.staggerResistantUntil=-1,this.flash=0,this.idlePhase=Math.random()*Math.PI*2,this.deathTime=0,this.hasToken=!1,this._buildVisual(),this.reset()}_buildVisual(){this.root=new me,this.root.name=this.name,this.body=new me,this.root.add(this.body),this.materials=[],this.type==="briarling"?this._buildBriarling():this._buildMossguard(),this.game.scene.add(this.root),this.tells={},this.type==="briarling"?this.tells.lunge=oa("sector",this.cfg.attack.reach,this.cfg.attack.halfArc):this.tells.sweep=oa("sector",this.cfg.attack.reach,this.cfg.attack.halfArc);for(const e of Object.keys(this.tells))this.game.scene.add(this.tells[e].group)}_buildBriarling(){const e=Di(4995627),t=Di(6638386),i=Di(3814440),n=new Ht({color:16762726});this.materials.push(e,t,i);const s=nt(this.body,new Gt(.46,0),e,0,.58,0);s.scale.set(1,.82,1.2),this.core=s;for(let a=0;a<7;a++){const o=a/7*Math.PI*2,l=nt(this.body,new Si(.09,.45,4),i,Math.sin(o)*.38,.68+a%2*.12,Math.cos(o)*.42);l.rotation.z=Math.cos(o)*.8,l.rotation.x=-Math.sin(o)*.8}for(const a of[-1,1]){const o=nt(this.body,new Gt(.055,0),n,a*.14,.66,.37);o.castShadow=!1}this.legs=[];for(let a=0;a<4;a++){const o=new me;o.position.set((a%2?1:-1)*.28,.36,(a<2?1:-1)*.22);const l=nt(o,new ut(.045,.025,.55,4),e,0,-.25,0);l.rotation.z=(a%2?-1:1)*.35,this.body.add(o),this.legs.push(o)}this.armL=new me,this.armL.position.set(-.34,.62,.12),nt(this.armL,new ut(.05,.03,.5,4),t,-.1,-.18,0),this.body.add(this.armL),this.armR=new me,this.armR.position.set(.34,.62,.12),nt(this.armR,new ut(.05,.03,.5,4),t,.1,-.18,0),this.body.add(this.armR)}_buildMossguard(){const e=Di(6910827),t=Di(5266003),i=Di(6454602),n=new Ht({color:16762726});this.materials.push(e,t,i);const s=nt(this.body,new Ji(.78,0),e,0,1.22,0);s.scale.set(1,1.1,.72),this.core=s,nt(this.body,new oi(.82,.28,.58),i,0,1.72,-.04),nt(this.body,new Gt(.28,0),t,0,1.92,.08).scale.set(1,.82,.9),nt(this.body,new Gt(.055,0),n,-.11,1.96,.32).castShadow=!1,nt(this.body,new Gt(.055,0),n,.11,1.96,.32).castShadow=!1,this.legL=new me,this.legL.position.set(-.38,.72,0),nt(this.legL,new ut(.17,.14,.82,5),t,0,-.38,0),this.body.add(this.legL),this.legR=new me,this.legR.position.set(.38,.72,0),nt(this.legR,new ut(.17,.14,.82,5),t,0,-.38,0),this.body.add(this.legR),this.armL=new me,this.armL.position.set(-.82,1.55,0),nt(this.armL,new ut(.15,.12,.75,5),t,0,-.36,0),this.body.add(this.armL),this.armR=new me,this.armR.position.set(.82,1.55,0),nt(this.armR,new ut(.22,.17,1,5),e,0,-.44,0),nt(this.armR,new Ji(.3,0),t,0,-.98,0).scale.set(1.2,1,1.1),this.body.add(this.armR),nt(this.body,new Gt(.22,0),i,-.5,1.5,-.4).scale.set(1,.4,1),nt(this.body,new Gt(.18,0),i,.45,.9,.28).scale.set(1,.35,1)}reset(){this.releaseToken(),this.position.set(this.home.x,this.game.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.health=this.maxHealth,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attack=null,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.staggerResistantUntil=-1,this.root.visible=!0,this.root.position.copy(this.position),this.root.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.scale.set(1,1,1);for(const e of Object.keys(this.tells))this.tells[e].group.visible=!1;this.updateHealthBar()}engage(){!this.alive||this.engaged||(this.engaged=!0,this.state="chase",this.stateTime=0)}lockPoint(){return new L(this.position.x,this.position.y+this.height*.62,this.position.z)}updateHealthBar(){}receiveToken(){return this.hasToken?!0:this.game.ordinaryAttacker&&this.game.ordinaryAttacker!==this?!1:(this.hasToken=!0,this.game.ordinaryAttacker=this,!0)}releaseToken(){(this.hasToken||this.game.ordinaryAttacker===this)&&(this.game.ordinaryAttacker===this&&(this.game.ordinaryAttacker=null),this.hasToken=!1)}update(e,t){if(this.flash>0&&(this.flash=Math.max(0,this.flash-e)),!this.alive){this.deathTime+=e,this._animate(e,t.time);return}if(!this.engaged){this._animate(e,t.time);return}const i=t.player;if(i.isDead){this._animate(e,t.time);return}if(this._shouldReset(i)){this.reset(),t.onEnemyLeashReset(this);return}this.stateTime+=e;const n=i.position.x-this.position.x,s=i.position.z-this.position.z,a=Math.hypot(n,s),o=Math.atan2(n,s);if(this.state==="chase"||this.state==="idle"){if(this.state="chase",(this.stateTime<.2||a>this.cfg.stopRange)&&(this.facing=yi(this.facing,o,5.5*e)),a>this.cfg.stopRange){const c=this.cfg.speed,h=Math.min(c*e,a-this.cfg.stopRange+.05);h>0&&this._move(Math.sin(o)*h,Math.cos(o)*h,t)}else if(!this.hasToken&&t.ordinaryAttacker&&t.ordinaryAttacker!==this){const c=this.stateTime%2<1?1:-1,h=o+Math.PI/2*c;this._move(Math.sin(h)*this.cfg.speed*.35*e,Math.cos(h)*this.cfg.speed*.35*e,t)}const l=a<=this.cfg.attackRange&&a>.3;if(l&&this.receiveToken())this._startAttack(t);else if(l&&!this.hasToken){const c=Math.sin(t.time*.8+this.idlePhase)>0?1:-1,h=o+Math.PI/2*c;this._move(Math.sin(h)*this.cfg.speed*.3*e,Math.cos(h)*this.cfg.speed*.3*e,t)}}else if(this.state==="windup"){const l=this.attack;this.stateTime<l.tell-this.cfg.facingLock&&(this.facing=yi(this.facing,o,7*e)),this.stateTime>=l.tell&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this._hideTells())}else if(this.state==="active"){const l=this.attack;if(this.type==="briarling"){const c=2*e;this._move(Math.sin(this.facing)*c,Math.cos(this.facing)*c,t)}this.hitPlayer||Mu(this.position,this.facing,i.position,l.reach,l.halfArc)&&(this.hitPlayer=!0,t.queueIncomingHit(this,l.damage,l.id,"ordinary")),this.stateTime>=l.active&&(this.state="recovery",this.stateTime=0)}else this.state==="recovery"?this.stateTime>=this.attack.recovery&&(this.releaseToken(),this.attack=null,this.state="chase",this.stateTime=0):this.state==="stagger"&&this.stateTime>=this.cfg.staggerDuration&&(this.state="chase",this.stateTime=0);this.position.y=t.world.groundHeight(this.position.x,this.position.z),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this._animate(e,t.time)}_shouldReset(e){return e.position.z>3&&Math.abs(e.position.x)<20?!0:Math.hypot(e.position.x-this.home.x,e.position.z-this.home.z)>this.cfg.leash}_move(e,t,i){const n={x:this.position.x,z:this.position.z},s=i.world.resolveMovement(this.position.x+e,this.position.z+t,this.radius,n);this.position.x=s.x,this.position.z=s.z}_startAttack(e){this.attackCounter++,this.state="windup",this.stateTime=0,this.attack={...this.cfg.attack,id:`${this.type}-${this.attackCounter}`,activeElapsed:0};const t=e.player.position.x-this.position.x,i=e.player.position.z-this.position.z;this.facing=Math.atan2(t,i),e.audio.enemyTell(this.type),this.game.onCombatEvent()}_hideTells(){for(const e of Object.keys(this.tells))this.tells[e].group.visible=!1}_showTell(e,t,i,n,s,a){const o=this.tells[e];if(o){for(const l of Object.keys(this.tells))l!==e&&(this.tells[l].group.visible=!1);o.group.visible=!0,o.group.position.set(t,a+.04,i),o.group.rotation.y=n,o.mesh.material.opacity=s}}receivePlayerHit(e,t,i,n){if(this.alive){if(this.health=Math.max(0,this.health-e),this.flash=.18,n.onEnemyDamaged(this,e,t),this.health<=0){this.die(n);return}t==="heavy"&&this.state==="windup"&&n.time>=this.staggerResistantUntil&&(this.staggerResistantUntil=n.time+this.cfg.staggerResistance,this.releaseToken(),this.attack=null,this.state="stagger",this.stateTime=0,this._hideTells(),n.ui?.toast(`${this.name} staggered.`)),this.updateHealthBar()}}die(e){this.alive&&(this.alive=!1,this.engaged=!1,this.state="dead",this.deathTime=0,this.releaseToken(),this._hideTells(),this.attack=null,e.onEnemyKilled(this))}_animate(e,t){const i=this.state;let n=Math.sin(t*2+this.idlePhase)*.02,s=0,a=0,o=0,l=1,c=1,h=1,u=0,d=0,f=0,g=0;if(this.type==="briarling"){if(i==="windup"){const m=vt(this.stateTime/this.cfg.attack.tell,0,1);n=-.18*m,s=-.18*m,l=1+.18*m,h=1-.16*m,this._showTell("lunge",this.position.x,this.position.z,this.facing,.08+m*.28,this.position.y)}else if(i==="active")o=.38,s=.22,h=1.28,l=.9;else if(i==="recovery")o=.1,s=.08;else if(i==="stagger")a=.55,n=-.12;else if(i==="dead"){const m=vt(this.deathTime/.7,0,1);a=m*1.4,n=-m*.3}else for(let m=0;m<this.legs.length;m++)this.legs[m].rotation.x=Math.sin(t*4+m*1.7)*.15;this.armL.rotation.x=-.3+u,this.armR.rotation.x=-.3+d,this.armL.rotation.z=f,this.armR.rotation.z=g,i==="windup"?(this.armL.rotation.x=-.9,this.armR.rotation.x=-.9):i==="active"&&(this.armL.rotation.x=.7,this.armR.rotation.x=.7)}else{if(i==="windup"){const m=vt(this.stateTime/this.cfg.attack.tell,0,1);s=-.14*m,n=-.08*m,d=-1.1*m,u=.25*m,this._showTell("sweep",this.position.x,this.position.z,this.facing,.08+m*.28,this.position.y)}else if(i==="active")s=.18,d=1.35,u=-.25;else if(i==="recovery")s=.05,d=.6;else if(i==="stagger")s=-.24,a=.2;else if(i==="dead"){const m=vt(this.deathTime/1,0,1);a=m*1.35,n=-m*.45}else this.legL.rotation.x=Math.sin(t*2.5+this.idlePhase)*.08,this.legR.rotation.x=-Math.sin(t*2.5+this.idlePhase)*.08;this.armL.rotation.x=u,this.armR.rotation.x=d}this.body.position.set(0,n,o),this.body.rotation.x=s,this.body.rotation.z=a,this.body.scale.set(l,c,h);const v=this.flash>0?this.flash/.18:0;for(const m of this.materials)m.emissive.setRGB(v*.42,v*.08,v*.04),m.emissiveIntensity=1}}class nx{constructor(e){this.game=e,this.cfg=se.boss,this.name=this.cfg.name,this.radius=this.cfg.radius,this.height=this.cfg.height,this.maxHealth=this.cfg.health,this.health=this.maxHealth,this.home={x:0,z:-120},this.position=new L(this.home.x,e.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.alive=!0,this.engaged=!1,this.isBoss=!0,this.isBossHidden=!1,this.state="idle",this.stateTime=0,this.attack=null,this.attackCounter=0,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.phase=1,this.phaseTransitionPending=!1,this.sequenceIndex=0,this.idlePhase=1.2,this._buildVisual(),this.tells={sweep:oa("sector",this.cfg.attacks.sweep.reach,this.cfg.attacks.sweep.halfArc),overhead:oa("circle",this.cfg.attacks.overhead.radius,Math.PI)};for(const t of Object.keys(this.tells))this.game.scene.add(this.tells[t].group);this.reset()}_buildVisual(){const e=Di(6911085),t=Di(5134675),i=Di(8950153),n=Di(5994567),s=new Ht({color:16760161});this.materials=[e,t,i,n],this.root=new me,this.root.name="Gate Warden",this.body=new me,this.root.add(this.body),this.torsoGroup=new me,this.torsoGroup.position.y=2.25,this.body.add(this.torsoGroup);const a=nt(this.torsoGroup,new Ji(1.15,0),e,0,0,0);a.scale.set(1.05,1.25,.72),this.core=a,nt(this.torsoGroup,new oi(1.5,.45,.9),t,0,.55,0),nt(this.torsoGroup,new oi(1.25,.35,.85),n,0,.12,-.55).scale.set(1,.4,1),nt(this.torsoGroup,new Gt(.42,0),i,0,1.15,.1).scale.set(1,.82,.95),nt(this.torsoGroup,new Gt(.075,0),s,-.16,1.2,.47).castShadow=!1,nt(this.torsoGroup,new Gt(.075,0),s,.16,1.2,.47).castShadow=!1;const l=nt(this.torsoGroup,new Si(.28,.7,5),t,0,1.55,-.1);l.rotation.z=.1;for(const u of[-1,1])nt(this.torsoGroup,new Ji(.55,0),t,u*1.15,.6,0).scale.set(1,.9,.85);this.armL=new me,this.armL.position.set(-1.3,2.72,0),nt(this.armL,new ut(.25,.2,1.3,5),t,0,-.6,0),nt(this.armL,new Ji(.48,0),e,0,-1.35,0).scale.set(1.15,1,1.1),this.body.add(this.armL),this.armR=new me,this.armR.position.set(1.3,2.72,0),nt(this.armR,new ut(.3,.23,1.45,5),t,0,-.66,0),nt(this.armR,new Ji(.58,0),e,0,-1.5,0).scale.set(1.2,1.05,1.15),this.body.add(this.armR),this.legL=new me,this.legL.position.set(-.55,1.15,0),nt(this.legL,new ut(.3,.26,1.25,5),t,0,-.6,0),this.body.add(this.legL),this.legR=new me,this.legR.position.set(.55,1.15,0),nt(this.legR,new ut(.3,.26,1.25,5),t,0,-.6,0),this.body.add(this.legR),this.phaseGlow=new Pi(16747586,0,10,1.6),this.phaseGlow.position.set(0,2.3,.6),this.body.add(this.phaseGlow),this.game.scene.add(this.root)}reset(){this.position.set(this.home.x,this.game.world.groundHeight(this.home.x,this.home.z),this.home.z),this.facing=0,this.health=this.maxHealth,this.alive=!0,this.engaged=!1,this.state="idle",this.stateTime=0,this.attack=null,this.hitPlayer=!1,this.flash=0,this.deathTime=0,this.phase=1,this.phaseTransitionPending=!1,this.sequenceIndex=0,this.root.visible=!this.isBossHidden,this.root.position.copy(this.position),this.root.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.scale.set(1,1,1),this.phaseGlow.intensity=0;for(const e of Object.keys(this.tells))this.tells[e].group.visible=!1}setDefeatedAbsent(e){if(this.isBossHidden=e,e){this.alive=!1,this.engaged=!1,this.state="dead",this.root.visible=!1;for(const t of Object.keys(this.tells))this.tells[t].group.visible=!1}}engage(){!this.alive||this.engaged||(this.engaged=!0,this.state="chase",this.stateTime=0,this.game.audio.bossTransition(),this.game.ui?.toast("The Gate Warden stirs."))}lockPoint(){return new L(this.position.x,this.position.y+2.4,this.position.z)}update(e,t){if(this.flash>0&&(this.flash=Math.max(0,this.flash-e)),!this.alive){this.deathTime+=e,this.deathTime>4&&(this.root.visible=!1),this._animate(e,t.time);return}if(!this.engaged){this._animate(e,t.time);return}const i=t.player;if(i.isDead){this._animate(e,t.time);return}this.stateTime+=e;const n=i.position.x-this.position.x,s=i.position.z-this.position.z,a=Math.hypot(n,s),o=Math.atan2(n,s);if(this.state==="chase"){if(this.facing=yi(this.facing,o,4.5*e),a>this.cfg.stopRange){const l=Math.min(this.cfg.speed*e,a-this.cfg.stopRange+.02);this._move(Math.sin(o)*l,Math.cos(o)*l,t)}a<=this.cfg.attackRange&&this.stateTime>.25&&this._chooseAttack(t)}else if(this.state==="windup"){const l=this.attack;this.stateTime<l.tell-this.cfg.facingLock&&(this.facing=yi(this.facing,o,4.2*e)),this.stateTime>=l.tell&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this._hideTells(),t.audio.swing(l.damage>=30?"heavy":"light"))}else this.state==="active"?(this._checkContact(t),this.stateTime>=this.attack.active&&(this.attack.kind==="double"&&this.attack.stage==="first"?(this.state="doubleGap",this.stateTime=0,this.attack.secondId=`${this.cfg.attacks.doubleSweep.second.id}-${++this.attackCounter}`):(this.state="recovery",this.stateTime=0))):this.state==="doubleGap"?(this.stateTime<this.cfg.attacks.doubleSweep.gap-this.cfg.facingLock&&(this.facing=yi(this.facing,o,3.6*e)),this.stateTime>=this.cfg.attacks.doubleSweep.gap&&(this.state="active",this.stateTime=0,this.hitPlayer=!1,this.attack.stage="second",this.attack.id=this.attack.secondId,this.attack.tell=0,this._hideTells(),t.audio.swing("light"))):this.state==="recovery"?this.stateTime>=this.attack.recovery&&(this.attack=null,this.health<=this.maxHealth*.5&&this.phase===1?(this.state="transition",this.stateTime=0,this.phaseTransitionPending=!0,this.phaseGlow.intensity=2,t.audio.bossTransition(),t.ui?.toast("The Warden draws deeper strength.")):(this.state="chase",this.stateTime=0)):this.state==="transition"&&this.stateTime>=this.cfg.transitionTime&&(this.phase=2,this.phaseTransitionPending=!1,this.state="chase",this.stateTime=0,this.sequenceIndex=0,this.phaseGlow.intensity=.7,t.ui?.toast("The Gate Warden enters a second phase."));this.position.y=t.world.groundHeight(this.position.x,this.position.z),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this._animate(e,t.time)}_chooseAttack(e){let t;if(this.phase===1)t=this.sequenceIndex%2===0?"sweep":"overhead",this.sequenceIndex++;else{const i=["sweep","overhead","double"];t=i[this.sequenceIndex%i.length],this.sequenceIndex++}if(this.attackCounter++,t==="sweep"){const i=this.cfg.attacks.sweep;this.attack={kind:"sweep",id:`${i.id}-${this.attackCounter}`,tell:i.tell,active:i.active,recovery:i.recovery,damage:i.damage,reach:i.reach,halfArc:i.halfArc},e.audio.enemyTell("warden-sweep")}else if(t==="overhead"){const i=this.cfg.attacks.overhead;this.attack={kind:"overhead",id:`${i.id}-${this.attackCounter}`,tell:i.tell,active:i.active,recovery:i.recovery,damage:i.damage,radius:i.radius,impactDistance:i.impactDistance},e.audio.enemyTell("warden-overhead")}else{const i=this.cfg.attacks.doubleSweep;this.attack={kind:"double",stage:"first",id:`${i.first.id}-${this.attackCounter}`,tell:i.first.tell,active:i.first.active,recovery:i.recovery,damage:i.first.damage,reach:i.first.reach,halfArc:i.first.halfArc},e.audio.enemyTell("warden-sweep")}this.state="windup",this.stateTime=0,this.facing=Math.atan2(e.player.position.x-this.position.x,e.player.position.z-this.position.z),e.onCombatEvent()}_checkContact(e){if(this.hitPlayer||!this.attack)return;const t=e.player;let i=!1;if(this.attack.kind==="overhead"){const n=this.position.x+Math.sin(this.facing)*this.attack.impactDistance,s=this.position.z+Math.cos(this.facing)*this.attack.impactDistance;i=Math.hypot(t.position.x-n,t.position.z-s)<=this.attack.radius+t.radius}else i=Mu(this.position,this.facing,t.position,this.attack.reach,this.attack.halfArc);i&&(this.hitPlayer=!0,e.queueIncomingHit(this,this.attack.damage,this.attack.id,"boss"))}_move(e,t,i){const n={x:this.position.x,z:this.position.z},s=i.world.resolveMovement(this.position.x+e,this.position.z+t,this.radius,n);this.position.x=s.x,this.position.z=s.z}_hideTells(){for(const e of Object.keys(this.tells))this.tells[e].group.visible=!1}_showSweepTell(e,t=0){const i=this.tells.sweep;i.group.visible=!0,this.tells.overhead.group.visible=!1,i.group.position.set(this.position.x,this.position.y+.04,this.position.z),i.group.rotation.y=this.facing+t,i.mesh.material.opacity=e}_showOverheadTell(e){const t=this.tells.overhead;t.group.visible=!0,this.tells.sweep.group.visible=!1;const i=this.position.x+Math.sin(this.facing)*this.cfg.attacks.overhead.impactDistance,n=this.position.z+Math.cos(this.facing)*this.cfg.attacks.overhead.impactDistance;t.group.position.set(i,this.position.y+.04,n),t.group.rotation.y=0,t.mesh.material.opacity=e}receivePlayerHit(e,t,i,n){this.alive&&(this.health=Math.max(0,this.health-e),this.flash=.16,n.onBossDamaged(this,e,t),this.health<=0&&this.die(n))}die(e){this.alive&&(this.alive=!1,this.engaged=!1,this.state="dead",this.deathTime=0,this._hideTells(),this.attack=null,this.phaseGlow.intensity=0,e.onBossDefeated(this))}_animate(e,t){const i=this.state,n=this.attack;let s=Math.sin(t*1.5+this.idlePhase)*.018,a=0,o=0,l=0,c=0,h=0,u=0,d=0,f=0,g=0,v=0;if(i==="windup"&&n){const p=vt(this.stateTime/n.tell,0,1);n.kind==="sweep"||n.kind==="double"?(l=-1.1*p,f=-1.25*p,u=-.4*p,d=.3*p,s=-.1*p,this._showSweepTell(.08+p*.3)):(c=-.24*p,h=-2.25*p,u=-2.25*p,s=.12*p,this._showOverheadTell(.08+p*.32))}else if(i==="active"&&n)if(n.kind==="sweep"||n.kind==="double"){const p=vt(this.stateTime/n.active,0,1);n.stage==="second"?(l=It(.95,-.95,p),f=It(1.2,-1.2,p)):(l=It(-1.1,1,p),f=It(-1.25,1.2,p)),a=.12,s=-.05}else{const p=vt(this.stateTime/n.active,0,1);c=It(-.24,.38,p),h=It(-2.25,.8,p),u=It(-2.25,.8,p),s=It(.12,-.25,p),p>.9&&(s=-.2)}else if(i==="doubleGap"&&n){const p=vt(this.stateTime/this.cfg.attacks.doubleSweep.gap,0,1);l=.95,f=1.2,u=.25,s=-.04,this._showSweepTell(.1+p*.32,0)}else if(i==="recovery"&&n){const p=vt(this.stateTime/n.recovery,0,1);n.kind==="sweep"||n.kind==="double"?(l=1*(1-p),f=1.1*(1-p),u=.4*(1-p)):(c=.38*(1-p),h=.8*(1-p),u=.8*(1-p),s=-.2*(1-p))}else if(i==="transition"){const p=vt(this.stateTime/this.cfg.transitionTime,0,1),M=Math.sin(p*Math.PI*4);s=-.18*Math.sin(p*Math.PI),c=-.18*Math.sin(p*Math.PI),d=.5+M*.2,f=-.5-M*.2,this.phaseGlow.intensity=2.2+M*.6,g=.1,v=-.1}else if(i==="dead"){const p=vt(this.deathTime/1.8,0,1);o=p*1.25,s=-p*.9,c=p*.4,h=p*.8,u=p*.8,g=-p*.5,v=p*.5}else d=.06+Math.sin(t*1.2)*.025,f=-.06-Math.sin(t*1.2)*.025,g=Math.sin(t*1.4)*.025,v=-Math.sin(t*1.4)*.025;this.body.position.y=s,this.body.rotation.x=a,this.body.rotation.z=o,this.torsoGroup.rotation.y=l,this.torsoGroup.rotation.x=c,this.armL.rotation.x=h,this.armR.rotation.x=u,this.armL.rotation.z=d,this.armR.rotation.z=f,this.legL.rotation.x=g,this.legR.rotation.x=v;const m=this.flash>0?this.flash/.16:0;for(const p of this.materials)p.emissive.setRGB(m*.5,m*.1,m*.05),p.emissiveIntensity=1}}class sx{constructor(e){this.canvas=e,this.game=null,this.keys=new Set,this.pressed=new Set,this.pointerLocked=!1,this.mouse={dx:0,dy:0},this.ignoreUnlock=!1,this.firstGesture=!1,this._bind()}attach(e){this.game=e}_bind(){window.addEventListener("keydown",e=>{if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&this.game?.mode==="playing"&&e.preventDefault(),this._gesture(),!e.repeat){if(this.keys.add(e.code),this.pressed.add(e.code),e.code==="Escape"){this.game?.mode==="playing"?(e.preventDefault(),this.game.pause("pause")):this.game?.mode==="paused"&&this.game.resumeFromPause();return}this.game?.acceptsGameplayInput()&&(e.code==="Space"?this.game.player.queueAction("dodge"):e.code==="KeyR"?this.game.player.queueAction("heal"):e.code==="KeyE"?this.game.interact():e.code==="KeyQ"&&this.game.player.toggleLockOn())}}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.game?.mode==="playing"&&this.game.pause("focus")}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.game?.mode==="playing"&&this.game.pause("focus")}),window.addEventListener("contextmenu",e=>{this.game?.mode==="playing"&&e.preventDefault()}),this.canvas.addEventListener("mousedown",e=>{if(this._gesture(),this.game?.mode==="playing"){if(!this.pointerLocked){this.requestCapture();return}e.button===0?this.game.player.queueAction("light"):e.button===2&&this.game.player.queueAction("heavy")}}),this.canvas.addEventListener("wheel",e=>{this.game?.mode!=="playing"||!this.pointerLocked||(e.preventDefault(),this.game.player.lockTarget&&this.game.player.cycleLockTarget(Math.sign(e.deltaY)))},{passive:!1}),document.addEventListener("mousemove",e=>{if(!this.pointerLocked||this.game?.mode!=="playing")return;const t=se.player.camera.mouseSensitivity*(this.game.progress?.settings.mouseSensitivity??1);this.mouse.dx+=e.movementX*t,this.mouse.dy+=e.movementY*t}),document.addEventListener("pointerlockchange",()=>{const e=this.pointerLocked;this.pointerLocked=document.pointerLockElement===this.canvas,!this.pointerLocked&&e&&(this.keys.clear(),this.game?.mode==="playing"&&!this.ignoreUnlock&&this.game.pause("mouse")),this.ignoreUnlock=!1,this.game?.ui?.setCaptureState(this.pointerLocked)}),document.addEventListener("pointerlockerror",()=>{this.game?.ui?.showCaptureHint()})}_gesture(){this.firstGesture||(this.firstGesture=!0,this.game?.audio?.start())}requestCapture(){if(!this.pointerLocked)try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>this.game?.ui?.showCaptureHint())}catch{this.game?.ui?.showCaptureHint()}}releaseCapture(){document.pointerLockElement&&(this.ignoreUnlock=!0,document.exitPointerLock()),this.pointerLocked=!1,this.keys.clear()}consumeMouse(){const e={x:this.mouse.dx,y:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}isDown(e){return this.keys.has(e)}movementAxes(){let e=0,t=0;return this.keys.has("KeyW")&&(t+=1),this.keys.has("KeyS")&&(t-=1),this.keys.has("KeyA")&&(e-=1),this.keys.has("KeyD")&&(e+=1),{x:e,z:t}}clear(){this.keys.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}}class rx{constructor(){this.ctx=null,this.started=!1,this.settings=null,this.musicGain=null,this.effectsGain=null,this.campGain=null,this.windGain=null,this.campDistance=99}start(){if(this.started){this.ctx?.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx=new e,this.started=!0,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.effectsGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.effectsGain.connect(this.master),this._buildAmbience(),this.applySettings(this.settings)}catch{this.ctx=null}}_noiseBuffer(e=2){const t=Math.floor(this.ctx.sampleRate*e),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=i.getChannelData(0);let s=0;for(let a=0;a<t;a++){const o=Math.random()*2-1;s=s*.985+o*.015,n[a]=s*3.5}return i}_buildAmbience(){const e=this.ctx,t=e.createBufferSource();t.buffer=this._noiseBuffer(3),t.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=520,i.Q.value=.4,this.windGain=e.createGain(),this.windGain.gain.value=.12,t.connect(i).connect(this.windGain).connect(this.musicGain),t.start();const n=e.createBufferSource();n.buffer=this._noiseBuffer(2.2),n.loop=!0;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=740,s.Q.value=.8,this.campGain=e.createGain(),this.campGain.gain.value=0,n.connect(s).connect(this.campGain).connect(this.musicGain),n.start();const a=e.createGain();a.gain.value=.035,a.connect(this.musicGain);for(const[o,l]of[[55,.5],[82.5,.22],[110,.12]]){const c=e.createOscillator();c.type="sine",c.frequency.value=o;const h=e.createGain();h.gain.value=l,c.connect(h).connect(a),c.start()}}applySettings(e){if(this.settings=e,!this.ctx||!e)return;const t=this.ctx.currentTime;this.musicGain.gain.setTargetAtTime(e.musicVolume*.72,t,.08),this.effectsGain.gain.setTargetAtTime(e.effectsVolume,t,.05)}update(e,t){if(!this.ctx||!this.campGain)return;if(t?.player){const n=t.player.position;this.campDistance=Math.hypot(n.x-0,n.z-16)}const i=this.campDistance<16?Math.max(0,.055*(1-this.campDistance/16)):0;this.campGain.gain.setTargetAtTime(i,this.ctx.currentTime,.15)}_env(e,t,i,n,s,a){const o=e.gain;o.cancelScheduledValues(t),o.setValueAtTime(1e-4,t),o.exponentialRampToValueAtTime(Math.max(2e-4,a),t+i),o.setValueAtTime(Math.max(2e-4,a),t+i+n),o.exponentialRampToValueAtTime(1e-4,t+i+n+s)}_tone({freq:e=220,type:t="sine",duration:i=.2,volume:n=.1,slide:s=0,attack:a=.01,release:o=.15,pan:l=0,delay:c=0}){if(!this.ctx)return;const h=this.ctx,u=h.currentTime+c,d=h.createOscillator(),f=h.createGain(),g=h.createStereoPanner();d.type=t,d.frequency.setValueAtTime(e,u),s&&d.frequency.exponentialRampToValueAtTime(Math.max(20,e+s),u+i),this._env(f,u,a,Math.max(0,i-a-o),o,n),g.pan.value=l,d.connect(f).connect(g).connect(this.effectsGain),d.start(u),d.stop(u+i+.05)}_noise({duration:e=.2,volume:t=.1,freq:i=800,q:n=.8,type:s="bandpass",slide:a=0,pan:o=0,delay:l=0}){if(!this.ctx)return;const c=this.ctx,h=c.currentTime+l,u=c.createBufferSource();u.buffer=this._noiseBuffer(Math.max(.12,e+.1));const d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(i,h),d.Q.value=n,a&&d.frequency.exponentialRampToValueAtTime(Math.max(60,i+a),h+e);const f=c.createGain();this._env(f,h,.01,Math.max(0,e-.06),.05,t);const g=c.createStereoPanner();g.pan.value=o,u.connect(d).connect(f).connect(g).connect(this.effectsGain),u.start(h),u.stop(h+e+.15)}uiClick(){this._tone({freq:520,type:"triangle",duration:.06,volume:.045,slide:-90})}pickup(){this._tone({freq:430,type:"triangle",duration:.16,volume:.08,slide:190}),this._tone({freq:640,type:"sine",duration:.22,volume:.05,slide:120,delay:.08})}save(){this._tone({freq:760,type:"sine",duration:.08,volume:.025,slide:80})}denied(){this._tone({freq:120,type:"square",duration:.12,volume:.04,slide:-30})}lockOn(){this._tone({freq:900,type:"sine",duration:.09,volume:.035,slide:220})}swing(e="light"){e==="heavy"?this._noise({duration:.22,volume:.16,freq:420,q:.7,slide:-240}):this._noise({duration:.14,volume:.12,freq:720,q:.9,slide:-380})}hit(e=!1){this._tone({freq:e?95:135,type:"triangle",duration:.16,volume:e?.18:.12,slide:-40}),this._noise({duration:.08,volume:e?.15:.1,freq:1300,q:1.2,slide:-700})}hurt(){this._tone({freq:170,type:"sawtooth",duration:.24,volume:.11,slide:-85}),this._noise({duration:.12,volume:.08,freq:600,q:.5,slide:-260})}dodge(){this._noise({duration:.22,volume:.07,freq:900,q:.4,slide:-600})}healStart(){this._tone({freq:320,type:"sine",duration:.6,volume:.035,slide:160})}healComplete(){this._tone({freq:540,type:"sine",duration:.5,volume:.055,slide:120}),this._tone({freq:810,type:"sine",duration:.6,volume:.03,slide:80,delay:.12})}death(){this._tone({freq:140,type:"sawtooth",duration:1,volume:.1,slide:-90}),this._noise({duration:.7,volume:.06,freq:300,q:.5,slide:-200})}enemyTell(e){e==="briarling"?(this._noise({duration:.55,volume:.08,freq:1800,q:1.2,slide:-900}),this._tone({freq:340,type:"triangle",duration:.35,volume:.04,slide:100})):e==="mossguard"?(this._noise({duration:.8,volume:.11,freq:260,q:.7,slide:120}),this._tone({freq:78,type:"sawtooth",duration:.65,volume:.045,slide:-10})):e==="warden-sweep"?(this._noise({duration:.9,volume:.12,freq:420,q:.6,slide:300}),this._tone({freq:70,type:"sawtooth",duration:.9,volume:.05,slide:15})):e==="warden-overhead"?(this._tone({freq:115,type:"square",duration:1,volume:.055,slide:90}),this._noise({duration:.8,volume:.08,freq:900,q:.8,slide:-400})):this._tone({freq:200,type:"triangle",duration:.5,volume:.05,slide:80})}gate(){this._noise({duration:.7,volume:.12,freq:320,q:.7,slide:220}),this._tone({freq:90,type:"triangle",duration:.8,volume:.06,slide:35})}construction(){this._tone({freq:220,type:"triangle",duration:.25,volume:.08,slide:110}),this._tone({freq:330,type:"triangle",duration:.3,volume:.06,slide:140,delay:.22}),this._tone({freq:494,type:"sine",duration:.7,volume:.04,slide:90,delay:.46})}beacon(){this._tone({freq:196,type:"sine",duration:1.4,volume:.06,slide:98}),this._tone({freq:392,type:"sine",duration:1.6,volume:.04,slide:196,delay:.35}),this._tone({freq:587,type:"sine",duration:1.9,volume:.03,slide:90,delay:.7})}bossTransition(){this._tone({freq:55,type:"sawtooth",duration:1,volume:.08,slide:55}),this._noise({duration:1,volume:.08,freq:240,q:.5,slide:500})}bossDefeat(){this._tone({freq:120,type:"sawtooth",duration:1.8,volume:.09,slide:-70}),this._tone({freq:392,type:"sine",duration:1.4,volume:.05,slide:180,delay:.5})}footstep(e=!1){this._noise({duration:.06,volume:e?.025:.014,freq:180,q:.5,slide:-60})}}function ax(r){const e=new Map,t=new Map,i=r.clone();return Su(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,a=e.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Su(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Su(r.children[i],e.children[i],t)}class ox extends vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new xh(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xh(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wx(t)})}load(e,t,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=hs.extractUrlBase(e);a=hs.resolveURL(c,this.path)}else a=hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bu){try{a[Ke.KHR_BINARY_GLTF]=new Ex(e)}catch(u){n&&n(u);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new hx;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ax(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new Rx;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new Cx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function lx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Rt(r,e,t){const i=r.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cx{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],li);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pi(h),c.distance=u;break;case"spot":c=new Nf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class hx{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,i){const n=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],li),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(n)}}class ux{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(s,s)}return Promise.all(n)}}class fx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class px{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}}class mx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],li)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}}class gx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}}class _x{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(s[0],s[1],s[2],li),Promise.all(n)}}class xx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class vx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(s[0],s[1],s[2],li),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(n)}}class yx{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}}class Mx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Hi:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}}class Sx{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class bx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Tx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class xh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class wx{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Ve,m=new L,p=new sn,M=new L(1,1,1),A=new rs(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),A.setMatrixAt(T,v.compose(m,p,M));let y=null;for(const T in l)if(T==="_COLOR_0"){const b=l[T];A.instanceColor=new ia(b.array,b.itemSize,b.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){const E=A.geometry;y=new wt,y.name=E.name;for(const _ in E.attributes)y.setAttribute(_,E.attributes[_]);for(const _ in E.morphAttributes)y.morphAttributes[_]=E.morphAttributes[_];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(const _ of E.groups)y.addGroup(_.start,_.count,_.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),A.geometry=y}const b=l[T];y.setAttribute(T,new ia(b.array,b.itemSize,b.normalized))}yt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const bu="glTF",Ns=12,vh={JSON:1313821514,BIN:5130562};class Ex{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ns),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ns,s=new DataView(e,Ns);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===vh.JSON){const c=new Uint8Array(e,Ns+a,o);this.content=i.decode(c)}else if(l===vh.BIN){const c=Ns+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ax{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=tl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=tl[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],f=us[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,li,d)})})}}class Rx{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Cx{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Tu extends ms{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,M=1-m,A=p-d+u;for(let y=0;y!==o;y++){const T=a[v+y+o],b=a[v+y+l]*h,E=a[g+y+o],_=a[g+y]*h;s[y]=M*T+A*b+m*E+p*_}return s}}const Lx=new sn;class Px extends Tu{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return Lx.fromArray(s).normalize().toArray(s),s}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:Nt,9729:Ut,9984:Bh,9985:Hr,9986:Os,9987:Zi},Mh={33071:Ni,33648:Jr,10497:In},io={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ix={CUBICSPLINE:void 0,LINEAR:$s,STEP:Ks},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new wl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tn})),r.DefaultMaterial}function An(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nx(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Ux(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fx(r){let e;const t=r.extensions&&r.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+so(t.attributes):e=r.indices+":"+so(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+so(r.targets[i]);return e}function so(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function il(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kx=new Ve;class Bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?this.textureLoader=new cu(this.options.manager):this.textureLoader=new Of(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return An(s,o,n),Li(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(hs.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=io[n.type],o=us[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new jt(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=io[n.type],c=us[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let A=t.cache.get(M);A||(v=new c(o,p*f,n.count*f/h),A=new Qh(v,f/h),t.cache.add(M,A)),m=new Qs(A,l,d%f/h,g)}else o===null?v=new c(n.count*l):v=new c(o,d,n.count*l),m=new jt(v,l,g);if(n.sparse!==void 0){const p=io.SCALAR,M=us[n.sparse.indices.componentType],A=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,T=new M(a[1],A,n.sparse.count*p),b=new c(a[2],y,n.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,_=T.length;E<_;E++){const w=T[E];if(m.setX(w,b[E*l]),l>=2&&m.setY(w,b[E*l+1]),l>=3&&m.setZ(w,b[E*l+2]),l>=4&&m.setW(w,b[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=yh[d.magFilter]||Ut,h.minFilter=yh[d.minFilter]||Zi,h.wrapS=Mh[d.wrapS]||In,h.wrapT=Mh[d.wrapT]||In,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ut,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ft(v);m.needsUpdate=!0,d(m)}),t.load(hs.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Li(u,a),u.userData.mimeType=a.mimeType||Ox(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new as,Qt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Vs,Qt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return wl}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=n[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],li),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ti);const h=s.alphaMode||no.OPAQUE;if(h===no.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===no.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ht){const u=s.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],li)}return s.emissiveTexture!==void 0&&a!==Ht&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Li(u,s),t.associations.set(u,{materials:e}),s.extensions&&An(n,u,s),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Sh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Fx(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Sh(new wt,c,t),c.mode===di.TRIANGLE_STRIP?d=d.then(f=>ph(f,qh)):c.mode===di.TRIANGLE_FAN&&(d=d.then(f=>ph(f,Yo))),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Dx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const M=c[f];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0){const A=s.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");A&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&y?new nf(v,M):new He(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===di.LINES)p=new $o(v,M);else if(m.mode===di.LINE_STRIP)p=new Ml(v,M);else if(m.mode===di.LINE_LOOP)p=new of(v,M);else if(m.mode===di.POINTS)p=new Yr(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ux(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Li(p,s),m.extensions&&An(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&An(n,u[0],s),u[0];const d=new me;s.extensions&&An(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Dd.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new pa(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Li(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vl(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],v=f.target,m=v.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,M=n.parameters!==void 0?n.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let A=0,y=d.length;A<y;A++){const T=d[A],b=f[A],E=g[A],_=v[A],w=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const C=i._createAnimationTracks(T,b,E,_,w);if(C)for(let I=0;I<C.length;I++)p.push(C[I])}const M=new Ef(s,void 0,p);return Li(M,n),M})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new tu:c.length>1?h=new me:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Li(h,s),s.extensions&&An(i,h,s),s.matrix!==void 0){const u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new me;i.name&&(s.name=n.createUniqueName(i.name)),Li(s,i),i.extensions&&An(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?s.add(ax(d)):s.add(d)}const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Qt||d instanceof Ft)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}mn[s.path]===mn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(mn[s.path]){case mn.weights:h=ir;break;case mn.rotation:h=nr;break;case mn.translation:case mn.scale:h=aa;break;default:i.itemSize===1?h=ir:h=aa;break}const u=n.interpolation!==void 0?Ix[n.interpolation]:$s,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+mn[s.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=il(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof nr?Px:Tu;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zx(r,e,t){const i=e.attributes,n=new rn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const h=il(us[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=il(us[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new Gi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Sh(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=tl[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return qe.workingColorSpace!==li&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Li(r,e),zx(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Nx(r,e.targets,t):r})}class Gx extends vn{constructor(e){super(e)}load(e,t,i,n){const s=this,a=this.path===""?hs.extractUrlBase(e):this.path,o=new da(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){n?n(c):console.error(c),s.manager.itemError(e)}},i,n)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let n={};const s=/\s+/,a={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let u=h>=0?c.substring(0,h):c;u=u.toLowerCase();let d=h>=0?c.substring(h+1):"";if(d=d.trim(),u==="newmtl")n={name:d},a[d]=n;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){const f=d.split(s,3);n[u]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else n[u]=d}const o=new Hx(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}}class Hx{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:tn,this.wrap=this.options.wrap!==void 0?this.options.wrap:In}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const n=e[i],s={};t[i]=s;for(const a in n){let o=!0,l=n[a];const c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(s[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],n={name:e,side:this.side};function s(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(n[o])return;const c=t.getTextureParams(l,n),h=t.loadTexture(s(t.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=t.wrap,h.wrapT=t.wrap,(o==="map"||o==="emissiveMap")&&(h.colorSpace=Tt),n[o]=h}for(const o in i){const l=i[o];let c;if(l!=="")switch(o.toLowerCase()){case"kd":n.color=qe.colorSpaceToWorking(new Me().fromArray(l),Tt);break;case"ks":n.specular=qe.colorSpaceToWorking(new Me().fromArray(l),Tt);break;case"ke":n.emissive=qe.colorSpaceToWorking(new Me().fromArray(l),Tt);break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"disp":a("displacementMap",l);break;case"map_d":a("alphaMap",l),n.transparent=!0;break;case"ns":n.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(n.opacity=c,n.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(n.opacity=1-c,n.transparent=!0);break}}return this.materials[e]=new ru(n),this.materials[e]}getTextureParams(e,t){const i={scale:new Ie(1,1),offset:new Ie(0,0)},n=e.split(/\s+/);let s;return s=n.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(n[s+1]),n.splice(s,2)),s=n.indexOf("-mm"),s>=0&&(t.displacementBias=parseFloat(n[s+1]),t.displacementScale=parseFloat(n[s+2]),n.splice(s,3)),s=n.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(n[s+1]),parseFloat(n[s+2])),n.splice(s,4)),s=n.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(n[s+1]),parseFloat(n[s+2])),n.splice(s,4)),i.url=n.join(" ").trim(),i}loadTexture(e,t,i,n,s){const a=this.manager!==void 0?this.manager:lu;let o=a.getHandler(e);o===null&&(o=new cu(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(e,i,n,s);return t!==void 0&&(l.mapping=t),l}}const Vx=/^[og]\s*(.+)?/,Wx=/^mtllib /,Xx=/^usemtl /,qx=/^usemap /,bh=/\s+/,Th=new L,ro=new L,wh=new L,Eh=new L,ui=new L,zr=new Me;function Yx(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:n||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const n=this.vertices,s=this.object.geometry.vertices;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const n=this.normals,s=this.object.geometry.normals;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){const n=this.vertices,s=this.object.geometry.normals;Th.fromArray(n,e),ro.fromArray(n,t),wh.fromArray(n,i),ui.subVectors(wh,ro),Eh.subVectors(Th,ro),ui.cross(Eh),ui.normalize(),s.push(ui.x,ui.y,ui.z),s.push(ui.x,ui.y,ui.z),s.push(ui.x,ui.y,ui.z)},addColor:function(e,t,i){const n=this.colors,s=this.object.geometry.colors;n[e]!==void 0&&s.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&s.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&s.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){const n=this.uvs,s=this.object.geometry.uvs;s.push(n[e+0],n[e+1]),s.push(n[t+0],n[t+1]),s.push(n[i+0],n[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,s,a,o,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){const g=this.normals.length;u=this.parseNormalIndex(o,g),d=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){const g=this.uvs.length;u=this.parseUVIndex(n,g),d=this.parseUVIndex(s,g),f=this.parseUVIndex(a,g),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,n=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],n))}};return r.startObject("",!1),r}class Kx extends vn{constructor(e){super(e),this.materials=null}load(e,t,i,n){const s=this,a=new da(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Yx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let n=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(bh);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(zr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Tt),t.colors.push(zr.r,zr.g,zr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=c.slice(1).trim().split(bh),f=[];for(let v=0,m=d.length;v<m;v++){const p=d[v];if(p.length>0){const M=p.split("/");f.push(M)}}const g=f[0];for(let v=1,m=f.length-1;v<m;v++){const p=f[v],M=f[v+1];t.addFace(g[0],p[0],M[0],g[1],p[1],M[1],g[2],p[2],M[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let d=[];const f=[];if(c.indexOf("/")===-1)d=u;else for(let g=0,v=u.length;g<v;g++){const m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=Vx.exec(c))!==null){const u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Xx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Wx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(qx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){const d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new me;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const v=new wt;v.setAttribute("position",new $e(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new $e(h.normals,3)),h.colors.length>0&&(g=!0,v.setAttribute("color",new $e(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new $e(h.uvs,2));const m=[];for(let M=0,A=u.length;M<A;M++){const y=u[M],T=y.name+"_"+y.smooth+"_"+g;let b=t.materials[T];if(this.materials!==null){if(b=this.materials.create(y.name),d&&b&&!(b instanceof Vs)){const E=new Vs;Qt.prototype.copy.call(E,b),E.color.copy(b.color),b=E}else if(f&&b&&!(b instanceof as)){const E=new as({size:10,sizeAttenuation:!1});Qt.prototype.copy.call(E,b),E.color.copy(b.color),E.map=b.map,b=E}}b===void 0&&(d?b=new Vs:f?b=new as({size:1,sizeAttenuation:!1}):b=new ru,b.name=y.name,b.flatShading=!y.smooth,b.vertexColors=g,t.materials[T]=b),m.push(b)}let p;if(m.length>1){for(let M=0,A=u.length;M<A;M++){const y=u[M];v.addGroup(y.groupStart,y.groupCount,M)}d?p=new $o(v,m):f?p=new Yr(v,m):p=new He(v,m)}else d?p=new $o(v,m[0]):f?p=new Yr(v,m[0]):p=new He(v,m[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const o=new as({size:1,sizeAttenuation:!1}),l=new wt;l.setAttribute("position",new $e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new $e(t.colors,3)),o.vertexColors=!0);const c=new Yr(l,o);s.add(c)}return s}}const $x="/assets/quaternius/ultimate-stylized-nature/",Ah="/assets/quaternius/ultimate-modular-ruins/",Zx=["BirchTree_2","MapleTree_3","DeadTree_2","Bush_Large","Bush_Small","Bush_Flowers","Flower_1_Clump","Flower_2_Clump","Grass_Large"],Jx=["Wall","Wall_ArchRound","Wall_Broken","Wall_Half","Wall_Overgrown","Arch_Round","Column_Round","Column_Round_Short","Support_Left","Support_Right","Support_Center","Barrel","Crate","Cart","Pot1","Pot1_Broken","Pot2","Pot3","Torch","Stairs","Floor_Standard"];async function jx(){const r=new ox,e=new Gx,t=new Kx,i={nature:{},ruins:{}};return await Promise.all(Zx.map(async n=>{const s=await r.loadAsync(`${$x}glTF/${n}.gltf`);i.nature[n]=s.scene})),await Promise.all(Jx.map(async n=>{const s=await e.loadAsync(`${Ah}OBJ/${n}.mtl`);s.preload(),t.setMaterials(s);const a=await t.loadAsync(`${Ah}OBJ/${n}.obj`);i.ruins[n]=a})),i}const Qx={mouseSensitivity:1,invertY:!1,cameraShake:!0,motionBlur:!1,textScale:1,musicVolume:.45,effectsVolume:.75,lowQuality:!1};function ao(){return{version:Cl,salvage:0,claimedCaches:[],keepsake:!1,lens:!1,lensConsumed:!1,workshopBuilt:!1,beaconBuilt:!1,shortcutOpen:!1,bossDefeated:!1,activatedCheckpoints:["camp"],activeCheckpoint:"camp",dialogue:{arrivalSeen:!1,lensSeen:!1,completeSeen:!1,beaconInspected:!1},chapterComplete:!1,settings:{...Qx},savedAt:0}}const Us=r=>typeof r=="number"&&Number.isFinite(r),ns=r=>typeof r=="boolean",Rh=r=>typeof r=="string";function Bs(r){if(!r||typeof r!="object")return{ok:!1,reason:"not an object"};if(r.version!==Cl)return{ok:!1,reason:"unsupported version"};if(!Us(r.salvage)||r.salvage<0||r.salvage>999)return{ok:!1,reason:"salvage"};if(!Array.isArray(r.claimedCaches)||!r.claimedCaches.every(Rh))return{ok:!1,reason:"caches"};const e=new Set(Zr.map(i=>i.id));if(new Set(r.claimedCaches).size!==r.claimedCaches.length)return{ok:!1,reason:"duplicate cache"};if(!r.claimedCaches.every(i=>e.has(i)))return{ok:!1,reason:"unknown cache"};if(!Array.isArray(r.activatedCheckpoints)||!r.activatedCheckpoints.every(Rh))return{ok:!1,reason:"checkpoints"};if(new Set(r.activatedCheckpoints).size!==r.activatedCheckpoints.length)return{ok:!1,reason:"duplicate checkpoint"};if(!r.activatedCheckpoints.every(i=>["camp","brazier"].includes(i)))return{ok:!1,reason:"unknown checkpoint"};if(!["camp","brazier"].includes(r.activeCheckpoint))return{ok:!1,reason:"active checkpoint"};if(!r.activatedCheckpoints.includes(r.activeCheckpoint))return{ok:!1,reason:"inactive checkpoint"};for(const i of["keepsake","lens","lensConsumed","workshopBuilt","beaconBuilt","shortcutOpen","bossDefeated","chapterComplete"])if(!ns(r[i]))return{ok:!1,reason:i};if(!r.dialogue||typeof r.dialogue!="object")return{ok:!1,reason:"dialogue"};for(const i of["arrivalSeen","lensSeen","completeSeen","beaconInspected"])if(!ns(r.dialogue[i]))return{ok:!1,reason:`dialogue.${i}`};if(!r.settings||typeof r.settings!="object")return{ok:!1,reason:"settings"};const t=r.settings;return!Us(t.mouseSensitivity)||t.mouseSensitivity<.2||t.mouseSensitivity>3?{ok:!1,reason:"sensitivity"}:!ns(t.invertY)||!ns(t.cameraShake)||!ns(t.motionBlur)||!ns(t.lowQuality)?{ok:!1,reason:"settings flags"}:!Us(t.textScale)||t.textScale<.8||t.textScale>1.6?{ok:!1,reason:"text scale"}:!Us(t.musicVolume)||t.musicVolume<0||t.musicVolume>1?{ok:!1,reason:"music volume"}:!Us(t.effectsVolume)||t.effectsVolume<0||t.effectsVolume>1?{ok:!1,reason:"effects volume"}:!r.lensConsumed&&r.beaconBuilt?{ok:!1,reason:"beacon without lens"}:!r.bossDefeated&&r.lens?{ok:!1,reason:"lens without boss"}:r.beaconBuilt&&!r.chapterComplete?{ok:!1,reason:"beacon chapter flag"}:{ok:!0}}function oo(r){try{return JSON.parse(r)}catch{return null}}class ev{constructor(e){this.onStatus=e||(()=>{}),this.available=!0,this.lastStatus="idle",this.storage=null;try{const t="__waykeepers_probe__";window.localStorage.setItem(t,"1"),window.localStorage.removeItem(t),this.storage=window.localStorage}catch{this.available=!1,this.onStatus("unavailable","Save unavailable")}}_backupKey(){return`${Is}.backup`}load(){if(!this.storage)return{ok:!1,reason:"unavailable"};let e=null;try{e=this.storage.getItem(Is)}catch{return this.available=!1,{ok:!1,reason:"unavailable"}}if(e){const t=oo(e),i=Bs(t);if(i.ok)return{ok:!0,progress:t,source:"primary"};const n=this.storage.getItem(this._backupKey());if(n){const s=oo(n);if(Bs(s).ok)return{ok:!0,progress:s,source:"backup"}}return{ok:!1,reason:i.reason||"invalid"}}return{ok:!1,reason:"empty"}}save(e){if(!this.storage)return this.available=!1,this.onStatus("unavailable","Save unavailable"),!1;const t=JSON.parse(JSON.stringify(e));if(t.version=Cl,t.savedAt=Date.now(),!Bs(t).ok)return this.onStatus("unavailable","Save unavailable"),!1;try{const n=this.storage.getItem(Is);if(n){const s=oo(n);Bs(s).ok&&this.storage.setItem(this._backupKey(),n)}return this.storage.setItem(Is,JSON.stringify(t)),e.savedAt=t.savedAt,this.available=!0,this.onStatus("saved","Saved"),!0}catch{return this.available=!1,this.onStatus("unavailable","Save unavailable"),!1}}clear(){if(!this.storage)return!1;try{return this.storage.removeItem(Is),this.storage.removeItem(this._backupKey()),!0}catch{return!1}}hasSave(){return this.load().ok}}const Pe=r=>document.querySelector(r);class tv{constructor(e){this.game=e,this.refs={hud:Pe("#hud"),objective:Pe("#objective-text"),save:Pe("#save-indicator"),salvage:Pe("#salvage-pill"),healthFill:Pe("#health-fill"),healthText:Pe("#health-text"),staminaFill:Pe("#stamina-fill"),staminaText:Pe("#stamina-text"),healPips:[...document.querySelectorAll(".heal-pip")],enemyHud:Pe("#enemy-hud"),bossHud:Pe("#boss-hud"),bossFill:Pe("#boss-fill"),bossPhase:Pe("#boss-phase"),interaction:Pe("#interaction-prompt"),interactionText:Pe("#interaction-text"),toast:Pe("#toast"),chapterBanner:Pe("#chapter-banner"),lockReticle:Pe("#lock-reticle"),captureHint:Pe("#capture-hint"),damageFlash:Pe("#damage-flash"),title:Pe("#title-screen"),continueBtn:Pe("#btn-continue"),pause:Pe("#pause-menu"),journal:Pe("#journal-panel"),settings:Pe("#settings-panel"),dialogue:Pe("#dialogue-panel"),rest:Pe("#rest-panel"),project:Pe("#project-panel"),confirm:Pe("#confirm-panel"),death:Pe("#death-overlay"),deathText:Pe("#death-text"),ending:Pe("#ending-panel"),endingText:Pe("#ending-text"),transition:Pe("#transition-overlay"),transitionText:Pe("#transition-text"),controlsHint:Pe("#controls-hint")},this.toastTimer=null,this.saveTimer=null,this.bannerTimer=null,this.dialogueClose=null,this.confirmYes=null,this.settingsOrigin="title",this.currentRest=null,this.projectKind=null,this.enemyRows=new Map,this.enemySignature="",this._bind(),this.applyTextScale(e.progress.settings.textScale),this.populateSettings()}_bind(){const e=(t,i)=>{const n=document.getElementById(t);n&&n.addEventListener("click",s=>{s.preventDefault(),this.game.audio.start(),this.game.audio.uiClick(),i(s)})};e("btn-continue",()=>this.game.continueGame()),e("btn-new-game",()=>this.game.requestNewGame()),e("btn-title-settings",()=>this.game.openSettings("title")),e("btn-resume",()=>this.game.resumeFromPause()),e("btn-journal",()=>this.game.openJournal()),e("btn-pause-settings",()=>this.game.openSettings("pause")),e("btn-title-return",()=>this.game.returnToTitle()),e("btn-dialogue-continue",()=>this.game.closeDialogue()),e("btn-confirm-yes",()=>{const t=this.confirmYes;this.confirmYes=null,this.hide(this.refs.confirm),t&&t()}),e("btn-confirm-no",()=>this.game.cancelConfirm()),e("btn-ending-continue",()=>this.game.finishEnding()),document.querySelectorAll('[data-close="journal"]').forEach(t=>t.addEventListener("click",()=>this.game.closeJournal())),document.querySelectorAll('[data-close="settings"]').forEach(t=>t.addEventListener("click",()=>this.game.closeSettings())),window.addEventListener("keydown",t=>{t.code==="Escape"&&(this.game.mode==="journal"?this.game.closeJournal():this.game.mode==="settings"?this.game.closeSettings():this.game.mode==="dialogue"?this.game.closeDialogue():this.game.mode==="rest"?this.game.closeMenu():this.game.mode==="project"?this.game.closeMenu():this.game.mode==="confirm"&&this.game.cancelConfirm())}),this._bindSettings()}_bindSettings(){const e=(i,n,s,a=o=>o.toFixed(2))=>{const o=document.getElementById(i),l=document.getElementById(n),c=h=>{const u=this.game.progress.settings;u[s]=Number(o.value),l.textContent=a(u[s]),this.game.onSettingsChanged(s,h)};o.addEventListener("input",()=>c(!1)),o.addEventListener("change",()=>c(!0))},t=(i,n)=>{const s=document.getElementById(i);s.addEventListener("change",()=>{this.game.progress.settings[n]=s.checked,this.game.onSettingsChanged(n,!0)})};e("set-sensitivity","out-sensitivity","mouseSensitivity",i=>`${i.toFixed(2)}×`),t("set-invert","invertY"),t("set-shake","cameraShake"),t("set-motion","motionBlur"),e("set-text","out-text","textScale",i=>`${Math.round(i*100)}%`),e("set-music","out-music","musicVolume",i=>`${Math.round(i*100)}%`),e("set-effects","out-effects","effectsVolume",i=>`${Math.round(i*100)}%`),t("set-quality","lowQuality")}populateSettings(){const e=this.game.progress.settings,t=(n,s)=>{const a=document.getElementById(n);a&&(a.value=s)},i=(n,s)=>{const a=document.getElementById(n);a&&(a.checked=s)};t("set-sensitivity",e.mouseSensitivity),i("set-invert",e.invertY),i("set-shake",e.cameraShake),i("set-motion",e.motionBlur),t("set-text",e.textScale),t("set-music",e.musicVolume),t("set-effects",e.effectsVolume),i("set-quality",e.lowQuality),Pe("#out-sensitivity").textContent=`${e.mouseSensitivity.toFixed(2)}×`,Pe("#out-text").textContent=`${Math.round(e.textScale*100)}%`,Pe("#out-music").textContent=`${Math.round(e.musicVolume*100)}%`,Pe("#out-effects").textContent=`${Math.round(e.effectsVolume*100)}%`}applyTextScale(e){document.documentElement.style.setProperty("--text-scale",String(e))}show(e){e.classList.remove("hidden")}hide(e){e.classList.add("hidden")}showTitle(e,t=!1){this.hide(this.refs.hud),this.hide(this.refs.pause),this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.hide(this.refs.death),this.hide(this.refs.ending),this.hide(this.refs.transition),this.show(this.refs.title),this.refs.continueBtn.disabled=!e,this.refs.continueBtn.classList.toggle("hidden",!e),this.hide(this.refs.captureHint);const i=document.querySelector(".title-footer");i&&(i.textContent=t?"Save unavailable in this browser · Progress cannot persist between sessions":"Solo expedition · Saves belong to this browser and device")}showGame(){this.hide(this.refs.title),this.hide(this.refs.pause),this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.hide(this.refs.death),this.hide(this.refs.ending),this.show(this.refs.hud),this.updateCaptureHint()}showPause(){this.hide(this.refs.journal),this.hide(this.refs.settings),this.hide(this.refs.dialogue),this.hide(this.refs.rest),this.hide(this.refs.project),this.hide(this.refs.confirm),this.show(this.refs.pause),this.hide(this.refs.captureHint)}hidePause(){this.hide(this.refs.pause)}openJournal(){this.hide(this.refs.pause),this.hide(this.refs.settings),this.show(this.refs.journal),this.updateJournal()}openSettings(e){this.settingsOrigin=e,this.hide(this.refs.pause),this.hide(this.refs.journal),this.show(this.refs.settings),this.populateSettings()}closeSettings(){this.hide(this.refs.settings)}closeJournal(){this.hide(this.refs.journal)}showDialogue(e,t,i,n){Pe("#dialogue-kicker").textContent=i||"Alder Hollow",Pe("#dialogue-title").textContent=e,Pe("#dialogue-body").textContent=t,this.dialogueClose=n||null,this.hide(this.refs.pause),this.hide(this.refs.journal),this.show(this.refs.dialogue)}hideDialogue(){this.hide(this.refs.dialogue)}showRestMenu(e){this.currentRest=e,Pe("#rest-title").textContent=e.title,Pe("#rest-body").textContent=e.body;const t=Pe("#rest-actions");t.innerHTML="";const i=(n,s,a)=>{const o=document.createElement("button");o.className=`menu-button ${s||""}`,o.textContent=n,o.addEventListener("click",()=>{this.game.audio.uiClick(),a()}),t.appendChild(o)};if(i("Rest","",()=>this.game.performRestAt(e.checkpointId)),e.canTravel)for(const n of e.travelOptions)i(`Travel to ${n.short}`,"",()=>this.game.travelTo(n.id));i("Leave","subtle",()=>this.game.closeMenu()),this.hide(this.refs.pause),this.show(this.refs.rest)}hideRest(){this.hide(this.refs.rest)}showProject(e){this.projectKind=e.kind,Pe("#project-title").textContent=e.title,Pe("#project-body").textContent=e.body,Pe("#project-resources").innerHTML=e.resources;const t=Pe("#project-actions");if(t.innerHTML="",!e.built&&e.canBuild){const n=document.createElement("button");n.className="menu-button",n.textContent=e.buildLabel,n.addEventListener("click",()=>{this.game.audio.uiClick(),this.game.buildProject(e.kind)}),t.appendChild(n)}const i=document.createElement("button");i.className="menu-button subtle",i.textContent="Leave",i.addEventListener("click",()=>{this.game.audio.uiClick(),this.game.closeMenu()}),t.appendChild(i),this.hide(this.refs.pause),this.show(this.refs.project)}hideProject(){this.hide(this.refs.project)}showConfirm(e,t,i){Pe("#confirm-title").textContent=e,Pe("#confirm-body").textContent=t,this.confirmYes=i,this.hide(this.refs.pause),this.show(this.refs.confirm)}hideConfirm(){this.hide(this.refs.confirm)}showDeath(e){this.refs.deathText.textContent=e,this.show(this.refs.death),this.hide(this.refs.captureHint)}hideDeath(){this.hide(this.refs.death)}showEnding(e){this.refs.endingText.textContent=e,this.show(this.refs.ending),this.hide(this.refs.hud),this.hide(this.refs.captureHint)}hideEnding(){this.hide(this.refs.ending)}hideHud(){this.hide(this.refs.hud)}showTransition(e){this.refs.transitionText.textContent=e,this.refs.transition.classList.remove("fade"),this.show(this.refs.transition)}fadeTransition(){this.refs.transition.classList.add("fade"),setTimeout(()=>this.hide(this.refs.transition),500)}showTransitionText(e){this.refs.transitionText.textContent=e}setCaptureState(e){this.updateCaptureHint()}updateCaptureHint(){const e=this.game;if(!this.refs.captureHint)return;const t=["title","paused","journal","settings","dialogue","rest","project","confirm","ending","transition"].includes(e.mode),i=e.mode==="playing"&&!e.input.pointerLocked&&!t&&!e.player.isDead;this.refs.captureHint.classList.toggle("hidden",!i)}toast(e,t=2.4){e&&(this.refs.toast.textContent=e,this.refs.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.refs.toast.classList.remove("show"),t*1e3))}showSaveStatus(e,t){const i=this.refs.save;if(!i)return;const n=document.querySelector(".title-footer"),s=this.refs.title&&!this.refs.title.classList.contains("hidden");i.classList.remove("save-idle","save-saved","save-unavailable"),clearTimeout(this.saveTimer),e==="saved"?(i.textContent=t||"Saved",i.classList.add("save-saved"),this.saveTimer=setTimeout(()=>{i.textContent="Autosave ready",i.classList.add("save-idle")},2200)):e==="unavailable"?(i.textContent=t||"Save unavailable",i.classList.add("save-unavailable"),this.toast("Save unavailable. Progress remains for this session only.",5),n&&s&&(n.textContent="Save unavailable in this browser · Progress cannot persist between sessions")):(n&&s&&(n.textContent="Solo expedition · Saves belong to this browser and device"),i.textContent=t||"Autosave ready",i.classList.add("save-idle"))}damageFlash(){this.refs.damageFlash.classList.add("show"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>this.refs.damageFlash.classList.remove("show"),90)}showChapterBanner(e,t,i=4){this.refs.chapterBanner.innerHTML=`<small>${t||""}</small>${e}`,this.refs.chapterBanner.classList.remove("hidden"),requestAnimationFrame(()=>this.refs.chapterBanner.classList.add("show")),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>{this.refs.chapterBanner.classList.remove("show"),setTimeout(()=>this.refs.chapterBanner.classList.add("hidden"),800)},i*1e3)}updateJournal(){const e=this.game.getJournalData();Pe("#journal-objective").textContent=e.objective,Pe("#journal-resources").textContent=e.resources;const t=Pe("#journal-rest");t.innerHTML="";for(const n of e.restPoints){const s=document.createElement("li");s.textContent=n,t.appendChild(s)}Pe("#journal-shortcut").textContent=e.shortcut;const i=Pe("#journal-discoveries");i.innerHTML="";for(const n of e.discoveries){const s=document.createElement("li");s.textContent=n,i.appendChild(s)}}update(e){const t=this.game,i=t.mode==="playing"||t.mode==="paused"||t.mode==="journal"||t.mode==="settings"||t.mode==="dialogue"||t.mode==="rest"||t.mode==="project"||t.mode==="confirm";if(this.refs.hud.classList.toggle("hidden",!i),t.mode==="title"){this.hide(this.refs.captureHint);return}this.updateVitals(),this.updateObjective(),this.updateInteraction(),this.updateEnemyHud(),this.updateBossHud(),this.updateReticle(),this.updateCaptureHint()}updateVitals(){const e=this.game.player,t=Math.max(0,Math.ceil(e.health)),i=Math.max(0,Math.ceil(e.stamina));this.refs.healthFill.style.width=`${e.health/se.player.maxHealth*100}%`,this.refs.staminaFill.style.width=`${e.stamina/se.player.maxStamina*100}%`,this.refs.healthText.textContent=`${t}`,this.refs.staminaText.textContent=`${i}`,this.refs.healPips.forEach((n,s)=>n.classList.toggle("filled",s<e.healCharges)),this.refs.salvage.textContent=`Salvage ${this.game.progress.salvage}`}updateObjective(){this.refs.objective.textContent=this.game.getObjective()}updateInteraction(){const e=this.game,t=e.currentInteraction,i=e.mode==="playing"&&t&&!e.player.isDead;this.refs.interaction.classList.toggle("hidden",!i),i&&(this.refs.interactionText.textContent=t.label)}updateEnemyHud(){const t=this.game.getEngagedEnemies().filter(n=>!n.isBoss&&n.alive),i=t.map(n=>`${n.name}:${n.home.x}`).join("|");if(i!==this.enemySignature){this.enemySignature=i,this.refs.enemyHud.innerHTML="",this.enemyRows.clear();for(const n of t){const s=document.createElement("div");s.className="enemy-bar-wrap";const a=document.createElement("div");a.className="enemy-bar-label";const o=document.createElement("span");o.textContent=n.name;const l=document.createElement("span");l.className="enemy-hp-text",a.append(o,l);const c=document.createElement("div");c.className="bar enemy-bar";const h=document.createElement("div");c.appendChild(h),s.append(a,c),this.refs.enemyHud.appendChild(s),this.enemyRows.set(n,{wrap:s,hp:l,fill:h})}}for(const n of t){const s=this.enemyRows.get(n);if(!s)continue;const a=Math.max(0,n.health/n.maxHealth);s.fill.style.width=`${a*100}%`,s.hp.textContent=`${Math.ceil(n.health)} / ${n.maxHealth}`}this.refs.enemyHud.classList.toggle("hidden",t.length===0)}updateBossHud(){const e=this.game,t=e.boss,i=t&&t.alive&&t.engaged&&e.mode==="playing";this.refs.bossHud.classList.toggle("hidden",!i),i&&(this.refs.bossFill.style.width=`${Math.max(0,t.health/t.maxHealth*100)}%`,this.refs.bossPhase.textContent=t.phase===1?"I":"II")}updateReticle(){const e=this.game,t=e.player.lockTarget;if(!t||!t.alive||e.mode!=="playing"){this.refs.lockReticle.classList.add("hidden");return}const i=t.lockPoint().project(e.camera);if(i.z>1||i.z<-1){this.refs.lockReticle.classList.add("hidden");return}const n=(i.x*.5+.5)*window.innerWidth,s=(-i.y*.5+.5)*window.innerHeight;this.refs.lockReticle.style.left=`${n}px`,this.refs.lockReticle.style.top=`${s}px`,this.refs.lockReticle.classList.remove("hidden")}}const Rn=r=>JSON.parse(JSON.stringify(r)),lo=1/60;class iv{constructor(e){this.game=e,this.yaw=0,this.pitch=se.player.camera.pitch,this.distance=se.player.camera.distance,this.currentDistance=this.distance,this.raycaster=new uu,this.tempTarget=new L,this.tempDir=new L,this.tempDesired=new L,this.tempCam=new L,this.titleAngle=0,this.cinematic=null,this.shakeOffset=new L}reset(){this.yaw=0,this.pitch=se.player.camera.pitch,this.currentDistance=this.distance,this.cinematic=null,this.game.input.consumeMouse()}setCinematic(e,t){this.cinematic={position:e.clone(),lookAt:t.clone()}}clearCinematic(){this.cinematic=null}update(e){const t=this.game,i=t.camera;if(t.mode==="title"){this.titleAngle+=e*.02;const g=this.titleAngle+.15;i.position.set(18+Math.sin(g)*4,9.5,28+Math.cos(g)*5),i.lookAt(0,1.2,12.5);return}if(t.mode==="ending"&&this.cinematic){i.position.lerp(this.cinematic.position,1-Math.exp(-2.2*e));const g=this.cinematic.lookAt,v=new L;i.getWorldDirection(v);const m=new L().copy(i.position).add(v.multiplyScalar(10));m.lerp(g,1-Math.exp(-2.2*e)),i.lookAt(m);return}if(t.mode!=="playing"&&t.mode!=="transition"||!t.player)return;const n=t.input.consumeMouse(),s=t.progress.settings;this.yaw-=n.x,this.pitch+=n.y*(s.invertY?-1:1),this.pitch=vt(this.pitch,se.player.camera.minPitch,se.player.camera.maxPitch);const a=this.tempTarget.set(t.player.position.x,t.player.position.y+se.player.camera.targetHeight,t.player.position.z),o=Math.cos(this.pitch),l=this.tempDir.set(Math.sin(this.yaw)*o,Math.sin(this.pitch),Math.cos(this.yaw)*o).normalize(),c=this.distance;let h=c;this.raycaster.set(a,l),this.raycaster.far=c+.4;const u=this.raycaster.intersectObjects(t.world.cameraOccluders,!0);for(const g of u)g.distance<h&&(h=g.distance-se.player.camera.collisionRadius);h=Math.max(se.player.camera.minDistance,h),h<this.currentDistance?this.currentDistance=h:this.currentDistance=Z_(this.currentDistance,h,se.player.camera.restoreSpeed,e);const d=this.tempCam.copy(a).addScaledVector(l,this.currentDistance),f=t.world.groundHeight(d.x,d.z);if(d.y<f+.32&&(d.y=f+.32),t.shake>0&&s.cameraShake){const g=t.shake;d.x+=(Math.random()-.5)*g,d.y+=(Math.random()-.5)*g*.7,d.z+=(Math.random()-.5)*g}i.position.copy(d),i.lookAt(a)}}class Ll{constructor(e){this.canvas=e}static async create(e){const t=new Ll(e);return await t.init(),t}async init(){this.mode="title",this.time=0,this.ambientTime=0,this.accumulator=0,this.lastFrame=performance.now(),this.lastCombatEvent=-99,this.deathTimer=0,this.shake=0,this.outgoingHits=[],this.incomingHits=[],this.effects=[],this.ordinaryAttacker=null,this.currentInteraction=null,this.hasStarted=!1,this.hasSave=!1,this.pendingSave=null,this.settingsOrigin="title",this.endingState=null,this.farBoundaryShown=!1,this.transitionTimer=null,this.renderer=new q_({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,se.render.highPixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ch,this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=sl,this.renderer.toneMappingExposure=1.03,this.scene=new Yd,this.camera=new Jt(se.render.fov,window.innerWidth/window.innerHeight,se.render.near,se.render.far),this.audio=new rx,this.input=new sx(this.canvas),this.saveManager=new ev((i,n)=>{this.saveStatus={status:i,text:n},this.ui?.showSaveStatus(i,n)}),this.progress=ao();const e=this.saveManager.load();e.ok?(this.progress=e.progress,this.pendingSave=Rn(e.progress),this.hasSave=!0,this.loadedFromBackup=e.source==="backup"):this.loadError=e.reason,this.assets=await jx(),this.world=new j_(this.scene,this.renderer,this.assets),this.player=new Q_(this),this.boss=new nx(this),this.enemies=[],this.encounters=[],this._setupEncounters(),this.cameraRig=new iv(this),this.ui=new tv(this),this.input.attach(this),this.sparkGeo=new Gt(.06,0),this._resize(),window.addEventListener("resize",()=>this._resize()),this.applySettings(!1),this.applyProgressVisuals(),this.player.root.visible=!1,this.ui.showTitle(this.hasSave,!this.saveManager.available);const t=document.querySelector(".title-footer");t&&!this.saveManager.available?t.textContent="Save unavailable in this browser · Progress cannot persist between sessions":t&&this.loadedFromBackup?t.textContent="Recovered the last valid autosave":t&&this.loadError&&this.loadError!=="empty"&&(t.textContent="Previous save could not be read · Starting a new journey will replace it"),this.currentInteraction=null,this._setupDebug(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}_setupEncounters(){for(const e of Object.values(Y_)){const t={id:e.id,def:e,active:!1,cleared:!1,enemies:[]};for(const i of e.enemies){const n=new ix(this,i,t);t.enemies.push(n),this.enemies.push(n)}this.encounters.push(t)}}_resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();const i=this.progress.settings.lowQuality;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i?se.render.lowPixelRatio:se.render.highPixelRatio))}applySettings(e=!1){const t=this.progress.settings;this.ui?.applyTextScale(t.textScale),this.audio.applySettings(t),this.world.setQuality(t.lowQuality?"low":"high"),this.renderer.shadowMap.enabled=!t.lowQuality,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.lowQuality?se.render.lowPixelRatio:se.render.highPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),e&&this.saveNow("settings")}onSettingsChanged(e,t=!1){this.applySettings(!1),t&&this.saveNow("settings")}_setupDebug(){if(!new URLSearchParams(window.location.search).has("debug"))return;const e=this;window.__waykeepers={game:e,snapshot:()=>({mode:e.mode,time:e.time,progress:Rn(e.progress),player:{x:e.player.position.x,y:e.player.position.y,z:e.player.position.z,health:e.player.health,stamina:e.player.stamina,healCharges:e.player.healCharges,state:e.player.state,lock:e.player.lockTarget?.name||null},enemies:e.enemies.map(t=>({type:t.type,x:t.position.x,z:t.position.z,health:t.health,alive:t.alive,engaged:t.engaged,state:t.state})),boss:{x:e.boss.position.x,z:e.boss.position.z,health:e.boss.health,alive:e.boss.alive,engaged:e.boss.engaged,state:e.boss.state,phase:e.boss.phase},checkpoint:e.progress.activeCheckpoint,saveAvailable:e.saveManager.available}),teleport:(t,i)=>{e.player.position.set(t,e.world.groundHeight(t,i),i),e.player.safePosition.copy(e.player.position),e.player.root.position.copy(e.player.position),e.cameraRig.reset()},setPlayerHealth:t=>{e.player.health=t},setPlayerStamina:t=>{e.player.stamina=t},setBossHealth:t=>{e.boss.health=t},setEnemyHealth:(t,i)=>{e.enemies[t]&&(e.enemies[t].health=i)},damagePlayer:t=>e.player.takeDamage(t,null,"debug",e),damageBoss:t=>e.boss.receivePlayerHit(t,"light","debug",e),damageEnemy:(t,i)=>e.enemies[t]?.receivePlayerHit(i,"light","debug",e),giveSalvage:t=>{e.progress.salvage+=t,e.saveNow("debug")},forceSave:()=>e.saveNow("debug"),forceLoad:()=>e.saveManager.load(),resetProgress:()=>{e.progress=ao(),e.saveNow("debug"),e.applyProgressVisuals()},setProgress:t=>{Object.assign(e.progress,t),e.saveNow("debug"),e.applyProgressVisuals()},activateBrazier:()=>e.activateBrazier(),openRest:t=>e.openRest(t),openProject:t=>e.openProject(t),buildWorkshop:()=>e.buildProject("workshop"),buildBeacon:()=>e.buildProject("beacon"),openDialogue:t=>e.openDialogueData($i[t]||$i.arrival,"Alder Hollow"),closeDialogue:()=>e.closeDialogue(),interact:()=>e.interact(),respawn:()=>e.respawnAfterDeath(),resetCombat:()=>e.resetCombatAndEnemies(),setTimeScale:t=>{e.debugTimeScale=t},rendererInfo:()=>({...e.renderer.info.render,memory:{...e.renderer.info.memory}})}}loop(e){requestAnimationFrame(this.loop);const t=(e-this.lastFrame)/1e3;this.lastFrame=e;const i=Math.min(.1,Math.max(0,t)),n=this.debugTimeScale||1;if(this.ambientTime+=i,this.shake=Math.max(0,this.shake-i*.65),this.mode==="playing"){this.accumulator+=i*n;let s=0;for(;this.accumulator>=lo&&s<6;)this.fixedUpdate(lo),this.accumulator-=lo,s++;s===15&&(this.accumulator=0)}else this.accumulator=0;this.mode==="ending"&&this.updateEnding(i),this.mode!=="paused"&&this.mode!=="journal"&&this.mode!=="settings"&&this.mode!=="dialogue"&&this.mode!=="rest"&&this.mode!=="project"&&this.mode!=="confirm"&&this.mode!=="transition"&&this.world.update(i,this.mode==="playing"?this.time:this.ambientTime,this),this.cameraRig.update(i),this.audio.update(i,this),this.ui.update(i),this.renderer.render(this.scene,this.camera)}fixedUpdate(e){if(this.time+=e,this.mode==="playing"){this._updateEncounterTriggers(),this._updateBossTrigger(),this._updateBossArenaGate(),this.outgoingHits.length=0,this.incomingHits.length=0,this.player.update(e,this);for(const t of this.enemies)t.update(e,this);this.boss.update(e,this),this._resolveHits(),this._updateEncounters(),this._updateEffects(e),this.currentInteraction=this.player.isDead?null:this.findInteraction(),this.player.isDead&&(this.deathTimer+=e,this.deathTimer>=2.6&&this.respawnAfterDeath()),this._checkFarBoundary()}}_resolveHits(){for(const e of this.outgoingHits)!e.target||!e.target.alive||e.target.receivePlayerHit(e.damage,e.type,e.attackId,this);for(const e of this.incomingHits){if(this.player.isDead)break;this.player.takeDamage(e.damage,e.source,e.attackId,this)}this.outgoingHits.length=0,this.incomingHits.length=0}queueOutgoingHit(e,t,i,n){this.outgoingHits.push({target:e,damage:t,type:i,attackId:n})}queueIncomingHit(e,t,i,n){this.incomingHits.push({source:e,damage:t,attackId:i,kind:n})}_updateEncounterTriggers(){if(!this.player.isDead)for(const e of this.encounters){if(e.active||e.cleared)continue;const t=e.def.trigger;if(Math.hypot(this.player.position.x-t.x,this.player.position.z-t.z)<=t.radius){e.active=!0;for(const s of e.enemies)s.engage();const n=[...new Set(e.enemies.map(s=>s.name))].join(" and ");this.ui.toast(n==="Briarling"?"A Briarling blocks the Mossroad.":n==="Mossguard"?"A Mossguard holds the cart yard.":"A Mossguard and a Briarling guard the wayhouse."),this.onCombatEvent()}}}_updateEncounters(){for(const e of this.encounters)e.active&&e.enemies.every(t=>!t.alive)&&(e.active=!1,e.cleared=!0,this.ordinaryAttacker&&e.enemies.includes(this.ordinaryAttacker)&&(this.ordinaryAttacker=null))}_updateBossTrigger(){this.player.isDead||this.progress.bossDefeated||this.boss.engaged||this.progress.activatedCheckpoints.includes("brazier")&&this.player.position.z<se.world.bossTriggerZ&&(this.progress.activeCheckpoint="brazier",this.saveNow("arena-entry"),this.boss.engage(),this.bossGateNotified=!1,this.onCombatEvent(),this.ui.toast("The Gate Warden wakes. Advance into the courtyard."))}_updateBossArenaGate(){!this.boss.engaged||this.progress.bossDefeated||this.player.position.z>=-108.5||(this.world.setBossGate(!1),this.bossGateNotified||(this.bossGateNotified=!0,this.ui.toast("The gate grinds shut behind you.")))}onCombatEvent(){this.lastCombatEvent=this.time,this.player&&(this.player.lastCombatEvent=this.time)}onEnemyDamaged(e,t,i){this.onCombatEvent(),this._spawnHitEffect(e.lockPoint(),i==="heavy"),this.audio.hit(i==="heavy"),this.progress.settings.cameraShake&&(this.shake=Math.min(.18,this.shake+(i==="heavy"?.075:.045)))}onBossDamaged(e,t,i){this.onCombatEvent(),this._spawnHitEffect(e.lockPoint(),i==="heavy"),this.audio.hit(i==="heavy"),this.progress.settings.cameraShake&&(this.shake=Math.min(.2,this.shake+(i==="heavy"?.08:.05)))}onPlayerDamaged(e,t){this.onCombatEvent(),this.ui.damageFlash(),this.progress.settings.cameraShake&&(this.shake=Math.min(.28,this.shake+.16))}onPlayerDeath(){this.deathTimer=0,this.currentInteraction=null;const e=$t[this.progress.activeCheckpoint]||$t.camp;this.ui.showDeath(`Returning to ${e.name}...`)}onEnemyKilled(e){this.ui.toast(`${e.name} falls.`),this.ordinaryAttacker===e&&(this.ordinaryAttacker=null),this._updateEncounters()}onEnemyLeashReset(e){const t=e.encounter;if(t){for(const i of t.enemies)i.reset();t.active=!1,t.cleared=!1,this.ordinaryAttacker&&t.enemies.includes(this.ordinaryAttacker)&&(this.ordinaryAttacker=null),this.ui.toast("The road falls quiet. The enemy returns to its post.")}}onBossDefeated(e){this.progress.bossDefeated||(this.progress.bossDefeated=!0,this.progress.lens=!0,this.progress.salvage+=se.economy.bossSalvage,this.world.setBossGate(!0),this.onCombatEvent(),this.audio.bossDefeat(),this.saveNow("boss-victory"),this.ui.toast("Beacon Lens recovered. +4 Salvage."),this.ui.showChapterBanner("The Warden falls","Beacon Lens recovered",3.6))}saveNow(e){if(!this.hasStarted&&!this.hasSave)return!1;const t=this.saveManager.save(this.progress);return t&&(this.hasSave=!0,this.pendingSave=Rn(this.progress)),t}applyProgressVisuals(){const e=this.progress;this.world.setWorkshopBuilt(e.workshopBuilt),this.player.setReinforced(e.workshopBuilt),this.world.setBeaconBuilt(e.beaconBuilt);for(const t of Zr)this.world.setCacheClaimed(t.id,e.claimedCaches.includes(t.id));this.world.setKeepsakeCollected(e.keepsake),this.world.setShortcutOpen(e.shortcutOpen),this.world.setBrazierActive(e.activatedCheckpoints.includes("brazier")),e.bossDefeated?this.boss.setDefeatedAbsent(!0):(this.boss.isBossHidden=!1,this.boss.state==="dead"&&this.boss.reset()),this.updateBossGate()}updateBossGate(){if(this.boss.engaged){this.world.setBossGate(!1);return}const e=this.progress.bossDefeated||this.progress.activatedCheckpoints.includes("brazier");this.world.setBossGate(e)}resetCombatAndEnemies(){this.ordinaryAttacker=null,this.bossGateNotified=!1;for(const e of this.encounters){e.active=!1,e.cleared=!1;for(const t of e.enemies)t.reset()}this.progress.bossDefeated?this.boss.setDefeatedAbsent(!0):(this.boss.isBossHidden=!1,this.boss.reset()),this.outgoingHits.length=0,this.incomingHits.length=0,this.lastCombatEvent=-99,this.deathTimer=0,this.updateBossGate()}startAtCheckpoint(e,t=!0){let i=e;(!$t[i]||!this.progress.activatedCheckpoints.includes(i))&&(i="camp"),this.progress.activeCheckpoint=i;const n=$t[i];this.player.root.visible=!0,this.player.resetAt(n,t),this.cameraRig.reset(),this.resetCombatAndEnemies(),this.ui.hideDeath(),this.ui.hideEnding(),this.currentInteraction=null,this.farBoundaryShown=!1,this.ambientTime=0,this.lastCombatEvent=-99}continueGame(){if(this.mode!=="title")return;let e=this.pendingSave?Rn(this.pendingSave):null;if(!e){const t=this.saveManager.load();t.ok&&(e=t.progress)}if(!e||!Bs(e).ok){this.ui.toast("No valid journey to continue.");return}this.progress=e,this.hasStarted=!0,this.hasSave=!0,this.pendingSave=Rn(e),this.applySettings(!1),this.applyProgressVisuals(),this.startAtCheckpoint(this.progress.activeCheckpoint,!0),this.mode="playing",this.ui.showGame(),this.ui.toast(this.loadedFromBackup?"Recovered the last valid autosave.":`Continued at ${$t[this.progress.activeCheckpoint].name}.`),this.loadedFromBackup=!1,this.input.requestCapture(),this.progress.chapterComplete?this.ui.showChapterBanner("Chapter complete","Light the Road",4):this.ui.showChapterBanner("Alder Hollow","Chapter I · Light the Road",3.2)}requestNewGame(){if(this.mode!=="title")return;this.hasSave||this.hasStarted?(this.ui.showConfirm("Replace this journey?","Starting a new game replaces the saved journey in this browser. This cannot be undone.",()=>this.startNewGame()),this.mode="confirm"):this.startNewGame()}startNewGame(){const e={...this.progress.settings};this.progress=ao(),this.progress.settings=e,this.hasStarted=!0,this.hasSave=!0,this.loadedFromBackup=!1,this.loadError=null,this.pendingSave=Rn(this.progress),this.applySettings(!1),this.applyProgressVisuals(),this.startAtCheckpoint("camp",!0),this.mode="playing",this.ui.hideConfirm(),this.ui.showGame(),this.ui.hideDeath(),this.saveNow("new-game"),this.input.requestCapture(),this.ui.showChapterBanner("Light the Road","Chapter I",4.2),this.ui.toast("Mara waits by the hearth."),this.audio.start()}cancelConfirm(){this.ui.hideConfirm(),this.mode="title",this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available)}pause(e="pause"){this.mode==="playing"&&(this.mode="paused",this.accumulator=0,this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showPause(),this.pauseReason=e)}resumeFromPause(){this.mode==="paused"&&(this.mode="playing",this.accumulator=0,this.input.consumeMouse(),this.ui.hidePause(),this.input.requestCapture(),this.ui.updateCaptureHint())}returnToTitle(){["paused","playing"].includes(this.mode)&&(this.saveNow("return-title"),this.pendingSave=Rn(this.progress),this.mode="title",this.input.releaseCapture(),this.input.consumeMouse(),this.player.root.visible=!1,this.currentInteraction=null,this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available))}openJournal(){this.mode==="paused"&&(this.mode="journal",this.input.consumeMouse(),this.ui.openJournal())}closeJournal(){this.mode==="journal"&&(this.ui.closeJournal(),this.mode="paused",this.ui.showPause())}openSettings(e="pause"){["title","paused"].includes(this.mode)&&(this.settingsOrigin=e,this.mode="settings",this.input.consumeMouse(),this.ui.openSettings(e))}closeSettings(){this.mode==="settings"&&(this.ui.closeSettings(),this.settingsOrigin==="pause"?(this.mode="paused",this.ui.showPause()):(this.mode="title",this.ui.showTitle(this.hasSave||this.hasStarted,!this.saveManager.available)))}acceptsGameplayInput(){return this.mode==="playing"&&!this.player.isDead}getHostileTargets(){const e=this.enemies.filter(t=>t.alive);return this.boss.alive&&!this.boss.isBossHidden&&e.push(this.boss),e}getEngagedEnemies(){return this.enemies.filter(e=>e.alive&&e.engaged)}hasLineOfSight(e){if(!this.camera)return!0;const t=this.camera.position.clone(),i=e.clone().sub(t),n=i.length();return n<.2?!0:(i.normalize(),new uu(t,i,.1,Math.max(.2,n-.6)).intersectObjects(this.world.cameraOccluders,!0).length===0)}getObjective(){return this.progress.beaconBuilt?is.complete:this.progress.bossDefeated||this.progress.lens?this.progress.salvage>=se.economy.beaconCost?is.lens:is.lensNoSalvage:this.boss.engaged?is.boss:this.progress.activatedCheckpoints.includes("brazier")?is.brazier:is.initial}getJournalData(){const e=this.progress,t=[];for(const n of["camp","brazier"])t.push(e.activatedCheckpoints.includes(n)?`${$t[n].name} — active`:`${$t[n].name} — undiscovered`);const i=[];return i.push(`Supply caches: ${e.claimedCaches.length} of 4`),e.keepsake&&i.push("Carved keepsake — on the hearth shelf"),e.workshopBuilt&&i.push("Workshop restored"),e.bossDefeated&&i.push("Gate Warden defeated"),e.beaconBuilt&&i.push("Bridge beacon restored"),i.length||i.push("Nothing discovered yet."),{objective:this.getObjective(),resources:`Salvage: ${e.salvage} · Beacon Lens: ${e.beaconBuilt?"set in the beacon":e.lensConsumed?"spent":e.lens?"carried":"not found"}`,restPoints:t,shortcut:e.shortcutOpen?"Open — cart yard to Alder Hollow":"Closed — opens from the cart yard side",discoveries:i}}findInteraction(){if(!this.player||this.player.isDead)return null;const e=this.player.position,t=[],i=(n,s,a,o,l=se.world.interactionRange)=>{const c=Math.hypot(e.x-a,e.z-o);c<=l&&t.push({id:n,label:s,x:a,z:o,distance:c})};i("mara","Talk to Mara",-4.2,17.8),i("hearth","Rest at the hearth",0,16,3.4),i("workshop",this.progress.workshopBuilt?"Inspect the restored workshop":"Restore the workshop",-8.6,13.3,3.1),this.progress.beaconBuilt?i("beacon","Inspect the bridge beacon",8.2,20.5,3.1):this.progress.lens?i("beacon","Restore the bridge beacon",8.2,20.5,3.1):i("beacon","Inspect the broken beacon",8.2,20.5,3.1);for(const n of Zr)this.progress.claimedCaches.includes(n.id)||i(`cache:${n.id}`,`Open ${n.name.toLowerCase()}`,n.x,n.z,2.5);if(this.progress.keepsake||i("keepsake","Take the carved keepsake",27.5,-25.4,2.5),this.progress.activatedCheckpoints.includes("brazier")?i("brazier","Rest at the field brazier",0,-96,3.3):i("brazier","Activate the field brazier",0,-96,3.3),!this.progress.shortcutOpen){const n=e.z<-20.8;i("shortcut",n?"Open the shortcut gate":"Inspect the shortcut gate",20,-20,3.3)}return t.sort((n,s)=>n.distance-s.distance),t[0]||null}interact(){if(this.mode!=="playing"||this.player.isDead)return;const e=this.findInteraction();if(!e)return;const t=e.id;t==="mara"?this.talkToMara():t==="hearth"?this.openRest("camp"):t==="workshop"?this.openProject("workshop"):t==="beacon"?this.progress.beaconBuilt?this.openDialogueData($i.beaconRestored,"The Bridge Beacon"):this.progress.lens?this.openProject("beacon"):(this.progress.dialogue.beaconInspected=!0,this.saveNow("beacon-inspected"),this.openDialogueData($i.beaconInspected,"The Broken Beacon")):t.startsWith("cache:")?this.collectCache(t.slice(6)):t==="keepsake"?this.collectKeepsake():t==="brazier"?this.progress.activatedCheckpoints.includes("brazier")?this.openRest("brazier"):this.activateBrazier():t==="shortcut"&&(this.player.position.z<-20.8?this.openShortcut():this.openDialogueData($i.shortcutLocked,"Shortcut Gate"))}talkToMara(){let e;this.progress.beaconBuilt?(e=$i.complete,this.progress.dialogue.completeSeen=!0):this.progress.bossDefeated||this.progress.lens?(e=this.progress.salvage>=se.economy.beaconCost?$i.lens:$i.lensPoor,this.progress.dialogue.lensSeen=!0):(e=$i.arrival,this.progress.dialogue.arrivalSeen=!0),this.saveNow("dialogue"),this.openDialogueData(e,"Alder Hollow")}openDialogueData(e,t){this.mode==="playing"&&(this.mode="dialogue",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showDialogue(e.title,e.body,t))}closeDialogue(){this.mode==="dialogue"&&(this.ui.hideDialogue(),this.mode="playing",this.input.requestCapture(),this.ui.updateCaptureHint())}collectCache(e){if(this.progress.claimedCaches.includes(e))return;const t=Zr.find(i=>i.id===e);t&&(this.progress.claimedCaches.push(e),this.progress.salvage+=se.economy.cacheSalvage,this.world.setCacheClaimed(e,!0),this.audio.pickup(),this.saveNow("cache"),this.ui.toast(`${t.name}: +2 Salvage.`))}collectKeepsake(){this.progress.keepsake||(this.progress.keepsake=!0,this.world.setKeepsakeCollected(!0),this.audio.pickup(),this.saveNow("keepsake"),this.ui.toast("Carved keepsake recovered. It now rests on the hearth shelf."))}openShortcut(){this.progress.shortcutOpen||(this.progress.shortcutOpen=!0,this.world.setShortcutOpen(!0),this.audio.gate(),this.saveNow("shortcut"),this.ui.toast("Shortcut opened: cart yard to Alder Hollow."),this.ui.showChapterBanner("Shortcut opened","The old road returns",3))}isRestAllowed(){return!(this.player.isDead||this.boss.engaged||this.enemies.some(e=>e.alive&&e.engaged)||this.time-this.lastCombatEvent<se.world.combatQuietTime)}openRest(e){if(this.mode!=="playing")return;if(!this.isRestAllowed()){this.ui.toast("You cannot rest while the road is restless. Wait five seconds after combat.");return}const t=this.progress.activatedCheckpoints,i=e==="brazier"||t.includes("brazier"),n=[];if(i)for(const s of["camp","brazier"])s===e||!t.includes(s)||n.push({id:s,short:$t[s].short,name:$t[s].name});this.mode="rest",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.showRestMenu({checkpointId:e,title:$t[e].name,body:`Rest restores health, stamina and both healing charges. Ordinary enemies and an undefeated Gate Warden reset. Permanent progress remains.

Walking past a rest point does not rest you.`,canTravel:n.length>0,travelOptions:n})}closeMenu(){["rest","project"].includes(this.mode)&&(this.ui.hideRest(),this.ui.hideProject(),this.mode="playing",this.input.requestCapture(),this.ui.updateCaptureHint())}performRestAt(e){if(!this.isRestAllowed()){this.ui.hideRest(),this.mode="playing",this.ui.toast("The road is still restless."),this.input.requestCapture();return}this.progress.activeCheckpoint=e,this.startAtCheckpoint(e,!0),this.saveNow("rest"),this.ui.hideRest(),this._runTransition(`Resting at ${$t[e].name}`,.75),this.ui.toast("Rested. Health, stamina and healing charges restored.")}travelTo(e){if(!this.isRestAllowed()){this.ui.hideRest(),this.mode="playing",this.ui.toast("The road is still restless."),this.input.requestCapture();return}this.progress.activatedCheckpoints.includes(e)&&(this.progress.activeCheckpoint=e,this.startAtCheckpoint(e,!0),this.saveNow("travel"),this.ui.hideRest(),this._runTransition(`Traveling to ${$t[e].name}`,.9),this.ui.toast(`Traveled to ${$t[e].name}.`))}activateBrazier(){this.progress.activatedCheckpoints.includes("brazier")||this.mode==="playing"&&(this.progress.activatedCheckpoints.push("brazier"),this.progress.activeCheckpoint="brazier",this.world.setBrazierActive(!0),this.updateBossGate(),this.startAtCheckpoint("brazier",!0),this.saveNow("brazier"),this.audio.beacon(),this._runTransition("The field brazier catches",1),this.ui.toast("Field brazier lit. It is now your active rest point."),this.ui.showChapterBanner("Field Brazier Lit","A safe place before the gate",3.6))}openProject(e){if(this.mode!=="playing")return;this.mode="project",this.input.consumeMouse(),this.input.releaseCapture();const t=this.progress.salvage;let i;if(e==="workshop"){const n=this.progress.workshopBuilt;i={kind:e,title:n?"Restored Workshop":"Restore the Workshop",body:n?"The bench is true, the roof is whole and the tools are warm. The reinforced spear tip raises light thrusts to 30 damage and heavy thrusts to 54.":`Repair the bench, roof and tools. Warm light returns to the workshop, and the visible spear tip is reinforced.

Benefit: light thrust 25 → 30 damage, heavy thrust 45 → 54. Reach, speed and stamina are unchanged.

A Briarling falls in two light hits; a Mossguard in three.`,resources:`Salvage <strong>${t}</strong> · Cost <strong>${se.economy.workshopCost}</strong>`,built:n,canBuild:!n&&t>=se.economy.workshopCost,buildLabel:`Restore workshop · ${se.economy.workshopCost} Salvage`}}else{const n=this.progress.beaconBuilt;i={kind:e,title:n?"The Bridge Beacon":"Restore the Bridge Beacon",body:n?"The Beacon Lens is set, the bridge lamps burn and the road gate stands open. The chapter is complete; Alder Hollow remains yours to explore.":`Fit the Beacon Lens and repair the beacon. Bridge lamps will wake along the old crossing and the road gate will open.

Requires the Beacon Lens from the Gate Warden and eight Salvage.

Completing this restores the chapter.`,resources:`Salvage <strong>${t}</strong> · Cost <strong>${se.economy.beaconCost}</strong> · Lens <strong>${this.progress.lens?"carried":"missing"}</strong>`,built:n,canBuild:!n&&this.progress.lens&&t>=se.economy.beaconCost,buildLabel:`Restore bridge beacon · ${se.economy.beaconCost} Salvage + Lens`}}this.ui.showProject(i)}buildProject(e){if(this.mode==="project"){if(e==="workshop"){if(this.progress.workshopBuilt)return;if(this.progress.salvage<se.economy.workshopCost){this.ui.toast("Not enough Salvage for the workshop.");return}this.progress.salvage-=se.economy.workshopCost,this.progress.workshopBuilt=!0,this.world.setWorkshopBuilt(!0),this.player.setReinforced(!0),this.saveNow("workshop-built"),this.audio.construction(),this.ui.hideProject(),this._runTransition("The workshop takes shape",.9),this.ui.toast("Workshop restored. Spear damage is now 30 light / 54 heavy."),this.ui.showChapterBanner("Workshop Restored","The spear tip is reinforced",3.2)}else if(e==="beacon"){if(this.progress.beaconBuilt)return;if(!this.progress.lens){this.ui.toast("The Beacon Lens is still missing.");return}if(this.progress.salvage<se.economy.beaconCost){this.ui.toast("Not enough Salvage for the bridge beacon.");return}this.progress.salvage-=se.economy.beaconCost,this.progress.lensConsumed=!0,this.progress.beaconBuilt=!0,this.progress.chapterComplete=!0,this.saveNow("beacon-built"),this.world.setBeaconBuilt(!0),this.ui.hideProject(),this.startEnding()}}}startEnding(){this.mode="ending",this.input.consumeMouse(),this.input.releaseCapture(),this.ui.hideProject(),this.ui.hideHud(),this.audio.beacon(),this.world.setBeaconBuilt(!0),this.world.setBridgeLights(!1),this.world.beaconLens.visible=!0,this.world.beaconLight.intensity=3.2;for(const e of this.world.bridgeLamps)e.bulb.visible=!1,e.light.visible=!1,e.light.intensity=0;this.cameraRig.setCinematic(new L(14.2,5.1,30),new L(8.4,2.5,22.2)),this.endingState={elapsed:0,shown:!1,lamps:0},this.ui.showChapterBanner("The bridge wakes","Light the Road",2.4)}updateEnding(e){if(!this.endingState)return;this.endingState.elapsed+=e;const t=this.endingState.elapsed,i=vt(Math.floor((t-.55)/.42)+1,0,this.world.bridgeLamps.length);if(i>this.endingState.lamps){for(let n=this.endingState.lamps;n<i;n++){const s=this.world.bridgeLamps[n];s.bulb.visible=!0,s.light.visible=!0,s.light.intensity=1.4,this.audio._tone({freq:480+n*90,type:"sine",duration:.5,volume:.03,slide:60})}this.endingState.lamps=i}t>=2.9&&!this.endingState.shown&&(this.endingState.shown=!0,this.world.setBridgeLights(!0),this.ui.showEnding(`Mara stands at the hearth and watches the old lamps answer one by one.

“You have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.”

Chapter complete — Light the Road.`))}finishEnding(){this.mode==="ending"&&(this.world.setBridgeLights(!0),this.ui.hideEnding(),this.ui.showGame(),this.cameraRig.clearCinematic(),this.mode="playing",this.endingState=null,this.saveNow("chapter-complete"),this.input.requestCapture(),this.ui.showChapterBanner("Chapter complete","Light the Road",5),this.ui.toast("The road is lit. Explore Alder Hollow and finish any missed work."))}respawnAfterDeath(){const e=$t[this.progress.activeCheckpoint]||$t.camp;this.player.resetAt(e,!0),this.cameraRig.reset(),this.resetCombatAndEnemies(),this.outgoingHits.length=0,this.incomingHits.length=0,this.lastCombatEvent=-99,this.deathTimer=0,this.currentInteraction=null,this.ui.hideDeath(),this.ui.toast(`Returned to ${e.name}.`)}_checkFarBoundary(){this.farBoundaryShown||!this.progress.chapterComplete||this.player.position.z<-129&&(this.farBoundaryShown=!0,this.ui.showChapterBanner("Chapter complete","The road beyond is not yet built",5),this.ui.toast("Chapter complete. The next road is not part of this build."))}_runTransition(e,t){this.mode="transition",this.input.consumeMouse(),this.ui.showTransition(e),this.input.requestCapture(),this.transitionTimer&&clearTimeout(this.transitionTimer),this.transitionTimer=setTimeout(()=>{this.ui.fadeTransition(),this.mode="playing",this.accumulator=0,this.input.consumeMouse(),this.ui.updateCaptureHint()},t*1e3)}_spawnHitEffect(e,t){const i=new me;i.position.copy(e);const n=new Ht({color:t?16765059:15909498,transparent:!0,opacity:.9,depthWrite:!1}),s=[],a=t?8:5;for(let o=0;o<a;o++){const l=new He(this.sparkGeo,n);l.position.set(0,0,0);const c=Math.random()*Math.PI*2,h=Math.random()*1.7+.4,u=Math.random()*2.2+.8;s.push({mesh:l,vx:Math.sin(c)*u,vy:h,vz:Math.cos(c)*u}),i.add(l)}this.scene.add(i),this.effects.push({group:i,material:n,parts:s,life:.36,maxLife:.36})}_updateEffects(e){for(let t=this.effects.length-1;t>=0;t--){const i=this.effects[t];i.life-=e;for(const n of i.parts)n.vy-=9.8*e,n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e,n.mesh.scale.setScalar(Math.max(.1,i.life/i.maxLife));i.material.opacity=Math.max(0,i.life/i.maxLife),i.life<=0&&(this.scene.remove(i.group),i.material.dispose(),this.effects.splice(t,1))}}}const nv=document.getElementById("game-canvas");try{window.waykeepers=await Ll.create(nv)}catch(r){console.error(r);const e=document.createElement("div");e.className="fatal-error",e.innerHTML=`<strong>Waykeepers could not start.</strong><br>${String(r.message||r)}`,document.body.appendChild(e)}
