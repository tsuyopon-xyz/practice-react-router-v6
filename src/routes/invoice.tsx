import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from 'src/data/invoices';

export const Invoice = () => {
  const navigate = useNavigate();
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId!, 10))!;

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </p>
    </main>
  );
};
