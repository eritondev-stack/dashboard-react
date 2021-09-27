import React from "react";
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import parse from "html-react-parser";
import Button from "@material-tailwind/react/Button.js";
import Dialog from "@material-ui/core/Dialog";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressBarDashboard from "../../components/ProgressBarDashboard";
import TimeLine from "../../components/TimeLineTable";
import ReactQuill, { Quill }  from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./custom.css";

var chart: ApexCharts;

interface Props {
  readonly nameProp?: string;
}

const Teste: React.FC<Props> = ({ nameProp }) => {
  const [name, setName] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [html, setHtml] = useState<string>(``);
  const divRef = useRef<HTMLDivElement>(null);

  


var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px', '20px'];
Quill.register(Size, true);

var modules = {
  toolbar: [
    [{ size: ['14px', '16px', '18px', '20px'] }],
    ["bold", "italic", "underline", "strike"],
    ["link", "image"],
    [
      { color: [] },
      { background: [] },
    ],
  ],
};

var formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "size",
];


  function renderCharts() {
    var options = {
      series: [20, 10, 70],
      colors: ["rgb(191,191,191)", "rgb(132,188,72)", "rgb(0,112,192)"],
      labels: ["Not Started", "On Plan", "Completed"],
      chart: {
        type: "donut",
        events: {
          dataPointSelection: handleEventCharts,
        },
      },
      legend: {
        show: false,
        position: "bottom",
      },
    };

    function handleEventCharts(
      event: MouseEvent,
      chartContext: any,
      config: any
    ) {
      console.log(chartContext);
    }

    if (chart) {
      console.log("Grafico renderizado");
    } else {
      chart = new ApexCharts(divRef.current, options);

      chart.render().then(() => {
        chart.dataURI().then((uri: any) => {
          // console.log(uri.imgURI);
        });
      });

      // chart.toggleDataPointSelection = handleEventCharts
    }
  }

  useEffect(() => {
    renderCharts();
  }, [name]);
  const percentage = 90;


  return (
    <div>
      <Dialog fullScreen open={open}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          quos earum commodi ullam iusto sint rerum unde voluptas quisquam,
          accusamus adipisci quibusdam porro veritatis quo velit non molestias
          fugit doloribus!
        </div>
        <Button onClick={() => setOpen(open ? false : true)}>Selecionar</Button>
        <TimeLine />
      </Dialog>
      <div>
        <div
          style={{
            width: 350,
          }}
          className="relative"
        >
          <div className="absolute">
            <div
              style={{
                width: 350,
                height: "270px",
              }}
              className="relative flex flex-col justify-center items-center"
            >
              <div className="text-5xl font-serif">92%</div>
              <div className="font-serif">Evolution</div>
            </div>
          </div>
          <div className="relative z-20">
            <div
              ref={divRef}
              id="chart"
              style={{
                width: 350,
              }}
            ></div>
          </div>
        </div>

        <div>
          <ReactQuill
            modules={modules}
            formats={formats}
            theme="snow"
            placeholder="Digite aqui..."
            value={html}
            onChange={(content) => setHtml(content)}
          />
        </div>

        <div>
          <ProgressBarDashboard />
        </div>
        <div className="w-64 h-64 m-5">
          <CircularProgressbarWithChildren
            value={percentage}
            styles={{
              background: {
                fill: "green",
              },
              path: {
                stroke: "blueviolet",
              },
              trail: {
                stroke: "#EBE1E1",
              },
            }}
          >
            <div className="flex flex-col">
              {/*  <div className="text-4xl text-center font-bold text-gray-700">Evolução</div> */}
              <div className="text-7xl text-center font-bold text-gray-700">
                {percentage}%
              </div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <div>
            <div>Name: {name}</div>
            <div>Cidade: {cidade}</div>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div></div>

          <div className="font-sans">{parse(html)}</div>
        </div>
        <div>
          <div>
            <Button onClick={() => setOpen(open ? false : true)}>
              Selecionar
            </Button>
          </div>
        </div>
        {/*      <div>
          <>
            <JoditReact
              onChange={(content) => setHtml(content)}
              defaultValue={html}
            />
          </>
        </div> 
 */}
        <div className="font-serif"></div>
      </div>
    </div>
  );
};

export default Teste;

// eslint-disable-next-line no-lone-blocks
{
  /*         <SunEditor
            autoFocus={true}
            width="100%"
            height="150px"
            setOptions={{
              buttonList: [
                // default
                ["undo", "redo"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "list",
                  "fontColor",
                  "fontSize",
                  "codeView",
                ],
              ],
            }}
            setContents={html}
            onChange={(content: string) => setHtml(content)}
          /> */
}
