import React from 'react';

const Admin = ({ orders }) => {

  console.log("Current Orders in Admin:", orders);
  // Calculate total revenue from all orders
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Stats */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-stone-200 pb-8">
          <div>
            <h1 className="font-serif text-3xl text-stone-900 mb-2">Studio Dashboard</h1>
            <p className="text-stone-500 text-xs uppercase tracking-widest">Order Management & Analytics</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-10">
            <div className="text-right">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Total Orders</p>
              <p className="text-2xl font-serif text-stone-900">{orders.length}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Revenue</p>
              <p className="text-2xl font-serif text-stone-900">€{totalRevenue.toFixed(2)}</p>
            </div>
          </div>
        </header>

        {/* Orders Table */}
        {orders.length === 0 ? (
          <div className="bg-white border border-stone-200 p-20 text-center">
            <p className="text-stone-400 italic font-serif">No orders have been placed yet.</p>
          </div>
        ) : (
          <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white text-[10px] uppercase tracking-[0.2em]">
                  <th className="p-4 font-bold">Order ID</th>
                  <th className="p-4 font-bold">Customer</th>
                  <th className="p-4 font-bold">Items Purchased</th>
                  <th className="p-4 font-bold text-right">Total</th>
                  <th className="p-4 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-stone-600">
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-mono text-[10px]">#{order.id || Math.random().toString(36).substr(2, 9).toUpperCase()}</td>
                    <td className="p-4">
                      <div className="font-bold text-stone-900">{order.customer.name}</div>
                      <div className="text-[11px] text-stone-400 leading-tight mt-1">
                        {order.customer.email} <br />
                        {order.customer.address}, {order.customer.city}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        {order.items.map((item, i) => (
                          <span key={i} className="text-[11px] bg-stone-100 px-2 py-0.5 rounded-sm w-fit">
                            {item.quantity}x {item.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-right font-bold text-stone-900">
                      €{order.total.toFixed(2)}
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Received
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;