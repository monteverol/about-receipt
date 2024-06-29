import React, { useState, useEffect, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Receipt from '../receipt/receipt';

const Home = () => {
  const receiptRef = useRef();
  const [receiptHeight, setReceiptHeight] = useState(0);

  useEffect(() => {
    if (receiptRef.current) {
        const heightInPx = receiptRef.current.clientHeight;
        const heightInmm = Math.ceil((heightInPx / 96) * 25.4);
        setReceiptHeight(heightInmm);
    }
  }, [receiptRef]);

  const handleDownloadPDF = async () => {
    console.log(receiptHeight);
    const element = receiptRef.current;
    const opt = {
      margin: 0,
      filename: 'receipt.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: [80, receiptHeight], orientation: 'portrait' },
    };

    // Generate pdf
    html2pdf().from(element).set(opt).save()

    // Generate PDF and send to printer
    // html2pdf().from(element).set(opt).outputPdf('blob').then((blob) => sendToPrinter(blob));
  };

  const sendToPrinter = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'receipt.pdf');

    await fetch('http://localhost:3000/print', {
        method: 'POST',
        body: formData,
    });
  }

  const receiptDetails = {
    "transaction": {
      "transaction_id": 2,
      "branch_id": 1,
      "user_id": 2,
      "transaction_number": "374445",
      "transaction_status": "Confirmed",
      "transaction_total": "230.00",
      "transaction_cash_received": "230.00",
      "transaction_change": "0.00",
      "voucher_id": null,
      "transaction_vat_able": "202.40",
      "transaction_vat_tax": "27.60",
      "transaction_order_method": "Dine In",
      "transaction_payment_method": "Cash",
      "createdAt": "2024-06-27T22:48:24.391Z",
      "updatedAt": "2024-06-27T22:48:24.391Z",
      "orders": [
        {
          "order_id": 2,
          "product_id": 1,
          "order_quantity": 1,
          "transaction_id": 2,
          "createdAt": "2024-06-27T22:48:24.436Z",
          "updatedAt": "2024-06-27T22:48:24.436Z",
          "product": {
            "product_id": 1,
            "product_name": "Aeropress",
            "sub_category_id": 1,
            "product_status": "Active",
            "createdAt": "2024-06-27T22:20:07.759Z",
            "updatedAt": "2024-06-27T22:20:07.759Z",
            "variants": [
              {
                "variant_id": 1,
                "product_id": 1,
                "variant_type": "Hot",
                "variant_size": "12",
                "variant_cost": "115.00",
                "createdAt": "2024-06-27T22:20:07.808Z",
                "updatedAt": "2024-06-27T22:20:07.808Z"
              },
              {
                "variant_id": 2,
                "product_id": 1,
                "variant_type": "Cold",
                "variant_size": "12",
                "variant_cost": "115.00",
                "createdAt": "2024-06-27T22:20:07.933Z",
                "updatedAt": "2024-06-27T22:20:07.933Z"
              },
              {
                "variant_id": 3,
                "product_id": 1,
                "variant_type": "Cold",
                "variant_size": "16",
                "variant_cost": "130.00",
                "createdAt": "2024-06-27T22:20:08.061Z",
                "updatedAt": "2024-06-27T22:20:08.061Z"
              }
            ],
            "addons": [
              {
                "product_id": 1,
                "material_id": 4,
                "addon_amount": "0.00",
                "createdAt": "2024-06-27T22:20:08.189Z",
                "updatedAt": "2024-06-27T22:20:08.189Z",
                "material": {
                  "material_id": 4,
                  "branch_id": 1,
                  "material_name": "Whole Milk",
                  "material_pack_quantity": 40,
                  "material_unit": "mL",
                  "material_amount_per_pack": "1000.00",
                  "material_cost": "60.00",
                  "material_critical_level": 10,
                  "createdAt": "2024-06-27T22:17:59.163Z",
                  "updatedAt": "2024-06-27T22:17:59.163Z"
                }
              }
            ]
          }
        },
        {
          "order_id": 3,
          "product_id": 2,
          "order_quantity": 1,
          "transaction_id": 2,
          "createdAt": "2024-06-27T22:48:24.436Z",
          "updatedAt": "2024-06-27T22:48:24.436Z",
          "product": {
            "product_id": 2,
            "product_name": "French Press",
            "sub_category_id": 1,
            "product_status": "Active",
            "createdAt": "2024-06-27T22:28:47.311Z",
            "updatedAt": "2024-06-27T22:28:47.311Z",
            "variants": [
              {
                "variant_id": 4,
                "product_id": 2,
                "variant_type": "Hot",
                "variant_size": "12",
                "variant_cost": "115.00",
                "createdAt": "2024-06-27T22:28:47.363Z",
                "updatedAt": "2024-06-27T22:28:47.363Z"
              },
              {
                "variant_id": 5,
                "product_id": 2,
                "variant_type": "Cold",
                "variant_size": "12",
                "variant_cost": "115.00",
                "createdAt": "2024-06-27T22:28:47.471Z",
                "updatedAt": "2024-06-27T22:28:47.471Z"
              },
              {
                "variant_id": 6,
                "product_id": 2,
                "variant_type": "Cold",
                "variant_size": "16",
                "variant_cost": "130.00",
                "createdAt": "2024-06-27T22:28:47.619Z",
                "updatedAt": "2024-06-27T22:28:47.619Z"
              }
            ],
            "addons": [
              {
                "product_id": 2,
                "material_id": 4,
                "addon_amount": "4.00",
                "createdAt": "2024-06-27T22:28:47.701Z",
                "updatedAt": "2024-06-27T22:28:47.701Z",
                "material": {
                  "material_id": 4,
                  "branch_id": 1,
                  "material_name": "Whole Milk",
                  "material_pack_quantity": 40,
                  "material_unit": "mL",
                  "material_amount_per_pack": "1000.00",
                  "material_cost": "60.00",
                  "material_critical_level": 10,
                  "createdAt": "2024-06-27T22:17:59.163Z",
                  "updatedAt": "2024-06-27T22:17:59.163Z"
                }
              }
            ]
          }
        }
      ],
      "user": {
        "user_id": 2,
        "branch_id": 1,
        "user_number": 1,
        "user_name": "John Doe",
        "user_contact_number": "09312321232",
        "user_role": "employee",
        "user_hire_date": "2000-06-05T16:00:00.000Z",
        "user_birth_date": "2024-04-09T16:00:00.000Z",
        "user_PIN": "$2b$10$aKHtBDt8.rllcPIG31ImKO7C9r2mNEiwPaanrkiLifSVpQCIrongO",
        "user_email": "jdoe@gmail.com",
        "user_status": "Active",
        "createdAt": "2024-06-27T21:52:12.134Z",
        "updatedAt": "2024-06-27T21:52:12.134Z"
      },
      "branch": {
        "branch_id": 1,
        "branch_name": "Marikina",
        "branch_number": 1,
        "branch_address": "12 Sampaguita St.",
        "branch_status": "Active",
        "createdAt": "2024-06-27T21:51:01.287Z",
        "updatedAt": "2024-06-27T21:51:01.287Z"
      }
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="rounded-3xl h-4/5 w-4/5 bg-[#f5efdc] relative flex items-center justify-center">
        <Receipt receiptDetails={receiptDetails} ref={receiptRef} />
        <div onClick={handleDownloadPDF} className="bg-[#D15341] h-[112px] w-[396px] flex items-center justify-center absolute bottom-8 right-8 rounded-2xl text-5xl text-white font-extrabold">Confirm</div>
      </div>
    </div>
  );
};

export default Home;
