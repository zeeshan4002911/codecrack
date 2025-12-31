let t=null;function n(e,r){postMessage({type:e,value:r})}const c={log:(...e)=>n("output",e.join(" ")),error:(...e)=>n("output","[error] "+e.join(" "))};function p(e){return n("output",e),n("input-request"),new Promise(r=>{t=r})}onmessage=async e=>{const{type:r,code:s,value:a}=e.data;if(r==="input"&&t){t(a),t=null;return}if(r==="run"){const u=performance.now();try{await new Function("console","readLine",`
                (async () => {
                    try {
                        ${s}
                    } catch (err) {
                        postMessage({ type: 'error', value: err.toString() });
                    }
                })();
                `)(c,p);const i=performance.now();n("done",(i-u).toFixed(2))}catch(o){n("error",o.toString())}}};n("ready");
