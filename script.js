// Navigation
function showSection(sectionId) {
    // ซ่อนทุก section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // แสดง section ที่เลือก
    document.getElementById(sectionId).classList.add('active');
    
    // อัปเดตปุ่ม navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners สำหรับ Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.section);
        });
    });
    
    // Series filter buttons
    document.querySelectorAll('.series-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.series-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterStories(btn.dataset.series);
        });
    });
    
    // Level filter buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterVocabulary(btn.dataset.level);
        });
    });
    
    // โหลดข้อมูลเริ่มต้น
    renderStories(stories);
    renderVocabulary(vocabulary);
    renderPhrases();
});

// แสดงเรื่องสั้น
function renderStories(storiesToRender) {
    const grid = document.getElementById('stories-grid');
    grid.innerHTML = '';
    
    storiesToRender.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <span class="series-tag">${story.seriesTh}</span>
            <h3>${story.id}. ${story.title}</h3>
            <p>${story.titleTh}</p>
        `;
        card.addEventListener('click', () => openStory(story));
        grid.appendChild(card);
    });
}

// กรองเรื่องสั้นตามซีรีส์
function filterStories(series) {
    if (series === 'all') {
        renderStories(stories);
    } else {
        const filtered = stories.filter(s => s.series === series);
        renderStories(filtered);
    }
}

// เปิดเรื่องสั้นใน Modal
async function openStory(story) {
    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = '<div class="loading">กำลังโหลด...</div>';
    modal.style.display = 'block';
    
    // พยายามโหลดไฟล์จากโฟลเดอร์ต่างๆ
    const folders = [
        '../stories/01-daily-life/',
        '../stories/02-work-career/',
        '../stories/03-travel/',
        '../stories/04-food/',
        '../stories/05-relationships/',
        '../stories/06-health/',
        '../stories/07-education/',
        '../stories/08-career/'
    ];
    
    let content = null;
    for (const folder of folders) {
        try {
            const response = await fetch(`${folder}${story.file}`);
            if (response.ok) {
                content = await response.text();
                break;
            }
        } catch (e) {
            continue;
        }
    }
    
    if (content) {
        const htmlContent = parseMarkdown(content);
        modalBody.innerHTML = `
            <div class="story-content">
                <h2>${story.id}. ${story.title} (${story.titleTh})</h2>
                ${htmlContent}
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div class="story-content">
                <h2>${story.id}. ${story.title} (${story.titleTh})</h2>
                <p>เนื้อหาเรื่องนี้จะพร้อมเร็วๆ นี้ค่ะ</p>
                <p><strong>ซีรีส์:</strong> ${story.seriesTh}</p>
            </div>
        `;
    }
}

// ปิด Modal
function closeModal() {
    document.getElementById('story-modal').style.display = 'none';
}

// คลิกนอก Modal เพื่อปิด
window.addEventListener('click', (e) => {
    const modal = document.getElementById('story-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// แสดงคำศัพท์
function renderVocabulary(vocabToRender) {
    const list = document.getElementById('vocabulary-list');
    list.innerHTML = '';
    
    // แสดงตัวอย่าง 100 คำแรก
    const displayVocab = vocabToRender.slice(0, 100);
    
    displayVocab.forEach(vocab => {
        const item = document.createElement('div');
        item.className = 'vocab-item';
        item.innerHTML = `
            <div class="word">${vocab.word} <span class="pronunciation">${vocab.pronunciation}</span></div>
            <div class="meaning">${vocab.meaning}</div>
            <div class="example">ตัวอย่าง: ${vocab.example}</div>
        `;
        list.appendChild(item);
    });
    
    if (vocabToRender.length > 100) {
        const more = document.createElement('div');
        more.className = 'loading';
        more.innerHTML = `... และอีก ${vocabToRender.length - 100} คำ ...`;
        list.appendChild(more);
    }
}

// กรองคำศัพท์ตามระดับ
function filterVocabulary(level) {
    if (level === 'all') {
        renderVocabulary(vocabulary);
    } else {
        const filtered = vocabulary.filter(v => v.level === parseInt(level));
        renderVocabulary(filtered);
    }
}

// แสดงวลีและสำนวน
function renderPhrases() {
    const container = document.getElementById('phrases-content');
    container.innerHTML = '';
    
    for (const [key, category] of Object.entries(phrases)) {
        const section = document.createElement('div');
        section.className = 'phrase-category';
        section.innerHTML = `
            <h3>${category.title}</h3>
            <table class="phrase-table">
                <thead>
                    <tr>
                        <th>English</th>
                        <th>คำอ่าน</th>
                        <th>ไทย</th>
                    </tr>
                </thead>
                <tbody>
                    ${category.items.map(item => `
                        <tr>
                            <td><strong>${item.en}</strong></td>
                            <td>${item.pronunciation}</td>
                            <td>${item.th}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        container.appendChild(section);
    }
}

// แปลง Markdown เป็น HTML
function parseMarkdown(text) {
    let html = text;
    
    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
    
    // Italic
    html = html.replace(/\*(.*)\*/gim, '<i>$1</i>');
    
    // Line breaks
    html = html.replace(/\n/gim, '<br>');
    
    // Tables (อย่างง่าย)
    html = html.replace(/\|(.*)\|/gim, '<tr><td>$1</td></tr>');
    
    return html;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Console welcome message
console.log('%c📚 เก่งศัพท์ 3,000 คำ', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cสร้างโดย Jinnie 🐷 | เสร็จสมบูรณ์ 100%', 'font-size: 14px; color: #666;');
console.log('%cเว็บไซต์นี้สามารถเปิดอ่านได้ทันทีจากเบราว์เซอร์', 'font-size: 12px; color: #888;');
