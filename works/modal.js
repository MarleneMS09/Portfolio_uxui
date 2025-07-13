
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("expandedImg");
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  document.querySelector(".close-btn").addEventListener('click', function () {
    document.getElementById("imageModal").style.display = "none";
  });

