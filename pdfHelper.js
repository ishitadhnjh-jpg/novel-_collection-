// pdfHelper.js – handles PDF download (direct link or on‑the‑fly generation)
// Exposes pdfHelper.downloadPdf(book)

// Ensure jsPDF is loaded (it is already included via CDN in index.html)
// but we lazily reference it from the global window.jspdf object.

window.pdfHelper = (function () {
  // Helper to trigger a hidden download link
  function triggerDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // Core download function used by the UI
  async function downloadPdf(book) {
    // Show progress UI (same IDs used elsewhere in the app)
    const progressContainer = window.downloadProgressContainer;
    const progressText = window.downloadProgressText;
    const progressFill = window.downloadProgressFill;
    const progressPercent = window.downloadProgressPercentage;
    if (progressContainer) progressContainer.style.display = 'flex';
    if (progressText) progressText.textContent = 'Preparing PDF...';
    if (progressPercent) progressPercent.textContent = '0%';
    if (progressFill) progressFill.style.width = '0%';

    // Helper to update UI progress
    function setProgress(p, msg) {
      if (progressPercent) progressPercent.textContent = `${p}%`;
      if (progressFill) progressFill.style.width = `${p}%`;
      if (progressText) progressText.textContent = msg;
    }

    try {
      // 1️⃣ Direct PDF link case
      if (book.downloadUrlPdf && book.downloadUrlPdf.startsWith('http')) {
        setProgress(100, 'Downloading PDF...');
        triggerDownload(book.downloadUrlPdf, `${book.title}.pdf`);
        return;
      }

      // 2️⃣ Need to generate PDF from Gutenberg text
      const gutenbergId = window.getGutenbergId ? getGutenbergId(book.id) : null;
      if (!gutenbergId) {
        throw new Error('No Gutenberg ID available for this book');
      }

      setProgress(20, 'Fetching full text from Gutenberg...');
      const fullText = await window.fetchFullGutenbergText(gutenbergId);

      setProgress(45, 'Creating PDF document...');
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const margin = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const contentWidth = pageWidth - margin * 2;

      // Simple styling – use the same palette as generateRealPDF for consistency
      const primaryColor = [30, 10, 18]; // Velvet Burgundy
      const secondaryColor = [212, 175, 55]; // Gold
      const accentColor = [224, 74, 116]; // Rose

      // Header page
      doc.setFillColor(...primaryColor);
      doc.rect(0, 0, pageWidth, 55, 'F');
      doc.setTextColor(...secondaryColor);
      doc.setFont('times', 'italic');
      doc.setFontSize(26);
      doc.text('Lovestruck Hub', pageWidth / 2, 25, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text('PREMIUM ESCAPE ROMANCE NOVELS PREVIEW', pageWidth / 2, 38, { align: 'center' });

      // Title & meta
      doc.setTextColor(0, 0, 0);
      doc.setFont('times', 'bold');
      doc.setFontSize(28);
      doc.text(book.title, margin, 75);

      doc.setFont('times', 'italic');
      doc.setFontSize(12);
      doc.text(`by ${book.author}`, margin, 85);

      // Body – naïve split by line breaks (the original code had a more sophisticated splitter)
      const lines = fullText.split(/\r?\n/).filter(l => l.trim().length > 0);
      let cursorY = 105;
      doc.setFont('times', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      for (let i = 0; i < lines.length; i++) {
        const txt = lines[i];
        const split = doc.splitTextToSize(txt, contentWidth);
        if (cursorY + split.length * 5 > pageHeight - margin) {
          doc.addPage();
          cursorY = margin;
        }
        doc.text(split, margin, cursorY);
        cursorY += split.length * 5;
      }

      // Footer page
      doc.addPage();
      const footY = pageHeight / 2;
      doc.setFillColor(...primaryColor);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setTextColor(...secondaryColor);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('Thank you for reading!', pageWidth / 2, footY - 10, { align: 'center' });
      doc.setFontSize(14);
      doc.text('Visit lovestruck hub for more romance gems', pageWidth / 2, footY + 10, { align: 'center' });

      setProgress(80, 'Finalizing PDF...');
      const blob = doc.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      setProgress(100, 'Downloading PDF');
      triggerDownload(blobUrl, `${book.title}.pdf`);
      // Revoke after a short timeout to free memory
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch (err) {
      console.error('PDF download error:', err);
      if (window.showToast) showToast('PDF generation failed. Please try again later.', 'warning');
    } finally {
      if (progressContainer) progressContainer.style.display = 'none';
    }
  }

  return { downloadPdf };
})();
