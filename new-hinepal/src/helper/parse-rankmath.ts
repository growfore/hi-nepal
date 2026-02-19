export function parseRankMathHead(rankMathHead: string) {
  if (!rankMathHead) return {};

  const getMeta = (attrName: string) => {
    const regex = new RegExp(
      `<meta[^>]+(?:name|property)=["']${attrName}["'][^>]+content=["'](.*?)["']`,
      "i"
    );
    const match = rankMathHead.match(regex);
    return match ? match[1] : undefined;
  };

  const getTitle = () => {
    const match = rankMathHead.match(/<title>(.*?)<\/title>/i);
    return match ? match[1] : undefined;
  };

  return {
    title: getTitle(),
    description: getMeta("description"),
    keywords: getMeta("keywords"),
    ogTitle: getMeta("og:title"),
    ogDescription: getMeta("og:description"),
    ogImage: getMeta("og:image"),
    twitterTitle: getMeta("twitter:title"),
    twitterDescription: getMeta("twitter:description"),
    twitterImage: getMeta("twitter:image"),
  };
}
