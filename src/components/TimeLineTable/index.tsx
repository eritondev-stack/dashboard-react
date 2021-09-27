/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import TimeLineHeader from "./Header";
import { useRecoilState } from "recoil";
import {
  dateHeaderStartState,
  dateHeaderEndState,
  activitiesState,
  goLiveState,
  widthMarkState,
  unitState,
} from "../../recoil";
import Activity from "./Activity";
import { useEffect } from "react";
import { max, min } from "date-fns";
import "./index.css";
import { useRef } from "react";

const TimeLine: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateHeaderStart, setDateHeaderStart] =
    useRecoilState(dateHeaderStartState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateHeaderEnd, setDateHeaderEnd] = useRecoilState(dateHeaderEndState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [widthMark, setWidthMark] = useRecoilState(widthMarkState);
  const [unit, setUnit] = useRecoilState(unitState);
  const [activities] = useRecoilState(activitiesState);
  const [goLive, setGoLive] = useRecoilState(goLiveState);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    organizeDate();
    handleWidthMark();
  }, [goLive]);

  const organizeDate = () => {
    console.log("Organize Date");
    let datesMin = activities.map((item) => item.startDate);
    let datesMax = activities.map((item) => item.endDate);
    let minimo = min(datesMin);
    let maximo = max(datesMax);
    setDateHeaderStart(minimo);
    setDateHeaderEnd(maximo);
    if (goLive) {
      let newMax = max([maximo, goLive]);
      setDateHeaderEnd(newMax);
    }
  };

  const handleGoLive = (date: Date | null) => {
    let newDate = date ? date : null;
    if (newDate?.toString() === "Invalid Date") {
    } else {
      setGoLive(newDate);
    }
    handleWidthMark();
  };

  const handleWidthMark = () => {
    let newValue = containerRef.current?.clientHeight
      ? containerRef.current?.clientHeight
      : 0;
    setWidthMark(0);
    setTimeout(() => {
      setWidthMark(newValue);
    }, 1000);
  };

  return (
    <div className="mt-5 ml-2 box-border">
      <div className="flex flex-row items-center">
        <div className="">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Go Live"
            value={goLive}
            onChange={handleGoLive}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="m-2"></div>
        <div className="m-2"></div>
      </div>

      <div className="flex flex-row">
        <div className="m-2"></div>
        <div className="m-2"></div>
      </div>

      <div
        className="shadow-md"
        ref={containerRef}
        style={{
          position: "relative",
          overflow: "scroll",
        }}
      >
        <table className="font-serif">
          <thead className="bg-gray-200">
            <tr>
              <th className="bg-gray-200">
                <div
                  className="flex justify-center items-end relative"
                  style={{
                    height: "103px",
                  }}
                >
                  <div className="absolute top-0 left-0">
                    <div className="h-6 bg-gray-300 m-3 px-2 flex flex-row rounded-md">
                      <div
                        onClick={() => setUnit(unit + 0.1)}
                        className="cursor-pointer"
                      >
                        <span className="material-icons-outlined select-none">
                          zoom_in
                        </span>
                      </div>
                      <div
                        onClick={() => setUnit(unit - 0.1)}
                        className="cursor-pointer"
                      >
                        <span className="material-icons-outlined select-none">
                          zoom_out
                        </span>
                      </div>
                      <div className="cursor-pointer">
                        <span className="material-icons-outlined select-none">
                          format_list_numbered
                        </span>
                      </div>
                      <div className="cursor-pointer">
                        <span className="material-icons-outlined select-none">
                          add_circle_outline
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>Atividade</div>
                </div>
              </th>
              <th
                style={{
                  position: "sticky",
                  left: "239px",
                  zIndex: 62,
                }}
                className="bg-gray-200"
              >
                <div
                  className="flex justify-center items-end "
                  style={{
                    height: "103px",
                    width: "106px",
                  }}
                >
                  <div className="flex flex-col">
                    <div>Baseline</div>
                    <div>Original</div>
                  </div>
                </div>
              </th>
              <th
                style={{
                  position: "sticky",
                  left: "342px",
                  zIndex: 62,
                }}
                className="bg-gray-200"
              >
                <div
                  className="flex justify-center items-end"
                  style={{
                    height: "103px",
                    width: "106px",
                  }}
                >
                  <div className="flex flex-col">
                    <div>Baseline</div>
                    <div>Atual</div>
                  </div>
                </div>
              </th>
              <th>
                <TimeLineHeader></TimeLineHeader>
              </th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, index) => (
              <Activity activity={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default TimeLine;
