#Convertir numeros de 3 digitos a palabras

#se ingresa el numero a convertir
number = int(input("Introduce un numero de 3 cifras porfavor: "))

#aqui se obtiene a partir de las operaciones los numeros para centenas, decenas y unidades
centena_numero = number // 100
decena_numero = (number % 100) // 10
unidad_numero = (number % 100) % 10

# listas basicas para la convesion de numero a palabras
unidad = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
decena = ['', 'dieci', 'veinti', 'treinta y ', 'cuarenta y ', 'cincuenta y ', 'sesenta y ', 'setenta y ', 'ochenta y ', 'noventa y ']
centena = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

#Casos espaciales en la conversion

# para escribir los numero del 11 al 15
if decena_numero == 1 and 0 < unidad_numero < 6:
  decena = ['', 'once', 'doce', 'trece', 'catorce', 'quince']
  text = '{} {}'.format(centena[centena_numero], decena[unidad_numero])

#para escribir los numeros si no tienen unidades
elif unidad_numero == 0 and decena_numero != 0:
  decena = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
  text = '{} {}'.format(centena[centena_numero], decena[decena_numero])

#escribir el 100
elif centena_numero == 1 and decena_numero == 0 and unidad_numero == 0: 
  text = 'cien'

#caso general
else:
  text = '{} {}{}'.format(centena[centena_numero], decena[decena_numero], unidad[unidad_numero])

#impresion del numero en palabras
print("El numero en texto es: ", text)