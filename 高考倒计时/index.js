const targetDate = new Date(2025, 5, 7);

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById('timeRemaining').textContent = '高考已开始！';
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timeRemaining').textContent = `距离 2025 高考还有：${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
  }
}


setInterval(updateCountdown, 1000);

updateCountdown();