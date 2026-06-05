// =====================
// AOS Animation
// =====================

AOS.init({
    duration: 1200,
    once: true
});

// =====================
// Loading Screen
// =====================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 2000);

});

// =====================
// Typing Effect
// =====================

const text = "THE CYBORG REVOLUTION";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document
            .getElementById("typing")
            .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);

    }

}

typeWriter();

// =====================
// Neon Cursor
// =====================

const cursor =
    document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

    }
);

// =====================
// Theme Toggle
// =====================

const themeBtn =
    document.getElementById(
        "themeToggle"
    );

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }

    }
);

// =====================
// Counter Animation
// =====================

function counter(id, target) {

    let count = 0;

    const speed =
        Math.ceil(target / 100);

    const interval =
        setInterval(() => {

            count += speed;

            if (count >= target) {

                count = target;

                clearInterval(
                    interval
                );

            }

            document.getElementById(
                id
            ).innerText = count;

        }, 20);

}

window.addEventListener(
    "load",
    () => {

        counter("ai", 5000);

        counter(
            "robots",
            1200
        );

        counter(
            "users",
            10000
        );

    }
);

// =====================
// Parallax Hero Image
// =====================

const heroImage =
    document.querySelector(
        ".hero-image img"
    );

window.addEventListener(
    "scroll",
    () => {

        let value =
            window.scrollY;

        heroImage.style.transform =
            `translateY(${value * 0.15}px)`;

    }
);

// =====================
// Floating Badges
// =====================

const badges =
    document.querySelectorAll(
        ".floating-badge"
    );

badges.forEach((badge) => {

    let position = 0;

    let direction = 1;

    setInterval(() => {

        position +=
            0.5 * direction;

        if (position > 10)
            direction = -1;

        if (position < -10)
            direction = 1;

        badge.style.transform =
            `translateY(${position}px)`;

    }, 50);

});

// =====================
// Particles Background
// =====================

tsParticles.load(
    "particles-js",
    {

        particles: {

            number: {
                value: 80
            },

            color: {
                value: "#00ffff"
            },

            links: {

                enable: true,

                color:
                    "#00ffff",

                distance: 150,

                opacity: 0.4

            },

            move: {

                enable: true,

                speed: 1

            },

            size: {
                value: 2
            }

        },

        interactivity: {

            events: {

                onHover: {

                    enable: true,

                    mode: "grab"

                }

            },

            modes: {

                grab: {

                    distance: 150

                }

            }

        }

    }
);

// =====================
// Dashboard Animation
// =====================

const dashboardCards =
    document.querySelectorAll(
        ".dashboard-card"
    );

dashboardCards.forEach(
    (card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "scale(1.05)";

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "scale(1)";

            }
        );

    }
);

// =====================
// Contact Form
// =====================

const form =
    document.querySelector(
        ".contact-form"
    );

form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        alert(
            "Message Sent Successfully!"
        );

        form.reset();

    }
);

// =====================
// Navbar Glow on Scroll
// =====================

window.addEventListener(
    "scroll",
    () => {

        const nav =
            document.querySelector(
                "nav"
            );

        if (
            window.scrollY > 50
        ) {

            nav.style.boxShadow =
                "0 0 20px rgba(0,255,255,0.4)";

        } else {

            nav.style.boxShadow =
                "none";

        }

    }
);