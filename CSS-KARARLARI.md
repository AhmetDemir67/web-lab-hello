# CSS Kararları

## 1. Breakpoint Seçimi
Projeyi Mobile-First (Önce Mobil) mantığıyla geliştirdim. 640px (Tablet) ve 1024px (Masaüstü) kırılma noktalarını seçtim çünkü içerik (özellikle proje kartları ve navigasyon) bu noktalarda daha geniş bir alana ihtiyaç duyuyordu.

## 2. Layout Tercihleri
Header navigasyon menüsü ve iletişim formu gibi tek boyutlu hizalama gerektiren yerlerde Flexbox kullandım. Proje kartları bölümünde ise iki boyutlu bir ızgara gerektiği için CSS Grid tercih ettim. Grid'de `auto-fit` kullanarak media query yazmadan kartların otomatik sütunlara ayrılmasını sağladım.

## 3. Design Tokens
Renk tutarlılığını sağlamak için `:root` içerisinde CSS değişkenleri (Design Tokens) tanımladım. Spacing (boşluk) skalasını 4px'in katları olacak şekilde `rem` cinsinden oluşturdum. Fluid typography için `clamp()` fonksiyonunu kullanarak yazı boyutlarının ekran genişliğine göre akıcı bir şekilde küçülüp büyümesini sağladım.

## 4. Responsive Stratejiler
Önce mobil ekran için kodları yazdım (varsayılan), ardından `min-width` kullanarak büyük ekranlar için eklemeler yaptım. Mobilde menü alt alta, büyük ekranda yan yana; kartlar mobilde tek sütun, büyük ekranda 3 sütun olacak şekilde tasarlandı. Görsellerin taşmasını engellemek için `max-width: 100%` ve `object-fit: cover` kullandım.