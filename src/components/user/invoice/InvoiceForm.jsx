import React, { useState } from 'react';
import { Search, Info, Edit2, Plus, X, Upload } from 'lucide-react';
import Invoices from './InvoiceForm.module.css';

function InvoiceForm() {
  const [items, setItems] = useState([
    { id: 1, details: '', quantity: 1.00, rate: 0.00, discount: 0, amount: 0.00 }
  ]);

  const handleAddRow = () => {
    const newItem = {
      id: items.length + 1,
      details: '',
      quantity: 1.00,
      rate: 0.00,
      discount: 0,
      amount: 0.00
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={Invoices.invoiceContainer}>
      <div className={Invoices.invoiceForm}>
        {/* Customer Information */}
        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>
              Customer Name<span className={Invoices.required}>*</span>
            </label>
            <div className={Invoices.selectWrapper}>
              <select className={Invoices.formSelect}>
                <option>Select or add a customer</option>
              </select>
              <Search size={16} className={Invoices.searchIcon} />
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>
              Invoice#<span className={Invoices.required}>*</span>
            </label>
            <div className={Invoices.inputWithIcon}>
              <input
                type="text"
                className={Invoices.formInput}
                // value=""   // There you need to pass the value for invoice
                // Caluculate subtotal
              />
              <button className={Invoices.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Order Number</label>
            <input
              type="text"
              className={Invoices.formInput}
            />
          </div>
        </div>

        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>
              Invoice Date<span className={Invoices.required}>*</span>
            </label>
            <input
              type="text"
              className={Invoices.formInput}
              // value="" // there is the value for invoice date
              // Caluculate subtotal
            />
          </div>

          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Terms</label>
            <div className={Invoices.selectWrapper}>
              <select className={Invoices.formSelect}>
                <option>Due On Receipt</option>
              </select>
            </div>
          </div>

          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Due Date</label>
            <input
              type="text"
              className={Invoices.formInput}
              // value=""  // there is the value for due date
              // Caluculate subtotal
            />
          </div>
        </div>

        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Salesperson</label>
            <div className={Invoices.selectWrapper}>
              <select className={Invoices.formSelect}>
                <option>Select or Add Salesperson</option>
              </select>
            </div>
          </div>
        </div>

        <div className={Invoices.formRow}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>
              Subject <Info size={14} className={Invoices.infoIcon} />
            </label>
            <div className={Invoices.inputWithIcon}>
              <input
                type="text"
                className={Invoices.formInput}
                placeholder="Let your customer know what this Invoice is for"
              />
              <button className={Invoices.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Line Items Section */}
        <div className={Invoices.lineItemsSection}>
          <div className={Invoices.lineItemHeader}>
            <span className={Invoices.lineItemToggle}>
              <span className={Invoices.lineItemDot}></span>
              At Line Item Level
            </span>
          </div>

          <div className={Invoices.itemTable}>
            <div className={Invoices.tableHeader}>
              <h3>Item Table</h3>
              <div className={Invoices.tableActions}>
                <button className={Invoices.tableAction}>
                  <span className={Invoices.scanIcon}></span> Scan Item
                </button>
                <button className={Invoices.tableAction}>
                  <span className={Invoices.bulkIcon}></span> Bulk Actions
                </button>
              </div>
            </div>

            <table className={Invoices.table}>
              <thead>
                <tr>
                  <th className={Invoices.itemDetailsColumn}>ITEM DETAILS</th>
                  <th>QUANTITY</th>
                  <th>RATE <span className={Invoices.sortIcon}></span></th>
                  <th>DISCOUNT</th>
                  <th>AMOUNT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="text"
                        className={Invoices.tableInput}
                        placeholder="Type or click to select an item."
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className={Invoices.tableInput}
                        // value={item.quantity}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].quantity = parseFloat(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className={Invoices.tableInput}
                        // value={item.rate}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].rate = parseFloat(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                    </td>
                    <td className={Invoices.discountCell}>
                      <input
                        type="number"
                        className={Invoices.tableInput}
                        // value={item.discount}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].discount = parseInt(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                      <select className={Invoices.discountType}>
                        <option>%</option>
                        <option>$</option>
                      </select>
                    </td>
                    <td className={Invoices.amountCell}>
                      {item.amount.toFixed(2)}
                    </td>
                    <td>
                      <button
                        className={Invoices.deleteButton}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <X size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={Invoices.tableActions}>
              <button className={Invoices.addButton} onClick={handleAddRow}>
                <Plus size={14} /> Add New Row
              </button>
              <button className={Invoices.addBulkButton}>
                <Plus size={14} /> Add Items in Bulk
              </button>
            </div>

            {/* Totals Section */}
            <div className={Invoices.totalsSection}>
              <div className={Invoices.totalsLeft}>
                <div className={Invoices.taxOptions}>
                  <label className={Invoices.taxOption}>
                    <input type="radio" name="taxType" /> TDS
                  </label>
                  <label className={Invoices.taxOption}>
                    <input type="radio" name="taxType" /> TCS
                  </label>
                </div>
                <div className={Invoices.taxSelectWrapper}>
                  <select className={Invoices.taxSelect}>
                    <option>Select a Tax</option>
                  </select>
                </div>
                <div className={Invoices.adjustmentRow}>
                  <span className={Invoices.adjustmentLabel}>Adjustment</span>
                  <input type="text" className={Invoices.adjustmentInput} />
                  <span className={Invoices.adjustmentInfo}>(+/-)</span>
                </div>
              </div>
              <div className={Invoices.totalsRight}>
                <div className={Invoices.totalRow}>
                  <span>Sub Total</span>
                  <span className={Invoices.totalAmount}>CaluculateSubtotal</span>
                </div>
                <div className={Invoices.totalRow}>
                  <span>- 0.00</span>
                  <span className={Invoices.totalAmount}>0.00</span>
                </div>
                <div className={Invoices.totalRow}>
                  <span className={Invoices.totalLabel}>Total ( ₹ )</span>
                  <span className={Invoices.grandTotal}>0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Notes */}
        <div className={Invoices.notesSection}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Customer Notes</label>
            <div className={Invoices.textareaWithIcon}>
              <textarea
                placeholder='Thanks for your business.'
                className={Invoices.formTextarea}
                // Caluculate subtotal
              ></textarea>
              <button className={Invoices.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
            <div className={Invoices.noteHint}>Will be displayed on the invoice</div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className={Invoices.termsSection}>
          <div className={Invoices.formGroup}>
            <label className={Invoices.formLabel}>Terms & Conditions</label>
            <div className={Invoices.textareaWithIcon}>
              <textarea
                placeholder='Enter the terms and conditions of your business to be displayed in your transaction'
                className={Invoices.formTextarea}
                // Caluculate subtotal
              ></textarea>
              <button className={Invoices.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className={Invoices.attachmentsSection}>
          <div className={Invoices.attachmentHeader}>
            Attach File(s) to Invoice
          </div>
          <div className={Invoices.uploadArea}>
            <button className={Invoices.uploadButton}>
              <Upload size={14} /> Upload File
            </button>
            <div className={Invoices.uploadHint}>
              You can upload a maximum of 10 files, 10MB each
            </div>
          </div>
        </div>

        {/* Payment Gateway */}
        <div className={Invoices.paymentSection}>
          <div className={Invoices.paymentInfo}>
            <span className={Invoices.paymentQuestion}>Want to get paid faster? 💳</span>
            <div className={Invoices.paymentHint}>
              Configure payment gateways and receive payments online. Set up Payment Gateway
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;