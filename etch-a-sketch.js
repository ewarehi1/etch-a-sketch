const header = document.createElement('div');
header.style.cssText = 'height: 70px; width: 100%; background-color: #7aa9f5; display: flex; align-items: flex-end; justify-content: space-evenly; align-content: flex-start;'
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

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
header.appendChild(clearButton);

clearButton.addEventListener('click', () => {

    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel) => {
        panel.style.cssText = 'outline: 2px solid; height: 50px; width: 50px; background-color: white; margin-left: 2px; margin-bottom: 2px;';
    })

});

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
            panel.style.cssText = 'outline: 2px solid; height: 50px; width: 50px; margin-left: 2px; margin-bottom: 2px;';
            row.appendChild(panel);
        };
    };

    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        
        panel.addEventListener('mouseover', () => {
            panel.style.cssText = 'outline: 2px solid; height: 50px; width: 50px; background-color: black; margin-left: 2px; margin-bottom: 2px;';
        });
    });
}

setCanvas(16, 16);