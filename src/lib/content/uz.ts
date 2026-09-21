import type { SiteContent } from "./types";

export const uz: SiteContent = {
  meta: {
    title: "Yonda — kalitga tayyor korporativ sovg'alar",
    description:
      "Biz brendlar uchun korporativ sovg'alar yaratamiz — g'oyadan tayyor mahsulotgacha. Barchasini bizga to'liq ishonib topshirishingiz mumkin, yoki faqat sizga hozir yetishmayotgan bitta bosqichni buyurtma qilishingiz mumkin.",
  },
  nav: {
    about: "Biz haqimizda",
    services: "Xizmatlar",
    cases: "Keyslar",
    contact: "Aloqa",
    cta: "Loyihani muhokama qilish",
  },
  instagramUrl: "https://www.instagram.com/yondacards/",
  about: {
    heading: "Biz haqimizda",
    paragraphs: [
      "Yonda — qo'lda ushlab bo'ladigan mualliflik sovg'alari va xotiralar brendi. Biz shaxsiy hikoyalarni saqlaydigan noyob albomlar, qo'lda chizilgan illyustratsiyali otkritkalar va muhim lahzalarni saqlash uchun yaratilgan boshqa narsalarni yaratamiz.",
      "Bugungi kunda bizning tayyor kolleksiyalarimiz shahar bo'ylab 10 ta oflayn nuqtada taqdim etilgan, mavzuli albomlarni esa g'oyadan tayyor mahsulotgacha kalitga tayyor holda ishlab chiqamiz.",
      "Ish davomida biz nafaqat sovg'alarni chiroyli bezashni, balki g'oyalarni o'ylab topishni, ular uchun mos shaklni topishni va oddiy narsalarni hissiy tajribaga aylantirishni o'rgandik.",
      "Va endi biz bu ijodkorlikni biznes tomon yo'naltirishga tayyormiz. Biz faqat logotip joylashtirmaydigan, balki brendingizning xarakteri, qadriyatlari va g'oyasini yetkazadigan merch, sovg'alar, poligrafiya va boshqa brendlangan formatlarni yaratamiz.",
      "Yonda biznesga saqlab qolgisi keladigan narsalarni yaratishda yordam beradi.",
    ],
    instagramCta: "Instagram'ga o'tish",
  },
  hero: {
    kicker: "Bitta pudratchi istalgan bosqich yoki butun yo'l uchun.",
    headline: "Kalitga tayyor korporativ sovg'alar.",
    highlight: "O'ylab topamiz. Dizayn qilamiz. Ishlab chiqaramiz.",
    body: "Biz brendlar uchun korporativ sovg'alar yaratamiz — g'oyadan tayyor mahsulotgacha. Barchasini bizga to'liq ishonib topshirishingiz mumkin, yoki faqat sizga hozir yetishmayotgan bitta bosqichni buyurtma qilishingiz mumkin.",
    ctaPrimary: "Loyihani muhokama qilish",
    ctaSecondary: "Paketlarni ko'rish",
    stages: [
      { number: "01", label: "THINK — G'oya", href: "#think" },
      { number: "02", label: "DESIGN — Vizual", href: "#design" },
      { number: "03", label: "MAKE — Ishlab chiqarish", href: "#make" },
    ],
  },
  myths: {
    heading: "Odatda korporativ sovg'a shunday tanlanadi",
    intro: "Muammo bu yomonligida emas — muammo shundaki, buni hamma qiladi va sovg'ani hech kim eslab qolmaydi.",
    items: [
      "«Shunchaki brendlangan ruchka buyurtma qilamiz»",
      "«O'tgan yilgidek narsani olamiz»",
      "«Asosiysi — logotip bo'lsin»",
      "«Sovg'a — arzimas narsa, oxirgi paytda hal qilamiz»",
    ],
    standout: "Sovg'ani chindan ham eslab qolishning faqat bitta yo'li bor.",
    reveal: "Uni formal narsa sifatida emas, balki brend tajribasining bir qismi sifatida ko'rish.",
  },
  reveal: {
    heading: "Biz intervyudan boshlaymiz, brendning ma'no va qadriyatlariga chuqur kiramiz — va faqat shundan keyin nima qilishni hal qilamiz.",
    body: "Biz ishonamizki, korporativ sovg'a — bu byudjetdagi belgi emas, balki brend bilan aloqa tajribasining bir qismi. Otkritka, qadoq, merch, kitob yoki sovg'a to'plami reklamadan ko'ra ko'proq brend haqida gapirishi mumkin.",
    philosophy: "Shunchaki maketni chop etish yetarli emas. Shuning uchun biz intervyudan boshlaymiz, brendning ma'no va qadriyatlariga chuqur kiramiz — va faqat shundan keyin nima qilishni hal qilamiz. Bu jarayonni bizga to'liq ishonib topshirish ham, faqat hozir sizga kerak bo'lgan bosqichni olish ham mumkin: o'ylab topish (THINK), dizayn qilish (DESIGN) yoki ishlab chiqarish (MAKE).",
  },
  casesSection: {
    heading: "Bizning keyslarimiz",
    body: "Kattaroq emas, ammo kreativligi kamroq ham emas — bu ham biz.",
    viewCase: "Keysni ko'rish",
    viewAll: "Barcha keyslar",
  },
  cases: [
    {
      slug: "pipls",
      client: "PIPLS",
      title: "Stories'ga tushib qoladigan mavsumiy stakan dizaynlari",
      oneLiner: "14-fevral kampaniyasida 700–800 dona Amore ichimligi sotildi",
      stat: "Kampaniya davomida 700–800 ichimlik",
      heroImage: { src: "/images/cases/pipls-hero.jpg", alt: "Valentine's Season osma yuraklari" },
      size: "wide",
      task:
        "Bahor davri uchun vizual kontseptsiyalar ishlab chiqish: stakan dizayni, 14-fevral va 8-mart kampaniyalari.",
      sections: [
        {
          heading: "Stakanlarning bahorgi dizayni",
          body: "Ikki variant taklif qilindi: birinchisida — gullar orasidagi yosh va jasur qiz-personaj, brend maskotiga o'xshab «ko'zli» gullar bilan. Ikkinchisida tinchroq — oq va pushti lolalar, Navro'zdan ko'ra 8-mart kayfiyatiga yaqinroq.",
        },
        {
          heading: "8-mart: Girls Choice",
          body: "Biz PIPLS CHOICE degan mavjud shiorni GIRLS CHOICE'ga aylantirdik. Firma tipografiyasi personajlar uchun asos bo'ldi: ayol siluetlari harflar ichiga «kirib ketdi» — shu orqali ayol har qanday shakl, rang, xarakter va kayfiyatda bo'lishi mumkinligini ko'rsatdik.",
        },
        {
          heading: "Valentine's Season",
          body: "Rang gammasi ataylab firma ranglaridan farq qildi — romantik kayfiyatni kuchaytirish uchun, ammo tanilishini yo'qotmasdan. Fonda firma patterni, old planda esa Orzi maskoti shaklini o'zgartirib turdi: goh yurak, goh Kupidon, goh «amore» ichimligi stakani.",
        },
      ],
      gallery: [
        { src: "/images/cases/pipls-1.jpg", alt: "Qo'ldagi PIPLS Valentine's Season stakanlari" },
        { src: "/images/cases/pipls-2.jpg", alt: "8-mart uchun Girls Choice dizayni" },
        { src: "/images/cases/pipls-3.jpg", alt: "Bino fasadidagi PIPLS bilbordi" },
        { src: "/images/cases/pipls-4.jpg", alt: "Bahorgi lolali PIPLS stakani" },
      ],
      testimonial: {
        quote:
          "14-fevral kampaniyasida portlatdik, 700–800 donadan ko'proq Amore ichimligini sotdik — demak, shuncha manjet va kartochka ham ketdi…",
        name: "Georgiy",
        role: "PIPLS hammuassisi",
      },
    },
    {
      slug: "bika-bakery",
      client: "Bika Bakery",
      title: "Farishta-otkritka va qahva stakanlari uchun manjetlar",
      oneLiner: "Mahsulot shunchaki yorliq emas, syujetning bir qismiga aylangan otkritka",
      heroImage: { src: "/images/cases/bika-hero.jpg", alt: "Farishtali Bika Bakery otkritkasi" },
      size: "square",
      task: "Mijoz belgilagan shakl asosida 14-fevralga otkritka yaratish — yurak o'rniga bulut.",
      sections: [
        {
          heading: "Nega yurak emas",
          body: "Mijoz yurak o'rniga bulut shaklini tanladi — va oddiy yechim mos kelmasligini bildirdi. Assotsiativ zanjirni qurar ekanmiz, Kupidonga keldik: sevishganlarni yurak-o'qi bilan birlashtiruvchi farishtaga.",
        },
        {
          heading: "Kupidonning diqqati chalg'isa-chi",
          body: "U, albatta, firma D Cake'ga qarshi tura olmadi. Brend ranglaridagi farishta bulutlar ustida parvoz qiladi va desertni tatib ko'rishga shoshilib, hayrat bilan yoy-o'qini uloqtiradi. Obraz 80–90-yillar bolalar rasmlariga o'xshaydi — brend retro motivlarni yaxshi ko'radi.",
        },
        {
          heading: "Qahva uchun manjetlar",
          body: "Qo'shimcha ravishda love is personajlari va qisqa matnli xabarlar bilan stakan manjetlari tayyorlandi — manjet shakli mijozning so'roviga ko'ra ishlab chiqildi.",
        },
      ],
      gallery: [
        { src: "/images/cases/bika-hero.jpg", alt: "Farishtali Bika Bakery otkritkasi" },
        { src: "/images/cases/bika-1.jpg", alt: "Bika Bakery stakanlaridagi manjetlar" },
      ],
    },
    {
      slug: "teplo-autumn-fest",
      client: "April 21 / Teplo Autumn Fest",
      title: "Festival uchun pop-up zona dizayni va merch",
      oneLiner: "Stikerpakdan butun zonaning vizual bezatilishigacha",
      heroImage: { src: "/images/cases/teplo-hero.jpg", alt: "Teplo Autumn Festdagi April 21 pop-up zonasi" },
      size: "tall",
      task: "Teplo Fest'dagi pop-up zona uchun vizual bezak, kepkalar uchun print va stikerpak yaratish.",
      sections: [
        {
          heading: "Stikerlardan butun zonagacha",
          body: "Mijoz stikerpak so'rovi bilan keldi, ammo stikerlar pop-up zona bezagida va brendning kepka hamda futbolkalaridagi printlarda ham ishlatilishini aniqlashtirdi.",
        },
        {
          heading: "Jasorat — brendning bir qismi",
          body: "Brend jasur va trend dizayni bilan ajralib turadi. Biz referenslar to'pladik, shrift va rang gammasini tanladik, stikerlarni varaqqa joyladik — keyin ularni brend auditoriyasining telefonlari, noutbuklari va sevimli buyumlarida «uchratdik».",
        },
      ],
      gallery: [
        { src: "/images/cases/teplo-1.jpg", alt: "Daraxtlar orasidagi April 21 pop-up zonasi" },
        { src: "/images/cases/teplo-2.jpg", alt: "April 21 printli kepka" },
        { src: "/images/cases/teplo-3.jpg", alt: "April 21 pop-up zonasi yonidagi festival mehmoni" },
      ],
      testimonial: {
        quote:
          "Siz bilan ishlash menga juda yoqdi, muloqotda juda yengil edi, bir-birimizni shunchalik oson tushundikki — bu har doim ham bo'lavermaydi. Vazifa va muddatlarga qanchalik mas'uliyat bilan yondashishing ko'rinib turibdi. Bundan tashqari, siz tashabbuskorsiz — bu esa texnik topshiriqsiz murojaat qiluvchi mijozlar uchun juda yaxshi :) Natijadan juda mamnun bo'ldim, ishing uchun yana bir bor rahmat!",
        name: "Dinara",
        role: "April 21 bosh direktori",
      },
    },
    {
      slug: "marakanda",
      client: "Marakanda Jewelry",
      title: "Zargarlik bahorgi kolleksiyasi uchun otkritkalar",
      oneLiner: "Darrov ishonilmagan ikkinchi kontseptsiya aynan «o'sha» bo'lib chiqdi",
      heroImage: { src: "/images/cases/marakanda-hero.jpg", alt: "Nilufarli Marakanda otkritkasi" },
      size: "wide",
      task: "Zargarlik buyumlari bahorgi kolleksiyasi uchun otkritkalar yaratish — xarid vaqtida sovg'a yoki qo'shimcha mahsulot sifatida.",
      sections: [
        {
          heading: "Birinchi variant «o'sha» bo'lmaganda",
          body: "Gullar bilan kontseptsiya buyurtma qilingan edi va biz uni amalga oshirdik — ammo «nimadir o'sha emas, sodda, juda betaraf» degan tuyg'u ketmadi. Birinchi versiya baribir sinov uchun bosib chiqarildi. Sezgi to'g'ri chiqdi: ikkinchi kontseptsiya ancha yaxshi ishladi.",
        },
        {
          heading: "Illyustratsiyaning bir qismiga aylangan zargarlik buyumlari",
          body: "Brend o'zbekcha uslubdagi floristika elementlari bilan zargarlik buyumlari va ninachi broshini chiqargan edi. Biz buyumlarning o'zini patternning bir qismiga aylantirdik: naqshli sirg'a va kulonlar illyustratsiya bilan birlashdi, har bir buyum moybo'yoq taqlidida qo'lda chizildi — zargarlik san'ati va merosning bir qismi sifatida.",
        },
        {
          heading: "Otkritka — hikoyaning davomi",
          body: "Shunday qilib otkritka shunchaki sovg'a emas, kolleksiya hikoyasi va uning o'zbek madaniyati bilan aloqasining davomiga aylandi. Otkritkalar Yonda brendi ostida sotildi va bizning oflayn nuqtalarimiz javonlarida ham paydo bo'ldi.",
        },
      ],
      gallery: [
        { src: "/images/cases/marakanda-1.jpg", alt: "Marakanda sirg'alarining kalla gulli illyustratsiyasi" },
        { src: "/images/cases/marakanda-2.jpg", alt: "Ninachilar tasvirlangan Marakanda otkritkasi" },
        { src: "/images/cases/marakanda-3.jpg", alt: "Naqshli Marakanda patterni" },
        { src: "/images/cases/marakanda-4.jpg", alt: "Do'kon javonidagi Marakanda otkritkalari" },
      ],
      testimonial: {
        quote:
          "…Yondacards bilan bir necha marta ishladik, avval 14-fevral uchun otkritkalarning ulgurji partiyasini sotib oldik, keyinroq brendning milliy uslubdagi zargarlik buyumlari bilan otkritkalar bo'yicha hamkorlik qildik. Hamkorlikda dastlabki g'oyadan chetga chiqib, dizaynerga ishondik — va bekorga emas! Otkritkalarning ikkinchi dizayni auditoriyamizga ko'proq yoqdi va brend kontseptsiyasiga 100% mos keldi. Ish sifatli va o'z vaqtida bajarildi, bu esa biznes uchun juda muhim…",
        name: "Darya",
        role: "Marakanda Jewelry bosh direktori",
      },
    },
    {
      slug: "qanot-sharq",
      client: "Qanot Sharq",
      title: "Aviakompaniya hamkorlari uchun yangi yil otkritkasi",
      oneLiner: "Bayramga «kiyintirilgan» samolyot dumi — oddiy va aniq tanilarli",
      heroImage: { src: "/images/cases/qanot-sharq-hero.jpg", alt: "Bantli Qanot Sharq yangi yil otkritkasi" },
      size: "square",
      task: "Aviakompaniya hamkorlari uchun yangi yil otkritkasini yaratish.",
      sections: [
        {
          heading: "Yangi yil qalpog'idagi samolyot dumi",
          body: "Biz samolyotning eng tanilarli elementi — dumini oldik va uni bayramga «kiyintirdik». Yangi yil qalpog'i, qor parchalari va samolyotning tanish shakli korporativ qat'iylik va brend ranglari doirasida oddiy, ammo o'ziga xos manzara yaratdi.",
        },
        {
          heading: "Qog'ozdan animatsiyagacha",
          body: "Keyinchalik otkritka ijtimoiy tarmoqlar orqali hamkorlarga tarqatilgan animatsion elektron versiyaga moslashtirildi.",
        },
      ],
      gallery: [
        { src: "/images/cases/qanot-sharq-1.jpg", alt: "Hamkorlar uchun Qanot Sharq maktub-otkritkasi" },
        { src: "/images/cases/qanot-sharq-hero.jpg", alt: "Bantli Qanot Sharq yangi yil otkritkasi" },
      ],
      testimonial: {
        quote:
          "…Otkritkalar hamkorlarimizga beriladigan sovg'alarga yoqimli qo'shimcha bo'ldi. Tafsilotlarga e'tiborli munosabatingiz va ajoyib ishingiz uchun rahmat!…",
        name: "Zarina",
        role: "Qanot Sharq marketing menejeri",
      },
    },
    {
      slug: "kontent-sosedi",
      client: "Hamjamiyat «Контент соседи»",
      title: "Hamjamiyatning birinchi ma'ruzasi uchun otkritkalar va yozuv blanklari",
      oneLiner: "Turli tilaklar bilan 42 ta otkritka va 10 xil dizayn — deyarli har bir mehmondan storis",
      stat: "42 otkritka · 10 dizayn",
      heroImage: { src: "/images/cases/kontent-sosedi-hero.jpg", alt: "Ma'ruza mehmonlari uchun stoldagi «Контент соседи» otkritkalari" },
      size: "square",
      task: "Hamjamiyatdagi ma'ruza mehmonlari uchun sovg'alar va yozuvlar uchun blanklar yaratish.",
      sections: [
        {
          heading: "Suratga olgisi keladigan uchrashuv",
          body: "Hamjamiyat boshlovchi blogerlar bilan birinchi uchrashuvini o'tkazdi, unda Seva Hakim blogging haqida ma'ruza qildi. Uchrashuvni estetik qilish, yodda qoladigan sovg'alar qoldirish va mehmonlar albatta uchrashuvni suratga olib, storisga joylashi uchun hamma narsani yorqin va chiroyli qilishga to'g'ri keldi.",
        },
        {
          heading: "Palitra va tilaklar",
          body: "Rang palitrasini tanladik va boshlovchi kreatorlar uchun tilaklar yozilgan otkritkalar tayyorladik. Turli matnli 42 ta otkritka va yanada yorqinroq ko'rinishi uchun 10 xil dizayn yaratildi.",
        },
        {
          heading: "Natija",
          body: "Uchrashuv ishtirokchilarining deyarli har biridan yaxshi storis belgilari yig'dik va ishimizga ko'plab iltifotlar oldik.",
        },
      ],
      gallery: [
        { src: "/images/cases/kontent-sosedi-1.jpg", alt: "Uchrashuv mehmonining qo'lidagi otkritkalar" },
        { src: "/images/cases/kontent-sosedi-2.jpg", alt: "Stoldagi yozuvlar uchun blanklar" },
        { src: "/images/cases/kontent-sosedi-3.jpg", alt: "Ishtirokchining otkritkali storisi" },
        { src: "/images/cases/kontent-sosedi-4.jpg", alt: "Ishtirokchining sovg'a-otkritkalar haqidagi storisi" },
      ],
    },
  ],
  packages: {
    think: {
      number: "01",
      label: "G'oya",
      tagline: "Nima va nima uchun sovg'a qilishni o'ylab topamiz.",
      includedHeading: "Barcha paketlarda:",
      includedItems: [
        "intervyu",
        "brend bilan tanishish",
        "uning xarakteri, qadriyatlari va auditoriyasiga chuqur kirish",
        "vazifa, sabab va qabul qiluvchini tahlil qilish",
        "ijodiy qidiruv",
        "ishlab chiqilgan kontseptsiyalarni taqdim etish",
      ],
      tiers: [
        {
          name: "THINK S",
          subtitle: "1 kontseptsiya · 1 tahrir doirasi",
          description: "Mijoz bitta kuchli ijodiy yechimga ishonishni xohlasa mos keladi. Natija: mexanika, tarkibi va mumkin bo'lgan formatlari tavsiflangan bitta puxta ishlab chiqilgan korporativ sovg'a g'oyasi.",
          priceFrom: "1 000 000 so'mdan",
        },
        {
          name: "THINK M",
          subtitle: "3 kontseptsiya · 2 tahrir doirasi",
          description: "Bitta vazifaga turli yondashuvlarni solishtirmoqchi bo'lgan mijoz uchun. Natija: uchta mustaqil korporativ sovg'a kontseptsiyasi → bittasini tanlash → uni ishlab chiqish.",
          priceFrom: "3 000 000 so'mdan",
        },
        {
          name: "THINK L",
          subtitle: "5 kontseptsiya · 3 tahrir doirasi",
          description: "Ko'proq variantlarni o'rganish va nostandart yechim topish kerak bo'lgan murakkab vazifalar uchun. Natija: beshta mustaqil kontseptual yo'nalish → bittasini tanlash → uni keyingi ishlab chiqish.",
          priceFrom: "6 000 000 so'mdan",
        },
      ],
    },
    design: {
      number: "02",
      label: "Vizual",
      tagline: "G'oyani aniq dizaynga aylantiramiz.",
      includedHeading: "Barcha paketlarda:",
      includedItems: [
        "tayyor kontseptsiya bilan tanishish",
        "qisqa brif",
        "vizual yo'nalishni belgilash",
        "dizaynni ishlab chiqish",
        "maketlarni ishlab chiqarishga tayyorlash",
      ],
      tiers: [
        {
          name: "DESIGN S",
          subtitle: "1–3 format · 1 tahrir doirasi",
          description: "Kichik sovg'a yechimi uchun. Masalan: otkritka + qadoq + stikerpak.",
          priceFrom: "2 500 000 so'mdan",
        },
        {
          name: "DESIGN M",
          subtitle: "4–6 format · 2 tahrir doirasi",
          description: "To'liq sovg'a to'plami uchun. Masalan: quti + otkritka + kundalik + shoper + stikerpak.",
          priceFrom: "4 500 000 so'mdan",
        },
        {
          name: "DESIGN L",
          subtitle: "7–10 format · 3 tahrir doirasi",
          description: "Butun bir vizual tizim yaratish kerak bo'lgan murakkab korporativ loyihalar uchun.",
          priceFrom: "7 000 000 so'mdan",
        },
      ],
    },
    make: {
      number: "03",
      label: "Ishlab chiqarish",
      tagline: "G'oyani tayyor sovg'aga aylantiramiz.",
      includedHeading: "Barcha paketlarda:",
      includedItems: [
        "material va texnologiyalarni tanlash",
        "pudratchilarni qidirish",
        "ishlab chiqarish hisob-kitobi",
        "kommunikatsiya",
        "zarur bo'lsa namunalarni buyurtma qilish",
        "ishlab chiqarishni nazorat qilish",
        "tayyor buyurtmani topshirish",
      ],
      tiers: [
        { name: "MAKE S", subtitle: "1–3 format", priceFrom: "2 000 000 so'mdan", note: "+ ishlab chiqarish" },
        { name: "MAKE M", subtitle: "4–6 format", priceFrom: "3 500 000 so'mdan", note: "+ ishlab chiqarish" },
        { name: "MAKE L", subtitle: "7–10 format", priceFrom: "5 000 000 so'mdan", note: "+ ishlab chiqarish" },
      ],
    },
  },
  testimonialsSection: {
    heading: "Biz bilan ishlaganlar nima deydi",
  },
  finalCta: {
    heading: "Raqobatchilar logotipli ruchka ulashayotganda — esda qoladigan narsa sovg'a qiling",
    body: "Bir oydan keyin navbatdagi kundalikni hech kim eslamaydi. Bizga brend va sabab haqida yozing — qayerdan boshlashni ko'rsatamiz: g'oya, dizayn yoki to'liq ishlab chiqarish.",
    ctaTelegram: "Telegram'da yozish",
  },
  footer: {
    tagline: "Brend xarakterini davom ettiruvchi korporativ sovg'alar.",
    instagramLabel: "Instagram",
    telegramLabel: "Telegram",
    rights: "Yonda",
    b2cLine: {
      text: "O'zingiz uchun sovg'a izlayapsizmi? Otkritkalar, kundaliklar va albomlar — bizning Instagram'da",
      linkLabel: "Instagram",
      href: "https://www.instagram.com/yondacards/",
    },
  },
  caseDetail: {
    back: "Barcha keyslar",
    task: "Vazifa",
    wantSame: "Shunga o'xshash narsa xohlaysizmi?",
    wantSameBody: "Brendingiz va yaqin kampaniyangiz haqida gapirib bering — biz unga mos kontseptsiya taklif qilamiz.",
    ctaButton: "Loyihani muhokama qilish",
  },
};
