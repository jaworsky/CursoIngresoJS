#include <stdio.h>
#include <stdlib.h>

int main()
{

    int numero1;
    int numero2;
    int numero3;
    int promedio;

    printf("Ingrese un numero 1: ");
    scanf("%d",&numero1);

    printf("Ingrese el numero 2: ");
    scanf("%d", &numero2);

    printf("Ingrese el numero 3: ");
    scanf("%d",&numero3);

    promedio=(numero1+numero2+numero3)/3;

    printf("El promedio es: %d",promedio);


    return 0;

}
