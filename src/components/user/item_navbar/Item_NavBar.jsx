import React from 'react'
import item from './item_navbar.module.css'
import { IoAdd } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Item_NavBar = ({title}) => {
  return (
    <>
          <section className={item.header}>
            <div className={item.items}>
              <h1>All {title}</h1>
            </div>
    
            <div className={item.add_items}>
              <button>
                <div>
                  <IoAdd />
                </div>
    
                new
              </button>
    
              <div className={item.threedot}>
                <PiDotsThreeOutlineVerticalFill />
              </div>
    
            </div>
          </section>
    </>
  )
}

export default Item_NavBar