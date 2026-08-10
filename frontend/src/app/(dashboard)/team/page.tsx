import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TeamGrid } from '@/features/team/components/TeamGrid'
import { TEAM_NAME } from '@/features/team/data/team-members'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Team Overview</h1>
        <p className="mt-1 text-sm text-zinc-400">Meet the team behind {TEAM_NAME}!</p>
      </div>
      <TeamGrid />
    </div>
  )
}