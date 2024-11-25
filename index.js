const moveButton = document.getElementById('moveButton')
// ฟังก์ชันแสดงโมดัลพร้อมข้อความ
function showModal(message, imageSrc) {
    document.getElementById('modalText').innerText = message;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modal').classList.remove('hidden');
}

// ฟังก์ชันปิดโมดัล
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').classList.add('hidden');
};

// ฟังก์ชันเมื่อคลิกปุ่ม "ถูก"
document.getElementById('correctBtn').onclick = function() {
    showModal("จุ้บๆรักแฟนน้าาาา(˶˃ ᵕ ˂˶)", "jub.gif"); 
};

moveButton.addEventListener('mouseover', () => {
    const maxX = 500 - moveButton.offsetWidth; // กำหนดขนาดความกว้างพื้นที่
    const maxY = 500 - moveButton.offsetHeight; // กำหนดขนาดความสูงพื้นที่
  
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    moveButton.style.position = 'absolute';
    moveButton.style.left = `${randomX}px`;
    moveButton.style.top = `${randomY}px`;
  });
  