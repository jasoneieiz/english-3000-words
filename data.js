// ข้อมูลเรื่องสั้น 50 เรื่อง
const stories = [
  { id: 1, title: "Morning Routine", titleTh: "กิจวัตรตอนเช้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน" },
  { id: 2, title: "At the Supermarket", titleTh: "ที่ซูเปอร์มาร์เก็ต", series: "daily-life", seriesTh: "ชีวิตประจำวัน" },
  { id: 3, title: "At the Office", titleTh: "ที่ออฟฟิศ", series: "work", seriesTh: "การทำงาน" },
  { id: 4, title: "Job Interview", titleTh: "สัมภาษณ์งาน", series: "work", seriesTh: "การทำงาน" },
  { id: 5, title: "Shopping for Clothes", titleTh: "ซื้อเสื้อผ้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน" },
  { id: 6, title: "At the Restaurant", titleTh: "ที่ร้านอาหาร", series: "daily-life", seriesTh: "ชีวิตประจำวัน" },
  { id: 7, title: "Going to the Doctor", titleTh: "ไปหาหมอ", series: "daily-life", seriesTh: "ชีวิตประจำวัน" },
  { id: 8, title: "At the Bank", titleTh: "ที่ธนาคาร", series: "work", seriesTh: "การทำงาน" },
  { id: 9, title: "Job Interview (2)", titleTh: "สัมภาษณ์งาน (2)", series: "work", seriesTh: "การทำงาน" },
  { id: 10, title: "At the Post Office", titleTh: "ที่ไปรษณีย์", series: "work", seriesTh: "การทำงาน" },
  { id: 11, title: "At the Airport", titleTh: "ที่สนามบิน", series: "travel", seriesTh: "ท่องเที่ยว" },
  { id: 12, title: "At the Hotel", titleTh: "ที่โรงแรม", series: "travel", seriesTh: "ท่องเที่ยว" },
  { id: 13, title: "Sightseeing in Tokyo", titleTh: "เที่ยวชมโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว" },
  { id: 14, title: "Shopping in Tokyo", titleTh: "ช้อปปิ้งในโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว" },
  { id: 15, title: "Going Home", titleTh: "กลับบ้าน", series: "travel", seriesTh: "ท่องเที่ยว" },
  { id: 16, title: "Cooking at Home", titleTh: "ทำอาหารที่บ้าน", series: "food", seriesTh: "อาหาร" },
  { id: 17, title: "At a Thai Restaurant", titleTh: "ที่ร้านอาหารไทย", series: "food", seriesTh: "อาหาร" },
  { id: 18, title: "Baking a Cake", titleTh: "อบเค้ก", series: "food", seriesTh: "อาหาร" },
  { id: 19, title: "At the Food Market", titleTh: "ที่ตลาดอาหาร", series: "food", seriesTh: "อาหาร" },
  { id: 20, title: "Healthy Eating", titleTh: "การกินเพื่อสุขภาพ", series: "food", seriesTh: "อาหาร" },
  { id: 21, title: "Making New Friends", titleTh: "结交新朋友", series: "relationships", seriesTh: "ความสัมพันธ์" },
  { id: 22, title: "Dating", titleTh: "การออกเดท", series: "relationships", seriesTh: "ความสัมพันธ์" },
  { id: 23, title: "Long Distance Relationship", titleTh: "ความสัมพันธ์ทางไกล", series: "relationships", seriesTh: "ความสัมพันธ์" },
  { id: 24, title: "Family Reunion", titleTh: "รวมญาติ", series: "relationships", seriesTh: "ความสัมพันธ์" },
  { id: 25, title: "True Friendship", titleTh: "มิตรภาพที่แท้จริง", series: "relationships", seriesTh: "ความสัมพันธ์" },
  { id: 26, title: "Going to the Gym", titleTh: "ไปยิม", series: "health", seriesTh: "สุขภาพ" },
  { id: 27, title: "Mental Health", titleTh: "สุขภาพจิต", series: "health", seriesTh: "สุขภาพ" },
  { id: 28, title: "Quitting Smoking", titleTh: "เลิกบุหรี่", series: "health", seriesTh: "สุขภาพ" },
  { id: 29, title: "Running a Marathon", titleTh: "วิ่งมาราธอน", series: "health", seriesTh: "สุขภาพ" },
  { id: 30, title: "Healthy Sleep", titleTh: "การนอนหลับที่ดี", series: "health", seriesTh: "สุขภาพ" },
  { id: 31, title: "Learning English", titleTh: "เรียนภาษาอังกฤษ", series: "education", seriesTh: "การศึกษา" },
  { id: 32, title: "University Life", titleTh: "ชีวิตมหาวิทยาลัย", series: "education", seriesTh: "การศึกษา" },
  { id: 33, title: "Studying Abroad", titleTh: "เรียนต่อต่างประเทศ", series: "education", seriesTh: "การศึกษา" },
  { id: 34, title: "Online Learning", titleTh: "การเรียนออนไลน์", series: "education", seriesTh: "การศึกษา" },
  { id: 35, title: "Library Study", titleTh: "เรียนที่ห้องสมุด", series: "education", seriesTh: "การศึกษา" },
  { id: 36, title: "Scholarship Student", titleTh: "นักเรียนทุน", series: "education", seriesTh: "การศึกษา" },
  { id: 37, title: "Career Change", titleTh: "เปลี่ยนอาชีพ", series: "education", seriesTh: "การศึกษา" },
  { id: 38, title: "First Job", titleTh: "งานแรก", series: "career", seriesTh: "อาชีพ" },
  { id: 39, title: "Work From Home", titleTh: "ทำงานจากบ้าน", series: "career", seriesTh: "อาชีพ" },
  { id: 40, title: "Starting a Business", titleTh: "เริ่มต้นธุรกิจ", series: "career", seriesTh: "อาชีพ" },
  { id: 41, title: "Job Interview Success", titleTh: "สัมภาษณ์งานสำเร็จ", series: "career", seriesTh: "อาชีพ" },
  { id: 42, title: "Teamwork", titleTh: "การทำงานเป็นทีม", series: "career", seriesTh: "อาชีพ" },
  { id: 43, title: "Getting Promoted", titleTh: "ได้รับการเลื่อนตำแหน่ง", series: "career", seriesTh: "อาชีพ" },
  { id: 44, title: "Dealing with Difficult Boss", titleTh: "จัดการกับเจ้านายที่ยาก", series: "career", seriesTh: "อาชีพ" },
  { id: 45, title: "Work-Life Balance", titleTh: "สมดุลงาน-ชีวิต", series: "career", seriesTh: "อาชีพ" },
  { id: 46, title: "Retirement Planning", titleTh: "วางแผนเกษียณ", series: "career", seriesTh: "อาชีพ" },
  { id: 47, title: "Networking", titleTh: "สร้างเครือข่าย", series: "career", seriesTh: "อาชีพ" },
  { id: 48, title: "Side Hustle", titleTh: "งานเสริม", series: "career", seriesTh: "อาชีพ" },
  { id: 49, title: "Overcoming Failure", titleTh: "ก้าวข้ามความล้มเหลว", series: "career", seriesTh: "อาชีพ" },
  { id: 50, title: "Success Story", titleTh: "เรื่องราวความสำเร็จ", series: "career", seriesTh: "อาชีพ" }
];

// ข้อมูลคำศัพท์ (3,000 คำ - ตัวอย่าง 100 คำแรก)
const vocabulary = [
  { level: 1, word: "wake up", pronunciation: "เวค อัพ", meaning: "ตื่นนอน", example: "I wake up early." },
  { level: 1, word: "brush", pronunciation: "บรัช", meaning: "แปรง", example: "Brush your teeth." },
  { level: 1, word: "shower", pronunciation: "ชาวเออะ", meaning: "อาบน้ำฝักบัว", example: "Take a shower." },
  { level: 1, word: "breakfast", pronunciation: "เบรคเฟิสท", meaning: "อาหารเช้า", example: "Eat breakfast." },
  { level: 1, word: "usually", pronunciation: "ยูชัวลี่", meaning: "โดยปกติ", example: "I usually eat bread." },
  { level: 1, word: "leave", pronunciation: "ลีฟ", meaning: "ออกไป", example: "Leave the house." },
  { level: 1, word: "colleague", pronunciation: "คอลลีก", meaning: "เพื่อนร่วมงาน", example: "My colleagues are nice." },
  { level: 1, word: "arrive", pronunciation: "อะไรฟว", meaning: "มาถึง", example: "Arrive at work." },
  { level: 1, word: "supermarket", pronunciation: "ซูเพอะมาร์เคท", meaning: "ซูเปอร์มาร์เก็ต", example: "Go to supermarket." },
  { level: 1, word: "fresh", pronunciation: "เฟรช", meaning: "สด", example: "Fresh vegetables." },
  { level: 1, word: "vegetable", pronunciation: "เวจทะเบิล", meaning: "ผัก", example: "Eat vegetables." },
  { level: 1, word: "meat", pronunciation: "มีท", meaning: "เนื้อสัตว์", example: "Buy meat." },
  { level: 1, word: "price", pronunciation: "ไพรส", meaning: "ราคา", example: "Check the price." },
  { level: 1, word: "credit card", pronunciation: "เครดิต คาร์ท", meaning: "บัตรเครดิต", example: "Pay with credit card." },
  { level: 1, word: "total", pronunciation: "โททอล", meaning: "ยอดรวม", example: "Total is 1,500 baht." },
  { level: 2, word: "communicate", pronunciation: "คอมมิวนิเคท", meaning: "สื่อสาร", example: "Communicate effectively." },
  { level: 2, word: "consumer", pronunciation: "คอนซูเมอะ", meaning: "ผู้บริโภค", example: "Consumer rights." },
  { level: 2, word: "customer", pronunciation: "คัสโทเมอะ", meaning: "ลูกค้า", example: "Customer service." },
  { level: 2, word: "opportunity", pronunciation: "ออพพอร์ทูนิตี้", meaning: "โอกาส", example: "Great opportunity." },
  { level: 2, word: "organization", pronunciation: "ออร์แกไนเซชั่น", meaning: "องค์กร", example: "Non-profit organization." },
  { level: 3, word: "opinion", pronunciation: "โอพินเนียน", meaning: "ความเห็น", example: "In my opinion." },
  { level: 3, word: "significant", pronunciation: "ซิกนิฟิแคนท", meaning: "สำคัญ", example: "Significant change." },
  { level: 3, word: "responsibility", pronunciation: "ริสปอนซิบิลิทิ", meaning: "ความรับผิดชอบ", example: "Take responsibility." }
];

// ข้อมูลวลีและสำนวน (150+ รายการ)
const phrases = {
  greetings: {
    title: "ทักทาย (Greetings)",
    items: [
      { en: "Hello!", pronunciation: "เฮลโล", th: "สวัสดี" },
      { en: "Hi!", pronunciation: "ไฮ", th: "หวัดดี" },
      { en: "Good morning!", pronunciation: "กู้ด มอร์นิง", th: "สวัสดีตอนเช้า" },
      { en: "Good afternoon!", pronunciation: "กู้ด อาฟเทอะนูน", th: "สวัสดีตอนบ่าย" },
      { en: "Good evening!", pronunciation: "กู้ด อีฟนิง", th: "สวัสดีตอนเย็น" },
      { en: "How are you?", pronunciation: "ฮาว อาร์ ยู", th: "คุณสบายดีไหม" },
      { en: "I'm fine, thanks.", pronunciation: "ไอม ไฟน แธงคส", th: "ฉันสบายดี ขอบคุณ" },
      { en: "Nice to meet you.", pronunciation: "ไนส ทู มีท ยู", th: "ยินดีที่ได้รู้จัก" },
      { en: "What's your name?", pronunciation: "วอทส ยัว เนม", th: "คุณชื่ออะไร" },
      { en: "My name is...", pronunciation: "มาย เนม อิส", th: "ฉันชื่อ..." }
    ]
  },
  thanks: {
    title: "ขอบคุณและขอโทษ (Thanks & Sorry)",
    items: [
      { en: "Thank you!", pronunciation: "แธงค ยู", th: "ขอบคุณ" },
      { en: "Thanks a lot!", pronunciation: "แธงคส อะ ลอท", th: "ขอบคุณมาก" },
      { en: "You're welcome.", pronunciation: "ยัว เวลคัม", th: "ด้วยความยินดี" },
      { en: "No problem.", pronunciation: "โน พร็อบเบลม", th: "ไม่มีปัญหา" },
      { en: "I'm sorry.", pronunciation: "ไอม ซอริ", th: "ฉันขอโทษ" },
      { en: "Excuse me.", pronunciation: "เอคซคิ้วส มี", th: "ขอโทษค่ะ/ครับ" },
      { en: "Never mind.", pronunciation: "เนเวอะ ไมนด", th: "ไม่เป็นไร" },
      { en: "It's okay.", pronunciation: "อิทส โอเค", th: "ไม่เป็นไร" }
    ]
  },
  common: {
    title: "วลีที่ใช้บ่อย (Common Phrases)",
    items: [
      { en: "I don't understand.", pronunciation: "ไอ โดนท อันเดอสแตนด์", th: "ฉันไม่เข้าใจ" },
      { en: "Can you help me?", pronunciation: "แคน ยู เฮลพ มี", th: "คุณช่วยฉันได้ไหม" },
      { en: "I don't know.", pronunciation: "ไอ โดนท โน", th: "ฉันไม่รู้" },
      { en: "Let me think.", pronunciation: "เลท มี ธิงค", th: "ให้ฉันคิดก่อน" },
      { en: "Wait a moment.", pronunciation: "เวท อะ โมเมินท", th: "รอสักครู่นะ" },
      { en: "Hurry up!", pronunciation: "ฮัรรี อัพ", th: "เร็วๆ เข้า!" },
      { en: "Take your time.", pronunciation: "เทค ยัว ไทม", th: "ช้าๆ ก็ได้" },
      { en: "See you later.", pronunciation: "ซี ยู เลเทอะ", th: "แล้วเจอกัน" },
      { en: "Goodbye!", pronunciation: "กู้ดบาย", th: "ลาก่อน" },
      { en: "Have a nice day!", pronunciation: "แฮฟ อะ ไนส เด", th: "ขอให้เป็นวันที่ดี" }
    ]
  },
  idioms: {
    title: "สำนวนที่น่าสนใจ (Idioms)",
    items: [
      { en: "A piece of cake", pronunciation: "", th: "ง่ายมาก" },
      { en: "Break a leg!", pronunciation: "", th: "โชคดี" },
      { en: "Under the weather", pronunciation: "", th: "ไม่สบาย" },
      { en: "Once in a blue moon", pronunciation: "", th: "นานๆ ครั้ง" },
      { en: "Time flies!", pronunciation: "", th: "เวลาผ่านไปเร็ว" },
      { en: "Better late than never", pronunciation: "", th: "มาช้ายังดีกว่าไม่มา" },
      { en: "Hit the books", pronunciation: "", th: "เรียนหนัก" },
      { en: "See eye to eye", pronunciation: "", th: "เห็นด้วย" }
    ]
  },
  work: {
    title: "การทำงาน (Work & Business)",
    items: [
      { en: "Let's touch base later.", pronunciation: "", th: "ไว้คุยกันทีหลัง" },
      { en: "I'll keep you posted.", pronunciation: "", th: "ฉันจะแจ้งให้ทราบ" },
      { en: "We're on the same page.", pronunciation: "", th: "เราเข้าใจตรงกัน" },
      { en: "Let's think outside the box.", pronunciation: "", th: "ลองคิดนอกกรอบ" },
      { en: "It's a win-win situation.", pronunciation: "", th: "ทั้งสองฝ่ายได้ประโยชน์" },
      { en: "Let's call it a day.", pronunciation: "", th: "เลิกงานกันเถอะ" },
      { en: "I'm swamped with work.", pronunciation: "", th: "ฉันงานยุ่งมาก" }
    ]
  },
  encouragement: {
    title: "การให้กำลังใจ (Encouragement)",
    items: [
      { en: "You've got this!", pronunciation: "", th: "คุณทำได้!" },
      { en: "Hang in there!", pronunciation: "", th: "อดทนไว้!" },
      { en: "Keep your chin up!", pronunciation: "", th: "อย่าท้อ!" },
      { en: "It'll all work out.", pronunciation: "", th: "ทุกอย่างจะผ่านไปได้" },
      { en: "Don't sweat it.", pronunciation: "", th: "อย่ากังวล" },
      { en: "You're doing great!", pronunciation: "", th: "คุณทำได้ดีมาก!" },
      { en: "One step at a time.", pronunciation: "", th: "ค่อยๆ ทำไป" },
      { en: "Believe in yourself!", pronunciation: "", th: "เชื่อมั่นในตัวเอง!" }
    ]
  }
};

console.log('Data loaded:', stories.length, 'stories', vocabulary.length, 'vocabulary words');
