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

eval("$(document).ready(function () {\n  $('#status-filter').on('change', function () {\n    var status = $(this).val();\n    var url = '/requests/filter';\n    $.ajax({\n      url: url,\n      data: {\n        status: status\n      },\n      success: function success(data) {\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(data, 'text/html');\n        var list = doc.getElementById('requests-list');\n        var myListContainer = document.getElementById('requests-list');\n        myListContainer.innerHTML = new XMLSerializer().serializeToString(list);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmlsdGVyLmpzLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsInN0YXR1cyIsInZhbCIsInVybCIsImFqYXgiLCJkYXRhIiwic3VjY2VzcyIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsImxpc3QiLCJnZXRFbGVtZW50QnlJZCIsIm15TGlzdENvbnRhaW5lciIsImlubmVySFRNTCIsIlhNTFNlcmlhbGl6ZXIiLCJzZXJpYWxpemVUb1N0cmluZyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpbHRlci5qcz84Y2EyIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc3RhdHVzLWZpbHRlcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzdGF0dXMgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgdXJsID0gJy9yZXF1ZXN0cy9maWx0ZXInO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiB7IHN0YXR1czogc3RhdHVzIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jLmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0cy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RzLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBteUxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhsaXN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFDMUJGLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVk7SUFDekMsSUFBSUMsTUFBTSxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLEdBQUcsRUFBRTtJQUMxQixJQUFJQyxHQUFHLEdBQUcsa0JBQWtCO0lBQzVCTixDQUFDLENBQUNPLElBQUksQ0FBQztNQUNIRCxHQUFHLEVBQUVBLEdBQUc7TUFDUkUsSUFBSSxFQUFFO1FBQUVKLE1BQU0sRUFBRUE7TUFBTyxDQUFDO01BQ3hCSyxPQUFPLEVBQUUsaUJBQVVELElBQUksRUFBRTtRQUNyQixJQUFNRSxNQUFNLEdBQUcsSUFBSUMsU0FBUyxFQUFFO1FBQzlCLElBQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxlQUFlLENBQUNMLElBQUksRUFBRSxXQUFXLENBQUM7UUFDckQsSUFBTU0sSUFBSSxHQUFHRixHQUFHLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBTUMsZUFBZSxHQUFHZixRQUFRLENBQUNjLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDaEVDLGVBQWUsQ0FBQ0MsU0FBUyxHQUFHLElBQUlDLGFBQWEsRUFBRSxDQUFDQyxpQkFBaUIsQ0FBQ0wsSUFBSSxDQUFDO01BQzNFO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./resources/js/filter.js\n");

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