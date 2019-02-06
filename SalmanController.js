Qt.include("qxTranslate.js");

//Qt.include("SikanderController.js")
//Qt.include("AdnanController.js")


function SalmanController()
{
    var self = this;

    this.loadView = function()
    {
        console.log("loadView");
        return navigationPanel.createView("Salman's View", "ListPanel");
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

        this.view.title = qsTranslate("", "Salman's View");
        this.view.clear();

        this.view.addItemEx
        (
            {
                name: qxTranslate("", "Salman"),
                value: "",
                onSelected: function()
                {
                    console.log("");
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
                    console.log("");
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
                    console.log("");
                    console.log("Adnan selected...")
                    navigationPanel.pushViewController(new AdnanController(), true)
                }
            }
        );

    }
}

