// Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showSection(btn.dataset.section));
    });
    document.querySelectorAll('.series-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.series-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterStories(btn.dataset.series);
        });
    });
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterVocabulary(btn.dataset.level);
        });
    });
    renderStories(stories);
    renderVocabulary(vocabulary);
    renderPhrases();
});

function renderStories(storiesToRender) {
    const grid = document.getElementById('stories-grid');
    grid.innerHTML = '';
    storiesToRender.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `<span class="series-tag">${story.seriesTh}</span><h3>${story.id}. ${story.title}</h3><p>${story.titleTh}</p>`;
        card.addEventListener('click', () => openStory(story));
        grid.appendChild(card);
    });
}

function filterStories(series) {
    if (series === 'all') renderStories(stories);
    else renderStories(stories.filter(s => s.series === series));
}

// เปิดเรื่องสั้นใน Modal - แสดงเนื้อหาจาก data โดยตรง
async function openStory(story) {
    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = '<div class="loading">กำลังโหลดเนื้อหา...</div>';
    modal.style.display = 'block';
    
    // ถ้ามี content ใน story แล้ว แสดงเลย
    if (story.content && story.content.length > 100) {
        modalBody.innerHTML = `<div class="story-content"><h2>${story.id}. ${story.title} (${story.titleTh})</h2>${story.content}</div>`;
        return;
    }
    
    // ถ้าไม่มี โหลดจากไฟล์ JSON
    try {
        const response = await fetch('stories-data.json');
        const allStories = await response.json();
        const fullStory = allStories.find(s => s.id === story.id);
        
        if (fullStory && fullStory.content) {
            modalBody.innerHTML = `<div class="story-content"><h2>${story.id}. ${story.title} (${story.titleTh})</h2>${fullStory.content}</div>`;
        } else {
            modalBody.innerHTML = `<div class="story-content"><h2>${story.id}. ${story.title} (${story.titleTh})</h2><p>เนื้อหากำลังอัปเดตค่ะ</p></div>`;
        }
    } catch (e) {
        modalBody.innerHTML = `<div class="story-content"><h2>${story.id}. ${story.title} (${story.titleTh})</h2><p>เนื้อหากำลังอัปเดตค่ะ</p></div>`;
    }
}

function closeModal() {
    document.getElementById('story-modal').style.display = 'none';
}

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('story-modal')) closeModal();
});

function renderVocabulary(vocabToRender) {
    const list = document.getElementById('vocabulary-list');
    list.innerHTML = '';
    const displayVocab = vocabToRender.slice(0, 200);
    displayVocab.forEach(vocab => {
        const item = document.createElement('div');
        item.className = 'vocab-item';
        item.innerHTML = `<div class="word">${vocab.word} <span class="pronunciation">${vocab.pronunciation}</span></div><div class="meaning">${vocab.meaning}</div><div class="example">ตัวอย่าง: ${vocab.example}</div>`;
        list.appendChild(item);
    });
    if (vocabToRender.length > 200) {
        const more = document.createElement('div');
        more.className = 'loading';
        more.innerHTML = `... และอีก ${vocabToRender.length - 200} คำ ...`;
        list.appendChild(more);
    }
}

function filterVocabulary(level) {
    if (level === 'all') renderVocabulary(vocabulary);
    else renderVocabulary(vocabulary.filter(v => v.level === parseInt(level)));
}

function renderPhrases() {
    const container = document.getElementById('phrases-content');
    container.innerHTML = '';
    for (const [key, category] of Object.entries(phrases)) {
        const section = document.createElement('div');
        section.className = 'phrase-category';
        section.innerHTML = `<h3>${category.title}</h3><table class="phrase-table"><thead><tr><th>English</th><th>คำอ่าน</th><th>ไทย</th></tr></thead><tbody>${category.items.map(item => `<tr><td><strong>${item.en}</strong></td><td>${item.pronunciation}</td><td>${item.th}</td></tr>`).join('')}</tbody></table>`;
        container.appendChild(section);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

console.log('%c📚 เก่งศัพท์ 3,000 คำ', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cสร้างโดย Jinnie 🐷 | เสร็จสมบูรณ์ 100%', 'font-size: 14px; color: #666;');
