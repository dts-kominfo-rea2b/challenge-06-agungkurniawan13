// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const dataProcessing = (dataset) => {
  const data = JSON.parse(dataset);
  let expWord = "";

  if (data?.message !== undefined) {
    expWord = data?.message;
  }

  if (data?.length) {
    data?.forEach((item) => {
      if (item?.message !== undefined) {
        expWord = item?.message;
      }

      if (item?.data?.message !== undefined) {
        expWord = item?.data?.message;
      }
    });
  }

  let expWordString = "";
  const splittedWord = expWord.split(" ");

  if (splittedWord?.length >= 1) {
    expWordString = splittedWord[1];
  }

  return expWordString;
};

const bacaData = (fnCallback) => {
  const fileList = [file1, file2, file3];
  let result = [];
  let countList=0;
  
  fileList.forEach((item) => {
    fs.readFile(item, (error, data) => {
      countList++;
      if (error) fnCallback(error, null);
      const getProcessedItem = dataProcessing(data);
      result.push(getProcessedItem);
      if(countList===fileList.length) {
        fnCallback(null, result);
      }
    });
  });
  
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
