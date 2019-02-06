function OverlayNavigationController()
{
    var m_controllers       = new Array();
    var m_zorderVal         = 600;
    var m_controllerBeingPopped;

    this.initializeWithRootViewController = function(rootController)
    {
        while (m_controllers.length > 0)
        {
            m_controllers[m_controllers.length - 1].controller.view.visible = false;
            m_controllers[m_controllers.length - 1].controller.view.destroy();
            m_controllers.pop();
        }

        if (rootController !== undefined && rootController !== null)
        {
            this.pushViewController(rootController, false);
            setTopViewFocusTimer.start();
        }
    }

    this.pushViewController = function(newController, animated)
    {
        if (animated && (leftToCenter.running || centerToLeft.running))
            return;

        var oldController = this.topViewController();

        m_controllers.push(new ViewController(newController, animated));

        if (newController.view === undefined) {
            newController.view   = newController.loadView();
            newController.view.z = m_zorderVal--; // set zorder of the view

            if (newController.viewDidLoad !== undefined)
                newController.viewDidLoad();
        }

        newController.view.visible = true;

        if (animated)
        {
            bringViewToCenter(newController);
            if (oldController !== null) shoveViewToLeft(oldController);
        }
        else
        {
            newController.view.x = 0;

            if (oldController !== null)
            {
                oldController.view.visible = false;
            }
        }

        if (newController.viewWillAppear !== undefined)
            newController.viewWillAppear();
    }

    /*
     * SR: This function is used to bring new view into focus
     */
    function bringViewToCenter(newController)
    {
        leftToCenter.from   = -newController.view.width;
        leftToCenter.to     = 0;
        leftToCenter.target = newController.view;
        leftToCenter.start();
    }

    /*
     * SR: This function gets view out of focus.
     */
    function shoveViewToLeft(oldController)
    {
        centerToLeft.from   = 0;
        centerToLeft.to     = -oldController.view.width;
        centerToLeft.target = oldController.view;
        centerToLeft.start();
    }

    this.popViewController = function()
    {
        if (m_controllers.length > 1)
        {
            var controller = this.topViewController();
            var animated   = m_controllers[m_controllers.length - 1].animated;

            if (animated && (leftToCenter.running || centerToLeft.running))
                return;

            m_controllers.pop();
            m_zorderVal++; //inc counter as one view poped up

            if (animated)
            {
                m_controllerBeingPopped = controller;
                shoveViewToLeft(controller);
                bringViewToCenter(this.topViewController());
            }
            else
            {
                controller.view.visible = false;
                if (controller.viewWillUnload !== undefined)
                    controller.viewWillUnload();
                controller.view.destroy();
                controller.view = undefined;
                this.topViewController().view.visible = true;
            }

            if (this.topViewController().viewWillAppear !== undefined)
                this.topViewController().viewWillAppear();
        }
    }

    // SR: cleanup code when view is popped up
    // calling viewWillUnload func and destroying target
    this.onCenterToLeftAnimationChanged = function(running)
    {
        // only called when m_controllerBeingPopped is set
        // and animation is completed
        if (!running && m_controllerBeingPopped !== undefined)
        {
            if (m_controllerBeingPopped.viewWillUnload !== undefined)
                m_controllerBeingPopped.viewWillUnload();

            m_controllerBeingPopped = undefined;
            centerToLeft.target.destroy();
            centerToLeft.target = null;
        }
    }

    this.popToView = function(name)
    {
        while (m_controllers.length > 0 && this.topViewController().view.objectName !== name)
        {
            var controller = this.topViewController();
            m_controllers.pop();
            controller.view.visible = false;
            if (controller.viewWillUnload !== undefined)
                controller.viewWillUnload();
            controller.view.destroy();
            controller.view = undefined;
        }

        if (this.topViewController() !== null && this.topViewController().view.objectName === name)
        {
            this.topViewController().view.x = 0;
            this.topViewController().view.visible = true;
            if (this.topViewController().viewWillAppear !== undefined)
                this.topViewController().viewWillAppear();
        }
    }

    this.topViewController = function()
    {
        return (m_controllers.length === 0) ? null : m_controllers[m_controllers.length - 1].controller;
    }

    this.handleKeyPress = function(key, isRepeat)
    {
        if (this.topViewController().handleKeyPress !== undefined)
            this.topViewController().handleKeyPress(key, isRepeat);
    }

    function ViewController(controller, animated)
    {
        this.controller = controller;
        this.animated = animated;
    }
}

//--------------------------------------------------------------------------------------------------

var g_navigationController = new OverlayNavigationController();

function initializeWithRootViewController(root)
{
    g_navigationController.initializeWithRootViewController(root);
}

function pushViewController(controller, animated)
{
    g_navigationController.pushViewController(controller, animated);
}

function popViewController()
{
    g_navigationController.popViewController();
}

function popToView(name)
{
    g_navigationController.popToView(name);
}

function topViewController()
{
    return g_navigationController.topViewController();
}

function handleKeyPress(key, isRepeat)
{
    g_navigationController.handleKeyPress(key, isRepeat);
}

function onCenterToLeftAnimationChanged(running)
{
    g_navigationController.onCenterToLeftAnimationChanged(running);
}

//--------------------------------------------------------------------------------------------------
