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

/***/ "./resources/js/filter_date.js":
/*!*************************************!*\
  !*** ./resources/js/filter_date.js ***!
  \*************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('#dateFilter').on('click', function () {\n    var dates = {\n      'dateFrom': $('#dateFrom').val(),\n      'dateTo': $('#dateTo').val()\n    };\n    var url = '/requests/filter_date';\n    $.ajax({\n      url: url,\n      data: {\n        dates: dates\n      },\n      success: function success(data) {\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(data, 'text/html');\n        var list = doc.getElementById('requests-list');\n        var myListContainer = document.getElementById('requests-list');\n        myListContainer.innerHTML = new XMLSerializer().serializeToString(list);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmlsdGVyX2RhdGUuanMuanMiLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZGF0ZXMiLCJ2YWwiLCJ1cmwiLCJhamF4IiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJsaXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJteUxpc3RDb250YWluZXIiLCJpbm5lckhUTUwiLCJYTUxTZXJpYWxpemVyIiwic2VyaWFsaXplVG9TdHJpbmciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWx0ZXJfZGF0ZS5qcz9mNDhhIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZGF0ZUZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGVzID0ge1xuICAgICAgICAgICAgJ2RhdGVGcm9tJzogJCgnI2RhdGVGcm9tJykudmFsKCksXG4gICAgICAgICAgICAnZGF0ZVRvJzogJCgnI2RhdGVUbycpLnZhbCgpLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgdXJsID0gJy9yZXF1ZXN0cy9maWx0ZXJfZGF0ZSc7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IHsgZGF0ZXM6IGRhdGVzIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jLmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0cy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RzLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBteUxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhsaXN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFDMUJGLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ3JDLElBQUlDLEtBQUssR0FBRztNQUNSLFVBQVUsRUFBRUosQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDSyxHQUFHLEVBQUU7TUFDaEMsUUFBUSxFQUFFTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNLLEdBQUc7SUFDOUIsQ0FBQztJQUNELElBQUlDLEdBQUcsR0FBRyx1QkFBdUI7SUFDakNOLENBQUMsQ0FBQ08sSUFBSSxDQUFDO01BQ0hELEdBQUcsRUFBRUEsR0FBRztNQUNSRSxJQUFJLEVBQUU7UUFBRUosS0FBSyxFQUFFQTtNQUFNLENBQUM7TUFDdEJLLE9BQU8sRUFBRSxpQkFBVUQsSUFBSSxFQUFFO1FBQ3JCLElBQU1FLE1BQU0sR0FBRyxJQUFJQyxTQUFTLEVBQUU7UUFDOUIsSUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLGVBQWUsQ0FBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQztRQUNyRCxJQUFNTSxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFNQyxlQUFlLEdBQUdmLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUNoRUMsZUFBZSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMsYUFBYSxFQUFFLENBQUNDLGlCQUFpQixDQUFDTCxJQUFJLENBQUM7TUFDM0U7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./resources/js/filter_date.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/filter_date.js"]();
/******/ 	
/******/ })()
;