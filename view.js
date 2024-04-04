// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
    <div class="clock-container">
        <div class="clock">${model.timeString}</div>
    </div>
    
    `;
    app.innerHTML = html;
}
