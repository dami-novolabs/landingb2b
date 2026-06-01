import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function TestComponentsPage() {
  return (
    <main>
      <SectionWrapper background="cream">
        <SectionHeader
          eyebrow="COMPONENTES BASE"
          title="Test page"
          lead="Verificando que los 6 componentes renderizan correctamente."
        />
      </SectionWrapper>

      <SectionWrapper background="cream-50">
        <Card variant="default" className="mb-6">
          <p className="text-body-m text-novo-charcoal">
            Card variant=&quot;default&quot; — fondo blanco, borde novo-line, hover
            a charcoal.
          </p>
        </Card>

        <Card variant="subtle" className="mb-10">
          <p className="text-body-m text-novo-charcoal">
            Card variant=&quot;subtle&quot; — fondo cream-50.
          </p>
        </Card>

        <div className="flex flex-wrap items-center gap-8">
          <ButtonPrimary href="#">
            Botón primario <span aria-hidden>→</span>
          </ButtonPrimary>
          <ButtonSecondary href="#">Link secundario</ButtonSecondary>
        </div>
      </SectionWrapper>
    </main>
  );
}
