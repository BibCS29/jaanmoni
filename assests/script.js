// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideIn 0.8s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all love sections
document.querySelectorAll(".love-section").forEach((section) => {
  observer.observe(section);
});

// ============================================
// FLOATING HEARTS ANIMATION
// ============================================

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "5";

  document.body.appendChild(heart);

  const duration = Math.random() * 3 + 4; // 4-7 seconds
  const keyframes = `
        @keyframes float-up {
            0% {
                transform: translateY(0) translateX(0);
                opacity: ${heart.style.opacity};
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;

  const style = document.createElement("style");
  style.textContent = keyframes;
  document.head.appendChild(style);

  heart.style.animation = `float-up ${duration}s ease-in forwards`;

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 800);

// ============================================
// HOVER EFFECTS FOR IMAGE WRAPPERS
// ============================================

document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(2deg)";
  });

  wrapper.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// ============================================
// INTERACTIVE BOUQUET FLOWERS
// ============================================

document.querySelectorAll(".flower").forEach((flower) => {
  flower.addEventListener("click", function () {
    this.style.animation = "bounce 0.5s ease-out";
    setTimeout(() => {
      this.style.animation = "";
    }, 500);
  });

  flower.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.15)";
  });

  flower.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Add bounce animation
const style = document.createElement("style");
style.textContent = `
    @keyframes bounce {
        0%, 100% {
            transform: scale(1.15);
        }
        50% {
            transform: scale(1.3);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;

  // Parallax effect on hero section
  const hero = document.querySelector(".hero");
  if (hero && scrolled < window.innerHeight) {
    hero.style.backgroundPosition = "0 " + scrolled * 0.5 + "px";
  }
});

// ============================================
// MESSAGE CARD ANIMATION
// ============================================

document.querySelectorAll(".message-card").forEach((card, index) => {
  card.style.animation = `slideIn 0.8s ease-out ${index * 0.1}s backwards`;
});

// ============================================
// LOVE TREE INTERACTION
// ============================================

document.querySelectorAll(".hanging-photo").forEach((photo) => {
  photo.addEventListener("click", function () {
    this.style.animation = "none";
    setTimeout(() => {
      this.style.animation = `sway 3s ease-in-out infinite`;
    }, 10);
  });

  // Add glow effect on hover
  photo.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 20px rgba(255, 20, 147, 0.8)";
  });

  photo.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function createScrollButton() {
  const button = document.createElement("button");
  button.innerHTML = "❤️ TOP ❤️";
  button.className = "scroll-to-top";
  button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: bold;
        box-shadow: 0 5px 20px rgba(255, 20, 147, 0.4);
        z-index: 50;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateY(20px);
    `;

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
      button.style.pointerEvents = "auto";
    } else {
      button.style.opacity = "0";
      button.style.transform = "translateY(20px)";
      button.style.pointerEvents = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(0) scale(1.1)";
  });

  button.addEventListener("mouseleave", function () {
    if (window.pageYOffset > 300) {
      this.style.transform = "translateY(0)";
    }
  });
}

createScrollButton();

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener("load", function () {
  document.body.style.animation = "fadeIn 0.8s ease-out";
});

// Add fade in animation
const fadeInStyle = document.createElement("style");
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeInStyle);

// ============================================
// CURSOR EFFECT (Optional)
// ============================================

document.addEventListener("mousemove", function (e) {
  // You can add custom cursor effects here
  const customCursor = document.createElement("div");
  customCursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 20, 147, 0.8), rgba(255, 105, 180, 0.4));
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        animation: cursorAnimation 0.5s ease-out forwards;
    `;

  document.body.appendChild(customCursor);

  setTimeout(() => {
    customCursor.remove();
  }, 500);
});

// Add cursor animation
const cursorStyle = document.createElement("style");
cursorStyle.textContent = `
    @keyframes cursorAnimation {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cursorStyle);

// ============================================
// LOVE MESSAGE ON COPY
// ============================================

document.addEventListener("copy", function (e) {
  e.preventDefault();
  const selectedText = window.getSelection().toString();
  e.clipboardData.setData(
    "text/plain",
    selectedText + "\n\n💕 Shared with love 💕",
  );

  // Show notification
  showNotification("❤️ Copied with love! ❤️");
});

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(255, 20, 147, 0.4);
        z-index: 1000;
        animation: slideDown 0.5s ease-out;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideUp 0.5s ease-out forwards";
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Add slide animations for notifications
const notificationStyle = document.createElement("style");
notificationStyle.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ============================================
// CONSOLE LOVE MESSAGE
// ============================================

console.log(
  "%c❤️ Welcome to JAANMONI - A Love Expression Website ❤️",
  "font-size: 20px; color: #ff1493; font-weight: bold;",
);
console.log(
  "%cThis website is dedicated to expressing love in 19 beautiful frames.",
  "font-size: 14px; color: #ff69b4;",
);
console.log("%cEnjoy the love story! 💕", "font-size: 14px; color: #ff69b4;");

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener("keydown", function (event) {
  // Press 'L' for love effect
  if (event.key.toLowerCase() === "l") {
    for (let i = 0; i < 5; i++) {
      setTimeout(createFloatingHeart, i * 100);
    }
  }

  // Press 'H' to scroll to home
  if (event.key.toLowerCase() === "h") {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }
});

// ============================================
// END OF SCRIPT
// ============================================
