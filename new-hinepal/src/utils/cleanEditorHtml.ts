export function cleanEditorHtml(html: string) {
  return html.replace(/ style="[^"]*"/gi, '');
}
export function unwrapSpans(html:string) {
  return html.replace(/<span>(.*?)<\/span>/gi, '$1');
}