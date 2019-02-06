import QtQuick 2.0
import Widgets 1.0 as AtlasQml
import "OverlayNavigationPanel.js" as MainScript

Item
{
    id: container;

    property int animationDuration: 500

    function initializeWithRootViewController(root) { MainScript.initializeWithRootViewController(root); }

    function pushViewController(controller, animated) { MainScript.pushViewController(controller, animated); }

    function popViewController() { MainScript.popViewController(); }

    function popToView(name) { MainScript.popToView(name); }

    function topViewController() { return MainScript.topViewController(); }

    function createView(name, view)
    {
        var qml = "import QtQuick 2.0;"
                + " import Panels 1.0 as AtlasQml;"
                + " %1 { objectName:\"%2\"; }".arg(view).arg(name);
        return Qt.createQmlObject(qml, container);
    }

    function handleKeyPress(key, isRepeat) { MainScript.handleKeyPress(key, isRepeat); }

    PropertyAnimation
    {
        id:         leftToCenter;
        property:   "x";
        duration:   animationDuration
    }

    PropertyAnimation
    {
        id:         centerToLeft;
        property:   "x";
        duration:   animationDuration
        onRunningChanged: MainScript.onCenterToLeftAnimationChanged(running);
    }

    Timer
    {
        /*
         * When started, this posts an event on the main event queue
         * which, when handled in onTriggered, sets the focus to the
         * view controller at the top of the stack.
         */

        id: setTopViewFocusTimer;
        interval: 1;
        onTriggered:
        {
            console.log("Timer: onTriggered")
            var controller = topViewController();
            if ((controller != null) && (controller.view !== undefined))
            {
                controller.view.forceActiveFocus();
            }
        }
    }

}
