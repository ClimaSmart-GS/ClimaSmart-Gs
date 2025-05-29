function showInfo(region) {
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => info.style.display = 'none');
    document.getElementById('info-' + region).style.display = 'block';
}
