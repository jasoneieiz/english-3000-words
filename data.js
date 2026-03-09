// ข้อมูลเรื่องสั้น 50 เรื่อง พร้อมเนื้อหา
const stories = [
  { id: 1, title: "Morning Routine", titleTh: "กิจวัตรตอนเช้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน", content: `
    <h3>English Version</h3>
    <p><strong>My Morning Routine</strong></p>
    <p>I wake up at 6:00 AM every day. First, I brush my teeth and wash my face. Then I take a shower and get dressed.</p>
    <p>For breakfast, I usually have toast with eggs and a cup of coffee. I check my phone and read the news while eating.</p>
    <p>At 7:30 AM, I leave my house and go to work. I take the bus because it's cheaper than driving. The bus ride takes about 30 minutes.</p>
    <p>I arrive at the office at 8:00 AM. I say hello to my colleagues and start working.</p>
    
    <h3>เวอร์ชันภาษาไทย</h3>
    <p><strong>กิจวัตรตอนเช้าของฉัน</strong></p>
    <p>ฉันตื่นนอนตอน 6 โมงเช้าทุกวัน อย่างแรก ฉันแปรงฟันและล้างหน้า จากนั้นฉันอาบน้ำและแต่งตัว</p>
    <p>สำหรับอาหารเช้า ฉันมักจะกินขนมปังปิ้งกับไข่และกาแฟหนึ่งถ้วย ฉันดูโทรศัพท์และอ่านข่าวขณะกินข้าว</p>
    <p>7 โมงครึ่ง ฉันออกจากบ้านไปทำงาน ฉันนั่งรถเมล์เพราะถูกกว่าขับรถ รถเมล์ใช้เวลาประมาณ 30 นาที</p>
    <p>ฉันถึงออฟฟิศตอน 8 โมงเช้า ฉันสวัสดีเพื่อนร่วมงานและเริ่มทำงาน</p>
    
    <h3>คำศัพท์สำคัญ</h3>
    <ul>
      <li><strong>wake up</strong> (เวค อัพ) = ตื่นนอน</li>
      <li><strong>brush</strong> (บรัช) = แปรง</li>
      <li><strong>shower</strong> (ชาวเออะ) = อาบน้ำฝักบัว</li>
      <li><strong>breakfast</strong> (เบรคเฟิสท) = อาหารเช้า</li>
      <li><strong>usually</strong> (ยูชัวลี่) = โดยปกติ</li>
      <li><strong>leave</strong> (ลีฟ) = ออกไป</li>
      <li><strong>colleague</strong> (คอลลีก) = เพื่อนร่วมงาน</li>
      <li><strong>arrive</strong> (อะไรฟว) = มาถึง</li>
    </ul>
  `},
  { id: 2, title: "At the Supermarket", titleTh: "ที่ซูเปอร์มาร์เก็ต", series: "daily-life", seriesTh: "ชีวิตประจำวัน", content: `
    <h3>English Version</h3>
    <p><strong>Shopping for Groceries</strong></p>
    <p>Today is Saturday, so I go to the supermarket. I need to buy food for the week.</p>
    <p>I take a shopping cart and walk through the aisles. First, I go to the vegetable section. I buy tomatoes, lettuce, and carrots. They look fresh and colorful.</p>
    <p>Next, I go to the meat section. I choose some chicken and beef. I check the price and the expiration date.</p>
    <p>Then, I buy some fruits - apples, bananas, and oranges. I also get some bread, milk, and eggs.</p>
    <p>At the checkout counter, I pay with my credit card. The total is 1,500 baht. I put all the items in my bag and go home.</p>
    
    <h3>เวอร์ชันภาษาไทย</h3>
    <p><strong>ซื้อของชำ</strong></p>
    <p>วันนี้เป็นวันเสาร์ ฉันเลยไปซูเปอร์มาร์เก็ต ฉันต้องซื้ออาหารสำหรับทั้งสัปดาห์</p>
    <p>ฉันเข็นรถเข็นและเดินไปตามทางเดิน อย่างแรก ฉันไปแผนกผัก ฉันซื้อมะเขือเทศ ผักกาด และแครอท พวกมันดูสดและมีสีสัน</p>
    <p>ถัดไป ฉันไปแผนกเนื้อสัตว์ ฉันเลือกไก่และเนื้อวัว ฉันตรวจสอบราคาและวันหมดอายุ</p>
    <p>จากนั้น ฉันซื้อผลไม้ - แอปเปิ้ล กล้วย และส้ม ฉันยังซื้อขนมปัง นม และไข่</p>
    <p>ที่เคาน์เตอร์ชำระเงิน ฉันจ่ายด้วยบัตรเครดิต ยอดรวมเป็น 1,500 บาท ฉันใส่ของทั้งหมดในถุงแล้วกลับบ้าน</p>
    
    <h3>คำศัพท์สำคัญ</h3>
    <ul>
      <li><strong>supermarket</strong> (ซูเพอะมาร์เคท) = ซูเปอร์มาร์เก็ต</li>
      <li><strong>shopping cart</strong> (ช็อปปิ้ง คาร์ท) = รถเข็น</li>
      <li><strong>vegetable</strong> (เวจทะเบิล) = ผัก</li>
      <li><strong>fresh</strong> (เฟรช) = สด</li>
      <li><strong>meat</strong> (มีท) = เนื้อสัตว์</li>
      <li><strong>price</strong> (ไพรส) = ราคา</li>
      <li><strong>credit card</strong> (เครดิต คาร์ท) = บัตรเครดิต</li>
    </ul>
  `},
  { id: 3, title: "At the Office", titleTh: "ที่ออฟฟิศ", series: "work", seriesTh: "การทำงาน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 4, title: "Job Interview", titleTh: "สัมภาษณ์งาน", series: "work", seriesTh: "การทำงาน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 5, title: "Shopping for Clothes", titleTh: "ซื้อเสื้อผ้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 6, title: "At the Restaurant", titleTh: "ที่ร้านอาหาร", series: "daily-life", seriesTh: "ชีวิตประจำวัน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 7, title: "Going to the Doctor", titleTh: "ไปหาหมอ", series: "daily-life", seriesTh: "ชีวิตประจำวัน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 8, title: "At the Bank", titleTh: "ที่ธนาคาร", series: "work", seriesTh: "การทำงาน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 9, title: "Job Interview (2)", titleTh: "สัมภาษณ์งาน (2)", series: "work", seriesTh: "การทำงาน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 10, title: "At the Post Office", titleTh: "ที่ไปรษณีย์", series: "work", seriesTh: "การทำงาน", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 11, title: "At the Airport", titleTh: "ที่สนามบิน", series: "travel", seriesTh: "ท่องเที่ยว", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 12, title: "At the Hotel", titleTh: "ที่โรงแรม", series: "travel", seriesTh: "ท่องเที่ยว", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 13, title: "Sightseeing in Tokyo", titleTh: "เที่ยวชมโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 14, title: "Shopping in Tokyo", titleTh: "ช้อปปิ้งในโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 15, title: "Going Home", titleTh: "กลับบ้าน", series: "travel", seriesTh: "ท่องเที่ยว", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 16, title: "Cooking at Home", titleTh: "ทำอาหารที่บ้าน", series: "food", seriesTh: "อาหาร", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 17, title: "At a Thai Restaurant", titleTh: "ที่ร้านอาหารไทย", series: "food", seriesTh: "อาหาร", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 18, title: "Baking a Cake", titleTh: "อบเค้ก", series: "food", seriesTh: "อาหาร", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 19, title: "At the Food Market", titleTh: "ที่ตลาดอาหาร", series: "food", seriesTh: "อาหาร", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 20, title: "Healthy Eating", titleTh: "การกินเพื่อสุขภาพ", series: "food", seriesTh: "อาหาร", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 21, title: "Making New Friends", titleTh: "结交新朋友", series: "relationships", seriesTh: "ความสัมพันธ์", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 22, title: "Dating", titleTh: "การออกเดท", series: "relationships", seriesTh: "ความสัมพันธ์", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 23, title: "Long Distance Relationship", titleTh: "ความสัมพันธ์ทางไกล", series: "relationships", seriesTh: "ความสัมพันธ์", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 24, title: "Family Reunion", titleTh: "รวมญาติ", series: "relationships", seriesTh: "ความสัมพันธ์", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 25, title: "True Friendship", titleTh: "มิตรภาพที่แท้จริง", series: "relationships", seriesTh: "ความสัมพันธ์", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 26, title: "Going to the Gym", titleTh: "ไปยิม", series: "health", seriesTh: "สุขภาพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 27, title: "Mental Health", titleTh: "สุขภาพจิต", series: "health", seriesTh: "สุขภาพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 28, title: "Quitting Smoking", titleTh: "เลิกบุหรี่", series: "health", seriesTh: "สุขภาพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 29, title: "Running a Marathon", titleTh: "วิ่งมาราธอน", series: "health", seriesTh: "สุขภาพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 30, title: "Healthy Sleep", titleTh: "การนอนหลับที่ดี", series: "health", seriesTh: "สุขภาพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 31, title: "Learning English", titleTh: "เรียนภาษาอังกฤษ", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 32, title: "University Life", titleTh: "ชีวิตมหาวิทยาลัย", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 33, title: "Studying Abroad", titleTh: "เรียนต่อต่างประเทศ", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 34, title: "Online Learning", titleTh: "การเรียนออนไลน์", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 35, title: "Library Study", titleTh: "เรียนที่ห้องสมุด", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 36, title: "Scholarship Student", titleTh: "นักเรียนทุน", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 37, title: "Career Change", titleTh: "เปลี่ยนอาชีพ", series: "education", seriesTh: "การศึกษา", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 38, title: "First Job", titleTh: "งานแรก", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 39, title: "Work From Home", titleTh: "ทำงานจากบ้าน", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 40, title: "Starting a Business", titleTh: "เริ่มต้นธุรกิจ", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 41, title: "Job Interview Success", titleTh: "สัมภาษณ์งานสำเร็จ", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 42, title: "Teamwork", titleTh: "การทำงานเป็นทีม", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 43, title: "Getting Promoted", titleTh: "ได้รับการเลื่อนตำแหน่ง", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 44, title: "Dealing with Difficult Boss", titleTh: "จัดการกับเจ้านายที่ยาก", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 45, title: "Work-Life Balance", titleTh: "สมดุลงาน-ชีวิต", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 46, title: "Retirement Planning", titleTh: "วางแผนเกษียณ", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 47, title: "Networking", titleTh: "สร้างเครือข่าย", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 48, title: "Side Hustle", titleTh: "งานเสริม", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 49, title: "Overcoming Failure", titleTh: "ก้าวข้ามความล้มเหลว", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`},
  { id: 50, title: "Success Story", titleTh: "เรื่องราวความสำเร็จ", series: "career", seriesTh: "อาชีพ", content: `<p>เนื้อหากำลังอัปเดตค่ะ...</p>`}
];

// ข้อมูลคำศัพท์ (ตัวอย่าง 100 คำแรก)
const vocabulary = [
  { level: 1, word: "wake up", pronunciation: "เวค อัพ", meaning: "ตื่นนอน", example: "I wake up early." },
  { level: 1, word: "brush", pronunciation: "บรัช", meaning: "แปรง", example: "Brush your teeth." },
  { level: 1, word: "breakfast", pronunciation: "เบรคเฟิสท", meaning: "อาหารเช้า", example: "Eat breakfast." },
  { level: 1, word: "supermarket", pronunciation: "ซูเพอะมาร์เคท", meaning: "ซูเปอร์มาร์เก็ต", example: "Go to supermarket." },
  { level: 1, word: "fresh", pronunciation: "เฟรช", meaning: "สด", example: "Fresh vegetables." }
];

// ข้อมูลวลีและสำนวน
const phrases = {
  greetings: {
    title: "ทักทาย (Greetings)",
    items: [
      { en: "Hello!", pronunciation: "เฮลโล", th: "สวัสดี" },
      { en: "Hi!", pronunciation: "ไฮ", th: "หวัดดี" },
      { en: "Good morning!", pronunciation: "กู้ด มอร์นิง", th: "สวัสดีตอนเช้า" },
      { en: "How are you?", pronunciation: "ฮาว อาร์ ยู", th: "คุณสบายดีไหม" },
      { en: "Nice to meet you.", pronunciation: "ไนส ทู มีท ยู", th: "ยินดีที่ได้รู้จัก" }
    ]
  },
  thanks: {
    title: "ขอบคุณและขอโทษ (Thanks & Sorry)",
    items: [
      { en: "Thank you!", pronunciation: "แธงค ยู", th: "ขอบคุณ" },
      { en: "Thanks a lot!", pronunciation: "แธงคส อะ ลอท", th: "ขอบคุณมาก" },
      { en: "You're welcome.", pronunciation: "ยัว เวลคัม", th: "ด้วยความยินดี" },
      { en: "I'm sorry.", pronunciation: "ไอม ซอริ", th: "ฉันขอโทษ" },
      { en: "Excuse me.", pronunciation: "เอคซคิ้วส มี", th: "ขอโทษค่ะ/ครับ" }
    ]
  },
  common: {
    title: "วลีที่ใช้บ่อย (Common Phrases)",
    items: [
      { en: "I don't understand.", pronunciation: "ไอ โดนท อันเดอสแตนด์", th: "ฉันไม่เข้าใจ" },
      { en: "Can you help me?", pronunciation: "แคน ยู เฮลพ มี", th: "คุณช่วยฉันได้ไหม" },
      { en: "I don't know.", pronunciation: "ไอ โดนท โน", th: "ฉันไม่รู้" },
      { en: "Wait a moment.", pronunciation: "เวท อะ โมเมินท", th: "รอสักครู่นะ" },
      { en: "See you later.", pronunciation: "ซี ยู เลเทอะ", th: "แล้วเจอกัน" }
    ]
  }
};
