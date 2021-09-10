import { Tooltip } from "@material-ui/core";
import { differenceInDays } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { IActivities } from "../../../models";
import { dateHeaderStartState, unitState } from "../../../recoil";


interface Props {
  activity: IActivities;
}

function Activity({ activity }: Props) {
  const [dateHeaderStart] = useRecoilState(dateHeaderStartState);
  const [unit] = useRecoilState<number>(unitState);
  const [showEdit, setShowEdit] = useState(false);
  const [upZindex, setZindex] = useState(false);

  useEffect(() => {
    console.log("Alterado no component activity");
  }, [unit]);

  return (
    <>
      <tr>
        <td>
          <div
            onMouseEnter={() => setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}
            style={{
              width: "240px",
              minWidth: "240px",
              maxWidth: "240px",
            }}
            className="mt-1 text-gray-600 cursor-pointer flex flex-row justify-start hover:text-blue-800 hover:font-bold"
          >
            <div
              style={{
                backgroundColor: showEdit ? "white" : activity.color,
                width: showEdit ? "25px" : "10px",
                minWidth: showEdit ? "25px" : "10px",
                maxWidth: showEdit ? "25px" : "10px",
                height: "23.33px",
                maxHeight: "23.33px",
                minHeight: "23.33px",
                border: "1px",
                borderColor: activity.color,
              }}
            >
              {showEdit ? (
                <Tooltip title="Editar" placement="right" enterDelay={500}>
                <div
                  style={{
                    color: activity.color,
                  }}
                  className="material-icons-outlined text-red-100"
                >
                  mode_edit
                </div>
                </Tooltip>
              ) : (
                <></>
              )}
            </div>
            <div className="ml-2 truncate transition-all duration-300 ease-in-out">
              {activity.nome}
            </div>
          </div>
        </td>
        <td>
          <div
            style={{
              width:
                differenceInDays(activity.endDate, activity.startDate) * unit +
                "px",
              left:
                differenceInDays(activity.startDate, dateHeaderStart) * unit +
                "px",
              zIndex: upZindex ? 50 : 10 
            }}
            onMouseEnter={() => setZindex(true)}
            onMouseLeave={() => setZindex(false)}
            className="relative transition-all duration-300 ease-in-out rounded-md mt-1 z-10 hover:opacity-80"
          >
            <div
              style={{
                backgroundColor: activity.color,
              }}
              className="w-full h-full opacity-60 absolute rounded-sm transition-all duration-300 ease-in-out"
            ></div>
            <div
              style={{
                width: ((activity.percentual ? activity.percentual : 0)  * 100)  + "%",
                backgroundColor: activity.color,
              }}
              className="h-full text-white text-sm select-none text-center relative w-0 rounded-md transition-all duration-300 ease-in-out"
            >
             {
              ((activity.percentual ? activity.percentual : 0)  * 100).toFixed(0)  + "%"
             }
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Activity;
