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

// ข้อมูลคำศัพท์
const vocabulary = [];

// ข้อมูลวลีและสำนวน
const phrases = {};

console.log('Data loaded:', stories.length, 'stories');
