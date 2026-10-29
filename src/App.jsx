import {useEffect,useRef,useState} from 'react'
import {AnimatePresence,motion,useReducedMotion,useScroll,useSpring,useTransform} from 'framer-motion'
import {ChevronDown,RotateCcw,Undo2} from 'lucide-react'
import {Defs,Car,Engine,Chip,Laptop} from './Art'

const ease=[.2,.7,.2,1]
const rise=(rm,d=0)=>rm?{}:{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.25},transition:{duration:.9,delay:d,ease}}

function Dot({i,sy}){
  const y=useTransform(sy,[0,1],[0,-(.15+(i%7)*.12)*900])
  return <motion.i className={'dot '+(i%2?'a':'b')} style={{left:`${(i*37)%100}%`,top:`${(i*53)%100}%`,y,width:2+i%3,height:2+i%3}}/>
}
function Particles(){
  const {scrollYProgress}=useScroll()
  return <div className="particles" aria-hidden="true">{Array.from({length:40},(_,i)=><Dot key={i} i={i} sy={scrollYProgress}/>)}</div>
}
function Chrome(){
  const {scrollYProgress}=useScroll(),sx=useSpring(scrollYProgress,{stiffness:120,damping:30}),[cur,setCur]=useState(0)
  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setCur(+e.target.dataset.i)),{threshold:.2})
    document.querySelectorAll('main>section').forEach((s,i)=>{s.dataset.i=i;io.observe(s)})
    return()=>io.disconnect()
  },[])
  return <><motion.div id="bar" style={{scaleX:sx}} aria-hidden="true"/><nav aria-label="Story sections">
    {['The hook','Under the hood','The processor reveal','Two driving styles','Which road is yours','The final reveal'].map((l,i)=><a key={l} href={'#s'+(i+1)} aria-label={l} aria-current={cur===i}/>)}
  </nav></>
}

function Hero(){
  const rm=useReducedMotion(),{scrollY}=useScroll()
  const l=useTransform(scrollY,[0,700],[0,-60]),r=useTransform(scrollY,[0,700],[0,60]),y=useTransform(scrollY,[0,700],[0,-50]),op=useTransform(scrollY,[0,500],[1,.2])
  const w=d=>rm?{}:{initial:{opacity:0,y:50,clipPath:'inset(0 0 100% 0)'},animate:{opacity:1,y:0,clipPath:'inset(0 0 0% 0)'},transition:{duration:1,delay:d,ease}}
  const car=d=>rm?{}:{initial:{opacity:0,y:90,scale:.9,filter:'brightness(.2)'},animate:{opacity:1,y:0,scale:1,filter:'brightness(1)'},transition:{duration:1.5,delay:d,ease}}
  const beam=d=>rm?{}:{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.8,delay:d+.8}}
  return <section id="s1" className="hero"><div className="glow"/>
    <motion.div style={{opacity:op}}>
      <h1 className="big"><motion.span {...w(0)}>Two engines.</motion.span><motion.span {...w(.15)}>Two missions.</motion.span><motion.span className="gb" {...w(.3)}>Your kind of power.</motion.span></h1>
      <motion.p className="sub" {...w(.7)}>Two Intel processor families. Different computing priorities. One choice that starts with you.</motion.p>
    </motion.div>
    <motion.div className="cars" style={{y}}>
      <motion.figure className="b" style={{x:l}}><motion.div className="carw" {...car(.1)}><motion.div className="beam" {...beam(.1)}/><Car kind="f1" label="F1-inspired racing car with electric-blue lighting"/></motion.div><figcaption><b>Intel Core Ultra Series 3</b><span>Panther Lake</span></figcaption></motion.figure>
      <motion.figure className="a" style={{x:r}}><motion.div className="carw" {...car(.4)}><motion.div className="beam" {...beam(.4)}/><Car kind="rc" label="Refined everyday road car with warm amber lighting"/></motion.div><figcaption><b>Intel Core Series 3</b><span>Wildcat Lake</span></figcaption></motion.figure>
    </motion.div>
    <motion.a className="scroll" href="#s2" {...w(1.1)}>Discover your driving style<ChevronDown size={20} aria-hidden="true"/></motion.a>
  </section>
}

function Hood(){
  const ref=useRef(null),rm=useReducedMotion(),[narrow,setN]=useState(false)
  useEffect(()=>{const f=()=>setN(innerWidth<=720||innerHeight<=520);f();addEventListener('resize',f);return()=>removeEventListener('resize',f)},[])
  const flat=rm||narrow,{scrollYProgress:p}=useScroll({target:ref,offset:['start start','end end']})
  const z=useTransform(p,[0,.35],[1,2.4]),co=useTransform(p,[0,.3],[1,0]),eo=useTransform(p,[.2,.42],[0,1]),ez=useTransform(p,[.4,1],[.85,1.2]),hd=useTransform(p,[.28,.65],[0,85]),ho=useTransform(p,[.5,.68],[1,0]),tx=useTransform(p,[.72,.92],[0,1]),ty=useTransform(tx,[0,1],[30,0]),sl=useTransform(p,[0,.3],[0,1]),gx=useTransform(p,[0,1],['20%','-45%'])
  const S=(on,off)=>flat?off:on
  return <section id="s2" ref={ref} className={flat?'flat':''} aria-label="Under the hood"><div className="stage">
    <motion.div className="ghost" aria-hidden="true" style={{x:S(gx,'0%')}}>Engine → Processor</motion.div>
    <motion.div className="line" style={{opacity:S(eo,1),y:S(ty,0)}}>The engine is the metaphor. <span className="gb">The processor is the real story.</span></motion.div>
    <div className="pair">{[['b','f1','f1','F1-inspired'],['a','rc','rc','road-car']].map(([c,car,eng,l])=>(
      <div className={'sc '+c} key={c}>
        <motion.div className="streaks" style={{opacity:S(sl,0)}}/>
        <motion.div className="carL" style={{scale:S(z,1),opacity:S(co,0)}}><Car kind={car}/></motion.div>
        <motion.div className="engL" style={{opacity:S(eo,1),scale:S(ez,1)}}><Engine kind={eng} label={'Stylised '+l+' engine'}/><motion.div className="hood" style={{rotateX:S(hd,85),opacity:S(ho,0),transformPerspective:600}}/></motion.div>
      </div>))}</div>
    <motion.div className="cmp" style={{opacity:S(tx,1),y:S(ty,0)}}>
      <div className="b"><h3>CORE ULTRA SERIES 3</h3><p>Built for more demanding computing ambitions.</p><p>Creation · Gaming · Productivity · AI</p></div>
      <div className="a"><h3>CORE SERIES 3</h3><p>Built for modern everyday computing.</p><p>Everyday tasks · Right-sized AI · Price-sensitive laptops</p></div>
    </motion.div>
  </div></section>
}

function Chain({c,eng,name,code,desc,from}){
  const rm=useReducedMotion()
  const fx=rm?{}:{initial:{opacity:0,x:from},whileInView:{opacity:1,x:0},viewport:{once:true,amount:.3},transition:{duration:1,ease}}
  const draw=d=>rm?{}:{initial:{pathLength:0},whileInView:{pathLength:1},viewport:{once:true},transition:{duration:1.1,delay:d}}
  const pop=d=>({style:{transformBox:'fill-box',transformOrigin:'center'},...(rm?{}:{initial:{opacity:0,scale:.6},whileInView:{opacity:1,scale:1},viewport:{once:true},transition:{duration:.7,delay:d,ease}})})
  return <motion.div className={'side '+c} {...fx}>
    <svg viewBox="0 0 360 130" role="img" aria-label={`Engine metaphor leads to the ${name} chip, then to a laptop`}>
      <motion.g {...pop(.2)}><Engine kind={eng} x="0" y="14" width="100" height="60"/></motion.g>
      <motion.path className="ln2" d="M104 46H140" {...draw(.6)}/>
      <motion.g {...pop(.9)}><Chip tone={c} x="140" y="6" width="80" height="80"/></motion.g>
      <motion.path className="ln2" d="M224 46H252" {...draw(1.3)}/>
      <motion.g {...pop(1.6)}><Laptop tone={c} x="250" y="16" width="110" height="69"/></motion.g>
      {!rm&&<motion.circle r="3" cy="46" fill="var(--c)" animate={{cx:[104,140,224,252],opacity:[0,1,1,0]}} transition={{duration:2.6,repeat:Infinity,delay:2.2}}/>}
      <g fill="#a3afbf" fontSize="11" textAnchor="middle" letterSpacing="1.5"><text x="50" y="112">METAPHOR</text><text x="180" y="112">PROCESSOR</text><text x="305" y="112">LAPTOP</text></g>
    </svg>
    <em>{code}</em><h3>{name}</h3><p>{desc}</p>
  </motion.div>
}
function Reveal(){
  const rm=useReducedMotion()
  return <section id="s3"><div className="wrap">
    <motion.p className="k" {...rise(rm)}>From metaphor to silicon</motion.p>
    <motion.h2 className="big" {...rise(rm,.1)}>Different missions. <span className="gb">Processors inside the laptops you use.</span></motion.h2>
    <div className="two">
      <Chain c="b" eng="f1" name="Intel Core Ultra Series 3" code="Panther Lake" from={-70} desc="Positioned for more demanding creation, gaming, productivity and AI workloads."/>
      <Chain c="a" eng="rc" name="Intel Core Series 3" code="Wildcat Lake" from={70} desc="Brings modern computing and right-sized AI capabilities to more price-sensitive laptops."/>
    </div>
    <motion.div className="found" {...(rm?{}:{initial:{opacity:0,scaleX:.2},whileInView:{opacity:1,scaleX:1},viewport:{once:true},transition:{duration:1.2,delay:.4,ease}})}>Both built on Intel 18A<small>A shared manufacturing foundation, not identical capabilities.</small></motion.div>
    <motion.p className="note" {...rise(rm)}>The engines are visual metaphors only. They do not depict the real architecture of either processor.</motion.p>
  </div></section>
}

function Panel({c,car,kicker,title,desc,tags,bg,route}){
  const ref=useRef(null),rm=useReducedMotion(),{scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']})
  const x=useTransform(p,[0,1],['-40%','40%']),pl=useTransform(p,[.1,.5],[.1,1]),sb=useTransform(p,[0,1],['-6%','6%'])
  return <motion.article ref={ref} className={'pn '+c} tabIndex={0} aria-label={title+', '+kicker} whileHover={rm?{}:{y:-6}} {...rise(rm)}>
    <div className="sc4"><motion.div className="sbg" style={{x:rm?0:sb}}><svg viewBox="0 0 400 200" aria-hidden="true"><rect width="400" height="200" fill="#0a0f16"/>{bg}<motion.path className="route2" d={route} style={{pathLength:rm?1:pl}}/></svg></motion.div>
      <motion.div className="pcar" style={{x:rm?0:x}}><Car kind={car} label={title+' vehicle'}/></motion.div></div>
    <div className="pb"><p className="k" style={{color:'var(--c)'}}>{kicker}</p><h3>{title}</h3><p>{desc}</p><ul className="chips">{tags.map(t=><li key={t}>{t}</li>)}</ul></div>
  </motion.article>
}
function Styles(){
  const rm=useReducedMotion()
  return <section id="s4"><div className="wrap">
    <motion.p className="k" {...rise(rm)}>Two driving styles</motion.p>
    <motion.h2 className="big" {...rise(rm,.1)}>Pick the <span className="gb">route</span>, not the winner.</motion.h2>
    <div className="two">
      <Panel c="b" car="f1" kicker="The high-ambition route" title="Core Ultra Series 3" desc="For people who want computing capabilities suited to more demanding work and play." tags={['Creation','Gaming','Productivity','AI workloads']} route="M-10 170C80 170 90 70 190 80S330 150 410 60" bg={<path d="M-10 170C80 170 90 70 190 80S330 150 410 60" fill="none" stroke="#1b2432" strokeWidth="30"/>}/>
      <Panel c="a" car="rc" kicker="The everyday route" title="Core Series 3" desc="For people who want modern computing and right-sized AI capabilities in more price-sensitive laptops." tags={['Everyday computing','Essential productivity','Right-sized AI capabilities','Price-conscious laptop choices']} route="M-10 176C120 160 260 192 410 166" bg={<><path d="M0 120h30V80h28v40h20V60h34v60h26V90h30v30h24V70h30v50h30V95h28v25h40V85h30v35z" fill="#111a26"/><path d="M12 100h370M45 78h300" stroke="#ffb03a" strokeOpacity=".5" strokeWidth="3" strokeDasharray="2 9"/><path d="M0 200V150Q200 128 400 150V200Z" fill="#141b26"/></>}/>
    </div>
    <motion.p className="note" {...rise(rm)}>Use-case illustrations only. They are not a guarantee that every workload or feature is supported on every laptop.</motion.p>
  </div></section>
}

const TXT={1:'Explore Intel Core Ultra Series 3 — designed for more demanding computing ambitions.',2:'Explore Intel Core Series 3 — designed to bring modern computing and right-sized AI capabilities to more price-sensitive laptops.'}
function Selector(){
  const rm=useReducedMotion(),[k,setK]=useState(0),first=useRef(null)
  const opt=(n,c,t)=><button className={'opt '+c} aria-pressed={k===n} onClick={()=>setK(n)} ref={n===1?first:null}>{t}</button>
  return <section id="s5"><motion.p className="k" {...rise(rm)}>Which road is yours?</motion.p>
    <motion.h2 className="big" {...rise(rm,.1)}>What does your <span className="gb">day demand?</span></motion.h2>
    <p id="q" style={{color:'var(--mu)',margin:'18px 0 0'}}>What matters most in your laptop experience?</p>
    <motion.div className="opts" role="group" aria-labelledby="q" {...rise(rm,.2)}>
      {opt(1,'b','More demanding creation, gaming, productivity, and AI workloads.')}{opt(2,'a','Modern everyday computing and a more price-sensitive laptop choice.')}
    </motion.div>
    <div className="fams">{[['b','Intel Core Ultra Series 3','Panther Lake',1],['a','Intel Core Series 3','Wildcat Lake',2]].map(([c,n,s,i])=>
      <motion.div key={i} className={'fam '+c} animate={{opacity:!k||k===i?1:.25,scale:k===i?1.05:1}}>{n}<small>{s}</small></motion.div>)}</div>
    <div id="res" aria-live="polite"><AnimatePresence mode="wait">{k>0&&<motion.p key={k} style={{color:k===1?'var(--b)':'var(--a)',margin:0}} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0}}>{TXT[k]}</motion.p>}</AnimatePresence></div>
    {k>0&&<button className="btn" onClick={()=>{setK(0);first.current?.focus()}}><Undo2 size={14} aria-hidden="true" style={{verticalAlign:'-2px'}}/> Switch choice</button>}
    <p className="note">An educational guide, not a benchmark or a definitive recommendation. Nothing you choose is stored or sent anywhere.</p>
  </section>
}

function Finale({onReplay}){
  const ref=useRef(null),rm=useReducedMotion(),{scrollYProgress:p}=useScroll({target:ref,offset:['start end','center center']})
  const x1=useTransform(p,[0,1],['0%','135%']),x2=useTransform(p,[0,1],['0%','-135%']),y=useTransform(p,[0,1],['0%','-180%']),s=useTransform(p,[0,1],[1,.5]),dr=useTransform(p,[0,.8],[0,1]),sun=useTransform(p,[0,1],[.6,1.15])
  const car=(id,left,x,label)=><motion.div className={'cr '+(id==='f1'?'b':'a')} style={{left,top:'76%',x:rm?0:x,y:rm?0:y,scale:rm?.6:s}}><Car kind={id} label={label}/></motion.div>
  return <section id="s6" ref={ref}>
    <motion.h2 className="big" {...rise(rm)}>Not every journey needs <span className="gb">the same engine.</span></motion.h2>
    <motion.p style={{color:'var(--mu)',fontSize:'1.2rem'}} {...rise(rm,.1)}>Choose the computing experience that fits your ambitions.</motion.p>
    <div className="stagew">
      <svg viewBox="0 0 800 300" role="img" aria-label="Two cars on two different roads leading to the same horizon"><defs><radialGradient id="sun"><stop offset="0" stopColor="#fff" stopOpacity=".9"/><stop offset=".35" stopColor="#27c3ff" stopOpacity=".35"/><stop offset=".7" stopColor="#ffb03a" stopOpacity=".18"/><stop offset="1" stopOpacity="0"/></radialGradient></defs>
        <motion.circle cx="400" cy="112" r="110" fill="url(#sun)" style={{scale:rm?1:sun,transformBox:'fill-box',transformOrigin:'center'}}/>
        <path className="rd" d="M170 290C230 220 340 160 400 114M630 290C570 220 460 160 400 114"/>
        <g className="b"><motion.path className="ln2" d="M170 290C230 220 340 160 400 114" style={{pathLength:rm?1:dr}}/></g><g className="a"><motion.path className="ln2" d="M630 290C570 220 460 160 400 114" style={{pathLength:rm?1:dr}}/></g></svg>
      {car('f1','13.5%',x1,'F1-inspired car on the Core Ultra road')}{car('rc','71.5%',x2,'Everyday car on the Core Series road')}
    </div>
    <motion.div className="names" {...rise(rm)}><span style={{color:'var(--b)'}}>Intel Core Ultra Series 3</span><i>|</i><span style={{color:'var(--a)'}}>Intel Core Series 3</span></motion.div>
    <p style={{fontSize:'1.3rem',fontWeight:700,margin:'0 0 26px'}}>Two missions. Your kind of power.</p>
    <button className="btn finale-replay" onClick={onReplay}><RotateCcw size={12} aria-hidden="true" style={{verticalAlign:'-2px'}}/> Replay the journey</button>
  </section>
}

export default function App(){
  const [k,setK]=useState(0)
  const replay=()=>{window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>setK(n=>n+1),900)}
  return <><Defs/><Particles/><Chrome/><main><Hero key={k}/><Hood/><Reveal/><Styles/><Selector/><Finale onReplay={replay}/></main></>
}
