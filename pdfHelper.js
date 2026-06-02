// pdfHelper.js – handles offline PDF download generation
// Exposes pdfHelper.downloadPdf(book) client-side completely offline.

window.pdfHelper = (function () {
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
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      // Page margins & dimensions
      const margin = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const contentWidth = pageWidth - (margin * 2);
      
      // Theme Colors
      const primaryColor = [30, 10, 18]; // Velvet Burgundy
      const secondaryColor = [212, 175, 55]; // Gold
      const accentColor = [224, 74, 116]; // Rose
      
      // Cover/Header Page Design
      doc.setFillColor(...primaryColor);
      doc.rect(0, 0, pageWidth, 55, 'F');
      
      // Header text
      doc.setTextColor(...secondaryColor);
      doc.setFont("times", "italic");
      doc.setFontSize(26);
      doc.text("Lovestruck Hub", pageWidth / 2, 25, { align: "center" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text("PREMIUM OFFLINE ROMANCE NOVELS VAULT", pageWidth / 2, 38, { align: "center" });
      
      // Book Title
      doc.setTextColor(0, 0, 0);
      doc.setFont("times", "bold");
      doc.setFontSize(24);
      doc.text(book.title, margin, 75, { maxWidth: contentWidth });
      
      doc.setFont("times", "italic");
      doc.setFontSize(15);
      doc.setTextColor(...accentColor);
      doc.text(`by ${book.author}`, margin, 87);
      
      // Line divider
      doc.setDrawColor(...secondaryColor);
      doc.setLineWidth(0.8);
      doc.line(margin, 92, pageWidth - margin, 92);
      
      // Stats Block
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(50, 50, 50);
      doc.text("NOVEL SPECIFICATIONS:", margin, 104);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(`* Subgenre Category:  ${book.subgenre} Romance`, margin, 112);
      doc.text(`* Author/Creator:     ${book.author}`, margin, 118);
      doc.text(`* Publication Year:   ${book.year}`, margin, 124);
      doc.text(`* Reader Rating:      ${book.rating} / 5 Hearts`, margin, 130);
      doc.text(`* Lovestruck ID:      ${book.id}`, margin, 136);
      
      // Box surround stats
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.3);
      doc.rect(margin - 4, 98, contentWidth + 8, 44);
      
      // Synopsis
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...primaryColor);
      doc.text("SYNOPSIS & BACK COVER SUMMARY:", margin, 155);
      
      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.setTextColor(30, 30, 30);
      
      const synopsisLines = doc.splitTextToSize(book.synopsis, contentWidth);
      doc.text(synopsisLines, margin, 162);
      
      // Trope Tags
      let nextY = 162 + (synopsisLines.length * 6) + 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...accentColor);
      doc.text(`Themes & Vibes: ${book.tropes.join("  |  ")}`, margin, nextY);
      
      // Add Chapter Previews
      if (book.chapters && book.chapters.length > 0) {
          book.chapters.forEach((chap, idx) => {
              doc.addPage();
              
              // Page header for subsequent page
              doc.setFillColor(...primaryColor);
              doc.rect(0, 0, pageWidth, 15, 'F');
              doc.setTextColor(255, 255, 255);
              doc.setFont("times", "italic");
              doc.setFontSize(10);
              doc.text(`Lovestruck Hub  |  ${book.title} Preview`, margin, 10);
              
              let writeY = 32;
              doc.setFont("times", "bold");
              doc.setFontSize(18);
              doc.setTextColor(...primaryColor);
              doc.text(chap.title, margin, writeY);
              
              writeY += 10;
              doc.setFont("times", "normal");
              doc.setFontSize(11);
              doc.setTextColor(40, 40, 40);
              
              const previewText = chap.content.join("\n\n");
              const chapterLines = doc.splitTextToSize(previewText, contentWidth);
              
              let linesWritten = 0;
              const lineSpacing = 6;
              
              while (linesWritten < chapterLines.length) {
                  const spaceLeft = pageHeight - writeY - margin;
                  const linesThatFit = Math.floor(spaceLeft / lineSpacing);
                  
                  if (linesThatFit <= 0) {
                      doc.addPage();
                      // Sub-page header
                      doc.setFillColor(...primaryColor);
                      doc.rect(0, 0, pageWidth, 15, 'F');
                      doc.setTextColor(255, 255, 255);
                      doc.setFont("times", "italic");
                      doc.setFontSize(10);
                      doc.text(`Lovestruck Hub  |  ${book.title} Preview`, margin, 10);
                      
                      writeY = 30;
                      continue;
                  }
                  
                  const chunk = chapterLines.slice(linesWritten, linesWritten + linesThatFit);
                  doc.text(chunk, margin, writeY);
                  
                  linesWritten += chunk.length;
                  writeY += chunk.length * lineSpacing;
              }
          });
      }
      
      // Save file PDF trigger
      const fileTitle = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      doc.save(`lovestruck_${fileTitle}_vault.pdf`);
      
    } catch (err) {
      console.error('PDF download error:', err);
    }
  }

  return { downloadPdf };
})();
