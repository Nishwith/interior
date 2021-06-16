const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function (e) {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
     sidebar.remove('active');
    }
}