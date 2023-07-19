/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 3057.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 10.0], [3.8, 10.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 10.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 13.0], [5.4, 13.0], [5.5, 13.0], [5.6, 13.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 14.0], [6.3, 14.0], [6.4, 14.0], [6.5, 14.0], [6.6, 14.0], [6.7, 14.0], [6.8, 14.0], [6.9, 14.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 15.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 15.0], [8.1, 15.0], [8.2, 15.0], [8.3, 15.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 17.0], [9.9, 17.0], [10.0, 17.0], [10.1, 17.0], [10.2, 17.0], [10.3, 17.0], [10.4, 17.0], [10.5, 17.0], [10.6, 17.0], [10.7, 17.0], [10.8, 18.0], [10.9, 18.0], [11.0, 18.0], [11.1, 18.0], [11.2, 18.0], [11.3, 18.0], [11.4, 18.0], [11.5, 18.0], [11.6, 18.0], [11.7, 18.0], [11.8, 19.0], [11.9, 19.0], [12.0, 19.0], [12.1, 20.0], [12.2, 20.0], [12.3, 20.0], [12.4, 20.0], [12.5, 20.0], [12.6, 21.0], [12.7, 22.0], [12.8, 22.0], [12.9, 22.0], [13.0, 23.0], [13.1, 23.0], [13.2, 23.0], [13.3, 23.0], [13.4, 23.0], [13.5, 23.0], [13.6, 23.0], [13.7, 23.0], [13.8, 23.0], [13.9, 24.0], [14.0, 24.0], [14.1, 24.0], [14.2, 24.0], [14.3, 24.0], [14.4, 24.0], [14.5, 24.0], [14.6, 25.0], [14.7, 25.0], [14.8, 25.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 27.0], [15.6, 27.0], [15.7, 27.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 28.0], [16.4, 28.0], [16.5, 28.0], [16.6, 28.0], [16.7, 28.0], [16.8, 28.0], [16.9, 29.0], [17.0, 29.0], [17.1, 29.0], [17.2, 29.0], [17.3, 29.0], [17.4, 29.0], [17.5, 29.0], [17.6, 29.0], [17.7, 29.0], [17.8, 29.0], [17.9, 29.0], [18.0, 30.0], [18.1, 30.0], [18.2, 30.0], [18.3, 30.0], [18.4, 31.0], [18.5, 31.0], [18.6, 31.0], [18.7, 32.0], [18.8, 32.0], [18.9, 32.0], [19.0, 32.0], [19.1, 32.0], [19.2, 33.0], [19.3, 33.0], [19.4, 33.0], [19.5, 34.0], [19.6, 34.0], [19.7, 34.0], [19.8, 34.0], [19.9, 34.0], [20.0, 35.0], [20.1, 35.0], [20.2, 35.0], [20.3, 35.0], [20.4, 36.0], [20.5, 37.0], [20.6, 37.0], [20.7, 37.0], [20.8, 37.0], [20.9, 38.0], [21.0, 38.0], [21.1, 38.0], [21.2, 38.0], [21.3, 38.0], [21.4, 39.0], [21.5, 39.0], [21.6, 40.0], [21.7, 40.0], [21.8, 40.0], [21.9, 42.0], [22.0, 42.0], [22.1, 42.0], [22.2, 42.0], [22.3, 43.0], [22.4, 43.0], [22.5, 43.0], [22.6, 45.0], [22.7, 45.0], [22.8, 46.0], [22.9, 46.0], [23.0, 47.0], [23.1, 50.0], [23.2, 50.0], [23.3, 50.0], [23.4, 50.0], [23.5, 51.0], [23.6, 51.0], [23.7, 52.0], [23.8, 52.0], [23.9, 52.0], [24.0, 53.0], [24.1, 53.0], [24.2, 53.0], [24.3, 53.0], [24.4, 54.0], [24.5, 55.0], [24.6, 55.0], [24.7, 56.0], [24.8, 56.0], [24.9, 57.0], [25.0, 57.0], [25.1, 58.0], [25.2, 58.0], [25.3, 58.0], [25.4, 59.0], [25.5, 59.0], [25.6, 60.0], [25.7, 61.0], [25.8, 61.0], [25.9, 62.0], [26.0, 62.0], [26.1, 63.0], [26.2, 63.0], [26.3, 63.0], [26.4, 63.0], [26.5, 64.0], [26.6, 65.0], [26.7, 65.0], [26.8, 65.0], [26.9, 68.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 71.0], [27.4, 71.0], [27.5, 72.0], [27.6, 72.0], [27.7, 74.0], [27.8, 74.0], [27.9, 75.0], [28.0, 76.0], [28.1, 76.0], [28.2, 78.0], [28.3, 79.0], [28.4, 79.0], [28.5, 83.0], [28.6, 84.0], [28.7, 84.0], [28.8, 85.0], [28.9, 86.0], [29.0, 87.0], [29.1, 87.0], [29.2, 88.0], [29.3, 89.0], [29.4, 91.0], [29.5, 92.0], [29.6, 92.0], [29.7, 92.0], [29.8, 92.0], [29.9, 93.0], [30.0, 93.0], [30.1, 93.0], [30.2, 93.0], [30.3, 94.0], [30.4, 94.0], [30.5, 94.0], [30.6, 95.0], [30.7, 95.0], [30.8, 95.0], [30.9, 95.0], [31.0, 95.0], [31.1, 95.0], [31.2, 96.0], [31.3, 96.0], [31.4, 96.0], [31.5, 96.0], [31.6, 96.0], [31.7, 96.0], [31.8, 96.0], [31.9, 96.0], [32.0, 96.0], [32.1, 97.0], [32.2, 97.0], [32.3, 97.0], [32.4, 97.0], [32.5, 98.0], [32.6, 98.0], [32.7, 98.0], [32.8, 98.0], [32.9, 98.0], [33.0, 99.0], [33.1, 99.0], [33.2, 99.0], [33.3, 99.0], [33.4, 99.0], [33.5, 100.0], [33.6, 100.0], [33.7, 101.0], [33.8, 101.0], [33.9, 101.0], [34.0, 101.0], [34.1, 102.0], [34.2, 103.0], [34.3, 103.0], [34.4, 103.0], [34.5, 103.0], [34.6, 104.0], [34.7, 104.0], [34.8, 104.0], [34.9, 104.0], [35.0, 105.0], [35.1, 106.0], [35.2, 107.0], [35.3, 107.0], [35.4, 107.0], [35.5, 121.0], [35.6, 623.0], [35.7, 627.0], [35.8, 627.0], [35.9, 628.0], [36.0, 630.0], [36.1, 630.0], [36.2, 631.0], [36.3, 632.0], [36.4, 632.0], [36.5, 633.0], [36.6, 634.0], [36.7, 635.0], [36.8, 635.0], [36.9, 635.0], [37.0, 635.0], [37.1, 635.0], [37.2, 635.0], [37.3, 636.0], [37.4, 636.0], [37.5, 636.0], [37.6, 636.0], [37.7, 637.0], [37.8, 637.0], [37.9, 637.0], [38.0, 640.0], [38.1, 640.0], [38.2, 641.0], [38.3, 653.0], [38.4, 653.0], [38.5, 654.0], [38.6, 655.0], [38.7, 655.0], [38.8, 656.0], [38.9, 657.0], [39.0, 659.0], [39.1, 660.0], [39.2, 660.0], [39.3, 662.0], [39.4, 662.0], [39.5, 662.0], [39.6, 662.0], [39.7, 663.0], [39.8, 663.0], [39.9, 664.0], [40.0, 664.0], [40.1, 664.0], [40.2, 664.0], [40.3, 664.0], [40.4, 664.0], [40.5, 665.0], [40.6, 665.0], [40.7, 665.0], [40.8, 665.0], [40.9, 665.0], [41.0, 665.0], [41.1, 666.0], [41.2, 666.0], [41.3, 666.0], [41.4, 666.0], [41.5, 666.0], [41.6, 667.0], [41.7, 668.0], [41.8, 668.0], [41.9, 668.0], [42.0, 669.0], [42.1, 671.0], [42.2, 674.0], [42.3, 687.0], [42.4, 687.0], [42.5, 689.0], [42.6, 689.0], [42.7, 690.0], [42.8, 690.0], [42.9, 690.0], [43.0, 1047.0], [43.1, 1049.0], [43.2, 1050.0], [43.3, 1056.0], [43.4, 1059.0], [43.5, 1061.0], [43.6, 1061.0], [43.7, 1062.0], [43.8, 1062.0], [43.9, 1062.0], [44.0, 1063.0], [44.1, 1064.0], [44.2, 1064.0], [44.3, 1064.0], [44.4, 1064.0], [44.5, 1064.0], [44.6, 1065.0], [44.7, 1065.0], [44.8, 1067.0], [44.9, 1068.0], [45.0, 1068.0], [45.1, 1068.0], [45.2, 1069.0], [45.3, 1069.0], [45.4, 1069.0], [45.5, 1070.0], [45.6, 1070.0], [45.7, 1070.0], [45.8, 1070.0], [45.9, 1070.0], [46.0, 1071.0], [46.1, 1071.0], [46.2, 1071.0], [46.3, 1071.0], [46.4, 1072.0], [46.5, 1072.0], [46.6, 1072.0], [46.7, 1072.0], [46.8, 1072.0], [46.9, 1073.0], [47.0, 1073.0], [47.1, 1074.0], [47.2, 1074.0], [47.3, 1075.0], [47.4, 1076.0], [47.5, 1077.0], [47.6, 1077.0], [47.7, 1077.0], [47.8, 1078.0], [47.9, 1078.0], [48.0, 1078.0], [48.1, 1079.0], [48.2, 1081.0], [48.3, 1085.0], [48.4, 1088.0], [48.5, 1091.0], [48.6, 1092.0], [48.7, 1093.0], [48.8, 1095.0], [48.9, 1100.0], [49.0, 1101.0], [49.1, 1103.0], [49.2, 1114.0], [49.3, 1140.0], [49.4, 1140.0], [49.5, 1141.0], [49.6, 1141.0], [49.7, 1142.0], [49.8, 1142.0], [49.9, 1144.0], [50.0, 1145.0], [50.1, 1148.0], [50.2, 1148.0], [50.3, 1169.0], [50.4, 1169.0], [50.5, 1169.0], [50.6, 1171.0], [50.7, 1171.0], [50.8, 1172.0], [50.9, 1173.0], [51.0, 1186.0], [51.1, 1189.0], [51.2, 1195.0], [51.3, 1197.0], [51.4, 1200.0], [51.5, 1200.0], [51.6, 1206.0], [51.7, 1206.0], [51.8, 1207.0], [51.9, 1207.0], [52.0, 1207.0], [52.1, 1211.0], [52.2, 1214.0], [52.3, 1215.0], [52.4, 1219.0], [52.5, 1222.0], [52.6, 1225.0], [52.7, 1227.0], [52.8, 1231.0], [52.9, 1231.0], [53.0, 1234.0], [53.1, 1244.0], [53.2, 1249.0], [53.3, 1249.0], [53.4, 1251.0], [53.5, 1252.0], [53.6, 1253.0], [53.7, 1254.0], [53.8, 1258.0], [53.9, 1258.0], [54.0, 1258.0], [54.1, 1261.0], [54.2, 1261.0], [54.3, 1262.0], [54.4, 1262.0], [54.5, 1266.0], [54.6, 1267.0], [54.7, 1269.0], [54.8, 1269.0], [54.9, 1274.0], [55.0, 1274.0], [55.1, 1276.0], [55.2, 1276.0], [55.3, 1277.0], [55.4, 1277.0], [55.5, 1277.0], [55.6, 1278.0], [55.7, 1278.0], [55.8, 1278.0], [55.9, 1278.0], [56.0, 1278.0], [56.1, 1279.0], [56.2, 1279.0], [56.3, 1280.0], [56.4, 1281.0], [56.5, 1281.0], [56.6, 1281.0], [56.7, 1281.0], [56.8, 1281.0], [56.9, 1282.0], [57.0, 1282.0], [57.1, 1283.0], [57.2, 1283.0], [57.3, 1285.0], [57.4, 1286.0], [57.5, 1286.0], [57.6, 1286.0], [57.7, 1286.0], [57.8, 1286.0], [57.9, 1288.0], [58.0, 1288.0], [58.1, 1289.0], [58.2, 1289.0], [58.3, 1290.0], [58.4, 1290.0], [58.5, 1290.0], [58.6, 1292.0], [58.7, 1294.0], [58.8, 1294.0], [58.9, 1295.0], [59.0, 1296.0], [59.1, 1297.0], [59.2, 1297.0], [59.3, 1297.0], [59.4, 1298.0], [59.5, 1299.0], [59.6, 1299.0], [59.7, 1300.0], [59.8, 1300.0], [59.9, 1305.0], [60.0, 1307.0], [60.1, 1307.0], [60.2, 1307.0], [60.3, 1309.0], [60.4, 1312.0], [60.5, 1314.0], [60.6, 1315.0], [60.7, 1316.0], [60.8, 1316.0], [60.9, 1316.0], [61.0, 1316.0], [61.1, 1317.0], [61.2, 1317.0], [61.3, 1318.0], [61.4, 1319.0], [61.5, 1319.0], [61.6, 1319.0], [61.7, 1319.0], [61.8, 1320.0], [61.9, 1320.0], [62.0, 1320.0], [62.1, 1321.0], [62.2, 1322.0], [62.3, 1322.0], [62.4, 1322.0], [62.5, 1323.0], [62.6, 1323.0], [62.7, 1323.0], [62.8, 1324.0], [62.9, 1325.0], [63.0, 1327.0], [63.1, 1327.0], [63.2, 1327.0], [63.3, 1328.0], [63.4, 1329.0], [63.5, 1330.0], [63.6, 1330.0], [63.7, 1330.0], [63.8, 1332.0], [63.9, 1332.0], [64.0, 1332.0], [64.1, 1333.0], [64.2, 1333.0], [64.3, 1334.0], [64.4, 1334.0], [64.5, 1334.0], [64.6, 1335.0], [64.7, 1335.0], [64.8, 1335.0], [64.9, 1336.0], [65.0, 1339.0], [65.1, 1339.0], [65.2, 1339.0], [65.3, 1341.0], [65.4, 1341.0], [65.5, 1341.0], [65.6, 1342.0], [65.7, 1342.0], [65.8, 1343.0], [65.9, 1344.0], [66.0, 1344.0], [66.1, 1345.0], [66.2, 1346.0], [66.3, 1348.0], [66.4, 1349.0], [66.5, 1351.0], [66.6, 1354.0], [66.7, 1354.0], [66.8, 1356.0], [66.9, 1356.0], [67.0, 1357.0], [67.1, 1357.0], [67.2, 1358.0], [67.3, 1358.0], [67.4, 1359.0], [67.5, 1360.0], [67.6, 1360.0], [67.7, 1361.0], [67.8, 1361.0], [67.9, 1363.0], [68.0, 1364.0], [68.1, 1364.0], [68.2, 1365.0], [68.3, 1366.0], [68.4, 1366.0], [68.5, 1367.0], [68.6, 1367.0], [68.7, 1368.0], [68.8, 1368.0], [68.9, 1368.0], [69.0, 1368.0], [69.1, 1368.0], [69.2, 1368.0], [69.3, 1368.0], [69.4, 1368.0], [69.5, 1368.0], [69.6, 1369.0], [69.7, 1369.0], [69.8, 1369.0], [69.9, 1370.0], [70.0, 1372.0], [70.1, 1376.0], [70.2, 1377.0], [70.3, 1377.0], [70.4, 1377.0], [70.5, 1378.0], [70.6, 1378.0], [70.7, 1381.0], [70.8, 1382.0], [70.9, 1384.0], [71.0, 1386.0], [71.1, 1388.0], [71.2, 1398.0], [71.3, 1402.0], [71.4, 1403.0], [71.5, 1408.0], [71.6, 1410.0], [71.7, 1411.0], [71.8, 1414.0], [71.9, 1416.0], [72.0, 1419.0], [72.1, 1419.0], [72.2, 1420.0], [72.3, 1421.0], [72.4, 1422.0], [72.5, 1423.0], [72.6, 1423.0], [72.7, 1424.0], [72.8, 1427.0], [72.9, 1444.0], [73.0, 1449.0], [73.1, 1456.0], [73.2, 1457.0], [73.3, 1457.0], [73.4, 1459.0], [73.5, 1459.0], [73.6, 1460.0], [73.7, 1462.0], [73.8, 1464.0], [73.9, 1464.0], [74.0, 1466.0], [74.1, 1467.0], [74.2, 1470.0], [74.3, 1470.0], [74.4, 1472.0], [74.5, 1473.0], [74.6, 1473.0], [74.7, 1474.0], [74.8, 1474.0], [74.9, 1475.0], [75.0, 1476.0], [75.1, 1476.0], [75.2, 1476.0], [75.3, 1477.0], [75.4, 1477.0], [75.5, 1478.0], [75.6, 1478.0], [75.7, 1483.0], [75.8, 1484.0], [75.9, 1486.0], [76.0, 1487.0], [76.1, 1488.0], [76.2, 1488.0], [76.3, 1488.0], [76.4, 1489.0], [76.5, 1489.0], [76.6, 1490.0], [76.7, 1490.0], [76.8, 1491.0], [76.9, 1491.0], [77.0, 1492.0], [77.1, 1492.0], [77.2, 1492.0], [77.3, 1492.0], [77.4, 1493.0], [77.5, 1493.0], [77.6, 1495.0], [77.7, 1497.0], [77.8, 1506.0], [77.9, 1581.0], [78.0, 1582.0], [78.1, 1592.0], [78.2, 1611.0], [78.3, 1613.0], [78.4, 1617.0], [78.5, 1618.0], [78.6, 1621.0], [78.7, 1622.0], [78.8, 1635.0], [78.9, 1638.0], [79.0, 1639.0], [79.1, 1642.0], [79.2, 1644.0], [79.3, 1644.0], [79.4, 1648.0], [79.5, 1649.0], [79.6, 1666.0], [79.7, 1667.0], [79.8, 1668.0], [79.9, 1669.0], [80.0, 1669.0], [80.1, 1674.0], [80.2, 1674.0], [80.3, 1675.0], [80.4, 1675.0], [80.5, 1675.0], [80.6, 1676.0], [80.7, 1676.0], [80.8, 1677.0], [80.9, 1680.0], [81.0, 1680.0], [81.1, 1681.0], [81.2, 1681.0], [81.3, 1682.0], [81.4, 1683.0], [81.5, 1684.0], [81.6, 1686.0], [81.7, 1686.0], [81.8, 1687.0], [81.9, 1687.0], [82.0, 1688.0], [82.1, 1688.0], [82.2, 1689.0], [82.3, 1690.0], [82.4, 1694.0], [82.5, 1791.0], [82.6, 1796.0], [82.7, 1796.0], [82.8, 1805.0], [82.9, 1806.0], [83.0, 1810.0], [83.1, 1812.0], [83.2, 1813.0], [83.3, 1813.0], [83.4, 1815.0], [83.5, 1815.0], [83.6, 1816.0], [83.7, 1816.0], [83.8, 1817.0], [83.9, 1818.0], [84.0, 1826.0], [84.1, 1827.0], [84.2, 1827.0], [84.3, 1830.0], [84.4, 1833.0], [84.5, 1833.0], [84.6, 1833.0], [84.7, 1834.0], [84.8, 1835.0], [84.9, 1835.0], [85.0, 1835.0], [85.1, 1836.0], [85.2, 1837.0], [85.3, 1837.0], [85.4, 1838.0], [85.5, 1838.0], [85.6, 1839.0], [85.7, 1839.0], [85.8, 1839.0], [85.9, 1840.0], [86.0, 1840.0], [86.1, 1840.0], [86.2, 1840.0], [86.3, 1840.0], [86.4, 1841.0], [86.5, 1843.0], [86.6, 1851.0], [86.7, 1860.0], [86.8, 1864.0], [86.9, 1873.0], [87.0, 1881.0], [87.1, 1882.0], [87.2, 1883.0], [87.3, 1884.0], [87.4, 1886.0], [87.5, 1886.0], [87.6, 1887.0], [87.7, 1888.0], [87.8, 1890.0], [87.9, 1902.0], [88.0, 1909.0], [88.1, 1918.0], [88.2, 1931.0], [88.3, 1937.0], [88.4, 1948.0], [88.5, 1960.0], [88.6, 1968.0], [88.7, 1975.0], [88.8, 1988.0], [88.9, 2004.0], [89.0, 2004.0], [89.1, 2011.0], [89.2, 2013.0], [89.3, 2014.0], [89.4, 2017.0], [89.5, 2024.0], [89.6, 2034.0], [89.7, 2035.0], [89.8, 2036.0], [89.9, 2036.0], [90.0, 2039.0], [90.1, 2059.0], [90.2, 2064.0], [90.3, 2072.0], [90.4, 2083.0], [90.5, 2084.0], [90.6, 2105.0], [90.7, 2114.0], [90.8, 2122.0], [90.9, 2125.0], [91.0, 2134.0], [91.1, 2143.0], [91.2, 2153.0], [91.3, 2165.0], [91.4, 2172.0], [91.5, 2181.0], [91.6, 2189.0], [91.7, 2200.0], [91.8, 2210.0], [91.9, 2218.0], [92.0, 2231.0], [92.1, 2237.0], [92.2, 2246.0], [92.3, 2259.0], [92.4, 2266.0], [92.5, 2276.0], [92.6, 2285.0], [92.7, 2295.0], [92.8, 2316.0], [92.9, 2320.0], [93.0, 2326.0], [93.1, 2334.0], [93.2, 2346.0], [93.3, 2354.0], [93.4, 2364.0], [93.5, 2372.0], [93.6, 2384.0], [93.7, 2393.0], [93.8, 2401.0], [93.9, 2411.0], [94.0, 2422.0], [94.1, 2433.0], [94.2, 2441.0], [94.3, 2489.0], [94.4, 2495.0], [94.5, 2521.0], [94.6, 2539.0], [94.7, 2558.0], [94.8, 2561.0], [94.9, 2568.0], [95.0, 2569.0], [95.1, 2569.0], [95.2, 2572.0], [95.3, 2572.0], [95.4, 2574.0], [95.5, 2586.0], [95.6, 2587.0], [95.7, 2589.0], [95.8, 2600.0], [95.9, 2602.0], [96.0, 2605.0], [96.1, 2612.0], [96.2, 2853.0], [96.3, 2859.0], [96.4, 2860.0], [96.5, 2865.0], [96.6, 2865.0], [96.7, 2866.0], [96.8, 2867.0], [96.9, 2867.0], [97.0, 2878.0], [97.1, 2883.0], [97.2, 2888.0], [97.3, 2910.0], [97.4, 2934.0], [97.5, 2937.0], [97.6, 2937.0], [97.7, 2946.0], [97.8, 2956.0], [97.9, 2960.0], [98.0, 2962.0], [98.1, 2963.0], [98.2, 2963.0], [98.3, 2965.0], [98.4, 2968.0], [98.5, 2970.0], [98.6, 3017.0], [98.7, 3018.0], [98.8, 3018.0], [98.9, 3019.0], [99.0, 3019.0], [99.1, 3019.0], [99.2, 3019.0], [99.3, 3026.0], [99.4, 3026.0], [99.5, 3026.0], [99.6, 3028.0], [99.7, 3031.0], [99.8, 3045.0], [99.9, 3057.0]], "isOverall": false, "label": "movies", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 334.0, "series": [{"data": [[0.0, 334.0], [2100.0, 11.0], [2300.0, 10.0], [2200.0, 11.0], [2400.0, 7.0], [600.0, 73.0], [2500.0, 13.0], [2600.0, 4.0], [2800.0, 11.0], [2900.0, 13.0], [3000.0, 14.0], [1000.0, 59.0], [1100.0, 25.0], [1200.0, 83.0], [1300.0, 116.0], [1400.0, 66.0], [1500.0, 4.0], [100.0, 22.0], [1600.0, 43.0], [1700.0, 3.0], [1800.0, 51.0], [1900.0, 10.0], [2000.0, 17.0]], "isOverall": false, "label": "movies", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 222.0, "minX": 0.0, "ticks": [[0, "요청 수 \n(응답시간 <= 500ms)"], [1, "요청 수 \n(응답시간 > 500ms 및 <= 1,500ms)"], [2, "요청 수 \n(응답시간 > 1,500ms)"], [3, "오류 발생 요청"]], "maxY": 422.0, "series": [{"data": [[0.0, 356.0]], "color": "#9ACD32", "isOverall": false, "label": "요청 수 \n(응답시간 <= 500ms)", "isController": false}, {"data": [[1.0, 422.0]], "color": "yellow", "isOverall": false, "label": "요청 수 \n(응답시간 > 500ms 및 <= 1,500ms)", "isController": false}, {"data": [[2.0, 222.0]], "color": "orange", "isOverall": false, "label": "요청 수 \n(응답시간 > 1,500ms)", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "오류 발생 요청", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 63.781, "minX": 1.68977952E12, "maxY": 63.781, "series": [{"data": [[1.68977952E12, 63.781]], "isOverall": false, "label": "local_test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68977952E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 8.833333333333332, "minX": 1.0, "maxY": 2629.7999999999997, "series": [{"data": [[2.0, 20.0], [3.0, 11.333333333333334], [4.0, 10.166666666666666], [5.0, 10.4], [6.0, 9.75], [7.0, 8.833333333333332], [8.0, 15.428571428571429], [9.0, 197.20000000000002], [10.0, 17.4], [11.0, 17.0], [12.0, 24.06666666666667], [13.0, 22.047619047619047], [14.0, 19.09090909090909], [15.0, 620.5], [16.0, 733.4], [17.0, 153.57142857142858], [18.0, 626.2222222222222], [19.0, 32.8], [20.0, 1813.0], [21.0, 165.28571428571428], [22.0, 229.11111111111111], [23.0, 169.76923076923077], [24.0, 289.5], [25.0, 29.333333333333332], [26.0, 1820.5], [27.0, 1843.0], [28.0, 1805.0], [30.0, 1833.0], [31.0, 1837.6666666666667], [33.0, 1881.0], [32.0, 1837.0], [34.0, 1840.0], [37.0, 1839.0], [36.0, 1840.0], [39.0, 1796.0], [38.0, 1835.0], [41.0, 1791.0], [40.0, 1837.5], [43.0, 1814.3333333333333], [45.0, 76.0], [44.0, 2523.6666666666665], [47.0, 1095.0], [46.0, 245.0], [49.0, 1073.0], [48.0, 933.8571428571429], [51.0, 1070.0], [50.0, 1070.6666666666667], [53.0, 473.8], [52.0, 1070.0], [55.0, 58.0], [54.0, 1114.0], [57.0, 50.0], [56.0, 694.6249999999999], [59.0, 56.0], [58.0, 454.6], [61.0, 974.0526315789474], [60.0, 483.8571428571429], [63.0, 1070.5], [62.0, 542.5], [67.0, 97.0], [66.0, 300.05263157894734], [65.0, 1067.625], [64.0, 540.25], [71.0, 1771.5], [70.0, 1642.457142857143], [69.0, 536.357142857143], [68.0, 96.99999999999999], [75.0, 1622.2307692307693], [74.0, 1326.9166666666667], [73.0, 1319.0], [72.0, 1978.5], [79.0, 1216.3015873015872], [78.0, 1283.3999999999999], [77.0, 1213.3333333333335], [76.0, 1001.7777777777778], [83.0, 1150.5238095238096], [82.0, 1463.0183486238525], [81.0, 1406.4999999999998], [80.0, 2629.7999999999997], [87.0, 1388.625], [86.0, 717.1714285714285], [85.0, 477.37500000000006], [84.0, 438.3529411764706], [91.0, 906.6428571428571], [90.0, 230.18750000000003], [89.0, 1913.0759493670885], [88.0, 1320.9166666666665], [1.0, 10.333333333333334]], "isOverall": false, "label": "movies", "isController": false}, {"data": [[63.781, 988.5030000000012]], "isOverall": false, "label": "movies-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 91.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2016.6666666666667, "minX": 1.68977952E12, "maxY": 3195366.6666666665, "series": [{"data": [[1.68977952E12, 3195366.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68977952E12, 2016.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68977952E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 988.5030000000012, "minX": 1.68977952E12, "maxY": 988.5030000000012, "series": [{"data": [[1.68977952E12, 988.5030000000012]], "isOverall": false, "label": "movies", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68977952E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 986.1370000000002, "minX": 1.68977952E12, "maxY": 986.1370000000002, "series": [{"data": [[1.68977952E12, 986.1370000000002]], "isOverall": false, "label": "movies", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68977952E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.051999999999999984, "minX": 1.68977952E12, "maxY": 0.051999999999999984, "series": [{"data": [[1.68977952E12, 0.051999999999999984]], "isOverall": false, "label": "movies", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68977952E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.68977952E12, "maxY": 3057.0, "series": [{"data": [[1.68977952E12, 3057.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68977952E12, 2038.6999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68977952E12, 3019.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68977952E12, 2568.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68977952E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68977952E12, 1146.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68977952E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 9.0, "minX": 29.0, "maxY": 1818.0, "series": [{"data": [[68.0, 1278.0], [150.0, 23.0], [85.0, 1470.0], [84.0, 1324.0], [45.0, 1142.0], [88.0, 1683.5], [92.0, 1066.0], [104.0, 653.0], [108.0, 1341.0], [29.0, 9.0], [59.0, 1818.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 29.0, "maxY": 1816.0, "series": [{"data": [[68.0, 1275.0], [150.0, 21.0], [85.0, 1469.0], [84.0, 1321.0], [45.0, 1140.0], [88.0, 1679.5], [92.0, 1064.5], [104.0, 638.5], [108.0, 1339.0], [29.0, 7.0], [59.0, 1816.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68977952E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68977952E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68977952E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68977952E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68977952E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68977952E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68977952E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68977952E12, 16.666666666666668]], "isOverall": false, "label": "movies-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68977952E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68977952E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68977952E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68977952E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

