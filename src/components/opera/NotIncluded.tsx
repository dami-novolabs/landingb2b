import { Eyebrow } from "@/components/ui/Eyebrow";

const ITEMS = [
  {
    text: "Compra de licencias o suscripciones de las herramientas.",
    note: "Las licencias quedan a nombre de tu empresa.",
  },
  {
    text: "Mantenimiento de infraestructura post-programa.",
    note: "Disponible por separado desde USD 5K/mes, opcional.",
  },
  {
    text: "Cambios estructurales en sistemas ERP, CRM o backoffice.",
    note: "Trabajamos sobre integraciones, no reemplazamos sistemas core.",
  },
  {
    text: "Garantía de un porcentaje específico de ahorro.",
    note: "Garantizamos el método y devolvemos el 50% si el criterio firmado no se cumple. El ahorro real depende de la complejidad operacional de cada empresa.",
  },
];

export default function NotIncluded() {
  return (
    <section className="bg-novo-near-black py-[80px] text-novo-cream md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <Eyebrow className="text-novo-mid">LO QUE NO INCLUYE</Eyebrow>

        <h2 className="mb-16 font-display text-display-l text-novo-cream">
          Para que no haya sorpresas,
          <br />
          esto es lo que el programa no cubre.
        </h2>

        <ul className="flex flex-col gap-8">
          {ITEMS.map((item) => (
            <li key={item.text} className="flex gap-4 text-[17px] leading-[1.6]">
              <span className="flex-shrink-0 font-medium text-novo-accent">✗</span>
              <div>
                <span className="text-novo-cream">{item.text}</span>
                {item.note && (
                  <>
                    {" "}
                    <span className="text-novo-mid">({item.note})</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
