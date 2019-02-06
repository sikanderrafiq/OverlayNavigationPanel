Qt.include("qxTranslate.js");
Qt.include("ItemController.js")

Qt.include("SalmanController.js")
Qt.include("SikanderController.js")
Qt.include("AdnanController.js")

function RootController()
{
    var self = this;

    this.loadView = function()
    {
        console.log("loadView");
        return navigationPanel.createView("ListPanelView", "ListPanel");
    }

    this.viewDidLoad = function()
    {
        console.log("viewDidLoad");
    }

    this.viewWillUnload = function()
    {
        console.log("viewWillUnload")
    }

    this.viewWillAppear = function()
    {
        console.log("viewWillAppear")

        this.view.title = qsTranslate("", "ListPanelView");
        this.view.clear();

        this.view.addItemEx
        (
            {
                name: qxTranslate("", "Salman"),
                value: "",
                onSelected: function()
                {
                    console.log("Salman selected...")
                    navigationPanel.pushViewController(new SalmanController(), true)
                }
            }
        );

        this.view.addItemEx
        (
            {
                name: qxTranslate("", "Sikander"),
                value: "",
                onSelected: function()
                {
                    console.log("Sikander selected...")
                    navigationPanel.pushViewController(new SikanderController(), true)
                }
            }
        );

        this.view.addItemEx
        (
            {
                name: qxTranslate("", "Adnan"),
                value: "50",
                onSelected: function()
                {
                    console.log("Adnan selected...")
                    navigationPanel.pushViewController(new AdnanController(), true)
                }
            }
        );

    }
}

