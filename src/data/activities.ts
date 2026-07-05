import type { Activity } from '@/types/activity';

export const activities: Activity[] = [
  {
    id: 'parenting-workshop',
    title: { bg: 'Родителска работилница', en: 'Parenting workshop', ar: 'ورشة عمل للآباء' },
    description: {
      bg: 'Безплатна работилница за родители на тема позитивно родителство и общуване с деца.',
      en: 'A free workshop for parents on positive parenting and communicating with children.',
      ar: 'ورشة عمل مجانية للآباء حول التربية الإيجابية والتواصل مع الأطفال.',
    },
    date: '2026-08-22',
    location: {
      bg: 'София, Културен център "Кръг"',
      en: 'Sofia, "Krag" Cultural Center',
      ar: 'صوفيا، مركز "كراغ" الثقافي',
    },
    imageUrl: '',
    status: 'upcoming',
    category: { bg: 'Работилница', en: 'Workshop', ar: 'ورشة عمل' },
  },
  {
    id: 'summer-camp',
    title: { bg: 'Лятна лагерна инициатива', en: 'Summer camp initiative', ar: 'مبادرة المخيم الصيفي' },
    description: {
      bg: 'Едноседмичен летен лагер за деца от нашите програми, с игри, спорт и творчески занимания.',
      en: 'A one-week summer camp for children in our programs, with games, sports, and creative activities.',
      ar: 'مخيم صيفي لمدة أسبوع للأطفال المسجلين في برامجنا، يتضمن ألعابًا ورياضة وأنشطة إبداعية.',
    },
    date: '2026-08-10',
    location: { bg: 'Боровец', en: 'Borovets', ar: 'بوروفيتس' },
    imageUrl: '',
    status: 'upcoming',
    category: { bg: 'Събитие', en: 'Event', ar: 'فعالية' },
  },
  {
    id: 'volunteer-day',
    title: { bg: 'Доброволчески ден', en: 'Volunteer day', ar: 'يوم تطوعي' },
    description: {
      bg: 'Над 60 доброволци се включиха в почистване и озеленяване на детска площадка в кв. Люлин.',
      en: 'Over 60 volunteers took part in cleaning and landscaping a playground in the Lyulin district.',
      ar: 'شارك أكثر من 60 متطوعًا في تنظيف وتشجير ملعب أطفال في حي ليولين.',
    },
    date: '2026-05-17',
    location: { bg: 'София, кв. Люлин', en: 'Sofia, Lyulin district', ar: 'صوفيا، حي ليولين' },
    imageUrl: '',
    status: 'past',
    category: { bg: 'Доброволчество', en: 'Volunteering', ar: 'تطوع' },
  },
  {
    id: 'charity-bazaar',
    title: { bg: 'Благотворителен базар', en: 'Charity bazaar', ar: 'سوق خيري' },
    description: {
      bg: 'Празничен базар с ръчно изработени изделия, събрал средства за нашите каузи.',
      en: 'A festive bazaar with handmade goods that raised funds for our causes.',
      ar: 'سوق احتفالي بمنتجات يدوية الصنع جمع تبرعات لدعم قضايانا.',
    },
    date: '2025-12-14',
    location: { bg: 'Пловдив, Централен площад', en: 'Plovdiv, Central Square', ar: 'بلوفديف، الساحة المركزية' },
    imageUrl: '',
    status: 'past',
    category: { bg: 'Събитие', en: 'Event', ar: 'فعالية' },
  },
];
