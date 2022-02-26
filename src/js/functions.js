import { ORDERS } from './orders.js';

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

// show sideBar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    document.querySelector('.filter').style.display = 'block';
});

// close sideBar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    document.querySelector('.filter').style.display = 'none';
});

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// fill orders
ORDERS.map((order) => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.id}</td>
        <td>${order.paymentStatus}</td>
        <td class="warning">${order.shipping}</td>
        <td class="primary">Details</td>
        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
