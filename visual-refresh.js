/* Mind-sage visual experience. No public version label. */
'use strict';

const refreshGroups=[
  {title:['START HERE','শুরু করুন'],icon:'home',paths:['home','compass','dashboard','moods','academic','guardian']},
  {title:['YOUR WELLBEING','নিজের যত্ন'],icon:'heart',paths:['landscape','garden','journey','journal','plan','diary','timeline','bromind','relaxation']},
  {title:['LEARN & GROW','শিখুন ও এগোন'],icon:'book',paths:['literacy','videos','guided-media','vani','motivation','scenarios','challenges']},
  {title:['INSIGHTS & SUPPORT','তথ্য ও সহায়তা'],icon:'shield',paths:['insights','mindmap','companion','support','contact','vault','access','evaluation','privacy','connect','research']}
];

header=function(){
  const p=pageNow(),lookup=new Map(navs.map(x=>[x[0],x]));
  return `<aside class="sidebar refresh-sidebar" aria-label="${T('Main navigation','প্রধান নেভিগেশন')}">
  <a href="#/home" class="brand refresh-brand"><span class="brand-mark">${I('leaf',25)}</span><span>mind<span class="brand-highlight">sage</span><small>${T('A SPACE TO FEEL BETTER','ভালো থাকার ব্যক্তিগত স্থান')}</small></span></a>
  <div class="refresh-side-status"><span class="refresh-status-dot"></span>${T('YOUR PERSONAL WELLBEING SPACE','আপনার নিজের ভালো থাকার স্থান')}</div>
  <nav class="refresh-group-list">${refreshGroups.map((g,i)=>{
    const active=g.paths.includes(p)||(p==='profile'&&i===0)||(p==='assessment'&&i===0)||(p==='report'&&i===0)||(p==='learning'&&i===2);
    return `<details class="refresh-nav-group" ${active?'open':''}><summary>${I(g.icon,17)}<span>${T(...g.title)}</span><span class="refresh-group-caret">⌄</span></summary><div class="refresh-menu-list">${g.paths.map(path=>{
       const n=lookup.get(path); if(!n)return '';
       return `<a class="side-item ${p===path?'active':''}" href="#/${path}" ${p===path?'aria-current="page"':''}>${I(n[1],17)}<span>${T(n[2],n[3])}</span><span aria-hidden="true" class="refresh-nav-arrow">↗</span></a>`;
    }).join('')}</div></details>`;
  }).join('')}</nav>
  <div class="refresh-sidebar-bottom"><a href="#/support" class="refresh-support-small">${I('heart',18)}<span>${T('Need someone to talk to?','কাউকে বলতে চান?')}<small>${T('Find trusted support','নির্ভরযোগ্য সহায়তা')}</small></span>${I('arrow',16)}</a><p>${T('A gentler day begins with a small step.','একটি ছোট পদক্ষেপ থেকেই শুরু।')}</p></div>
  </aside>`;
};

const refreshFeatures=[
 ['compass','student-calm-sunset.webp','✦','Mind Compass','মনের কম্পাস','A thoughtful overview of your day, your pace and your next step.','নিজের দিন, নিজের গতি ও পরের পদক্ষেপ দেখুন।','refresh-feature-featured'],
 ['guardian','parent-child-reflection.webp','♡','Guardian Care','অভিভাবকের যত্ন','A calm, supportive space for parents and caregivers.','অভিভাবকদের জন্য যত্নশীল সহায়ক স্থান।',''],
 ['journey','students-supporting-each-other.webp','↗','Life Journey','জীবনের সফর','Explore meaningful choices through gentle stories.','গল্পের মাধ্যমে জীবনের সিদ্ধান্ত বুঝুন।',''],
 ['bromind','student-mindful-portrait.webp','◌','Bro-minD Plus','ব্রো-মিন্ড প্লাস','Breathing, grounding and moments of calm.','শ্বাস, মনোযোগ ও শান্ত থাকার অনুশীলন।','']
];
const refreshToolLinks=[
 ['garden','✿','Mind Garden','মনের বাগান','Grow kind habits','যত্নের অভ্যাস'],
 ['academic','◈','Academic Pressure','পড়াশোনার চাপ','Understand study pressure','পড়াশোনার চাপ বুঝুন'],
 ['journal','✎','Mind Journal','মনের জার্নাল','Put feelings into words','অনুভূতি লিখুন'],
 ['timeline','◷','Wellbeing Timeline','সময়ের মানচিত্র','Look back with care','পেছনে ফিরে দেখুন'],
 ['videos','▷','Watch & Learn','ভিডিও দেখুন','Thoughtfully curated videos','নির্বাচিত ভিডিও'],
 ['literacy','▤','Literacy Centre','সহজ মানসিক শিক্ষা','Understand your wellbeing','ভালো থাকা বুঝুন']
];

function refreshLanding(){
 const q=QUOTES[0];
 return shell(`<div class="refresh-home">
 <section class="refresh-hero" aria-labelledby="refresh-hero-title">
  <div class="refresh-hero-copy"><span class="refresh-brow"><span class="refresh-sparkle">✦</span> ${T('A LITTLE SPACE FOR YOURSELF','শুধু আপনার জন্য একটু সময়')}</span>
  <h1 id="refresh-hero-title">${T('Every mind has <span>a story.</span><br>Make space for yours.','প্রতিটি মনের <span>নিজস্ব গল্প</span> আছে।<br>নিজেকেও একটু সময় দিন।')}</h1>
  <p>${T('Take a thoughtful pause. Understand your feelings, explore a path that fits your learning stage and discover small ways to feel supported.','একটু থামুন। নিজের অনুভূতি বুঝুন, শিক্ষাজীবনের উপযোগী পথ বেছে নিন এবং সহায়তার ছোট পদক্ষেপ খুঁজে নিন।')}</p>
  <div class="refresh-hero-actions"><a class="refresh-button cream" href="#/compass">${I('spark',17)} ${T('Find my direction','আমার পথ খুঁজুন')} <span>↗</span></a><a class="refresh-button ghost" href="#/moods">${T('Begin assessment','মূল্যায়ন শুরু করুন')} ${I('arrow',16)}</a></div>
  <div class="refresh-hero-bottom"><span>${I('shield',15)} ${T('No account required','অ্যাকাউন্ট প্রয়োজন নেই')}</span><span>${I('heart',15)} ${T('Made for students and families','শিক্ষার্থী ও পরিবারের জন্য')}</span></div>
  </div>
  <div class="refresh-hero-photo"><img src="./student-mindful-portrait.webp" alt="Student taking a calm moment outdoors at sunset" fetchpriority="high" decoding="async"><div class="refresh-photo-shade"></div><div class="refresh-photo-label"><span>✶</span><span>${T('Breathe in. Begin again.','শ্বাস নিন। আবার শুরু করুন।')}</span></div></div>
  <div class="refresh-hero-orbit" aria-hidden="true"></div>
 </section>
 <div class="refresh-trustline"><span>✶ ${T('Personal and gentle','ব্যক্তিগত ও কোমল')}</span><span>◌ ${T('English & Bengali','ইংরেজি ও বাংলা')}</span><span>❀ ${T('Your pace matters','নিজের গতির গুরুত্ব আছে')}</span><span>♧ ${T('Help when you need it','প্রয়োজনে সহায়তা')}</span></div>
 <section class="refresh-section refresh-stage-section" id="learning-stage"><div class="refresh-section-title"><div><span class="refresh-eyebrow">01 / ${T('YOUR JOURNEY BEGINS HERE','এখান থেকেই শুরু')}</span><h2>${T('A different path for every learner.','প্রতিটি শিক্ষার্থীর জন্য আলাদা পথ।')}</h2></div><p>${T('Choose a stage. Each has dedicated wellbeing questions; primary-school responses are provided by a parent or guardian.','শিক্ষার স্তর বেছে নিন। প্রত্যেকটির নিজস্ব প্রশ্ন রয়েছে; প্রাথমিক স্তরে উত্তর দেবেন অভিভাবক।')}</p></div>
  <div class="refresh-family-strip"><img src="./parent-child-reflection.webp" alt="A parent listening as a young child shares a drawing" loading="lazy"><div><span>${T('FOR FAMILIES','পরিবারের জন্য')}</span><strong>${T('Little voices deserve thoughtful listening.','ছোটদের কথা মন দিয়ে শুনুন।')}</strong><p>${T('For primary-school children, an adult answers observation-based questions.','প্রাথমিক বিদ্যালয়ের শিশুর জন্য অভিভাবক পর্যবেক্ষণভিত্তিক প্রশ্নের উত্তর দেন।')}</p></div><a href="#/guardian" aria-label="${T('Open Guardian Care','অভিভাবকের সহায়তা খুলুন')}">↗</a></div>
 ${categoryCards()}</section>
 <section class="refresh-section"><div class="refresh-section-title"><div><span class="refresh-eyebrow">02 / ${T('MOMENTS OF CARE','যত্নের মুহূর্ত')}</span><h2>${T('However today feels, there’s a place to begin.','আজ যেমনই লাগুক, শুরু করার একটি জায়গা আছে।')}</h2></div><p>${T('Explore meaningful spaces, brought to life with real-world moments.','বাস্তব জীবনের মুহূর্ত দিয়ে সাজানো কিছু বিশেষ অভিজ্ঞতা।')}</p></div>
 <div class="refresh-story-grid">${refreshFeatures.map(([path,image,glyph,en,bn,desc,dBn,cl],i)=>`<a class="refresh-story ${cl}" href="#/${path}"><div class="refresh-story-image"><img src="./${image}" alt="${esc(['Peaceful sunset landscape','Parent and child sharing a warm moment','Two women having a supportive conversation in a leafy garden','Student relaxing outdoors'][i])}" loading="lazy"></div><div class="refresh-story-content"><span class="refresh-story-symbol">${glyph}</span><div><h3>${T(en,bn)}</h3><p>${T(desc,dBn)}</p></div><span class="refresh-story-arrow">↗</span></div></a>`).join('')}</div></section>
 <section class="refresh-section refresh-moment"><div class="refresh-moment-text"><span class="refresh-eyebrow">03 / ${T('PAUSE & REFLECT','একটু থামুন')}</span><h2>${T('It’s okay to take a quieter route.','কখনও একটু ধীর হওয়াও ঠিক।')}</h2><p>${T('Not every difficult day needs a big answer. Start with a simple check-in or a small breathing exercise.','প্রতিটি কঠিন দিনের বড় সমাধান চাই না। ছোট একটি অনুভূতির পর্যবেক্ষণ বা শ্বাসের অনুশীলনই শুরু।')}</p><div><a href="#/landscape" class="refresh-button dark">${T('How am I feeling?','আজ কেমন লাগছে?')} ↗</a><a href="#/breathing" class="refresh-moment-link">${T('Try gentle breathing','শ্বাসের অনুশীলন')} ${I('arrow',16)}</a></div></div><div class="refresh-moment-art"><img src="./campus-conversation.webp" alt="Two men having a supportive conversation in a calm campus garden" loading="lazy"></div></section>
 <section class="refresh-section"><div class="refresh-section-title"><div><span class="refresh-eyebrow">04 / ${T('EXPLORE YOUR TOOLS','আপনার সহায়ক টুলগুলি')}</span><h2>${T('Little things that make room for growth.','ছোট ছোট অভ্যাস, অনেকটা স্বস্তি।')}</h2></div><p>${T('There is no single right way to care for your mind.','নিজের যত্ন নেওয়ার একটিই পথ নয়।')}</p></div><div class="refresh-tools">${refreshToolLinks.map(([path,g,en,bn,desc,dBn])=>`<a href="#/${path}" class="refresh-tool"><span class="refresh-tool-glyph" aria-hidden="true">${g}</span><span><strong>${T(en,bn)}</strong><small>${T(desc,dBn)}</small></span><b aria-hidden="true">↗</b></a>`).join('')}</div></section>
 <section class="refresh-wisdom"><div class="refresh-wisdom-portrait"><img src="./vivekananda-portrait.webp" alt="Illustration of Swami Vivekananda in saffron robes" loading="lazy"></div><div class="refresh-wisdom-content"><span class="refresh-eyebrow">${T('WORDS TO CARRY WITH YOU','মননে রাখার মতো বাণী')}</span><h2>${T('A moment with Swamiji','স্বামীজীর সঙ্গে একটি মুহূর্ত')}</h2><blockquote lang="bn">“${esc(q.bn)}”</blockquote><p>${T('A curated Bengali Vani library with 18 sourced selections.','উৎস-সহ স্বামীজীর নির্বাচিত ১৮টি বাংলা বাণী।')}</p><a href="#/vani" class="refresh-button dark">${T('Explore Vani','বাণী পড়ুন')} ↗</a></div></section>
 <section class="refresh-support-banner"><div><span>♡ ${T('YOU DON’T HAVE TO DO IT ALONE','একাই সব সামলাতে হবে না')}</span><h2>${T('A little support can change the day.','একটু সহায়তা দিনটাকে বদলে দিতে পারে।')}</h2><p>${T('Discover public resources and helplines, including Tele-MANAS at 14416 in India, or reach out to the Mind-sage contacts for project communication.','ভারতে টেলি-মানস ১৪৪১৬-সহ নির্ভরযোগ্য সহায়তা খুঁজুন, অথবা প্রকল্প সংক্রান্ত যোগাযোগের জন্য Mind-sage-এ যুক্ত ব্যক্তিদের সঙ্গে যোগাযোগ করুন।')}</p></div><div class="refresh-support-actions"><a class="refresh-button cream" href="#/support">${T('Find support','সহায়তা খুঁজুন')} ${I('arrow',17)}</a><a class="refresh-button ghost-light" href="#/contact">${T('Contact us','যোগাযোগ করুন')} ${I('arrow',17)}</a></div></section>
 </div>`,true);
}

v3Landing=refreshLanding;

/* Make the most important dashboard destination discoverable, without changing data. */
const refreshAfterNav=v3AfterNavigate;
v3AfterNavigate=function(page){
  refreshAfterNav(page);
  const app=document.querySelector('.app-shell');if(app)app.classList.add('refresh-app');
  const content=document.querySelector('.content');if(content)content.classList.toggle('refresh-content-home',page==='home');
  document.querySelectorAll('.refresh-nav-group').forEach(d=>{
    if(d.querySelector('a[aria-current="page"]')) d.open=true;
  });
  const title=document.querySelector('.breadcrumb strong');
  if(title&&page==='home')title.textContent=T('Welcome home','স্বাগতম');
};

/* Respect manual decisions, never autoplay audio or initiate downloads. */
