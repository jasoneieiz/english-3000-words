const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const storySections = {
  34: {
    file: 'stories/07-education/story-34.md',
    exercise: [
      'I can learn at my own pace.',
      'Technology can be a powerful tool for education.',
      'ฉันต้องมีวินัยมากขึ้น',
      'อินเทอร์เน็ตช้าบางครั้ง'
    ]
  },
  35: {
    file: 'stories/07-education/story-35.md',
    vocabulary: [
      ['final exam', 'ไฟนอล เอ็กแซม', 'สอบปลายภาค', 'Final exams are coming.'],
      ['distraction', 'ดิสแทรคชั่น', 'สิ่งรบกวน', 'There are too many distractions.'],
      ['library', 'ไลบรารี่', 'ห้องสมุด', 'Ploy goes to the university library.'],
      ['peaceful', 'พีซฟูล', 'สงบ', 'The library is quiet and peaceful.'],
      ['study room', 'สตัดดี้ รูม', 'ห้องอ่านหนังสือ', 'She finds a study room.'],
      ['review', 'รีวิว', 'ทบทวน', 'She has five subjects to review.'],
      ['flashcard', 'แฟลชการ์ด', 'บัตรคำศัพท์', 'She makes flashcards.'],
      ['memorize', 'เมโมไรซ์', 'จดจำ', 'Flashcards help me memorize better.'],
      ['quiz', 'ควิซ', 'ทดสอบสั้น ๆ', 'We quiz each other.'],
      ['pay off', 'เพย์ ออฟ', 'ให้ผลตอบแทน', 'Her hard work pays off.']
    ],
    exercise: ['Final exams are coming.', 'Breaks help me focus.', 'ห้องสมุดเงียบและสงบ', 'ความพยายามของเธอได้ผลตอบแทน']
  },
  36: {
    file: 'stories/08-career/story-36.md',
    vocabulary: [
      ['scholarship', 'สคอลาร์ชิพ', 'ทุนการศึกษา', 'He applies for a scholarship.'],
      ['afford', 'อะฟอร์ด', 'มีเงินพอจ่าย', "My family can't afford it."],
      ['straight A', 'สเตรท เอ', 'ได้เกรด A ทุกวิชา', "He gets straight A's."],
      ['apply', 'อะพลาย', 'สมัคร', 'Somkid applies for many scholarships.'],
      ['essay', 'เอสเสย์', 'เรียงความ', 'He writes essays.'],
      ['document', 'ดอคคิวเม้นท์', 'เอกสาร', 'He submits documents.'],
      ['dormitory', 'ดอร์มิทอรี่', 'หอพัก', 'He lives in a dormitory.'],
      ['graduate', 'แกรดดูเอท', 'จบการศึกษา', 'He graduates with honors.'],
      ['multinational', 'มัลติเนชันแนล', 'ข้ามชาติ', 'He works at a multinational company.'],
      ['poverty', 'พอฟเวอร์ตี', 'ความยากจน', 'He escaped poverty.']
    ],
    exercise: ['He gets a full scholarship.', 'Education changed my life.', 'เขาอยู่หอพัก', 'เขาส่งเงินกลับบ้าน']
  },
  37: {
    file: 'stories/08-career/story-37.md',
    vocabulary: [
      ['career change', 'คะเรีย เชนจ์', 'การเปลี่ยนอาชีพ', 'She makes a career change.'],
      ['accountant', 'อะเคาน์แทนท์', 'นักบัญชี', 'She works as an accountant.'],
      ['passion', 'แพชชั่น', 'ความหลงใหล', 'Follow your passion.'],
      ['bakery', 'เบเกอรี่', 'ร้านเบเกอรี่', 'She opens a bakery.'],
      ['risk', 'ริสค', 'ความเสี่ยง', 'Changing careers is a risk.'],
      ['customer', 'คัสตะเมอร์', 'ลูกค้า', 'Customers like her cakes.'],
      ['business', 'บิซิเนส', 'ธุรกิจ', 'Her business grows.'],
      ['income', 'อินคัม', 'รายได้', 'Her income increases.'],
      ['reward', 'รีวอร์ด', 'ผลตอบแทน', 'The risk gets a reward.'],
      ['professional', 'โพรเฟสชันแนล', 'มืออาชีพ', 'She grows professionally.']
    ],
    exercise: ['She wants to follow her passion.', 'Her business grows slowly.', 'เธอเปิดร้านเบเกอรี่', 'การเปลี่ยนอาชีพมีความเสี่ยง']
  },
  38: {
    file: 'stories/08-career/story-38.md',
    vocabulary: [
      ['graduate', 'แกรดดูเอท', 'เรียนจบ', 'Krit just graduated.'],
      ['resume', 'เรซูเม่', 'ประวัติย่อ', 'He sent 50 resumes.'],
      ['interview', 'อินเทอร์วิว', 'สัมภาษณ์', 'Krit goes to interviews.'],
      ['position', 'โพซิชั่น', 'ตำแหน่งงาน', 'We offer you the position.'],
      ['colleague', 'คอลลีก', 'เพื่อนร่วมงาน', 'His colleagues welcome him.'],
      ['task', 'ทาสค', 'งานที่ต้องทำ', 'He has many tasks to learn.'],
      ['guidance', 'ไกแดนซ์', 'คำแนะนำ', 'His boss gives him guidance.'],
      ['bonus', 'โบนัส', 'เงินพิเศษ', 'Krit gets his first bonus.'],
      ['valuable', 'แวลยูเอเบิล', 'มีคุณค่า', 'He is a valuable team member.'],
      ['salary', 'ซาลารี่', 'เงินเดือน', 'He saves money from his salary.']
    ],
    exercise: ['Krit is looking for his first job.', 'He gets his first bonus.', 'เขาส่งเรซูเม่ 50 ฉบับ', 'เขาเป็นสมาชิกทีมที่มีคุณค่า']
  },
  39: {
    file: 'stories/08-career/story-39.md',
    vocabulary: [
      ['pandemic', 'แพนเดมิค', 'โรคระบาดใหญ่', 'During the pandemic, people work from home.'],
      ['productive', 'โพรดัคทีฟ', 'มีประสิทธิภาพ', 'Will I be productive?'],
      ['home office', 'โฮม ออฟฟิศ', 'สำนักงานที่บ้าน', 'He sets up a home office.'],
      ['system', 'ซิสเท็ม', 'ระบบ', 'He connects to the company system.'],
      ['distracted', 'ดิสแทรคทิด', 'ถูกรบกวน', 'He gets distracted easily.'],
      ['schedule', 'สเคดจูล', 'ตารางเวลา', 'He creates a schedule.'],
      ['workspace', 'เวิร์คสเปซ', 'พื้นที่ทำงาน', 'He needs a dedicated workspace.'],
      ['commuting', 'คอมมิวทิง', 'การเดินทางไปทำงาน', 'He saves commuting time.'],
      ['hybrid', 'ไฮบริด', 'แบบผสม', 'The company allows hybrid work.'],
      ['connection', 'คอนเนคชั่น', 'ความสัมพันธ์/การเชื่อมต่อ', 'He misses human connection.']
    ],
    exercise: ['Somchai works from home.', 'Hybrid work is the best of both worlds.', 'เขาตั้งสำนักงานที่บ้าน', 'เขาประหยัดเวลาเดินทาง']
  },
  40: {
    file: 'stories/08-career/story-40.md',
    vocabulary: [
      ['business', 'บิซิเนส', 'ธุรกิจ', 'She starts a business.'],
      ['entrepreneur', 'ออนเทรพรีเนอร์', 'ผู้ประกอบการ', 'An entrepreneur starts a company.'],
      ['product', 'โพรดัคท์', 'สินค้า', 'She sells her products.'],
      ['customer', 'คัสตะเมอร์', 'ลูกค้า', 'Customers buy her products.'],
      ['market', 'มาร์เคท', 'ตลาด', 'She researches the market.'],
      ['invest', 'อินเวสท์', 'ลงทุน', 'She invests her savings.'],
      ['profit', 'พรอฟิท', 'กำไร', 'The business becomes profitable.'],
      ['brand', 'แบรนด์', 'ตราสินค้า', 'She builds her brand.'],
      ['mistake', 'มิสเทค', 'ข้อผิดพลาด', 'She learns from mistakes.'],
      ['owner', 'โอว์เนอร์', 'เจ้าของ', 'She becomes a business owner.']
    ],
    exercise: ['Pim starts a small business.', 'She learns from her mistakes.', 'เธอลงทุนเงินออม', 'ธุรกิจเริ่มมีกำไร']
  },
  41: {
    file: 'stories/08-career/story-41.md',
    vocabulary: [
      ['prepare', 'พรีแพร์', 'เตรียมตัว', 'She prepares well.'],
      ['position', 'โพซิชั่น', 'ตำแหน่ง', 'She finds a perfect position.'],
      ['research', 'รีเสิร์ช', 'ค้นคว้า', 'She researches the company.'],
      ['strength', 'สเตร็งธ์', 'จุดแข็ง', 'What are your strengths?'],
      ['professional', 'โพรเฟสชันแนล', 'มืออาชีพ', 'She wears professional clothes.'],
      ['confident', 'คอนฟิเดินท์', 'มั่นใจ', 'Watana is confident.'],
      ['achievement', 'อะชีฟเมนท์', 'ความสำเร็จ', 'What is your greatest achievement?'],
      ['impressed', 'อิมเพรสท์', 'ประทับใจ', 'The manager is impressed.'],
      ['opportunity', 'ออพพอร์ทูนิตี้', 'โอกาส', 'She asks about growth opportunity.'],
      ['accept', 'แอคเซพท์', 'ตอบรับ', 'I accept the offer.']
    ],
    exercise: ['Preparation is the key to interview success.', 'The company offers her the position.', 'เธอค้นคว้าบริษัท', 'ผู้จัดการประทับใจ']
  },
  42: {
    file: 'stories/08-career/story-42.md',
    vocabulary: [
      ['teamwork', 'ทีมเวิร์ค', 'การทำงานเป็นทีม', 'Teamwork is essential.'],
      ['project', 'โพรเจคท์', 'โครงการ', 'The company has a big project.'],
      ['leader', 'ลีดเดอร์', 'หัวหน้า', 'Somchai is the team leader.'],
      ['assign', 'อะไซน์', 'มอบหมาย', 'He assigns tasks.'],
      ['strength', 'สเตร็งธ์', 'จุดแข็ง', 'Use your strengths.'],
      ['coordinate', 'โคออร์ดิเนท', 'ประสานงาน', 'He coordinates everything.'],
      ['issue', 'อิชชู', 'ปัญหา', 'They discuss the issues.'],
      ['communicate', 'คอมมิวนิเคท', 'สื่อสาร', 'They communicate better.'],
      ['client', 'ไคลเอนท์', 'ลูกค้า', 'The client is happy.'],
      ['celebrate', 'เซเลเบรท', 'ฉลอง', 'The team celebrates.']
    ],
    exercise: ['Teamwork is essential for this project.', 'The project is completed on time.', 'สมชายมอบหมายงาน', 'ทีมต้องสื่อสารให้ดีขึ้น']
  },
  43: {
    file: 'stories/08-career/story-43.md',
    vocabulary: [
      ['promotion', 'โพรโมชั่น', 'การเลื่อนตำแหน่ง', 'Suda wants a promotion.'],
      ['career', 'คะเรีย', 'อาชีพ', 'She wants to grow in her career.'],
      ['volunteer', 'วอลันเทียร์', 'อาสาทำ', 'She volunteers for extra projects.'],
      ['training', 'เทรนนิง', 'การฝึกอบรม', 'She takes training courses.'],
      ['leadership', 'ลีดเดอร์ชิพ', 'ภาวะผู้นำ', 'She learns leadership.'],
      ['management', 'แมนเนจเมนท์', 'การจัดการ', 'She learns management.'],
      ['achievement', 'อะชีฟเมนท์', 'ความสำเร็จ', 'She presents her achievements.'],
      ['director', 'ไดเรคเตอร์', 'ผู้อำนวยการ', 'She presents to the directors.'],
      ['salary', 'ซาลารี่', 'เงินเดือน', 'Her salary increases.'],
      ['responsible', 'รีสพอนซิเบิล', 'รับผิดชอบ', 'She is responsible for a team.']
    ],
    exercise: ['Suda applies for the manager position.', 'Hard work leads to promotion.', 'เงินเดือนของเธอเพิ่มขึ้น', 'เธอรับผิดชอบทีมสิบคน']
  },
  44: {
    file: 'stories/08-career/story-44.md',
    vocabulary: [
      ['difficult', 'ดิฟฟิคัลท์', 'ยาก', 'Nok has a difficult boss.'],
      ['stress', 'สเตรส', 'ความเครียด', 'She is stressed every day.'],
      ['quit', 'ควิท', 'ลาออก', 'Nok thinks about quitting.'],
      ['observe', 'ออบเซิร์ฟ', 'สังเกต', 'She observes her boss.'],
      ['pattern', 'แพทเทิร์น', 'รูปแบบ', 'She notices patterns.'],
      ['approach', 'อะโพรช', 'วิธีรับมือ', 'She adjusts her approach.'],
      ['report', 'รีพอร์ท', 'รายงาน', 'She prepares detailed reports.'],
      ['pressure', 'เพรสเชอร์', 'ความกดดัน', 'He has pressure from above.'],
      ['professionalism', 'โพรเฟสชันแนลลิซึม', 'ความเป็นมืออาชีพ', 'He notices her professionalism.'],
      ['boundary', 'บาวน์ดารี', 'ขอบเขต', 'Nok learns to set boundaries.']
    ],
    exercise: ['Nok has a difficult boss.', 'She learns to set boundaries.', 'เธอเตรียมรายงานอย่างละเอียด', 'ความสัมพันธ์ของพวกเขาดีขึ้น']
  },
  45: {
    file: 'stories/08-career/story-45.md',
    vocabulary: [
      ['work-life balance', 'เวิร์ค-ไลฟ์ แบาลานซ์', 'สมดุลงานและชีวิต', 'Chai needs better work-life balance.'],
      ['personal life', 'เพอร์ซะนัล ไลฟ์', 'ชีวิตส่วนตัว', 'He has no personal life.'],
      ['realize', 'เรียลไลซ์', 'ตระหนัก', 'Chai realizes he has a problem.'],
      ['boundary', 'บาวน์ดารี', 'ขอบเขต', 'He sets boundaries.'],
      ['email', 'อีเมล', 'อีเมล', 'No work emails after 8 PM.'],
      ['weekend', 'วีคเอนด์', 'วันหยุดสุดสัปดาห์', 'Weekends are for family.'],
      ['productivity', 'โพรดักทิฟวิตี้', 'ประสิทธิภาพการทำงาน', 'His productivity improves.'],
      ['focused', 'โฟคัสท์', 'มีสมาธิ', 'He is more focused.'],
      ['rest', 'เรสท์', 'การพักผ่อน', 'Rest makes you productive.'],
      ['balance', 'แบาลานซ์', 'ความสมดุล', 'Balance is the key.']
    ],
    exercise: ['Chai works twelve hours a day.', 'Rest makes you more productive.', 'เขาคิดถึงครอบครัว', 'วันหยุดสุดสัปดาห์เป็นเวลาของครอบครัว']
  },
  46: {
    file: 'stories/08-career/story-46.md',
    vocabulary: [
      ['retirement', 'รีไทร์เมนท์', 'การเกษียณ', 'He thinks about retirement.'],
      ['expense', 'เอ็กซ์เพนส์', 'ค่าใช้จ่าย', 'He calculates his expenses.'],
      ['advisor', 'แอดไวเซอร์', 'ที่ปรึกษา', 'He talks to a financial advisor.'],
      ['save', 'เซฟ', 'ออมเงิน', 'He saves 30% of his salary.'],
      ['invest', 'อินเวสท์', 'ลงทุน', 'He invests in stocks.'],
      ['stock', 'สต็อค', 'หุ้น', 'He invests in stocks.'],
      ['mutual fund', 'มิวชวล ฟันด์', 'กองทุนรวม', 'He invests in mutual funds.'],
      ['diversify', 'ไดเวอร์ซิฟาย', 'กระจายการลงทุน', 'He diversifies investments.'],
      ['debt', 'เดท', 'หนี้', 'No debt in retirement.'],
      ['financially free', 'ไฟแนนเชียลลี่ ฟรี', 'อิสระทางการเงิน', 'He is financially free.']
    ],
    exercise: ['Somkit wants to retire at sixty.', 'He diversifies his investments.', 'เขาออมเงินสามสิบเปอร์เซ็นต์', 'เขาไม่มีหนี้ตอนเกษียณ']
  },
  47: {
    file: 'stories/08-career/story-47.md',
    vocabulary: [
      ['networking', 'เน็ตเวิร์คกิง', 'การสร้างเครือข่าย', 'Networking is important.'],
      ['professional', 'โพรเฟสชันแนล', 'มืออาชีพ', 'Ploy is a young professional.'],
      ['industry', 'อินดัสทรี', 'อุตสาหกรรม', 'She attends industry events.'],
      ['business card', 'บิซิเนส การ์ด', 'นามบัตร', 'She brings business cards.'],
      ['contact', 'คอนแทคท์', 'ผู้ติดต่อ', 'She follows up with new contacts.'],
      ['association', 'อะโซซิเอชั่น', 'สมาคม', 'She joins professional associations.'],
      ['conference', 'คอนเฟอเรนซ์', 'การประชุมใหญ่', 'She attends conferences.'],
      ['connection', 'คอนเนคชั่น', 'คนรู้จัก/การเชื่อมต่อ', 'She has many LinkedIn connections.'],
      ['refer', 'รีเฟอร์', 'แนะนำต่อ', 'A contact refers her to a job.'],
      ['ongoing', 'ออนโกอิง', 'ต่อเนื่อง', 'Networking is an ongoing investment.']
    ],
    exercise: ['Ploy attends industry events.', 'Networking opened doors for me.', 'เธอติดตามผู้ติดต่อใหม่', 'เธอได้เงินเดือนสูงขึ้น']
  },
  48: {
    file: 'stories/08-career/story-48.md',
    vocabulary: [
      ['side hustle', 'ไซด์ ฮัสเซิล', 'งานเสริม', 'She starts a side hustle.'],
      ['extra income', 'เอ็กซ์ตร้า อินคัม', 'รายได้เสริม', 'She wants extra income.'],
      ['graphic design', 'กราฟิก ดีไซน์', 'การออกแบบกราฟิก', 'She is good at graphic design.'],
      ['portfolio', 'พอร์ตโฟลิโอ', 'แฟ้มผลงาน', 'She creates a portfolio website.'],
      ['client', 'ไคลเอนท์', 'ลูกค้า', 'Her first client is a friend.'],
      ['charge', 'ชาร์จ', 'คิดราคา', 'She charges 5,000 baht.'],
      ['referral', 'รีเฟอร์รัล', 'การบอกต่อ', 'She gets clients through referrals.'],
      ['raise prices', 'เรส ไพรซิส', 'ขึ้นราคา', 'She raises her prices.'],
      ['cautious', 'คอเชิส', 'ระมัดระวัง', 'She is cautious.'],
      ['full-time', 'ฟูลไทม์', 'เต็มเวลา', 'She goes full-time.']
    ],
    exercise: ['Manee starts a side hustle.', 'Her side income equals her salary.', 'เธอสร้างเว็บไซต์ผลงาน', 'เธอทำงานออกแบบเต็มเวลา']
  },
  49: {
    file: 'stories/08-career/story-49.md',
    vocabulary: [
      ['failure', 'เฟลเยอร์', 'ความล้มเหลว', 'Failure is a lesson.'],
      ['business', 'บิซิเนส', 'ธุรกิจ', 'Tum started a business.'],
      ['devastated', 'เดวะสเตทิด', 'เสียใจมาก', 'He is devastated.'],
      ['encourage', 'เอนเคอเรจ', 'ให้กำลังใจ', 'His friend encourages him.'],
      ['analyze', 'แอนะไลซ์', 'วิเคราะห์', 'Tum analyzes what went wrong.'],
      ['market', 'มาร์เคท', 'ตลาด', 'He did not research the market.'],
      ['validate', 'แวลิเดท', 'ตรวจสอบความเป็นไปได้', 'He validates the idea first.'],
      ['profitable', 'พรอฟิทะเบิล', 'มีกำไร', 'The business is profitable.'],
      ['mentor', 'เมนทอร์', 'ให้คำปรึกษา', 'Tum mentors entrepreneurs.'],
      ['stepping stone', 'สเตปปิง สโตน', 'ก้าวสำคัญ', 'Failure is a stepping stone.']
    ],
    exercise: ['Tum learns from failure.', 'The new business becomes profitable.', 'เขาวิเคราะห์สิ่งที่ผิดพลาด', 'ความล้มเหลวไม่ใช่จุดจบ']
  },
  50: {
    file: 'stories/08-career/story-50.md',
    vocabulary: [
      ['success', 'ซัคเซส', 'ความสำเร็จ', 'This is a success story.'],
      ['village', 'วิลเลจ', 'หมู่บ้าน', 'He grew up in a poor village.'],
      ['scholarship', 'สคอลาร์ชิพ', 'ทุนการศึกษา', 'He got a scholarship.'],
      ['honors', 'ออนเนอร์ส', 'เกียรตินิยม', 'He graduated with honors.'],
      ['invest', 'อินเวสท์', 'ลงทุน', 'He invested wisely.'],
      ['company', 'คัมพะนี', 'บริษัท', 'He started his own company.'],
      ['profitable', 'พรอฟิทะเบิล', 'มีกำไร', 'His company became profitable.'],
      ['public', 'พับลิค', 'เข้าตลาดหลักทรัพย์/สาธารณะ', 'The company went public.'],
      ['millionaire', 'มิลเลียนแนร์', 'เศรษฐีเงินล้าน', 'He became a millionaire.'],
      ['contribute', 'คอนทริบิวท์', 'มีส่วนช่วย', 'He contributes to society.']
    ],
    exercise: ['Somchai started with nothing.', 'Education is the key.', 'เขาเริ่มบริษัทของตัวเอง', 'ความสำเร็จคือการสร้างความแตกต่าง']
  }
};

function vocabularyMarkdown(rows) {
  if (!rows) return '';
  const lines = [
    '## 📚 คำศัพท์สำคัญ (Vocabulary)',
    '',
    '| Word | คำอ่าน | ความหมาย | ตัวอย่าง |',
    '|------|--------|----------|----------|'
  ];
  rows.forEach(([word, pronunciation, meaning, example]) => {
    lines.push(`| ${word} | ${pronunciation} | ${meaning} | ${example} |`);
  });
  return `${lines.join('\n')}\n\n---\n\n`;
}

function exerciseMarkdown(items) {
  const [en1, en2, th1, th2] = items;
  return [
    '## ✏️ แบบฝึกหัด (Exercise)',
    '',
    '**1. Translate to Thai:**',
    `- ${en1}`,
    `- ${en2}`,
    '',
    '**2. Translate to English:**',
    `- ${th1}`,
    `- ${th2}`,
    '',
    '**3. Write your answer:**',
    '- What did you learn from this story?',
    '- Which word from this story is useful for you?',
    '',
    '---',
    ''
  ].join('\n');
}

function storyEnd(id) {
  return new RegExp(`\\n---\\n\\n\\*\\*เรื่องที่ ${id} จบ\\*\\*[\\s\\S]*$`);
}

for (const [idText, section] of Object.entries(storySections)) {
  const id = Number(idText);
  const filePath = path.join(root, section.file);
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  const endMatch = content.match(storyEnd(id));
  if (!endMatch) {
    throw new Error(`Cannot find ending marker in ${section.file}`);
  }

  const body = content.slice(0, endMatch.index).trimEnd();
  const ending = endMatch[0].replace(/^\n---\n\n/, '').trim();
  const additions = [
    body,
    '',
    '---',
    '',
    vocabularyMarkdown(section.vocabulary).trimEnd(),
    exerciseMarkdown(section.exercise).trimEnd(),
    ending,
    ''
  ].filter(Boolean).join('\n');

  fs.writeFileSync(filePath, additions, 'utf8');
  console.log(`Updated story-${String(id).padStart(2, '0')}`);
}
