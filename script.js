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


.contact-section {
    padding: 80px 60px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: sans-serif;
    color: #111;
}

.contact-section h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 40px;
    letter-spacing: 1px;
}

/* 地址多欄排版 */
.contact-grid {
    display: flex;
    gap: 60px;
    margin-bottom: 60px;
    flex-wrap: wrap;
}

.country-box h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.country-box p {
    font-size: 13px;
    line-height: 1.6;
    color: #444;
    margin-bottom: 15px;
}

.country-box a {
    font-size: 13px;
    color: #111;
    text-decoration: underline;
}

/* 表格極簡外觀 */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-row {
    display: flex;
    gap: 20px;
}

.form-row.double {
    justify-content: space-between;
}

.input-group {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
}

.input-group label {
    position: absolute;
    left: 8px;
    font-size: 12px;
    color: #e53935; /* 星號變紅色 */
}

.input-group input, 
.input-group textarea {
    width: 100%;
    padding: 10px 10px 10px 20px;
    border: 1px solid #ccc;
    background: transparent;
    font-size: 12px;
    outline: none;
}

.input-group input:focus, 
.input-group textarea:focus {
    border-color: #111;
}

.mandatory-note {
    font-size: 11px;
    letter-spacing: 1px;
    margin-top: 10px;
    color: #333;
    border-top: 1px solid #ccc;
    padding-top: 15px;
}