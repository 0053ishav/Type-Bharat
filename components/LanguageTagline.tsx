"use client";

import { useEffect, useState } from "react";

const TAGLINES = [
  "ਅੰਗ੍ਰੇਜ਼ੀ ਵਿੱਚ ਟਾਈਪ ਕਰੋ। ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਲਿਖੋ।",
  "अंग्रेज़ी में टाइप करें। अपनी भाषा में लिखें।",
  "English mein type karo. Apni bhasha mein likho.",
  "انگریزی میں ٹائپ کریں۔ اپنی زبان میں لکھیں۔",
];

export default function LanguageTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3800);

    return () => clearInterval(id);
  }, []);

  const current = TAGLINES[index];

  return (
    <div className="mt-6 w-full overflow-hidden">
      <div
        className="
          relative
          min-h-32 md:min-h-48 lg:min-h-60
          flex items-center justify-center
          px-4
        "
      >
        <div
          key={current}
          className="
            animate-fade-slide-in
            text-4xl md:text-6xl lg:text-7xl
            font-bold
            tracking-tight
            leading-[1.3]
            text-gradient
            hero-glow
            text-center
          "
        >
          {current}
        </div>
      </div>
    </div>
  );
}
