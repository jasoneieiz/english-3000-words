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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, stories:', stories ? stories.length : 'not loaded');
    
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showSection(this.dataset.section);
        });
    });
    
    // Series filter buttons
    document.querySelectorAll('.series-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.series-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterStories(this.dataset.series);
        });
    });
    
    // Level filter buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterVocabulary(this.dataset.level);
        });
    });
    
    // Render stories
    if (typeof stories !== 'undefined' && stories.length > 0) {
        renderStories(stories);
    } else {
        console.error('Stories not loaded!');
    }
    
    renderVocabulary(vocabulary);
    renderPhrases();
});

function renderStories(storiesToRender) {
    const grid = document.getElementById('stories-grid');
    if (!grid) {
        console.error('stories-grid not found');
        return;
    }
    
    grid.innerHTML = '';
    console.log('Rendering', storiesToRender.length, 'stories');
    
    storiesToRender.forEach(function(story) {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = '<span class="series-tag">' + story.seriesTh + '</span><h3>' + story.id + '. ' + story.title + '</h3><p>' + story.titleTh + '</p>';
        card.addEventListener('click', function() {
            openStory(story);
        });
        grid.appendChild(card);
    });
}

function filterStories(series) {
    if (series === 'all') {
        renderStories(stories);
    } else {
        const filtered = stories.filter(function(s) { return s.series === series; });
        renderStories(filtered);
    }
}

function openStory(story) {
    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = '<div class="loading">กำลังโหลดเนื้อหา...</div>';
    modal.style.display = 'block';
    
    // Try to load from stories-data.json
    fetch('stories-data.json')
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(allStories) {
            const fullStory = allStories.find(function(s) { return s.id === story.id; });
            if (fullStory && fullStory.content) {
                modalBody.innerHTML = '<div class="story-content"><h2>' + story.id + '. ' + story.title + ' (' + story.titleTh + ')</h2>' + fullStory.content + '</div>';
            } else {
                modalBody.innerHTML = '<div class="story-content"><h2>' + story.id + '. ' + story.title + ' (' + story.titleTh + ')</h2><p>เนื้อหากำลังอัปเดตค่ะ</p></div>';
            }
        })
        .catch(function(e) {
            console.error('Error loading story:', e);
            modalBody.innerHTML = '<div class="story-content"><h2>' + story.id + '. ' + story.title + ' (' + story.titleTh + ')</h2><p>เนื้อหากำลังอัปเดตค่ะ</p></div>';
        });
}

function closeModal() {
    document.getElementById('story-modal').style.display = 'none';
}

window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('story-modal')) {
        closeModal();
    }
});

function renderVocabulary(vocabToRender) {
    const list = document.getElementById('vocabulary-list');
    if (!list) return;
    
    list.innerHTML = '';
    const displayVocab = vocabToRender.slice(0, 200);
    
    displayVocab.forEach(function(vocab) {
        const item = document.createElement('div');
        item.className = 'vocab-item';
        item.innerHTML = '<div class="word">' + vocab.word + ' <span class="pronunciation">' + vocab.pronunciation + '</span></div><div class="meaning">' + vocab.meaning + '</div><div class="example">ตัวอย่าง: ' + vocab.example + '</div>';
        list.appendChild(item);
    });
}

function filterVocabulary(level) {
    if (level === 'all') {
        renderVocabulary(vocabulary);
    } else {
        const filtered = vocabulary.filter(function(v) { return v.level === parseInt(level); });
        renderVocabulary(filtered);
    }
}

function renderPhrases() {
    const container = document.getElementById('phrases-content');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (const key in phrases) {
        const category = phrases[key];
        const section = document.createElement('div');
        section.className = 'phrase-category';
        
        let tableHtml = '<h3>' + category.title + '</h3><table class="phrase-table"><thead><tr><th>English</th><th>คำอ่าน</th><th>ไทย</th></tr></thead><tbody>';
        
        category.items.forEach(function(item) {
            tableHtml += '<tr><td><strong>' + item.en + '</strong></td><td>' + item.pronunciation + '</td><td>' + item.th + '</td></tr>';
        });
        
        tableHtml += '</tbody></table>';
        section.innerHTML = tableHtml;
        container.appendChild(section);
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('📚 เก่งศัพท์ 3,000 คำ - Script loaded');
