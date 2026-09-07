// 當元素碌到螢幕入面時，自動加個 "active" class 畀佢
const observerOptions = {
    threshold: 0.1 // 當元素出現 10% 嘅時候觸發
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// 套用到所有作品卡片上
document.querySelectorAll('.project-card').forEach(card => {
    // 預設將卡片向下移、透明度變 0
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease-out";
    
    observer.observe(card);
});

// 滾動漸變動畫 (Scroll Fade-in Animation)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".cv-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(section);
  });
});

