document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Sayfa Yüklenme Olayı
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

    // 2️⃣ Menü Etkileşimi (mouseover & mouseout)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "var(--accent-color)";
            link.style.letterSpacing = "2px";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "";
            link.style.letterSpacing = "0";
        });

        // 3️⃣ Aktif Sayfa Vurgulama (click)
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 4️⃣ Tema Değiştirme (2 tema: Işık/Karanlık)
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }

    // 6️⃣ Dinamik Aktivite Listesi (Array + Loop)
    const activities = [
        { name: "Tekne Turu", desc: "PortCity koylarını keşfedin" },
        { name: "Dalış Deneyimi", desc: "Derinlerdeki yaşamı görün" },
        { name: "Marina Restoranları", desc: "Lezzetli deniz ürünlerini tadın" },
        { name: "Gün Batımı Yürüyüşü", desc: "Eşsiz manzaranın tadını çıkarın" }
    ];

    const activityBox = document.getElementById("activity-container");
    const infoBox = document.getElementById("hover-info");

    if (activityBox) {
        activities.forEach(act => {
            const div = document.createElement("div");
            div.className = "activity-item";
            div.textContent = act.name;

            // 5️⃣ Mouseover Bilgi Kutusu
            div.addEventListener("mouseover", () => {
                infoBox.textContent = act.desc;
                infoBox.classList.remove("hidden");
            });
            div.addEventListener("mouseout", () => {
                infoBox.classList.add("hidden");
            });

            activityBox.appendChild(div);
        });
    }

    // 7️⃣ Beğeni Sayacı
    let likes = 0;
    const likeBtn = document.getElementById("like-btn");
    const likeDisplay = document.getElementById("like-count");

    if (likeBtn) {
        likeBtn.addEventListener("click", () => {
            likes++;
            likeDisplay.textContent = likes;
            likeBtn.style.transform = "scale(1.2)";
            setTimeout(() => likeBtn.style.transform = "scale(1)", 200);
        });
    }

    // 8️⃣ İletişim Formu Kontrolü
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const msg = document.getElementById("message").value;

            if (!name || !email || !msg) {
                alert("Lütfen tüm alanları doldurun!");
            } else {
                alert("Mesajınız başarıyla gönderildi");
                form.reset();
            }
        });
    }

    // 9️⃣ Görsel Etkileşimi (Toggle)
    const img = document.getElementById("interactive-img");
    if (img) {
        img.addEventListener("click", () => {
            img.classList.toggle("zoomed");
        });
    }
});