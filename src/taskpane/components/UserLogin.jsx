// import React, { useState } from "react";
// import { useStyles } from "./UserLoginStyles";

// function UserLogin({ setPageValue }) {
//   const [username, setUsername] = useState("");
//   const styles = useStyles();
//   //   document.getElementById("html-content").style.display = "none";

//   const displayUsernameInExcelAndNavigate = async () => {
//     if (!username.includes("@")) {
//       console.log("Please enter a valid email address.");
//       return;
//     }

//     try {
//       // Make the API call using fetch
//       const response = await fetch(
//         "https://k06jq91m02.execute-api.ap-south-1.amazonaws.com/ViscadiaTest/SQLdbQueryTest/user-login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email_id: username,
//             action: "Fetch Metadata",
//           }),
//           mode: "cors", // This should work after enabling CORS in API Gateway
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Response: ", data); // Log the response for debugging

//       const { results1, results2 } = data;

//       if (!results1 || !results2) {
//         throw new Error("Results1 or Results2 is undefined or null");
//       }

//       // Write the received data to the Excel worksheet
//       await Excel.run(async (context) => {
//         const sheet = context.workbook.worksheets.getActiveWorksheet();

//         // Function to convert JSON array to 2D array
//         const convertTo2DArray = (jsonArray) => {
//           if (jsonArray.length === 0) {
//             return [];
//           }
//           const headers = Object.keys(jsonArray[0]);
//           const dataArray = jsonArray.map((item) => headers.map((header) => item[header]));
//           return [headers].concat(dataArray);
//         };

//         const results1Array = convertTo2DArray(results1);
//         const results2Array = convertTo2DArray(results2);

//         // Define the range for the results
//         const range1 = sheet.getRange(
//           `A1:${String.fromCharCode(65 + results1Array[0].length - 1)}${results1Array.length}`
//         );
//         const range2 = sheet.getRange(
//           `O1:${String.fromCharCode(79 + results2Array[0].length - 1)}${results2Array.length}`
//         );

//         range1.values = results1Array;
//         range2.values = results2Array;

//         range1.format.autofitColumns();
//         range2.format.autofitColumns();
//         await context.sync();
//       });

//       onDisplayUsername();
//     } catch (error) {
//       console.error("Error: ", error.message);
//       alert("Failed to fetch data. Please try again.");
//     }
//   };

//     try {
//       // Make the API call using fetch
//       const response = await fetch(
//         "https://k06jq91m02.execute-api.ap-south-1.amazonaws.com/ViscadiaTest/SQLdbQueryTest/user-login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email_id: username,
//             action: "Fetch Metadata",
//           }),
//           mode: "cors", // This should work after enabling CORS in API Gateway
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Response: ", data); // Log the response for debugging

//       const { results1, results2 } = data;

//       if (!results1 || !results2) {
//         throw new Error("Results1 or Results2 is undefined or null");
//       }

//       // Write the received data to the Excel worksheet
//       await Excel.run(async (context) => {
//         const sheet = context.workbook.worksheets.getActiveWorksheet();

//         // Function to convert JSON array to 2D array
//         const convertTo2DArray = (jsonArray) => {
//           if (jsonArray.length === 0) {
//             return [];
//           }
//           const headers = Object.keys(jsonArray[0]);
//           const dataArray = jsonArray.map((item) => headers.map((header) => item[header]));
//           return [headers].concat(dataArray);
//         };

//         const results1Array = convertTo2DArray(results1);
//         const results2Array = convertTo2DArray(results2);

//         // Define the range for the results
//         const range1 = sheet.getRange(
//           `A1:${String.fromCharCode(65 + results1Array[0].length - 1)}${results1Array.length}`
//         );
//         const range2 = sheet.getRange(
//           `O1:${String.fromCharCode(79 + results2Array[0].length - 1)}${results2Array.length}`
//         );

//         range1.values = results1Array;
//         range2.values = results2Array;

//         range1.format.autofitColumns();
//         range2.format.autofitColumns();
//         await context.sync();
//       });

//       setPageValue();
//     } catch (error) {
//       console.error("Error: ", error.message);
//       alert("Failed to fetch data. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.usernameInputContainer}>
//       <h2 className={styles.heading}>Viscadia Forecasting Platform</h2>
//       <div className={styles.userProfileButton}>
//         <button className={styles.userProfileButtonInner}>User Profile Information</button>
//       </div>
//       <div className={styles.rec}>
//         <div className={styles.inputContainer}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your Username"
//             className={styles.inputContainerInput}
//           />
//           <span>Display username in Excel*</span>
//         </div>
//         <div>
//           <button className={styles.buttonfButton} onClick={() => {displayUsernameInExcelAndNavigate}}>
//             Proceed →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLogin;
import React, { useState } from "react";
import { useStyles } from "./UserLoginStyles";
import * as XLSX from "xlsx";
import Papa from "papaparse";

function UserLogin({ setPageValue }) {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const styles = useStyles();
  // const fileName = "SampleData_powerBi.csv";

  async function downloadAndInsertDataFromExcel() {
    const fileName = "test.csv";
    const s3Url = `https://viscadia-forecasting-data.s3.amazonaws.com/viscadia_test/${fileName}`;
    const BATCH_SIZE = 20000; // Number of rows per batch
    const NORMALIZE_BATCH_SIZE = 1000; // Number of rows to normalize at once

    async function fetchData() {
      console.log("Starting to fetch the file from S3...");
      const response = await fetch(s3Url);
      if (!response.ok) {
        throw new Error(`Failed to fetch the file: ${response.statusText}`);
      }
      console.log("File fetched successfully. Streaming data in chunks...");

      return response.body;
    }

    async function processStream(stream) {
      console.log("Starting to process stream...");
      const reader = stream.getReader();
      let rows = [];
      let rowIndex = 1; // Initialize row index for insertion
      let buffer = ""; // Buffer for incomplete lines

      return new Promise((resolve, reject) => {
        const processChunk = async ({ done, value }) => {
          if (done) {
            if (buffer) {
              processBuffer(buffer); // Process any remaining buffer
            }
            if (rows.length > 0) {
              await normalizeRows(rows);
              await insertParsedData(rows, rowIndex);
              rowIndex += rows.length;
            }
            console.log("Stream processing completed.");
            resolve();
            return;
          }

          const text = new TextDecoder("utf-8").decode(value);
          const lines = (buffer + text).split("\n");
          buffer = lines.pop(); // Save last line in buffer in case it's incomplete

          for (let line of lines) {
            processBuffer(line);
          }

          if (rows.length >= BATCH_SIZE) {
            await normalizeRows(rows);
            await insertParsedData(rows.slice(0, BATCH_SIZE), rowIndex);
            rowIndex += BATCH_SIZE;
            rows = rows.slice(BATCH_SIZE);
          }

          reader.read().then(processChunk).catch(reject);
        };

        reader.read().then(processChunk).catch(reject);
      });

      function processBuffer(line) {
        const parsedLine = Papa.parse(line, {
          header: false,
          dynamicTyping: true,
          skipEmptyLines: true,
          quoteChar: '"',
          escapeChar: '"',
          error: function (error) {
            console.error(`Error parsing line: ${error.message}`);
          },
        });

        if (parsedLine.errors.length > 0) {
          parsedLine.errors.forEach((err) => console.error(`CSV Parsing Error: ${err.message}`));
        } else {
          rows.push(parsedLine.data[0]);
        }
      }
    }

    async function normalizeRows(rows) {
      return new Promise((resolve) => {
        const maxCols = Math.max(...rows.map((row) => row.length));
        console.log(`Normalizing rows to ${maxCols} columns.`);
        let index = 0;

        function normalizeBatch() {
          const endIndex = Math.min(index + NORMALIZE_BATCH_SIZE, rows.length);
          for (let i = index; i < endIndex; i++) {
            while (rows[i].length < maxCols) {
              rows[i].push("");
            }
          }
          index = endIndex;
          if (index < rows.length) {
            requestAnimationFrame(normalizeBatch);
          } else {
            resolve();
          }
        }

        normalizeBatch();
      });
    }

    async function insertParsedData(rows, startRow) {
      await Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const endRow = startRow + rows.length - 1;
        const rangeAddress = `A${startRow}:${String.fromCharCode(65 + rows[0].length - 1)}${endRow}`;
        const range = sheet.getRange(rangeAddress);
        range.values = rows;
        await sheet.context.sync();
        console.log(`Inserted rows ${startRow} to ${endRow}`);
      }).catch((error) => {
        console.error("Error during Excel run:", error);
      });
    }

    try {
      console.log("Starting the download and insertion process...");
      const stream = await fetchData();
      await processStream(stream);
      console.log("Data has been successfully inserted into the worksheet.");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch data. Please try again.");
    }
  }
  // const displayUsernameInExcelAndNavigate = async () => {
  //   if (!username.includes("@")) {
  //     setErrorMessage("Please enter a valid email address.");
  //     return;
  //   }

  //   try {
  //     // Make the API call using fetch
  //     const response = await fetch(
  //       "https://k06jq91m02.execute-api.ap-south-1.amazonaws.com/ViscadiaTest/SQLdbQueryTest/user-login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email_id: username,
  //           action: "Fetch Metadata",
  //         }),
  //         mode: "cors", // This should work after enabling CORS in API Gateway
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log("Response: ", data); // Log the response for debugging

  //     const { results1, results2 } = data;

  //     if (!results1 || !results2) {
  //       throw new Error("Results1 or Results2 is undefined or null");
  //     }

  //     // Write the received data to the Excel worksheet
  //     await Excel.run(async (context) => {
  //       const sheet = context.workbook.worksheets.getActiveWorksheet();

  //       // Function to convert JSON array to 2D array
  //       const convertTo2DArray = (jsonArray) => {
  //         if (jsonArray.length === 0) {
  //           return [];
  //         }
  //         const headers = Object.keys(jsonArray[0]);
  //         const dataArray = jsonArray.map((item) => headers.map((header) => item[header]));
  //         return [headers].concat(dataArray);
  //       };

  //       const results1Array = convertTo2DArray(results1);
  //       const results2Array = convertTo2DArray(results2);

  //       // Define the range for the results
  //       const range1 = sheet.getRange(
  //         `A1:${String.fromCharCode(65 + results1Array[0].length - 1)}${results1Array.length}`
  //       );
  //       const range2 = sheet.getRange(
  //         `O1:${String.fromCharCode(79 + results2Array[0].length - 1)}${results2Array.length}`
  //       );

  //       range1.values = results1Array;
  //       range2.values = results2Array;

  //       range1.format.autofitColumns();
  //       range2.format.autofitColumns();
  //       await context.sync();
  //     });

  //     setPageValue("oncologyForecast"); // Assuming this function navigates to the next page
  //   } catch (error) {
  //     console.error("Error: ", error.message);
  //     setErrorMessage("Failed to fetch data. Please try again.");
  //   }
  // };

  return (
    <div className={styles.usernameInputContainer}>
      <h2 className={styles.heading}>Viscadia Forecasting Platform</h2>
      <div className={styles.userProfileButton}>
        <button className={styles.userProfileButtonInner}>User Profile Information</button>
      </div>
      <div className={styles.rec}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            className={styles.inputContainerInput}
          />
          <span>Display username in Excel*</span>
          {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
        <div>
          <button className={styles.buttonfButton} onClick={downloadAndInsertDataFromExcel}>
            Proceed →
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
