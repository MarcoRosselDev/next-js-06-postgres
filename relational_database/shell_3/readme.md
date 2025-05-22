echo some command > filename.txt    ------------> guarda en un archivo el comando   
echo another command >> filename.txt -----------> no sobreescribira el archivo, seguira en otra linea   
echo bash 1> stdout.txt ------------------------> 1> standar output

error_command > filename2.txt ------------------> los errores se guardan de forma diferente   
error_command 2> stderr.txt --------------------> 2> guardan errores (stderr = standar errors)   

stdin (standard in)

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

# cat
tipe something then -----------> control+c   
cat filename.txt -------------> lee el documento tipeado




echo marco | ./script.sh 2> stderr.txt   
echo marco | ./script.sh 2> stderr.txt 1> stdout.txt   




# wc  (word count)
man wc -------------> ver el manual de el comando wc, para ver que hace   
wc filename -----> It showed you how many lines were in the file, how many words, and how many bytes  
27  332 1744   
wc -l kitty_ipsum_1.txt ---------> -l = muestrame solo cuantas lineas   
27   
wc -w kitty_ipsum_1.txt ----------> -w = cuantas palabras (words)
332
