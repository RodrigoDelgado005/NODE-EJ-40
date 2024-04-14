document.getElementById('titulo').addEventListener('mousemove', (e) => {
    document.getElementById('corx').innerText = 'coordenada x=' + e.clientX
    document.getElementById('cory').innerText = 'coordenada y=' + e.clientY
})