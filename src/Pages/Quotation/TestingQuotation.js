import React, { useState } from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";

const TestingQuotation = () => {
  const [items, setItems] = useState([]);
  const [branding, setBranding] = useState({
    companyName: "Advance engineering",
    subLine: "Our work is a new identity of engineering and technology",
    logo: "https://via.placeholder.com/150",
    address: "Head office : N. H. -47 Choudhary Market Tejaji Nagar Khandwa Road Indore 452001 (MP)",
    subAddress: "sales@advanceengineerings.com | support@advanceengineerings.com",
    phone: "+91 94253 11684 | +91 94253 11328",
    website: "www.advanceengineerings.com",
    products: ["All types of conveyors", "Bottle line machine change parts & blister packing machine change parts", "Mixer granulator", "Pharmaceutical instruments", "Machine spare parts & new research and development."],
  });
  const [details, setDetails] = useState({
    name: "",
    subject: "",
    date: "",
    quotationNumber: "",
  });
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalKG, setTotalKG] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = () => {
    setItems([...items, { name: "", hsn: "", quantity: 0, unit: "", kg: 0, price: 0, total: 0 }]);
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

  // PDF Styles
  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    header: { textAlign: "center", marginBottom: 10 },
    section: { marginBottom: 10 },
    table: { display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, marginBottom: 10 },
    row: { display: "flex", flexDirection: "row", padding: 5, borderBottom: "1px solid #000" },
    cell: { flex: 1, textAlign: "center" },
    footer: { textAlign: "center", marginTop: 10 },
  });

  const PDFContent = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src={branding.logo} style={{ width: 50, height: 50 }} />
          <Text>{branding.companyName}</Text>
          <Text>{branding.subLine}</Text>
        </View>
        <View style={styles.section}>
          <Text>Quotation for: {details.name}</Text>
          <Text>Date: {details.date}</Text>
          <Text>Quotation Number: {details.quotationNumber}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>S.NO</Text>
            <Text style={styles.cell}>Item Name</Text>
            <Text style={styles.cell}>HSN Code</Text>
            <Text style={styles.cell}>Quantity</Text>
            <Text style={styles.cell}>Unit</Text>
            <Text style={styles.cell}>KG</Text>
            <Text style={styles.cell}>Price</Text>
            <Text style={styles.cell}>Total</Text>
          </View>
          {items.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.cell}>{index + 1}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.hsn}</Text>
              <Text style={styles.cell}>{item.quantity}</Text>
              <Text style={styles.cell}>{item.unit}</Text>
              <Text style={styles.cell}>{item.kg}</Text>
              <Text style={styles.cell}>{item.price}</Text>
              <Text style={styles.cell}>{item.total}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text>Total Quantity: {totalQuantity}</Text>
          <Text>Total KG: {totalKG}</Text>
          <Text>Subtotal: {subtotal.toFixed(2)}</Text>
          <Text>Discount: {discount.toFixed(2)}</Text>
          <Text>Total: {total.toFixed(2)}</Text>
        </View>
        <View style={styles.footer}>
          <Text>Address: {branding.address}</Text>
          <Text>Contact: {branding.phone}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <button onClick={addItem}>Add Item</button>
        <PDFViewer style={{ width: "800px", height: "500px" }}>
          <PDFContent />
        </PDFViewer>
      </div>
      <Footer />
    </>
  );
};

export default TestingQuotation;
