#include <QGuiApplication>
#include <QQuickImageProvider>
#include <QtGlobal>
#include <QtQml>

//static const QString IMAGE_PATH = "/home/precor/workdir/precor/mpaqtapp/resources/images/";
static const QString IMAGE_PATH = "D:/mpaqtapp/resources/images/";

class QmlUnitTestImageProvider : public QQuickImageProvider
{
public:
    QmlUnitTestImageProvider();

    QPixmap requestPixmap(const QString &id, QSize *size, const QSize &requestedSize);
};

QmlUnitTestImageProvider::QmlUnitTestImageProvider() : QQuickImageProvider(QQmlImageProviderBase::Pixmap)
{
    Q_ASSERT_X(QDir(IMAGE_PATH).exists(), "QDeclarativeImageProvider", "$WORKDIR is not pointing to a valid directory.");
}

QPixmap QmlUnitTestImageProvider::requestPixmap(const QString &id, QSize *size, const QSize &requestedSize)
{
    QPixmap returnMap(IMAGE_PATH + id);

    if (!returnMap.isNull() && requestedSize.isValid()) {
        returnMap = returnMap.scaled(requestedSize, Qt::IgnoreAspectRatio, Qt::SmoothTransformation);
    }

    if (size) {
        *size = returnMap.size();
    }

    return returnMap;
}

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
    //engine.addImportPath("/home/precor/workdir/precor/mpaqtapp/qml/modules");
    engine.addImportPath("D:/mpaqtapp/qml/modules");

    engine.addImageProvider(QLatin1String("app"), new QmlUnitTestImageProvider);

    engine.load(QUrl(QStringLiteral("main.qml")));

    return app.exec();
}

