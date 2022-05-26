import clsx from 'clsx';
import Link from 'next/link';

const Sidebar = ({ home }: { home?: boolean }) => {
  return (
    <nav className={clsx("h-full", "w-1/4", "mr-5", "border-r")}>
      <ul className={clsx("pb-10")}>
        {home ? (null) : (
          <li><Link href={`/`}><a>Home</a></Link></li>
        )
        }
        <li><Link href={`/`}><a target="_blank">Resume</a></Link></li>
      </ul >
      <ul>
        <li>GitHub: <Link href={`https://github.com/mangkoran`}><a target="_blank">@mangkoran</a></Link></li>
        <li>LinkedIn: <Link href={`https://www.linkedin.com/in/mangkoran/`}><a target="_blank">Afiq Nazrie</a></Link></li>
        <li>Discord: <Link href={`https://discordapp.com/users/391547930550599680`}><a target="_blank">mangkoran#4645</a></Link></li>
        <li>Email: <Link href={`mailto:afnazrie@gmail.com`}><a target="_blank">afnazrie@gmail.com</a></Link></li>
      </ul>
    </nav >
  )
}

export default Sidebar;
