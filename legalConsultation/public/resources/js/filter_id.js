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

/***/ "./resources/js/filter_id.js":
/*!***********************************!*\
  !*** ./resources/js/filter_id.js ***!
  \***********************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('#user_id_filter').on(\"click\", function () {\n    var user_id = $(this).val();\n    var url = '/requests/filter_id';\n    $.ajax({\n      url: url,\n      data: {\n        user_id: user_id\n      },\n      success: function success(data) {\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(data, 'text/html');\n        var list = doc.getElementById('requests-list');\n        var myListContainer = document.getElementById('requests-list');\n        myListContainer.innerHTML = new XMLSerializer().serializeToString(list);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmlsdGVyX2lkLmpzLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsInVzZXJfaWQiLCJ2YWwiLCJ1cmwiLCJhamF4IiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJsaXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJteUxpc3RDb250YWluZXIiLCJpbm5lckhUTUwiLCJYTUxTZXJpYWxpemVyIiwic2VyaWFsaXplVG9TdHJpbmciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWx0ZXJfaWQuanM/NzA5MyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3VzZXJfaWRfZmlsdGVyJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB1c2VyX2lkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHVybCA9ICcvcmVxdWVzdHMvZmlsdGVyX2lkJztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZGF0YSwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RzLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBteUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdHMtbGlzdCcpO1xuICAgICAgICAgICAgICAgIG15TGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGxpc3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUMxQkYsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUN6QyxJQUFJQyxPQUFPLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssR0FBRyxFQUFFO0lBQzNCLElBQUlDLEdBQUcsR0FBRyxxQkFBcUI7SUFDL0JOLENBQUMsQ0FBQ08sSUFBSSxDQUFDO01BQ0pELEdBQUcsRUFBRUEsR0FBRztNQUNQRSxJQUFJLEVBQUU7UUFBRUosT0FBTyxFQUFFQTtNQUFRLENBQUM7TUFDMUJLLE9BQU8sRUFBRSxpQkFBVUQsSUFBSSxFQUFFO1FBQ3JCLElBQU1FLE1BQU0sR0FBRyxJQUFJQyxTQUFTLEVBQUU7UUFDOUIsSUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLGVBQWUsQ0FBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQztRQUNyRCxJQUFNTSxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFNQyxlQUFlLEdBQUdmLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUNoRUMsZUFBZSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMsYUFBYSxFQUFFLENBQUNDLGlCQUFpQixDQUFDTCxJQUFJLENBQUM7TUFDM0U7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./resources/js/filter_id.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/filter_id.js"]();
/******/ 	
/******/ })()
;