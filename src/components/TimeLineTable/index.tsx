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
import { Button } from "@material-ui/core";
//total width / total dias = pixes

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

        <div>
          <Button color="primary" onClick={() => setUnit(unit + 0.5)}>
            +
          </Button>
          <Button color="secondary" onClick={() => setUnit(unit - 0.5)}>
            -
          </Button>
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
        <table>
          <thead>
            <tr>
              <th></th>
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
