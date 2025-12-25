// Простой массив с путями к фотографиям
const photoPaths = [
    'photos/photo1.jpg',
    'photos/photo2.jpg',
    'photos/photo3.jpg',
    'photos/photo4.jpg',
    'photos/photo5.jpg',
    'photos/photo6.jpg',
    'photos/photo7.jpg',
    'photos/photo8.jpg',
    'photos/photo9.jpg',
    'photos/photo10.jpg',
    'photos/photo11.jpg',
    'photos/photo12.jpg',
    'photos/photo13.jpg',
    'photos/photo14.jpg',
    'photos/photo15.jpg',
    'photos/photo16.jpg',
    'photos/photo17.jpg',
    'photos/photo18.jpg',
    'photos/photo19.jpg',
    'photos/photo20.jpg',
    'photos/photo21.jpg',
    'photos/photo22.jpg',
    'photos/photo23.jpg',
    'photos/photo24.jpg',
    'photos/photo25.jpg',
    'photos/photo26.jpg',
    'photos/photo27.jpg',
    'photos/photo28.jpg',
    'photos/photo29.jpg',
    'photos/photo30.jpg',
    'photos/photo31.jpg',
    'photos/photo32.jpg',
    'photos/photo33.jpg',
    'photos/photo34.jpg',
    'photos/photo35.jpg',
    'photos/photo36.jpg',
    'photos/photo37.jpg',
    'photos/photo38.jpg',
    'photos/photo39.jpg',
    'photos/photo40.jpg',
    'photos/photo41.jpg',
    'photos/photo42.jpg',
    'photos/photo43.jpg',
    'photos/photo44.jpg',
    'photos/photo45.jpg',
    'photos/photo46.jpg',
    'photos/photo47.jpg',
    'photos/photo48.jpg',
    'photos/photo49.jpg',
    'photos/photo50.jpg',
    'photos/photo51.jpg',
    'photos/photo52.jpg',
    'photos/photo53.jpg',
    'photos/photo54.png'
];

function createSimpleGrid() {
    const grid = document.getElementById('photo-grid');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    
    function openPhoto(path) {
        modalImg.src = path;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function closePhoto() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
    
    photoPaths.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Фотография ${index + 1}`;
        img.loading = 'lazy';
        
        img.onerror = function() {
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="200" y="150" font-family="Arial" font-size="14" text-anchor="middle" fill="%23666">Фото ' + (index + 1) + '</text></svg>';
        };
        
        img.addEventListener('click', () => {
            openPhoto(path);
        });
        
        grid.appendChild(img);
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closePhoto();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePhoto();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closePhoto();
        }
    });
    
    modalImg.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

document.addEventListener('DOMContentLoaded', createSimpleGrid);