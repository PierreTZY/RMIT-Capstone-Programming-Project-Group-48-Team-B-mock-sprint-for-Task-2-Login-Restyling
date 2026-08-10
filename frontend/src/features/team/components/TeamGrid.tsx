import { teamMembers } from '@/features/team/data/team-members'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'

export function TeamGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}