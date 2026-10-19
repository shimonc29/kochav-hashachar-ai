// רשימת העבודות. כדי להוסיף שם תלמיד/ה – למלא את השדה student (רק שם פרטי).
// כדי להוסיף עבודה חדשה – לשים את קובץ ה-HTML בתיקייה p ולהוסיף שורה כאן.
const PROJECTS = [
  { slug: "minecraft",      title: "מיינקראפט תלת-ממד",   kind: "משחק",  icon: "⛏️", color: "#2EC4B6", student: "", desc: "עולם קוביות בתלת-ממד עם לילה, זומבים, שולחן עבודה ומנהרות." },
  { slug: "football",       title: "ליגת החלומות",        kind: "משחק",  icon: "⚽", color: "#5B8DEF", student: "", desc: "כדורגל לשני שחקנים על אותה מקלדת, עם שמות לשחקנים." },
  { slug: "black-hole",     title: "חור שחור",            kind: "משחק",  icon: "🕳️", color: "#7B5CD6", student: "", desc: "בולעים עצמים בעיר, גדלים, ומנסים להספיק לפני שהזמן נגמר." },
  { slug: "pompeii",        title: "תעלומת פומפיי",        kind: "לימודי", icon: "🌋", color: "#FF8C42", student: "", desc: "מסע מחקר אינטראקטיבי על העיר שנקברה תחת הר הגעש." },
  { slug: "english-memory", title: "English Memory Master", kind: "לימודי", icon: "🔤", color: "#FF5D8F", student: "", desc: "משחק זיכרון לתרגול מילים באנגלית." },
  { slug: "video-editor",   title: "עורך שורטס",           kind: "כלי",   icon: "🎬", color: "#E04F5F", student: "", desc: "מעלים סרטון, מוסיפים טקסטים, מדבקות ומכונית נוסעת, ושומרים." },
  { slug: "backgammon",     title: "שש-בש",               kind: "משחק",  icon: "🎲", color: "#B07A4A", student: "", desc: "שש-בש קלאסי לשני שחקנים." },
  { slug: "checkers",       title: "דמקה",                kind: "משחק",  icon: "👑", color: "#C0392B", student: "", desc: "דמקה עם הכתרה למלכה, לשני שחקנים." },
  { slug: "calculator",     title: "מחשבון",              kind: "כלי",   icon: "🧮", color: "#3D5A80", student: "", desc: "מחשבון מעוצב שעובד בדפדפן." }
];