console.log("Hello, Welcome, I've been expecting you");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The Workbook name is: ${workbook.name}`);

  //   get the array of dashboards in the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The Sheet with index ${index} is ${element.name}`);
  });
  //   Get the active sheets for this workbook
  vizActiveSheet = workbook.activeSheet;
  console.log(`the Active Sheet is ${vizActiveSheet.name}`);
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is ${element.name}`);
  });
}

//Run this function when viz becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
