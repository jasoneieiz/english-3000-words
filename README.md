# 📚 เว็บไซต์ "เก่งศัพท์ 3,000 คำ"

เว็บไซต์สำหรับอ่านหนังสือเรียนภาษาอังกฤษ "เก่งศัพท์ 3,000 คำ" พร้อมเรื่องสั้น คำศัพท์ และวลี/สำนวนจากไฟล์ Markdown ใน repo

---

## 🚀 วิธีใช้งาน

### เปิดบนคอมพิวเตอร์ (Local)

1. **เปิดไฟล์ `index.html` โดยตรง**
   - คลิกขวาที่ไฟล์ `index.html`
   - เลือก "Open with" → Google Chrome / Microsoft Edge
   - ใช้งานอ่านเรื่องสั้นได้ เพราะข้อมูลจาก `stories/`, `vocabulary/`, `phrases/` ถูก generate รวมไว้ใน `data.js`
   
2. **หรือใช้ Live Server** (แนะนำ)
   - ติดตั้ง Extension "Live Server" ใน VS Code
   - คลิกขวาที่ `index.html` → "Open with Live Server"

---

## 🌐 อัปโหลดขึ้นออนไลน์ (เข้าถึงจากทุกที่)

### วิธีที่ 1: GitHub Pages (ฟรี) ⭐ แนะนำ

1. สร้าง GitHub Account (ถ้ายังไม่มี)
2. สร้าง Repository ใหม่ ชื่อ `english-book`
3. อัปโหลดไฟล์ทั้งหมดใน repo นี้ขึ้น GitHub
4. ไปที่ Settings → Pages
5. เลือก Branch: `main` → Save
6. เว็บจะพร้อมใช้งานที่: `https://<username>.github.io/english-book/`

### วิธีที่ 2: Netlify Drop (ฟรี)

1. ไปที่ https://app.netlify.com/drop
2. ลากโฟลเดอร์ repo นี้ทั้งโฟลเดอร์ไปวาง
3. เว็บจะออนไลน์ทันที!
4. ได้ลิงก์แบบ: `https://random-name.netlify.app`

### วิธีที่ 3: Vercel (ฟรี)

1. สร้าง Account ที่ https://vercel.com
2. Import GitHub Repository
3. Deploy อัตโนมัติ!

### วิธีที่ 4: Google Firebase Hosting (ฟรี)

1. ติดตั้ง Firebase CLI
2. รัน `firebase login`
3. รัน `firebase init hosting`
4. รัน `firebase deploy`

---

## 📱 ใช้งานบนมือถือ

หลังจากอัปโหลดขึ้นออนไลน์แล้ว:
- เปิดลิงก์บนมือถือ
- เพิ่มไปยังหน้าจอหลัก (Add to Home Screen)
- ใช้งานเหมือนแอป!

---

## 🎯 ฟีเจอร์

### หน้าแรก
- ภาพรวมของหนังสือ
- สถิติจากข้อมูลจริงใน `data.js`
- ปุ่มลัดไปส่วนต่างๆ

### เรื่องสั้น (50 เรื่อง)
- กรองตามซีรีส์ (8 หมวดหมู่)
- คลิกอ่านแบบเต็มเรื่อง
- 2 ภาษา (อังกฤษ-ไทย)
- คำศัพท์สำคัญ
- แบบฝึกหัด

### คำศัพท์
- กรองตามระดับ (Level 1-3)
- ค้นหาคำศัพท์ คำอ่าน ความหมาย และตัวอย่าง
- แสดงคำอ่านและความหมาย
- ตัวอย่างประโยค

### วลีและสำนวน
- แบ่งตามหมวดหมู่
- ค้นหา English / คำอ่าน / ไทย ได้
- ตารางอ่านง่าย
- พร้อมคำอ่าน

---

## 🎨 การออกแบบ

- **Responsive:** ใช้งานได้ทุกอุปกรณ์ (มือถือ, แท็บเล็ต, คอมพิวเตอร์)
- **Mobile-First:** ออกแบบสำหรับมือถือเป็นหลัก
- **Thai Font:** ใช้ฟอนต์ Sarabun สำหรับภาษาไทย
- **Color Scheme:** ม่วง-น้ำเงิน สบายตา

---

## 📂 โครงสร้างไฟล์

```
english-3000-words/
├── index.html      # หน้าหลัก
├── style.css       # สไตล์
├── script.js       # JavaScript
├── data.js         # ข้อมูลที่ generate จาก stories/vocabulary/phrases
├── tools/
│   └── generate-data.js # สคริปต์สร้าง data.js ใหม่
└── README.md       # คู่มือนี้
```

---

## 🔧 การแก้ไขข้อมูล

### เพิ่มเรื่องสั้น
เพิ่มไฟล์ `stories/<หมวด>/story-XX.md` แล้วเพิ่ม metadata ใน `tools/generate-data.js` จากนั้นรัน:

```powershell
node tools/generate-data.js
```

### เพิ่มคำศัพท์
แก้ไขหรือเพิ่มไฟล์ Markdown ใน `vocabulary/` แล้วรัน:

```powershell
node tools/generate-data.js
```

### เพิ่มวลี
แก้ไขหรือเพิ่มไฟล์ Markdown ใน `phrases/` แล้วรัน:

```powershell
node tools/generate-data.js
```

---

## 📊 สถิติ

| ส่วน | จำนวน |
|------|-------|
| เรื่องสั้น | 50 เรื่อง |
| คำศัพท์ Level 1 | 500 คำ |
| คำศัพท์ Level 2 | 1,000 คำ |
| คำศัพท์ Level 3 | 750 คำ |
| วลี/สำนวน | 98 รายการ |
| **รวมคำศัพท์ปัจจุบัน** | **2,250 คำ** |

---

## 🙏 Credits

**สร้างโดย:** Jinnie 🐷  
**วันที่:** 2026-03-09  
**สถานะ:** เว็บใช้งานได้จากข้อมูลใน repo ปัจจุบัน

---

## 📞 การสนับสนุน

หากมีปัญหาหรือข้อแนะนำ:
- เปิด Issue บน GitHub
- ติดต่อผู้พัฒนา

---

**Happy Learning!** 📚✨
