

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");

  const countdown = (count, callback) => {
    if (count >= 1) {
      setTimeout(() => {
        timerElement.textContent = count;
        countdown(count - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  };

  countdown(10, () => {
    timerElement.textContent = "Happy Independence Day";
  });
});
