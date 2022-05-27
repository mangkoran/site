import clsx from 'clsx';
import Link from 'next/link';

const Sidebar = ({ home }: { home?: boolean }) => {
  return (
    <header className={clsx("w-full", "border-b", "py-2", "px-8")}>
      <div className={clsx("flex", "overflow-auto", "place-content-between")}>
        <div className={clsx("flex")}>
          {home ? (null) : (
            <Link href={`/`}><a className={clsx("pr-2")} >Home</a></Link>
          )}
          <Link href={`/`}><a className={clsx("pr-8")} target="_blank">Resume</a></Link>
        </div>
        <div className={clsx("flex")}>
          <Link href={`https://github.com/mangkoran`}><a className={clsx("pr-2")} target="_blank">GitHub</a></Link>
          <Link href={`https://www.linkedin.com/in/mangkoran/`}><a className={clsx("pr-2")} target="_blank">LinkedIn</a></Link>
          <Link href={`https://discordapp.com/users/391547930550599680`}><a className={clsx("pr-2")} target="_blank">Discord</a></Link>
          <Link href={`mailto:afnazrie@gmail.com`}><a target="_blank">Email</a></Link>
        </div>
      </div>
    </header>
  )
}

export default Sidebar;
