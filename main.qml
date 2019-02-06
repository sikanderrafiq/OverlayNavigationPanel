import QtQuick 2.0
import QtQuick.Window 2.2
import Widgets 1.0 as AtlasQml

import "RootController.js" as Root

Window {
    id: rootWindow
    visible: true

    width:  1024
    height: 768
    color:  "magenta"

    OverlayNavigationPanel
    {
        id: navigationPanel
        visible: true

        anchors.fill: parent

        Component.onCompleted:
        {
            //rootWindow.showFullScreen();
            pushViewController(new Root.RootController(), true)
        }
    }

    AtlasQml.Button
    {
        id:     btnNavigateView
        text:   "Navigate View"
        fontSize: 16
    }

    AtlasQml.Button
    {
        id:     btnPopView
        text:   "Pop View"
        fontSize: 16
        anchors.left: btnNavigateView.right
        onClicked: {
            navigationPanel.popViewController();
        }
    }

}

