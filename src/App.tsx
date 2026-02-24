function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <h1>Ahmet Demir - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            {/* Şimdilik internetten otomatik bir görsel çektik, sonra kendi fotoğrafınla değiştirebilirsin */}
            <img src="https://via.placeholder.com/150" alt="Ahmet Demir'in vesikalık fotoğrafı" />
            <figcaption>Ahmet Demir</figcaption>
          </figure>
          <p>Merhaba! Ben Ahmet Demir. Yazılım mühendisliği 3. sınıf öğrencisiyim. Ağırlıklı olarak modern web teknolojileriyle ilgileniyorum ve erişilebilir arayüzler tasarlamaya odaklanıyorum.</p>
          <ul>
            <li>Web Tasarımı ve Programlama</li>
            <li>Veri Madenciliği</li>
            <li>Ağ Programlama</li>
            <li>Biçimsel Diller ve Otomata Teorisi</li>
          </ul>
        </section>

        {/* Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>E-Ticaret Arayüzü</h3>
            <p>Erişilebilirlik (a11y) standartlarına uygun, semantik HTML kullanılarak geliştirilmiş alışveriş platformu prototipi.</p>
            <img src="https://via.placeholder.com/300x150" alt="E-ticaret sitesi ana sayfa ekran görüntüsü" />
          </article>

          <article>
            <h3>Ağ İletişimi Analiz Aracı</h3>
            <p>Ağ programlama prensiplerini kullanarak veri paketlerini analiz eden masaüstü uygulaması.</p>
            <img src="https://via.placeholder.com/300x150" alt="Ağ analiz aracı veri tablosu ekran görüntüsü" />
          </article>
        </section>

        {/* İletişim Bölümü ve Form */}
        <section id="iletisim">
          <h2>İletişim</h2>
          
          {/* Form Doğrulama (Validation) */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 Ahmet Demir. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App