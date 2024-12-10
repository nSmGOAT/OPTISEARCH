function searchDeepWeb() {
    const title = document.getElementById('title').value.trim();
    const url = document.getElementById('url').value.trim();
    const text = document.getElementById('text').value.trim();
    const keywords = document.getElementById('keywords').value.trim();
    const fileType = document.getElementById('fileType').value.trim();
    const deepWebSearch = document.getElementById('deepWebSearch').checked; // Vérifier si la case Deep Web est cochée

    let searchQuery = [];

    // Ajout des critères dans la requête de recherche
    if (title) {
        searchQuery.push(`intitle:"${title}"`);
    }

    if (url) {
        searchQuery.push(`inurl:"${url}"`);
    }

    if (text) {
        searchQuery.push(`intext:"${text}"`);
    }

    if (keywords) {
        searchQuery.push(keywords);  // Ajout des mots-clés sans guillemets
    }

    // Si aucun critère n'est ajouté, on affiche un message d'alerte
    if (searchQuery.length === 0) {
        alert("Veuillez entrer au moins un critère de recherche.");
        return;
    }

    // Ajout du type de fichier si spécifié
    if (fileType) {
        searchQuery.push(`${fileType}`);
    }

    // Si la case "Deep Web" est cochée, ajouter un filtre spécifique pour DuckDuckGo
    if (deepWebSearch) {
        // Si c'est une recherche pour le Deep Web, rediriger vers DuckDuckGo
        const searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery.join(" "))}`;
        window.open(searchURL, '_blank');
    } else {
        // Si ce n'est pas Deep Web, rediriger vers une recherche Google classique
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.join(" "))}`;
        window.open(searchURL, '_blank');
    }
}

// Ajout de l'événement "click" au bouton
document.getElementById('searchButton').addEventListener('click', searchDeepWeb);
