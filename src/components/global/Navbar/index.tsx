import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Info from '@/icons/Info'
import Link from 'next/link'
import ProfileSection from './ProfileSection'
import SupportUs from './SupportUs'

export default function GlobalNavbar({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  return (
    <>
      <header className="relative z-[40] flex w-full items-center justify-between border-b border-white/10 bg-primary-400/5 px-3 py-2 drop-shadow-md backdrop-blur-xl">
        <ProfileSection />
        <nav className="absolute left-1/2 flex w-max shrink-0 -translate-x-1/2 gap-4">
          {links.map(({ href, label, Icon, disabled }) => (
            <Link
              href={disabled ? {} : href}
              key={label}
              className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white hover:bg-white/10 motion-safe:transition-colors"
            >
              <Icon className="h-6 w-6 fill-white" />
              {label}
            </Link>
          ))}
          <SupportUs />
        </nav>
        {children}
      </header>
      <div className="absolute left-4 top-24 flex gap-2 rounded border border-white/10 bg-primary-400/5 p-2 text-sm font-light text-white backdrop-blur-lg">
        <Info className="fill-white" />
        <p>For support: Treffy#4964</p>
      </div>
    </>
  )
}

const links = [
  {
    href: '/xp',
    label: 'Experience Calculator',
    Icon: EXP,
  },
  {
    href: '/',
    label: 'Crafting Calculator',
    Icon: Forge,
    disabled: true,
  },
]
