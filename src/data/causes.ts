import type { Cause } from '@/types/cause';

export const causes: Cause[] = [
  {
    id: 'school-supplies',
    title: {
      bg: 'Училищни пособия за деца',
      en: 'School supplies for children',
      ar: 'مستلزمات مدرسية للأطفال',
    },
    summary: {
      bg: 'Осигуряваме раници, учебници и материали за деца от нуждаещи се семейства.',
      en: 'We provide backpacks, textbooks, and supplies for children from families in need.',
      ar: 'نوفر حقائب مدرسية وكتبًا ومستلزمات للأطفال من الأسر المحتاجة.',
    },
    description: {
      bg: [
        'В началото на всяка учебна година много семейства трудно се справят с разходите за раници, учебници и канцеларски материали.',
        'Чрез тази кауза събираме средства, за да осигурим пълен комплект училищни пособия на деца от нуждаещи се семейства в цялата страна.',
        'Всяко дарение помага на едно дете да започне учебната година подготвено и уверено.',
      ],
      en: [
        'At the start of each school year, many families struggle to cover the cost of backpacks, textbooks, and school supplies.',
        'Through this cause, we raise funds to provide a complete set of school supplies to children from families in need across the country.',
        'Every donation helps a child start the school year prepared and confident.',
      ],
      ar: [
        'في بداية كل عام دراسي، تواجه العديد من الأسر صعوبة في تغطية تكاليف الحقائب والكتب والمستلزمات المدرسية.',
        'من خلال هذه القضية، نجمع التبرعات لتوفير مجموعة كاملة من المستلزمات المدرسية للأطفال من الأسر المحتاجة في جميع أنحاء البلاد.',
        'كل تبرع يساعد طفلاً على بدء العام الدراسي مستعدًا وواثقًا.',
      ],
    },
    imageUrl: '',
    category: { bg: 'Образование', en: 'Education', ar: 'التعليم' },
    goalAmount: 12000,
    raisedAmount: 8450,
    status: 'active',
    startDate: '2026-08-01',
  },
  {
    id: 'child-health',
    title: {
      bg: 'Здравна помощ за деца',
      en: 'Health support for children',
      ar: 'دعم صحي للأطفال',
    },
    summary: {
      bg: 'Покриваме разходи за прегледи, лечение и рехабилитация на деца в нужда.',
      en: 'We cover the costs of checkups, treatment, and rehabilitation for children in need.',
      ar: 'نغطي تكاليف الفحوصات والعلاج وإعادة التأهيل للأطفال المحتاجين.',
    },
    description: {
      bg: [
        'Много семейства не могат да си позволят навременни медицински прегледи и лечение за децата си.',
        'Тази кауза финансира прегледи при специалисти, лекарства и рехабилитационни програми за деца от социално слаби семейства.',
        'Работим с доверени медицински партньори, за да гарантираме, че всяко дарение достига до дете, което има нужда от помощ.',
      ],
      en: [
        'Many families cannot afford timely medical checkups and treatment for their children.',
        'This cause funds specialist checkups, medication, and rehabilitation programs for children from low-income families.',
        'We work with trusted medical partners to ensure every donation reaches a child who needs help.',
      ],
      ar: [
        'لا تستطيع العديد من الأسر تحمل تكاليف الفحوصات الطبية والعلاج في الوقت المناسب لأطفالها.',
        'تموّل هذه القضية فحوصات الأخصائيين والأدوية وبرامج إعادة التأهيل للأطفال من الأسر ذات الدخل المحدود.',
        'نعمل مع شركاء طبيين موثوقين لضمان وصول كل تبرع إلى طفل بحاجة إلى المساعدة.',
      ],
    },
    imageUrl: '',
    category: { bg: 'Здраве', en: 'Health', ar: 'الصحة' },
    goalAmount: 20000,
    raisedAmount: 13200,
    status: 'active',
    startDate: '2026-03-15',
  },
  {
    id: 'shelter-repair',
    title: {
      bg: 'Ремонт на приют за майки',
      en: 'Renovation of a shelter for mothers',
      ar: 'ترميم مأوى للأمهات',
    },
    summary: {
      bg: 'Обновяваме дом за майки и деца в риск, за да им осигурим безопасен покрив.',
      en: 'We are renovating a home for at-risk mothers and children to give them a safe place to live.',
      ar: 'نجدد منزلاً للأمهات والأطفال المعرضين للخطر لتوفير سقف آمن لهم.',
    },
    description: {
      bg: [
        'Приютът в град Плевен подслонява майки и деца, преживели трудни обстоятелства, но сградата има нужда от спешен ремонт.',
        'Средствата от кампанията ще бъдат използвани за подмяна на покрива, отопление и обзавеждане на общите помещения.',
        'Заедно можем да осигурим топъл и сигурен дом за жените и децата, които разчитат на приюта.',
      ],
      en: [
        'The shelter in the city of Pleven houses mothers and children who have been through difficult circumstances, but the building is in urgent need of repair.',
        'Funds from the campaign will be used to replace the roof, heating, and furnish the common areas.',
        'Together we can provide a warm and secure home for the women and children who rely on the shelter.',
      ],
      ar: [
        'يؤوي المأوى في مدينة بليفن أمهات وأطفالًا مروا بظروف صعبة، لكن المبنى بحاجة ماسة إلى الترميم.',
        'ستُستخدم أموال الحملة لاستبدال السقف والتدفئة وتأثيث المساحات المشتركة.',
        'معًا يمكننا توفير منزل دافئ وآمن للنساء والأطفال الذين يعتمدون على هذا المأوى.',
      ],
    },
    imageUrl: '',
    category: { bg: 'Семейства', en: 'Families', ar: 'الأسر' },
    goalAmount: 30000,
    raisedAmount: 19850,
    status: 'active',
    startDate: '2026-02-01',
  },
  {
    id: 'scholarship-fund',
    title: {
      bg: 'Стипендиантски фонд',
      en: 'Scholarship fund',
      ar: 'صندوق المنح الدراسية',
    },
    summary: {
      bg: 'Подкрепяме талантливи ученици от нуждаещи се семейства да продължат образованието си.',
      en: 'We support talented students from families in need to continue their education.',
      ar: 'ندعم الطلاب الموهوبين من الأسر المحتاجة لمواصلة تعليمهم.',
    },
    description: {
      bg: [
        'Всяка година подбираме ученици с отличен успех, които имат нужда от финансова подкрепа, за да продължат обучението си.',
        'Стипендиите покриват такси, учебни материали и транспорт до училище.',
        'От създаването на фонда сме подкрепили над 40 деца в тяхното образователно пътуване.',
      ],
      en: [
        'Each year we select high-achieving students who need financial support to continue their studies.',
        'The scholarships cover fees, school materials, and transportation to school.',
        'Since the fund was established, we have supported over 40 children in their educational journey.',
      ],
      ar: [
        'نختار كل عام طلابًا متفوقين بحاجة إلى دعم مالي لمواصلة دراستهم.',
        'تغطي المنح الرسوم والمواد الدراسية والمواصلات إلى المدرسة.',
        'منذ إنشاء الصندوق، دعمنا أكثر من 40 طفلاً في مسيرتهم التعليمية.',
      ],
    },
    imageUrl: '',
    category: { bg: 'Образование', en: 'Education', ar: 'التعليم' },
    goalAmount: 15000,
    raisedAmount: 9100,
    status: 'active',
    startDate: '2025-09-01',
  },
  {
    id: 'winter-clothing',
    title: {
      bg: 'Зимна кампания за облекло',
      en: 'Winter clothing campaign',
      ar: 'حملة الملابس الشتوية',
    },
    summary: {
      bg: 'Събрахме и раздадохме топли дрехи и обувки за над 300 деца тази зима.',
      en: 'We collected and distributed warm clothes and shoes for over 300 children this winter.',
      ar: 'جمعنا ووزّعنا ملابس وأحذية دافئة لأكثر من 300 طفل هذا الشتاء.',
    },
    description: {
      bg: [
        'С настъпването на студените месеци организирахме кампания за събиране на топли дрехи, обувки и завивки.',
        'Благодарение на дарителите успяхме да подпомогнем над 300 деца от 12 населени места в страната.',
        'Благодарим на всички, които се включиха — заедно направихме зимата малко по-топла за много семейства.',
      ],
      en: [
        'As the cold months arrived, we organized a campaign to collect warm clothes, shoes, and blankets.',
        'Thanks to our donors, we were able to help over 300 children from 12 towns across the country.',
        'Thank you to everyone who took part — together we made winter a little warmer for many families.',
      ],
      ar: [
        'مع بداية الأشهر الباردة، نظّمنا حملة لجمع الملابس الدافئة والأحذية والبطانيات.',
        'بفضل المتبرعين، تمكنّا من مساعدة أكثر من 300 طفل من 12 بلدة في جميع أنحاء البلاد.',
        'شكرًا لكل من شارك — معًا جعلنا الشتاء أكثر دفئًا للعديد من الأسر.',
      ],
    },
    imageUrl: '',
    category: { bg: 'Семейства', en: 'Families', ar: 'الأسر' },
    goalAmount: 8000,
    raisedAmount: 8000,
    status: 'completed',
    startDate: '2025-11-01',
  },
];
