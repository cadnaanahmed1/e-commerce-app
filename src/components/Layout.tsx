import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="app-container">
    <Header />
    <main className="main-content">{children}</main>
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} ShopHub. Built with React.</p>
    </footer>
  </div>
);