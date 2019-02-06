import QtQuick 2.0
import Widgets 1.0 as AtlasQml


Item
{
    id: container

    width: 1024
    height: 768

    property string title: ""
    property string description: ""
    property alias interactive: listBox.interactive
    property alias largeSize: listBox.largeSize
    property alias message: theMessage.text;

    signal itemSelected(int index)

    function clear() { listBox.clear(); }

    function addItem(itemName, itemValue, itemIndent)
    {
        var indent = 0;
        if (itemIndent !== undefined) {
            indent = itemIndent;
        }

        listBox.addItem(itemName, itemValue, indent);
    }

    function addItemEx(item) { listBox.addItemEx(item); }

    function positionViewAtIndex(index, mode) { listBox.positionViewAtIndex(index, mode); }

    function setName(index, name) { listBox.setName(index, name); }

    function setValue(index, value) { listBox.setValue(index, value); }

    function setIndent(index, indent) { listBox.setIndent(index, indent); }

    function count() { return listBox.count(); }

    function itemAt(index) { return listBox.itemAt(index); }

    function selectItem(index) { listBox.selectItem(index); }

    //SR:
    function setWidth(panelwidth) { width = panelwidth; }

    Image
    {
        y: (listBox.y + listBox.height) - 20
        source: listBox.largeSize ? "image://app/largereflection.png" : "image://app/mediumshadow.png"
        anchors.horizontalCenter: parent.horizontalCenter
    }

    AtlasQml.PanelTitle
    {
        x: listBox.x
        anchors.bottom: listBox.top
        anchors.bottomMargin: 5
        titleText: container.title
        descriptionText: container.description
    }

    AtlasQml.ListBox
    {
        id: listBox
        objectName: container.objectName+"_listBox"
        y: 162
        onItemSelected: container.itemSelected(index)
        anchors.horizontalCenter: parent.horizontalCenter
    }

    Text
    {
        id: theMessage
        anchors.horizontalCenter: container.horizontalCenter
        y: 620
        font.pixelSize: 22
        font.family: "Whitney-Medium"
        color: "white"
        wrapMode: Text.WordWrap
        width: 784
    }
}
