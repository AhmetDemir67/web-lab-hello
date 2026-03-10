import { useState } from 'react';
import UIKit from './pages/UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function Portfolio() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">Ana içeriğe atla</a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">Ahmet Demir</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <div className="w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-4xl shadow-lg object-cover">👨‍💻</div>
            </figure>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Hakkımda</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Ben Ahmet Demir. Yazılım mühendisliği 3. sınıf öğrencisiyim. Ağırlıklı olarak backend geliştirme, veritabanı mimarileri ve modern web/mobil teknolojileriyle ilgileniyorum. Temiz kod yazmayı ve erişilebilir arayüzler tasarlamayı önemsiyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Java</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Projelerim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="Gayrimenkul CRM Sistemi">
                <p className="text-sm text-gray-600 dark:text-gray-400">Yapay zeka ile ilan üretimi ve GPS entegrasyonuna sahip, gayrimenkul ofislerine yönelik kapsamlı web ve mobil entegre CRM projesi.</p>
              </Card>
              <Card variant="elevated" title="B2B Gayrimenkul Danışman App">
                <p className="text-sm text-gray-600 dark:text-gray-400">Gayrimenkul danışmanları için geliştirilmiş B2B mobil ve web platformu.</p>
              </Card>
              <Card variant="elevated" title="Ağ İletişimi Analiz Aracı">
                <p className="text-sm text-gray-600 dark:text-gray-400">Ağ programlama prensipleri kullanılarak veri paketlerini analiz eden masaüstü yazılımı.</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium">Mesajınız</label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">Gönder</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-sm text-gray-500">
        <p>&copy; 2026 Ahmet Demir. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Sabit Üst Menü */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 p-3 flex flex-wrap justify-center gap-4 sticky top-0 z-50">
        <Button variant={view === 'portfolio' ? 'primary' : 'secondary'} size="md" onClick={() => setView('portfolio')}>
          Portföy Görünümü
        </Button>
        <Button variant={view === 'uikit' ? 'primary' : 'secondary'} size="md" onClick={() => setView('uikit')}>
          UI Kit Görünümü
        </Button>
        <Button variant="ghost" size="md" onClick={toggleDarkMode}>
          🌙 / ☀️ Tema Değiştir
        </Button>
      </div>

      {/* Seçilen sayfayı ekrana bas */}
      {view === 'portfolio' ? <Portfolio /> : <UIKit />}
    </>
  );
}