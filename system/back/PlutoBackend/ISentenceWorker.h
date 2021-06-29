#pragma once

#include <QString>

using namespace std;

struct ISentenceWorker {
    virtual bool evaluate(const QString& args) = 0; 
    bool isOperator(const QString& curr) {
        return curr == "+" || curr == "*";
    }
};