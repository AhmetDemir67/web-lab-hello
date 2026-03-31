export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tüm hakları saklıdır. React & Tailwind ile geliştirildi.
      </p>
    </footer>
  );
}