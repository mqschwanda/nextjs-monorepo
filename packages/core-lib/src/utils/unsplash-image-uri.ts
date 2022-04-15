export function unsplashImageURI({
  keywords = [],
  size = '640x480',
}: {
  keywords?: string[];
  size?: string;
}): string {
  const keywordURIComponent = keywords
    .map((keyword) => encodeURIComponent(keyword))
    .join(',');
  return `https://source.unsplash.com/random/${size}?${keywordURIComponent}`;
}
