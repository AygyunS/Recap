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

        public Student(int i, String n)
        {
            id = i;
            name = n;
            Console.WriteLine("New student was registed");
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
