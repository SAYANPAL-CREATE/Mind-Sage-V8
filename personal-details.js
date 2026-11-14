/* Mind-sage: session-only personal details for individually identified report downloads. */
'use strict';

// Keep identifiable information out of browser storage, backups and research exports.
state.participantName = '';
state.institutionName = '';
state.classYear = '';
state.guardianName = '';

const privateDetailsText = (en,bn) => T(en,bn);
const reportIdentity = () => ({
  name: (state.participantName || '').trim(),
  age: state.age,
  gender: state.gender,
  level: state.level,
  institution: (state.institutionName || '').trim(),
  classYear: (state.classYear || '').trim(),
  guardianName: state.level === 'primary' ? (state.guardianName || '').trim() : '',
  relationship: state.level === 'primary' ? (state.guardianRelationship || '') : ''
});
const guardianRelationshipLabel = relation => ({
  parent: privateDetailsText('Parent','পিতা / মাতা'),
  legal: privateDetailsText('Legal guardian','আইনি অভিভাবক'),
  other: privateDetailsText('Responsible guardian','দায়িত্বপ্রাপ্ত অভিভাবক')
})[relation] || privateDetailsText('Not specified','উল্লেখ নেই');

const previousProfile = profile;
profile = function () {
  let html = previousProfile();
  if (typeof html !== 'string' || !state.level) return html;
  const guardian = state.level === 'primary';
  const identityField = `<div class="identity-intro"><span class="identity-step">${privateDetailsText('PERSONAL DETAILS FOR YOUR REPORT','রিপোর্টের জন্য ব্যক্তিগত তথ্য')}</span><h3>${guardian?privateDetailsText('Child and guardian details','শিশু ও অভিভাবকের তথ্য'):privateDetailsText('Your report details','আপনার রিপোর্টের তথ্য')}</h3><p>${privateDetailsText('Your name will be shown in your report and downloadable PDF. These identifying details are used in this tab only and are not saved to the mood diary or research export.','আপনার নাম রিপোর্ট ও পিডিএফে দেখানো হবে। এই পরিচয়-তথ্য শুধু বর্তমান ট্যাবে ব্যবহৃত হয় এবং ডায়েরি বা গবেষণার ফাইলে সংরক্ষণ করা হয় না।')}</p></div><label class="field identity-full-name"><span>${guardian?privateDetailsText("Child's full name","শিশুর সম্পূর্ণ নাম"):privateDetailsText('Full name','সম্পূর্ণ নাম')} <b>*</b></span><input name="participantName" type="text" minlength="2" maxlength="80" required autocomplete="off" placeholder="${guardian?privateDetailsText("Enter child's name","শিশুর নাম লিখুন"):privateDetailsText('Enter your name','আপনার নাম লিখুন')}" value="${esc(state.participantName)}"/></label>`;
  const extraFields = `<div class="two-col identity-extras"><label class="field"><span>${guardian?privateDetailsText('School (optional)','বিদ্যালয় (ঐচ্ছিক)'):privateDetailsText('School / university / institution (optional)','বিদ্যালয় / বিশ্ববিদ্যালয় / প্রতিষ্ঠান (ঐচ্ছিক)')}</span><input name="institutionName" type="text" maxlength="80" autocomplete="off" placeholder="${privateDetailsText('Institution name','প্রতিষ্ঠানের নাম')}" value="${esc(state.institutionName)}"/></label><label class="field"><span>${guardian?privateDetailsText('Class / grade (optional)','শ্রেণি (ঐচ্ছিক)'):privateDetailsText('Class / course / year (optional)','শ্রেণি / কোর্স / বর্ষ (ঐচ্ছিক)')}</span><input name="classYear" type="text" maxlength="60" autocomplete="off" placeholder="${guardian?privateDetailsText('e.g., Class IV','যেমন: চতুর্থ শ্রেণি'):privateDetailsText('e.g., 2nd year / M.Sc. / Ph.D.','যেমন: দ্বিতীয় বর্ষ / স্নাতকোত্তর / পিএইচডি')}" value="${esc(state.classYear)}"/></label></div><div class="identity-age-note" aria-live="polite">${privateDetailsText('Age calculated from date of birth:','জন্মতারিখ থেকে হিসাব করা বয়স:')} <strong id="identity-age-display">${state.dob && ageFrom(state.dob)!==null ? esc(String(ageFrom(state.dob)))+' '+privateDetailsText('years','বছর') : privateDetailsText('Choose a date','তারিখ বেছে নিন')}</strong></div>`;
  const guardianName = `<label class="field identity-guardian-name"><span>${privateDetailsText('Parent / guardian full name','পিতা-মাতা / অভিভাবকের নাম')} <b>*</b></span><input name="guardianName" type="text" minlength="2" maxlength="80" required autocomplete="off" placeholder="${privateDetailsText("Name of the adult answering","যিনি উত্তর দিচ্ছেন তাঁর নাম")}" value="${esc(state.guardianName)}"/></label>`;
  html = html.replace('<div class="two-col">',identityField+'<div class="two-col">');
  html = html.replace('<div class="captcha">',extraFields+'<div class="captcha">');
  if (guardian) html = html.replace('<div class="v4-guardian-fields">','<div class="v4-guardian-fields">'+guardianName);
  return html;
};

// Register before the existing submit handler (capturing). The guardian validator still runs first.
document.addEventListener('submit', event => {
  if (event.target?.id !== 'profile-form') return;
  const form = event.target;
  const name = String(form.elements.participantName?.value || '').trim();
  const guardianName = String(form.elements.guardianName?.value || '').trim();
  const institution = String(form.elements.institutionName?.value || '').trim();
  const classYear = String(form.elements.classYear?.value || '').trim();
  if (name.length < 2 || name.length > 80 || (state.level === 'primary' && (guardianName.length < 2 || guardianName.length > 80))) {
    event.preventDefault(); event.stopImmediatePropagation();
    const error = document.querySelector('#profile-error');
    if (error) error.textContent = privateDetailsText('Please enter a valid full name for the report and, if applicable, the guardian.','রিপোর্টের জন্য সঠিক নাম এবং প্রয়োজনে অভিভাবকের নাম লিখুন।');
    return;
  }
  // Stored only in JS memory for the current tab. Do not persist to localStorage.
  state.participantName = name;
  state.institutionName = institution;
  state.classYear = classYear;
  state.guardianName = state.level === 'primary' ? guardianName : '';
}, true);

document.addEventListener('input', event => {
  if (event.target?.id !== 'dob') return;
  const age = ageFrom(event.target.value);
  const label = document.querySelector('#identity-age-display');
  if (label) label.textContent = age!==null && age>=0 && age<=110 ? `${age} ${privateDetailsText('years','বছর')}` : privateDetailsText('Choose a valid date','সঠিক তারিখ বেছে নিন');
});

document.addEventListener('click', event => {
  if (!event.target.closest('[data-action="level"]')) return;
  state.participantName = '';
  state.institutionName = '';
  state.classYear = '';
  state.guardianName = '';
}, true);

const previousReport = report;
report = function (type) {
  let html = previousReport(type);
  if (typeof html !== 'string' || !state.profileReady || !state.participantName) return html;
  const id = reportIdentity();
  const row = (en,bn,value) => `<div class="identity-report-field"><span>${privateDetailsText(en,bn)}</span><strong>${esc(value || privateDetailsText('Not provided','উল্লেখ নেই'))}</strong></div>`;
  const guardian = state.level==='primary';
  const card = `<section class="surface-card identity-report-panel" aria-label="${privateDetailsText('Report personal details','রিপোর্টের ব্যক্তিগত তথ্য')}"><div class="identity-report-heading"><div><span class="identity-step">${privateDetailsText('PERSONAL DETAILS','ব্যক্তিগত তথ্য')}</span><h2>${guardian?privateDetailsText('Child and respondent information','শিশু ও উত্তরদাতার তথ্য'):privateDetailsText('Report identification','রিপোর্টের পরিচিতি')}</h2></div><a href="#/profile" class="identity-edit">${privateDetailsText('Edit details','তথ্য সম্পাদনা')} ↗</a></div><div class="identity-report-grid">${row(guardian?'Child name':'Full name',guardian?'শিশুর নাম':'সম্পূর্ণ নাম',id.name)}${row('Age','বয়স',`${id.age} ${privateDetailsText('years','বছর')}`)}${row('Gender','লিঙ্গ',id.gender)}${row('Education category','শিক্ষার স্তর',nameOf(id.level))}${row('School / institution','বিদ্যালয় / প্রতিষ্ঠান',id.institution)}${row('Class / year','শ্রেণি / বর্ষ',id.classYear)}${guardian?row('Parent / guardian','পিতা-মাতা / অভিভাবক',id.guardianName):''}${guardian?row('Respondent relationship','উত্তরদাতার সম্পর্ক',guardianRelationshipLabel(id.relationship)):''}${row('Report date','রিপোর্টের তারিখ',fmtDate(new Date()))}</div><p class="identity-report-privacy">${privateDetailsText('These identifiers appear in this report and its PDF. They are not added to your saved mood history or research CSV. Avoid downloading reports on shared devices.','এই তথ্য রিপোর্ট ও পিডিএফে থাকবে। সেভ করা মুডের ইতিহাস বা গবেষণার CSV-তে যোগ হবে না। যৌথ ডিভাইসে রিপোর্ট ডাউনলোডে সতর্ক থাকুন।')}</p></section>`;
  return html.replace('<section class="report-score', card+'<section class="report-score');
};

/* Locally generated A4 PDF containing the identity panel, without uploading personal data. */
downloadPDF = function (type) {
  const s = score(type); if (!s || !state.profileReady) return;
  const id = reportIdentity();
  const canvas = document.createElement('canvas'); canvas.width=1240; canvas.height=1754;
  const ctx = canvas.getContext('2d'); if (!ctx) { window.print(); return; }
  const fill=(x,y,w,h,col)=>{ctx.fillStyle=col;ctx.fillRect(x,y,w,h);};
  const draw=(v,x,y,size=22,color='#173e3b',bold=false)=>{ctx.fillStyle=color;ctx.font=`${bold?'700':'400'} ${size}px "Noto Sans Bengali",Arial,sans-serif`;ctx.fillText(String(v??''),x,y);};
  const fit=(v,x,y,maxWidth,size=22,color='#173e3b',bold=false)=>{
    const val=String(v??'');let sz=size;
    for (;sz>14;sz-=1){ctx.font=`${bold?'700':'400'} ${sz}px "Noto Sans Bengali",Arial,sans-serif`;if(ctx.measureText(val).width<=maxWidth)break;}
    draw(val,x,y,sz,color,bold);
  };
  const wrap=(v,x,y,maxWidth,size=20,color='#537166',lineHeight=31,maxLines=20)=>{
    ctx.font=`400 ${size}px "Noto Sans Bengali",Arial,sans-serif`;
    const words=String(v||'').split(/\s+/);let line='',lines=0;
    for (const word of words) {const combined=line?line+' '+word:word;
      if (ctx.measureText(combined).width>maxWidth&&line){draw(line,x,y,size,color);y+=lineHeight;lines++;line=word;if(lines>=maxLines)return y;}
      else line=combined;
    }
    if(line&&lines<maxLines){fit(line,x,y,maxWidth,size,color);y+=lineHeight;}
    return y;
  };
  const field=(label,value,x,y,maxWidth)=>{draw(label.toUpperCase(),x,y,16,'#548373',true);fit(value||'Not provided',x,y+37,maxWidth,25,'#183f3d',true);};
  fill(0,0,1240,1754,'#f7f9f5');
  fill(0,0,1240,260,'#153f40');
  draw('MIND-SAGE / PERSONAL WELLBEING',70,82,28,'#e5f2e1',true);
  draw('PERSONAL WELLBEING REPORT',70,124,18,'#c8dfd1');
  fit((id.level==='primary'?'GUARDIAN-OBSERVED - ':'STUDENT SELF-REPORT - ')+nameOf(state.level),70,163,1100,18,'#cce3d5');
  draw(FEELINGS[type].title+' reflection',70,218,49,'#fff',true);
  fit(new Date().toLocaleDateString('en-IN'),1030,87,140,18,'#edf4e8');

  fill(56,278,1128,298,'#fff');
  draw(id.level==='primary'?'CHILD & GUARDIAN INFORMATION':'PERSONAL DETAILS',80,321,21,'#327260',true);
  field(id.level==='primary'?'Child name':'Full name',id.name,82,361,485);
  field('Education category',nameOf(id.level),632,361,510);
  field('Age',id.age+' years',82,438,445);
  field(id.level==='primary'?'School / class':'School / institution', id.level==='primary' ? [id.institution,id.classYear].filter(Boolean).join(' | ') : id.institution,632,438,510);
  field('Gender',id.gender,82,515,445);
  field(id.level==='primary'?'Guardian':'Class / course / year',id.level==='primary' ? `${id.guardianName} (${({parent:'parent',legal:'legal guardian',other:'guardian'})[id.relationship]||'guardian'})` : id.classYear,632,515,510);
  // The primary-school class is included with the institution in the PDF.

  fill(56,596,1128,233,'#fff');
  draw('RESPONSE INDEX',86,642,20,'#4e8975',true);draw(s.pct+'%',86,754,103,'#153f40',true);
  draw('REPORTED EXPERIENCE FREQUENCY',348,666,22,'#366859',true);
  wrap(`Score ${s.total} out of 30. This reflects selected responses, not the probability of a diagnosis.`,348,707,770,22,'#557168',33,3);
  draw('Band: '+(s.pct<25?'Occasional':s.pct<50?'Some':s.pct<75?'Frequent':'Very frequent'),348,791,20,'#3b806c');

  fill(56,848,1128,272,'#fff'); draw('RESPONSE PATTERN',86,895,24,'#224c47',true);
  FEELINGS[type].dimensions.forEach((label,i)=>{const y=951+i*57;fit(label,88,y,435,19,'#4b6a5f');fill(544,y-18,450,17,'#e5ede8');fill(544,y-18,Math.round(450*s.group[i]/100),17,'#6bac8c');draw(s.group[i]+'%',1026,y,18,'#205e51',true);});

  fill(56,1141,1128,340,'#fff');draw('PERSONAL GUIDANCE',86,1190,24,'#224c47',true);
  let next=wrap(s.urgent?'Seek prompt help from a qualified professional. If you might act on self-harm thoughts, contact emergency services at 112.':s.pct>=50?'Consider discussing these experiences with a qualified mental health professional, particularly if daily life is affected.':'If these experiences persist, worsen, or affect daily life, consider speaking with a clinician or counsellor.',86,1233,1062,21,'#4b655b',31,3);
  next=Math.max(next+13,1338);draw('Medication decisions',86,next,21,'#367462',true);
  next=wrap('A qualified clinician can advise on treatment or medication. Do not start or stop medication based on this report.',86,next+33,1050,19,'#4b655b',29,3);
  next+=5;draw('Suggested next step',86,next,20,'#367462',true);
  const suggestions=state.level==='primary'?v4ParentTips(type,'en'):FEELINGS[type].tips;
  wrap(suggestions[0]||'Consider a gentle check-in and trusted support.',86,next+30,1045,19,'#4b655b',27,2);

  fill(56,1500,1128,176,s.urgent?'#fff0e8':'#e7f1e8');
  draw(s.urgent?'URGENT SUPPORT':'PUBLIC SUPPORT IN INDIA',86,1545,23,'#205447',true);
  draw('Tele-MANAS: 14416   |   Emergency: 112   |   Child Helpline: 1098',86,1600,22,'#4c6a5b');
  wrap(id.level==='primary'?'Guardian observations and student self-reports are different. This summary is not a clinical diagnosis.':'This personal response summary is descriptive and is not a clinical diagnosis.',86,1641,1055,17,'#638175',24,2);
  draw('Mind-sage  •  Generated locally in your browser  •  Keep this report private',74,1719,16,'#70887d');

  const image=canvas.toDataURL('image/jpeg',.91), bytes=Uint8Array.from(atob(image.split(',')[1]),ch=>ch.charCodeAt(0));
  const encoder=new TextEncoder(), parts=[], offsets=[];let length=0;
  const push=value=>{const b=typeof value==='string'?encoder.encode(value):value;parts.push(b);length+=b.length;};
  const object=(n,body)=>{offsets[n]=length;push(`${n} 0 obj\n${body}\nendobj\n`);};
  push('%PDF-1.4\n');object(1,'<< /Type /Catalog /Pages 2 0 R >>');object(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  object(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im1 4 0 R >> >> /Contents 5 0 R >>');
  offsets[4]=length;push(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bytes.length} >>\nstream\n`);push(bytes);push('\nendstream\nendobj\n');
  const commands='q\n595 0 0 842 0 0 cm\n/Im1 Do\nQ\n';
  object(5,`<< /Length ${encoder.encode(commands).length} >>\nstream\n${commands}endstream`);
  const crossref=length;push('xref\n0 6\n0000000000 65535 f \n');
  for(let i=1;i<=5;i++)push(String(offsets[i]).padStart(10,'0')+' 00000 n \n');
  push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${crossref}\n%%EOF`);
  const safeName=id.name.normalize('NFKC').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,35);
  downloadBlob(new Blob(parts,{type:'application/pdf'}),`Mind-sage-${safeName||'report'}-${type}-${dateStamp()}.pdf`);
};
