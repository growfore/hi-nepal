"use client";

import GoogleTranslate from "next-google-translate-widget";

export default function TranslateWidget() {
  return (
    <div className="fixed bottom-4 left-4 z-999">
      <GoogleTranslate
        pageLanguage="en"
        includedLanguages="es,en,fr,zh-Hans,nl,ne,ru,uk,za,fi"
      />
    </div>
  );
}
