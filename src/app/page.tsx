import {
  CloudSun,
  MoonStars,
  SunHorizon,
} from "@phosphor-icons/react/dist/ssr";
import { Form } from "./form.tsx";
import { ScheduleByDate } from "./scheduleByDate";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-800 ">
      <section className="basis-[31.125rem] rounded-[12px] bg-gray-700 m-[0.875rem] flex justify-center items-center  py-[5rem]">
        <Form />
      </section>
      <section className="flex justify-center flex-1">
        <div className=" basis-[42.625rem] flex flex-col gap-[2rem] py-[5rem]">
          <div className="flex justify-between">
            <div className="flex-1">
              <h2 className="text-[1.5rem] font-bold text-gray-100">
                Sua agenda
              </h2>
              <sub className="text-[0.875rem] text-gray-300">
                Consulte os seus cortes de cabelo agendados por dia
              </sub>
            </div>

            <ScheduleByDate />
          </div>

          <div className="flex flex-col gap-[0.75rem] ">
            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <SunHorizon className="text-[1.25rem] text-yellow-default" />
                  Manhã
                </span>
                <span className="text-gray-400">09-12h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
              </ul>
            </article>

            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <CloudSun className="text-[1.25rem] text-yellow-default" />
                  Tarde
                </span>
                <span className="text-gray-400">13-18h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
              </ul>
            </article>

            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <MoonStars className="text-[1.25rem] text-yellow-default" />
                  Noite
                </span>
                <span className="text-gray-400">19-21h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
