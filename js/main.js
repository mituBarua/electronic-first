function searchAppear(){
    const searchInput = document.getElementById('search-input');
    const gameList =  document.getElementById('game-list');
    searchInput.style.display = 'flex';
    gameList.style.display = 'none';
}
function gameListAppear(){
    const searchInput = document.getElementById('search-input');
    const gameList =  document.getElementById('game-list');
    searchInput.style.display = 'none';
    gameList.style.display = 'flex';

}