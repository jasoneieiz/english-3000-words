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

// Render stories
function renderStories(storiesToRender) {
    const grid = document.getElementById('stories-grid');
    if (!grid) return;
    
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

// Filter stories
function filterStories(series) {
    if (series === 'all') {
        renderStories(stories);
    } else {
        const filtered = stories.filter(s => s.series === series);
        renderStories(filtered);
    }
}

// Open story modal
async function openStory(story) {
    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = '<div class="loading">กำลังโหลด...</div>';
    modal.style.display = 'block';
    
    try {
        const folder = getStoryFolder(story.series);
        const filename = `story-${String(story.id).padStart(2, '0')}.md`;
        const url = `stories/${folder}/${filename}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('File not found');
        
        const markdown = await response.text();
        const html = parseMarkdown(markdown);
        
        modalBody.innerHTML = `
            <div class="story-content">
                <h2>${story.id}. ${story.title} (${story.titleTh})</h2>
                ${html}
            </div>
        `;
    } catch (error) {
        console.error('Error loading story:', error);
        modalBody.innerHTML = `
            <div class="story-content">
                <h2>${story.id}. ${story.title} (${story.titleTh})</h2>
                <p>กำลังอัปเดตเนื้อหา...</p>
            </div>
        `;
    }
}

// Get story folder by series
function getStoryFolder(series) {
    const folders = {
        'daily-life': '01-daily-life',
        'work': '02-work-career',
        'travel': '03-travel',
        'food': '04-food',
        'relationships': '05-relationships',
        'health': '06-health',
        'education': '07-education',
        'career': '08-career'
    };
    return folders[series] || '01-daily-life';
}

// Markdown parser - shows English + Thai pronunciation + Thai translation + Vocabulary + Phrases + Exercise
function parseMarkdown(markdown) {
    const lines = markdown.split(/\n/);
    let result = [];
    let i = 0;
    let showThaiTranslation = false;
    
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Check if we're entering Thai version section
        if (trimmed.includes('เวอร์ชันภาษาไทย')) {
            showThaiTranslation = true;
            result.push('<h3>เวอร์ชันภาษาไทย</h3>');
            i++;
            continue;
        }
        
        // Check if we're entering Vocabulary section
        if (trimmed.includes('คำศัพท์สำคัญ')) {
            showThaiTranslation = false;
            result.push('<h2>📚 คำศัพท์สำคัญ (Vocabulary)</h2>');
            i++;
            continue;
        }
        
        // Check if we're entering Phrases section
        if (trimmed.includes('วลีน่ารู้')) {
            showThaiTranslation = false;
            result.push('<h2>💬 วลีน่ารู้ (Useful Phrases)</h2>');
            i++;
            continue;
        }
        
        // Check if we're entering Exercise section
        if (trimmed.includes('แบบฝึกหัด')) {
            showThaiTranslation = false;
            result.push('<h2>✏️ แบบฝึกหัด (Exercise)</h2>');
            i++;
            continue;
        }
        
        // Process headers
        if (trimmed.startsWith('### ') && !trimmed.includes('English Version')) {
            result.push('<h3>' + trimmed.replace('### ', '') + '</h3>');
            i++;
            continue;
        }
        
        if (trimmed.startsWith('## ') && !trimmed.includes('เรื่องสั้น')) {
            result.push('<h2>' + trimmed.replace('## ', '') + '</h2>');
            i++;
            continue;
        }
        
        // Skip empty lines
        if (!trimmed) {
            i++;
            continue;
        }
        
        // If line starts with English letter, it's English text
        if (/^[A-Z"]/.test(trimmed)) {
            let englishText = trimmed;
            let thaiPronunciation = '';
            
            // Check if next line is Thai pronunciation
            if (i + 1 < lines.length && /^[\u0E00-\u0E7F]/.test(lines[i + 1].trim())) {
                thaiPronunciation = lines[i + 1].trim();
                i++; // Skip the Thai pronunciation line
            }
            
            // Create display with English + pronunciation
            result.push('<div class="sentence-pair">');
            result.push('<p class="english-text">' + englishText + '</p>');
            if (thaiPronunciation) {
                result.push('<p class="thai-pronunciation">' + thaiPronunciation + '</p>');
            }
            result.push('</div>');
        }
        // If we're in Thai translation section and line starts with Thai character
        else if (showThaiTranslation && /^[\u0E00-\u0E7F]/.test(trimmed)) {
            result.push('<p class="thai-translation">' + trimmed + '</p>');
        }
        // Vocabulary, Phrases, Exercise content
        else if (!showThaiTranslation && trimmed.startsWith('|')) {
            // Keep table format
            result.push(line);
        }
        // Other content (bold text, lists, etc.)
        else {
            result.push(line);
        }
        
        i++;
    }
    
    return result.join('\n');
}

// Close modal
function closeModal() {
    document.getElementById('story-modal').style.display = 'none';
}

// Render vocabulary
function renderVocabulary(vocabToRender) {
    const list = document.getElementById('vocabulary-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    const displayVocab = vocabToRender.slice(0, 200);
    
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
}

// Filter vocabulary
function filterVocabulary(level) {
    if (level === 'all') {
        renderVocabulary(vocabulary);
    } else {
        const filtered = vocabulary.filter(v => v.level === parseInt(level));
        renderVocabulary(filtered);
    }
}

// Render phrases
function renderPhrases() {
    const container = document.getElementById('phrases-content');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (const key in phrases) {
        const category = phrases[key];
        const section = document.createElement('div');
        section.className = 'phrase-category';
        
        let tableHtml = `
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
        `;
        
        category.items.forEach(item => {
            tableHtml += `
                <tr>
                    <td><strong>${item.en}</strong></td>
                    <td>${item.pronunciation}</td>
                    <td>${item.th}</td>
                </tr>
            `;
        });
        
        tableHtml += '</tbody></table>';
        section.innerHTML = tableHtml;
        container.appendChild(section);
    }
}

// Initialize
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
    
    // Render vocabulary and phrases
    renderVocabulary(vocabulary);
    renderPhrases();
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('story-modal');
    if (e.target === modal) {
        closeModal();
    }
});

console.log('Script loaded');
