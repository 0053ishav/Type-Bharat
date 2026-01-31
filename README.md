# TypeBharat

TypeBharat is a privacy-first English → Indian language typing tool.

It allows users to type naturally in English and instantly convert text into Indian scripts using phonetic transliteration.

Currently supported:
- Panjabi (Gurmukhi)
- Hindi (Devanagari)

More languages coming soon.



## 🚀 Features

### 🔤 Real-time Transliteration
Type English words and convert them instantly into:
- Panjabi (Gurmukhi)
- Hindi (Devanagari)

Press space to accept the best suggestion.



### 🧠 Smart Suggestions
Ambiguous words show multiple phonetic suggestions.
Users can click to select the correct one.


### 📋 Session Board
- Save converted sentences
- Drag & reorder
- Edit inline
- Copy individual lines
- Copy all
- Persisted via localStorage



### 📥 Paste & Convert
Paste full paragraphs written in English and convert them instantly.



### ⌨ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Space | Convert current word |
| Ctrl/Cmd + C | Copy clean text |
| Ctrl/Cmd + X | Cut clean text |
| Ctrl/Cmd + Enter | Add to Session Board |


### 📚 Learn Mode
Each language includes a structured learning page:
- Script explanation
- Vowels
- Consonants
- Secondary letters
- Numerals
- Clear examples

Routes:
- `/learn/panjabi`
- `/learn/hindi`



### 🔐 Privacy First
- No login
- No user accounts
- No server-side storage of text
- Everything runs in-browser
- Session Board stored locally



## 🏗 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Google HTTP Transliterate API
- JSON-LD structured data (FAQ schema)
- SEO optimized metadata per language


## 📂 Project Structure

```
app/
├── panjabi-typing/
├── hindi-typing/
├── learn/
│ ├── page.tsx
│ ├── panjabi/
│ └── hindi/
├── not-found.tsx

components/
├── TypingTool.tsx
├── SessionBoard.tsx
├── PanjabiLetters.tsx
├── HindiLetters.tsx
├── FAQ.tsx
├── Navbar.tsx
└── Footer.tsx

data/
├── panjabiLetters.ts
├── hindiLetters.ts
└── faq.ts

lib/
├── googleHttpTransliterate.ts
└── faqSchema.ts
```


## 📈 SEO Strategy

- Dedicated page per language
- Dedicated learning page per language
- JSON-LD FAQ schema injection
- Canonical URLs
- Sitemap
- Clean semantic structure



## 🗺 Roadmap

Planned improvements:

- Debounce + suggestion caching
- Tamil support
- Bengali support
- Gujarati support
- Dark mode toggle
- Export to .txt / .doc
- Progressive Web App
- Offline mode (dictionary caching)
- Analytics (privacy-safe)


## 🧠 Product Vision

TypeBharat aims to become:

> The simplest way to write Indian languages online without learning keyboard layouts.

Long-term:
- Multi-language expansion
- Script education hub
- Mobile-first experience
- API layer for embedding


## 🛠 Development

Install dependencies:

npm install


Run locally:

npm run dev


Build production:

npm run build


## 🤝 Contributing

Contributions are welcome.

You can help by:
- Improving phonetic mappings
- Adding new languages
- Improving UI/UX
- Enhancing accessibility
- Improving SEO structure


## 📜 License

MIT License


## 🔗 Live Site

https://typebharat.com