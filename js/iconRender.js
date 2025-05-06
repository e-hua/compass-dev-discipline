function iconRender(cardId, jsonPath) {
  const card = document.getElementById(cardId);
  if (!card) return;

  fetch(jsonPath)
    .then((res) => res.json())
    .then((data) => {
      // Iterate through domains (frontend, backend, database)
      for (const [domain, category] of Object.entries(data)) {
        const domainCard = document.createElement("div");
        domainCard.className = "domain-card";

        const domainTitle = document.createElement("h3");
        domainTitle.textContent = domain;
        domainTitle.className = "domain-title";
        domainCard.appendChild(domainTitle);

        const reversedCategories = Object.entries(category).reverse();
        for (const [category, tools] of reversedCategories) {
          const categoryCard = document.createElement("div");
          categoryCard.className = "category-card";

          const categoryTitle = document.createElement("h4");
          categoryTitle.textContent = category;
          categoryTitle.className = "category-title";
          categoryCard.appendChild(categoryTitle);

          tools.forEach((tool) => {
            const link = document.createElement("a");
            link.href = tool.link;

            const img = document.createElement("img");
            img.src = tool.logo;
            img.alt = `${tool.name} logo`;
            img.className = "icon-button";

            link.appendChild(img);
            categoryCard.appendChild(link);
          });
          domainCard.appendChild(categoryCard);
        }
        card.appendChild(domainCard);
      }
    })
    .catch((err) => {
      console.error("Failed to render icons:", err);
    });
}
