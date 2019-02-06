TEMPLATE = app

QT += qml quick
CONFIG += c++11

SOURCES += main.cpp

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

unix:QMAKE_RPATHDIR += $$[QT_INSTALL_PREFIX]/lib

# Default rules for deployment.

DISTFILES += \
    main.qml \
    RootController.js \
    qxTranslate.js \
    ListPanel.qml \
    ItemController.js \
    OverlayNavigationPanel.qml \
    OverlayNavigationPanel.js \
    SalmanController.js \
    SikanderController.js \
    AdnanController.js

