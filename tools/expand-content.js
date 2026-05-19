const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const categories = [
  ['09-technology', 'technology', 'เทคโนโลยี', [
    ['A New Smartphone', 'สมาร์ตโฟนเครื่องใหม่', 'Mina', 'smartphone', 'learns to compare features before buying a new phone'],
    ['Online Safety', 'ความปลอดภัยออนไลน์', 'Bank', 'password', 'protects his accounts with stronger passwords'],
    ['Learning to Code', 'เรียนเขียนโค้ด', 'Nicha', 'coding', 'builds a small website for her class'],
    ['Video Call Meeting', 'ประชุมวิดีโอคอล', 'Arun', 'meeting', 'runs an online meeting with his team'],
    ['Fixing the WiFi', 'ซ่อม WiFi', 'Dao', 'router', 'solves a slow internet problem at home'],
    ['Using a Map App', 'ใช้แอปแผนที่', 'Ken', 'navigation', 'finds a cafe with a map app'],
    ['Saving Photos', 'เก็บรูปภาพ', 'Pim', 'cloud storage', 'backs up family photos safely'],
    ['A Smart Home', 'บ้านอัจฉริยะ', 'Nok', 'smart speaker', 'uses technology to save energy'],
    ['Buying Online', 'ซื้อของออนไลน์', 'Tee', 'delivery', 'checks reviews before ordering'],
    ['Digital Detox', 'พักจากหน้าจอ', 'May', 'screen time', 'takes a break from her phone']
  ]],
  ['10-money', 'money', 'การเงิน', [
    ['Making a Budget', 'ทำงบประมาณ', 'Som', 'budget', 'plans monthly spending carefully'],
    ['Saving for a Trip', 'ออมเงินเพื่อเที่ยว', 'Beam', 'saving', 'saves money for a beach trip'],
    ['Opening a Bank Account', 'เปิดบัญชีธนาคาร', 'June', 'bank account', 'opens her first savings account'],
    ['Using a Credit Card', 'ใช้บัตรเครดิต', 'Pat', 'credit card', 'learns to pay the bill on time'],
    ['Emergency Fund', 'เงินสำรองฉุกเฉิน', 'Krit', 'emergency fund', 'starts saving for unexpected problems'],
    ['Comparing Prices', 'เปรียบเทียบราคา', 'Ann', 'price', 'compares prices before buying a laptop'],
    ['Paying Bills', 'จ่ายบิล', 'Win', 'bill', 'sets reminders for monthly bills'],
    ['Small Investment', 'ลงทุนเล็ก ๆ', 'Fah', 'investment', 'learns basic investing slowly'],
    ['Avoiding Debt', 'หลีกเลี่ยงหนี้', 'Noon', 'debt', 'changes habits to avoid debt'],
    ['Family Grocery Plan', 'แผนซื้อของครอบครัว', 'Chai', 'grocery', 'shops with a weekly plan']
  ]],
  ['11-environment', 'environment', 'สิ่งแวดล้อม', [
    ['Planting Trees', 'ปลูกต้นไม้', 'Mook', 'tree', 'plants trees with neighbors'],
    ['Reducing Plastic', 'ลดพลาสติก', 'Ton', 'plastic', 'uses a reusable bottle every day'],
    ['Recycling Day', 'วันรีไซเคิล', 'Prae', 'recycle', 'sorts trash at school'],
    ['Saving Water', 'ประหยัดน้ำ', 'Golf', 'water', 'fixes a leaking tap'],
    ['Clean Beach', 'ชายหาดสะอาด', 'Nan', 'beach', 'joins a beach cleanup'],
    ['Riding a Bicycle', 'ขี่จักรยาน', 'Joe', 'bicycle', 'rides to work twice a week'],
    ['A Community Garden', 'สวนชุมชน', 'Lin', 'garden', 'grows vegetables with friends'],
    ['Saving Electricity', 'ประหยัดไฟ', 'Oak', 'electricity', 'turns off unused lights'],
    ['Protecting Animals', 'ปกป้องสัตว์', 'Sai', 'animal', 'helps a local shelter'],
    ['A Rainy Season', 'ฤดูฝน', 'Pond', 'rain', 'prepares for heavy rain']
  ]],
  ['12-culture', 'culture', 'วัฒนธรรม', [
    ['Songkran Festival', 'เทศกาลสงกรานต์', 'Narin', 'festival', 'celebrates Songkran with family'],
    ['Loy Krathong Night', 'คืนลอยกระทง', 'Kwang', 'tradition', 'learns the meaning of Loy Krathong'],
    ['Thai Dance Class', 'เรียนรำไทย', 'Mali', 'dance', 'practices Thai dance for a show'],
    ['Visiting a Museum', 'เที่ยวพิพิธภัณฑ์', 'Pete', 'museum', 'discovers local history'],
    ['Cooking with Grandma', 'ทำอาหารกับยาย', 'Ying', 'recipe', 'learns an old family recipe'],
    ['A Temple Visit', 'ไปวัด', 'Art', 'temple', 'visits a temple respectfully'],
    ['Local Music', 'ดนตรีท้องถิ่น', 'Fai', 'music', 'listens to traditional instruments'],
    ['Handmade Crafts', 'งานฝีมือ', 'Korn', 'craft', 'makes a handmade gift'],
    ['A Village Fair', 'งานวัด', 'Bua', 'fair', 'enjoys games and food at a fair'],
    ['Respecting Customs', 'เคารพธรรมเนียม', 'Min', 'custom', 'learns customs before traveling']
  ]],
  ['13-hobbies', 'hobbies', 'งานอดิเรก', [
    ['Learning Guitar', 'เรียนกีตาร์', 'Leo', 'guitar', 'practices guitar every evening'],
    ['Weekend Painting', 'วาดรูปวันหยุด', 'Mew', 'painting', 'paints a picture for her room'],
    ['Running Club', 'ชมรมวิ่ง', 'Aom', 'running', 'joins a running club'],
    ['Growing Herbs', 'ปลูกสมุนไพร', 'Dee', 'herb', 'grows basil on a balcony'],
    ['Reading Challenge', 'ชาเลนจ์อ่านหนังสือ', 'Ben', 'reading', 'reads one book each month'],
    ['Cooking New Dishes', 'ทำอาหารเมนูใหม่', 'Fern', 'cooking', 'tries a new dish every week'],
    ['Photography Walk', 'เดินถ่ายรูป', 'Kae', 'photography', 'takes photos around town'],
    ['Board Game Night', 'คืนบอร์ดเกม', 'Toon', 'board game', 'plays games with friends'],
    ['Learning Chess', 'เรียนหมากรุก', 'Nate', 'chess', 'learns chess strategy'],
    ['Writing a Journal', 'เขียนบันทึก', 'Pin', 'journal', 'writes about each day']
  ]],
  ['14-community', 'community', 'ชุมชน', [
    ['Helping a Neighbor', 'ช่วยเพื่อนบ้าน', 'Ari', 'neighbor', 'helps carry groceries'],
    ['Volunteer Day', 'วันอาสา', 'Don', 'volunteer', 'volunteers at a local school'],
    ['A Lost Dog', 'สุนัขหลงทาง', 'Kim', 'notice', 'helps find a lost dog owner'],
    ['Community Meeting', 'ประชุมชุมชน', 'Rin', 'community', 'shares ideas at a meeting'],
    ['New Playground', 'สนามเด็กเล่นใหม่', 'Pao', 'playground', 'helps plan a safer playground'],
    ['Helping Seniors', 'ช่วยผู้สูงอายุ', 'Mei', 'senior', 'visits seniors on Sunday'],
    ['Street Food Project', 'โครงการอาหารริมทาง', 'Top', 'project', 'supports local vendors'],
    ['Library Volunteers', 'อาสาห้องสมุด', 'Nim', 'library', 'organizes books for children'],
    ['A Safe Street', 'ถนนปลอดภัย', 'Pong', 'safety', 'asks for better street lights'],
    ['Community Sports Day', 'กีฬาชุมชน', 'Joy', 'sports day', 'joins a community sports event']
  ]],
  ['15-future', 'future', 'อนาคต', [
    ['Planning a Goal', 'วางเป้าหมาย', 'Tarn', 'goal', 'writes a clear five-year goal'],
    ['A Dream Job', 'งานในฝัน', 'Nui', 'dream job', 'researches the skills she needs'],
    ['Learning AI', 'เรียนรู้ AI', 'Vee', 'AI', 'uses AI tools to study faster'],
    ['Moving City', 'ย้ายเมือง', 'Nam', 'move', 'plans a move to a bigger city'],
    ['Starting College', 'เริ่มมหาวิทยาลัย', 'Jay', 'college', 'prepares for college life'],
    ['A Personal Project', 'โปรเจกต์ส่วนตัว', 'Elle', 'project', 'finishes a personal project'],
    ['Building Confidence', 'สร้างความมั่นใจ', 'Puk', 'confidence', 'practices speaking in public'],
    ['Learning from Mistakes', 'เรียนรู้จากความผิดพลาด', 'Max', 'mistake', 'turns mistakes into lessons'],
    ['Finding a Mentor', 'หาที่ปรึกษา', 'Fang', 'mentor', 'asks a senior for advice'],
    ['A Better Routine', 'กิจวัตรที่ดีขึ้น', 'Oat', 'routine', 'builds a better morning routine']
  ]],
  ['16-communication', 'communication', 'การสื่อสาร', [
    ['Asking for Help', 'ขอความช่วยเหลือ', 'Mai', 'help', 'asks for help politely'],
    ['Giving Feedback', 'ให้ฟีดแบ็ก', 'Tao', 'feedback', 'gives useful feedback to a teammate'],
    ['Saying Sorry', 'กล่าวขอโทษ', 'Benz', 'apology', 'apologizes after a mistake'],
    ['Making a Phone Call', 'โทรศัพท์', 'Aek', 'phone call', 'makes an important phone call'],
    ['Writing an Email', 'เขียนอีเมล', 'Ning', 'email', 'writes a clear email'],
    ['A Group Discussion', 'อภิปรายกลุ่ม', 'Wan', 'discussion', 'shares an opinion in a group'],
    ['Solving a Conflict', 'แก้ความขัดแย้ง', 'Ploy', 'conflict', 'listens carefully during a conflict'],
    ['Public Speaking', 'พูดต่อหน้าคน', 'Game', 'speech', 'gives a short speech'],
    ['Active Listening', 'ฟังอย่างตั้งใจ', 'Dao', 'listening', 'practices active listening'],
    ['Clear Instructions', 'คำสั่งชัดเจน', 'Non', 'instruction', 'gives clear instructions']
  ]],
  ['17-life-skills', 'life-skills', 'ทักษะชีวิต', [
    ['Time Management', 'การจัดการเวลา', 'Pla', 'time management', 'plans her day with a list'],
    ['Cleaning the Room', 'ทำความสะอาดห้อง', 'Boy', 'cleaning', 'cleans his room every Saturday'],
    ['Cooking Rice', 'หุงข้าว', 'Nok', 'rice cooker', 'learns to cook rice'],
    ['First Aid', 'ปฐมพยาบาล', 'Yod', 'first aid', 'learns basic first aid'],
    ['Reading a Contract', 'อ่านสัญญา', 'Jan', 'contract', 'reads a contract carefully'],
    ['Making Decisions', 'ตัดสินใจ', 'Peach', 'decision', 'compares choices before deciding'],
    ['Managing Stress', 'จัดการความเครียด', 'Mo', 'stress', 'uses breathing to calm down'],
    ['Healthy Breakfast', 'อาหารเช้าสุขภาพดี', 'Bee', 'breakfast', 'makes a healthy breakfast'],
    ['Packing a Bag', 'จัดกระเป๋า', 'Arm', 'packing', 'packs only what he needs'],
    ['Keeping Promises', 'รักษาสัญญา', 'Rose', 'promise', 'keeps a promise to a friend']
  ]],
  ['18-world', 'world', 'รอบโลก', [
    ['A Pen Pal', 'เพื่อนทางจดหมาย', 'Lada', 'pen pal', 'writes to a student in Canada'],
    ['Trying New Food', 'ลองอาหารใหม่', 'Tom', 'international food', 'tries food from another country'],
    ['World Weather', 'อากาศรอบโลก', 'Ice', 'weather', 'checks weather in different cities'],
    ['Learning Spanish', 'เรียนภาษาสเปน', 'Mild', 'language', 'learns simple Spanish phrases'],
    ['A Global Team', 'ทีมต่างชาติ', 'Paul', 'global team', 'works with people overseas'],
    ['Sending a Package', 'ส่งพัสดุต่างประเทศ', 'Jane', 'package', 'sends a package abroad'],
    ['Different Time Zones', 'เขตเวลาต่างกัน', 'Nick', 'time zone', 'plans a call across time zones'],
    ['World News', 'ข่าวรอบโลก', 'Pui', 'news', 'reads world news every morning'],
    ['Cultural Exchange', 'แลกเปลี่ยนวัฒนธรรม', 'Gift', 'exchange', 'joins a cultural exchange event'],
    ['Travel Dreams', 'ฝันอยากเดินทาง', 'Sun', 'passport', 'saves money for a passport']
  ]]
];

const phraseCategories = [
  ['เทคโนโลยี (Technology)', [
    ['Can you send me the file?', 'แคน ยู เซนด์ มี เดอะ ไฟล์', 'คุณส่งไฟล์ให้ฉันได้ไหม'],
    ['The internet is slow.', 'ดิ อินเทอร์เน็ต อิส สโลว์', 'อินเทอร์เน็ตช้า'],
    ['Please update the app.', 'พลีส อัพเดท ดิ แอป', 'กรุณาอัปเดตแอป'],
    ['I forgot my password.', 'ไอ ฟอร์กอท มาย พาสเวิร์ด', 'ฉันลืมรหัสผ่าน'],
    ['Let me share my screen.', 'เลท มี แชร์ มาย สกรีน', 'ขอฉันแชร์หน้าจอ']
  ]],
  ['การเงิน (Money)', [
    ['How much does it cost?', 'ฮาว มัช ดาส อิท คอสท์', 'ราคาเท่าไหร่'],
    ['I need to save money.', 'ไอ นีด ทู เซฟ มันนี่', 'ฉันต้องออมเงิน'],
    ['Can I pay by card?', 'แคน ไอ เพย์ บาย การ์ด', 'จ่ายด้วยบัตรได้ไหม'],
    ['That is over my budget.', 'แดท อิส โอเวอร์ มาย บัดเจท', 'เกินงบของฉัน'],
    ['Please keep the receipt.', 'พลีส คีพ เดอะ รีซีท', 'กรุณาเก็บใบเสร็จไว้']
  ]],
  ['การสื่อสาร (Communication)', [
    ['Could you repeat that?', 'คูด ยู รีพีท แดท', 'ช่วยพูดซ้ำได้ไหม'],
    ['What do you mean?', 'วอท ดู ยู มีน', 'คุณหมายความว่าอะไร'],
    ['I agree with you.', 'ไอ อะกรี วิธ ยู', 'ฉันเห็นด้วยกับคุณ'],
    ['Let me explain.', 'เลท มี เอ็กซ์เพลน', 'ให้ฉันอธิบาย'],
    ['Please be honest with me.', 'พลีส บี ออนเนสท์ วิธ มี', 'กรุณาซื่อสัตย์กับฉัน']
  ]],
  ['ท่องเที่ยวเพิ่มเติม (More Travel)', [
    ['Where is the nearest station?', 'แวร์ อิส เดอะ เนียเรสท์ สเตชั่น', 'สถานีที่ใกล้ที่สุดอยู่ที่ไหน'],
    ['I need a taxi.', 'ไอ นีด อะ แท็กซี่', 'ฉันต้องการแท็กซี่'],
    ['Can I see the menu?', 'แคน ไอ ซี เดอะ เมนู', 'ขอดูเมนูได้ไหม'],
    ['Is breakfast included?', 'อิส เบรคฟาสท์ อินคลูดิด', 'รวมอาหารเช้าไหม'],
    ['I am lost.', 'ไอ แอม ลอสท์', 'ฉันหลงทาง']
  ]],
  ['กำลังใจและเป้าหมาย (Goals)', [
    ['Keep going.', 'คีพ โกอิง', 'ทำต่อไป'],
    ['You are improving.', 'ยู อาร์ อิมพรูฟวิง', 'คุณกำลังพัฒนาขึ้น'],
    ['Small steps matter.', 'สมอล สเต็ปส์ แมทเทอร์', 'ก้าวเล็ก ๆ ก็สำคัญ'],
    ['Do not give up.', 'ดู นอท กิฟ อัพ', 'อย่ายอมแพ้'],
    ['Practice makes progress.', 'แพรคทิส เมคส์ โพรเกรส', 'การฝึกฝนทำให้ก้าวหน้า']
  ]]
];

function ensureDir(dir) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

function sentencePronunciation(sentence) {
  return sentence
    .replace(/[A-Za-z]+/g, (word) => word.toLowerCase())
    .replace(/\./g, '')
    .replace(/,/g, '');
}

function storyMarkdown(id, title, titleTh, seriesTh, person, keyword, lesson) {
  const pronunciationName = person;
  return `# เรื่องที่ ${id}: ${title} (${titleTh})

## 📖 เรื่องสั้น (2 ภาษา)

### English Version (พร้อมคำอ่าน)

**${title}**

${person} has a normal morning, but today feels different. ${person} wants to learn something useful about ${keyword}.
${pronunciationName} แฮส อะ นอร์มอล มอร์นิง บัท ทูเดย์ ฟีลส์ ดิฟเฟอเรนท์ ${pronunciationName} วอนทส์ ทู เลิร์น ซัมธิง ยูสฟูล อะเบาท์ ${keyword}

At first, the task looks simple. Then a small problem appears, and ${person} has to think carefully.
แอท เฟิสท์ เดอะ ทาสค ลุคส์ ซิมเพิล เดน อะ สมอล พรอบเล็ม อะเพียร์ส แอนด์ ${pronunciationName} แฮส ทู ธิงค์ แคร์ฟูลลี

"I should not rush," ${person} says. "I need a clear plan."
"ไอ ชูด นอท รัช" ${pronunciationName} เซย์ส "ไอ นีด อะ เคลียร์ แพลน"

${person} asks one question, checks the details, and tries again. The second try is much better.
${pronunciationName} อาสค์ส วัน เควสชัน เช็คส์ เดอะ ดีเทลส์ แอนด์ ไทรส์ อะเกน เดอะ เซคันด์ ไทร อิส มัช เบทเทอร์

By the afternoon, ${person} understands the lesson. ${person} ${lesson}.
บาย ดิ อาฟเทอร์นูน ${pronunciationName} อันเดอร์สแตนด์ส เดอะ เลสซัน ${pronunciationName} ${sentencePronunciation(lesson)}

"Learning is easier when I stay calm and keep practicing," ${person} says.
"เลิร์นนิง อิส อีซิเออร์ เวน ไอ สเตย์ คาล์ม แอนด์ คีพ แพรคทิซิง" ${pronunciationName} เซย์ส

---

### เวอร์ชันภาษาไทย

**${titleTh}**

${person} มีเช้าที่ปกติ แต่วันนี้รู้สึกต่างออกไป ${person} อยากเรียนรู้สิ่งที่เป็นประโยชน์เกี่ยวกับ ${keyword}

ตอนแรก งานนี้ดูง่าย จากนั้นปัญหาเล็ก ๆ ก็เกิดขึ้น และ ${person} ต้องคิดอย่างรอบคอบ

"ฉันไม่ควรรีบ" ${person} กล่าว "ฉันต้องมีแผนที่ชัดเจน"

${person} ถามหนึ่งคำถาม ตรวจรายละเอียด และลองอีกครั้ง ครั้งที่สองดีขึ้นมาก

ตอนบ่าย ${person} เข้าใจบทเรียน ${person} ${lesson}

"การเรียนรู้ง่ายขึ้นเมื่อฉันใจเย็นและฝึกต่อไป" ${person} กล่าว

---

## 📚 คำศัพท์สำคัญ (Vocabulary)

| Word | คำอ่าน | ความหมาย | ตัวอย่าง |
|------|--------|----------|----------|
| useful | ยูสฟูล | เป็นประโยชน์ | This lesson is useful. |
| task | ทาสค | งานที่ต้องทำ | The task looks simple. |
| problem | พรอบเล็ม | ปัญหา | A small problem appears. |
| carefully | แคร์ฟูลลี | อย่างรอบคอบ | Think carefully. |
| rush | รัช | รีบ | Do not rush. |
| plan | แพลน | แผน | I need a clear plan. |
| detail | ดีเทล | รายละเอียด | Check the details. |
| practice | แพรคทิส | ฝึกฝน | Keep practicing. |
| calm | คาล์ม | ใจเย็น | Stay calm. |
| lesson | เลสซัน | บทเรียน | ${person} understands the lesson. |

---

## 💬 วลีน่ารู้ (Useful Phrases)

| Phrase | ความหมาย |
|--------|----------|
| feels different | รู้สึกต่างออกไป |
| think carefully | คิดอย่างรอบคอบ |
| clear plan | แผนที่ชัดเจน |
| try again | ลองอีกครั้ง |
| stay calm | ใจเย็น |

---

## ✏️ แบบฝึกหัด (Exercise)

**1. Translate to Thai:**
- I need a clear plan.
- Learning is easier when I stay calm.

**2. Translate to English:**
- ฉันไม่ควรรีบ
- ฉันต้องตรวจรายละเอียด

**3. Write your answer:**
- What problem did ${person} solve?
- What do you do when a task is difficult?

---

**เรื่องที่ ${id} จบ**
`;
}

function writeStories() {
  let id = 51;
  for (const [folder, , seriesTh, stories] of categories) {
    ensureDir(path.join('stories', folder));
    for (const [title, titleTh, person, keyword, lesson] of stories) {
      const file = path.join(root, 'stories', folder, `story-${String(id).padStart(2, '0')}.md`);
      fs.writeFileSync(file, storyMarkdown(id, title, titleTh, seriesTh, person, keyword, lesson), 'utf8');
      id += 1;
    }
  }
}

function writePhrases() {
  const lines = ['# 💬 วลีและสำนวนเพิ่มเติม ชุดขยาย', ''];
  for (const [title, items] of phraseCategories) {
    lines.push(`## ${title}`, '', '| English | คำอ่าน | ไทย |', '|---------|--------|-----|');
    for (const row of items) {
      lines.push(`| ${row[0]} | ${row[1]} | ${row[2]} |`);
    }
    lines.push('');
  }
  fs.writeFileSync(path.join(root, 'phrases', 'expanded-phrases.md'), lines.join('\n'), 'utf8');
}

writeStories();
writePhrases();
console.log('Generated stories 51-150 and phrases/expanded-phrases.md');
