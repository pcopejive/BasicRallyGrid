Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    //items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},

    launch: function() {
        console.log("Our FIRST APP woot!");
        this._loadData();
    },

    // Get data from Rally
    _loadData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                    console.log("got data", myStore, myData, success);
                    this._loadGrid(myStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },

    // Create and show a grid of given stories
    _loadGrid: function(store) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: store,
            columnCfgs: [
                "FormattedID", "Name", "ScheduleState"
            ]
        });

        this.add(myGrid);
        console.log('what is this?', this);
    }

});
