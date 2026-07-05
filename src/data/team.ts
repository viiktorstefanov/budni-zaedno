import type { TeamMember } from '@/types/teamMember';

export const team: TeamMember[] = [
  {
    id: 'ivana-petrova',
    name: { bg: 'Ивана Петрова', en: 'Ivana Petrova', ar: 'إيفانا بيتروفا' },
    role: { bg: 'Основател и председател', en: 'Founder & Chairperson', ar: 'المؤسسة ورئيسة مجلس الإدارة' },
    bio: {
      bg: 'Ивана стои зад създаването на фондацията през 2019 г. и води стратегическото ѝ развитие.',
      en: 'Ivana is behind the founding of the foundation in 2019 and leads its strategic development.',
      ar: 'إيفانا هي من أسست المؤسسة عام 2019 وتقود تطويرها الاستراتيجي.',
    },
  },
  {
    id: 'georgi-ivanov',
    name: { bg: 'Георги Иванов', en: 'Georgi Ivanov', ar: 'جورجي إيفانوف' },
    role: { bg: 'Програмен директор', en: 'Program Director', ar: 'مدير البرامج' },
    bio: {
      bg: 'Отговаря за разработването и изпълнението на образователните и здравните ни програми.',
      en: 'Responsible for developing and implementing our education and health programs.',
      ar: 'مسؤول عن تطوير وتنفيذ برامجنا التعليمية والصحية.',
    },
  },
  {
    id: 'maria-georgieva',
    name: { bg: 'Мария Георгиева', en: 'Maria Georgieva', ar: 'ماريا غيورغييفا' },
    role: { bg: 'Координатор доброволци', en: 'Volunteer Coordinator', ar: 'منسقة المتطوعين' },
    bio: {
      bg: 'Организира доброволческите инициативи и поддържа връзка с над 200 активни доброволци.',
      en: 'Organizes volunteer initiatives and maintains contact with over 200 active volunteers.',
      ar: 'تنظّم المبادرات التطوعية وتتواصل مع أكثر من 200 متطوع نشط.',
    },
  },
  {
    id: 'nikolay-dimitrov',
    name: { bg: 'Николай Димитров', en: 'Nikolay Dimitrov', ar: 'نيكولاي ديميتروف' },
    role: { bg: 'Финансов мениджър', en: 'Finance Manager', ar: 'مدير مالي' },
    bio: {
      bg: 'Следи за прозрачното и отговорно управление на дарените средства.',
      en: 'Oversees the transparent and responsible management of donated funds.',
      ar: 'يشرف على الإدارة الشفافة والمسؤولة للأموال المتبرع بها.',
    },
  },
];
