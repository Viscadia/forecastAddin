// formatAceSheet.js

export async function formatModelName(context, sheetName, rangeAddress) {
  const sheet = context.workbook.worksheets.getItem(sheetName);
  const range = sheet.getRange(rangeAddress);
  range.load(["address", "format"]);
  await context.sync();

  // Set font properties
  range.format.font.size = 9;
  range.format.font.name = "Arial";
  range.format.font.color = "#FFFFFF"; // Set font color to white

  // Set fill color
  range.format.fill.color = "#143D66"; // Set fill color to rgb(20, 61, 102)

  // Set horizontal alignment
  range.format.horizontalAlignment = "Center";

  // Set border styles
  const borders = range.format.borders;
  borders.getItem("EdgeLeft").style = "Continuous";
  borders.getItem("EdgeTop").style = "Continuous";
  borders.getItem("EdgeRight").style = "Continuous";
  borders.getItem("EdgeBottom").style = "Continuous";

  // Optionally set border colors if needed
  borders.getItem("EdgeLeft").color = "#000000"; // Black
  borders.getItem("EdgeTop").color = "#000000"; // Black
  borders.getItem("EdgeRight").color = "#000000"; // Black
  borders.getItem("EdgeBottom").color = "#000000"; // Black

  await context.sync();
  console.log("Formatting complete");
}

export async function formatGranularity(context, sheetName, rangeAddress) {
  const sheet = context.workbook.worksheets.getItem(sheetName);
  const range = sheet.getRange(rangeAddress);
  range.load(["address", "format"]);
  await context.sync();

  // Set font properties
  range.format.font.size = 9;
  range.format.font.name = "Arial";
  range.format.font.color = "#FFFFFF"; // Set font color to white

  // Set fill color
  range.format.fill.color = "#143D66"; // Set fill color to rgb(20, 61, 102)

  // Set horizontal alignment
  range.format.horizontalAlignment = "Center";

  // Set border styles
  const borders = range.format.borders;
  borders.getItem("EdgeLeft").style = "Continuous";
  borders.getItem("EdgeTop").style = "Continuous";
  borders.getItem("EdgeRight").style = "Continuous";
  borders.getItem("EdgeBottom").style = "Continuous";

  // Optionally set border colors if needed
  borders.getItem("EdgeLeft").color = "#000000"; // Black
  borders.getItem("EdgeTop").color = "#000000"; // Black
  borders.getItem("EdgeRight").color = "#000000"; // Black
  borders.getItem("EdgeBottom").color = "#000000"; // Black

  await context.sync();
  console.log("Formatting complete");
}

export async function formatTimelineTop(context, sheetName, rangeAddress) {
  const sheet = context.workbook.worksheets.getItem(sheetName);
  const range = sheet.getRange(rangeAddress);
  range.load(["address", "format", "rowIndex", "columnIndex"]);
  await context.sync();

  // Define the first range to format
  const range1 = range.getRowsBelow(1).getCell(0, 0); // This is to ensure we are working with the first row

  // Calculate the address of the second range (offset by 8 columns to the left)
  const range2Address = `${String.fromCharCode(range.columnIndex + 65 - 8)}${range.rowIndex + 1}`;
  const range2 = sheet.getRange(range2Address);
  range2.load(["address", "format"]);
  await context.sync();

  // Apply formatting to the first range
  applyFormatting(range1);

  // Apply formatting to the second range
  applyFormatting(range2);

  await context.sync();
  console.log("Formatting complete");
};

function applyFormatting(range) {
  // Set font properties
  range.format.font.size = 9;
  range.format.font.name = "Arial";
  range.format.font.color = "#FFFFFF"; // Set font color to white

  // Set fill color
  range.format.fill.color = "#143D66"; // Set fill color to rgb(20, 61, 102)

  // Set horizontal alignment
  range.format.horizontalAlignment = "Center";

  // Set border styles and colors
  const borders = range.format.borders;
  borders.getItem("EdgeLeft").style = "Continuous";
  borders.getItem("EdgeTop").style = "Continuous";
  borders.getItem("EdgeRight").style = "Continuous";
  borders.getItem("EdgeBottom").style = "Continuous";

  borders.getItem("EdgeLeft").color = "#BFBFBF"; // Gray
  borders.getItem("EdgeTop").color = "#BFBFBF"; // Gray
  borders.getItem("EdgeRight").color = "#BFBFBF"; // Gray
  borders.getItem("EdgeBottom").color = "#BFBFBF"; // Gray
};
