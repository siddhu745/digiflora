import { useEffect, useRef } from "react";
import "./css/PlantGallery.css";
import andrographis from "../../../images/Andrographis.jpg";
import asiagticDayFlower from "../../../images/asiatic-dayflower.jpg";
import ceropegia from "../../../images/ceropegia.jpg";
import crinum from "../../../images/Crinum_Bradley.jpg";
import droseraIndica from "../../../images/Drosera_indica.jpg";
import hidegardia from "../../../images/hildegardia-populifolia-male-flower.jpg";
import shorea from "../../../images/Shorea_talura.jpg";
import syzygiumalternifolium from "../../../images/Syzygium-alternifolium-berries.jpg";
import boswelliaOvalifoliolata from "../../../images/Boswellia-ovalifoliolata.jpg";

const rarePlants = [
  {
    image: andrographis,
    name: "Andrographis (Nelavemu)",
    localName: "నేలవేము",
    use: "Known for its strong bitter properties, it's traditionally used to boost immunity and treat fevers.",
  },
  {
    image: asiagticDayFlower,
    name: "Asiatic Dayflower (Neeli Gaddalu)",
    localName: "నీలి గడ్డలు",
    use: "Used in folk medicine to reduce inflammation and treat skin conditions.",
  },
  {
    image: ceropegia,
    name: "Ceropegia (Kanthivruksham)",
    localName: "కాంతివృక్షం",
    use: "A rare climbing plant, valued for its tubers, which are used to treat stomach disorders.",
  },
  {
    image: crinum,
    name: "Crinum Lily (Naga Damayanti)",
    localName: "నాగ దమయంతి",
    use: "Traditionally used for pain relief, especially in joint and muscle pain.",
  },
  {
    image: boswelliaOvalifoliolata,
    name: "Boswellia Ovalifoliolata (Andhra Guggilam)",
    localName: "ఆంధ్ర గుగ్గిలం",
    use: "Valued for its resin, known to reduce inflammation and support joint health.",
  },
  {
    image: droseraIndica,
    name: "Drosera Indica (Paga Banthi)",
    localName: "పగ బంతి",
    use: "An insectivorous plant, known for its juice that treats coughs and respiratory issues.",
  },

  {
    image: shorea,
    name: "Shorea Talura (Tella Maddi)",
    localName: "తెల్ల మద్ది",
    use: "A tree known for its resin, traditionally used to treat skin diseases and wounds.",
  },
  {
    image: syzygiumalternifolium,
    name: "Syzygium Alternifolium (Nalla Jamun)",
    localName: "నల్ల జామున",
    use: "Its berries are believed to have anti-diabetic properties and boost digestion.",
  },
  {
    image: hidegardia,
    name: "Hildegardia Populifolia (Adavi Moduga)",
    localName: "అడవి మొదుగ",
    use: "Recognized for its bark, which is used in traditional medicine for wound healing.",
  },
];

function PlantGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = containerRef.current.querySelectorAll(".fade-in");
    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 p-4 space-y-4"
      >
        {rarePlants.map((plant, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-sm group opacity-0 translate-y-10 transition-all duration-700 ease-in-out fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white p-2 transition-opacity duration-300">
              <h3 className="text-lg font-bold">{plant.name}</h3>
              <p className="text-sm">{plant.localName}</p>
              <p className="text-xs mt-1">{plant.use}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantGallery;
