import React from 'react'

export type NavigationItem = {
  name: string
  href?: string
  to?: string
  icon?: React.FC<any>
  count?: string | number
  children?: { name: string; href?: string; to?: string }[]
  current: boolean
}

export type StepsNavigationItem = {
  id?: string
  name: string
  description?: string
  href?: string
  to?: string
  status: StepNavigationStatus
}

export enum StepNavigationStatus {
  complete = 'COMPLETE',
  current = 'CURRENT',
  upcoming = 'UPCOMING',
}
