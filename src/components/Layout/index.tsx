import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="container mx-auto px-4">
    <Header />
    {children}
  </div>
);

export default Layout;
