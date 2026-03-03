function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        {/* site-title class'ı eklendi */}
        <a href="#" className="site-title">Ahmet Demir</a>
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
          {/* about-content sarmalayıcısı eklendi */}
          <div className="about-content">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Ahmet Demir'in vesikalık fotoğrafı" />
              <figcaption>Ahmet Demir</figcaption>
            </figure>
            <div>
              <p>Merhaba! Ben Ahmet Demir. Yazılım mühendisliği 3. sınıf öğrencisiyim. Ağırlıklı olarak modern web teknolojileriyle ilgileniyorum ve erişilebilir arayüzler tasarlamaya odaklanıyorum.</p>
              {/* skill-tags class'ı eklendi (Uygulama-5) */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          {/* project-grid sarmalayıcısı eklendi (Uygulama-6) */}
          <div className="project-grid">
            {/* project-card class'ı eklendi */}
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="E-ticaret sitesi ana sayfa ekran görüntüsü" />
              <h3>E-Ticaret Arayüzü</h3>
              <p>Erişilebilirlik (a11y) standartlarına uygun, semantik HTML kullanılarak geliştirilmiş alışveriş platformu prototipi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS Grid</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Ağ analiz aracı veri tablosu ekran görüntüsü" />
              <h3>Ağ İletişimi Analiz Aracı</h3>
              <p>Ağ programlama prensiplerini kullanarak veri paketlerini analiz eden masaüstü uygulaması.</p>
              <ul className="skill-tags">
                <li>C++</li>
                <li>Python</li>
                <li>Networking</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/lighthouse-score.png" alt="Lighthouse erişilebilirlik testi sonucu 93 puan" />
              <h3>Erişilebilirlik Performansı</h3>
              <p>Bu portföy sayfası, Google Lighthouse aracı ile test edilmiş ve erişilebilirlik standartlarına tam uyum sağladığı doğrulanmıştır.</p>
              <ul className="skill-tags">
                <li>a11y</li>
                <li>Lighthouse</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İletişim Bölümü ve Form */}
        <section id="iletisim">
          <h2>İletişim</h2>
          
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