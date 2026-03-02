// select multiple elements and return a NodeList (array like object)

// case a. select by className
const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(listItems[0]);
console.log(listItems[0].innerText);
listItems[0].style.color = "blue";
listItems.forEach((item, index) => {
  console.log(item, index);
  item.style.color = "orange";
  if (index === 1) {
    item.remove();
  }
  if (index === 0) {
    // item.innerText = "Motorola";
    item.innerHTML = `Motorola <button class="remove-item btn-link text-red">
              <i class="fa-solid fa-xmark"></i>
            </button>`;
  }
});

// Nodelist has internal forEach, HTMLCollection doesn't have forEach , 
// but we can convert it to an array and use forEach
