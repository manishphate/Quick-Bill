import React from 'react'
import totalAmount from './totalamount.module.css'
import { IoIosAddCircle } from "react-icons/io";

const TotalAmount = ({title, unpaid, current, overdue}) => {
    return (
        <>

            <section className={totalAmount.container1}>

                <div className={totalAmount.card}>
                    <div className={totalAmount.title}>
                        <div>
                            <h2>{title}</h2>
                        </div>
                        <button className={totalAmount.add_filed}>
                            <div className={totalAmount.add_icon}>
                                <IoIosAddCircle />
                            </div>
                            <h3>New</h3>
                        </button>
                    </div>

                    <div className={totalAmount.progressBar}>

                        <div className={totalAmount.bar_container}>
                            <h6>{unpaid}</h6>
                            <div className={totalAmount.bar}></div>
                        </div>
                    </div>

                    <div className={totalAmount.status}>

                        <div className={totalAmount.current}>
                            <h4>Current</h4>
                            <h1>{current}</h1>
                        </div>

                        <div className={totalAmount.overdue}>
                            <h4>Overdue</h4>
                            <h1>{overdue}</h1>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default TotalAmount