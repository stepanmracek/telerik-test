function UsersService() {
    this.getUsers = function () {
        return [{
            id: 1,
            name: "Jane",
            surname: "Doe",
            age: 30,
            image: "http://a.dryicons.com/images/icon_sets/shine_icon_set/png/256x256/black_business_user.png"
        }, {
            id: 2,
            name: "John",
            surname: "Doe",
            age: 33,
            image: "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811783.png"
        }];
    }
}


(function () {
    window.myApp = window.myApp || {};

    myApp.models = {
        users: {
            title: "User list",
            ds: new kendo.data.DataSource({
                data: new UsersService().getUsers()
            }),
            filterModel: new kendo.data.ObservableObject({
                filterValue: ""
            })
        }
    };

    myApp.models.users.filterModel.bind("change", function (e) {
        filterValue = myApp.models.users.filterModel["filterValue"].trim();
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
                    }
                ]
            });
        }
    });

    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();
        myApp.app = new kendo.mobile.Application($(document.body), {
            initial: "views/users.html"
        });

        kendo.bind($("#filter"), myApp.models.users.filterModel);

        $("#users").kendoMobileListView({
            dataSource: myApp.models.users.ds,
            click: function (e) {
                alert(e.dataItem.name);
            },
            template: "#:name# #:surname# #:age#"            
        });

        /*$("#users").data("kendoMobileListView").bind("click", function (e) {
            alert(sender.select());
        });*/

    }, false);

    window.app = app;
}());