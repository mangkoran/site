import clsx from 'clsx';
import Sidebar from './sidebar';

const Layout = ({
  children,
  home
}: {
  children: React.ReactNode,
  home?: boolean
}) => {
  return (
    <div className={clsx("h-screen", "p-10")}>
      <div className={clsx("flex", "flex-row", "h-full", "w-full")}>
        <Sidebar home />
        <div className={clsx("w-3/4")}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
