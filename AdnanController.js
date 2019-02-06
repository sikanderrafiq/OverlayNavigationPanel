Qt.include("qxTranslate.js");

function AdnanController()
{
    var self = this;

    this.loadView = function()
    {
        return navigationPanel.createView("Adnan's View", "ListPanel");
    }

    this.viewDidLoad = function()
    {
    }

    this.viewWillUnload = function()
    {
    }

    this.viewWillAppear = function()
    {
        this.view.title = qsTranslate("", "Adnan's View");
        this.view.clear();

        this.view.addItemEx
        (
            {
                name: qxTranslate("", "Salman"),
                value: "",
                onSelected: function()
                {
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
                    navigationPanel.pushViewController(new AdnanController(), true)
                }
            }
        );

    }
}

