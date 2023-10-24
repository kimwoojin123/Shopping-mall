// 상단 카테고리에 마우스 오버시 하위 카테고리 표시
const categories = document.querySelectorAll("#categories li");

categories.forEach((category) => {
  const subcategories = category.querySelector(".subcategories");
  category.addEventListener("load", () => {
    subcategories.style.display = "none";
  });
  category.addEventListener("mouseover", () => {
    subcategories.style.display = "block";
  });
  category.addEventListener("mouseout", () => {
    subcategories.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const subcategories = document.querySelectorAll(".subcategories");

  subcategories.forEach((subcategory) => {
    subcategory.style.display = "none";
  });
});

// 하위 카테고리에 마우스 오버시 하위 하위 카테고리 표시 (이 부분은 필요에 따라 더 확장할 수 있음)
const subcategoryItems = document.querySelectorAll(".subcategories li");

subcategoryItems.forEach((subcategoryItem) => {
  subcategoryItem.addEventListener("mouseover", () => {
    // 하위 하위 카테고리를 표시하는 코드를 작성하세요.
  });
  subcategoryItem.addEventListener("mouseout", () => {
    // 하위 하위 카테고리를 숨기는 코드를 작성하세요.
  });
});

const subSubcategories = document.querySelectorAll(".sub-subcategories");

subSubcategories.forEach((subSubcategory) => {
  subSubcategory.style.display = "none"; // 초기에 하위 하위 카테고리를 숨김
  subSubcategory.parentElement.addEventListener("mouseover", () => {
    subSubcategory.style.display = "block"; // 마우스 오버 시 하위 하위 카테고리 표시
  });
  subSubcategory.parentElement.addEventListener("mouseout", () => {
    subSubcategory.style.display = "none"; // 마우스 아웃 시 하위 하위 카테고리 숨김
  });
});

const home = document.getElementById("home");

home.addEventListener("click", () => {
  location.reload(); // 주소임시
});
