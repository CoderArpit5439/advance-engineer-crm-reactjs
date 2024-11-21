import React, { useState, useRef } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import Footer from '../../Layout/Footer';

const TestingQuotation = () => {
    const [customer, setCustomer] = useState('');
    const [hsncode, setHsncode] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState('');
    const [kgpc, setKgpc] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [itemArr, setItemArr] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const quotationRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'customer') setCustomer(value);
        if (name === 'hsncode') setHsncode(value);
        if (name === 'description') setDescription(value);
        if (name === 'quantity') setQuantity(value);
        if (name === 'unit') setUnit(value);
        if (name === 'kgpc') setKgpc(value);
        if (name === 'discount') setDiscount(value);
    };

    const addItem = () => {
        const newItem = {
            customer,
            hsncode,
            description,
            quantity,
            unit,
            kgpc,
            discount,
        };

        if (newItem.customer && newItem.hsncode && newItem.description && newItem.quantity && newItem.unit && newItem.kgpc && newItem.discount) {
            const newArr = [...itemArr, newItem];
            setItemArr(newArr);
            calculateTotal(newArr);
        }
    };

    const removeItem = (index) => {
        const newArr = [...itemArr];
        newArr.splice(index, 1);
        setItemArr(newArr);
        calculateTotal(newArr);
    };

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + (item.quantity * item.kgpc * item.discount), 0);
        setTotalAmount(total);
    };

    const generatePDF = async () => {
        const quotation = quotationRef.current;
        const canvas = await html2canvas(quotation);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
        const blobPDF = pdf.output('blob');
        const blobUrl = URL.createObjectURL(blobPDF);
        console.log('Blob URL:', blobUrl);
        window.open(blobUrl);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        generatePDF();
    };

    return (
        <>
            <Header />
            <Sidebar />
            <div class="content-wrapper" style={{ minHeight: "799px" }}>
                <div ref={quotationRef} style={{ width: '210mm', height: '297mm', boxSizing: 'border-box' }}>
                    <div style={{ width: '100%', height: '100%', padding: '10mm' }}>
                        <form onSubmit={onSubmit} style={{ width: '100%' }} noValidate id="invoice_form">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '100%' }}>
                                    <div style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                                        <div style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <div style={{ width: '33%', padding: '8px' }}>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="text"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="Legal Registration No"
                                                            value={customer}
                                                            onChange={handleInputChange}
                                                            name="customer"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="text"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="HSN Code"
                                                            value={hsncode}
                                                            onChange={handleInputChange}
                                                            name="hsncode"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <textarea
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="Product Description"
                                                            value={description}
                                                            onChange={handleInputChange}
                                                            name="description"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="number"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="Quantity"
                                                            value={quantity}
                                                            onChange={handleInputChange}
                                                            name="quantity"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="text"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="Unit"
                                                            value={unit}
                                                            onChange={handleInputChange}
                                                            name="unit"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="number"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="KG per Item"
                                                            value={kgpc}
                                                            onChange={handleInputChange}
                                                            name="kgpc"
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: '10px' }}>
                                                        <input
                                                            type="number"
                                                            style={{ width: '100%', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}
                                                            placeholder="Discount"
                                                            value={discount}
                                                            onChange={handleInputChange}
                                                            name="discount"
                                                            required
                                                        />
                                                    </div>
                                                    <button type="button" onClick={addItem} style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
                                                        Add Item
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '16px', borderTop: '1px solid #ddd' }}>
                                            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                    <thead>
                                                        <tr style={{ backgroundColor: '#f7f7f7' }}>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>#</th>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Product Details</th>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Rate</th>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Quantity</th>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Amount</th>
                                                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {itemArr.map((item, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.description}</td>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.discount}</td>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.quantity}</td>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{(item.quantity * item.kgpc * item.discount).toFixed(2)}</td>
                                                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                                                    <button type="button" onClick={() => removeItem(index)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}>
                                                                        Remove
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div style={{ padding: '16px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Total Amount: ${totalAmount.toFixed(2)}</div>
                                                <div>
                                                    <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>Generate PDF</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TestingQuotation;
