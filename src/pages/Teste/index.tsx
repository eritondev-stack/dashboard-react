import React from "react";
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import parse from "html-react-parser";
import "suneditor/dist/css/suneditor.min.css";
import Button from '@material-tailwind/react/Button.js'
import JoditReact from "jodit-react-ts";
import Dialog from '@material-ui/core/Dialog';
import 'jodit/build/jodit.min.css';



var chart: ApexCharts;

interface Props {
  readonly nameProp?: string;
}

const Teste: React.FC<Props> = ({ nameProp }) => {
  const [name, setName] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false)
  const [html, setHtml] = useState<string>(`
  <p>&nbsp;</p>
<p><span style="color: rgb(0, 0, 255);">Eriton Gomes De Souza: </span><span style="color: rgb(166, 77, 121);">Eriton Gomes De Souza Da Silva Sales da Silva</span></p>
<p><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 0);">Marcelo Carmo Da Silva Sales.<span style="background-color: rgb(255, 255, 255);"> Eriton Gomes De Souza</span></span></p>
<p><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 0);"><span style="background-color: rgb(255, 255, 255);"><br></span></span></p>
<p><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 0);"><span style="background-color: rgb(255, 255, 255);"><br></span></span></p>
  `);
  const divRef = useRef<HTMLDivElement>(null);




  function renderCharts() {
    var options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
        events: {
          dataPointSelection: handleEventCharts,
        },
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

  return (
    <div>
      <Dialog open={open} >
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quos earum commodi ullam iusto sint rerum unde voluptas quisquam, accusamus adipisci quibusdam porro veritatis quo velit non molestias fugit doloribus!</div>
        <Button onClick={() => setOpen(open ? false : true)}>Selecionar</Button>
      </Dialog>
      <div>
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
            <div className='text-tci-pos'>Eriton</div>
            <Button onClick={() => setOpen(open ? false : true)}>Selecionar</Button>
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

  {/*         <SunEditor
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
          /> */}
 <>
      <JoditReact onChange={(content) => setHtml(content)} defaultValue={html} />
    </>
        </div>
      </div>
    </div>
  );
};

export default Teste;
