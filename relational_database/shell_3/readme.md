### salida de datos

echo some command > filename.txt    ------------> guarda en un archivo el comando   
echo another command >> filename.txt -----------> no sobreescribira el archivo, seguira en otra linea   
echo bash 1> stdout.txt ------------------------> 1> standar output

error_command > filename2.txt ------------------> los errores se guardan de forma diferente   
error_command 2> stderr.txt --------------------> 2> guardan errores (stderr = standar errors)   

********

### ingreso de datos
stdin (standard in) ingresos de datos

read NOMBRE_VARIABLE (Enter >>) ------------> ingresar valor de la variable   
echo $NOMBRE_VARIABLE (Enter >>) -----------> print variable creada   

standar in (stdin)
<command> < <filename_for_stdin>
read NAME < name.txt -----------------> name.txt contiene el string "marco", se asigna a la variable NAME

pipe ( | ) ----------> asina un comando a otro   
std out | std in   
This will take the stdout from command_1 and use it as the stdin for command_2   
<command_1> | <command_2>  
echo marco | read NAME

> NOTA: pipe line no guarda las variable en este caso NAME por que se ejecuta en una terminal alterna, se ejecuta en un subshell o subprocess.  La variable se guardo en esa shell y no afecta la shell principal.

# cat
tipe something then -----------> control+c   
cat filename.txt -------------> lee el documento tipeado




echo marco | ./script.sh 2> stderr.txt   
echo marco | ./script.sh 2> stderr.txt 1> stdout.txt   




# wc  (word count)
man wc -------------> ver el manual de el comando wc, para ver que hace   
wc filename -----> muestra cuantas lineas, palabras, y cuantos bytes tiene el archivo.x  
 
27  332 1744 kitty_ipsum_1.txt

|27 | 332 |1744 | filename.extencions |
|---|----|------|---------------------|
|lineas| palabras| bytes| nobre archivo|


wc -l kitty_ipsum_1.txt ---------> -l = muestrame solo cuantas lineas   
27   
wc -w kitty_ipsum_1.txt ----------> -w = cuantas palabras (words)   
332  
wc -m kitty_ipsum_1.txt ----------> -m = cuantos caracteres   
1738  

para ver la cantidad de caracteres en vez de los bytes aplicamos la bandera -m
ver manual de wc para ver todas las banderas

man wc

******
<command> < <input_filename> >> <output_filename>   
wc -m < kitty_ipsum_1.txt >> kitty_info.txt

******

# grep "busca patrones de texto en un archivo"   
grep es un comando para buscar un patron de texto.
sintaxis: grep '<pattern>' <filename>
ejemplo para buscar el patron de texto "meow" en kitty_ipsum_1.txt
grep 'meow' kitty_ipsum_1.txt

output:
hide from vacuum cleaner meow for catnip and act crazy steal
shirt howl or gimme attention meow bye and eat grass, meow, and
i stare at it i meow at it i do a wiggle come here birdy ears
eat sniff catnip meow meowzer. good morning sunshine. lick human chase
the pig around the house meow run in circles. always ensure to

esto muestra todas las lineas donde aparece meow

```terminal
man grep

// mostrar con color :
grep 'meow' kitty_ipsum_1.txt --color

// output
hide from vacuum cleaner meow for catnip and act crazy steal
shirt howl or gimme attention meow bye and eat grass, meow, and
i stare at it i meow at it i do a wiggle come here birdy ears
eat sniff catnip meow meowzer. good morning sunshine. lick human chase
the pig around the house meow run in circles. always ensure to

// lo mismo pero enumerar las listas:
grep 'meow' kitty_ipsum_1.txt --color -n  
grep 'meow[a-z]*' kitty_ipsum_1.txt --color -n  
//output:
1:hide from vacuum cleaner meow for catnip and act crazy steal
4:shirt howl or gimme attention meow bye and eat grass, meow, and
10:i stare at it i meow at it i do a wiggle come here birdy ears
22:eat sniff catnip meow meowzer. good morning sunshine. lick human chase
23:the pig around the house meow run in circles. always ensure to
```

# sed "reemplaza un patron por otro en un archivo"
sintaxis:  

sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>  

name.txt:   
freeCodeCamp   

sed 's/r/2/' name.txt
f2eeCodeCamp

sed 's/freecodecamp/f233C0d3C@mp/' name.txt
freeCodeCamp // no lo reemplaso por las mayusculas no coinsiden, para ignorarlo aplicamos banderas en el ultimo / de sad:

// i = ignorar las mayusculas  
sed 's/freecodecamp/f233C0d3C@mp/i' name.txt
f233C0d3C@mp

// cat y pipe method
cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i' 
f233C0d3C@mp

// campbiar
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'

grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt 

# mulitiples sed
sed 's/<pattern_1>/<replacement_1>/; s/<pattern_2>/<replacement_2>/'
sed 's/<pattern_1>/<replacement_1>/; s/<pattern_2>/<replacement_2>/'
cat $1 | sed 's/catnip/dogchow/; s/cat/dog/; s/meow/woof/'

# diff (muestra las diferencias entre archivos)

diff <archivo1> <archivo2>