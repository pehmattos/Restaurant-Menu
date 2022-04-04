// Related Items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "buttermilk pancakes",
        category: "lunch",
        price: 13.99,
        img: "./img/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "buttermilk pancakes",
        category: "shakes",
        price: 6.99,
        img: "./img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 20.99,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "buttermilk pancakes",
        category: "lunch",
        price: 22.99,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "buttermilk pancakes",
        category: "shakes",
        price: 18.99,
        img: "./img/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 8.99,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "buttermilk pancakes",
        category: "lunch",
        price: 12.99,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "buttermilk pancakes",
        category: "shakes",
        price: 16.99,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "buttermilk pancakes",
        category: "dinner",
        price: 39.99,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Baked ricotta cake",
        category: "desserts",
        price: 19.99,
        img: "./img/item-11.jpg",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    {
        id: 12,
        title: "Easy lemon meringue pie",
        category: "desserts",
        price: 49.99,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 13,
        title: "Coconut yoghurt cake",
        category: "desserts",
        price: 29.99,
        img: "./img/item-13.jpg",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
];

// Linking Tags

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

// Load Items

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// Functions
// Set and Show menu items

function displayMenuItems(menuItems) {
    
    let displayMenu = menuItems.map(function (item){
        // console.log(item);

        return `<article class="menu-item">
        <img class="photo" src=${item.img} alt=${item.title}/>

        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}
            </p>
        </div>
    </article>`;
});
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


// Show and Filter menu buttons

function displayMenuButtons() {

    // categories buttons alocation

    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },

        ["all"]
    );

    // show category buttons

    const categoryBtns = categories.map(function(category) {

        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;

    }).join("");

    container.innerHTML = categoryBtns;


    // Filter items

    const filterBtns = container.querySelectorAll(".filter-btn")

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {

            const category = e.currentTarget.dataset.id;

            const menuCategory = menu.filter(function (menuItem) {
                //console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            //console.log(menuCategory);

            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}