const canvas = document.createElement('div');
canvas.setAttribute('id', 'canvas');
document.body.appendChild(canvas);

for ( let i = 1; i <= 16; i++ ) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = 'display: flex;';
    canvas.appendChild(row);

    for ( let i = 1; i <= 16; i++ ) {
        const panel = document.createElement('div')
        panel.classList.add('panel');
        panel.style.cssText = 'border: 2px solid black; height: 50px; width: 50px;';
        row.appendChild(panel);
    }
}

const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    
    panel.addEventListener('mouseover', () => {
        panel.style.cssText = 'border: 2px solid black; height: 50px; width: 50px; background-color: black;'
    })
})