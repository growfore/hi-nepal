export function formatRevalidate(date: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-ignore
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
}
