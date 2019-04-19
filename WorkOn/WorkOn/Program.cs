using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOn
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] arr = new int[10] { 56, 1, 99, 67, 89, 23, 44, 12, 78, 34 };
            //Sorting.printSort(arr);
            //Sorting.quickSort(arr, 0, arr.Length - 1);
            //Sorting.printSort(arr);
            //Console.WriteLine();
            //Console.WriteLine();

            Student st1 = new Student();
           Student st2 = new Student();
            Student st3 = new Student();

            st1.insert(1, "asdasd");
            st2.insert(2, "Katq Noa");
            st3.insert(3, "2312 Noa");

            st1.display();

            st2.insert(2, "Katq Noa");
            st3.insert(3, "Will Sm");
            Console.WriteLine(Student.uni);
            Student.uni = "VTU-1";
            Console.WriteLine(Student.uni);
            st2.display();
            st3.display();

            st1.Pod = "DEV";

            Console.WriteLine(st1.Pod);


            Console.WriteLine("Counts of students: " + Student.Count);

            Programmer pr1 = new Programmer();
            pr1.insert(1, "NE");

            pr1.display();



        }
    }
}
