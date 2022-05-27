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
    <div className={clsx("h-screen")}>
      <div className={clsx("flex", "flex-col", "h-full", "w-full")}>
        <Sidebar home={home} />
        <div className={clsx("w-full", "p-8","pt-8")}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
