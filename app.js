
const WHATSAPP = "https://wa.me/919800380248?text=Hello%20Sourav%20with%20a%20V";
const YES_WHATSAPP = "https://wa.me/919800380248?text=Yes%2C%20I%20do%20%F0%9F%8C%BB";
const CONTACT_PHONE = "tel:+919800380248";

const pages = [
  {
    id:"opener",
    title:"1 date with Sourav with a V",
    render: ()=> `
      <div class="page final-center">
        <div class="hero-card final-checkpoint-card">
          <div class="top-carousel">
            <img src="assets/girl2.png" style="object-position:center 8%;" alt="Ananya"/>
          </div>
          <div class="copy-block">
            <div class="native-header">
              <div class="native-pill">Treasure trove unlocked 🌻</div>
              <div class="native-pill">Native app energy</div>
            </div>
            <h1 style="margin-top:12px">Sunday Experience<br/>v1.0</h1>
            <p class="subtle" style="margin-top:10px">A tiny treasure map for Ananya · aka Sunflower.</p>
            <div class="chip-row" style="margin-top:10px">
              <div class="chip">Thoughtful, not over-engineered</div>
              <div class="chip">Three chapters, one memorable Sunday</div>
            </div>
            <p style="margin-top:14px">The need is simple: when the girl is smart, warm, funny, beautiful, and also a fellow product manager, a lazy one-line ask feels wildly under-scoped.</p>
          </div>
        </div>
      </div>
    `,
    cta:"Open the treasure map",
    back:false,
    transition:{title:"Opening the app…", sub:"Let the first chapter feel a little special.", effect:"✨", seconds:6}
  },
  {
    id:"about-her-intro",
    title:"Ananya aka Sunflower",
    render: ()=> `
      <div class="page">
        <div class="hero-card">
          <div class="top-carousel">
            <img src="assets/girl1.png" style="object-position:center 12%;" alt="Ananya"/>
          </div>
          <div class="copy-block">
            <div class="meta-title">About her</div>
            <h2 style="margin-top:8px">Ananya · aka Sunflower</h2>
            <p style="margin-top:12px">Confident in a way that feels calm, not loud. A proper old soul with a 90s kid still alive somewhere in the best way.</p>
            <div class="info-grid" style="margin-top:14px">
              <div class="info-card"><div class="title">The smile</div><div class="body">The kind that can brighten a room without trying too hard.</div></div>
              <div class="info-card"><div class="title">The eyes</div><div class="body">Still a little mysterious. Feels like there are stories there.</div></div>
              <div class="info-card"><div class="title">The vibe</div><div class="body">Feels like the Pam to my Jim in our office story.</div></div>
              <div class="info-card"><div class="title">The comfort</div><div class="body">Talking to her feels like I could go on the whole day and still not run out.</div></div>
            </div>
          </div>
        </div>
      </div>
    `,
    cta:"Continue to About me",
    transition:{title:"Next chapter…", sub:"Moving from the opener to the real story.", effect:"💛", seconds:6}
  },
  {
    id:"about-me",
    title:"About me",
    render: ()=> `
      <div class="page">
        <div class="hero-card">
          <div class="top-carousel">
            <img src="assets/me1.png" style="object-position:center 12%;" alt="Sourav"/>
          </div>
          <div class="copy-block">
            <div class="meta-title">About me</div>
            <h2 style="margin-top:8px">Sourav with a V..</h2>
            <p style="margin-top:12px">Fintech Product Manager at Candescent, Bangalore. Thoughtful, witty, dependable, and the sort of person who genuinely likes the smaller things — petrichor after the first rain, a room that feels calm and tidy, a meal plated with care, the tiny moments that quietly stay with you.</p>
            <p style="margin-top:12px">I cook a genuinely good hilsa and a properly serious chicken biriyani. Football is not a hobby. It is an operating system.</p>
            <div class="info-grid" style="margin-top:14px">
              <div class="info-card"><div class="title">The homeboy upgrade</div><div class="body">I cook a genuinely good hilsa and a properly serious chicken biriyani. And yes, biriyani has alu. Always.</div></div>
              <div class="info-card"><div class="title">Football is not a hobby</div><div class="body">U-19 Mohun Bagan once. Real Madrid and Manchester City forever. I can talk football for alarming lengths of time.</div></div>
              <div class="info-card"><div class="title">The softer stuff</div><div class="body">I paint, I play bass, I travel like a Bengali romantic, and I like interiors that feel cute, calm, and lived-in.</div></div>
              <div class="info-card"><div class="title">Sunday with me</div><div class="body">Chicken curry with alu by me, bhaat by you, fried papad, and Harry Potter once the outside world has done its part.</div></div>
            </div>
          </div>
        </div>
      </div>
    `,
    cta:"Move to next chapter",
    transition:{title:"Stage 1 incoming…", sub:"A soft start. Dogs first.", effect:"🥔", seconds:6}
  },
  {
    id:"stage1",
    title:"Stage 1",
    render: ()=> `
      <div class="page">
        <div class="section-banner"><div class="banner-card"><div class="meta-title">Stage 1</div><h3>Willie’s Pet Paradise · 4:30 PM</h3><div class="small-note" style="margin-top:6px">Because dogs make everything better. And because I know this will make you smile instantly.</div></div></div>
        <div class="hero-card">
          ${carouselHTML(['assets/willies1.png','assets/willies2.png'], ['Willie’s energy','Pet paradise mood'])}
          <div class="copy-block">
            <div class="badge-list"><div class="badge">Warm opener</div><div class="badge">Dog serotonin</div><div class="badge">Zero awkwardness</div></div>
            <p style="margin-top:14px">The warmest way to start: happy dogs, easy smiles, and a setting that makes conversation feel effortless.</p>
            <a class="small-map" href="https://www.google.com/maps/search/?api=1&query=Wille%27s+Pet+Paradise+Sarjapur+Main+Road+Mullur+Bengaluru" target="_blank">Open Willie’s location</a>
          </div>
        </div>
      </div>
    `,
    cta:"Move to next chapter",
    transition:{title:"Little reward unlocked…", sub:"A sack of potatoes and a clean jump into the food chapter.", effect:"🥔", seconds:6}
  },
  {
    id:"stage2",
    title:"Stage 2",
    render: ()=> `
      <div class="page">
        <div class="section-banner"><div class="banner-card"><div class="meta-title">Stage 2</div><h3>Food</h3><div class="small-note" style="margin-top:8px"><strong>Best fit for the timeline: Johnson Market first.</strong> It gives us the safest food window and a cleaner run to Whitefield before the 10 PM screening.</div></div></div>
        <div class="route-grid">
          ${routeCard('Mosque Road / Frazer Town','https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80','The classic Ramzan crowd-energy option','frazer')}
          ${routeCard('Johnson Market','https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/07/MekkahCafe-f.jpg','Safest timeline + iconic food detour','johnson')}
          ${routeCard('Rehmath Nagar','https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1200&q=80','Wildcard route if we feel adventurous','rehmath')}
          ${routeCard('Bilal Masjid Area','https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80','Festive anchor point with evening energy','bilal')}
        </div>
        <div id="routeDetail"></div>
      </div>
    `,
    onEnter: setupRouteCards,
    cta:"Move to next chapter",
    transition:{title:"Blue side of the night…", sub:"Johnson Market done. Now it’s Manchester City vs Arsenal time.", effect:"⚽", seconds:6}
  },
  {
    id:"stage3",
    title:"Stage 3",
    render: ()=> `
      <div class="page">
        <div class="section-banner"><div class="banner-card"><div class="meta-title">Stage 3</div><h3>The Football Finale · 10:00 PM</h3><div class="small-note" style="margin-top:6px">Screening at Underdoggs Whitefield. I’ll bring the Manchester City jersey — so don’t worry, you’ll be blue for a day :P</div></div></div>
        <div class="hero-card">
          ${carouselHTML(['assets/football1.png','assets/football2.png','assets/booking.png'], ['Match-up poster','Second poster','Booking confirmed'])}
          <div class="copy-block">
            <div class="badge-list"><div class="badge">Live screening</div><div class="badge">2 tickets booked</div><div class="badge">Built-in banter</div></div>
            <p style="margin-top:14px">Also, slight warning — I will judge your football opinions just a little.</p>
            <a class="small-map" href="https://www.google.com/maps?q=12.989020,77.733190" target="_blank">Underdoggs Whitefield · Open in Maps</a>
          </div>
        </div>
      </div>
    `,
    cta:"Move to Sunflower",
    transition:{title:"Sunflower burst…", sub:"Full-time on the football chapter. Time for the softer page.", effect:"🌻", seconds:6}
  },
  {
    id:"sunflower",
    title:"Sunflower",
    render: ()=> `
      <div class="page">
        <div class="hero-card">
          <div class="top-carousel">
            <img src="assets/girl5.png" style="object-position:center 18%;" alt="Sunflower reaching"/>
          </div>
          <div class="copy-block">
            <div class="meta-title">Sunflower</div>
            <h2 style="margin-top:8px">Reaching for you</h2>
            <p style="margin-top:12px">Maybe that’s what this is — two people who’ve both seen a little bit of the world, still choosing to build something slowly and intentionally.</p>
            <p style="margin-top:12px">A life in Bangalore, something warm, something ours. A dog running around, a kid someday, a home that feels alive.</p>
            <div class="achievement" style="margin-top:14px">
              <div class="medal">🏸</div>
              <div><strong>Achievement unlocked</strong><br/><span class="small-note">You win the badminton match, the soft old soul award, and at least one promised bouquet of sunflowers.</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
    cta:"I want to know you a little more",
    transition:{title:"Achievement unlocked…", sub:"One last note, one last reward, then the final checkpoint.", effect:"🎉", seconds:6}
  },
  {
    id:"about-her",
    title:"About her",
    render: ()=> `
      <div class="page">
        <div class="question-card story-card">
          <label>Before Sunday…</label>
          <h3 style="margin-bottom:10px">I want to know you a little more</h3>
          <div class="small-note">Tell me about your childhood, your life story, your dreams, and the future you want to build.</div>
        </div>
        <div class="question-card">
          <label>Your childhood</label>
          <textarea id="childhood" placeholder="What is one childhood memory that still stays with you?"></textarea>
        </div>
        <div class="question-card">
          <label>Your story</label>
          <textarea id="story" placeholder="What chapter of life are you in right now?"></textarea>
        </div>
        <div class="question-card">
          <label>Your dreams</label>
          <textarea id="dreams" placeholder="What are you dreaming of building next?"></textarea>
        </div>
        <div class="question-card">
          <label>Pick your little reward</label>
          <div class="reward-tabs">
            <button data-reward="football">Football, obviously</button>
            <button data-reward="sunflowers" class="active">Sunflowers</button>
            <button data-reward="music">Music</button>
          </div>
        </div>
        <div id="rewardBox" class="reward-card reward-box"></div>
      </div>
    `,
    onEnter: setupRewards,
    cta:"Send this to Sourav",
    action: sendAboutHer,
    transition:{title:"Final checkpoint…", sub:"Everything is lined up. Let the confetti do the talking.", effect:"🎉", seconds:6}
  },
  {
    id:"final",
    title:"Final",
    render: ()=> `
      <div class="page">
        <div class="hero-card">
          <div class="copy-block">
            <div class="meta-title">Final checkpoint</div>
            <h2 style="margin-top:8px">So… let’s do this Sunday? I think it’ll be a really good one with you.</h2>
            <p style="margin-top:12px">Dogs. Ramadan food. Football. Good company. Thoughtful planning. And a very sincere ask from me.</p>
            </div>
        </div>
      </div>
    `,
    cta:"Yes, I do 🌻",
    secondary:"Suggest Tweaks",
    action: yesIDo,
    secondaryAction: suggestTweaks
  },
];

let current = 0;
let tweakCount = 0;
let currentReward = "sunflowers";

let carouselId = 0;
function carouselHTML(images, captions){
  const id = `carousel-${carouselId++}`;
  const dots = images.map((_,i)=>`<button class="dot ${i===0?'active':''}" data-carousel-dot="${id}" data-index="${i}" type="button"></button>`).join('');
  return `
    <div class="top-carousel" data-carousel-id="${id}" data-images='${JSON.stringify(images)}' data-captions='${JSON.stringify(captions || [])}'>
      <img src="${images[0]}" alt="${(captions&&captions[0])||''}"/>
    </div>
    <div class="carousel-dots">${dots}</div>
  `;
}
function routeCard(title, image, desc, route){
  return `<button class="route-card" data-route="${route}"><img src="${image}" alt="${title}"/><div class="pad"><h4>${title}</h4><p>${desc}</p></div></button>`;
}
const routeMap = {
  frazer:{
    title:"Mosque Road / Frazer Town",
    copy:"Maximum Ramzan energy, great if the evening is more about atmosphere than route safety.",
    map:"https://www.google.com/maps/search/?api=1&query=Mosque+Road+Frazer+Town+Bengaluru"
  },
  johnson:{
    title:"Johnson Market",
    copy:"Best fit for the timeline: Johnson Market first. It gives us the safest food window and a cleaner run to Whitefield before the 10 PM screening.",
    map:"https://www.google.com/maps/search/?api=1&query=Johnson+Market+Bengaluru"
  },
  rehmath:{
    title:"Rehmath Nagar",
    copy:"A more adventurous wildcard if we’re feeling spontaneous and okay with a slightly less predictable detour.",
    map:"https://www.google.com/maps/search/?api=1&query=Rahmath+Nagar+Bengaluru"
  },
  bilal:{
    title:"Bilal Masjid Area",
    copy:"Strong festive energy and a nice atmosphere, but less safe on timing than Johnson Market for a 10 PM Whitefield arrival.",
    map:"https://www.google.com/maps/search/?api=1&query=Masjid+e+Bilal+Bengaluru"
  }
};

function renderPage(){
  const page = pages[current];
  document.getElementById('view').innerHTML = page.render();
  document.getElementById('nextBtn').textContent = page.cta || 'Next';
  document.getElementById('backBtn').style.display = page.back === false || current===0 ? 'none' : 'flex';
  const sec = page.secondary;
  if(sec){
    document.getElementById('backBtn').style.display = 'flex';
    document.getElementById('backBtn').textContent = sec;
  } else {
    document.getElementById('backBtn').textContent = 'Back';
  }
  setupCarousels();
  if(page.onEnter) page.onEnter();
  window.scrollTo({top:0, behavior:'smooth'});
}
function setupCarousels(){
  document.querySelectorAll('[data-carousel-id]').forEach(car => {
    const images = JSON.parse(car.getAttribute('data-images')||'[]');
    const captions = JSON.parse(car.getAttribute('data-captions')||'[]');
    const img = car.querySelector('img');
    document.querySelectorAll(`[data-carousel-dot="${car.dataset.carouselId}"]`).forEach(dot=>{
      dot.onclick = () => {
        const idx = Number(dot.dataset.index||0);
        img.src = images[idx];
        img.alt = captions[idx] || '';
        document.querySelectorAll(`[data-carousel-dot="${car.dataset.carouselId}"]`).forEach(d=>d.classList.remove('active'));
        dot.classList.add('active');
      };
    });
  });
}
function setupRouteCards(){
  const detail = document.getElementById('routeDetail');
  detail.innerHTML = '';
  document.querySelectorAll('.route-card').forEach(card=>{
    card.onclick = ()=>{
      const data = routeMap[card.dataset.route];
      detail.innerHTML = `
        <div class="modal-backdrop" onclick="closeDrawer(event)"></div>
        <div class="route-modal" id="routeDrawer">
          <div class="reward-card reward-box modal-sheet">
            <h4>${data.title}</h4>
            <p>${data.copy}</p>
            <div style="display:flex;flex-direction:column;gap:10px;margin-top:14px">
              <a class="small-map" href="${data.map}" target="_blank">Location</a>
              <button class="cta ghost" onclick="closeDrawer()">Back for more options</button>
            </div>
          </div>
        </div>`;
      setTimeout(()=>{
        const dr=document.getElementById('routeDrawer'); if(dr) dr.classList.add('open');
      }, 10);
    };
  });
}
function closeDrawer(ev){
  if(ev && ev.target && !ev.target.classList.contains('drawer-backdrop')) return;
  const dr=document.getElementById('routeDrawer');
  const detail=document.getElementById('routeDetail');
  if(dr) dr.classList.remove('open');
  setTimeout(()=>{ if(detail) detail.innerHTML=''; }, 260);
}
function setupRewards(){
  const box = document.getElementById('rewardBox');
  function draw(){
    if(currentReward==="football"){
      box.innerHTML = `
        <img src="assets/reward_qr.png" alt="QR reward" style="object-fit:contain;background:#fff;padding:18px"/>
        <h4>Football reward</h4>
        <p>If football gets picked, this is your little win — the match QR as the final reward.</p>
      `;
    } else if(currentReward==="sunflowers"){
      box.innerHTML = `
        <img src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80" alt="Sunflower bouquet"/>
        <h4>Sunflower reward</h4>
        <p>A real-life bouquet of sunflowers is officially promised. Consider this the softest reward tier.</p>
      `;
    } else {
      box.innerHTML = `
        <div class="music-stack">
          <a class="music-card" href="https://youtu.be/LjhCEhWiKXk?si=0LscnzNIwP4pGAt9" target="_blank"><span class="music-kicker">Mood 1</span><strong>She is PERFECT, If only she knew....</strong></a>
          <a class="music-card" href="https://youtu.be/vzlXfZlH5dk?si=MWVH_EJ4YIAc1Q-Z&t=14" target="_blank"><span class="music-kicker">Mood 2</span><strong>If only I could sing...</strong></a>
          <a class="music-card" href="https://youtu.be/i4_zTK1q78Y?si=NNbZamzr7C-4DfD3" target="_blank"><span class="music-kicker">Mood 3</span><strong>She je bose ache...</strong></a>
        </div>`;
    }
  }
  draw();
  document.querySelectorAll('[data-reward]').forEach(btn=>{
    btn.onclick = ()=>{
      document.querySelectorAll('[data-reward]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentReward = btn.dataset.reward;
      draw();
    };
  });
}
function showOverlay(conf){
  const overlay = document.getElementById('overlay');
  const particles = document.getElementById('overlay-particles');
  document.getElementById('overlay-title').textContent = conf.title;
  document.getElementById('overlay-sub').textContent = conf.sub;
  particles.innerHTML = '';
  const symbols = conf.effect === '🥔' ? ['🥔','✨','🥔','⭐'] : conf.effect === '🌻' ? ['🌻','✨','🌼','🌻'] : conf.effect === '🎉' ? ['🎉','✨','🎊','💛'] : conf.effect === '❤️' ? ['❤️','💛','✨','🌻'] : ['✨','💫','⭐','💛'];
  for(let i=0;i<48;i++){
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = symbols[i % symbols.length];
    const angle = (Math.PI * 2 * i) / 48;
    const distance = 220 + (i%7)*20;
    el.style.setProperty('--x', `${Math.cos(angle)*distance}px`);
    el.style.setProperty('--y', `${Math.sin(angle)*distance}px`);
    el.style.setProperty('--r', `${(i%2?1:-1)*(120+i*6)}deg`);
    el.style.animationDelay = `${(i%6)*0.05}s`;
    particles.appendChild(el);
  }
  overlay.classList.remove('hidden');
  setTimeout(()=>{
    overlay.classList.add('hidden');
    current = Math.min(current+1, pages.length-1);
    renderPage();
  }, (conf.seconds || 8) * 1000);
}
function nextAction(){
  const page = pages[current];
  if(page.action){
    page.action();
    return;
  }
  if(page.transition){
    showOverlay(page.transition);
  } else if(current < pages.length-1){
    current++;
    renderPage();
  }
}
function backAction(){
  const page = pages[current];
  if(page.secondaryAction && page.secondary){
    page.secondaryAction();
    return;
  }
  current = Math.max(0, current-1);
  renderPage();
}
function sendAboutHer(){
  const childhood = encodeURIComponent(document.getElementById('childhood').value || 'Not answered');
  const story = encodeURIComponent(document.getElementById('story').value || 'Not answered');
  const dreams = encodeURIComponent(document.getElementById('dreams').value || 'Not answered');
  const reward = encodeURIComponent(currentReward);
  const msg = `Hello Sourav with a V%0A%0AAbout Her answers:%0AChildhood: ${childhood}%0AStory: ${story}%0ADreams: ${dreams}%0AReward picked: ${reward}`;
  window.open(`https://wa.me/919800380248?text=${msg}`, '_blank');
  showOverlay({title:"Message sent…", sub:"Moving to the final page now.", effect:"💌", seconds:6});
}
function suggestTweaks(){
  tweakCount++;
  const btn = document.getElementById('backBtn');
  if(tweakCount===1){ btn.textContent = 'Are you sure?'; return; }
  if(tweakCount===2){ btn.textContent = 'Okay, If you insist, click again'; return; }
  window.open(WHATSAPP, '_blank');
}
function yesIDo(){
  const ics = [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Sunflower Sunday//EN","BEGIN:VEVENT",
    "UID:sunflower-sunday-20260322@example.com","DTSTAMP:20260301T120000Z",
    "DTSTART:20260322T110000Z","DTEND:20260322T123000Z","SUMMARY:Stage 1 · Willie’s Pet Paradise",
    "DESCRIPTION:Dog chapter.","LOCATION:Willie’s Pet Paradise, Sarjapur","END:VEVENT",
    "BEGIN:VEVENT","UID:sunflower-sunday-20260322-2@example.com","DTSTAMP:20260301T120000Z",
    "DTSTART:20260322T130000Z","DTEND:20260322T150000Z","SUMMARY:Stage 2 · Food",
    "DESCRIPTION:Best fit: Johnson Market.","LOCATION:Johnson Market, Bangalore","END:VEVENT",
    "BEGIN:VEVENT","UID:sunflower-sunday-20260322-3@example.com","DTSTAMP:20260301T120000Z",
    "DTSTART:20260322T163000Z","DTEND:20260322T183000Z","SUMMARY:Stage 3 · Arsenal vs Manchester City screening",
    "DESCRIPTION:Underdoggs Whitefield.","LOCATION:Underdoggs Whitefield, Bangalore","ATTENDEE;CN=Ananya Dutta:mailto:rdutta10@yahoo.com","END:VEVENT","END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sunflower-sunday.ics';
  a.click();
  window.open(YES_WHATSAPP, '_blank');
  document.getElementById('view').innerHTML = `
    <div class="page">
      <div class="final-screen">
        <img src="assets/girl5.png" alt="See you soon" style="object-position:center 18%"/>
        <div class="meta-title">Application journey complete</div>
        <h2>See you soon 🌻</h2>
        <p class="subtle">The sun can take it from here.</p>
      </div>
    </div>
  `;
  document.getElementById('nextBtn').textContent = 'Contact me';
  document.getElementById('nextBtn').onclick = ()=> window.location.href = CONTACT_PHONE;
  document.getElementById('backBtn').style.display='none';
  document.getElementById('overlay').classList.remove('hidden');
  document.getElementById('overlay-title').textContent='Yes, I do 🌻';
  document.getElementById('overlay-sub').textContent='Loading the final reward…';
  const particles = document.getElementById('overlay-particles');
  particles.innerHTML='';
  ['❤️','🎉','🌻','💛'].forEach((sym, idx)=>{
    for(let i=0;i<16;i++){
      const el=document.createElement('div'); el.className='particle'; el.textContent=sym;
      const angle=(Math.PI*2*(idx*16+i))/64, d=240 + (i%6)*18;
      el.style.setProperty('--x', `${Math.cos(angle)*d}px`);
      el.style.setProperty('--y', `${Math.sin(angle)*d}px`);
      el.style.setProperty('--r', `${i*22}deg`);
      particles.appendChild(el);
    }
  });
  setTimeout(()=>document.getElementById('overlay').classList.add('hidden'), 7000);
}
document.getElementById('nextBtn').onclick = nextAction;
document.getElementById('backBtn').onclick = backAction;
renderPage();
