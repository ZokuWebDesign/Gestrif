import React, { useState } from 'react';

interface ComplaintData {
  problem: string;
  icon: string;
  solution: string
}

const ComplaintsTable: React.Component = () => {
  const [complaints] = useState<ComplaintData[]>([
    {
      problem: "Conta Private",
      icon: "001BSOL2024",
      solution: "Conta com preçário desaj..."
    },
    {
      problem: "Conta Private",
      icon: "001BSOL2024",
      solution: "Conta com preçário desaj..."
    },
    {
      problem: "Conta Private",
      icon: "001BSOL2024",
      solution: "Conta com preçário desaj..."
    }
  ]);

  const tableHeaders = [
    { key: 'problem', label: 'Realidade com Excel & E-mail (O Risco)'},
    { key: 'icon', label: ''},
    { key: 'solution', label: 'A Solução com GESTRIF (O Controlo)'}
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="px-6 py-6">

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
                      <div className="text-xs text-gray-900 opacity-80">{complaint.problem}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.icon}</div>
                      <div className="text-xs text-gray-500">Projeto Único</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-xs text-gray-900 opacity-80">{complaint.solution}</div>
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