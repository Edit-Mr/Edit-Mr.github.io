import"./style-Bgoe4ix7.js";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="133",ic=0,_a=1,rc=2,qo=1,sc=2,Mi=3,Li=0,Jt=1,_n=2,Yo=1,en=0,Si=1,Ma=2,wa=3,ba=4,ac=5,Wn=100,oc=101,lc=102,Sa=103,Ta=104,cc=200,hc=201,uc=202,dc=203,jo=204,Jo=205,fc=206,pc=207,mc=208,gc=209,xc=210,vc=0,yc=1,_c=2,Is=3,Mc=4,wc=5,bc=6,Sc=7,Pr=0,Tc=1,Ec=2,yn=0,Ac=1,Lc=2,Cc=3,Rc=4,Pc=5,Zo=300,Ir=301,Dr=302,Ds=303,Fs=304,Fr=306,Ws=307,Ns=1e3,xe=1001,Bs=1002,$t=1003,Ea=1004,Aa=1005,_e=1006,Ic=1007,Nr=1008,an=1009,Dc=1010,Fc=1011,wr=1012,Nc=1013,Mr=1014,tn=1015,jn=1016,Bc=1017,zc=1018,Uc=1019,Ti=1020,Oc=1021,Jn=1022,ue=1023,Hc=1024,Gc=1025,kc=ue,Zn=1026,Ci=1027,Vc=1028,Wc=1029,Xc=1030,qc=1031,Yc=1032,jc=1033,La=33776,Ca=33777,Ra=33778,Pa=33779,Ia=35840,Da=35841,Fa=35842,Na=35843,Jc=36196,Ba=37492,za=37496,Zc=37808,Qc=37809,Kc=37810,$c=37811,th=37812,eh=37813,nh=37814,ih=37815,rh=37816,sh=37817,ah=37818,oh=37819,lh=37820,ch=37821,hh=36492,uh=37840,dh=37841,fh=37842,ph=37843,mh=37844,gh=37845,xh=37846,vh=37847,yh=37848,_h=37849,Mh=37850,wh=37851,bh=37852,Sh=37853,Th=2200,Eh=2201,Ah=2202,br=2300,Sr=2301,Yr=2302,Xn=2400,qn=2401,Tr=2402,Xs=2500,Qo=2501,Lh=0,le=3e3,wn=3001,qs=3007,Ys=3002,Ch=3003,Ko=3004,$o=3005,tl=3006,Rh=3200,Ph=3201,ti=0,Ih=1,jr=7680,Dh=519,Ri=35044,Er=35048,Ua="300 es";class bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Jr=Math.PI/180,zs=180/Math.PI,te=[];for(let s=0;s<256;s++)te[s]=(s<16?"0":"")+s.toString(16);const Fh=typeof crypto<"u"&&"randomUUID"in crypto;function Pe(){if(Fh)return crypto.randomUUID().toUpperCase();const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(te[s&255]+te[s>>8&255]+te[s>>16&255]+te[s>>24&255]+"-"+te[t&255]+te[t>>8&255]+"-"+te[t>>16&15|64]+te[t>>24&255]+"-"+te[e&63|128]+te[e>>8&255]+"-"+te[e>>16&255]+te[e>>24&255]+te[n&255]+te[n>>8&255]+te[n>>16&255]+te[n>>24&255]).toUpperCase()}function ge(s,t,e){return Math.max(t,Math.min(e,s))}function Nh(s,t){return(s%t+t)%t}function Zr(s,t,e){return(1-e)*s+e*t}function Oa(s){return(s&s-1)===0&&s!==0}function Bh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class j{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}j.prototype.isVector2=!0;class ee{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],_=i[3],p=i[6],m=i[1],S=i[4],v=i[7],E=i[2],L=i[5],y=i[8];return r[0]=a*x+o*m+l*E,r[3]=a*_+o*S+l*L,r[6]=a*p+o*v+l*y,r[1]=c*x+h*m+d*E,r[4]=c*_+h*S+d*L,r[7]=c*p+h*v+d*y,r[2]=u*x+f*m+g*E,r[5]=u*_+f*S+g*L,r[8]=u*p+f*v+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*o+n*h,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}ee.prototype.isMatrix3=!0;function el(s){if(s.length===0)return-1/0;let t=s[0];for(let e=1,n=s.length;e<n;++e)s[e]>t&&(t=s[e]);return t}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}let Sn;class ei{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Sn===void 0&&(Sn=Br("canvas")),Sn.width=t.width,Sn.height=t.height;const n=Sn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Sn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let zh=0;class ie extends bn{constructor(t=ie.DEFAULT_IMAGE,e=ie.DEFAULT_MAPPING,n=xe,i=xe,r=_e,a=Nr,o=ue,l=an,c=1,h=le){super(),Object.defineProperty(this,"id",{value:zh++}),this.uuid=Pe(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Pe()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qr(i[a].image)):r.push(Qr(i[a]))}else r=Qr(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case xe:t.x=t.x<0?0:1;break;case Bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case xe:t.y=t.y<0?0:1;break;case Bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}ie.DEFAULT_IMAGE=void 0;ie.DEFAULT_MAPPING=Zo;ie.prototype.isTexture=!0;function Qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ei.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class zt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],_=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,E=(p+1)/2,L=(h+u)/4,y=(d+x)/4,D=(g+_)/4;return S>v&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=L/n,r=y/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=L/i,r=D/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=y/r,i=D/r),this.set(n,i,r,e),this}let m=Math.sqrt((_-g)*(_-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(_-g)/m,this.y=(d-x)/m,this.z=(u-h)/m,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}zt.prototype.isVector4=!0;class Ie extends bn{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new zt(0,0,t,e),this.scissorTest=!1,this.viewport=new zt(0,0,t,e),this.texture=new ie(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:t,height:e,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.prototype.isWebGLRenderTarget=!0;class Uh extends Ie{constructor(t,e,n){super(t,e);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Uh.prototype.isWebGLMultipleRenderTargets=!0;class nl extends Ie{constructor(t,e,n){super(t,e,n),this.samples=4}copy(t){return super.copy.call(this,t),this.samples=t.samples,this}}nl.prototype.isWebGLMultisampleRenderTarget=!0;class fe{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let _=1-o;const p=l*u+c*f+h*g+d*x,m=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const E=Math.sqrt(S),L=Math.atan2(E,p*m);_=Math.sin(_*L)/E,o=Math.sin(o*L)/E}const v=o*m;if(l=l*_+u*v,c=c*_+f*v,h=h*_+g*v,d=d*_+x*v,_===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}fe.prototype.isQuaternion=!0;class T{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-r*i,d=l*i+r*n-a*e,u=-r*e-a*n-o*i;return this.x=c*l+u*-r+h*-o-d*-a,this.y=h*l+u*-a+d*-r-c*-o,this.z=d*l+u*-o+c*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}T.prototype.isVector3=!0;const Kr=new T,Ha=new fe;class Ae{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>r&&(r=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>r&&(r=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox),$r.applyMatrix4(t.matrixWorld),this.union($r));const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(di),Vi.subVectors(this.max,di),Tn.subVectors(t.a,di),En.subVectors(t.b,di),An.subVectors(t.c,di),qe.subVectors(En,Tn),Ye.subVectors(An,En),mn.subVectors(Tn,An);let e=[0,-qe.z,qe.y,0,-Ye.z,Ye.y,0,-mn.z,mn.y,qe.z,0,-qe.x,Ye.z,0,-Ye.x,mn.z,0,-mn.x,-qe.y,qe.x,0,-Ye.y,Ye.x,0,-mn.y,mn.x,0];return!ts(e,Tn,En,An,Vi)||(e=[1,0,0,0,1,0,0,0,1],!ts(e,Tn,En,An,Vi))?!1:(Wi.crossVectors(qe,Ye),e=[Wi.x,Wi.y,Wi.z],ts(e,Tn,En,An,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ui.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Ae.prototype.isBox3=!0;const ze=[new T,new T,new T,new T,new T,new T,new T,new T],ui=new T,$r=new Ae,Tn=new T,En=new T,An=new T,qe=new T,Ye=new T,mn=new T,di=new T,Vi=new T,Wi=new T,gn=new T;function ts(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gn.fromArray(s,r);const o=i.x*Math.abs(gn.x)+i.y*Math.abs(gn.y)+i.z*Math.abs(gn.z),l=t.dot(gn),c=e.dot(gn),h=n.dot(gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Oh=new Ae,Ga=new T,es=new T,ns=new T;class ni{constructor(t=new T,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(ns.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return es.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ga.copy(t.center).add(es)),this.expandByPoint(Ga.copy(t.center).sub(es)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ue=new T,is=new T,Xi=new T,je=new T,rs=new T,qi=new T,ss=new T;class ii{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ue)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ue.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ue.copy(this.direction).multiplyScalar(e).add(this.origin),Ue.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){is.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),je.copy(this.origin).sub(is);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=je.dot(this.direction),l=-je.dot(Xi),c=je.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Xi).multiplyScalar(u).add(is),f}intersectSphere(t,e){Ue.subVectors(t.center,this.origin);const n=Ue.dot(this.direction),i=Ue.dot(Ue)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ue)!==null}intersectTriangle(t,e,n,i,r){rs.subVectors(e,t),qi.subVectors(n,t),ss.crossVectors(rs,qi);let a=this.direction.dot(ss),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;je.subVectors(this.origin,t);const l=o*this.direction.dot(qi.crossVectors(je,qi));if(l<0)return null;const c=o*this.direction.dot(rs.cross(je));if(c<0||l+c>a)return null;const h=-o*je.dot(ss);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c,h,d,u,f,g,x,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ln.setFromMatrixColumn(t,0).length(),r=1/Ln.setFromMatrixColumn(t,1).length(),a=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Gh)}lookAt(t,e,n){const i=this.elements;return pe.subVectors(t,e),pe.lengthSq()===0&&(pe.z=1),pe.normalize(),Je.crossVectors(n,pe),Je.lengthSq()===0&&(Math.abs(n.z)===1?pe.x+=1e-4:pe.z+=1e-4,pe.normalize(),Je.crossVectors(n,pe)),Je.normalize(),Yi.crossVectors(pe,Je),i[0]=Je.x,i[4]=Yi.x,i[8]=pe.x,i[1]=Je.y,i[5]=Yi.y,i[9]=pe.y,i[2]=Je.z,i[6]=Yi.z,i[10]=pe.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],_=n[10],p=n[14],m=n[3],S=n[7],v=n[11],E=n[15],L=i[0],y=i[4],D=i[8],q=i[12],R=i[1],A=i[5],tt=i[9],z=i[13],H=i[2],P=i[6],F=i[10],U=i[14],K=i[3],st=i[7],dt=i[11],nt=i[15];return r[0]=a*L+o*R+l*H+c*K,r[4]=a*y+o*A+l*P+c*st,r[8]=a*D+o*tt+l*F+c*dt,r[12]=a*q+o*z+l*U+c*nt,r[1]=h*L+d*R+u*H+f*K,r[5]=h*y+d*A+u*P+f*st,r[9]=h*D+d*tt+u*F+f*dt,r[13]=h*q+d*z+u*U+f*nt,r[2]=g*L+x*R+_*H+p*K,r[6]=g*y+x*A+_*P+p*st,r[10]=g*D+x*tt+_*F+p*dt,r[14]=g*q+x*z+_*U+p*nt,r[3]=m*L+S*R+v*H+E*K,r[7]=m*y+S*A+v*P+E*st,r[11]=m*D+S*tt+v*F+E*dt,r[15]=m*q+S*z+v*U+E*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],_=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+x*(+e*l*f-e*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+_*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],_=t[14],p=t[15],m=d*_*c-x*u*c+x*l*f-o*_*f-d*l*p+o*u*p,S=g*u*c-h*_*c-g*l*f+a*_*f+h*l*p-a*u*p,v=h*x*c-g*d*c+g*o*f-a*x*f-h*o*p+a*d*p,E=g*d*l-h*x*l-g*o*u+a*x*u+h*o*_-a*d*_,L=e*m+n*S+i*v+r*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/L;return t[0]=m*y,t[1]=(x*u*r-d*_*r-x*i*f+n*_*f+d*i*p-n*u*p)*y,t[2]=(o*_*r-x*l*r+x*i*c-n*_*c-o*i*p+n*l*p)*y,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*y,t[4]=S*y,t[5]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*p+e*u*p)*y,t[6]=(g*l*r-a*_*r-g*i*c+e*_*c+a*i*p-e*l*p)*y,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*f+e*l*f)*y,t[8]=v*y,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*p-e*d*p)*y,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*y,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*y,t[12]=E*y,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*_+e*d*_)*y,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*_-e*o*_)*y,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,_=a*d,p=o*d,m=l*c,S=l*h,v=l*d,E=n.x,L=n.y,y=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+v)*E,i[2]=(g-S)*E,i[3]=0,i[4]=(f-v)*L,i[5]=(1-(u+p))*L,i[6]=(_+m)*L,i[7]=0,i[8]=(g+S)*y,i[9]=(_-m)*y,i[10]=(1-(u+x))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ln.set(i[0],i[1],i[2]).length();const a=Ln.set(i[4],i[5],i[6]).length(),o=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],be.copy(this);const c=1/r,h=1/a,d=1/o;return be.elements[0]*=c,be.elements[1]*=c,be.elements[2]*=c,be.elements[4]*=h,be.elements[5]*=h,be.elements[6]*=h,be.elements[8]*=d,be.elements[9]*=d,be.elements[10]*=d,e.setFromRotationMatrix(be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-r),d=(e+t)*l,u=(n+i)*c,f=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}yt.prototype.isMatrix4=!0;const Ln=new T,be=new yt,Hh=new T(0,0,0),Gh=new T(1,1,1),Je=new T,Yi=new T,pe=new T,ka=new yt,Va=new fe;class ri{constructor(t=0,e=0,n=0,i=ri.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new T(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}ri.prototype.isEuler=!0;ri.DefaultOrder="XYZ";ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kh{constructor(){this.mask=1}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}}let Vh=0;const Wa=new T,Cn=new fe,Oe=new yt,ji=new T,fi=new T,Wh=new T,Xh=new fe,Xa=new T(1,0,0),qa=new T(0,1,0),Ya=new T(0,0,1),qh={type:"added"},ja={type:"removed"};class Dt extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Pe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DefaultUp.clone();const t=new T,e=new ri,n=new fe,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new ee}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Oe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oe.lookAt(fi,ji,this.up):Oe.lookAt(ji,fi,this.up),this.quaternion.setFromRotationMatrix(Oe),i&&(Oe.extractRotation(i.matrixWorld),Cn.setFromRotationMatrix(Oe),this.quaternion.premultiply(Cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ja)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ja)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Oe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Dt.DefaultUp=new T(0,1,0);Dt.DefaultMatrixAutoUpdate=!0;Dt.prototype.isObject3D=!0;const Se=new T,He=new T,as=new T,Ge=new T,Rn=new T,Pn=new T,Ja=new T,os=new T,ls=new T,cs=new T;class Zt{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Se.subVectors(t,e),i.cross(Se);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Se.subVectors(i,e),He.subVectors(n,e),as.subVectors(t,e);const a=Se.dot(Se),o=Se.dot(He),l=Se.dot(as),c=He.dot(He),h=He.dot(as),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ge),Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Ge),l.set(0,0),l.addScaledVector(r,Ge.x),l.addScaledVector(a,Ge.y),l.addScaledVector(o,Ge.z),l}static isFrontFacing(t,e,n,i){return Se.subVectors(n,e),He.subVectors(t,e),Se.cross(He).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Se.subVectors(this.c,this.b),He.subVectors(this.a,this.b),Se.cross(He).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zt.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Zt.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Zt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Rn.subVectors(i,n),Pn.subVectors(r,n),os.subVectors(t,n);const l=Rn.dot(os),c=Pn.dot(os);if(l<=0&&c<=0)return e.copy(n);ls.subVectors(t,i);const h=Rn.dot(ls),d=Pn.dot(ls);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Rn,a);cs.subVectors(t,r);const f=Rn.dot(cs),g=Pn.dot(cs);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pn,o);const _=h*g-f*d;if(_<=0&&d-h>=0&&f-g>=0)return Ja.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Ja,o);const p=1/(_+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(Rn,a).addScaledVector(Pn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Yh=0;class he extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Pe(),this.name="",this.type="Material",this.fog=!0,this.blending=Si,this.side=Li,this.vertexColors=!1,this.opacity=1,this.format=ue,this.transparent=!1,this.blendSrc=jo,this.blendDst=Jo,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Yo;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ue&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.format=t.format,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}he.prototype.isMaterial=!0;const il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function hs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class gt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=Nh(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=hs(r,i,t+1/3),this.g=hs(r,i,t),this.b=hs(r,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=il[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),a=Math.min(e,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case e:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-e)/h+2;break;case i:o=(e-n)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Te),Te.h+=t,Te.s+=e,Te.l+=n,this.setHSL(Te.h,Te.s,Te.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Te),t.getHSL(Ji);const n=Zr(Te.h,Ji.h,e),i=Zr(Te.s,Ji.s,e),r=Zr(Te.l,Ji.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}gt.NAMES=il;gt.prototype.isColor=!0;gt.prototype.r=1;gt.prototype.g=1;gt.prototype.b=1;class js extends he{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}js.prototype.isMeshBasicMaterial=!0;const Ot=new T,Zi=new j;class qt{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Ri,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new gt),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new j),e[n++]=a.x,e[n++]=a.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new T),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new zt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.applyMatrix3(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.applyMatrix4(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.applyNormalMatrix(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.transformDirection(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ri&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}qt.prototype.isBufferAttribute=!0;class rl extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jh extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}jh.prototype.isFloat16BufferAttribute=!0;class Vt extends qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jh=0;const ve=new yt,fs=new Dt,In=new T,me=new Ae,pi=new Ae,Qt=new T;class Ut extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Pe(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(el(t)>65535?sl:rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ve.makeRotationFromQuaternion(t),this.applyMatrix4(ve),this}rotateX(t){return ve.makeRotationX(t),this.applyMatrix4(ve),this}rotateY(t){return ve.makeRotationY(t),this.applyMatrix4(ve),this}rotateZ(t){return ve.makeRotationZ(t),this.applyMatrix4(ve),this}translate(t,e,n){return ve.makeTranslation(t,e,n),this.applyMatrix4(ve),this}scale(t,e,n){return ve.makeScale(t,e,n),this.applyMatrix4(ve),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ae);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];me.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,me.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,me.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(me.min),this.boundingBox.expandByPoint(me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(me.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(me.min,pi.min),me.expandByPoint(Qt),Qt.addVectors(me.max,pi.max),me.expandByPoint(Qt)):(me.expandByPoint(pi.min),me.expandByPoint(pi.max))}me.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Qt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Qt));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qt.fromBufferAttribute(o,c),l&&(In.fromBufferAttribute(t,c),Qt.add(In)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));const l=e.tangent.array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new T,h[R]=new T;const d=new T,u=new T,f=new T,g=new j,x=new j,_=new j,p=new T,m=new T;function S(R,A,tt){d.fromArray(i,R*3),u.fromArray(i,A*3),f.fromArray(i,tt*3),g.fromArray(a,R*2),x.fromArray(a,A*2),_.fromArray(a,tt*2),u.sub(d),f.sub(d),x.sub(g),_.sub(g);const z=1/(x.x*_.y-_.x*x.y);isFinite(z)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(f,-x.y).multiplyScalar(z),m.copy(f).multiplyScalar(x.x).addScaledVector(u,-_.x).multiplyScalar(z),c[R].add(p),c[A].add(p),c[tt].add(p),h[R].add(m),h[A].add(m),h[tt].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,A=v.length;R<A;++R){const tt=v[R],z=tt.start,H=tt.count;for(let P=z,F=z+H;P<F;P+=3)S(n[P+0],n[P+1],n[P+2])}const E=new T,L=new T,y=new T,D=new T;function q(R){y.fromArray(r,R*3),D.copy(y);const A=c[R];E.copy(A),E.sub(y.multiplyScalar(y.dot(A))).normalize(),L.crossVectors(D,A);const z=L.dot(h[R])<0?-1:1;l[R*4]=E.x,l[R*4+1]=E.y,l[R*4+2]=E.z,l[R*4+3]=z}for(let R=0,A=v.length;R<A;++R){const tt=v[R],z=tt.start,H=tt.count;for(let P=z,F=z+H;P<F;P+=3)q(n[P+0]),q(n[P+1]),q(n[P+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),_=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,_),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const a=n[i].array,o=t.attributes[i],l=o.array,c=o.itemSize*e,h=Math.min(l.length,a.length-c);for(let d=0,u=c;d<h;d++,u++)a[u]=l[d]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qt.fromBufferAttribute(t,e),Qt.normalize(),t.setXYZ(e,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.prototype.isBufferGeometry=!0;const Za=new yt,Dn=new ii,ps=new ni,Ze=new T,Qe=new T,Ke=new T,ms=new T,gs=new T,xs=new T,Qi=new T,Ki=new T,$i=new T,tr=new j,er=new j,nr=new j,vs=new T,ir=new T;class ne extends Dt{constructor(t=new Ut,e=new js){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),t.ray.intersectsSphere(ps)===!1)||(Za.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(Za),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=i[p.materialIndex],S=Math.max(p.start,g.start),v=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,L=v;E<L;E+=3){const y=o.getX(E),D=o.getX(E+1),q=o.getX(E+2);a=rr(this,m,t,Dn,l,c,h,d,u,y,D,q),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const x=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let p=x,m=_;p<m;p+=3){const S=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);a=rr(this,i,t,Dn,l,c,h,d,u,S,v,E),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=i[p.materialIndex],S=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,L=v;E<L;E+=3){const y=E,D=E+1,q=E+2;a=rr(this,m,t,Dn,l,c,h,d,u,y,D,q),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=x,m=_;p<m;p+=3){const S=p,v=p+1,E=p+2;a=rr(this,i,t,Dn,l,c,h,d,u,S,v,E),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ne.prototype.isMesh=!0;function Zh(s,t,e,n,i,r,a,o){let l;if(t.side===Jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side!==_n,o),l===null)return null;ir.copy(o),ir.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:s}}function rr(s,t,e,n,i,r,a,o,l,c,h,d){Ze.fromBufferAttribute(i,c),Qe.fromBufferAttribute(i,h),Ke.fromBufferAttribute(i,d);const u=s.morphTargetInfluences;if(r&&u){Qi.set(0,0,0),Ki.set(0,0,0),$i.set(0,0,0);for(let g=0,x=r.length;g<x;g++){const _=u[g],p=r[g];_!==0&&(ms.fromBufferAttribute(p,c),gs.fromBufferAttribute(p,h),xs.fromBufferAttribute(p,d),a?(Qi.addScaledVector(ms,_),Ki.addScaledVector(gs,_),$i.addScaledVector(xs,_)):(Qi.addScaledVector(ms.sub(Ze),_),Ki.addScaledVector(gs.sub(Qe),_),$i.addScaledVector(xs.sub(Ke),_)))}Ze.add(Qi),Qe.add(Ki),Ke.add($i)}s.isSkinnedMesh&&(s.boneTransform(c,Ze),s.boneTransform(h,Qe),s.boneTransform(d,Ke));const f=Zh(s,t,e,n,Ze,Qe,Ke,vs);if(f){o&&(tr.fromBufferAttribute(o,c),er.fromBufferAttribute(o,h),nr.fromBufferAttribute(o,d),f.uv=Zt.getUV(vs,Ze,Qe,Ke,tr,er,nr,new j)),l&&(tr.fromBufferAttribute(l,c),er.fromBufferAttribute(l,h),nr.fromBufferAttribute(l,d),f.uv2=Zt.getUV(vs,Ze,Qe,Ke,tr,er,nr,new j));const g={a:c,b:h,c:d,normal:new T,materialIndex:0};Zt.getNormal(Ze,Qe,Ke,g.normal),f.face=g}return f}class zi extends Ut{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function g(x,_,p,m,S,v,E,L,y,D,q){const R=v/y,A=E/D,tt=v/2,z=E/2,H=L/2,P=y+1,F=D+1;let U=0,K=0;const st=new T;for(let dt=0;dt<F;dt++){const nt=dt*A-z;for(let _t=0;_t<P;_t++){const X=_t*R-tt;st[x]=X*m,st[_]=nt*S,st[p]=H,c.push(st.x,st.y,st.z),st[x]=0,st[_]=0,st[p]=L>0?1:-1,h.push(st.x,st.y,st.z),d.push(_t/y),d.push(1-dt/D),U+=1}}for(let dt=0;dt<D;dt++)for(let nt=0;nt<y;nt++){const _t=u+nt+P*dt,X=u+nt+P*(dt+1),Q=u+(nt+1)+P*(dt+1),ct=u+(nt+1)+P*dt;l.push(_t,X,ct),l.push(X,Q,ct),K+=6}o.addGroup(f,K,q),f+=K,u+=U}}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kn(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ae(s){const t={};for(let e=0;e<s.length;e++){const n=Kn(s[e]);for(const i in n)t[i]=n[i]}return t}const Qh={clone:Kn,merge:ae};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends he{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Kh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kn(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Mn.prototype.isShaderMaterial=!0;class Js extends Dt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Js.prototype.isCamera=!0;class oe extends Js{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}oe.prototype.isPerspectiveCamera=!0;const Fn=90,Nn=1;class Zs extends Dt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new oe(Fn,Nn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const r=new oe(Fn,Nn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new T(-1,0,0)),this.add(r);const a=new oe(Fn,Nn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new T(0,1,0)),this.add(a);const o=new oe(Fn,Nn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new T(0,-1,0)),this.add(o);const l=new oe(Fn,Nn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);const c=new oe(Fn,Nn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=t.xr.enabled,d=t.getRenderTarget();t.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=u,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(d),t.xr.enabled=h}}class zr extends ie{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ir,super(t,e,n,i,r,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}zr.prototype.isCubeTexture=!0;class al extends Ie{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),super(t,t,e),e=e||{},this.texture=new zr(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_e,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=ue,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Kn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:en});r.uniforms.tEquirect.value=e;const a=new ne(i,r),o=e.minFilter;return e.minFilter===Nr&&(e.minFilter=_e),new Zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}al.prototype.isWebGLCubeRenderTarget=!0;const ys=new T,tu=new T,eu=new ee;class ke{constructor(t=new T(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ys.subVectors(n,e).cross(tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||eu.getNormalMatrix(t),i=this.coplanarPoint(ys).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}ke.prototype.isPlane=!0;const Bn=new ni,sr=new T;class Ur{constructor(t=new ke,e=new ke,n=new ke,i=new ke,r=new ke,a=new ke){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],x=n[11],_=n[12],p=n[13],m=n[14],S=n[15];return e[0].setComponents(o-i,d-l,x-u,S-_).normalize(),e[1].setComponents(o+i,d+l,x+u,S+_).normalize(),e[2].setComponents(o+r,d+c,x+f,S+p).normalize(),e[3].setComponents(o-r,d-c,x-f,S-p).normalize(),e[4].setComponents(o-a,d-h,x-g,S-m).normalize(),e[5].setComponents(o+a,d+h,x+g,S+m).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(sr.x=i.normal.x>0?t.max.x:t.min.x,sr.y=i.normal.y>0?t.max.y:t.min.y,sr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nu(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,d,u),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?e?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,f=h.updateRange;s.bindBuffer(d,c),f.count===-1?s.bufferSubData(d,0,u):(e?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class Qs extends Ut{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],_=[];for(let p=0;p<h;p++){const m=p*u-a;for(let S=0;S<c;S++){const v=S*d-r;g.push(v,-m,0),x.push(0,0,1),_.push(S/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const S=m+c*p,v=m+c*(p+1),E=m+1+c*(p+1),L=m+1+c*p;f.push(S,v,L),f.push(v,E,L)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(_,2))}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}var iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu="vec3 transformed = vec3( position );",hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ku=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Wu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,Zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ud=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Id=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ef=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,mf=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Mf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lt={alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:su,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:xu,color_pars_fragment:vu,color_pars_vertex:yu,color_vertex:_u,common:Mu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Su,displacementmap_vertex:Tu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Au,encodings_fragment:Lu,encodings_pars_fragment:Cu,envmap_fragment:Ru,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Iu,envmap_pars_vertex:Du,envmap_physical_pars_fragment:Wu,envmap_vertex:Fu,fog_vertex:Nu,fog_pars_vertex:Bu,fog_fragment:zu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Ou,lightmap_fragment:Hu,lightmap_pars_fragment:Gu,lights_lambert_vertex:ku,lights_pars_begin:Vu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Ju,lights_physical_pars_fragment:Zu,lights_fragment_begin:Qu,lights_fragment_maps:Ku,lights_fragment_end:$u,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:sd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphnormal_vertex:hd,morphtarget_pars_vertex:ud,morphtarget_vertex:dd,normal_fragment_begin:fd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:xd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:Md,output_fragment:wd,packing:bd,premultiplied_alpha_fragment:Sd,project_vertex:Td,dithering_fragment:Ed,dithering_pars_fragment:Ad,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Id,shadowmask_pars_fragment:Dd,skinbase_vertex:Fd,skinning_pars_vertex:Nd,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Ud,specularmap_pars_fragment:Od,tonemapping_fragment:Hd,tonemapping_pars_fragment:Gd,transmission_fragment:kd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,uv2_pars_fragment:Yd,uv2_pars_vertex:jd,uv2_vertex:Jd,worldpos_vertex:Zd,background_vert:Qd,background_frag:Kd,cube_vert:$d,cube_frag:tf,depth_vert:ef,depth_frag:nf,distanceRGBA_vert:rf,distanceRGBA_frag:sf,equirect_vert:af,equirect_frag:of,linedashed_vert:lf,linedashed_frag:cf,meshbasic_vert:hf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:ff,meshmatcap_vert:pf,meshmatcap_frag:mf,meshnormal_vert:gf,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:yf,meshphysical_vert:_f,meshphysical_frag:Mf,meshtoon_vert:wf,meshtoon_frag:bf,points_vert:Sf,points_frag:Tf,shadow_vert:Ef,shadow_frag:Af,sprite_vert:Lf,sprite_frag:Cf},et={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ee},uv2Transform:{value:new ee},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ee}}},Re={basic:{uniforms:ae([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ae([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.fog,et.lights,{emissive:{value:new gt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ae([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ae([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ae([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new gt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ae([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ae([et.points,et.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ae([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ae([et.common,et.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ae([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ae([et.sprite,et.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},cube:{uniforms:ae([et.envmap,{opacity:{value:1}}]),vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ae([et.common,et.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ae([et.lights,et.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Re.physical={uniforms:ae([Re.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new j(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new gt(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new gt(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new gt(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};function Rf(s,t,e,n,i){const r=new gt(0);let a=0,o,l,c=null,h=0,d=null;function u(g,x){let _=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=t.get(p));const m=s.xr,S=m.getSession&&m.getSession();S&&S.environmentBlendMode==="additive"&&(p=null),p===null?f(r,a):p&&p.isColor&&(f(p,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Fr)?(l===void 0&&(l=new ne(new zi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Kn(Re.cube.uniforms),vertexShader:Re.cube.vertexShader,fragmentShader:Re.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||h!==p.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,d=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new ne(new Qs(2,2),new Mn({name:"BackgroundMaterial",uniforms:Kn(Re.background.uniforms),vertexShader:Re.background.vertexShader,fragmentShader:Re.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||d!==s.toneMapping)&&(o.material.needsUpdate=!0,c=p,h=p.version,d=s.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,x){e.buffers.color.setClear(g.r,g.g,g.b,x,i)}return{getClearColor:function(){return r},setClearColor:function(g,x=1){r.set(g),a=x,f(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,f(r,a)},render:u}}function Pf(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=x(null);let c=l;function h(z,H,P,F,U){let K=!1;if(a){const st=g(F,P,H);c!==st&&(c=st,u(c.object)),K=_(F,U),K&&p(F,U)}else{const st=H.wireframe===!0;(c.geometry!==F.id||c.program!==P.id||c.wireframe!==st)&&(c.geometry=F.id,c.program=P.id,c.wireframe=st,K=!0)}z.isInstancedMesh===!0&&(K=!0),U!==null&&e.update(U,34963),K&&(y(z,H,P,F),U!==null&&s.bindBuffer(34963,e.get(U).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(z){return n.isWebGL2?s.bindVertexArray(z):r.bindVertexArrayOES(z)}function f(z){return n.isWebGL2?s.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function g(z,H,P){const F=P.wireframe===!0;let U=o[z.id];U===void 0&&(U={},o[z.id]=U);let K=U[H.id];K===void 0&&(K={},U[H.id]=K);let st=K[F];return st===void 0&&(st=x(d()),K[F]=st),st}function x(z){const H=[],P=[],F=[];for(let U=0;U<i;U++)H[U]=0,P[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:P,attributeDivisors:F,object:z,attributes:{},index:null}}function _(z,H){const P=c.attributes,F=z.attributes;let U=0;for(const K in F){const st=P[K],dt=F[K];if(st===void 0||st.attribute!==dt||st.data!==dt.data)return!0;U++}return c.attributesNum!==U||c.index!==H}function p(z,H){const P={},F=z.attributes;let U=0;for(const K in F){const st=F[K],dt={};dt.attribute=st,st.data&&(dt.data=st.data),P[K]=dt,U++}c.attributes=P,c.attributesNum=U,c.index=H}function m(){const z=c.newAttributes;for(let H=0,P=z.length;H<P;H++)z[H]=0}function S(z){v(z,0)}function v(z,H){const P=c.newAttributes,F=c.enabledAttributes,U=c.attributeDivisors;P[z]=1,F[z]===0&&(s.enableVertexAttribArray(z),F[z]=1),U[z]!==H&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,H),U[z]=H)}function E(){const z=c.newAttributes,H=c.enabledAttributes;for(let P=0,F=H.length;P<F;P++)H[P]!==z[P]&&(s.disableVertexAttribArray(P),H[P]=0)}function L(z,H,P,F,U,K){n.isWebGL2===!0&&(P===5124||P===5125)?s.vertexAttribIPointer(z,H,P,U,K):s.vertexAttribPointer(z,H,P,F,U,K)}function y(z,H,P,F){if(n.isWebGL2===!1&&(z.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;m();const U=F.attributes,K=P.getAttributes(),st=H.defaultAttributeValues;for(const dt in K){const nt=K[dt];if(nt.location>=0){let _t=U[dt];if(_t===void 0&&(dt==="instanceMatrix"&&z.instanceMatrix&&(_t=z.instanceMatrix),dt==="instanceColor"&&z.instanceColor&&(_t=z.instanceColor)),_t!==void 0){const X=_t.normalized,Q=_t.itemSize,ct=e.get(_t);if(ct===void 0)continue;const O=ct.buffer,ft=ct.type,vt=ct.bytesPerElement;if(_t.isInterleavedBufferAttribute){const at=_t.data,ht=at.stride,Et=_t.offset;if(at&&at.isInstancedInterleavedBuffer){for(let k=0;k<nt.locationSize;k++)v(nt.location+k,at.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let k=0;k<nt.locationSize;k++)S(nt.location+k);s.bindBuffer(34962,O);for(let k=0;k<nt.locationSize;k++)L(nt.location+k,Q/nt.locationSize,ft,X,ht*vt,(Et+Q/nt.locationSize*k)*vt)}else{if(_t.isInstancedBufferAttribute){for(let at=0;at<nt.locationSize;at++)v(nt.location+at,_t.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let at=0;at<nt.locationSize;at++)S(nt.location+at);s.bindBuffer(34962,O);for(let at=0;at<nt.locationSize;at++)L(nt.location+at,Q/nt.locationSize,ft,X,Q*vt,Q/nt.locationSize*at*vt)}}else if(st!==void 0){const X=st[dt];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(nt.location,X);break;case 3:s.vertexAttrib3fv(nt.location,X);break;case 4:s.vertexAttrib4fv(nt.location,X);break;default:s.vertexAttrib1fv(nt.location,X)}}}}E()}function D(){A();for(const z in o){const H=o[z];for(const P in H){const F=H[P];for(const U in F)f(F[U].object),delete F[U];delete H[P]}delete o[z]}}function q(z){if(o[z.id]===void 0)return;const H=o[z.id];for(const P in H){const F=H[P];for(const U in F)f(F[U].object),delete F[U];delete H[P]}delete o[z.id]}function R(z){for(const H in o){const P=o[H];if(P[z.id]===void 0)continue;const F=P[z.id];for(const U in F)f(F[U].object),delete F[U];delete P[z.id]}}function A(){tt(),c!==l&&(c=l,u(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:A,resetDefaultState:tt,dispose:D,releaseStatesOfGeometry:q,releaseStatesOfProgram:R,initAttributes:m,enableAttribute:S,disableUnusedAttributes:E}}function If(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=s,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](r,c,h,d),e.update(h,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Df(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(34930),u=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),x=s.getParameter(34921),_=s.getParameter(36347),p=s.getParameter(36348),m=s.getParameter(36349),S=u>0,v=a||t.has("OES_texture_float"),E=S&&v,L=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:L}}function Ff(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ke,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,f){const g=d.length!==0||u||n!==0||i;return i=u,e=h(d,f,0),n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,_=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!_)r?h(null):c();else{const m=r?0:n,S=m*4;let v=p.clippingState||null;l.value=v,v=h(g,u,S,f);for(let E=0;E!==S;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let _=null;if(x!==0){if(_=l.value,g!==!0||_===null){const p=f+x*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(m,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function Nf(s){let t=new WeakMap;function e(a,o){return o===Ds?a.mapping=Ir:o===Fs&&(a.mapping=Dr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ds||o===Fs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=s.getRenderTarget(),h=new al(l.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),s.setRenderTarget(c),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ks extends Js{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Ks.prototype.isOrthographicCamera=!0;class Or extends Mn{constructor(t){super(t),this.type="RawShaderMaterial"}}Or.prototype.isRawShaderMaterial=!0;const Qn=4,nn=8,Ce=Math.pow(2,nn),ll=[.125,.215,.35,.446,.526,.582],cl=nn-Qn+1+ll.length,zn=20,on={[le]:0,[wn]:1,[Ys]:2,[Ko]:3,[$o]:4,[tl]:5,[qs]:6},_s=new Ks,{_lodPlanes:mi,_sizeLods:Qa,_sigmas:ar}=Uf(),Ka=new gt;let Ms=null;const xn=(1+Math.sqrt(5))/2,Un=1/xn,$a=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,xn,Un),new T(0,xn,-Un),new T(Un,0,xn),new T(-Un,0,xn),new T(xn,Un,0),new T(-xn,Un,0)];class Bf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=Of(zn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ms=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t){return this._fromTexture(t)}fromCubemap(t){return this._fromTexture(t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=no(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=eo(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<mi.length;t++)mi[t].dispose()}_cleanup(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ms),t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t){Ms=this._renderer.getRenderTarget();const e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(t){const e={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:an,format:kc,encoding:zf(t)?t.encoding:Ys,depthBuffer:!1},n=to(e);return n.depthBuffer=!t,this._pingPongRenderTarget=to(e),n}_compileMaterial(t){const e=new ne(mi[0],t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,i){const o=new oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.outputEncoding,f=h.toneMapping;h.getClearColor(Ka),h.toneMapping=yn,h.outputEncoding=le,h.autoClear=!1;const g=new js({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new ne(new zi,g);let _=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,_=!0):(g.color.copy(Ka),_=!0);for(let m=0;m<6;m++){const S=m%3;S==0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S==1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m])),or(i,S*Ce,m>2?Ce:0,Ce,Ce),h.setRenderTarget(i),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.outputEncoding=u,h.autoClear=d,t.background=p}_setEncoding(t,e){this._renderer.capabilities.isWebGL2===!0&&e.format===ue&&e.type===an&&e.encoding===wn?t.value=on[le]:t.value=on[e.encoding]}_textureToCubeUV(t,e){const n=this._renderer;t.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=no()):this._equirectShader==null&&(this._equirectShader=eo());const i=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new ne(mi[0],i),a=i.uniforms;a.envMap.value=t,t.isCubeTexture||a.texelSize.value.set(1/t.image.width,1/t.image.height),this._setEncoding(a.inputEncoding,t),this._setEncoding(a.outputEncoding,e.texture),or(e,0,0,3*Ce,2*Ce),n.setRenderTarget(e),n.render(r,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<cl;i++){const r=Math.sqrt(ar[i]*ar[i]-ar[i-1]*ar[i-1]),a=$a[(i-1)%$a.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ne(mi[i],c),u=c.uniforms,f=Qa[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zn-1),x=r/g,_=isFinite(r)?1+Math.floor(h*x):zn;_>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zn}`);const p=[];let m=0;for(let L=0;L<zn;++L){const y=L/x,D=Math.exp(-y*y/2);p.push(D),L==0?m+=D:L<_&&(m+=2*D)}for(let L=0;L<p.length;L++)p[L]=p[L]/m;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=g,u.mipInt.value=nn-n,this._setEncoding(u.inputEncoding,t.texture),this._setEncoding(u.outputEncoding,t.texture);const S=Qa[i],v=3*Math.max(0,Ce-2*S),E=(i===0?0:2*Ce)+2*S*(i>nn-Qn?i-nn+Qn:0);or(e,v,E,3*S,2*S),l.setRenderTarget(e),l.render(d,_s)}}function zf(s){return s===void 0||s.type!==an?!1:s.encoding===le||s.encoding===wn||s.encoding===qs}function Uf(){const s=[],t=[],e=[];let n=nn;for(let i=0;i<cl;i++){const r=Math.pow(2,n);t.push(r);let a=1/r;i>nn-Qn?a=ll[i-nn+Qn-1]:i==0&&(a=0),e.push(a);const o=1/(r-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=2,x=1,_=new Float32Array(f*u*d),p=new Float32Array(g*u*d),m=new Float32Array(x*u*d);for(let v=0;v<d;v++){const E=v%3*2/3-1,L=v>2?0:-1,y=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];_.set(y,f*u*v),p.set(h,g*u*v);const D=[v,v,v,v,v,v];m.set(D,x*u*v)}const S=new Ut;S.setAttribute("position",new qt(_,f)),S.setAttribute("uv",new qt(p,g)),S.setAttribute("faceIndex",new qt(m,x)),s.push(S),n>Qn&&n--}return{_lodPlanes:s,_sizeLods:t,_sigmas:e}}function to(s){const t=new Ie(3*Ce,3*Ce,s);return t.texture.mapping=Fr,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Of(s){const t=new Float32Array(s),e=new T(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e},inputEncoding:{value:on[le]},outputEncoding:{value:on[le]}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${ta()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function eo(){const s=new j(1,1);return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:on[le]},outputEncoding:{value:on[le]}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ta()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function no(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:on[le]},outputEncoding:{value:on[le]}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ta()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ta(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Hf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===Ds||l===Fs,h=l===Ir||l===Dr;if(c||h){if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){const u=s.getRenderTarget();e===null&&(e=new Bf(s));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),s.setRenderTarget(u),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Gf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kf(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let _=0,p=x.length;_<p;_++)t.update(x[_],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const m=f.array;x=f.version;for(let S=0,v=m.length;S<v;S+=3){const E=m[S+0],L=m[S+1],y=m[S+2];u.push(E,L,L,y,y,E)}}else{const m=g.array;x=g.version;for(let S=0,v=m.length/3-1;S<v;S+=3){const E=S+0,L=S+1,y=S+2;u.push(E,L,L,y,y,E)}}const _=new(el(u)>65535?sl:rl)(u,1);_.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,_)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Vf(s,t,e,n){const i=n.isWebGL2;let r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,f){s.drawElements(r,f,o,u*l),e.update(f,r,1)}function d(u,f,g){if(g===0)return;let x,_;if(i)x=s,_="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](r,f,o,u*l,g),e.update(f,r,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Wf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}class ea extends ie{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ea.prototype.isDataTexture2DArray=!0;function Xf(s,t){return s[0]-t[0]}function qf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function io(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function Yf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new T,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position.length;let x=r.get(h);if(x===void 0||x.count!==g){x!==void 0&&x.texture.dispose();const m=h.morphAttributes.normal!==void 0,S=h.morphAttributes.position,v=h.morphAttributes.normal||[],E=h.attributes.position.count,L=m===!0?2:1;let y=E*L,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const q=new Float32Array(y*D*4*g),R=new ea(q,y,D,g);R.format=ue,R.type=tn;const A=L*4;for(let tt=0;tt<g;tt++){const z=S[tt],H=v[tt],P=y*D*4*tt;for(let F=0;F<z.count;F++){a.fromBufferAttribute(z,F),z.normalized===!0&&io(a,z);const U=F*A;q[P+U+0]=a.x,q[P+U+1]=a.y,q[P+U+2]=a.z,q[P+U+3]=0,m===!0&&(a.fromBufferAttribute(H,F),H.normalized===!0&&io(a,H),q[P+U+4]=a.x,q[P+U+5]=a.y,q[P+U+6]=a.z,q[P+U+7]=0)}}x={count:g,texture:R,size:new j(y,D)},r.set(h,x)}let _=0;for(let m=0;m<f.length;m++)_+=f[m];const p=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let v=0;v<g;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<g;v++){const E=x[v];E[0]=v,E[1]=f[v]}x.sort(qf);for(let v=0;v<8;v++)v<g&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Xf);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=o[v],L=E[0],y=E[1];L!==Number.MAX_SAFE_INTEGER&&y?(_&&h.getAttribute("morphTarget"+v)!==_[L]&&h.setAttribute("morphTarget"+v,_[L]),p&&h.getAttribute("morphNormal"+v)!==p[L]&&h.setAttribute("morphNormal"+v,p[L]),i[v]=y,m+=y):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function jf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class hl extends ie{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}hl.prototype.isDataTexture3D=!0;const ul=new ie,Jf=new ea,Zf=new hl,dl=new zr,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function si(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ro[i];if(r===void 0&&(r=new Float32Array(i),ro[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function fl(s,t){let e=so[t];e===void 0&&(e=new Int32Array(t),so[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ce(e,t)}}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ce(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ce(e,t)}}function ep(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(de(e,n))return;lo.set(n),s.uniformMatrix2fv(this.addr,!1,lo),ce(e,n)}}function np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(de(e,n))return;oo.set(n),s.uniformMatrix3fv(this.addr,!1,oo),ce(e,n)}}function ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(de(e,n))return;ao.set(n),s.uniformMatrix4fv(this.addr,!1,ao),ce(e,n)}}function rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sp(s,t){const e=this.cache;de(e,t)||(s.uniform2iv(this.addr,t),ce(e,t))}function ap(s,t){const e=this.cache;de(e,t)||(s.uniform3iv(this.addr,t),ce(e,t))}function op(s,t){const e=this.cache;de(e,t)||(s.uniform4iv(this.addr,t),ce(e,t))}function lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cp(s,t){const e=this.cache;de(e,t)||(s.uniform2uiv(this.addr,t),ce(e,t))}function hp(s,t){const e=this.cache;de(e,t)||(s.uniform3uiv(this.addr,t),ce(e,t))}function up(s,t){const e=this.cache;de(e,t)||(s.uniform4uiv(this.addr,t),ce(e,t))}function dp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||ul,i)}function fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zf,i)}function pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||dl,i)}function mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jf,i)}function gp(s){switch(s){case 5126:return Qf;case 35664:return Kf;case 35665:return $f;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function xp(s,t){s.uniform1fv(this.addr,t)}function vp(s,t){const e=si(t,this.size,2);s.uniform2fv(this.addr,e)}function yp(s,t){const e=si(t,this.size,3);s.uniform3fv(this.addr,e)}function _p(s,t){const e=si(t,this.size,4);s.uniform4fv(this.addr,e)}function Mp(s,t){const e=si(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wp(s,t){const e=si(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bp(s,t){const e=si(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sp(s,t){s.uniform1iv(this.addr,t)}function Tp(s,t){s.uniform2iv(this.addr,t)}function Ep(s,t){s.uniform3iv(this.addr,t)}function Ap(s,t){s.uniform4iv(this.addr,t)}function Lp(s,t){s.uniform1uiv(this.addr,t)}function Cp(s,t){s.uniform2uiv(this.addr,t)}function Rp(s,t){s.uniform3uiv(this.addr,t)}function Pp(s,t){s.uniform4uiv(this.addr,t)}function Ip(s,t,e){const n=t.length,i=fl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTexture2D(t[r]||ul,i[r])}function Dp(s,t,e){const n=t.length,i=fl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTextureCube(t[r]||dl,i[r])}function Fp(s){switch(s){case 5126:return xp;case 35664:return vp;case 35665:return yp;case 35666:return _p;case 35674:return Mp;case 35675:return wp;case 35676:return bp;case 5124:case 35670:return Sp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return Lp;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35680:case 36300:case 36308:case 36293:return Dp}}function Np(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=gp(t.type)}function pl(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Fp(t.type)}pl.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),ce(t,s)};function ml(s){this.id=s,this.seq=[],this.map={}}ml.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,t[a.id],e)}};const ws=/(\w+)(\])?(\[|\.)?/g;function co(s,t){s.seq.push(t),s.map[t.id]=t}function Bp(s,t,e){const n=s.name,i=n.length;for(ws.lastIndex=0;;){const r=ws.exec(n),a=ws.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){co(e,c===void 0?new Np(o,s,t):new pl(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new ml(o),co(e,d)),e=d}}}function rn(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);Bp(i,r,this)}}rn.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)};rn.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)};rn.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const a=t[i],o=e[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};rn.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function ho(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let zp=0;function Up(s){const t=s.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function xl(s){switch(s){case le:return["Linear","( value )"];case wn:return["sRGB","( value )"];case Ys:return["RGBE","( value )"];case Ko:return["RGBM","( value, 7.0 )"];case $o:return["RGBM","( value, 16.0 )"];case tl:return["RGBD","( value, 256.0 )"];case qs:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Ch:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function uo(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+Up(s.getShaderSource(t))}function On(s,t){const e=xl(t);return"vec4 "+s+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function Op(s,t){const e=xl(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Hp(s,t){let e;switch(t){case Ac:e="Linear";break;case Lc:e="Reinhard";break;case Cc:e="OptimizedCineon";break;case Rc:e="ACESFilmic";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gp(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function kp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vp(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function wi(s){return s!==""}function fo(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function po(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(s){return s.replace(Wp,Xp)}function Xp(s,t){const e=Lt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Us(e)}const qp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(s){return s.replace(Yp,vl).replace(qp,jp)}function jp(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),vl(s,t,e,n)}function vl(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function go(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ir:case Dr:t="ENVMAP_TYPE_CUBE";break;case Fr:case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Dr:case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Kp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pr:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case Ec:t="ENVMAP_BLENDING_ADD";break}return t}function $p(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jp(e),c=Zp(e),h=Qp(e),d=Kp(e),u=s.gammaFactor>0?s.gammaFactor:1,f=e.isWebGL2?"":Gp(e),g=kp(r),x=i.createProgram();let _,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=[g].filter(wi).join(`
`),_.length>0&&(_+=`
`),p=[f,g].filter(wi).join(`
`),p.length>0&&(p+=`
`)):(_=[go(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularTintMap?"#define USE_SPECULARTINTMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),p=[f,go(e),"#define SHADER_NAME "+e.shaderName,g,"#define GAMMA_FACTOR "+u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularTintMap?"#define USE_SPECULARTINTMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Hp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.format===Jn?"#define OPAQUE":"",Lt.encodings_pars_fragment,e.map?On("mapTexelToLinear",e.mapEncoding):"",e.matcap?On("matcapTexelToLinear",e.matcapEncoding):"",e.envMap?On("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMap?On("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.specularTintMap?On("specularTintMapTexelToLinear",e.specularTintMapEncoding):"",e.lightMap?On("lightMapTexelToLinear",e.lightMapEncoding):"",Op("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),a=Us(a),a=fo(a,e),a=po(a,e),o=Us(o),o=fo(o,e),o=po(o,e),a=mo(a),o=mo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Ua?"":"out highp vec4 pc_fragColor;",e.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+_+a,v=m+p+o,E=ho(i,35633,S),L=ho(i,35632,v);if(i.attachShader(x,E),i.attachShader(x,L),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const q=i.getProgramInfoLog(x).trim(),R=i.getShaderInfoLog(E).trim(),A=i.getShaderInfoLog(L).trim();let tt=!0,z=!0;if(i.getProgramParameter(x,35714)===!1){tt=!1;const H=uo(i,E,"vertex"),P=uo(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+q+`
`+H+`
`+P)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(R===""||A==="")&&(z=!1);z&&(this.diagnostics={runnable:tt,programLog:q,vertexShader:{log:R,prefix:_},fragmentShader:{log:A,prefix:p}})}i.deleteShader(E),i.deleteShader(L);let y;this.getUniforms=function(){return y===void 0&&(y=new rn(i,x)),y};let D;return this.getAttributes=function(){return D===void 0&&(D=Vp(i,x)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=L,this}function tm(s,t,e,n,i,r,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,d=i.maxVertexUniforms,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},x=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function _(y){const q=y.skeleton.bones;if(h)return 1024;{const A=Math.floor((d-20)/4),tt=Math.min(A,q.length);return tt<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+tt+"."),0):tt}}function p(y){let D;return y&&y.isTexture?D=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),D=y.texture.encoding):D=le,l&&y&&y.isTexture&&y.format===ue&&y.type===an&&y.encoding===wn&&(D=le),D}function m(y,D,q,R,A){const tt=R.fog,z=y.isMeshStandardMaterial?R.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),P=g[y.type],F=A.isSkinnedMesh?_(A):0;y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let U,K;if(P){const X=Re[P];U=X.vertexShader,K=X.fragmentShader}else U=y.vertexShader,K=y.fragmentShader;const st=s.getRenderTarget(),dt=y.alphaTest>0,nt=y.clearcoat>0;return{isWebGL2:l,shaderID:P,shaderName:y.type,vertexShader:U,fragmentShader:K,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:A.isInstancedMesh===!0,instancingColor:A.isInstancedMesh===!0&&A.instanceColor!==null,supportsVertexTextures:u,outputEncoding:st!==null?p(st.texture):s.outputEncoding,map:!!y.map,mapEncoding:p(y.map),matcap:!!y.matcap,matcapEncoding:p(y.matcap),envMap:!!H,envMapMode:H&&H.mapping,envMapEncoding:p(H),envMapCubeUV:!!H&&(H.mapping===Fr||H.mapping===Ws),lightMap:!!y.lightMap,lightMapEncoding:p(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:p(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ih,tangentSpaceNormalMap:y.normalMapType===ti,clearcoat:nt,clearcoatMap:nt&&!!y.clearcoatMap,clearcoatRoughnessMap:nt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:nt&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularTintMap:!!y.specularTintMap,specularTintMapEncoding:p(y.specularTintMap),alphaMap:!!y.alphaMap,alphaTest:dt,gradientMap:!!y.gradientMap,sheen:y.sheen>0,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!A.geometry&&!!A.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.geometry&&!!A.geometry.attributes.color&&A.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularTintMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularTintMap)&&!!y.displacementMap,fog:!!tt,useFog:y.fog,fogExp2:tt&&tt.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:A.isSkinnedMesh===!0&&F>0,maxBones:F,useVertexTexture:h,morphTargets:!!A.geometry&&!!A.geometry.morphAttributes.position,morphNormals:!!A.geometry&&!!A.geometry.morphAttributes.normal,morphTargetsCount:A.geometry&&A.geometry.morphAttributes.position?A.geometry.morphAttributes.position.length:0,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:y.format,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:yn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Jt,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function S(y){const D=[];if(y.shaderID?D.push(y.shaderID):(D.push(y.fragmentShader),D.push(y.vertexShader)),y.defines!==void 0)for(const q in y.defines)D.push(q),D.push(y.defines[q]);if(y.isRawShaderMaterial===!1){for(let q=0;q<x.length;q++)D.push(y[x[q]]);D.push(s.outputEncoding),D.push(s.gammaFactor)}return D.push(y.customProgramCacheKey),D.join()}function v(y){const D=g[y.type];let q;if(D){const R=Re[D];q=Qh.clone(R.uniforms)}else q=y.uniforms;return q}function E(y,D){let q;for(let R=0,A=o.length;R<A;R++){const tt=o[R];if(tt.cacheKey===D){q=tt,++q.usedTimes;break}}return q===void 0&&(q=new $p(s,D,y,r),o.push(q)),q}function L(y){if(--y.usedTimes===0){const D=o.indexOf(y);o[D]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:m,getProgramCacheKey:S,getUniforms:v,acquireProgram:E,releaseProgram:L,programs:o}}function em(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function nm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.program!==t.program?s.program.id-t.program.id:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vo(s){const t=[];let e=0;const n=[],i=[],r=[],a={id:-1};function o(){e=0,n.length=0,i.length=0,r.length=0}function l(f,g,x,_,p,m){let S=t[e];const v=s.get(x);return S===void 0?(S={id:f.id,object:f,geometry:g,material:x,program:v.program||a,groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},t[e]=S):(S.id=f.id,S.object=f,S.geometry=g,S.material=x,S.program=v.program||a,S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function c(f,g,x,_,p,m){const S=l(f,g,x,_,p,m);x.transmission>0?i.push(S):x.transparent===!0?r.push(S):n.push(S)}function h(f,g,x,_,p,m){const S=l(f,g,x,_,p,m);x.transmission>0?i.unshift(S):x.transparent===!0?r.unshift(S):n.unshift(S)}function d(f,g){n.length>1&&n.sort(f||nm),i.length>1&&i.sort(g||xo),r.length>1&&r.sort(g||xo)}function u(){for(let f=e,g=t.length;f<g;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.program=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:c,unshift:h,finish:u,sort:d}}function im(s){let t=new WeakMap;function e(i,r){let a;return t.has(i)===!1?(a=new vo(s),t.set(i,[a])):r>=t.get(i).length?(a=new vo(s),t.get(i).push(a)):a=t.get(i)[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new gt};break;case"SpotLight":e={position:new T,direction:new T,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function sm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let am=0;function om(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function lm(s,t){const e=new rm,n=sm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new T);const r=new T,a=new yt,o=new yt;function l(h,d){let u=0,f=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let x=0,_=0,p=0,m=0,S=0,v=0,E=0,L=0;h.sort(om);const y=d!==!0?Math.PI:1;for(let q=0,R=h.length;q<R;q++){const A=h[q],tt=A.color,z=A.intensity,H=A.distance,P=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=tt.r*z*y,f+=tt.g*z*y,g+=tt.b*z*y;else if(A.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],z);else if(A.isDirectionalLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity*y),A.castShadow){const U=A.shadow,K=n.get(A);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=P,i.directionalShadowMatrix[x]=A.shadow.matrix,v++}i.directional[x]=F,x++}else if(A.isSpotLight){const F=e.get(A);if(F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(tt).multiplyScalar(z*y),F.distance=H,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,A.castShadow){const U=A.shadow,K=n.get(A);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=P,i.spotShadowMatrix[p]=A.shadow.matrix,L++}i.spot[p]=F,p++}else if(A.isRectAreaLight){const F=e.get(A);F.color.copy(tt).multiplyScalar(z),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity*y),F.distance=A.distance,F.decay=A.decay,A.castShadow){const U=A.shadow,K=n.get(A);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,K.shadowCameraNear=U.camera.near,K.shadowCameraFar=U.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=A.shadow.matrix,E++}i.point[_]=F,_++}else if(A.isHemisphereLight){const F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(z*y),F.groundColor.copy(A.groundColor).multiplyScalar(z*y),i.hemi[S]=F,S++}}m>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==x||D.pointLength!==_||D.spotLength!==p||D.rectAreaLength!==m||D.hemiLength!==S||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==L)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=m,i.point.length=_,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=L,D.directionalLength=x,D.pointLength=_,D.spotLength=p,D.rectAreaLength=m,D.hemiLength=S,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=L,i.version=am++)}function c(h,d){let u=0,f=0,g=0,x=0,_=0;const p=d.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){const v=h[m];if(v.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),E.direction.normalize(),_++}}}return{setup:l,setupView:c,state:i}}function yo(s,t){const e=new lm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cm(s,t){let e=new WeakMap;function n(r,a=0){let o;return e.has(r)===!1?(o=new yo(s,t),e.set(r,[o])):a>=e.get(r).length?(o=new yo(s,t),e.get(r).push(o)):o=e.get(r)[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class yl extends he{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}yl.prototype.isMeshDepthMaterial=!0;class _l extends he{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}_l.prototype.isMeshDistanceMaterial=!0;const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ml(s,t,e){let n=new Ur;const i=new j,r=new j,a=new zt,o=new yl({depthPacking:Ph}),l=new _l,c={},h=e.maxTextureSize,d={0:Jt,1:Li,2:_n},u=new Mn({uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4},samples:{value:8}},vertexShader:hm,fragmentShader:um}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ne(g,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo,this.render=function(v,E,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||v.length===0)return;const y=s.getRenderTarget(),D=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),R=s.state;R.setBlending(en),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let A=0,tt=v.length;A<tt;A++){const z=v[A],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const P=H.getFrameExtents();if(i.multiply(P),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/P.x),i.x=r.x*P.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/P.y),i.y=r.y*P.y,H.mapSize.y=r.y)),H.map===null&&!H.isPointLightShadow&&this.type===Mi){const U={minFilter:_e,magFilter:_e,format:ue};H.map=new Ie(i.x,i.y,U),H.map.texture.name=z.name+".shadowMap",H.mapPass=new Ie(i.x,i.y,U),H.camera.updateProjectionMatrix()}if(H.map===null){const U={minFilter:$t,magFilter:$t,format:ue};H.map=new Ie(i.x,i.y,U),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const F=H.getViewportCount();for(let U=0;U<F;U++){const K=H.getViewport(U);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),R.viewport(a),H.updateMatrices(z,U),n=H.getFrustum(),S(E,L,H.camera,z,this.type)}!H.isPointLightShadow&&this.type===Mi&&p(H,L),H.needsUpdate=!1}_.needsUpdate=!1,s.setRenderTarget(y,D,q)};function p(v,E){const L=t.update(x);u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,u.uniforms.samples.value=v.blurSamples,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(E,null,L,u,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,f.uniforms.samples.value=v.blurSamples,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(E,null,L,f,x,null)}function m(v,E,L,y,D,q,R){let A=null;const tt=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(tt!==void 0?A=tt:A=y.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const z=A.uuid,H=L.uuid;let P=c[z];P===void 0&&(P={},c[z]=P);let F=P[H];F===void 0&&(F=A.clone(),P[H]=F),A=F}return A.visible=L.visible,A.wireframe=L.wireframe,R===Mi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:d[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(y.matrixWorld),A.nearDistance=D,A.farDistance=q),A}function S(v,E,L,y,D){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===Mi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const A=t.update(v),tt=v.material;if(Array.isArray(tt)){const z=A.groups;for(let H=0,P=z.length;H<P;H++){const F=z[H],U=tt[F.materialIndex];if(U&&U.visible){const K=m(v,A,U,y,L.near,L.far,D);s.renderBufferDirect(L,null,A,K,v,F)}}}else if(tt.visible){const z=m(v,A,tt,y,L.near,L.far,D);s.renderBufferDirect(L,null,A,z,v,null)}}const R=v.children;for(let A=0,tt=R.length;A<tt;A++)S(R[A],E,L,y,D)}}function dm(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const rt=new zt;let W=null;const lt=new zt(0,0,0,0);return{setMask:function(ut){W!==ut&&!C&&(s.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){C=ut},setClear:function(ut,Ct,re,se,We){We===!0&&(ut*=se,Ct*=se,re*=se),rt.set(ut,Ct,re,se),lt.equals(rt)===!1&&(s.clearColor(ut,Ct,re,se),lt.copy(rt))},reset:function(){C=!1,W=null,lt.set(-1,0,0,0)}}}function r(){let C=!1,rt=null,W=null,lt=null;return{setTest:function(ut){ut?Q(2929):ct(2929)},setMask:function(ut){rt!==ut&&!C&&(s.depthMask(ut),rt=ut)},setFunc:function(ut){if(W!==ut){if(ut)switch(ut){case vc:s.depthFunc(512);break;case yc:s.depthFunc(519);break;case _c:s.depthFunc(513);break;case Is:s.depthFunc(515);break;case Mc:s.depthFunc(514);break;case wc:s.depthFunc(518);break;case bc:s.depthFunc(516);break;case Sc:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);W=ut}},setLocked:function(ut){C=ut},setClear:function(ut){lt!==ut&&(s.clearDepth(ut),lt=ut)},reset:function(){C=!1,rt=null,W=null,lt=null}}}function a(){let C=!1,rt=null,W=null,lt=null,ut=null,Ct=null,re=null,se=null,We=null;return{setTest:function(Yt){C||(Yt?Q(2960):ct(2960))},setMask:function(Yt){rt!==Yt&&!C&&(s.stencilMask(Yt),rt=Yt)},setFunc:function(Yt,Ne,Be){(W!==Yt||lt!==Ne||ut!==Be)&&(s.stencilFunc(Yt,Ne,Be),W=Yt,lt=Ne,ut=Be)},setOp:function(Yt,Ne,Be){(Ct!==Yt||re!==Ne||se!==Be)&&(s.stencilOp(Yt,Ne,Be),Ct=Yt,re=Ne,se=Be)},setLocked:function(Yt){C=Yt},setClear:function(Yt){We!==Yt&&(s.clearStencil(Yt),We=Yt)},reset:function(){C=!1,rt=null,W=null,lt=null,ut=null,Ct=null,re=null,se=null,We=null}}}const o=new i,l=new r,c=new a;let h={},d=null,u={},f=null,g=!1,x=null,_=null,p=null,m=null,S=null,v=null,E=null,L=!1,y=null,D=null,q=null,R=null,A=null;const tt=s.getParameter(35661);let z=!1,H=0;const P=s.getParameter(7938);P.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(P)[1]),z=H>=1):P.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),z=H>=2);let F=null,U={};const K=s.getParameter(3088),st=s.getParameter(2978),dt=new zt().fromArray(K),nt=new zt().fromArray(st);function _t(C,rt,W){const lt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(C,ut),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let Ct=0;Ct<W;Ct++)s.texImage2D(rt+Ct,0,6408,1,1,0,6408,5121,lt);return ut}const X={};X[3553]=_t(3553,3553,1),X[34067]=_t(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(Is),Y(!1),$(_a),Q(2884),Et(en);function Q(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ct(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function O(C){C!==d&&(s.bindFramebuffer(36160,C),d=C)}function ft(C,rt){return rt===null&&d!==null&&(rt=d),u[C]!==rt?(s.bindFramebuffer(C,rt),u[C]=rt,n&&(C===36009&&(u[36160]=rt),C===36160&&(u[36009]=rt)),!0):!1}function vt(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const at={[Wn]:32774,[oc]:32778,[lc]:32779};if(n)at[Sa]=32775,at[Ta]=32776;else{const C=t.get("EXT_blend_minmax");C!==null&&(at[Sa]=C.MIN_EXT,at[Ta]=C.MAX_EXT)}const ht={[cc]:0,[hc]:1,[uc]:768,[jo]:770,[xc]:776,[mc]:774,[fc]:772,[dc]:769,[Jo]:771,[gc]:775,[pc]:773};function Et(C,rt,W,lt,ut,Ct,re,se){if(C===en){g===!0&&(ct(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),C!==ac){if(C!==x||se!==L){if((_!==Wn||S!==Wn)&&(s.blendEquation(32774),_=Wn,S=Wn),se)switch(C){case Si:s.blendFuncSeparate(1,771,1,771);break;case Ma:s.blendFunc(1,1);break;case wa:s.blendFuncSeparate(0,0,769,771);break;case ba:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Si:s.blendFuncSeparate(770,771,1,771);break;case Ma:s.blendFunc(770,1);break;case wa:s.blendFunc(0,769);break;case ba:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,m=null,v=null,E=null,x=C,L=se}return}ut=ut||rt,Ct=Ct||W,re=re||lt,(rt!==_||ut!==S)&&(s.blendEquationSeparate(at[rt],at[ut]),_=rt,S=ut),(W!==p||lt!==m||Ct!==v||re!==E)&&(s.blendFuncSeparate(ht[W],ht[lt],ht[Ct],ht[re]),p=W,m=lt,v=Ct,E=re),x=C,L=null}function k(C,rt){C.side===_n?ct(2884):Q(2884);let W=C.side===Jt;rt&&(W=!W),Y(W),C.blending===Si&&C.transparent===!1?Et(en):Et(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const lt=C.stencilWrite;c.setTest(lt),lt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),it(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(32926):ct(32926)}function Y(C){y!==C&&(C?s.frontFace(2304):s.frontFace(2305),y=C)}function $(C){C!==ic?(Q(2884),C!==D&&(C===_a?s.cullFace(1029):C===rc?s.cullFace(1028):s.cullFace(1032))):ct(2884),D=C}function pt(C){C!==q&&(z&&s.lineWidth(C),q=C)}function it(C,rt,W){C?(Q(32823),(R!==rt||A!==W)&&(s.polygonOffset(rt,W),R=rt,A=W)):ct(32823)}function b(C){C?Q(3089):ct(3089)}function w(C){C===void 0&&(C=33984+tt-1),F!==C&&(s.activeTexture(C),F=C)}function G(C,rt){F===null&&w();let W=U[F];W===void 0&&(W={type:void 0,texture:void 0},U[F]=W),(W.type!==C||W.texture!==rt)&&(s.bindTexture(C,rt||X[C]),W.type=C,W.texture=rt)}function J(){const C=U[F];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(C){dt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),dt.copy(C))}function St(C){nt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),nt.copy(C))}function mt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},F=null,U={},d=null,u={},f=null,g=!1,x=null,_=null,p=null,m=null,S=null,v=null,E=null,L=!1,y=null,D=null,q=null,R=null,A=null,dt.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:ct,bindFramebuffer:ft,bindXRFramebuffer:O,useProgram:vt,setBlending:Et,setMaterial:k,setFlipSided:Y,setCullFace:$,setLineWidth:pt,setPolygonOffset:it,setScissorTest:b,activeTexture:w,bindTexture:G,unbindTexture:J,compressedTexImage2D:Z,texImage2D:ot,texImage3D:bt,scissor:xt,viewport:St,reset:mt}}function fm(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,w){return g?new OffscreenCanvas(b,w):Br("canvas")}function _(b,w,G,J){let Z=1;if((b.width>J||b.height>J)&&(Z=J/Math.max(b.width,b.height)),Z<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ot=w?Bh:Math.floor,bt=ot(Z*b.width),xt=ot(Z*b.height);f===void 0&&(f=x(bt,xt));const St=G?x(bt,xt):f;return St.width=bt,St.height=xt,St.getContext("2d").drawImage(b,0,0,bt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+bt+"x"+xt+")."),St}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Oa(b.width)&&Oa(b.height)}function m(b){return o?!1:b.wrapS!==xe||b.wrapT!==xe||b.minFilter!==$t&&b.minFilter!==_e}function S(b,w){return b.generateMipmaps&&w&&b.minFilter!==$t&&b.minFilter!==_e}function v(b,w,G,J,Z=1){s.generateMipmap(b);const ot=n.get(w);ot.__maxMipLevel=Math.log2(Math.max(G,J,Z))}function E(b,w,G,J){if(o===!1)return w;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=w;return w===6403&&(G===5126&&(Z=33326),G===5131&&(Z=33325),G===5121&&(Z=33321)),w===6407&&(G===5126&&(Z=34837),G===5131&&(Z=34843),G===5121&&(Z=32849)),w===6408&&(G===5126&&(Z=34836),G===5131&&(Z=34842),G===5121&&(Z=J===wn?35907:32856)),(Z===33325||Z===33326||Z===34842||Z===34836)&&t.get("EXT_color_buffer_float"),Z}function L(b){return b===$t||b===Ea||b===Aa?9728:9729}function y(b){const w=b.target;w.removeEventListener("dispose",y),q(w),w.isVideoTexture&&u.delete(w),a.memory.textures--}function D(b){const w=b.target;w.removeEventListener("dispose",D),R(w)}function q(b){const w=n.get(b);w.__webglInit!==void 0&&(s.deleteTexture(w.__webglTexture),n.remove(b))}function R(b){const w=b.texture,G=n.get(b),J=n.get(w);if(b){if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)s.deleteFramebuffer(G.__webglFramebuffer[Z]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[Z]);else s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&s.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let Z=0,ot=w.length;Z<ot;Z++){const bt=n.get(w[Z]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(w[Z])}n.remove(w),n.remove(b)}}let A=0;function tt(){A=0}function z(){const b=A;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),A+=1,b}function H(b,w){const G=n.get(b);if(b.isVideoTexture&&k(b),b.version>0&&G.__version!==b.version){const J=b.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(G,b,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,G.__webglTexture)}function P(b,w){const G=n.get(b);if(b.version>0&&G.__version!==b.version){_t(G,b,w);return}e.activeTexture(33984+w),e.bindTexture(35866,G.__webglTexture)}function F(b,w){const G=n.get(b);if(b.version>0&&G.__version!==b.version){_t(G,b,w);return}e.activeTexture(33984+w),e.bindTexture(32879,G.__webglTexture)}function U(b,w){const G=n.get(b);if(b.version>0&&G.__version!==b.version){X(G,b,w);return}e.activeTexture(33984+w),e.bindTexture(34067,G.__webglTexture)}const K={[Ns]:10497,[xe]:33071,[Bs]:33648},st={[$t]:9728,[Ea]:9984,[Aa]:9986,[_e]:9729,[Ic]:9985,[Nr]:9987};function dt(b,w,G){if(G?(s.texParameteri(b,10242,K[w.wrapS]),s.texParameteri(b,10243,K[w.wrapT]),(b===32879||b===35866)&&s.texParameteri(b,32882,K[w.wrapR]),s.texParameteri(b,10240,st[w.magFilter]),s.texParameteri(b,10241,st[w.minFilter])):(s.texParameteri(b,10242,33071),s.texParameteri(b,10243,33071),(b===32879||b===35866)&&s.texParameteri(b,32882,33071),(w.wrapS!==xe||w.wrapT!==xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,10240,L(w.magFilter)),s.texParameteri(b,10241,L(w.minFilter)),w.minFilter!==$t&&w.minFilter!==_e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(w.type===tn&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===jn&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function nt(b,w){b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",y),b.__webglTexture=s.createTexture(),a.memory.textures++)}function _t(b,w,G){let J=3553;w.isDataTexture2DArray&&(J=35866),w.isDataTexture3D&&(J=32879),nt(b,w),e.activeTexture(33984+G),e.bindTexture(J,b.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Z=m(w)&&p(w.image)===!1,ot=_(w.image,Z,!1,h),bt=p(ot)||o,xt=r.convert(w.format);let St=r.convert(w.type),mt=E(w.internalFormat,xt,St,w.encoding);dt(J,w,bt);let C;const rt=w.mipmaps;if(w.isDepthTexture)mt=6402,o?w.type===tn?mt=36012:w.type===Mr?mt=33190:w.type===Ti?mt=35056:mt=33189:w.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zn&&mt===6402&&w.type!==wr&&w.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=wr,St=r.convert(w.type)),w.format===Ci&&mt===6402&&(mt=34041,w.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ti,St=r.convert(w.type))),e.texImage2D(3553,0,mt,ot.width,ot.height,0,xt,St,null);else if(w.isDataTexture)if(rt.length>0&&bt){for(let W=0,lt=rt.length;W<lt;W++)C=rt[W],e.texImage2D(3553,W,mt,C.width,C.height,0,xt,St,C.data);w.generateMipmaps=!1,b.__maxMipLevel=rt.length-1}else e.texImage2D(3553,0,mt,ot.width,ot.height,0,xt,St,ot.data),b.__maxMipLevel=0;else if(w.isCompressedTexture){for(let W=0,lt=rt.length;W<lt;W++)C=rt[W],w.format!==ue&&w.format!==Jn?xt!==null?e.compressedTexImage2D(3553,W,mt,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e.texImage2D(3553,W,mt,C.width,C.height,0,xt,St,C.data);b.__maxMipLevel=rt.length-1}else if(w.isDataTexture2DArray)e.texImage3D(35866,0,mt,ot.width,ot.height,ot.depth,0,xt,St,ot.data),b.__maxMipLevel=0;else if(w.isDataTexture3D)e.texImage3D(32879,0,mt,ot.width,ot.height,ot.depth,0,xt,St,ot.data),b.__maxMipLevel=0;else if(rt.length>0&&bt){for(let W=0,lt=rt.length;W<lt;W++)C=rt[W],e.texImage2D(3553,W,mt,xt,St,C);w.generateMipmaps=!1,b.__maxMipLevel=rt.length-1}else e.texImage2D(3553,0,mt,xt,St,ot),b.__maxMipLevel=0;S(w,bt)&&v(J,w,ot.width,ot.height),b.__version=w.version,w.onUpdate&&w.onUpdate(w)}function X(b,w,G){if(w.image.length!==6)return;nt(b,w),e.activeTexture(33984+G),e.bindTexture(34067,b.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const J=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),Z=w.image[0]&&w.image[0].isDataTexture,ot=[];for(let W=0;W<6;W++)!J&&!Z?ot[W]=_(w.image[W],!1,!0,c):ot[W]=Z?w.image[W].image:w.image[W];const bt=ot[0],xt=p(bt)||o,St=r.convert(w.format),mt=r.convert(w.type),C=E(w.internalFormat,St,mt,w.encoding);dt(34067,w,xt);let rt;if(J){for(let W=0;W<6;W++){rt=ot[W].mipmaps;for(let lt=0;lt<rt.length;lt++){const ut=rt[lt];w.format!==ue&&w.format!==Jn?St!==null?e.compressedTexImage2D(34069+W,lt,C,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):e.texImage2D(34069+W,lt,C,ut.width,ut.height,0,St,mt,ut.data)}}b.__maxMipLevel=rt.length-1}else{rt=w.mipmaps;for(let W=0;W<6;W++)if(Z){e.texImage2D(34069+W,0,C,ot[W].width,ot[W].height,0,St,mt,ot[W].data);for(let lt=0;lt<rt.length;lt++){const Ct=rt[lt].image[W].image;e.texImage2D(34069+W,lt+1,C,Ct.width,Ct.height,0,St,mt,Ct.data)}}else{e.texImage2D(34069+W,0,C,St,mt,ot[W]);for(let lt=0;lt<rt.length;lt++){const ut=rt[lt];e.texImage2D(34069+W,lt+1,C,St,mt,ut.image[W])}}b.__maxMipLevel=rt.length}S(w,xt)&&v(34067,w,bt.width,bt.height),b.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Q(b,w,G,J,Z){const ot=r.convert(G.format),bt=r.convert(G.type),xt=E(G.internalFormat,ot,bt,G.encoding);Z===32879||Z===35866?e.texImage3D(Z,0,xt,w.width,w.height,w.depth,0,ot,bt,null):e.texImage2D(Z,0,xt,w.width,w.height,0,ot,bt,null),e.bindFramebuffer(36160,b),s.framebufferTexture2D(36160,J,Z,n.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function ct(b,w,G){if(s.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let J=33189;if(G){const Z=w.depthTexture;Z&&Z.isDepthTexture&&(Z.type===tn?J=36012:Z.type===Mr&&(J=33190));const ot=Et(w);s.renderbufferStorageMultisample(36161,ot,J,w.width,w.height)}else s.renderbufferStorage(36161,J,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){if(G){const J=Et(w);s.renderbufferStorageMultisample(36161,J,35056,w.width,w.height)}else s.renderbufferStorage(36161,34041,w.width,w.height);s.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,Z=r.convert(J.format),ot=r.convert(J.type),bt=E(J.internalFormat,Z,ot,J.encoding);if(G){const xt=Et(w);s.renderbufferStorageMultisample(36161,xt,bt,w.width,w.height)}else s.renderbufferStorage(36161,bt,w.width,w.height)}s.bindRenderbuffer(36161,null)}function O(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===Zn)s.framebufferTexture2D(36160,36096,3553,J,0);else if(w.depthTexture.format===Ci)s.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ft(b){const w=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");O(w.__webglFramebuffer,b)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=s.createRenderbuffer(),ct(w.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ct(w.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function vt(b){const w=b.texture,G=n.get(b),J=n.get(w);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture=s.createTexture(),J.__version=w.version,a.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,ot=b.isWebGLMultipleRenderTargets===!0,bt=b.isWebGLMultisampleRenderTarget===!0,xt=w.isDataTexture3D||w.isDataTexture2DArray,St=p(b)||o;if(o&&w.format===Jn&&(w.type===tn||w.type===jn)&&(w.format=ue,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Z){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)G.__webglFramebuffer[mt]=s.createFramebuffer()}else if(G.__webglFramebuffer=s.createFramebuffer(),ot)if(i.drawBuffers){const mt=b.texture;for(let C=0,rt=mt.length;C<rt;C++){const W=n.get(mt[C]);W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(bt)if(o){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const mt=r.convert(w.format),C=r.convert(w.type),rt=E(w.internalFormat,mt,C,w.encoding),W=Et(b);s.renderbufferStorageMultisample(36161,W,rt,b.width,b.height),e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Z){e.bindTexture(34067,J.__webglTexture),dt(34067,w,St);for(let mt=0;mt<6;mt++)Q(G.__webglFramebuffer[mt],b,w,36064,34069+mt);S(w,St)&&v(34067,w,b.width,b.height),e.unbindTexture()}else if(ot){const mt=b.texture;for(let C=0,rt=mt.length;C<rt;C++){const W=mt[C],lt=n.get(W);e.bindTexture(3553,lt.__webglTexture),dt(3553,W,St),Q(G.__webglFramebuffer,b,W,36064+C,3553),S(W,St)&&v(3553,W,b.width,b.height)}e.unbindTexture()}else{let mt=3553;xt&&(o?mt=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(mt,J.__webglTexture),dt(mt,w,St),Q(G.__webglFramebuffer,b,w,36064,mt),S(w,St)&&v(mt,w,b.width,b.height,b.depth),e.unbindTexture()}b.depthBuffer&&ft(b)}function at(b){const w=p(b)||o,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,Z=G.length;J<Z;J++){const ot=G[J];if(S(ot,w)){const bt=b.isWebGLCubeRenderTarget?34067:3553,xt=n.get(ot).__webglTexture;e.bindTexture(bt,xt),v(bt,ot,b.width,b.height),e.unbindTexture()}}}function ht(b){if(b.isWebGLMultisampleRenderTarget)if(o){const w=b.width,G=b.height;let J=16384;b.depthBuffer&&(J|=256),b.stencilBuffer&&(J|=1024);const Z=n.get(b);e.bindFramebuffer(36008,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,Z.__webglFramebuffer),s.blitFramebuffer(0,0,w,G,0,0,w,G,J,9728),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,Z.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Et(b){return o&&b.isWebGLMultisampleRenderTarget?Math.min(d,b.samples):0}function k(b){const w=a.render.frame;u.get(b)!==w&&(u.set(b,w),b.update())}let Y=!1,$=!1;function pt(b,w){b&&b.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),b=b.texture),H(b,w)}function it(b,w){b&&b.isWebGLCubeRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),b=b.texture),U(b,w)}this.allocateTextureUnit=z,this.resetTextureUnits=tt,this.setTexture2D=H,this.setTexture2DArray=P,this.setTexture3D=F,this.setTextureCube=U,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ht,this.safeSetTexture2D=pt,this.safeSetTextureCube=it}function pm(s,t,e){const n=e.isWebGL2;function i(r){let a;if(r===an)return 5121;if(r===Bc)return 32819;if(r===zc)return 32820;if(r===Uc)return 33635;if(r===Dc)return 5120;if(r===Fc)return 5122;if(r===wr)return 5123;if(r===Nc)return 5124;if(r===Mr)return 5125;if(r===tn)return 5126;if(r===jn)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Oc)return 6406;if(r===Jn)return 6407;if(r===ue)return 6408;if(r===Hc)return 6409;if(r===Gc)return 6410;if(r===Zn)return 6402;if(r===Ci)return 34041;if(r===Vc)return 6403;if(r===Wc)return 36244;if(r===Xc)return 33319;if(r===qc)return 33320;if(r===Yc)return 36248;if(r===jc)return 36249;if(r===La||r===Ca||r===Ra||r===Pa)if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ia||r===Da||r===Fa||r===Na)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Ba||r===za)&&(a=t.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===Ba)return a.COMPRESSED_RGB8_ETC2;if(r===za)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Zc||r===Qc||r===Kc||r===$c||r===th||r===eh||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh||r===lh||r===ch||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===xh||r===vh||r===yh||r===_h||r===Mh||r===wh||r===bh||r===Sh)return a=t.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===hh)return a=t.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Ti)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class wl extends oe{constructor(t=[]){super(),this.cameras=t}}wl.prototype.isArrayCamera=!0;class bi extends Dt{constructor(){super(),this.type="Group"}}bi.prototype.isGroup=!0;const mm={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm))),c&&t.hand){a=!0;for(const x of t.hand.values()){const _=e.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const m=new bi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[x.jointName]=m,c.add(m)}const p=c.joints[x.jointName];_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=_.radius),p.visible=_!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class gm extends bn{constructor(t,e){super();const n=this,i=t.state;let r=null,a=1,o=null,l="local-floor",c=null,h=null,d=null,u=null,f=null,g=!1,x=null,_=null,p=null,m=null,S=null,v=null;const E=[],L=new Map,y=new oe;y.layers.enable(1),y.viewport=new zt;const D=new oe;D.layers.enable(2),D.viewport=new zt;const q=[y,D],R=new wl;R.layers.enable(1),R.layers.enable(2);let A=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=E[X];return Q===void 0&&(Q=new bs,E[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=E[X];return Q===void 0&&(Q=new bs,E[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=E[X];return Q===void 0&&(Q=new bs,E[X]=Q),Q.getHandSpace()};function z(X){const Q=L.get(X.inputSource);Q&&Q.dispatchEvent({type:X.type,data:X.inputSource})}function H(){L.forEach(function(X,Q){X.disconnect(Q)}),L.clear(),A=null,tt=null,i.bindXRFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),d&&e.deleteFramebuffer(d),x&&e.deleteFramebuffer(x),_&&e.deleteRenderbuffer(_),p&&e.deleteRenderbuffer(p),d=null,x=null,_=null,p=null,f=null,u=null,h=null,r=null,_t.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",P);const Q=e.getContextAttributes();if(Q.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0){const ct={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:f})}else if(e instanceof WebGLRenderingContext){const ct={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,e,ct),r.updateRenderState({layers:[f]})}else{g=Q.antialias;let ct=null;Q.depth&&(v=256,Q.stencil&&(v|=1024),S=Q.stencil?33306:36096,ct=Q.stencil?35056:33190);const O={colorFormat:Q.alpha?32856:32849,depthFormat:ct,scaleFactor:a};h=new XRWebGLBinding(r,e),u=h.createProjectionLayer(O),d=e.createFramebuffer(),r.updateRenderState({layers:[u]}),g&&(x=e.createFramebuffer(),_=e.createRenderbuffer(),e.bindRenderbuffer(36161,_),e.renderbufferStorageMultisample(36161,4,32856,u.textureWidth,u.textureHeight),i.bindFramebuffer(36160,x),e.framebufferRenderbuffer(36160,36064,36161,_),e.bindRenderbuffer(36161,null),ct!==null&&(p=e.createRenderbuffer(),e.bindRenderbuffer(36161,p),e.renderbufferStorageMultisample(36161,4,ct,u.textureWidth,u.textureHeight),e.framebufferRenderbuffer(36160,S,36161,p),e.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await r.requestReferenceSpace(l),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(X){const Q=r.inputSources;for(let ct=0;ct<E.length;ct++)L.set(Q[ct],E[ct]);for(let ct=0;ct<X.removed.length;ct++){const O=X.removed[ct],ft=L.get(O);ft&&(ft.dispatchEvent({type:"disconnected",data:O}),L.delete(O))}for(let ct=0;ct<X.added.length;ct++){const O=X.added[ct],ft=L.get(O);ft&&ft.dispatchEvent({type:"connected",data:O})}}const F=new T,U=new T;function K(X,Q,ct){F.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(ct.matrixWorld);const O=F.distanceTo(U),ft=Q.projectionMatrix.elements,vt=ct.projectionMatrix.elements,at=ft[14]/(ft[10]-1),ht=ft[14]/(ft[10]+1),Et=(ft[9]+1)/ft[5],k=(ft[9]-1)/ft[5],Y=(ft[8]-1)/ft[0],$=(vt[8]+1)/vt[0],pt=at*Y,it=at*$,b=O/(-Y+$),w=b*-Y;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(w),X.translateZ(b),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const G=at+b,J=ht+b,Z=pt-w,ot=it+(O-w),bt=Et*ht/J*G,xt=k*ht/J*G;X.projectionMatrix.makePerspective(Z,ot,bt,xt,G,J)}function st(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;R.near=D.near=y.near=X.near,R.far=D.far=y.far=X.far,(A!==R.near||tt!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),A=R.near,tt=R.far);const Q=X.parent,ct=R.cameras;st(R,Q);for(let ft=0;ft<ct.length;ft++)st(ct[ft],Q);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),X.position.copy(R.position),X.quaternion.copy(R.quaternion),X.scale.copy(R.scale),X.matrix.copy(R.matrix),X.matrixWorld.copy(R.matrixWorld);const O=X.children;for(let ft=0,vt=O.length;ft<vt;ft++)O[ft].updateMatrixWorld(!0);ct.length===2?K(R,y,D):R.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let dt=null;function nt(X,Q){if(c=Q.getViewerPose(o),m=Q,c!==null){const O=c.views;f!==null&&i.bindXRFramebuffer(f.framebuffer);let ft=!1;O.length!==R.cameras.length&&(R.cameras.length=0,ft=!0);for(let vt=0;vt<O.length;vt++){const at=O[vt];let ht=null;if(f!==null)ht=f.getViewport(at);else{const k=h.getViewSubImage(u,at);i.bindXRFramebuffer(d),k.depthStencilTexture!==void 0&&e.framebufferTexture2D(36160,S,3553,k.depthStencilTexture,0),e.framebufferTexture2D(36160,36064,3553,k.colorTexture,0),ht=k.viewport}const Et=q[vt];Et.matrix.fromArray(at.transform.matrix),Et.projectionMatrix.fromArray(at.projectionMatrix),Et.viewport.set(ht.x,ht.y,ht.width,ht.height),vt===0&&R.matrix.copy(Et.matrix),ft===!0&&R.cameras.push(Et)}g&&(i.bindXRFramebuffer(x),v!==null&&e.clear(v))}const ct=r.inputSources;for(let O=0;O<E.length;O++){const ft=E[O],vt=ct[O];ft.update(vt,Q,o)}if(dt&&dt(X,Q),g){const O=u.textureWidth,ft=u.textureHeight;i.bindFramebuffer(36008,x),i.bindFramebuffer(36009,d),e.invalidateFramebuffer(36008,[S]),e.invalidateFramebuffer(36009,[S]),e.blitFramebuffer(0,0,O,ft,0,0,O,ft,16384,9728),e.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,x)}m=null}const _t=new ol;_t.setAnimationLoop(nt),this.setAnimationLoop=function(X){dt=X},this.dispose=function(){}}}function xm(s){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function e(p,m,S,v,E){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),h(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?u(p,m,E):d(p,m)):m.isMeshMatcapMaterial?(n(p,m),f(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),x(p,m)):m.isMeshNormalMaterial?(n(p,m),_(p,m)):m.isLineBasicMaterial?(i(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?a(p,m,S,v):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=s.get(m).envMap;if(S){p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio;const L=s.get(S).__maxMipLevel;L!==void 0&&(p.maxMipLevel.value=L)}m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularTintMap?v=m.specularTintMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap&&(v=m.thicknessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function i(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),s.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){d(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenTint.value.copy(m.sheenTint).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationTint.value.copy(m.attenuationTint)),p.specularIntensity.value=m.specularIntensity,p.specularTint.value.copy(m.specularTint),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularTintMap&&(p.specularTintMap.value=m.specularTintMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function x(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function _(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function vm(){const s=Br("canvas");return s.style.display="block",s}function Bt(s={}){const t=s.canvas!==void 0?s.canvas:vm(),e=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let d=null,u=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=le,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const x=this;let _=!1,p=0,m=0,S=null,v=-1,E=null;const L=new zt,y=new zt;let D=null,q=t.width,R=t.height,A=1,tt=null,z=null;const H=new zt(0,0,q,R),P=new zt(0,0,q,R);let F=!1;const U=[],K=new Ur;let st=!1,dt=!1,nt=null;const _t=new yt,X=new T,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return S===null?A:1}let O=e;function ft(M,I){for(let B=0;B<M.length;B++){const N=M[B],V=t.getContext(N,I);if(V!==null)return V}return null}try{const M={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",se,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),O=ft(I,M),O===null)throw ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let vt,at,ht,Et,k,Y,$,pt,it,b,w,G,J,Z,ot,bt,xt,St,mt,C,rt,W,lt;function ut(){vt=new Gf(O),at=new Df(O,vt,s),vt.init(at),W=new pm(O,vt,at),ht=new dm(O,vt,at),U[0]=1029,Et=new Wf,k=new em,Y=new fm(O,vt,ht,k,at,W,Et),$=new Nf(x),pt=new Hf(x),it=new nu(O,at),lt=new Pf(O,vt,it,at),b=new kf(O,it,Et,lt),w=new jf(O,b,it,Et),mt=new Yf(O,at,Y),bt=new Ff(k),G=new tm(x,$,pt,vt,at,lt,bt),J=new xm(k),Z=new im(k),ot=new cm(vt,at),St=new Rf(x,$,ht,w,o),xt=new Ml(x,w,at),C=new If(O,vt,Et,at),rt=new Vf(O,vt,Et,at),Et.programs=G.programs,x.capabilities=at,x.extensions=vt,x.properties=k,x.renderLists=Z,x.shadowMap=xt,x.state=ht,x.info=Et}ut();const Ct=new gm(x,O);this.xr=Ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(M){M!==void 0&&(A=M,this.setSize(q,R,!1))},this.getSize=function(M){return M.set(q,R)},this.setSize=function(M,I,B){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,R=I,t.width=Math.floor(M*A),t.height=Math.floor(I*A),B!==!1&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(q*A,R*A).floor()},this.setDrawingBufferSize=function(M,I,B){q=M,R=I,A=B,t.width=Math.floor(M*B),t.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(H)},this.setViewport=function(M,I,B,N){M.isVector4?H.set(M.x,M.y,M.z,M.w):H.set(M,I,B,N),ht.viewport(L.copy(H).multiplyScalar(A).floor())},this.getScissor=function(M){return M.copy(P)},this.setScissor=function(M,I,B,N){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,I,B,N),ht.scissor(y.copy(P).multiplyScalar(A).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(M){ht.setScissorTest(F=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){z=M},this.getClearColor=function(M){return M.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(M,I,B){let N=0;(M===void 0||M)&&(N|=16384),(I===void 0||I)&&(N|=256),(B===void 0||B)&&(N|=1024),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",se,!1),Z.dispose(),ot.dispose(),k.dispose(),$.dispose(),pt.dispose(),w.dispose(),lt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",pa),Ct.removeEventListener("sessionend",ma),nt&&(nt.dispose(),nt=null),hn.stop()};function re(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const M=Et.autoReset,I=xt.enabled,B=xt.autoUpdate,N=xt.needsUpdate,V=xt.type;ut(),Et.autoReset=M,xt.enabled=I,xt.autoUpdate=B,xt.needsUpdate=N,xt.type=V}function We(M){const I=M.target;I.removeEventListener("dispose",We),Yt(I)}function Yt(M){Ne(M),k.remove(M)}function Ne(M){const I=k.get(M).programs;I!==void 0&&I.forEach(function(B){G.releaseProgram(B)})}function Be(M,I){M.render(function(B){x.renderBufferImmediate(B,I)})}this.renderBufferImmediate=function(M,I){lt.initAttributes();const B=k.get(M);M.hasPositions&&!B.position&&(B.position=O.createBuffer()),M.hasNormals&&!B.normal&&(B.normal=O.createBuffer()),M.hasUvs&&!B.uv&&(B.uv=O.createBuffer()),M.hasColors&&!B.color&&(B.color=O.createBuffer());const N=I.getAttributes();M.hasPositions&&(O.bindBuffer(34962,B.position),O.bufferData(34962,M.positionArray,35048),lt.enableAttribute(N.position.location),O.vertexAttribPointer(N.position.location,3,5126,!1,0,0)),M.hasNormals&&(O.bindBuffer(34962,B.normal),O.bufferData(34962,M.normalArray,35048),lt.enableAttribute(N.normal.location),O.vertexAttribPointer(N.normal.location,3,5126,!1,0,0)),M.hasUvs&&(O.bindBuffer(34962,B.uv),O.bufferData(34962,M.uvArray,35048),lt.enableAttribute(N.uv.location),O.vertexAttribPointer(N.uv.location,2,5126,!1,0,0)),M.hasColors&&(O.bindBuffer(34962,B.color),O.bufferData(34962,M.colorArray,35048),lt.enableAttribute(N.color.location),O.vertexAttribPointer(N.color.location,3,5126,!1,0,0)),lt.disableUnusedAttributes(),O.drawArrays(4,0,M.count),M.count=0},this.renderBufferDirect=function(M,I,B,N,V,Tt){I===null&&(I=Q);const Mt=V.isMesh&&V.matrixWorld.determinant()<0,wt=ya(M,I,B,N,V);ht.setMaterial(N,Mt);let At=B.index;const Ft=B.attributes.position;if(At===null){if(Ft===void 0||Ft.count===0)return}else if(At.count===0)return;let Rt=1;N.wireframe===!0&&(At=b.getWireframeAttribute(B),Rt=2),lt.setup(V,N,wt,B,At);let Pt,Wt=C;At!==null&&(Pt=it.get(At),Wt=rt,Wt.setIndex(Pt));const un=At!==null?At.count:Ft.count,It=B.drawRange.start*Rt,ci=B.drawRange.count*Rt,Ht=Tt!==null?Tt.start*Rt:0,dn=Tt!==null?Tt.count*Rt:1/0,fn=Math.max(It,Ht),pn=Math.min(un,It+ci,Ht+dn)-1,Xe=Math.max(0,pn-fn+1);if(Xe!==0){if(V.isMesh)N.wireframe===!0?(ht.setLineWidth(N.wireframeLinewidth*ct()),Wt.setMode(1)):Wt.setMode(4);else if(V.isLine){let Xt=N.linewidth;Xt===void 0&&(Xt=1),ht.setLineWidth(Xt*ct()),V.isLineSegments?Wt.setMode(1):V.isLineLoop?Wt.setMode(2):Wt.setMode(3)}else V.isPoints?Wt.setMode(0):V.isSprite&&Wt.setMode(4);if(V.isInstancedMesh)Wt.renderInstances(fn,Xe,V.count);else if(B.isInstancedBufferGeometry){const Xt=Math.min(B.instanceCount,B._maxInstanceCount);Wt.renderInstances(fn,Xe,Xt)}else Wt.render(fn,Xe)}},this.compile=function(M,I){u=ot.get(M),u.init(),g.push(u),M.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights(x.physicallyCorrectLights),M.traverse(function(B){const N=B.material;if(N)if(Array.isArray(N))for(let V=0;V<N.length;V++){const Tt=N[V];qr(Tt,M,B)}else qr(N,M,B)}),g.pop(),u=null};let Xr=null;function Kl(M){Xr&&Xr(M)}function pa(){hn.stop()}function ma(){hn.start()}const hn=new ol;hn.setAnimationLoop(Kl),typeof window<"u"&&hn.setContext(window),this.setAnimationLoop=function(M){Xr=M,Ct.setAnimationLoop(M),M===null?hn.stop():hn.start()},Ct.addEventListener("sessionstart",pa),Ct.addEventListener("sessionend",ma),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(I),I=Ct.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,S),u=ot.get(M,g.length),u.init(),g.push(u),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(_t),dt=this.localClippingEnabled,st=bt.init(this.clippingPlanes,dt,I),d=Z.get(M,f.length),d.init(),f.push(d),ga(M,I,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(tt,z),st===!0&&bt.beginShadows();const B=u.state.shadowsArray;if(xt.render(B,M,I),st===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(d,M),u.setupLights(x.physicallyCorrectLights),I.isArrayCamera){const N=I.cameras;for(let V=0,Tt=N.length;V<Tt;V++){const Mt=N[V];xa(d,M,Mt,Mt.viewport)}}else xa(d,M,I);S!==null&&(Y.updateMultisampleRenderTarget(S),Y.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(x,M,I),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1),lt.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function ga(M,I,B,N){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){N&&X.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);const Mt=w.update(M),wt=M.material;wt.visible&&d.push(M,Mt,wt,B,X.z,null)}}else if(M.isImmediateRenderObject)N&&X.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t),d.push(M,null,M.material,B,X.z,null);else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Et.render.frame&&(M.skeleton.update(),M.skeleton.frame=Et.render.frame),!M.frustumCulled||K.intersectsObject(M))){N&&X.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);const Mt=w.update(M),wt=M.material;if(Array.isArray(wt)){const At=Mt.groups;for(let Ft=0,Rt=At.length;Ft<Rt;Ft++){const Pt=At[Ft],Wt=wt[Pt.materialIndex];Wt&&Wt.visible&&d.push(M,Mt,Wt,B,X.z,Pt)}}else wt.visible&&d.push(M,Mt,wt,B,X.z,null)}}const Tt=M.children;for(let Mt=0,wt=Tt.length;Mt<wt;Mt++)ga(Tt[Mt],I,B,N)}function xa(M,I,B,N){const V=M.opaque,Tt=M.transmissive,Mt=M.transparent;u.setupLightsView(B),Tt.length>0&&$l(V,I,B),N&&ht.viewport(L.copy(N)),V.length>0&&ki(V,I,B),Tt.length>0&&ki(Tt,I,B),Mt.length>0&&ki(Mt,I,B)}function $l(M,I,B){if(nt===null){const Mt=a===!0&&at.isWebGL2===!0?nl:Ie;nt=new Mt(1024,1024,{generateMipmaps:!0,type:W.convert(jn)!==null?jn:an,minFilter:Nr,magFilter:$t,wrapS:xe,wrapT:xe})}const N=x.getRenderTarget();x.setRenderTarget(nt),x.clear();const V=x.toneMapping;x.toneMapping=yn,ki(M,I,B),x.toneMapping=V,Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt),x.setRenderTarget(N)}function ki(M,I,B){const N=I.isScene===!0?I.overrideMaterial:null;for(let V=0,Tt=M.length;V<Tt;V++){const Mt=M[V],wt=Mt.object,At=Mt.geometry,Ft=N===null?Mt.material:N,Rt=Mt.group;wt.layers.test(B.layers)&&tc(wt,I,B,At,Ft,Rt)}}function tc(M,I,B,N,V,Tt){if(M.onBeforeRender(x,I,B,N,V,Tt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(x,I,B,N,M,Tt),M.isImmediateRenderObject){const Mt=ya(B,I,N,V,M);ht.setMaterial(V),lt.reset(),Be(M,Mt)}else V.transparent===!0&&V.side===_n?(V.side=Jt,V.needsUpdate=!0,x.renderBufferDirect(B,I,N,V,M,Tt),V.side=Li,V.needsUpdate=!0,x.renderBufferDirect(B,I,N,V,M,Tt),V.side=_n):x.renderBufferDirect(B,I,N,V,M,Tt);M.onAfterRender(x,I,B,N,V,Tt)}function qr(M,I,B){I.isScene!==!0&&(I=Q);const N=k.get(M),V=u.state.lights,Tt=u.state.shadowsArray,Mt=V.state.version,wt=G.getParameters(M,V.state,Tt,I,B),At=G.getProgramCacheKey(wt);let Ft=N.programs;N.environment=M.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(M.isMeshStandardMaterial?pt:$).get(M.envMap||N.environment),Ft===void 0&&(M.addEventListener("dispose",We),Ft=new Map,N.programs=Ft);let Rt=Ft.get(At);if(Rt!==void 0){if(N.currentProgram===Rt&&N.lightsStateVersion===Mt)return va(M,wt),Rt}else wt.uniforms=G.getUniforms(M),M.onBuild(wt,x),M.onBeforeCompile(wt,x),Rt=G.acquireProgram(wt,At),Ft.set(At,Rt),N.uniforms=wt.uniforms;const Pt=N.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=bt.uniform),va(M,wt),N.needsLights=nc(M),N.lightsStateVersion=Mt,N.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMap.value=V.state.directionalShadowMap,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotShadowMap.value=V.state.spotShadowMap,Pt.spotShadowMatrix.value=V.state.spotShadowMatrix,Pt.pointShadowMap.value=V.state.pointShadowMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix);const Wt=Rt.getUniforms(),un=rn.seqWithValue(Wt.seq,Pt);return N.currentProgram=Rt,N.uniformsList=un,Rt}function va(M,I){const B=k.get(M);B.outputEncoding=I.outputEncoding,B.instancing=I.instancing,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents}function ya(M,I,B,N,V){I.isScene!==!0&&(I=Q),Y.resetTextureUnits();const Tt=I.fog,Mt=N.isMeshStandardMaterial?I.environment:null,wt=S===null?x.outputEncoding:S.texture.encoding,At=(N.isMeshStandardMaterial?pt:$).get(N.envMap||Mt),Ft=N.vertexColors===!0&&!!B&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!N.normalMap&&!!B&&!!B.attributes.tangent,Pt=!!B&&!!B.morphAttributes.position,Wt=!!B&&!!B.morphAttributes.normal,un=B&&B.morphAttributes.position?B.morphAttributes.position.length:0,It=k.get(N),ci=u.state.lights;if(st===!0&&(dt===!0||M!==E)){const we=M===E&&N.id===v;bt.setState(N,M,we)}let Ht=!1;N.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ci.state.version||It.outputEncoding!==wt||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||It.envMap!==At||N.fog&&It.fog!==Tt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==bt.numPlanes||It.numIntersection!==bt.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==Rt||It.morphTargets!==Pt||It.morphNormals!==Wt||at.isWebGL2===!0&&It.morphTargetsCount!==un)&&(Ht=!0):(Ht=!0,It.__version=N.version);let dn=It.currentProgram;Ht===!0&&(dn=qr(N,I,V));let fn=!1,pn=!1,Xe=!1;const Xt=dn.getUniforms(),hi=It.uniforms;if(ht.useProgram(dn.program)&&(fn=!0,pn=!0,Xe=!0),N.id!==v&&(v=N.id,pn=!0),fn||E!==M){if(Xt.setValue(O,"projectionMatrix",M.projectionMatrix),at.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,pn=!0,Xe=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const we=Xt.map.cameraPosition;we!==void 0&&we.setValue(O,X.setFromMatrixPosition(M.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||V.isSkinnedMesh)&&Xt.setValue(O,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){Xt.setOptional(O,V,"bindMatrix"),Xt.setOptional(O,V,"bindMatrixInverse");const we=V.skeleton;we&&(at.floatVertexTextures?(we.boneTexture===null&&we.computeBoneTexture(),Xt.setValue(O,"boneTexture",we.boneTexture,Y),Xt.setValue(O,"boneTextureSize",we.boneTextureSize)):Xt.setOptional(O,we,"boneMatrices"))}return B&&(B.morphAttributes.position!==void 0||B.morphAttributes.normal!==void 0)&&mt.update(V,B,N,dn),(pn||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,Xt.setValue(O,"receiveShadow",V.receiveShadow)),pn&&(Xt.setValue(O,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&ec(hi,Xe),Tt&&N.fog&&J.refreshFogUniforms(hi,Tt),J.refreshMaterialUniforms(hi,N,A,R,nt),rn.upload(O,It.uniformsList,hi,Y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(rn.upload(O,It.uniformsList,hi,Y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Xt.setValue(O,"center",V.center),Xt.setValue(O,"modelViewMatrix",V.modelViewMatrix),Xt.setValue(O,"normalMatrix",V.normalMatrix),Xt.setValue(O,"modelMatrix",V.matrixWorld),dn}function ec(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function nc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return S},this.setRenderTarget=function(M,I=0,B=0){S=M,p=I,m=B,M&&k.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M);let N=null,V=!1,Tt=!1;if(M){const wt=M.texture;(wt.isDataTexture3D||wt.isDataTexture2DArray)&&(Tt=!0);const At=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(N=At[I],V=!0):M.isWebGLMultisampleRenderTarget?N=k.get(M).__webglMultisampledFramebuffer:N=At,L.copy(M.viewport),y.copy(M.scissor),D=M.scissorTest}else L.copy(H).multiplyScalar(A).floor(),y.copy(P).multiplyScalar(A).floor(),D=F;if(ht.bindFramebuffer(36160,N)&&at.drawBuffers){let wt=!1;if(M)if(M.isWebGLMultipleRenderTargets){const At=M.texture;if(U.length!==At.length||U[0]!==36064){for(let Ft=0,Rt=At.length;Ft<Rt;Ft++)U[Ft]=36064+Ft;U.length=At.length,wt=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,wt=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,wt=!0);wt&&(at.isWebGL2?O.drawBuffers(U):vt.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ht.viewport(L),ht.scissor(y),ht.setScissorTest(D),V){const wt=k.get(M.texture);O.framebufferTexture2D(36160,36064,34069+I,wt.__webglTexture,B)}else if(Tt){const wt=k.get(M.texture),At=I||0;O.framebufferTextureLayer(36160,36064,wt.__webglTexture,B||0,At)}v=-1},this.readRenderTargetPixels=function(M,I,B,N,V,Tt,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){ht.bindFramebuffer(36160,wt);try{const At=M.texture,Ft=At.format,Rt=At.type;if(Ft!==ue&&W.convert(Ft)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Rt===jn&&(vt.has("EXT_color_buffer_half_float")||at.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Rt!==an&&W.convert(Rt)!==O.getParameter(35738)&&!(Rt===tn&&(at.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O.checkFramebufferStatus(36160)===36053?I>=0&&I<=M.width-N&&B>=0&&B<=M.height-V&&O.readPixels(I,B,N,V,W.convert(Ft),W.convert(Rt),Tt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const At=S!==null?k.get(S).__webglFramebuffer:null;ht.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(M,I,B=0){const N=Math.pow(2,-B),V=Math.floor(I.image.width*N),Tt=Math.floor(I.image.height*N);let Mt=W.convert(I.format);at.isWebGL2&&(Mt===6407&&(Mt=32849),Mt===6408&&(Mt=32856)),Y.setTexture2D(I,0),O.copyTexImage2D(3553,B,Mt,M.x,M.y,V,Tt,0),ht.unbindTexture()},this.copyTextureToTexture=function(M,I,B,N=0){const V=I.image.width,Tt=I.image.height,Mt=W.convert(B.format),wt=W.convert(B.type);Y.setTexture2D(B,0),O.pixelStorei(37440,B.flipY),O.pixelStorei(37441,B.premultiplyAlpha),O.pixelStorei(3317,B.unpackAlignment),I.isDataTexture?O.texSubImage2D(3553,N,M.x,M.y,V,Tt,Mt,wt,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(3553,N,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Mt,I.mipmaps[0].data):O.texSubImage2D(3553,N,M.x,M.y,Mt,wt,I.image),N===0&&B.generateMipmaps&&O.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B,N,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=M.max.x-M.min.x+1,Mt=M.max.y-M.min.y+1,wt=M.max.z-M.min.z+1,At=W.convert(N.format),Ft=W.convert(N.type);let Rt;if(N.isDataTexture3D)Y.setTexture3D(N,0),Rt=32879;else if(N.isDataTexture2DArray)Y.setTexture2DArray(N,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,N.flipY),O.pixelStorei(37441,N.premultiplyAlpha),O.pixelStorei(3317,N.unpackAlignment);const Pt=O.getParameter(3314),Wt=O.getParameter(32878),un=O.getParameter(3316),It=O.getParameter(3315),ci=O.getParameter(32877),Ht=B.isCompressedTexture?B.mipmaps[0]:B.image;O.pixelStorei(3314,Ht.width),O.pixelStorei(32878,Ht.height),O.pixelStorei(3316,M.min.x),O.pixelStorei(3315,M.min.y),O.pixelStorei(32877,M.min.z),B.isDataTexture||B.isDataTexture3D?O.texSubImage3D(Rt,V,I.x,I.y,I.z,Tt,Mt,wt,At,Ft,Ht.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Rt,V,I.x,I.y,I.z,Tt,Mt,wt,At,Ht.data)):O.texSubImage3D(Rt,V,I.x,I.y,I.z,Tt,Mt,wt,At,Ft,Ht),O.pixelStorei(3314,Pt),O.pixelStorei(32878,Wt),O.pixelStorei(3316,un),O.pixelStorei(3315,It),O.pixelStorei(32877,ci),V===0&&N.generateMipmaps&&O.generateMipmap(Rt),ht.unbindTexture()},this.initTexture=function(M){Y.setTexture2D(M,0),ht.unbindTexture()},this.resetState=function(){p=0,m=0,S=null,ht.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ym extends Bt{}ym.prototype.isWebGL1Renderer=!0;class Hr extends Dt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Hr.prototype.isScene=!0;class Ui{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ri,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pe()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ui.prototype.isInterleavedBuffer=!0;const jt=new T;class Pi{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Pi.prototype.isInterleavedBufferAttribute=!0;class bl extends he{constructor(t){super(),this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}bl.prototype.isSpriteMaterial=!0;let Hn;const gi=new T,Gn=new T,kn=new T,Vn=new j,xi=new j,Sl=new yt,lr=new T,vi=new T,cr=new T,_o=new j,Ss=new j,Mo=new j;class _m extends Dt{constructor(t){if(super(),this.type="Sprite",Hn===void 0){Hn=new Ut;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ui(e,5);Hn.setIndex([0,1,2,0,2,3]),Hn.setAttribute("position",new Pi(n,3,0,!1)),Hn.setAttribute("uv",new Pi(n,2,3,!1))}this.geometry=Hn,this.material=t!==void 0?t:new bl,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gn.setFromMatrixScale(this.matrixWorld),Sl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),kn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gn.multiplyScalar(-kn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;hr(lr.set(-.5,-.5,0),kn,a,Gn,i,r),hr(vi.set(.5,-.5,0),kn,a,Gn,i,r),hr(cr.set(.5,.5,0),kn,a,Gn,i,r),_o.set(0,0),Ss.set(1,0),Mo.set(1,1);let o=t.ray.intersectTriangle(lr,vi,cr,!1,gi);if(o===null&&(hr(vi.set(-.5,.5,0),kn,a,Gn,i,r),Ss.set(0,1),o=t.ray.intersectTriangle(lr,cr,vi,!1,gi),o===null))return;const l=t.ray.origin.distanceTo(gi);l<t.near||l>t.far||e.push({distance:l,point:gi.clone(),uv:Zt.getUV(gi,lr,vi,cr,_o,Ss,Mo,new j),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}_m.prototype.isSprite=!0;function hr(s,t,e,n,i,r){Vn.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(xi.x=r*Vn.x-i*Vn.y,xi.y=i*Vn.x+r*Vn.y):xi.copy(Vn),s.copy(t),s.x+=xi.x,s.y+=xi.y,s.applyMatrix4(Sl)}const wo=new T,bo=new zt,So=new zt,Mm=new T,To=new yt;class Tl extends ne{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yt,this.bindMatrixInverse=new yt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new zt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;bo.fromBufferAttribute(i.attributes.skinIndex,t),So.fromBufferAttribute(i.attributes.skinWeight,t),wo.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=So.getComponent(r);if(a!==0){const o=bo.getComponent(r);To.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Mm.copy(wo).applyMatrix4(To),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}Tl.prototype.isSkinnedMesh=!0;class wm extends Dt{constructor(){super(),this.type="Bone"}}wm.prototype.isBone=!0;class bm extends ie{constructor(t=null,e=1,n=1,i,r,a,o,l,c=$t,h=$t,d,u){super(null,a,o,l,c,h,i,r,d,u),this.image={data:t,width:e,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}bm.prototype.isDataTexture=!0;class Os extends qt{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Os.prototype.isInstancedBufferAttribute=!0;const Eo=new yt,Ao=new yt,ur=[],yi=new ne;class Sm extends ne{constructor(t,e,n){super(t,e),this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Eo),Ao.multiplyMatrices(n,Eo),yi.matrixWorld=Ao,yi.raycast(t,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Sm.prototype.isInstancedMesh=!0;class Oi extends he{constructor(t){super(),this.type="LineBasicMaterial",this.color=new gt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Oi.prototype.isLineBasicMaterial=!0;const Lo=new T,Co=new T,Ro=new yt,Ts=new ii,dr=new ni;class na extends Dt{constructor(t=new Ut,e=new Oi){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Lo.fromBufferAttribute(e,i-1),Co.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Co);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;Ro.copy(i).invert(),Ts.copy(t.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,d=new T,u=new T,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,_=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let S=p,v=m-1;S<v;S+=f){const E=g.getX(S),L=g.getX(S+1);if(c.fromBufferAttribute(_,E),h.fromBufferAttribute(_,L),Ts.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(u);D<t.near||D>t.far||e.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),m=Math.min(_.count,a.start+a.count);for(let S=p,v=m-1;S<v;S+=f){if(c.fromBufferAttribute(_,S),h.fromBufferAttribute(_,S+1),Ts.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}na.prototype.isLine=!0;const Po=new T,Io=new T;class ia extends na{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Po.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Po.distanceTo(Io);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ia.prototype.isLineSegments=!0;class Tm extends na{constructor(t,e){super(t,e),this.type="LineLoop"}}Tm.prototype.isLineLoop=!0;class El extends he{constructor(t){super(),this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}El.prototype.isPointsMaterial=!0;const Do=new yt,Hs=new ii,fr=new ni,pr=new T;class Em extends Dt{constructor(t=new Ut,e=new El){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Do.copy(i).invert(),Hs.copy(t.ray).applyMatrix4(Do);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){const _=c.getX(g);pr.fromBufferAttribute(d,_),Fo(pr,_,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)pr.fromBufferAttribute(d,g),Fo(pr,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Em.prototype.isPoints=!0;function Fo(s,t,e,n,i,r,a){const o=Hs.distanceSqToPoint(s);if(o<e){const l=new T;Hs.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Am extends ie{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.format=o!==void 0?o:Jn,this.minFilter=a!==void 0?a:_e,this.magFilter=r!==void 0?r:_e,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Am.prototype.isVideoTexture=!0;class Lm extends ie{constructor(t,e,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Lm.prototype.isCompressedTexture=!0;class Cm extends ie{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.needsUpdate=!0}}Cm.prototype.isCanvasTexture=!0;class Rm extends ie{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Zn,h!==Zn&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zn&&(n=wr),n===void 0&&h===Ci&&(n=Ti),super(null,i,r,a,o,l,h,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}Rm.prototype.isDepthTexture=!0;class Me{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new j:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],a=[],o=new T,l=new yt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ge(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ge(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gr extends Me{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new j,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Gr.prototype.isEllipseCurve=!0;class Al extends Gr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.type="ArcCurve"}}Al.prototype.isArcCurve=!0;function ra(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const mr=new T,Es=new ra,As=new ra,Ls=new ra;class Ll extends Me{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(mr.subVectors(i[0],i[1]).add(i[0]),c=mr);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(mr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),Es.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,_),As.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,_),Ls.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,_)}else this.curveType==="catmullrom"&&(Es.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),As.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ls.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Es.calc(l),As.calc(l),Ls.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Ll.prototype.isCatmullRomCurve3=!0;function No(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Pm(s,t){const e=1-s;return e*e*t}function Im(s,t){return 2*(1-s)*s*t}function Dm(s,t){return s*s*t}function Ei(s,t,e,n){return Pm(s,t)+Im(s,e)+Dm(s,n)}function Fm(s,t){const e=1-s;return e*e*e*t}function Nm(s,t){const e=1-s;return 3*e*e*s*t}function Bm(s,t){return 3*(1-s)*s*s*t}function zm(s,t){return s*s*s*t}function Ai(s,t,e,n,i){return Fm(s,t)+Nm(s,e)+Bm(s,n)+zm(s,i)}class sa extends Me{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,r.x,a.x,o.x),Ai(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}sa.prototype.isCubicBezierCurve=!0;class Cl extends Me{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,r.x,a.x,o.x),Ai(t,i.y,r.y,a.y,o.y),Ai(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Cl.prototype.isCubicBezierCurve3=!0;class kr extends Me{constructor(t=new j,e=new j){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new j;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}kr.prototype.isLineCurve=!0;class Um extends Me{constructor(t=new T,e=new T){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aa extends Me{constructor(t=new j,e=new j,n=new j){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ei(t,i.x,r.x,a.x),Ei(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}aa.prototype.isQuadraticBezierCurve=!0;class Rl extends Me{constructor(t=new T,e=new T,n=new T){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ei(t,i.x,r.x,a.x),Ei(t,i.y,r.y,a.y),Ei(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Rl.prototype.isQuadraticBezierCurve3=!0;class oa extends Me{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(No(o,l.x,c.x,h.x,d.x),No(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new j().fromArray(i))}return this}}oa.prototype.isSplineCurve=!0;var Pl=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:Ll,CubicBezierCurve:sa,CubicBezierCurve3:Cl,EllipseCurve:Gr,LineCurve:kr,LineCurve3:Um,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Rl,SplineCurve:oa});class Om extends Me{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new kr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?t*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Pl[i.type]().fromJSON(i))}return this}}class Gs extends Om{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kr(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new aa(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new sa(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Gr(t,e,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hi extends Gs{constructor(t){super(t),this.uuid=Pe(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Gs().fromJSON(i))}return this}}const Hm={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Il(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=Xm(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return Ii(r,a,e,o,l,f),a}};function Il(s,t,e,n,i){let r,a;if(i===ng(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Bo(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Bo(r,s[r],s[r+1],a);return a&&Vr(a,a.next)&&(Fi(a),a=a.next),a}function ln(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||kt(e.prev,e,e.next)===0)){if(Fi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ii(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Zm(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?km(s,n,i,r):Gm(s)){t.push(l.i/e),t.push(s.i/e),t.push(c.i/e),Fi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Vm(ln(s),t,e),Ii(s,t,e,n,i,r,2)):a===2&&Wm(s,t,e,n,i,r):Ii(ln(s),t,e,n,i,r,1);break}}}function Gm(s){const t=s.prev,e=s,n=s.next;if(kt(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Yn(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&kt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function km(s,t,e,n){const i=s.prev,r=s,a=s.next;if(kt(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,h=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,d=ks(o,l,t,e,n),u=ks(c,h,t,e,n);let f=s.prevZ,g=s.nextZ;for(;f&&f.z>=d&&g&&g.z<=u;){if(f!==s.prev&&f!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&kt(f.prev,f,f.next)>=0||(f=f.prevZ,g!==s.prev&&g!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&kt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=d;){if(f!==s.prev&&f!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&kt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=u;){if(g!==s.prev&&g!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Vm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Vr(i,r)&&Dl(i,n,n.next,r)&&Di(i,r)&&Di(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),Fi(n),Fi(n.next),n=s=r),n=n.next}while(n!==s);return ln(n)}function Wm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$m(a,o)){let l=Fl(a,o);a=ln(a,a.next),l=ln(l,l.next),Ii(a,t,e,n,i,r),Ii(l,t,e,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function Xm(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Il(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Km(c));for(i.sort(qm),r=0;r<i.length;r++)Ym(i[r],e),e=ln(e,e.next);return e}function qm(s,t){return s.x-t.x}function Ym(s,t){if(t=jm(s,t),t){const e=Fl(t,s);ln(t,t.next),ln(e,e.next)}}function jm(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r){if(r=u,u===n){if(i===e.y)return e;if(i===e.next.y)return e.next}a=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!a)return null;if(n===r)return a;const o=a,l=a.x,c=a.y;let h=1/0,d;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&Yn(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(n-e.x),Di(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Jm(a,e)))&&(a=e,h=d)),e=e.next;while(e!==o);return a}function Jm(s,t){return kt(s.prev,s,t.prev)<0&&kt(t.next,s,s.next)<0}function Zm(s,t,e,n){let i=s;do i.z===null&&(i.z=ks(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qm(i)}function Qm(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ks(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Km(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yn(s,t,e,n,i,r,a,o){return(i-a)*(t-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(e-a)*(t-o)>=0&&(e-a)*(r-o)-(i-a)*(n-o)>=0}function $m(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!tg(s,t)&&(Di(s,t)&&Di(t,s)&&eg(s,t)&&(kt(s.prev,s,t.prev)||kt(s,t.prev,t))||Vr(s,t)&&kt(s.prev,s,s.next)>0&&kt(t.prev,t,t.next)>0)}function kt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Vr(s,t){return s.x===t.x&&s.y===t.y}function Dl(s,t,e,n){const i=xr(kt(s,t,e)),r=xr(kt(s,t,n)),a=xr(kt(e,n,s)),o=xr(kt(e,n,t));return!!(i!==r&&a!==o||i===0&&gr(s,e,t)||r===0&&gr(s,n,t)||a===0&&gr(e,s,n)||o===0&&gr(e,t,n))}function gr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xr(s){return s>0?1:s<0?-1:0}function tg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Di(s,t){return kt(s.prev,s,s.next)<0?kt(s,t,s.next)>=0&&kt(s,s.prev,t)>=0:kt(s,t,s.prev)<0||kt(s,s.next,t)<0}function eg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Fl(s,t){const e=new Vs(s.i,s.x,s.y),n=new Vs(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bo(s,t,e,n){const i=new Vs(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vs(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ng(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class sn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return sn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];zo(t),Uo(n,t);let a=t.length;e.forEach(zo);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Uo(n,e[l]);const o=Hm.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Uo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ai extends Ut{constructor(t=new Hi([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,m=e.UVGenerator!==void 0?e.UVGenerator:ig;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=e.amount);let S,v=!1,E,L,y,D;p&&(S=p.getSpacedPoints(h),v=!0,u=!1,E=p.computeFrenetFrames(h,!1),L=new T,y=new T,D=new T),u||(_=0,f=0,g=0,x=0);const q=o.extractPoints(c);let R=q.shape;const A=q.holes;if(!sn.isClockWise(R)){R=R.reverse();for(let k=0,Y=A.length;k<Y;k++){const $=A[k];sn.isClockWise($)&&(A[k]=$.reverse())}}const z=sn.triangulateShape(R,A),H=R;for(let k=0,Y=A.length;k<Y;k++){const $=A[k];R=R.concat($)}function P(k,Y,$){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar($).add(k)}const F=R.length,U=z.length;function K(k,Y,$){let pt,it,b;const w=k.x-Y.x,G=k.y-Y.y,J=$.x-k.x,Z=$.y-k.y,ot=w*w+G*G,bt=w*Z-G*J;if(Math.abs(bt)>Number.EPSILON){const xt=Math.sqrt(ot),St=Math.sqrt(J*J+Z*Z),mt=Y.x-G/xt,C=Y.y+w/xt,rt=$.x-Z/St,W=$.y+J/St,lt=((rt-mt)*Z-(W-C)*J)/(w*Z-G*J);pt=mt+w*lt-k.x,it=C+G*lt-k.y;const ut=pt*pt+it*it;if(ut<=2)return new j(pt,it);b=Math.sqrt(ut/2)}else{let xt=!1;w>Number.EPSILON?J>Number.EPSILON&&(xt=!0):w<-Number.EPSILON?J<-Number.EPSILON&&(xt=!0):Math.sign(G)===Math.sign(Z)&&(xt=!0),xt?(pt=-G,it=w,b=Math.sqrt(ot)):(pt=w,it=G,b=Math.sqrt(ot/2))}return new j(pt/b,it/b)}const st=[];for(let k=0,Y=H.length,$=Y-1,pt=k+1;k<Y;k++,$++,pt++)$===Y&&($=0),pt===Y&&(pt=0),st[k]=K(H[k],H[$],H[pt]);const dt=[];let nt,_t=st.concat();for(let k=0,Y=A.length;k<Y;k++){const $=A[k];nt=[];for(let pt=0,it=$.length,b=it-1,w=pt+1;pt<it;pt++,b++,w++)b===it&&(b=0),w===it&&(w=0),nt[pt]=K($[pt],$[b],$[w]);dt.push(nt),_t=_t.concat(nt)}for(let k=0;k<_;k++){const Y=k/_,$=f*Math.cos(Y*Math.PI/2),pt=g*Math.sin(Y*Math.PI/2)+x;for(let it=0,b=H.length;it<b;it++){const w=P(H[it],st[it],pt);ft(w.x,w.y,-$)}for(let it=0,b=A.length;it<b;it++){const w=A[it];nt=dt[it];for(let G=0,J=w.length;G<J;G++){const Z=P(w[G],nt[G],pt);ft(Z.x,Z.y,-$)}}}const X=g+x;for(let k=0;k<F;k++){const Y=u?P(R[k],_t[k],X):R[k];v?(y.copy(E.normals[0]).multiplyScalar(Y.x),L.copy(E.binormals[0]).multiplyScalar(Y.y),D.copy(S[0]).add(y).add(L),ft(D.x,D.y,D.z)):ft(Y.x,Y.y,0)}for(let k=1;k<=h;k++)for(let Y=0;Y<F;Y++){const $=u?P(R[Y],_t[Y],X):R[Y];v?(y.copy(E.normals[k]).multiplyScalar($.x),L.copy(E.binormals[k]).multiplyScalar($.y),D.copy(S[k]).add(y).add(L),ft(D.x,D.y,D.z)):ft($.x,$.y,d/h*k)}for(let k=_-1;k>=0;k--){const Y=k/_,$=f*Math.cos(Y*Math.PI/2),pt=g*Math.sin(Y*Math.PI/2)+x;for(let it=0,b=H.length;it<b;it++){const w=P(H[it],st[it],pt);ft(w.x,w.y,d+$)}for(let it=0,b=A.length;it<b;it++){const w=A[it];nt=dt[it];for(let G=0,J=w.length;G<J;G++){const Z=P(w[G],nt[G],pt);v?ft(Z.x,Z.y+S[h-1].y,S[h-1].x+$):ft(Z.x,Z.y,d+$)}}}Q(),ct();function Q(){const k=i.length/3;if(u){let Y=0,$=F*Y;for(let pt=0;pt<U;pt++){const it=z[pt];vt(it[2]+$,it[1]+$,it[0]+$)}Y=h+_*2,$=F*Y;for(let pt=0;pt<U;pt++){const it=z[pt];vt(it[0]+$,it[1]+$,it[2]+$)}}else{for(let Y=0;Y<U;Y++){const $=z[Y];vt($[2],$[1],$[0])}for(let Y=0;Y<U;Y++){const $=z[Y];vt($[0]+F*h,$[1]+F*h,$[2]+F*h)}}n.addGroup(k,i.length/3-k,0)}function ct(){const k=i.length/3;let Y=0;O(H,Y),Y+=H.length;for(let $=0,pt=A.length;$<pt;$++){const it=A[$];O(it,Y),Y+=it.length}n.addGroup(k,i.length/3-k,1)}function O(k,Y){let $=k.length;for(;--$>=0;){const pt=$;let it=$-1;it<0&&(it=k.length-1);for(let b=0,w=h+_*2;b<w;b++){const G=F*b,J=F*(b+1),Z=Y+pt+G,ot=Y+it+G,bt=Y+it+J,xt=Y+pt+J;at(Z,ot,bt,xt)}}}function ft(k,Y,$){l.push(k),l.push(Y),l.push($)}function vt(k,Y,$){ht(k),ht(Y),ht($);const pt=i.length/3,it=m.generateTopUV(n,i,pt-3,pt-2,pt-1);Et(it[0]),Et(it[1]),Et(it[2])}function at(k,Y,$,pt){ht(k),ht(Y),ht(pt),ht(Y),ht($),ht(pt);const it=i.length/3,b=m.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Et(b[0]),Et(b[1]),Et(b[3]),Et(b[1]),Et(b[2]),Et(b[3])}function ht(k){i.push(l[k*3+0]),i.push(l[k*3+1]),i.push(l[k*3+2])}function Et(k){r.push(k.x),r.push(k.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Pl[i.type]().fromJSON(i)),new ai(n,t.options)}}const ig={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],_=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-d),new j(u,1-g),new j(x,1-p)]:[new j(o,1-l),new j(h,1-d),new j(f,1-g),new j(_,1-p)]}};function rg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class la extends Ut{constructor(t=new Hi([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;sn.isClockWise(f)===!1&&(f=f.reverse());for(let _=0,p=g.length;_<p;_++){const m=g[_];sn.isClockWise(m)===!0&&(g[_]=m.reverse())}const x=sn.triangulateShape(f,g);for(let _=0,p=g.length;_<p;_++){const m=g[_];f=f.concat(m)}for(let _=0,p=f.length;_<p;_++){const m=f[_];i.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let _=0,p=x.length;_<p;_++){const m=x[_],S=m[0]+d,v=m[1]+d,E=m[2]+d;n.push(S,v,E),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return sg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new la(n,t.curveSegments)}}function sg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ca extends Ut{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],x=[],_=[];for(let p=0;p<=n;p++){const m=[],S=p/n;let v=0;p==0&&a==0?v=.5/e:p==n&&l==Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const L=E/e;d.x=-t*Math.cos(i+L*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(i+L*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),_.push(L+v,1-S),m.push(c++)}h.push(m)}for(let p=0;p<n;p++)for(let m=0;m<e;m++){const S=h[p][m+1],v=h[p][m],E=h[p+1][m],L=h[p+1][m+1];(p!==0||a>0)&&f.push(S,v,L),(p!==n-1||l<Math.PI)&&f.push(v,E,L)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(_,2))}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ag extends he{constructor(t){super(),this.type="ShadowMaterial",this.color=new gt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}ag.prototype.isShadowMaterial=!0;class Wr extends he{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ti,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Wr.prototype.isMeshStandardMaterial=!0;class og extends Wr{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenTint=new gt(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new gt(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenTint.copy(t.sheenTint),this.sheenRoughness=t.sheenRoughness,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationTint.copy(t.attenuationTint),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularTint.copy(t.specularTint),this.specularTintMap=t.specularTintMap,this}}og.prototype.isMeshPhysicalMaterial=!0;class lg extends he{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ti,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}lg.prototype.isMeshPhongMaterial=!0;class cg extends he{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ti,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}cg.prototype.isMeshToonMaterial=!0;class hg extends he{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ti,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}hg.prototype.isMeshNormalMaterial=!0;class ug extends he{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}ug.prototype.isMeshLambertMaterial=!0;class dg extends he{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new gt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ti,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}dg.prototype.isMeshMatcapMaterial=!0;class fg extends Oi{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}fg.prototype.isLineDashedMaterial=!0;const Gt={arraySlice:function(s,t,e){return Gt.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<e||g>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=Gt.convertArray(d,c.times.constructor),c.values=Gt.convertArray(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const g=o.times.length-1;let x;if(r<=o.times[0]){const p=h,m=d-h;x=Gt.arraySlice(o.values,p,m)}else if(r>=o.times[g]){const p=g*d+h,m=p+d-h;x=Gt.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=h,S=d-h;p.evaluate(r),x=Gt.arraySlice(p.resultBuffer,m,S)}l==="quaternion"&&new fe().fromArray(x).normalize().conjugate().toArray(x);const _=c.times.length;for(let p=0;p<_;++p){const m=p*f+u;if(l==="quaternion")fe.multiplyQuaternionsFlat(c.values,m,x,0,c.values,m);else{const S=f-u*2;for(let v=0;v<S;++v)c.values[m+v]-=x[v]}}}return s.blendMode=Qo,s}};class cn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}cn.prototype.beforeStart_=cn.prototype.copySampleValue_;cn.prototype.afterEnd_=cn.prototype.copySampleValue_;class pg extends cn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xn,endingEnd:Xn}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case qn:r=t,o=2*e-n;break;case Tr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qn:a=t,l=2*n-e;break;case Tr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,_=x*g,p=-u*_+2*u*x-u*g,m=(1+u)*_+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-f)*_+(1.5+f)*x+.5*g,v=f*_-f*x;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+m*a[c+E]+S*a[l+E]+v*a[d+E];return r}}class Nl extends cn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class mg extends cn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fe{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gt.convertArray(e,this.TimeBufferType),this.values=Gt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gt.convertArray(t.times,Array),values:Gt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case Sr:e=this.InterpolantFactoryMethodLinear;break;case Yr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Yr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Gt.arraySlice(n,r,a),this.values=Gt.arraySlice(this.values,r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Gt.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=Gt.arraySlice(this.times),e=Gt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Yr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=Gt.arraySlice(t,0,a),this.values=Gt.arraySlice(e,0,a*n)):(this.times=t,this.values=e),this}clone(){const t=Gt.arraySlice(this.times,0),e=Gt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Fe.prototype.TimeBufferType=Float32Array;Fe.prototype.ValueBufferType=Float32Array;Fe.prototype.DefaultInterpolation=Sr;class oi extends Fe{}oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=br;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends Fe{}Bl.prototype.ValueTypeName="color";class Ar extends Fe{}Ar.prototype.ValueTypeName="number";class gg extends cn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)fe.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Gi extends Fe{InterpolantFactoryMethodLinear(t){return new gg(this.times,this.values,this.getValueSize(),t)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=Sr;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class li extends Fe{}li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=br;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Fe{}Lr.prototype.ValueTypeName="vector";class Oo{constructor(t,e=-1,n,i=Xs){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pe(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(vg(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Fe.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Gt.getKeyframeOrder(l);l=Gt.sortedArray(l,1,h),c=Gt.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ar(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,x){if(f.length!==0){const _=[],p=[];Gt.flattenJSON(f,_,p,g),_.length!==0&&x.push(new d(u,_,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(const x in f){const _=[],p=[];for(let m=0;m!==u[g].morphTargets.length;++m){const S=u[g];_.push(S.time),p.push(S.morphTarget===x?1:0)}i.push(new Ar(".morphTargetInfluence["+x+"]",_,p))}l=f.length*(a||1)}else{const f=".bones["+e[d].name+"]";n(Lr,f+".position",u,"pos",i),n(Gi,f+".quaternion",u,"rot",i),n(Lr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return Bl;case"quaternion":return Gi;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=xg(s.type);if(s.times===void 0){const e=[],n=[];Gt.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const $n={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yg{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const _g=new yg;class Ve{constructor(t){this.manager=t!==void 0?t:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ee={};class zl extends Ve{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$n.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;if(Ee[t]!==void 0){Ee[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=t.match(o);let c;if(l){const h=l[1],d=!!l[2];let u=l[3];u=decodeURIComponent(u),d&&(u=atob(u));try{let f;const g=(this.responseType||"").toLowerCase();switch(g){case"arraybuffer":case"blob":const x=new Uint8Array(u.length);for(let p=0;p<u.length;p++)x[p]=u.charCodeAt(p);g==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(u,h);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ee[t]=[],Ee[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(h){const d=this.response,u=Ee[t];if(delete Ee[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),$n.add(t,d);for(let f=0,g=u.length;f<g;f++){const x=u[f];x.onLoad&&x.onLoad(d)}r.manager.itemEnd(t)}else{for(let f=0,g=u.length;f<g;f++){const x=u[f];x.onError&&x.onError(h)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(h){const d=Ee[t];for(let u=0,f=d.length;u<f;u++){const g=d[u];g.onProgress&&g.onProgress(h)}},!1),c.addEventListener("error",function(h){const d=Ee[t];delete Ee[t];for(let u=0,f=d.length;u<f;u++){const g=d[u];g.onError&&g.onError(h)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(h){const d=Ee[t];delete Ee[t];for(let u=0,f=d.length;u<f;u++){const g=d[u];g.onError&&g.onError(h)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return r.manager.itemStart(t),c}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ul extends Ve{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$n.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Br("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),$n.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Mg extends Ve{constructor(t){super(t)}load(t,e,n,i){const r=new zr,a=new Ul(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Ol extends Ve{constructor(t){super(t)}load(t,e,n,i){const r=new ie,a=new Ul(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class De extends Dt{constructor(t,e=1){super(),this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}De.prototype.isLight=!0;class wg extends De{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Dt.DefaultUp),this.updateMatrix(),this.groundColor=new gt(e)}copy(t){return De.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}wg.prototype.isHemisphereLight=!0;const Ho=new yt,Go=new T,ko=new T;class ha{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Go.setFromMatrixPosition(t.matrixWorld),e.position.copy(Go),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hl extends ha{constructor(){super(new oe(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Hl.prototype.isSpotLightShadow=!0;class bg extends De{constructor(t,e,n=0,i=Math.PI/3,r=0,a=1){super(t,e),this.type="SpotLight",this.position.copy(Dt.DefaultUp),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Hl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}bg.prototype.isSpotLight=!0;const Vo=new yt,_i=new T,Cs=new T;class Gl extends ha{constructor(){super(new oe(90,1,.5,500)),this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_i.setFromMatrixPosition(t.matrixWorld),n.position.copy(_i),Cs.copy(n.position),Cs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cs),n.updateMatrixWorld(),i.makeTranslation(-_i.x,-_i.y,-_i.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}Gl.prototype.isPointLightShadow=!0;class Ni extends De{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Ni.prototype.isPointLight=!0;class kl extends ha{constructor(){super(new Ks(-5,5,5,-5,.5,500))}}kl.prototype.isDirectionalLightShadow=!0;class Sg extends De{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Dt.DefaultUp),this.updateMatrix(),this.target=new Dt,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Sg.prototype.isDirectionalLight=!0;class Tg extends De{constructor(t,e){super(t,e),this.type="AmbientLight"}}Tg.prototype.isAmbientLight=!0;class Eg extends De{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Eg.prototype.isRectAreaLight=!0;class Vl{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new T)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}Vl.prototype.isSphericalHarmonics3=!0;class ua extends De{constructor(t=new Vl,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}ua.prototype.isLightProbe=!0;class Wl{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}}class Ag extends Ut{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Ag.prototype.isInstancedBufferGeometry=!0;class Lg extends Ve{constructor(t){super(t),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$n.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){$n.add(t,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}Lg.prototype.isImageBitmapLoader=!0;let vr;const Cg={getContext:function(){return vr===void 0&&(vr=new(window.AudioContext||window.webkitAudioContext)),vr},setContext:function(s){vr=s}};class Rg extends Ve{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new zl(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{const l=o.slice(0);Cg.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}}class Pg extends ua{constructor(t,e,n=1){super(void 0,n);const i=new gt().set(t),r=new gt().set(e),a=new T(i.r,i.g,i.b),o=new T(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Pg.prototype.isHemisphereLightProbe=!0;class Ig extends ua{constructor(t,e=1){super(void 0,e);const n=new gt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Ig.prototype.isAmbientLightProbe=!0;class Dg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wo(){return(typeof performance>"u"?Date:performance).now()}class Fg extends Dt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Ng{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){fe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;fe.multiplyQuaternionsFlat(t,a,t,e,t,n),fe.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const da="\\[\\]\\.:\\/",Bg=new RegExp("["+da+"]","g"),fa="[^"+da+"]",zg="[^"+da.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",fa),Og=/(WCOD+)?/.source.replace("WCOD",zg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fa),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fa),kg=new RegExp("^"+Ug+Og+Hg+Gg+"$"),Vg=["material","materials","bones"];class Wg{constructor(t,e,n){const i=n||Nt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Nt{constructor(t,e,n){this.path=e,this.parsedPath=n||Nt.parseTrackName(e),this.node=Nt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Nt.Composite(t,e,n):new Nt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(t){const e=kg.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Nt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=Wg;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xg{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Xn,endingEnd:Xn};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Eh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qo:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Xs:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Ah;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Th){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=qn,i.endingEnd=qn):(t?i.endingStart=this.zeroSlopeAtStart?qn:Xn:i.endingStart=Tr,e?i.endingEnd=this.zeroSlopeAtEnd?qn:Xn:i.endingEnd=Tr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}class qg extends bn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;g=new Ng(Nt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Nl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Oo.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Xs),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Xg(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Oo.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}qg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Yg extends Ui{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}Yg.prototype.isInstancedInterleavedBuffer=!0;class jg extends Dt{constructor(t){super(),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}jg.prototype.isImmediateRenderObject=!0;const $e=new T,yr=new yt,Rs=new yt;class Jg extends ia{constructor(t){const e=Xl(t),n=new Ut,i=[],r=[],a=new gt(0,0,1),o=new gt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Vt(i,3)),n.setAttribute("color",new Vt(r,3));const l=new Oi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Rs.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(yr.multiplyMatrices(Rs,o.matrixWorld),$e.setFromMatrixPosition(yr),i.setXYZ(a,$e.x,$e.y,$e.z),yr.multiplyMatrices(Rs,o.parent.matrixWorld),$e.setFromMatrixPosition(yr),i.setXYZ(a+1,$e.x,$e.y,$e.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Xl(s){const t=[];s&&s.isBone&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Xl(s.children[e]));return t}class Zg extends ia{constructor(t=10,e=10,n=4473924,i=8947848){n=new gt(n),i=new gt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,g=-o;u<=e;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Ut;h.setAttribute("position",new Vt(l,3)),h.setAttribute("color",new Vt(c,3));const d=new Oi({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}}const Qg=new Float32Array(1);new Int32Array(Qg.buffer);Me.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Me.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s};Gs.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Zg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Jg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Ve.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Wl.extractUrlBase(s)};Ve.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Ae.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ae.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ae.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ae.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Ae.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};ni.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ur.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};ee.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};ee.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ee.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ee.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ee.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ee.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};yt.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};yt.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};yt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};yt.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};yt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};yt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};yt.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};yt.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};yt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};yt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};yt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};yt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};yt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};yt.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)};yt.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};ke.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};fe.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};fe.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ii.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};ii.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};ii.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Zt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Zt.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)};Zt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};Zt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};Zt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};Zt.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Zt.getBarycoord(s,t,e,n,i)};Zt.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Zt.getNormal(s,t,e,n)};Hi.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Hi.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ai(this,s)};Hi.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new la(this,s)};j.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};j.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};j.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};T.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};T.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)};T.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};T.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};T.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};zt.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};zt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Dt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Dt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Dt.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)};Dt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Dt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Dt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ne.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ne.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Lh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Tl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};oe.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)};Object.defineProperties(De.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(qt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Er},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Er)}}});qt.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Er:Ri),this};qt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},qt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ut.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Ut.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new qt(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)};Ut.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)};Ut.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ut.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ut.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Ut.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ut.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ui.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Er:Ri),this};Ui.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ai.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ai.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ai.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(he.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new gt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Yo}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Mn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Bt.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)};Bt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Bt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Bt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Bt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Bt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Bt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Bt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Bt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Bt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Bt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Bt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Bt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Bt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Bt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Bt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Bt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Bt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Bt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Bt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Bt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Bt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Bt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Bt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Bt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Bt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?wn:le}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ml.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ie.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Fg.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Rg().load(s,function(n){t.setBuffer(n)}),this};Zs.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)};Zs.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)};ei.crossOrigin=void 0;ei.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Ol;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};ei.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Mg;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};ei.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ei.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);class Kg extends Ve{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new zl(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){function e(c){const h=new DataView(c),d=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*d===h.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,h,x))return!1;return!0}function n(c,h,d){for(let u=0,f=c.length;u<f;u++)if(c[u]!==h.getUint8(d+u,!1))return!1;return!0}function i(c){const h=new DataView(c),d=h.getUint32(80,!0);let u,f,g,x=!1,_,p,m,S,v;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(x=!0,_=new Float32Array(d*3*3),p=h.getUint8(R+6)/255,m=h.getUint8(R+7)/255,S=h.getUint8(R+8)/255,v=h.getUint8(R+9)/255);const E=84,L=12*4+2,y=new Ut,D=new Float32Array(d*3*3),q=new Float32Array(d*3*3);for(let R=0;R<d;R++){const A=E+R*L,tt=h.getFloat32(A,!0),z=h.getFloat32(A+4,!0),H=h.getFloat32(A+8,!0);if(x){const P=h.getUint16(A+48,!0);P&32768?(u=p,f=m,g=S):(u=(P&31)/31,f=(P>>5&31)/31,g=(P>>10&31)/31)}for(let P=1;P<=3;P++){const F=A+P*12,U=R*3*3+(P-1)*3;D[U]=h.getFloat32(F,!0),D[U+1]=h.getFloat32(F+4,!0),D[U+2]=h.getFloat32(F+8,!0),q[U]=tt,q[U+1]=z,q[U+2]=H,x&&(_[U]=u,_[U+1]=f,_[U+2]=g)}}return y.setAttribute("position",new qt(D,3)),y.setAttribute("normal",new qt(q,3)),x&&(y.setAttribute("color",new qt(_,3)),y.hasColors=!0,y.alpha=v),y}function r(c){const h=new Ut,d=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g;let f=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+g+g+g,"g"),_=new RegExp("normal"+g+g+g,"g"),p=[],m=[],S=new T;let v,E=0,L=0,y=0;for(;(v=d.exec(c))!==null;){L=y;const D=v[0];for(;(v=u.exec(D))!==null;){let A=0,tt=0;const z=v[0];for(;(v=_.exec(z))!==null;)S.x=parseFloat(v[1]),S.y=parseFloat(v[2]),S.z=parseFloat(v[3]),tt++;for(;(v=x.exec(z))!==null;)p.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),m.push(S.x,S.y,S.z),A++,y++;tt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+f),A!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+f),f++}const q=L,R=y-L;h.addGroup(q,R,E),E++}return h.setAttribute("position",new Vt(p,3)),h.setAttribute("normal",new Vt(m,3)),h}function a(c){return typeof c!="string"?Wl.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}const l=o(t);return e(l)?i(l):r(a(t))}}class $g{constructor(t,e=" .:-=+*#%@",n={}){const i=n.resolution?n.resolution:.15,r=n.scale?n.scale:1,a=n.color?n.color:!1,o=n.alpha?n.alpha:!1,l=n.block?n.block:!1,c=n.invert?n.invert:!1,h="low";let d,u;const f=document.createElement("div");f.style.cursor="default";const g=document.createElement("table");f.appendChild(g);let x,_,p;this.setSize=function(P,F){d=P,u=F,t.setSize(P,F),m()},this.render=function(P,F){t.render(P,F),H(t,g)},this.domElement=f;function m(){x=Math.round(d*R),_=Math.round(u*R),y.width=x,y.height=_,p=t.domElement,p.style.backgroundColor&&(g.rows[0].cells[0].style.backgroundColor=p.style.backgroundColor,g.rows[0].cells[0].style.color=p.style.color),g.cellSpacing=0,g.cellPadding=0;const P=g.style;P.display="inline",P.width=Math.round(x/R*r)+"px",P.height=Math.round(_/R*r)+"px",P.whiteSpace="pre",P.margin="0px",P.padding="0px",P.letterSpacing=z+"px",P.fontFamily=E,P.fontSize=A+"px",P.lineHeight=tt+"px",P.textAlign="left",P.textDecoration="none"}const S=" .,:;i1tfLCG08@".split(""),v=" CGO08@".split(""),E="courier new, monospace",L=t.domElement,y=document.createElement("canvas");if(!y.getContext)return;const D=y.getContext("2d");if(!D.getImageData)return;let q=a?v:S;e&&(q=e);let R=.5;switch(h){case"low":R=.25;break;case"medium":R=.5;break;case"high":R=1;break}i&&(R=i);const A=2/R*r,tt=2/R*r;let z=0;switch(r){case 1:z=-1;break;case 2:case 3:z=-2.1;break;case 4:z=-3.1;break;case 5:z=-4.15;break}function H(P,F){D.clearRect(0,0,x,_),D.drawImage(L,0,0,x,_);const U=D.getImageData(0,0,x,_).data;let K="";for(let st=0;st<_;st+=2){for(let dt=0;dt<x;dt++){const nt=(st*x+dt)*4,_t=U[nt],X=U[nt+1],Q=U[nt+2],ct=U[nt+3];let O,ft;ft=(.3*_t+.59*X+.11*Q)/255,ct==0&&(ft=1),O=Math.floor((1-ft)*(q.length-1)),c&&(O=q.length-O-1);let vt=q[O];(vt===void 0||vt==" ")&&(vt="&nbsp;"),a?K+="<span style='color:rgb("+_t+","+X+","+Q+");"+(l?"background-color:rgb("+_t+","+X+","+Q+");":"")+(o?"opacity:"+ct/255+";":"")+"'>"+vt+"</span>":K+=vt}K+="<br/>"}F.innerHTML="<tr><td>"+K+"</td></tr>"}}}const tx=new Dg;let ql=!0;const Le=new ne,Bi=new Hr;Bi.background=new gt(0,0,0);const Yl=new Ni(16777215,1,0,0);Yl.position.set(100,100,400);Bi.add(Yl);const jl=new Ni(16777215,.5,0,0);jl.position.set(-500,100,-400);Bi.add(jl);const ex=new Kg,Cr=new Wr;Cr.flatShading=!0;Cr.side=_n;const Rr={width:window.innerWidth,height:window.innerHeight},ye=new oe(45,Rr.width/Rr.height,.1,2e3),Jl=new Bt;let vn,nx=" .:-+*=%@#";const ix={amount:.205};let rx="white";function sx(){vn=new $g(Jl,nx,{invert:!0,resolution:ix.amount}),vn.setSize(Rr.width,Rr.height),vn.domElement.style.color=rx,vn.domElement.classList.add("asciiBox")}sx();document.body.appendChild(vn.domElement);document.getElementById("ascii").style.whiteSpace="prewrap";const ax=()=>{ex.load("/img/EM.stl",function(s){Le.material=Cr,Le.geometry=s;var t=new ne(s,Cr);Le.position.copy=t.position,s.computeVertexNormals(),Le.geometry.center(),Le.rotation.x=-90*Math.PI/180,Le.geometry.computeBoundingBox();var e=Le.geometry.boundingBox;Le.position.y=(e.max.z-e.min.z)/5,ye.position.x=e.max.x*4,ye.position.y=e.max.y,ye.position.z=e.max.z*3,Bi.add(Le);function n(){if(ql==!0){const r=tx.getElapsedTime();Le.rotation.z=r/3,i(),window.requestAnimationFrame(n)}else window.requestAnimationFrame(n)}function i(){vn.render(Bi,ye)}n(),Zl()})};ax();const Kt=[{rx:1.5707953337814393,ry:-9503825893487959e-22,rz:1.2544634559949106,px:-.18851380350171026,py:.003374259693436188,pz:.03300631548899701},{px:-2.1797208198865823,py:.7456858904043902,pz:1.259941607611314,rx:-.10187680375576487,ry:-1.3965809813885177,rz:-.10034508895856986},{px:-1.1034436569318822,py:.7620751528401553,pz:1.9652184488834998,rx:-.029276658833755884,ry:-.18859301653013388,rz:-.005490215016934513},{px:3.6492892876810172,py:1.4758909584810571,pz:4.25,rx:-.2220876074269339,ry:.684948575340779,rz:.14189637418696438},{px:3.6492892876810172,py:1.4758909584810571,pz:4.25,rx:-.2220876074269339,ry:.684948575340779,rz:.14189637418696438}];let _r=!0;const Ps=document.querySelector(".creates");var ox=document.querySelector(".create").getBoundingClientRect().height;const lx=document.querySelector(".type-do1"),cx=document.querySelector(".type-do2"),Zl=()=>{let t=window.scrollY/window.innerHeight;document.body.style.setProperty("--t",t),document.body.setAttribute("data-section",Math.floor(t+.2));let e=Math.min(t,3.9999999);const n=Math.floor(e);if(e-=n,ye.position.x=Kt[n].px+(Kt[n+1].px-Kt[n].px)*e+.2+(window.innerWidth-1536)*4e-4,ye.position.y=Kt[n].py+(Kt[n+1].py-Kt[n].py)*e,ye.position.z=Kt[n].pz+(Kt[n+1].pz-Kt[n].pz)*e,ye.rotation.x=Kt[n].rx+(Kt[n+1].rx-Kt[n].rx)*e,ye.rotation.y=Kt[n].ry+(Kt[n+1].ry-Kt[n].ry)*e,ye.rotation.z=Kt[n].rz+(Kt[n+1].rz-Kt[n].rz)*e,t<1.7)Ps.style.opacity=0;else{if(Ps.style.opacity=1,Ps.style.top=Math.min(0-Math.min(Math.floor((t-1.9)*5),2)*ox,0)+"px",t<2.5&&!_r){_r=!0;const i=document.querySelectorAll(".number");for(let r of i)r.textContent=0}if(_r&&t>2.8){_r=!1;const i=document.querySelectorAll(".number");for(let r of i){let d=function(){l<=o?(l+=a/50,setTimeout(d,c),c+=h):l=o,r.textContent=l>=1e3?l>=1e6?(l/1e6).toFixed(1)+"M":(l/1e3).toFixed(1)+"K":Math.floor(l)};const a=r.getAttribute("data-n"),o=a;let l=0,c=10;const h=1;d()}}else t>3.2&&(document.getElementById("alot-o").innerHTML="o".repeat(Math.floor((t-3.2)*20)))}lx.classList.toggle("typed",t>4),cx.classList.toggle("typed",t>4.3),ql=t<4};window.addEventListener("scroll",Zl);window.addEventListener("resize",hx);function hx(){ye.aspect=window.innerWidth/window.innerHeight,ye.updateProjectionMatrix(),Jl.setSize(window.innerWidth,window.innerHeight),vn.setSize(window.innerWidth,window.innerHeight)}function ux(){window.WIDTH=48,window.HEIGHT=48,window.scene=new Hr,window.camera=new oe(1,WIDTH/HEIGHT,.1,1e3),window.renderer=new Bt({alpha:!0,antialias:!0}),renderer.setSize(WIDTH,HEIGHT);var s=new Ol().load("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAIBgYGBgYIBgYIDAgHCAwOCggICg4QDQ0ODQ0QEQwODQ0ODBEPEhMUExIPGBgaGhgYIyIiIiMnJycnJycnJycnAQkICAkKCQsJCQsOCw0LDhEODg4OERMNDQ4NDRMYEQ8PDw8RGBYXFBQUFxYaGhgYGhohISAhIScnJycnJycnJyf/wAARCADIAZADASIAAhEBAxEB/8QAhAAAAQUBAQEAAAAAAAAAAAAAAAECAwQFBgcIAQEAAAAAAAAAAAAAAAAAAAAAEAACAQMDAQYEBAQDBQYGAwABAgMAEQQhEgUxQVFhIhMGcYEyFJGhUgexQiMVwWJy0YIzQyTw4cJTFhfxkqKy0iWzw1URAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOy2jtBppCX0B/Gr6Ywc+a/zp5wRpb59tBmeX9J+ZpP93860mwu0afKkGIAbkX8BQZuv6aLN+m1avogaAWFJ6QJ0NBmBfh+dLsbw+VXnx76hfnSJjNezaCgpmF+3+NHp95qdsnjEf0/VuwsCVDMBfvZRtH401poQd0a3gH15O9PTX42YmgYIl/VTxCp/n/KmzySQsCixOliSWlCdOtiQRpUUmTJJjj0ZAgLASTRFJjGTeysFP50FoQf5ifkaX0GHXT46VjZaZnpkPmBjGRokj7mJP0f0gpue41Wx4M4ziHMjaHHUm88qsVva23c2gv2E0HRbUGhkQHuLD/bTgncwPzrlOQ572txRZM3kI5ZANvo4paeQdw/plUW3i1S4OT7U5JEmindxIQrTSyAHX9cbHyj/AFGg6Yo47Lim6D6k/KqsEPCbhDj8jHKo09CB0H/8DXNSnAwVJZEkuepZpf8AFqB5MC/UVX46U31MM/8AOj+TioP7fgg3GOGP+YsR+DE0r40TXHpKAdCAAL/lQS+tgXschL929f8AbU0YhkJEcm+3Xayn/Gs3+z4BuftUBbVjb5VQyuExYrtBLLBI+p2EMLLqb6XH40HS/bgG3mo9A30v+FYeNNFjYEmflcvNDHEN7STIzIoPl27dwLFtpArAxf3AiHJJLkct6vGqWcQ/ZyxTE28qyFJHTaD0te/bQd59ue/+NPXGYi42n5muKh/eDGXeMjiJGIb+m0UqlWW/U+oqkVHl/u7jem32XDOZf5TPKoX5iNSaDu/tX67AfgaUYzdsRH4f7a8w479yeUys2V+TyvscdrehDjY8cir/AKjLdj8b1sN7riwoFysznpch5D5ceBcawBJ1Yxx7lA7e2g7pcTvW3xp/2ml1UMe4V5NzP7gckipBxmdMJdC2THJE8fW9grY0bXt41gS+9PeE9g3M5Nx0ZCsenwRRQe7/AG7D/l2pDCf0V8/HnPcbsXbl8wsepORIf/FVjE9zc3iCz5M89r2L5E40PX6JBQe6tEP00wx9yivFIPfHP40zTtM8wZi3pyzzFAD2ABwK6LC/cLnpELJw88sZ1WSMSSjXpqVAtQejGM/oFJ6Xev5151yX7ne48KJN/CQYrSfQ07uzW8YwykfOncN+7EToy+44PSdSNj4cJcMO3cHlG0/lQeh7VH8lMYH+VdPG1cnL+7Ps9b7MfOcDo3pRi/4yaVzcH7m5vIZxixoREHZtizSRpEqA+Xcwjd72+PhQelkuOwfgKbvbuH4CqWBnvNGJMqfFBKBikcpYEn9BkWPy9gpF5rDMvpSDaCbK6ksP4CguGR+4fgKT1H7h+FTpLx8tkhyIpHboFcEn4CrC4e7W2lBSEkncD8qX1JP0j8Kt5SYuDiy5uY4hxoEMksrXsFUXJ0vWNxvu32fyryrickoEABkkmDQp5jYWaYICTQXWkc9lqTe57BV9UwpX9KLIid/0q6ltPC9PfAI6a91hegzPP+q3yo8x6sP4VdbECnzAj4037aO1wL/lQVdhP8wo2C31VIYSDYCpBCQNGNBw/N/uvNjZUUXC4UcsSj/qlykcee/SMgo3TvWs/L/d/nJGtx/GY0CkAASF5W3eG0x/haq59zQ5wEXN8XDlRAht6eWS4Nx5u62lqxMhcKTMXITFWPHLC+LA7q1v9T7rH4UHecd799zchjFo/biGQWX15ZzDEWC+Ztrpu+rsH41OvuX3YEIzuHx5ARdRh5TRMGGtm9VHBB8Kq8bBlhl3Y2RBjbf6a5GSJSDpYBbb9e27aVebDkd7AXv2ktagik9385DFvbhJWlt/w1mh2X7PMX3f/TVb/wBw83j1/wCq4DPyOjTSboSEJAuqeiuo+NWBx7MWYEMAbblJt8mAP50px5IQLob9l9D8KBU/cnFmKDH4TkpWcFiuyNLWt0LPrUXJe+OTZ8dcPiMlMeWIPKAL5MT79m26kxtprYU0XdiRHc31NyDULqzXcO0UiA2Ya69Bp0IoKy+8eSkyzg5+BlxQMLKctFZGbrtbRlt861MfmMPb6v2WGQTa5ULuA0IG1yOysyA8jgqJ8rObLRrlwRGqqLfjp3VAkvC5EhGLDj5XrMdxWNWHw3KNDQdHhe48FYpsPM+1SOS4V2CejGBbSSMeZr9pvWXl81KuRFFj52M+ACwlyo0QY7PbasdxGP6gJFuzrUskGA2MqzwJIIwAI2RZGNuwXGtLDBjRMrDEi2IwcDaqgHUb7Ktt1BVTN5MST5nN4qqRKvpZEAaUOLW9SQKfp8CgqdvX4rEk/uHJzq8x2SO8svpg3+lAGsv438arct7w4iJGx4h91IQQyqAY7g6B3uDodfLesb3BycXL4scOLnNMl1JikhRS8tvpVgd4t/p2+NA4+zOH5gepwuYsM4v60chLJcHzWDt6gPzNYHLe1c7h1EuWI2iY2SRGBv8A7psa3eIxpMaPBnmxORy8NQchkhAEO4nVlZLObd166huc4ubGDYvIQmUndIs8YlXv9N4nAe3Zp0oPIzj7CHj8rA3Vl0II7QRXpHtX31PBx8eLya/dGJhGZWdBNtYjbo25nrlOVyYc7KaSHFhxFFxsgvZj2sd3f8Kk4HPj4rOLzIHgmASUkG6jqGG3uPWg9yMLuoYCwIB+RGl6rtEy9RWri5WFlcVjZEMqSq8a2KHd5guo3aXNeWe5ffeXByD4nEBGSMkSSyBt28GxUC9rCg7iT09jbSrOvYbfxYiuU5XksnFDHJzPtY5Fa0JaNgb6AFUO4/Ja4DO5DlOWn+4zshna1gq+RAO4KulLhQ40c6tlxmWH+dQSpt33FA/K5jluQgXFyZ7wpu8qDbfdoQ1uo06GqceKD10rr1j9iQwbgudkTFTaM7Usx7zcAfnWCypvPpghLnaGNzbsuRago/bCkMAFXnXYSrCzA2I8abHDNkyCDHjaWVvpRBcmgzmhFWMbheSzd32mI8gFgSFt18WtXY8L7IyXnXJ5cKkKeYYwa7Of0tY6eNa/K+4uK4FFg27Zdp9HGjWw00Unst8aDil9j85sEkiRRL1O+QC3xqnke3eYxHKyYcjgG2+JS6nt7Bf8q77B5XkEid+aaAO9mSHHudg6ku1yD8hUfIclHJjS5uNmmB0ACOLFI201lS30/Kg83dGiYxyKUcdUYEEfI0ixPI2xELNYkKBrYC5Neg/Z53KwCPnsmDJgFmAx0VWJ6hvWtfae4Wq1FicPC8JOMJXx4xFHJOS9lHSytdb+NqDjeIzeI43DfLSIvzI1xpMqEy46ntKqu4EgdrCquUPdfOBp5Wys5VtuUMzKlxfb6YIC/DbXowzFDFlCgnoQBceFKvJFrgX01vQcL7Z9pYXJCWTlZmidfKMNQUmBvbe4YX291MxPZmNmgMM1Yx60sTxsR6g2PsUDvuBe9h8K7dclpkb1HZJLEEqQGt8wajxYsXHxzDCgZXf1ZHclneT/AMxmY3LaUGNjeyOHxyseZCchVBYZSu63N/paO5F7d2lbsceHiKsEGyEAWUBQhIHiAKc8h81z5fA/jVZTCv8ATYjQkjce+geyrNdQSb/qbS3fpaofs4bFPUEbAbd4JZrfF71KwHcCDrob0FLaKun4UFdcRIG9SPLyBKCCJkexFjfsXaPkKny5M/LK7eaz8XaLf0JFUH4gp1pC9jaxvYHp2HpUYaRydo6Gx3WAoMbJ9ncXmIEORkSvZi8k00jBnP8AM12IvfrYVz8f7dcmAskuTjxSbiFXzPp2MCB213MSywgoRuj3FlFxcA628dasCRW6xspbpqLfKgwOP9q8lHC6clysspI2xem7+VbW0JYG9VT7S5WCKZMPn8mPd/K7sEI/zMG/hXYlCw8p83bu0OlOaEBdnQ/D/sKDhuH4/wB9cPMpw+WRoVO44smTI8UgHYV1IBv2EV1nGe/uTfMkxuc4N1gQWGVx++YBgO1ZLXB8DpVr7aGFfUlCRomnqMAtvm3SmGbCCxyGVGEzbIdpvvY9i7b3oLH/AK9xTmwYkXEZ4WYkCWZFjFl6tt3M1IffTw7jN7fzxGraOuxwU189lO75Wp6QPbctlBPb3eFUs7lePw4yxmx5chQSuOZdrMQP1AMAfjQcJ6YpApVgy/UOmgP5GrWg/lB8TSAst9p23000oLnH8tzGECBPGI2AAOTc7VGvkC+bWpeR9zT5cLQxNJG2wKZU8oc/zDZfyqfiTWSU8Kb6YoGS8jyk0iSNlSI0YtGIj6aqD2KI9otV2D3X7ixwEfMbKgvd8fIAdGv17Nw+RqqYhTGioOp4j3Bg58vpZoGJMxCxyDdsJa4KOLk91iPnV7KggS8e5w97qpv1X/CuBdCoO02v/h0rouJ9yKYYsLPgbKnS6xyD/iFLdP8ANt7uvjQa7x3S7BJFUEmN9b3FrWPWqEkLqo2mSGNdVjhVUJI7rjxrUkMiwGQwl4RoHt9B69a1+PlxczECyld6eVgdD8aDjGy3WQNGC1mUs0t7bTrcN3i1aC5kM0E2HlFo4Z1Ks4bzgOOu61hXQzcdiMGS2h6mx/Oudm4EcSJpse7JIADCxuDYgKbsbDbc/KgwZ/ZOWqPNx2RFkRgkxxElZNt/L9Q23tWNk8dnYO373HeBXbYryDyk9tjreumyeUg491GRKEcMNyC5kCn+ay30rTyIcHn8BFY74SdyTxnUdhtfS9BY9tzTxcXjJlQtAcdiiAE7mTr6hVjcC9T8h7f4vks6PkMlm2pt9RVKhWsdA+nj1pI41jIEdtyqEMjDczKi2G46am1NnycuPcIMb1o1X+ohOxBc3N3NyfgAaDC9ye2vt5/vOIjaXDmuzJH5vTPgBrtrmxHfsrrYvdbzSRw4uLHHISFiaRh6UbE6s1wotVf3Dx8i5T8gJceaGYgA4xFgQLXKL9Nz0oMPGnzcNg2JkSQlbldjEAX66dKiEO5izasxJJPUk9tWdlPVLUECw+FSBLVNakIoI7UscUs8ixQo0kjEBUQXJJ8KU9KlweVyuIyDlYZUTbSgZhusD1IF7fjQaOVwcUfEtm4kkj5uOT97hsBviUm1ytw1gDqbGuew+Sl43LizYbF4jcBuhHaDbvrqPbXK8k+Rkti40GXnZbs80s0ixtr5jYDzFe+wtWvg+1MCDIbkM5I5MlyXGMgH28fgikXb50GOfcefNNBk52QkOJmxGRTjjWCzWBJcHcTYhrDSud53Pk5nKiXBid4PKkU3okMzW8/m1Nh3V6gWhSPaEjRBcBFAAF+thUYAKL6a7l6LsoOag9uyHHeDlMqTIKsphlSSQeQWuHTcB2W+FaEOBhY0zywwKrygLI5F2KjsYm960rB29O5Vv0kdakXBYEbhdT0b49hoMxY9jSEH6iCiWttAFtt6jlQKAXBUaa+J0A0rbOKiliWF0+sAg2/C9RriLMzK6my6qjeHb40GOY3UEHQdd/U6HuojV7syN113C1q12w1lQ9q9LqRbSiPCCoEVdB1NBlmF3ZWI6DpQ0RXX6SSLHxNazRX8qn4io2SK9mIB8D2UFAiXoFBbx0qtNHLq8hCKunl16962q/kxyIV9I33XA0N/+3xrOMM409QpI3aSQD3UEZjcAWlvI9rBNP8AuoTIlAMRB3hiu1uunbWjLx/2RYM5YMLopFwD8jaqWVx82Sqq7yCAizpFpvH6S4G4D4GgMYRTx+sJTOqlkIUWTcpKt262Iqx6ET23Bl/SqmwpMDDnREx4YRFCgCooFgoHdVjIwXW/q3XZYhuwnwoEMGMgHn8xNl6dT0FLIYoUaaaUKsY3M1ibKO8KL1JDGABJJ9PU3AtUqRSauFCRk/V0+FBxPK+8pJHOPxEfpoDrkyKCzeKo2g+dUF9x88V2/dkW7QqA/iFrpean49MzHwyqMgjnfICRgugaNtpUAdSTeuQjiAFuvjQauMvKe7cyLAysgLGil2NrCy212g+Y1o8xi43tvFgx+Ll25p/4sx1l2gdjf8sa/SOtZHH5M3G5Ay8ewlUMq3Fx5ht1qJ98sjSzMXkc3Z2NyT4mgibI5B9wkypjvG1wXY3Hd1qJccDsq0qVJt/OgfRS0UDbUWpaKBLU0qKfSHWgryLT+EiVucwgf/MuLC+oBIpzi9VGMkMizRMUkjIZHHUEG4NB6ymCmThiEsY0AIZFt9Xee2sw4AxMmGJH2MtnLuCA6nsW1/n3VP7f9xYHN+jEZxByMif9Tisps8i6b4rdbjU1oZcPoOy5kbiNk2o4F1ve5GgNjQV8aZZriKX1EiJSRturHs/CpJ4kaMJIdy9A3y7arcfhPA8zowZW2lR0bbqV3dB0PZT8qZgh8t/CgxOX4+aXBzE45VOS0e1CdoJPcWPhVFuAlx8jEfBScokREqJKET1B0aRna5162XUVuxxsxDE2v1FWVsg3ORGgFy57AKCmu7Ax3yuSmiVFKn1FQqq/5fMzXN65nP8AdWZJlyLhMoxA42uoKvIo72P038BUHufk8fksqOPClaTHiFm7ELjtX5VlRx0E82TLlMS6ogbUpGoUadL9p+dCLbTsoVaktagQCn2oGlFAUh6UtI7XGvXvoI3OlGDiryHIQYTOYxM20uo3EaE9KhlewqDDzczFz4ZuPQyZSkiOMKX3Eggjaup0oOyxPZgw87Hzos4uMeQSMNgXRewvust6g5v31BBkejhxjJjAYSOGIUOD0B22YVq46+++VwzDhJh4ccsapkzSFt63HnsD5dKpQ/tErxqH5J5ZL67FVU8bbtdaDDHuWXJgbH5J/s5MhFmw8qJTZRfo9y1wxXU2ra4j3HmRTw8fnxp6jpePIiZXikAF76dL1he8PZ8ntYYUsKz5wfcsu9GkjUL9A3x2Avrp865L7+QzJLH5DGf6KLeya3Cr8zQetSc1x8XrrGwmzcdHkji3nVrHoFBtrXE42L74nfLy0Em7LUrP6zABgw/kUnSw6EdKyTzuRHyP9xsI8tT549pXstZr61uRfuTzPpSY0Mce+XYkC2ZiCbKdviaC57Y5H3RxbLxE3GH7RmJaQIqlWY3Lu2oarvvd+Xz+ICYRkiOKxkyEja2+LbZtV7vjXbxe3YzhpNMztNKgLupuwYrra3jWByPF42Rhz4eZI/oZS7RMp2uF0uh6W1FA79s8/hc3hxj4XHyYkkQ3ZN9zwySrZWZZGv5mtfaeyujxOKx+PmzMlpJJpMqT1f6pB9MbbCNdoHlHW1cv7R9qf+n48xMXkfVizCjMpWzDYG27bDQ+bU10j5DQQOcpvUVCBftN+lwP40EOXlrCHYgOLjyoPMSaw2ysZWlMWEnqzuGyPVs7dNtwtmJsBoBpRyeUuYWlx8VjKDsWRm7u7Sq3H5uRhZZlZTHKL71bzKe7eLg6eFBrx8dyMjPPHjF1ezETlQpKjS6ArVqTE5HNRXy4khKaKoBNh07rfhT19x5E67URQ1vrAJH/AMp6VAmbnmUEt6xPY5sLfAaUDosF1YRu25l0N7hSPC4/wrRhxmjALRxrGPqZdxt8Ao1/CsiXBllkLqAkwFhZtF+Wh/OnS8pkYN8fLlEpPnhYDUi/b32NBtNPxqo2rKw0PlIPzvWHn8px4O/IlEeMpCq72AZibAa6n5VWeeXOc79b6BRoLd9Ynu3iImxByAxWyJ4NBtlKBFOnqFQddp7vnQdNk5OJHEzGRI4k/wCI5I2j51yWX74MqTR4eM25rLFJKwKqB/MEA6/Osb27m4mLjZ2FyYaTCyEusKKCxmJAV9x1G0eNSY3CqoRs/JTDuVOxwxcoRu3WHeOlA/iY4JGyOS5cZE8GscskP1CSQHYzOSLaioD6YY+ipVL+XeQWt4kACtTkMzjF4+PjOGWUQmT1siWXRpSBZLgHotZii1AAU4KKUCloEtS0UUBRRRegKKNO2nMoABBBBvp2i3eKBtFFFA0i9QyJe9WKay3oKMMs+Blw52M22fHcSRnxXsPgelegcZ7jLRRYs2W2R94/qYeSWL+lMw3vgSlwGuvWMnqNK4aSMGoS80cEuOrXglILxnVdy/S47mHYaD2dZZsrGM8ZBYDa6gC+lch7v5k8HDAkURmmyw5jZvKihbam2p69BVn2JzRnxmxs6cPkIxAV9XdLeVu891Zf7g8VlyNiZ8amSCNXjbbc7LtvBt2DW1Bzze7uXkRViCQMOpRdwPyfdWlFy2bz/F52DmOizxRjIiKjZ6ixeaRG7OmtUeO9tTZPG5XK5Ev2uPijQOjFpDa9k+n4VVxXxox/XgMtxY2kKde6wNBEsRQ2brU6C1W548eT0TiytI8lrxSKVkXQAeb6GHjTcnCysKX0ciMq1r2BDafFCwoIwKUUwN2U4GgdS0gNLQJUTmwqU1XlOlBTnkFiL69gAvc16J7Q/bzksDIj5jk5vt5JIv6eIqkyIsnX1T/K1v5RXNexMbj833dgQckhkju8kMehVpo1LoHB/l0v8bV7dlzPdjbr0v1PjQZaxQ4i+jCLAG7EjW9NfMSMnc1j2dpPyFLICp10H51VkTepCXVv1ga0FyHOjZBtbcGNiQe3utWUvtj23JzUfL/25Y+Qgf7gTxkqjyNcH1FB2se3pUqIH80ViVO0nx8aGnyxkJCIysNiTKD3Doe3rQXeS4jguXBPJcdj5LWtvkjUuL2/mFmHSuP5zjfbPtCFeYi4WGRMZlF1VmeFWKqJlJPmtdr316V1gckhidL+bxqHOw4+Rglxp7NDJG8TRHptcDcToflQWMPl8TNhimxpFdZRvRR12kXDfhWf7lx+SbisrI4COM8kg3rHMLpKo/4ibSQNxXpXBeyeRi4Lmsz2vnSSs+PMRxolFgYetiSOzr/CvWsdQx3htwPTXS3Sg8v4z3lxT4fpPM2FmRgK2HOrb4yQN23Q3TX8K7fCyEF5FaNxIg3zKCyA/l1rUPtj2+wz8mfBxoly42HI5LKFLIdW3u3ZpXz9zUXFf3XKXgBLFxga0Cu2psLFtOwnpQe3riLnzNkofTCtdSANth9RA7yetZ3NYGJOoiUXcXIcaEV517O915PtiZ4ZzJLx0gJaFbEq/Xcm/v7a9Fxn/uOJFnILLOiyaa/UN1qDGVM3HuNqzLfRlOxvhapk5J8b/kSFyCdEFtRYXJaruZNi8bA2XmSiKFDZmPX4AdpripPeqz5ig4gjxCxWR7lm2HTcBpr20G3HzOXEf+oj3ndrta4A/TfTUUYySTySZEq6yaKD2Adg/jWicSCXHhaKziVFZWW1jftvVLNyIuJxZMycM8cdgqKNSxNlW/ZQX8SFY91m6gfAfjTebzYOO4yQ5LFy4McajTc7A2HboB1rnMv3bkQxQenhJHNNEJRukEgUEnbdV7xrrWQ/KcjnZf3OQ3rSbHSNNvlQOpUlEHQgdtBQhjub2tfW1XCXkYNIxZgAtzqbKLAfIVGi9KnUUCBbU4Dtop1ACigUUBRRRQFFFFAUUUUBRRRQFFFFA0qDUTJ31PSEUFQxkMGUkEagjQg+FakPuXnseEQR5jMq/SZAHYeG5h21TKd1NKXoOn/9Tcfy2GOP5lJYd5USywkbDY9T2qO01je4cHjuPyYU42QyQyxCS5bcNWK6H/drNZdKkl5F3iWLLQZIiUrA7khkFtBcdVH6TQVk9WZ1iiVpJG0VFBYm/YAKWZcjEYCeNoi1wC2gbabGx6HWu99l4+KvGDPhi25GUWWU3vf0jt2oOwM2tq6eVONx8SPHyIkytoCBJgJbC3Tz3oPGknuNeoNTJKDXonOcHxfOQ/0kXGyIxaGWJQqiw0DqBqtcNle2ecwMdsqSFZYU1doW37V/URobUEIang1RjmB7asI4NBMahk6HS9SA01xcUGj7HmwsP3Ti5OdoEWT0CWCgSldq3J+Jr1fJ5UEsoQg63N68MlivXYe3vdUXoxcfyj+nLGu1MqQ3VwOm8n6Tag7Fsudpd8jELtsI+oHiacmUu309x3+OoIvXOy+6+DXepzF3ICfKGIJHcbWNZ0PvficnITHKSxEg2nkCrHe3xuAfGg7cZkcQYRqCo/lGhJqGTkhtGyPaT39nh21iRZ2Jkp6kDiWM3u6sCO62lOfKQE+bQ9lBtQZqsNVtt+d/x6VHl8kysn29gNd57vG9ZEOajGwYGpZlLxvZgCQevS3Wg5/3Pwbc1PFyuG3o8hheeIdFcKwbaT1F+yry/uhDjwfZcVgy52VGbIVVlVT+lhYt5TpoK1+NhmMkIVdpbUyKQdD+k/Ct3k+WxvbPEZXJlYlmUbcdQoBlmb6RdbX11ag8d5z3L7j56aVOVyHihDbW45GZIkZdLGMm9/8AVWakGnSpQZJ5ZMiY7pZWaSRu9mO4n8TVlY9KCk0HhXpf7f5iZXFScdIwWbEayDtMbag28DcVwTJVrj+QzeHyHyMFwkrxmMsRfRrG48RQR+5czK5HlslJ5fUhx5Xjx1AsoVWt079NTWSMe5sO2tjkThzzpNiI67ok+4D9s220jDwY61U2Cg2fbXOzwZXp5rbsLHxzsjAACiLzXA7WYaV28E3Gc/x5jg2zY8gKuHHT9SsOoIrznEhOOBlzw+phT7seR7/Rv0ubHRl6i/WjMg5D2/PPgerYToAXjJtJGehXtF6ClnYkWJn5ONAweKKRkRwb3AOmtXuGyfscv7gKC3pyIhP8rOhRW8evSs+KJ5JFiiUvIx2oii7E9wFaefxeVxJgjyyqvMgkaNWBZfBx2GggeIxMAfzFjp1uOy1KKsZWTizwRNGjjK3MZ5Ga4sdFUaD41VDCgfS6dKZupQRQOopLi+nSlFAUUtJQFFFFAUUUUBRRRQFLSUooEopaKBLU0i9OooIpFUKCDdv5hb/GmcfhpyPJ4mBJKIUyJFjeU/yg93ieg8ae4peO5F+H5KDkUjWUwE3jboVYFTr2Gx0oPRXOJxMSYuIgjhg8kYHhoXNurMeprHyOUbeSx+Xh8q1clYsuCLJgu2POiywt/lIvY+IPWsWXHIN1AHf2a0FrG5r09yu4QWuNRZu+1Wk5sTRMixNNddhTaQpDAjVjpb4VkRceNxZ1vru6dfjWrAoiZLaC+nxoOS5L2pyMe/LwIxJANfRXSTu8qG9/41kNFl4pAyoJYLmw9VGS5HYNwFes4QUfSNAdL3PjWrInHZ+E2PnxJk4lvOJPpBGt76Wt3ig8WR71L1ozftV5DKXAN8QSuMci9tl9LX7O6hdRQIyXqBoQatWoIvQZ7Y4PZVaXHWxBFaxUVXlTSg6X2Xjwf2mdUO6UzEyoDqtwFW4+VWcuCWKcoOg/mHSuY9t5TYXP4hX6MhxjyrewKyeX4aHWvSp8NTuDAC50X/bQcxFHIsgtoOta2NNyKcji4cWO8uPNG8uRmsbRw7PpQeXUnx76lbGjQh7E7fMQNdBrVjiy2FhLBkkqFb04nb6mUm8aka62O340EudzmBwPFHJylCuPJjxIfNIQPKg/x7q8v5HmeS53IE+fJdUv6MC6Rxg9ij+JOtbv7h4+R6/HzybjG6yAj+QPcH8SP4VzMC6CgsxrYVYFNj0+fWpFoEpGAJvT9L60EAkkaeFAzbTStSWpDQWOMzvsMjdIglx5BsyYDa0iHqpv+IrX91cW/p4udh3mwfTAjkvuKqdQhbrYX0vXOsL1bg5KdMU8dkM8nHuwZ4FIBBHQozK23Wg6v2jDw8WHHlRqi558kpkYFw63BKBtV3X7Kyufj/u3NZKwqt8JFjmZm2l2vaw63IvpburDaLi/TLxzzpOG8iuildvZd0a9/lUMbyRb5IpV3EAs1zuFmDDs/UBQPjKEnam8bSBa5ux6E1OOPlkxBlQMJT6ghkgVW9RGb6bi1rN4VQnLKPVd1vJ5to6kHtt2VHHnvA2+CV1kt5XRipB+R7qDSy+L5TAAfLxJIkNvORdde9luBVVTe1j16V2/A+7eNkwfRz8onLhQtK7KwEvcoGt2A69K57kJOO5Fv7nxkKJrbKxJDtIY9JFVCLqfCgzRS0K4dj6mhPQjoPCw7KcVtY3BB7RQFKbdRTRS0CnqaQ27KW9JQFFFFAoHy7qLWpKKAooooFoooNAUlF6WgYwvVWZbirZqGQUG97W9yYOFitxPMO6RCT1MWcahL/UhPYCda6fJxoQ4mgDTYrC4m0IuRfQr2V5Tkr1r0v2sft/aOGZSCJFlNydVVZWK/wCNBIpjB2mxHUVMkIkYMndaoo4Q0SlxYnW3x1qzGwt6YNiPqPaB30F2BewW1OlYPv3kMjF4mHExpNseVIY5gOpjVb7Qe6/Wr2dz3EcOq/dTWltdYVF3PZew7PjXC+4eZ/vubG8QZcWBdsKvoST9THU9aDMgWwq4g0qGNLCrAFAtJalooENV5RoasmoJRegue0uJi5f3BFHON0GMjZUi3Iv6ZGwaf52Fek5sU6tcix63Ol68lwOUyOE5KDkscndC3nXseM6Oh+Ir3TIj9SQ7bujKpQmx8rDcOnxoOVZipJc216devcKlkgbIhEUqtH54pFfQ6xOJApAN+zWtHKx4o1DKLNfS5rM5UuvGZUqz/bOkUgimuBZwpta9Bg+/uRwZuPx+PjmVstJg7RLYlVCsCXt061n8N7VyHwZOY5NRDgLA0sQJ88hI8psOg7a5CNWa8jks7eZmOpJOpJr1P3HKvGezuN4/HlMgyY41V2PmZAocnwHZQcCh0FTL0qJNOypRQLRQKKAoNFFA0i9MYWqWo3oK8htVSWW1afH8fNy3JY3GQMEkynEau30jQkk/hXomF+3/ALe42ZJMsS52REVcGVtsW5df+Gtri/YSaDjuO9icnyWC+VkSfZyk2hhkQkkXsWftHhXV5HtHi4uM+3gw4p81Yv6csxI3SbbBmYdNRXVT5AbcABcW6dKrmfzBFHTtoPLPafBZh9wTcfyuK0QGNOGLi6gsvpo6kaHU6WrIzsSTi+Qn4+Vt7wNt3gWB7mFe5JawdlO1ha4HT4Vx3ur2vjZ7vk4ovnAA3vYOAPpPj3Gg4GOQta5vVgG4+FU1DRSNGysrKbFXFiCOoNXI2F7kXU9QNKB7C1iDe9KiPJcIL21PcB3mkO3ouo7z1pLlb2Nr6GgWiiigKKKKAopbUUCUtF6SgWkoooClFJQKAqJ6lNQyUGfkmwJr1DjMHbxWJiIPJDjRhiCPqkHqE3F9L15vDinPzYMPcF9eRULHSwJ1r2LGx0SIrGLIqoFHeFFh8qCqccgdDr9Jt2AXuKiyYI8GCXNym2RRi8jEgWH4a1t5E/EY8H/X5kWKCtwZJFRh/mUHX8q8i533JyPNk4UkiPgwysYmjT0zKAbK7j4a0GdyWSOU5PIzlTYsreRSbnao2j+FOiitSRRWqyqigVRT6QUtAUUUUBUbipKRhQZ2RFuBuK9a9j+4xzHHCHKYJmcekcDBf+ZGi7Y5Tc/I+IrzB0vUmByGfxEsk3Hyem8i7XuAbj4Gg9nydhLSPZh1RV63ryv3ry0PJZiYOMA0eM5aSRTdWkIC2Fv02qjke4Ofy42hnz5DG1wyiy3B7LqAbVnxxAUDYorVaG4hVZiQosoJJAHhQq1IBagRVtTqLUtAUUUUC0GiigSo3qSmsL0EWFmNxvIY2eq7vt5FkKntCm5Fe25M0UscWTu3wyKGjkGoIOorw+RL3rYyPeHuGTFgw4p1gixwFT0kUEhRYXvuoPS5pIFj9ZpkijsTukIQWHX6rVFhS4mY+7Gyo8hR9RidXt8dprxfOkyuRnbIzpWnlbqzm/TuHQfKmYMuXxeSuZgyGKZQRuHaCLEEdtB9ASsjX2+UKbWt4dlVCkMgdjoY9Cey/hXHe0fduK+KcTmcoQTQkCGSQ+aRDrcsRbcD1q9zPvLiUwJU46RWmkVmj23O5/pBNunzoOK9zvC/uDKaHoNof/UF1qklV4wzMXclnY3ZjqST1JqyooJKL02tCXi8lcGPlFj24clwGZhcMp2kAGxNz0tQVLUWoovQFJeiigKKKKAooooCiiigKKKKANQydDUxqJxQO4iDIm5SD7ZSZFa9wL7QTtLfIGvV83kcLhuLORmSelFt2x2BuzsDtRbX10rzz2lPDj8t/VS7OjrE2twxVh2EX+FdJ7652QcfBg8YVfCyQVmygL+ZNDANy+U2N++g86zcvM5bIXJzpXmdFEcZkILKg1C3UL391OiiAqTHgVyQ0ix2F7vfXwG0GpEWgVUqSilAoCgUUUC0lF6KAooooGkU0pUlFBF6Y7qcFAp1FAWpaL0l6BelFF6S9AtFOR0VXDIHZgNjXI2nvsOvzptAtFJek3CgWikvRuFA0rTClS3FJcUERiFMaEVY0oNqCmYfCrkr4smJDDHirFkIbzZAJvIALDy9B402wo2igYqWqS1qLUtqDb47hsdMMc3y0yrgow240ZDTTNfRALi1/wCFZmVmvkD0UHpYiyPJDjKSVTf4nU6Cq5APy6UACgdRTN4o3igfRUe8UGQUElF6hMgpDKKCa9FxVczCk9YUFm4ouKreuKPWFBZvRuqqZx3031x30FwtTGNVfuB30hyB30ErGxuDYjoR1qaTleQlg+1kyHeEa7GNxes18gd9WuK47kObnXH42MSuzbNXVbaXJsTewHUgUArC9zU6mur532fF7N4nG5PknOVPkSLEMdXWMK+0udSpcjTst41yDZKSvujQRJ/KgJNh4lidaCyoJvbW2ppVZkYMhKsOhBsRUCyCnbxQSX7aDYVEZBTGmAoJt1JvFVWyAO2oWygO2gv7xSep41nHLA6mk+7HfQaXqCj1KzPvB30feDvoNP1B30eoKzDljvppzV7xQaZlFJ6wrKOZchRqT0A6mr2NxPP5u04vGZUiubK3pMqk23W3MAOygm9cd9HrCttv2194rinKEUDMF3fbrL/V17LFQt/96sGTgvc0DbJuHzVYG1vQkOo8VBFBJ6oo9UVQmTPxVL5WLPAi6M0sToAToLllAqscyxsdD3HrrQa5mFMM476t8V7S9z85inL47DLRq/pkSn0W6X3D1tgZf9JNW8j9uve0MgjGAs113+pFNGUH+UlmXzUGT9wO+j1x310sP7Ve55cGDKebHx55WIlxJmbdGL2B3xiRWv1tUGX+2XuzHUNjCDM67xHJsK2On/GCXuNdKDB9cd9L64rTxv2/935EEkzYqY5jvaGaQB3t+kJvH4kVQT2l7xkdUXhcob/pZk2r8SzEAfOgi9cd9L64760Z/YHveDHTI/tbTK//AC4ZI5JF/wBSK16tH9sveyoHbGgUkA+mcmMMLi+oJoMUTClEwq5N7G96QXvxbyBerRSROPyesHI+8wpBFmQSQSEbgkqMhIvbcNw1HiKDUEgp4e9YyZo0uetWY8kHtoNIEUtVUmBqYSCgo/dDvpPuh316i37Qe3iSV5LNUdg/pH/wUz/2f4L/AP1cz/5Yv/xoPMDljvphyx316tF+0vtyOwlyMvJHaxlWI/gkTfxrUm9hex4kUPxyqEABdnl1/wBTKwoPEvvATtU3buGpp0bZM7bYIZZWHVY0Zj+Cg17viycRxIEHHYOLCiCyvEgUn/e+r8TVk8/Je6WQnrs0vbvoPEY/bfuudQ8XDZjKdQfRYf8A3AVoY/7f+9cnH+5XjTGLkelNIkcmnbtdh1r1v+8trY7Sbm9r6mmf3EsdzSuT2W0AoPJT7C97C/8A+rY27BLCf/7KzOQ4D3JxUfq5/HTQxk2DWDg/D0yxr2370k6sSPGpRyO07lchrWJv2UHhnCcc3K50eLlvNhQyafcDHklG64AWw2jW/aa7qf8AaKT0GbG5yNp1NtksJVevaVdm6eFdu/JSMCPVNvA0w8lHYA3Yjpp/3UHnh/aXn2DCHk8KRl12H1V/MpWRL+3PvGPJXHOPCyMxX7hZkMYA/mb+YD/dr1huRlI8jkdwP/wqr97k2ImlLt2bdB8xQchwXsDL4vkY8jlFwOVxTYSY0rFSuureZD9PWwbWvQcfj+Ewc2TksfHx4Z3VUMqotwi3so7vlVSPOxmH9ckEdhAIP4C9Sw5mKWsDGP0gA3/FhQcd+7GdDPw+JueQSRZJbFXa2xo2UrIx7BbSxNeVw5gI0N6+lY8gFbaMp6jqDWXne3vaWY5kzOGxZpW+plRI2J8SpSg8JXLHfT/ux316hL+23t3KlcjHbDUi6iDJJCj4S+pU3/t17A2CD1MlpV6zCckk+Nl2flQeTNljvqXBxeT5eb7fisSXMlIJ2wqW0HUk9BXrMPs32jx6D0cOPIkTo+UryEnxDPt/KtXGmGPCIMVBBEuohhRY0HjtQWoOB4/9qPcWZjx5HIZMHHb7lsdw0syr2ErH5bnu3V0fH/tP7egT/wDa5mRmSkH6CIEF+nlXc3/1VtnkcwtYO1j36fnR9xksNdjnxbWghw/Y3svjMuLKgwvUlhO5DkSvKt+8xsdrfOlm9jeyJpDIeJQMxLERySqtyb/SHAtUzZLKoLq3iNCKacxL3U7bdQKCMeyPZisjrxECMrXG5pGBt2FWkIPzqTI9le0Mgl24jGDMSSU3RjXwjZQKY3IoAANT40DlV7VNBTj/AG/9pRyFjxaOO55piPkN9bH9l9vR4z4sXE4axNH6ZT0lAZetmIFzr43qr/do+tjTW5NHFtaC9xPB+3uFlfK4vjocbIlAEjpc2t+neW2/KtR+S6hj101Ncucw9F0FJ96/6tO4UG+/MJH5Vt8L1Xk5ycEmNDfs2tWT91CfrhVj304ZkS/RGo/Ggu4vI5000r5cYaJlCxpNZlGt91tanmx+Iy8yLOyMLHlzIR/SyXiUyL8DbTwrL+7U/wAoHzNNOWB0/Kg6ZswW8737qrS5wAurVz7ZDt0v8TSEyP1Y/jQbX90YHzG4/CpByaSAqoJPw0rBCgddfGnhwP59vwoNuK571q4k/prYsSPGudGYi6bibeJqNsvf/OfzoOil5REBBPwqic/1nBN/C9ZDTMPp3nxPSgS5HjY9ooOkh5B0FgoFqkPIM5DuqMw6bgDp3C9cwJZ++1SDJdRrc/AXoN+aHic1dmdgY0ynXbJFGwBPaLjQ1ynOe0fYUcj8hlR/YQgAyCBjHEANL2vtUm/Ttqyc2ZPMibiD0Ygf41Ty+F4r3ZjHH5bIIQMHWGNtpVlH1qfn3UHnHN5HtBdfbs2UzAgFJrGO3awZlDVlLljvr2OD9s/ZCRqrYTyEC28zygn/ADeVgL03I/av2bMtoVysVr/VHOW+VpQ4oNITZd7nLYDuAXT8Vp5yMux2ZWvZvUNb8AKKKBrTZrxlJJo2J7Qrp/8Aa1VhBL3p8QZP/E1FFA0407MP6iBe0ak05sU6WN/jY0UUCfbt0BW3j1/KlEMym5ZD4BSP8TRRQKwm6BvwFNCynQn8Qf8AZRRQKIe15Cfl0p3pL/5rH/UKKKBrRX09TT/RUf2iudZGI7h5aKKBPsQOl/mxpv2cuovp8/8AGiigfHjSRghWOvUbjapIsdk6KNevmP8AjRRQWQNArKCO6gwQt1jHy0/hRRQHoIB5UF/Ek/41G0BJveiiga2Ox0FvHWozisTo1j33/wBtFFAxsB2NzKab/b27XB/GiigT7B+wg/jSfZSDsB+dFFAfZyjoB+IpftZu4fjRRQH2s3eKPtZfCiigb9nJ2kflSjFk8PxoooHDHbw/Gl+3bvFFFAv2z/r/ADpPtW/X+dFFAn2h/XakOI36qKKBDhN+r8DSriyL0P50UUDhFKOtz86UI/6TRRQOCd4Ip+xT2EfGiigX0Yj9Sg/GmNhwMdwOxul1t0+d6KKBkWF6F/SyJV69HsNfDpVpGyU6ZbnwY3oooP/Z"),t=new ca(3,64,48),e=new Wr({color:16777215,emissive:0,roughness:1,metalness:1,map:s});window.globe=new ne(t,e),window.globe.rotation.z=Math.PI,window.globe.rotation.y=1.5,scene.add(globe);var n=new Ni(16777215,3.33,0);n.position.set(150,-150,1500),scene.add(n);var i=new Ni(16777215,2,0);i.position.set(-125,100,-500),scene.add(i),camera.position.z=345,document.body.appendChild(renderer.domElement),window.gl=window.renderer.context,window.pixels=new Uint8Array(gl.drawingBufferWidth*gl.drawingBufferHeight*4),Ql()}document.addEventListener("DOMContentLoaded",ux);window.outputEl=document.getElementById("output");window.ASCII="   ·—+=##";function Ql(){if(requestAnimationFrame(Ql),!(window.scrollY/window.innerHeight<4)){window.globe.rotation.y-=.01,window.renderer.render(window.scene,window.camera),window.gl.readPixels(0,0,window.WIDTH,window.HEIGHT,gl.RGBA,gl.UNSIGNED_BYTE,pixels);var s=fx(window.pixels).map(px).join("");s=s.split(`
`).map(dx).join(`
`),window.outputEl.innerHTML=s}}function dx(s){return s.split("").reverse().join("")}function fx(s){for(var t=s.length,e=[],n=0;n<t;n+=4)e.push(Math.floor((s[n]+s[n+1]+s[n+2])/768*window.ASCII.length));return e}function px(s,t){var e="";return t!==0&&t%window.WIDTH===0&&(e=`
`),e+window.ASCII[s]}
