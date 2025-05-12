# terminal 2
para correr este proyecto (questionnaire.sh) se deve ejecutar Git Bash terminal
por que?
por que el comando sh es de linux, pero Git Bash terminal tiene soporte par shell
la otra opcion es instalar un subsistema linux para window o macOS

touch file.sh = crear un archivo .sh (shell)
sh file.sh = ejecuta el archivo sh
bash file.sh = lo mismo
which bash = nos dice la url donde esta almazenado bash, like= '/usr/bin/bash'

ls -l = lista detallada incluido los archivos ocultos
chmod +x questionnaire.sh = permiso de ejecutar los archivos inijecutables

man echo = man es de manual, man echo es para ver si tenemos ayudar (--help) del comando echo
help = lista de comandos que se pueden ejecutar en la terminal
man <COMMAND> = manual de cualquier comando que queramos
help <COMMAND> = lo mismo pero es otra alternativa

#### if

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

#### if else

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```


```js
/* Now it printed false. Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets ([[ ... ]]) of your if with -eq (equal), -ne (not equal), -lt (less than), -le (less than or equal), -gt (greater than), -ge (greater than or equal). Change your if condition to check if your first argument is less than 5. */
```

[[ EXPRESSION ]]
```js
/* help [[ expression ]]
[[ ... ]]: [[ expression ]]
    Execute conditional command.
    
    Returns a status of 0 or 1 depending on the evaluation of the conditional
    expression EXPRESSION.  Expressions are composed of the same primaries used
    by the `test' builtin, and may be combined using the following operators:
    
      ( EXPRESSION )    Returns the value of EXPRESSION
      ! EXPRESSION              True if EXPRESSION is false; else false
      EXPR1 && EXPR2    True if both EXPR1 and EXPR2 are true; else false
      EXPR1 || EXPR2    True if either EXPR1 or EXPR2 is true; else false
    
    When the `==' and `!=' operators are used, the string to the right of
    the operator is used as a pattern and pattern matching is performed.
    When the `=~' operator is used, the string to the right of the operator
    is matched as a regular expression.
    
    The && and || operators do not evaluate EXPR2 if EXPR1 is sufficient to
    determine the expression's value.
    
    Exit Status:
    0 or 1 depending on value of EXPRESSION. */
```

#### test manual information

```js
/* help test
test: test [expr]
    Evaluate conditional expression.
    
    Exits with a status of 0 (true) or 1 (false) depending on
    the evaluation of EXPR.  Expressions may be unary or binary.  Unary
    expressions are often used to examine the status of a file.  There
    are string operators and numeric comparison operators as well.
    
    The behavior of test depends on the number of arguments.  Read the
    bash manual page for the complete specification.
    
    File operators:
    
      -a FILE        True if file exists.
      -b FILE        True if file is block special.
      -c FILE        True if file is character special.
      -d FILE        True if file is a directory.
      -e FILE        True if file exists.
      -f FILE        True if file exists and is a regular file.
      -g FILE        True if file is set-group-id.
      -h FILE        True if file is a symbolic link.
      -L FILE        True if file is a symbolic link.
      -k FILE        True if file has its `sticky' bit set.
      -p FILE        True if file is a named pipe.
      -r FILE        True if file is readable by you.
      -s FILE        True if file exists and is not empty.
      -S FILE        True if file is a socket.
      -t FD          True if FD is opened on a terminal.
      -u FILE        True if the file is set-user-id.
      -w FILE        True if the file is writable by you.
      -x FILE        True if the file is executable by you.
      -O FILE        True if the file is effectively owned by you.
      -G FILE        True if the file is effectively owned by your group.
      -N FILE        True if the file has been modified since it was last read.
    
      FILE1 -nt FILE2  True if file1 is newer than file2 (according to
                       modification date).
    
      FILE1 -ot FILE2  True if file1 is older than file2.
    
      FILE1 -ef FILE2  True if file1 is a hard link to file2.
    
    All file operators except -h and -L are acting on the target of a symbolic
    link, not on the symlink itself, if FILE is a symbolic link.
    
    String operators:
    
      -z STRING      True if string is empty.
    
      -n STRING
         STRING      True if string is not empty.
    
      STRING1 = STRING2
                     True if the strings are equal.
      STRING1 != STRING2
                     True if the strings are not equal.
      STRING1 < STRING2
                     True if STRING1 sorts before STRING2 lexicographically.
      STRING1 > STRING2
                     True if STRING1 sorts after STRING2 lexicographically.
    
    Other operators:
    
      -o OPTION      True if the shell option OPTION is enabled.
      -v VAR         True if the shell variable VAR is set.
      -R VAR         True if the shell variable VAR is set and is a name
                     reference.
      ! EXPR         True if expr is false.
      EXPR1 -a EXPR2 True if both expr1 AND expr2 are true.
      EXPR1 -o EXPR2 True if either expr1 OR expr2 is true.
    
      arg1 OP arg2   Arithmetic tests.  OP is one of -eq, -ne,
                     -lt, -le, -gt, or -ge.
    
    Arithmetic binary operators return true if ARG1 is equal, not-equal,
    less-than, less-than-or-equal, greater-than, or greater-than-or-equal
    than ARG2.
    
    See the bash manual page bash(1) for the handling of parameters (i.e.
    missing parameters).
    
    Exit Status:
    Returns success if EXPR evaluates to true; fails if EXPR evaluates to
    false or an invalid argument is given. */
```

#### for

```sh
for (( i = 10; i > 0; i-- ))
do
  echo $i
done
```

#### comentario de varias lineas
```
: '
comentario de   
varias lineas
'
```

#### saltos de linea en titulos de shell

echo -e "\n~~ Countdown Timer ~~\n"

#### env variables comand
printenv
<!-- log env -->
echo $ENV_VARIABLE

<!-- todas las variables de entorno -->
declare -p

```sh
-eq = igual (equal)
-ne = no igual (not equal)
-lt = menor que (less than)
-le = menor o igual que (less than or equal)
-gt = mayor que (greater than)
-ge = mayor o igual que (greater then or qual)
```

#### function

```js
function FUNCTION_NAME() {
  STATEMENTS
}
/* para llamarlo */

FUNCTION_NAME
/* para pasarle argumentos */

FUNCTION_NAME arg1 arg2
```

#### until (similar al while loop)

```sh
until [[ CONDITION ]]
do
  STATEMENTS
done
```

#### patrones match

[[ 'hello world' =~ 'lo wor' ]]; echo $?
<!-- podemos usar regex tmbn (expresiones regulares
por ejemplo:

[[ "hello world" =~ ^h.+d$ ]]; echo $?

para preguntar si comienza con la letra h y termina con la letra d
) -->