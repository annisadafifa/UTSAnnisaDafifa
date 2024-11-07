import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RowRiwayat from "./components/rowRiwayat";
import "./annisa-styles.css";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RowPekerjaan from "./components/rowpekerjaan";
import InputKuis from "./components/inputKuis";

export default function Gallery() {
  return (
  <section className="container mx-auto text-center">
    <Hero />
    <RiwayatPendidikan />
    <RiwayatPekerjaan />
    <InputKuis />
    </section>
  );
}
