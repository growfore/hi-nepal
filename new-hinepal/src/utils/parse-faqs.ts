import * as cheerio from 'cheerio';

type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Parses raw HTML to extract FAQ question/answer pairs using cheerio (Server-side).
 * @param htmlString The raw HTML content from the API (e.g., details.goodtoknow)
 * @returns An array of { question, answer } objects
 */
export const parseFAQsServer = (htmlString: string): FAQItem[] => {
  const $ = cheerio.load(htmlString);
  const faqItems: FAQItem[] = [];

  // Replicating your original browser-based query logic
  $('ol li h3').each((index, element) => {
    const question = $(element).text().trim();
    
    // Find the closest ancestor <ol> and then its immediate next <p> sibling
    const $closestOl = $(element).closest('ol');
    const $answerEl = $closestOl.next('p');

    const answer = $answerEl.html() || ""; 

    if (question && answer) {
      faqItems.push({ question, answer });
    }
  });

  return faqItems;
};