import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Main content */}
      <main className="flex-1 container mx-auto p-4">{children}</main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}
