import { Eyebrow } from "@/components/ui/Eyebrow";

const ITEMS = [
  {
    text: "Implementación técnica o desarrollo del producto final.",
    note: "Eso es la siguiente etapa, después de la validación.",
  },
  {
    text: "Gestión de proveedores externos.",
    note: null,
  },
  {
    text: "Trabajo posterior al cierre del programa.",
    note: "Disponible por separado si lo necesitás.",
  },
  {
    text: "Garantía de resultado positivo en el experimento.",
    note: 'Garantizamos el método y devolvemos el 50% si el criterio firmado no se cumple. Un "no" validado con evidencia también es resultado.',
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
