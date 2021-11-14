print "hello world" # Python 2 syntax
print("hello world") # Python 3 syntax

float = 1.5e2 # equates to 150
quotient = 7/2 # equates to 3, integer rounded down
quotient = 7./2 # all following equate to 3.5
quotient = 7/2.
quotient = 7./2.
quotient = float(7)/2

# When assigned to variable, triple quotes can make multi-line string
address_string = """136 Whowho Rd
Apt 7
Whosville, WZ 44494"""

"""When not assigned to variable, 
triple quotes create
multi-line comments"""

string = 'There\'s a snake in my boot!' # Need to add \ to designate fix quote
string = "There's a snake in my boot!" # No Need to add \

c = "cats"[0] # c is 0th (1st) character in cats
n = "Ryan"[3] # n is 3rd (4th) character in Ryan

parrot = "Norwegian Blue"
print len(parrot) # Prints length of parrot (14)
print parrot.lower() # Prints "norwegian blue"
print parrot.upper() # Prints "NORWEGIAN BLUE"

# The following prints "Let's not to go Camelot, 'Tis a silly place."
string_1 = "Camelot"
string_2 = "place"
print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)

day = 6
print "03 - %s - 2019" %  (day)
# 03 - 6 - 2019
print "03 - %02d - 2019" % (day)
# 03 - 06 - 2019
# in %02d, 0 means pad with zeros, 2 means 2 characters wide, d means number is signed integer

from datetime import datetime # Imports datetime library
now = datetime.now()
# following prints current date as mm/dd/yyyy hh:mm:ss
print '%02d/%02d/%04d %02d:%02d:%02d' % (now.month, now.day, now.year, now.hour, now.minute, now.second)

# In boolean logic, not is evaluated first, then and, then or

print 'Welcome to the Pig Latin Translator!'
pyg = 'ay'
original = raw_input('Enter a word:')
if len(original) > 0 and original.isalpha(): # isalpha() returns true if all characters are non-numeric
  word = original.lower()
  first = word[0]
  new_word = word + first + pyg
  new_word = new_word[1:len(new_word)]
  print original
  print new_word
else:
  print 'empty'

# Tip Calculator
def tax(bill):
  """Adds 8% tax to a restaurant bill."""
  bill *= 1.08
  print "With tax: %f" % bill
  return bill

def tip(bill):
  """Adds 15% tip to a restaurant bill."""
  bill *= 1.15
  print "With tip: %f" % bill
  return bill
  
meal_cost = 100
meal_with_tax = tax(meal_cost)
meal_with_tip = tip(meal_with_tax)


# A few dfferent ways to use sqrt function
import math
square = math.sqrt(number) # This way I could have a sqrt function of my own in the program

from math import sqrt
square = sqrt(number)

from math import * # Import all, this fills up memoryview
square = sqrt(number)

#Lists
# In Python, when portion of list is specified, include element at first index and exclude element with second index
suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]
# The first and second items (index zero and one)
first = suitcase[0:2] # = ["sunglasses, "hat"]

animals = "catdogfrog"
# The first three characters of animals
cat = animals[:3]
# The fourth through sixth characters
dog = animals[3:6]
# From the seventh character to the end
frog = animals[6:]

# Replace "duck" with "cobra"
animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = animals.index("duck")
animals.insert(duck_index, "cobra")

# Dictionaries
residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}
print residents['Puffin'] # Prints Puffin's room number: 104
print residents["Sloth"] # Prints 105

def compute_bill(food):
	total = 0
	for i in food:
	if stock[i] > 0:
		total += prices[i]
		stock[i] -= 1
	return total

# Lists and grade calculator
lloyd = {
  "name": "Lloyd",
  "homework": [90.0, 97.0, 75.0, 92.0],
  "quizzes": [88.0, 40.0, 94.0],
  "tests": [75.0, 90.0]
}
alice = {
  "name": "Alice",
  "homework": [100.0, 92.0, 98.0, 100.0],
  "quizzes": [82.0, 83.0, 91.0],
  "tests": [89.0, 97.0]
}
tyler = {
  "name": "Tyler",
  "homework": [0.0, 87.0, 75.0, 22.0],
  "quizzes": [0.0, 75.0, 78.0],
  "tests": [100.0, 100.0]
}

def average(numbers):
  return float(sum(numbers)) / len(numbers)

# Weighs scores and returns average grade overall
def get_average(student):
  homework = average(student["homework"])
  quizzes = average(student["quizzes"])
  tests = average(student["tests"])
  return homework * 0.1 + quizzes * 0.3 + tests * 0.6

# Returns letter grade of task score
def get_letter_grade(score):
  if score >= 90 :
    return "A"
  elif score >= 80 :
    return "B"
  elif score >= 70 :
    return "C"
  elif score >= 60 :
    return "D"
  else :
    return "F"

# Returns average score of all students in class_list
def get_class_average(class_list):
  results = []
  for student in class_list:
    results.append(get_average(student))
  return average(results)


students = [alice, lloyd, tyler]
print get_class_average(students) # Prints average score (83.86667)
print get_letter_grade(get_class_average(students)) # Prints letter grade of average score (B)

# Lists and Functions
n = [1, 3, 5]
n.pop(0) # Remove the first item in the list: n = [3, 5]
n.pop()  # Remove the last item in the list: n = [1, 3]
n.remove(1) # Remove 1 from the list: n = [3, 5]

range(6) # range(stop) => [0, 1, 2, 3, 4, 5]
range(1, 6) # range(start, stop) => [1, 2, 3, 4, 5]
range(1, 6, 3) # range(start, stop, step) => [1, 4]

# BATTLESHIP!
letters = ['a', 'b', 'c', 'd']
print " ".join(letters) # => "a b c d"
print "---".join(letters) # => "a---b---c---d"

# Generate board
board = []
for i in range(5):
  board.append(["O"] * 5) # => ['O', 'O', 'O', 'O', 'O']
''' board = [['O', 'O', 'O', 'O', 'O'],
			 ['O', 'O', 'O', 'O', 'O'],
			 ['O', 'O', 'O', 'O', 'O'],
			 ['O', 'O', 'O', 'O', 'O'],
			 ['O', 'O', 'O', 'O', 'O']
'''

def print_board(board_in):
  for row in board_in:
    row = " ".join(row)
    
print_board(board)
''' =>  O O O O O
		O O O O O
		O O O O O
		O O O O O
		O O O O O
'''

def random_row(board):
  return randint(0, len(board) - 1)

def random_col(board):
  return randint(0, len(board[0]) - 1)

# Generate random row and col for board, and print solution to console
ship_row = random_row(board)
ship_col = random_col(board)
print ship_row
print ship_col

for turn in range(4):
  print "Turn", turn + 1 # Print turn number
  guess_row = int(raw_input("Guess Row: "))
  guess_col = int(raw_input("Guess Col: "))

  if guess_row == ship_row and guess_col == ship_col:
    print "Congratulations! You sunk my battleship!"
    break # End loop and game
  else:
    if guess_row not in range(5) or guess_col not in range(5):
	#if (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
	  print "Oops, that's not even in the ocean."
    elif(board[guess_row][guess_col] == "X"):
      print "You guessed that one already."
    else:
      print "You missed my battleship!"
      board[guess_row][guess_col] = "X"
    if turn == 3:
      print "Game Over"
    print_board(board)


# Loops
# while/else:
import random
print "Lucky Numbers! 3 numbers will be generated."
print "If one of them is a '5', you lose!"
count = 0
while count < 3:
  num = random.randint(1, 6)
  print num
  if num == 5:
    print "Sorry, you lose!"
    break
  count += 1
# while/else : else will execute whenever while is false
# Can occur if while is never entered, or if loop exits normally (not using break)
else:
  print "You win!"

# Enumerate
choices = ['pizza', 'pasta', 'salad', 'nachos']
print 'Your choices are:'
for index, item in enumerate(choices):
  print index + 1, item # index + 1 cause item 0 looks unnatural
''' =>
Your choices are:
1 pizza
2 pasta
3 salad
4 nachos
'''

# Zip
list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]
# Compare pairs of elements when passed two or more lists, stops at end of shortest list
for a, b in zip(list_a, list_b):
  if a > b:
    print a
  else:
    print b
# => 3, 9, 17, 15, 30

# for/else:
fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']
print 'You have...'
for f in fruits:
  if f == 'tomato':
    print 'A tomato is not a fruit!' # (It actually is.)
    break
  print 'A', f
else: # Never enters because break happens first, unlike while/else loop
  print 'A fine selection of fruits!'
# => You have... A banana, A apple, A orange, A tomato is not a fruit!

# Returns sum of individual digits of n (n=1234 returns 10)
def digit_sum(n):
	sum = 0
	for i in range(len(str(n))):
		sum += n % 10
		n = n // 10 # Floor divide to remove rightmost digit
	return sum

# Returns factorial of x (x=3 returns 1*2*3=6)
def factorial(x):
	fac = x != 0
	for i in range(1, x + 1):
		fac = fac * i
	return fac

# Returns true if x is prime
def is_prime(x):
	if x <= 1:
		return False
	for n in range(2, x - 1):
		if x % n == 0:
			return False
	return True

# Returns reversed text input
def reverse(text):
	rev = ""
	for i in range(len(text) - 1, -1, -1):
		rev += text[i]
	return rev

# Returns string minus vowels (text="abcd" returns "bcd")
def anti_vowel(text):
	ret = ""
	for i in range(len(text)):
		if text[i].lower() not in ['a', 'e', 'i', 'o', 'u']:
			ret += text[i]
	return ret

# Returns score of scrabble word (word="Helix" returns 4+1+1+1+8=15)
score = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
         "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
         "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
         "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
         "x": 8, "z": 10}

def scrabble_score(word):
	x = 0
	for i in range(len(word)):
		x += score[word[i].lower()]
	return x

# Return text with censored word replaced with *'s
def censor(text, word):
    words = text.split() # Split text into list of words
    count = 0
    for i in words: # Iterate through all words
        if i == word: # If current word is censored word
            words[count] = '*' * len(word) # Replace with ***
        count += 1
    return ' '.join(words) # Join all words (including those replaced by *'s)

# Returns number of times item occurs in sequence list (count([1, 2, 1, 1], 1) returns 3)
def count(sequence, item):
	count = 0
	for i in sequence:
		if i == item:
			count += 1
	return count