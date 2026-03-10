import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold border-b pb-4 text-blue-600">UI Bileşen Kütüphanesi</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Butonlar</h2>
        <div className="flex gap-4">
          <Button variant="primary">Ana Buton</Button>
          <Button variant="danger">Tehlike</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Giriş Alanları</h2>
        <Input label="Adınız" placeholder="Ahmet Demir" id="uikit-name" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Kartlar</h2>
        <Card title="Örnek Kart" image="https://picsum.photos/200">İçerik</Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uyarılar</h2>
        <Alert variant="success">İşlem Başarılı!</Alert>
      </section>
    </div>
  );
}