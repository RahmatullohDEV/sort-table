const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    updateTable(); // Narxi o'zgartirganda jadvalni yangilash
});

const databases = [


{
"narx": 1000000,
"name": "acer",
"img": "C:\\web\\work\\img\\acer1.jpg",
},

{
"narx": 2000000,
"name": "acer",
"img": "C:\\web\\work\\img\\acer1.jpg",
},

{
"narx": 3000000,
"name": "hp",
"img": "C:\\web\\work\\img\\hp.jpg",
},

{
"narx": 4000000,
"name": "hp",
"img": "C:\\web\\work\\img\\hp.jpg",
},


{
"narx":5000000,
"name": "hp",
"img": "C:\\web\\work\\img\\hp1.jpg",
},

{
"narx": 6000000,
"name": "hp",
"img": "C:\\web\\work\\img\\hp3.jpg",
},

{
"narx": 7000000,
"name": "asus",
"img": "C:\\web\\work\\img\\asus.jpg",
},

{
"narx": 8000000,
"name": "asus",
"img": "C:\\web\\work\\img\\asus1.jpg",
},

{
"narx": 9000000,
"name": "asus",
"img": "C:\\web\\work\\img\\asus2.jpg",
},

{
"narx": 10000000,
"name": "lenovo",
"img": "C:\\web\\work\\img\\lenovo.jpg",
}
];


const tableBody = document.querySelector(".shopJson_qiymat");

const updateTable = () => {
    const selectedBrand = Array.from(document.querySelectorAll('.brand input[type="checkbox"]:checked')).map(input => input.name);
    const selectedPrice = parseFloat(input.value);
    tableBody.innerHTML = '';
    databases.forEach(user => {
        if ((selectedBrand.length === 0 || selectedBrand.includes(user.name)) && user.narx <= selectedPrice) {
            tableBody.innerHTML += `
                <td>
                <img src="${user.img}" />
                    (${user.name})
                    ${user.narx}:so'm
                    
                </td>
            `;
        }
    });
};

const brandInputs = document.querySelectorAll('.brand input[type="checkbox"]');
brandInputs.forEach(input => {
    input.addEventListener('change', updateTable);
});

input.addEventListener('input', updateTable);

updateTable();




