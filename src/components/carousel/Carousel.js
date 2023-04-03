import React from "react";
import "./carousel.css";
const filter = [
  {
    id: 1,
    title: "Life Insurance",
    icon: <i class="fa-solid fa-umbrella absolute-center"></i>,
  },
  {
    id: 2,
    title: "Car Insurance",
    icon: <i class="fa-solid fa-car"></i>,
  },
  {
    id: 3,
    title: "Health Insurance",
    icon: <i class="fa-solid fa-heart"></i>,
  },
  {
    id: 4,
    title: "Home Insurance",
    icon: <i class="fa-solid fa-house-chimney"></i>,
  },
  {
    id: 5,
    title: "Travel Insurance",
    icon: <i class="fa-solid fa-plane-departure"></i>,
  },
  {
    id: 6,
    title: "Family Health Insurance",
    icon: <i class="fa-solid fa-user"></i>,
  },
  {
    id: 7,
    title: "Invesment Plan",
    icon: <i class="fa-solid fa-coins"></i>,
  },
  {
    id: 8,
    title: "Retirement Plan",
    icon: <i class="fa-solid fa-person-cane"></i>,
  },
  {
    id: 9,
    title: "Guaranteed Return Plans",
    icon: <i class="fa-solid fa-indian-rupee-sign"></i>,
  },
];
export default function Carousel({ active, setActive }) {
  return (
    <div className="tab-option">
      <div
        className="max-width option-wrapper"
        style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
      >
        {filter.map((tab) => {
          return (
            <div
              onClick={() => setActive(tab.title)}
              className={`tab-item absolute-center cur-po ${
                active === tab.title && "active-tab"
              }`}
            >
              <p className="tab-img">{tab.icon}</p>
              <div className="tab-name">{tab.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
