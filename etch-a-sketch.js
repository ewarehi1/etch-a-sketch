const header = document.createElement('div');
header.style.cssText = 'height: 10%; width: 100%; background-color: #7aa9f5; display: flex; align-items: flex-end; justify-content: space-evenly;'
document.body.appendChild(header);

const canvasButton = document.createElement('button');
canvasButton.textContent = 'Set size';
header.appendChild(canvasButton);

canvasButton.addEventListener('click', () => {
    const height = prompt('Set height.', 16);
    const width = prompt('Set width.', 16);

    canvas.innerHTML = null;
    setCanvas(width, height);
})

const canvas = document.createElement('div');
canvas.setAttribute('id', 'canvas');
document.body.appendChild(canvas);

function setCanvas(x, y) {

    for ( let i = 1; i <= y; i++ ) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display: flex; justify-content: center;';
        canvas.appendChild(row);

        for ( let i = 1; i <= x; i++ ) {
            const panel = document.createElement('div')
            panel.classList.add('panel');
            panel.style.cssText = 'border: 2px solid black; height: 50px; width: 50px;';
            row.appendChild(panel);
        };
    };

    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        
        panel.addEventListener('mouseover', () => {
            panel.style.cssText = 'border: 2px solid black; height: 50px; width: 50px; background-color: black;';
        });
    });

}

setCanvas(16, 16);

document.body.style.cssText = 'height: 100%; width: 100%; position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center;';