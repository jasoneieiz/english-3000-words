const state = {
    storySeries: 'all',
    vocabLevel: 'all',
    query: '',
    vocabVisible: 100,
    theme: 'light'
};

const THEME_KEY = 'english3000-theme';

function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }[char]));
}

function normalize(value) {
    return String(value || '').toLowerCase().trim();
}

function matchesQuery(item, fields) {
    const query = normalize(state.query);
    if (!query) return true;
    return fields.some((field) => normalize(item[field]).includes(query));
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach((section) => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const isDark = theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'เปิดโหมดสว่าง' : 'เปิดโหมดมืด');
    toggle.title = isDark ? 'Light mode' : 'Dark mode';
    toggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
    toggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
}

function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function updateStats() {
    const phraseCount = Object.values(phrases).reduce((sum, category) => sum + category.items.length, 0);
    const stats = [
        ['stories-count', stories.length],
        ['vocab-count', vocabulary.length.toLocaleString('en-US')],
        ['phrases-count', phraseCount]
    ];

    stats.forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function getFilteredStories() {
    return stories.filter((story) => {
        const seriesMatch = state.storySeries === 'all' || story.series === state.storySeries;
        return seriesMatch && matchesQuery(story, ['title', 'titleTh', 'seriesTh']);
    });
}

function renderStories() {
    const grid = document.getElementById('stories-grid');
    const count = document.getElementById('stories-result-count');
    if (!grid) return;

    const filtered = getFilteredStories();
    grid.innerHTML = filtered.map((story) => `
        <button class="story-card" type="button" data-story-id="${story.id}">
            <span class="series-tag">${escapeHtml(story.seriesTh)}</span>
            <h3>${story.id}. ${escapeHtml(story.title)}</h3>
            <p>${escapeHtml(story.titleTh)}</p>
        </button>
    `).join('');

    if (count) count.textContent = `${filtered.length} เรื่อง`;

    grid.querySelectorAll('.story-card').forEach((card) => {
        card.addEventListener('click', () => {
            const story = stories.find((item) => item.id === Number(card.dataset.storyId));
            openStory(story);
        });
    });
}

function renderSeriesButtons() {
    const selector = document.querySelector('.series-selector');
    if (!selector) return;

    const series = [...new Map(stories.map((story) => [story.series, story.seriesTh])).entries()];
    selector.innerHTML = [
        ['all', 'ทั้งหมด'],
        ...series
    ].map(([value, label]) => `
        <button class="series-btn${state.storySeries === value ? ' active' : ''}" data-series="${escapeHtml(value)}" type="button">${escapeHtml(label)}</button>
    `).join('');

    selector.querySelectorAll('.series-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            selector.querySelectorAll('.series-btn').forEach((item) => item.classList.remove('active'));
            btn.classList.add('active');
            state.storySeries = btn.dataset.series;
            renderStories();
        });
    });
}

function getFilteredVocabulary() {
    return vocabulary.filter((vocab) => {
        const levelMatch = state.vocabLevel === 'all' || vocab.level === Number(state.vocabLevel);
        return levelMatch && matchesQuery(vocab, ['word', 'pronunciation', 'meaning', 'example']);
    });
}

function renderVocabulary() {
    const list = document.getElementById('vocabulary-list');
    const count = document.getElementById('vocab-result-count');
    const more = document.getElementById('load-more-vocab');
    if (!list) return;

    const filtered = getFilteredVocabulary();
    const displayVocab = filtered.slice(0, state.vocabVisible);

    list.innerHTML = displayVocab.map((vocab) => `
        <article class="vocab-item">
            <div class="word">
                <span>${escapeHtml(vocab.word)}</span>
                <span class="level-pill">Level ${vocab.level}</span>
            </div>
            <div class="pronunciation">${escapeHtml(vocab.pronunciation)}</div>
            <div class="meaning">${escapeHtml(vocab.meaning)}</div>
            <div class="example">ตัวอย่าง: ${escapeHtml(vocab.example)}</div>
        </article>
    `).join('');

    if (count) count.textContent = `แสดง ${displayVocab.length} จาก ${filtered.length.toLocaleString('en-US')} คำ`;
    if (more) more.hidden = displayVocab.length >= filtered.length;
}

function renderPhrases() {
    const container = document.getElementById('phrases-content');
    const count = document.getElementById('phrases-result-count');
    if (!container) return;

    const query = normalize(state.query);
    let total = 0;

    container.innerHTML = Object.values(phrases).map((category) => {
        const items = category.items.filter((item) => {
            if (!query) return true;
            return ['en', 'pronunciation', 'th'].some((field) => normalize(item[field]).includes(query));
        });
        if (!items.length) return '';
        total += items.length;
        return `
            <section class="phrase-category">
                <h3>${escapeHtml(category.title)}</h3>
                <table class="phrase-table">
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>คำอ่าน</th>
                            <th>ไทย</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${items.map((item) => `
                            <tr>
                                <td><strong>${escapeHtml(item.en)}</strong></td>
                                <td>${escapeHtml(item.pronunciation)}</td>
                                <td>${escapeHtml(item.th)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </section>
        `;
    }).join('');

    if (count) count.textContent = `${total} รายการ`;
}

function parseInline(text) {
    return escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function flushTable(result, rows) {
    if (!rows.length) return;
    const cleanRows = rows.map((line) => line.split('|').slice(1, -1).map((cell) => parseInline(cell.trim())));
    const header = cleanRows[0] || [];
    const body = cleanRows.slice(2);
    result.push('<table><thead><tr>');
    header.forEach((cell) => result.push(`<th>${cell}</th>`));
    result.push('</tr></thead><tbody>');
    body.forEach((row) => {
        result.push('<tr>');
        row.forEach((cell) => result.push(`<td>${cell}</td>`));
        result.push('</tr>');
    });
    result.push('</tbody></table>');
}

function parseMarkdown(markdown) {
    const result = [];
    let tableRows = [];

    markdown.split(/\r?\n/).forEach((rawLine) => {
        const line = rawLine.trim();
        if (line.startsWith('|')) {
            tableRows.push(line);
            return;
        }

        flushTable(result, tableRows);
        tableRows = [];

        if (!line || line === '---') return;
        if (line.startsWith('# ')) result.push(`<h1>${parseInline(line.slice(2))}</h1>`);
        else if (line.startsWith('## ')) result.push(`<h2>${parseInline(line.slice(3))}</h2>`);
        else if (line.startsWith('### ')) result.push(`<h3>${parseInline(line.slice(4))}</h3>`);
        else if (line.startsWith('- ')) result.push(`<li>${parseInline(line.slice(2))}</li>`);
        else if (/^[\u0E00-\u0E7F]/.test(line)) result.push(`<p class="thai-text">${parseInline(line)}</p>`);
        else result.push(`<p>${parseInline(line)}</p>`);
    });

    flushTable(result, tableRows);
    return result.join('\n').replace(/(<li>.*?<\/li>\n?)+/gs, (items) => `<ul>${items}</ul>`);
}

function openStory(story) {
    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('modal-body');
    if (!story || !modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="story-content">
            ${parseMarkdown(story.content)}
        </div>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('story-modal').style.display = 'none';
}

function renderAll() {
    renderStories();
    renderVocabulary();
    renderPhrases();
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());
    updateStats();
    renderSeriesButtons();
    renderAll();

    document.querySelectorAll('.nav-btn').forEach((btn) => {
        btn.addEventListener('click', () => showSection(btn.dataset.section));
    });

    document.querySelectorAll('.level-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.level-btn').forEach((item) => item.classList.remove('active'));
            btn.classList.add('active');
            state.vocabLevel = btn.dataset.level;
            state.vocabVisible = 100;
            renderVocabulary();
        });
    });

    document.getElementById('site-search')?.addEventListener('input', (event) => {
        state.query = event.target.value;
        state.vocabVisible = 100;
        renderAll();
    });

    document.getElementById('load-more-vocab')?.addEventListener('click', () => {
        state.vocabVisible += 100;
        renderVocabulary();
    });

    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('story-modal');
    if (event.target === modal) closeModal();
});
