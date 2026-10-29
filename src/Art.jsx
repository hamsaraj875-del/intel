const T={b:{c:'#27c3ff',p:'url(#pb)'},a:{c:'#ffb03a',p:'url(#pa)'}}
const A=(label)=>label?{role:'img','aria-label':label}:{'aria-hidden':true}
export const Defs=()=>(<svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs>
{[['pb','#7be3ff','#1478ad','#04121d'],['pa','#ffd98a','#c06c1a','#1d0e03']].map(([id,a,b,c])=>(<linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={a}/><stop offset=".3" stopColor={b}/><stop offset="1" stopColor={c}/></linearGradient>))}
<linearGradient id="mt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9aa7bb"/><stop offset=".25" stopColor="#2a3547"/><stop offset=".5" stopColor="#b4c0d2"/><stop offset=".75" stopColor="#1a2230"/><stop offset="1" stopColor="#070a10"/></linearGradient>
<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9cc3e6" stopOpacity=".65"/><stop offset=".5" stopColor="#0b1018"/><stop offset="1" stopColor="#223046"/></linearGradient>
<linearGradient id="hl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".7"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
<linearGradient id="tr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#000"/><stop offset=".5" stopColor="#222b39"/><stop offset="1" stopColor="#000"/></linearGradient>
<filter id="gb"><feGaussianBlur stdDeviation="3.5"/></filter><filter id="gs"><feGaussianBlur stdDeviation="1"/></filter>
</defs></svg>)

const F1=({t,c})=>(<>
<rect x="58" y="1" width="84" height="11" rx="2" fill="url(#mt)"/><rect x="58" y="1" width="84" height="4" fill="url(#hl)" opacity=".5"/><rect x="56" y="0" width="6" height="17" rx="1" fill={t.p}/><rect x="138" y="0" width="6" height="17" rx="1" fill={t.p}/>
{[26,146].map(x=>(<g key={x}><rect x={x} y="43" width="28" height="46" rx="8" fill="url(#tr)"/><path d={`M${x+4} 52h20M${x+4} 60h20M${x+4} 68h20M${x+4} 76h20`} stroke="#222c3a" strokeWidth="2"/><rect x={x+8} y="49" width="12" height="34" rx="4" fill="#0a0e15" stroke={c} strokeWidth="1"/><rect x={x+2} y="45" width="5" height="40" rx="2" fill="url(#hl)" opacity=".25"/></g>))}
<path d="M54 56L88 50M54 76L88 71M146 56L112 50M146 76L112 71" stroke="#8a97ab" strokeWidth="1.8"/>
<path d="M60 52L88 42V80H60ZM140 52L112 42V80H140Z" fill={t.p} stroke="#0a0e15" strokeWidth=".8"/><path d="M60 52L88 42V50L62 58ZM140 52L112 42V50L138 58Z" fill="url(#hl)" opacity=".55"/>
<rect x="64" y="59" width="18" height="11" rx="3" fill="#04060a"/><rect x="118" y="59" width="18" height="11" rx="3" fill="#04060a"/>
<path d="M92 15h16l8 47 6 18H78l6-18z" fill={t.p} stroke="#0a0e15" strokeWidth=".8"/><path d="M92 15h5l-4 47-4 18H78l6-18z" fill="url(#hl)" opacity=".5"/><path d="M100 17V79" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5"/>
<path d="M83 43Q100 14 117 43" fill="none" stroke="url(#mt)" strokeWidth="4"/><ellipse cx="100" cy="38" rx="6.5" ry="7" fill="#e9eef6"/><path d="M95 37h10v3H95z" fill="#0b1018"/>
<rect x="12" y="86" width="176" height="7" rx="2" fill="#07090e"/><rect x="14" y="82" width="172" height="5" rx="2" fill="url(#mt)"/><rect x="18" y="81" width="164" height="2" fill="url(#hl)"/><rect x="5" y="64" width="7" height="29" rx="2" fill={t.p}/><rect x="188" y="64" width="7" height="29" rx="2" fill={t.p}/>
<rect className="lt" x="90" y="27" width="20" height="3" rx="1.5" fill={c}/></>)
const RC=({t,c})=>(<>
<rect x="20" y="72" width="26" height="20" rx="5" fill="url(#tr)"/><rect x="154" y="72" width="26" height="20" rx="5" fill="url(#tr)"/>
<path d="M16 82V68Q16 54 42 47L60 27Q100 16 140 27L158 47Q184 54 184 68V82Z" fill={t.p} stroke="#0a0e15" strokeWidth=".8"/><path d="M60 27Q100 16 140 27L158 47Q100 36 42 47Z" fill="url(#hl)" opacity=".45"/>
<path d="M66 32Q100 25 134 32L148 47H52Z" fill="url(#gl)" stroke="#0a0e15"/><path d="M70 34L96 31L80 46H58Z" fill="#fff" opacity=".14"/><path d="M100 28V47" stroke="#0a0e15"/>
<path d="M18 66Q16 56 42 49L48 47M182 66Q184 56 158 49L152 47" fill="none" stroke="#fff" strokeOpacity=".35"/>
<rect x="74" y="59" width="52" height="15" rx="4" fill="#05070b"/><path d="M78 63h44M78 67h44M78 71h44" stroke="#2a3547"/>
<path d="M24 61Q42 54 60 62Q44 71 24 66ZM176 61Q158 54 140 62Q156 71 176 66Z" fill="#04060a"/>
<path className="lt" d="M28 61Q42 56 56 62M172 61Q158 56 144 62" stroke={c} strokeWidth="2.6" fill="none" strokeLinecap="round"/><ellipse className="lt" cx="42" cy="65" rx="7" ry="2.6" fill={c}/><ellipse className="lt" cx="158" cy="65" rx="7" ry="2.6" fill={c}/>
<rect x="30" y="75" width="140" height="5" rx="2.5" fill="url(#mt)"/><rect x="8" y="52" width="10" height="7" rx="3" fill="url(#mt)"/><rect x="182" y="52" width="10" height="7" rx="3" fill="url(#mt)"/></>)
export function Car({kind,label,className}){
  const f=kind==='f1',t=T[f?'b':'a'],c=t.c
  return <svg viewBox="0 0 200 100" className={className} {...A(label)}>
    <ellipse cx="100" cy="95" rx="94" ry="5" fill="#000" opacity=".6" filter="url(#gs)"/><ellipse cx="100" cy="94" rx="72" ry="3" fill={c} opacity=".45" filter="url(#gb)"/>
    <g className="idle">{f?<F1 t={t} c={c}/>:<RC t={t} c={c}/>}</g></svg>
}

const base=(<><ellipse cx="100" cy="113" rx="84" ry="5" fill="#000" opacity=".5"/><rect x="46" y="100" width="108" height="9" rx="3" fill="url(#mt)"/></>)
const Bank=({s,c})=>(<g transform={`translate(100 72) rotate(${s*30})`}><rect x="-19" y="-64" width="38" height="76" rx="6" fill="url(#mt)" stroke="#0a0e15"/><rect x="-19" y="-64" width="9" height="76" rx="4" fill="url(#hl)" opacity=".35"/>
{[-50,-28].map((y,i)=>(<g key={y}><rect x="-12" y={y} width="24" height="20" rx="3" fill="#04060a"/><rect className="pis" style={{animationDelay:`${-(i*.35+(s>0?.17:0))}s`}} x="-10" y={y+5} width="20" height="10" rx="2" fill="#b4c0d2" stroke={c}/></g>))}
<rect x="-12" y="-8" width="24" height="12" rx="3" fill="#0a0e15" stroke={c} strokeWidth=".8"/></g>)
export function Engine({kind,label,...p}){
  const f=kind==='f1',c=f?T.b.c:T.a.c
  return <svg viewBox="0 0 200 120" {...A(label)} {...p}>{base}
    <circle className="lt" cx="100" cy="72" r="50" fill={c} opacity=".2" filter="url(#gb)"/>
    {f?<><Bank s={-1} c={c}/><Bank s={1} c={c}/><path d="M82 30v-14M90 26v-16M110 26v-16M118 30v-14M70 22Q100 6 130 22" fill="none" stroke={c} strokeWidth="1.8"/>
    <circle cx="100" cy="72" r="21" fill="url(#mt)" stroke="#0a0e15"/><circle cx="100" cy="72" r="15" fill="#04060a"/><g className="spin">{[0,45,90,135].map(a=><rect key={a} x="97" y="58" width="6" height="28" rx="2" fill={c} opacity=".85" transform={`rotate(${a} 100 72)`}/>)}</g><circle cx="100" cy="72" r="4" fill="#e9eef6"/>
    <path d="M60 84Q40 96 28 108M140 84Q160 96 172 108" fill="none" stroke="#aab6c8" strokeWidth="5" strokeLinecap="round"/></>
    :<><rect x="20" y="30" width="160" height="66" rx="10" fill="url(#mt)" stroke="#0a0e15"/><rect x="22" y="31" width="156" height="12" rx="6" fill="url(#hl)" opacity=".4"/><rect x="34" y="40" width="132" height="14" rx="4" fill="#04060a" stroke="#44516a"/><rect className="lt" x="42" y="45" width="116" height="3" rx="1.5" fill={c}/>
    {[44,76,108,140].map((x,i)=>(<g key={x}><rect x={x-12} y="58" width="24" height="32" rx="4" fill="#04060a"/><rect className="pis" style={{animationDelay:`${-i*.18}s`}} x={x-10} y="66" width="20" height="16" rx="3" fill="#b4c0d2" stroke={c}/><rect x={x-4} y="56" width="8" height="6" fill="#44516a"/></g>))}
    <path d="M30 30Q30 12 60 12H140Q170 12 170 30" fill="none" stroke="#aab6c8" strokeWidth="5" strokeLinecap="round"/>
    <g className="spin"><circle cx="176" cy="24" r="10" fill="url(#mt)" stroke={c}/><path d="M176 15v18M167 24h18" stroke={c} strokeWidth="2"/></g><g className="spin"><circle cx="24" cy="24" r="10" fill="url(#mt)" stroke={c}/><path d="M24 15v18M15 24h18" stroke={c} strokeWidth="2"/></g></>}
  </svg>
}

export function Chip({tone,...p}){
  const c=T[tone].c
  return <svg viewBox="0 0 100 100" aria-hidden="true" {...p}>
    <circle className="ring" cx="50" cy="50" r="30" fill="none" stroke={c}/><circle className="ring" style={{animationDelay:'-1.2s'}} cx="50" cy="50" r="30" fill="none" stroke={c}/>
    <rect x="20" y="20" width="60" height="60" rx="9" fill="url(#mt)" stroke={c} strokeWidth="1.6"/><rect x="30" y="30" width="40" height="40" rx="4" fill="#04060a" stroke={c} strokeWidth=".8"/>
    {[0,1,2].flatMap(r=>[0,1,2].map(k=><rect key={r+'-'+k} className="cell" style={{animationDelay:`${-(r*3+k)*.22}s`,fill:c}} x={33+k*12} y={33+r*12} width="10" height="10" rx="2"/>))}
    <path className="tr" d="M20 40H8M20 50H8M20 60H8M80 40h12M80 50h12M80 60h12M40 20V8M50 20V8M60 20V8M40 80v12M50 80v12M60 80v12" stroke={c}/></svg>
}
export function Laptop({tone,...p}){
  const c=T[tone].c
  return <svg viewBox="0 0 160 100" aria-hidden="true" {...p}>
    <rect x="24" y="8" width="112" height="70" rx="6" fill="#06090e" stroke="#44516a" strokeWidth="2"/><rect x="30" y="14" width="100" height="58" rx="2" fill="url(#gl)" opacity=".3"/>
    {tone==='b'?<><rect className="lt" x="34" y="18" width="44" height="24" rx="3" fill={c} opacity=".3"/><rect x="84" y="18" width="40" height="5" rx="2" fill={c} opacity=".5"/><rect x="84" y="27" width="30" height="5" rx="2" fill={c} opacity=".35"/>
    {[[34,48,60],[34,56,42],[34,64,76]].map(([x,y,w])=><rect key={y} x={x} y={y} width={w} height="5" rx="2" fill={c} opacity=".6"/>)}<rect className="play" x="34" y="45" width="2" height="26" fill="#fff"/></>
    :<>{[20,28,36,44].map((y,i)=><rect key={y} className="type" style={{animationDelay:`${-i*.6}s`}} x="34" y={y} width={[52,44,56,34][i]} height="4" rx="2" fill={c} opacity=".65"/>)}
    <circle className="lt" cx="108" cy="28" r="9" fill={c} opacity=".5"/><circle className="lt" style={{animationDelay:'-1.2s'}} cx="108" cy="52" r="9" fill={c} opacity=".5"/><rect x="34" y="58" width="50" height="8" rx="3" fill="none" stroke={c} opacity=".6"/></>}
    <path d="M6 82h148l-8 10H14z" fill="url(#mt)" stroke="#44516a"/><path d="M60 86h40" stroke="#6b7a92" strokeWidth="2"/></svg>
}
