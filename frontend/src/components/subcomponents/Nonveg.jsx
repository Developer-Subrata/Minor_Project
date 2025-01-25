import React from 'react';

const Nonveg = () => {
    return (
        <div class="menu-container">
        <header class="menu-header">
          <h1 class="restaurant-name">Rannaghar Non-VEG MENU</h1>
          <p class="menu-description"><marquee behavior="" direction="">Authentic Indian Cuisine Served with Love</marquee></p>
        </header>
        
        {/* <!-- Breakfast Section --> */}
        <div class="menu-section">
          <h2>BREAKFAST</h2>
          <div class="menu-category">
            <ul>
              <li>Masala Dosa <span>₹120</span></li>
              <li>Poha <span>₹80</span></li>
              <li>Aloo Paratha <span>₹100</span></li>
              <li>Idli Sambar <span>₹90</span></li>
            </ul>
          </div>
        </div>
        
        {/* <!-- Lunch Section --> */}
        <div class="menu-section">
          <h2>LUNCH</h2>
          <div class="menu-category">
            <ul>
              <li>Chicken Biryani <span>₹250</span></li>
              <li>Paneer Butter Masala <span>₹200</span></li>
              <li>Dal Tadka <span>₹150</span></li>
              <li>Butter Naan <span>₹40</span></li>
            </ul>
          </div>
        </div>
        
        {/* <!-- Dinner Section --> */}
        <div class="menu-section">
          <h2>DINNER</h2>
          <div class="menu-category">
            <ul>
              <li>Tandoori Chicken <span>₹300</span></li>
              <li>Rogan Josh <span>₹350</span></li>
              <li>Shahi Paneer <span>₹220</span></li>
              <li>Jeera Rice <span>₹90</span></li>
            </ul>
          </div>
        </div>
        
        {/* <!-- Special Offers Banner --> */}
        <div class="special-offer-banner">
          <h3>Special Offers!</h3>
          <p>Rajma Chawal Combo - ₹180</p>
          <p>Veg Thali (Complete Meal) - ₹250</p>
        </div>
      </div>
    );
};

export default Nonveg;