import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";

export default function Home() {

  return (
    <div className="p-4 flex flex-col gap-4">
      <Accordion title="hola que tal" text="aqui todo bien"></Accordion>
      <Button variant="primary" label="fksladhjgfasdk"></Button>
    </div>
  );
}
