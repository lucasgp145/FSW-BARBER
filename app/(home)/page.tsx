import Header from "@/app/_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  //chamar prisma e pagar barbearias
  const barbershops = await db.barbershop.findMany({});
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
        <div className="mt-6 px-5">
          <Search />
        </div>
        <div className="mt-6 px-5">
          <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <BookingItem />
        </div>
        <div className="mt-6">
          <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>

          <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-srollbar]:hidden">
            {barbershops.map((barbershop: any) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

        <div className="mb-[4.5rem] mt-6">
          <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>

          <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-srollbar]:hidden">
            {barbershops.map((barbershop: any) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
