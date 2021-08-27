export default function svgString2Image(svgString: string, width: number, height: number, format: string, callback: Function) {
    // set default for format parameter
    format = format ? format : 'png';
    // SVG data URL from SVG string
    var svgData = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    // create canvas in memory(not in DOM)
    var canvas = document.createElement('canvas');
    // get canvas context for drawing on canvas
    var context = canvas.getContext('2d');
    // set canvas size
    canvas.width = width;
    canvas.height = height;
    // create image in memory(not in DOM)
    var image = new Image();
    // later when image loads run this
    image.onload = function () { // async (happens later)
        // clear canvas
        context?.clearRect(0, 0, width, height);
        // draw image with SVG data to canvas
        context?.drawImage(image, 0, 0, width, height);
        // snapshot canvas as png
        var pngData = canvas.toDataURL('image/' + format);
        // pass png data URL to callback
        callback(pngData);
    }; // end async
    // start loading SVG data into in memory image
    image.src = svgData;
}

/* svgToPng(){
    var svgString = this.$refs.svgElement.outerHTML

    var width = this.$refs.svgElement.clientWidth
    var height = this.$refs.svgElement.clientHeight


    this.svgString2Image(svgString, width,height, 'png', (url:string) => this.imageSvg = url)
    this.show2 = false
  } 
  
    jsPdfExe() {
    var doc = new jsPDF("l", "px", [1200, 720]);
    doc.html(this.$refs.templatePdf, {
      callback: function (doc) {
        doc.save("output.pdf");
      },
      x: 10,
      y: 10,
    });
  }
  
  
  
  */