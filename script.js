// Select the body and the custom cursor
const body = document.querySelector('body');
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Track the mouse position
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

// Add active class when hovering over specific elements
document.querySelectorAll('.formula-section').forEach((section) => {
    section.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
    });
    section.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });
});

// Toggle the dropdown content visibility when clicking on a formula section
function toggleContent(id) {
    const content = document.getElementById(`content${id}`);
    content.classList.toggle('open');
}

// Function to toggle the visibility of the formula content and scroll to the clicked section
function toggleContent(id) {
    var content = document.getElementById('content' + id);
    content.classList.toggle('open');  // Toggle the formula content visibility

    // Scroll to the formula section when it's clicked
    var section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
    );
});
