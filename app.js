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
  saleMap = listSheets.find((ws) => ws.name == "SaleMap");
  totalSales = listSheets.find((ws) => ws.name == "Total Sales");
  salesByProduct = listSheets.find((ws) => ws.name == "SalesbyProduct");
  salesBySegment = listSheets.find((ws) => ws.name == "SalesbySegment");
}
const oregonWashingtonButton = document.getElementById("oregonwashington");
const clearFilterButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

function oregonWashFunction() {
  //log what is pressed
  console.log(oregonWashingtonButton.value);

  saleMap.applyFilterAsync("State", ["Oregon", "Washington"], "replace");
  totalSales.applyFilterAsync("State", ["Oregon", "Washington"], "replace");
  salesByProduct.applyFilterAsync("State", ["Oregon", "Washington"], "replace");
  salesBySegment.applyFilterAsync("State", ["Oregon", "Washington"], "replace");
}
function clearStateFilter() {
  console.log(clearFilterButton.value);
  saleMap.clearFilterAsync("State");
  totalSales.clearFilterAsync("State");
  salesByProduct.clearFilterAsync("State");
  salesBySegment.clearFilterAsync("State");
}
function undo() {
  console.log(undoButton.value);
  viz.undoAsync();
}
oregonWashingtonButton.addEventListener(`click`, oregonWashFunction);
clearFilterButton.addEventListener(`click`, clearStateFilter);
undoButton.addEventListener(`click`, undo);
//Run this function when viz becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
