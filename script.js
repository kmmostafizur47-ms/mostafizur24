const resourceCard = document.getElementById('resourceCard');
const toggleStateBtn = document.getElementById('toggleStateBtn');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// ১. টিকচিহ্নে ক্লিক করলে ডার্ক মোডে পরিবর্তন
toggleStateBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    resourceCard.classList.remove('light-state');
    resourceCard.classList.add('dark-state');
});

// ২. কার্ডে আবার ক্লিক করলে লাইট মোডে ফেরত আসা
resourceCard.addEventListener('click', function(e) {
    if (e.target.closest('#openModalBtn')) return; // View বাটনে ক্লিক করলে টগল হবে না
    
    if (resourceCard.classList.contains('dark-state')) {
        resourceCard.classList.remove('dark-state');
        resourceCard.classList.add('light-state');
    }
});

// ৩. VIEW বাটনে ক্লিক করলে মোডাল খোলা
openModalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('active');
});

// ৪. মোডাল বন্ধ করা
closeModalBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});
