document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.container-idv');
    const colors = ['red', 'blue', 'green', 'yellow'];

    let step = 0;

    function lightenColor(color, percent) {
        const colorMap = {
            red: [255, 0, 0],
            blue: [0, 0, 255],
            green: [0, 255, 0],
            yellow: [255, 255, 0]
        };
        const [r, g, b] = colorMap[color];

        const newR = Math.min(255, r + (255 - r) * percent);
        const newG = Math.min(255, g + (255 - g) * percent);
        const newB = Math.min(255, b + (255 - b) * percent);

        return `rgb(${Math.round(newR)}, ${Math.round(newG)}, ${Math.round(newB)})`;
    }

    function updateColors() {
        boxes.forEach((box, index) => {
            const colorIndex = (index + step) % colors.length;
            const borderColor = colors[colorIndex];
            const backgroundColor = lightenColor(borderColor, 0.5);

            box.style.borderColor = borderColor;
            box.style.backgroundColor = backgroundColor;
        });
        step = (step + 1) % colors.length;
    }

    setInterval(updateColors, 1000);
    updateColors();
});
