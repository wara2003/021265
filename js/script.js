function updateCountdown() {
  const now = new Date();
  const currentYear = now.getUTCFullYear();
  const target = new Date(Date.UTC(currentYear, 11, 2, 23, 33, 0)); // 2 ธันวาคม 23:33 UTC

  // ถ้าเวลาปัจจุบันเลยเวลาเป้าหมายในปีนี้ ให้เปลี่ยนเป็นปีหน้า
  if (now > target) {
    target.setUTCFullYear(currentYear + 1);
  }

  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const display = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;

  document.getElementById('timer').textContent = display;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// วันที่เริ่มคบกัน (เวลาสากล)
const startedDate = new Date(Date.UTC(2022, 11, 2, 23, 33, 0)); // 2 ธันวาคม 2022, เวลา 23:33 UTC

function updateSince() {
  const now = new Date();
  const diff = now - startedDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const display = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
  document.getElementById('since-timer').textContent = display;
}

// เรียกใช้งานทุกวินาที
setInterval(() => {
  updateCountdown();
  updateSince();
}, 1000);

updateCountdown();
updateSince();


