function ItemController()
{
    var self = this;

    this.loadView = function()
    {
        return navigationPanel.createView("itemView", "AtlasQml.MessagePanel");
    }

    this.viewDidLoad = function()
    {
        console.log("ItemController:viewDidLoad");
    }

    this.viewWillUnload = function()
    {
        console.log("ItemController:viewWillUnload")
    }

    this.viewWillAppear = function()
    {
        console.log("ItemController:viewWillAppear")

        this.view.title = qsTranslate("", "Salman");
        this.view.message = "This is sample text.\n\rThis is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.";
    }

    this.handleBackButtonClicked = function()
    {
        console.log("ItemController: handleBackButtonClicked")
        navigationPanel.popViewController();
    }

}

