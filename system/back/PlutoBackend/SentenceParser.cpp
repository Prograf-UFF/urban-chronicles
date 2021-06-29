#include "SentenceParser.h"

#include <iostream>
#include <stack>
#include "ISentenceWorker.h"

SentenceParser::SentenceParser (ISentenceWorker* sentenceWorker) {
    m_sentence = sentenceWorker;
}

SentenceParser::~SentenceParser() {

}

bool SentenceParser::evaluate(const QString& sentence) {
    return m_sentence->evaluate(sentence);
}