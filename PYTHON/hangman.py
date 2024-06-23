#libreria para numeros aleatorios
import random

#funcion para escoger una palabra aleatoria de la lista dada
def random_word():
  words = ["manzana", "banana", "perro", "tiburon", "novia", "auto", "audi"]
  word_random = random.choice(words)
  return word_random

#se muestra un tablero donde se iran agregando letras
def show_table(secret_word, correct_letters):
  table = ""
  for letter in secret_word:
    if letter in correct_letters:
      table += letter
    else:
      table += "_ "
  print(table)

#función sobre como funciona el juego
def game():
  #variables que se utilizaran
  secret_word = random_word()
  correct_letters = []
  chances = 6

  #mientras se tengan oportunidades el ciclo seguira
  while chances > 0:
    show_table(secret_word, correct_letters)
    letter = input("Introduce la letra: ").lower()

    #si la letra ya se ha tecleado entonces se advertira
    if letter in correct_letters:
      print("Ya has introducido esa letra anteriormente")
      continue
    
    #si la letra es correcta se añade y se muestra en el tablero
    if letter in secret_word:
      correct_letters.append(letter)
      if set(correct_letters) == set(secret_word):
        print("Felicidades has ganado el juego")
        break
    
    #si la letra es incorrecta se resta un intento
    else:
      chances -= 1
      print("Letra Incorrecta, te quedan ", chances, " intentos")

  #si se caban las opotunidades se termina el jeugo
  if chances == 0:
    print("Lo siento, has perdido el juego. La palabra era ", secret_word)

#se hace el llamado del juego para que inicie
game()