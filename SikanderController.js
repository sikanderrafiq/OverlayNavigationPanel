Qt.include("qxTranslate.js");

function SikanderController()
{
    var self = this;

    this.loadView = function()
    {
        console.log("loadView");
        return navigationPanel.createView("Sikander's View", "ListPanel");
    }

    this.viewDidLoad = function()
    {
        console.log("viewDidLoad");
        //this.view.setWidth(800);
    }

    this.viewWillUnload = function()
    {
        console.log("viewWillUnload")
    }

    this.viewWillAppear = function()
    {
        console.log("viewWillAppear")

        this.view.title = qsTranslate("", "Sikander's View");
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

