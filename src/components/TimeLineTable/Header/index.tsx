import { useEffect } from "react";
import { useState } from "react";
import {
  differenceInCalendarMonths,
  format,
  addMonths,
  lastDayOfMonth,
  differenceInDays,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  unitState,
  dateHeaderStartState,
  dateHeaderEndState,
  activitiesState,
  goLiveState,
} from "../../../recoil";
import { useRecoilState } from "recoil";

interface HeaderMonths {
  mounth: string;
  width: string;
  countDays: number;
  year: string;
}

function TimeLineHeader() {
  const [headerMonths, setHeaderMonths] = useState<HeaderMonths[]>([]);
  const [unit] = useRecoilState<number>(unitState);
  const [dateHeaderStart] = useRecoilState(dateHeaderStartState);
  const [dateHeaderEnd] = useRecoilState(dateHeaderEndState);
  const [activities] = useRecoilState(activitiesState);
  const [goLive] = useRecoilState(goLiveState);
  
  useEffect(() => {
    initHeaderMonths();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, dateHeaderEnd, dateHeaderStart]);

  const initHeaderMonths = () => {
    const totMounth =
      differenceInCalendarMonths(dateHeaderEnd, dateHeaderStart) + 2;

    let arrayDate: HeaderMonths[] = [];

    setHeaderMonths([]);

    for (let index = 0; index < totMounth; index++) {
      arrayDate.push({
        mounth: format(addMonths(dateHeaderStart, index), "MMM", {
          locale: ptBR,
        }),
        width: "64px",
        countDays:
          differenceInDays(
            lastDayOfMonth(addMonths(dateHeaderStart, index)),
            addMonths(dateHeaderStart, index)
          ) + 1,
        year: format(addMonths(dateHeaderStart, index), "yyyy"),
      });
    }
    setHeaderMonths(arrayDate);
  };

  return (
    <div className="mt-5">
      {/* Data Atual */}
      <div className="mt-5 h-8">
        {/* Data 1 */}
        <div
          style={{
            width:
              differenceInDays(addMonths(dateHeaderEnd, 2), dateHeaderStart) *
                unit +
              "px",
          }}
          className="relative"
        >
          <div
            style={{
              width: "0px",
              left: differenceInDays(new Date(), dateHeaderStart) * unit + "px",
              height: 80 + (29 * activities.length) + "px",
              zIndex: 10
            }}
            className="text-center opacity-100 border-l-4 border-tci-p bg-white absolute transition-all duration-300 ease-in-out mt-1"
          ></div>
          <div
            style={{
              left: differenceInDays(new Date(), dateHeaderStart) * unit + "px",
              top: "-10px",
              zIndex: 10
            }}
            className="text-center text-sm absolute bg-tci-p text-white px-2 rounded-md"
          >
            <div className="flex flex-col">
              <div>Hoje</div>
              <div>{format(new Date(), "dd/MM/yyyy")}</div>
            </div>
          </div>
        </div>

        {/* Data 2 */}
        {goLive ? (
          <div
            style={{
              width:
                differenceInDays(addMonths(dateHeaderEnd, 2), dateHeaderStart) *
                  unit +
                "px",
            }}
            className="relative"
          >
            <div
              style={{
                width: "0px",
                left: differenceInDays(goLive, dateHeaderStart) * unit + "px",
                height: 80 + (29 * activities.length) + "px",
                zIndex: 10
              }}
              className="text-center opacity-100 border-l-4 border-pink-600 bg-white absolute transition-all duration-300 ease-in-out mt-1"
            ></div>
            <div
              style={{
                left: differenceInDays(goLive, dateHeaderStart) * unit + "px",
                top: "-10px",
                zIndex: 10
              }}
              className="text-center text-sm absolute bg-pink-600 text-white px-2 rounded-md"
            >
              <div className="flex flex-col">
                <div>Go-Live</div>
                <div>{format(goLive, "dd/MM/yyyy")}</div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Ano */}
      <div className="flex flex-row">
        {headerMonths.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: item.countDays * unit,
                maxWidth: item.countDays * unit,
                minWidth: item.countDays * unit,
              }}
            >
              {index === 0 || item.mounth === "jan" ? (
                <div className="text-center text-white font-bold bg-indigo-500 box-border rounded-full">
                  {item.year}
                </div>
              ) : (
                <div className="text-center"></div>
              )}
            </div>
          );
        })}
      </div>
      {/* Mes */}
      <div className="flex flex-row">
        {headerMonths.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: item.countDays * unit,
                maxWidth: item.countDays * unit,
                minWidth: item.countDays * unit,
              }}
            >
              <div className="text-center text-gray-900 bg-gray-300 border box-border">
                {item.mounth}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLineHeader;
