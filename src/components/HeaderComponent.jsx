import React from "react";

//icons
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function HeaderComponent({ setActiveHeader }) {
  return (
    <div className="flex items-center justify-between container mx-auto h-[80px] flex-col lg:flex-row py-[10px]">
      <p>
        Need help? Call us:{" "}
        <a className="text-blue-500" href="tel:+ (+98) 0234 456 789">
          {" "}
          (+98) 0234 456 789
        </a>
      </p>

      {/* right side */}
      <div className="flex items-center gap-[10px]">
        <CiLocationOn size={24} />
        <span>Our Store</span>
      </div>

      <div className="flex items-center gap-[5px]">
        <CiDeliveryTruck size={24} />
        <span>Track your order</span>

        <IoClose size={24} onClick={() => setActiveHeader(false)} />
      </div>
    </div>
  );
}

export default HeaderComponent;
