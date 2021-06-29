#include "RegularSentenceWorker.h"

#include <QChar>
#include <QDebug>
#include <QStack>

bool RegularSentenceWorker::evaluate(const QString& args) {
    if (args.isEmpty()) {
        return false;
    }

    if (args.size() == 1) {
        return args.toInt() > 0;
    }

    QStack<QString> stack;
    for (int i = args.size() - 1; i >= 0; i --) {
        stack.push(args.at(i));
    }
    int result = 0;
    QString op;
    QString last;
    while (stack.size() > 1) {
        QString curr = stack.pop();
        if (isOperator(curr)) {
            op = curr;
            QString curr = stack.pop();
            if (op == "*") {
                result = last.toInt() * curr.toInt();
            }
            else if (op == "+") {
                result = last.toInt() + curr.toInt();
            }
            op = "";
            stack.push(QString::number(result));
        } 
        else {
            last = curr;
        }
    }
    QString strResult = stack.pop();
    return strResult.toInt() > 0;
}
