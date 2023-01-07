import { ReactNode } from 'react'
import { Tab as HeadlessTab } from '@headlessui/react'
import clsx from 'clsx';

const ThemedTabList = (props: { children: ReactNode }) => {
    return (
        <HeadlessTab.List {...props} className="flex space-x-1 rounded-xl bg-blue-800/75 dark:bg-blue-800/40 p-1" />
    )
}

const ThemedTab = (props: { children: ReactNode, key: string }) => {
  return (
      <HeadlessTab {...props} className={({ selected }) =>
        clsx(
            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
            ? '!bg-white shadow'
            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
        )
    } />
  )
}

export { ThemedTab, ThemedTabList }