import type { Language } from '@/types/language';

export interface UIStrings {
  brand: {
    foundation: string;
    name: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    cta: string;
    mainNav: string;
    languageSwitcher: string;
  };
  footer: {
    copyright: string;
    rights: string;
    bottomNav: string;
  };
  common: {
    generalCause: string;
    currency: string;
    raisedSuffix: string;
    goalPrefix: string;
    statusActive: string;
    statusCompleted: string;
    statusUpcoming: string;
    statusPast: string;
    backArrow: string;
  };
  home: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroText: string;
    heroCta: string;
    quote: string;
  };
  causes: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  causeDetail: {
    backLink: string;
    donateCta: string;
  };
  activities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    upcomingHeading: string;
    pastHeading: string;
  };
  news: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  newsDetail: {
    backLink: string;
    byAuthor: string;
  };
  about: {
    eyebrow: string;
    title: string;
    introParagraph1: string;
    introParagraph2: string;
    valuesHeading: string;
    value1Title: string;
    value1Text: string;
    value2Title: string;
    value2Text: string;
    value3Title: string;
    value3Text: string;
    teamEyebrow: string;
    teamTitle: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
  donate: {
    eyebrow: string;
    titleForm: string;
    titleSuccess: string;
    subtitle: string;
    amountLabel: string;
    customAmountLabel: string;
    customAmountPlaceholder: string;
    nameLabel: string;
    emailLabel: string;
    causeLabel: string;
    messageLabel: string;
    validationHint: string;
    submitCta: string;
    successGreetingPrefix: string;
    successAmountPrefix: string;
    successAmountSuffix: string;
    successCausePrefix: string;
    successReferencePrefix: string;
    successNotePrefix: string;
    successNoteSuffix: string;
    newDonationCta: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
  scrollTop: {
    label: string;
  };
}

const bg: UIStrings = {
  brand: {
    foundation: 'Фондация',
    name: 'Будни заедно',
  },
  header: {
    openMenu: 'Отвори менюто',
    closeMenu: 'Затвори менюто',
    switchToLight: 'Превключи към светла тема',
    switchToDark: 'Превключи към тъмна тема',
    cta: 'Подкрепи ни',
    mainNav: 'Основна навигация',
    languageSwitcher: 'Избор на език',
  },
  footer: {
    copyright: '© {year} Фондация „Будни заедно“',
    rights: 'Всички права запазени.',
    bottomNav: 'Долна навигация',
  },
  common: {
    generalCause: 'Обща кауза',
    currency: 'лв.',
    raisedSuffix: 'събрани',
    goalPrefix: 'от',
    statusActive: 'Активна',
    statusCompleted: 'Приключена',
    statusUpcoming: 'Предстоящо',
    statusPast: 'Отминало',
    backArrow: '←',
  },
  home: {
    heroTitleLine1: 'заедно днес,',
    heroTitleLine2: 'за по-добро утре',
    heroText:
      'Вярваме в силата на общността, образованието и добротата. Работим за по-добро бъдеще за децата и семействата.',
    heroCta: 'Научи повече',
    quote: 'Когато сме будни и заедно, можем всичко.',
  },
  causes: {
    eyebrow: 'Каузи',
    title: 'Кампании, които подкрепяме заедно',
    subtitle: 'Всяка кауза е конкретна нужда на дете или семейство, за която можете да дарите директно.',
  },
  causeDetail: {
    backLink: 'Всички каузи',
    donateCta: 'Дари за тази кауза',
  },
  activities: {
    eyebrow: 'Дейности',
    title: 'Работилници, събития и доброволчески инициативи',
    subtitle: 'Присъединете се към нашите програми и бъдете част от общността ни.',
    upcomingHeading: 'Предстоящи дейности',
    pastHeading: 'Отминали дейности',
  },
  news: {
    eyebrow: 'Новини',
    title: 'Последно от фондацията',
    subtitle: 'Следете нашите постижения, партньорства и предстоящи инициативи.',
  },
  newsDetail: {
    backLink: 'Всички новини',
    byAuthor: 'От',
  },
  about: {
    eyebrow: 'За нас',
    title: 'Мисията на Будни заедно',
    introParagraph1:
      'Фондация „Будни заедно“ е основана през 2019 г. с вярата, че силата на общността, образованието и добротата може да промени живота на децата и семействата в нужда.',
    introParagraph2:
      'Работим с училища, болници и местни общности, за да осигурим достъп до образование, здравна грижа и подкрепа за най-уязвимите деца в страната. Всяка кауза, дейност и партньорство е стъпка към по-добро утре.',
    valuesHeading: 'Нашите ценности',
    value1Title: 'Прозрачност',
    value1Text: '— всяко дарение се отчита пред нашите партньори и дарители.',
    value2Title: 'Общност',
    value2Text: '— вярваме, че промяната се случва заедно, не сами.',
    value3Title: 'Устойчивост',
    value3Text: '— инвестираме в дългосрочни решения, а не еднократна помощ.',
    teamEyebrow: 'Екип',
    teamTitle: 'Хората зад фондацията',
  },
  contacts: {
    eyebrow: 'Контакти',
    title: 'Свържете се с нас',
    addressLabel: 'Адрес',
    emailLabel: 'Имейл',
    phoneLabel: 'Телефон',
    formName: 'Име',
    formEmail: 'Имейл',
    formMessage: 'Съобщение',
    submit: 'Изпрати съобщение',
    successTitle: 'Благодарим за съобщението!',
    successText: 'Ще се свържем с вас възможно най-скоро.',
  },
  donate: {
    eyebrow: 'Подкрепи ни',
    titleForm: 'Направете дарение',
    titleSuccess: 'Дарението е прието',
    subtitle: 'Всяко дарение, независимо от размера, помага на дете или семейство в нужда.',
    amountLabel: 'Изберете сума',
    customAmountLabel: 'Друга сума (лв.)',
    customAmountPlaceholder: 'Въведете сума',
    nameLabel: 'Име',
    emailLabel: 'Имейл',
    causeLabel: 'Кауза (по избор)',
    messageLabel: 'Съобщение (по избор)',
    validationHint: 'Моля, изберете сума и попълнете име и имейл.',
    submitCta: 'Дари сега',
    successGreetingPrefix: 'Благодарим ви',
    successAmountPrefix: 'Вашето дарение от',
    successAmountSuffix: 'лв. беше прието.',
    successCausePrefix: 'За кауза:',
    successReferencePrefix: 'Референтен номер:',
    successNotePrefix: 'Изпратихме потвърждение на',
    successNoteSuffix: 'Това е демо форма — не е извършено реално плащане.',
    newDonationCta: 'Направи ново дарение',
  },
  notFound: {
    title: 'Страницата не е намерена',
    text: 'Изглежда сте стигнали до несъществуваща страница.',
    cta: 'Обратно към началото',
  },
  scrollTop: {
    label: 'Превъртете в началото на страницата',
  },
};

const en: UIStrings = {
  brand: {
    foundation: 'Foundation',
    name: 'Budni Zaedno',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    cta: 'Support us',
    mainNav: 'Main navigation',
    languageSwitcher: 'Language',
  },
  footer: {
    copyright: '© {year} Budni Zaedno Foundation',
    rights: 'All rights reserved.',
    bottomNav: 'Footer navigation',
  },
  common: {
    generalCause: 'General cause',
    currency: 'BGN',
    raisedSuffix: 'raised',
    goalPrefix: 'of',
    statusActive: 'Active',
    statusCompleted: 'Completed',
    statusUpcoming: 'Upcoming',
    statusPast: 'Past',
    backArrow: '←',
  },
  home: {
    heroTitleLine1: 'together today,',
    heroTitleLine2: 'for a better tomorrow',
    heroText:
      'We believe in the power of community, education, and kindness. We work for a better future for children and families.',
    heroCta: 'Learn more',
    quote: 'When we are awake and together, we can do anything.',
  },
  causes: {
    eyebrow: 'Causes',
    title: 'Campaigns we support together',
    subtitle: 'Each cause is a specific need of a child or family that you can donate to directly.',
  },
  causeDetail: {
    backLink: 'All causes',
    donateCta: 'Donate to this cause',
  },
  activities: {
    eyebrow: 'Activities',
    title: 'Workshops, events, and volunteer initiatives',
    subtitle: 'Join our programs and become part of our community.',
    upcomingHeading: 'Upcoming activities',
    pastHeading: 'Past activities',
  },
  news: {
    eyebrow: 'News',
    title: 'Latest from the foundation',
    subtitle: 'Follow our achievements, partnerships, and upcoming initiatives.',
  },
  newsDetail: {
    backLink: 'All news',
    byAuthor: 'By',
  },
  about: {
    eyebrow: 'About us',
    title: 'The mission of Budni Zaedno',
    introParagraph1:
      'The "Budni Zaedno" Foundation was founded in 2019 on the belief that the power of community, education, and kindness can change the lives of children and families in need.',
    introParagraph2:
      'We work with schools, hospitals, and local communities to provide access to education, healthcare, and support for the most vulnerable children in the country. Every cause, activity, and partnership is a step toward a better tomorrow.',
    valuesHeading: 'Our values',
    value1Title: 'Transparency',
    value1Text: '— every donation is reported to our partners and donors.',
    value2Title: 'Community',
    value2Text: '— we believe change happens together, not alone.',
    value3Title: 'Sustainability',
    value3Text: '— we invest in long-term solutions, not one-time aid.',
    teamEyebrow: 'Team',
    teamTitle: 'The people behind the foundation',
  },
  contacts: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    addressLabel: 'Address',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    submit: 'Send message',
    successTitle: 'Thank you for your message!',
    successText: 'We will get back to you as soon as possible.',
  },
  donate: {
    eyebrow: 'Support us',
    titleForm: 'Make a donation',
    titleSuccess: 'Donation received',
    subtitle: 'Every donation, no matter the size, helps a child or family in need.',
    amountLabel: 'Choose an amount',
    customAmountLabel: 'Other amount (BGN)',
    customAmountPlaceholder: 'Enter amount',
    nameLabel: 'Name',
    emailLabel: 'Email',
    causeLabel: 'Cause (optional)',
    messageLabel: 'Message (optional)',
    validationHint: 'Please choose an amount and fill in your name and email.',
    submitCta: 'Donate now',
    successGreetingPrefix: 'Thank you',
    successAmountPrefix: 'Your donation of',
    successAmountSuffix: 'BGN was received.',
    successCausePrefix: 'For cause:',
    successReferencePrefix: 'Reference number:',
    successNotePrefix: 'We sent a confirmation to',
    successNoteSuffix: 'This is a demo form — no real payment was made.',
    newDonationCta: 'Make another donation',
  },
  notFound: {
    title: 'Page not found',
    text: "Looks like you've reached a page that doesn't exist.",
    cta: 'Back to home',
  },
  scrollTop: {
    label: 'Scroll to top of page',
  },
};

const ar: UIStrings = {
  brand: {
    foundation: 'مؤسسة',
    name: 'Budni Zaedno',
  },
  header: {
    openMenu: 'افتح القائمة',
    closeMenu: 'أغلق القائمة',
    switchToLight: 'التبديل إلى الوضع الفاتح',
    switchToDark: 'التبديل إلى الوضع الداكن',
    cta: 'ادعمونا',
    mainNav: 'التنقل الرئيسي',
    languageSwitcher: 'اللغة',
  },
  footer: {
    copyright: '© {year} مؤسسة Budni Zaedno',
    rights: 'جميع الحقوق محفوظة.',
    bottomNav: 'تذييل التنقل',
  },
  common: {
    generalCause: 'قضية عامة',
    currency: 'BGN',
    raisedSuffix: 'تم جمعها',
    goalPrefix: 'من',
    statusActive: 'نشطة',
    statusCompleted: 'مكتملة',
    statusUpcoming: 'قادم',
    statusPast: 'سابق',
    backArrow: '→',
  },
  home: {
    heroTitleLine1: 'معًا اليوم،',
    heroTitleLine2: 'من أجل غد أفضل',
    heroText: 'نؤمن بقوة المجتمع والتعليم واللطف. نعمل من أجل مستقبل أفضل للأطفال والأسر.',
    heroCta: 'اعرف المزيد',
    quote: 'عندما نكون يقظين ومعًا، نستطيع فعل أي شيء.',
  },
  causes: {
    eyebrow: 'القضايا',
    title: 'حملات ندعمها معًا',
    subtitle: 'كل قضية هي احتياج محدد لطفل أو أسرة يمكنك التبرع من أجله مباشرة.',
  },
  causeDetail: {
    backLink: 'كل القضايا',
    donateCta: 'تبرع لهذه القضية',
  },
  activities: {
    eyebrow: 'الأنشطة',
    title: 'ورش عمل وفعاليات ومبادرات تطوعية',
    subtitle: 'انضم إلى برامجنا وكن جزءًا من مجتمعنا.',
    upcomingHeading: 'الأنشطة القادمة',
    pastHeading: 'الأنشطة السابقة',
  },
  news: {
    eyebrow: 'الأخبار',
    title: 'آخر أخبار المؤسسة',
    subtitle: 'تابعوا إنجازاتنا وشراكاتنا ومبادراتنا القادمة.',
  },
  newsDetail: {
    backLink: 'كل الأخبار',
    byAuthor: 'بقلم',
  },
  about: {
    eyebrow: 'من نحن',
    title: 'مهمة Budni Zaedno',
    introParagraph1:
      'تأسست مؤسسة "Budni Zaedno" عام 2019 إيمانًا منها بأن قوة المجتمع والتعليم واللطف يمكن أن تغيّر حياة الأطفال والأسر المحتاجة.',
    introParagraph2:
      'نعمل مع المدارس والمستشفيات والمجتمعات المحلية لتوفير الوصول إلى التعليم والرعاية الصحية والدعم لأكثر الأطفال ضعفًا في البلاد. كل قضية ونشاط وشراكة هي خطوة نحو غد أفضل.',
    valuesHeading: 'قيمنا',
    value1Title: 'الشفافية',
    value1Text: '— يتم الإبلاغ عن كل تبرع لشركائنا ومتبرعينا.',
    value2Title: 'المجتمع',
    value2Text: '— نؤمن بأن التغيير يحدث معًا، وليس بمفرده.',
    value3Title: 'الاستدامة',
    value3Text: '— نستثمر في حلول طويلة الأمد، وليس مساعدات لمرة واحدة.',
    teamEyebrow: 'الفريق',
    teamTitle: 'الأشخاص وراء المؤسسة',
  },
  contacts: {
    eyebrow: 'اتصل بنا',
    title: 'تواصل معنا',
    addressLabel: 'العنوان',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'الرسالة',
    submit: 'إرسال الرسالة',
    successTitle: 'شكرًا لرسالتك!',
    successText: 'سنتواصل معك في أقرب وقت ممكن.',
  },
  donate: {
    eyebrow: 'ادعمونا',
    titleForm: 'قدّم تبرعًا',
    titleSuccess: 'تم استلام التبرع',
    subtitle: 'كل تبرع، مهما كان حجمه، يساعد طفلاً أو أسرة محتاجة.',
    amountLabel: 'اختر مبلغًا',
    customAmountLabel: 'مبلغ آخر (BGN)',
    customAmountPlaceholder: 'أدخل المبلغ',
    nameLabel: 'الاسم',
    emailLabel: 'البريد الإلكتروني',
    causeLabel: 'القضية (اختياري)',
    messageLabel: 'الرسالة (اختياري)',
    validationHint: 'يرجى اختيار مبلغ وتعبئة الاسم والبريد الإلكتروني.',
    submitCta: 'تبرع الآن',
    successGreetingPrefix: 'شكرًا لك',
    successAmountPrefix: 'تبرعك البالغ',
    successAmountSuffix: 'BGN تم استلامه.',
    successCausePrefix: 'للقضية:',
    successReferencePrefix: 'الرقم المرجعي:',
    successNotePrefix: 'أرسلنا تأكيدًا إلى',
    successNoteSuffix: 'هذا نموذج تجريبي — لم تتم أي عملية دفع حقيقية.',
    newDonationCta: 'قدّم تبرعًا آخر',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    text: 'يبدو أنك وصلت إلى صفحة غير موجودة.',
    cta: 'العودة إلى الرئيسية',
  },
  scrollTop: {
    label: 'التمرير إلى أعلى الصفحة',
  },
};

export const translations: Record<Language, UIStrings> = { bg, en, ar };
