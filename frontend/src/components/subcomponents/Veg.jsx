import React from 'react';


const Veg = () => {
    return (
        <div class="menu-container">
        <header class="menu-header">
          <h1 class="restaurant-name">Rannaghar VEG-MENU</h1>
          <p class="menu-description"><marquee behavior="" direction="">Authentic Indian Cuisine Served with Love</marquee></p>
        </header>
        
        {/* <!-- Breakfast Section --> */}
        <div class="menu-section">
          <h2>BREAKFAST</h2>
          <div class="menu-category">
            <ul>
              <li>Puri Sabzi <span>₹80</span></li>
              <li>Masala Dosa <span>₹120</span></li>
              <li>Idli Sambar <span>₹90</span></li>
              <li>Poha <span>₹70</span></li>
              <li>Upma <span>₹75</span></li>
            </ul>
          </div>
        </div>
        
        {/* <!-- Lunch Section --> */}
        <div class="menu-section">
          <h2>LUNCH</h2>
          <div class="menu-category">
            <ul>
              <li>Veg Biryani <span>₹180</span></li>
              <li>Paneer Butter Masala <span>₹200</span></li>
              <li>Chole Bhature <span>₹140</span></li>
              <li>Mixed Vegetable Curry <span>₹150</span></li>
              <li>Dal Tadka <span>₹130</span></li>
            </ul>
          </div>
        </div>
        
        {/* <!-- Dinner Section --> */}
        <div class="menu-section">
          <h2>DINNER</h2>
          <div class="menu-category">
            <ul>
              <li>Shahi Paneer <span>₹220</span></li>
              <li>Baingan Bharta <span>₹160</span></li>
              <li>Palak Paneer <span>₹200</span></li>
              <li>Kadhi Pakora <span>₹140</span></li>
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

export default Veg;