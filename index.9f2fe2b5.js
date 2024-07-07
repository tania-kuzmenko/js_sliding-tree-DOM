document.querySelectorAll("li:has(ul)").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.style.display="none"===t.style.display?"block":"none")})});
//# sourceMappingURL=index.9f2fe2b5.js.map
