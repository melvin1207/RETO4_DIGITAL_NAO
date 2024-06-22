#funcion para validar un numero
def validar(message):
  while True:
    try:
      data = float(input("Coloca " + message + ": "))
      return data
    except ValueError:
      print("Error, ingrese un número")

#variable para manejar el ciclo while
option = 0

#variable del saldo
saldo = 50

#se hace un ciclo mientras no se presione la opión salir
while option != 4:
  #menu de opciones
  print(" ")
  print("Bienvenido al menu de opciones")
  print("1. Consultar Saldo")
  print("2. Recargar")
  print("3. Transferir")
  print("4. Salir")
  
  #se selecciona una opcioón y se asigna a la variable de control
  opcion = input("Seleccione una opcion: ")
  option = int(opcion)

  #opciones para el menu
  # se hace una consulta de saldo
  if opcion == "1":
    print("Su saldo es de: ", saldo)

  # se hace una recarga de saldo
  elif opcion == "2":
    recarga = validar("el saldo que quieres ingresar")
    saldo = saldo + recarga
    print ("Su saldo es de: ", saldo)
  
  #se hace una trasferencia de saldo
  elif opcion == "3":
    transferencia = validar("el monto que quieres transferir")
    numero = validar("el numero al que quieres transferir")
    print("Listo ", transferencia," de saldo se transfirieron al numero: ", numero)
    saldo = saldo - transferencia
    print("Ahora tu saldo es: ", saldo)