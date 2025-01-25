const mockData = [
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 3, name: "Mark Johnson", email: "mark@example.com", avatar: "https://randomuser.me/api/portraits/men/2.jpg" }
  ];
  
  function display() {
    const loadingDiv = document.getElementById("loading");
    const userList = document.getElementById("user-list");
  
    loadingDiv.style.display = "block";
  
    setTimeout(() => {
      loadingDiv.style.display = "none";
  
      mockData.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
          <img src="${user.avatar}" alt="${user.name}">
          <h2>${user.name}</h2>
          <p>${user.email}</p>
        `;
        userList.appendChild(userCard);
      });
    }, 2000);
  }
  
  function load() {
    const loadMoreButton = document.getElementById("load-more");
  
    loadMoreButton.addEventListener("click", () => {
      loadMoreButton.style.backgroundColor = "#333";
      setTimeout(() => {
        loadMoreButton.style.backgroundColor = "lightblue";
      }, 0);
    });
  }

display();
load();