// Création dynamique des étoiles
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        starsContainer.appendChild(star);
    }
}

// Création des bâtiments
function createBuildings() {
    const skyline = document.getElementById('skyline');
    let position = 0;
    
    while (position < window.innerWidth) {
        const building = document.createElement('div');
        building.classList.add('building');
        
        const width = Math.random() * 80 + 40;
        const height = Math.random() * 50 + 20;
        
        building.style.width = `${width}px`;
        building.style.height = `${height}%`;
        building.style.left = `${position}px`;
        
        skyline.appendChild(building);
        
        position += width - 10; // Chevauchement léger
        
        // Ajouter des fenêtres
        for (let i = 0; i < 15; i++) {
            const window = document.createElement('div');
            window.style.position = 'absolute';
            window.style.width = '4px';
            window.style.height = '6px';
            window.style.backgroundColor = `rgba(157, 236, 249, ${Math.random() * 0.5 + 0.2})`;
            window.style.left = `${Math.random() * (width - 4)}px`;
            window.style.top = `${Math.random() * (building.offsetHeight - 6)}px`;
            building.appendChild(window);
        }
    }
}

// Création des nuages
function createClouds() {
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        const size = Math.random() * 200 + 100;
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size / 2}px`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 30}%`;
        cloud.style.opacity = Math.random() * 0.2 + 0.1;
        
        document.body.appendChild(cloud);
    }
}

// Création des arbres bioluminescents
function createTrees() {
    for (let i = 0; i < 8; i++) {
        const tree = document.createElement('div');
        tree.classList.add('tree');
        tree.style.left = `${Math.random() * 100}%`;
        
        const trunk = document.createElement('div');
        trunk.classList.add('trunk');
        tree.appendChild(trunk);
        
        for (let j = 0; j < 3; j++) {
            const foliage = document.createElement('div');
            foliage.classList.add('foliage');
            foliage.style.top = `${j * 10}px`;
            foliage.style.animationDelay = `${Math.random() * 2}s`;
            tree.appendChild(foliage);
        }
        
        document.body.appendChild(tree);
    }
}

// Création des hologrammes
function createHolograms() {
    for (let i = 0; i < 5; i++) {
        const hologram = document.createElement('div');
        hologram.classList.add('hologram');
        
        const width = Math.random() * 60 + 40;
        const height = Math.random() * 40 + 20;
        
        hologram.style.width = `${width}px`;
        hologram.style.height = `${height}px`;
        hologram.style.left = `${Math.random() * 80 + 10}%`;
        hologram.style.top = `${Math.random() * 60 + 20}%`;
        hologram.style.animationDelay = `${Math.random() * 5}s`;
        
        document.body.appendChild(hologram);
    }
}

// Création des drones
function createDrones() {
    for (let i = 0; i < 3; i++) {
        const drone = document.createElement('div');
        drone.classList.add('drone');
        drone.style.top = `${Math.random() * 40 + 10}%`;
        drone.style.animationDelay = `${i * 10}s`;
        
        document.body.appendChild(drone);
    }
}

// Initialisation
function init() {
    createStars();
    createBuildings();
    createClouds();
    createTrees();
    createHolograms();
    createDrones();
}

// Lancer l'initialisation quand la page est chargée
window.addEventListener('load', init);