(function () {
    var ds;
    myApp.views.detail = {
        show: function () {
            var location = window.location.toString();
            var id = parseInt(location.substring(location.lastIndexOf('?') + 4));

            ds = myApp.models.users.ds;
            ds.filter({
                field: "id",
                operator: "eq",
                value: id
            });
            ds.fetch(function () {
                var view = this.view();
                
                var model = view[0];
                kendo.bind($("#detail"), model);
            });

        },
        hide: function () {
            ds.filter([]);
        }
    };
}());