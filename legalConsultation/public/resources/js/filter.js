/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/filter.js":
/*!********************************!*\
  !*** ./resources/js/filter.js ***!
  \********************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('#status-filter').on('change', function () {\n    var status = $(this).val();\n    var url = '/requests/filter';\n    $.ajax({\n      url: url,\n      data: {\n        status: status\n      },\n      success: function success(data) {\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(data, 'text/html');\n        var list = doc.getElementById('requests-list');\n        var myListContainer = document.getElementById('requests-list');\n        myListContainer.innerHTML = new XMLSerializer().serializeToString(list);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwic3RhdHVzIiwidmFsIiwidXJsIiwiYWpheCIsImRhdGEiLCJzdWNjZXNzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwibGlzdCIsImdldEVsZW1lbnRCeUlkIiwibXlMaXN0Q29udGFpbmVyIiwiaW5uZXJIVE1MIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWx0ZXIuanM/OGNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3N0YXR1cy1maWx0ZXInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3RhdHVzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHVybCA9ICcvcmVxdWVzdHMvZmlsdGVyJztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogeyBzdGF0dXM6IHN0YXR1cyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhkYXRhLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvYy5nZXRFbGVtZW50QnlJZCgncmVxdWVzdHMtbGlzdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG15TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0cy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgbXlMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcobGlzdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFZO0VBQzFCRixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0csRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO0lBQ3pDLElBQUlDLE1BQU0sR0FBR0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxHQUFHLEVBQUU7SUFDMUIsSUFBSUMsR0FBRyxHQUFHLGtCQUFrQjtJQUM1Qk4sQ0FBQyxDQUFDTyxJQUFJLENBQUM7TUFDSEQsR0FBRyxFQUFFQSxHQUFHO01BQ1JFLElBQUksRUFBRTtRQUFFSixNQUFNLEVBQUVBO01BQU8sQ0FBQztNQUN4QkssT0FBTyxFQUFFLGlCQUFVRCxJQUFJLEVBQUU7UUFDckIsSUFBTUUsTUFBTSxHQUFHLElBQUlDLFNBQVMsRUFBRTtRQUM5QixJQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csZUFBZSxDQUFDTCxJQUFJLEVBQUUsV0FBVyxDQUFDO1FBQ3JELElBQU1NLElBQUksR0FBR0YsR0FBRyxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQU1DLGVBQWUsR0FBR2YsUUFBUSxDQUFDYyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ2hFQyxlQUFlLENBQUNDLFNBQVMsR0FBRyxJQUFJQyxhQUFhLEVBQUUsQ0FBQ0MsaUJBQWlCLENBQUNMLElBQUksQ0FBQztNQUMzRTtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9maWx0ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/filter.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/filter.js"]();
/******/ 	
/******/ })()
;