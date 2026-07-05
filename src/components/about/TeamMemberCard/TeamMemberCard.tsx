import type { TeamMember } from '@/types/teamMember';
import { useLanguage } from '@/context/LanguageContext';
import './TeamMemberCard.scss';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { language } = useLanguage();
  const name = member.name[language];
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('');

  return (
    <div className="team-member-card">
      <div className="team-member-card__avatar" aria-hidden="true">
        {initials}
      </div>
      <h3 className="team-member-card__name">{name}</h3>
      <p className="team-member-card__role">{member.role[language]}</p>
      <p className="team-member-card__bio">{member.bio[language]}</p>
    </div>
  );
}
