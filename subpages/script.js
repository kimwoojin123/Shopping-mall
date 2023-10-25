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
  location.href = "http://localhost:3000/"; // 주소임시
});
document.addEventListener("DOMContentLoaded", () => {
  // 상품 리스트를 가져오고 표시하는 코드를 작성하세요.
  const productList = document.querySelector(".product-list");

  // 상품 데이터를 불러와서 동적으로 HTML 요소 생성
  const products = [
    {
      image: "/subpages/b.jpg",
      name: "상품 1",
      price: "$20.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 2",
      price: "$25.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 3",
      price: "$30.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 4",
      price: "$32.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 5",
      price: "$40.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 6",
      price: "$18.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 7",
      price: "$90.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 8",
      price: "$21.00",
    },
    {
      image: "/subpages/b.jpg",
      name: "상품 9",
      price: "$60.00",
    },
    // 다른 상품들을 추가하세요.
  ];

  products.forEach((product) => {
    const productElement = createProductElement(product);
    productList.appendChild(productElement);
  });

  productList.addEventListener("click", (event) => {
    const productDiv = event.target.closest(".product");
    if (productDiv) {
      // // 클릭한 상품에 해당하는 서브페이지로 이동
      // const productName = productDiv.querySelector("h3").textContent;
      // const subPagePath = `/products/${productName}`;
      // 서브페이지 작성시 부활예정
      window.location.href = `http://localhost:3000/`;
    }
  });
});

function createProductElement(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;

  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);

  return productDiv;
}
