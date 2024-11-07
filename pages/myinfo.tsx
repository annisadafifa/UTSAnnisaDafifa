import React from "react";

export default function MyInfo() {
  return (
    <div className="myinfo-container max-w-lg mx-auto bg-black shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Personal Information</h1>
      <table className="min-w-full border-collapse border border-gray-700 rounded-md overflow-hidden">
        <tbody>
          <TableRow label="Tempat, Tanggal Lahir :" value="Bandung, 1 Februari 2004" />
          <TableRow label="Jenis Kelamin         :" value="Perempuan" />
          <TableRow label="Tinggi Badan          :" value="163 cm" />
          <TableRow label="Berat Badan           :" value="47 kg" />
          <TableRow label="Status Pernikahan     :" value="Belum Menikah" />
          <TableRow label="No WhatsApp           :" value="+62 812 3456 7890" />
          <TableRow label="Email                 :" value="annisa@gamil.com" />
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-4 px-6 bg-gray-800 font-semibold text-white w-1/3">{label}</td>
      <td className="py-4 px-6 text-white">{value}</td>
    </tr>
  );
}
