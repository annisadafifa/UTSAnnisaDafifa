import React from 'react';
import Image, { StaticImageData } from 'next/image';
import organisasiImg from '../organisasi.jpg';
import desainImg from '../design.jpg';
import olahragaImg from '../olahraga.jpg';
import fotografiImg from '../fotografi.jpg';

interface Hobi {
  nama: string;
  deskripsi: string;
  gambar: StaticImageData;
}

const hobi: Hobi[] = [
  {
    nama: 'Organisasi',
    deskripsi: 'Aktif dalam kepemimpinan tim dan mengorganisir acara.',
    gambar: organisasiImg,
  },
  {
    nama: 'Desain',
    deskripsi: 'Membuat desain visual dan mengeksplorasi alat kreatif.',
    gambar: desainImg,
  },
  {
    nama: 'Olahraga',
    deskripsi: 'Menjaga kebugaran dengan berbagai kegiatan olahraga.',
    gambar: olahragaImg,
  },
  {
    nama: 'Fotografi',
    deskripsi: 'Mengabadikan momen melalui lensa kamera.',
    gambar: fotografiImg,
  },
];

export default function GaleriHobi() {
    return (
      <section className="galeri-hobi-container max-w-2xl mx-auto p-8 mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Galeri Hobi Saya</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobi.map((item, index) => (
            <div key={index} className="hobi-item bg-white shadow-lg rounded-lg p-4">
              {/* Ubah tinggi di sini sesuai kebutuhan */}
              <Image src={item.gambar} alt={item.nama} className="w-full h-32 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{item.nama}</h2>
              <p className="text-gray-600">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
