import type { FeatureItem } from '@/types/feature';
import { FamilyIcon } from '@/components/icons/FamilyIcon';
import { HandsIcon } from '@/components/icons/HandsIcon';
import { SproutIcon } from '@/components/icons/SproutIcon';
import { HouseHeartIcon } from '@/components/icons/HouseHeartIcon';

export const features: FeatureItem[] = [
  {
    id: 'opportunities',
    title: { bg: 'Създаваме възможности', en: 'Creating opportunities', ar: 'نخلق الفرص' },
    description: {
      bg: 'Подкрепяме развитието на деца и млади хора.',
      en: 'We support the development of children and young people.',
      ar: 'ندعم نمو الأطفال والشباب.',
    },
    color: 'purple',
    Icon: FamilyIcon,
  },
  {
    id: 'connect',
    title: { bg: 'Свързваме хора', en: 'Connecting people', ar: 'نربط الناس' },
    description: {
      bg: 'Обединяваме усилия за общи каузи.',
      en: 'We unite efforts for common causes.',
      ar: 'نوحّد الجهود من أجل قضايا مشتركة.',
    },
    color: 'green',
    Icon: HandsIcon,
  },
  {
    id: 'inspire',
    title: { bg: 'Вдъхновяваме промяна', en: 'Inspiring change', ar: 'نلهم التغيير' },
    description: {
      bg: 'Насърчаваме доброто и активното участие.',
      en: 'We encourage kindness and active participation.',
      ar: 'نشجع الخير والمشاركة الفعالة.',
    },
    color: 'orange',
    Icon: SproutIcon,
  },
  {
    id: 'care',
    title: { bg: 'Грижим се заедно', en: 'Caring together', ar: 'نهتم معًا' },
    description: {
      bg: 'За по-силни семейства и общности.',
      en: 'For stronger families and communities.',
      ar: 'من أجل أسر ومجتمعات أقوى.',
    },
    color: 'blue',
    Icon: HouseHeartIcon,
  },
];
