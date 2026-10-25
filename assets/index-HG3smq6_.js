(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,ee=33777,N=33778,P=33779,F=35840,te=35841,ne=35842,re=35843,ie=36196,ae=37492,oe=37496,se=37488,I=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,je=2300,L=2301,Me=2302,Ne=2303,Pe=2400,R=2401,Fe=2402,z=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=35048,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n){return(1-n)*e+n*t}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dt.copy(this).projectOnVector(e),this.sub(dt)}reflect(e){return this.sub(dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dt=new U,ft=new ut,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(pt.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(pt.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pt=new W,mt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ht=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gt(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var _t=gt();function vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var bt,xt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bt===void 0&&(bt=Ke(`canvas`)),bt.width=e.width,bt.height=e.height;let t=bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(vt(t[e]/255)*255):t[e]=vt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},St=0,Ct=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:St++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(wt(r[t].image)):e.push(wt(r[t]))}else e=wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?xt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Tt=0,Et=new U,Dt=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tt++}),this.uuid=it(),this.name=``,this.source=new Ct(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Et).x}get height(){return this.source.getSize(Et).y}get depth(){return this.source.getSize(Et).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=300,Dt.DEFAULT_ANISOTROPY=1;var Ot=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let r=new Dt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ct(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},At=class extends kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jt=class extends Dt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mt=class extends Dt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Nt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pt.setFromMatrixColumn(e,0).length(),i=1/Pt.setFromMatrixColumn(e,1).length(),a=1/Pt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(It,e,Lt)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rt.crossVectors(n,Bt),Rt.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rt.crossVectors(n,Bt)),Rt.normalize(),zt.crossVectors(Bt,Rt),r[0]=Rt.x,r[4]=zt.x,r[8]=Bt.x,r[1]=Rt.y,r[5]=zt.y,r[9]=Bt.y,r[2]=Rt.z,r[6]=zt.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pt.set(r[0],r[1],r[2]).length(),o=Pt.set(r[4],r[5],r[6]).length(),s=Pt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ft.copy(this);let c=1/a,l=1/o,u=1/s;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pt=new U,Ft=new Nt,It=new U(0,0,0),Lt=new U(1,1,1),Rt=new U,zt=new U,Bt=new U,Vt=new Nt,Ht=new ut,Ut=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ht.setFromEuler(this),this.setFromQuaternion(Ht,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ut.DEFAULT_ORDER=`XYZ`;var Wt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gt=0,Kt=new U,qt=new ut,Jt=new Nt,Yt=new U,Xt=new U,Zt=new U,Qt=new ut,$t=new U(1,0,0),en=new U(0,1,0),tn=new U(0,0,1),nn={type:`added`},rn={type:`removed`},an={type:`childadded`,child:null},on={type:`childremoved`,child:null},sn=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Ut,r=new ut,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new W}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.multiply(qt),this}rotateOnWorldAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.premultiply(qt),this}rotateX(e){return this.rotateOnAxis($t,e)}rotateY(e){return this.rotateOnAxis(en,e)}rotateZ(e){return this.rotateOnAxis(tn,e)}translateOnAxis(e,t){return Kt.copy(e).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($t,e)}translateY(e){return this.translateOnAxis(en,e)}translateZ(e){return this.translateOnAxis(tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yt.copy(e):Yt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Xt,Yt,this.up):Jt.lookAt(Yt,Xt,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),qt.setFromRotationMatrix(Jt),this.quaternion.premultiply(qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,e,Zt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,Qt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};sn.DEFAULT_UP=new U(0,1,0),sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ln={type:`move`},un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},pn={h:0,s:0,l:0};function mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mn(i,r,e+1/3),this.g=mn(i,r,e),this.b=mn(i,r,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=dn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}copyLinearToSRGB(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return _t.workingToColorSpace(hn.copy(this),e),Math.round(at(hn.r*255,0,255))*65536+Math.round(at(hn.g*255,0,255))*256+Math.round(at(hn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,i=hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ie){_t.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(pn);let n=st(fn.h,pn.h,t),r=st(fn.s,pn.s,t),i=st(fn.l,pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new G;G.NAMES=dn;var gn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},_n=class extends sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new U,yn=new U,bn=new U,xn=new U,Sn=new U,Cn=new U,wn=new U,Tn=new U,En=new U,Dn=new U,On=new Ot,kn=new Ot,An=new Ot,jn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){vn.subVectors(r,t),yn.subVectors(n,t),bn.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(yn),s=vn.dot(bn),c=yn.dot(yn),l=yn.dot(bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,xn.x),s.addScaledVector(a,xn.y),s.addScaledVector(o,xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return On.setScalar(0),kn.setScalar(0),An.setScalar(0),On.fromBufferAttribute(e,t),kn.fromBufferAttribute(e,n),An.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(On,i.x),a.addScaledVector(kn,i.y),a.addScaledVector(An,i.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),yn.subVectors(e,t),vn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),vn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Sn.subVectors(r,n),Cn.subVectors(i,n),Tn.subVectors(e,n);let s=Sn.dot(Tn),c=Cn.dot(Tn);if(s<=0&&c<=0)return t.copy(n);En.subVectors(e,r);let l=Sn.dot(En),u=Cn.dot(En);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Sn,a);Dn.subVectors(e,i);let f=Sn.dot(Dn),p=Cn.dot(Dn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Cn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Sn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Pn):Pn.fromBufferAttribute(r,t),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fn.copy(e.boundingBox)),Fn.applyMatrix4(e.matrixWorld),this.union(Fn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hn),Un.subVectors(this.max,Hn),In.subVectors(e.a,Hn),Ln.subVectors(e.b,Hn),Rn.subVectors(e.c,Hn),zn.subVectors(Ln,In),Bn.subVectors(Rn,Ln),Vn.subVectors(In,Rn);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0];return!Kn(t,In,Ln,Rn,Un)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,In,Ln,Rn,Un))?!1:(Wn.crossVectors(zn,Bn),t=[Wn.x,Wn.y,Wn.z],Kn(t,In,Ln,Rn,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,Fn=new Mn,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U;function Kn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Gn.fromArray(e,a);let o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),s=t.dot(Gn),c=n.dot(Gn),l=r.dot(Gn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var qn=new U,Jn=new H,Yn=0,Xn=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix3(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Zn=class extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qn=class extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},$n=class extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},er=new Mn,tr=new U,nr=new U,rr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(tr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(nr)),this.expandByPoint(tr.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ir=0,ar=new Nt,or=new sn,sr=new U,cr=new Mn,lr=new Mn,ur=new U,dr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?Qn:Zn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ar.makeRotationFromQuaternion(e),this.applyMatrix4(ar),this}rotateX(e){return ar.makeRotationX(e),this.applyMatrix4(ar),this}rotateY(e){return ar.makeRotationY(e),this.applyMatrix4(ar),this}rotateZ(e){return ar.makeRotationZ(e),this.applyMatrix4(ar),this}translate(e,t,n){return ar.makeTranslation(e,t,n),this.applyMatrix4(ar),this}scale(e,t,n){return ar.makeScale(e,t,n),this.applyMatrix4(ar),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new $n(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(this.boundingBox.min,cr.min),this.boundingBox.expandByPoint(ur),ur.addVectors(this.boundingBox.max,cr.max),this.boundingBox.expandByPoint(ur)):(this.boundingBox.expandByPoint(cr.min),this.boundingBox.expandByPoint(cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(cr.min,lr.min),cr.expandByPoint(ur),ur.addVectors(cr.max,lr.max),cr.expandByPoint(ur)):(cr.expandByPoint(lr.min),cr.expandByPoint(lr.max))}cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ur.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ur));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ur.fromBufferAttribute(a,t),o&&(sr.fromBufferAttribute(e,t),ur.add(sr)),r=Math.max(r,n.distanceToSquared(ur))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ur.fromBufferAttribute(e,t),ur.normalize(),e.setXYZ(t,ur.x,ur.y,ur.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Xn(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ve,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pr=new U,mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ct(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ct(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ct(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ct(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Xn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hr=new U,gr=new U,_r=new W,vr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hr.subVectors(n,t).cross(gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_r.getNormalMatrix(e),r=this.coplanarPoint(hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yr=0,br=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=class extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Cr=new U,wr=new U,Tr=new U,Er=new H,Dr=new H,Or=new Nt,kr=new U,Ar=new U,jr=new U,Mr=new H,Nr=new H,Pr=new H,Fr=class extends sn{constructor(e=new xr){if(super(),this.isSprite=!0,this.type=`Sprite`,Sr===void 0){Sr=new dr;let e=new fr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute(`position`,new mr(e,3,0,!1)),Sr.setAttribute(`uv`,new mr(e,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&V(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),wr.setFromMatrixScale(this.matrixWorld),Or.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ir(kr.set(-.5,-.5,0),Tr,a,wr,r,i),Ir(Ar.set(.5,-.5,0),Tr,a,wr,r,i),Ir(jr.set(.5,.5,0),Tr,a,wr,r,i),Mr.set(0,0),Nr.set(1,0),Pr.set(1,1);let o=e.ray.intersectTriangle(kr,Ar,jr,!1,Cr);if(o===null&&(Ir(Ar.set(-.5,.5,0),Tr,a,wr,r,i),Nr.set(0,1),o=e.ray.intersectTriangle(kr,jr,Ar,!1,Cr),o===null))return;let s=e.ray.origin.distanceTo(Cr);s<e.near||s>e.far||t.push({distance:s,point:Cr.clone(),uv:jn.getInterpolation(Cr,kr,Ar,jr,Mr,Nr,Pr,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ir(e,t,n,r,i,a){Er.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Dr.copy(Er):(Dr.x=a*Er.x-i*Er.y,Dr.y=i*Er.x+a*Er.y),e.copy(t),e.x+=Dr.x,e.y+=Dr.y,e.applyMatrix4(Or)}var Lr=new U,Rr=new U,zr=new U,Br=new U,Vr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,ne=E-P*D,re=O-N*A,ie=k-P*A,ae=j-N*ee,oe=M-P*ee,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=F*(se*D+I*A+ce*ee);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ur=new Nt,Wr=new Vr,Gr=new rr,Kr=new U,qr=new U,Jr=new U,Yr=new U,Xr=new U,Zr=new U,Qr=new U,$r=new U,K=class extends sn{constructor(e=new dr,t=new Hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xr.fromBufferAttribute(s,e),a?Zr.addScaledVector(Xr,r):Zr.addScaledVector(Xr.sub(t),r))}t.add(Zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Wr.copy(e.ray).recast(e.near),!(Gr.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Gr,Kr)===null||Wr.origin.distanceToSquared(Kr)>(e.far-e.near)**2))&&(Ur.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Ur),(n.boundingBox===null||Wr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ei(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$r.copy(s),$r.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($r);return l<n.near||l>n.far?null:{distance:l,point:$r.clone(),object:e}}function ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qr),e.getVertexPosition(c,Jr),e.getVertexPosition(l,Yr);let u=ei(e,t,n,r,qr,Jr,Yr,Qr);if(u){let e=new U;jn.getBarycoord(Qr,qr,Jr,Yr,e),i&&(u.uv=jn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=jn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=jn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};jn.getNormal(qr,Jr,Yr,t.normal),u.face=t,u.barycoord=e}return u}var ni=class extends Dt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=class extends Xn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ii=new Nt,ai=new Nt,oi=[],si=new Mn,ci=new Nt,li=new K,ui=new rr,di=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),si.copy(e.boundingBox).applyMatrix4(ii),this.boundingBox.union(si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),ui.copy(e.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ui.copy(this.boundingSphere),ui.applyMatrix4(n),e.ray.intersectsSphere(ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ii),ai.multiplyMatrices(n,ii),li.matrixWorld=ai,li.raycast(e,oi);for(let e=0,n=oi.length;e<n;e++){let n=oi[e];n.instanceId=i,n.object=this,t.push(n)}oi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fi=new rr,pi=new H(.5,.5),mi=new U,hi=class{constructor(e=new vr,t=new vr,n=new vr,r=new vr,i=new vr,a=new vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476+pi.distanceTo(e.center),fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gi=class extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_i=new Nt,vi=new Vr,yi=new rr,bi=new U,xi=class extends sn{constructor(e=new dr,t=new gi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(r),yi.radius+=i,e.ray.intersectsSphere(yi)===!1)return;_i.copy(r).invert(),vi.copy(e.ray).applyMatrix4(_i);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);bi.fromBufferAttribute(l,n),Si(bi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)bi.fromBufferAttribute(l,a),Si(bi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Si(e,t,n,r,i,a,o){let s=vi.distanceSqToPoint(e);if(s<n){let n=new U;vi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ci=class extends Dt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Dt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class extends Dt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ct(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ei=class extends Ti{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Di=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class e extends dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new $n(c,3)),this.setAttribute(`normal`,new $n(l,3)),this.setAttribute(`uv`,new $n(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ki=class e extends dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new $n(a,3)),this.setAttribute(`normal`,new $n(o,3)),this.setAttribute(`uv`,new $n(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ai=class e extends dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new $n(u,3)),this.setAttribute(`normal`,new $n(d,3)),this.setAttribute(`uv`,new $n(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ji=class e extends dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new $n(i,3)),this.setAttribute(`normal`,new $n(i.slice(),3)),this.setAttribute(`uv`,new $n(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Mi=class e extends ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ni=class e extends ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Pi=class e extends ji{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Fi=class e extends dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new $n(p,3)),this.setAttribute(`normal`,new $n(m,3)),this.setAttribute(`uv`,new $n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ii=class e extends dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new $n(s,3)),this.setAttribute(`normal`,new $n(c,3)),this.setAttribute(`uv`,new $n(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Li=class e extends dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new $n(p,3)),this.setAttribute(`normal`,new $n(m,3)),this.setAttribute(`uv`,new $n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ri=class e extends dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new $n(c,3)),this.setAttribute(`normal`,new $n(l,3)),this.setAttribute(`uv`,new $n(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function zi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Vi(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Vi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Bi(e){let t={};for(let n=0;n<e.length;n++){let r=zi(e[n]);for(let e in r)t[e]=r[e]}return t}function Vi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Hi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ui(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var Wi={clone:zi,merge:Bi},Gi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ki=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qi=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gi,this.fragmentShader=Ki,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Hi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ot().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Nt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ji=class extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Yi=class extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xi=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=z,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zi=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function $i(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ta=class extends ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case R:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case R:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},na=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ra=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ia=class extends ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=sa(n,t,g,y,r);i[p]=aa(x,o,_,b,m)}return i}};function aa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function oa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function sa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=aa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=oa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ca=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),$i(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case L:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break;case Ne:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return L;case this.InterpolantFactoryMethodSmooth:return Me;case this.InterpolantFactoryMethodBezier:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;$i(this.settings)&&(la(this.settings.inTangents,e),la(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,$i(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function la(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ca.prototype.ValueTypeName=``,ca.prototype.TimeBufferType=Float32Array,ca.prototype.ValueBufferType=Float32Array,ca.prototype.DefaultInterpolation=L;var ua=class extends ca{constructor(e,t,n){super(e,t,n)}};ua.prototype.ValueTypeName=`bool`,ua.prototype.ValueBufferType=Array,ua.prototype.DefaultInterpolation=je,ua.prototype.InterpolantFactoryMethodLinear=void 0,ua.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};da.prototype.ValueTypeName=`color`;var fa=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName=`number`;var pa=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},ma=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName=`quaternion`,ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends ca{constructor(e,t,n){super(e,t,n)}};ha.prototype.ValueTypeName=`string`,ha.prototype.ValueBufferType=Array,ha.prototype.DefaultInterpolation=je,ha.prototype.InterpolantFactoryMethodLinear=void 0,ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};ga.prototype.ValueTypeName=`vector`;var _a=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},va=class extends _a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ya=new Nt,ba=new U,xa=new U,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(ba),xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ca=new U,wa=new ut,Ta=new U,Ea=class extends sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ca,wa,Ta),Ta.x===1&&Ta.y===1&&Ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,wa,Ta.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ca,wa,Ta),Ta.x===1&&Ta.y===1&&Ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,wa,Ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Da=new U,Oa=new H,ka=new H,Aa=class extends Ea{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,t){return this.getViewBounds(e,Oa,ka),t.subVectors(ka,Oa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ja=class extends Sa{constructor(){super(new Aa(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=rt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ma=class extends _a{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ja}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Na=class extends Sa{constructor(){super(new Aa(90,1,.5,500)),this.isPointLightShadow=!0}},Pa=class extends _a{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Na}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fa=class extends Ea{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ia=class extends Sa{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Ia}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ra=-90,za=1,Ba=class extends sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Aa(Ra,za,e,t);r.layers=this.layers,this.add(r);let i=new Aa(Ra,za,e,t);i.layers=this.layers,this.add(i);let a=new Aa(Ra,za,e,t);a.layers=this.layers,this.add(a);let o=new Aa(Ra,za,e,t);o.layers=this.layers,this.add(o);let s=new Aa(Ra,za,e,t);s.layers=this.layers,this.add(s);let c=new Aa(Ra,za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Va=class extends Aa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ua.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ua(){this._document.hidden===!1&&this.reset()}var Wa=`\\[\\]\\.:\\/`,Ga=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ka=`[^\\[\\]\\.:\\/]`,qa=`[^`+Wa.replace(`\\.`,``)+`]`,Ja=`((?:WC+[\\/:])*)`.replace(`WC`,Ka),Ya=`(WCOD+)?`.replace(`WCOD`,qa),Xa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ka),Za=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ka),Qa=RegExp(`^`+Ja+Ya+Xa+Za+`$`),$a=[`material`,`materials`,`bones`,`map`],eo=class{constructor(e,t,n){let r=n||to.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},to=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ga,``)}static parseTrackName(e){let t=Qa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);$a.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};to.Composite=eo,to.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},to.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},to.prototype.GetterByBindingType=[to.prototype._getValue_direct,to.prototype._getValue_array,to.prototype._getValue_arrayElement,to.prototype._getValue_toArray],to.prototype.SetterByBindingTypeAndVersioning=[[to.prototype._setValue_direct,to.prototype._setValue_direct_setNeedsUpdate,to.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[to.prototype._setValue_array,to.prototype._setValue_array_setNeedsUpdate,to.prototype._setValue_array_setMatrixWorldNeedsUpdate],[to.prototype._setValue_arrayElement,to.prototype._setValue_arrayElement_setNeedsUpdate,to.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[to.prototype._setValue_fromArray,to.prototype._setValue_fromArray_setNeedsUpdate,to.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function no(e,t,n,r){let i=ro(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case F:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ro(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function io(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ao(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var oo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},q={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},so={basic:{uniforms:Bi([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:oo.meshbasic_vert,fragmentShader:oo.meshbasic_frag},lambert:{uniforms:Bi([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:oo.meshlambert_vert,fragmentShader:oo.meshlambert_frag},phong:{uniforms:Bi([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oo.meshphong_vert,fragmentShader:oo.meshphong_frag},standard:{uniforms:Bi([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oo.meshphysical_vert,fragmentShader:oo.meshphysical_frag},toon:{uniforms:Bi([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new G(0)}}]),vertexShader:oo.meshtoon_vert,fragmentShader:oo.meshtoon_frag},matcap:{uniforms:Bi([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:oo.meshmatcap_vert,fragmentShader:oo.meshmatcap_frag},points:{uniforms:Bi([q.points,q.fog]),vertexShader:oo.points_vert,fragmentShader:oo.points_frag},dashed:{uniforms:Bi([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oo.linedashed_vert,fragmentShader:oo.linedashed_frag},depth:{uniforms:Bi([q.common,q.displacementmap]),vertexShader:oo.depth_vert,fragmentShader:oo.depth_frag},normal:{uniforms:Bi([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:oo.meshnormal_vert,fragmentShader:oo.meshnormal_frag},sprite:{uniforms:Bi([q.sprite,q.fog]),vertexShader:oo.sprite_vert,fragmentShader:oo.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oo.background_vert,fragmentShader:oo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:oo.backgroundCube_vert,fragmentShader:oo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oo.cube_vert,fragmentShader:oo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oo.equirect_vert,fragmentShader:oo.equirect_frag},distance:{uniforms:Bi([q.common,q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oo.distance_vert,fragmentShader:oo.distance_frag},shadow:{uniforms:Bi([q.lights,q.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:oo.shadow_vert,fragmentShader:oo.shadow_frag}};so.physical={uniforms:Bi([so.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:oo.meshphysical_vert,fragmentShader:oo.meshphysical_frag};var co={r:0,b:0,g:0},lo=new Nt,uo=new W;uo.set(-1,0,0,0,1,0,0,0,1);function fo(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new Oi(1,1,1),new qi({name:`BackgroundCubeMaterial`,uniforms:zi(so.backgroundCube.uniforms),vertexShader:so.backgroundCube.vertexShader,fragmentShader:so.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uo),l.material.toneMapped=_t.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Fi(2,2),new qi({name:`BackgroundMaterial`,uniforms:zi(so.background.uniforms),vertexShader:so.background.vertexShader,fragmentShader:so.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_t.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(co,Ui(e)),n.buffers.color.setClear(co.r,co.g,co.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function po(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function mo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ho(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function go(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vr,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var _o=4,vo=6,yo=20,bo=256,xo=new Fa,So=new G,Co=null,wo=0,To=0,Eo=!1,Do=new U,Oo=new U,ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Do}=i;Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,wo,To),this._renderer.xr.enabled=Eo,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Le,depthBuffer:!1},r=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ao(r)),this._blurMaterial=Po(r,e,t),this._ggxMaterial=No(r,e,t)}return r}_compileMaterial(e){let t=new K(new dr,e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,r,i){let a=new Aa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(So),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Oi,new Hr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(So),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Mo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Mo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-_o?n-d+_o:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Mo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,xo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Mo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,xo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Mo(t,3*l*(r>this._lodMax-_o?r-this._lodMax+_o:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,xo)}};function Ao(e){let t=[],n=[],r=e,i=e-_o+1+vo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Oo.set(1,r,n):e===1?Oo.set(-n,1,-r):e===2?Oo.set(-n,r,1):e===3?Oo.set(-1,r,-n):e===4?Oo.set(-n,-1,r):Oo.set(n,r,-1),Oo.toArray(l,(e*6+t)*3)}}let u=new dr;u.setAttribute(`position`,new Xn(c,3)),u.setAttribute(`outputDirection`,new Xn(l,3)),n.push(new K(u,null)),r>_o&&r--}return{lodMeshes:n,sizeLods:t}}function jo(e,t,n){let r=new At(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Mo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function No(e,t,n){return new qi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:bo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Po(e,t,n){return new qi({name:`SphericalGaussianBlur`,defines:{SAMPLES:yo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fo(){return new qi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Io(){return new qi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ro=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ci(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oi(5,5,5),i=new qi({name:`CubemapFromEquirect`,uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ba(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function zo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ro(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ko(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ko(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Bo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Vo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Qn:Zn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ho(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Uo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Wo(e,t,n){let r=new WeakMap,i=new Ot;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Go(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ko={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function qo(e,t,n,r,i,a){let o=new At(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new dr;l.setAttribute(`position`,new $n([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new $n([0,2,0,0,2,0],2));let u=new Ji({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new K(l,u),f=new Fa(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new At(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new At(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},_t.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ko[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Jo=new Dt,Yo=new Ti(1,1),Xo=new jt,Zo=new Mt,Qo=new Ci,$o=[],es=[],ts=new Float32Array(16),ns=new Float32Array(9),rs=new Float32Array(4);function is(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$o[i];if(a===void 0&&(a=new Float32Array(i),$o[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function as(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function os(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ss(e,t){let n=es[t];n===void 0&&(n=new Int32Array(t),es[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(as(n,t))return;e.uniform2fv(this.addr,t),os(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(as(n,t))return;e.uniform3fv(this.addr,t),os(n,t)}}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(as(n,t))return;e.uniform4fv(this.addr,t),os(n,t)}}function fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(as(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),os(n,t)}else{if(as(n,r))return;rs.set(r),e.uniformMatrix2fv(this.addr,!1,rs),os(n,r)}}function ps(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(as(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),os(n,t)}else{if(as(n,r))return;ns.set(r),e.uniformMatrix3fv(this.addr,!1,ns),os(n,r)}}function ms(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(as(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),os(n,t)}else{if(as(n,r))return;ts.set(r),e.uniformMatrix4fv(this.addr,!1,ts),os(n,r)}}function hs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(as(n,t))return;e.uniform2iv(this.addr,t),os(n,t)}}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(as(n,t))return;e.uniform3iv(this.addr,t),os(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(as(n,t))return;e.uniform4iv(this.addr,t),os(n,t)}}function ys(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(as(n,t))return;e.uniform2uiv(this.addr,t),os(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(as(n,t))return;e.uniform3uiv(this.addr,t),os(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(as(n,t))return;e.uniform4uiv(this.addr,t),os(n,t)}}function Cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Yo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Yo):a=Jo,n.setTexture2D(t||a,i)}function ws(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zo,i)}function Ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Qo,i)}function Es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xo,i)}function Ds(e){switch(e){case 5126:return cs;case 35664:return ls;case 35665:return us;case 35666:return ds;case 35674:return fs;case 35675:return ps;case 35676:return ms;case 5124:case 35670:return hs;case 35667:case 35671:return gs;case 35668:case 35672:return _s;case 35669:case 35673:return vs;case 5125:return ys;case 36294:return bs;case 36295:return xs;case 36296:return Ss;case 35678:case 36198:case 36298:case 36306:case 35682:return Cs;case 35679:case 36299:case 36307:return ws;case 35680:case 36300:case 36308:case 36293:return Ts;case 36289:case 36303:case 36311:case 36292:return Es}}function Os(e,t){e.uniform1fv(this.addr,t)}function ks(e,t){let n=is(t,this.size,2);e.uniform2fv(this.addr,n)}function As(e,t){let n=is(t,this.size,3);e.uniform3fv(this.addr,n)}function js(e,t){let n=is(t,this.size,4);e.uniform4fv(this.addr,n)}function Ms(e,t){let n=is(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ns(e,t){let n=is(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ps(e,t){let n=is(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fs(e,t){e.uniform1iv(this.addr,t)}function Is(e,t){e.uniform2iv(this.addr,t)}function Ls(e,t){e.uniform3iv(this.addr,t)}function Rs(e,t){e.uniform4iv(this.addr,t)}function zs(e,t){e.uniform1uiv(this.addr,t)}function Bs(e,t){e.uniform2uiv(this.addr,t)}function Vs(e,t){e.uniform3uiv(this.addr,t)}function Hs(e,t){e.uniform4uiv(this.addr,t)}function Us(e,t,n){let r=this.cache,i=t.length,a=ss(n,i);as(r,a)||(e.uniform1iv(this.addr,a),os(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Yo:Jo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ws(e,t,n){let r=this.cache,i=t.length,a=ss(n,i);as(r,a)||(e.uniform1iv(this.addr,a),os(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zo,a[e])}function Gs(e,t,n){let r=this.cache,i=t.length,a=ss(n,i);as(r,a)||(e.uniform1iv(this.addr,a),os(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Qo,a[e])}function Ks(e,t,n){let r=this.cache,i=t.length,a=ss(n,i);as(r,a)||(e.uniform1iv(this.addr,a),os(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xo,a[e])}function qs(e){switch(e){case 5126:return Os;case 35664:return ks;case 35665:return As;case 35666:return js;case 35674:return Ms;case 35675:return Ns;case 35676:return Ps;case 5124:case 35670:return Fs;case 35667:case 35671:return Is;case 35668:case 35672:return Ls;case 35669:case 35673:return Rs;case 5125:return zs;case 36294:return Bs;case 36295:return Vs;case 36296:return Hs;case 35678:case 36198:case 36298:case 36306:case 35682:return Us;case 35679:case 36299:case 36307:return Ws;case 35680:case 36300:case 36308:case 36293:return Gs;case 36289:case 36303:case 36311:case 36292:return Ks}}var Js=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ds(t.type)}},Ys=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qs(t.type)}},Xs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Zs=/(\w+)(\])?(\[|\.)?/g;function Qs(e,t){e.seq.push(t),e.map[t.id]=t}function $s(e,t,n){let r=e.name,i=r.length;for(Zs.lastIndex=0;;){let a=Zs.exec(r),o=Zs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qs(n,l===void 0?new Js(s,e,t):new Ys(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Xs(s),Qs(n,e)),n=e}}}var ec=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$s(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function tc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var nc=37297,rc=0;function ic(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ac=new W;function oc(e){_t._getMatrix(ac,_t.workingColorSpace,e);let t=`mat3( ${ac.elements.map(e=>e.toFixed(4))} )`;switch(_t.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function sc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ic(e.getShaderSource(t),r)}return i}function cc(e,t){let n=oc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var lc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function uc(e,t){let n=lc[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var dc=new U;function fc(){return _t.getLuminanceCoefficients(dc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${dc.x.toFixed(4)}, ${dc.y.toFixed(4)}, ${dc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function pc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(gc).join(`
`)}function mc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function hc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function gc(e){return e!==``}function _c(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yc=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(e){return e.replace(yc,Sc)}var xc=new Map;function Sc(e,t){let n=oo[t];if(n===void 0){let e=xc.get(t);if(e!==void 0)n=oo[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return bc(n)}var Cc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(e){return e.replace(Cc,Tc)}function Tc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ec(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Dc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Oc(e){return Dc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var kc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ac(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:kc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var jc={302:`ENVMAP_MODE_REFRACTION`};function Mc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:jc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Nc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Nc[e.combine]||`ENVMAP_BLENDING_NONE`}function Fc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ic(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Oc(n),l=Ac(n),u=Mc(n),d=Pc(n),f=Fc(n),p=pc(n),m=mc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gc).join(`
`),_.length>0&&(_+=`
`)):(g=[Ec(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(gc).join(`
`),_=[Ec(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:oo.tonemapping_pars_fragment,n.toneMapping===0?``:uc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,oo.colorspace_pars_fragment,cc(`linearToOutputTexel`,n.outputColorSpace),fc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(gc).join(`
`)),o=bc(o),o=_c(o,n),o=vc(o,n),s=bc(s),s=_c(s,n),s=vc(s,n),o=wc(o),s=wc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=tc(i,i.VERTEX_SHADER,y),S=tc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=sc(i,x,`vertex`),n=sc(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ec(i,h),T=hc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,nc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Lc=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=Lc++,this.code=e,this.usedTimes=0}};function Bc(e){return e===1030||e===37490||e===36285}function Vc(e,t,n,r,i,a){let o=new Wt,s=new Rc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=so[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),ee=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:ee,instancingColor:ee&&h.instanceColor!==null,instancingMorph:ee&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Bc(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&_t.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&_t.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=so[t];n=Wi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ic(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Hc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Uc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Uc),r.length>1&&r.sort(t||Wc),i.length>1&&i.sort(t||Wc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Kc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Gc,e.set(t,[i])):n>=r.length?(i=new Gc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Yc=0;function Xc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Zc(e){let t=new qc,n=Jc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Nt,o=new Nt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Xc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Yc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Qc(e){let t=new Zc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function $c(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Qc(e),t.set(n,[a])):r>=i.length?(a=new Qc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var el=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tl=`uniform sampler2D shadow_pass;
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
}`,nl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],rl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],il=new Nt,al=new U,ol=new U;function sl(e,t,n){let i=new hi,a=new H,s=new H,c=new Ot,l=new Xi,u=new Zi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:el,fragmentShader:tl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new dr;y.setAttribute(`position`,new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new At(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ti(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ro(a.x),p.map.depthTexture=new Ei(a.x,m)):(p.map=new At(a.x,a.y),p.map.depthTexture=new Ti(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),al.setFromMatrixPosition(d.matrixWorld),e.position.copy(al),ol.copy(e.position),ol.add(nl[t]),e.up.copy(rl[t]),e.lookAt(ol),e.updateMatrixWorld(),n.makeTranslation(-al.x,-al.y,-al.z),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(il,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new At(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function cl(e,t){function n(){let t=!1,n=new Ot,r=null,i=new Ot(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),ee=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),ee=N>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Ot().fromArray(ne),ae=new Ot().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ce(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function Se(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Fe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Le}}function ll(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:_t.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),P(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),te(t)}function P(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function F(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function te(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(e,t){let n=f.get(e);if(e.isVideoTexture&&L(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ve(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function le(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ve(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let de={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},fe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},pe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function me(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,de[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,de[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,de[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,fe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,fe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,pe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function he(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=se(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&F(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ge(r.start,t.width,4),c=ge(n.start,t.width,4);r.start<=o+1&&s===c&&ge(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ve(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=he(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=_t.getPrimaries(_t.workingColorSpace),n=t.colorSpace===``?null:_t.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Me(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);me(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&_e(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=no(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=no(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ne(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ne(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=he(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=_t.getPrimaries(_t.workingColorSpace),o=t.colorSpace===``?null:_t.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Me(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);me(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ne(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ae(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function xe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Se(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ee)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),me(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else I(t.depthTexture,0);let a=i.__webglTexture,o=Ae(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Se(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Se(t.__webglFramebuffer[0],e,0):Se(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),xe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),xe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){let r=f.get(e);t!==void 0&&be(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ce(e)}function Te(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,N);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&je(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ae(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),xe(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),me(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)be(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),me(o,r),be(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),me(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else be(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Ce(e)}function Ee(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let De=[],Oe=[];function ke(e){if(e.samples>0){if(je(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(De.push(a),Oe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Oe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_t.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function ul(e,t){function n(n,r=``){let i,a=_t.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var dl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fl=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Di(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qi({vertexShader:dl,fragmentShader:fl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new pl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=null,j=new Aa;j.viewport=new Ot;let M=new Aa;M.viewport=new Ot;let ee=[j,M],N=new Va,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new At(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ti(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new At(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new U,ae=new U;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=M.near=j.near=t,N.far=M.far=j.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;se(N,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(N,j,M):N.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),I(e,N,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new Aa,o.layers.enable(n),o.viewport=new Ot,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Di,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ue=new io;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},hl=new Nt,gl=new W;gl.set(-1,0,0,0,1,0,0,0,1);function _l(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ui(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(hl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(gl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function vl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var yl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bl=null;function xl(){return bl===null&&(bl=new ni(yl,16,16,k,g),bl.name=`DFG_LUT`,bl.minFilter=o,bl.magFilter=o,bl.wrapS=t,bl.wrapT=t,bl.generateMipmaps=!1,bl.needsUpdate=!0),bl}var Sl=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,M=null,ee=[],N=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Ie;let oe=0,se=0,I=null,ce=-1,le=null,ue=new Ot,de=new Ot,fe=null,pe=new G(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Ot(0,0,he,ge),xe=new Ot(0,0,he,ge),Se=!1,Ce=new hi,we=!1,Te=!1,Ee=new Nt,De=new U,Oe=new Ot,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,z,Le,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function at(){Ne=new Bo(L),Ne.init(),nt=new ul(L,Ne),Pe=new ho(L,Ne,e,nt),R=new cl(L,Ne),Pe.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),re=L.createFramebuffer(),ie=L.createFramebuffer(),ae=L.createFramebuffer(),Fe=new Uo(L),z=new Hc,Le=new ll(L,Ne,R,z,Pe,nt,Fe),Re=new zo(F),ze=new ao(L),rt=new po(L,ze),Be=new Vo(L,ze,Fe,rt),Ve=new Go(L,Be,ze,rt,Fe),$e=new Wo(L,Pe,Le),Je=new go(z),He=new Vc(F,Re,Ne,Pe,rt,Je),We=new _l(F,z),Ge=new Kc,Ke=new $c(Ne),Ze=new fo(F,Re,R,Ve,x,s),Xe=new sl(F,Ve,Pe),it=new vl(L,Fe,Pe,R),et=new mo(L,Ne,Fe),tt=new Ho(L,Ne,Fe),Fe.programs=He.programs,F.capabilities=Pe,F.extensions=Ne,F.properties=z,F.renderLists=Ge,F.shadowMap=Xe,F.state=R,F.info=Fe}S!==1009&&(P=new qo(S,t.width,t.height,o,r,i));let ot=new ml(F,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){ot.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),Ge.dispose(),Ke.dispose(),z.dispose(),Re.dispose(),Ve.dispose(),rt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,mt),ot.removeEventListener(`sessionend`,ht),gt.stop()};function st(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),te=!0}function ct(){Ye(`WebGLRenderer: Context Restored.`),te=!1;let e=Fe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Fe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function H(e){let t=e.target;t.removeEventListener(`dispose`,H),ut(t)}function ut(e){dt(e),z.remove(e)}function dt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),we===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),M=Ke.get(n),M.init(t),N.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),ne!==null&&ne.updateLights(M.state.lightsArray),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),we===!0&&Je.setGlobalState(this.clippingPlanes,t),ne!==null&&Xe.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),M=N.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let W=null;function pt(e){W&&W(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new io;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){W=e,ot.setAnimationLoop(e),e===null?gt.stop():gt.start()},ot.addEventListener(`sessionstart`,mt),ot.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=P!==null&&(I===null||n)&&P.begin(F,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,I),M=Ke.get(e,N.length),M.init(t),M.state.textureUnits=Le.getTextureUnits(),N.push(M),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,Ue,t.reversedDepth),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),k=Ge.get(e,ee.length),k.init(),ee.push(k),ot.enabled===!0&&ot.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,F.sortObjects)}vt(e,t,0,F.sortObjects),k.finish(),ne!==null&&ne.updateLights(M.state.lightsArray),F.sortObjects===!0&&k.sort(ve,ye),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Ze.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Je.beginShadows();let i=M.state.shadowsArray;if(Xe.render(i,e,t),we===!0&&Je.endShadows(),(r&&P.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Ae&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(k,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Ae&&Ze.render(e),yt(k,e,t)}I!==null&&se===0&&(Le.updateMultisampleRenderTarget(I),Le.updateRenderTargetMipmap(I)),r&&P.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),rt.resetDefaultState(),ce=-1,le=null,N.pop(),N.length>0?(M=N[N.length-1],Le.setTextureUnits(M.state.textureUnits),we===!0&&Je.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,ee.pop(),k=ee.length>0?ee[ee.length-1]:null,ne!==null&&ne.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),we===!0&&Je.setGlobalState(F.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new At(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(pe),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),Ae&&Ze.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),we===!0&&Je.setGlobalState(F.clippingPlanes,r),xt(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(pe,me),p!==void 0&&(r.viewport=p),F.toneMapping=f}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,H),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=He.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,F),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Tt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ec.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_t.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=M.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ct(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Et(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,Le),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,Le),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,Le));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=xl()),C){if(T.setValue(L,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,_e,ge,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ec.upload(L,wt(v),E,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ec.upload(L,wt(v),E,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=re),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function Mt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qe(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ie),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,R.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}},Cl={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},wl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Tl=new Fa(-1,1,1,-1,0,1),El=new class extends dr{constructor(){super(),this.setAttribute(`position`,new $n([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new $n([0,2,0,0,2,0],2))}},Dl=class{constructor(e){this._mesh=new K(El,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tl)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Ol=class extends wl{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new qi({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},kl=class extends wl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Al=class extends wl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},jl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new At(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ol(Cl),this.copyPass.material.blending=0,this.timer=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}kl!==void 0&&(r instanceof kl?n=!0:r instanceof Al&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ml=class extends wl{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Nl={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Pl=class e extends wl{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new G(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new At(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new At(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new At(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Nl;this.highPassUniforms=Wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qi({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone(Cl.uniforms),this.blendMaterial=new qi({uniforms:this.copyUniforms,vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new G,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new Dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new qi({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pl.BlurDirectionX=new H(1,0),Pl.BlurDirectionY=new H(0,1);var Fl={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Il=class extends wl{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wi.clone(Fl.uniforms),this.material=new Ji({name:Fl.name,uniforms:this.uniforms,vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader}),this._fsQuad=new Dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ll=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.mouseButtons=new Set,this.mousePressed=new Set,this.locked=!1,this.sensitivity=1,this.invertY=!1,this.gamepad=null,this.padPrev=[],this.padPressed=new Set,this.lastDevice=`kb`,this.virtual=null,this.enabled=!0,addEventListener(`keydown`,e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.lastDevice=`kb`,[`Space`,`ArrowUp`,`ArrowDown`,`Tab`].includes(e.code)&&e.preventDefault())}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>{this.keys.clear(),this.mouseButtons.clear()}),e.addEventListener(`mousedown`,e=>{!this.locked&&this.wantLock&&this.requestLock(),this.mouseButtons.add(e.button),this.mousePressed.add(e.button),this.lastDevice=`kb`}),addEventListener(`mouseup`,e=>this.mouseButtons.delete(e.button)),e.addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`mousemove`,e=>{this.locked&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===e}),addEventListener(`gamepadconnected`,e=>{this.gamepad=e.gamepad.index})}requestLock(){try{(this.canvas.requestPointerLock?.())?.catch?.(()=>{})}catch{}}poll(){let e=navigator.getGamepads?navigator.getGamepads():[],t=this.gamepad==null?null:e[this.gamepad];this.pad=t||null,this.padPressed.clear(),t&&(t.buttons.forEach((e,t)=>{e.pressed&&!this.padPrev[t]&&(this.padPressed.add(t),this.lastDevice=`pad`),this.padPrev[t]=e.pressed}),Math.hypot(t.axes[0],t.axes[1])>.3&&(this.lastDevice=`pad`))}endFrame(){this.pressed.clear(),this.mousePressed.clear(),this.mouseDX=0,this.mouseDY=0}move(){if(this.virtual)return this.virtual.move||{x:0,y:0};let e=0,t=0;(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(t+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--t,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(e+=1),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--e;let n=this.pad;if(n){let r=n.axes[0],i=-n.axes[1];Math.hypot(r,i)>.18&&(e+=r,t+=i)}let r=Math.hypot(e,t);return r>1&&(e/=r,t/=r),{x:e,y:t}}look(){if(this.virtual)return this.virtual.look||{x:0,y:0};let e=this.mouseDX*.0025*this.sensitivity,t=this.mouseDY*.0025*this.sensitivity,n=this.pad;if(n&&n.axes.length>=4){let r=n.axes[2],i=n.axes[3],a=e=>Math.abs(e)<.15?0:Math.sign(e)*(Math.abs(e)-.15)/.85;e+=a(r)*.045*this.sensitivity,t+=a(i)*.035*this.sensitivity}return this.keys.has(`KeyJ`)&&(e-=.03),this.keys.has(`KeyL`)&&(e+=.03),this.keys.has(`KeyI`)&&(t-=.02),this.keys.has(`KeyK`)&&(t+=.02),this.invertY&&(t=-t),{x:e,y:t}}_v(e){return this.virtual&&this.virtual[e]}jumpPressed(){return this._v(`jumpP`)||this.pressed.has(`Space`)||this.padPressed.has(0)}jumpHeld(){return this._v(`jump`)||this.keys.has(`Space`)||(this.pad?.buttons[0]?.pressed??!1)}punchPressed(){return this._v(`punchP`)||this.mousePressed.has(0)||this.pressed.has(`KeyF`)||this.padPressed.has(2)}slamPressed(){return this._v(`slamP`)||this.mousePressed.has(2)||this.pressed.has(`KeyX`)||this.padPressed.has(1)||this.padPressed.has(7)}interactPressed(){return this._v(`interactP`)||this.pressed.has(`KeyE`)||this.padPressed.has(4)}dashPressed(){return this._v(`dashP`)||this.pressed.has(`ShiftLeft`)||this.pressed.has(`ShiftRight`)||this.padPressed.has(5)}dashHeld(){return this._v(`dash`)||this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||(this.pad?.buttons[5]?.pressed??!1)}crouchHeld(){return this._v(`crouch`)||this.keys.has(`KeyC`)||this.keys.has(`ControlLeft`)||(this.pad?.buttons[6]?.pressed??!1)}echoPressed(){return this._v(`echoP`)||this.pressed.has(`KeyQ`)||this.padPressed.has(3)}pausePressed(){return this.pressed.has(`Escape`)||this.pressed.has(`KeyP`)||this.padPressed.has(9)}confirmPressed(){return this.pressed.has(`Enter`)||this.pressed.has(`Space`)||this.padPressed.has(0)||this.mousePressed.has(0)}recenterPressed(){return this.pressed.has(`KeyR`)||this.padPressed.has(10)||this.padPressed.has(11)}mapPressed(){return this.pressed.has(`Tab`)||this.padPressed.has(8)}};function Rl(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var zl=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Bl=class{constructor(e=1){let t=Rl(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let e=0;e<512;e++)this.perm[e]=n[e&255],this.permMod12[e]=this.perm[e]%12}noise(e,t,n){let r=this.perm,i=this.permMod12,a=1/6,o=(e+t+n)*.3333333333333333,s=Math.floor(e+o),c=Math.floor(t+o),l=Math.floor(n+o),u=(s+c+l)*a,d=e-(s-u),f=t-(c-u),p=n-(l-u),m,h,g,_,v,y;d>=f?f>=p?(m=1,h=0,g=0,_=1,v=1,y=0):d>=p?(m=1,h=0,g=0,_=1,v=0,y=1):(m=0,h=0,g=1,_=1,v=0,y=1):f<p?(m=0,h=0,g=1,_=0,v=1,y=1):d<p?(m=0,h=1,g=0,_=0,v=1,y=1):(m=0,h=1,g=0,_=1,v=1,y=0);let b=d-m+a,x=f-h+a,S=p-g+a,C=d-_+2*a,w=f-v+2*a,T=p-y+2*a,E=d-1+.5,D=f-1+.5,O=p-1+.5,k=s&255,A=c&255,j=l&255,M=0,ee=.6-d*d-f*f-p*p,N;ee>0&&(N=i[k+r[A+r[j]]]*3,ee*=ee,M+=ee*ee*(zl[N]*d+zl[N+1]*f+zl[N+2]*p));let P=.6-b*b-x*x-S*S;P>0&&(N=i[k+m+r[A+h+r[j+g]]]*3,P*=P,M+=P*P*(zl[N]*b+zl[N+1]*x+zl[N+2]*S));let F=.6-C*C-w*w-T*T;F>0&&(N=i[k+_+r[A+v+r[j+y]]]*3,F*=F,M+=F*F*(zl[N]*C+zl[N+1]*w+zl[N+2]*T));let te=.6-E*E-D*D-O*O;return te>0&&(N=i[k+1+r[A+1+r[j+1]]]*3,te*=te,M+=te*te*(zl[N]*E+zl[N+1]*D+zl[N+2]*O)),32*M}fbm(e,t,n,r=4,i=2,a=.5){let o=1,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*this.noise(e*s,t*s,n*s),l+=o,o*=a,s*=i;return c/l}ridged(e,t,n,r=4){let i=1,a=1,o=0,s=0;for(let c=0;c<r;c++)o+=i*(1-Math.abs(this.noise(e*a,t*a,n*a))),s+=i,i*=.5,a*=2;return o/s}},Vl=(e,t,n)=>e<t?t:e>n?n:e,Hl=(e,t,n)=>e+(t-e)*n;function Ul(e,t,n){let r=Vl(.5+.5*(t-e)/n,0,1);return Hl(t,e,r)-n*r*(1-r)}function Wl(e,t,n){return-Ul(-e,-t,n)}var Gl=(e,t,n,r)=>Hl(e,t,1-Math.exp(-n*r)),J=(e=0,t=0,n=0)=>new U(e,t,n);function Kl(e,t,n){return Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)-n}function ql(e,t,n){let r=(e.x-t.x)/n.x,i=(e.y-t.y)/n.y,a=(e.z-t.z)/n.z,o=Math.hypot(r,i,a),s=Math.hypot(r/n.x,i/n.y,a/n.z);return s===0?-Math.min(n.x,n.y,n.z):o*(o-1)/s}function Jl(e,t,n,r,i=r){let a=n.x-t.x,o=n.y-t.y,s=n.z-t.z,c=e.x-t.x,l=e.y-t.y,u=e.z-t.z,d=Math.max(0,Math.min(1,(c*a+l*o+u*s)/(a*a+o*o+s*s)));return Math.hypot(c-a*d,l-o*d,u-s*d)-(r+(i-r)*d)}function Yl(e,t,n,r){let i=Math.abs(e.x-t.x)-n.x+r,a=Math.abs(e.y-t.y)-n.y+r,o=Math.abs(e.z-t.z)-n.z+r;return Math.hypot(Math.max(i,0),Math.max(a,0),Math.max(o,0))+Math.min(Math.max(i,Math.max(a,o)),0)-r}function Xl(e,t,n,r){let i=e.x-t.x,a=e.y-t.y,o=e.z-t.z,s=Math.hypot(i,o)-n;return Math.hypot(s,a)-r}function Zl(e,t,n){if(n<=0)return Math.min(e,t);let r=Math.max(0,Math.min(1,.5+.5*(t-e)/n));return t+(e-t)*r-n*r*(1-r)}function Ql(e,t,n){return-Zl(-e,-t,n)}var $l=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],eu=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];function tu(e,t,n,r,i=.03){let a=Math.ceil((r.x-n.x)/i)+1,o=Math.ceil((r.y-n.y)/i)+1,s=Math.ceil((r.z-n.z)/i)+1,c=new Float32Array(a*o*s),l=new U,u=0;for(let t=0;t<s;t++)for(let r=0;r<o;r++)for(let o=0;o<a;o++,u++)l.set(n.x+o*i,n.y+r*i,n.z+t*i),c[u]=e(l);let d=(e,t,n)=>e+t*a+n*a*o,f=new Int32Array(a*o*s).fill(-1),p=[],m=[],h=[],g=[],_=new Float32Array(8),v=i*.5,y=new U,b=new U;for(let r=0;r<s-1;r++)for(let s=0;s<o-1;s++)for(let o=0;o<a-1;o++){let a=0;for(let e=0;e<8;e++){let t=$l[e];_[e]=c[d(o+t[0],s+t[1],r+t[2])],_[e]<0&&(a|=1<<e)}if(a===0||a===255)continue;let u=0,g=0,x=0,S=0;for(let[e,t]of eu){if((a>>e&1)==(a>>t&1))continue;let n=_[e]/(_[e]-_[t]),r=$l[e],i=$l[t];u+=r[0]+(i[0]-r[0])*n,g+=r[1]+(i[1]-r[1])*n,x+=r[2]+(i[2]-r[2])*n,S++}y.set(n.x+(o+u/S)*i,n.y+(s+g/S)*i,n.z+(r+x/S)*i);let C=e(y);b.set(e(l.set(y.x+v,y.y,y.z))-e(l.set(y.x-v,y.y,y.z)),e(l.set(y.x,y.y+v,y.z))-e(l.set(y.x,y.y-v,y.z)),e(l.set(y.x,y.y,y.z+v))-e(l.set(y.x,y.y,y.z-v))).normalize(),y.addScaledVector(b,-C*.8),f[d(o,s,r)]=p.length/3,p.push(y.x,y.y,y.z),m.push(b.x,b.y,b.z);let w=t?t(y,b):new G(1,1,1);h.push(w.r,w.g,w.b)}let x=(e,t,n,r,i)=>{e<0||t<0||n<0||r<0||(i?g.push(e,r,n,e,n,t):g.push(e,t,n,e,n,r))};for(let e=1;e<s-1;e++)for(let t=1;t<o-1;t++)for(let n=1;n<a-1;n++){let r=c[d(n,t,e)]<0;c[d(n+1,t,e)]<0!==r&&x(f[d(n,t-1,e-1)],f[d(n,t,e-1)],f[d(n,t,e)],f[d(n,t-1,e)],!r),c[d(n,t+1,e)]<0!==r&&x(f[d(n-1,t,e-1)],f[d(n-1,t,e)],f[d(n,t,e)],f[d(n,t,e-1)],!r),c[d(n,t,e+1)]<0!==r&&x(f[d(n-1,t-1,e)],f[d(n,t-1,e)],f[d(n,t,e)],f[d(n-1,t,e)],!r)}let S=new dr;return S.setAttribute(`position`,new $n(p,3)),S.setAttribute(`normal`,new $n(m,3)),S.setAttribute(`color`,new $n(h,3)),S.setIndex(g),S.computeBoundingSphere(),S}function Y(e,t,n={}){let{k:r=.06,cell:i=.025,pad:a=.12}=n,o=t=>{let n=1e9;for(let i of e){let e=i.d(t);n=i.sub?Ql(n,-e,i.k??r*.5):i.inter?Ql(n,e,i.k??.02):Zl(n,e,i.k??r)}return n},s=J(1e9,1e9,1e9),c=J(-1e9,-1e9,-1e9);for(let t of e)t.sub||t.inter||(s.min(t.bmin),c.max(t.bmax));return s.subScalar(a),c.addScalar(a),tu(o,t,s,c,i)}var X={sphere:(e,t,n={})=>({d:n=>Kl(n,e,t),bmin:e.clone().subScalar(t),bmax:e.clone().addScalar(t),...n}),ellipsoid:(e,t,n={})=>({d:n=>ql(n,e,t),bmin:e.clone().sub(t),bmax:e.clone().add(t),...n}),capsule:(e,t,n,r=n,i={})=>{let a=Math.max(n,r);return{d:i=>Jl(i,e,t,n,r),bmin:e.clone().min(t).subScalar(a),bmax:e.clone().max(t).addScalar(a),...i}},box:(e,t,n,r={})=>({d:r=>Yl(r,e,t,n),bmin:e.clone().sub(t),bmax:e.clone().add(t),...r}),torus:(e,t,n,r={})=>({d:r=>Xl(r,e,t,n),bmin:e.clone().sub(J(t+n,n,t+n)),bmax:e.clone().add(J(t+n,n,t+n)),...r}),custom:(e,t,n,r={})=>({d:e,bmin:t,bmax:n,...r})},nu=new Bl(7),ru=e=>new G(e),iu=ru(12083755),au=ru(8010265),ou=ru(15913890),su=ru(5913132),cu=ru(2758418),lu=ru(2078120),uu=ru(1015674),du=ru(15250247),fu=ru(7031347),pu=ru(4008738),mu=ru(4856344),hu=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function gu(e,t=iu){let n=nu.noise(e.x*18,e.y*18,e.z*18)*.5+.5,r=nu.noise(e.x*4,e.y*30,e.z*4)*.5+.5;return t.clone().lerp(au,.18*n+.12*r)}function _u(e={}){let t=new Yi({vertexColors:!0,roughness:e.roughness??.78,metalness:e.metalness??0,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1}),n={value:new G(e.rim??16767392)},r={value:e.rimStrength??.35},i={value:0};return t.userData.flash=i,t.userData.rimStr=r,t.onBeforeCompile=e=>{e.uniforms.uRim=n,e.uniforms.uRimStr=r,e.uniforms.uFlash=i,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uRim; uniform float uRimStr; uniform float uFlash;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 vdir = normalize(vViewPosition);
          float fr = pow(1.0 - clamp(dot(normal, vdir), 0.0, 1.0), 2.6);
          totalEmissiveRadiance += uRim * fr * uRimStr;
          // soft wrap/ambient lift so characters read in dark caves
          totalEmissiveRadiance += diffuseColor.rgb * 0.035;
          totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(1.0, 0.95, 0.9) * 1.6, uFlash);
        }`)},t.customProgramCacheKey=()=>`toonish-`+(e.key||`a`),t}function vu(){let e=_u({key:`hero`}),t=_u({key:`heroMetal`,roughness:.35,metalness:.65,rimStrength:.4}),n=new Yi({color:16777215,roughness:.15,emissive:2236962}),r=new Yi({color:1707786,roughness:.1}),i=new Hr({color:16777215}),a=new Yi({color:10483455,emissive:4708607,emissiveIntensity:1.6,roughness:.1,metalness:.3}),o=new cn,s={},c=(e,t,n,r,i)=>{let a=new cn;return a.name=e,a.position.set(n,r,i),t.add(a),s[e]=a,a},l=(e,t,n)=>{let r=new K(e,t);return r.castShadow=!0,r.receiveShadow=!1,n.add(r),r},u=c(`hips`,o,0,.5,0),d=c(`torso`,u,0,.05,0),f=c(`head`,c(`neck`,d,0,.74,.02),0,.02,0),p=c(`shoulderL`,d,.44,.58,0),m=c(`shoulderR`,d,-.44,.58,0),h=c(`elbowL`,p,0,-.3,0),g=c(`elbowR`,m,0,-.3,0),_=c(`hipL`,u,.19,-.02,0),v=c(`hipR`,u,-.19,-.02,0),y=c(`kneeL`,_,0,-.22,0),b=c(`kneeR`,v,0,-.22,0);l(Y([X.ellipsoid(J(0,.02,0),J(.33,.2,.26)),X.capsule(J(-.2,-.05,0),J(.2,-.05,0),.15),X.torus(J(0,.1,0),.3,.045,{k:.02})],(e,t)=>e.y>.06&&e.y<.15?pu.clone().lerp(du,+(Math.abs(e.x)<.07&&e.z>.2)):fu.clone().multiplyScalar(.85+.15*(nu.noise(e.x*9,e.y*9,e.z*9)*.5+.5))),e,u),l(Y([X.ellipsoid(J(0,.42,-.02),J(.44,.38,.34)),X.ellipsoid(J(0,.2,.06),J(.34,.26,.28)),X.sphere(J(.36,.56,-.03),.21),X.sphere(J(-.36,.56,-.03),.21),X.ellipsoid(J(0,.55,-.16),J(.36,.25,.22)),X.capsule(J(0,.6,0),J(0,.78,.02),.16),X.ellipsoid(J(0,.6,.22),J(.13,.1,.08),{k:.05})],(e,t)=>{let n=(1-hu(.27,.31,Math.hypot(e.x*1.15,(e.y-.33)*.85)+nu.noise(e.x*14,e.y*14,e.z*14)*.025))*hu(-.05,.12,e.z);return gu(e).lerp(ou.clone().multiplyScalar(.92+.08*nu.noise(e.x*20,e.y*20,e.z*20)),n)},{k:.1}),e,d),l(Y([X.torus(J(0,.73,.01),.21,.075,{k:.02}),X.ellipsoid(J(.1,.7,.21),J(.09,.08,.06))],e=>lu.clone().lerp(uu,(Math.sin(e.x*40+e.y*30)*.5+.5)*.35),{k:.04,cell:.02}),e,d);let x=c(`scarfTail`,d,.1,.7,.22);l(Y([X.box(J(0,-.12,0),J(.07,.13,.025),.02)],()=>lu,{cell:.02}),e,x);let S=c(`scarfTail2`,x,0,-.25,0);l(Y([X.box(J(0,-.1,0),J(.065,.11,.022),.02),X.box(J(0,-.2,0),J(.07,.03,.022),.01)],e=>e.y<-.17?du:lu,{cell:.02}),e,S),l(Y([X.sphere(J(0,.27,0),.3),X.ellipsoid(J(0,.2,.08),J(.31,.24,.26)),X.ellipsoid(J(0,.15,.23),J(.2,.13,.15)),X.ellipsoid(J(0,.37,.17),J(.27,.075,.12)),X.sphere(J(.27,.43,-.04),.085),X.sphere(J(-.27,.43,-.04),.085),X.capsule(J(0,.52,.02),J(.05,.66,.1),.06,.02),X.capsule(J(-.06,.52,0),J(-.12,.63,.06),.05,.02),X.capsule(J(.08,.52,-.02),J(.16,.6,.02),.045,.015),X.sphere(J(.115,.29,.25),.085,{sub:!0,k:.03}),X.sphere(J(-.115,.29,.25),.085,{sub:!0,k:.03}),X.ellipsoid(J(0,.085,.33),J(.11,.025,.06),{sub:!0,k:.02})],(e,t)=>e.z>.12&&e.y<.24&&Math.hypot(e.x,(e.y-.15)*1.4)<.21?e.y<.1&&e.z>.28&&Math.abs(e.x)<.1?mu:ou.clone():Math.abs(e.x)>.22&&e.y>.36&&t.z>.3?ou.clone().multiplyScalar(.85):e.y>.5?au.clone():gu(e),{k:.07,cell:.018}),e,f),l(Y([X.ellipsoid(J(0,.21,.37),J(.07,.05,.05))],()=>cu,{cell:.012}),e,f);let C=new Li(.07,20,14),w=new Li(.038,14,10),T=new Li(.012,8,6),E=[];for(let e of[1,-1]){let t=new cn;t.position.set(.112*e,.29,.232),f.add(t);let a=new K(C,n);a.scale.set(1,1.15,.8),t.add(a);let o=new K(w,r);o.position.set(0,0,.042),o.scale.set(1,1.25,.6),t.add(o);let s=new K(T,i);s.position.set(.015*e,.025,.066),t.add(s),E.push(t)}let D=new cn;D.position.set(0,.45,.06),D.rotation.x=-.35,f.add(D),l(Y([X.torus(J(0,0,-.06),.31,.03,{k:.01})],()=>pu,{cell:.016}),e,D).scale.set(1,1,.95);for(let e of[1,-1]){let n=l(Y([X.torus(J(0,0,0),.07,.025)],()=>du,{cell:.012}),t,D);n.rotation.x=Math.PI/2,n.position.set(.1*e,.02,.22);let r=new K(new ki(.066,20),a);r.position.set(.1*e,.02,.235),D.add(r)}let O=Y([X.capsule(J(0,0,0),J(0,-.3,0),.13,.115),X.sphere(J(0,-.02,0),.15)],e=>gu(e),{cell:.02}),k=e=>Y([X.capsule(J(0,0,0),J(0,-.24,.01),.125,.17),X.torus(J(0,-.24,.01),.17,.04,{k:.02}),X.box(J(0,-.45,.03),J(.19,.17,.18),.1),X.sphere(J(.1,-.56,.12),.07,{k:.03}),X.sphere(J(0,-.575,.13),.072,{k:.03}),X.sphere(J(-.1,-.56,.12),.07,{k:.03}),X.capsule(J(.17*e,-.38,.12),J(.12*e,-.48,.2),.055,.05,{k:.03})],e=>e.y>-.31&&e.y<-.18?du.clone().multiplyScalar(.9+.2*(Math.sin(Math.atan2(e.z,e.x)*8)*.5+.5)):e.y<-.31?e.y<-.5&&e.z>.05?ru(13616820).multiplyScalar(.85+.2*nu.noise(e.x*25,e.y*25,e.z*25)):su.clone().lerp(fu,.5):gu(e),{cell:.02,k:.05});l(O,e,p),l(O,e,m);let A=l(k(1),e,h),j=l(k(-1),e,g),M=Y([X.capsule(J(0,0,0),J(0,-.22,0),.15,.13)],e=>fu.clone().multiplyScalar(.9),{cell:.02}),ee=Y([X.capsule(J(0,0,0),J(0,-.17,0),.12,.11),X.ellipsoid(J(0,-.22,.08),J(.14,.085,.2)),X.sphere(J(.06,-.24,.24),.05,{k:.03}),X.sphere(J(-.06,-.24,.24),.05,{k:.03})],e=>e.y<-.15?su.clone().multiplyScalar(.9):gu(e),{cell:.02});return l(M,e,_),l(M,e,v),l(ee,e,y),l(ee,e,b),o.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),{root:o,J:s,eyes:E,mats:[e,t],fistL:A,fistR:j,lensMat:a}}var Z={DIRT:0,ROCK:1,HARD:2,CRYSTAL:3,GOLD:4,BRICK:5,ANCIENT:6,BEDROCK:7},yu=[{name:`土`,hard:1,color:[.42,.27,.16],sfx:`dirt`},{name:`岩`,hard:.74,color:[.45,.42,.4],sfx:`rock`},{name:`硬岩`,hard:0,color:[.22,.24,.32],sfx:`metal`,needs:`gauntlet`,hardUpgraded:.6},{name:`輝晶`,hard:.85,color:[.4,.75,1],sfx:`crystal`},{name:`金鉱`,hard:.8,color:[.95,.72,.25],sfx:`rock`},{name:`遺跡石`,hard:.85,color:[.55,.5,.42],sfx:`rock`},{name:`古代石`,hard:0,color:[.2,.18,.2],sfx:`metal`},{name:`岩盤`,hard:0,color:[.12,.1,.1],sfx:`metal`}],bu=class{constructor(e,t,n,r=.5){this.nx=e,this.ny=t,this.nz=n,this.s=r,this.inv=1/r,this.sxy=e*t,this.f=new Float32Array(e*t*n).fill(4),this.m=new Uint8Array(e*t*n),this.size=[(e-1)*r,(t-1)*r,(n-1)*r]}idx(e,t,n){return e+t*this.nx+n*this.sxy}fill(e){let{nx:t,ny:n,nz:r,s:i,f:a,m:o}=this,s=[0,0],c=0;for(let l=0;l<r;l++)for(let u=0;u<n;u++)for(let d=0;d<t;d++,c++){if(d===0||u===0||l===0||d===t-1||u===n-1||l===r-1){a[c]=-4,o[c]=Z.BEDROCK;continue}e(d*i,u*i,l*i,s);let f=s[0];a[c]=f>4?4:f<-4?-4:f,o[c]=s[1]}}sample(e,t,n){let r=e*this.inv,i=t*this.inv,a=n*this.inv;if(r<0||i<0||a<0||r>=this.nx-1||i>=this.ny-1||a>=this.nz-1)return-4;let o=r|0,s=i|0,c=a|0,l=r-o,u=i-s,d=a-c,f=this.f,p=this.nx,m=this.sxy,h=o+s*p+c*m,g=f[h],_=f[h+1],v=f[h+p],y=f[h+p+1],b=f[h+m],x=f[h+m+1],S=f[h+m+p],C=f[h+m+p+1],w=g+(_-g)*l,T=v+(y-v)*l,E=b+(x-b)*l,D=S+(C-S)*l,O=w+(T-w)*u;return O+(E+(D-E)*u-O)*d}gradient(e,t,n,r,i=.25){r.x=this.sample(e+i,t,n)-this.sample(e-i,t,n),r.y=this.sample(e,t+i,n)-this.sample(e,t-i,n),r.z=this.sample(e,t,n+i)-this.sample(e,t,n-i);let a=Math.hypot(r.x,r.y,r.z)||1;return r.x/=a,r.y/=a,r.z/=a,r}materialAt(e,t,n){let r=Math.round(e*this.inv),i=Math.round(t*this.inv),a=Math.round(n*this.inv),o=1e9,s=Z.BEDROCK;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let c=r+n,l=i+t,u=a+e;if(c<0||l<0||u<0||c>=this.nx||l>=this.ny||u>=this.nz)continue;let d=this.idx(c,l,u),f=this.f[d]+(n*n+t*t+e*e)*.12;this.f[d]<.25&&f<o&&(o=f,s=this.m[d])}return s}raycast(e,t,n,r,i,a,o,s=.04){let c=0;for(let l=0;l<256&&c<o;l++){let o=this.sample(e+r*c,t+i*c,n+a*c);if(o<.02)return c;c+=Math.max(o*.85,s)}return-1}carve(e,t,n,r,i={}){let{s:a,inv:o,nx:s,ny:c,nz:l,f:u,m:d}=this,f=i.power??1,p=!!i.gauntlet,m=i.rough??.35,h=i.noise,g=new Float32Array(8),_=!1,v=0,y=r*f+1,b=Math.max(1,Math.floor((e-y)*o)),x=Math.min(s-2,Math.ceil((e+y)*o)),S=Math.max(1,Math.floor((t-y)*o)),C=Math.min(c-2,Math.ceil((t+y)*o)),w=Math.max(1,Math.floor((n-y)*o)),T=Math.min(l-2,Math.ceil((n+y)*o)),E=new Float32Array(8);for(let e=0;e<8;e++){let t=yu[e],n=t.hard;t.needs===`gauntlet`&&p&&(n=t.hardUpgraded),i.onlyMats&&!i.onlyMats.includes(e)&&(n=0),i.extraMats&&i.extraMats.includes(e)&&(n=Math.max(n,.7)),E[e]=n}for(let i=w;i<=T;i++)for(let o=S;o<=C;o++)for(let c=b;c<=x;c++){let l=c+o*s+i*this.sxy,p=c*a,b=o*a,x=i*a,S=Math.hypot(p-e,b-t,x-n);if(S>y)continue;let C=E[d[l]],w=u[l];if(C<=0){w<0&&S<r*.8&&v++;continue}let T=r*f*C-S;h&&(T+=h.noise(p*.9,b*.9,x*.9)*m),T>w&&(w<0&&T>=0&&(g[d[l]]+=1),u[l]=Math.min(T,4),_=!0)}return{changed:_,removed:g,blocked:v,bounds:[b,S,w,x,C,T]}}fillSphere(e,t,n,r,i){let{s:a,inv:o,nx:s,ny:c,nz:l,f:u,m:d}=this,f=Math.max(1,Math.floor((e-r-1)*o)),p=Math.min(s-2,Math.ceil((e+r+1)*o)),m=Math.max(1,Math.floor((t-r-1)*o)),h=Math.min(c-2,Math.ceil((t+r+1)*o)),g=Math.max(1,Math.floor((n-r-1)*o)),_=Math.min(l-2,Math.ceil((n+r+1)*o));for(let o=g;o<=_;o++)for(let c=m;c<=h;c++)for(let l=f;l<=p;l++){let f=l+c*s+o*this.sxy,p=Math.hypot(l*a-e,c*a-t,o*a-n)-r;p<u[f]&&((u[f]>=0||p<0)&&(d[f]=i),u[f]=Math.max(p,-4))}return[f,m,g,p,h,_]}};new U(0,1,0);var xu=new U,Su=new U,Cu={x:0,y:0,z:0},wu=[.42,.95,1.42],Tu=.42,Eu={out:e=>1-(1-e)**3,in:e=>e*e*e,inOut:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,back:e=>1+3.2*(e-1)**3+2.2*(e-1)**2};function Du(e,t,n=Eu.inOut){if(e<=t[0][0])return t[0][1];for(let r=0;r<t.length-1;r++){let i=t[r],a=t[r+1];if(e<=a[0])return Hl(i[1],a[1],n((e-i[0])/(a[0]-i[0])))}return t[t.length-1][1]}var Ou=[{arm:`R`,dur:.34,hit:.11,radius:1.55,dmg:1,lunge:3.5,next:.2},{arm:`L`,dur:.34,hit:.11,radius:1.6,dmg:1,lunge:3.5,next:.2},{arm:`B`,dur:.56,hit:.2,radius:2.15,dmg:2,lunge:5.5,next:.42,finisher:!0}],ku=class{constructor(e){this.game=e;let t=vu();this.model=t,this.root=new cn,this.root.add(t.root),this.pos=new U,this.vel=new U,this.yaw=0,this.visYaw=0,this.grounded=!1,this.groundN=new U(0,1,0),this.coyote=0,this.jumpBuf=0,this.jumpHold=0,this.state=`move`,this.stateT=0,this.combo=0,this.comboQueued=!1,this.comboWindow=0,this.dashT=0,this.dashCD=0,this.airDash=!0,this.hp=5,this.maxHp=5,this.invuln=0,this.hitDone=!1,this.aimPitch=0,this.lastSafe=new U,this.safeT=0,this.climbN=new U,this.runPhase=0,this.speed01=0,this.squash=0,this.squashV=0,this.blink=0,this.blinkT=2,this.pose={},this.landImpact=0,this.stuckT=0,this.stepAcc=0,this.airTime=0,this.poundCharge=0,this.lean=0,this.scarfV=0,this.scarfA=0,this.footDust=0,this.lastHitMat=-1,this.controlLock=0,this.dead=!1}spawn(e,t=0){this.pos.copy(e),this.vel.set(0,0,0),this.yaw=this.visYaw=t,this.state=`move`,this.lastSafe.copy(e),this.dead=!1,this.root.position.copy(e)}get world(){return this.game.world}collide(e,t){let n=this.world.vol,r=!1,i=this.groundN.set(0,0,0),a=null;for(let o=0;o<3;o++){let o=!1;for(let s=0;s<wu.length;s++){let c=wu[s],l=e.x,u=e.y+c,d=e.z,f=n.sample(l,u,d);if(f<Tu){n.gradient(l,u,d,Cu,.2);let c=Tu-f,p=Cu.x,m=Cu.y,h=Cu.z;if(s===0&&m>.62){let t=c/Math.max(m,.5);e.y+=Math.min(t,.6),r=!0,i.x+=p,i.y+=m,i.z+=h}else e.x+=p*c,e.y+=m*c,e.z+=h*c,m>.62?(r=!0,i.x+=p,i.y+=m,i.z+=h):m>-.5&&(a||=new U(p,m,h));let g=t.x*p+t.y*m+t.z*h;g<0&&(m>.62?t.y=Math.max(t.y,0):(t.x-=p*g,t.y-=m*g,t.z-=h*g)),o=!0}}let s=this.world.collideActor(e,Tu,wu,t);if(s&&s.ground&&(r=!0,i.y+=1),!o&&!s)break}return r?i.normalize():i.set(0,1,0),{grounded:r,wallN:a}}probeGround(e,t){let n=this.world.vol;for(let r=0;r<=t;r+=.08)if(n.sample(e.x,e.y+wu[0]-r,e.z)<.44)return n.gradient(e.x,e.y+wu[0]-r,e.z,Cu,.2),Cu.y>.62&&n.sample(e.x,e.y+wu[0]-r-Tu-.15,e.z)<.2?r:-1;return this.world.propGroundBelow?.(e,t)??-1}update(e,t,n){let r=this.world;this.stateT+=e,this.invuln>0&&(this.invuln-=e),this.dashCD>0&&(this.dashCD-=e),this.controlLock>0&&(this.controlLock-=e,this.controlLock<=0&&this.state===`cutscene`&&(this.setState(`move`),this.pose.victory=!1)),this.comboWindow-=e;let i=this.controlLock>0||this.state===`cutscene`||this.dead,a=i?{x:0,y:0}:t.move(),o=n.yaw,s=Math.sin(o),c=Math.cos(o),l=xu.set(s*a.y-c*a.x*-1*-1,0,c*a.y+s*a.x*-1*-1);l.set(s*a.y-Math.cos(o)*a.x,0,c*a.y+Math.sin(o)*a.x);let u=Math.min(1,l.length());u>.001&&l.divideScalar(l.length());let d=n.pitch;this.aimPitch=Vl((d+.28)*1.6,-1.15,.95),t.jumpPressed()&&!i?this.jumpBuf=.13:this.jumpBuf-=e;let f=this.state;i||(t.punchPressed()&&this.tryPunch(),t.slamPressed()&&this.trySlam(),t.dashPressed()&&this.tryDash(l,u),t.echoPressed()&&r.echo?.(this));let p=60,m=7.4,h=1;if(f===`punch`&&(h=.25,m=3),f===`slam`&&(h=0),f===`hurt`&&(h=.15),this.grounded||(p=30),f===`dash`){let e=this.stateT/.22,t=Hl(17,8,Eu.in(Math.min(1,e)));this.vel.x=Math.sin(this.yaw)*t,this.vel.z=Math.cos(this.yaw)*t,this.grounded||(this.vel.y=Math.max(this.vel.y,e<.7?.5:this.vel.y)),this.stateT>.22&&this.setState(`move`),Math.random()<.7&&r.fx.puff(Su.set(this.pos.x,this.pos.y+.8,this.pos.z),1,{color:new G(.9,.85,.75),speed:.5,size:.5,size1:1.4,life:.4,alpha:.25})}else if(f===`climb`)this.updateClimb(e,a,t);else if(f===`pound`)this.vel.x*=Math.exp(-e*8),this.vel.z*=Math.exp(-e*8),this.stateT<.22?this.vel.y=2.5*(1-this.stateT/.22):this.vel.y=-30;else{let t=l.x*m*u,n=l.z*m*u,r=(u>.01?p:this.grounded?48:6)*e*(h||1e-4),i=t-this.vel.x,a=n-this.vel.z,o=Math.hypot(i,a);if(h>0?o<=r?(this.vel.x=t,this.vel.z=n):(this.vel.x+=i/o*r,this.vel.z+=a/o*r):this.grounded&&(this.vel.x*=Math.exp(-e*10),this.vel.z*=Math.exp(-e*10)),u>.1&&f===`move`){let t=Math.atan2(l.x,l.z);this.yaw=ju(this.yaw,t,e*15)}}if(f!==`climb`&&f!==`pound`&&f!==`slam`&&(this.grounded?(this.coyote=.12,this.airDash=!0):this.coyote-=e,this.jumpBuf>0&&this.coyote>0&&(f===`move`||f===`dash`||f===`punch`)&&(this.vel.y=11.6,this.jumpBuf=0,this.coyote=0,this.jumpHold=.24,this.grounded=!1,f!==`move`&&this.setState(`move`),this.squashV=7,this.game.audio.play(`jump`),r.fx.puff(Su.set(this.pos.x,this.pos.y+.1,this.pos.z),8,{color:this.groundDustColor(),speed:2.2,size:.4,size1:1.2,life:.6,alpha:.5}))),this.jumpHold>0&&(this.jumpHold-=e,(!t.jumpHeld()||this.vel.y<0)&&(this.jumpHold=0)),f!==`climb`&&f!==`pound`){let t=this.jumpHold>0?.42:this.vel.y<0?1.25:1;f===`punch`&&!this.grounded&&(t*=.35),f===`dash`&&!this.grounded&&(t=.1),this.vel.y-=34*t*e,this.vel.y<-30&&(this.vel.y=-30)}let g=this.grounded,_=this.vel.y,v=this.vel.length()*e,y=Math.min(8,Math.max(1,Math.ceil(v/.18))),b={grounded:!1,wallN:null},x=!1,S=null;for(let t=0;t<y;t++)this.pos.addScaledVector(this.vel,e/y),b=this.collide(this.pos,this.vel),b.grounded&&(x=!0),b.wallN&&(S=b.wallN);if(this.grounded=x,!this.grounded&&g&&this.vel.y<=.5&&f!==`climb`&&f!==`pound`){let e=this.probeGround(this.pos,.55);e>=0&&(this.pos.y-=e,this.grounded=!0,this.vel.y=Math.min(this.vel.y,0))}this.grounded&&this.vel.y<0&&(this.vel.y=0),this.grounded&&!g&&this.onLand(_),this.grounded?this.airTime=0:this.airTime+=e,S&&f===`move`&&!this.grounded&&this.airTime>.12&&u>.3&&-(l.x*S.x+l.z*S.z)>.5&&this.tryClimb(S),this.updateAction(e,t),this.updateSafety(e),this.animate(e)}groundDustColor(){let e=yu[this.world.vol.materialAt(this.pos.x,this.pos.y-.2,this.pos.z)].color;return new G(e[0],e[1],e[2]).lerp(new G(.8,.75,.65),.5)}setState(e){this.state=e,this.stateT=0,this.hitDone=!1}onLand(e){let t=Vl(-e/25,0,1);if(this.squashV=-10*(.4+t),this.state===`pound`)return this.poundImpact();t>.3&&(this.game.audio.play(`land`,{power:t}),this.world.fx.puff(Su.set(this.pos.x,this.pos.y+.1,this.pos.z),Math.round(6+t*10),{color:this.groundDustColor(),speed:2+t*3,size:.5,size1:1.6,life:.7,alpha:.5}),t>.6&&this.game.cameraRig.shake(.15*t))}tryPunch(){let e=this.state;if(e===`climb`){this.startPunch(0,!0);return}if(e===`punch`){this.stateT>Ou[this.combo].next*.55&&(this.comboQueued=!0);return}if(e!==`move`&&e!==`dash`)return;let t=this.comboWindow>0?(this.combo+1)%3:0;this.startPunch(t)}startPunch(e,t=!1){this.combo=e,this.comboQueued=!1,this.punchFromClimb=t;let n=this.game.input.move();if(Math.hypot(n.x,n.y)>.3&&!t){let e=this.game.cameraRig.yaw,t=Math.sin(e)*n.y-Math.cos(e)*n.x,r=Math.cos(e)*n.y+Math.sin(e)*n.x;this.yaw=Math.atan2(t,r)}else if(!t){let e=this.game.cameraRig.yaw;Math.abs(Au(this.yaw,e))<1.6&&(this.yaw=ju(this.yaw,e,.6))}this.setState(`punch`),this.game.audio.play(`whoosh`,{power:Ou[e].finisher?1.4:1});let r=Ou[e];this.grounded?(this.vel.x+=Math.sin(this.yaw)*r.lunge,this.vel.z+=Math.cos(this.yaw)*r.lunge):this.vel.y=Math.max(this.vel.y,r.finisher?4:1.5)}trySlam(){let e=this.state;e!==`pound`&&e!==`slam`&&e!==`hurt`&&(e===`climb`?(this.setState(`move`),this.vel.set(this.climbN.x*4,2,this.climbN.z*4)):!this.grounded&&this.airTime>.05?(this.setState(`pound`),this.game.audio.play(`whoosh`,{power:1.6}),this.vel.set(0,2,0)):(this.setState(`slam`),this.game.audio.play(`whoosh`,{power:1.2})))}tryDash(e,t){if(!(this.dashCD>0)&&(this.state===`move`||this.state===`punch`)){if(!this.grounded){if(!this.airDash)return;this.airDash=!1,this.vel.y=1.5}t>.2&&(this.yaw=Math.atan2(e.x,e.z)),this.setState(`dash`),this.dashCD=.42,this.game.audio.play(`dash`),this.game.cameraRig.kick(2.5)}}tryClimb(e){let t=this.world.vol.materialAt(this.pos.x-e.x*.6,this.pos.y+1,this.pos.z-e.z*.6);t!==Z.ANCIENT&&t!==Z.BEDROCK&&(this.climbN.set(e.x,0,e.z).normalize(),this.setState(`climb`),this.vel.set(0,0,0),this.yaw=Math.atan2(-this.climbN.x,-this.climbN.z),this.game.audio.play(`land`,{power:.4}))}updateClimb(e,t,n){let r=this.world.vol,i=this.pos.x,a=this.pos.y+1,o=this.pos.z,s=this.climbN,c=r.sample(i-s.x*.7,a,o-s.z*.7),l=r.sample(i-s.x*.7,this.pos.y+1.7,o-s.z*.7);if(c>.35&&(t.y>.1||this.stateT>.1)){this.setState(`move`),this.vel.set(-s.x*4.5,8.5,-s.z*4.5),this.squashV=5;return}r.gradient(i-s.x*.5,a,o-s.z*.5,Cu,.25),Cu.y<.65&&Cu.y>-.6&&s.lerp(Su.set(Cu.x,0,Cu.z).normalize(),.2).normalize(),this.yaw=ju(this.yaw,Math.atan2(-s.x,-s.z),e*10);let u=Su.set(s.z,0,-s.x),d=4.2;this.vel.set(0,0,0),this.vel.y=t.y*d,l>.8&&t.y>0&&(this.vel.y=d*1.2),this.vel.x=u.x*t.x*-4.2*.8-s.x*1.5,this.vel.z=u.z*t.x*-4.2*.8-s.z*1.5,this.climbAnim=(this.climbAnim||0)+e*(Math.abs(t.y)+Math.abs(t.x))*6,this.jumpBuf>0?(this.jumpBuf=0,this.setState(`move`),t.y<-.3||Math.abs(t.x)>.5?(this.vel.set(s.x*7,9,s.z*7),this.yaw=Math.atan2(s.x,s.z)):this.vel.set(s.x*2.5,11.5,s.z*2.5),this.game.audio.play(`jump`)):(this.grounded&&t.y<-.1&&this.setState(`move`),n.crouchHeld()&&(this.setState(`move`),this.vel.set(s.x*2,0,s.z*2)))}updateAction(e,t){let n=this.state;if(n===`punch`){let e=Ou[this.combo];if(!this.hitDone&&this.stateT>=e.hit&&(this.hitDone=!0,this.doPunchHit(e)),this.stateT>=e.dur){if(this.comboWindow=.32,this.punchFromClimb){this.setState(`climb`);return}this.setState(`move`),this.comboQueued&&this.startPunch((this.combo+1)%3)}else this.comboQueued&&this.stateT>=e.next&&this.hitDone&&this.startPunch((this.combo+1)%3)}else n===`slam`?(!this.hitDone&&this.stateT>=.24&&(this.hitDone=!0,this.doSlamHit()),this.stateT>=.5&&this.setState(`move`)):n===`pound`?this.stateT>2.5&&this.setState(`move`):n===`hurt`&&this.stateT>.45&&this.setState(`move`)}punchDir(e){let t=this.punchFromClimb?0:this.aimPitch,n=Math.cos(t);return e.set(Math.sin(this.yaw)*n,Math.sin(t),Math.cos(this.yaw)*n).normalize()}doPunchHit(e){let t=this.world,n=this.punchDir(new U),r=new U(this.pos.x,this.pos.y+1.05,this.pos.z);n.y<-.3&&(r.y-=.25);let i=this.game.save.punchPower(),a=t.hitEntities(r,n,2.4,1,e.dmg,this,e.finisher),o=t.vol.raycast(r.x,r.y,r.z,n.x,n.y,n.z,2.5),s=!1;if(o>=0){let a=r.clone().addScaledVector(n,o+.35),c=e.radius*i,l=t.dig(a,c,{dir:n,power:e.finisher?1.3:1,source:`punch`});s=!0,this.vel.addScaledVector(n,l.blocked&&!l.changed?-6:-1.5),l.blocked&&!l.changed&&t.blockedFeedback(a,this)}(s||a)&&(this.game.hitstop(e.finisher?.09:.055),this.game.cameraRig.shake(e.finisher?.42:.26),this.game.cameraRig.kick(e.finisher?-3:-1.5),this.game.rumble?.(e.finisher?.6:.3,90))}doSlamHit(){let e=this.world,t=new U(this.pos.x+Math.sin(this.yaw)*.5,this.pos.y-.4,this.pos.z+Math.cos(this.yaw)*.5),n=this.game.save.punchPower(),r=e.dig(t,1.75*n,{dir:new U(0,-1,0),power:1.1,source:`slam`});e.hitEntitiesRadius(t,2.2,2,this),r.blocked&&!r.changed&&e.blockedFeedback(t,this),this.game.hitstop(.07),this.game.cameraRig.shake(.38),this.game.rumble?.(.5,120)}poundImpact(){let e=this.world,t=this.game.save.has(`quake`),n=this.game.save.punchPower(),r=new U(this.pos.x,this.pos.y-.3,this.pos.z),i=(t?3.1:2.15)*n,a=e.dig(r,i,{dir:new U(0,-1,0),power:t?1.6:1.2,source:`pound`,quake:t});e.hitEntitiesRadius(r,i+(t?2.5:1),t?3:2,this,!0),e.fx.ring(r,i*(t?3.2:2.2),.5,t?10479871:16771520),t&&e.fx.ring(r,i*4.5,.75,16773312,.5),this.game.audio.play(`slam`,{power:t?1.3:1}),this.game.hitstop(t?.13:.1),this.game.cameraRig.shake(t?.85:.6),this.game.rumble?.(1,220),a.blocked&&!a.changed&&e.blockedFeedback(r,this),this.setState(`move`),this.controlLock=.18,this.vel.set(0,3.2,0)}hurt(e,t=1){if(this.invuln>0||this.dead)return!1;this.hp-=t,this.invuln=1.3;let n=xu.copy(this.pos).sub(e).setY(0);return n.lengthSq()<1e-4&&n.set(Math.sin(this.yaw),0,Math.cos(this.yaw)).negate(),n.normalize(),this.vel.set(n.x*9,7,n.z*9),this.grounded=!1,this.setState(`hurt`),this.game.audio.play(`hurt`),this.game.cameraRig.shake(.5),this.game.flashDamage(),this.game.rumble?.(.8,200),this.hp<=0&&this.game.onPlayerDeath(),!0}updateSafety(e){let t=this.world.vol;this.grounded&&this.state!==`hurt`?(this.safeT+=e,this.safeT>.6&&(this.lastSafe.copy(this.pos),this.safeT=0)):this.safeT=0,t.sample(this.pos.x,this.pos.y+.95,this.pos.z)<-.05?(this.stuckT+=e,this.stuckT>.25&&(this.unstick(),this.stuckT=0)):this.stuckT=0,this.pos.y<-2&&this.world.onPlayerFell(this)}unstick(){let e=this.world.vol;for(let t=.5;t<8;t+=.5)for(let n=0;n<16;n++){let r=n/16*Math.PI*2;for(let n of[t,0,-t*.5]){let i=this.pos.x+Math.cos(r)*(n===t?0:t),a=this.pos.y+n,o=this.pos.z+Math.sin(r)*(n===t?0:t);if(e.sample(i,a+.42,o)>.45&&e.sample(i,a+.95,o)>.45&&e.sample(i,a+1.42,o)>.45){this.pos.set(i,a,o),this.vel.set(0,0,0);return}}}this.pos.copy(this.lastSafe)}animate(e){let t=this.model.J,n=this.state,r=this.stateT,i=Math.hypot(this.vel.x,this.vel.z);this.speed01=Gl(this.speed01,this.grounded?Vl(i/7.4,0,1.3):0,12,e);let a=this.speed01;this.runPhase+=e*(4+i*1.25);let o=this.runPhase;if(this.grounded&&i>1.5&&n===`move`){let e=Math.sin(o);(this.lastS??0)*e<0&&(this.game.audio.play(`step`,{power:.6+a*.4}),a>.6&&this.world.fx.puff(Su.set(this.pos.x,this.pos.y+.08,this.pos.z),2,{color:this.groundDustColor(),speed:1,size:.35,size1:.9,life:.5,alpha:.35})),this.lastS=e}let s={hipsY:.5,hipsX:0,hipsZ:0,hipsRY:0,torsoX:0,torsoY:0,torsoZ:0,headX:0,headY:0,headZ:0,shLX:0,shLZ:.18,shLY:0,elLX:-.25,shRX:0,shRZ:-.18,shRY:0,elRX:-.25,hipLX:0,hipLZ:.05,knLX:.1,hipRX:0,hipRZ:-.05,knRX:.1},c=performance.now()/1e3;if(this.grounded||n===`climb`){let e=Math.sin(c*2.2);s.torsoX=.04+e*.015,s.shLZ+=e*.03,s.shRZ-=e*.03,s.headX=-e*.02,s.hipsY=.48+e*.008;let t=Math.min(1,a),n=Math.sin(o),r=Math.cos(o);s.hipLX=Hl(s.hipLX,-n*.95,t),s.hipRX=Hl(s.hipRX,n*.95,t),s.knLX=Hl(s.knLX,.25+Math.max(0,r)*1.25,t),s.knRX=Hl(s.knRX,.25+Math.max(0,-r)*1.25,t),s.shLX=Hl(s.shLX,n*1,t),s.shRX=Hl(s.shRX,-n*1,t),s.elLX=Hl(s.elLX,-.6-Math.max(0,n)*.6,t),s.elRX=Hl(s.elRX,-.6-Math.max(0,-n)*.6,t),s.shLZ=Hl(s.shLZ,.35,t),s.shRZ=Hl(s.shRZ,-.35,t),s.torsoX=Hl(s.torsoX,.3*a,t),s.torsoY=Hl(s.torsoY,n*.18,t),s.hipsRY=-n*.12*t,s.hipsY=Hl(s.hipsY,.47+Math.abs(r)*.09,t),s.headX=Hl(s.headX,-.2*a,t)}else{let e=Vl(this.vel.y/10,-1,1);s.hipLX=-.6+e*.2,s.knLX=1.1,s.hipRX=.2,s.knRX=.6-e*.3,s.shLX=-.4-e*.6,s.shRX=-.4-e*.6,s.shLZ=.7-e*.3,s.shRZ=-.7+e*.3,s.elLX=-.8,s.elRX=-.8,s.torsoX=.15-e*.1,s.headX=e*-.15}let l=!1;if(n===`punch`){l=!0;let e=Ou[this.combo],t=Vl(r/e.dur,0,1),n=e.hit/e.dur,i=this.punchFromClimb?0:this.aimPitch,a=-Math.PI/2-i,o=Du(t,[[0,0],[n*.7,.5],[n,-.55],[.75,-.4],[1,0]]);if(e.arm===`R`||e.arm===`L`){let r=e.arm===`R`,c=r?1:-1,l=Du(t,[[0,.1],[n*.75,.55],[n,a],[.7,a+.15],[1,-.2]]),u=Du(t,[[0,-.4],[n*.75,-1.9],[n,-.05],[.7,-.25],[1,-.6]]);r?(s.shRX=l,s.elRX=u,s.shRZ=-.15,s.shLX=.3,s.elLX=-1.3,s.shLZ=.35):(s.shLX=l,s.elLX=u,s.shLZ=.15,s.shRX=.3,s.elRX=-1.3,s.shRZ=-.35),s.torsoY=o*c*.8,s.hipsRY=o*c*.3,s.torsoX=.25-i*.35,s.hipLX=-.35*c,s.hipRX=.35*c,s.knLX=.4,s.knRX=.4,s.hipsY=.45}else{let e=Du(t,[[0,.2],[n*.8,.9],[n,a-.1],[.8,a],[1,-.2]],Eu.out),r=Du(t,[[0,-.5],[n*.8,-1.6],[n,-.1],[1,-.5]]);s.shLX=e,s.shRX=e,s.elLX=r,s.elRX=r,s.shLZ=Du(t,[[0,.3],[n*.8,.9],[n,.12],[1,.3]]),s.shRZ=-s.shLZ,s.torsoX=Du(t,[[0,0],[n*.8,-.35],[n,.5-i*.4],[1,.1]]),s.hipsY=Du(t,[[0,.5],[n*.8,.38],[n,.5],[1,.48]]),s.hipLX=-.5,s.hipRX=.5,s.knLX=.7,s.knRX=.3}}else if(n===`slam`){l=!0;let e=Vl(r/.5,0,1),t=Du(e,[[0,0],[.38,-2.9],[.5,-.9],[.8,-.8],[1,-.2]]);s.shLX=t,s.shRX=t,s.elLX=-.3,s.elRX=-.3,s.shLZ=.2,s.shRZ=-.2,s.torsoX=Du(e,[[0,0],[.38,-.35],[.5,.9],[.8,.8],[1,.1]]),s.hipsY=Du(e,[[0,.5],[.38,.55],[.5,.3],[.85,.32],[1,.48]]),s.knLX=Du(e,[[0,.1],[.5,1.2],[1,.2]]),s.knRX=s.knLX,s.hipLX=-s.knLX*.6,s.hipRX=-s.knLX*.6,s.headX=Du(e,[[0,0],[.38,-.3],[.5,.4],[1,0]])}else if(n===`pound`)l=!0,r<.22?(s.torsoX=r/.22*Math.PI*2,s.knLX=2,s.knRX=2,s.hipLX=-1.6,s.hipRX=-1.6,s.shLX=-1.2,s.shRX=-1.2,s.elLX=-2,s.elRX=-2):(s.shLX=-2.9,s.shRX=-2.9,s.elLX=-.1,s.elRX=-.1,s.shLZ=.3,s.shRZ=-.3,s.torsoX=.2,s.knLX=.9,s.knRX=.9,s.hipLX=-.5,s.hipRX=-.5);else if(n===`dash`)s.torsoX=.75,s.headX=-.5,s.shLX=.9,s.shRX=.9,s.elLX=-.3,s.elRX=-.3,s.shLZ=.4,s.shRZ=-.4,s.hipLX=-.9,s.hipRX=.6,s.knLX=1.2,s.knRX=.8;else if(n===`climb`){let e=this.climbAnim||0,t=Math.sin(e);s.shLX=-2.4+t*.5,s.shRX=-2.4-t*.5,s.elLX=-.6-Math.max(0,t)*.8,s.elRX=-.6-Math.max(0,-t)*.8,s.shLZ=.35,s.shRZ=-.35,s.hipLX=-.9-t*.4,s.hipRX=-.9+t*.4,s.knLX=1.3,s.knRX=1.3,s.torsoX=-.1,s.headX=-.35}else n===`hurt`?(s.torsoX=-.5,s.headX=-.4,s.shLX=-1.2,s.shRX=-1.2,s.shLZ=1,s.shRZ=-1):n===`cutscene`&&this.pose.victory&&(s.shLX=-2.8*Math.min(1,r*2),s.shRX=.2,s.shLZ=.3,s.elLX=-.2,s.elRX=-1.5,s.shRZ=-.7,s.torsoX=-.15,s.headX=-.2,s.hipsY=.5+Math.abs(Math.sin(r*6))*.1*(r<1.2));let u=l?30:16,d=(t,n,r,i=u)=>{t[n]=Gl(t[n],r,i,e)};d(t.hips.position,`y`,s.hipsY,20),d(t.hips.rotation,`y`,s.hipsRY),d(t.torso.rotation,`x`,s.torsoX,n===`pound`?60:u),d(t.torso.rotation,`y`,s.torsoY),d(t.head.rotation,`x`,s.headX),d(t.head.rotation,`y`,s.headY),d(t.shoulderL.rotation,`x`,s.shLX),d(t.shoulderL.rotation,`z`,s.shLZ),d(t.shoulderR.rotation,`x`,s.shRX),d(t.shoulderR.rotation,`z`,s.shRZ),d(t.elbowL.rotation,`x`,s.elLX),d(t.elbowR.rotation,`x`,s.elRX),d(t.hipL.rotation,`x`,s.hipLX),d(t.hipL.rotation,`z`,s.hipLZ),d(t.hipR.rotation,`x`,s.hipRX),d(t.hipR.rotation,`z`,s.hipRZ),d(t.kneeL.rotation,`x`,s.knLX),d(t.kneeR.rotation,`x`,s.knRX),n===`pound`&&r<.22&&(t.torso.rotation.x=s.torsoX);let f=Vl(-i*.12-this.vel.y*.05,-1.4,.6)-.15;this.scarfV+=((f-this.scarfA)*60-this.scarfV*8)*e,this.scarfA+=this.scarfV*e,t.scarfTail.rotation.x=-this.scarfA-.2+Math.sin(c*9)*.05*(.3+a),t.scarfTail2.rotation.x=-this.scarfA*.6+Math.sin(c*9-1)*.08*(.3+a),this.squashV+=(-this.squash*220-this.squashV*16)*e,this.squash+=this.squashV*e;let p=Vl(this.squash*.06,-.25,.25);this.model.root.scale.set(1-p*.5,1+p,1-p*.5),this.blinkT-=e,this.blinkT<0&&(this.blink=.14,this.blinkT=2+Math.random()*3),this.blink>0&&(this.blink-=e);let m=this.blink>0?.15:n===`hurt`?.4:1;for(let t of this.model.eyes)t.scale.y=Gl(t.scale.y,m,30,e);let h=this.visYaw;this.visYaw=ju(this.visYaw,this.yaw,e*(l?30:14));let g=Au(h,this.visYaw)/Math.max(e,.001);this.lean=Gl(this.lean,Vl(-g*.05*a,-.35,.35),8,e),this.root.position.copy(this.pos),this.root.rotation.set(0,this.visYaw,0),this.model.root.rotation.z=this.lean;let _=this.invuln>0?Math.sin(c*40)>-.3:!0;this.root.visible=_;for(let t of this.model.mats)t.userData.flash.value=Math.max(0,t.userData.flash.value-e*6)}};function Au(e,t){let n=t-e;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function ju(e,t,n){let r=Au(e,t);return Math.abs(r)<=n?t:e+Math.sign(r)*n}var Mu=class{constructor(e,t){this.cam=e,this.game=t,this.yaw=0,this.pitch=-.3,this.dist=6.5,this.curDist=6.5,this.target=new U,this.focus=new U,this.trauma=0,this.fovKick=0,this.baseFov=60,this.space=1,this.idleLook=0,this.override=null,this.shaft=0,this.time=0,this.lookAhead=new U}snapBehind(e){this.yaw=e,this.pitch=-.3}shake(e){this.trauma=Math.min(1,this.trauma+e)}kick(e){this.fovKick+=e}update(e,t,n,r){this.time+=e;let i=r.vol,a=t.look(),o=Math.abs(a.x)+Math.abs(a.y)>1e-4;this.yaw-=a.x,this.pitch=Vl(this.pitch-a.y,-1.35,.75),o?this.idleLook=0:this.idleLook+=e;let s=Math.hypot(n.vel.x,n.vel.z);if(this.idleLook>.8&&s>2&&n.state===`move`){let t=Math.atan2(n.vel.x,n.vel.z),r=Au(this.yaw,t);Math.abs(r)<2.4&&(this.yaw+=r*Math.min(1,e*.8)*Vl((s-2)/5,0,1))}t.recenterPressed()&&(this.yaw=n.yaw,this.pitch=-.3);let c=n.pos.x,l=n.pos.y+1.45,u=n.pos.z,d=0,f=0,p=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[.7,.7,0],[-.7,.7,0],[0,.7,.7],[0,.7,-.7]];for(let e=0;e<p.length;e++){let t=p[e],n=i.raycast(c,l,u,t[0],t[1],t[2],7,.3),r=n<0?7:n;d+=r,e<4&&(f+=r)}d/=p.length*7,f/=28;let m=d<.35?0:d>.85?2:1;this.space=Gl(this.space,m,1.5,e);let h=i.raycast(c,l,u,0,-1,0,12,.3),g=+(f<.4&&(h<0||h>4));this.shaft=Gl(this.shaft,g,2,e);let _=this.space,v=_<1?Hl(4.6,6.6,_):Hl(6.6,9.5,_-1);n.state===`climb`&&(v=Math.min(v,5.5)),v*=1+Math.max(0,-this.pitch-.6)*.15,this.dist=Gl(this.dist,v,2.5,e);let y=(_>1?Hl(60,66,_-1):60)+(n.state===`dash`?6:0),b=n.grounded||n.state===`climb`?l:Math.min(l,this.focus.y+6*e+Math.max(0,l-this.focus.y)*e*2);this.inited||=(this.focus.set(c,l,u),!0),this.focus.x=Gl(this.focus.x,c,14,e),this.focus.z=Gl(this.focus.z,u,14,e),this.focus.y=Gl(this.focus.y,n.grounded?l:b,n.grounded?8:4,e),Math.abs(this.focus.y-l)>3&&(this.focus.y=l+Math.sign(this.focus.y-l)*3),this.lookAhead.x=Gl(this.lookAhead.x,n.vel.x*.12,3,e),this.lookAhead.z=Gl(this.lookAhead.z,n.vel.z*.12,3,e);let x=this.pitch-this.shaft*.35-(this.blockedK||0)*.12;x=Vl(x,-1.45,.75);let S=Math.cos(x),C=Math.sin(x),w=new U(-Math.sin(this.yaw)*S,-C,-Math.cos(this.yaw)*S),T=this.target.set(this.focus.x+this.lookAhead.x,this.focus.y,this.focus.z+this.lookAhead.z),E=.38,D=.2,O=this.dist;for(let e=0;e<64&&D<this.dist;e++){let e=i.sample(T.x+w.x*D,T.y+w.y*D,T.z+w.z*D);if(e<E){O=Math.max(.8,D-.1);break}D+=Math.max(.12,e-E*.5)}let k=Math.min(this.dist,3),A=O<this.dist-.2;this.blockedK=Gl(this.blockedK||0,+!!A,4,e);let j=Math.max(O,k);this.curDist=j<this.curDist?Gl(this.curDist,j,14,e):Gl(this.curDist,j,2.5,e);let M=T.clone().addScaledVector(w,this.curDist),ee=T;if(this.override){let t=this.override;t.t=(t.t??0)+e;let n=t.blend??1;M=M.lerp(t.pos,n),ee=T.clone().lerp(t.look,n)}this.trauma=Math.max(0,this.trauma-e*1.6);let N=this.trauma*this.trauma,P=this.time*38,F=(Math.sin(P*1.1)+Math.sin(P*2.3+1.3)*.5)*.18*N,te=(Math.sin(P*1.7+2.1)+Math.sin(P*2.9)*.5)*.18*N,ne=Math.sin(P*1.3+.7)*.04*N;this.cam.position.copy(M),this.cam.lookAt(ee),this.cam.translateX(F),this.cam.translateY(te),this.cam.rotateZ(ne),this.fovKick=Gl(this.fovKick,0,6,e);let re=y+this.fovKick;Math.abs(this.cam.fov-re)>.01&&(this.cam.fov=Gl(this.cam.fov,re,8,e),this.cam.updateProjectionMatrix());let ie=r.terrain.material.userData.uniforms;ie.uCutA.value.copy(this.cam.position),ie.uCutB.value.set(n.pos.x,n.pos.y+1,n.pos.z),ie.uCutR.value=1.3+(this.blockedK||0)*.6}},Nu=`gorodig-save-v1`,Pu=`gorodig-settings-v1`;function Fu(){return{v:1,area:1,checkpoint:null,flags:{},relics:{},sunstones:{},gold:0,upgrades:{power:0,hearts:0,echo:0},edits:{},time:0,kills:0,dug:0,deaths:0,cleared:!1}}var Iu=class{constructor(){this.data=Fu(),this.settings={sens:1,invertY:!1,music:.5,sfx:.8,quality:`auto`,shake:1};try{let e=JSON.parse(localStorage.getItem(Pu)||`null`);e&&Object.assign(this.settings,e)}catch{}this.dirtyEdits=!1}hasSave(){try{return!!localStorage.getItem(Nu)}catch{return!1}}load(){try{let e=JSON.parse(localStorage.getItem(Nu)||`null`);if(e&&e.v===1)return this.data=Object.assign(Fu(),e),!0}catch{}return!1}reset(){this.data=Fu()}write(){try{localStorage.setItem(Nu,JSON.stringify(this.data))}catch{}}wipe(){try{localStorage.removeItem(Nu)}catch{}this.reset()}writeSettings(){try{localStorage.setItem(Pu,JSON.stringify(this.settings))}catch{}}flag(e){return!!this.data.flags[e]}setFlag(e,t=!0){this.data.flags[e]=t}has(e){return!!this.data.relics[e]}addRelic(e){this.data.relics[e]=!0}hasSunstone(e){return!!this.data.sunstones[e]}addSunstone(e){this.data.sunstones[e]=!0}sunstoneCount(){return Object.keys(this.data.sunstones).length}edits(e){return this.data.edits[e]||[]}markEdits(e,t){this.data.edits[e]=t,this.dirtyEdits=!0}punchPower(){return 1+this.data.upgrades.power*.16}maxHearts(){return 5+this.data.upgrades.hearts+Math.floor(this.sunstoneCount()/5)}},Lu=e=>440*2**((e-69)/12),Ru=class{constructor(){this.ctx=null,this.enabled=!0,this.musicVol=.5,this.sfxVol=.8,this.song=null,this.nextSong=null}init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e){this.enabled=!1;return}let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.003,n.release.value=.2,this.master.connect(n).connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.music=t.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.4),this.revSend=t.createGain(),this.revSend.gain.value=.35,this.revSend.connect(this.reverb).connect(this.master),this.musicRev=t.createGain(),this.musicRev.gain.value=.3,this.music.connect(this.musicRev).connect(this.reverb),this.noiseBuf=this.makeNoise(2),this.brownBuf=this.makeNoise(2,!0),this.startScheduler()}setVolumes(e,t){this.musicVol=e,this.sfxVol=t,this.ctx&&(this.music.gain.setTargetAtTime(e,this.ctx.currentTime,.1),this.sfx.gain.setTargetAtTime(t,this.ctx.currentTime,.1))}makeImpulse(e,t){let n=this.ctx,r=Math.floor(n.sampleRate*e),i=n.createBuffer(2,r,n.sampleRate);for(let e=0;e<2;e++){let a=i.getChannelData(e);for(let e=0;e<r;e++){let i=e/r,o=e<n.sampleRate*.08&&Math.random()<.002?.8:0;a[e]=((Math.random()*2-1)*(1-i)**t+o)*.5}}return i}makeNoise(e,t=!1){let n=this.ctx,r=Math.floor(n.sampleRate*e),i=n.createBuffer(1,r,n.sampleRate),a=i.getChannelData(0),o=0;for(let e=0;e<r;e++){let n=Math.random()*2-1;t?(o=(o+.02*n)/1.02,a[e]=o*3.5):a[e]=n}return i}out(e=.3,t=0){let n=this.ctx.createGain(),r=n;if(t&&this.ctx.createStereoPanner){let e=this.ctx.createStereoPanner();e.pan.value=t,n.connect(e),r=e}if(r.connect(this.sfx),e>0){let t=this.ctx.createGain();t.gain.value=e,r.connect(t),t.connect(this.revSend)}return n}noise(e,t,{freq:n=1e3,q:r=1,type:i=`lowpass`,gain:a=.5,attack:o=.002,brown:s=!1,sweep:c=null,rev:l=.3,rate:u=1}={}){let d=this.ctx,f=d.createBufferSource();f.buffer=s?this.brownBuf:this.noiseBuf,f.playbackRate.value=u;let p=d.createBiquadFilter();p.type=i,p.frequency.value=n,p.Q.value=r,c&&(p.frequency.setValueAtTime(n,e),p.frequency.exponentialRampToValueAtTime(c,e+t));let m=d.createGain();m.gain.setValueAtTime(1e-4,e),m.gain.exponentialRampToValueAtTime(a,e+o),m.gain.exponentialRampToValueAtTime(1e-4,e+t),f.connect(p).connect(m).connect(this.out(l)),f.start(e,Math.random()*1),f.stop(e+t+.05)}tone(e,t,{freq:n=440,to:r=null,type:i=`sine`,gain:a=.3,attack:o=.005,rev:s=.3,dest:c=null,curve:l=`exp`}={}){let u=this.ctx,d=u.createOscillator();d.type=i,d.frequency.setValueAtTime(n,e),r&&d.frequency.exponentialRampToValueAtTime(r,e+t);let f=u.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(a,e+o),l===`exp`?f.gain.exponentialRampToValueAtTime(1e-4,e+t):f.gain.linearRampToValueAtTime(1e-4,e+t),d.connect(f).connect(c||this.out(s)),d.start(e),d.stop(e+t+.05)}ok(){return this.enabled&&this.ctx&&this.ctx.state===`running`}now(){return this.ctx.currentTime}play(e,t={}){if(!this.ok())return;let n=this.now()+.005,r=t.power??1,i=()=>.9+Math.random()*.2;switch(e){case`whoosh`:this.noise(n,.18,{type:`bandpass`,freq:600*i(),sweep:2400,q:1.2,gain:.18*r,attack:.04,rev:.05});break;case`impact_dirt`:this.tone(n,.25,{freq:120*i(),to:40,type:`sine`,gain:.9*r,rev:.25}),this.noise(n,.4*r+.2,{freq:900,sweep:200,gain:.55*r,brown:!1,rev:.4}),this.noise(n+.03,.7,{freq:500,type:`lowpass`,gain:.4*r,brown:!0,rev:.5}),this.crumble(n+.05,r*.8,380);break;case`impact_rock`:this.tone(n,.22,{freq:150*i(),to:45,type:`sine`,gain:.9*r,rev:.3}),this.tone(n,.06,{freq:1800*i(),to:900,type:`triangle`,gain:.15*r,rev:.2}),this.noise(n,.3,{freq:2500,sweep:400,gain:.5*r,rev:.4}),this.crumble(n+.04,r,900);break;case`impact_crystal`:this.tone(n,.18,{freq:140,to:50,gain:.7*r});for(let e=0;e<6;e++)this.tone(n+e*.025,.9,{freq:1800+Math.random()*2600,type:`sine`,gain:.07,rev:.6});this.noise(n,.25,{type:`highpass`,freq:4e3,gain:.25,rev:.4});break;case`impact_metal`:this.tone(n,.6,{freq:520*i(),type:`triangle`,gain:.25,rev:.5}),this.tone(n,.5,{freq:1370*i(),type:`sine`,gain:.12,rev:.5}),this.tone(n,.15,{freq:160,to:60,gain:.5}),this.noise(n,.08,{type:`highpass`,freq:3e3,gain:.3});break;case`impact_flesh`:this.tone(n,.16,{freq:180*i(),to:70,type:`sine`,gain:.8}),this.noise(n,.12,{freq:1500,sweep:300,gain:.5,rev:.15}),this.tone(n,.08,{freq:900,to:300,type:`square`,gain:.06,rev:.1});break;case`slam`:this.tone(n,.7,{freq:90,to:28,type:`sine`,gain:1*r,rev:.5}),this.noise(n,1.2,{freq:700,sweep:120,gain:.7*r,brown:!0,rev:.7}),this.noise(n,.3,{freq:3e3,sweep:300,gain:.4*r,rev:.4}),this.crumble(n+.1,r*1.4,600);break;case`jump`:this.tone(n,.12,{freq:260,to:520,type:`triangle`,gain:.1,rev:.1}),this.noise(n,.12,{type:`bandpass`,freq:1200,gain:.08,rev:.05});break;case`land`:this.tone(n,.12,{freq:110,to:50,gain:.35*r}),this.noise(n,.15,{freq:700,sweep:200,gain:.25*r,rev:.15});break;case`step`:this.noise(n,.07,{type:`bandpass`,freq:380*i(),q:1.5,gain:.12*r,rev:.08}),this.tone(n,.05,{freq:85*i(),to:55,gain:.12*r,rev:.02});break;case`dash`:this.noise(n,.3,{type:`bandpass`,freq:400,sweep:3e3,q:.9,gain:.25,attack:.02,rev:.15});break;case`gem`:[0,4,7,12,16].forEach((e,t)=>this.tone(n+t*.055,.5,{freq:Lu(84+e),type:`sine`,gain:.12,rev:.5})),[0,7,12].forEach((e,t)=>this.tone(n+t*.055,.3,{freq:Lu(72+e),type:`triangle`,gain:.06,rev:.3}));break;case`sunstone`:[0,4,7,11,14,19,23,26].forEach((e,t)=>this.tone(n+t*.07,1.4,{freq:Lu(72+e),type:`sine`,gain:.13,rev:.7})),this.tone(n,2,{freq:Lu(48),type:`triangle`,gain:.15,rev:.6});break;case`gold`:this.tone(n,.18,{freq:Lu(88+Math.floor(Math.random()*3)*2),type:`square`,gain:.035,rev:.3}),this.tone(n+.04,.25,{freq:Lu(95),type:`sine`,gain:.07,rev:.4});break;case`hurt`:this.tone(n,.3,{freq:420,to:160,type:`sawtooth`,gain:.12,rev:.2}),this.tone(n,.2,{freq:120,to:50,gain:.6});break;case`enemy_hit`:this.tone(n,.18,{freq:700*i(),to:250,type:`square`,gain:.08,rev:.2});break;case`enemy_die`:this.tone(n,.4,{freq:500,to:80,type:`sawtooth`,gain:.1,rev:.3}),this.noise(n,.5,{freq:1200,sweep:200,gain:.4,rev:.4}),[0,7,12].forEach((e,t)=>this.tone(n+.15+t*.05,.3,{freq:Lu(79+e),gain:.06,rev:.4}));break;case`grub_chirp`:this.tone(n,.12,{freq:900*i(),to:1300,type:`square`,gain:.03,rev:.4}),this.tone(n+.1,.1,{freq:1100*i(),to:700,type:`square`,gain:.03,rev:.4});break;case`bat`:this.tone(n,.08,{freq:2400*i(),to:3200,type:`sine`,gain:.04,rev:.6});break;case`golem`:this.noise(n,.5,{freq:300,sweep:120,gain:.35,brown:!0,rev:.5}),this.tone(n,.4,{freq:70,to:50,type:`sawtooth`,gain:.08,rev:.4});break;case`echo`:for(let e=0;e<5;e++)this.tone(n+e*.16,.6,{freq:Lu(76+e%2*7),type:`sine`,gain:.12*.7**e,rev:.8});this.noise(n,.08,{type:`bandpass`,freq:2200,q:3,gain:.5,rev:.6});break;case`rune`:[0,7,12,19].forEach((e,t)=>this.tone(n+t*.09,1.2,{freq:Lu(67+e),type:`triangle`,gain:.1,rev:.7})),this.tone(n,1.2,{freq:Lu(43),type:`sine`,gain:.3,rev:.6});break;case`gate`:this.noise(n,2.5,{freq:220,gain:.5,brown:!0,rev:.6,attack:.3}),this.tone(n,2.4,{freq:55,to:45,type:`sawtooth`,gain:.08,rev:.5,attack:.3}),[0,4,7,12].forEach((e,t)=>this.tone(n+.6+t*.12,1.6,{freq:Lu(64+e),type:`sine`,gain:.08,rev:.8}));break;case`checkpoint`:[0,7,12,16].forEach((e,t)=>this.tone(n+t*.08,.9,{freq:Lu(67+e),type:`triangle`,gain:.09,rev:.7}));break;case`relic`:[0,4,7,12,16,19,24].forEach((e,t)=>this.tone(n+t*.1,2.2,{freq:Lu(60+e),type:`triangle`,gain:.1,rev:.8})),[0,7,12].forEach(e=>this.tone(n+.7,2.6,{freq:Lu(48+e),type:`sine`,gain:.12,rev:.7}));break;case`urn`:for(let e=0;e<4;e++)this.tone(n+e*.02,.2,{freq:1200+Math.random()*1500,type:`triangle`,gain:.06,rev:.4});this.noise(n,.3,{type:`highpass`,freq:2e3,gain:.3,rev:.3});break;case`select`:this.tone(n,.1,{freq:Lu(79),type:`triangle`,gain:.1,rev:.2}),this.tone(n+.05,.15,{freq:Lu(86),type:`triangle`,gain:.08,rev:.3});break;case`buy`:[0,4,7,12].forEach((e,t)=>this.tone(n+t*.05,.3,{freq:Lu(76+e),type:`square`,gain:.03,rev:.3}));break;case`denied`:this.tone(n,.15,{freq:200,type:`square`,gain:.05}),this.tone(n+.12,.2,{freq:150,type:`square`,gain:.05});break;case`roar`:this.noise(n,1.6,{type:`bandpass`,freq:300,sweep:120,q:2,gain:.9,brown:!0,rev:.7,attack:.1}),this.tone(n,1.5,{freq:80,to:40,type:`sawtooth`,gain:.25,rev:.6,attack:.1}),this.tone(n,1.5,{freq:123,to:55,type:`sawtooth`,gain:.15,rev:.6,attack:.1});break;case`boss_slam`:this.tone(n,1,{freq:70,to:22,gain:1,rev:.6}),this.noise(n,1.5,{freq:500,sweep:80,gain:.8,brown:!0,rev:.8}),this.crumble(n+.1,1.6,500);break;case`core_hit`:this.tone(n,.8,{freq:Lu(84),to:Lu(72),type:`triangle`,gain:.18,rev:.7}),this.tone(n,.3,{freq:150,to:40,gain:.8}),this.noise(n,.4,{type:`highpass`,freq:3e3,gain:.3,rev:.6});break;case`fall`:this.tone(n,1.2,{freq:600,to:120,type:`sine`,gain:.1,rev:.6})}}crumble(e,t,n){let r=Math.round(6+t*8);for(let i=0;i<r;i++){let r=e+Math.random()*.45*(.6+t*.4);this.noise(r,.05+Math.random()*.08,{type:`bandpass`,freq:n*(.6+Math.random()*1.4),q:2.5,gain:.1+Math.random()*.15*t,rev:.4})}}playSong(e){if(!this.ctx){this.pendingSong=e;return}if(this.song&&this.song.name===e)return;let t=Bu[e];if(!t)return;if(this.song){let e=this.song;e.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.6),setTimeout(()=>e.gain.disconnect(),4e3)}let n=this.ctx.createGain();n.gain.value=1e-4,n.gain.setTargetAtTime(1,this.ctx.currentTime+.3,.8),n.connect(this.music),this.song={name:e,def:t,gain:n,step:0,t:this.ctx.currentTime+.2}}stopSong(){if(this.song&&this.ctx){let e=this.song;e.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.5),setTimeout(()=>e.gain.disconnect(),3e3),this.song=null}}startScheduler(){this.pendingSong&&=(this.playSong(this.pendingSong),null),setInterval(()=>this.schedule(),40)}schedule(){let e=this.song;if(!e||!this.ctx||this.ctx.state!==`running`)return;let t=this.ctx.currentTime+.25,n=60/e.def.bpm/4;for(e.t<this.ctx.currentTime-1&&(e.t=this.ctx.currentTime+.05);e.t<t;)this.playStep(e,e.step,e.t,n),e.step++,e.t+=n}playStep(e,t,n,r){let i=e.def,a=Math.floor(t/16)%i.chords.length,o=t%16,s=i.chords[a],c=i.root,l=e.gain,u=e.intensity??1;if(o===0&&i.pad)for(let e of s)this.padNote(n,r*16*1.05,Lu(c+e),l,i.pad);if(i.bass&&i.bass[o]!=null){let e=i.bass[o];this.bassNote(n,r*(i.bassLen??3),Lu(c-24+s[0]+e),l,i.bassGain??.22)}if(i.arp&&i.arp[o]!=null&&(i.arpEvery&&Math.floor(t/16)%i.arpEvery===0||1)){let e=i.arp[o],t=s[e%s.length]+12*Math.floor(e/s.length);this.pluck(n,Lu(c+12+t),l,i.arpGain??.07,i.arpType??`kalimba`)}if(i.mel&&o%2==0&&zu(t*7+3)<(i.melDensity??.18)){let e=i.scale,r=Math.floor(zu(t*13+5)*e.length);this.pluck(n,Lu(c+24+e[r]),l,i.melGain??.05,i.melType??`bell`)}i.kick&&i.kick[o]&&this.kick(n,l,i.kickGain??.5),i.snare&&i.snare[o]&&this.snare(n,l,i.snareGain??.2),i.hat&&i.hat[o]&&this.hat(n,l,(i.hatGain??.05)*(o%4==2?1.4:1)),i.shaker&&o%2==1&&this.hat(n,l,i.shaker*u,6e3,.05)}padNote(e,t,n,r,i){let a=this.ctx,o=a.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(i.gain??.04,e+(i.attack??1.2)),o.gain.linearRampToValueAtTime(1e-4,e+t+.6);let s=a.createBiquadFilter();s.type=`lowpass`,s.frequency.value=i.cutoff??900,s.Q.value=.5;for(let r of[-7,6]){let o=a.createOscillator();o.type=i.type??`sawtooth`,o.frequency.value=n,o.detune.value=r,o.connect(s),o.start(e),o.stop(e+t+.7)}s.connect(o).connect(r)}bassNote(e,t,n,r,i){let a=this.ctx,o=a.createOscillator();o.type=`triangle`,o.frequency.value=n;let s=a.createOscillator();s.type=`sine`,s.frequency.value=n/2;let c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(i,e+.01),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(c),s.connect(c),c.connect(r),o.start(e),o.stop(e+t+.05),s.start(e),s.stop(e+t+.05)}pluck(e,t,n,r,i){let a=this.ctx,o=a.createGain(),s=i===`bell`?1.8:i===`marimba`?.5:.9;o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(r,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+s);let c=i===`bell`?[[1,1],[2.76,.35],[5.4,.15]]:i===`marimba`?[[1,1],[4,.25]]:[[1,1],[3.01,.18],[5.2,.06]];for(let[n,r]of c){let i=a.createOscillator();i.type=`sine`,i.frequency.value=t*n;let c=a.createGain();c.gain.value=r,i.connect(c).connect(o),i.start(e),i.stop(e+s+.05)}o.connect(n)}kick(e,t,n){let r=this.ctx,i=r.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(130,e),i.frequency.exponentialRampToValueAtTime(42,e+.18);let a=r.createGain();a.gain.setValueAtTime(n,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.3),i.connect(a).connect(t),i.start(e),i.stop(e+.32)}snare(e,t,n){let r=this.ctx,i=r.createBufferSource();i.buffer=this.noiseBuf;let a=r.createBiquadFilter();a.type=`bandpass`,a.frequency.value=1800,a.Q.value=.8;let o=r.createGain();o.gain.setValueAtTime(n,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.18),i.connect(a).connect(o).connect(t),i.start(e,Math.random()),i.stop(e+.2);let s=r.createOscillator();s.frequency.setValueAtTime(220,e),s.frequency.exponentialRampToValueAtTime(140,e+.08);let c=r.createGain();c.gain.setValueAtTime(n*.6,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.1),s.connect(c).connect(t),s.start(e),s.stop(e+.12)}hat(e,t,n,r=8e3,i=.04){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuf;let s=a.createBiquadFilter();s.type=`highpass`,s.frequency.value=r;let c=a.createGain();c.gain.setValueAtTime(n,e),c.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(s).connect(c).connect(t),o.start(e,Math.random()),o.stop(e+i+.02)}};function zu(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}var Q=null,Bu={title:{bpm:84,root:50,chords:[[0,7,12,16],[5,9,12,17],[3,7,10,15],[7,11,14,19]].map(e=>e),scale:[0,2,4,7,9,12,14],pad:{gain:.035,cutoff:1100,attack:1.5},arp:[0,Q,1,Q,2,Q,3,Q,4,Q,3,Q,2,Q,1,Q],arpGain:.06,bass:[0,Q,Q,Q,Q,Q,Q,Q,0,Q,Q,Q,Q,Q,7,Q],mel:!0,melDensity:.12,melGain:.045},ruins:{bpm:92,root:52,chords:[[0,7,10,15],[5,9,12,17],[3,10,15,19],[2,9,14,17]],scale:[0,2,3,5,7,9,10,12],pad:{gain:.03,cutoff:1e3},arp:[0,Q,Q,2,Q,Q,1,Q,3,Q,Q,2,Q,1,Q,Q],arpGain:.065,arpType:`marimba`,bass:[0,Q,Q,Q,Q,Q,0,Q,Q,Q,7,Q,Q,Q,Q,Q],bassGain:.2,kick:[1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],kickGain:.32,hat:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1],hatGain:.03,shaker:.012,mel:!0,melDensity:.14,melGain:.04,melType:`kalimba`},crystal:{bpm:76,root:49,chords:[[0,7,11,18],[2,9,14,18],[-3,4,9,16],[-1,6,11,14]],scale:[0,2,4,6,7,9,11,12],pad:{gain:.035,cutoff:1400,type:`triangle`,attack:2},arp:[0,Q,2,Q,1,Q,3,Q,2,Q,4,Q,3,Q,5,Q],arpGain:.05,arpType:`bell`,bass:[0,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q],bassGain:.18,bassLen:12,mel:!0,melDensity:.1,melGain:.035,melType:`bell`,hat:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],hatGain:.02},temple:{bpm:100,root:45,chords:[[0,7,13,16],[1,8,13,17],[0,7,12,16],[-2,5,10,13]],scale:[0,1,4,5,7,8,10,12],pad:{gain:.03,cutoff:800},arp:[0,Q,1,2,Q,1,Q,3,0,Q,1,2,Q,3,2,Q],arpGain:.055,arpType:`marimba`,bass:[0,Q,Q,0,Q,Q,0,Q,0,Q,Q,0,Q,Q,1,Q],bassGain:.22,bassLen:2,kick:[1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0],kickGain:.35,snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],snareGain:.08,hat:[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1],hatGain:.02,mel:!0,melDensity:.16,melGain:.035,melType:`kalimba`},boss:{bpm:138,root:45,chords:[[0,7,12,15],[0,7,12,15],[-4,3,8,12],[-2,5,10,14]],scale:[0,2,3,5,7,8,11,12],pad:{gain:.03,cutoff:1400},arp:[0,1,2,1,0,1,2,3,0,1,2,1,4,3,2,1],arpGain:.04,arpType:`marimba`,bass:[0,Q,0,Q,0,Q,0,12,0,Q,0,Q,0,Q,10,Q],bassGain:.26,bassLen:1.5,kick:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0],kickGain:.5,snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],snareGain:.16,hat:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],hatGain:.02},ending:{bpm:88,root:50,chords:[[0,7,12,16],[7,11,14,19],[9,12,16,21],[5,9,12,17]],scale:[0,2,4,7,9,12,14,16],pad:{gain:.04,cutoff:1600,attack:1},arp:[0,Q,1,Q,2,Q,3,Q,4,Q,3,Q,2,Q,1,Q],arpGain:.07,arpType:`bell`,bass:[0,Q,Q,Q,Q,Q,Q,Q,7,Q,Q,Q,Q,Q,Q,Q],bassGain:.22,bassLen:6,kick:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],kickGain:.3,mel:!0,melDensity:.22,melGain:.05,melType:`kalimba`}},Vu=`
attribute float aSize;
attribute vec4 aColor;
attribute float aSpin;
varying vec4 vColor;
varying float vSpin;
uniform float uScale;
void main() {
  vColor = aColor;
  vSpin = aSpin;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
}`,Hu=`
varying vec4 vColor;
varying float vSpin;
uniform float uSoft;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r;
  if (vSpin > 0.5) {
    // chunky leaf/shard shape
    float c = cos(vSpin * 3.0), s = sin(vSpin * 3.0);
    vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
    r = abs(q.x) * 1.6 + abs(q.y) * 0.8;
  } else r = length(p);
  float a = smoothstep(1.0, 1.0 - uSoft, r);
  if (a * vColor.a < 0.01) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Uu=class{constructor(e=3e3,t=!1){this.max=e,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.col=new Float32Array(e*4),this.drag=new Float32Array(e),this.grav=new Float32Array(e),this.spin=new Float32Array(e),this.alpha0=new Float32Array(e);let n=new dr;this.posAttr=new Xn(new Float32Array(e*3),3).setUsage(He),this.sizeAttr=new Xn(new Float32Array(e),1).setUsage(He),this.colAttr=new Xn(new Float32Array(e*4),4).setUsage(He),this.spinAttr=new Xn(new Float32Array(e),1).setUsage(He),n.setAttribute(`position`,this.posAttr),n.setAttribute(`aSize`,this.sizeAttr),n.setAttribute(`aColor`,this.colAttr),n.setAttribute(`aSpin`,this.spinAttr),n.boundingSphere=new rr(new U,1e5),this.material=new qi({vertexShader:Vu,fragmentShader:Hu,uniforms:{uScale:{value:400},uSoft:{value:t?1:.55}},transparent:!0,depthWrite:!1,blending:t?2:1}),this.points=new xi(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=t?20:10}emit(e,t,n,r,i,a,o){if(this.count>=this.max)return;let s=this.count++;this.p[s*3]=e,this.p[s*3+1]=t,this.p[s*3+2]=n,this.v[s*3]=r,this.v[s*3+1]=i,this.v[s*3+2]=a,this.life[s]=0,this.maxLife[s]=o.life??1,this.size0[s]=o.size??.3,this.size1[s]=o.size1??this.size0[s];let c=o.color;this.col[s*4]=c.r,this.col[s*4+1]=c.g,this.col[s*4+2]=c.b,this.alpha0[s]=o.alpha??1,this.drag[s]=o.drag??1.5,this.grav[s]=o.gravity??0,this.spin[s]=o.spin??0}update(e,t){let n=this.count;for(let r=0;r<n;r++){if(this.life[r]+=e,this.life[r]>=this.maxLife[r]){n--,this.copy(n,r),r--;continue}let i=Math.exp(-this.drag[r]*e);this.v[r*3]*=i,this.v[r*3+1]=this.v[r*3+1]*i-this.grav[r]*e,this.v[r*3+2]*=i;let a=this.p[r*3]+this.v[r*3]*e,o=this.p[r*3+1]+this.v[r*3+1]*e,s=this.p[r*3+2]+this.v[r*3+2]*e;this.grav[r]>0&&t&&t.sample(a,o,s)<0?(this.v[r*3]*=.4,this.v[r*3+1]*=-.25,this.v[r*3+2]*=.4):(this.p[r*3]=a,this.p[r*3+1]=o,this.p[r*3+2]=s),this.spin[r]>0&&(this.spin[r]+=e*2)}this.count=n;let r=this.posAttr.array,i=this.sizeAttr.array,a=this.colAttr.array,o=this.spinAttr.array;for(let e=0;e<n;e++){let t=this.life[e]/this.maxLife[e];r[e*3]=this.p[e*3],r[e*3+1]=this.p[e*3+1],r[e*3+2]=this.p[e*3+2],i[e]=this.size0[e]+(this.size1[e]-this.size0[e])*t,a[e*4]=this.col[e*4],a[e*4+1]=this.col[e*4+1],a[e*4+2]=this.col[e*4+2];let n=Math.min(1,t*8);a[e*4+3]=this.alpha0[e]*n*(1-t)*(1-t*.3),o[e]=this.spin[e]}this.points.geometry.setDrawRange(0,n),this.posAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.spinAttr.needsUpdate=!0,this.posAttr.clearUpdateRanges(),this.posAttr.addUpdateRange(0,n*3),this.sizeAttr.clearUpdateRanges(),this.sizeAttr.addUpdateRange(0,n),this.colAttr.clearUpdateRanges(),this.colAttr.addUpdateRange(0,n*4),this.spinAttr.clearUpdateRanges(),this.spinAttr.addUpdateRange(0,n)}copy(e,t){if(e!==t){for(let n=0;n<3;n++)this.p[t*3+n]=this.p[e*3+n],this.v[t*3+n]=this.v[e*3+n];for(let n=0;n<4;n++)this.col[t*4+n]=this.col[e*4+n];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.size0[t]=this.size0[e],this.size1[t]=this.size1[e],this.drag[t]=this.drag[e],this.grav[t]=this.grav[e],this.spin[t]=this.spin[e],this.alpha0[t]=this.alpha0[e]}}clear(){this.count=0}},Wu=new Nt,Gu=new ut,Ku=new U,qu=new U,Ju=new Ut,Yu=new G;function Xu(e){let t=new Ni(.5,0),n=t.attributes.position,r=e,i=()=>(r=r*16807%2147483647)/2147483647,a=new Map;for(let e=0;e<n.count;e++){let t=`${n.getX(e).toFixed(3)},${n.getY(e).toFixed(3)},${n.getZ(e).toFixed(3)}`;a.has(t)||a.set(t,.7+i()*.5);let r=a.get(t);n.setXYZ(e,n.getX(e)*r,n.getY(e)*r*.8,n.getZ(e)*r)}return t.computeVertexNormals(),t}var Zu=class{constructor(e,t){this.scene=e,this.game=t,this.dust=new Uu(2500,!1),this.glow=new Uu(2500,!0),e.add(this.dust.points,this.glow.points),this.maxDebris=260;let n=Xu(11),r=new Yi({roughness:.92,metalness:0,flatShading:!0});this.debrisMesh=new di(n,r,this.maxDebris),this.debrisMesh.instanceMatrix.setUsage(He),this.debrisMesh.castShadow=!0,this.debrisMesh.frustumCulled=!1,this.debrisMesh.count=0,this.debrisMesh.setColorAt(0,new G(1,1,1)),e.add(this.debrisMesh),this.debris=[];let i=new Pi(.3,0);i.scale(.6,1.4,.6),this.shardMat=new Yi({color:16777215,emissive:16777215,emissiveIntensity:1.2,roughness:.2,metalness:.1}),this.shardMesh=new di(i,this.shardMat,120),this.shardMesh.instanceMatrix.setUsage(He),this.shardMesh.count=0,this.shardMesh.frustumCulled=!1,this.shardMesh.setColorAt(0,new G(1,1,1)),e.add(this.shardMesh),this.shards=[],this.rings=[];let a=new Ii(.82,1,64,1);a.rotateX(-Math.PI/2);for(let t=0;t<8;t++){let t=new K(a,new Hr({color:16771520,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));t.visible=!1,t.renderOrder=30,e.add(t),this.rings.push({mesh:t,t:1,dur:.4,r:3})}this.flashes=[];let o=new Li(1,16,12);for(let t=0;t<6;t++){let t=new K(o,new Hr({color:16773584,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.visible=!1,e.add(t),this.flashes.push({mesh:t,t:1,dur:.15,r:1})}this.impactLight=new Pa(16765594,0,6,2),e.add(this.impactLight),this.lightT=0}puff(e,t,n){let r=n.color;for(let i=0;i<t;i++){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i),o=(n.speed??3)*(.3+Math.random()*.7),s=Math.cos(t)*a*o,c=i*o+(n.up??0),l=Math.sin(t)*a*o;n.dir&&(s+=n.dir.x*(n.dirSpeed??0),c+=n.dir.y*(n.dirSpeed??0),l+=n.dir.z*(n.dirSpeed??0));let u=n.spread??.3;Yu.copy(r).multiplyScalar(.8+Math.random()*.4),(n.additive?this.glow:this.dust).emit(e.x+(Math.random()-.5)*u,e.y+(Math.random()-.5)*u,e.z+(Math.random()-.5)*u,s,c,l,{life:(n.life??1)*(.6+Math.random()*.6),size:n.size??.5,size1:n.size1??(n.size??.5)*2.5,color:Yu,alpha:n.alpha??.8,drag:n.drag??2.5,gravity:n.gravity??0,spin:n.spin?.6+Math.random():0})}}spawnDebris(e,t,n,r,i=6,a=1){for(let o=0;o<n;o++){this.debris.length>=this.maxDebris&&this.debris.shift();let n=Math.random()*Math.PI*2,o=2+Math.random()*5,s=i*(.4+Math.random()*.8);this.debris.push({p:new U(e.x+(Math.random()-.5)*.8,e.y+(Math.random()-.5)*.8,e.z+(Math.random()-.5)*.8),v:new U(Math.cos(n)*s*.6+t.x*s,o+t.y*s*.5,Math.sin(n)*s*.6+t.z*s),r:new U(Math.random()*6,Math.random()*6,Math.random()*6),w:new U((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),s:(.1+Math.random()**2*.32)*a,life:0,max:1.6+Math.random()*1.4,c:r.clone().multiplyScalar(.45+Math.random()*.35),rest:!1})}}spawnShards(e,t,n){for(let r=0;r<t;r++){this.shards.length>=120&&this.shards.shift();let t=Math.random()*Math.PI*2,r=3+Math.random()*6;this.shards.push({p:e.clone(),v:new U(Math.cos(t)*r,3+Math.random()*6,Math.sin(t)*r),r:new U(Math.random()*6,Math.random()*6,Math.random()*6),w:new U((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),s:.3+Math.random()*.5,life:0,max:1+Math.random()*.8,c:n.clone()})}}ring(e,t,n=.45,r=16771520,i=.9){let a=this.rings.find(e=>e.t>=1)||this.rings[0];a.mesh.position.copy(e),a.mesh.position.y+=.15,a.mesh.material.color.set(r),a.t=0,a.dur=n,a.r=t,a.op=i,a.mesh.visible=!0}flash(e,t,n=.12,r=16773584){let i=this.flashes.find(e=>e.t>=1)||this.flashes[0];i.mesh.position.copy(e),i.mesh.material.color.set(r),i.t=0,i.dur=n,i.r=t,i.mesh.visible=!0}light(e,t=40,n=16765594){this.impactLight.position.copy(e),this.impactLight.color.set(n),this.impactLight.intensity=t,this.lightT=.18}terrainImpact(e,t,n,r=1,i=!1){let a=0,o=-1,s=0;for(let e=0;e<n.length;e++)a+=n[e],n[e]>s&&(s=n[e],o=e);let c=this.game.world?.theme,l=e=>{let t=yu[e].color;return new G(t[0],t[1],t[2])},u=o>=0?l(o).lerp(new G(.62,.56,.48),.35):new G(.5,.46,.42),d=Math.min(40,Math.round(a*.28*r)+(a>0?6:0));if(a>0){for(let i=0;i<n.length;i++){if(!n[i])continue;let o=Math.max(1,Math.round(d*n[i]/a));i===Z.CRYSTAL?this.spawnShards(e,Math.min(12,o),new G(c?c.crystal:7336191)):this.spawnDebris(e,t.clone().multiplyScalar(-.3),o,l(i),5.5*r,i===Z.DIRT?.8:1.1)}this.puff(e,Math.min(34,8+a*.2),{color:u,speed:4.5*r,size:.6,size1:2.4,life:1.2,alpha:.32,drag:2.8,up:.6}),this.puff(e,14,{color:new G(1,.85,.55),speed:9,size:.12,size1:.02,life:.35,additive:!0,alpha:1,drag:3,gravity:9}),n[Z.GOLD]>0&&this.puff(e,18,{color:new G(1,.8,.3),speed:6,size:.18,size1:.05,life:.8,additive:!0,gravity:6}),n[Z.CRYSTAL]>0&&this.puff(e,22,{color:new G(c?c.crystal:7336191),speed:7,size:.2,size1:.04,life:.9,additive:!0,gravity:3}),n[Z.DIRT]>0&&c&&c.mossAmt>.3&&this.puff(e,8,{color:new G(.35,.6,.2),speed:4,size:.22,size1:.18,life:1.6,gravity:2.5,spin:!0,alpha:.95})}i&&this.puff(e,22,{color:new G(1,.75,.35),speed:10,size:.14,size1:.02,life:.4,additive:!0,gravity:12,alpha:1}),this.flash(e,.6*r,.08),this.light(e,12*r)}update(e,t){this.dust.update(e,t),this.glow.update(e,t);let n=this.debris;for(let r=n.length-1;r>=0;r--){let i=n[r];if(i.life+=e,i.life>i.max)n.splice(r,1);else if(!i.rest){i.v.y-=22*e;let n=i.p.x+i.v.x*e,r=i.p.y+i.v.y*e,a=i.p.z+i.v.z*e,o=i.s*.45;if(t.sample(n,r,a)<o){let e=t.gradient(n,r,a,{x:0,y:0,z:0}),o=i.v.x*e.x+i.v.y*e.y+i.v.z*e.z;o<0&&(i.v.x-=1.5*o*e.x,i.v.y-=1.5*o*e.y,i.v.z-=1.5*o*e.z),i.v.multiplyScalar(.55),i.w.multiplyScalar(.6),i.v.lengthSq()<.6&&(i.rest=!0)}else i.p.set(n,r,a);i.r.x+=i.w.x*e,i.r.y+=i.w.y*e,i.r.z+=i.w.z*e}}let r=.75;for(let e=0;e<n.length;e++){let t=n[e],i=t.life/t.max,a=t.s*(i>r?1-(i-r)/.25:1)*Math.min(1,t.life*12);Gu.setFromEuler(Ju.set(t.r.x,t.r.y,t.r.z)),Wu.compose(t.p,Gu,Ku.set(a,a,a)),this.debrisMesh.setMatrixAt(e,Wu),this.debrisMesh.setColorAt(e,t.c)}this.debrisMesh.count=n.length,this.debrisMesh.instanceMatrix.needsUpdate=!0,this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0);let i=this.shards;for(let n=i.length-1;n>=0;n--){let r=i[n];r.life+=e,r.life>r.max?i.splice(n,1):(r.v.y-=16*e,qu.copy(r.p).addScaledVector(r.v,e),t.sample(qu.x,qu.y,qu.z)<.1?r.v.multiplyScalar(-.35):r.p.copy(qu),r.r.addScaledVector(r.w,e))}for(let e=0;e<i.length;e++){let t=i[e],n=t.life/t.max,r=t.s*(1-n*n);Gu.setFromEuler(Ju.set(t.r.x,t.r.y,t.r.z)),Wu.compose(t.p,Gu,Ku.set(r,r,r)),this.shardMesh.setMatrixAt(e,Wu),this.shardMesh.setColorAt(e,t.c)}this.shardMesh.count=i.length,this.shardMesh.instanceMatrix.needsUpdate=!0,this.shardMesh.instanceColor&&(this.shardMesh.instanceColor.needsUpdate=!0);for(let t of this.rings){if(t.t>=1)continue;t.t+=e/t.dur;let n=1-(1-Math.min(1,t.t))**3,r=.3+t.r*n;t.mesh.scale.set(r,1,r),t.mesh.material.opacity=(1-t.t)*t.op,t.t>=1&&(t.mesh.visible=!1)}for(let t of this.flashes){if(t.t>=1)continue;t.t+=e/t.dur;let n=t.r*(.5+t.t);t.mesh.scale.setScalar(n),t.mesh.material.opacity=(1-t.t)*.45,t.t>=1&&(t.mesh.visible=!1)}this.lightT>0&&(this.lightT-=e,this.impactLight.intensity*=Math.exp(-e*14),this.lightT<=0&&(this.impactLight.intensity=0))}clear(){this.dust.clear(),this.glow.clear(),this.debris.length=0,this.shards.length=0,this.debrisMesh.count=0,this.shardMesh.count=0}},Qu=`<svg viewBox="0 0 34 31" class="heart"><path d="M17 29 C7 21 2 15.5 2 9.5 C2 5 5.5 2 9.6 2 C12.8 2 15.3 3.8 17 6.6 C18.7 3.8 21.2 2 24.4 2 C28.5 2 32 5 32 9.5 C32 15.5 27 21 17 29Z" fill="#ff5a6e" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><ellipse cx="10.5" cy="9" rx="3.5" ry="2.4" fill="rgba(255,255,255,0.55)" transform="rotate(-30 10.5 9)"/></svg>`,$u=`<svg viewBox="0 0 28 28" class="ico"><path d="M5 18 L9 9 L19 7 L24 15 L20 22 L9 23 Z" fill="#ffc23d" stroke="#7a4a00" stroke-width="2" stroke-linejoin="round"/><path d="M9 9 L13 15 L19 7 M13 15 L20 22 M13 15 L5 18" stroke="#b07a10" stroke-width="1.4" fill="none"/></svg>`,ed=`<svg viewBox="0 0 28 28" class="ico"><path d="M14 2 L21 14 L14 26 L7 14 Z" fill="#ffd36b" stroke="#a0560a" stroke-width="2" stroke-linejoin="round"/><path d="M14 2 L14 26 M7 14 L21 14" stroke="#ffa21f" stroke-width="1.4"/><circle cx="14" cy="14" r="12.5" fill="none" stroke="rgba(255,240,180,0.7)" stroke-width="1.2"/></svg>`,$=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.innerHTML=n),r},td=class{constructor(e){this.game=e;let t=this.root=document.getElementById(`ui`);this.hud=$(`div`,`hud off`),t.appendChild(this.hud);let n=$(`div`,`hud-tl`);this.heartsEl=$(`div`,`hearts`);let r=$(`div`,`counters`);this.goldEl=$(`div`,`counter`,`${$u}<span>0</span>`),this.sunEl=$(`div`,`counter`,`${ed}<span>0</span><small>/15</small>`),r.append(this.goldEl,this.sunEl),n.append(this.heartsEl,r);let i=$(`div`,`hud-tr`);this.areaEl=$(`div`,`area-name`),this.objEl=$(`div`,`objective`,`<span class="dot"></span><span class="t"></span>`),i.append(this.areaEl,$(`br`),this.objEl),this.toasts=$(`div`,`toasts`),this.signEl=$(`div`,`sign hidden`),this.promptEl=$(`div`,`prompt hidden`),this.ctrlEl=$(`div`,`controls-hint`),this.bossEl=$(`div`,`boss hidden`,`<div class="name"></div><div class="bar"><div class="fill"></div></div>`),this.wpEl=$(`div`,`waypoint hidden`,`<div class="wp-arrow"></div><div class="wp-dia"></div><div class="wp-dist"></div>`),this.vignette=$(`div`,`vignette`),this.hud.append(n,i,this.toasts,this.signEl,this.promptEl,this.ctrlEl,this.bossEl,this.wpEl,this.vignette),this.pings=[],this.areaCardEl=$(`div`,`area-card`,`<div class="no"></div><div class="line"></div><div class="t"></div><div class="s"></div>`),this.fadeEl=$(`div`,`fade`),this.screenEl=$(`div`,`screen-host`),t.append(this.areaCardEl,this.screenEl,this.fadeEl),this.signSrc=null,this.menuButtons=[],this.menuSel=0,this.lastHearts=-1,this.setControlsHint(),this.vecTmp=new U,addEventListener(`keydown`,e=>this.menuKey(e))}show(e){this.hud.classList.toggle(`off`,!e)}hearts(e,t){let n=e+`/`+t;if(n===this.lastHearts)return;let r=this.lastHeartsN??e;this.lastHearts=n,this.lastHeartsN=e,this.heartsEl.innerHTML=``;for(let n=0;n<t;n++){let t=$(`span`,``,Qu).firstChild;n>=e&&t.classList.add(`empty`),n===e-1&&e>r&&t.classList.add(`pulse`),this.heartsEl.appendChild(t)}}pulseHearts(){this.lastHearts=-1}gold(e){this.goldEl.querySelector(`span`).textContent=e,this.goldEl.classList.remove(`bump`),this.goldEl.offsetWidth,this.goldEl.classList.add(`bump`)}sunstone(e){this.sunEl.querySelector(`span`).textContent=e,this.sunEl.classList.remove(`bump`),this.sunEl.offsetWidth,this.sunEl.classList.add(`bump`)}area(e,t){this.areaEl.innerHTML=`${e}<small>${t}</small>`}objective(e,t=!0){this.objText!==e&&(this.objText=e,this.objEl.querySelector(`.t`).textContent=e,this.objEl.classList.toggle(`hidden`,!e),t&&(this.objEl.classList.remove(`flash`),this.objEl.offsetWidth,this.objEl.classList.add(`flash`)))}toast(e,t=`info`,n=2600){if([...this.toasts.children].some(t=>t.textContent===e))return;let r=$(`div`,`toast `+t,e);for(this.toasts.appendChild(r);this.toasts.children.length>3;)this.toasts.firstChild.remove();setTimeout(()=>{r.classList.add(`out`),setTimeout(()=>r.remove(),400)},n)}showSign(e,t){this.signSrc=t,this.signEl.textContent!==e&&(this.signEl.textContent=e),this.signEl.classList.remove(`hidden`)}hideSign(e){this.signSrc===e&&(this.signEl.classList.add(`hidden`),this.signSrc=null)}prompt(e){e?(this.promptEl.innerHTML!==e&&(this.promptEl.innerHTML=e),this.promptEl.classList.remove(`hidden`)):this.promptEl.classList.add(`hidden`)}bossBar(e,t){t==null?this.bossEl.classList.add(`hidden`):(this.bossEl.classList.remove(`hidden`),e&&(this.bossEl.querySelector(`.name`).textContent=e),this.bossEl.querySelector(`.fill`).style.width=Math.max(0,t*100)+`%`)}hideBoss(){this.bossEl.classList.add(`hidden`)}flashDamage(){this.vignette.style.opacity=1,clearTimeout(this.vt),this.vt=setTimeout(()=>this.vignette.style.opacity=0,160)}fade(e){this.fadeEl.classList.toggle(`on`,e)}areaCard(e,t,n,r=3200){let i=this.areaCardEl;i.querySelector(`.no`).textContent=e,i.querySelector(`.t`).textContent=t,i.querySelector(`.s`).textContent=n,i.classList.add(`on`),clearTimeout(this.act),this.act=setTimeout(()=>i.classList.remove(`on`),r)}setControlsHint(){this.ctrlEl.innerHTML=`<kbd>WASD</kbd>移動 <kbd>Space</kbd>ジャンプ <kbd>Shift</kbd>ダッシュ<br>
      <kbd>左クリック</kbd>パンチ（視点の向きで上下に掘る） <kbd>右クリック</kbd>足元を掘る／空中で急降下<br>
      <kbd>Q</kbd>エコー（埋まった宝を探す） <kbd>E</kbd>祠で強化 <kbd>Esc</kbd>メニュー`}dimControls(e){this.ctrlEl.classList.toggle(`dim`,e)}ping(e,t=5){let n=$(`div`,`ping`);this.hud.appendChild(n),this.pings.push({el:n,pos:e.clone(),t})}update(e,t,n){let r=innerWidth,i=innerHeight,a=this.vecTmp;for(let n=this.pings.length-1;n>=0;n--){let o=this.pings[n];if(o.t-=e,o.t<=0){o.el.remove(),this.pings.splice(n,1);continue}a.copy(o.pos).project(t);let s=a.z<1;o.el.style.display=s?`block`:`none`,o.el.style.left=(a.x*.5+.5)*r+`px`,o.el.style.top=(-a.y*.5+.5)*i+`px`}if(!n){this.wpEl.classList.add(`hidden`);return}this.wpEl.classList.remove(`hidden`);let o=n.distanceTo(t.position);a.copy(n).applyMatrix4(t.matrixWorldInverse);let s=a.z>0;a.copy(n).project(t);let c=a.x,l=a.y;s&&(c=-c,l=-l);let u=.9,d=s||Math.abs(c)>u||Math.abs(l)>u;if(d){let e=Math.max(Math.abs(c),Math.abs(l))||1;c=c/e*u,l=l/e*u}let f=(c*.5+.5)*r,p=(-l*.5+.5)*i;this.wpEl.style.left=f+`px`,this.wpEl.style.top=p+`px`;let m=this.wpEl.querySelector(`.wp-arrow`);m.style.display=d?`block`:`none`,d&&(m.style.transform=`rotate(${Math.atan2(c,l)}rad)`),this.wpEl.querySelector(`.wp-dist`).textContent=Math.round(o)+`m`,this.wpEl.style.opacity=o<4?.2:.95}clearScreen(){this.screenEl.innerHTML=``,this.menuButtons=[],this.menuOnBack=null}screenOpen(){return this.screenEl.children.length>0}makeMenu(e,t,n){let r=$(`div`,`menu`);this.menuButtons=[];for(let e of t){let t=$(`button`,`btn`,e.label+(e.sub?`<small>${e.sub}</small>`:``));e.disabled&&(t.disabled=!0),t.addEventListener(`click`,t=>{t.stopPropagation(),this.game.audio.play(`select`),e.action()}),t.addEventListener(`mouseenter`,()=>{this.menuSel=this.menuButtons.indexOf(t),this.refreshSel()}),r.appendChild(t),e.disabled||this.menuButtons.push(t)}return e.appendChild(r),this.menuSel=0,this.menuOnBack=n||null,this.refreshSel(),r}refreshSel(){this.menuButtons.forEach((e,t)=>e.classList.toggle(`sel`,t===this.menuSel))}menuMove(e){this.menuButtons.length&&(this.menuSel=(this.menuSel+e+this.menuButtons.length)%this.menuButtons.length,this.refreshSel(),this.game.audio.play(`select`))}menuActivate(){this.menuButtons[this.menuSel]?.click()}menuKey(e){this.screenOpen()&&(e.code===`ArrowDown`||e.code===`ArrowRight`||e.code===`KeyS`?(this.menuMove(1),e.preventDefault()):e.code===`ArrowUp`||e.code===`ArrowLeft`||e.code===`KeyW`?(this.menuMove(-1),e.preventDefault()):e.code===`Enter`||e.code===`Space`?this.menuButtons.length&&(this.menuActivate(),e.preventDefault()):e.code===`Escape`&&this.menuOnBack&&(this.menuOnBack(),e.preventDefault()))}showTitle(e,t){this.clearScreen();let n=$(`div`,`screen`),r=$(`div`,`title-wrap`);r.appendChild($(`div`,`logo`,`GORO DIG<span class="l2">地底のこぶし</span>`)),r.appendChild($(`div`,`logo-sub`,`掘って、殴って、地底を照らせ。`));let i=[];e&&i.push({label:`つづきから`,action:t.cont}),i.push({label:`はじめから`,sub:e?`セーブは上書き`:``,action:t.start}),i.push({label:`操作説明`,action:t.help}),i.push({label:`設定`,action:t.settings}),this.makeMenu(r,i),n.appendChild(r),n.appendChild($(`div`,`title-foot`,`オリジナル作品 / 全アセット手続き生成<br>マウス＋キーボード / ゲームパッド対応`)),this.screenEl.appendChild(n)}showLoading(e,t){this.clearScreen();let n=$(`div`,`loading`);n.innerHTML=`<div class="lt">${e}</div><div class="bar"><div></div></div><div class="msg">準備中…</div><div class="tip">${t||``}</div>`,this.screenEl.appendChild(n),this.loadingEl=n}setLoading(e,t){this.loadingEl&&(this.loadingEl.querySelector(`.bar div`).style.width=Math.round(e*100)+`%`,t&&(this.loadingEl.querySelector(`.msg`).textContent=t))}showStory(e,t){this.clearScreen();let n=$(`div`,`screen dim`),r=$(`div`,`story`);n.appendChild(r),this.screenEl.appendChild(n);let i=0,a=()=>{i>=e.length?(this.clearScreen(),t()):r.innerHTML=e[i++]+`<div class="cont">クリック / Enter で進む</div>`};n.addEventListener(`click`,a),this.menuButtons=[{click:a,classList:{toggle(){}}}],this.menuOnBack=()=>{i=e.length,a()},a()}showHelp(e){this.clearScreen();let t=$(`div`,`screen dim`),n=$(`div`,`panel`);n.innerHTML=`<h2>操作説明</h2>
      <div class="ctrl-grid">
        <div><span>移動</span><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / 左スティック</span></div>
        <div><span>カメラ</span><span>マウス / 右スティック</span></div>
        <div><span>ジャンプ（長押しで高く）</span><span><kbd>Space</kbd> / Ⓐ</span></div>
        <div><span>ダッシュ（空中でも1回）</span><span><kbd>Shift</kbd> / RB</span></div>
        <div><span>パンチ（3連コンボ）</span><span><kbd>左クリック</kbd> <kbd>F</kbd> / Ⓧ</span></div>
        <div><span>足元掘り / 急降下パンチ</span><span><kbd>右クリック</kbd> <kbd>X</kbd> / Ⓑ</span></div>
        <div><span>エコー（埋まった宝を探知）</span><span><kbd>Q</kbd> / Ⓨ</span></div>
        <div><span>祠で強化 / 調べる</span><span><kbd>E</kbd> / LB</span></div>
        <div><span>カメラを背後へ</span><span><kbd>R</kbd> / スティック押し込み</span></div>
        <div><span>メニュー</span><span><kbd>Esc</kbd> / START</span></div>
      </div>
      <h3>地形を壊して進め</h3>
      <p>パンチは<b>カメラの向き</b>に飛びます。下を見ながら殴れば斜め下へ、上を見れば上へ掘れます。土はよく削れ、岩は少し硬く、黒い硬岩は特別な籠手が必要。光る文様の古代石と岩盤は壊せません。</p>
      <p>壁に向かってジャンプすると<b>壁にしがみついて登れます</b>。掘りすぎて穴に落ちても、壁を登って脱出できます。</p>
      <p>キラキラ光る地面の下には何かが埋まっています。<kbd>Q</kbd>のエコーで太陽石の位置を探りましょう。</p>`,this.makeMenu(n,[{label:`戻る`,action:e}],e),t.appendChild(n),this.screenEl.appendChild(t)}showSettings(e,t,n){this.clearScreen();let r=e.settings,i=$(`div`,`screen dim`),a=$(`div`,`panel`);a.innerHTML=`<h2>設定</h2>
      <div class="row"><span>マウス感度</span><input type="range" id="s-sens" min="0.3" max="2.5" step="0.05" value="${r.sens}"></div>
      <div class="row"><span>カメラ上下反転</span><input type="checkbox" id="s-inv" ${r.invertY?`checked`:``}></div>
      <div class="row"><span>BGM 音量</span><input type="range" id="s-music" min="0" max="1" step="0.05" value="${r.music}"></div>
      <div class="row"><span>効果音 音量</span><input type="range" id="s-sfx" min="0" max="1" step="0.05" value="${r.sfx}"></div>
      <div class="row"><span>画面の揺れ</span><input type="range" id="s-shake" min="0" max="1.5" step="0.05" value="${r.shake}"></div>
      <div class="row"><span>画質</span><select id="s-q">
        <option value="auto" ${r.quality===`auto`?`selected`:``}>自動（推奨）</option>
        <option value="high" ${r.quality===`high`?`selected`:``}>高</option>
        <option value="medium" ${r.quality===`medium`?`selected`:``}>中</option>
        <option value="low" ${r.quality===`low`?`selected`:``}>低</option></select></div>`;let o=(n,i,o=parseFloat)=>{let s=a.querySelector(`#`+n);s.addEventListener(`input`,()=>{r[i]=s.type===`checkbox`?s.checked:o(s.value),e.writeSettings(),t()}),s.addEventListener(`change`,()=>{r[i]=s.type===`checkbox`?s.checked:o(s.value),e.writeSettings(),t()})};o(`s-sens`,`sens`),o(`s-inv`,`invertY`),o(`s-music`,`music`),o(`s-sfx`,`sfx`),o(`s-shake`,`shake`),o(`s-q`,`quality`,e=>e),this.makeMenu(a,[{label:`戻る`,action:n}],n),i.appendChild(a),this.screenEl.appendChild(i)}showPause(e){this.clearScreen();let t=$(`div`,`screen dim`),n=$(`div`,`panel`);n.style.width=`min(460px, 92vw)`,n.innerHTML=`<h2>ポーズ</h2>`;let r=this.makeMenu(n,[{label:`ゲームに戻る`,action:e.resume},{label:`操作説明`,action:e.help},{label:`設定`,action:e.settings},{label:`チェックポイントからやり直す`,action:e.retry},{label:`タイトルへ戻る`,sub:`進行は自動セーブ済み`,action:e.title}],e.resume);r.style.flexDirection=`column`,t.appendChild(n),this.screenEl.appendChild(t)}showShop(e,t,n,r){this.clearScreen();let i=$(`div`,`screen dim`),a=$(`div`,`panel`);a.innerHTML=`<h2>太陽の祠</h2><p>集めた金をお供えして力を授かろう。　所持金：<b style="color:var(--gold)">${e.data.gold}</b></p>`;let o=t.map(t=>{let r=$(`div`,`shop-item`);return r.innerHTML=`<div><div class="nm">${t.name}<span class="lv">${t.lvText}</span></div><div class="ds">${t.desc}</div></div>`,a.appendChild(r),{label:t.maxed?`最大`:`${t.cost} 金で強化`,action:()=>n(t),disabled:t.maxed||e.data.gold<t.cost,row:r}}),s=$(`div`,``);a.appendChild(s),this.makeMenu(s,[...o.map(e=>({...e,label:e.row.querySelector(`.nm`).firstChild.textContent+`：`+e.label})),{label:`閉じる`,action:r}],r),s.querySelector(`.menu`).style.flexDirection=`column`,i.appendChild(a),this.screenEl.appendChild(i)}showDeath(e){this.clearScreen();let t=$(`div`,`screen dim`),n=$(`div`,`panel`);n.style.width=`min(460px, 92vw)`,n.style.textAlign=`center`,n.innerHTML=`<h2>ゴロはたおれた…</h2><p>最後に灯した祠からやり直します。<br>掘った地形と集めた宝はそのままです。</p>`,this.makeMenu(n,[{label:`もう一度！`,action:e}]),t.appendChild(n),this.screenEl.appendChild(t)}showEnding(e,t){this.clearScreen();let n=$(`div`,`screen dim`),r=$(`div`,`panel credits`);r.innerHTML=`<div class="big">THE END</div>
      <p>太陽核に光が戻り、地底の世界は再び温かな光に包まれた。<br>ゴロの拳が掘った道は、これから多くの仲間をつなぐだろう。</p>
      <div class="stats">
        <span>クリアタイム</span><b>${e.time}</b>
        <span>太陽石</span><b>${e.sun} / 15</b>
        <span>集めた金</span><b>${e.gold}</b>
        <span>倒した敵</span><b>${e.kills}</b>
        <span>掘った地形</span><b>${e.dug} ボクセル</b>
        <span>倒れた回数</span><b>${e.deaths}</b>
      </div>
      <div class="rank">${e.rank}</div>
      <p style="opacity:.75;font-size:14px">GORO DIG — 地底のこぶし<br>企画・プログラム・モデル・サウンド：すべてコードで手続き生成（AI制作）<br>Thanks for playing!</p>`,this.makeMenu(r,[{label:`タイトルへ`,action:t}]),n.appendChild(r),this.screenEl.appendChild(n)}clickHint(e){e&&!this.ch&&(this.ch=$(`div`,`click-hint`,`クリックしてカメラ操作を開始`),this.hud.appendChild(this.ch)),!e&&this.ch&&(this.ch.remove(),this.ch=null)}},nd=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],rd=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],id=[[0,1,0],[.7,.7,0],[-.7,.7,0],[0,.7,.7],[0,.7,-.7]],ad=null;function od(e){let t=e+1;if(!ad||ad.N!==t){let e=t*t*t;ad={N:t,vidx:new Int32Array(t*t*t),pos:new Float32Array(e*3),nrm:new Float32Array(e*3),wa:new Float32Array(e*4),wb:new Float32Array(e*4),ao:new Float32Array(e),idx:new Uint32Array(e*18)}}return ad}var sd={x:0,y:0,z:0};function cd(e,t,n,r,i,a=!1){let{N:o,vidx:s,pos:c,nrm:l,wa:u,wb:d,ao:f,idx:p}=od(i),{nx:m,ny:h,nz:g,f:_,m:v,s:y,sxy:b}=e,x=t*i,S=n*i,C=r*i;s.fill(-1);let w=0,T=new Float32Array(8),E=new Uint8Array(8),D=new Float32Array(8);for(let t=0;t<o;t++){let n=C-1+t;if(!(n<0||n>=g-1))for(let r=0;r<o;r++){let i=S-1+r;if(!(i<0||i>=h-1))for(let p=0;p<o;p++){let h=x-1+p;if(h<0||h>=m-1)continue;let g=h+i*m+n*b,S=0;for(let e=0;e<8;e++){let t=nd[e],n=g+t[0]+t[1]*m+t[2]*b,r=_[n];T[e]=r,E[e]=v[n],r<0&&(S|=1<<e)}if(S===0||S===255)continue;let C=0,O=0,k=0,A=0;for(let e=0;e<12;e++){let t=rd[e][0],n=rd[e][1];if((S>>t&1)==(S>>n&1))continue;let r=T[t]/(T[t]-T[n]),i=nd[t],a=nd[n];C+=i[0]+(a[0]-i[0])*r,O+=i[1]+(a[1]-i[1])*r,k+=i[2]+(a[2]-i[2])*r,A++}C/=A,O/=A,k/=A;let j=(h+C)*y,M=(i+O)*y,ee=(n+k)*y,N=w++;s[p+r*o+t*o*o]=N,c[N*3]=j,c[N*3+1]=M,c[N*3+2]=ee,e.gradient(j,M,ee,sd,y*.5),l[N*3]=sd.x,l[N*3+1]=sd.y,l[N*3+2]=sd.z,D.fill(0);let P=0;for(let e=0;e<8;e++){if(T[e]>=.05)continue;let t=nd[e],n=(t[0]?C:1-C)*(t[1]?O:1-O)*(t[2]?k:1-k)+.02;D[E[e]]+=n,P+=n}P<=0&&(D[E[0]]=1,P=1);for(let e=0;e<4;e++)u[N*4+e]=D[e]/P,d[N*4+e]=D[e+4]/P;let F=0;for(let t=1;t<=3;t++){let n=t*.55,r=e.sample(j+sd.x*n,M+sd.y*n,ee+sd.z*n);F+=Math.max(0,n-r)/n*(1/t)}let te=a?id.length*.75:0;for(let t=0;!a&&t<id.length;t++){let n=id[t],r=n[0]+sd.x,i=n[1]+sd.y,a=n[2]+sd.z,o=Math.hypot(r,i,a)||1,s=e.sample(j+r/o*3,M+i/o*3,ee+a/o*3);te+=Math.min(1,Math.max(0,s)/2)}te/=id.length,f[N]=Math.max(.12,Math.min(1,(1-F*.42)*(.45+.55*te)))}}}let O=0,k=o*o;for(let e=C;e<C+i&&e<g;e++)for(let t=S;t<S+i&&t<h;t++)for(let n=x;n<x+i&&n<m;n++){let r=n+t*m+e*b,i=_[r]<0,a=n-x+1,l=t-S+1,u=e-C+1;if(n+1<m&&t>0&&e>0&&_[r+1]<0!==i){let e=s[a+(l-1)*o+(u-1)*k],t=s[a+l*o+(u-1)*k],n=s[a+l*o+u*k],r=s[a+(l-1)*o+u*k];e>=0&&t>=0&&n>=0&&r>=0&&(O=ud(p,O,e,t,n,r,i,c))}if(t+1<h&&n>0&&e>0&&_[r+m]<0!==i){let e=s[a-1+l*o+(u-1)*k],t=s[a-1+l*o+u*k],n=s[a+l*o+u*k],r=s[a+l*o+(u-1)*k];e>=0&&t>=0&&n>=0&&r>=0&&(O=ud(p,O,e,t,n,r,i,c))}if(e+1<g&&n>0&&t>0&&_[r+b]<0!==i){let e=s[a-1+(l-1)*o+u*k],t=s[a+(l-1)*o+u*k],n=s[a+l*o+u*k],r=s[a-1+l*o+u*k];e>=0&&t>=0&&n>=0&&r>=0&&(O=ud(p,O,e,t,n,r,i,c))}}return O===0?null:{position:c.slice(0,w*3),normal:l.slice(0,w*3),wa:u.slice(0,w*4),wb:d.slice(0,w*4),ao:f.slice(0,w),index:w<65535?Uint16Array.from(p.subarray(0,O)):p.slice(0,O)}}function ld(e,t,n){let r=e[t*3]-e[n*3],i=e[t*3+1]-e[n*3+1],a=e[t*3+2]-e[n*3+2];return r*r+i*i+a*a}function ud(e,t,n,r,i,a,o,s){if(!o){let e=r;r=a,a=e}return ld(s,n,i)<=ld(s,r,a)?(e[t++]=n,e[t++]=r,e[t++]=i,e[t++]=n,e[t++]=i,e[t++]=a):(e[t++]=n,e[t++]=r,e[t++]=a,e[t++]=r,e[t++]=i,e[t++]=a),t}function dd(e){let t={uDirtA:{value:new G(e.dirtA)},uDirtB:{value:new G(e.dirtB)},uRockA:{value:new G(e.rockA)},uRockB:{value:new G(e.rockB)},uHard:{value:new G(e.hard)},uCrystal:{value:new G(e.crystal)},uGold:{value:new G(e.gold??16761405)},uBrick:{value:new G(e.brick)},uAncient:{value:new G(e.ancient)},uRune:{value:new G(e.rune)},uBedrock:{value:new G(e.bedrock)},uMoss:{value:new G(e.moss)},uMossAmt:{value:e.mossAmt??0},uTime:{value:0},uCutA:{value:new U},uCutB:{value:new U},uCutR:{value:0},uReveal:{value:new Ot(0,0,0,0)}},n=new Yi({color:16777215,roughness:.9,metalness:0});return n.userData.uniforms=t,n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute vec4 wa;
        attribute vec4 wb;
        attribute float ao;
        varying vec4 vWa;
        varying vec4 vWb;
        varying float vAo;
        varying vec3 vWPos;
        varying vec3 vWNrm;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
        vWa = wa; vWb = wb; vAo = ao;
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWNrm = normalize(mat3(modelMatrix) * objectNormal);`),e.vertexShader=e.vertexShader.replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform vec3 uDirtA, uDirtB, uRockA, uRockB, uHard, uCrystal, uGold, uBrick, uAncient, uRune, uBedrock, uMoss;
        uniform float uMossAmt, uTime, uCutR;
        uniform vec3 uCutA, uCutB;
        uniform vec4 uReveal;
        varying vec4 vWa;
        varying vec4 vWb;
        varying float vAo;
        varying vec3 vWPos;
        varying vec3 vWNrm;

        float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
        float vn(vec3 p) {
          vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z);
        }
        float fbm3(vec3 p) { return vn(p) * 0.55 + vn(p * 2.03 + 7.1) * 0.3 + vn(p * 4.1 + 3.3) * 0.15; }
        // cellular noise: returns distance to nearest feature point
        vec2 cell3(vec3 p) {
          vec3 i = floor(p); vec3 f = fract(p);
          float d1 = 8.0, d2 = 8.0;
          for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec3 o = vec3(float(x), float(y), float(z));
            vec3 r = o + vec3(h13(i + o), h13(i + o + 17.0), h13(i + o + 41.0)) - f;
            float d = dot(r, r);
            if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
          }
          return vec2(sqrt(d1), sqrt(d2));
        }
        float bayer4(vec2 p) {
          ivec2 q = ivec2(mod(p, 4.0));
          int i = q.x + q.y * 4;
          int b[16] = int[16](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
          return (float(b[i]) + 0.5) / 16.0;
        }
        `).replace(`#include <color_fragment>`,`#include <color_fragment>
        // --- camera cutaway: dither away terrain between camera and hero ---
        if (uCutR > 0.0) {
          vec3 ab = uCutB - uCutA;
          float t = clamp(dot(vWPos - uCutA, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(vWPos - (uCutA + ab * t));
          float r = uCutR * smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.84, 0.98, t));
          if (d < r) {
            float fade = smoothstep(r, r * 0.55, d);
            if (fade > bayer4(gl_FragCoord.xy)) discard;
          }
        }

        vec3 P = vWPos;
        vec3 Nw = normalize(vWNrm);
        float up = Nw.y;
        vec3 alb = vec3(0.0);
        float rough = 0.0;
        float hgt = 0.0;
        vec3 emi = vec3(0.0);
        float metal = 0.0;
        float n1 = fbm3(P * 1.3);
        float n2 = vn(P * 6.0);

        // DIRT
        if (vWa.x > 0.01) {
          float pebbles = smoothstep(0.62, 0.7, vn(P * 5.5 + 3.0));
          vec3 c = mix(uDirtA, uDirtB, smoothstep(0.25, 0.75, n1));
          c *= 0.85 + 0.3 * n2;
          c = mix(c, uRockA * 0.9, pebbles * 0.6);
          alb += c * vWa.x; rough += 0.95 * vWa.x; hgt += (n2 * 0.4 + pebbles * 0.6) * vWa.x;
        }
        // ROCK (layered strata)
        if (vWa.y > 0.01) {
          float strata = sin(P.y * 3.2 + n1 * 5.0) * 0.5 + 0.5;
          vec2 cc = cell3(P * 0.9);
          float crack = smoothstep(0.035, 0.0, cc.y - cc.x) * smoothstep(0.3, 0.6, vn(P * 0.7));
          vec3 c = mix(uRockA, uRockB, strata * 0.7 + n2 * 0.3);
          c *= 0.85 + 0.25 * n1;
          c *= 1.0 - crack * 0.35;
          alb += c * vWa.y; rough += 0.8 * vWa.y; hgt += (strata * 0.3 + n2 * 0.3 - crack) * vWa.y;
        }
        // HARD ROCK (dark, veined, slightly metallic)
        if (vWa.z > 0.01) {
          vec2 cc = cell3(P * 1.4);
          float facet = cc.x;
          float vein = smoothstep(0.04, 0.0, abs(vn(P * 2.0) - 0.5) - 0.0);
          vec3 c = uHard * (0.75 + 0.5 * facet);
          c += vec3(0.25, 0.45, 0.6) * vein * 0.35;
          alb += c * vWa.z; rough += 0.45 * vWa.z; hgt += (facet * 0.8) * vWa.z; metal += 0.25 * vWa.z;
          emi += uRune * vein * 0.12 * vWa.z;
        }
        // CRYSTAL ORE: clustered angular shards in dark host rock (stretched cells -> blade-like facets)
        if (vWa.w > 0.01) {
          float cluster = smoothstep(0.42, 0.62, vn(P * 0.55 + 3.0));
          vec3 Q = P * vec3(1.6, 0.7, 1.6) + vec3(vn(P * 0.8) * 1.5);
          vec2 cc = cell3(Q);
          float edge = cc.y - cc.x;
          float id = h13(floor(Q * 0.999 + 0.5));
          float gem = cluster * smoothstep(0.05, 0.22, edge) * step(0.35, id);
          vec3 host = mix(uRockA * 0.42, uRockB * 0.38, n2);
          vec3 gc = mix(uCrystal * 0.35, uCrystal * 0.85, smoothstep(0.1, 0.5, edge));
          vec3 c = mix(host, gc, gem);
          float pulse = 0.8 + 0.2 * sin(uTime * 1.3 + id * 6.28);
          alb += c * vWa.w; rough += mix(0.85, 0.12, gem) * vWa.w; hgt += (gem * 0.6 + edge * 0.3) * vWa.w; metal += gem * 0.2 * vWa.w;
          emi += uCrystal * gem * smoothstep(0.15, 0.45, edge) * 0.55 * pulse * vWa.w;
        }
        // GOLD ORE: thin branching veins plus scattered flakes, not polka dots
        if (vWb.x > 0.01) {
          float v1 = abs(fbm3(P * 0.9) - 0.5);
          float v2 = abs(vn(P * 2.3 + 11.0) - 0.5);
          float vein = smoothstep(0.045, 0.0, v1) + smoothstep(0.03, 0.0, v2) * smoothstep(0.12, 0.0, v1) * 0.8;
          vec2 cc = cell3(P * 4.5);
          float flake = smoothstep(0.16, 0.05, cc.x) * step(0.6, h13(floor(P * 4.5)));
          float nug = clamp(vein + flake, 0.0, 1.0);
          vec3 c = mix(uRockA * 0.6 * (0.8 + 0.4 * n2), uGold * 0.9, nug);
          alb += c * vWb.x; rough += mix(0.85, 0.22, nug) * vWb.x; hgt += nug * 0.6 * vWb.x; metal += nug * 0.95 * vWb.x;
          emi += uGold * nug * 0.08 * vWb.x;
        }
        // BRICK (3D masonry lattice)
        if (vWb.y > 0.01) {
          vec3 bs = vec3(1.0, 0.5, 1.0);
          vec3 q = P / bs;
          float row = floor(q.y);
          q.x += mod(row, 2.0) * 0.5;
          q.z += mod(row, 2.0) * 0.5;
          vec3 fq = fract(q);
          vec3 e = min(fq, 1.0 - fq) * bs;
          // mortar shows on faces of the lattice that the surface cuts through
          float ex = e.x, ey = e.y, ez = e.z;
          float m1 = min(ex, min(ey, ez));
          float mortar = smoothstep(0.045, 0.02, m1);
          vec3 bid = floor(q);
          float tint = h13(bid);
          vec3 c = uBrick * (0.78 + 0.35 * tint) * (0.85 + 0.25 * n2);
          c = mix(c, uBrick * 0.35, mortar);
          alb += c * vWb.y; rough += 0.85 * vWb.y; hgt += (1.0 - mortar) * 0.8 * vWb.y + n2 * 0.2 * vWb.y;
        }
        // ANCIENT rune stone (unbreakable): dark bevelled blocks with glowing engraved glyphs
        if (vWb.z > 0.01) {
          vec3 q = P * vec3(0.8, 1.0, 0.8);
          float row = floor(q.y);
          vec3 qq = q + vec3(mod(row, 2.0) * 0.5, 0.0, mod(row, 2.0) * 0.5);
          vec3 cid = floor(qq);
          vec3 fq = fract(qq);
          vec3 e3 = min(fq, 1.0 - fq);
          // only edges of the face plane matter: ignore the axis along the normal
          vec3 an = abs(Nw);
          float ex = an.x > 0.6 ? 1.0 : e3.x, ey = an.y > 0.6 ? 1.0 : e3.y, ez = an.z > 0.6 ? 1.0 : e3.z;
          float edge = min(ex, min(ey, ez));
          float groove = smoothstep(0.025, 0.07, edge);
          float tint = h13(cid);
          vec3 c = uAncient * (0.75 + 0.35 * tint) * (0.85 + 0.3 * n1) * mix(0.35, 1.0, groove);
          // runic glyphs carved into a few wall blocks (never floors)
          vec2 uv = an.x > an.z ? P.zy : P.xy;
          float glyph = 0.0;
          if (an.y < 0.55 && h13(cid + 5.0) > 0.8) {
            vec2 gc = floor(uv * 2.2);
            vec2 gf = fract(uv * 2.2) - 0.5;
            float h1 = h13(vec3(gc, 1.0)), h2 = h13(vec3(gc, 2.0)), h3 = h13(vec3(gc, 3.0));
            float stem = smoothstep(0.05, 0.025, abs(gf.x)) * step(abs(gf.y), 0.36);
            float s1 = h1 > 0.5 ? 1.0 : -1.0;
            float y1 = (h2 - 0.5) * 0.4;
            float b1 = smoothstep(0.05, 0.025, abs((gf.y - y1) - s1 * gf.x)) * step(0.0, gf.x * s1) * step(abs(gf.x), 0.24);
            float b2 = smoothstep(0.05, 0.025, abs((gf.y - y1 + 0.25) + s1 * gf.x)) * step(0.0, -gf.x * s1) * step(abs(gf.x), 0.2) * step(0.5, h3);
            glyph = max(stem, max(b1, b2)) * step(0.25, h3);
          }
          glyph *= groove;
          alb += c * vWb.z; rough += 0.45 * vWb.z; hgt += groove * 0.7 * vWb.z - glyph * 0.3 * vWb.z; metal += 0.15 * vWb.z;
          float pulse = 0.65 + 0.35 * sin(uTime * 1.5 + P.y * 0.6 + P.x * 0.2);
          emi += uRune * glyph * 0.75 * pulse * vWb.z;
        }
        // BEDROCK
        if (vWb.w > 0.01) {
          vec2 cc = cell3(P * 0.6);
          vec3 c = uBedrock * (0.7 + 0.6 * cc.x) * (0.85 + 0.3 * n2);
          alb += c * vWb.w; rough += 0.7 * vWb.w; hgt += cc.x * vWb.w;
        }

        // moss / lichen on upward faces of natural materials
        float natural = vWa.x + vWa.y + vWb.y;
        float mossMask = smoothstep(0.35, 0.8, up + (n1 - 0.5) * 0.9) * uMossAmt * natural;
        mossMask *= smoothstep(0.35, 0.6, vn(P * 0.7) + 0.15) * (0.75 + 0.25 * vn(P * 4.0));
        float mv = vn(P * 0.35 + 11.0);
        vec3 mossC = mix(uMoss * vec3(0.55, 0.62, 0.45), uMoss * vec3(1.15, 1.05, 0.55), mv) * (0.7 + 0.45 * vn(P * 9.0));
        alb = mix(alb, mossC, clamp(mossMask, 0.0, 1.0));
        rough = mix(rough, 1.0, mossMask);
        hgt += mossMask * vn(P * 12.0) * 0.6;

        // echo reveal ring
        if (uReveal.w > 0.0) {
          float dr = abs(length(P - uReveal.xyz) - uReveal.w);
          emi += vec3(0.4, 0.9, 1.0) * smoothstep(0.6, 0.0, dr) * 0.8 * (1.0 - smoothstep(10.0, 30.0, uReveal.w));
        }

        float aoT = vAo * vAo;
        diffuseColor.rgb = alb * mix(0.35, 1.0, aoT);
        float terrainRough = rough;
        float terrainMetal = metal;
        vec3 terrainEmi = emi;
        float terrainHgt = hgt;
        `).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor = terrainRough;`).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
        metalnessFactor = terrainMetal;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          // derivative bump mapping from the procedural height (surface gradient)
          vec3 sp = -vViewPosition;
          vec3 dpx = dFdx(sp), dpy = dFdy(sp);
          float dhx = dFdx(terrainHgt), dhy = dFdy(terrainHgt);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
          float det = dot(dpx, r1);
          float fade = 1.0 - smoothstep(10.0, 28.0, length(sp));
          vec3 grad = sign(det) * (dhx * r1 + dhy * r2) * 0.06 * fade;
          normal = normalize(abs(det) * normal - grad);
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += terrainEmi;`).replace(`#include <aomap_fragment>`,`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= mix(0.25, 1.0, aoT);
        reflectedLight.indirectSpecular *= aoT;`)},n.customProgramCacheKey=()=>`terrain-v1`,n}var fd=class{constructor(e,t){this.vol=e,this.group=new cn,this.group.name=`terrain`,this.material=dd(t),this.cx=Math.ceil((e.nx-1)/16),this.cy=Math.ceil((e.ny-1)/16),this.cz=Math.ceil((e.nz-1)/16),this.meshes=Array(this.cx*this.cy*this.cz).fill(null),this.dirty=new Set,this.triCount=0}key(e,t,n){return e+t*this.cx+n*this.cx*this.cy}buildAll(e){let t=this.cx*this.cy*this.cz,n=0;for(let r=0;r<this.cz;r++)for(let i=0;i<this.cy;i++)for(let a=0;a<this.cx;a++)this.rebuild(a,i,r),n++,e&&n%32==0&&e(n/t)}async buildAllAsync(e){let t=this.cx*this.cy*this.cz,n=0,r=performance.now();for(let i=0;i<this.cz;i++)for(let a=0;a<this.cy;a++)for(let o=0;o<this.cx;o++)this.rebuild(o,a,i),n++,performance.now()-r>30&&(e?.(n/t),await new Promise(e=>setTimeout(e,0)),r=performance.now())}rebuild(e,t,n,r=!1){let i=this.key(e,t,n),a=cd(this.vol,e,t,n,16,r),o=this.meshes[i];if(!a){o&&(this.triCount-=o.geometry.index.count/3,this.group.remove(o),o.geometry.dispose(),this.meshes[i]=null);return}let s=new dr;s.setAttribute(`position`,new Xn(a.position,3)),s.setAttribute(`normal`,new Xn(a.normal,3)),s.setAttribute(`wa`,new Xn(a.wa,4)),s.setAttribute(`wb`,new Xn(a.wb,4)),s.setAttribute(`ao`,new Xn(a.ao,1)),s.setIndex(new Xn(a.index,1)),s.computeBoundingSphere(),s.computeBoundingBox(),o?(this.triCount-=o.geometry.index.count/3,o.geometry.dispose(),o.geometry=s):(o=new K(s,this.material),o.receiveShadow=!0,o.castShadow=!1,o.matrixAutoUpdate=!1,this.meshes[i]=o,this.group.add(o)),this.triCount+=a.index.length/3}markDirty(e,t=!0){let[n,r,i,a,o,s]=e,c=Math.max(0,Math.floor((n-1)/16)),l=Math.min(this.cx-1,Math.floor((a+1)/16)),u=Math.max(0,Math.floor((r-1)/16)),d=Math.min(this.cy-1,Math.floor((o+1)/16)),f=Math.max(0,Math.floor((i-1)/16)),p=Math.min(this.cz-1,Math.floor((s+1)/16));for(let e=f;e<=p;e++)for(let n=u;n<=d;n++)for(let r=c;r<=l;r++)t?this.rebuild(r,n,e,!0):this.dirty.add(this.key(r,n,e))}flushDirty(e=4){let t=performance.now();for(let n of this.dirty){let r=n%this.cx,i=Math.floor(n/this.cx)%this.cy,a=Math.floor(n/(this.cx*this.cy));if(this.rebuild(r,i,a),this.dirty.delete(n),performance.now()-t>e)break}}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.material.dispose()}},pd=new sn,md=new Nt().makeScale(0,0,0),hd=oo.normal_fragment_begin.replace(`normal *= faceDirection;`,``);function gd(e,t=1){let n={uTime:{value:0}};return e.onBeforeCompile=e=>{e.uniforms.uTime=n.uTime,e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,hd),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        {
          vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          float h = max(0.0, position.y);
          float w = sin(uTime * 1.7 + ip.x * 0.6 + ip.z * 0.5) * 0.5 + sin(uTime * 2.9 + ip.x * 1.3) * 0.25;
          transformed.x += w * h * h * ${(.18*t).toFixed(3)};
          transformed.z += cos(uTime * 1.3 + ip.z * 0.7) * h * h * ${(.1*t).toFixed(3)};
        }`)},e.customProgramCacheKey=()=>`wind`+t,e.userData.u=n,e}function _d(){let e=[],t=[],n=[],r=Rl(5);for(let i=0;i<9;i++){let i=r()*Math.PI*2,a=r()*.22,o=Math.cos(i)*a,s=Math.sin(i)*a,c=.35+r()*.45,l=.045+r()*.03,u=(r()-.5)*.5,d=r()*Math.PI,f=Math.cos(d),p=Math.sin(d),m=e.length/3;for(let n=0;n<=3;n++){let r=n/3,a=l*(1-r*.9),d=o+u*r*r*Math.cos(i),m=s+u*r*r*Math.sin(i);e.push(d-f*a,r*c,m-p*a,d+f*a,r*c,m+p*a);let h=[.05+r*.2,.1+r*.3,.025+r*.06];t.push(...h,...h)}for(let e=0;e<3;e++){let t=m+e*2;n.push(t,t+1,t+3,t,t+3,t+2)}}let i=new dr;i.setAttribute(`position`,new $n(e,3)),i.setAttribute(`color`,new $n(t,3)),i.setIndex(n),i.computeVertexNormals();let a=i.attributes.normal;for(let e=0;e<a.count;e++)a.setXYZ(e,a.getX(e)*.3,1,a.getZ(e)*.3);return i}function vd(){let e=[],t=[],n=[];for(let r=0;r<6;r++){let i=r/6*Math.PI*2+.3,a=.7+r%3*.15,o=e.length/3;for(let n=0;n<=6;n++){let r=n/6,o=r*a,s=Math.sin(r*Math.PI*.75)*.45*a-r*r*.15,c=Math.sin(r*Math.PI)*.16,l=Math.cos(i)*o,u=Math.sin(i)*o,d=-Math.sin(i)*c,f=Math.cos(i)*c;e.push(l-d,s,u-f,l+d,s,u+f);let p=[.05+r*.12,.16+r*.2,.04+r*.04];t.push(...p,...p)}for(let e=0;e<6;e++){let t=o+e*2;n.push(t,t+1,t+3,t,t+3,t+2)}}let r=new dr;r.setAttribute(`position`,new $n(e,3)),r.setAttribute(`color`,new $n(t,3)),r.setIndex(n),r.computeVertexNormals();let i=r.attributes.normal;for(let e=0;e<i.count;e++)i.setXYZ(e,i.getX(e)*.4,1,i.getZ(e)*.4);return r}function yd(e,t){let n=e=>new G(e);return Y([X.capsule(J(0,0,0),J(.02,.32,0),.05,.04),X.ellipsoid(J(.02,.34,0),J(.2,.1,.2)),X.ellipsoid(J(.02,.27,0),J(.18,.06,.18),{sub:!0,k:.02})],r=>r.y>.3?n(e):n(t),{cell:.02,k:.04})}function bd(){let e=[],t=[],n=[],r=Rl(17);for(let i=0;i<3;i++){let a=(r()-.5)*.5,o=(r()-.5)*.5,s=1.2+r()*1.8,c=e.length/3;for(let n=0;n<=8;n++){let r=n/8,c=.05+Math.sin(r*9+i)*.02,l=a+Math.sin(r*5+i)*.08;e.push(l-c,-r*s,o,l+c,-r*s,o);let u=[.12+r*.15,.3+r*.15,.1];t.push(...u,...u)}for(let e=0;e<8;e++){let t=c+e*2;n.push(t,t+1,t+3,t,t+3,t+2)}}let i=new dr;return i.setAttribute(`position`,new $n(e,3)),i.setAttribute(`color`,new $n(t,3)),i.setIndex(n),i.computeVertexNormals(),i}function xd(){let e=new Ni(.16,0),t=e.attributes.position;Rl(3);for(let e=0;e<t.count;e++)t.setY(e,t.getY(e)*.6+.05);return e.computeVertexNormals(),e}function Sd(){let e=[],t=Rl(23);for(let n=0;n<5;n++){let r=n===0?.75:.3+t()*.45,i=n===0?.13:.06+t()*.05,a=new Ai(0,i,i*2.2,6,1);a.translate(0,r+i*1.1-.01,0);let o=new Ai(i,i*1.08,r,6,1);o.translate(0,r/2,0);let s=n===0?.12:.35+t()*.5,c=t()*6.28,l=new Nt().makeRotationFromEuler(new Ut(Math.cos(c)*s,t()*6,Math.sin(c)*s));l.setPosition(n===0?0:Math.sin(c)*.14,-.05,n===0?0:-Math.cos(c)*.14);for(let t of[o,a]){t.applyMatrix4(l);let n=t.toNonIndexed();n.userData.h=r+i*2.2,e.push(n)}}let n=0;for(let t of e)n+=t.attributes.position.count;let r=new Float32Array(n*3),i=new Float32Array(n*3),a=0;for(let t of e){let e=t.attributes.position.array;r.set(e,a);for(let t=0;t<e.length;t+=3){let n=.08+Math.min(1,Math.max(0,e[t+1]/.9))**1.6*.92;i[a+t]=n,i[a+t+1]=n,i[a+t+2]=n}a+=e.length}let o=new dr;return o.setAttribute(`position`,new Xn(r,3)),o.setAttribute(`color`,new Xn(i,3)),o.computeVertexNormals(),o}var Cd=class{constructor(e,t){this.world=t,this.group=new cn,e.add(this.group),this.types=[],this.cell=2,this.windMats=[]}addType(e,t,n,r,i={}){let a=new di(t,n,r);a.count=0,a.castShadow=!!i.shadow,a.receiveShadow=!0,a.frustumCulled=!1,this.group.add(a);let o={name:e,mesh:a,max:r,anchors:[],normals:[],alive:[],hash:new Map,burst:i.burst,cast:i.cast};return this.types.push(o),o}add(e,t,n,r,i,a=1){if(e.mesh.count>=e.max)return;let o=e.mesh.count++;pd.position.copy(t);let s=new ut().setFromUnitVectors(new U(0,1,0),new U().copy(n).lerp(new U(0,1,0),1-a).normalize()),c=new ut().setFromAxisAngle(new U(0,1,0),i);pd.quaternion.copy(s).multiply(c),pd.scale.set(r,r,r),pd.updateMatrix(),e.mesh.setMatrixAt(o,pd.matrix),e.anchors.push(t.clone()),e.normals.push(n.clone()),e.alive.push(!0);let l=this.key(t.x,t.y,t.z);e.hash.has(l)||e.hash.set(l,[]),e.hash.get(l).push(o)}key(e,t,n){return`${Math.floor(e/this.cell)},${Math.floor(t/this.cell)},${Math.floor(n/this.cell)}`}onDig(e,t){let n=this.world.vol,r=t+1,i=Math.floor((e.x-r)/this.cell),a=Math.floor((e.x+r)/this.cell),o=Math.floor((e.y-r)/this.cell),s=Math.floor((e.y+r)/this.cell),c=Math.floor((e.z-r)/this.cell),l=Math.floor((e.z+r)/this.cell);for(let r of this.types){let u=!1;for(let d=i;d<=a;d++)for(let i=o;i<=s;i++)for(let a=c;a<=l;a++){let o=r.hash.get(`${d},${i},${a}`);if(o)for(let i of o){if(!r.alive[i])continue;let a=r.anchors[i],o=r.normals[i],s=a.distanceTo(e)<t+.2,c=n.sample(a.x-o.x*.25,a.y-o.y*.25,a.z-o.z*.25);(s||c>.05)&&(r.alive[i]=!1,r.mesh.setMatrixAt(i,md),u=!0,r.burst&&this.world.fx.puff(a,3,r.burst))}}u&&(r.mesh.instanceMatrix.needsUpdate=!0)}}update(e,t){for(let e of this.windMats)e.userData.u.uTime.value=t}populate(e,t=1){let n=this.world.vol,r=Rl(t),i=n.s,[a,o,s]=n.size,c={x:0,y:0,z:0},l=new U,u=new U,d=e.step??.75;for(let t=1;t<a-1;t+=d)for(let a=1;a<s-1;a+=d){let s=t+(r()-.5)*d,f=a+(r()-.5)*d,p=n.sample(s,o-1,f);for(let t=o-1-i;t>.5;t-=i*.5){let a=n.sample(s,t,f);if(p>0!=a>0){let o=p/(p-a),d=t+i*.5*(1-o);l.set(s,d,f),n.gradient(s,d,f,c,.3),u.set(c.x,c.y,c.z);let m=n.materialAt(s,d-u.y*.3,f);p>0?e.floor?.(l,u,m,r,this):e.ceil?.(l,u,m,r,this)}p=a}}if(e.wall)for(let t=1;t<o-1;t+=d*1.4)for(let o=1;o<s-1;o+=d*1.4){let s=n.sample(.5,t,o);for(let d=.5;d<a-.5;d+=i*.5){let i=n.sample(d,t,o);s>0!=i>0&&(l.set(d,t+(r()-.5)*.4,o),n.gradient(l.x,l.y,l.z,c,.3),u.set(c.x,c.y,c.z),Math.abs(u.y)<.5&&e.wall(l,u,n.materialAt(l.x-u.x*.3,l.y,l.z-u.z*.3),r,this)),s=i}}for(let e of this.types)e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.computeBoundingSphere()}setupVerdant(e){let t=gd(new Yi({vertexColors:!0,side:2,roughness:.9}),1),n=gd(new Yi({vertexColors:!0,side:2,roughness:.85}),.6),r=gd(new Yi({vertexColors:!0,side:2,roughness:.9}),0);this.windMats.push(t,n);let i=this.addType(`grass`,_d(),t,9e3,{burst:{color:new G(.4,.7,.25),speed:3,size:.2,size1:.15,life:1.4,gravity:2.5,spin:!0,alpha:.9}}),a=this.addType(`fern`,vd(),n,900,{burst:{color:new G(.3,.6,.2),speed:3,size:.25,size1:.2,life:1.4,gravity:2.5,spin:!0,alpha:.9}}),o=new Yi({vertexColors:!0,roughness:.5,emissive:4704767,emissiveIntensity:0});o.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * smoothstep(0.5, 0.7, vColor.b) * 0.9;`)};let s=this.addType(`mush`,yd(7332095,14543072),o,500,{burst:{color:new G(.4,.9,1),speed:3,size:.18,size1:.05,life:1,additive:!0}}),c=this.addType(`vine`,bd(),r,700,{burst:{color:new G(.3,.6,.2),speed:2,size:.2,size1:.15,life:1.6,gravity:2,spin:!0}}),l=this.addType(`pebble`,xd(),new Yi({color:8221802,roughness:.9}),1500);this.populate({step:.55,floor:(e,t,n,r,o)=>{if(t.y<.72)return;let c=this.world.noise.noise(e.x*.12,e.y*.12,e.z*.12);(n===Z.DIRT||n===Z.ROCK)&&c>-.25&&r()<.85?o.add(i,e,t,.5+r()*.45,r()*6,.6):n===Z.BRICK&&c>.2&&r()<.4&&o.add(i,e,t,.45+r()*.35,r()*6,.6),n===Z.DIRT&&c>.25&&r()<.06&&o.add(a,e,t,.7+r()*.6,r()*6,.5),c<-.3&&r()<.05&&o.add(s,e,t,.7+r()*1.1,r()*6,.7),r()<.04&&o.add(l,e,t,.6+r()*1.4,r()*6,1)},ceil:(e,t,n,r,i)=>{t.y>-.6||(n===Z.DIRT||n===Z.ROCK||n===Z.BRICK)&&r()<.12&&i.add(c,e,new U(0,1,0),.8+r()*.8,r()*6,0)}},11)}setupCrystal(){let e=new G(this.world.theme.crystal),t=new Yi({color:e.clone().multiplyScalar(.35),vertexColors:!0,emissive:e,emissiveIntensity:.55,roughness:.15,metalness:.2,flatShading:!0});t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
 totalEmissiveRadiance *= vColor.r * vColor.r;`),e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
 diffuseColor.rgb = diffuse * (0.45 + 0.55 * vColor.r);`)};let n=this.addType(`cryst`,Sd(),t,900,{burst:{color:new G(this.world.theme.crystal),speed:6,size:.2,size1:.05,life:.9,additive:!0,gravity:4}}),r=new Yi({vertexColors:!0,roughness:.5});r.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * smoothstep(0.5, 0.7, max(vColor.r, vColor.b)) * 1.4;`)};let i=this.addType(`mush`,yd(14191359,14209256),r,500,{burst:{color:new G(.9,.5,1),speed:3,size:.18,size1:.05,life:1,additive:!0}}),a=this.addType(`pebble`,xd(),new Yi({color:6117998,roughness:.8}),1500),o=gd(new Yi({vertexColors:!0,side:2,roughness:.9,emissive:1060928}),.4);this.windMats.push(o);let s=_d(),c=s.attributes.color;for(let e=0;e<c.count;e++)c.setXYZ(e,c.getX(e)*.6,c.getY(e)*.9,c.getZ(e)*2.6+.1);let l=this.addType(`grass`,s,o,3e3,{burst:{color:new G(.3,.6,.7),speed:3,size:.2,size1:.1,life:1.2,gravity:2,spin:!0}});this.populate({step:.7,floor:(e,t,r,o,s)=>{if(t.y<.6)return;let c=this.world.noise.noise(e.x*.1,e.y*.1,e.z*.1);(r===Z.CRYSTAL||r===Z.ROCK&&c>.35)&&o()<.14&&s.add(n,e,t,.6+o()*.9,o()*6,.6),c<-.3&&o()<.05&&s.add(i,e,t,.8+o()*1.2,o()*6,.7),r===Z.DIRT&&c>-.1&&o()<.5&&s.add(l,e,t,.5+o()*.5,o()*6,.6),o()<.05&&s.add(a,e,t,.6+o()*1.4,o()*6,1)},ceil:(e,t,r,i,a)=>{t.y>-.5||(r===Z.CRYSTAL||r===Z.ROCK)&&i()<.06&&a.add(n,e,t,.7+i()*1,i()*6,1)},wall:(e,t,r,i,a)=>{r===Z.CRYSTAL&&i()<.18&&a.add(n,e,t,.5+i()*.7,i()*6,1)}},21)}setupTemple(){let e=this.addType(`pebble`,xd(),new Yi({color:9071184,roughness:.85}),2e3),t=new Mi(.3,0);t.scale(1.2,.6,1);let n=this.addType(`rubble`,t,new Yi({color:11571312,roughness:.9}),600),r=gd(new Yi({vertexColors:!0,side:2,roughness:.9}),.7);this.windMats.push(r);let i=_d(),a=i.attributes.color;for(let e=0;e<a.count;e++)a.setXYZ(e,a.getX(e)*2.2+.1,a.getY(e)*1.2,a.getZ(e));let o=this.addType(`grass`,i,r,2500,{burst:{color:new G(.7,.6,.3),speed:3,size:.2,size1:.15,life:1.2,gravity:2,spin:!0}});this.populate({step:.7,floor:(t,r,i,a,s)=>{if(r.y<.7)return;a()<.06&&s.add(e,t,r,.6+a()*1.4,a()*6,1),i===Z.BRICK&&a()<.03&&s.add(n,t,r,.6+a()*1.2,a()*6,1);let c=this.world.noise.noise(t.x*.15,t.y*.15,t.z*.15);i===Z.DIRT&&c>0&&a()<.35&&s.add(o,t,r,.5+a()*.5,a()*6,.6)}},31)}},wd=new Bl(99),Td=new Map,Ed=e=>new G(e);function Dd(e,t){return Td.has(e)||Td.set(e,t()),Td.get(e)}var Od=Dd(`glowTex`,()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new wi(e);return r.colorSpace=Ie,r});function kd(e,t=1,n=.8){let r=new Fr(new xr({map:Od,color:e,transparent:!0,opacity:n,depthWrite:!1,blending:2}));return r.scale.setScalar(t),r.renderOrder=25,r}var Ad={get stone(){return Dd(`m_stone`,()=>_u({key:`stone`,roughness:.85,rim:10467327,rimStrength:.15}))},get metal(){return Dd(`m_metal`,()=>_u({key:`pmetal`,roughness:.35,metalness:.7,rimStrength:.2}))}};function jd(){let e=new cn,t=new K(Dd(`sunGeo`,()=>{let e=new Pi(.42,0);return e.scale(.85,1.25,.85),e}),Dd(`sunMat`,()=>new Yi({color:16765803,emissive:16753183,emissiveIntensity:2.2,roughness:.18,metalness:.4,flatShading:!0})));t.castShadow=!0,e.add(t);let n=Dd(`sunRing`,()=>new Ri(.62,.035,8,40)),r=Dd(`sunRingMat`,()=>new Hr({color:16773296,transparent:!0,opacity:.85,blending:2,depthWrite:!1})),i=new K(n,r);i.rotation.x=Math.PI/2;let a=new K(n,r);a.rotation.y=Math.PI/2,a.scale.setScalar(.8),e.add(i,a);let o=kd(16760906,2.6,.75);return e.add(o),e.userData={core:t,r1:i,r2:a,glow:o},e}function Md(){return Dd(`goldGeo`,()=>{let e=new Mi(.14,0);return e.scale(1,.75,.9),e})}function Nd(){return Dd(`goldMat`,()=>new Yi({color:16761405,emissive:8014336,emissiveIntensity:.9,roughness:.25,metalness:.9,flatShading:!0}))}function Pd(){let e=Dd(`heartGeo`,()=>Y([X.sphere(J(-.12,.08,0),.16),X.sphere(J(.12,.08,0),.16),X.custom(e=>{let t=e.y+.16;return Math.max(0,.27-Math.abs(e.y-.02)*0),Math.max(Math.hypot(e.x*(1+(.1-e.y)*2.2),e.z*1.6)-.24*Math.max(0,(e.y+.28)/.38),-t-.12)},J(-.3,-.3,-.2),J(.3,.2,.2))],()=>Ed(16730730),{cell:.015,k:.08})),t=Dd(`heartMat`,()=>new Yi({color:16734842,emissive:16719952,emissiveIntensity:.8,roughness:.3,vertexColors:!0})),n=new cn,r=new K(e,t);return n.add(r),n.add(kd(16736384,1.4,.5)),n}function Fd(e=6160338){let t=new cn,n=new K(Dd(`runeGeo`,()=>Y([X.box(J(0,.95,0),J(.42,.95,.3),.12),X.box(J(0,.15,0),J(.6,.15,.45),.06),X.sphere(J(0,1.55,.3),.18,{sub:!0,k:.04})],(e,t)=>Ed(4867410).multiplyScalar(.8+.35*(wd.noise(e.x*6,e.y*6,e.z*6)*.5+.5)),{cell:.035,k:.05})),Ad.stone);n.castShadow=!0,t.add(n);let r=new Yi({color:2105376,emissive:e,emissiveIntensity:.15,roughness:.4}),i=new K(Dd(`runeGem`,()=>new Ni(.16,0)),r);i.position.set(0,1.55,.27),t.add(i);let a=new cn,o=Dd(`runeStroke`,()=>new Oi(.06,.32,.02));for(let e=0;e<4;e++){let t=new K(o,r);t.position.set(-.18+e*.12,.85+e%2*.12,.3),t.rotation.z=(e-1.5)*.4,a.add(t)}t.add(a);let s=kd(e,2.2,0);return s.position.copy(i.position),t.add(s),t.userData={gem:i,glyphMat:r,glow:s},t}function Id(e,t,n=6160338){let r=new cn,i=Ad.stone,a=e/2,o=Y([X.box(J(0,t/2,0),J(a/2,t/2,.35),.08)],e=>{let n=Math.abs(Math.hypot(e.x*1.2,e.y-t*.55)-.9)<.07&&e.z>.2,r=Ed(3814722).multiplyScalar(.8+.3*(wd.noise(e.x*3,e.y*3,e.z*3)*.5+.5));return n?Ed(9075290):r},{cell:.06}),s=new K(o,i);s.position.x=-a/2,s.castShadow=!0;let c=new K(o,i);c.position.x=a/2,c.castShadow=!0,r.add(s,c);let l=new Yi({color:2236962,emissive:n,emissiveIntensity:.6}),u=[];for(let e=0;e<3;e++){let n=new K(Dd(`gateDot`,()=>new Li(.16,12,8)),l.clone());n.position.set((e-1)*.55,t*.78,.38),n.material.emissiveIntensity=.05,r.add(n),u.push(n)}return r.userData={L:s,R:c,lights:u,half:a},r}function Ld(){return new K(Dd(`pedGeo`,()=>Y([X.box(J(0,.15,0),J(.9,.15,.9),.05),X.box(J(0,.65,0),J(.55,.4,.55),.06),X.box(J(0,1.1,0),J(.75,.08,.75),.04)],e=>e.y>1?Ed(13148750):Ed(4932947).multiplyScalar(.8+.3*(wd.noise(e.x*5,e.y*5,e.z*5)*.5+.5)),{cell:.04})),Ad.stone)}function Rd(e){let t=new cn;if(e===`gauntlet`){let e=new K(Dd(`relicG`,()=>Y([X.capsule(J(0,0,0),J(0,-.24,.01),.14,.2),X.torus(J(0,-.22,.01),.2,.05),X.box(J(0,-.45,.03),J(.22,.18,.2),.1),X.sphere(J(.11,-.58,.14),.08,{k:.03}),X.sphere(J(0,-.6,.15),.08,{k:.03}),X.sphere(J(-.11,-.58,.14),.08,{k:.03})],e=>e.y>-.3&&e.y<-.14?Ed(8319999):Ed(14263866),{cell:.02})),Dd(`relicMat`,()=>new Yi({vertexColors:!0,metalness:.8,roughness:.25,emissive:3825776,emissiveIntensity:.6})));e.rotation.z=Math.PI,e.position.y=-.3,t.add(e)}else{let e=new K(Dd(`relicQ`,()=>Y([X.sphere(J(0,0,0),.32),X.torus(J(0,0,0),.42,.06),X.capsule(J(0,-.45,0),J(0,.45,0),.08)],e=>Math.abs(e.y)>.3?Ed(14263866):Ed(10479871),{cell:.02})),Dd(`relicMatQ`,()=>new Yi({vertexColors:!0,metalness:.6,roughness:.25,emissive:2789296,emissiveIntensity:.9})));t.add(e)}return t.add(kd(10482943,3,.6)),t}function zd(){let e=new cn,t=new K(Dd(`shrineGeo`,()=>Y([X.box(J(0,.12,0),J(.7,.12,.7),.05),X.capsule(J(0,.2,0),J(0,1.6,0),.16,.12),X.torus(J(0,1.75,0),.32,.06),X.box(J(0,2.25,0),J(.42,.06,.42),.04),X.capsule(J(.3,1.75,.3),J(.3,2.22,.3),.04),X.capsule(J(-.3,1.75,.3),J(-.3,2.22,.3),.04),X.capsule(J(.3,1.75,-.3),J(.3,2.22,-.3),.04),X.capsule(J(-.3,1.75,-.3),J(-.3,2.22,-.3),.04),X.custom(e=>Math.max(Math.abs(e.x)+Math.abs(e.z)+(e.y-2.3)*.9-.42,2.3-e.y),J(-.5,2.3,-.5),J(.5,2.8,.5))],e=>e.y>1.6?Ed(13148750):Ed(5985121).multiplyScalar(.8+.3*(wd.noise(e.x*5,e.y*5,e.z*5)*.5+.5)),{cell:.035,k:.04})),Ad.metal);t.castShadow=!0,e.add(t);let n=new Hr({color:9071168}),r=new K(Dd(`shrineFlame`,()=>new Ni(.2,1)),n);r.position.y=2,e.add(r);let i=kd(16756816,2.5,0);return i.position.y=2,e.add(i),e.userData={flame:r,flameMat:n,glow:i},e}function Bd(e=0){let t=new K(Dd(`urnGeo`,()=>Y([X.ellipsoid(J(0,.42,0),J(.36,.4,.36)),X.capsule(J(0,.7,0),J(0,.95,0),.17,.2),X.torus(J(0,.95,0),.19,.045),X.capsule(J(0,.95,0),J(0,1.1,0),.12,{sub:!0}),X.torus(J(.36,.62,0),.08,.025,{k:.02})],e=>{let t=Math.abs(e.y-.5)<.05||Math.abs(e.y-.3)<.025,n=Ed(12019002).multiplyScalar(.85+.25*(wd.noise(e.x*8,e.y*8,e.z*8)*.5+.5));return t?Ed(15123066):n},{cell:.025})),Dd(`urnMat`,()=>_u({key:`urn`,roughness:.7,rimStrength:.25})));return t.castShadow=!0,t.rotation.y=e*2.4,t.scale.setScalar(.9+e%3*.1),t}function Vd(){let e=new cn,t=new K(Dd(`brazGeo`,()=>Y([X.capsule(J(0,0,0),J(0,.9,0),.1,.08),X.box(J(0,.08,0),J(.35,.08,.35),.04),X.custom(e=>{let t=Math.hypot(e.x,e.z);return Math.max(t-(.32+(e.y-.9)*.6),Math.abs(e.y-1.05)-.17)},J(-.5,.85,-.5),J(.5,1.25,.5)),X.sphere(J(0,1.3,0),.32,{sub:!0,k:.03})],e=>e.y>.85?Ed(9071162):Ed(4011062),{cell:.03})),Ad.metal);t.castShadow=!0,e.add(t);let n=kd(16751168,2.2,.7);return n.position.y=1.35,e.add(n),e.userData={glow:n},e}function Hd(){return new K(Dd(`signGeo`,()=>Y([X.capsule(J(0,0,0),J(0,1.2,0),.06),X.box(J(0,1.2,.02),J(.5,.28,.04),.03)],e=>(e.y>.9?Ed(10119996):Ed(5913634)).multiplyScalar(.85+.2*(wd.noise(e.x*20,e.y*3,e.z*20)*.5+.5)),{cell:.025})),Ad.stone)}function Ud(e,t,n=16773572,r=.16){let i=new Ai(e*.7,e*1.35,t,24,1,!0);i.translate(0,-t/2,0);let a=new K(i,new qi({uniforms:{uColor:{value:new G(n)},uOpacity:{value:r},uTime:{value:0},uH:{value:t}},vertexShader:`varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main(){ vP = position; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; uniform float uTime; uniform float uH; varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main(){
        float edge = pow(abs(dot(normalize(vN), vV)), 1.5);
        float fall = smoothstep(0.0, 0.25, -vP.y / uH) * (1.0 - smoothstep(0.55, 1.0, -vP.y / uH));
        float a = atan(vP.z, vP.x);
        float streak = 0.65 + 0.35 * sin(a * 7.0 + uTime * 0.4) * sin(a * 3.0 - uTime * 0.25 + vP.y * 0.2);
        gl_FragColor = vec4(uColor, uOpacity * edge * fall * streak);
      }`,transparent:!0,depthWrite:!1,blending:2,side:2}));return a.renderOrder=15,a}function Wd(e){let t=new K(Y([X.custom(t=>Math.hypot(t.x,t.y,t.z)-e+wd.fbm(t.x*.8,t.y*.8,t.z*.8,3)*e*.25,J(-e*1.3,-e*1.3,-e*1.3),J(e*1.3,e*1.3,e*1.3))],e=>Math.abs(wd.noise(e.x*1.2,e.y*1.2,e.z*1.2))<.07?Ed(8384767):Ed(6972016).multiplyScalar(.75+.4*(wd.noise(e.x*3,e.y*3,e.z*3)*.5+.5)),{cell:e/14}),Ad.stone);return t.castShadow=!0,t}function Gd(e=7336191){let t=new cn,n=new K(Dd(`beaconBase`,()=>Y([X.box(J(0,.25,0),J(.9,.25,.9),.15),X.torus(J(0,.55,0),.6,.08)],e=>Ed(4932947),{cell:.04})),Ad.stone);t.add(n);let r=new Yi({color:3820122,emissive:e,emissiveIntensity:.05,roughness:.1,metalness:.2,flatShading:!0,transparent:!0,opacity:.92}),i=new K(Dd(`beaconGeo`,()=>{let e=new Pi(.7,0);return e.scale(.7,1.8,.7),e}),r);i.position.y=1.8,i.castShadow=!0,t.add(i);let a=kd(e,4,0);return a.position.y=1.8,t.add(a),t.userData={crystal:i,mat:r,glow:a},t}function Kd(e,t){let n=new cn,r=new K(Dd(`cageBars`+e+t,()=>{let n=[];for(let r=0;r<10;r++){let i=r/10*Math.PI*2;n.push(X.capsule(J(Math.cos(i)*e,0,Math.sin(i)*e),J(Math.cos(i)*e*.6,t,Math.sin(i)*e*.6),.09,.07))}return n.push(X.torus(J(0,.15,0),e,.12)),n.push(X.torus(J(0,t*.55,0),e*.8,.08)),n.push(X.sphere(J(0,t,0),e*.62)),Y(n,e=>e.y>t*.9?Ed(6117480):Ed(9271888),{cell:.05,k:.05})}),Ad.metal);return r.castShadow=!0,n.add(r),n}var qd=new U,Jd=new U,Yd=class{constructor(e,t={}){this.world=e,this.def=t,this.alive=!0,this.group=new cn,this.pos=new U().fromArray(t.pos||[0,0,0]),this.group.position.copy(this.pos),this.hitSphere=null,this.collider=null,this.lightSource=null}get game(){return this.world.game}get player(){return this.world.game.player}update(){}hit(){return!1}onDig(){}remove(){this.alive=!1,this.group.parent?.remove(this.group)}},Xd=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.mesh=jd(),this.group.add(this.mesh),this.t=Math.random()*6,this.buried=!0,this.hint=new U,this.hintValid=!1,this.lightSource={pos:this.pos,color:16756800,intensity:8,range:6},this.checkBuried(),this.collected=!1,this.popT=0}checkBuried(){let e=this.world.vol,t=this.pos;if(this.buried=e.sample(t.x,t.y+.2,t.z)<.15,this.lightSource.intensity=this.buried?0:8,this.buried){let n=1e9;this.hintValid=!1;for(let r=0;r<26;r++){let i=r/26*Math.PI*2*3.7,a=r/25*2-1,o=Math.sqrt(1-a*a),s=Math.cos(i)*o,c=a,l=Math.sin(i)*o;for(let r=.3;r<3.5;r+=.2)if(e.sample(t.x+s*r,t.y+c*r,t.z+l*r)>.1){r<n&&(n=r,this.hint.set(t.x+s*r,t.y+c*r,t.z+l*r),this.hintValid=!0);break}}}}onDig(e,t){if(this.pos.distanceTo(e)<t+4){let e=this.buried;this.checkBuried(),e&&!this.buried&&(this.popT=.001,this.game.audio.play(`gem`),this.world.fx.puff(this.pos,30,{color:new G(1,.8,.3),speed:6,size:.25,size1:.05,life:1.2,additive:!0}),this.game.hud.toast(`太陽石が姿を現した！`,`sun`))}}update(e){if(this.collected)return;this.t+=e;let t=this.mesh.userData,n=this.buried?0:Math.sin(this.t*2)*.12;this.popT>0&&(this.popT+=e);let r=this.popT>0?Math.max(0,Math.sin(Math.min(1,this.popT*2)*Math.PI)*.8):0;this.mesh.position.y=.55+n+r,t.core.rotation.y+=e*1.6,t.r1.rotation.z+=e*1.1,t.r2.rotation.x+=e*.8,t.glow.material.opacity=this.buried?0:.6+Math.sin(this.t*4)*.15,t.r1.visible=t.r2.visible=!this.buried,this.buried&&this.hintValid&&Math.random()<e*5&&this.world.fx.glow.emit(this.hint.x+(Math.random()-.5)*.6,this.hint.y+Math.random()*.3,this.hint.z+(Math.random()-.5)*.6,0,.6,0,{life:.9,size:.35,size1:0,color:new G(1,.8,.35),alpha:1,drag:1});let i=this.player;!this.buried&&i.pos.distanceTo(qd.copy(this.pos).setY(this.pos.y+.3))<1.5&&this.collect()}collect(){this.collected=!0,this.world.collectSunstone(this),this.world.fx.puff(this.pos.clone().setY(this.pos.y+.6),50,{color:new G(1,.85,.4),speed:8,size:.3,size1:.02,life:1.4,additive:!0}),this.world.fx.ring(this.pos,4,.6,16765040),this.remove()}},Zd=class{constructor(e){this.world=e,this.max=220,this.mesh=new di(Md(),Nd(),this.max),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.items=[],this.m=new Nt,this.q=new ut,this.e=new Ut,this.s=new U}spawn(e,t,n=5){for(let r=0;r<t;r++){if(this.items.length>=this.max)return;let t=Math.random()*Math.PI*2;this.items.push({p:e.clone().add(new U((Math.random()-.5)*.4,.2,(Math.random()-.5)*.4)),v:new U(Math.cos(t)*n*(.3+Math.random()*.7),4+Math.random()*4,Math.sin(t)*n*(.3+Math.random()*.7)),r:Math.random()*6,t:0,mag:!1})}}update(e,t){let n=this.world.vol,r=qd.set(t.pos.x,t.pos.y+.9,t.pos.z);for(let t=this.items.length-1;t>=0;t--){let i=this.items[t];i.t+=e;let a=i.p.distanceTo(r);if(i.t>.45&&a<3.2&&(i.mag=!0),i.mag){if(Jd.copy(r).sub(i.p).normalize().multiplyScalar(Math.min(22,8+i.t*10)),i.v.lerp(Jd,1-Math.exp(-e*10)),i.p.addScaledVector(i.v,e),a<.6){this.items.splice(t,1),this.world.collectGold(1);continue}}else{i.v.y-=20*e;let t=i.p.x+i.v.x*e,r=i.p.y+i.v.y*e,a=i.p.z+i.v.z*e;n.sample(t,r,a)<.12?(i.v.multiplyScalar(.45),i.v.y=Math.abs(i.v.y)*.5,n.sample(i.p.x,i.p.y,i.p.z)<.05&&(i.p.y+=.1)):i.p.set(t,r,a)}i.r+=e*4,i.t>25&&this.items.splice(t,1)}for(let e=0;e<this.items.length;e++){let t=this.items[e];this.q.setFromEuler(this.e.set(.4,t.r,.2));let n=t.t>22?(25-t.t)/3:1;this.m.compose(qd.copy(t.p).setY(t.p.y+.12+Math.sin(t.r)*.04),this.q,this.s.set(n,n,n)),this.mesh.setMatrixAt(e,this.m)}this.mesh.count=this.items.length,this.mesh.instanceMatrix.needsUpdate=!0}},Qd=class extends Yd{constructor(e,t){super(e,t),this.mesh=Pd(),this.group.add(this.mesh),this.vel=new U((Math.random()-.5)*3,6,(Math.random()-.5)*3),this.t=0}update(e){this.t+=e;let t=this.world.vol;this.vel.y-=18*e;let n=qd.copy(this.pos).addScaledVector(this.vel,e);if(t.sample(n.x,n.y,n.z)<.3?this.vel.set(0,0,0):this.pos.copy(n),this.group.position.copy(this.pos),this.mesh.position.y=.4+Math.sin(this.t*3)*.08,this.mesh.rotation.y+=e*2,this.t>.4&&this.player.pos.distanceTo(this.pos)<1.4){let e=this.player;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+1),this.game.hud.pulseHearts()),this.game.audio.play(`gem`),this.world.fx.puff(this.pos,20,{color:new G(1,.4,.5),speed:4,size:.25,size1:.02,life:.8,additive:!0}),this.remove()}this.t>30&&this.remove()}},$d=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.groupId=t.group,this.mesh=Fd(e.theme.rune),this.group.add(this.mesh),this.active=e.game.save.flag(t.id),this.hitSphere={c:this.pos.clone().setY(this.pos.y+1),r:.9},this.collider={min:new U(this.pos.x-.6,this.pos.y,this.pos.z-.45),max:new U(this.pos.x+.6,this.pos.y+1.9,this.pos.z+.45)},this.lightSource={pos:this.pos.clone().setY(this.pos.y+1.6),color:e.theme.rune,intensity:0,range:7},this.t=0,this.applyVisual(1)}applyVisual(e){let t=this.mesh.userData;t.glyphMat.emissiveIntensity=this.active?2.2*e:.15,t.glow.material.opacity=this.active?.8*e:0,this.lightSource.intensity=this.active?10:0}hit(){return this.active?(this.game.audio.play(`impact_metal`),!0):(this.active=!0,this.game.save.setFlag(this.id),this.game.audio.play(`rune`),this.world.fx.puff(this.hitSphere.c,40,{color:new G(this.world.theme.rune),speed:6,size:.3,size1:.02,life:1.2,additive:!0}),this.world.fx.ring(this.pos,5,.7,this.world.theme.rune),this.world.onSwitch(this.groupId),this.applyVisual(1),!0)}update(e){if(this.t+=e,this.active){let t=.85+Math.sin(this.t*3)*.15;this.applyVisual(t),this.mesh.userData.gem.rotation.y+=e*2}}},ef=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.groupId=t.group,this.need=t.need,this.w=t.w,this.h=t.h,this.mesh=Id(t.w,t.h,e.theme.rune),this.group.add(this.mesh),this.open=e.game.save.flag(t.id),this.openT=+!!this.open,this.collider={min:new U(this.pos.x-t.w/2-.3,this.pos.y-1,this.pos.z-.45),max:new U(this.pos.x+t.w/2+.3,this.pos.y+t.h,this.pos.z+.45)},this.hitSphere={c:this.pos.clone().setY(this.pos.y+2),r:2},this.anim=!1,this.refresh()}refresh(){let e=this.world.countSwitches(this.groupId);this.mesh.userData.lights.forEach((t,n)=>{t.material.emissiveIntensity=n<e?2.5:.05}),!this.open&&e>=this.need&&this.startOpen()}startOpen(){this.open=!0,this.anim=!0,this.game.save.setFlag(this.id),this.game.audio.play(`gate`),this.game.cameraRig.shake(.3),this.game.cutsceneLook(this.pos.clone().setY(this.pos.y+2.5),2.6),this.game.hud.toast(`古代の扉が開いた！`,`rune`)}hit(){return this.open||(this.game.audio.play(`impact_metal`),this.game.hud.toast(`ルーンストーンを3つ光らせよう`,`info`)),!0}update(e){this.anim&&(this.openT=Math.min(1,this.openT+e/2.4),Math.random()<.5&&this.world.fx.puff(qd.set(this.pos.x+(Math.random()-.5)*this.w,this.pos.y+.2,this.pos.z),1,{color:new G(.6,.55,.5),speed:1.5,size:.8,size1:2,life:1.2,alpha:.5}),this.openT>=1&&(this.anim=!1));let t=this.mesh.userData,n=this.openT;t.L.position.x=-t.half/2-n*(t.half*.95),t.R.position.x=t.half/2+n*(t.half*.95),this.open&&this.openT>=1&&(this.collider=null,this.hitSphere=null)}},tf=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.ped=Ld(),this.group.add(this.ped),this.taken=e.game.save.has(t.id),this.item=Rd(t.id),this.item.position.y=1.9,this.taken||this.group.add(this.item),this.collider={min:new U(this.pos.x-.9,this.pos.y,this.pos.z-.9),max:new U(this.pos.x+.9,this.pos.y+1.2,this.pos.z+.9)},this.lightSource={pos:this.pos.clone().setY(this.pos.y+2),color:10482943,intensity:this.taken?0:14,range:8},this.t=0}update(e){this.taken||(this.t+=e,this.item.position.y=1.95+Math.sin(this.t*2)*.1,this.item.rotation.y+=e,Math.random()<e*8&&this.world.fx.glow.emit(this.pos.x+(Math.random()-.5),this.pos.y+1.3,this.pos.z+(Math.random()-.5),0,1.2,0,{life:1.2,size:.2,size1:0,color:new G(.6,.95,1),alpha:1,drag:.5}),this.player.pos.distanceTo(qd.copy(this.pos).setY(this.pos.y+.6))<2.6&&this.take())}take(){this.taken=!0,this.group.remove(this.item),this.lightSource.intensity=0,this.world.fx.puff(this.pos.clone().setY(this.pos.y+2),60,{color:new G(.6,.95,1),speed:7,size:.35,size1:.02,life:1.5,additive:!0}),this.game.gainRelic(this.id)}},nf=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.mesh=zd(),this.group.add(this.mesh),this.lit=e.game.save.flag(`cp_`+t.id),this.collider={min:new U(this.pos.x-.25,this.pos.y,this.pos.z-.25),max:new U(this.pos.x+.25,this.pos.y+2.6,this.pos.z+.25)},this.lightSource={pos:this.pos.clone().setY(this.pos.y+2),color:16752704,intensity:this.lit?12:0,range:9},this.t=Math.random()*5,this.near=!1,this.setLit(this.lit,!0)}setLit(e,t){this.lit=e;let n=this.mesh.userData;n.flameMat.color.set(e?16765562:9071168),n.glow.material.opacity=e?.9:0,this.lightSource.intensity=e?12:0,e&&!t&&(this.game.audio.play(`checkpoint`),this.world.fx.puff(this.pos.clone().setY(this.pos.y+2),40,{color:new G(1,.75,.35),speed:5,size:.3,size1:.02,life:1.2,additive:!0}),this.game.hud.toast(`チェックポイント — セーブしました`,`save`))}update(e){this.t+=e;let t=this.mesh.userData;t.flame.scale.setScalar(this.lit?1+Math.sin(this.t*12)*.08+Math.sin(this.t*7.3)*.06:.7),t.flame.rotation.y+=e*2,this.player.pos.distanceTo(this.pos)<2.6?(this.lit||this.setLit(!0),this.game.setCheckpoint(this),this.near=!0):this.near=!1,this.lit&&Math.random()<e*6&&this.world.fx.glow.emit(this.pos.x+(Math.random()-.5)*.2,this.pos.y+2.1,this.pos.z+(Math.random()-.5)*.2,0,1.2,0,{life:.8,size:.25,size1:0,color:new G(1,.6,.2),alpha:1,drag:.5})}},rf=class extends Yd{constructor(e,t){super(e,t),this.text=t.text,t.type===`sign`&&(this.mesh=Hd(),this.mesh.castShadow=!0,this.group.add(this.mesh),this.hitSphere={c:this.pos.clone().setY(this.pos.y+1),r:.5}),this.radius=t.type===`hint`?3.2:3}hit(){return!0}update(){this.player.pos.distanceTo(this.pos)<this.radius?this.game.hud.showSign(this.text,this):this.game.hud.hideSign(this)}},af=class extends Yd{constructor(e,t,n){super(e,t),this.mesh=Bd(n),this.group.add(this.mesh),this.hitSphere={c:this.pos.clone().setY(this.pos.y+.5),r:.55},this.collider={min:new U(this.pos.x-.35,this.pos.y,this.pos.z-.35),max:new U(this.pos.x+.35,this.pos.y+1,this.pos.z+.35)}}hit(){return this.smash(),!0}smash(){if(!this.alive)return;this.game.audio.play(`urn`);let e=this.hitSphere.c;this.world.fx.spawnDebris(e,new U,10,new G(.75,.42,.25),4,.6),this.world.fx.puff(e,10,{color:new G(.7,.55,.4),speed:3,size:.6,size1:1.8,life:.8,alpha:.5}),this.world.gold.spawn(e,4+Math.floor(Math.random()*4),3),Math.random()<.25&&this.player.hp<this.player.maxHp&&this.world.spawnHeart(e),this.remove()}onDig(e,t){(this.pos.distanceTo(e)<t+.3||this.world.vol.sample(this.pos.x,this.pos.y-.25,this.pos.z)>.1)&&this.smash()}},of=class extends Yd{constructor(e,t){super(e,t),this.mesh=Vd(),this.group.add(this.mesh),this.t=Math.random()*10,this.lightSource={pos:this.pos.clone().setY(this.pos.y+1.6),color:16747066,intensity:14,range:10},this.collider={min:new U(this.pos.x-.35,this.pos.y,this.pos.z-.35),max:new U(this.pos.x+.35,this.pos.y+1.2,this.pos.z+.35)}}update(e){this.t+=e;let t=.85+Math.sin(this.t*13)*.08+Math.sin(this.t*7.7)*.07;if(this.lightSource.intensity=14*t,this.mesh.userData.glow.material.opacity=.6*t,Math.random()<e*30){let e=this.pos.x+(Math.random()-.5)*.35,t=this.pos.z+(Math.random()-.5)*.35;this.world.fx.glow.emit(e,this.pos.y+1.2,t,(Math.random()-.5)*.3,1.6+Math.random(),(Math.random()-.5)*.3,{life:.5+Math.random()*.3,size:.55,size1:.1,color:new G(1,.45+Math.random()*.25,.12),alpha:.9,drag:1}),Math.random()<.15&&this.world.fx.dust.emit(e,this.pos.y+1.6,t,0,1.2,0,{life:1.6,size:.5,size1:1.6,color:new G(.25,.22,.2),alpha:.25,drag:.8})}}},sf=class extends Yd{constructor(e,t){super(e,t),this.mesh=Ud(t.r,t.h,t.color??16773572,t.opacity??.14),this.group.add(this.mesh)}update(e){this.mesh.material.uniforms.uTime.value+=e}},cf=class extends Yd{constructor(e,t){super(e,t);let n=new K(new ki(t.r*1.05,40),new Hr({color:new G(1.6,1.5,1.25),fog:!1}));n.rotation.x=Math.PI/2,this.group.add(n);let r=kd(16774352,t.r*5,.5);r.position.y=-1,this.group.add(r),this.light=new Ma(16773328,140,40,.5,.6,1.2),this.light.position.set(0,-.5,0),this.light.target.position.set(0,-25,0),this.group.add(this.light,this.light.target)}},lf=class extends Yd{constructor(e,t){super(e,t),this.x=t.pos[0],this.z=t.pos[1],this.y=t.y,this.r=t.r,this.to=t.to,this.done=!1}update(){let e=this.player.pos;!this.done&&e.y<this.y&&Math.hypot(e.x-this.x,e.z-this.z)<this.r+1&&(this.done=!0,this.game.goToArea(this.to))}},uf=class extends Yd{update(e){this.world.vol.sample(this.pos.x,this.pos.y-1.2,this.pos.z)>.2||Math.random()<e*4&&this.world.fx.glow.emit(this.pos.x+(Math.random()-.5)*1.4,this.pos.y+.05,this.pos.z+(Math.random()-.5)*1.4,0,.5,0,{life:1,size:.3,size1:0,color:new G(this.world.theme.rune),alpha:1,drag:1})}},df=class extends Yd{constructor(e,t){super(e,t),this.r=t.r,this.mesh=Wd(t.r),this.group.add(this.mesh),this.vel=new U,this.state=e.game.save.flag(t.id)?`done`:`rest`,this.state===`done`&&t.endPos&&(this.pos.fromArray(t.endPos),this.group.position.copy(this.pos)),this.updateCollider(),this.hitSphere={c:this.pos,r:t.r},this.state===`done`&&t.cageTarget&&e.game.save.flag(t.cageTarget+`_cage`)&&(this.group.visible=!1,this.collider=null,this.hitSphere=null)}updateCollider(){let e=this.r*.9;this.collider={sphere:!0,c:this.pos,r:e}}hit(e,t){return this.game.audio.play(`impact_rock`),this.world.fx.puff(this.pos,6,{color:new G(.5,.48,.5),speed:2,size:.6,size1:1.5,life:.7,alpha:.4}),this.state===`rest`&&(this.pushes=(this.pushes||0)+1,this.pushes>=3?(this.world.dig(new U(this.pos.x,this.pos.y-this.r-.6,this.pos.z),2.4,{power:2,gauntlet:!0}),this.checkSupport(),this.state===`rest`&&t&&(this.vel.set(t.x,0,t.z).normalize().multiplyScalar(4),this.startFall())):(this.mesh.rotation.z+=.05,this.checkSupport())),!0}onDig(){this.checkSupport()}checkSupport(){if(this.state!==`rest`)return;let e=this.world.vol,t=0;for(let[n,r]of[[0,0],[.5,0],[-.5,0],[0,.5],[0,-.5]])e.sample(this.pos.x+n*this.r,this.pos.y-this.r-.3,this.pos.z+r*this.r)<.2&&t++;t<=2&&this.startFall()}shatter(){this.state!==`done`&&(this.state=`done`,this.game.save.setFlag(this.def.id),this.world.fx.spawnDebris(this.pos.clone(),new U(0,3,0),40,new G(.42,.4,.46),9,1.6),this.world.fx.puff(this.pos,30,{color:new G(.55,.52,.58),speed:6,size:1,size1:3,life:1.3,alpha:.5}),this.game.cameraRig.shake(.7),this.remove())}startFall(){this.state===`rest`&&(this.state=`fall`,this.game.audio.play(`golem`),this.game.hud.toast(`大岩が転がり落ちる！`,`info`),this.game.cutsceneFollow?.(this,2.8))}update(e){if(this.state!==`fall`)return;let t=this.world.vol;this.vel.y-=25*e;let n=this.def.endPos;if(n&&!this.world.game.save.flag(this.def.cageTarget+`_cage`)){let t=n[0]-this.pos.x,r=n[2]-this.pos.z;this.pos.y<this.def.pos[1]-1&&Math.hypot(t,r)<7&&(this.vel.x+=t*6*e,this.vel.z+=r*6*e)}let r=qd.copy(this.pos).addScaledVector(this.vel,e),i=t.sample(r.x,r.y,r.z);if(i<this.r){let n=t.gradient(r.x,r.y,r.z,{x:0,y:0,z:0}),a=this.r-i;r.x+=n.x*a,r.y+=n.y*a,r.z+=n.z*a;let o=this.vel.x*n.x+this.vel.y*n.y+this.vel.z*n.z;o<-4&&(this.game.cameraRig.shake(.5),this.game.audio.play(`slam`),this.world.fx.puff(r.clone().setY(r.y-this.r),25,{color:new G(.6,.55,.6),speed:5,size:1,size1:3,life:1.2,alpha:.5}),this.world.dig(r.clone().addScaledVector(new U(n.x,n.y,n.z),-this.r),this.r*.8,{silent:!0,power:1})),o<0&&(this.vel.x-=n.x*o*1.3,this.vel.y-=n.y*o*1.3,this.vel.z-=n.z*o*1.3),this.vel.x+=n.x*12*e,this.vel.z+=n.z*12*e,this.vel.multiplyScalar(Math.exp(-e*.8))}if(this.pos.copy(r),this.group.position.copy(this.pos),this.mesh.rotation.x+=this.vel.z*e/this.r,this.mesh.rotation.z-=this.vel.x*e/this.r,this.world.boulderHits(this),this.vel.lengthSq()<.3&&i<this.r+.2&&(this.restT=(this.restT||0)+e,this.restT>1)){this.state=`done`,this.game.save.setFlag(this.def.id);let e=this.world.entities.find(e=>e instanceof pf&&!e.broken);e&&Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<6&&(e.smash(),this.state=`rest`,this.shatter())}this.pos.y<-5&&(this.state=`done`,this.remove())}},ff=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.groupId=t.group,this.mesh=Gd(e.theme.crystal),this.group.add(this.mesh),this.active=e.game.save.flag(t.id),this.hitSphere={c:this.pos.clone().setY(this.pos.y+1.8),r:1.2},this.collider={min:new U(this.pos.x-.9,this.pos.y,this.pos.z-.9),max:new U(this.pos.x+.9,this.pos.y+3.2,this.pos.z+.9)},this.lightSource={pos:this.pos.clone().setY(this.pos.y+2),color:e.theme.crystal,intensity:0,range:14},this.caged=!!t.caged&&!e.game.save.flag(t.id+`_cage`),this.t=0,this.apply(1)}apply(e){let t=this.mesh.userData;t.mat.emissiveIntensity=this.active?2.4*e:.06,t.glow.material.opacity=this.active?.85*e:0,this.lightSource.intensity=this.active?22*e:0}hit(){return this.caged?(this.game.audio.play(`impact_metal`),this.game.hud.toast(`頑丈な檻だ… 上から何か落とせないか？`,`info`),!0):(this.active||(this.active=!0,this.game.save.setFlag(this.id),this.game.audio.play(`rune`),this.game.audio.play(`impact_crystal`),this.world.fx.puff(this.hitSphere.c,60,{color:new G(this.world.theme.crystal),speed:8,size:.35,size1:.02,life:1.5,additive:!0}),this.world.fx.ring(this.pos,8,.8,this.world.theme.crystal),this.world.onSwitch(this.groupId)),!0)}update(e){this.t+=e;let t=this.mesh.userData;t.crystal.rotation.y+=e*(this.active?1.2:.2),t.crystal.position.y=1.8+(this.active?Math.sin(this.t*2)*.1:0),this.active&&this.apply(.85+Math.sin(this.t*3)*.15)}},pf=class extends Yd{constructor(e,t){super(e,t),this.id=t.id,this.target=t.target,this.r=t.r??1.6,this.h=t.h??3.6,this.broken=e.game.save.flag(t.target+`_cage`),this.broken||(this.mesh=Kd(this.r,this.h),this.group.add(this.mesh),this.collider={min:new U(this.pos.x-this.r,this.pos.y,this.pos.z-this.r),max:new U(this.pos.x+this.r,this.pos.y+this.h+.6,this.pos.z+this.r)},this.hitSphere={c:this.pos.clone().setY(this.pos.y+1.6),r:this.r+.2})}hit(){return this.game.audio.play(`impact_metal`),this.world.fx.puff(this.hitSphere.c,12,{color:new G(1,.75,.35),speed:8,size:.12,size1:.02,life:.4,additive:!0,gravity:10}),this.game.hud.toast(`頑丈な檻だ… 上から何か落とせないか？`,`info`),!0}smash(){if(this.broken)return;this.broken=!0,this.game.save.setFlag(this.target+`_cage`);let e=this.world.entities.find(e=>e.id===this.target);e&&(e.caged=!1),this.world.fx.spawnDebris(this.pos.clone().setY(this.pos.y+1.5),new U,30,new G(.55,.48,.35),8,1.2),this.world.fx.puff(this.pos.clone().setY(this.pos.y+1.5),40,{color:new G(.6,.55,.5),speed:7,size:1,size1:3,life:1.5,alpha:.6}),this.game.audio.play(`boss_slam`),this.game.hud.toast(`檻が砕けた！`,`rune`),this.collider=null,this.hitSphere=null,this.group.remove(this.mesh)}},mf=class extends Yd{constructor(e,t){super(e,t),this.kind=t.kind;let[n,r]=t.size,i=new Fi(n,r,64,64);i.rotateX(-Math.PI/2);let a=t.kind===`lava`;this.mat=new qi({uniforms:{uTime:{value:0},uA:{value:new G(a?16734736:1010314)},uB:{value:new G(a?16764992:7336191)},fogColor:{value:new G},fogDensity:{value:0}},vertexShader:`uniform float uTime; varying vec3 vW;
        #include <fog_pars_vertex>
        void main(){ vec3 p = position; p.y += sin(p.x*0.6+uTime*1.3)*0.06 + cos(p.z*0.7+uTime)*0.06; vec4 wp = modelMatrix*vec4(p,1.0); vW = wp.xyz; vec4 mvPosition = viewMatrix*wp; gl_Position = projectionMatrix*mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform float uTime; uniform vec3 uA; uniform vec3 uB; varying vec3 vW;
        #include <fog_pars_fragment>
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
        void main(){ vec2 p = vW.xz*0.35; float a = n(p+uTime*0.15)*0.6+n(p*2.3-uTime*0.2)*0.4; float c = smoothstep(0.45,0.8,a);
          vec3 col = mix(uA, uB, c) * ${a?`2.2`:`0.9`};
          gl_FragColor = vec4(col, ${a?`1.0`:`0.82`});
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,transparent:!a,fog:!0}),this.mesh=new K(i,this.mat),this.group.add(this.mesh),this.y=t.pos[1],this.bounds=[t.pos[0]-n/2,t.pos[2]-r/2,t.pos[0]+n/2,t.pos[2]+r/2],a&&(this.lightSource={pos:this.pos.clone().setY(this.y+1.5),color:16736288,intensity:18,range:14,dynamicNear:!0})}update(e){this.mat.uniforms.uTime.value+=e;let t=this.player.pos;if(t.y<this.y-.3&&t.x>this.bounds[0]&&t.x<this.bounds[2]&&t.z>this.bounds[1]&&t.z<this.bounds[3]&&this.world.onPlayerFell(this.player,this.kind),this.kind===`lava`&&Math.random()<e*6){let e=this.bounds[0]+Math.random()*(this.bounds[2]-this.bounds[0]),t=this.bounds[1]+Math.random()*(this.bounds[3]-this.bounds[1]);this.world.vol.sample(e,this.y+.2,t)>0&&this.world.fx.glow.emit(e,this.y+.1,t,0,1.5+Math.random()*2,0,{life:1,size:.25,size1:0,color:new G(1,.5,.1),alpha:1,drag:.5})}this.lightSource&&this.lightSource.pos.set(Vl(t.x,this.bounds[0],this.bounds[2]),this.y+1.5,Vl(t.z,this.bounds[1],this.bounds[3]))}},hf=class extends Yd{constructor(e,t){if(super(e,t),this.id=t.id,this.r=t.r,this.broken=e.game.save.flag(t.id),!this.broken){let n=new Ai(t.r,t.r*1.05,.5,24),r=new Yi({color:5919848,roughness:.7,emissive:2789296,emissiveIntensity:0});this.mesh=new K(n,r),this.mesh.position.y=-.05,this.mesh.receiveShadow=!0,this.group.add(this.mesh);let i=new K(new Ii(t.r*.3,t.r*.36,6),new Hr({color:e.theme.rune}));i.rotation.x=-Math.PI/2,i.position.y=.21,this.group.add(i),this.collider={min:new U(this.pos.x-t.r,this.pos.y-.8,this.pos.z-t.r),max:new U(this.pos.x+t.r,this.pos.y+.2,this.pos.z+t.r)},this.hitSphere={c:this.pos.clone(),r:t.r}}}hit(e,t,n,r){return this.broken?!1:n?.state===`pound`&&this.game.save.has(`quake`)?(this.shatter(),!0):(this.game.audio.play(`impact_metal`),this.game.hud.toast(this.game.save.has(`quake`)?`高い所から急降下パンチ（空中で右クリック）だ！`:`びくともしない… もっと強烈な一撃が必要だ`,`info`),!0)}shatter(){this.broken=!0,this.game.save.setFlag(this.id),this.collider=null,this.hitSphere=null,this.group.clear(),this.world.fx.spawnDebris(this.pos,new U(0,1,0),26,new G(.4,.38,.45),6,1.3),this.world.fx.puff(this.pos,40,{color:new G(.6,.6,.7),speed:6,size:1,size1:3,life:1.2,alpha:.6}),this.game.audio.play(`boss_slam`),this.game.hud.toast(`封印が砕けた！`,`rune`)}},gf=class extends Yd{constructor(e,t){super(e,t),this.isSunCore=!0;let n=e.game.save.flag(`boss_defeated`);this.mat=new Yi({color:9075306,roughness:.6,emissive:16752688,emissiveIntensity:n?3:.15,flatShading:!0}),this.orb=new K(new Ni(2.2,2),this.mat),this.group.add(this.orb),this.ringMat=new Hr({color:16762976,transparent:!0,opacity:n?.8:.15,blending:2,depthWrite:!1}),this.rings=[];for(let e=0;e<3;e++){let t=new K(new Ri(3.2+e*.7,.08,8,64),this.ringMat);t.rotation.set(Math.random()*3,Math.random()*3,0),this.group.add(t),this.rings.push(t)}this.glow=kd(16756800,14,n?.9:.1),this.group.add(this.glow),this.lightSource={pos:this.pos,color:16756832,intensity:n?120:6,range:40},this.lit=n,this.t=0}ignite(){this.lit=!0,this.igniteT=0,this.world.fx.puff(this.pos,120,{color:new G(1,.8,.4),speed:14,size:.6,size1:.05,life:2.5,additive:!0}),this.world.fx.ring(this.pos,30,2,16765056,1),this.game.cameraRig.shake(.6)}update(e){if(this.t+=e,this.orb.rotation.y+=e*.3,this.rings.forEach((t,n)=>{t.rotation.x+=e*(.3+n*.2),t.rotation.y+=e*.2}),this.lit){this.igniteT=Math.min(1,(this.igniteT??1)+e/3);let t=this.igniteT;this.mat.emissiveIntensity=.15+t*3.5,this.mat.color.setRGB(1,.9,.6),this.ringMat.opacity=.15+t*.65,this.glow.material.opacity=.1+t*.85,this.glow.scale.setScalar(14+t*10+Math.sin(this.t*2)*1.5),this.lightSource.intensity=6+t*160;let n=this.world;n.hemi.intensity=Gl(n.hemi.intensity,n.theme.hemiInt*(1+t*1.4),2,e),n.scene.fog&&n.scene.fog.color.lerp(new G(6965802),e*.5*t),Math.random()<e*20*t&&this.world.fx.glow.emit(this.pos.x+(Math.random()-.5)*30,this.pos.y+5,this.pos.z+(Math.random()-.5)*30,0,-2,0,{life:4,size:.3,size1:.1,color:new G(1,.85,.5),alpha:1,drag:.2})}else this.mat.emissiveIntensity=.15+Math.sin(this.t*1.2)*.08}},_f=new Bl(4242),vf=e=>new G(e),yf=new U,bf={x:0,y:0,z:0},xf=new Map,Sf=(e,t)=>(xf.has(e)||xf.set(e,t()),xf.get(e));function Cf(e=`moss`){let t=vf(e===`moss`?3103306:3881578),n=vf(e===`moss`?6989882:8384767),r=vf(e===`moss`?15185039:13219816),i=_u({key:`grub-`+e,rim:e===`moss`?13172656:10547455,rimStrength:.45}),a=Sf(`grubBody`+e,()=>Y([X.ellipsoid(J(0,.45,0),J(.55,.42,.72)),X.ellipsoid(J(0,.62,-.05),J(.6,.38,.62),{k:.08}),X.torus(J(0,.6,.25),.5,.06,{k:.04}),X.torus(J(0,.62,-.2),.55,.06,{k:.04}),X.ellipsoid(J(0,.92,-.1),J(.35,.16,.4),{k:.1})],(i,a)=>{let o=a.y>.35&&i.y>.7&&_f.noise(i.x*9,i.y*9,i.z*9)>(e===`moss`?-.3:.2);if(i.y<.35||a.y<-.2)return r.clone().multiplyScalar(.9+.1*_f.noise(i.x*20,0,i.z*20));if(o)return n.clone().multiplyScalar(.75+.35*(_f.noise(i.x*25,i.y*25,i.z*25)*.5+.5));let s=Math.abs(Math.sin(i.z*9))<.18;return t.clone().multiplyScalar(s?.6:.95+.15*_f.noise(i.x*6,i.y*6,i.z*6))},{cell:.03,k:.12})),o=Sf(`grubHead`+e,()=>Y([X.ellipsoid(J(0,0,.1),J(.36,.3,.3)),X.capsule(J(.16,-.12,.32),J(.22,-.15,.5),.05,.02),X.capsule(J(-.16,-.12,.32),J(-.22,-.15,.5),.05,.02),X.capsule(J(.12,.2,.15),J(.25,.45,.2),.03,.015),X.capsule(J(-.12,.2,.15),J(-.25,.45,.2),.03,.015)],e=>e.z>.32&&e.y<-.05?vf(3811872):r.clone().lerp(t,.35),{cell:.02})),s=Sf(`grubLeg`,()=>Y([X.capsule(J(0,0,0),J(.16,-.25,.02),.06,.04)],()=>vf(3812906),{cell:.02})),c=new cn,l=new K(a,i);l.castShadow=!0,c.add(l);let u=new cn;u.position.set(0,.48,.62),c.add(u);let d=new K(o,i);d.castShadow=!0,u.add(d);let f=new Yi({color:16773792,emissive:e===`moss`?16764992:8450303,emissiveIntensity:1.6}),p=[];for(let e of[1,-1]){let t=new K(Sf(`grubEye`,()=>new Li(.085,12,8)),f);t.position.set(.15*e,.08,.33),u.add(t),p.push(t);let n=new K(Sf(`grubPupil`,()=>new Li(.04,8,6)),new Hr({color:1116677}));n.position.set(.15*e,.08,.41),n.scale.set(.6,1.3,.5),u.add(n)}let m=[];for(let e=0;e<3;e++)for(let t of[1,-1]){let n=new cn;n.position.set(.42*t,.3,.35-e*.35);let r=new K(s,i);r.scale.x=t,n.add(r),c.add(n),m.push({g:n,side:t,i:e})}return{root:c,head:u,legs:m,mats:[i],eyeMat:f,body:l}}function wf(){let e=_u({key:`bat`,rim:13672703,rimStrength:.6}),t=Sf(`batBody`,()=>Y([X.sphere(J(0,0,0),.35),X.ellipsoid(J(0,.08,.18),J(.26,.22,.2)),X.capsule(J(.15,.25,0),J(.3,.6,-.05),.09,.02),X.capsule(J(-.15,.25,0),J(-.3,.6,-.05),.09,.02),X.capsule(J(0,.15,-.25),J(0,.5,-.4),.07,.01)],e=>e.z<-.2&&e.y>.1?vf(10482943):e.z>.25?vf(15255807):vf(5913210).multiplyScalar(.85+.3*(_f.noise(e.x*20,e.y*20,e.z*20)*.5+.5)),{cell:.02,k:.08})),n=Sf(`batWing`,()=>Y([X.custom(e=>{let t=Math.max(Math.abs(e.z)-.02,Math.hypot(e.x*.7,e.y*1.4-.1)-.5),n=Math.hypot((e.x-.25)*2.5,e.y*3+.55)-.35;return Math.max(t,-n,-e.x)},J(0,-.5,-.05),J(.75,.5,.05)),X.capsule(J(0,.05,0),J(.65,.25,0),.03)],e=>vf(8014496).lerp(vf(3809360),e.x),{cell:.02})),r=new cn,i=new K(t,e);i.castShadow=!0,r.add(i);let a=[];for(let t of[1,-1]){let i=new cn;i.position.set(.25*t,.05,0),r.add(i);let o=new K(n,e);o.scale.x=t,i.add(o),a.push({g:i,side:t})}let o=new Yi({color:16777215,emissive:16736448,emissiveIntensity:2});for(let e of[1,-1]){let t=new K(Sf(`batEye`,()=>new Li(.06,10,8)),o);t.position.set(.12*e,.12,.33),r.add(t)}return{root:r,wings:a,mats:[e],eyeMat:o}}function Tf(e=1,t=`golem`){let n=_u({key:t,rim:16760960,rimStrength:.35}),r=e=>vf(9074016).multiplyScalar(.75+.35*(_f.noise(e.x*4,e.y*4,e.z*4)*.5+.5)),i=Sf(t+`T`,()=>Y([X.box(J(0,.55,0),J(.55,.5,.42),.18),X.box(J(0,1.1,-.05),J(.7,.32,.48),.2),X.sphere(J(0,.9,.4),.2,{sub:!0,k:.05})],e=>e.y>1.3?vf(6982218):r(e),{cell:.04,k:.1})),a=Sf(t+`H`,()=>Y([X.box(J(0,.18,0),J(.3,.22,.28),.12),X.box(J(0,.32,.12),J(.32,.06,.2),.04)],r,{cell:.03})),o=Sf(t+`A`,()=>Y([X.sphere(J(0,0,0),.28),X.capsule(J(0,-.1,0),J(0,-.65,.05),.2,.24),X.box(J(0,-.95,.05),J(.3,.28,.3),.12)],r,{cell:.04,k:.08})),s=Sf(t+`L`,()=>Y([X.capsule(J(0,0,0),J(0,-.45,0),.22,.2),X.box(J(0,-.55,.08),J(.24,.12,.3),.08)],r,{cell:.04})),c=new cn,l=new cn;l.position.y=.7,c.add(l);let u=new K(i,n);u.castShadow=!0,l.add(u);let d=new cn;d.position.set(0,1.4,.05),l.add(d);let f=new K(a,n);f.castShadow=!0,d.add(f);let p=new Yi({color:16777215,emissive:16747050,emissiveIntensity:2.2}),m=new K(new Oi(.42,.07,.05),p);m.position.set(0,.2,.28),d.add(m);let h=new K(Sf(`golemCore`,()=>new Ni(.17,1)),p);h.position.set(0,.9,.36),l.add(h);let g=[];for(let e of[1,-1]){let t=new cn;t.position.set(.85*e,1.1,0),l.add(t);let r=new K(o,n);r.castShadow=!0,t.add(r),g.push(t)}let _=[];for(let e of[1,-1]){let t=new cn;t.position.set(.3*e,.1,0),l.add(t);let r=new K(s,n);r.castShadow=!0,t.add(r),_.push(t)}return c.scale.setScalar(e),{root:c,body:l,head:d,arms:g,legs:_,mats:[n],eyeMat:p,core:h}}var Ef=class extends Yd{constructor(e,t){super(e,t),this.vel=new U,this.yaw=Math.random()*Math.PI*2,this.hp=3,this.state=`idle`,this.stateT=0,this.radius=.6,this.home=this.pos.clone(),this.flash=0,this.stun=0,this.grounded=!1,this.contactDmg=1,this.gold=5}setState(e){this.state=e,this.stateT=0}physics(e,t=30){let n=this.world.vol;this.vel.y-=t*e,this.vel.y<-25&&(this.vel.y=-25);let r=Math.max(1,Math.ceil(this.vel.length()*e/.2));this.grounded=!1;for(let t=0;t<r;t++){this.pos.addScaledVector(this.vel,e/r);for(let e=0;e<2;e++){let e=this.pos.x,t=this.pos.y+this.radius,r=this.pos.z,i=n.sample(e,t,r);if(i<this.radius){n.gradient(e,t,r,bf,.2);let a=this.radius-i;if(bf.y>.6)this.pos.y+=a/bf.y,this.grounded=!0,this.vel.y<0&&(this.vel.y=0);else{this.pos.x+=bf.x*a,this.pos.y+=bf.y*a,this.pos.z+=bf.z*a;let e=this.vel.x*bf.x+this.vel.y*bf.y+this.vel.z*bf.z;e<0&&(this.vel.x-=bf.x*e,this.vel.y-=bf.y*e,this.vel.z-=bf.z*e,this.hitWall=!0)}}}}n.sample(this.pos.x,this.pos.y+this.radius,this.pos.z)<-.2&&(this.pos.y+=.3),this.pos.y<-3&&this.die(!0)}hit(e,t,n,r){if(this.state===`dead`)return!1;this.hp-=e,this.flash=1;let i=t?yf.copy(t).setY(0).normalize():yf.copy(this.pos).sub(this.player.pos).setY(0).normalize();return this.vel.set(i.x*(r?13:8),r?8:5,i.z*(r?13:8)),this.game.audio.play(`impact_flesh`),this.game.audio.play(`enemy_hit`),this.world.fx.puff(yf.copy(this.pos).setY(this.pos.y+this.radius),14,{color:new G(1,.95,.7),speed:7,size:.18,size1:.02,life:.35,additive:!0}),this.world.fx.flash(yf,.9,.1),this.hp<=0?this.die():(this.setState(`hurt`),this.stun=.45),!0}die(e){if(this.state!==`dead`){if(this.setState(`dead`),!e){let e=yf.copy(this.pos).setY(this.pos.y+this.radius);this.game.audio.play(`enemy_die`),this.world.fx.puff(e,30,{color:new G(.85,.8,.95),speed:6,size:.8,size1:2.4,life:1,alpha:.6}),this.world.fx.puff(e,30,{color:new G(1,.85,.4),speed:9,size:.25,size1:.02,life:.8,additive:!0}),this.world.fx.ring(this.pos,3,.4),this.world.gold.spawn(e,this.gold,4),Math.random()<.3&&this.world.spawnHeart(e),this.game.stats.kills++}this.remove()}}updateFlash(e){this.flash=Math.max(0,this.flash-e*5);for(let e of this.model.mats)e.userData.flash.value=this.flash}touchPlayer(e=1.1){let t=this.player,n=yf.copy(t.pos).sub(this.pos);return n.y=t.pos.y+.9-(this.pos.y+this.radius),n.length()<e+this.radius}sees(e){let t=this.player,n=t.pos.x-this.pos.x,r=t.pos.y-this.pos.y,i=t.pos.z-this.pos.z,a=Math.hypot(n,r,i);return a>e?!1:this.world.vol.raycast(this.pos.x,this.pos.y+.8,this.pos.z,n/a,(r+.4)/a,i/a,a)<0}},Df=class extends Ef{constructor(e,t){super(e,t),this.variant=t.variant||`moss`,this.model=Cf(this.variant),this.group.add(this.model.root),this.hp=3,this.radius=.55,this.gold=6,this.hitSphere={c:new U,r:.8},this.walkPh=Math.random()*6,this.wanderT=0,this.wanderYaw=this.yaw}update(e){if(!this.alive)return;this.stateT+=e;let t=this.player,n=yf.copy(t.pos).sub(this.pos),r=n.length(),i=Math.atan2(n.x,n.z),a=0;switch(this.state){case`idle`:case`wander`:if(this.wanderT-=e,this.wanderT<0){this.wanderT=1.5+Math.random()*2.5;let e=this.pos.distanceTo(this.home)>6;this.wanderYaw=e?Math.atan2(this.home.x-this.pos.x,this.home.z-this.pos.z):Math.random()*Math.PI*2,this.state=Math.random()<.3?`idle`:`wander`}this.state===`wander`&&(this.yaw=ju(this.yaw,this.wanderYaw,e*3),a=1.6),r<10&&this.sees(10)&&!t.dead&&(this.setState(`alert`),this.game.audio.play(`grub_chirp`));break;case`alert`:this.yaw=ju(this.yaw,i,e*8),this.stateT<.1&&this.grounded&&(this.vel.y=4),this.stateT>.65&&this.setState(`charge`);break;case`charge`:this.stateT<.3&&(this.yaw=ju(this.yaw,i,e*4)),a=8.5,this.stateT>.25&&Math.random()<e*12&&this.world.fx.puff(this.pos,1,{color:new G(.6,.5,.4),speed:1,size:.4,size1:1.2,life:.5,alpha:.4}),this.hitWall&&this.stateT>.2?(this.setState(`stunned`),this.vel.set(-Math.sin(this.yaw)*4,5,-Math.cos(this.yaw)*4),this.game.audio.play(`impact_rock`,{power:.5}),this.world.fx.puff(this.pos,8,{color:new G(1,1,.6),speed:3,size:.2,size1:.02,life:.5,additive:!0})):this.stateT>1.4&&this.setState(`recover`);break;case`recover`:this.stateT>.8&&this.setState(r<12?`alert`:`wander`);break;case`stunned`:this.stateT>1.6&&this.setState(`recover`);break;case`hurt`:this.stateT>this.stun&&this.setState(r<12?`alert`:`wander`)}if(this.hitWall=!1,this.state!==`hurt`&&this.state!==`stunned`){let t=Math.sin(this.yaw),n=Math.cos(this.yaw),r=this.grounded?1-Math.exp(-e*10):1-Math.exp(-e*1);if(this.vel.x+=(t*a-this.vel.x)*r,this.vel.z+=(n*a-this.vel.z)*r,this.state===`wander`&&this.grounded){let e=this.pos.x+t*1.2,r=this.pos.z+n*1.2;this.world.vol.sample(e,this.pos.y-1,r)>.4&&(this.wanderYaw+=Math.PI,this.vel.x*=-.2,this.vel.z*=-.2)}}else this.grounded&&(this.vel.x*=Math.exp(-e*4),this.vel.z*=Math.exp(-e*4));this.physics(e),this.state===`charge`&&this.touchPlayer(.6)?(t.hurt(this.pos,1),this.setState(`recover`),this.vel.multiplyScalar(-.3)):this.state!==`stunned`&&this.state!==`hurt`&&this.touchPlayer(.25)&&t.hurt(this.pos,1);let o=Math.hypot(this.vel.x,this.vel.z);this.walkPh+=e*(3+o*3.5);let s=this.model;for(let e of s.legs){let t=this.walkPh+e.i*2.1+(e.side>0?0:Math.PI);e.g.rotation.x=Math.sin(t)*.6*Math.min(1,o/2+.1),e.g.rotation.z=e.side*(.2+Math.max(0,Math.cos(t))*.3)}let c=this.state===`stunned`;s.root.rotation.z=Gl(s.root.rotation.z,c?Math.PI:0,10,e),s.root.position.y=c?1:Math.abs(Math.sin(this.walkPh))*.04;let l=this.state===`alert`;s.head.rotation.x=l?-.4+Math.sin(this.stateT*30)*.1:Math.sin(this.walkPh*.5)*.08,s.body.scale.set(1,l?.9+Math.sin(this.stateT*30)*.05:1+Math.sin(this.walkPh)*.02,this.state===`charge`?1.08:1),s.eyeMat.emissiveIntensity=this.state===`charge`||l?4:1.6,this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,this.hitSphere.c.set(this.pos.x,this.pos.y+.5,this.pos.z),this.updateFlash(e)}hit(e,t,n,r){let i=this.state===`stunned`?2:0;return super.hit(e+i,t,n,r)}},Of=class extends Ef{constructor(e,t){super(e,t),this.model=wf(),this.group.add(this.model.root),this.hp=1,this.radius=.4,this.gold=4,this.hitSphere={c:new U,r:.75},this.t=Math.random()*10,this.home=this.pos.clone(),this.swoopFrom=new U}update(e){if(!this.alive)return;this.t+=e,this.stateT+=e;let t=this.player,n=yf.copy(t.pos).setY(t.pos.y+1),r=n.distanceTo(this.pos),i=new U;switch(this.state){case`idle`:i.set(this.home.x+Math.sin(this.t*.7)*3,this.home.y+Math.sin(this.t*1.3)*.8,this.home.z+Math.cos(this.t*.6)*3),r<12&&this.sees(12)&&(this.setState(`circle`),this.game.audio.play(`bat`));break;case`circle`:{let e=this.t*1.4;i.set(n.x+Math.cos(e)*4,n.y+2.2+Math.sin(this.t*2)*.5,n.z+Math.sin(e)*4),this.stateT>2.2+Math.random()*.5&&(this.setState(`windup`),this.game.audio.play(`bat`)),r>18&&this.setState(`idle`);break}case`windup`:i.copy(this.pos).setY(this.pos.y+.6),this.stateT>.5&&(this.setState(`swoop`),this.swoopFrom.copy(n));break;case`swoop`:{let t=yf.copy(this.swoopFrom).sub(this.pos).normalize();this.vel.lerp(t.multiplyScalar(13),1-Math.exp(-e*6)),(this.stateT>.9||this.pos.distanceTo(this.swoopFrom)<.5)&&this.setState(`circle`);break}case`hurt`:this.stateT>.4&&this.setState(`circle`)}if(this.state!==`swoop`&&this.state!==`hurt`){let t=i.sub(this.pos);this.vel.lerp(t.multiplyScalar(2.2),1-Math.exp(-e*3))}this.state===`hurt`&&(this.vel.y-=15*e);let a=this.world.vol;this.pos.addScaledVector(this.vel,e);let o=a.sample(this.pos.x,this.pos.y,this.pos.z);o<this.radius&&(a.gradient(this.pos.x,this.pos.y,this.pos.z,bf,.2),this.pos.x+=bf.x*(this.radius-o),this.pos.y+=bf.y*(this.radius-o),this.pos.z+=bf.z*(this.radius-o),this.state===`swoop`&&this.setState(`circle`)),this.touchPlayer(.4)&&this.state===`swoop`&&(t.hurt(this.pos,1),this.setState(`circle`));let s=this.model,c=Math.sin(this.t*(this.state===`swoop`?8:18));for(let e of s.wings)e.g.rotation.z=e.side*(c*.9+(this.state===`swoop`?-.9:0));Math.hypot(this.vel.x,this.vel.z)>.3&&(this.yaw=Math.atan2(this.vel.x,this.vel.z)),(this.state===`circle`||this.state===`windup`)&&(this.yaw=Math.atan2(n.x-this.pos.x,n.z-this.pos.z)),this.group.position.copy(this.pos),this.group.rotation.set(this.state===`swoop`?.6:0,this.yaw,0),this.hitSphere.c.copy(this.pos),this.updateFlash(e),Math.random()<e*4&&this.world.fx.glow.emit(this.pos.x,this.pos.y,this.pos.z,0,-.5,0,{life:.8,size:.15,size1:0,color:new G(.6,.95,1),alpha:1,drag:1})}},kf=class extends Ef{constructor(e,t){super(e,t),this.model=Tf(t.scale??1),this.group.add(this.model.root),this.hp=5,this.radius=.75,this.gold=10,this.hitSphere={c:new U,r:1.2},this.walkPh=0,this.yaw=t.yaw??0}update(e){if(!this.alive)return;this.stateT+=e;let t=this.player,n=yf.copy(t.pos).sub(this.pos),r=n.length(),i=Math.atan2(n.x,n.z),a=0,o=this.model;switch(this.state){case`idle`:r<11&&this.sees(11)&&(this.setState(`walk`),this.game.audio.play(`golem`));break;case`walk`:this.yaw=ju(this.yaw,i,e*2.5),a=2.4,r<2.8&&this.setState(`raise`),r>16&&this.setState(`idle`);break;case`raise`:if(this.yaw=ju(this.yaw,i,e*1.5),this.stateT>.85){this.setState(`slam`);let e=this.pos.clone().add(new U(Math.sin(this.yaw)*1.6,0,Math.cos(this.yaw)*1.6));this.world.fx.ring(e,3.2,.45,16756848),this.world.fx.puff(e,20,{color:new G(.7,.6,.5),speed:5,size:.8,size1:2.2,life:.9,alpha:.5}),this.game.audio.play(`slam`,{power:.7}),this.game.cameraRig.shake(.25),t.pos.distanceTo(e)<2.8&&t.pos.y<e.y+1.2&&t.hurt(e,1)}break;case`slam`:this.stateT>1&&this.setState(`walk`);break;case`hurt`:this.stateT>.35&&this.setState(`walk`)}if(this.state!==`hurt`){let t=Math.sin(this.yaw),n=Math.cos(this.yaw),r=1-Math.exp(-e*8);this.vel.x+=(t*a-this.vel.x)*r,this.vel.z+=(n*a-this.vel.z)*r}else this.vel.x*=Math.exp(-e*5),this.vel.z*=Math.exp(-e*5);this.physics(e),this.touchPlayer(.15)&&t.hurt(this.pos,1);let s=Math.hypot(this.vel.x,this.vel.z);this.walkPh+=e*s*2.2,o.legs[0].rotation.x=Math.sin(this.walkPh)*.5,o.legs[1].rotation.x=-Math.sin(this.walkPh)*.5;let c=Math.sin(this.walkPh)*.3;this.state===`raise`&&(c=-2.8*Math.min(1,this.stateT/.6)),this.state===`slam`&&(c=this.stateT<.15?-2.8+this.stateT/.15*2.2:-.6),o.arms[0].rotation.x=Gl(o.arms[0].rotation.x,(this.state===`walk`||this.state,c),20,e),o.arms[1].rotation.x=Gl(o.arms[1].rotation.x,this.state===`walk`||this.state===`idle`?-c:c,20,e),o.body.rotation.x=this.state===`raise`?-.2:this.state===`slam`?.35:0,o.body.position.y=.7+Math.abs(Math.sin(this.walkPh))*.06,o.eyeMat.emissiveIntensity=this.state===`raise`?5:2.2,this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,this.hitSphere.c.set(this.pos.x,this.pos.y+1.4,this.pos.z),this.updateFlash(e)}},Af=new Bl(777),jf=e=>new G(e),Mf=new U,Nf=new U;function Pf(){let e=_u({key:`boss`,rim:16756848,rimStrength:.5}),t=(e,t)=>{let n=jf(5917248).lerp(jf(9073762),.5+.5*Af.noise(e.x*.9,e.y*.9,e.z*.9)),r=t?Vl(t.y,0,1):0;n.lerp(jf(10521200),r*.35);let i=Vl((r-.55)*3,0,1)*Vl(Af.noise(e.x*1.2+5,e.y*1.2,e.z*1.2)*2+.6,0,1);n.lerp(jf(5798452),i*.85);let a=1-Vl(Math.abs(Af.noise(e.x*.55+9,e.y*.55,e.z*.55))/.07,0,1);return n.lerp(jf(16747066),a*a*(1-i))},n=Y([X.ellipsoid(J(0,1.6,0),J(1.7,1.5,1.25)),X.ellipsoid(J(0,2.4,-.3),J(2,.9,1.2)),X.sphere(J(1.55,2.6,-.2),.85),X.sphere(J(-1.55,2.6,-.2),.85),X.ellipsoid(J(0,.55,0),J(1.2,.6,.9)),X.sphere(J(0,1.9,1.15),.62,{sub:!0,k:.15})],t,{cell:.09,k:.35}),r=Y([X.box(J(0,.35,.1),J(.75,.55,.65),.3),X.box(J(0,-.05,.45),J(.6,.2,.4),.15),X.capsule(J(.6,.7,0),J(1.1,1.3,-.3),.18,.05),X.capsule(J(-.6,.7,0),J(-1.1,1.3,-.3),.18,.05),X.box(J(0,.45,.75),J(.6,.08,.1),.04,{sub:!0})],t,{cell:.06,k:.15}),i=Y([X.sphere(J(0,0,0),.75),X.capsule(J(0,-.2,0),J(0,-1.5,.1),.6,.55)],t,{cell:.08,k:.2}),a=Y([X.capsule(J(0,0,0),J(0,-1.3,.1),.55,.7),X.box(J(0,-1.9,.15),J(.85,.7,.8),.35)],t,{cell:.08,k:.2}),o=Y([X.capsule(J(0,0,0),J(0,-1.1,0),.65,.6),X.box(J(0,-1.3,.3),J(.65,.3,.9),.25)],t,{cell:.08}),s=new cn,c=new cn;c.position.y=1.6,s.add(c);let l=(t,n)=>{let r=new K(t,e);return r.castShadow=!0,n.add(r),r};l(n,c);let u=new cn;u.position.set(0,3.3,.3),c.add(u),l(r,u);let d=new Yi({color:16777215,emissive:16752704,emissiveIntensity:3}),f=new K(new Oi(1.1,.12,.08),d);f.position.set(0,.45,.78),u.add(f);let p=[],m=new Yi({color:2767462,emissive:7336191,emissiveIntensity:.8,roughness:.1,flatShading:!0}),h=[];for(let e of[1,-1]){let t=new cn;t.position.set(2.1*e,2.6,-.1),c.add(t),l(i,t);let n=new cn;n.position.set(0,-1.6,.1),t.add(n),l(a,n);let r=new Pi(.45,0);r.scale(.8,1.4,.8);let o=new K(r,m.clone());o.position.set(0,-1.7,.95),o.rotation.x=1.2,n.add(o),h.push(o),p.push({sh:t,el:n,side:e})}let g=[];for(let e of[1,-1]){let t=new cn;t.position.set(.85*e,.2,0),c.add(t),l(o,t),g.push(t)}let _=new Yi({color:16769184,emissive:16751146,emissiveIntensity:3,roughness:.2}),v=new K(new Ni(.5,1),_);v.position.set(0,1.9,1.05),c.add(v);let y=kd(16752704,3.5,.7);y.position.copy(v.position),c.add(y);let b=new K(Y([X.box(J(0,0,0),J(.75,.75,.22),.15)],t,{cell:.05}),e);return b.position.set(0,1.9,1.35),b.castShadow=!0,c.add(b),{root:s,body:c,head:u,arms:p,legs:g,mats:[e],eyeMat:d,core:v,coreMat:_,coreGlow:y,plate:b,fistCrystals:h}}var Ff=class{constructor(e,t,n){this.boss=e,this.mesh=Wd(.9),this.pos=t.clone();let r=1.25;this.vel=new U((n.x-t.x)/r,(n.y-t.y)/r+11*r,(n.z-t.z)/r),this.alive=!0,this.mesh.position.copy(this.pos),this.marker=new K(new Ii(1.6,2,32).rotateX(-Math.PI/2),new Hr({color:16738864,transparent:!0,opacity:.7,depthWrite:!1})),this.marker.position.copy(n).setY(n.y+.15)}update(e,t){if(this.vel.y-=22*e,this.pos.addScaledVector(this.vel,e),this.mesh.position.copy(this.pos),this.mesh.rotation.x+=e*5,this.mesh.rotation.z+=e*3,this.marker.material.opacity=.4+Math.sin(performance.now()/60)*.3,t.vol.sample(this.pos.x,this.pos.y,this.pos.z)<.9||this.pos.y<-2){this.alive=!1,t.dig(this.pos,2,{power:1.2,dir:new U(0,-1,0)}),t.fx.ring(this.pos,4,.4,16756848),t.game.cameraRig.shake(.35),t.game.audio.play(`boss_slam`);let e=t.game.player;e.pos.distanceTo(this.pos)<2.6&&e.hurt(this.pos,1)}}},If=class extends Yd{constructor(e,t){super(e,t),this.model=Pf(),this.group.add(this.model.root),this.arena=new U().fromArray(t.arena),this.arenaR=t.arenaR,this.vel=new U,this.yaw=Math.PI,this.state=`dormant`,this.stateT=0,this.phase=1,this.coreHP=3,this.maxCore=9,this.totalHits=0,this.fistHits=0,this.flash=0,this.projectiles=[],this.walkPh=0,this.slamCount=0,this.hitSphere=null,this.fistSpheres=[{c:new U,r:1.1},{c:new U,r:1.1}],this.coreSphere={c:new U,r:1},this.lightSource={pos:new U,color:16751168,intensity:16,range:12},this.waves=[],this.group.position.copy(this.pos),this.model.root.position.y=0,this.awake=!1,this.isBoss=!0}setState(e){this.state=e,this.stateT=0}get hp01(){return(this.maxCore-this.totalHits)/this.maxCore}wake(){this.awake||(this.awake=!0,this.setState(`intro`),this.game.audio.play(`roar`),this.game.audio.playSong(`boss`),this.game.hud.bossBar(`大地の巨像 グラヴモウ`,1),this.game.cutsceneLook(this.pos.clone().setY(this.pos.y+5),2.8),this.game.cameraRig.shake(.6))}hitTest(e,t,n,r){let i=i=>{Mf.copy(i.c).sub(e);let a=Math.max(0,Math.min(n,Mf.dot(t)));return Nf.copy(e).addScaledVector(t,a),Nf.distanceTo(i.c)<i.r+r};if(this.state===`stagger`&&i(this.coreSphere))return`core`;for(let e=0;e<2;e++)if(i(this.fistSpheres[e]))return`fist`+e;return Mf.copy(this.pos).setY(this.pos.y+3),i({c:Mf,r:2.2})?`body`:null}hitPart(e,t){let n=this.game.audio;if(e===`core`)return this.totalHits++,this.coreHP--,this.flash=1,n.play(`core_hit`),this.world.fx.puff(this.coreSphere.c,22,{color:new G(1,.6,.25),speed:9,size:.22,size1:.02,life:.8,additive:!0}),this.world.fx.flash(this.coreSphere.c,2,.15,16760960),this.game.hitstop(.12),this.game.cameraRig.shake(.5),this.game.hud.bossBar(null,this.hp01),this.totalHits>=this.maxCore?this.defeat():(this.coreHP<=0&&(this.setState(`recover`),this.phase++,this.coreHP=3,this.game.audio.play(`roar`)),!0);if(e===`fist0`||e===`fist1`){if(this.state===`stuck`){this.fistHits++;let t=this.model.fistCrystals[e===`fist0`?0:1];t.material.emissiveIntensity=3,n.play(`impact_crystal`),this.world.fx.puff(this.fistSpheres[e===`fist0`?0:1].c,20,{color:new G(.5,.95,1),speed:6,size:.3,size1:.02,life:.8,additive:!0}),this.game.hitstop(.07),this.fistHits>=3&&(this.setState(`stagger`),this.fistHits=0,n.play(`roar`),this.game.cameraRig.shake(.6),this.breakPlate(),this.game.hud.toast(`コアがむき出しだ！ 胸を殴れ！`,`rune`))}else n.play(`impact_metal`);return!0}return e===`body`&&(n.play(`impact_metal`),this.world.fx.puff(Mf.copy(this.pos).setY(this.pos.y+3),10,{color:new G(1,.75,.35),speed:7,size:.15,size1:.02,life:.4,additive:!0,gravity:10}),this.hintShown||(this.hintShown=!0,this.game.hud.toast(`岩の鎧が硬い… 拳を叩きつけた後がチャンス！`,`info`)),!0)}breakPlate(){let e=this.model.plate;if(!e.visible)return;e.visible=!1;let t=e.getWorldPosition(new U);this.world.fx.spawnDebris(t,new U(Math.sin(this.yaw),.5,Math.cos(this.yaw)),18,new G(.5,.42,.36),8,1.4),this.world.fx.puff(t,25,{color:new G(.6,.5,.45),speed:5,size:1,size1:2.5,life:1,alpha:.6})}defeat(){return this.setState(`defeat`),this.game.audio.play(`roar`),this.game.hud.bossBar(null,0),this.game.onBossDefeated(this),!0}update(e){this.stateT+=e;let t=this.player,n=this.model,r=Mf.copy(t.pos).sub(this.pos);r.y=0;let i=r.length(),a=Math.atan2(r.x,r.z),o=0,s=this.phase,c=s===1?1:s===2?1.2:1.4,l=.2,u=.2,d=-.4,f=0,p=0,m=.15,h=0;switch(this.state){case`dormant`:t.pos.distanceTo(this.arena)<this.arenaR-2&&this.wake(),f=.3,h=.4;break;case`intro`:l=u=-2.6,m=.7,h=-.4,this.stateT>2.6&&this.setState(`walk`);break;case`walk`:this.yaw=ju(this.yaw,a,e*1.2*c),o=i>5?2.6*c:0,this.stateT>1.2&&(i<7.5?this.setState(`slamUp`):s>=1&&Math.random()<.55?this.setState(`throwUp`):(i<12||this.stateT>4)&&this.setState(`slamUp`));break;case`slamUp`:{this.yaw=ju(this.yaw,a,e*1.5);let t=Math.min(1,this.stateT/(.9/c));l=u=Hl(.2,-2.9,t),d=-.2,f=-.25*t,m=.3,n.eyeMat.emissiveIntensity=3+t*5,this.stateT>1/c&&this.doSlam();break}case`stuck`:l=u=-1.25,d=-.1,f=.55,m=.25;for(let e of n.fistCrystals)e.material.emissiveIntensity=1.5+Math.sin(this.stateT*10)*1;if(this.stateT>3.2-s*.3){this.setState(`walk`),this.fistHits=0;for(let e of n.fistCrystals)e.material.emissiveIntensity=.8}break;case`throwUp`:if(this.yaw=ju(this.yaw,a,e*2),u=Hl(.3,-2.8,Math.min(1,this.stateT/.8)),l=.3,d=-.6,this.stateT>.8&&!this.thrown){this.thrown=!0;let e=new U(this.pos.x,this.pos.y+6,this.pos.z),n=s>=3?3:s>=2?2:1;for(let r=0;r<n;r++){let n=t.pos.clone().add(new U((Math.random()-.5)*(r?6:1),0,(Math.random()-.5)*(r?6:1)));n.y=this.findFloor(n);let i=new Ff(this,e,n);this.projectiles.push(i),this.world.root.add(i.mesh,i.marker)}this.game.audio.play(`whoosh`,{power:2})}this.stateT>1.4&&(this.thrown=!1,this.setState(`walk`));break;case`stagger`:p=1,f=.45,l=u=.6,m=.6,h=.5,n.eyeMat.emissiveIntensity=.6,this.stateT>5.5&&this.setState(`recover`);break;case`recover`:p=Math.max(0,1-this.stateT),l=u=-2,m=.8,this.stateT>1.5&&(this.model.plate.visible=!0,this.coreHP=3,this.setState(`walk`),this.phase>=2&&this.spawnRubbleRain());break;case`defeat`:if(p=Math.min(1,this.stateT),f=.3+this.stateT*.2,n.eyeMat.emissiveIntensity=Math.max(0,3-this.stateT*2),Math.random()<e*20){let e=Nf.set(this.pos.x+(Math.random()-.5)*4,this.pos.y+Math.random()*6,this.pos.z+(Math.random()-.5)*4);this.world.fx.puff(e,3,{color:new G(.6,.5,.45),speed:3,size:1,size1:2.5,life:1,alpha:.5}),Math.random()<.3&&this.world.fx.spawnDebris(e,new U,2,new G(.5,.42,.36),3,1.5)}this.stateT>3&&this.model.root.visible&&(this.model.root.visible=!1,this.world.fx.puff(Mf.copy(this.pos).setY(this.pos.y+3),80,{color:new G(.6,.5,.45),speed:9,size:1.5,size1:4,life:2,alpha:.6}),this.world.fx.spawnDebris(Mf,new U,50,new G(.5,.42,.36),10,2),this.game.audio.play(`boss_slam`),this.game.cameraRig.shake(1))}let g=Math.sin(this.yaw),_=Math.cos(this.yaw);this.vel.x=Gl(this.vel.x,g*o,4,e),this.vel.z=Gl(this.vel.z,_*o,4,e),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let v=Nf.copy(this.pos).sub(this.arena);if(v.y=0,v.length()>this.arenaR-3&&(v.setLength(this.arenaR-3),this.pos.x=this.arena.x+v.x,this.pos.z=this.arena.z+v.z),this.pos.y=Gl(this.pos.y,this.findFloor(this.pos),6,e),this.state!==`dormant`&&this.state!==`defeat`){let e=Nf.copy(t.pos).sub(this.pos);e.y=0,e.length()<2.4&&t.pos.y<this.pos.y+4&&(e.setLength(2.4-e.length()),t.pos.add(e),this.state===`walk`&&t.hurt(this.pos,1))}this.walkPh+=e*Math.hypot(this.vel.x,this.vel.z)*1.2;let y=Math.sin(this.walkPh);o>0&&(l+=y*.3,u-=y*.3);let b=n.arms,x=this.state===`slamUp`||this.state===`stuck`?14:5;b[0].sh.rotation.x=Gl(b[0].sh.rotation.x,l,x,e),b[1].sh.rotation.x=Gl(b[1].sh.rotation.x,u,x,e),b[0].sh.rotation.z=Gl(b[0].sh.rotation.z,m,5,e),b[1].sh.rotation.z=Gl(b[1].sh.rotation.z,-m,5,e),b[0].el.rotation.x=Gl(b[0].el.rotation.x,d,6,e),b[1].el.rotation.x=Gl(b[1].el.rotation.x,d,6,e),n.legs[0].rotation.x=o?y*.35:Gl(n.legs[0].rotation.x,-p*1.2,4,e),n.legs[1].rotation.x=o?-y*.35:Gl(n.legs[1].rotation.x,p*.6,4,e),n.body.rotation.x=Gl(n.body.rotation.x,f,5,e),n.body.position.y=Gl(n.body.position.y,1.6-p*1.1+Math.abs(y)*.1,5,e),n.head.rotation.x=Gl(n.head.rotation.x,h,4,e),this.state,n.root.scale.setScalar(1),this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,this.group.updateMatrixWorld(!0),n.fistCrystals[0].getWorldPosition(this.fistSpheres[0].c),n.fistCrystals[1].getWorldPosition(this.fistSpheres[1].c),n.core.getWorldPosition(this.coreSphere.c),this.lightSource.pos.copy(this.coreSphere.c),this.lightSource.intensity=this.state===`stagger`?30:10,n.coreMat.emissiveIntensity=this.state===`stagger`?4+Math.sin(this.stateT*12)*1.5:2,n.coreGlow.material.opacity=this.state===`stagger`?.9:n.plate.visible?0:.5,this.flash=Math.max(0,this.flash-e*4),n.mats[0].userData.flash.value=this.flash;for(let t=this.projectiles.length-1;t>=0;t--){let n=this.projectiles[t];n.update(e,this.world),n.alive||(this.world.root.remove(n.mesh,n.marker),this.projectiles.splice(t,1))}for(let n=this.waves.length-1;n>=0;n--){let r=this.waves[n];r.r+=e*r.speed;let i=Math.hypot(t.pos.x-r.c.x,t.pos.z-r.c.z);!r.hit&&Math.abs(i-r.r)<.8&&t.pos.y<r.c.y+.8&&t.grounded&&(r.hit=!0,t.hurt(r.c,1)),r.r>r.max&&this.waves.splice(n,1)}if(this.rain&&(this.rain.t-=e,this.rain.t<=0&&this.rain.n>0)){this.rain.n--,this.rain.t=.5;let e=t.pos.clone().add(new U((Math.random()-.5)*8,0,(Math.random()-.5)*8));e.y=this.findFloor(e);let n=new Ff(this,e.clone().setY(e.y+22),e);n.vel.set(0,-4,0),this.projectiles.push(n),this.world.root.add(n.mesh,n.marker)}}spawnRubbleRain(){this.rain={n:4+this.phase*2,t:.5},this.game.hud.toast(`天井が崩れてくる！`,`warn`)}doSlam(){this.setState(`stuck`),this.slamCount++;let e=new U(this.pos.x+Math.sin(this.yaw)*3.4,0,this.pos.z+Math.cos(this.yaw)*3.4);e.y=this.findFloor(e),this.world.dig(e,2.2,{power:1.6,dir:new U(0,-1,0)}),this.world.fx.ring(e,18,1.4,16748624,.8),this.world.fx.ring(e,6,.5,16769200,1),this.game.audio.play(`boss_slam`),this.game.cameraRig.shake(.8),this.game.rumble?.(1,300),this.waves.push({c:e,r:1,speed:9+this.phase*2,max:18,hit:!1});let t=this.player;t.pos.distanceTo(e)<2.8&&t.hurt(e,1),this.slamHint||(this.slamHint=!0,this.game.hud.toast(`衝撃波はジャンプでかわせ！ 拳の結晶を殴れ！`,`info`))}findFloor(e){let t=this.world.vol.raycast(e.x,e.y+6,e.z,0,-1,0,20);return t>=0?e.y+6-t:e.y}hit(){return!1}},Lf=new U,Rf=new U,zf=class{constructor(e,t){this.game=e,this.def=t,this.theme=t.theme,this.scene=e.scene,this.root=new cn,this.scene.add(this.root),this.noise=new Bl(t.seed),this.fx=e.fx,this.entities=[],this.lights=[],this.edits=[],this.time=0,this.echoT=-1}async load(e){let t=this.def,n=this.vol=new bu(Math.round(t.size[0]/t.voxel)+1,Math.round(t.size[1]/t.voxel)+1,Math.round(t.size[2]/t.voxel)+1,t.voxel),r=t.build(this.noise).build(),{nx:i,ny:a,nz:o,s,f:c,m:l}=n,u=[0,0],d=performance.now();for(let t=0;t<o;t++){for(let e=0;e<a;e++){let d=e*i+t*n.sxy;for(let n=0;n<i;n++,d++){if(n===0||e===0||t===0||n===i-1||e===a-1||t===o-1){c[d]=-4,l[d]=Z.BEDROCK;continue}r(n*s,e*s,t*s,u);let f=u[0];c[d]=f>4?4:f<-4?-4:f,l[d]=u[1]}}performance.now()-d>40&&(e?.(.05+t/o*.55,`地形を生成中…`),await new Promise(e=>setTimeout(e,0)),d=performance.now())}let f=this.game.save.edits(t.id);for(let e of f)n.carve(e[0],e[1],e[2],e[3],{power:e[4],gauntlet:!!e[5],noise:this.noise,rough:.35});this.edits=f.slice(),this.terrain=new fd(n,this.theme),await this.terrain.buildAllAsync(t=>e?.(.6+.25*t,`メッシュを構築中…`)),this.root.add(this.terrain.group),e?.(.86,`植物と鉱石を配置中…`),await new Promise(e=>setTimeout(e,0)),this.decor=new Cd(this.root,this),t.decor===`crystal`?this.decor.setupCrystal():t.decor===`temple`?this.decor.setupTemple():this.decor.setupVerdant(),e?.(.93,`生き物を配置中…`),await new Promise(e=>setTimeout(e,0)),this.gold=new Zd(this),this.root.add(this.gold.mesh),this.setupLighting(),this.spawnEntities(),e?.(1,`準備完了`)}setupLighting(){let e=this.theme;this.scene.fog=new gn(e.fog,e.fogDensity),this.scene.background=new G(e.bg),this.hemi=new va(e.hemiSky,e.hemiGround,e.hemiInt),this.root.add(this.hemi);let t=this.key=new La(e.keyColor,e.keyInt);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let n=t.shadow.camera;n.left=-16,n.right=16,n.top=16,n.bottom=-16,n.near=1,n.far=80,t.shadow.bias=-8e-4,t.shadow.normalBias=.04,t.shadow.radius=3,this.keyDir=new U(...e.keyDir).normalize(),this.root.add(t,t.target);for(let e=0;e<6;e++){let e=new Pa(16777215,0,10,1.8);this.root.add(e),this.lights.push(e)}this.playerLight=new Pa(e.playerLight??16769200,e.playerLightInt??6,9,1.6),this.root.add(this.playerLight)}snapToFloor(e){let[t,n,r]=e.pos,i=this.vol.raycast(t,n+2,r,0,-1,0,5);i>=0&&(e.pos=[t,n+2-i,r])}spawnEntities(){let e=0,t=new Set([`sign`,`urn`,`brazier`,`checkpoint`,`rune`,`relic`,`beacon`,`cage`,`grub`,`golem`,`gate`]);for(let n of this.def.entities){let r={...n};t.has(r.type)&&this.snapToFloor(r);let i=null;switch(r.type){case`spawn`:this.spawnPoint=r;break;case`sunstone`:this.game.save.hasSunstone(r.id)||(i=new Xd(this,r));break;case`rune`:i=new $d(this,r);break;case`gate`:i=new ef(this,r);break;case`relic`:i=new tf(this,r);break;case`checkpoint`:i=new nf(this,r);break;case`sign`:case`hint`:i=new rf(this,r);break;case`urn`:i=new af(this,r,e++);break;case`brazier`:i=new of(this,r);break;case`godray`:i=new sf(this,r);break;case`skylight`:i=new cf(this,r);break;case`exitShaft`:i=new lf(this,r);break;case`shimmer`:i=new uf(this,r);break;case`boulder`:i=new df(this,r);break;case`beacon`:i=new ff(this,r);break;case`cage`:i=new pf(this,r);break;case`liquid`:i=new mf(this,r);break;case`grub`:i=new Df(this,r);break;case`bat`:i=new Of(this,r);break;case`golem`:i=new kf(this,r);break;case`seal`:i=new hf(this,r);break;case`suncore`:i=new gf(this,r);break;case`boss`:this.game.save.flag(`boss_defeated`)||(i=new If(this,r))}i&&(i.id=i.id??r.id,this.add(i))}for(let e of this.entities)e instanceof ef&&e.refresh()}add(e){return this.entities.push(e),this.root.add(e.group),e}dig(e,t,n={}){let r=this.game.save.has(`gauntlet`),i=n.power??1,a=this.vol.carve(e.x,e.y,e.z,t,{power:1,gauntlet:r,noise:this.noise,rough:.35}),o=0;for(let e=0;e<8;e++)o+=a.removed[e];if(a.changed){this.terrain.markDirty(a.bounds,!0);let n=a.bounds;this.terrain.markDirty([n[0]-6,n[1]-6,n[2]-6,n[3]+6,n[4]+6,n[5]+6],!1),this.edits.push([+e.x.toFixed(2),+e.y.toFixed(2),+e.z.toFixed(2),+t.toFixed(2),1,+!!r]),this.edits.length>6e3&&this.edits.shift(),this.game.save.markEdits(this.def.id,this.edits),this.game.stats.dug+=o}let s=n.dir||new U(0,-1,0);if(!n.silent){this.fx.terrainImpact(e,s,a.removed,i,a.blocked>0&&o<3);let t=-1,n=0;for(let e=0;e<8;e++)a.removed[e]>n&&(n=a.removed[e],t=e);let r=this.game.audio;t===Z.CRYSTAL?r.play(`impact_crystal`,{power:i}):t===Z.DIRT?r.play(`impact_dirt`,{power:Math.min(1.4,.6+o/40)}):t>=0?r.play(`impact_rock`,{power:Math.min(1.4,.6+o/40)}):a.blocked?r.play(`impact_metal`):r.play(`impact_rock`,{power:.4})}let c=Math.min(14,Math.round(a.removed[Z.GOLD]*.45));c>0&&this.gold.spawn(e,c,4);let l=Math.min(6,Math.round(a.removed[Z.CRYSTAL]*.2));l>0&&this.gold.spawn(e,l,4),this.decor.onDig(e,t);for(let n of this.entities)n.alive&&n.onDig(e,t);return{...a,total:o}}blockedFeedback(e,t){let n=this.vol.materialAt(e.x,e.y,e.z),r=performance.now();r-(this.lastBlockMsg||0)<2500||(this.lastBlockMsg=r,n===Z.HARD?this.game.hud.toast(`硬すぎる！ 特別な籠手が必要だ`,`warn`):n===Z.ANCIENT?this.game.hud.toast(`古代石はびくともしない`,`warn`):n===Z.BEDROCK&&this.game.hud.toast(`岩盤は壊せない`,`warn`))}hitEntities(e,t,n,r,i,a,o){let s=!1;for(let c of this.entities){if(!c.alive)continue;if(c.hitTest){let a=c.hitTest(e,t,n,r);a&&c.hitPart(a,i)&&(s=!0);continue}if(!c.hitSphere)continue;let l=c.hitSphere.c;Lf.copy(l).sub(e);let u=Math.max(0,Math.min(n,Lf.dot(t)));Rf.copy(e).addScaledVector(t,u),Rf.distanceTo(l)<c.hitSphere.r+r&&c.hit(i,t,a,o)&&(s=!0)}return s}hitEntitiesRadius(e,t,n,r,i){let a=!1;for(let o of this.entities)if(o.alive){if(o.hitTest){if(o.state===`stagger`&&o.coreSphere.c.distanceTo(e)<t+1.5)o.hitPart(`core`,n)&&(a=!0);else for(let r=0;r<2;r++)if(o.fistSpheres[r].c.distanceTo(e)<t+1){o.hitPart(`fist`+r,n)&&(a=!0);break}}else if(o.hitSphere&&o.hitSphere.c.distanceTo(e)<t+o.hitSphere.r){let t=Lf.copy(o.hitSphere.c).sub(e).setY(0);t.lengthSq()<1e-4&&t.set(1,0,0),t.normalize(),o.hit(n,t.clone(),r,i)&&(a=!0)}}return a}collideActor(e,t,n,r){let i=null;for(let a of this.entities){let o=a.collider;if(!a.alive||!o)continue;if(o.sphere){for(let a of n){Lf.set(e.x,e.y+a,e.z).sub(o.c);let n=Lf.length();if(n<t+o.r&&n>1e-4){Lf.multiplyScalar((t+o.r-n)/n),e.add(Lf);let a=Lf.normalize(),s=r.dot(a);s<0&&r.addScaledVector(a,-s),i||={},a.y>.6&&(i.ground=!0)}}continue}let s=o.min,c=o.max;for(let a of n){let n=e.y+a,o=Math.max(s.x,Math.min(e.x,c.x)),l=Math.max(s.y,Math.min(n,c.y)),u=Math.max(s.z,Math.min(e.z,c.z)),d=e.x-o,f=n-l,p=e.z-u,m=d*d+f*f+p*p;if(m<t*t){let a=Math.sqrt(m);if(a<1e-4){let r=c.y-n+t;d=0,f=1,p=0,a=0,e.y+=Math.min(r,.5)}else{let n=t-a;d/=a,f/=a,p/=a,e.x+=d*n,e.y+=f*n,e.z+=p*n}let o=r.x*d+r.y*f+r.z*p;o<0&&(r.x-=d*o,r.y-=f*o,r.z-=p*o),i||={},f>.6&&(i.ground=!0)}}}return i}propGroundBelow(e,t){for(let n of this.entities){let r=n.collider;if(n.alive&&r&&!r.sphere&&e.x>r.min.x-.2&&e.x<r.max.x+.2&&e.z>r.min.z-.2&&e.z<r.max.z+.2){let n=e.y-r.max.y;if(n>=-.05&&n<=t)return Math.max(0,n)}}return null}boulderHits(e){for(let t of this.entities)if(t instanceof pf&&!t.broken&&t.alive){if(Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<t.r+e.r*.8&&e.pos.y<t.pos.y+t.h+e.r+.5){t.smash(),e.shatter();return}}else(t instanceof Df||t instanceof kf)&&t.alive&&t.pos.distanceTo(e.pos)<e.r+1&&t.hit(5,e.vel.clone().normalize(),e,!0);let t=this.game.player;e.vel.length()>3&&t.pos.distanceTo(e.pos)<e.r+.6&&t.hurt(e.pos,1)}collectSunstone(e){this.game.save.addSunstone(e.id),this.game.audio.play(`sunstone`),this.game.hud.sunstone(this.game.save.sunstoneCount()),this.game.hitstop(.12),this.game.onSunstone()}collectGold(e){this.game.save.data.gold+=e,this.game.hud.gold(this.game.save.data.gold),this.game.audio.play(`gold`)}spawnHeart(e){this.add(new Qd(this,{pos:[e.x,e.y,e.z]}))}countSwitches(e){let t=0;for(let n of this.entities)n.groupId===e&&(n instanceof $d||n instanceof ff)&&n.active&&t++;return t}onSwitch(e){for(let t of this.entities)t instanceof ef&&t.groupId===e&&t.refresh();this.game.onSwitch(e,this.countSwitches(e))}onPlayerFell(e,t){e.dead||this.fallLock||(this.fallLock=!0,this.game.audio.play(t===`lava`?`hurt`:`fall`),this.game.respawnAfterFall(t),this.game.after(1.2,()=>this.fallLock=!1))}echo(e){this.echoT>=0&&this.echoT<1.2||(this.echoT=0,this.echoOrigin=e.pos.clone().setY(e.pos.y+1),this.game.audio.play(`echo`),this.fx.ring(e.pos,6,.5,9431295),e.model.J.torso.rotation.x=-.2)}update(e,t){this.time+=e;let n=this.game.player;for(let t=this.entities.length-1;t>=0;t--){let n=this.entities[t];n.alive&&n.update(e),n.alive||this.entities.splice(t,1)}this.gold.update(e,n),this.decor.update(e,this.time),this.terrain.flushDirty(5);let r=this.terrain.material.userData.uniforms;if(r.uTime.value=this.time,this.echoT>=0){this.echoT+=e;let t=this.echoT*22;r.uReveal.value.set(this.echoOrigin.x,this.echoOrigin.y,this.echoOrigin.z,t);for(let e of this.entities)e instanceof Xd&&e.buried&&!e.revealed&&e.pos.distanceTo(this.echoOrigin)<t&&(e.revealed=!0,this.game.hud.ping(e.pos,6));if(this.echoT>1.6){this.echoT=-1,r.uReveal.value.w=0;for(let e of this.entities)e instanceof Xd&&(e.revealed=!1)}}let i=n.pos;this.key.position.set(i.x+this.keyDir.x*30,i.y+this.keyDir.y*30,i.z+this.keyDir.z*30),this.key.target.position.set(i.x,i.y,i.z),this.playerLight.position.set(i.x,i.y+2.4,i.z);let a=[];for(let e of this.entities){let t=e.lightSource;if(!e.alive||!t||t.intensity<=0)continue;let n=t.pos.distanceToSquared(i);a.push([n,t])}a.sort((e,t)=>e[0]-t[0]);for(let e=0;e<this.lights.length;e++){let t=this.lights[e],n=a[e];if(n&&n[0]<2025){let e=n[1];t.position.copy(e.pos),t.color.set(e.color);let r=1-Math.min(1,Math.max(0,(Math.sqrt(n[0])-30)/15));t.intensity=e.intensity*r,t.distance=e.range}else t.intensity=0}}dispose(){this.scene.remove(this.root),this.terrain.dispose();let e=new Set;this.root.traverse(t=>{if(t.isInstancedMesh&&t.dispose?.(),t.geometry?.dispose?.(),t.material)for(let n of[].concat(t.material))e.add(n)});for(let t of e){for(let e of Object.values(t))e?.isTexture&&e.dispose();t.dispose()}}},Bf=1e3,Vf=class{constructor(e){this.noise=e,this.air=[],this.solids=[],this.matRegions=[],this.overrides=[],this.cuts=[],this.plugs=[],this.baseMat=()=>1}room(e,t,n,r,i,a,o={}){let s=o.floor??-1e3,c=o.ceil??Bf,l=o.k??1.2;this.air.push({bb:[e-r,t-i,n-a,e+r,t+i,n+a],rough:o.rough??1,d:(o,u,d)=>{let f=(o-e)/r,p=(u-t)/i,m=(d-n)/a,h=Math.hypot(f,p,m),g=Math.hypot(f/r,p/i,m/a),_=h*(h-1)/(g||1);return s>-1e3&&(_=Wl(_,s-u,l)),c<Bf&&(_=Wl(_,u-c,l)),_}})}box(e,t,n,r,i,a,o=.3,s={}){this.air.push({bb:[e-r,t-i,n-a,e+r,t+i,n+a],rough:s.rough??.15,d:(s,c,l)=>Hf(s-e,c-t,l-n,r,i,a,o)})}cylinder(e,t,n,r,i,a={}){this.air.push({bb:[e-i,n,t-i,e+i,r,t+i],rough:a.rough??1,d:(a,o,s)=>Math.max(Math.hypot(a-e,s-t)-i,n-o,o-r)})}tunnel(e,t,n={}){let r=n.flat??.55;for(let i=0;i<e.length-1;i++){let a=e[i],o=e[i+1],s=Array.isArray(t)?t[i]:t,c=Array.isArray(t)?t[i+1]:t,l=Math.max(s,c);this.air.push({bb:[Math.min(a[0],o[0])-l,Math.min(a[1],o[1])-l,Math.min(a[2],o[2])-l,Math.max(a[0],o[0])+l,Math.max(a[1],o[1])+l,Math.max(a[2],o[2])+l],rough:n.rough??1,d:(e,t,n)=>{let i=o[0]-a[0],l=o[1]-a[1],u=o[2]-a[2],d=e-a[0],f=t-a[1],p=n-a[2],m=Vl((d*i+f*l+p*u)/(i*i+l*l+u*u),0,1),h=s+(c-s)*m,g=Math.hypot(d-i*m,f-l*m,p-u*m)-h,_=a[1]+l*m-h*r;return g=Wl(g,_-t,.6),g}})}}solid(e,t,n,r={}){(r.after?this.overrides:this.solids).push({bb:e,d:t,mat:n,k:r.k??0})}pillar(e,t,n,r,i,a,o={}){let s=o.taper??0;this.solid([e-i-1,n,t-i-1,e+i+1,r,t+i+1],(a,c,l)=>{let u=Vl((c-n)/(r-n),0,1);return Math.max(Math.hypot(a-e,l-t)-i*(1-s*u)-(o.base?Math.max(0,.5-(c-n))*.6:0),n-c,c-r)},a,o)}sphereSolid(e,t,n,r,i,a={}){this.solid([e-r,t-r,n-r,e+r,t+r,n+r],(i,a,o)=>Math.hypot(i-e,a-t,o-n)-r,i,a)}boxSolid(e,t,n,r,i,a,o,s=.2,c={}){this.solid([e-r,t-i,n-a,e+r,t+i,n+a],(o,c,l)=>Hf(o-e,c-t,l-n,r,i,a,s),o,c)}vein(e,t,n){this.matRegions.push({bb:e,d:t,mat:n})}veinSphere(e,t,n,r,i){this.vein([e-r,t-r,n-r,e+r,t+r,n+r],(i,a,o)=>Math.hypot(i-e,a-t,o-n)-r,i)}plug(e,t,n,r,i,a,o,s=.2){this.plugs.push({bb:[e-r,t-i,n-a,e+r,t+i,n+a],d:(o,c,l)=>Hf(o-e,c-t,l-n,r,i,a,s),mat:o})}plugCyl(e,t,n,r,i,a){this.plugs.push({bb:[e-i,n,t-i,e+i,r,t+i],d:(a,o,s)=>Math.max(Math.hypot(a-e,s-t)-i,n-o,o-r),mat:a})}cut(e,t){this.cuts.push({bb:e,d:t})}cutBox(e,t,n,r,i,a,o=.2){this.cut([e-r,t-i,n-a,e+r,t+i,n+a],(s,c,l)=>Hf(s-e,c-t,l-n,r,i,a,o))}build(){let e=this.noise,t=this.air,n=this.solids,r=this.matRegions,i=this.overrides,a=this.cuts,o=this.plugs,s=4.5,c=(e,t,n,r)=>t>e[0]-s&&n>e[1]-s&&r>e[2]-s&&t<e[3]+s&&n<e[4]+s&&r<e[5]+s,l=this.baseMat;return(s,u,d,f)=>{let p=Bf,m=0;for(let e=0;e<t.length;e++){let n=t[e];if(!c(n.bb,s,u,d))continue;let r=n.d(s,u,d);r<p&&(m=n.rough),p=Ul(p,r,1)}let h;if(p<6){let t=m>0?(e.fbm(s*.11,u*.13,d*.11,3)*1.6+e.noise(s*.45,u*.45,d*.45)*.35)*m:0;h=-(p+t)}else h=-p;let g=-1;for(let e=0;e<n.length;e++){let t=n[e];if(!c(t.bb,s,u,d))continue;let r=t.d(s,u,d);r<h&&(h=t.k?Ul(h,r,t.k):r,r<.6&&(g=typeof t.mat==`function`?t.mat(s,u,d):t.mat))}for(let e=0;e<i.length;e++){let t=i[e];if(!c(t.bb,s,u,d))continue;let n=t.d(s,u,d);n<.05&&(g=typeof t.mat==`function`?t.mat(s,u,d):t.mat),n<h&&(h=n)}for(let e=0;e<a.length;e++){let t=a[e];if(!c(t.bb,s,u,d))continue;let n=t.d(s,u,d);-n>h&&(h=-n)}for(let e=0;e<o.length;e++){let t=o[e];if(!c(t.bb,s,u,d))continue;let n=t.d(s,u,d);n<.05&&(g=t.mat),n<h&&(h=n)}if(g<0){g=l(s,u,d);for(let e=0;e<r.length;e++){let t=r[e];c(t.bb,s,u,d)&&t.d(s,u,d)<0&&(g=typeof t.mat==`function`?t.mat(s,u,d):t.mat)}}f[0]=h,f[1]=g}}};function Hf(e,t,n,r,i,a,o=0){let s=Math.abs(e)-r+o,c=Math.abs(t)-i+o,l=Math.abs(n)-a+o;return Math.hypot(Math.max(s,0),Math.max(c,0),Math.max(l,0))+Math.min(Math.max(s,Math.max(c,l)),0)-o}var Uf={id:1,name:`翠の地下遺跡`,sub:`Verdant Ruins`,size:[64,36,84],voxel:.5,seed:1201,theme:{dirtA:5124639,dirtB:8016948,rockA:7103836,rockB:9800314,hard:3226188,crystal:7336191,brick:10785396,ancient:3091256,rune:6160338,bedrock:1840916,moss:5212716,mossAmt:.8,fog:1848102,fogDensity:.02,bg:1253914,hemiSky:11854e3,hemiGround:3811864,hemiInt:1.15,keyColor:16769456,keyInt:2.2,keyDir:[.35,1,.25],bloom:.55,music:`ruins`},build(e){let t=new Vf(e);t.baseMat=(t,n,r)=>{let i=e.fbm(t*.06,n*.09,r*.06,2);return n<4?Z.HARD:n<8+i*4?e.noise(t*.2,n*.2,r*.2)>.55?Z.GOLD:Z.ROCK:i>.22?Z.ROCK:e.noise(t*.12+40,n*.12,r*.12)>.72?Z.GOLD:Z.DIRT},t.room(32,18,11,11,7,9,{floor:13.5}),t.cylinder(32,10,16,33.6,5.5),t.sphereSolid(36.5,13.6,13.5,1.7,Z.DIRT,{k:.8}),t.tunnel([[32,15.5,16],[30,15,24],[28,14.5,32]],3.4),t.sphereSolid(30.6,15.4,23.2,3.5,Z.DIRT),t.room(19,15.2,25,4.5,3,4.2,{floor:13.2}),t.veinSphere(24.3,15.2,25.6,1.6,Z.GOLD),t.veinSphere(16.5,14.5,22.5,1.8,Z.GOLD),t.veinSphere(20.5,17.5,28.5,1.5,Z.GOLD),t.room(32,19,45,17,10,14,{floor:12});for(let e of[20,44])for(let n of[38,46,54]){let r=e===44&&n===46;t.pillar(e,n,11,r?17:30,1.25,Z.BRICK,{base:!0})}t.boxSolid(32,12.6,38,5,1,.45,Z.BRICK,.15),t.boxSolid(37,12.5,50.5,.45,.9,3.5,Z.BRICK,.15),t.boxSolid(19,14.25,41.8,3,3.25,2.8,Z.BRICK,.2),t.boxSolid(19,14.1,41.8,2.3,3.1,2.1,Z.ANCIENT,.1,{after:!0});for(let e=0;e<6;e++){let n=12.4+.85*e;t.boxSolid(29-1.2*e,(11+n)/2,41.8,.62,(n-11)/2,1.5,Z.ANCIENT,.08,{after:!0})}return t.room(55,15,44,4.6,3.3,4.6,{floor:12.5}),t.tunnel([[45,14.6,44],[52,14.6,44]],2.1,{flat:.5}),t.sphereSolid(48.6,14.6,44,2.6,Z.DIRT),t.sphereSolid(57.2,12.2,47.6,1.7,Z.DIRT,{k:.6}),t.room(26,9.4,50,2.7,1.9,2.7,{floor:7.9,rough:.3}),t.vein([22,7,46,30,13,54],(e,t,n)=>Math.hypot(e-26,(t-10)*1.2,n-50)-3.8,Z.DIRT),t.box(32,15.2,57.5,3.2,3.4,3.5,.6,{rough:.3}),t.boxSolid(32,16,70,10,7.5,9.5,Z.ANCIENT,.3,{after:!0}),t.cutBox(32,16.5,70,7,4.5,7,.5),t.cutBox(32,15,60.5,2.2,3,2.2,.3),t.cut([28,2.5,68,36,13,76],(e,t,n)=>Math.max(Math.hypot(e-32,n-72)-2.3,3-t,t-12.6)),t.plugCyl(32,72,11,12.15,2.6,Z.HARD),t},entities:[{type:`spawn`,pos:[32,14.2,7.5],yaw:0},{type:`skylight`,pos:[32,33.4,10],r:5.5},{type:`checkpoint`,id:`a1_start`,pos:[27.5,13.6,9.5]},{type:`checkpoint`,id:`a1_hall`,pos:[27,12.1,34.5]},{type:`checkpoint`,id:`a1_sanct`,pos:[26.5,12.1,66.5]},{type:`sign`,pos:[35.2,14,18.2],text:`やわらかい土の壁だ。
【左クリック】でパンチ！`},{type:`sign`,pos:[29,12.1,35.5],text:`古代の扉は3つの
ルーンストーンで開く`},{type:`sunstone`,id:`a1_s1`,pos:[36.5,13.9,13.5]},{type:`sunstone`,id:`a1_s2`,pos:[44,17.9,46]},{type:`sunstone`,id:`a1_s3`,pos:[18.5,14,25.5]},{type:`sunstone`,id:`a1_s4`,pos:[20,13.6,54]},{type:`sunstone`,id:`a1_s5`,pos:[57.2,13,47.6]},{type:`rune`,id:`a1_r1`,pos:[19,17.5,41.8],group:`a1_gate`},{type:`rune`,id:`a1_r2`,pos:[56,12.5,43.5],group:`a1_gate`},{type:`rune`,id:`a1_r3`,pos:[26,7.9,50],group:`a1_gate`},{type:`gate`,id:`a1_gate`,pos:[32,12,61],w:4.4,h:6,group:`a1_gate`,need:3},{type:`relic`,id:`gauntlet`,pos:[32,12.1,75.5]},{type:`exitShaft`,pos:[32,72],y:6.5,r:2.3,to:2},{type:`hint`,pos:[32,12.2,72],text:`硬い岩盤の床… 籠手があれば砕けそうだ`},{type:`shimmer`,pos:[26,12.1,50]},{type:`grub`,pos:[31,12.2,43]},{type:`grub`,pos:[40,12.2,53]},{type:`grub`,pos:[24,12.2,49]},{type:`grub`,pos:[29,14.2,28]},{type:`grub`,pos:[55,12.7,42]},{type:`urn`,pos:[23.5,12,36]},{type:`urn`,pos:[24.4,12,35.2]},{type:`urn`,pos:[41.5,12,56.5]},{type:`urn`,pos:[46.5,12,41]},{type:`urn`,pos:[35,12,64.5]},{type:`urn`,pos:[29,12,64.5]},{type:`urn`,pos:[53,12.5,41]},{type:`brazier`,pos:[28.5,12,57]},{type:`brazier`,pos:[35.5,12,57]},{type:`brazier`,pos:[26.5,12,33.5]},{type:`brazier`,pos:[27,12,76]},{type:`brazier`,pos:[37,12,76]},{type:`brazier`,pos:[54,12.5,48]},{type:`godray`,pos:[27,29,44],r:1.6,h:18},{type:`godray`,pos:[38,28,50],r:1.2,h:17},{type:`godray`,pos:[32,34,10],r:5.2,h:21}]},Wf=(e,t,n,r,i,a,o)=>{e.solid([t-a,r-i,n-a,t+a,r,n+a],(e,o,s)=>{let c=Math.max(0,Math.min(1,(o-(r-i))/i));return Math.max(Math.hypot(e-t,s-n)-a*c**.7,r-i-o)},o)},Gf={id:2,name:`輝晶の大空洞`,sub:`Crystal Hollow`,size:[72,52,76],voxel:.5,seed:2203,decor:`crystal`,tip:`黒い「硬岩」は大地の籠手で砕ける。大空洞では高い場所から全体を見渡そう。`,theme:{dirtA:4142409,dirtB:6444144,rockA:5657710,rockB:8223382,hard:2501694,crystal:6279408,brick:9078432,ancient:2499382,rune:9431295,bedrock:1380892,moss:4173992,mossAmt:.35,fog:1448490,fogDensity:.014,bg:659230,hemiSky:11187928,hemiGround:2891840,hemiInt:1,keyColor:12113151,keyInt:1.7,keyDir:[-.3,1,.35],bloom:.6,grade:15791871,playerLight:13690111,music:`crystal`},build(e){let t=new Vf(e);t.baseMat=(t,n,r)=>{let i=e.fbm(t*.05,n*.07,r*.05,2);return n<3?Z.HARD:e.ridged(t*.07,n*.07,r*.07,2)>.86?Z.CRYSTAL:e.noise(t*.15+9,n*.15,r*.15)>.66?Z.GOLD:i>.18?Z.DIRT:i<-.3?Z.HARD:Z.ROCK},t.room(36,42.5,8,6.5,4,6,{floor:39.5}),t.cylinder(36,8,42,50.5,3),t.tunnel([[36,40.5,13],[37,37,18],[38,33,21.5]],3),t.room(36,20,36,27,22,23,{floor:8}),t.boxSolid(38,30.5,19.5,4,1.5,3,Z.ROCK,.6),t.pillar(42,28,7,27,3,Z.ROCK,{taper:.1}),t.pillar(48,33,7,22,3,Z.ROCK,{taper:.1}),t.pillar(52,38.5,7,17,3.2,Z.ROCK,{taper:.1}),t.pillar(20,30,7,21,3.2,Z.ROCK,{taper:.12}),t.pillar(22,48,7,30,2.4,Z.CRYSTAL,{taper:.45}),t.pillar(56,50,7,24,2,Z.CRYSTAL,{taper:.8}),t.pillar(29,22,7,17,1.4,Z.CRYSTAL,{taper:.75}),t.pillar(46,46,7,13,1.2,Z.CRYSTAL,{taper:.7});for(let[e,n,r,i,a]of[[30,34,9,1.6,Z.CRYSTAL],[44,38,7,1.3,Z.ROCK],[26,42,6,1.2,Z.CRYSTAL],[40,28,8,1.4,Z.ROCK],[48,30,6,1.1,Z.CRYSTAL],[34,46,7,1.3,Z.ROCK]])Wf(t,e,n,43,r,i,a);return t.room(34,4.5,44,12,4.5,8,{rough:.5}),t.sphereSolid(34,4.5,44,3.8,Z.DIRT,{k:.6}),t.room(6.5,11.5,44,3.6,3,3.6,{floor:9.5,rough:.4}),t.veinSphere(6.5,11.5,44,5.2,Z.CRYSTAL),t.tunnel([[16,10.5,43.5],[8.5,10.5,44]],1.9,{flat:.5}),t.sphereSolid(12.2,10.5,43.7,2.5,Z.HARD),t.boxSolid(53,13.9,24,4.6,.7,2.6,Z.DIRT,.35),t.veinSphere(30,31,17,2.4,Z.GOLD),t.box(36,12,57,3,3,4,.6,{rough:.3}),t.boxSolid(36,13,67,8,6,6,Z.ANCIENT,.3,{after:!0}),t.cutBox(36,13.5,67,5.5,4,4,.5),t.cutBox(36,12,61,2.2,2.6,2.2,.3),t.cut([33,2,63,39,11.5,69],(e,t,n)=>Math.max(Math.hypot(e-36,n-66)-1.9,2.5-t,t-11)),t},entities:[{type:`spawn`,pos:[36,46,8],yaw:0},{type:`checkpoint`,id:`a2_start`,pos:[32.5,39.6,6.5]},{type:`checkpoint`,id:`a2_floor`,pos:[40,8.1,29]},{type:`checkpoint`,id:`a2_crypt`,pos:[31.5,9.6,65]},{type:`sign`,pos:[36.5,32,21],text:`見渡すかぎりの大空洞！
3つの輝晶灯を灯せば、北の祠が開くらしい`},{type:`hint`,pos:[17,8.2,43.5],text:`黒い硬岩の奥から青い光が漏れている…`},{type:`hint`,pos:[48,8.2,26],text:`檻の真上の岩棚に、大岩が乗っている…`},{type:`hint`,pos:[36,9.6,66],text:`ひび割れた封印石。
強烈な一撃でなければ割れない`},{type:`sunstone`,id:`a2_s1`,pos:[41.8,40.4,11]},{type:`sunstone`,id:`a2_s2`,pos:[22,30.4,48]},{type:`sunstone`,id:`a2_s3`,pos:[5,10,46.5]},{type:`sunstone`,id:`a2_s4`,pos:[34,7.6,44]},{type:`sunstone`,id:`a2_s5`,pos:[30,31,17]},{type:`beacon`,id:`a2_b1`,pos:[20,21,30],group:`a2_beacon`},{type:`beacon`,id:`a2_b2`,pos:[6.5,9.5,44.5],group:`a2_beacon`},{type:`beacon`,id:`a2_b3`,pos:[51,8,24],group:`a2_beacon`,caged:!0},{type:`cage`,id:`a2_cage`,target:`a2_b3`,pos:[51,8,24],r:1.6,h:3.6},{type:`boulder`,id:`a2_boulder`,pos:[51,16.2,24],r:1.6,endPos:[51,9.2,24],cageTarget:`a2_b3`},{type:`gate`,id:`a2_gate`,pos:[36,9.4,61],w:4.4,h:5.2,group:`a2_beacon`,need:3},{type:`relic`,id:`quake`,pos:[36,9.6,70]},{type:`seal`,id:`a2_seal`,pos:[36,9.6,66],r:2.2},{type:`exitShaft`,pos:[36,66],y:5.5,r:1.9,to:3},{type:`liquid`,kind:`water`,pos:[34,7.2,44],size:[26,18]},{type:`shimmer`,pos:[33.8,32.1,18.5]},{type:`bat`,pos:[36,25,34]},{type:`bat`,pos:[24,20,40]},{type:`bat`,pos:[46,24,44]},{type:`bat`,pos:[30,28,28]},{type:`grub`,variant:`crystal`,pos:[40,8.3,32]},{type:`grub`,variant:`crystal`,pos:[27,8.3,30]},{type:`grub`,variant:`crystal`,pos:[44,8.3,50]},{type:`grub`,variant:`crystal`,pos:[14,9.6,43.5]},{type:`brazier`,pos:[33,9.5,63.5]},{type:`brazier`,pos:[39,9.5,63.5]},{type:`brazier`,pos:[33.5,39.5,12]},{type:`godray`,pos:[36,50,8],r:2.8,h:12,color:13164799,opacity:.18},{type:`skylight`,pos:[36,50.3,8],r:3}]},Kf={id:3,name:`陽の地底神殿`,sub:`Sunken Sun Temple`,size:[60,44,96],voxel:.5,seed:3307,decor:`temple`,tip:`レンガの壁は殴って崩せる。溶岩に落ちると大ダメージ！`,theme:{dirtA:6965808,dirtB:10121288,rockA:8020048,rockB:10781800,hard:3025462,crystal:16757594,brick:13806200,ancient:2892336,rune:16762976,bedrock:1708556,moss:9079360,mossAmt:.15,fog:2758412,fogDensity:.018,bg:1444870,hemiSky:16767152,hemiGround:4202508,hemiInt:1,keyColor:16764054,keyInt:2,keyDir:[.25,1,-.3],bloom:.75,grade:16774376,music:`temple`},build(e){let t=new Vf(e);t.baseMat=(t,n,r)=>{let i=e.fbm(t*.06,n*.08,r*.06,2);return n<3?Z.HARD:e.noise(t*.16+3,n*.16,r*.16)>.6?Z.GOLD:i>.15?Z.DIRT:Z.ROCK},t.room(30,34,8,6,4,6,{floor:31}),t.cylinder(30,8,34,42.5,3),t.tunnel([[30,32.5,13],[30,28,19],[30,23.5,24.5]],3),t.box(30,26,34,9,6,10,1,{rough:.15}),t.vein([18,18,22,42,34,46],(e,t,n)=>Hf(e-30,t-26,n-34,11.5,8,12.5,.5),Z.BRICK);for(let e of[23.5,36.5])for(let n of[27,32,43])t.pillar(e,n,19,33,.95,Z.BRICK,{base:!0});t.cutBox(30,17.5,38,9,2.6,2.2,.3),t.plug(30,19.6,38,1.15,.4,2.6,Z.BRICK,.1),t.plugCyl(24.5,38,14,20.2,.85,Z.ANCIENT),t.room(14,22.5,30,3.5,2.5,3.5,{floor:20,rough:.4}),t.tunnel([[21.5,21.5,30],[16,21.5,30]],1.6,{flat:.5}),t.sphereSolid(18.6,21.5,30,2.1,Z.HARD),t.veinSphere(12,23,28,2,Z.GOLD),t.veinSphere(15,21,33,1.6,Z.GOLD),t.box(30,23,50,3,3,6.5,.6,{rough:.1}),t.vein([25,18,43,35,28,57],(e,t,n)=>Hf(e-30,t-23,n-50,4.5,4.5,7),Z.BRICK),t.boxSolid(30,23,48,3.3,3.3,.6,Z.BRICK,.1),t.boxSolid(30,23,53,3.3,3.3,.6,Z.BRICK,.1),t.room(36.6,21.5,50.5,2.2,1.6,2,{floor:20,rough:.2}),t.box(30,23,60,6,3,4,.6,{rough:.15}),t.room(30,29.6,60,2.6,1.8,2.6,{floor:28.2,rough:.2}),t.room(30,27,76,15,14,15,{floor:20,rough:.35}),t.vein([14,10,60,46,19.2,92],()=>-1,Z.ANCIENT);for(let[e,n]of[[21,76],[39,76],[30,67],[30,85]])t.pillar(e,n,19,42,1.3,Z.BRICK,{base:!0});return t},entities:[{type:`spawn`,pos:[30,40,8],yaw:0},{type:`checkpoint`,id:`a3_start`,pos:[26,31.1,6.5]},{type:`checkpoint`,id:`a3_hall`,pos:[25.5,20.1,60.5]},{type:`sign`,pos:[31.5,20.1,26.5],text:`太陽を祀る地底神殿。
最奥で何かが眠っている…`},{type:`hint`,pos:[21.5,20.1,30],text:`硬岩の向こうで金がきらめいている`},{type:`sunstone`,id:`a3_s1`,pos:[34.6,31.6,10.5]},{type:`sunstone`,id:`a3_s2`,pos:[37,20.4,50.5]},{type:`sunstone`,id:`a3_s3`,pos:[24.5,20.6,38]},{type:`sunstone`,id:`a3_s4`,pos:[13.5,20.4,30.5]},{type:`sunstone`,id:`a3_s5`,pos:[30,28.6,60]},{type:`shimmer`,pos:[32.6,20.1,50.5]},{type:`liquid`,kind:`lava`,pos:[30,16.8,38],size:[18,4.4]},{type:`golem`,pos:[33,20.3,30],yaw:Math.PI},{type:`golem`,pos:[27,20.3,42],yaw:Math.PI},{type:`golem`,pos:[30,20.3,57],yaw:Math.PI},{type:`grub`,pos:[25,20.3,28]},{type:`urn`,pos:[12,20,32]},{type:`urn`,pos:[16,20,27.5]},{type:`urn`,pos:[34.5,20,58]},{type:`urn`,pos:[26,20,25.5]},{type:`urn`,pos:[38,20,41]},{type:`brazier`,pos:[22.5,20,25]},{type:`brazier`,pos:[37.5,20,25]},{type:`brazier`,pos:[22.5,20,44.5]},{type:`brazier`,pos:[37.5,20,44.5]},{type:`brazier`,pos:[25.5,20,63.5]},{type:`brazier`,pos:[34.5,20,63.5]},{type:`brazier`,pos:[20,20,70]},{type:`brazier`,pos:[40,20,70]},{type:`brazier`,pos:[20,20,82]},{type:`brazier`,pos:[40,20,82]},{type:`godray`,pos:[30,42,8],r:2.8,h:14,color:16769200,opacity:.16},{type:`skylight`,pos:[30,42.3,8],r:3},{type:`boss`,pos:[30,20,82],arena:[30,20,76],arenaR:13},{type:`suncore`,pos:[30,35,76]}]},qf=e=>new U(e[0],e[1]+1.2,e[2]),Jf=(e,t)=>e.entities.find(e=>e.id===t&&e.alive),Yf=(e,t,n)=>{let r=null,i=1e9;for(let a of n){let n=Jf(t,a);if(!n||n.active)continue;let o=n.pos.distanceTo(e.player.pos);o<i&&(i=o,r=n)}return r};Uf.objective=(e,t)=>{let n=e.save,r=e.player.pos;if(!n.flag(`a1_tunnel`)&&r.z>27&&n.setFlag(`a1_tunnel`),!n.flag(`a1_tunnel`))return{text:`土の壁をパンチで壊して奥へ進もう`,target:qf([30.6,14,21])};if(!n.flag(`a1_gate`)){let n=t.countSwitches(`a1_gate`),r=Yf(e,t,[`a1_r1`,`a1_r2`,`a1_r3`]);return{text:`ルーンストーンを殴って光らせよう（${n}/3）`,target:r?r.pos.clone().setY(r.pos.y+1.6):null}}return n.has(`gauntlet`)?{text:`聖域の床の硬岩を砕いて、さらに地下へ！`,target:qf([32,11.5,72])}:{text:`聖域の秘宝を手に入れよう`,target:qf([32,12.1,75.5])}},Gf.objective=(e,t)=>{let n=e.save;if(!n.flag(`a2_gate`)){let n=t.countSwitches(`a2_beacon`),r=Yf(e,t,[`a2_b1`,`a2_b2`,`a2_b3`]),i=`輝晶灯を殴って灯そう（${n}/3）`;return r&&r.id===`a2_b3`&&r.caged&&(i=`檻の上の大岩を落として輝晶灯を解放しよう（${n}/3）`),{text:i,target:r?r.pos.clone().setY(r.pos.y+2.5):null}}return n.has(`quake`)?n.flag(`a2_seal`)?{text:`穴に飛び込んで神殿へ！`,target:qf([36,8,66])}:{text:`高く跳んで急降下パンチ（右クリック）で封印石を砕け！`,target:qf([36,9.6,66])}:{text:`北の祠で秘宝を手に入れよう`,target:qf([36,9.6,70])}},Kf.objective=(e,t)=>{if(e.save.flag(`boss_defeated`))return{text:`太陽核に光が戻った！`,target:null};let n=t.entities.find(e=>e.isBoss);if(n&&n.awake){let e=n.state;return e===`stuck`?{text:`今だ！ 地面に刺さった拳の結晶を殴れ！`,target:null}:e===`stagger`?{text:`胸のコアを殴れ！（ジャンプパンチも有効）`,target:null}:{text:`巨像の拳を誘い、衝撃波はジャンプでかわせ`,target:null}}return e.player.pos.z<46?{text:`神殿の奥へ進もう`,target:qf([30,20,47])}:{text:`神殿の最奥へ — 何かが待ち構えている`,target:qf([30,20,70])}};var Xf={1:Uf,2:Gf,3:Kf},Zf={uniforms:{tDiffuse:{value:null},uVig:{value:.32},uTint:{value:new G(1,1,1)},uLift:{value:0},uSat:{value:1.08}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform vec3 uTint; uniform float uLift; uniform float uSat; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint + uLift;
      vec2 d = vUv - 0.5;
      float v = 1.0 - dot(d, d) * uVig * 2.2;
      c.rgb *= clamp(v, 0.0, 1.0);
      gl_FragColor = c;
    }`},Qf=class{constructor(e){this.canvas=e;let t=new URLSearchParams(location.search);this.params=t,this.capture=t.has(`capture`);let n=this.renderer=new Sl({canvas:e,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:this.capture});n.shadowMap.enabled=!0,n.shadowMap.type=1,n.toneMapping=4,n.toneMappingExposure=1.05,n.outputColorSpace=Ie,this.maxPR=Math.min(window.devicePixelRatio||1,1.5),this.pr=this.maxPR,n.setPixelRatio(this.pr),n.setSize(innerWidth,innerHeight),this.scene=new _n,this.camera=new Aa(60,innerWidth/innerHeight,.1,220),this.scene.add(this.camera);let r=new At(innerWidth*this.pr,innerHeight*this.pr,{type:g,samples:4});this.composer=new jl(n,r),this.composer.addPass(new Ml(this.scene,this.camera)),this.bloom=new Pl(new H(innerWidth/2,innerHeight/2),.55,.55,.82),this.composer.addPass(this.bloom),this.grade=new Ol(Zf),this.composer.addPass(this.grade),this.composer.addPass(new Il),this.save=new Iu,this.input=new Ll(e),this.audio=new Ru,this.hud=new td(this),this.fx=new Zu(this.scene,this),this.cameraRig=new Mu(this.camera,this),this.player=new ku(this),this.scene.add(this.player.root),this.stats={kills:0,dug:0},this.state=`boot`,this.hitstopT=0,this.time=0,this.frameTimes=[],this.applySettings(),addEventListener(`resize`,()=>this.onResize()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.state===`play`&&this.pause()});let i=()=>{this.audio.init(),this.audio.setVolumes(this.save.settings.music,this.save.settings.sfx)};addEventListener(`pointerdown`,i),addEventListener(`keydown`,i),window.__game=this}applySettings(){let e=this.save.settings;this.input.sensitivity=e.sens,this.input.invertY=e.invertY,this.audio.setVolumes(e.music,e.sfx);let t=e.quality;this.quality=t,t===`low`?(this.maxPR=.75,this.renderer.shadowMap.enabled=!1,this.bloom.enabled=!1):t===`medium`?(this.maxPR=1,this.renderer.shadowMap.enabled=!0,this.bloom.enabled=!0):(this.maxPR=Math.min(window.devicePixelRatio||1,t===`high`?2:1.5),this.renderer.shadowMap.enabled=!0,this.bloom.enabled=!0),this.pr=Math.min(this.pr,this.maxPR),t!==`auto`&&(this.pr=this.maxPR),this.onResize()}onResize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(this.pr),this.renderer.setSize(e,t),this.composer.setPixelRatio(this.pr),this.composer.setSize(e,t),this.bloom.setSize(e*this.pr*.5,t*this.pr*.5),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}async start(){this.loop();let e=parseInt(this.params.get(`area`)||`1`,10);if(this.params.has(`autotest`)||this.capture){if(this.params.has(`keep`)||this.save.reset(),this.params.has(`relics`))for(let e of this.params.get(`relics`).split(`,`))this.save.addRelic(e);await this.loadArea(e,{silent:!0}),this.state=`play`,this.hud.show(!0),window.__ready=!0}else await this.loadArea(1,{silent:!0,title:!0}),this.toTitle(),window.__ready=!0}toTitle(){this.state=`title`,this.hud.show(!1),this.hud.hideBoss(),this.audio.playSong(`title`),this.titleT=0,this.hud.showTitle(this.save.hasSave(),{cont:()=>this.continueGame(),start:()=>this.newGame(),help:()=>this.hud.showHelp(()=>this.toTitle()),settings:()=>this.hud.showSettings(this.save,()=>this.applySettings(),()=>this.toTitle())})}async newGame(){this.save.wipe(),this.stats={kills:0,dug:0},this.hud.clearScreen(),this.state=`story`,this.hud.showStory([`地底の国ルミナは、大地の奥深くで脈打つ<br><b style="color:#ffd463">「太陽核」</b>の光に照らされていた。`,`だがある日、太陽核の光は弱まり、<br>地底の大地はゆっくりと闇に沈みはじめた。`,`光を取り戻せるのは、散らばった<b style="color:#ffd463">太陽石</b>を集め、<br>大地の巨像が守る神殿へ辿り着いた者だけ。`,`穴掘り名人のゴロは、自慢の拳を握りしめた。<br><span style="font-size:28px">——さあ、掘り進もう！</span>`],async()=>{await this.loadArea(1,{}),this.enterPlay()})}async continueGame(){this.save.load(),this.stats={kills:this.save.data.kills||0,dug:this.save.data.dug||0},this.hud.clearScreen(),await this.loadArea(this.save.data.area,{}),this.enterPlay()}enterPlay(){this.state=`play`,this.hud.clearScreen(),this.hud.show(!0),this.input.wantLock=!0,this.input.requestLock(),this.hud.clickHint(!this.input.locked),this.refreshHUD();let e=this.world.def;this.hud.areaCard(`AREA ${e.id}`,e.name,e.sub),this.audio.playSong(e.theme.music),this.controlsHintT=0}async loadArea(e,t={}){let n=Xf[e];this.state=`loading`,this.timers=[],t.silent?this.world||this.hud.showLoading(`GORO DIG`,`地底世界を生成しています…`):this.hud.showLoading(`AREA ${e}  ${n.name}`,n.tip||``),this.world&&=(this.world.dispose(),null),this.fx.clear(),await new Promise(e=>setTimeout(e,30));let r=new zf(this,n);await r.load((e,t)=>this.hud.setLoading(e,t)),this.world=r,this.save.data.area=e,this.bloom.strength=n.theme.bloom??.55,this.grade.uniforms.uTint.value.set(n.theme.grade??16777215);let i=this.player;i.maxHp=this.save.maxHearts(),i.hp=i.maxHp;let a=r.spawnPoint,o=new U().fromArray(a.pos),s=a.yaw??0,c=this.save.data.checkpoint;c&&c.area===e&&!t.fresh&&(o=new U().fromArray(c.pos),s=c.yaw??s),i.spawn(o,s),this.cameraRig.snapBehind(s),this.cameraRig.inited=!1,this.cameraRig.curDist=2,t.title&&(this.titleCam=!0),this.hud.clearScreen(),this.hud.area(n.name,n.sub),this.refreshHUD()}async goToArea(e){this.transitioning||=(this.transitioning=!0,this.state=`transition`,this.hud.fade(!0),this.audio.play(`fall`),await new Promise(e=>setTimeout(e,900)),this.save.data.checkpoint=null,this.save.data.time+=0,this.writeSave(),await this.loadArea(e,{fresh:!0}),this.writeSave(),this.hud.fade(!1),this.enterPlay(),this.player.vel.set(0,-6,0),!1)}writeSave(){let e=this.save.data;e.kills=this.stats.kills,e.dug=this.stats.dug,this.save.write(),this.saveT=0}setCheckpoint(e){let t=this.save.data,n=[e.pos.x+1.6,e.pos.y+.2,e.pos.z];t.checkpoint&&t.checkpoint.id===e.id&&t.checkpoint.area===this.world.def.id||(t.checkpoint={area:this.world.def.id,id:e.id,pos:n,yaw:this.player.yaw},this.writeSave()),this.nearShrine=e}pause(){this.state===`play`&&(this.state=`pause`,document.exitPointerLock?.(),this.hud.showPause({resume:()=>this.resume(),help:()=>this.hud.showHelp(()=>{this.state=`play`,this.pause()}),settings:()=>this.hud.showSettings(this.save,()=>this.applySettings(),()=>{this.state=`play`,this.pause()}),retry:()=>{this.hud.clearScreen(),this.respawnAtCheckpoint(),this.resume()},title:()=>{this.writeSave(),this.hud.clearScreen(),this.toTitle()}}))}resume(){this.hud.clearScreen(),this.state=`play`,this.input.requestLock()}openShop(e){this.state=`shop`,document.exitPointerLock?.();let t=this.save.data.upgrades,n=[{key:`power`,name:`剛拳`,desc:`パンチで掘れる範囲と威力が上がる`,lv:t.power,max:3,costs:[60,140,260]},{key:`hearts`,name:`頑丈な体`,desc:`ハートの最大数 +1`,lv:t.hearts,max:3,costs:[80,160,280]}].map(e=>({...e,maxed:e.lv>=e.max,cost:e.costs[Math.min(e.lv,e.max-1)],lvText:` Lv.${e.lv}/${e.max}`}));this.hud.showShop(this.save,n,n=>{n.maxed||this.save.data.gold<n.cost?this.audio.play(`denied`):(this.save.data.gold-=n.cost,t[n.key]++,this.audio.play(`buy`),this.player.maxHp=this.save.maxHearts(),this.player.hp=this.player.maxHp,this.writeSave(),this.refreshHUD(),this.openShop(e))},()=>this.resume())}respawnAtCheckpoint(){let e=this.save.data,t=this.player,n=e.checkpoint,r=n&&n.area===this.world.def.id?new U().fromArray(n.pos):new U().fromArray(this.world.spawnPoint.pos);t.spawn(r,n?.yaw??this.world.spawnPoint.yaw??0),t.maxHp=this.save.maxHearts(),t.hp=t.maxHp,t.invuln=1.5,this.cameraRig.snapBehind(t.yaw)}respawnAfterFall(e){let t=this.player;this.hud.fade(!0),this.after(.45,()=>{--t.hp,this.hud.flashDamage(),t.hp<=0?(this.hud.fade(!1),this.onPlayerDeath()):(t.pos.copy(t.lastSafe),t.vel.set(0,0,0),t.invuln=1.2,t.unstick(),this.hud.fade(!1),e===`lava`&&this.hud.toast(`あちちっ！ 溶岩に気をつけて`,`warn`))})}onPlayerDeath(){this.state!==`dead`&&(this.player.dead=!0,this.state=`dead`,this.save.data.deaths++,this.writeSave(),document.exitPointerLock?.(),this.after(.9,()=>{this.hud.showDeath(()=>{this.hud.clearScreen(),this.respawnAtCheckpoint(),this.player.dead=!1,this.state=`play`,this.input.requestLock()})}))}after(e,t){(this.timers||=[]).push({t:e,fn:t})}tickTimers(e){if(!this.timers?.length)return;let t=[];this.timers=this.timers.filter(n=>(n.t-=e)<=0?(t.push(n.fn),!1):!0);for(let e of t)e()}hitstop(e){this.hitstopT=Math.max(this.hitstopT,e)}rumble(e,t){let n=this.input.pad;try{n?.vibrationActuator?.playEffect(`dual-rumble`,{duration:t,strongMagnitude:e,weakMagnitude:e*.6})}catch{}}flashDamage(){this.hud.flashDamage(),this.hud.pulseHearts()}cutsceneLook(e,t){let n=this.camera.position.clone().clone().sub(e).setY(0).normalize(),r=e.clone().addScaledVector(n,9).setY(e.y+3);this.cameraRig.override={pos:r,look:e,t:0,blend:0},this.cutscene={t:0,dur:t},this.player.controlLock=t}cutsceneFollow(e,t){this.cameraRig.override={pos:this.camera.position.clone(),look:e.pos,t:0,blend:0,follow:e},this.cutscene={t:0,dur:t},this.player.controlLock=Math.min(t,1.2)}gainRelic(e){this.save.addRelic(e),this.writeSave(),this.audio.play(`relic`),this.player.setState(`cutscene`),this.player.pose.victory=!0,this.player.controlLock=2.4;let t=e===`gauntlet`?[`大地の籠手を手に入れた！`,`黒く輝く「硬岩」もパンチで砕けるようになった。`]:[`震脚の像を手に入れた！`,`空中から右クリックの急降下パンチが巨大な衝撃波に！ 大きく掘れ、敵もまとめて吹き飛ぶ。`];this.hud.toast(t[0],`sun`,4200),this.after(.9,()=>this.hud.toast(t[1],`rune`,5200))}onSunstone(){let e=this.save.sunstoneCount(),t=this.player.maxHp;this.player.maxHp=this.save.maxHearts(),this.player.maxHp>t&&(this.player.hp=this.player.maxHp,this.hud.toast(`太陽石5個でハートの最大数がふえた！`,`sun`,3600)),this.hud.toast(`太陽石を手に入れた！（${e}/15）`,`sun`),this.writeSave()}onSwitch(e,t){let n=this.world.def.entities.filter(t=>t.group===e&&(t.type===`rune`||t.type===`beacon`)).length;t<n&&this.hud.toast(`${e.includes(`beacon`)?`輝晶灯`:`ルーンストーン`} ${t}/${n}`,`rune`),this.writeSave()}onBossDefeated(e){this.save.setFlag(`boss_defeated`),this.writeSave(),this.audio.stopSong(),this.cutsceneLook(e.pos.clone().setY(e.pos.y+4),3.5),this.after(3.6,()=>{let e=this.world.entities.find(e=>e.isSunCore);e&&e.ignite(),this.audio.play(`relic`),this.audio.playSong(`ending`),e&&this.cutsceneLook(e.pos.clone(),6)}),this.after(10.5,()=>this.showEnding())}showEnding(){this.state=`ending`,this.save.data.cleared=!0,this.writeSave(),document.exitPointerLock?.();let e=this.save.data.time,t=Math.floor(e/60),n=Math.floor(e%60),r=this.save.sunstoneCount(),i=r>=15?`S`:r>=11?`A`:r>=6?`B`:`C`;this.hud.show(!1),this.hud.showEnding({time:`${t}分${String(n).padStart(2,`0`)}秒`,sun:r,gold:this.save.data.gold,kills:this.stats.kills,dug:this.stats.dug,deaths:this.save.data.deaths,rank:i},()=>{this.hud.clearScreen(),this.loadArea(1,{silent:!0,title:!0}).then(()=>this.toTitle())})}refreshHUD(){let e=this.player;this.hud.hearts(Math.max(0,e.hp),e.maxHp),this.hud.gold(this.save.data.gold),this.hud.sunstone(this.save.sunstoneCount())}objective(){let e=this.world;if(!e)return null;let t=e.def.objective;return t?t(this,e):null}loop(){let e=performance.now(),t=n=>{if(requestAnimationFrame(t),this.capture)return;let r=(n-e)/1e3;e=n,this.trackPerf(r),r=Math.min(r,1/20),this.step(r)};requestAnimationFrame(t),window.__step=(e=1,t=1/30)=>{for(let n=0;n<e;n++)this.step(t,n<e-1)}}trackPerf(e){if(this.quality!==`auto`||this.state!==`play`||(this.frameTimes.push(e),this.frameTimes.length<90))return;let t=this.frameTimes.reduce((e,t)=>e+t,0)/this.frameTimes.length;this.frameTimes.length=0;let n=this.pr;t>1/45?n=Math.max(.6,n-.15):t<1/58&&n<this.maxPR&&(n=Math.min(this.maxPR,n+.1)),Math.abs(n-this.pr)>.01&&(this.pr=n,this.onResize())}step(e,t=!1){let n=this.input;n.poll(),this.time+=e;let r=this.state;r===`play`&&(this.save.data.time+=e,n.pausePressed()?this.pause():n.interactPressed()&&this.nearShrine&&this.nearShrine.near&&this.openShop(this.nearShrine)),this.hud.screenOpen()&&n.pad&&((n.padPressed.has(12)||n.padPressed.has(14))&&this.hud.menuMove(-1),(n.padPressed.has(13)||n.padPressed.has(15))&&this.hud.menuMove(1),n.padPressed.has(0)&&this.hud.menuActivate(),(n.padPressed.has(1)||n.padPressed.has(9))&&this.hud.menuOnBack?.());let i=e;this.hitstopT>0&&(this.hitstopT-=e,i=e*.04);let a=this.world;if(a&&(r===`play`||r===`dead`||r===`transition`||r===`ending`)){this.tickTimers(e),(r===`play`||r===`dead`)&&this.player.update(i,r===`play`?n:this.nullInput(),this.cameraRig),a.update(i,this.camera),this.cameraRig.override&&this.updateCutscene(e),this.cameraRig.update(e,r===`play`?n:this.nullInput(),this.player,a),this.fx.update(i,a.vol),this.hud.hearts(Math.max(0,this.player.hp),this.player.maxHp);let t=this.objective();this.hud.objective(t?.text||``),this.hud.update(e,this.camera,t?.target&&!this.cameraRig.override?t.target:null);let o=this.nearShrine&&this.nearShrine.near;this.hud.prompt(o&&r===`play`?`<kbd>E</kbd> 祠にお供えして強化`:null),this.hud.clickHint(r===`play`&&!n.locked&&n.lastDevice===`kb`&&!this.capture&&!n.virtual),this.controlsHintT=(this.controlsHintT||0)+e,this.hud.dimControls(this.controlsHintT>25),this.saveT=(this.saveT||0)+e,this.saveT>20&&r===`play`&&this.writeSave()}else if(a&&r===`title`){this.titleT+=e,this.player.update(e,this.nullInput(),this.cameraRig),a.update(e,this.camera),this.fx.update(e,a.vol);let t=this.player.pos,n=this.titleT*.08+2.6;this.camera.position.set(t.x+Math.sin(n)*6.5,t.y+2.6,t.z+Math.cos(n)*6.5),this.camera.lookAt(t.x-Math.cos(n)*1.4,t.y+1.6,t.z+Math.sin(n)*1.4);let r=a.terrain.material.userData.uniforms;r.uCutR.value=0}n.endFrame(),t||this.render()}updateCutscene(e){let t=this.cutscene,n=this.cameraRig.override;if(!t){this.cameraRig.override=null;return}if(t.t+=e,n.follow){n.look=n.follow.pos.clone();let t=this.player.pos.clone().sub(n.look).setY(0).normalize();n.pos.lerp(n.look.clone().addScaledVector(t,10).setY(n.look.y+5),1-Math.exp(-e*2))}let r=Math.min(1,t.t/.6),i=Math.min(1,(t.dur-t.t)/.6);n.blend=Math.max(0,Math.min(r,i)),n.blend=n.blend*n.blend*(3-2*n.blend),t.t>=t.dur&&(this.cameraRig.override=null,this.cutscene=null)}nullInput(){if(!this._null){let e={x:0,y:0};this._null=new Proxy({},{get:(t,n)=>n===`move`||n===`look`?()=>e:()=>!1})}return this._null}render(){this.world?this.bloom.enabled?this.composer.render():(this.renderer.toneMapping=4,this.renderer.render(this.scene,this.camera)):this.renderer.render(this.scene,this.camera)}},$f=`modulepreload`,ep=function(e,t){return new URL(e,t).href},tp={},np=function(e){return e.pathname.endsWith(`.css`)},rp=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ip=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ep(t,n);let r=s(t),i=np(r);return rp(tp,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:$f,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ap=document.getElementById(`game`);new URLSearchParams(location.search).has(`dev`)?ip(()=>import(`./devview-mU2daim8.js`).then(e=>e.devView(ap)),[],import.meta.url):new Qf(ap).start().catch(e=>{console.error(e),document.getElementById(`ui`).innerHTML=`<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-family:sans-serif;padding:20px;text-align:center">起動に失敗しました：${e.message}<br>WebGL2 対応ブラウザでお試しください。</div>`});export{Bl as a,La as c,Aa as d,Pa as f,vu as i,gn as l,_n as m,fd as n,Sl as o,Ie as p,bu as r,G as s,Uf as t,va as u};