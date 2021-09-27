import { atom } from "recoil";
import { IActivities } from "../models";

export const unitState = atom<number>({
  key: "unit", // unique ID (with respect to other atoms/selectors)
  default: 2.03, // default value (aka initial value)
});

export const widthMarkState = atom<number>({
  key: "widthMark", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const dateHeaderStartState = atom<Date>({
  key: "dateHeaderStart", // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});

export const dateHeaderEndState = atom<Date>({
  key: "dateHeaderEnd", // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});

export const goLiveState = atom<Date | null>({
  key: "goLive", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const activitiesState = atom<IActivities[]>({
  key: "activities", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: 1,
      nome: "Planejamento",
      startDate: new Date("2021-01-01 00:00:00"),
      endDate: new Date("2021-02-30 00:00:00"),
      endDateInicial: new Date("2021-02-30 00:00:00"),
      color: "#2563EB",
      percentual: 1
    },
    {
      id: 1,
      nome: "Desenvolvimento",
      startDate: new Date("2021-02-01 00:00:00"),
      endDate: new Date("2021-05-30 00:00:00"),
      endDateInicial:  new Date("2021-05-30 00:00:00"),
      color: "#2563EB",
      percentual: 1
    },
  
    {
      id: 1,
      nome: "Homologação",
      startDate: new Date("2021-06-01 00:00:00"),
      endDate: new Date("2021-08-30 00:00:00"),
      endDateInicial: new Date("2021-08-30 00:00:00"),
      color: "#2563EB",
      percentual: 1
    },

    {
      id: 1,
      nome: "Validação",
      startDate: new Date("2021-03-01 00:00:00"),
      endDate: new Date("2021-12-30 00:00:00"),
      endDateInicial: new Date("2021-12-30 00:00:00"),
      color: "blueviolet",
      percentual: 0.5
    },
   
  ], // default value (aka initial value)
});
