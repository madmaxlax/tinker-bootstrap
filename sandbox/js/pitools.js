
$(document).ready(function() {
	$("#MainContent_CurrentValuesTable").tablesorter({ theme: 'blue', cssHeader: "tableHeader", headers:
       {
           0: { sorter: "text" }
       }
    });
});
console.log("test");
function BindFunctions() {
    //$("#SortTableLink").click(sorttab);
    $("#MainContent_CurrentValuesTable").tablesorter({ theme: 'blue', cssHeader: "tableHeader", headers:
       {
           0: { sorter: "text" }
       }
    });
}