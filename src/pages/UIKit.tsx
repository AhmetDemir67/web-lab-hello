import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit (Bileşen Kataloğu)</h1>

      {/* BUTTONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* INPUTS */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Inputs</h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir şeyler yazın..." />
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur!" />
        <Input id="ui-help" label="Yardımcı Metin" type="email" helpText="E-posta adresinizi girin." />
        <Input id="ui-dis" label="Devre Dışı (Disabled)" disabled value="Düzenlenemez" />
      </section>

      {/* CARDS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">Gölge ile yükseltilmiş şık kart.</Card>
          <Card variant="outlined" title="Outlined Card">Sadece ince bir çerçevesi olan kart.</Card>
          <Card variant="filled" title="Filled Card">Dolgulu arka plana sahip sade kart.</Card>
        </div>
      </section>

      {/* ALERTS */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Alerts</h2>
        <Alert variant="info" title="Bilgi">Kayıt işlemi devam ediyor...</Alert>
        <Alert variant="success" title="Başarılı">Tüm kodlar sorunsuz derlendi.</Alert>
        <Alert variant="warning" title="Uyarı">Lütfen gerekli alanları doldurun.</Alert>
        <Alert variant="error" title="Hata" dismissible>Sunucuya bağlanılamadı, tekrar deneyin.</Alert>
      </section>
    </div>
  );
}