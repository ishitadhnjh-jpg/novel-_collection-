// Chapter Summary Helper
// Extracts and summarizes the first N chapters of a romantic novel for preview.

function getChapterSummary(book, maxChapters = 2) {
    if (!book.chapters || book.chapters.length === 0) {
        return `<p style="font-style: italic; color: var(--text-muted);">No chapter previews available for this title.</p>`;
    }

    const summaryParts = [];
    const limit = Math.min(maxChapters, book.chapters.length);

    for (let i = 0; i < limit; i++) {
        const chap = book.chapters[i];
        const title = chap.title || `Chapter ${i + 1}`;
        
        // Select the first 2 non-empty lines/paragraphs of the chapter content
        const contentLines = (chap.content || []).filter(line => line.trim().length > 0);
        let preview = "";
        
        if (contentLines.length > 0) {
            preview = contentLines.slice(0, 2).join(' ');
            if (preview.length > 150) {
                preview = preview.substring(0, 150) + '...';
            } else if (contentLines.length > 2) {
                preview += '...';
            }
        } else {
            preview = "The story begins under circumstances of great emotional depth...";
        }

        summaryParts.push(`
            <div class="chapter-summary-block" style="margin-bottom: 12px; padding: 10px; background: rgba(255, 255, 255, 0.02); border-left: 3px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                <h5 style="color: var(--accent); font-family: var(--font-serif); font-size: 0.95rem; margin-bottom: 4px;">${title}</h5>
                <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 0;">"${preview}"</p>
            </div>
        `);
    }

    return `
        <div class="chapters-preview-container" style="margin-top: 15px;">
            <h4 class="details-synopsis-title" style="margin-bottom: 10px; color: var(--gold); border-bottom: 1px solid var(--border-color); padding-bottom: 5px; font-size: 1.1rem;">✨ Chapter Preview (First ${limit} Chapters)</h4>
            ${summaryParts.join('')}
        </div>
    `;
}

// Attach to window object for global availability
window.getChapterSummary = getChapterSummary;
