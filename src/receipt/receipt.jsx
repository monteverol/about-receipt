import React from 'react';

const Receipt = React.forwardRef((props, ref) => {
  const { receiptDetails } = props;

  function formatDateTime(dateTime) {
    const date = new Date(dateTime);

    const optDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', optDate);

    const optTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', optTime);

    return [formattedDate, formattedTime];
  }

  return (
    <div ref={ref} className="p-4 text-sm bg-white w-[80mm]">
      <div className="text-center">
        <h2 className="font-bold text-[14px]">Inarawan Coffee</h2>
        <p className="text-[12px] px-4"> {receiptDetails["transaction"]["branch"]["branch_address"]} </p>
        <div className="w-full flex justify-center">
          <p className="text-[12px]">{receiptDetails["transaction"]["user"]["user_contact_number"]}</p>
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <p className="text-[12px]">OR#: {receiptDetails["transaction"]["transaction_number"]}</p>
        <p className="text-[12px]">CASHIER: {receiptDetails["transaction"]["user"]["user_name"]}</p>
        <div className="w-full flex justify-between">
          <p className="text-[12px]">DATE: {formatDateTime(receiptDetails["transaction"]["createdAt"])[0]}</p>
          <p className="text-[12px]">TIME: {formatDateTime(receiptDetails["transaction"]["createdAt"])[1]}</p>
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <h3 className="text-center font-semibold text-[16px]">{receiptDetails["transaction"]["transaction_order_method"].toUpperCase()}</h3>
        <div className="flex justify-between font-bold">
          <span className="text-[12px]">ITEM NAME</span>
          <span className="text-[12px]">AMOUNT</span>
        </div>
        <hr className="my-2" />
        {receiptDetails["transaction"]["orders"].map((item, id) => {
          return (
            <div className="flex flex-col w-full" key={id}>
              <div className="flex flex-row w-full justify-between text-[12px]">
                <p>{item["product"]["product_name"]}</p>
                <p>{(parseFloat(item["order_variant"]["variant_cost"]) * item["order_quantity"]).toFixed(2)}</p>
              </div>
              <p className="text-[10px] indent-[16px] text-slate-800">
                {item["order_variant"]["variant_type"].toUpperCase()} - {item["order_variant"]["variant_size"]}oz
              </p>
              { 
                item["order_addons"].map((addon, id) => (
                  <p className="text-[10px] indent-[16px] text-slate-800" key={id}>{addon["material"]["material_name"].toUpperCase()}</p>
                ))
              }
              <p className="text-[10px] indent-[16px] text-slate-800">qty: {item.order_quantity}</p>
            </div>
          );
        })}

      </div>
      <hr className="my-2" />
      <div>
        <div className="flex justify-between">
          <span className="text-[12px]">TOTAL</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_total"]}</span>
        </div>
        {receiptDetails["transaction"]["voucher_id"] && 
          <div className="flex justify-between">
            <span className="text-[12px]">DISCOUNT: SENIOR CITIZEN</span>
            <span className="text-[12px]">100.00</span>
          </div>
        }
        <div className="flex justify-between">
          <span className="text-[12px]">VATable</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_vat_able"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px]">VATable TAX</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_vat_tax"]}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="text-[12px]">SUBTOTAL</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_total"] - receiptDetails["transaction"]["transaction_vat_tax"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px]">CASH</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_cash_received"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px]">CHANGE</span>
          <span className="text-[12px]">{receiptDetails["transaction"]["transaction_change"]}</span>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col items-center">
          <span className="text-[20px] font-bold">OFFICIAL RECEIPT</span>
          <span className="text-[10px] font-bold">OPENING HOURS:</span>
          <span className="text-[10px]">8 AM - 10 PM</span>
        </div>
      </div>
    </div>
  );
});

export default Receipt;
