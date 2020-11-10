import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex-col justify-between bg-blue-900 w-full min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
