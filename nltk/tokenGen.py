import nltk
from nltk.corpus import stopwords
from nltk.tokenize import wordpunct_tokenize
stop_words = set(stopwords.words('english'))
a = input("Enter a sentence to be tokenized :: ")
b = wordpunct_tokenize(a)
print('Tokenized sentence : ')
print(b)
c = [w for w in b if not w.lower() in stop_words]
print('Sentence without stop-words : ')
print(c)