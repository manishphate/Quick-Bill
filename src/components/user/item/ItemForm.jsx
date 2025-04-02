import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Items from './ItemForm.module.css';

function ItemForm() {
  const [type, setType] = useState('');
  const [salesChecked, setSalesChecked] = useState(true);
  const [purchaseChecked, setPurchaseChecked] = useState(true);

  return (
    <div className={Items.appContainer}>
      <div className={Items.formContainer}>
        <form className={Items.productForm}>
          {/* Type Selection */}
          <div className={Items.formRow}>
            <span className={Items.formLabel}>Type</span>
            <HelpCircle size={16} className={Items.helpIcon} />
            
            <div className={Items.radioGroup}>
              <label className={Items.radioLabel}>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'goods'}
                  onChange={() => setType('goods')}
                  className={Items.radioInput}
                />
                <span>Goods</span>
              </label>
              
              <label className={Items.radioLabel}>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'service'}
                  onChange={() => setType('service')}
                  className={Items.radioInput}
                />
                <span>Service</span>
              </label>
            </div>
          </div>
          
          {/* Name Field */}
          <div className={Items.formGroup}>
            <label htmlFor="name" className={`${Items.formLabel} ${Items.formLabelRequired}`}>
              Name*
            </label>
            <input
              type="text"
              id="name"
              className={Items.formInput}
              required
            />
          </div>
          
          {/* Unit Field */}
          <div className={Items.formRow}>
            <span className={Items.formLabel}>Unit</span>
            <HelpCircle size={16} className={Items.helpIcon} />
            
            <div className={Items.selectWrapper}>
              <select className={Items.formSelect}>
                <option>Select or type to add</option>
              </select>
              <ChevronDown size={16} className={Items.selectIcon} />
            </div>
          </div>
          
          {/* Two Column Layout for Sales and Purchase */}
          <div className={Items.formColumns}>
            {/* Sales Information */}
            <div className={Items.formColumn}>
              <div className={Items.sectionHeader}>
                <input
                  type="checkbox"
                  id="salesInfo"
                  checked={salesChecked}
                  onChange={() => setSalesChecked(!salesChecked)}
                  className={Items.checkboxInput}
                />
                <label htmlFor="salesInfo" className={Items.sectionTitle}>
                  Sales Information
                </label>
              </div>
              
              <div className={`${Items.sectionContent} ${!salesChecked ? Items.disabledSection : ''}`}>
                <div className={Items.formGroup}>
                  <label htmlFor="sellingPrice" className={`${Items.formLabel} ${Items.formLabelRequired}`}>
                    Selling Price*
                  </label>
                  <div className={Items.currencyInput}>
                    <div className={Items.currencyPrefix}>
                      INR
                    </div>
                    <input
                      type="text"
                      id="sellingPrice"
                      className={`${Items.formInput} ${Items.formInputCurrency}`}
                      required
                      disabled={!salesChecked}
                    />
                  </div>
                </div>
                
                <div className={Items.formGroup}>
                  <label htmlFor="salesAccount" className={`${Items.formLabel} ${Items.formLabelRequired}`}>
                    Account*
                  </label>
                  <div className={Items.selectWrapper}>
                    <select 
                      id="salesAccount"
                      className={Items.formSelect}
                      disabled={!salesChecked}
                    >
                      <option>Sales</option>
                    </select>
                    <ChevronDown size={16} className={Items.selectIcon} />
                  </div>
                </div>
                
                <div className={Items.formGroup}>
                  <label htmlFor="salesDescription" className={Items.formLabel}>
                    Description
                  </label>
                  <textarea
                    id="salesDescription"
                    rows={3}
                    className={Items.formTextarea}
                    disabled={!salesChecked}
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Purchase Information */}
            <div className={Items.formColumn}>
              <div className={Items.sectionHeader}>
                <input
                  type="checkbox"
                  id="purchaseInfo"
                  checked={purchaseChecked}
                  onChange={() => setPurchaseChecked(!purchaseChecked)}
                  className={Items.checkboxInput}
                />
                <label htmlFor="purchaseInfo" className={Items.sectionTitle}>
                  Purchase Information
                </label>
              </div>
              
              <div className={`${Items.sectionContent} ${!purchaseChecked ? Items.disabledSection : ''}`}>
                <div className={Items.formGroup}>
                  <label htmlFor="costPrice" className={`${Items.formLabel} ${Items.formLabelRequired}`}>
                    Cost Price*
                  </label>
                  <div className={Items.currencyInput}>
                    <div className={Items.currencyPrefix}>
                      INR
                    </div>
                    <input
                      type="text"
                      id="costPrice"
                      className={`${Items.formInput} ${Items.formInputCurrency}`}
                      required
                      disabled={!purchaseChecked}
                    />
                  </div>
                </div>
                
                <div className={Items.formGroup}>
                  <label htmlFor="costAccount" className={`${Items.formLabel} ${Items.formLabelRequired}`}>
                    Account*
                  </label>
                  <div className={Items.selectWrapper}>
                    <select 
                      id="costAccount"
                      className={Items.formSelect}
                      disabled={!purchaseChecked}
                    >
                      <option>Cost of Goods Sold</option>
                    </select>
                    <ChevronDown size={16} className={Items.selectIcon} />
                  </div>
                </div>
                
                <div className={Items.formGroup}>
                  <label htmlFor="purchaseDescription" className={Items.formLabel}>
                    Description
                  </label>
                  <textarea
                    id="purchaseDescription"
                    rows={3}
                    className={Items.formTextarea}
                    disabled={!purchaseChecked}
                  ></textarea>
                </div>
                
                <div className={Items.formGroup}>
                  <label htmlFor="preferredVendor" className={Items.formLabel}>
                    Preferred Vendor
                  </label>
                  <div className={Items.selectWrapper}>
                    <select 
                      id="preferredVendor"
                      className={Items.formSelect}
                      disabled={!purchaseChecked}
                    >
                      <option></option>
                    </select>
                    <ChevronDown size={16} className={Items.selectIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className={Items.formActions}>
            <button
              type="submit"
              className={Items.saveButton}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;