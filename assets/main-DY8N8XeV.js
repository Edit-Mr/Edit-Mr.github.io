import"./style-BrMUJpVC.js";import{M as z,S as q,C as W,P as M,a as v,b as B,D as H,c as I,W as P,A as k,d as T}from"./earth-D9Zp3Hdj.js";const F=new T;let b=!0;const r=new z,l=new q;l.background=new W(0,0,0);const S=new M(16777215,1,0,0);S.position.set(100,100,400);l.add(S);const L=new M(16777215,.5,0,0);L.position.set(-500,100,-400);l.add(L);const R=new v,u=new B;u.flatShading=!0;u.side=H;const y={width:window.innerWidth,height:window.innerHeight},i=new I(45,y.width/y.height,.1,2e3),C=new P;let a,Y=" .:-+*=%@#";const D={amount:.205};let G="white";function j(){a=new k(C,Y,{invert:!0,resolution:D.amount}),a.setSize(y.width,y.height),a.domElement.style.color=G,a.domElement.classList.add("asciiBox")}j();document.body.appendChild(a.domElement);document.getElementById("ascii").style.whiteSpace="prewrap";const K=()=>{R.load("/img/EM.stl",function(p){r.material=u,r.geometry=p;var o=new z(p,u);r.position.copy=o.position,p.computeVertexNormals(),r.geometry.center(),r.rotation.x=-90*Math.PI/180,r.geometry.computeBoundingBox();var n=r.geometry.boundingBox;r.position.y=(n.max.z-n.min.z)/5,i.position.x=n.max.x*4,i.position.y=n.max.y,i.position.z=n.max.z*3,l.add(r);function e(){if(b==!0){const c=F.getElapsedTime();r.rotation.z=c/3,d(),window.requestAnimationFrame(e)}else window.requestAnimationFrame(e)}function d(){a.render(l,i)}e(),E()})};K();const t=[{rx:1.5707953337814393,ry:-9503825893487959e-22,rz:1.2544634559949106,px:-.18851380350171026,py:.003374259693436188,pz:.03300631548899701},{px:-2.1797208198865823,py:.7456858904043902,pz:1.259941607611314,rx:-.10187680375576487,ry:-1.3965809813885177,rz:-.10034508895856986},{px:-1.1034436569318822,py:.7620751528401553,pz:1.9652184488834998,rx:-.029276658833755884,ry:-.18859301653013388,rz:-.005490215016934513},{px:3.6492892876810172,py:1.4758909584810571,pz:4.25,rx:-.2220876074269339,ry:.684948575340779,rz:.14189637418696438},{px:3.6492892876810172,py:1.4758909584810571,pz:4.25,rx:-.2220876074269339,ry:.684948575340779,rz:.14189637418696438}];let m=!0;const w=document.querySelector(".creates");var N=document.querySelector(".create").getBoundingClientRect().height;const V=document.querySelector(".type-do1"),J=document.querySelector(".type-do2"),E=()=>{let o=window.scrollY/window.innerHeight;document.body.style.setProperty("--t",o),document.body.setAttribute("data-section",Math.floor(o+.2));let n=Math.min(o,3.9999999);const e=Math.floor(n);if(n-=e,i.position.x=t[e].px+(t[e+1].px-t[e].px)*n+.2+(window.innerWidth-1536)*4e-4,i.position.y=t[e].py+(t[e+1].py-t[e].py)*n,i.position.z=t[e].pz+(t[e+1].pz-t[e].pz)*n,i.rotation.x=t[e].rx+(t[e+1].rx-t[e].rx)*n,i.rotation.y=t[e].ry+(t[e+1].ry-t[e].ry)*n,i.rotation.z=t[e].rz+(t[e+1].rz-t[e].rz)*n,o<1.7)w.style.opacity=0;else{if(w.style.opacity=1,w.style.top=Math.min(0-Math.min(Math.floor((o-1.9)*5),2)*N,0)+"px",o<2.5&&!m){m=!0;const d=document.querySelectorAll(".number");for(let c of d)c.textContent=0}if(m&&o>2.8){m=!1;const d=document.querySelectorAll(".number");for(let c of d){let g=function(){s<=h?(s+=f/50,setTimeout(g,x),x+=A):s=h,c.textContent=s>=1e3?s>=1e6?(s/1e6).toFixed(1)+"M":(s/1e3).toFixed(1)+"K":Math.floor(s)};const f=c.getAttribute("data-n"),h=f;let s=0,x=10;const A=1;g()}}else o>3.2&&(document.getElementById("alot-o").innerHTML="o".repeat(Math.floor((o-3.2)*20)))}V.classList.toggle("typed",o>4),J.classList.toggle("typed",o>4.3),b=o<4};window.addEventListener("scroll",E);window.addEventListener("resize",O);function O(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight)}
