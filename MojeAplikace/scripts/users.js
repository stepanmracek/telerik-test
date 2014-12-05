(function () {
    myApp.views.users = {
        show: function () {
            myApp.models.filter.bind("change", function (e) {
                var filterValue = myApp.models.filter["filterValue"].trim();
                if (filterValue == "") {
                    myApp.models.users.ds.filter([])
                } else {
                    myApp.models.users.ds.filter({
                        logic: "or",
                        filters: [{
                            field: "name",
                            operator: "contains",
                            value: filterValue
                        }, {
                            field: "surname",
                            operator: "contains",
                            value: filterValue
                        }]
                    });
                }
            });

            kendo.bind($("#filter"), myApp.models.filter);
        },
        hide: function () {}
    }
}());