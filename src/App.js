import React, { useState } from "react";
import { Accessibility } from "accessibility/dist/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopUp from "./components/PopUp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: `תחבושת סני סופר 15 יח' 20/37 ס"מ`,
      description: "",
      categories: [],
      price: "25.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_6fb2cb85f3a749958d9efe09d30cc4ad~mv2.png",
    },
    {
      id: 2,
      name: `(42-44) L "חיתולי שקמה "אובר נייט`,
      description: `שקמה מכנסונים סופגים גזרתי אובר נייט , מידה L
      15 יחידות
      מוצרי ספיגה של שקמה לספיגה מקסימלית ולשמירה על שכבת מגע יבשה
      • לוכדי נוזלים כפולים למניעת נזילות
      • מכנסון אובר נייט של שקמה הוא בעל כושר ספיגה של עד 12 שעות ומתאים לשימוש במהלך הלילה.
      • סגירה רב פעמית: מנגנון סגירה המאפשר סגירה ופתיחה רב פעמיים
      • מגע נושם ואוורירי: שכבה פנימית וחיצונית דמוית`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_a519cf307e304b7d8c12fbbcac616608~mv2.png",
    },
    {
      id: 3,
      name: `(38-40) M "חיתולי שקמה "אובר נייט`,
      description: `שקמה מכנסונים סופגים גזרתי אובר נייט , מידה M
      15 יחידות
      מוצרי ספיגה של שקמה לספיגה מקסימלית ולשמירה על שכבת מגע יבשה
      
      לוכדי נוזלים כפולים למניעת נזילות
      מכנסון אובר נייט של שקמה הוא בעל כושר ספיגה של עד 12 שעות ומתאים לשימוש במהלך הלילה.
      סגירה רב פעמית: מנגנון סגירה המאפשר סגירה ופתיחה רב פעמיים
      מגע נושם ואוורירי: שכבה פנימית וחיצונית דמוית בד, נושמת ואוורירית המעניקה מגע רך ומסייעת במניעת גירויים
      מכנסונים סופגים גזרתיים לשעות היום – לאנשים הזקוקים למוצרים בעלי יכולת ספיגה גבוהה
      מכנסונים סופגים גזרתיים לשעות הלילה – לאנשים הזקוקים לדרגת הספיגה הגבוהה ביותר או לאנשים הנוטלים תרופות משתנות`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_d3b3484eaf654fa2afdb732cebcda828~mv2.jpg",
    },
    {
      id: 4,
      name: "מגבוני מבוגרים נועם 72 יח' XXL",
      description:
        "מגבוני בד גדולים ועבים במיוחד למבוגרים, בניחוח עדין לשמירה על היגיינת הגוף. בתוספת קמומיל וויטמין E, ללא אלכוהול, האריזה כוללת מכסה לסגירה חוזרת לשמירת לחות המגבונים לאורך זמן. מיוצר בישראל.",
      categories: [],
      price: "19.99",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_61c00c77b1084a08825ddc327a839478~mv2.png",
    },
    {
      id: 5,
      name: `קרם לתפרחת חיתולים נועם 1 ק"ג`,
      description:
        "קרם לתפרחת חיתולים וגירויי עור של חברת נועם. מגן על העור. מועשר בויטמין E מועשר באבץ, קלנדולה, קמומיל, שמן זית, שמן חמניות ותמצית פרופוליס. ללא פראבנים, ללא אלכוהול, ללא SLSSLES.",
      categories: [],
      price: "29.99",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_2e660cd81156428abe40f95eae135720~mv2.png",
    },
    {
      id: 6,
      name: `סדיניות נועם חד פעמי 15 יח' 65/95 ס"מ`,
      description: `סדיניות חד פעמיות מלבניות בגודל של 95*65 ס"מ המשמשות כמגן מזרון מעל לסדין, הנוזלים נספגים בתוך הסדיניות וכך ושומרות על המצעים נקיים ויבשים.`,
      categories: [],
      price: "30.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_444be54cfb904f4a842ea93831461486~mv2.png",
    },
    {
      id: 7,
      name: `סדיניות שקמה חד פעמי 15 יח (97/65 ס"מ)`,
      description: `סדיניה לבריחת שתן למבוגרים של שקמה, עשוייה ממשטח חד פעמי המאפשר שמירה על סביבה היגיינית ונעימה. הסדין במידות 65/97 ס"מ, והוא בעל כושר ספיגה גבוה במיוחד ושכבה נושמת ויבשה השומרת על בריאות עורו של האדם היקר בו אתם מטפלים`,
      categories: [],
      price: "40.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_8531eeba8e964cad847bdd92f224793b~mv2.png",
    },
    {
      id: 8,
      name: "תחתון סופג בריז M",
      description:
        "תחתונים סופגים לבריחת שתן, מיוצרים בטכנולוגיה מתקדמת SUPER DRY עם מנגנון לכידת נוזלים, לתחושת יובש והגנה מרבית מנזילות וריחות, אלסטיים להתאמה למבנה הגוף, מאפשרים אורח חיים חופשי ומלא בביטחון. מתאים גם ללילה.",
      categories: ["תחתונים סופגים"],
      price: "65.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_19e855241bdb4aed9e94b84aff2e075f~mv2.jpg",
    },
    {
      id: 9,
      name: "EUROFLEX M תחתונים סופגים",
      description: `תחתונים סופגים למבוגרים חד-פעמיים מבד כותנה רך ונעים תוצרת בלגיה.
      תחתונים בעלי גזרה גבוהה המשלבים בתוכם את הטכנולוגיה החדשנית והעדכנית בתחום הספיגה HydroLock.
      מתאים בעיקר לאנשים בעלי אורח חיים פעיל עם בריחת שתן קלה עד מתונה הרוצים לשמור על עצמאות, דיסקרטיות וביטחון אישי.
      המבנה הגמיש היחודי של התחתון הסופג מותאם בצורה מושלמת לגוף ומונע דליפת שתן לצדדים.
      התחתונים ניתנים להסרה בקלות באמצעות קריעת התפרים הצדדיים.`,
      categories: ["תחתונים סופגים", "מוצרי ספיגה"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_ba83b78154dd4e8bb1e544b694d56be9~mv2.png",
    },
    {
      id: 10,
      name: "EUROFLEX XL תחתונים סופגים",
      description: `תחתונים סופגים למבוגרים חד-פעמיים מבד כותנה רך ונעים תוצרת בלגיה.
      תחתונים בעלי גזרה גבוהה המשלבים בתוכם את הטכנולוגיה החדשנית והעדכנית בתחום הספיגה HydroLock.
      מתאים בעיקר לאנשים בעלי אורח חיים פעיל עם בריחת שתן קלה עד מתונה הרוצים לשמור על עצמאות, דיסקרטיות וביטחון אישי.
      המבנה הגמיש היחודי של התחתון הסופג מותאם בצורה מושלמת לגוף ומונע דליפת שתן לצדדים.
      התחתונים ניתנים להסרה בקלות באמצעות קריעת התפרים הצדדיים.`,
      categories: ["תחתונים סופגים", "מוצרי ספיגה"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_a8423ebc76fc48a49828cd172bf4e03a~mv2.png",
    },
    {
      id: 11,
      name: "EUROFLEX L תחתונים סופגים",
      description: `תחתונים סופגים למבוגרים חד-פעמיים מבד כותנה רך ונעים תוצרת בלגיה.
      תחתונים בעלי גזרה גבוהה המשלבים בתוכם את הטכנולוגיה החדשנית והעדכנית בתחום הספיגה HydroLock.
      מתאים בעיקר לאנשים בעלי אורח חיים פעיל עם בריחת שתן קלה עד מתונה הרוצים לשמור על עצמאות, דיסקרטיות וביטחון אישי.
      המבנה הגמיש היחודי של התחתון הסופג מותאם בצורה מושלמת לגוף ומונע דליפת שתן לצדדים.
      התחתונים ניתנים להסרה בקלות באמצעות קריעת התפרים הצדדיים.`,
      categories: ["תחתונים סופגים", "מוצרי ספיגה"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_3758a36050df4b94b3954dc3a173c808~mv2.png",
    },
    {
      id: 12,
      name: `XL "חיתולים למבוגרים נועם "אול נייט`,
      description: `מכנסוני ספיגה גזרתיים ללילה נועם 15 יחידות
      מכנסוני ספיגה גזרתיים ללילה - בעלי ספיגה מוגברת, דקים ונוחים במיוחד במידה XL.
      מידת מכנסיים: (46-52)
      היקף מותניים: 150-175 ס"מ
      • מערכת סגירה כפולה
      • לכידת נוזלים מתקדמת
      • אלסטיות להתאמה מושלמת
      • בעל מגע רך ונעים
      • ספיגה מוגברת
      • דקים ונוחים במיוחד`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "55.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_2a28a22e5946400ea93ac3f9e849305d~mv2.png",
    },
    {
      id: 13,
      name: `L "חיתולים למבוגרים נועם "אול נייט`,
      description: `מכנסוני ספיגה גזרתיים ללילה נועם 15 יחידות
      מכנסוני ספיגה גזרתיים ללילה - בעלי ספיגה מוגברת, דקים ונוחים במיוחד במידה L.
      מידת מכנסיים: (42-44)
      היקף מותניים: 120-150 ס"מ
      • מערכת סגירה כפולה
      • לכידת נוזלים מתקדמת
      • אלסטיות להתאמה מושלמת
      • בעל מגע רך ונעים
      • ספיגה מוגברת
      • דקים ונוחים במיוחד`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "55.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_3463f3b274a44fa8a95550352ade8d6f~mv2.png",
    },
    {
      id: 14,
      name: `M "חיתולים למבוגרים נועם "אול נייט`,
      description: `מכנסוני ספיגה גזרתיים ללילה נועם 15 יחידות
      מכנסוני ספיגה גזרתיים ללילה - בעלי ספיגה מוגברת, דקים ונוחים במיוחד במידה M.
      מידת מכנסיים: (38-40)
      היקף מותניים: 80-120 ס"מ
      • מערכת סגירה כפולה
      • לכידת נוזלים מתקדמת
      • אלסטיות להתאמה מושלמת
      • בעל מגע רך ונעים
      • ספיגה מוגברת
      • דקים ונוחים במיוחד`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "55.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_8b2a17efeb3945ec977881ca6dbe045f~mv2.png",
    },
    {
      id: 15,
      name: `(46-48) XL "חיתולי שקמה "אובר נייט`,
      description: `שקמה מכנסונים סופגים גזרתי אובר נייט , מידה XL
      15 יחידות
      מוצרי ספיגה של שקמה לספיגה מקסימלית ולשמירה על שכבת מגע יבשה
      • לוכדי נוזלים כפולים למניעת נזילות
      • מכנסון אובר נייט של שקמה הוא בעל כושר ספיגה של עד 12 שעות ומתאים לשימוש במהלך הלילה.
      • סגירה רב פעמית: מנגנון סגירה המאפשר סגירה ופתיחה רב פעמיים
      • מגע נושם ואוורירי: שכבה פנימית וחיצונית דמוית בד, נושמת ואוורירית המעניקה מגע רך ומסייעת במניעת גירויים
      • מכנסונים סופגים גזרתיים לשעות היום – לאנשים הזקוקים למוצרים בעלי יכולת ספיגה גבוהה
      • מכנסונים סופגים גזרתיים לשעות הלילה – לאנשים הזקוקים לדרגת הספיגה הגבוהה ביותר או לאנשים הנוטלים תרופות משתנות`,
      categories: ["תחתונים סופגים", "חיתולים למבוגרים"],
      price: "60.00",
      imgUrl:
        "https://static.wixstatic.com/media/eb6e45_deb6893b54e2418893ce5595f4fb9c77~mv2.png",
    },
    {
      id: 16,
      name: "סינרים חד פעמיים להאכלה 100 יח'",
      description: "",
      categories: [],
      price: "35.00",
      imgUrl: "https://semantic-ui.com/images/wireframe/image.png",
    },
    {
      id: 17,
      name: "כפפות חד פעמיות ניטריל",
      description: "",
      categories: [],
      price: "25.00",
      imgUrl: "https://semantic-ui.com/images/wireframe/image.png",
    },
  ];

  var labels = {
    resetTitle: "איפוס להגדרות ברירת מחדל",
    closeTitle: "סגור",
    menuTitle: "תפריט",
    increaseText: "הגדל גודל טקסט",
    decreaseText: "הפחת גודל טקסט",
    increaseTextSpacing: "הגדל מרווח טקסט",
    decreaseTextSpacing: "הפחת מרווח טקסט",
    increaseLineHeight: "הגדל גובה שורה",
    decreaseLineHeight: "הפחת גובה שורה",
    invertColors: "הפוך צבעים",
    grayHues: "גווני אפור",
    underlineLinks: "קו תחתון לקישורים",
    bigCursor: "סמן גדול",
    readingGuide: "מדריך קריאה",
    textToSpeech: "טקסט לדיבור",
    speechToText: "דיבור לטקסט",
    disableAnimations: "ביטול הנפשות",
  };

  var options = {
    labels: labels,
  };

  window.addEventListener(
    "load",
    function () {
      new Accessibility(options);
    },
    false
  );

  const [filteredProductes, setFilteredProductes] = useState(products);

  const searchHandler = (input) => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(input)
    );
    setFilteredProductes(filteredProducts);
  };

  return (
    <div className="">
      <PopUp />
      <NavBar onSearch={searchHandler} products={products} />
      <Routes>
        <Route path="/" element={<Home products={filteredProductes} />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
