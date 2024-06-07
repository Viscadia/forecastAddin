import React, { useState } from "react";
import { useStyles4 } from "./Loadpagestyles";

const LoadPage = ({ setPageValue }) => {
  const styles = useStyles4();

  // State to manage which dropdown is open and the selected item
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    "Email ID": "",
    "Team ID": "",
    Geography: "",
    Indication: "",
    "Sub Indication": "",
    Asset: "",
    "Model Name": "",
  });

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = (dropdown, item) => {
    setSelectedItems({ ...selectedItems, [dropdown]: item });
    setOpenDropdown(null); // Close dropdown after selection
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Load</h2>
      <button className={styles.backButton} onClick={() => setPageValue("PreviousPage")}>
        <img src="assets/back.png" alt="Back" className={styles.backIcon} />
      </button>
      <div className={styles.dropdownContainer}>
        {["Email ID", "Team ID", "Geography", "Indication", "Sub Indication", "Asset", "Model Name"].map(
          (label, index) => (
            <div key={index} className={styles.dropdown}>
              <div className={styles.dropdownHeader} onClick={() => handleDropdownClick(label)}>
                {selectedItems[label] || label}
                <span className={styles.arrow}>{openDropdown === label ? "▲" : "▼"}</span>
              </div>
              {openDropdown === label && (
                <div className={styles.dropdownList}>
                  {[
                    "navendu.gupta@viscadia.com",
                    "suraj.khana@viscadia.com",
                    "shruti.gupta@viscadia.com",
                    "ritik.mehra@viscadia.com",
                  ].map((item, idx) => (
                    <div key={idx} className={styles.dropdownItem} onClick={() => handleItemClick(label, item)}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
      <button className={styles.importButton} onClick={() => setPageValue("ImportPage")}>
        Import →
      </button>
    </div>
  );
};

export default LoadPage;
