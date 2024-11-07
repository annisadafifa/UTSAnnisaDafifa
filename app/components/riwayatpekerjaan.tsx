import RowPekerjaan from "./rowpekerjaan";

export default function RiwayatPekerjaan() {
    return (
      <div>
        <h2 className="text-2xl text-black">Riwayat Pengalaman</h2>
        <div className="max-w-xl mx-auto"> {/* Membatasi lebar div ke ukuran ekstra besar dan center */}
        <RowPekerjaan 
          tahunbekerja={<span className="text-white">2020</span>} 
          instansi={<span className="text-white">BKKBN</span>} 
          bekerjasebagai={<span className="text-white">PKL biroumum</span>} 
        />
        <RowPekerjaan 
          tahunbekerja={<span className="text-white">2022</span>} 
          instansi={<span className="text-white">alfamidi</span>} 
          bekerjasebagai={<span className="text-white">Crew Store</span>} 
        />
        <RowPekerjaan 
          tahunbekerja={<span className="text-white">2022</span>} 
          instansi={<span className="text-white">Mini Bank Al-Masoem</span>} 
          bekerjasebagai={<span className="text-white">Ukm Wajib</span>} 
        />
        <RowPekerjaan 
          tahunbekerja={<span className="text-white">2023</span>} 
          instansi={<span className="text-white">PT Al-masoem</span>} 
          bekerjasebagai={<span className="text-white">PPL D.Rikdal</span>} 
        />
      </div>
      </div>
    );
}
