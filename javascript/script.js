ddocument.getElementById('catBtn').addEventListener('click', function() {
  const width = Math.floor(Math.random() * 300) + 200; // 200-500px
  const height = Math.floor(Math.random() * 300) + 200;
  const catUrl = `https://placekitten.com/${width}/${height}`;
  
  document.getElementById('catContainer').innerHTML = `
    <img src="${catUrl}" alt="Котик" style="margin-top: 20px;">
  `;
});