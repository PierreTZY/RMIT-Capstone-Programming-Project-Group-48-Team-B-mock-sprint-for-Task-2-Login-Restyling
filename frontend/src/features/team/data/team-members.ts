import type { TeamMember } from '@/features/team/types'

export const TEAM_NAME = 'FieldCapture'

export const teamMembers: TeamMember[] = [
  {
    id: 'kim-khanh-do',
    name: 'Kim Khanh Do',
    role: 'Project Manager',
    blurb:
      'Leads Team B\'s planning, sprint execution, and client communication, keeping requirements and delivery on track from proposal to final MVP.',
  },
  {
    id: 'kai-jie-yee',
    name: 'Kai Jie Yee',
    role: 'Business Analyst',
    blurb:
      'Owns requirements gathering and acceptance criteria, translating client needs into clear, testable user stories.',
  },
  {
    id: 'pierre-tan',
    name: 'Pierre Tan',
    role: 'Developer',
    blurb:
      'Builds and maintains the backend server, driving core feature implementation across each sprint.',
  },
  {
    id: 'khanh-nguyen-hoang-quoc',
    name: 'Hoang Quoc Khanh Nguyen',
    role: 'UX Designer',
    blurb:
      'Designs the user experience and interface, shaping how the product looks, feels, and functions for end users.',
  },
]