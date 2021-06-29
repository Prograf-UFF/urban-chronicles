#pragma once

#include <QString>
#include "ISentenceWorker.h"

using namespace std;

class SentenceParser {

    private:
        ISentenceWorker* m_sentence;

    public:
        SentenceParser(ISentenceWorker* sentence);
        ~SentenceParser();

        bool evaluate(const QString& sentence);

};