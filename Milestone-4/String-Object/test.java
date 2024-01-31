package JavaApnaCollege.Java;

import java.util.Scanner;

public class Arrays2D
{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int rows = sc.nextInt();
        int colm = sc.nextInt();

        int[][] numbers = new int[rows][colm];

        //input
        //rows
        for (int i=0; i<rows; i++){
            //column
            for (int j=0; j<colm; j++){
                numbers[i][j] = sc.nextInt();
            }
        }
      int x = sc.nextInt();

        //output
        for (int i=0; i<rows; i++){
            for (int j=0; j<colm; j++){
               // System.out.print(numbers[i][j] + " ");
               if (numbers[i][j] == x){
                   System.out.println(i +", "+ j);
               }
            }
           // System.out.println();
        }




    }



}
