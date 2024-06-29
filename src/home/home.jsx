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

    // Generate pdf tu
    html2pdf().from(element).set(opt).save()

    // Generate PDF and send to printer tu
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
      "transaction_id": 1,
      "branch_id": 1,
      "user_id": 2,
      "transaction_number": "658468",
      "transaction_status": "Confirmed",
      "transaction_total": "115.00",
      "transaction_cash_received": "115.00",
      "transaction_change": "0.00",
      "voucher_id": null,
      "transaction_vat_able": "101.20",
      "transaction_vat_tax": "13.80",
      "transaction_order_method": "Dine In",
      "transaction_payment_method": "Cash",
      "createdAt": "2024-06-29T09:01:22.358Z",
      "updatedAt": "2024-06-29T09:01:22.358Z",
      "orders": [
        {
          "order_id": 1,
          "product_id": 2,
          "order_quantity": 1,
          "transaction_id": 1,
          "order_variant": {
            "variant_size": "12",
            "variant_type": "Cold",
            "variant_cost": "115.00"
          },
          "order_addons": [
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
                "material_pack": 40,
                "material_unit": "mL",
                "material_amou": "1000.00",
                "material_cost": "60.00",
                "material_crit": 10,
                "createdAt": "2024-06-27T22:17:59.163Z",
                "updatedAt": "2024-06-27T22:17:59.163Z"
              }
            }
          ],
          "createdAt": "2024-06-29T09:01:22.418Z",
          "updatedAt": "2024-06-29T09:01:22.418Z",
          "product": {
            "product_id": 2,
            "product_name": "French Press",
            "sub_category_id": 1,
            "product_status": "Active",
            "createdAt": "2024-06-27T22:28:47.311Z",
            "updatedAt": "2024-06-27T22:28:47.311Z"
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
