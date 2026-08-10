'use client'

import { useState } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'
import type { TeamMember } from '@/features/team/types'

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showPhoto = Boolean(member.photoUrl) && !imageFailed

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#3DD7AA]">
        {showPhoto ? (
          <Image
            src={member.photoUrl as string}
            alt={member.name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <User className="h-7 w-7 text-[#07070A]" aria-hidden="true" />
        )}
      </div>

      <h3 className="text-lg font-bold break-words text-white">{member.name}</h3>
      <p className="text-sm font-medium break-words text-[#3DD7AA]">{member.role}</p>
      <p className="mt-3 line-clamp-4 text-sm text-zinc-400" title={member.blurb}>
        {member.blurb}
      </p>
    </div>
  )
}