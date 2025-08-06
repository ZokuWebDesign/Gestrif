import React, { useState } from 'react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface ComplaintData {
  id: string;
  received: string;
  complainant: string;
  product: string;
  reason: string;
  days: number;
  expiry: string;
}

const ComplaintsTable: React.Component = () => {
  const [complaints] = useState<ComplaintData[]>([
    {
      id: "001BPT2024",
      received: "30/06/2024",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 365,
      expiry: "30/06/2023"
    },
    {
      id: "001BPT2024",
      received: "30/06/2024",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 60,
      expiry: "30/06/2023"
    },
    {
      id: "001BPT2024",
      received: "Prueba 1x5Lt",
      complainant: "Pedro Oliveira Mendes d...",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 2,
      expiry: "30/06/2023"
    },
    {
      id: "001BPT2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 26,
      expiry: "30/06/2023"
    },
    {
      id: "001BPT2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 28,
      expiry: "30/06/2023"
    },
    {
      id: "001BSOL2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 25,
      expiry: "30/06/2023"
    },
    {
      id: "001BSOL2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 90,
      expiry: "30/06/2023"
    },
    {
      id: "001BSOL2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 63,
      expiry: "30/06/2023"
    },
    {
      id: "001BSOL2024",
      received: "Prueba 1x5Lt",
      complainant: "Yuri Silva Santos",
      product: "Conta Private",
      reason: "Conta com preçário desaj...",
      days: 48,
      expiry: "30/06/2023"
    }
  ]);

  const tableHeaders = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'received', label: 'Recebida', sortable: true },
    { key: 'complainant', label: 'Reclamante', sortable: true },
    { key: 'product', label: 'Produto reclamado', sortable: true },
    { key: 'reason', label: 'Motivo da reclamação', sortable: true },
    { key: 'days', label: 'Dias', sortable: true },
    { key: 'expiry', label: 'Expira', sortable: true }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="px-6 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-4">
          <div className="flex items-center justify-center w-5 h-5 rounded border border-gray-200">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <ChevronDownIcon className="w-3 h-3 rotate-90" />
          <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">Settings</span>
          <ChevronDownIcon className="w-3 h-3 rotate-90" />
          <span className="text-xs">...</span>
          <ChevronDownIcon className="w-3 h-3 rotate-90" />
          <span className="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-100 rounded">Team</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Reclamações</h1>
            <p className="text-sm text-gray-600">Manage your team members and their account permissions here.</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Tertiary
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-50 border border-purple-200 rounded-md hover:bg-purple-100">
              Secondary
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Secondary
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Primary
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <span className="text-sm font-medium text-gray-600">SG</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Sistema Gestrif</div>
            <div className="text-sm text-gray-500">gestrif@email.com</div>
          </div>
        </div>

        {/* Total Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Total</h2>
          <p className="text-sm text-gray-600">Aqui está o total de todos os tipos de reclamações.</p>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header.key}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    <div className="flex items-center space-x-1">
                      <span>{header.label}</span>
                      {header.sortable && (
                        <FunnelIcon className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complaints.map((complaint, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.id}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.received}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.complainant}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.product}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.reason}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.days}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.expiry}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsTable;