import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
      <div>
        <h2 className="text-2xl text-black">Riwayat Pendidikan</h2>
        <div className="max-w-xl mx-auto"> {/* Membatasi lebar div ke ukuran ekstra besar dan center */}
          <RowRiwayat 
            jenjang={<span className="text-white">SD</span>} 
            sekolah={<span className="text-white">SDN Tebet Barat 01 Jakarta</span>} 
            tahun={<span className="text-white">2008-2014</span>} 
          />
          <RowRiwayat 
            jenjang={<span className="text-white">SMP</span>} 
            sekolah={<span className="text-white">SMPN 15 Jakarta</span>} 
            tahun={<span className="text-white">2014-2017</span>} 
          />
          <RowRiwayat 
            jenjang={<span className="text-white">SMK</span>} 
            sekolah={<span className="text-white">SMK Jakarta Timur 1</span>} 
            tahun={<span className="text-white">2017-2020</span>} 
          />
          <RowRiwayat 
            jenjang={<span className="text-white">SARJANA</span>} 
            sekolah={<span className="text-white">Ma'soem University</span>} 
            tahun={<span className="text-white">2022-Sekarang</span>} 
          />
        </div>
      </div>
    );
}
