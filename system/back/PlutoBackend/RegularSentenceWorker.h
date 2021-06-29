#pragma once

#include <QString>
#include "ISentenceWorker.h"

using namespace std;

class RegularSentenceWorker : public ISentenceWorker {
    private:
        bool evaluate(const QString& args);
};