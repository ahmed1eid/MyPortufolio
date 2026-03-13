document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    // فتح وإغلاق قائمة الموبايل
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');

        // تحريك أيقونة القائمة (اختياري)
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // إغلاق القائمة عند الضغط على أي رابط
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // تأثير بسيط عند إرسال الفورم
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you, Ahmed! Your message has been sent (Demo).');
        contactForm.reset();
    });
});