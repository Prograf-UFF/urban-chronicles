#include <QCoreApplication>
#include <QString>
#include <QDebug>
#include <QDir>

#include <string>
#include <QDebug>

#include "PlutoServer.h"

#include "SentenceParser.h"
#include "RegularSentenceWorker.h"

void test_sentence_parser() {
    ISentenceWorker* sentenceWorker = new RegularSentenceWorker();
    SentenceParser sentence(sentenceWorker);
    QStringList testCase = { "1+1*1", "1+1*1", "0*1+1*0", "", "1+0"};
    QList<bool> testResult = { true, true, false, false, true };
    int i = 0;
    for (QString arg : testCase) {
        bool result = sentence.evaluate(arg);
        bool expected = testResult.at(i);
        if (result == expected) {
            qDebug() << "Passou " << result << " == " << expected << " " << arg;
        } else {
            qDebug() << "N Passou " << result << " == " << expected << " " << arg;
            exit(1);
        }
        i ++;
    }
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    if (argc != 3) {
        qDebug() << "Plutobackend <frontend path> <data_folder>";
        return 1;
    }

    int port = 4200;

    test_sentence_parser();

    QString workingDir = QDir::currentPath();
    qDebug() << workingDir;

    QString visPath = QString(argv[1]);
    QString dataPath = QString(argv[2]);

    PlutoServer* plutoServer = new PlutoServer();
    bool success = plutoServer->startServer(port, visPath, dataPath);

    // stop running
    delete plutoServer;

    return success;
    return 0;
}
