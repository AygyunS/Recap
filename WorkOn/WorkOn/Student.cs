using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOn
{

    class Student
    {
        public int id;
        public String name;
        public static String uni = "VTU";
        public static int count = 0;

        public Student(int i, String n)
        {
            this.id = i;
            this.name = n;
            Console.WriteLine("New student was registed");
            count++;
        }
        ~Student()
        {
            Console.WriteLine("Destructor");
        }
        public void insert(int i, String n)
        {
            id = i;
            name = n;
        }
        public void display()
        {
            System.Console.WriteLine(id + " - " + name);
        }
    }
}
