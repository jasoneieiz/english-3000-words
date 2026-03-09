// ข้อมูลเรื่องสั้น 50 เรื่อง
const stories = [
    // ซีรีส์ 1: ชีวิตประจำวัน
    { id: 1, title: "Morning Routine", titleTh: "กิจวัตรตอนเช้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน", file: "story-01.md" },
    { id: 2, title: "At the Supermarket", titleTh: "ที่ซูเปอร์มาร์เก็ต", series: "daily-life", seriesTh: "ชีวิตประจำวัน", file: "story-02.md" },
    { id: 5, title: "Shopping for Clothes", titleTh: "ซื้อเสื้อผ้า", series: "daily-life", seriesTh: "ชีวิตประจำวัน", file: "story-05.md" },
    { id: 6, title: "At the Restaurant", titleTh: "ที่ร้านอาหาร", series: "daily-life", seriesTh: "ชีวิตประจำวัน", file: "story-06.md" },
    { id: 7, title: "Going to the Doctor", titleTh: "ไปหาหมอ", series: "daily-life", seriesTh: "ชีวิตประจำวัน", file: "story-07.md" },
    
    // ซีรีส์ 2: การทำงาน
    { id: 3, title: "At the Office", titleTh: "ที่ออฟฟิศ", series: "work", seriesTh: "การทำงาน", file: "story-03.md" },
    { id: 4, title: "Job Interview", titleTh: "สัมภาษณ์งาน", series: "work", seriesTh: "การทำงาน", file: "story-04.md" },
    { id: 8, title: "At the Bank", titleTh: "ที่ธนาคาร", series: "work", seriesTh: "การทำงาน", file: "story-08.md" },
    { id: 9, title: "Job Interview (2)", titleTh: "สัมภาษณ์งาน (2)", series: "work", seriesTh: "การทำงาน", file: "story-09.md" },
    { id: 10, title: "At the Post Office", titleTh: "ที่ไปรษณีย์", series: "work", seriesTh: "การทำงาน", file: "story-10.md" },
    
    // ซีรีส์ 3: ท่องเที่ยว
    { id: 11, title: "At the Airport", titleTh: "ที่สนามบิน", series: "travel", seriesTh: "ท่องเที่ยว", file: "story-11.md" },
    { id: 12, title: "At the Hotel", titleTh: "ที่โรงแรม", series: "travel", seriesTh: "ท่องเที่ยว", file: "story-12.md" },
    { id: 13, title: "Sightseeing in Tokyo", titleTh: "เที่ยวชมโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว", file: "story-13.md" },
    { id: 14, title: "Shopping in Tokyo", titleTh: "ช้อปปิ้งในโตเกียว", series: "travel", seriesTh: "ท่องเที่ยว", file: "story-14.md" },
    { id: 15, title: "Going Home", titleTh: "กลับบ้าน", series: "travel", seriesTh: "ท่องเที่ยว", file: "story-15.md" },
    
    // ซีรีส์ 4: อาหาร
    { id: 16, title: "Cooking at Home", titleTh: "ทำอาหารที่บ้าน", series: "food", seriesTh: "อาหาร", file: "story-16.md" },
    { id: 17, title: "At a Thai Restaurant", titleTh: "ที่ร้านอาหารไทย", series: "food", seriesTh: "อาหาร", file: "story-17.md" },
    { id: 18, title: "Baking a Cake", titleTh: "อบเค้ก", series: "food", seriesTh: "อาหาร", file: "story-18.md" },
    { id: 19, title: "At the Food Market", titleTh: "ที่ตลาดอาหาร", series: "food", seriesTh: "อาหาร", file: "story-19.md" },
    { id: 20, title: "Healthy Eating", titleTh: "การกินเพื่อสุขภาพ", series: "food", seriesTh: "อาหาร", file: "story-20.md" },
    
    // ซีรีส์ 5: ความสัมพันธ์
    { id: 21, title: "Making New Friends", titleTh: "结交新朋友", series: "relationships", seriesTh: "ความสัมพันธ์", file: "story-21.md" },
    { id: 22, title: "Dating", titleTh: "การออกเดท", series: "relationships", seriesTh: "ความสัมพันธ์", file: "story-22.md" },
    { id: 23, title: "Long Distance Relationship", titleTh: "ความสัมพันธ์ทางไกล", series: "relationships", seriesTh: "ความสัมพันธ์", file: "story-23.md" },
    { id: 24, title: "Family Reunion", titleTh: "รวมญาติ", series: "relationships", seriesTh: "ความสัมพันธ์", file: "story-24.md" },
    { id: 25, title: "True Friendship", titleTh: "มิตรภาพที่แท้จริง", series: "relationships", seriesTh: "ความสัมพันธ์", file: "story-25.md" },
    
    // ซีรีส์ 6: สุขภาพ
    { id: 26, title: "Going to the Gym", titleTh: "ไปยิม", series: "health", seriesTh: "สุขภาพ", file: "story-26.md" },
    { id: 27, title: "Mental Health", titleTh: "สุขภาพจิต", series: "health", seriesTh: "สุขภาพ", file: "story-27.md" },
    { id: 28, title: "Quitting Smoking", titleTh: "เลิกบุหรี่", series: "health", seriesTh: "สุขภาพ", file: "story-28.md" },
    { id: 29, title: "Running a Marathon", titleTh: "วิ่งมาราธอน", series: "health", seriesTh: "สุขภาพ", file: "story-29.md" },
    { id: 30, title: "Healthy Sleep", titleTh: "การนอนหลับที่ดี", series: "health", seriesTh: "สุขภาพ", file: "story-30.md" },
    
    // ซีรีส์ 7: การศึกษา
    { id: 31, title: "Learning English", titleTh: "เรียนภาษาอังกฤษ", series: "education", seriesTh: "การศึกษา", file: "story-31.md" },
    { id: 32, title: "University Life", titleTh: "ชีวิตมหาวิทยาลัย", series: "education", seriesTh: "การศึกษา", file: "story-32.md" },
    { id: 33, title: "Studying Abroad", titleTh: "เรียนต่อต่างประเทศ", series: "education", seriesTh: "การศึกษา", file: "story-33.md" },
    { id: 34, title: "Online Learning", titleTh: "การเรียนออนไลน์", series: "education", seriesTh: "การศึกษา", file: "story-34.md" },
    { id: 35, title: "Library Study", titleTh: "เรียนที่ห้องสมุด", series: "education", seriesTh: "การศึกษา", file: "story-35.md" },
    { id: 36, title: "Scholarship Student", titleTh: "นักเรียนทุน", series: "education", seriesTh: "การศึกษา", file: "story-36.md" },
    { id: 37, title: "Career Change", titleTh: "เปลี่ยนอาชีพ", series: "education", seriesTh: "การศึกษา", file: "story-37.md" },
    
    // ซีรีส์ 8: อาชีพและการงาน
    { id: 38, title: "First Job", titleTh: "งานแรก", series: "career", seriesTh: "อาชีพ", file: "story-38.md" },
    { id: 39, title: "Work From Home", titleTh: "ทำงานจากบ้าน", series: "career", seriesTh: "อาชีพ", file: "story-39.md" },
    { id: 40, title: "Starting a Business", titleTh: "เริ่มต้นธุรกิจ", series: "career", seriesTh: "อาชีพ", file: "story-40.md" },
    { id: 41, title: "Job Interview Success", titleTh: "สัมภาษณ์งานสำเร็จ", series: "career", seriesTh: "อาชีพ", file: "story-41.md" },
    { id: 42, title: "Teamwork", titleTh: "การทำงานเป็นทีม", series: "career", seriesTh: "อาชีพ", file: "story-42.md" },
    { id: 43, title: "Getting Promoted", titleTh: "ได้รับการเลื่อนตำแหน่ง", series: "career", seriesTh: "อาชีพ", file: "story-43.md" },
    { id: 44, title: "Dealing with Difficult Boss", titleTh: "จัดการกับเจ้านายที่ยาก", series: "career", seriesTh: "อาชีพ", file: "story-44.md" },
    { id: 45, title: "Work-Life Balance", titleTh: "สมดุลงาน-ชีวิต", series: "career", seriesTh: "อาชีพ", file: "story-45.md" },
    { id: 46, title: "Retirement Planning", titleTh: "วางแผนเกษียณ", series: "career", seriesTh: "อาชีพ", file: "story-46.md" },
    { id: 47, title: "Networking", titleTh: "สร้างเครือข่าย", series: "career", seriesTh: "อาชีพ", file: "story-47.md" },
    { id: 48, title: "Side Hustle", titleTh: "งานเสริม", series: "career", seriesTh: "อาชีพ", file: "story-48.md" },
    { id: 49, title: "Overcoming Failure", titleTh: "ก้าวข้ามความล้มเหลว", series: "career", seriesTh: "อาชีพ", file: "story-49.md" },
    { id: 50, title: "Success Story", titleTh: "เรื่องราวความสำเร็จ", series: "career", seriesTh: "อาชีพ", file: "story-50.md" }
];

// ข้อมูลคำศัพท์ (ตัวอย่าง)
const vocabulary = [
    // Level 1 (A1-A2) - 500 คำ
    { level: 1, word: "wake up", pronunciation: "เวค อัพ", meaning: "ตื่นนอน", example: "I wake up early." },
    { level: 1, word: "brush", pronunciation: "บรัช", meaning: "แปรง", example: "Brush your teeth." },
    { level: 1, word: "breakfast", pronunciation: "เบรคเฟิสท", meaning: "อาหารเช้า", example: "Eat breakfast." },
    { level: 1, word: "supermarket", pronunciation: "ซูเพอะมาร์เคท", meaning: "ซูเปอร์มาร์เก็ต", example: "Go to supermarket." },
    { level: 1, word: "fresh", pronunciation: "เฟรช", meaning: "สด", example: "Fresh vegetables." },
    // ... เพิ่มคำศัพท์ Level 1 ทั้งหมด 500 คำ
    
    // Level 2 (B1-B2) - 1,000 คำ
    { level: 2, word: "communicate", pronunciation: "คอมมิวนิเคท", meaning: "สื่อสาร", example: "Communicate effectively." },
    { level: 2, word: "consumer", pronunciation: "คอนซูเมอะ", meaning: "ผู้บริโภค", example: "Consumer rights." },
    { level: 2, word: "customer", pronunciation: "คัสโทเมอะ", meaning: "ลูกค้า", example: "Customer service." },
    // ... เพิ่มคำศัพท์ Level 2 ทั้งหมด 1,000 คำ
    
    // Level 3 (C1-C2) - 1,500 คำ
    { level: 3, word: "opportunity", pronunciation: "ออพพอร์ทูนิตี้", meaning: "โอกาส", example: "Great opportunity." },
    { level: 3, word: "organization", pronunciation: "ออร์แกไนเซชั่น", meaning: "องค์กร", example: "Non-profit organization." },
    { level: 3, word: "opinion", pronunciation: "โอพินเนียน", meaning: "ความเห็น", example: "In my opinion." },
    // ... เพิ่มคำศัพท์ Level 3 ทั้งหมด 1,500 คำ
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
    },
    idioms: {
        title: "สำนวนที่น่าสนใจ (Interesting Idioms)",
        items: [
            { en: "A piece of cake", pronunciation: "", th: "ง่ายมาก" },
            { en: "Break a leg!", pronunciation: "", th: "โชคดี" },
            { en: "Under the weather", pronunciation: "", th: "ไม่สบาย" },
            { en: "Once in a blue moon", pronunciation: "", th: "นานๆ ครั้ง" },
            { en: "Time flies!", pronunciation: "", th: "เวลาผ่านไปเร็ว" }
        ]
    },
    work: {
        title: "การทำงาน (Work & Business)",
        items: [
            { en: "Let's touch base later.", pronunciation: "", th: "ไว้คุยกันทีหลัง" },
            { en: "I'll keep you posted.", pronunciation: "", th: "ฉันจะแจ้งให้ทราบ" },
            { en: "We're on the same page.", pronunciation: "", th: "เราเข้าใจตรงกัน" },
            { en: "Let's think outside the box.", pronunciation: "", th: "ลองคิดนอกกรอบ" },
            { en: "It's a win-win situation.", pronunciation: "", th: "ทั้งสองฝ่ายได้ประโยชน์" }
        ]
    },
    encouragement: {
        title: "การให้กำลังใจ (Encouragement)",
        items: [
            { en: "You've got this!", pronunciation: "", th: "คุณทำได้!" },
            { en: "Hang in there!", pronunciation: "", th: "อดทนไว้!" },
            { en: "Keep your chin up!", pronunciation: "", th: "อย่าท้อ!" },
            { en: "You're doing great!", pronunciation: "", th: "คุณทำได้ดีมาก!" },
            { en: "Believe in yourself!", pronunciation: "", th: "เชื่อมั่นในตัวเอง!" }
        ]
    }
};

// ฟังก์ชันสำหรับโหลดเนื้อหาไฟล์ Markdown
async function loadStoryContent(filename) {
    try {
        const response = await fetch(`../stories/01-daily-life/${filename}`);
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();
        return parseMarkdown(text);
    } catch (e) {
        return `<div class="loading">กำลังโหลดเนื้อหา...</div>`;
    }
}

// แปลง Markdown เป็น HTML อย่างง่าย
function parseMarkdown(text) {
    let html = text;
    
    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
    
    // Line breaks
    html = html.replace(/\n/gim, '<br>');
    
    return html;
}
