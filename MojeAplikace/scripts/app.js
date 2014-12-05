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
    
    myApp.views = {}

    myApp.models = {
        users: {
            title: "User list",
            ds: new kendo.data.DataSource({
                data: new UsersService().getUsers()
            })
        },
        filter: new kendo.data.ObservableObject({
            filterValue: ""
        })
    };

    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();
        myApp.app = new kendo.mobile.Application($(document.body), {
            initial: "views/users.html",
            transition: 'slide',
            skin: 'flat'
        });

    }, false);

    
}());