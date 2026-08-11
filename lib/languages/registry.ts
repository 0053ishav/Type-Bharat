import { bengali } from "@/data/language/bengali/language";
import { gujarati } from "@/data/language/gujarati/language";
import { hindi } from "@/data/language/hindi/language";
import { kannada } from "@/data/language/kannada/language";
import { marathi } from "@/data/language/marathi/language";
import { panjabi } from "@/data/language/panjabi/language";
import { tamil } from "@/data/language/tamil/language";
import { telugu } from "@/data/language/telugu/language";

export const languageRegistry = {
  hindi,
  panjabi,
  gujarati,
  tamil,
  telugu,
  bengali,
  marathi,
  kannada,
} as const;