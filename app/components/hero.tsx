import Link from "next/link";
import foto from "../potoica.jpg";
import logo from "../potoica.jpg"; // Pastikan path ini benar
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <Header />

      {/* Tambahkan margin-top dan layout flex untuk mengatur foto di kiri dan teks di kanan */}
      <div className="mt-8 flex justify-center items-start px-8">
        {/* Bagian foto di kiri */}
        <div className="w-1/5 flex justify-center ml-auto">
          <img
            src={foto.src}
            alt="Annisa Dafifa Zahra Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>

        {/* Bagian teks di kanan */}
        <div className="w-1/2 text-left px-5">
          <h1 className="text-gray-800 font-bold text-4xl">
            Selamat Datang di Halaman
          </h1>
          <h2 className="text-black font-bold text-3xl mt-2">
            CV Annisa Dafifa Zahra
          </h2>

          <p className="mt-4 text-gray-700">
            Saya sedang mengejar studi S1 dengan Prodi Sistem Informasi di
            Universitas Ma'soem Bandung. Selain dedikasi pada pendidikan, saya
            juga aktif dalam berbagai organisasi kampus, terlibat dalam
            organisasi kemahasiswaan untuk mengembangkan keterampilan
            kepemimpinan, kerjasama tim, dan kemampuan komunikasi. Saya juga
            pernah mengikuti seminar dan pelatihan tentang dunia IT. Saya yakin
            kombinasi pendidikan dan pengalaman praktis ini akan membantu saya
            dalam kontribusi positif di dunia kerja.
          </p>

          {/* Ikon Media Sosial */}
          <div className="mt-6 flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-500 hover:text-pink-500 text-2xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-500 hover:text-blue-600 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-500 hover:text-blue-400 text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 hover:text-blue-700 text-2xl" />
            </a>
          </div><br/>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo.src} alt="Logo Jakarta Selatan" className="h-12 mr-4" />
        <h2 className="text-black-600 font-bold text-center w-full">
          CV Online Annisa Dafifa Zahra
        </h2>
      </div>
      <div className="flex space-x-4">
        <Link href="/skill" passHref>
          <button className="bg-red-800 text-white px-4 py-2">Skill</button>
        </Link>
        <Link href="/myinfo" passHref>
          <button className="bg-red-800 text-white px-4 py-2">My Info</button>
        </Link>
        <Link href="/hobbies" passHref>
          <button className="bg-red-800 text-white px-4 py-2">Hobbies</button>
        </Link>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <img
      src={foto.src}
      alt="Annisa Dafifa Zahra Profile"
      className="rounded-full w-48 h-48 object-cover"
    />
  );
}
