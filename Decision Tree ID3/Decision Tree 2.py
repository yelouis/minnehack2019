#Done in Python 2.7
import math
import random
#Global Variables
all_examples = []
attributes = []
training = []
testing = []


class Node: #Node class, each node is defined with a label and holds a dictionary of children
    def __init__(self, label):
        self.label = label
        self.children = {} #Takes the example as the key and the children of that node as the value


def filereader(filetaken): #Reads the file and makes a list of all examples and an adjustable training and testing set
    file = open(filetaken, 'r')

    global attributes
    attributes = file.readline().strip().split(',')
    attributes.pop(0)

    for line in file:
        line = line.strip().split(',')
        all_examples.append(line)

    trainingproportion = 0.5

    random.shuffle(all_examples)
    global training
    training = all_examples[:int(trainingproportion * len(all_examples))]
    global testing
    testing = all_examples[int(trainingproportion * len(all_examples)):]


def entropy(examples): #calculates entropy given a list of examples
    entropy = 0
    result = {}
    for a in examples:
        if a[0] in result:
            result[a[0]] += 1
        else:
            result[a[0]] = 1.0

    for key in result.keys():
        entropy -= (result[key] / len(examples)) * math.log(result[key] / len(examples), 2)

    return entropy


def attdictcreator(examples, att): #creates a dictionary in which the given attribute is the key and list of examples with that attribute is the value
    examplesdict = {}
    attval = []
    index = attributes.index(att)
    for value in examples:
        attval.append(value[index + 1])

    attvalset = set(attval)

    for value in attvalset:
        cvalues = [day for day in examples if day[index + 1] == value]
        if len(cvalues) != 0:
            examplesdict[value] = cvalues

    return examplesdict


def gain(examples, att): #calculates info gain given a list of examples and an attribute
    examplesdict = attdictcreator(examples, att)
    expred = entropy(examples)

    for key in examplesdict.keys():
         expred -= len(examplesdict[key]) / (len(examples) * 1.0) * entropy(examplesdict[key])

    return expred


def mode(examples): #finds the most common category given a list of examples
    vallist = []
    for value in examples:
        vallist.append(value[0])
    return max(set(vallist), key = vallist.count)


def id3(examples, attl): #id3 formula, returns the root of the tree at first then recursively builds the tree
    if len(set([examples[x][0] for x in range(len(examples))])) <=1:
        return Node(examples[0][0])

    if len(attl) == 0:
        return Node(mode(examples))

    biggestgain = 0
    for att in attl:
        gains = gain(examples, att)
        if gains >= biggestgain:
            biggestgain = gains
            biggestatt = att

    node = Node(biggestatt)
    examplesdict = attdictcreator(examples, biggestatt)
    for key in examplesdict.keys():
        if len(examplesdict[key]) == 0:
            child = Node(mode(examplesdict.values()))
            node.children[key] = child
        else:
            copyattl = attl[:]
            copyattl.remove(biggestatt)
            child = id3(examplesdict[key], copyattl)
            node.children[key] = child
    return node


def display(node, curindent): #displays the tree made by id3
    indentation = curindent * '   '
    if len(node.children) == 0:
        print indentation + node.label
    else:
        print indentation + node.label + '?'
        for attval in node.children.keys():
            print indentation + '  ' + attval
            display(node.children[attval], curindent + 2)


def tester(node, example): #determines whether the examples has been categorized correctly
    if len(node.children) == 0:
        if node.label == example[0]:
            return True
        else:
            return False

    attpos = attributes.index(node.label) + 1
    if example[attpos] in node.children:
        return tester(node.children[example[attpos]], example)
    else:
        print 'Catch: KeyError'
        return False


def percentcorrect(tree, testlist): #calculates the percentage of cases gotten correct in the decision tree
    correctcase = 0
    for case in testlist:
        if tester(tree, case):
            correctcase += 1
    accuracy = float(correctcase) / len(testlist)
    return accuracy

#running the functions to test
filereader('Shrimp'
           '.txt')
#print entropy(all_values)
#print gain(all_examples, 'class')
display(id3(all_examples, attributes), 0)
print percentcorrect(id3(training, attributes), testing)
