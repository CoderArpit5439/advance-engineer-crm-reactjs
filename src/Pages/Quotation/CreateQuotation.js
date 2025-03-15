import React, { useRef, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const Quotation = () => {
  const [items, setItems] = useState([]);
  const [branding, setBranding] = useState({
    companyName: "Advance engineering",
    subLine: "Our work is a new identity of engineering and technology",
    logo: "https://via.placeholder.com/150", // Replace with your logo URL
    address: "Head office : N. H. -47 Choudhary Market Tejaji Nagar Khandwa Road Indore 452001 (MP)",
    subAddress: "sales@advanceengineerings.com | support@advanceengineerings.com",
    phone: "+91 94253 11684 | +91 94253 11328",
    website: "www.advanceengineerings.com",
    products: ["All types of conveyors", "Bottle line machine change parts & blister packing machine change parts", "Mixer granulator", "pharmaceutical instruments", "Machine spare parts & new research and development."],
  });
  const [details, setDetails] = useState({
    name: "",
    subject: "",
    date: "",
    quotationNumber: "",
  });
  // const [taxRate, setTaxRate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalKG, setTotalKG] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [pdfBlobState, setPdfBlobState] = useState("");

  const printRef = useRef(null);

  const addItem = () => {
    setItems([...items, { name: "", hsn: "", quantity: 0, unit: "", kg: 0, price: 0, total: 0 }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    updateTotals(updatedItems);
    setItems(updatedItems);
  };

  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    if (["quantity", "price", "kg"].includes(field)) {
      updatedItems[index][field] = parseFloat(value) || 0;
    } else {
      updatedItems[index][field] = value;
    }
    updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
    updateTotals(updatedItems);
    setItems(updatedItems);
  };

  const updateTotals = (updatedItems) => {
    const newSubtotal = updatedItems.reduce((acc, item) => acc + item.total, 0);
    const newTotalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalKG = updatedItems.reduce((acc, item) => acc + item.kg, 0);
    setSubtotal(newSubtotal);
    setTotalQuantity(newTotalQuantity);
    setTotalKG(newTotalKG);
    const discountedSubtotal = newSubtotal - discount;
    setTotal(discountedSubtotal);
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    const printWindow = window.open("", "_blank");

    // Step 1: Generate the PDF
    html2canvas(printContent).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");

      // Adjust width and height for A4 page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Convert the PDF to a Blob
      const pdfBlob = pdf.output("blob");
      
      // Optional: Convert the Blob to a downloadable URL for testing
      const blobURL = URL.createObjectURL(pdfBlob);
      console.log("Blob URL: ", pdfBlob);
      // setPdfBlobState(pdfBlob);

      const formData = new FormData();
      formData.append("quo_name", details.name);
      formData.append("quo_date", details.date);
      formData.append("quo_subject", details.subject);
      formData.append("quo_number", details.quotationNumber);
      formData.append("quo_description", JSON.stringify(items));
      formData.append("quo_quantity", totalQuantity);
      formData.append("quo_kg", totalKG);
      formData.append("quo_subtotal", subtotal);
      formData.append("quo_discount", discount);
      formData.append("quo_total", total);
      formData.append("quo_pdf",pdfBlob);
  
      // Send to API
      fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("PDF uploaded successfully:", data);
          // alert("Quotation data uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error uploading PDF:", error);
          alert("Failed to upload the quotation PDF.");
        });
      // Step 2: Upload the PDF
      // const formData = new FormData();
      // formData.append("quo_pdf", pdfBlob, "quotation.pdf");
      // formData.append("quo_name", "testing");

      // Send to API
      // fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("PDF uploaded successfully:", data);
      //     alert("Quotation PDF uploaded successfully!");
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading PDF:", error);
      //     alert("Failed to upload the quotation PDF.");
      //   });
    });

    printWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              padding: 0;
            }
            .branding, .tableHeader, .tableRow, .summaryRow, .terms {
              margin-bottom: 15px;
            }
            .details {
             display: "flex", justifyContent: "space-between",margin-bottom: 15px;
            }
            .tableHeader, .tableRow {
              display: flex;
              justify-content: space-between;
            }
            .tableHeader {
              font-weight: bold;
              background-color: #f0f0f0;
              padding: 10px;
            }
            .summaryRow, .terms p {
              margin: 5px 0;
            }
            .branding img {
              height: 100px;
              width: auto;
            }
                input {
              border: none;
              background: none;
              pointer-events: none;
              width: 150px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleSave = () => {

    const formData = new FormData();
    formData.append("quo_name", details.name);
    formData.append("quo_date", details.date);
    formData.append("quo_subject", details.subject);
    formData.append("quo_number", details.quotationNumber);
    formData.append("quo_description", JSON.stringify(items));
    formData.append("quo_quantity", totalQuantity);
    formData.append("quo_kg", totalKG);
    formData.append("quo_subtotal", subtotal);
    formData.append("quo_discount", discount);
    formData.append("quo_total", total);
    formData.append("quo_pdf",pdfBlobState[0], "quotation.pdf");

    // Send to API
    fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("PDF uploaded successfully:", data);
        // alert("Quotation data uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading PDF:", error);
        alert("Failed to upload the quotation PDF.");
      });
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.container}>
        <div ref={printRef} style={styles.printableArea}>
          {/* Branding Section */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Phone: {branding.phone}</p>
            <p>Website: {branding.website}</p>
          </div>
          <div style={{ textAlign: "right", display: "flex" }}>
            <img src="https://advanceengineerings.com/images/logo/ad.jpg" height="75px" width="100px" alt="Company Logo" />
            <div style={{ marginLeft: "10px" }}>
              <h1 style={{ marginTop: "0px", fontWeight: "800" }}>{branding.companyName}</h1>
              <p>{branding.subLine}</p>
            </div>
          </div>

          <div style={styles.branding}>
            <p style={{
              border: "solid 1px black", borderRadius: "9px", marginTop: "15px", padding: "10px"
            }}>{branding.products.join(", ")}</p>
          </div>

          {/* Quotation Details */}
          <div style={styles.details}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  style={styles.input}
                />
              </label>
              <label>
                Subject:
                <input
                  type="text"
                  value={details.subject}
                  onChange={(e) => setDetails({ ...details, subject: e.target.value })}
                  style={styles.input}
                />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input
                  type="date"
                  value={details.date}
                  onChange={(e) => setDetails({ ...details, date: e.target.value })}
                  style={styles.input}
                />
              </label>
              <label>
                Quotation Number:
                <input
                  type="text"
                  value={details.quotationNumber}
                  onChange={(e) => setDetails({ ...details, quotationNumber: e.target.value })}
                  style={styles.input}
                />
              </label>
            </div>
          </div>

          {/* Quotation Table */}
          <div style={styles.table}>
            <div style={styles.tableHeader}>
              <span>S.NO</span>
              <span>Item Name</span>
              <span>HSN Code</span>
              <span>Quantity</span>
              <span>Unit</span>
              <span>KG/PC</span>
              <span>Price per Unit</span>
              <span>Total</span>
              <span>Actions</span>
            </div>
            {items.map((item, index) => (
              <div key={index} style={styles.tableRow}>
                <span style={{ marginRight: "50px" }}>{index + 1}</span>
                <input
                  style={{ width: "100px", marginRight: "5px" }}
                  type="text"
                  value={item.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
                <input
                  style={{ width: "100px", marginRight: "5px" }}
                  type="text"
                  value={item.hsn}
                  onChange={(e) => handleChange(index, "hsn", e.target.value)}
                />
                <input
                  style={{ width: "75px", marginRight: "5px" }}
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleChange(index, "quantity", e.target.value)}
                />
                <input
                  style={{ width: "50px", marginRight: "5px" }}
                  type="text"
                  value={item.unit}
                  onChange={(e) => handleChange(index, "unit", e.target.value)}
                />
                <input
                  style={{ width: "50px", marginRight: "5px" }}
                  type="number"
                  value={item.kg}
                  onChange={(e) => handleChange(index, "kg", e.target.value)}
                />
                <input
                  style={{ width: "100px", marginRight: "5px" }}
                  type="number"
                  value={item.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                />
                <span>{item.total.toFixed(2)}</span>
                <button onClick={() => removeItem(index)} style={styles.button}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div style={styles.table}>
            <div style={styles.tableHeader}>
              <span>Total Quantity</span>
              <span>Total KG</span>
              <span>Subtotal</span>
              <span>Discount</span>
              <span>Total</span>
            </div>
            <div style={styles.tableRow}>
              <span style={{ marginRight: "50px" }}>{totalQuantity}</span>
              <span style={{ marginRight: "50px" }}>{totalKG}</span>
              <span style={{ marginRight: "50px" }}>{subtotal.toFixed(2)}</span>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                style={{ width: "50px", marginRight: "5px" }}
              />
              {total.toFixed(2)}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div style={styles.terms}>
            <p>GST No: 1234567890</p>
            <p>MSME No: 9876543210</p>
            <p>Terms and Conditions:</p>
            <ul>
              <li>This Quotation will be valid for 14 days.</li>
              <li>Delivery time 3 to 4 week after PO confirm receiving.</li>
              <li>50% payment advance.</li>
              <li> GST 18% Extra.</li>
              <li> Transportation charges Free of cost.</li>
              <li> Quote as per same Qty.</li>
            </ul>
            <p>{branding.address}</p>
            <p>{branding.subAddress}</p>
          </div>
        </div>

        {/* Buttons */}
        <button onClick={addItem} style={styles.addButton}>
          Add Item
        </button>
        <button onClick={handlePrint} style={styles.printButton}>
          Print Quotation
        </button>
        <button onClick={handleSave} style={styles.printButton}>
          Save Quotation
        </button>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  branding: { textAlign: "left" },
  details: { display: "flex", justifyContent: "space-between", marginBottom: "20px" },
  table: {
    width: "100%",
    marginBottom: "20px",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    padding: "10px",
    backgroundColor: "#f0f0f0",
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },

  // tableRow: { display: "flex", justifyContent: "space-between", margin: "10px 0" },
  summary: { marginBottom: "20px" },
  terms: { marginTop: "20px" },
  button: { marginLeft: "10px" },
  addButton: {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "10px",
  },
  printButton: {
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "20px",
    float: "right",
  },
};

export default Quotation;
